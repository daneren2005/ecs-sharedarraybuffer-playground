import Components from '../components/components';

interface WorldConfig {
	bounds: {
		width: number,
		height: number
	};
	idCounter: Int32Array;
	components: Components;
}

export default WorldConfig;