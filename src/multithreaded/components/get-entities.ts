import WorldConfig from '../entities/world-config';
import getTypeBits from './get-type-bits';

// NOTE: All of these have to live in a single file in order to make sure that inlining them into the web worker doesn't try to reference dynamic __WEBPACK_IMPORT
// Components and WorldConfig can live separately since they are just type hints that get stripped from the js code anyways
export function getEntitiesWithComponents(world: WorldConfig, types: Array<string>) {
	let typeBits = getTypeBits(types);

	let eids = [];
	let currentCounter = Atomics.load(world.idCounter, 0);
	for(let eid = 0; eid <= currentCounter; eid++) {
		if((Atomics.load(world.components.entity.components, eid) & typeBits) === typeBits && Atomics.load(world.components.entity.dead, eid) === 0) {
			eids.push(eid);
		}
	}

	return eids;
}

export function getAllEntitiesWithComponents(world: WorldConfig, types: Array<string>) {
	let typeBits = getTypeBits(types);

	let eids = [];
	let currentCounter = Atomics.load(world.idCounter, 0);
	for(let eid = 0; eid <= currentCounter; eid++) {
		if((Atomics.load(world.components.entity.components, eid) & typeBits) === typeBits) {
			eids.push(eid);
		}
	}

	return eids;
}