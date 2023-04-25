import { defineSystem } from 'thyseus';
import Position from '../components/position';
import { WorldConfig } from '@/data/generate-scene';
import Controller from '../components/controller';
import Health from '../components/health';

export function loadWorldSystem(worldConfig: WorldConfig) {
	return defineSystem(
		({ Commands }) => [Commands()],
	
		function loadWorldSystem(commands) {
			worldConfig.entities.forEach(entityConfig => {
				// TODO: Would be better in it's own class but Thyseus does not appear to export Commands interface so we can't easily pass this to a function
				commands.spawn()
					.add(new Position(entityConfig.x, entityConfig.y, 20, 20))
					.add(new Controller(entityConfig.color, entityConfig.money))
					.add(new Health(2, 5));
			});
			
		}
	);
}