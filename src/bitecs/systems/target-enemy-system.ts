import { defineQuery, hasComponent, IWorld } from 'bitecs';
import World from '../entities/world';
import { Rectangle } from '@timohausmann/quadtree-ts/src/index.esm';
import euclideanDistance from '@/math/euclidean-distance';

export default function targetEnemySystem(world: World) {
	const position = world.components.position;
	const velocity = world.components.velocity;
	const controlled = world.components.controlled;
	const controller = world.components.controller;
	const health = world.components.health;
	const attack = world.components.attack;
	let movingQuery = defineQuery([velocity, attack]);
	let controllerQuery = defineQuery([controller]);

	const TIME_BETWEEN_TICKS = 0.2;
	let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
	return (ecs: IWorld, delta: number) => {
		timeSinceLastTick += delta;
		if(timeSinceLastTick < TIME_BETWEEN_TICKS) {
			return ecs;
		}

		// @ts-expect-error
		let quadtree = ecs.quadtree;

		// Use quadtree to see who we are colliding with
		movingQuery(ecs).forEach(eid => {
			if(health.dead[eid]) {
				return;
			}
			let shipColor = controller.color[controlled.owner[eid]];

			// Try to find the nearest enemy
			let rect = {
				x: position.x[eid] - 50,
				y: position.y[eid] - 50,
				width: position.width[eid] + 100,
				height: position.height[eid] + 100
			};
			let enemies = getEnemiesInRange(quadtree, ecs, rect, eid, shipColor, world);
			if(enemies.length === 0) {
				rect.x -= 100;
				rect.y -= 100;
				rect.width += 200;
				rect.height += 200;
				enemies = getEnemiesInRange(quadtree, ecs, rect, eid, shipColor, world);
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
		});
		timeSinceLastTick = 0;

		return ecs;
	};
}

function getEnemiesInRange(quadtree: any, ecs: IWorld, range: { x: number, y: number, width: number, height: number }, eid: number, shipColor: number, world: World) : Array<number> {
	const controlled = world.components.controlled;
	const controller = world.components.controller;

	let entitiesInRange = quadtree.retrieve(new Rectangle(range)).map((result: any) => result.data.eid).filter((otherEid: number) => otherEid !== eid);
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