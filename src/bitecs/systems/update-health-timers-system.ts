import { defineQuery, IWorld } from 'bitecs';
import World from '../entities/world';

export default function updateHealthTimersSystem(world: World) {
	const health = world.components.health;
	let healthQuery = defineQuery([health]);

	return (ecs: IWorld, delta: number) => {
		healthQuery(ecs).forEach(eid => {
			health.timeSinceTakenDamage[eid] += delta;

			if(health.shields[eid] < health.maxShields[eid]) {
				health.timeSinceShieldRegeneration[eid] += delta;
				if(health.timeSinceShieldRegeneration[eid] > health.timeToRegenerateShields[eid]) {
					health.shields[eid]++;
					health.timeSinceShieldRegeneration[eid] = 0;
				}
			}
		});

		return ecs;
	};
}