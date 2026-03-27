import { defineQuery } from 'bitecs';
import components from '../components';
import { GameWorld } from './game-world';

export default function updateHealthTimersSystem(_context?: unknown) {
	const health = components.health;
	let healthQuery = defineQuery([health]);

	return (ecs: GameWorld, delta: number) => {
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