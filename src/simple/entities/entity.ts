import { EventEmitter } from 'eventemitter3';
import World from './world';

export default class Entity extends EventEmitter {
	world: World;

	id: number;
	x = 0;
	y = 0;
	width = 0;
	height = 0;
	angle = 0;
	velocityX = 0;
	velocityY = 0;
	type = 'entity';
	key = 'boid';
	shields = 1;
	maxShields = 1;
	timeToRegenerateShields = 1;
	timeSinceShieldRegeneration = 0;
	timeSinceTakenDamage = 0;
	dead = false;

	constructor(world: World) {
		super();

		this.world = world;
		this.id = world.getId();
	}

	load(config: any) {
		Object.keys(config).forEach((key: string) => {
			// @ts-expect-error
			this[key] = config[key];
		});
	}

	update(delta: number) {
		this.set('x', this.x + this.velocityX * delta);
		this.set('y', this.y + this.velocityY * delta);
		this.set('timeSinceTakenDamage', this.timeSinceTakenDamage + delta);

		if(this.shields < this.maxShields) {
			this.set('timeSinceShieldRegeneration', this.timeSinceShieldRegeneration + delta);
			if(this.timeSinceShieldRegeneration > this.timeToRegenerateShields) {
				this.set('shields', this.shields + 1);
				this.set('timeSinceShieldRegeneration', 0);
			}
		}
	}

	set(prop: string, value: any) {
		// @ts-expect-error
		this[prop] = value;
		this.emit(`${prop}-updated`, value);
	}

	die() {
		// Only emit dead once
		if(this.dead) {
			return;
		}

		this.dead = true;
		this.emit('dead');
	}
	canTakeDamage() {
		return this.timeSinceTakenDamage >= 0.2;
	}
	takeDamage(damage: number) {
		if(!this.canTakeDamage()) {
			return;
		}

		this.set('shields', this.shields - damage);
		this.set('timeSinceTakenDamage', 0);
		if(this.shields < 0) {
			this.die();
		}
	}
}