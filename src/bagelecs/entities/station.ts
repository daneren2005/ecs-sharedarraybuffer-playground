import { EntityConfig } from '@/data/generate-scene';
import { World } from 'bagelecs';
import components from '../components';

export default function createStation(world: World, config: EntityConfig) {
	let entity = world.spawn({
		health: components.health,
		position: components.position,
		controller: components.controller
	});

	entity.update(components.position.x, config.x);
	entity.update(components.position.y, config.y);
	entity.update(components.position.width, 20);
	entity.update(components.position.height, 20);

	entity.update(components.health.shield, 2);
	entity.update(components.health.maxShield, 2);
	entity.update(components.health.timeToRegenerateShields, 5);
	entity.update(components.health.timeSinceShieldRegeneration, 0);
	entity.update(components.health.timeSinceTakenDamage, 0);
	entity.update(components.health.dead, false);

	entity.update(components.controller.color, config.color);
	entity.update(components.controller.money, config.money);

	return entity;
}