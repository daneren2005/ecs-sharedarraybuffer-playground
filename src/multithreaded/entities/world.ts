import Entity from './entity';
import { EventEmitter } from 'eventemitter3';
import Station from './station';
import spawnShipSystem from '../systems/spawn-ship-system';
import velocitySystem from '../systems/velocity-system';
import collisionSystem from '../systems/collision-system';
import updateHealthTimersSystem from '../systems/update-health-timers-system';
import moveToTargetSystem from '../systems/move-to-target-system';
import targetEnemySystem from '../systems/target-enemy-system';
import Components from '../components/components';
import WorldConfig from './world-config';
import { getEntitiesWithComponents, getTypeBit, getTypeBits, hasComponent, addComponents } from '../components/get-entities';

export default class World extends EventEmitter {
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };
	idCounter: Int32Array;
	components: Components;
	systems: Array<(delta: number) => void> = [];
	systemUpdates: { [s: string]: Array<number> } = {};
	workers: Array<Worker> = [];

	constructor() {
		super();
		this.idCounter = this.createIntegerArray(4);

		this.components = {
			entity: {
				components: this.createIntegerArray(),
				init: this.createIntegerArray(),
				dead: this.createIntegerArray()
			},
			position: {
				x: this.createIntegerArray(),
				y: this.createIntegerArray(),
				width: this.createIntegerArray(),
				height: this.createIntegerArray(),
				angle: this.createIntegerArray()
			},
			velocity: {
				x: this.createIntegerArray(),
				y: this.createIntegerArray(),
				speed: this.createIntegerArray()
			},
			health: {
				shields: this.createIntegerArray(),
				maxShields: this.createIntegerArray(),
				timeToRegenerateShields: this.createIntegerArray(),
				timeSinceShieldRegeneration: this.createIntegerArray(),
				timeSinceTakenDamage: this.createIntegerArray()
			},
			controller: {
				color: this.createIntegerArray(),
				money: this.createIntegerArray()
			},
			controlled: {
				owner: this.createIntegerArray()
			},
			attack: {
				target: this.createIntegerArray()
			}
		};

		this.addSystemWorker(spawnShipSystem);
		this.addSystemWorker(velocitySystem);
		// TODO: Shard into 2 collision threads
		this.addSystemWorker(collisionSystem);
		this.addSystemWorker(updateHealthTimersSystem);
		// TODO: Shard into 2-4 targeting threads
		this.addSystemWorker(targetEnemySystem);
		this.addSystemWorker(moveToTargetSystem);
	}
	// TODO: Resize buffers as we grow in size and recycle dead ids instead of requiring such a ridiculously huge buffer
	private createIntegerArray(size = 65_536) {
		let buffer = new SharedArrayBuffer(size * Int32Array.BYTES_PER_ELEMENT);
		return new Int32Array(buffer);
	}

	load(config: any) {
		config.entities.forEach((entityConfig: any) => {
			let entity;
			switch(entityConfig.type) {
				case 'station':
					entity = new Station(this);
					break;
				default:
					entity = new Entity(this);
					break;
			}
			entity.load(entityConfig);
		});

		if(config.bounds) {
			this.bounds = config.bounds;
		}

		this.workers.forEach(worker => {
			worker.postMessage({
				updateWorld: {
					bounds: this.bounds
				}
			});
		});
	}

	getId() {
		return Atomics.add(this.idCounter, 0, 1) + 1;
	}

	update(delta: number) {
		this.systems.forEach(system => {
			system(delta);
		});
	}

	addSystem(name: string, update: (delta: number) => void) {
		this.systems.push((delta: number) => {
			let start = performance.now();
			update(delta);
			this.systemUpdates[name].push(performance.now() - start);
		});
		this.systemUpdates[name] = [];
	}
	addSystemWorker(func: any) {
		let functionName = func.name;
		let inlineString = `

		(
			${
				(() => {
					let world: any;
					let system = (delta: number) => { console.warn('Updating system before sent'); };

					self.onmessage = function(e) {
						if(e.data.world) {
							let functionName = e.data.functionName;
							world = e.data.world;
							// @ts-expect-error
							system = self[functionName](world);
						} else if(e.data.updateWorld) {
							Object.keys(e.data.updateWorld).forEach(key => {
								world[key] = e.data.updateWorld[key];
							});
						} else if(e.data.delta) {
							system(e.data.delta);

							self.postMessage({
								done: true
							});
						}
					};
				}).toString()
			}
		)()

		${func.toString()}
		${getEntitiesWithComponents.toString()}
		${getTypeBit.toString()}
		${getTypeBits.toString()}
		${hasComponent.toString()}
		${addComponents.toString()}`;

		let start = 0;
		let missedDeltas = 0;
		let blob = new Blob([inlineString], { type: 'text/javascript' });
		let worker = new Worker(window.URL.createObjectURL(blob));
		this.systems.push((delta) => {
			// We don't want to try to update while it is still executing the last update
			if(start) {
				missedDeltas += delta;
				return;
			}

			start = performance.now();
			worker.postMessage({
				delta: delta + missedDeltas
			});
			missedDeltas = 0;
		});

		let config: WorldConfig = {
			idCounter: this.idCounter,
			bounds: this.bounds,
			components: this.components
		};
		this.systemUpdates[functionName] = [];

		worker.postMessage({
			functionName,
			world: config
		});
		worker.onmessage = (e) => {
			if(e.data.done) {
				this.systemUpdates[functionName].push(performance.now() - start);
				start = 0;
			}
		};
		this.workers.push(worker);
	}

	destroy() {
		this.workers.forEach(worker => {
			worker.terminate();
		});
		this.workers = [];
	}
}