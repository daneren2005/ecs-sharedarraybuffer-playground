import { createComponentWorker } from '@daneren2005/shared-memory-ecs';
import { collisionUpdate } from './collision-update';

createComponentWorker(self, collisionUpdate);
