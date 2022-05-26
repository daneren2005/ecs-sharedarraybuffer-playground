import { addComponents } from '../components/get-entities';
import { INT_FLOAT_MULTIPLIER } from '../constants';
import Entity from './entity';
import World from './world';

export default class Station extends Entity {
	get color()    { return this.world.components.controller.color[this.eid]; }
	set color(val) { this.world.components.controller.color[this.eid] = val; }
	get money()    { return this.world.components.controller.money[this.eid]; }
	set money(val) { this.world.components.controller.money[this.eid] = val; }

	constructor(world: World) {
		super(world);
		addComponents(this.world.components, this.eid, ['entity', 'position', 'health', 'controller']);

		this.key = 'station';
		this.width = 20 * INT_FLOAT_MULTIPLIER;
		this.height = 20 * INT_FLOAT_MULTIPLIER;
		this.shields = 2;
		this.maxShields = 2;
		this.timeToRegenerateShields = 5_000 * INT_FLOAT_MULTIPLIER;

		Atomics.store(world.components.entity.init, this.eid, 1);
	}
}