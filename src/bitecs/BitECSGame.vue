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

		<div id="phaser-container-bitecs"/>
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
import { Changed, defineQuery } from 'bitecs';
import components from './components';

let world = new World();
const startupTime = ref(0);
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ eid: number, color: number, displayColor: string, ships: number }>>;
const stationQuery = defineQuery([components.controller]);

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	const changedPositionQuery = defineQuery([ Changed(components.position) ]);
	const changedHealthQuery = defineQuery([ Changed(components.health) ]);
	const controlledQuery = defineQuery([components.controlled]);
	const eidSpriteMap = new Map<number, any>();
	game = new Phaser.Game({
		type: Phaser.AUTO,
		width,
		height,
		parent: 'phaser-container-bitecs',
		// @ts-expect-error
		scene: {
			preload() {
				this.load.image('boid', 'boid.png');
				this.load.image('station', 'station.png');
				this.load.image('shield', 'shield3.png');
			},
			create() {
				world.on('entity-added', (entity: Entity) => {
					let image = this.add.image(entity.x, entity.y, entity.key) as any;
					image.setScale(entity.width / image.width, entity.height / image.height);
					image.shieldImage = this.add.image(entity.x, entity.y, 'shield');
					image.shieldImage.setScale(entity.width / image.shieldImage.width * 2, entity.height / image.shieldImage.height * 2);
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

				let stations = world.entities.filter(entity => entity instanceof Station) as Array<Station>;
				stationShips.value = stations.map(station => {
					let displayColor = '#' + station.color.toString(16);
					if(displayColor === '#ffffff') {
						displayColor = '#00000';
					}

					return {
						eid: station.eid,
						color: station.color,
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
				world.update(delta / 1_000);

				changedPositionQuery(world.ecs).forEach(eid => {
					let image = eidSpriteMap.get(eid);
					if(!image) {
						return;
					}

					image.x = image.shieldImage.x = components.position.x[eid];
					image.y = image.shieldImage.y = components.position.y[eid];
					image.angle = image.shieldImage.angle = components.position.angle[eid];
				});
				changedHealthQuery(world.ecs).forEach(eid => {
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

					stationsCount.value = world.entities.filter(entity => entity instanceof Station).length;

					let stations = stationQuery(world.ecs).filter(eid => !components.health.dead[eid]);
					let ships = controlledQuery(world.ecs).filter(eid => !components.health.dead[eid]);
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
	stationQuery(world.ecs).forEach(eid => {
		world.components.controller.money[eid] += 10;
	});
}
</script>

<style scoped>
.list {
	margin-bottom: 1em;
}
</style>