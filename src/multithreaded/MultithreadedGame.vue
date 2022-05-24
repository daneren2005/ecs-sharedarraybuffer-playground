<template>
	<div class="home">
		<div class="list">
			<div>Startup time: {{ startupTime.toFixed(2) }} ms</div>
			<div>Update time: {{ minUpdateTime.toFixed(2) }} - {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }} avg) ms</div>
			<p/>

			<div>Entities: {{ stationsCount }} stations and {{ shipsCount }} ships</div>
			<div v-for="station in stationShips" :key="station.color" :style="{ color: station.displayColor }">{{ '#' + station.color.toString(16) }}: {{ station.ships }}</div>

			<p/>
			<button @click="addShips">Add Ships</button>
		</div>

		<div id="phaser-container-multithreaded"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';
import Phaser from 'phaser';
import generateScene from '@/data/generate-scene';
import World from './entities/world';
import Entity from './entities/entity';
import Station from './entities/station';
import Ship from './entities/ship';
import { INT_FLOAT_MULTIPLIER } from './constants';

let world = new World();
const startupTime = ref(0);
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ eid: number, color: number, displayColor: string, ships: number }>>;

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	const eidSpriteMap = new Map<number, any>();
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
			create() {
				// TODO: Be able to see added entities from outside threads
				// TODO: We also need to be able to see entire load done BEFORE adding to display
				world.on('entity-added', (entity: Entity) => {
					let image = this.add.image(entity.x / INT_FLOAT_MULTIPLIER, entity.y / INT_FLOAT_MULTIPLIER, entity.key) as any;
					image.setScale(entity.width / image.width / INT_FLOAT_MULTIPLIER, entity.height / image.height / INT_FLOAT_MULTIPLIER);
					image.shieldImage = this.add.image(entity.x / INT_FLOAT_MULTIPLIER, entity.y / INT_FLOAT_MULTIPLIER, 'shield');
					image.shieldImage.setScale(entity.width / image.shieldImage.width / INT_FLOAT_MULTIPLIER * 2, entity.height / image.shieldImage.height / INT_FLOAT_MULTIPLIER * 2);
					image.shieldImage.visible = entity.shields > 0;
					if(entity instanceof Station || entity instanceof Ship) {
						image.setTint(entity.color);
					}
					eidSpriteMap.set(entity.eid, image);
				});

				let start = performance.now();
				world.load(generateScene({
					stations: 6,
					shipsPerStation: 100,
					width,
					height
				}));
				let end = performance.now();
				startupTime.value = end - start;

				let stations = world.getEntitiesWithComponents(['controller']);
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
				});

				this.input.keyboard.on('keydown-SPACE', () => {
					paused = !paused;
				});
			},
			update(time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();
				world.update(delta);

				world.getAllEntitiesWithComponents(['position', 'health']).forEach(eid => {
					let image = eidSpriteMap.get(eid);
					if(!image) {
						return;
					}

					image.x = image.shieldImage.x = (world.components.position.x[eid] / INT_FLOAT_MULTIPLIER);
					image.y = image.shieldImage.y = (world.components.position.y[eid] / INT_FLOAT_MULTIPLIER);
					image.angle = image.shieldImage.angle = world.components.position.angle[eid];
					
					image.shieldImage.visible = world.components.health.shields[eid] > 0;
					if(world.components.entity.dead[eid]) {
						image.destroy();
						image.shieldImage.destroy();
						eidSpriteMap.delete(eid);
					}
				});
				let end = performance.now();

				updateTimes.push(end - start);
				updateTicks += delta;
				if(updateTicks > INT_FLOAT_MULTIPLIER) {
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

					let stations = world.getEntitiesWithComponents(['controller']);
					let ships = world.getEntitiesWithComponents(['controlled']);
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
				}
			}
		}
	});
});
onBeforeUnmount(() => {
	if(game) {
		game.destroy();
		game = null;
	} 
});

function addShips() {
	world.getEntitiesWithComponents(['controller']).forEach(eid => {
		world.components.controller.money[eid] += 10;
	});
}
</script>

<style scoped>
.list {
	margin-bottom: 1em;
}
</style>