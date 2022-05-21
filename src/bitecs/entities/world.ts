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

	get entities() { return [...this.eidMap.values()]; }

	constructor() {
		super();
		this.ecs = createWorld();

		this.systems.push(createQuadTreeSystem(this));
		this.systems.push(spawnShipSystem(this));
		this.systems.push(targetEnemySystem(this));
		this.systems.push(moveToTargetSystem(this));
		this.systems.push(velocitySystem(this));
		this.systems.push(collisionSystem(this));
		this.systems.push(updateHealthTimersSystem(this));
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
}