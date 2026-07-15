import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// position: where an entity is, how big it is, and which way it faces.  width/height are defining Config (they
// come from the entity's type template); x/y/angle are runtime Serialization.  Stored as plain floats in
// pixels (angle in degrees) - there is no INT_FLOAT_MULTIPLIER like the hand-rolled `multithreaded` version.

// Block layout (Float32Array, size 5).
export const POSITION_X = 0;
export const POSITION_Y = 1;
export const POSITION_WIDTH = 2;
export const POSITION_HEIGHT = 3;
export const POSITION_ANGLE = 4;

export interface PositionComponent {
	index: number
	x: number
	y: number
	width: number
	height: number
	angle: number
}
export interface PositionConfig {
	width: number
	height: number
}
export interface PositionSerialization {
	x?: number
	y?: number
	angle?: number
}
export const positionDefinition: ComponentDefinition<PositionComponent, Float32Array, PositionConfig, PositionSerialization> = {
	type: Float32Array,
	size: 5,
	loadProperties: ['width'],
	load(entity, memory, config) {
		const index = memory.create([config.x ?? 0, config.y ?? 0, config.width, config.height, config.angle ?? 0]);
		const block = memory.getBlock(index);

		return {
			index,
			get x() { return block[POSITION_X]; },
			set x(value: number) { block[POSITION_X] = value; },
			get y() { return block[POSITION_Y]; },
			set y(value: number) { block[POSITION_Y] = value; },
			get width() { return block[POSITION_WIDTH]; },
			set width(value: number) { block[POSITION_WIDTH] = value; },
			get height() { return block[POSITION_HEIGHT]; },
			set height(value: number) { block[POSITION_HEIGHT] = value; },
			get angle() { return block[POSITION_ANGLE]; },
			set angle(value: number) { block[POSITION_ANGLE] = value; }
		};
	},
	save(component) {
		return { x: component.x, y: component.y, angle: component.angle };
	}
};
