import computeAngle from '@/math/compute-angle';
import distance from '@/math/distance';
import euclideanDistance from '@/math/euclidean-distance';
import Entity from './entity';
import Station from './station';
// @ts-expect-error
import PhaserMath from 'phaser/src/math';

export default class Ship extends Entity {
	station: Station;
	speed = 100;

	constructor(station: Station) {
		super(station.world);
		this.station = station;
		this.width = 10;
		this.height = 5;
	}

	get color(): number {
		return this.station.color;
	}

	update(delta: number) {
		this.keepInBounds();

		let nearesetEnemy = this.getNearestEnemy();
		if(nearesetEnemy) {
			// Bounce off enemy doing damage
			if(distance(nearesetEnemy.x, nearesetEnemy.y, this.x, this.y) < Math.max(this.width, nearesetEnemy.width)) {
				this.collide(nearesetEnemy);
				this.set('velocityX', -this.velocityX);
				this.set('velocityY', -this.velocityY);
			}
			// Move towards enemy
			else {
				let force = this.getMoveTowardsForce(nearesetEnemy);
				let newVelocity = new PhaserMath.Vector2(this.velocityX + force.x * 4, this.velocityY + force.y * 4);
				newVelocity.normalize();

				this.set('velocityX', newVelocity.x * this.speed);
				this.set('velocityY', newVelocity.y * this.speed);

				this.set('angle', computeAngle(this.velocityX, this.velocityY));
			}
		}

		// TODO: This should not be needed, but somehow ships are staying alive even after station is destroyed
		if(this.station.dead) {
			this.die();
		}

		super.update(delta);
	}
	
	keepInBounds() {
		if(this.x < 0) {
			this.set('velocityX', Math.abs(this.velocityX));
		} else if(this.x > this.world.bounds.width) {
			this.set('velocityX', -Math.abs(this.velocityX));
		}

		if(this.y < 0) {
			this.set('velocityY', Math.abs(this.velocityY));
		} else if(this.y > this.world.bounds.height) {
			this.set('velocityY', -Math.abs(this.velocityY));
		}
	}

	getNearestEnemy(): Entity | null {
		let nearesetEnemy = this.world.getNearestEntity(this, entity => {
			if(entity instanceof Station) {
				return entity !== this.station;
			} else if(entity instanceof Ship) {
				return entity.station !== this.station;
			} else {
				return false;
			}
		});

		if(nearesetEnemy) {
			return nearesetEnemy;
		} else {
			let stations = this.world.entities.filter(entity => entity instanceof Station && entity !== this.station);
			stations.sort((a, b) => {
				return euclideanDistance(a.x, a.y, this.x, this.y) - euclideanDistance(b.x, b.y, this.x, this.y);
			});

			return stations[0];
		}
	}
	getMoveTowardsForce(entity: Entity) {
		let force = new PhaserMath.Vector2(entity.x - this.x, entity.y - this.y);
		force.normalize();
		return force;
	}

	collide(target: Entity) {
		if(!this.canTakeDamage() || !target.canTakeDamage()) {
			return;
		}

		let enemyWorth = 1;
		if(target instanceof Station) {
			enemyWorth = target.ships.length;
		}

		this.takeDamage(1);
		target.takeDamage(1);

		if(target.dead) {
			this.station.set('money', this.station.money + enemyWorth);
		}
		if(this.dead) {
			if(target instanceof Station) {
				target.set('money', target.money + 1);
			} else if(target instanceof Ship) {
				target.station.set('money', target.station.money + 1);
			}
		}
	}
}