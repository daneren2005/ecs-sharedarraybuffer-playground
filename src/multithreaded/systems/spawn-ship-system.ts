import computeAngle from '@/math/compute-angle';
import addComponents from '../components/add-component';
import { getEntitiesWithComponents } from '../components/get-entities';
import WorldConfig from '../entities/world-config';

export default function spawnShipSystem(world: WorldConfig) {
	const controller = world.components.controller;
	const controlled = world.components.controlled;
	const position = world.components.position;
	const velocity = world.components.velocity;
	const health = world.components.health;

	return () => {
		const SHIP_SPEED = 100;
		getEntitiesWithComponents(world, ['controller']).forEach(stationEid => {
			if(controller.money[stationEid] > 0) {
				let shipEid = Atomics.add(world.idCounter, 0, 1) + 1;
				addComponents(world.components, shipEid, ['entity', 'position', 'health', 'velocity', 'controlled', 'attack']);

				Atomics.store(position.width, shipEid, 10 * 1_000);
				Atomics.store(position.height, shipEid, 5 * 1_000);
				Atomics.store(health.shields, shipEid, 1);
				Atomics.store(health.maxShields, shipEid, 1);
				Atomics.store(health.timeToRegenerateShields, shipEid, 1_000 * 1_000);
				Atomics.store(velocity.speed, shipEid, SHIP_SPEED);
				Atomics.store(controlled.owner, shipEid, stationEid);

				Atomics.store(position.x, shipEid, Atomics.load(position.x, stationEid));
				Atomics.store(position.y, shipEid, Atomics.load(position.y, stationEid));

				let velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
				let velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
				Atomics.store(velocity.x, shipEid, velocityX);
				Atomics.store(velocity.y, shipEid, velocityY);
				Atomics.store(position.angle, shipEid, computeAngle(velocityX, velocityY));
				Atomics.sub(controller.money, stationEid, 1);
				Atomics.store(world.components.entity.init, shipEid, 1);
			}
		});
	};
}