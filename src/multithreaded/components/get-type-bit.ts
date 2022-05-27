export default function getTypeBit(type: string): number {
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