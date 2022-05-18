import { EventEmitter } from 'eventemitter3';
import Entity from './entity';
import Station from './station';

export default class World extends EventEmitter {
	entities: Array<Entity> = [];
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };
	idCounter = 0;

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

	getNearestEntity(entity: Entity, filter: (entity: Entity) => boolean) {
		let entities = this.entities.filter(filter);
		entities.sort((a, b) => {
			return distance(a.x, a.y, entity.x, entity.y) - distance(b.x, b.y, entity.x, entity.y);
		});
		return entities[0] ?? null;
	}

	getId() {
		this.idCounter++;
		return this.idCounter;
	}
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}