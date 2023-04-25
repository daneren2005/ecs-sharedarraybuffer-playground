import { defineSystem } from 'thyseus';
import Position from '../components/position';
import Velocity from '../components/velocity';

const delta = 0.0166;
export const velocitySystem = defineSystem(
	({ Query, Mut }) => [Query([Velocity, Mut(Position)])],
	function velocitySystem(query) {
		for(const [velocity, position] of query) {
			// TODO: Implement an actual delta...
			position.x += velocity.x * delta;
			position.y += velocity.y * delta;

			// TODO: Implement bouncing
			/*if(position.x < 0 || position.x > world.bounds.width) {
				velocity.x = -velocity.x;
				position.angle = computeAngle(velocity.x, velocity.y);
			}
	
			if(position.y < 0 || position.y > world.bounds.height) {
				velocity.y = -velocity.y;
				position.angle = computeAngle(velocity.x, velocity.y);
			}*/
		}
	}
);