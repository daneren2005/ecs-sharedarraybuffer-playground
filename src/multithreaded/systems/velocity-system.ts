import computeAngle from '@/math/compute-angle';
import { INT_FLOAT_MULTIPLIER } from '../constants';
import World from '../entities/world';

export default function velocitySystem(world: World) {
	const position = world.components.position;
	const velocity = world.components.velocity;

	return (delta: number) => {
		let ships = world.getEntitiesWithComponents(['position', 'velocity']);
		ships.forEach(shipEid => {
			Atomics.add(position.x, shipEid, velocity.x[shipEid] * delta);
			Atomics.add(position.y, shipEid, velocity.y[shipEid] * delta);

			// TODO: Don't reference proxy world directly
			if(position.x[shipEid] < 0 || position.x[shipEid] > (world.bounds.width * INT_FLOAT_MULTIPLIER)) {
				// TODO: This isn't actually atomic since it loads and stores separately
				let velocityX = -Atomics.load(velocity.x, shipEid);
				let velocityY = Atomics.load(velocity.y, shipEid);
				Atomics.store(velocity.x, shipEid, velocityX);
				Atomics.store(position.angle, shipEid, computeAngle(velocityX, velocityY));
			}
	
			if(position.y[shipEid] < 0 || position.y[shipEid] > (world.bounds.height * INT_FLOAT_MULTIPLIER)) {
				let velocityX = Atomics.load(velocity.x, shipEid);
				let velocityY = -Atomics.load(velocity.y, shipEid);
				Atomics.store(velocity.y, shipEid, velocityY);
				Atomics.store(position.angle, shipEid, computeAngle(velocityX, velocityY));
			}
		});
	};
}