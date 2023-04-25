import { struct, initStruct } from 'thyseus';

@struct
export default class Controlled {
	// TODO: This should really be an eid!
	@struct.f32 declare color: number;

	constructor(color = 0) {
		initStruct(this);
		this.color = color;
	}
}