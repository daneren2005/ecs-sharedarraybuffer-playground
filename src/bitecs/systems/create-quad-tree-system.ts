import { defineQuery } from 'bitecs';
import Flatbush from 'flatbush';
import components from '../components';
import { GameWorld } from './game-world';

export default function createQuadTreeSystem(context: { bounds: { width: number, height: number } }) {
	const position = components.position;
	const health = components.health;
	let collidableQuery = defineQuery([position, health]);

	return (ecs: GameWorld) => {
		let collidableEids = collidableQuery(ecs).filter(eid => !health.dead[eid]);
		if(collidableEids.length === 0) {
			ecs.spatialIndex = undefined;
			ecs.spatialEids = [];
			return ecs;
		}

		let index = new Flatbush(collidableEids.length);
		collidableEids.forEach(eid => {
			let minX = Math.max(0, position.x[eid]);
			let minY = Math.max(0, position.y[eid]);
			let maxX = Math.min(context.bounds.width, position.x[eid] + position.width[eid]);
			let maxY = Math.min(context.bounds.height, position.y[eid] + position.height[eid]);
			index.add(minX, minY, maxX, maxY);
		});
		index.finish();

		ecs.spatialIndex = index;
		ecs.spatialEids = collidableEids;

		return ecs;
	};
}