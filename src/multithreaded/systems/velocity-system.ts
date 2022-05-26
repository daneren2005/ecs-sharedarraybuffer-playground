import { getEntitiesWithComponents } from '../components/get-entities';
import WorldConfig from '../entities/world-config';

globalThis.getEntitiesWithComponents = getEntitiesWithComponents;

export default function velocitySystem(world: WorldConfig) {
	const position = world.components.position;
	const velocity = world.components.velocity;

	return (delta: number) => {
		let ships = globalThis.getEntitiesWithComponents(world, ['position', 'velocity']);
		ships.forEach(shipEid => {
			let velocityX = Atomics.load(velocity.x, shipEid);
			let velocityY = Atomics.load(velocity.y, shipEid);
			let deltaVelocityX = velocityX * delta;
			let deltaVelocityY = velocityY * delta;
			let newPositionX = Atomics.add(position.x, shipEid, deltaVelocityX) + deltaVelocityX;
			let newPositionY = Atomics.add(position.y, shipEid, deltaVelocityY) + deltaVelocityY;

			if(newPositionX < 0 || newPositionX > (world.bounds.width * 1_000)) {
				Atomics.store(velocity.x, shipEid, -velocityX);
				Atomics.store(position.angle, shipEid, computeAngle(-velocityX, velocityY));
			}
	
			if(newPositionY < 0 || newPositionY > (world.bounds.height * 1_000)) {
				Atomics.store(velocity.y, shipEid, -velocityY);
				Atomics.store(position.angle, shipEid, computeAngle(velocityX, -velocityY));
			}
		});
	};

	function computeAngle(x: number, y: number) {
		let radians = Math.atan2(y, x);
		return radians * (180 / Math.PI);
	}
}

declare global {
	// eslint-disable-next-line
	var getEntitiesWithComponents: (world: any, types: Array<string>) => Array<number>;
}