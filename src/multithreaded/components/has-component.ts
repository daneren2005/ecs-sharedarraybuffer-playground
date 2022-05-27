import Components from './components';
import getTypeBit from './get-type-bit';

export default function hasComponent(components: Components, eid: number, type: string) {
	return (Atomics.load(components.entity.components, eid) & getTypeBit(type)) > 0;
}