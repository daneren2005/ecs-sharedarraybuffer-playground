import { defineQuery, IWorld } from 'bitecs';
import World from '../entities/world';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts/src/index.esm';

export default function createQuadTreeSystem(world: World) {
	const position = world.components.position;
	const health = world.components.health;
	let collidableQuery = defineQuery([position, health]);

	return (ecs: IWorld) => {
		// Create and populate quadtree
		let quadtree = new Quadtree({
			width: world.bounds.width,
			height: world.bounds.height
		});
		collidableQuery(ecs).forEach(eid => {
			if(health.dead[eid]) {
				return;
			}
			
			quadtree.insert(new Rectangle({
				x: position.x[eid],
				y: position.y[eid],
				width: position.width[eid],
				height: position.height[eid],
				data: {
					eid
				}
			}));
		});

		// @ts-expect-error
		ecs.quadtree = quadtree;

		return ecs;
	};
}