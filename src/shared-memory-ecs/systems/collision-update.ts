import Flatbush from 'flatbush';
import { killEntityWorker, DEAD_INDEX } from '@daneren2005/shared-memory-ecs';
import { loadFloat32, storeFloat32, subtractAtomicFloat } from '@daneren2005/shared-memory-objects';
import type { ComponentSystemCallbacks, ComponentSystemWorld, EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import type { Components, ComponentArrays } from '../components';
import computeAngle from '@/math/compute-angle';
import distance from '@/math/distance';
import { POSITION_X, POSITION_Y, POSITION_WIDTH, POSITION_HEIGHT, POSITION_ANGLE } from '../components/position';
import { VELOCITY_X, VELOCITY_Y } from '../components/velocity';
import { HEALTH_SHIELDS, HEALTH_TIME_SINCE_DAMAGE, HEALTH_DAMAGE_COOLDOWN } from '../components/health';
import { CONTROLLER_COLOR, CONTROLLER_MONEY } from '../components/controller';
import { CONTROLLED_OWNER } from '../components/controlled';

interface SpatialDatum {
	eid: number
	x: number
	y: number
	width: number
	height: number
}
// The component blocks of one collidable entity, gathered so any entity (not just the one being updated) can
// be read and mutated by eid - which is what lets a ship damage / kill / pay out to another entity.
interface Blocks {
	position: Float32Array
	health: Float32Array
	entity: Uint32Array
	controller?: Int32Array
	controlled?: Uint32Array
}
type Scratch = ComponentSystemWorld & {
	spatialIndex?: Flatbush
	spatialData?: Array<SpatialDatum>
	blocksByEid?: Record<number, Blocks>
	colorByEid?: Record<number, number>
	shipsByStation?: Record<number, Array<number>>
};

// Resolves ship-vs-enemy collisions.  For each ship it looks up overlapping entities in the per-run spatial
// index, and on a real overlap with an enemy (different colour) both sides take a point of shield damage,
// the killer's owner is paid the bounty, dead entities (and a dead station's whole fleet) are removed, and the
// ship bounces away.  The `collidable` query supplies every ship + station so cross-entity effects can reach
// any of them by eid.
export const collisionUpdate: EntityUpdateFunction<Components, Pick<ComponentArrays, 'velocity'>> = (world, entityId, components, queries, callbacks) => {
	const scratch = world as Scratch;
	const velocity = components.velocity;
	if(!scratch.spatialIndex || !scratch.spatialData || !scratch.blocksByEid || !scratch.colorByEid) {
		return;
	}

	const self = scratch.blocksByEid[entityId];
	if(!self) {
		return;
	}

	const position = self.position;
	const x = position[POSITION_X];
	const y = position[POSITION_Y];
	const width = position[POSITION_WIDTH];
	const height = position[POSITION_HEIGHT];
	const shipColor = scratch.colorByEid[entityId];

	const spatialData = scratch.spatialData;
	const inRange = scratch.spatialIndex.search(x, y, x + width, y + height).map(i => spatialData[i]);
	const collision = inRange.find(datum => {
		return datum.eid !== entityId
			&& scratch.colorByEid![datum.eid] !== shipColor
			&& distance(datum.x, datum.y, x, y) < Math.max(width, datum.width);
	});
	if(!collision) {
		return;
	}

	collide(scratch, callbacks, entityId, collision.eid);

	velocity[VELOCITY_X] = -velocity[VELOCITY_X];
	velocity[VELOCITY_Y] = -velocity[VELOCITY_Y];
	position[POSITION_ANGLE] = computeAngle(velocity[VELOCITY_X], velocity[VELOCITY_Y]);
};

collisionUpdate.preRun = (world, entities, queries) => {
	const scratch = world as Scratch;
	const collidable = queries.collidable ?? [];

	const blocksByEid: Record<number, Blocks> = {};
	const colorByEid: Record<number, number> = {};
	const shipsByStation: Record<number, Array<number>> = {};
	const spatialData: Array<SpatialDatum> = [];

	// First pass: index everything and record each station's own colour so ships can inherit it.
	const stationColor: Record<number, number> = {};
	for(let entity of collidable) {
		const position = entity.components.position;
		const health = entity.components.health;
		const entityBlock = entity.components.entity;
		if(!position || !health || !entityBlock) {
			continue;
		}

		// The library types query components generically as ComponentTypedArray; narrow each to the concrete
		// array type its definition uses here, once, so the rest of the file needs no casts.
		blocksByEid[entity.entityId] = {
			position: position as Float32Array,
			health: health as Float32Array,
			entity: entityBlock as Uint32Array,
			controller: entity.components.controller as Int32Array | undefined,
			controlled: entity.components.controlled as Uint32Array | undefined
		};
		if(entity.components.controller) {
			stationColor[entity.entityId] = entity.components.controller[CONTROLLER_COLOR];
		}

		spatialData.push({
			eid: entity.entityId,
			x: position[POSITION_X],
			y: position[POSITION_Y],
			width: position[POSITION_WIDTH],
			height: position[POSITION_HEIGHT]
		});
	}

	// Second pass: resolve every entity's colour (ships via their owning station) and group ships by station.
	for(let eidKey of Object.keys(blocksByEid)) {
		const eid = Number(eidKey);
		const blocks = blocksByEid[eid];
		if(blocks.controller) {
			colorByEid[eid] = blocks.controller[CONTROLLER_COLOR];
		} else if(blocks.controlled) {
			const owner = blocks.controlled[CONTROLLED_OWNER];
			colorByEid[eid] = stationColor[owner] ?? -1;
			(shipsByStation[owner] ?? (shipsByStation[owner] = [])).push(eid);
		} else {
			colorByEid[eid] = -1;
		}
	}

	scratch.blocksByEid = blocksByEid;
	scratch.colorByEid = colorByEid;
	scratch.shipsByStation = shipsByStation;
	scratch.spatialData = spatialData;
	if(spatialData.length > 0) {
		const index = new Flatbush(spatialData.length);
		for(let datum of spatialData) {
			index.add(datum.x, datum.y, datum.x + datum.width, datum.y + datum.height);
		}
		index.finish();
		scratch.spatialIndex = index;
	} else {
		scratch.spatialIndex = undefined;
	}
};

function collide(scratch: Scratch, callbacks: ComponentSystemCallbacks<Components>, eid: number, targetEid: number) {
	const self = scratch.blocksByEid![eid];
	const target = scratch.blocksByEid![targetEid];
	if(!self || !target || !canTakeDamage(self) || !canTakeDamage(target)) {
		return;
	}

	// A station is worth its whole fleet; a ship is worth one.
	let enemyWorth = 1;
	if(target.controller) {
		enemyWorth = scratch.shipsByStation?.[targetEid]?.length ?? 0;
	}

	takeDamage(scratch, callbacks, eid, 1);
	takeDamage(scratch, callbacks, targetEid, 1);

	if(isDead(target)) {
		payStation(scratch, self.controlled?.[CONTROLLED_OWNER], enemyWorth);
	}
	if(isDead(self)) {
		if(target.controlled) {
			payStation(scratch, target.controlled[CONTROLLED_OWNER], 1);
		} else if(target.controller) {
			// spawnShipUpdate spends this same station's money on another thread, so pay atomically.
			Atomics.add(target.controller, CONTROLLER_MONEY, 1);
		}
	}
}

function takeDamage(scratch: Scratch, callbacks: ComponentSystemCallbacks<Components>, eid: number, damage: number) {
	const blocks = scratch.blocksByEid![eid];
	if(!blocks) {
		return;
	}

	const health = blocks.health;
	// updateHealthTimersUpdate regenerates this same shield value on another worker thread, so the subtract has
	// to be an atomic read-modify-write; subtractAtomicFloat returns the resulting total so we can tell whether
	// this hit was the killing blow off the value we actually wrote (not a re-read that regen may have bumped).
	// -Infinity as the floor disables its clamp so shields are still allowed to cross below zero.
	const remainingShields = subtractAtomicFloat(health, HEALTH_SHIELDS, damage, -Infinity);
	storeFloat32(health, HEALTH_TIME_SINCE_DAMAGE, 0);
	if(remainingShields < 0) {
		kill(callbacks, eid, blocks);

		// A destroyed station takes its whole fleet down with it.
		if(blocks.controller) {
			for(let shipEid of scratch.shipsByStation?.[eid] ?? []) {
				const ship = scratch.blocksByEid![shipEid];
				if(ship) {
					kill(callbacks, shipEid, ship);
				}
			}
		}
	}
}

function kill(callbacks: ComponentSystemCallbacks<Components>, eid: number, blocks: Blocks) {
	// killEntityWorker only needs the entity block to flag it dead; it reports the death back so the main
	// thread runs the same cleanup killEntity would.
	killEntityWorker(eid, { entity: blocks.entity }, callbacks);
}

function payStation(scratch: Scratch, stationEid: number | undefined, amount: number) {
	if(stationEid === undefined) {
		return;
	}

	const station = scratch.blocksByEid![stationEid];
	if(station?.controller) {
		// Other ships in this same run and spawnShipUpdate on another thread touch this money too.
		Atomics.add(station.controller, CONTROLLER_MONEY, amount);
	}
}

function isDead(blocks: Blocks): boolean {
	return blocks.entity[DEAD_INDEX] === 1;
}
function canTakeDamage(blocks: Blocks): boolean {
	// timeSinceTakenDamage is advanced by updateHealthTimersUpdate on another thread; read it atomically.
	// damageCooldown is immutable config, so a plain read is fine.
	return loadFloat32(blocks.health, HEALTH_TIME_SINCE_DAMAGE) >= blocks.health[HEALTH_DAMAGE_COOLDOWN];
}
