import WorldConfig from './world-config';

export function killEntity(world: WorldConfig, eid: number) {
	Atomics.store(world.components.entity.dead, eid, 1);

	// NOTE: There will be a gap time where another thread can try to grab this recycled id before it is actually set
	let oldIndex = Atomics.add(world.recycledIndexes, 0, 1);
	Atomics.store(world.recycledIds, oldIndex + 1, eid);
}