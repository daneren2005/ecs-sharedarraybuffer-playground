import { defineQuery, hasComponent } from 'bitecs';
import euclideanDistance from '@/math/euclidean-distance';
import components from '../components';
import { GameWorld } from './game-world';

export default function targetEnemySystem(_context?: unknown) {
	const position = components.position;
	const velocity = components.velocity;
	const controlled = components.controlled;
	const controller = components.controller;
	const health = components.health;
	const attack = components.attack;
	let movingQuery = defineQuery([velocity, attack]);
	let controllerQuery = defineQuery([controller]);

	const TIME_BETWEEN_TICKS = 0.2;
	let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
	let movingEntities: Array<number> = [];
	let minCountToUpdate = 0;
	return (ecs: GameWorld, delta: number) => {
		// Run through all of entities eventually, but don't have more than half a frame's time to do a block of them
		timeSinceLastTick += delta;
		if(timeSinceLastTick > TIME_BETWEEN_TICKS && movingEntities.length === 0) {
			movingEntities = movingQuery(ecs).filter(eid => !health.dead[eid]);
			minCountToUpdate = movingEntities.length / (TIME_BETWEEN_TICKS / delta);
			timeSinceLastTick = 0;
		}

		let spatialIndex = ecs.spatialIndex;
		let spatialEids = ecs.spatialEids;
		if(!spatialIndex || !spatialEids) {
			return ecs;
		}
		let start = performance.now();

		// Use spatial index to find nearby enemies.
		for(let i = 0; i < movingEntities.length; i++) {
			let eid = movingEntities[i];
			let shipColor = controller.color[controlled.owner[eid]];

			// Try to find the nearest enemy
			let rect = {
				x: position.x[eid] - 50,
				y: position.y[eid] - 50,
				width: position.width[eid] + 100,
				height: position.height[eid] + 100
			};
			let enemies = getEnemiesInRange(spatialIndex, spatialEids, ecs, rect, eid, shipColor);
			if(enemies.length === 0) {
				rect.x -= 100;
				rect.y -= 100;
				rect.width += 200;
				rect.height += 200;
				enemies = getEnemiesInRange(spatialIndex, spatialEids, ecs, rect, eid, shipColor);
			}
	
			enemies.sort((a, b) => {
				return euclideanDistance(position.x[a], position.y[a], position.x[eid], position.y[eid]) - euclideanDistance(position.x[b], position.y[b], position.x[eid], position.y[eid]);
			});
			let enemy = enemies[0] ?? 0;

			// If no enemies that quadtree could easily find, just head for the nearest station
			if(!enemy) {
				let stations = controllerQuery(ecs).filter(stationEid => controller.color[stationEid] !== shipColor && !health.dead[stationEid]);
				stations.sort((a, b) => {
					return euclideanDistance(position.x[a], position.y[a], position.x[eid], position.y[eid]) - euclideanDistance(position.x[b], position.y[b], position.x[eid], position.y[eid]);
				});

				enemy = stations[0] ?? 0;
			}

			attack.target[eid] = enemy;

			if(i % 10 === 0 && i > minCountToUpdate) {
				// Check how long we have been running for
				if(performance.now() - start > (delta * 1_000 / 2)) {
					movingEntities = movingEntities.slice(i);
					return ecs;
				}
			}
		}

		movingEntities = [];
		return ecs;
	};
}

function getEnemiesInRange(spatialIndex: NonNullable<GameWorld['spatialIndex']>, spatialEids: Array<number>, ecs: GameWorld, range: { x: number, y: number, width: number, height: number }, eid: number, shipColor: number) : Array<number> {
	const controlled = components.controlled;
	const controller = components.controller;

	let minX = range.x;
	let minY = range.y;
	let maxX = range.x + range.width;
	let maxY = range.y + range.height;
	let entitiesInRange = spatialIndex.search(minX, minY, maxX, maxY).map(index => spatialEids[index]).filter((otherEid: number) => otherEid !== eid);
	return entitiesInRange.filter((otherEid: number) => {
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
}