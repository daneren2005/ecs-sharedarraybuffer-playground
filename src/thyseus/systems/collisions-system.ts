import { Entity, Mut, MutDescriptor, Query, QueryDescriptor, Res, ResourceDescriptor } from 'thyseus';
import Position from '../components/position';
import { Quadtree } from '@timohausmann/quadtree-ts/src/Quadtree';
import { Rectangle } from '@timohausmann/quadtree-ts/src/Rectangle';
import Bounds from '../resources/bounds';
import Velocity from '../components/velocity';
import Faction from '../components/faction';
import distance from '@/math/distance';
import computeAngle from '@/math/compute-angle';

export default function collisionSystem(collisionTargets: Query<[Entity, Position, Faction]>, ships: Query<[Entity, Mut<Position>, Mut<Velocity>, Faction]>, bounds: Res<Bounds>) {
	// Create and populate quadtree
	let quadtree = new Quadtree({
		width: bounds.width,
		height: bounds.height
	});

	for(const [entity, position, faction] of collisionTargets) {
		quadtree.insert(new Rectangle({
			x: position.x,
			y: position.y,
			width: position.width,
			height: position.height,
			data: {
				id: entity.id,
				color: faction.color,
				position: {
					x: position.x,
					y: position.y,
					width: position.width,
					height: position.height
				}
			}
		}));
	}

	for(const [entity, position, velocity, faction] of ships) {
		let entitiesInRange = quadtree.retrieve(new Rectangle({
			x: position.x,
			y: position.y,
			width: position.width,
			height: position.height
		})).map((result: any) => ({ id: result.data.id, color: result.data.color, position: result.data.position })).filter((otherEntity) => otherEntity.id !== entity.id);
		let enemiesInRange = entitiesInRange.filter(otherEntity => {
			return otherEntity.color !== faction.color;
		});
		let collisions = enemiesInRange.filter(otherEntity => distance(otherEntity.position.x, otherEntity.position.y, position.x, position.y) < Math.max(position.width, otherEntity.position.width));
		if(collisions.length) {
			// TODO: Actually do something
			// collide(ships, eid, collisions[0]);

			velocity.x = -velocity.x;
			velocity.y = -velocity.y;
			position.angle = computeAngle(velocity.x, velocity.y);
		}
	}
}
collisionSystem.parameters = [QueryDescriptor([Entity, Position, Faction]), QueryDescriptor([Entity, MutDescriptor(Position), MutDescriptor(Velocity), Faction]), ResourceDescriptor(Bounds)];

/*function collide(ships: Array<number>, eid: number, target: number) {
	if(!canTakeDamage(eid) || !canTakeDamage(target)) {
		return;
	}

	let enemyWorth = 1;
	if(hasComponent(world.components, target, 'controller')) {
		enemyWorth = ships.filter(eid => world.components.controlled.owner[eid] === target).length;
	}

	takeDamage(ships, eid, 1);
	takeDamage(ships, target, 1);

	const controlled = world.components.controlled;
	if(world.components.entity.dead[target]) {
		let stationEid = controlled.owner[eid];
		world.components.controller.money[stationEid] += enemyWorth;
	}
	if(world.components.entity.dead[eid]) {
		// Ship
		if(hasComponent(world.components, target, 'controlled')) {
			let stationEid = controlled.owner[target];
			world.components.controller.money[stationEid] += 1;
		}
		// Station
		else if(hasComponent(world.components, target, 'controller')) {
			world.components.controller.money[target] += 1;
		}
	}
}
function takeDamage(ships: Array<number>, eid: number, damage: number) {
	const health = world.components.health;
	health.shields[eid] -= damage;
	health.timeSinceTakenDamage[eid] = 0;
	if(health.shields[eid] < 0) {
		killEntity(world, eid);

		if(hasComponent(world.components, eid, 'controller')) {
			let controlledShips = ships.filter(shipEid => world.components.controlled.owner[shipEid] === eid);
			controlledShips.forEach(shipEid => {
				killEntity(world, shipEid);
			});
		}
	}
}

function canTakeDamage(eid: number) {
	return Atomics.load(world.components.health.timeSinceTakenDamage, eid) >= 200 * 1_000;
}*/