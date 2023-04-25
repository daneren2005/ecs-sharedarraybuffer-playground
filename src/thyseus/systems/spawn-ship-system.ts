import { defineSystem } from 'thyseus';
import Controller from '../components/controller';
import Position from '../components/position';
import Health from '../components/health';
import Controlled from '../components/controlled';
import Velocity from '../components/velocity';
import computeAngle from '@/math/compute-angle';

const SHIP_SPEED = 100;
export const spawnShipSystem = defineSystem(
	({ Query, Mut, Commands }) => [Query([Mut(Controller), Position]), Commands()],
	function spawnShipSystem(query, commands) {
		for(const [controller, position] of query) {
			if(controller.money > 0) {
				let velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
				let velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;

				commands.spawn()
					.add(new Position(position.x, position.y, 10, 5, computeAngle(velocityX, velocityY)))
					.add(new Health(1, 1))
					.add(new Controlled(controller.color))
					.add(new Velocity(velocityX, velocityY, SHIP_SPEED));

				controller.money = controller.money - 1;
			}
		}
	}
);