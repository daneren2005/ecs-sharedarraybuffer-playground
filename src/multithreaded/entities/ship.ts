import { INT_FLOAT_MULTIPLIER } from '../constants';
import Entity from './entity';
import World from './world';

export default class Ship extends Entity {
	get color()    { return this.world.components.controller.color[this.world.components.controlled.owner[this.eid]]; }

	get velocityX()    { return this.world.components.velocity.x[this.eid]; }
	set velocityX(val) { this.world.components.velocity.x[this.eid] = val; }
	get velocityY()    { return this.world.components.velocity.y[this.eid]; }
	set velocityY(val) { this.world.components.velocity.y[this.eid] = val; }

	constructor(world: World, stationEid: number) {
		super(world);
		this.addComponents(['entity', 'position', 'health', 'velocity', 'controlled', 'attack']);
		
		this.width = 10 * INT_FLOAT_MULTIPLIER;
		this.height = 5 * INT_FLOAT_MULTIPLIER;
		this.shields = 1;
		this.maxShields = 1;
		this.timeToRegenerateShields = 1_000 * INT_FLOAT_MULTIPLIER;
		this.world.components.velocity.speed[this.eid] = 100;
		world.components.controlled.owner[this.eid] = stationEid;
	}
}