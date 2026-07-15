import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// attack: the eid a ship is currently steering toward (0 = none).  `attacks` is a marker Config prop that a
// type template sets to opt an entity into targeting; there is no runtime state worth persisting.

// Block layout (Uint32Array, size 1).
export const ATTACK_TARGET = 0;

export interface AttackComponent {
	index: number
	target: number
}
export interface AttackConfig {
	attacks: boolean
}
export const attackDefinition: ComponentDefinition<AttackComponent, Uint32Array, AttackConfig> = {
	type: Uint32Array,
	size: 1,
	loadProperties: ['attacks'],
	load(entity, memory) {
		const index = memory.create([0]);
		const block = memory.getBlock(index);

		return {
			index,
			get target() { return block[ATTACK_TARGET]; },
			set target(value: number) { block[ATTACK_TARGET] = value; }
		};
	}
};
