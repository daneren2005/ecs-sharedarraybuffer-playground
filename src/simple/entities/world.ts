import { EventEmitter } from 'eventemitter3';
import Entity from './entity';
import Station from './station';

export default class World extends EventEmitter {
	entities: Array<Entity> = [];
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };

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
		this.entities.push(entity);
		entity.on('dead', () => {
			this.removeEntity(entity);
		});
		this.emit('entity-added', entity);
	}
	removeEntity(entity: Entity) {
		let index = this.entities.indexOf(entity);
		if(index >= 0) {
			this.entities.splice(index, 1);
		}
	}

	update(delta: number) {
		this.entities.forEach(entity => {
			entity.update(delta);
		});
	}
}