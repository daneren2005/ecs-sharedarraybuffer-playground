import getTypeBit from './get-type-bit';

export default function getTypeBits(types: Array<string>): number {
	let typeBits = 0;
	types.forEach(type => {
		typeBits |= getTypeBit(type);
	});

	return typeBits;
}