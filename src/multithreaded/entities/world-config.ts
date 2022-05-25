import Components from '../components/components';

export default interface WorldConfig {
	bounds: {
		width: number,
		height: number
	};
	idCounter: Int32Array;
	components: Components;
}