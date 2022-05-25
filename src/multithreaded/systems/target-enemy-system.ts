import World from '../entities/world';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts/src/index.esm';
import euclideanDistance from '@/math/euclidean-distance';
import { INT_FLOAT_MULTIPLIER } from '../constants';
import { getEntitiesWithComponents, hasComponent } from '../components/get-entities';

export default function targetEnemySystem(world: World) {
	const position = world.components.position;
	const controlled = world.components.controlled;
	const controller = world.components.controller;
	const attack = world.components.attack;

	const TIME_BETWEEN_TICKS = 200;
	let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
	let movingEntities: Array<number> = [];
	let minCountToUpdate = 0;
	return (delta: number) => {
		// TODO: Don't wait a full 200ms to process ships that are just sitting there waiting
		// Run through all of entities eventually, but don't have more than half a frame's time to do a block of them
		timeSinceLastTick += delta;
		if(timeSinceLastTick > TIME_BETWEEN_TICKS && movingEntities.length === 0) {
			movingEntities = getEntitiesWithComponents(world, ['velocity', 'attack']);
			minCountToUpdate = movingEntities.length / (TIME_BETWEEN_TICKS / delta);
			timeSinceLastTick = 0;
		}

		let start = performance.now();
		// Create and populate quadtree
		let quadtree = new Quadtree({
			width: world.bounds.width * INT_FLOAT_MULTIPLIER,
			height: world.bounds.height * INT_FLOAT_MULTIPLIER
		});
		getEntitiesWithComponents(world, ['position', 'health']).forEach(eid => {
			quadtree.insert(new Rectangle({
				x: Atomics.load(position.x, eid),
				y: Atomics.load(position.y, eid),
				width: Atomics.load(position.width, eid),
				height: Atomics.load(position.height, eid),
				data: {
					eid
				}
			}));
		});

		// Use quadtree to see who we are colliding with
		for(let i = 0; i < movingEntities.length; i++) {
			let eid = movingEntities[i];
			let shipColor = controller.color[controlled.owner[eid]];

			// Try to find the nearest enemy
			let rect = {
				x: position.x[eid] - 50 * INT_FLOAT_MULTIPLIER,
				y: position.y[eid] - 50 * INT_FLOAT_MULTIPLIER,
				width: position.width[eid] + 100 * INT_FLOAT_MULTIPLIER,
				height: position.height[eid] + 100 * INT_FLOAT_MULTIPLIER
			};
			let enemies = getEnemiesInRange(quadtree, world, rect, eid, shipColor);
			if(enemies.length === 0) {
				rect.x -= 100 * INT_FLOAT_MULTIPLIER;
				rect.y -= 100 * INT_FLOAT_MULTIPLIER;
				rect.width += 200 * INT_FLOAT_MULTIPLIER;
				rect.height += 200 * INT_FLOAT_MULTIPLIER;
				enemies = getEnemiesInRange(quadtree, world, rect, eid, shipColor);
			}
	
			enemies.sort((a, b) => {
				return euclideanDistance(position.x[a], position.y[a], position.x[eid], position.y[eid]) - euclideanDistance(position.x[b], position.y[b], position.x[eid], position.y[eid]);
			});
			let enemy = enemies[0] ?? 0;

			// If no enemies that quadtree could easily find, just head for the nearest station
			if(!enemy) {
				let stations = getEntitiesWithComponents(world, ['controller']).filter(stationEid => controller.color[stationEid] !== shipColor && !world.components.entity.dead[stationEid]);
				stations.sort((a, b) => {
					return euclideanDistance(position.x[a], position.y[a], position.x[eid], position.y[eid]) - euclideanDistance(position.x[b], position.y[b], position.x[eid], position.y[eid]);
				});

				enemy = stations[0] ?? 0;
			}

			attack.target[eid] = enemy;

			if(i % 10 === 0 && i > minCountToUpdate) {
				// Check how long we have been running for
				if(performance.now() - start > (delta / 2)) {
					movingEntities = movingEntities.slice(i);
					return;
				}
			}
		}

		movingEntities = [];
	};
}

function getEnemiesInRange(quadtree: any, world: World, range: { x: number, y: number, width: number, height: number }, eid: number, shipColor: number) : Array<number> {
	const controlled = world.components.controlled;
	const controller = world.components.controller;

	let entitiesInRange = quadtree.retrieve(new Rectangle(range)).map((result: any) => result.data.eid).filter((otherEid: number) => otherEid !== eid);
	return entitiesInRange.filter((otherEid: number) => {
		// Ship
		if(hasComponent(world.components, otherEid, 'controlled')) {
			let stationEid = controlled.owner[otherEid];
			return controller.color[stationEid] !== shipColor;
		}
		// Station
		else if(hasComponent(world.components, otherEid, 'controller')) {
			return controller.color[otherEid] !== shipColor;
		} else {
			return false;
		}
	});
}