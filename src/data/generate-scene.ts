const colors = [
	0xd50000,
	0x2962ff,
	0xffffff,
	0xff6d00,
	0x76ff03,
	0xaa00ff,
	0x77e8de,
	0xf3e28d,
	0xde62ab,
	0x39ab62
];

export default function generateScene(options: OptionsConfig) {
	let entities: Array<any> = [];

	for(let i = 0; i < (options.stations ?? 0); i++) {
		let { x, y } = getPositionNotWithin(entities, options.width, options.height, 250);

		entities.push({
			x,
			y,
			type: 'station',
			color: colors[i] ?? Math.floor(Math.random() * 16777215),
			money: options.shipsPerStation ?? 10
		});
	}

	return {
		entities,
		bounds: {
			width: options.width,
			height: options.height
		}
	};
}

function getPositionNotWithin(entities: Array<any>, maxWidth: number, maxHeight: number, maxDistance: number) {
	let x = Math.round(Math.random() * maxWidth);
	let y = Math.round(Math.random() * maxHeight);
	for(let i = 0; i < 1_000 && hasOthersWithin(entities, x, y, maxDistance); i++) {
		x = Math.round(Math.random() * maxWidth);
		y = Math.round(Math.random() * maxHeight);
	}

	return {
		x,
		y
	};
}
function hasOthersWithin(entities: Array<any>, x: number, y: number, maxDistance: number): boolean {
	return entities.filter((entity: any) => {
		return distance(entity.x, entity.y, x, y) < maxDistance;
	}).length > 0;
}
function distance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

interface OptionsConfig {
	stations?: number;
	shipsPerStation?: number;
	width: number;
	height: number;
}