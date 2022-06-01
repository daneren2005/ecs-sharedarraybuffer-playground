import Components from '../components/components';

interface WorldConfig {
	bounds: {
		width: number,
		height: number
	};
	idCounter: Uint32Array;
	recycledIds: Uint32Array;
	recycledIndexes: Uint32Array;
	components: Components;
}

export default WorldConfig;