import type { EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import type { Components } from '../components';
import type { Bounds } from './game-component-system';
import computeAngle from '@/math/compute-angle';
import { POSITION_X, POSITION_Y, POSITION_ANGLE } from '../components/position';
import { VELOCITY_X, VELOCITY_Y } from '../components/velocity';

// Integrates each moving entity's position from its velocity and bounces it back off the edges of the world,
// re-facing it along its new heading.  velocity is in pixels/second and elapsedTime is in seconds.
export const velocityUpdate: EntityUpdateFunction<Components> = (world, entityId, components) => {
	const position = components.position;
	const velocity = components.velocity;
	if(!position || !velocity) {
		return;
	}

	const bounds = world.bounds as Bounds;
	const elapsedTime = world.elapsedTime;

	const velocityX = velocity[VELOCITY_X];
	const velocityY = velocity[VELOCITY_Y];
	const newX = position[POSITION_X] += velocityX * elapsedTime;
	const newY = position[POSITION_Y] += velocityY * elapsedTime;

	if(newX < 0 || newX > bounds.width) {
		velocity[VELOCITY_X] = -velocityX;
		position[POSITION_ANGLE] = computeAngle(-velocityX, velocityY);
	}
	if(newY < 0 || newY > bounds.height) {
		velocity[VELOCITY_Y] = -velocityY;
		position[POSITION_ANGLE] = computeAngle(velocityX, -velocityY);
	}
};
