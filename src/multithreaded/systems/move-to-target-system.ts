import World from '../entities/world';
import computeAngle from '@/math/compute-angle';
import { getEntitiesWithComponents } from '../components/get-entities';
const PhaserMath = require('phaser/src/math');

export default function moveToTargetSystem(world: World) {
	const position = world.components.position;
	const velocity = world.components.velocity;
	const attack = world.components.attack;

	return () => {
		getEntitiesWithComponents(world, ['velocity', 'attack']).forEach(eid => {
			let target = attack.target[eid];
			if(!target || world.components.entity.dead[target]) {
				return;
			}

			let force = getMoveTowardsForce(position, eid, target);
			let newVelocity = new PhaserMath.Vector2(velocity.x[eid] + force.x * 4, velocity.y[eid] + force.y * 4);
			newVelocity.normalize();

			velocity.x[eid] = newVelocity.x * velocity.speed[eid];
			velocity.y[eid] = newVelocity.y * velocity.speed[eid];
			position.angle[eid] = computeAngle(velocity.x[eid], velocity.y[eid]);
		});
	};
}

function getMoveTowardsForce(position: any, eid: number, otherEid: number) {
	let force = new PhaserMath.Vector2(position.x[otherEid] - position.x[eid], position.y[otherEid] - position.y[eid]);
	force.normalize();
	return force;
}