import computeAngle from '@/math/compute-angle';
import { defineQuery, IWorld } from 'bitecs';
import World from '../entities/world';

export default function velocitySystem(world: World) {
	const position = world.components.position;
	const velocity = world.components.velocity;
	let shipQuery = defineQuery([position, velocity]);

	return (ecs: IWorld, delta: number) => {
		let ships = shipQuery(ecs);
		ships.forEach(shipEid => {
			position.x[shipEid] += velocity.x[shipEid] * delta;
			position.y[shipEid] += velocity.y[shipEid] * delta;

			// TODO: Don't reference proxy world directly
			if(position.x[shipEid] < 0 || position.x[shipEid] > world.bounds.width) {
				velocity.x[shipEid] = -velocity.x[shipEid];
				position.angle[shipEid] = computeAngle(velocity.x[shipEid], velocity.y[shipEid]);
			}
	
			if(position.y[shipEid] < 0 || position.y[shipEid] > world.bounds.height) {
				velocity.y[shipEid] = -velocity.y[shipEid];
				position.angle[shipEid] = computeAngle(velocity.x[shipEid], velocity.y[shipEid]);
			}
		});

		return ecs;
	};
}