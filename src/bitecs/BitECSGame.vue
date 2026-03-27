<template>
	<div class="home">
		<div class="list">
			<div style="color: red">mainThread: {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }} avg) ms</div>
			<div v-for="system in systemUpdates" :key="system.name">{{ system.name }}: {{ system.max.toFixed(2) }} ({{ system.avg.toFixed(2) }} avg) ms</div>
			<p/>

			<div>Entities: {{ stationsCount }} stations and {{ shipsCount }} ships</div>
			<span class="station-list" v-for="station in stationShips" :key="station.color" :style="{ color: station.displayColor }">{{ '#' + station.color.toString(16) }}: {{ station.ships }}</span>
			<div><button @click="addShips">Add Ships</button></div>
		</div>

		<div id="phaser-container-bitecs"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';
import Phaser from 'phaser';
import generateScene from '@/data/generate-scene';
import { addComponent, addEntity, Changed, createWorld, defineQuery, hasComponent } from 'bitecs';
import components from './components';
import createQuadTreeSystem from './systems/create-quad-tree-system';
import spawnShipSystem from './systems/spawn-ship-system';
import targetEnemySystem from './systems/target-enemy-system';
import moveToTargetSystem from './systems/move-to-target-system';
import velocitySystem from './systems/velocity-system';
import collisionSystem from './systems/collision-system';
import updateHealthTimersSystem from './systems/update-health-timers-system';
import { GameWorld } from './systems/game-world';

const ecs = createWorld() as GameWorld;
const bounds = {
	width: 0,
	height: 0
};
const systems = [
	{ name: 'quadTreeSystem', update: createQuadTreeSystem({ bounds }) },
	{ name: 'spawnShipSystem', update: spawnShipSystem() },
	{ name: 'targetEnemySystem', update: targetEnemySystem() },
	{ name: 'moveToTargetSystem', update: moveToTargetSystem() },
	{ name: 'velocitySystem', update: velocitySystem({ bounds }) },
	{ name: 'collisionSystem', update: collisionSystem() },
	{ name: 'updateHealthTimersSystem', update: updateHealthTimersSystem() }
];
const systemUpdatesByName: { [s: string]: Array<number> } = {};
systems.forEach(system => {
	systemUpdatesByName[system.name] = [];
});

