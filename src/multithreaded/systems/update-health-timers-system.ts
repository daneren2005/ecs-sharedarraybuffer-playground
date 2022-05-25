import { getEntitiesWithComponents } from '../components/get-entities';
import { INT_FLOAT_MULTIPLIER } from '../constants';
import World from '../entities/world';

export default function updateHealthTimersSystem(world: World) {
	const health = world.components.health;

	return (delta: number) => {
		getEntitiesWithComponents(world, ['health']).forEach(eid => {
			Atomics.add(health.timeSinceTakenDamage, eid, delta * INT_FLOAT_MULTIPLIER);

			if(health.shields[eid] < health.maxShields[eid]) {
				Atomics.add(health.timeSinceShieldRegeneration, eid, delta * INT_FLOAT_MULTIPLIER);
				if(health.timeSinceShieldRegeneration[eid] > health.timeToRegenerateShields[eid]) {
					Atomics.add(health.shields, eid, 1);
					Atomics.store(health.timeSinceShieldRegeneration, eid, 0);
				}
			}
		});
	};
}