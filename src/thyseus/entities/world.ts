import { WorldConfig } from '@/data/generate-scene';
import { World } from 'thyseus';
import { loadWorldSystem } from '../systems/load-world-system';
import Position from '../components/position';
import Controller from '../components/controller';
import renderStationSystem from '../systems/render-station-system';
import Phaser from 'phaser';
import Health from '../components/health';
import renderShipSystem from '../systems/render-ship-system';
import { spawnShipSystem } from '../systems/spawn-ship-system';
import Velocity from '../components/velocity';
import { velocitySystem } from '../systems/velocity-system';

export default async function createWorld(config: InitConfig): Promise<World> {
	let worldBuilder = World.new();

	worldBuilder.components.add(Position);
	worldBuilder.components.add(Controller);
	worldBuilder.components.add(Health);
	worldBuilder.components.add(Velocity);

	worldBuilder.addStartupSystem(loadWorldSystem(config.worldConfig));

	// TODO: This is separate because they reference different systems
	// If we end up not being able to reference eid in Controlled, we might as well move color into health or position and simplify this to a single renderer
	worldBuilder.addSystem(renderStationSystem(config.scene));
	worldBuilder.addSystem(renderShipSystem(config.scene));

	worldBuilder.addSystem(spawnShipSystem);
	worldBuilder.addSystem(velocitySystem);

	return worldBuilder.build();
}

interface InitConfig {
	worldConfig: WorldConfig
	scene: Phaser.Scene

}