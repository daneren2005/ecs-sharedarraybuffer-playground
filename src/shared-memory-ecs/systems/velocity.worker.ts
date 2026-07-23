import { createComponentWorker } from '@daneren2005/shared-memory-ecs';
import { velocityUpdate } from './velocity-update';

createComponentWorker(self, velocityUpdate);
