import computeAngle from '@/math/compute-angle';
import { defineQuery, IWorld } from 'bitecs';
import Ship from '../entities/ship';
import Station from '../entities/station';
import World from '../entities/world';

export default function spawnShipSystem(world: World) {
	const controller = world.components.controller;
	const health = world.components.health;
	let stationQuery = defineQuery([controller]);

	return (ecs: IWorld, delta: number) => {
		// TODO: Remove dependency on our containers so this could realistically be running in a simple worker with just duplicated data
		let stations = stationQuery(ecs).filter(eid => !health.dead[eid]);
		stations.forEach(stationEid => {
			let station = world.getEntity(stationEid) as Station;
			if(controller.money[stationEid] > 0) {
				let ship = new Ship(station);
				ship.x = station.x;
				ship.y = station.y;
				ship.velocityX = Math.random();
				ship.velocityY = Math.random();
				world.components.position.angle[ship.eid] = computeAngle(ship.velocityX, ship.velocityY);

				world.addEntity(ship);
				controller.money[stationEid]--;
			}
		});

		return ecs;
	};
}