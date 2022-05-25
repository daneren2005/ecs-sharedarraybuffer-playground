import computeAngle from '@/math/compute-angle';
import { getEntitiesWithComponents } from '../components/get-entities';
import Ship from '../entities/ship';
import World from '../entities/world';

export default function spawnShipSystem(world: World) {
	const controller = world.components.controller;
	const position = world.components.position;

	return () => {
		// TODO: Remove dependency on our containers so this could realistically be running in a simple worker with just duplicated data
		let stations = getEntitiesWithComponents(world, ['controller']);
		stations.forEach(stationEid => {
			if(controller.money[stationEid] > 0) {
				let ship = new Ship(world, stationEid);
				ship.x = position.x[stationEid];
				ship.y = position.y[stationEid];
				ship.velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * world.components.velocity.speed[ship.eid];
				ship.velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * world.components.velocity.speed[ship.eid];
				position.angle[ship.eid] = computeAngle(ship.velocityX, ship.velocityY);

				world.addEntity(ship);
				controller.money[stationEid]--;
			}
		});
	};
}