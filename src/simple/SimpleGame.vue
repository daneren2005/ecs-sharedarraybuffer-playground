<template>
	<div class="home">
		<ul>
			<li>Startup time: {{ startupTime }} ms</li>
			<li>Update time: {{ minUpdateTime.toFixed(2) }} - {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }}) ms</li>
		</ul>

		<div id="phaser-container-simple"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Phaser from 'phaser';
import World from '@/simple/entities/world';
import Entity from '@/simple/entities/entity';
import generateScene from '@/data/generate-scene';
import Station from './entities/station';
import Ship from './entities/ship';

let world = new World();
const startupTime = ref(0);
const minUpdateTime = ref(0);
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);

let game: Phaser.Game | null;
onMounted(() => {
	let updateTicks = 0;
	let updateTimes: Array<number> = [];

	const width = window.innerWidth / 3 * 2;
	const height = window.innerHeight / 3 * 2;
	game = new Phaser.Game({
		type: Phaser.AUTO,
		width,
		height,
		parent: 'phaser-container-simple',
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

					['x', 'y', 'angle'].forEach(prop => {
						entity.on(`${prop}-updated`, (newValue: any) => {
							image[prop] = newValue;
							image.shieldImage[prop] = newValue;
						});
					});
					entity.on('dead', () => {
						image.destroy();
						image.shieldImage.destroy();
					});
					entity.on('shields-updated', (newValue: number) => {
						image.shieldImage.visible = newValue > 0;
					});
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
			},
			update(time: number, delta: number) {
				let start = performance.now();
				world.update(delta / 1_000);
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
</script>
