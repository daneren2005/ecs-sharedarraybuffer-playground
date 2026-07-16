import type { ComponentSystemWorld, EntityUpdateFunction } from '@daneren2005/shared-memory-ecs';
import type { Components, ComponentArrays } from '../components';
import computeAngle from '@/math/compute-angle';
import normalize from '@/math/normalize';
import { POSITION_X, POSITION_Y, POSITION_ANGLE } from '../components/position';
import { VELOCITY_X, VELOCITY_Y, VELOCITY_SPEED } from '../components/velocity';
import { ATTACK_TARGET, ATTACK_STEER_FORCE } from '../components/attack';

interface TargetPosition {
	x: number
	y: number
}
type Scratch = ComponentSystemWorld & {
	positionByEid?: Record<number, TargetPosition>
};

// Steers each ship toward its assigned target by nudging its velocity toward the target and renormalising to
// the ship's top speed, then re-faces it along the new heading.  Target positions are gathered once per run
// via the `targets` query (everything with a position) so a ship can look up whoever it is chasing.
export const moveToTargetUpdate: EntityUpdateFunction<Components, Pick<ComponentArrays, 'velocity' | 'position' | 'attack'>> = (world, entityId, components) => {
	const scratch = world as Scratch;
	const velocity = components.velocity;
	const position = components.position;
	const attack = components.attack;
	if(!scratch.positionByEid) {
		return;
	}

	const target = attack[ATTACK_TARGET];
	const targetPosition = target ? scratch.positionByEid[target] : undefined;
	if(!targetPosition) {
		return;
	}

	const x = position[POSITION_X];
	const y = position[POSITION_Y];
	const force = normalize(targetPosition.x - x, targetPosition.y - y);

	const speed = velocity[VELOCITY_SPEED];
	const steerForce = attack[ATTACK_STEER_FORCE];
	const steered = normalize(velocity[VELOCITY_X] + force.x * steerForce, velocity[VELOCITY_Y] + force.y * steerForce);
	const newVelocityX = steered.x * speed;
	const newVelocityY = steered.y * speed;

	velocity[VELOCITY_X] = newVelocityX;
	velocity[VELOCITY_Y] = newVelocityY;
	position[POSITION_ANGLE] = computeAngle(newVelocityX, newVelocityY);
};

moveToTargetUpdate.preRun = (world, entities, queries) => {
	const scratch = world as Scratch;
	const positionByEid: Record<number, TargetPosition> = {};
	for(let entity of queries.targets ?? []) {
		const position = entity.components.position;
		if(position) {
			positionByEid[entity.entityId] = { x: position[POSITION_X], y: position[POSITION_Y] };
		}
	}
	scratch.positionByEid = positionByEid;
};
