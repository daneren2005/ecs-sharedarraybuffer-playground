import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// health: shields + the timers that regenerate them and gate incoming damage.  maxShields /
// timeToRegenerateShields / damageCooldown are Config; current shields are the only runtime state worth
// persisting.  All timers are in seconds.

// Block layout (Float32Array, size 6).
export const HEALTH_SHIELDS = 0;
export const HEALTH_MAX_SHIELDS = 1;
export const HEALTH_TIME_TO_REGEN = 2;
export const HEALTH_TIME_SINCE_REGEN = 3;
export const HEALTH_TIME_SINCE_DAMAGE = 4;
export const HEALTH_DAMAGE_COOLDOWN = 5;

export interface HealthComponent {
	index: number
	shields: number
	maxShields: number
	timeToRegenerateShields: number
	timeSinceShieldRegeneration: number
	timeSinceTakenDamage: number
	damageCooldown: number
}
export interface HealthConfig {
	maxShields: number
	timeToRegenerateShields: number
	damageCooldown: number
}
export interface HealthSerialization {
	shields?: number
}
export const healthDefinition: ComponentDefinition<HealthComponent, Float32Array, HealthConfig, HealthSerialization> = {
	type: Float32Array,
	size: 6,
	loadProperties: ['maxShields'],
	load(entity, memory, config) {
		const index = memory.create([config.shields ?? config.maxShields, config.maxShields, config.timeToRegenerateShields, 0, 0, config.damageCooldown]);
		const block = memory.getBlock(index);

		return {
			index,
			get shields() { return block[HEALTH_SHIELDS]; },
			set shields(value: number) { block[HEALTH_SHIELDS] = value; },
			get maxShields() { return block[HEALTH_MAX_SHIELDS]; },
			set maxShields(value: number) { block[HEALTH_MAX_SHIELDS] = value; },
			get timeToRegenerateShields() { return block[HEALTH_TIME_TO_REGEN]; },
			set timeToRegenerateShields(value: number) { block[HEALTH_TIME_TO_REGEN] = value; },
			get timeSinceShieldRegeneration() { return block[HEALTH_TIME_SINCE_REGEN]; },
			set timeSinceShieldRegeneration(value: number) { block[HEALTH_TIME_SINCE_REGEN] = value; },
			get timeSinceTakenDamage() { return block[HEALTH_TIME_SINCE_DAMAGE]; },
			set timeSinceTakenDamage(value: number) { block[HEALTH_TIME_SINCE_DAMAGE] = value; },
			get damageCooldown() { return block[HEALTH_DAMAGE_COOLDOWN]; },
			set damageCooldown(value: number) { block[HEALTH_DAMAGE_COOLDOWN] = value; }
		};
	},
	save(component) {
		return { shields: component.shields };
	}
};
