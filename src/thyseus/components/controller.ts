import { struct, initStruct } from 'thyseus';

@struct
export default class Controller {
	@struct.f32 declare color: number;
	@struct.i32 declare money: number;

	constructor(color = 0, money = 0) {
		initStruct(this);
		this.color = color;
		this.money = money;
	}
}