import { EventEmitter } from 'eventemitter3';
import Entity from './entity';
import Station from './station';
import Flatbush from 'flatbush';
import euclideanDistance from '@/math/euclidean-distance';

export default class World extends EventEmitter {
	entities: Array<Entity> = [];
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };
	idCounter = 0;
	spatialIndex?: Flatbush;
	spatialEntities: Array<Entity> = [];

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
		if(index !== -1) {
			this.entities.splice(index, 1);
		}
	}

	update(delta: number) {
		this.spatialEntities = this.entities.slice();
		if(this.spatialEntities.length === 0) {
			this.spatialIndex = undefined;
		} else {
			let index = new Flatbush(this.spatialEntities.length);
			this.spatialEntities.forEach(entity => {
				index.add(entity.x, entity.y, entity.x + entity.width, entity.y + entity.height);
			});
			index.finish();
			this.spatialIndex = index;
		}

		this.entities.forEach(entity => {
			if(entity.dead) {
				return;
			}

			entity.update(delta);
		});
	}

	getNearestEntity(entity: Entity, filter: (entity: Entity) => boolean) {
		let rect = {
			x: entity.x - 50,
			y: entity.y - 50,
			width: entity.width + 100,
			height: entity.height + 100
		};

		// TODO: At the beginning this is slow because we are in a clump of our own units so it returns a lot of results without any enemies
		let entities = this.getEntitiesInRange(rect).filter(otherEntity => otherEntity !== entity && !otherEntity.dead && filter(otherEntity));
		if(entities.length === 0) {
			rect.x -= 100;
			rect.y -= 100;
			rect.width += 200;
			rect.height += 200;
			entities = this.getEntitiesInRange(rect).filter(otherEntity => otherEntity !== entity && filter(otherEntity));
		}

		entities.sort((a, b) => {
			return euclideanDistance(a.x, a.y, entity.x, entity.y) - euclideanDistance(b.x, b.y, entity.x, entity.y);
		});
		return entities[0] ?? null;
	}
	getEntitiesInRange(range: { x: number, y: number, width: number, height: number }): Array<Entity> {
		if(!this.spatialIndex) {
			return [];
		}

		let indices = this.spatialIndex.search(range.x, range.y, range.x + range.width, range.y + range.height);
		return indices.map(index => this.spatialEntities[index]);
	}

	getId() {
		this.idCounter++;
		return this.idCounter;
	}
}