import { Types } from 'bitecs';

export default {
	shields: Types.i32,
	maxShields: Types.i32,
	timeToRegenerateShields: Types.f32,
	timeSinceShieldRegeneration: Types.f32,
	timeSinceTakenDamage: Types.f32,
	dead: Types.ui8
};