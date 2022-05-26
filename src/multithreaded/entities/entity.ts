import { EventEmitter } from 'eventemitter3';
import { INT_FLOAT_MULTIPLIER } from '../constants';
import World from './world';

export default class Entity extends EventEmitter {
	world: World;
	eid: number;

	// Position
	get x()    { return this.world.components.position.x[this.eid]; }
	set x(val) { this.world.components.position.x[this.eid] = val; }
	get y()    { return this.world.components.position.y[this.eid]; }
	set y(val) { this.world.components.position.y[this.eid] = val; }
	get width()    { return this.world.components.position.width[this.eid]; }
	set width(val) { this.world.components.position.width[this.eid] = val; }
	get height()    { return this.world.components.position.height[this.eid]; }
	set height(val) { this.world.components.position.height[this.eid] = val; }

	// Health
	get shields()    { return this.world.components.health.shields[this.eid]; }
	set shields(val) { this.world.components.health.shields[this.eid] = val; }
	get maxShields()    { return this.world.components.health.maxShields[this.eid]; }
	set maxShields(val) { this.world.components.health.maxShields[this.eid] = val; }
	get timeToRegenerateShields()    { return this.world.components.health.timeToRegenerateShields[this.eid]; }
	set timeToRegenerateShields(val) { this.world.components.health.timeToRegenerateShields[this.eid] = val; }
	get timeSinceShieldRegeneration()    { return this.world.components.health.timeSinceShieldRegeneration[this.eid]; }
	set timeSinceShieldRegeneration(val) { this.world.components.health.timeSinceShieldRegeneration[this.eid] = val; }
	get timeSinceTakenDamage()    { return this.world.components.health.timeSinceTakenDamage[this.eid]; }
	set timeSinceTakenDamage(val) { this.world.components.health.timeSinceTakenDamage[this.eid] = val; }
	get dead()    { return this.world.components.health.shields[this.eid]; }
	set dead(val) { this.world.components.health.shields[this.eid] = val; }

	type = 'entity';
	key = 'boid';

	constructor(world: World) {
		super();
		this.eid = world.getId();
		this.world = world;

		this.shields = 1;
		this.maxShields = 1;
		this.timeToRegenerateShields = 1;
		this.timeSinceShieldRegeneration = 0;
		this.timeSinceTakenDamage = 0;
		this.dead = 0;
	}

	load(config: any) {
		// TODO: Need a way which does not rely on manually setup get/set.  Maybe in our own system define how it is serialized as part of the component registration?
		Object.keys(config).forEach((key: string) => {
			if(key === 'x' || key === 'y') {
				this[key] = config[key] * INT_FLOAT_MULTIPLIER;
			} else {
				// @ts-expect-error
				this[key] = config[key];
			}
		});
	}
}