import type { EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import type { Components } from '../components';
import {
	HEALTH_SHIELDS, HEALTH_MAX_SHIELDS, HEALTH_TIME_TO_REGEN, HEALTH_TIME_SINCE_REGEN, HEALTH_TIME_SINCE_DAMAGE
} from '../components/health';

// Advances each entity's health timers: the damage-cooldown clock always ticks, and shields regenerate one at
// a time once enough time has passed since the last regeneration.  Runs directly over the shared-memory block.
export const updateHealthTimersUpdate: EntityUpdateFunction<Components> = (world, entityId, components) => {
	const health = components.health;
	if(!health) {
		return;
	}

	const elapsedTime = world.elapsedTime;
	health[HEALTH_TIME_SINCE_DAMAGE] += elapsedTime;

	if(health[HEALTH_SHIELDS] < health[HEALTH_MAX_SHIELDS]) {
		health[HEALTH_TIME_SINCE_REGEN] += elapsedTime;
		if(health[HEALTH_TIME_SINCE_REGEN] > health[HEALTH_TIME_TO_REGEN]) {
			health[HEALTH_SHIELDS] += 1;
			health[HEALTH_TIME_SINCE_REGEN] = 0;
		}
	}
};
