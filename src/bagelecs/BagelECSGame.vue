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
import { With, World } from 'bagelecs';
import createWorld from './entities/world';
import components from '@/bagelecs/components';

let world: World;
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const stationsCount = ref(0);
const shipsCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ eid: number, color: number, displayColor: string, ships: number }>>;
const systemUpdates = ref([]) as Ref<Array<{ name: string, min: number, avg: number, max: number }>>;

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	let paused = false;
	const eidSpriteMap = new Map<number, any>();
	let add: any;
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
				world = createWorld(generateScene({
					stations: 6,
					shipsPerStation: 100,
					width,
					height
				}));

				this.input.keyboard.on('keydown-SPACE', () => {
					paused = !paused;
				});
			},
			update(time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();

				world.update();

				world.query(With(components.position.getId(), components.health.getId())).forEach(entity => {
					let image = eidSpriteMap.get(entity);
					if(entity.get(components.health.dead)) {
						if(image) {
							image.destroy();
							image.shieldImage.destroy();
							eidSpriteMap.delete(entity);
							world.destroy(entity);
						}
					} else {
						if(!image) {
							image = add.image(0, 0, entity.has(components.controller) ? 'station' : 'boid');

							image.setScale(entity.get(components.position.width) / image.width, entity.get(components.position.height) / image.height);
							image.shieldImage = add.image(0, 0, 'shield');
							image.shieldImage.setScale(entity.get(components.position.width) / image.shieldImage.width * 2, entity.get(components.position.height) / image.shieldImage.height * 2);
							eidSpriteMap.set(entity, image);
						}

						image.x = image.shieldImage.x = entity.get(components.position.x);
						image.y = image.shieldImage.y = entity.get(components.position.y);
						image.angle = image.shieldImage.angle = entity.get(components.position.angle);
						
						image.shieldImage.visible = entity.get(components.health.shields) > 0;
						if(entity.has(components.controller)) {
							image.setTint(entity.get(components.controller.color));
						} else if(entity.has(components.controlled)) {
							let station = entity.get(components.controlled.owner);
							image.setTint(station.get(components.controller.color));
						}
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

					systemUpdates.value = [];
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
	/*stationQuery(world.ecs).forEach(eid => {
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