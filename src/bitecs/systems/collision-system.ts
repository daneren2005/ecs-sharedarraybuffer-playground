import { defineQuery, hasComponent } from 'bitecs';
import distance from '@/math/distance';
import computeAngle from '@/math/compute-angle';
import components from '../components';
import { GameWorld } from './game-world';

export default function collisionSystem(_context?: unknown) {
	const position = components.position;
	const velocity = components.velocity;
	const controlled = components.controlled;
	const controller = components.controller;
	const health = components.health;
	let movingQuery = defineQuery([velocity]);

	// 60fps = 0.016 so 30fps is roughly 0.032 so basically every other frame
	const TIME_BETWEEN_TICKS = 0.03;
	let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
	let ships: Array<number> = [];
	let minCountToUpdate = 0;
	return (ecs: GameWorld, delta: number) => {
		timeSinceLastTick += delta;
		if(timeSinceLastTick > TIME_BETWEEN_TICKS && ships.length === 0) {
			ships = movingQuery(ecs).filter(eid => !health.dead[eid]);
			minCountToUpdate = ships.length / 2;
			timeSinceLastTick = 0;
		}

		let spatialIndex = ecs.spatialIndex;
		let spatialEids = ecs.spatialEids;
		if(!spatialIndex || !spatialEids) {
			return ecs;
		}
		let start = performance.now();

		// Use spatial index to find overlapping entities.
		for(let i = 0; i < ships.length; i++) {
			let eid = ships[i];
			let entitiesInRange = spatialIndex.search(
				position.x[eid],
				position.y[eid],
				position.x[eid] + position.width[eid],
				position.y[eid] + position.height[eid]
			).map(index => spatialEids[index]).filter((otherEid: number) => otherEid !== eid);
			let shipColor = controller.color[controlled.owner[eid]];
			let enemiesInRange = entitiesInRange.filter((otherEid: number) => {
				// Ship
				if(hasComponent(ecs, controlled, otherEid)) {
					let stationEid = controlled.owner[otherEid];
					return controller.color[stationEid] !== shipColor;
				}
				// Station
				else if(hasComponent(ecs, controller, otherEid)) {
					return controller.color[otherEid] !== shipColor;
				} else {
					return false;
				}
			});
			let collisions = enemiesInRange.filter((otherEid: number) => distance(position.x[otherEid], position.y[otherEid], position.x[eid], position.y[eid]) < Math.max(position.width[eid], position.width[otherEid]));
			if(collisions.length) {
				collide(ecs, ships, eid, collisions[0]);

				velocity.x[eid] = -velocity.x[eid];
				velocity.y[eid] = -velocity.y[eid];
				position.angle[eid] = computeAngle(velocity.x[eid], velocity.y[eid]);
			}

			if(i % 10 === 0 && i > minCountToUpdate) {
				if(performance.now() - start > (delta * 1_000 / 2)) {
					ships = ships.slice(i);
					return ecs;
				}
			}
		}

		ships = [];
		return ecs;
	};
}

function collide(ecs: GameWorld, ships: Array<number>, eid: number, target: number) {
	if(!canTakeDamage(eid) || !canTakeDamage(target)) {
		return;
	}

	let enemyWorth = 1;
	if(hasComponent(ecs, components.controller, target)) {
		enemyWorth = ships.filter(shipEid => components.controlled.owner[shipEid] === target).length;
	}

	takeDamage(ecs, ships, eid, 1);
	takeDamage(ecs, ships, target, 1);

	const controlled = components.controlled;
	if(components.health.dead[target]) {
		let stationEid = controlled.owner[eid];
		components.controller.money[stationEid] += enemyWorth;
	}
	if(components.health.dead[eid]) {
		// Ship
		if(hasComponent(ecs, controlled, target)) {
			let stationEid = controlled.owner[target];
			components.controller.money[stationEid] += 1;
		}
		// Station
		else if(hasComponent(ecs, components.controller, target)) {
			components.controller.money[target] += 1;
		}
	}
}
function takeDamage(ecs: GameWorld, ships: Array<number>, eid: number, damage: number) {
	const health = components.health;
	health.shields[eid] -= damage;
	health.timeSinceTakenDamage[eid] = 0;
	if(health.shields[eid] < 0) {
		health.dead[eid] = 1;

		// TODO: Removing makes it so our change query doesn't detect that these are gone
		// world.removeEntity(eid);
		if(hasComponent(ecs, components.controller, eid)) {
			let controlledShips = ships.filter(shipEid => components.controlled.owner[shipEid] === eid);
			controlledShips.forEach(shipEid => {
				health.dead[shipEid] = 1;
			});
		}
	}
}

function canTakeDamage(eid: number) {
	return components.health.timeSinceTakenDamage[eid] >= 0.2;
}