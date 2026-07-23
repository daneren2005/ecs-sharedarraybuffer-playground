import computeAngle from '@/math/compute-angle';
import { defineQuery } from 'bitecs';
import components from '../components';
import { GameWorld } from './game-world';

export default function velocitySystem(context: { bounds: { width: number, height: number } }) {
	const position = components.position;
	const velocity = components.velocity;
	let shipQuery = defineQuery([position, velocity]);

	return (ecs: GameWorld, delta: number) => {
		let ships = shipQuery(ecs);
		ships.forEach(shipEid => {
			position.x[shipEid] += velocity.x[shipEid] * delta;
			position.y[shipEid] += velocity.y[shipEid] * delta;

			if(position.x[shipEid] < 0 || position.x[shipEid] > context.bounds.width) {
				velocity.x[shipEid] = -velocity.x[shipEid];
				position.angle[shipEid] = computeAngle(velocity.x[shipEid], velocity.y[shipEid]);
			}
	
			if(position.y[shipEid] < 0 || position.y[shipEid] > context.bounds.height) {
				velocity.y[shipEid] = -velocity.y[shipEid];
				position.angle[shipEid] = computeAngle(velocity.x[shipEid], velocity.y[shipEid]);
			}
		});

		return ecs;
	};
}