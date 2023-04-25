import { struct, initStruct } from 'thyseus';

@struct
export default class Health {
	@struct.i32 declare shields: number;
	@struct.i32 declare maxShields: number;
	@struct.f32 declare timeToRegenerateShields: number;
	@struct.f32 declare timeSinceShieldRegeneration: number;
	@struct.f32 declare timeSinceTakenDamage: number;
	@struct.bool declare dead: boolean;

	constructor(maxShields = 1, timeToRegenerateShields = 1) {
		initStruct(this);

		this.shields = this.maxShields = maxShields;
		this.timeToRegenerateShields = timeToRegenerateShields;
		this.timeSinceShieldRegeneration = this.timeSinceTakenDamage = 0;
		this.dead = false;
	}
}