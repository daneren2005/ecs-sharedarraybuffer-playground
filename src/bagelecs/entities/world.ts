import { WorldConfig } from '@/data/generate-scene';
import { World } from 'bagelecs';
import createStation from './station';
import createShip from './ship';

export default function createWorld(config: WorldConfig): World {
	let world = new World(10_000);

	config.entities.forEach(entityConfig => {
		switch(entityConfig.type) {
			case 'station':
				createStation(world, entityConfig);
				break;
			case 'ship':
				createShip(world, entityConfig);
				break;
		}
	});

	return world;
}