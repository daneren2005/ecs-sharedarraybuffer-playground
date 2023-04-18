import { EntityConfig } from '@/data/generate-scene';
import { World } from 'bagelecs';
import components from '../components';

export default function createShip(world: World, config: EntityConfig) {
	let entity = world.spawn({
		health: components.health,
		position: components.position,
		controlled: components.controlled,
		velocity: components.velocity,
		attack: components.attack
	});

	entity.update(components.position.x, config.x);
	entity.update(components.position.y, config.y);
	entity.update(components.position.width, 10);
	entity.update(components.position.height, 5);

	entity.update(components.health.shield, 1);
	entity.update(components.health.maxShield, 1);
	entity.update(components.health.timeToRegenerateShields, 1);
	entity.update(components.health.timeSinceShieldRegeneration, 0);
	entity.update(components.health.timeSinceTakenDamage, 0);
	entity.update(components.health.dead, false);

	/*Atomics.store(velocity.speed, shipEid, SHIP_SPEED);
	Atomics.store(controlled.owner, shipEid, stationEid);*/

	/*let velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
	let velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
	Atomics.store(velocity.x, shipEid, velocityX);
	Atomics.store(velocity.y, shipEid, velocityY);
	Atomics.store(position.angle, shipEid, computeAngle(velocityX, velocityY));
	Atomics.sub(controller.money, stationEid, 1);
	Atomics.store(world.components.entity.init, shipEid, 1);*/

	return entity;
}