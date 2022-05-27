import computeAngle from '@/math/compute-angle';
import { getEntitiesWithComponents } from '../components/get-entities';
import WorldConfig from '../entities/world-config';

export default function moveToTargetSystem(world: WorldConfig) {
	const position = world.components.position;
	const velocity = world.components.velocity;
	const attack = world.components.attack;

	return () => {
		getEntitiesWithComponents(world, ['velocity', 'attack']).forEach(eid => {
			let target = attack.target[eid];
			if(!target || world.components.entity.dead[target]) {
				return;
			}

			let force = getMoveTowardsForce(eid, target);
			let newNormalizedVelocity = normalize(Atomics.load(velocity.x, eid) + force.x * 4, Atomics.load(velocity.y, eid) + force.y * 4);
			let newVelocity = {
				x: newNormalizedVelocity.x * velocity.speed[eid],
				y: newNormalizedVelocity.y * velocity.speed[eid]
			};

			Atomics.store(velocity.x, eid, newVelocity.x);
			Atomics.store(velocity.y, eid, newVelocity.y);
			Atomics.store(position.angle, eid, computeAngle(newVelocity.x, newVelocity.y));
		});
	};

	function getMoveTowardsForce(eid: number, otherEid: number) {
		return normalize(Atomics.load(position.x, otherEid) - Atomics.load(position.x, eid), Atomics.load(position.y, otherEid) - Atomics.load(position.y, eid));
	}

	function normalize(x: number, y: number) {
		let len = x * x + y * y;
		if(len > 0) {
			len = 1 / Math.sqrt(len);

			return {
				x: x * len,
				y: y * len
			};
		} else {
			return {
				x,
				y
			};
		}
	}
}