const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ eid: number, color: number, displayColor: string, ships: number }>>;
const stationQuery = defineQuery([components.controller]);
const systemUpdates = ref([]) as Ref<Array<{ name: string, min: number, avg: number, max: number }>>;
const controlledQuery = defineQuery([components.controlled]);
const renderableQuery = defineQuery([components.position, components.health]);

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	const changedPositionQuery = defineQuery([ Changed(components.position) ]);
	const changedHealthQuery = defineQuery([ Changed(components.health) ]);
	const eidSpriteMap = new Map<number, any>();
	game = new Phaser.Game({
		type: Phaser.AUTO,
		width,
		height,
		parent: 'phaser-container-bitecs',
		scene: {
			preload(this: Phaser.Scene) {
				this.load.image('boid', 'boid.png');
				this.load.image('station', 'station.png');
				this.load.image('shield', 'shield3.png');
			},
			create(this: Phaser.Scene) {
				loadScene(generateScene({
					stations: 6,
					shipsPerStation: 100,
					width,
					height
				}));

				let stations = stationQuery(ecs).filter(eid => !components.health.dead[eid]);
				stationShips.value = stations.map(eid => {
					let color = components.controller.color[eid];
					let displayColor = '#' + color.toString(16);
					if(displayColor === '#ffffff') {
						displayColor = '#000000';
					}

					return {
						eid,
						color,
						displayColor,
						ships: 0
					};
				});

				this.input.keyboard?.on('keydown-SPACE', () => {
					paused = !paused;
				});

				Object.keys(systemUpdatesByName).forEach(systemName => {
					systemUpdates.value.push({
						name: systemName,
						min:0,
						avg: 0,
						max: 0
					});
				});
			},
			update(this: Phaser.Scene, time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();
				updateSystems(delta / 1_000);

				renderableQuery(ecs).forEach(eid => {
					if(eidSpriteMap.has(eid) || components.health.dead[eid]) {
						return;
					}

					let key = hasComponent(ecs, components.controller, eid) ? 'station' : 'boid';
					let image = this.add.image(components.position.x[eid], components.position.y[eid], key) as any;
					image.setScale(components.position.width[eid] / image.width, components.position.height[eid] / image.height);
					image.shieldImage = this.add.image(components.position.x[eid], components.position.y[eid], 'shield');
					image.shieldImage.setScale(
						components.position.width[eid] / image.shieldImage.width * 2,
						components.position.height[eid] / image.shieldImage.height * 2
					);
					image.shieldImage.visible = components.health.shields[eid] > 0;

					if(hasComponent(ecs, components.controller, eid)) {
						image.setTint(components.controller.color[eid]);
					} else if(hasComponent(ecs, components.controlled, eid)) {
						let ownerEid = components.controlled.owner[eid];
						image.setTint(components.controller.color[ownerEid]);
					}

					eidSpriteMap.set(eid, image);
				});

				changedPositionQuery(ecs).forEach(eid => {
					let image = eidSpriteMap.get(eid);
					if(!image) {
						return;
					}

					image.x = image.shieldImage.x = components.position.x[eid];
					image.y = image.shieldImage.y = components.position.y[eid];
					image.angle = image.shieldImage.angle = components.position.angle[eid];
				});
				changedHealthQuery(ecs).forEach(eid => {
					let image = eidSpriteMap.get(eid);
					if(!image) {
						return;
					}

					image.shieldImage.visible = components.health.shields[eid] > 0;
					if(components.health.dead[eid]) {
						image.destroy();
						image.shieldImage.destroy();
						eidSpriteMap.delete(eid);
					}
				});
				let end = performance.now();

				updateTimes.push(end - start);
				updateTicks += delta;
				if(updateTicks > 1_000) {
					minUpdateTime.value = updateTimes.reduce((min, time) => {
						return Math.min(min, time);
					}, 1_000_000);
					maxUpdateTime.value = updateTimes.reduce((max, time) => {
						return Math.max(max, time);
					}, 0);
					avgUpdateTime.value = updateTimes.reduce((total, time) => {
						return total + time;
					}, 0) / updateTimes.length;
					updateTimes = [];
					updateTicks = 0;

					let stations = stationQuery(ecs).filter(eid => !components.health.dead[eid]);
					let ships = controlledQuery(ecs).filter(eid => !components.health.dead[eid]);
					stationsCount.value = stations.length;
					shipsCount.value = ships.length;
					stationShips.value.forEach(val => {
						let matchingStationEid = stations.find(eid => components.controller.color[eid] === val.color);
						if(matchingStationEid !== undefined) {
							val.ships = ships.filter(eid => components.controlled.owner[eid] === val.eid).length;
						} else if(val.ships > 0) {
							// paused = true;
							val.ships = 0;
						}
					});

					systemUpdates.value = [];
					Object.keys(systemUpdatesByName).forEach(systemName => {
						let updates = systemUpdatesByName[systemName];

						systemUpdates.value.push({
							name: systemName,
							min: updates.reduce((min, time) => {
								return Math.min(min, time);
							}, 1_000_000),
							avg: updates.reduce((total, time) => {
								return total + time;
							}, 0) / updates.length,
							max: updates.reduce((max, time) => {
								return Math.max(max, time);
							}, 0)
						});

						systemUpdatesByName[systemName] = [];
					});
				}
			}
		}
	});
});
onBeforeUnmount(() => {
	if(game) {
		game.destroy(true);
		game = null;
	} 
});

function addShips() {
	stationQuery(ecs).forEach(eid => {
		components.controller.money[eid] += 10;
	});
}

function updateSystems(delta: number) {
	systems.forEach(system => {
		let start = performance.now();
		system.update(ecs, delta);
		systemUpdatesByName[system.name].push(performance.now() - start);
	});
}

function loadScene(config: any) {
	bounds.width = config.bounds.width;
	bounds.height = config.bounds.height;

	config.entities.forEach((entityConfig: any) => {
		if(entityConfig.type === 'station') {
			createStation(entityConfig);
		}
	});
}

function createStation(config: { x: number, y: number, color: number, money: number }) {
	let eid = addEntity(ecs);
	addComponent(ecs, components.position, eid);
	addComponent(ecs, components.health, eid);
	addComponent(ecs, components.controller, eid);

	components.position.x[eid] = config.x;
	components.position.y[eid] = config.y;
	components.position.width[eid] = 20;
	components.position.height[eid] = 20;
	components.position.angle[eid] = 0;
	components.health.shields[eid] = 2;
	components.health.maxShields[eid] = 2;
	components.health.timeToRegenerateShields[eid] = 5;
	components.health.timeSinceShieldRegeneration[eid] = 0;
	components.health.timeSinceTakenDamage[eid] = 0;
	components.health.dead[eid] = 0;
	components.controller.color[eid] = config.color;
	components.controller.money[eid] = config.money;
}
</script>

<style scoped>
.list {
	margin-bottom: 1em;
}
.station-list {
	margin-left: 0.5em;
}
</style>