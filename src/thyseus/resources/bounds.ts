import { struct } from 'thyseus';

@struct
export default class Bounds {
	@struct.f32 declare width: number;
	@struct.f32 declare height: number;
}