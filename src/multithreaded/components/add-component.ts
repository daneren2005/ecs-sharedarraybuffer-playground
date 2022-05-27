import Components from './components';
import getTypeBits from './get-type-bits';

export default function addComponents(components: Components, eid: number, types: Array<string>) {
	Atomics.or(components.entity.components, eid, getTypeBits(types));
}