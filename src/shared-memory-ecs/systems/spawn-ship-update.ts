import { createEntityWorker } from '@daneren2005/shared-memory-ecs';
import type { EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import type { Components, ComponentArrays } from '../components';
import computeAngle from '@/math/compute-angle';
import { POSITION_X, POSITION_Y } from '../components/position';
import { CONTROLLER_MONEY } from '../components/controller';

// Magnitude of a freshly-spawned ship's random initial velocity, in pixels/second.
const SHIP_SPEED = 100;

// Each run, every station holding money spends one and asks the main thread to create a ship at its position
// with a random initial heading.  Creation can't happen in a worker (eid allocation + factory expansion live
// on the main thread), so createEntityWorker buffers the flat config and the ship first exists next frame.
export const spawnShipUpdate: EntityUpdateFunction<Components, Pick<ComponentArrays, 'controller' | 'position'>> = (world, entityId, components, queries, callbacks) => {
	// controller is an Int32Array block; money is banked/spent by this system and by collisionUpdate on other
	// worker threads at the same time, so every read-modify-write of it has to go through Atomics.
	const controller = components.controller;
	const position = components.position;
	if(Atomics.load(controller, CONTROLLER_MONEY) <= 0) {
		return;
	}

	const velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
	const velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;

	createEntityWorker({
		type: 'ship',
		x: position[POSITION_X],
		y: position[POSITION_Y],
		owner: entityId,
		velocityX,
		velocityY,
		angle: computeAngle(velocityX, velocityY)
	}, callbacks);

	Atomics.sub(controller, CONTROLLER_MONEY, 1);
};
