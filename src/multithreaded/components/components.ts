export default interface Components {
	entity: {
		components: Int32Array,
		init: Int32Array,
		dead: Int32Array
	},
	position: {
		x: Int32Array,
		y: Int32Array,
		width: Int32Array,
		height: Int32Array,
		angle: Int32Array
	},
	velocity: {
		x: Int32Array,
		y: Int32Array,
		speed: Int32Array
	},
	health: {
		shields: Int32Array,
		maxShields: Int32Array,
		timeToRegenerateShields: Int32Array,
		timeSinceShieldRegeneration: Int32Array,
		timeSinceTakenDamage: Int32Array
	},
	controller: {
		color: Int32Array,
		money: Int32Array
	},
	controlled: {
		owner: Int32Array
	},
	attack: {
		target: Int32Array
	}
}