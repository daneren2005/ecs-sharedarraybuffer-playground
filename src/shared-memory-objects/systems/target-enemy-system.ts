import euclideanDistance from '@/math/euclidean-distance';
import Entity from '../entities/entity';
import Ship from '../entities/ship';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';
import Flatbush from 'flatbush';
import Station from '../entities/station';

class TargetEnemySystem {
	world: World;

	constructor(world: World) {
		this.world = world;
	}

	run() {
		let indexedEntities = this.world.entities.filter(entity => !entity.dead);
		if(indexedEntities.length === 0) {
			return;
		}
		let spatialIndex = new Flatbush(indexedEntities.length);
		indexedEntities.forEach(entity => {
			spatialIndex.add(entity.x, entity.y, entity.x + entity.width, entity.y + entity.height);
		});
		spatialIndex.finish();

		let ships = this.world.entities.filter(entity => entity instanceof Ship) as Array<Ship>;
		ships.forEach(entity => {
			let target = getNearestEnemy(spatialIndex, indexedEntities, entity);
			entity.targetPointer = target?.pointer ?? 0;
		});
	}
}

function getNearestEnemy(spatialIndex: Flatbush, indexedEntities: Array<Entity>, ship: Ship): Entity | undefined {
	let nearesetEnemy = getNearestEntity(spatialIndex, indexedEntities, ship, entity => {
		if(entity instanceof Station) {
			return entity !== ship.station;
		} else if(entity instanceof Ship) {
			return entity.station !== ship.station;
		} else {
			return false;
		}
	});

	if(nearesetEnemy) {
		return nearesetEnemy;
	} else {
		let stations = ship.world.entities.filter(entity => entity instanceof Station && entity !== ship.station);
		stations.sort((a, b) => {
			return euclideanDistance(a.x, a.y, ship.x, ship.y) - euclideanDistance(b.x, b.y, ship.x, ship.y);
		});

		return stations[0];
	}
}
function getNearestEntity(spatialIndex: Flatbush, indexedEntities: Array<Entity>, entity: Entity, filter: (entity: Entity) => boolean) {
	let rect = {
		x: entity.x - 50,
		y: entity.y - 50,
		width: entity.width + 100,
		height: entity.height + 100
	};

	let entities = getEntitiesInRange(spatialIndex, indexedEntities, rect).filter(otherEntity => otherEntity !== entity && !otherEntity.dead && filter(otherEntity));
	if(entities.length === 0) {
		rect.x -= 100;
		rect.y -= 100;
		rect.width += 200;
		rect.height += 200;
		entities = getEntitiesInRange(spatialIndex, indexedEntities, rect).filter(otherEntity => otherEntity !== entity && filter(otherEntity));
	}

	entities.sort((a, b) => {
		return euclideanDistance(a.x, a.y, entity.x, entity.y) - euclideanDistance(b.x, b.y, entity.x, entity.y);
	});
	return entities[0] ?? null;
}
function getEntitiesInRange(spatialIndex: Flatbush, indexedEntities: Array<Entity>, range: { x: number, y: number, width: number, height: number }): Array<Entity> {
	return spatialIndex.search(range.x, range.y, range.x + range.width, range.y + range.height).map(index => indexedEntities[index]);
}

createWorkerSystem((world: World) => new TargetEnemySystem(world));