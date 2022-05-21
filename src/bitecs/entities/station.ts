import Entity from './entity';
import World from './world';

export default class Station extends Entity {
	get color()    { return this.world.components.controller.color[this.eid]; }
	set color(val) { this.world.components.controller.color[this.eid] = val; }
	get money()    { return this.world.components.controller.money[this.eid]; }
	set money(val) { this.world.components.controller.money[this.eid] = val; }

	constructor(world: World) {
		super(world);
		this.addComponent(world.components.controller);

		this.key = 'station';
		this.width = 20;
		this.height = 20;
		this.shields = 2;
		this.maxShields = 2;
		this.timeToRegenerateShields = 5;
	}
}