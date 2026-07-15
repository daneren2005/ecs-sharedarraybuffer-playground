import { createComponentWorker } from '@daneren2005/shared-memory-ecs';
import { updateHealthTimersUpdate } from './update-health-timers-update';

createComponentWorker(self, updateHealthTimersUpdate);
