import { Mut, MutDescriptor, Query, QueryDescriptor, Res, ResourceDescriptor } from 'thyseus';
import Position from '../components/position';
import Velocity from '../components/velocity';
import Bounds from '../resources/bounds';
import computeAngle from '@/math/compute-angle';

const delta = 0.0166;
export default function velocitySystem(query: Query<[Mut<Velocity>, Mut<Position>]>, bounds: Res<Bounds>) {
	for(const [velocity, position] of query) {
		// TODO: Implement an actual delta...
		position.x += velocity.x * delta;
		position.y += velocity.y * delta;

		if(position.x < 0 || position.x > bounds.width) {
			velocity.x = -velocity.x;
			position.angle = computeAngle(velocity.x, velocity.y);
		}

		if(position.y < 0 || position.y > bounds.height) {
			velocity.y = -velocity.y;
			position.angle = computeAngle(velocity.x, velocity.y);
		}
	}
}
velocitySystem.parameters = [QueryDescriptor([MutDescriptor(Velocity), MutDescriptor(Position)]), ResourceDescriptor(Bounds)];