import WorldConfig from '../entities/world-config';
import Components from './components';

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

export function getTypeBit(type: string): number {
	switch(type) {
		case 'entity':
			return 1;
		case 'position':
			return 2 ** 1;
		case 'velocity':
			return 2 ** 2;
		case 'health':
			return 2 ** 3;
		case 'controller':
			return 2 ** 4;
		case 'controlled':
			return 2 ** 5;
		case 'attack':
			return 2 ** 6;
		default:
			return 0;
	}
}
export function getTypeBits(types: Array<string>): number {
	let typeBits = 0;
	types.forEach(type => {
		typeBits |= getTypeBit(type);
	});

	return typeBits;
}

export function hasComponent(components: Components, eid: number, type: string) {
	return (Atomics.load(components.entity.components, eid) & getTypeBit(type)) > 0;
}