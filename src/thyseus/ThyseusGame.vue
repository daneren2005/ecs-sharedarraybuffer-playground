<template>
	<div class="home" v-if="supportsSharedArrayBuffers">
		<div class="list">
			<div style="color: red">mainThread: {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }} avg) ms</div>
			<div v-for="system in systemUpdates" :key="system.name">{{ system.name }}: {{ system.max.toFixed(2) }} ({{ system.avg.toFixed(2) }} avg) ms</div>
			<p/>

			<div>Entities: {{ stationsCount }} stations and {{ shipsCount }} ships</div>
			<span class="station-list" v-for="station in stationShips" :key="station.color" :style="{ color: station.displayColor }">{{ '#' + station.color.toString(16) }}: {{ station.ships }}</span>
			<div><button @click="addShips">Add Ships</button></div>
		</div>

		<div id="phaser-container-multithreaded"/>
	</div>
	<div v-else>
		Browser does not suport SharedArrayBuffer
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';
import Phaser from 'phaser';
import generateScene from '@/data/generate-scene';
import { World } from 'thyseus';
import createWorld from './entities/world';

const supportsSharedArrayBuffers = !!window.SharedArrayBuffer;

let world: World;
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ eid: number, color: number, displayColor: string, ships: number }>>;
const systemUpdates = ref([]) as Ref<Array<{ name: string, min: number, avg: number, max: number }>>;

let game: Phaser.Game | null;
onMounted(async () => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	game = new Phaser.Game({
		type: Phaser.AUTO,
		width,
		height,
		parent: 'phaser-container-multithreaded',
		// @ts-expect-error
		scene: {
			preload() {
				this.load.image('boid', 'boid.png');
				this.load.image('station', 'station.png');
				this.load.image('shield', 'shield3.png');
			},
			async create() {
				world = await createWorld({
					worldConfig: generateScene({
						stations: 10,
						shipsPerStation: 100,
						width,
						height
					}),
					scene: this
				});

				/*let stations = getEntitiesWithComponents(world, ['controller']);
				stationShips.value = stations.map(eid => {
					let color = world.components.controller.color[eid];
					let displayColor = '#' + color.toString(16);
					if(displayColor === '#ffffff') {
						displayColor = '#00000';
					}

					return {
						eid,
						color,
						displayColor,
						ships: 0
					};
				});*/

				this.input.keyboard.on('keydown-SPACE', () => {
					paused = !paused;
				});

				/*Object.keys(world.systemUpdates).forEach(systemName => {
					systemUpdates.value.push({
						name: systemName,
						min:0,
						avg: 0,
						max: 0
					});
				});*/
			},
			async update(time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();
				await world.update();
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

					/*let stations = getEntitiesWithComponents(world, ['controller']);
					let ships = getEntitiesWithComponents(world, ['controlled']);
					stationsCount.value = stations.length;
					shipsCount.value = ships.length;

					stationShips.value.forEach(val => {
						let matchingStationEid = stations.find(eid => world.components.controller.color[eid] === val.color);
						if(matchingStationEid !== undefined) {
							val.ships = ships.filter(eid => world.components.controlled.owner[eid] === val.eid).length;
						} else if(val.ships > 0) {
							// paused = true;
							val.ships = 0;
						}
					});

					systemUpdates.value = [];
					Object.keys(world.systemUpdates).forEach(systemName => {
						let updates = world.systemUpdates[systemName];

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

						world.systemUpdates[systemName] = [];
					});*/
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
	/*if(world) {
		world.destroy();
	}*/
});

function addShips() {
	/*getEntitiesWithComponents(world, ['controller']).forEach(eid => {
		world.components.controller.money[eid] += 10;
	});*/
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