import { createComponentWorker } from '@daneren2005/shared-memory-ecs';
import { spawnShipUpdate } from './spawn-ship-update';

createComponentWorker(self, spawnShipUpdate);
