import { createComponentWorker } from '@daneren2005/shared-memory-ecs';
import { targetEnemyUpdate } from './target-enemy-update';

createComponentWorker(self, targetEnemyUpdate);
