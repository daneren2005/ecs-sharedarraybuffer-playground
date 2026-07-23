import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// attack: the eid a ship is currently steering toward (0 = none) plus how strongly it steers toward that
// target each tick.  `attacks` is a marker Config prop that a type template sets to opt an entity into
// targeting; steerForce is Config; target is the only runtime state and it is not worth persisting.

// Block layout (Float32Array, size 2).
export const ATTACK_TARGET = 0;
export const ATTACK_STEER_FORCE = 1;

export interface AttackComponent {
	index: number
	target: number
	steerForce: number
}
export interface AttackConfig {
	attacks: boolean
	steerForce: number
}
export const attackDefinition: ComponentDefinition<AttackComponent, Float32Array, AttackConfig> = {
	type: Float32Array,
	size: 2,
	loadProperties: ['attacks'],
	load(entity, memory, config) {
		const index = memory.create([0, config.steerForce]);
		const block = memory.getBlock(index);

		return {
			index,
			get target() { return block[ATTACK_TARGET]; },
			set target(value: number) { block[ATTACK_TARGET] = value; },
			get steerForce() { return block[ATTACK_STEER_FORCE]; },
			set steerForce(value: number) { block[ATTACK_STEER_FORCE] = value; }
		};
	}
};
