import { ComponentSystem } from '@daneren2005/shared-memory-ecs';
import type { ComponentSystemWorld } from '@daneren2005/shared-memory-ecs';
import type { Components } from '../components';

export interface Bounds {
	width: number
	height: number
}

// A single concrete ComponentSystem used by every system in this game.  It only adds the world's `bounds` to
// the per-run data object so worker update functions can keep entities on screen; everything else about a
// system (its query, update function, and worker) is supplied through the normal ComponentSystem options.
export default class GameComponentSystem extends ComponentSystem<Components> {
	addDataToWorld(world: ComponentSystemWorld): void {
		// `bounds` is stored on the game world (see GameWorld); read it without importing GameWorld to avoid an
		// import cycle between the world and its systems.
		world.bounds = (this.world as unknown as { bounds: Bounds }).bounds;
	}
}
