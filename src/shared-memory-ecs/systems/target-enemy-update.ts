import Flatbush from 'flatbush';
import type { ComponentSystemWorld, EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import type { Components } from '../components';
import euclideanDistance from '@/math/euclidean-distance';
import { POSITION_X, POSITION_Y, POSITION_WIDTH, POSITION_HEIGHT } from '../components/position';
import { CONTROLLER_COLOR } from '../components/controller';
import { CONTROLLED_OWNER } from '../components/controlled';
import { ATTACK_TARGET } from '../components/attack';

interface SpatialDatum {
	eid: number
	x: number
	y: number
	width: number
	height: number
}
interface StationDatum {
	eid: number
	x: number
	y: number
	color: number
}
// Per-run scratch computed once in preRun and read by every per-entity update in the same run.
type Scratch = ComponentSystemWorld & {
	spatialIndex?: Flatbush
	spatialData?: Array<SpatialDatum>
	colorByEid?: Record<number, number>
	stations?: Array<StationDatum>
};

// Assigns each ship a target: the nearest enemy (different colour) within a small search box, widened once if
// nothing is close, and finally falling back to the nearest enemy station so idle ships always have somewhere
// to go.  Two library queries feed it: `collidable` (everything with a position + health, i.e. every ship and
// station) drives the spatial index, and `stations` drives the fallback.
export const targetEnemyUpdate: EntityUpdateFunction<Components> = (world, entityId, components) => {
	const scratch = world as Scratch;
	const attack = components.attack;
	const position = components.position;
	if(!attack || !position || !scratch.spatialIndex || !scratch.spatialData || !scratch.colorByEid) {
		return;
	}

	const shipColor = scratch.colorByEid[entityId];
	const x = position[POSITION_X];
	const y = position[POSITION_Y];
	const width = position[POSITION_WIDTH];
	const height = position[POSITION_HEIGHT];

	// Try a tight box first, then a wider one before giving up on nearby enemies.
	let enemies = getEnemiesInRange(scratch, x - 50, y - 50, x + width + 50, y + height + 50, entityId, shipColor);
	if(enemies.length === 0) {
		enemies = getEnemiesInRange(scratch, x - 150, y - 150, x + width + 150, y + height + 150, entityId, shipColor);
	}

	enemies.sort((a, b) => euclideanDistance(a.x, a.y, x, y) - euclideanDistance(b.x, b.y, x, y));
	let targetEid = enemies[0]?.eid ?? 0;

	// Nothing nearby: head for the nearest enemy station.
	if(!targetEid && scratch.stations) {
		let nearest: StationDatum | null = null;
		let nearestDistance = Infinity;
		for(let station of scratch.stations) {
			if(station.color === shipColor) {
				continue;
			}

			const distance = euclideanDistance(station.x, station.y, x, y);
			if(distance < nearestDistance) {
				nearestDistance = distance;
				nearest = station;
			}
		}
		targetEid = nearest?.eid ?? 0;
	}

	attack[ATTACK_TARGET] = targetEid;
};

// Rebuilds the spatial index + colour lookup once per run, before any ship is targeted.
targetEnemyUpdate.preRun = (world, entities, queries) => {
	const scratch = world as Scratch;
	const collidable = queries.collidable ?? [];
	const stationEntities = queries.stations ?? [];

	// Station eid -> its colour, so a ship's colour can be resolved through the station that owns it.
	const stationColor: Record<number, number> = {};
	const stations: Array<StationDatum> = [];
	for(let station of stationEntities) {
		const controller = station.components.controller;
		const position = station.components.position;
		if(!controller || !position) {
			continue;
		}

		stationColor[station.entityId] = controller[CONTROLLER_COLOR];
		stations.push({
			eid: station.entityId,
			x: position[POSITION_X],
			y: position[POSITION_Y],
			color: controller[CONTROLLER_COLOR]
		});
	}

	const colorByEid: Record<number, number> = {};
	const spatialData: Array<SpatialDatum> = [];
	for(let entity of collidable) {
		const position = entity.components.position;
		if(!position) {
			continue;
		}

		const controller = entity.components.controller;
		const controlled = entity.components.controlled;
		// -1 is a colour no station uses, so orphaned ships (owner already gone) match nobody.
		colorByEid[entity.entityId] = controller ? controller[CONTROLLER_COLOR]
			: controlled ? stationColor[controlled[CONTROLLED_OWNER]] ?? -1
				: -1;

		spatialData.push({
			eid: entity.entityId,
			x: position[POSITION_X],
			y: position[POSITION_Y],
			width: position[POSITION_WIDTH],
			height: position[POSITION_HEIGHT]
		});
	}

	scratch.colorByEid = colorByEid;
	scratch.spatialData = spatialData;
	scratch.stations = stations;
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

function getEnemiesInRange(scratch: Scratch, minX: number, minY: number, maxX: number, maxY: number, selfEid: number, shipColor: number): Array<SpatialDatum> {
	if(!scratch.spatialIndex || !scratch.spatialData || !scratch.colorByEid) {
		return [];
	}

	const colorByEid = scratch.colorByEid;
	const spatialData = scratch.spatialData;
	return scratch.spatialIndex.search(minX, minY, maxX, maxY)
		.map(i => spatialData[i])
		.filter(datum => datum.eid !== selfEid && colorByEid[datum.eid] !== shipColor);
}
