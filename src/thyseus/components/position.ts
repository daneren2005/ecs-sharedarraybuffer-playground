import { struct, initStruct } from 'thyseus';

@struct
export default class Position {
	@struct.f32 declare x: number;
	@struct.f32 declare y: number;
	@struct.f32 declare width: number;
	@struct.f32 declare height: number;
	@struct.f32 declare angle: number;

	constructor(x = 0, y = 0, width = 1, height = 1, angle = 0) {
		initStruct(this);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.angle = angle;
	}
}