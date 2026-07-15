import type { ComponentDefinition } from '@daneren2005/shared-memory-ecs';

// velocity: the current velocity vector plus the entity's top speed.  speed is Config (from the template);
// the vector is runtime Serialization.  Velocity is in pixels/second.

// Block layout (Float32Array, size 3).
export const VELOCITY_X = 0;
export const VELOCITY_Y = 1;
export const VELOCITY_SPEED = 2;

export interface VelocityComponent {
	index: number
	x: number
	y: number
	speed: number
}
export interface VelocityConfig {
	speed: number
}
export interface VelocitySerialization {
	velocityX?: number
	velocityY?: number
}
export const velocityDefinition: ComponentDefinition<VelocityComponent, Float32Array, VelocityConfig, VelocitySerialization> = {
	type: Float32Array,
	size: 3,
	loadProperties: ['speed'],
	load(entity, memory, config) {
		const index = memory.create([config.velocityX ?? 0, config.velocityY ?? 0, config.speed]);
		const block = memory.getBlock(index);

		return {
			index,
			get x() { return block[VELOCITY_X]; },
			set x(value: number) { block[VELOCITY_X] = value; },
			get y() { return block[VELOCITY_Y]; },
			set y(value: number) { block[VELOCITY_Y] = value; },
			get speed() { return block[VELOCITY_SPEED]; },
			set speed(value: number) { block[VELOCITY_SPEED] = value; }
		};
	},
	save(component) {
		return { velocityX: component.x, velocityY: component.y };
	}
};
