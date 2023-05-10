import { WorldConfig } from '@/data/generate-scene';
import { CoreSchedule, World } from 'thyseus';
import { loadWorldSystem } from '../systems/load-world-system';
import Position from '../components/position';
import Controller from '../components/controller';
import Phaser from 'phaser';
import Health from '../components/health';
import spawnShipSystem from '../systems/spawn-ship-system';
import Velocity from '../components/velocity';
import velocitySystem from '../systems/velocity-system';
import renderSystem from '../systems/render-system';
import collisionSystem from '../systems/collisions-system';
import Faction from '../components/faction';

export default async function createWorld(config: InitConfig): Promise<World> {
	let worldBuilder = World.new();

	worldBuilder.components.add(Position);
	worldBuilder.components.add(Faction);
	worldBuilder.components.add(Controller);
	worldBuilder.components.add(Health);
	worldBuilder.components.add(Velocity);

	worldBuilder.addSystemsToSchedule(
		CoreSchedule.Startup,
		loadWorldSystem(config.worldConfig, config.scene)
	);

	worldBuilder.addSystems(
		renderSystem,
		spawnShipSystem,
		velocitySystem,
		collisionSystem
	);

	return worldBuilder.build();
}

interface InitConfig {
	worldConfig: WorldConfig
	scene: Phaser.Scene

}