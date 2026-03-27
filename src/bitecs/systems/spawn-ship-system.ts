import computeAngle from '@/math/compute-angle';
import { addComponent, addEntity, defineQuery } from 'bitecs';
import components from '../components';
import { GameWorld } from './game-world';

export default function spawnShipSystem(_context?: unknown) {
	const controller = components.controller;
	const health = components.health;
	const position = components.position;
	const velocity = components.velocity;
	const controlled = components.controlled;
	const attack = components.attack;
	let stationQuery = defineQuery([controller]);

	return (ecs: GameWorld) => {
		let stations = stationQuery(ecs).filter(eid => !health.dead[eid]);
		stations.forEach(stationEid => {
			if(controller.money[stationEid] > 0) {
				let shipEid = addEntity(ecs);
				addComponent(ecs, position, shipEid);
				addComponent(ecs, health, shipEid);
				addComponent(ecs, velocity, shipEid);
				addComponent(ecs, controlled, shipEid);
				addComponent(ecs, attack, shipEid);

				position.x[shipEid] = position.x[stationEid];
				position.y[shipEid] = position.y[stationEid];
				position.width[shipEid] = 10;
				position.height[shipEid] = 5;
				health.shields[shipEid] = 1;
				health.maxShields[shipEid] = 1;
				health.timeToRegenerateShields[shipEid] = 1;
				health.timeSinceShieldRegeneration[shipEid] = 0;
				health.timeSinceTakenDamage[shipEid] = 0;
				health.dead[shipEid] = 0;
				velocity.speed[shipEid] = 100;
				velocity.x[shipEid] = (Math.random() > 0.5 ? -1 : 1) * Math.random() * velocity.speed[shipEid];
				velocity.y[shipEid] = (Math.random() > 0.5 ? -1 : 1) * Math.random() * velocity.speed[shipEid];
				position.angle[shipEid] = computeAngle(velocity.x[shipEid], velocity.y[shipEid]);
				controlled.owner[shipEid] = stationEid;
				attack.target[shipEid] = 0;

				controller.money[stationEid]--;
			}
		});

		return ecs;
	};
}