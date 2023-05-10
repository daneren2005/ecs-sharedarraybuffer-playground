import { struct, initStruct } from 'thyseus';

@struct
export default class Controller {
	@struct.i32 declare money: number;

	constructor(money = 0) {
		initStruct(this);
		this.money = money;
	}
}