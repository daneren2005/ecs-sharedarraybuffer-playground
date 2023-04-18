import { Type } from 'bagelecs';

export default {
	shields: Type.number,
	maxShields: Type.number,
	timeToRegenerateShields: Type.number,
	timeSinceShieldRegeneration: Type.number,
	timeSinceTakenDamage: Type.number,
	dead: Type.bool
};