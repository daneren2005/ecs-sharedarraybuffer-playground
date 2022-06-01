import { getEntitiesWithComponents } from '../entities/get-entities';
import WorldConfig from '../entities/world-config';

export default function updateHealthTimersSystem(world: WorldConfig) {
	const health = world.components.health;

	return (delta: number) => {
		getEntitiesWithComponents(world, ['health']).forEach(eid => {
			Atomics.add(health.timeSinceTakenDamage, eid, delta * 1_000);

			if(Atomics.load(health.shields, eid) < Atomics.load(health.maxShields, eid)) {
				Atomics.add(health.timeSinceShieldRegeneration, eid, delta * 1_000);
				if(Atomics.load(health.timeSinceShieldRegeneration, eid) > Atomics.load(health.timeToRegenerateShields, eid)) {
					Atomics.add(health.shields, eid, 1);
					Atomics.store(health.timeSinceShieldRegeneration, eid, 0);
				}
			}
		});
	};
}