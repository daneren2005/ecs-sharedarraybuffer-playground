import { EventEmitter } from 'eventemitter3';
import Entity from './entity';
import Station from './station';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts/src/index.esm';

export default class World extends EventEmitter {
	entities: Array<Entity> = [];
	bounds: {
		width: number,
		height: number
	} = { width: 0, height: 0 };
	idCounter = 0;
	// @ts-expect-error
	quadtree: Quadtree;

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
		this.quadtree = new Quadtree({
			width: this.bounds.width,
			height: this.bounds.height
		});
		this.entities.forEach(entity => {
			this.quadtree.insert(new Rectangle({
				x: entity.x,
				y: entity.y,
				width: entity.width,
				height: entity.height,
				data: {
					entity
				}
			}));
		});

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
		return this.quadtree.retrieve(new Rectangle(range)).map((result: any) => result.data.entity);
	}

	getId() {
		this.idCounter++;
		return this.idCounter;
	}
}

function euclideanDistance(x1: number, y1: number, x2: number, y2: number): number {
	return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}