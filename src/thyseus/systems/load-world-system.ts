import { Commands, CommandsDescriptor, Mut, MutDescriptor, Res, ResourceDescriptor } from 'thyseus';
import Position from '../components/position';
import { WorldConfig } from '@/data/generate-scene';
import Controller from '../components/controller';
import Health from '../components/health';
import Bounds from '../resources/bounds';
import Renderer from '../resources/renderer';
import Faction from '../components/faction';

export function loadWorldSystem(worldConfig: WorldConfig, scene: Phaser.Scene) {
	function loadWorldSystem(commands: Commands, bounds: Res<Mut<Bounds>>, renderer: Res<Mut<Renderer>>) {
		worldConfig.entities.forEach(entityConfig => {
			commands.spawn()
				.add(new Position(entityConfig.x, entityConfig.y, 20, 20))
				.add(new Controller(entityConfig.money))
				.add(new Faction(entityConfig.color))
				.add(new Health(2, 5));
		});
		
		bounds.width = worldConfig.bounds.width;
		bounds.height = worldConfig.bounds.height;
		renderer.scene = scene;
	}
	loadWorldSystem.parameters = [CommandsDescriptor(), ResourceDescriptor(MutDescriptor(Bounds)), ResourceDescriptor(MutDescriptor(Renderer))];

	return loadWorldSystem;
}