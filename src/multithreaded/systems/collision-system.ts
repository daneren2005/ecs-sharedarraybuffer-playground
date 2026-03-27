import computeAngle from '@/math/compute-angle';
import distance from '@/math/distance';
import Flatbush from 'flatbush';
import { getEntitiesWithComponents } from '../entities/get-entities';
import hasComponent from '../components/has-component';
import WorldConfig from '../entities/world-config';
import { killEntity } from '../entities/kill-entity';

export default function collisionSystem(world: WorldConfig) {
	const position = world.components.position;
	const velocity = world.components.velocity;
	const controlled = world.components.controlled;
	const controller = world.components.controller;

	return () => {
		let spatialEids = getEntitiesWithComponents(world, ['position', 'health']);
		if(spatialEids.length === 0) {
			return;
		}
		let spatialIndex = new Flatbush(spatialEids.length);
		spatialEids.forEach(eid => {
			let x = Atomics.load(position.x, eid);
			let y = Atomics.load(position.y, eid);
			let width = Atomics.load(position.width, eid);
			let height = Atomics.load(position.height, eid);
			spatialIndex.add(x, y, x + width, y + height);
		});
		spatialIndex.finish();

		// Use spatial index to see who we are colliding with.
		let ships = getEntitiesWithComponents(world, ['velocity']);
		ships.forEach(eid => {
			let x = Atomics.load(position.x, eid);
			let y = Atomics.load(position.y, eid);
			let width = Atomics.load(position.width, eid);
			let height = Atomics.load(position.height, eid);
			let entitiesInRange = spatialIndex.search(x, y, x + width, y + height).map(index => spatialEids[index]).filter((otherEid: number) => otherEid !== eid);
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
				collide(ships, eid, collisions[0]);

				velocity.x[eid] = -velocity.x[eid];
				velocity.y[eid] = -velocity.y[eid];
				position.angle[eid] = computeAngle(velocity.x[eid], velocity.y[eid]);
			}
		});
	};

	function collide(ships: Array<number>, eid: number, target: number) {
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
	}
}