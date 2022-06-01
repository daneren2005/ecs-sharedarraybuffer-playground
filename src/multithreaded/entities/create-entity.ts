import WorldConfig from './world-config';

export function createEntity(world: WorldConfig) {
	let eid = getRecycledId(world);
	while(eid === false) {
		eid = getRecycledId(world);
	}

	return eid;
}

function getRecycledId(world: WorldConfig): number | false {
	let latestRecycledIndex = Atomics.load(world.recycledIndexes, 0);
	if(latestRecycledIndex > 0) {
		let eid = Atomics.load(world.recycledIds, latestRecycledIndex);
		// Basically ends up being a spin lock waiting for killEntity to finish setting what the dang eid is
		if(eid === 0) {
			return false;
		}
		// If another thread has grabbed this recycled index already or added a new one already, just start over again to make sure it is always the top of the stack
		let currentLatestRecycledIndex = Atomics.compareExchange(world.recycledIndexes, 0, latestRecycledIndex, latestRecycledIndex - 1);
		if(currentLatestRecycledIndex !== latestRecycledIndex) {
			return false;
		}
		// Try to set the recycledId here back to 0 as soon as possible, but don't overwrite if another ship has already died here
		// NOTE: I don't THINK this can cause an issue with killEntity since it sets it to a different eid AFTER it increments the index number
		Atomics.compareExchange(world.recycledIds, latestRecycledIndex, eid, 0);
		Atomics.store(world.components.entity.init, eid, 0);
		Atomics.store(world.components.entity.components, eid, 0);
		Atomics.store(world.components.entity.dead, eid, 0);

		return eid;
	} else {
		return Atomics.add(world.idCounter, 0, 1) + 1;
	}
}