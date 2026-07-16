import type { ComponentsOf, EntityConfigOf } from '@daneren2005/shared-memory-ecs';
import { positionDefinition } from './position';
import { velocityDefinition } from './velocity';
import { healthDefinition } from './health';
import { controllerDefinition } from './controller';
import { controlledDefinition } from './controlled';
import { attackDefinition } from './attack';

// One place declares every component; the world derives its typed component map + flat entity config from it.
// Each component's own memory layout, interfaces, and definition live in its own file in this folder.
export const registry = {
	position: positionDefinition,
	velocity: velocityDefinition,
	health: healthDefinition,
	controller: controllerDefinition,
	controlled: controlledDefinition,
	attack: attackDefinition
};

export type Components = ComponentsOf<typeof registry>;
export type Config = EntityConfigOf<typeof registry>;

// The concrete shared-memory block (typed array) each component stores its data in, derived straight from the
// definition's `type` constructor.  A system's update function declares the blocks it touches with
// `Pick<ComponentArrays, ...>` so it gets real element types (Float32Array / Int32Array / ...) instead of the
// generic ComponentTypedArray - no casts needed at the call sites.
export type ComponentArrays = {
	[K in keyof typeof registry]: InstanceType<(typeof registry)[K]['type']>
};
