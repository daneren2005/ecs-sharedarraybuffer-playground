import { createComponentWorker } from '@daneren2005/shared-memory-ecs';
import { moveToTargetUpdate } from './move-to-target-update';

createComponentWorker(self, moveToTargetUpdate);
