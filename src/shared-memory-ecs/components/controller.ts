import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// controller: a station's colour + its bank of money (which it spends spawning ships).  Colour is the
// defining, per-instance config; money is runtime.

// Block layout (Int32Array, size 2).
export const CONTROLLER_COLOR = 0;
export const CONTROLLER_MONEY = 1;

export interface ControllerComponent {
	index: number
	color: number
	money: number
}
export interface ControllerConfig {
	color: number
}
export interface ControllerSerialization {
	money?: number
}
export const controllerDefinition: ComponentDefinition<ControllerComponent, Int32Array, ControllerConfig, ControllerSerialization> = {
	type: Int32Array,
	size: 2,
	loadProperties: ['color'],
	load(entity, memory, config) {
		const index = memory.create([config.color, config.money ?? 0]);
		const block = memory.getBlock(index);

		return {
			index,
			get color() { return block[CONTROLLER_COLOR]; },
			set color(value: number) { block[CONTROLLER_COLOR] = value; },
			get money() { return block[CONTROLLER_MONEY]; },
			set money(value: number) { block[CONTROLLER_MONEY] = value; }
		};
	},
	save(component) {
		return { money: component.money };
	}
};
