import Entity from './entity';
import Station from './station';

export default class Ship extends Entity {
	get color()    { return this.world.components.controller.color[this.world.components.controlled.owner[this.eid]]; }

	get velocityX()    { return this.world.components.velocity.x[this.eid]; }
	set velocityX(val) { this.world.components.velocity.x[this.eid] = val; }
	get velocityY()    { return this.world.components.velocity.y[this.eid]; }
	set velocityY(val) { this.world.components.velocity.y[this.eid] = val; }

	get station() { return this.world.getEntity(this.eid); }

	constructor(station: Station) {
		super(station.world);

		let world = station.world;
		this.addComponent(world.components.velocity);
		this.addComponent(world.components.controlled);
		this.addComponent(world.components.attack);
		
		this.width = 10;
		this.height = 5;
		this.shields = 1;
		this.maxShields = 1;
		this.timeToRegenerateShields = 1;
		this.world.components.velocity.speed[this.eid] = 100;
		world.components.controlled.owner[this.eid] = station.eid;
	}
}