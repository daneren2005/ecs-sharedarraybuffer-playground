import Entity from './entity';
import Station from './station';
const Geom = require('phaser/src/geom');
const PhaserMath = require('phaser/src/math');

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
				let enemyWorth = 1;
				if(nearesetEnemy instanceof Station) {
					enemyWorth = nearesetEnemy.ships.length + 10;
				}

				this.collide(nearesetEnemy);

				if(nearesetEnemy.dead) {
					this.station.set('money', this.station.money + enemyWorth);
				}
				this.set('velocityX', -this.velocityX);
				this.set('velocityY', -this.velocityY);
			}
			// Move towards enemy
			else {
				let force = this.getMoveTowardsForce(nearesetEnemy);
				let newVelocity = new PhaserMath.Vector2(this.velocityX + force.x, this.velocityY + force.y);
				newVelocity.normalize();

				this.set('velocityX', newVelocity.x * this.speed);
				this.set('velocityY', newVelocity.y * this.speed);

				this.set('angle', computeAngle(new PhaserMath.Vector2(this.velocityX, this.velocityY)));
			}
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
		let enemies = this.world.entities.filter(entity => {
			if(entity instanceof Station) {
				return entity !== this.station;
			} else if(entity instanceof Ship) {
				return entity.station !== this.station;
			} else {
				return false;
			}
		});

		enemies.sort((a, b) => {
			return distance(a.x, a.y, this.x, this.y) - distance(b.x, b.y, this.x, this.y);
		});
		return enemies[0];
	}
	getMoveTowardsForce(entity: Entity) {
		let force = new PhaserMath.Vector2(entity.x - this.x, entity.y - this.y);
		force.normalize();
		return force;
	}

	collide(target: Entity) {
		this.takeDamage(1);
		target.takeDamage(1);
	}
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function computeAngle(velocity: number) {
	let zeroPoint = new Geom.Point(0, 0);
	let angleRad = PhaserMath.Angle.BetweenPoints(zeroPoint, velocity);
	return PhaserMath.RadToDeg(angleRad);
}