import { struct, initStruct } from 'thyseus';

@struct
export default class Velocity {
	@struct.f32 declare x: number;
	@struct.f32 declare y: number;
	@struct.f32 declare speed: number;

	constructor(x = 0, y = 0, speed = 100) {
		initStruct(this);
		
		this.x = x;
		this.y = y;
		this.speed = speed;
	}
}