import type { EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import { addAtomicFloat32, loadFloat32 } from '@daneren2005/shared-memory-objects';
import type { Components, ComponentArrays } from '../components';
import {
	HEALTH_SHIELDS, HEALTH_MAX_SHIELDS, HEALTH_TIME_TO_REGEN, HEALTH_TIME_SINCE_REGEN, HEALTH_TIME_SINCE_DAMAGE
} from '../components/health';

// Advances each entity's health timers: the damage-cooldown clock always ticks, and shields regenerate one at
// a time once enough time has passed since the last regeneration.  Runs directly over the shared-memory block.
// collisionUpdate mutates the same shields + damage timer on another worker thread at the same time, so the
// fields it shares are read-modify-written with the Float32 atomic helpers (the block stays a Float32Array).
export const updateHealthTimersUpdate: EntityUpdateFunction<Components, Pick<ComponentArrays, 'health'>> = (world, entityId, components) => {
	const health = components.health;

	const elapsedTime = world.elapsedTime;
	// collisionUpdate resets this to 0 when it deals damage, so advance it atomically (no upper bound needed).
	addAtomicFloat32(health, HEALTH_TIME_SINCE_DAMAGE, elapsedTime, Infinity);

	// maxShields / timeToRegenerateShields are immutable config, so a plain read is fine; shields is live.
	const maxShields = health[HEALTH_MAX_SHIELDS];
	if(loadFloat32(health, HEALTH_SHIELDS) < maxShields) {
		// timeSinceShieldRegeneration is only ever touched here, so it needs no atomics.
		health[HEALTH_TIME_SINCE_REGEN] += elapsedTime;
		if(health[HEALTH_TIME_SINCE_REGEN] > health[HEALTH_TIME_TO_REGEN]) {
			// Competes with collisionUpdate's damage; add atomically and clamp to the max in one step.
			addAtomicFloat32(health, HEALTH_SHIELDS, 1, maxShields);
			health[HEALTH_TIME_SINCE_REGEN] = 0;
		}
	}
};
