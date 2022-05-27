export default function createWorkerSystem(createSystem: (world: any) => ((delta: number) => void)) {
	let world: any;
	// eslint-disable-next-line
	let system = (delta: number) => { console.warn('Updating system before sent'); };

	self.onmessage = function(e) {
		if(e.data.world) {
			world = e.data.world;
			system = createSystem(world);
		} else if(e.data.updateWorld) {
			Object.keys(e.data.updateWorld).forEach(key => {
				world[key] = e.data.updateWorld[key];
			});
		} else if(e.data.delta) {
			system(e.data.delta);

			self.postMessage({
				done: true
			});
		}
	};
}