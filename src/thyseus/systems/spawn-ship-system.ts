import { Commands, CommandsDescriptor, Mut, MutDescriptor, Query, QueryDescriptor } from 'thyseus';
import Controller from '../components/controller';
import Position from '../components/position';
import Health from '../components/health';
import Velocity from '../components/velocity';
import computeAngle from '@/math/compute-angle';
import Faction from '../components/faction';

const SHIP_SPEED = 100;
export default function spawnShipSystem(query: Query<[Mut<Controller>, Faction, Position]>, commands: Commands) {
	for(const [controller, faction, position] of query) {
		if(controller.money > 0) {
			let velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
			let velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;

			commands.spawn()
				.add(new Position(position.x, position.y, 10, 5, computeAngle(velocityX, velocityY)))
				.add(new Health(1, 1))
				.add(new Faction(faction.color))
				.add(new Velocity(velocityX, velocityY, SHIP_SPEED));

			controller.money = controller.money - 1;
		}
	}
}
spawnShipSystem.parameters = [QueryDescriptor([MutDescriptor(Controller), Faction, Position]), CommandsDescriptor()];