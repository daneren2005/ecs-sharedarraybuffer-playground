import distance from '@/math/distance';
import Entity from '../entities/entity';
import Ship from '../entities/ship';
import Station from '../entities/station';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';
import Flatbush from 'flatbush';

class CollisionSystem {
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
		ships.forEach(ship => {
			let entitiesInRange = spatialIndex.search(
				ship.x,
				ship.y,
				ship.x + ship.width,
				ship.y + ship.height
			).map(index => indexedEntities[index]) as Array<Entity>;

			entitiesInRange = entitiesInRange.filter(entity => {
				if(entity instanceof Station) {
					return entity !== ship.station;
				} else if(entity instanceof Ship) {
					return entity.station !== ship.station;
				} else {
					return false;
				}
			});

			let collisions = entitiesInRange.filter(entity => distance(entity.x, entity.y, ship.x, ship.y) < Math.max(ship.width, entity.width));
			if(collisions.length) {
				collide(ship, collisions[0]);
				ship.velocityX = -ship.velocityX;
				ship.velocityY = -ship.velocityY;
			}
		});
	}
}

function collide(ship: Ship, target: Entity) {
	if(!ship.canTakeDamage() || !target.canTakeDamage()) {
		return;
	}

	let enemyWorth = 1;
	if(target instanceof Station) {
		enemyWorth = target.ships.length;
	}

	ship.takeDamage(1);
	target.takeDamage(1);

	if(target.dead) {
		ship.station!.addMoney(enemyWorth);
	}
	if(ship.dead) {
		if(target instanceof Station) {
			target.addMoney(1);
		} else if(target instanceof Ship) {
			target.station!.addMoney(1);
		}
	}
}

createWorkerSystem((world: World) => new CollisionSystem(world));