import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// controlled: marks a ship and records the eid of the station that owns it.

// Block layout (Uint32Array, size 1).
export const CONTROLLED_OWNER = 0;

export interface ControlledComponent {
	index: number
	owner: number
}
export interface ControlledConfig {
	owner: number
}
export const controlledDefinition: ComponentDefinition<ControlledComponent, Uint32Array, ControlledConfig> = {
	type: Uint32Array,
	size: 1,
	loadProperties: ['owner'],
	load(entity, memory, config) {
		const index = memory.create([config.owner]);
		const block = memory.getBlock(index);

		return {
			index,
			get owner() { return block[CONTROLLED_OWNER]; },
			set owner(value: number) { block[CONTROLLED_OWNER] = value; }
		};
	}
};
