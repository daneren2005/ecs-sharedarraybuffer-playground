import { BaseWorld, EntityFactory } from '@daneren2005/shared-memory-ecs';
import { registry } from '../components';
import type { Components, Config } from '../components';
import GameComponentSystem from '../systems/game-component-system';
import type { Bounds } from '../systems/game-component-system';

import { velocityUpdate } from '../systems/velocity-update';
import { spawnShipUpdate } from '../systems/spawn-ship-update';
import { updateHealthTimersUpdate } from '../systems/update-health-timers-update';
import { collisionUpdate } from '../systems/collision-update';
import { targetEnemyUpdate } from '../systems/target-enemy-update';
import { moveToTargetUpdate } from '../systems/move-to-target-update';

import VelocityWorker from '../systems/velocity.worker?worker';
import SpawnShipWorker from '../systems/spawn-ship.worker?worker';
import UpdateHealthTimersWorker from '../systems/update-health-timers.worker?worker';
import CollisionWorker from '../systems/collision.worker?worker';
import TargetEnemyWorker from '../systems/target-enemy.worker?worker';
import MoveToTargetWorker from '../systems/move-to-target.worker?worker';

// The scene format produced by generate-scene: a flat list of entity configs plus the play-area size.
export interface Scene {
	entities: Array<Config>
	bounds: Bounds
}

// The game's world.  It supplies the component registry + the per-type templates (a station's / ship's shared
// static config) to the library's BaseWorld, and wires up the six systems that actually play the game.  All of
// the heavy lifting - memory allocation, load/save, running systems on / off the main thread - comes from the
// library; this class only declares what THIS game is made of.
export default class GameWorld extends BaseWorld<typeof registry> {
	bounds: Bounds = { width: 0, height: 0 };

	constructor() {
		super(registry, {
			factory: new EntityFactory<Components, Config>({
				// A station: a big, slow-regenerating hub that banks money and spends it spawning ships.
				station: { type: 'station', width: 20, height: 20, maxShields: 2, timeToRegenerateShields: 5 },
				// A ship: small, fast, hunts enemies.  `attacks` opts it into the targeting component and `owner`
				// (its station's eid) is supplied per-spawn.
				ship: { type: 'ship', width: 10, height: 5, maxShields: 1, timeToRegenerateShields: 1, speed: 100, attacks: true }
			})
		});
	}

	load(scene: Scene) {
		this.bounds = scene.bounds;
		// BaseWorld#load clears the systems (and existing entities), so the scene's entities are loaded first and
		// the systems added afterwards - their constructors then pick up every entity already in the world.
		super.load({ entities: scene.entities });
		this.initSystems();
		// Kicks off worker initialization; runs work regardless of whether this has resolved yet.
		this.init();
	}

	private initSystems() {
		// Spend money to spawn ships.
		this.addSystem(new GameComponentSystem(this, {
			name: 'spawnShipSystem',
			required: ['controller', 'position'],
			updateFunction: spawnShipUpdate,
			getWorker: () => new SpawnShipWorker()
		}));
		// Move everything and bounce it off the walls.
		this.addSystem(new GameComponentSystem(this, {
			name: 'velocitySystem',
			required: ['position', 'velocity'],
			updateFunction: velocityUpdate,
			getWorker: () => new VelocityWorker()
		}));
		// Resolve collisions, damage, deaths and bounties.
		this.addSystem(new GameComponentSystem(this, {
			name: 'collisionSystem',
			required: ['velocity', 'position', 'health', 'controlled', 'entity'],
			updateFunction: collisionUpdate,
			getWorker: () => new CollisionWorker(),
			queries: {
				collidable: { required: ['position', 'health', 'entity'], optional: ['controller', 'controlled'] }
			}
		}));
		// Regenerate shields + tick the damage-cooldown timers.
		this.addSystem(new GameComponentSystem(this, {
			name: 'updateHealthTimersSystem',
			required: ['health'],
			updateFunction: updateHealthTimersUpdate,
			getWorker: () => new UpdateHealthTimersWorker()
		}));
		// Pick a target for every ship.
		this.addSystem(new GameComponentSystem(this, {
			name: 'targetEnemySystem',
			required: ['velocity', 'attack', 'position', 'controlled'],
			updateFunction: targetEnemyUpdate,
			getWorker: () => new TargetEnemyWorker(),
			queries: {
				collidable: { required: ['position', 'health'], optional: ['controller', 'controlled'] },
				stations: { required: ['controller', 'position'] }
			}
		}));
		// Steer each ship toward its target.
		this.addSystem(new GameComponentSystem(this, {
			name: 'moveToTargetSystem',
			required: ['velocity', 'attack', 'position'],
			updateFunction: moveToTargetUpdate,
			getWorker: () => new MoveToTargetWorker(),
			queries: {
				targets: { required: ['position'] }
			}
		}));
	}
}
