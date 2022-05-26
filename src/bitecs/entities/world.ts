import {
	createWorld,
	IWorld,
	removeEntity
} from 'bitecs';
import Entity from './entity';
import { EventEmitter } from 'eventemitter3';
import Station from './station';
import spawnShipSystem from '../systems/spawn-ship-system';
import components from '../components';
import velocitySystem from '../systems/velocity-system';
import collisionSystem from '../systems/collision-system';
import targetEnemySystem from '../systems/target-enemy-system';
import createQuadTreeSystem from '../systems/create-quad-tree-system';
import updateHealthTimersSystem from '../systems/update-health-timers-system';
import moveToTargetSystem from '../systems/move-to-target-system';

export default class World extends EventEmitter {
	ecs: IWorld;
	eidMap: Map<number, Entity> = new Map();
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };
	components = components;
	systems: Array<(world: IWorld, delta: number) => IWorld> = [];
	systemUpdates: { [s: string]: Array<number> } = {};

	get entities() { return [...this.eidMap.values()]; }

	constructor() {
		super();
		this.ecs = createWorld();

		this.addSystem('quadTreeSystem', createQuadTreeSystem(this));
		this.addSystem('spawnShipSystem', spawnShipSystem(this));
		this.addSystem('targetEnemySystem', targetEnemySystem(this));
		this.addSystem('moveToTargetSystem', moveToTargetSystem(this));
		this.addSystem('velocitySystem', velocitySystem(this));
		this.addSystem('collisionSystem', collisionSystem(this));
		this.addSystem('updateHealthTimersSystem', updateHealthTimersSystem(this));
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
		this.eidMap.set(entity.eid, entity);
	}
	removeEntity(eid: number) {
		removeEntity(this.ecs, eid);
		this.eidMap.delete(eid);
	}
	getEntity(eid: number) {
		return this.eidMap.get(eid) ?? null;
	}

	update(delta: number) {
		this.systems.forEach(system => {
			system(this.ecs, delta);
		});
	}

	addSystem(name: string, update: (world: IWorld, delta: number) => void) {
		this.systems.push((world: IWorld, delta: number) => {
			let start = performance.now();
			update(world, delta);
			this.systemUpdates[name].push(performance.now() - start);

			return world;
		});
		this.systemUpdates[name] = [];
	}
}