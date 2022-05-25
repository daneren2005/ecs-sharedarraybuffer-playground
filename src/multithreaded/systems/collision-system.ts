import World from '../entities/world';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts/src/index.esm';
import distance from '@/math/distance';
import computeAngle from '@/math/compute-angle';
import { INT_FLOAT_MULTIPLIER } from '../constants';
import { getEntitiesWithComponents, hasComponent } from '../components/get-entities';

export default function collisionSystem(world: World) {
	const position = world.components.position;
	const velocity = world.components.velocity;
	const controlled = world.components.controlled;
	const controller = world.components.controller;

	// 60fps = 0.016 so 30fps is roughly 0.032 so basically every other frame
	const TIME_BETWEEN_TICKS = 30;
	let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
	let ships: Array<number> = [];
	let minCountToUpdate = 0;
	return (delta: number) => {
		timeSinceLastTick += delta;
		if(timeSinceLastTick > TIME_BETWEEN_TICKS && ships.length === 0) {
			ships = getEntitiesWithComponents(world, ['velocity']);
			minCountToUpdate = ships.length / 2;
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
		for(let i = 0; i < ships.length; i++) {
			let eid = ships[i];
			let entitiesInRange = quadtree.retrieve(new Rectangle({
				x: position.x[eid],
				y: position.y[eid],
				width: position.width[eid],
				height: position.height[eid]
			})).map((result: any) => result.data.eid).filter((otherEid: number) => otherEid !== eid);
			let shipColor = controller.color[controlled.owner[eid]];
			let enemiesInRange = entitiesInRange.filter((otherEid: number) => {
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
			let collisions = enemiesInRange.filter((otherEid: number) => distance(position.x[otherEid], position.y[otherEid], position.x[eid], position.y[eid]) < Math.max(position.width[eid], position.width[otherEid]));
			if(collisions.length) {
				collide(world, ships, eid, collisions[0]);

				velocity.x[eid] = -velocity.x[eid];
				velocity.y[eid] = -velocity.y[eid];
				position.angle[eid] = computeAngle(velocity.x[eid], velocity.y[eid]);
			}

			if(i % 10 === 0 && i > minCountToUpdate) {
				if(performance.now() - start > (delta / 2)) {
					ships = ships.slice(i);
					return;
				}
			}
		}

		ships = [];
	};
}

function collide(world: World, ships: Array<number>, eid: number, target: number) {
	if(!canTakeDamage(world, eid) || !canTakeDamage(world, target)) {
		return;
	}

	let enemyWorth = 1;
	if(hasComponent(world.components, target, 'controller')) {
		enemyWorth = ships.filter(eid => world.components.controlled.owner[eid] === target).length;
	}

	takeDamage(world, ships, eid, 1);
	takeDamage(world, ships, target, 1);

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
function takeDamage(world: World, ships: Array<number>, eid: number, damage: number) {
	const health = world.components.health;
	health.shields[eid] -= damage;
	health.timeSinceTakenDamage[eid] = 0;
	if(health.shields[eid] < 0) {
		world.components.entity.dead[eid] = 1;

		// TODO: Removing makes it so our change query doesn't detect that these are gone
		// world.removeEntity(eid);
		if(hasComponent(world.components, eid, 'controller')) {
			let controlledShips = ships.filter(shipEid => world.components.controlled.owner[shipEid] === eid);
			controlledShips.forEach(shipEid => {
				world.components.entity.dead[shipEid] = 1;
			});
		}
	}
}

function canTakeDamage(world: World, eid: number) {
	return Atomics.load(world.components.health.timeSinceTakenDamage, eid) >= 200 * INT_FLOAT_MULTIPLIER;
}