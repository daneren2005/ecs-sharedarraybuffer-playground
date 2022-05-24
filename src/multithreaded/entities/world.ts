import Entity from './entity';
import { EventEmitter } from 'eventemitter3';
import Station from './station';
import spawnShipSystem from '../systems/spawn-ship-system';
import velocitySystem from '../systems/velocity-system';
import collisionSystem from '../systems/collision-system';
import updateHealthTimersSystem from '../systems/update-health-timers-system';
import moveToTargetSystem from '../systems/move-to-target-system';
import targetEnemySystem from '../systems/target-enemy-system';

export default class World extends EventEmitter {
	// TODO: Change bounds to be a SharedArrayBuffer we can pass to workers
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };
	idCounter = 0;
	components: {
		entity: {
			components: Int32Array,
			dead: Int32Array
		},
		position: {
			x: Int32Array,
			y: Int32Array,
			width: Int32Array,
			height: Int32Array,
			angle: Int32Array
		},
		velocity: {
			x: Int32Array,
			y: Int32Array,
			speed: Int32Array
		},
		health: {
			shields: Int32Array,
			maxShields: Int32Array,
			timeToRegenerateShields: Int32Array,
			timeSinceShieldRegeneration: Int32Array,
			timeSinceTakenDamage: Int32Array
		},
		controller: {
			color: Int32Array,
			money: Int32Array
		},
		controlled: {
			owner: Int32Array
		},
		attack: {
			target: Int32Array
		}
	};
	systems: Array<(delta: number) => void> = [];

	constructor() {
		super();

		this.components = {
			entity: {
				components: this.createIntegerArray(),
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

		this.systems.push(spawnShipSystem(this));
		this.systems.push(velocitySystem(this));
		this.systems.push(collisionSystem(this));
		this.systems.push(updateHealthTimersSystem(this));
		this.systems.push(targetEnemySystem(this));
		this.systems.push(moveToTargetSystem(this));
	}
	// TODO: Resize buffers as we grow in size and recycle dead ids instead of requiring such a ridiculously huge buffer
	private createIntegerArray(size = 65_536) {
		let buffer = new SharedArrayBuffer(size);
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
			this.addEntity(entity);
		});

		if(config.bounds) {
			this.bounds = config.bounds;
		}
	}
	addEntity(entity: Entity) {
		this.emit('entity-added', entity);
	}
	getEntitiesWithComponents(types: Array<string>) {
		let typeBits = this.getTypeBits(types);

		let eids = [];
		for(let eid = 0; eid <= this.idCounter; eid++) {
			if((Atomics.load(this.components.entity.components, eid) & typeBits) === typeBits && Atomics.load(this.components.entity.dead, eid) === 0) {
				eids.push(eid);
			}
		}

		return eids;
	}
	getAllEntitiesWithComponents(types: Array<string>) {
		let typeBits = this.getTypeBits(types);

		let eids = [];
		for(let eid = 0; eid <= this.idCounter; eid++) {
			if((Atomics.load(this.components.entity.components, eid) & typeBits) === typeBits) {
				eids.push(eid);
			}
		}

		return eids;
	}
	hasComponent(eid: number, type: string) {
		return (Atomics.load(this.components.entity.components, eid) & this.getTypeBit(type)) > 0;
	}
	getTypeBits(types: Array<string>): number {
		let typeBits = 0;
		types.forEach(type => {
			typeBits |= this.getTypeBit(type);
		});

		return typeBits;
	}
	getTypeBit(type: string): number {
		switch(type) {
			case 'entity':
				return 1;
			case 'position':
				return 2 ** 1;
			case 'velocity':
				return 2 ** 2;
			case 'health':
				return 2 ** 3;
			case 'controller':
				return 2 ** 4;
			case 'controlled':
				return 2 ** 5;
			case 'attack':
				return 2 ** 6;
			default:
				return 0;
		}
	}

	getId() {
		this.idCounter++;
		return this.idCounter;
	}

	update(delta: number) {
		this.systems.forEach(system => {
			system(delta);
		});
	}
}