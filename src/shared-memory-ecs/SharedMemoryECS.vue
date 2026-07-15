<template>
	<div class="home">
		<div class="list">
			<div style="color: red">mainThread: {{ maxUpdateTime.toFixed(2) }} ({{ avgUpdateTime.toFixed(2) }} avg) ms</div>
			<div v-for="system in systemUpdates" :key="system.name">{{ system.name }}: {{ system.max.toFixed(2) }} ({{ system.avg.toFixed(2) }} avg) ms</div>
			<div></div>
			<div>Memory: {{ memory }}</div>
			<p/>

			<div>Entities: {{ stationsCount }} stations and {{ shipsCount }} ships ({{ totalCount }})</div>
			<span class="station-list" v-for="station in stationShips" :key="station.color" :style="{ color: station.displayColor }">{{ '#' + station.color.toString(16) }}: {{ station.ships }}</span>
			<div><button @click="addShips">Add Ships</button></div>
		</div>

		<div id="phaser-container-shared-memory-ecs"/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';
import Phaser from 'phaser';
import generateScene from '@/data/generate-scene';
import GameWorld from './entities/game-world';

let world: GameWorld;
const maxUpdateTime = ref(0);
const avgUpdateTime = ref(0);
const memory = ref('');
const stationsCount = ref(0);
const shipsCount = ref(0);
const totalCount = ref(0);
const stationShips = ref([]) as Ref<Array<{ eid: number, color: number, displayColor: string, ships: number }>>;
const systemUpdates = ref([]) as Ref<Array<{ name: string, avg: number, max: number }>>;

// Per-system worker run times, keyed by system name, collected from the world's worker-finished events.
const systemRunTimes: { [name: string]: Array<number> } = {};

function hasComponent(eid: number, name: 'controller' | 'controlled'): boolean {
	return !!world.getEntityByEid(eid)?.components[name];
}

let game: Phaser.Game | null;
onMounted(() => {
	world = new GameWorld();
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
		parent: 'phaser-container-shared-memory-ecs',
		scene: {
			preload() {
				this.load.image('boid', 'boid.png');
				this.load.image('station', 'station.png');
				this.load.image('shield', 'shield3.png');
			},
			create() {
				add = this.add;
				world.load(generateScene({
					stations: 10,
					shipsPerStation: 100,
					width,
					height
				}));

				// Record each system's worker run time so the panel can show off-thread cost.
				world.systems.forEach(system => {
					systemRunTimes[system.name] = [];
					world.on(`system-${system.name}-worker-finished`, (runTime: number) => {
						systemRunTimes[system.name].push(runTime);
					});
				});
				systemUpdates.value = world.systems.map(system => ({ name: system.name, avg: 0, max: 0 }));

				// Destroy a sprite as soon as its entity is removed (killEntityWorker -> world removes it).
				world.on('entity-removed', (entity: { eid: number }) => {
					let sprite = eidSpriteMap.get(entity.eid);
					if(sprite) {
						sprite.destroy();
						sprite.shieldImage.destroy();
						eidSpriteMap.delete(entity.eid);
					}
				});

				let stations = world.entities.filter(entity => entity.components.controller);
				stationShips.value = stations.map(station => {
					let color = station.components.controller!.color;
					let displayColor = '#' + color.toString(16);
					if(displayColor === '#ffffff') {
						displayColor = '#000000';
					}

					return {
						eid: station.eid,
						color,
						displayColor,
						ships: 0
					};
				});

				this.input.keyboard?.on('keydown-SPACE', () => {
					paused = !paused;
				});
			},
			update(time: number, delta: number) {
				if(paused) {
					return;
				}

				let start = performance.now();
				world.update(delta / 1_000);

				// Sync a sprite for every live entity that has a position.
				world.entities.forEach(entity => {
					let position = entity.components.position;
					if(!position) {
						return;
					}

					let sprite = eidSpriteMap.get(entity.eid);
					if(!sprite) {
						sprite = add.image(0, 0, entity.components.controller ? 'station' : 'boid');
						sprite.setScale(position.width / sprite.width, position.height / sprite.height);
						sprite.shieldImage = add.image(0, 0, 'shield');
						sprite.shieldImage.setScale(position.width / sprite.shieldImage.width * 2, position.height / sprite.shieldImage.height * 2);
						sprite.setTint(getTint(entity.eid));
						eidSpriteMap.set(entity.eid, sprite);
					}

					sprite.x = sprite.shieldImage.x = position.x;
					sprite.y = sprite.shieldImage.y = position.y;
					sprite.angle = sprite.shieldImage.angle = position.angle;
					sprite.shieldImage.visible = (entity.components.health?.shields ?? 0) > 0;
				});

				let end = performance.now();
				updateTimes.push(end - start);
				updateTicks += delta;
				if(updateTicks > 1_000) {
					maxUpdateTime.value = updateTimes.reduce((max, time) => Math.max(max, time), 0);
					avgUpdateTime.value = updateTimes.reduce((total, time) => total + time, 0) / updateTimes.length;
					updateTimes = [];
					updateTicks = 0;

					refreshStats();
				}
			}
		}
	});
});
onBeforeUnmount(() => {
	if(game) {
		game.destroy(false);
		game = null;
	}
	if(world) {
		world.destroy();
	}
});

function getTint(eid: number): number {
	let entity = world.getEntityByEid(eid);
	if(entity?.components.controller) {
		return entity.components.controller.color;
	} else if(entity?.components.controlled) {
		return world.getEntityByEid(entity.components.controlled.owner)?.components.controller?.color ?? 0xffffff;
	}
	return 0xffffff;
}

function refreshStats() {
	memory.value = world.heap.prettyMemory();

	let stations = world.entities.filter(entity => hasComponent(entity.eid, 'controller'));
	let ships = world.entities.filter(entity => hasComponent(entity.eid, 'controlled'));
	stationsCount.value = stations.length;
	shipsCount.value = ships.length;
	totalCount.value = world.entities.length;

	stationShips.value.forEach(val => {
		let matchingStation = stations.find(station => station.components.controller!.color === val.color);
		if(matchingStation) {
			val.ships = ships.filter(ship => ship.components.controlled!.owner === matchingStation.eid).length;
		} else {
			val.ships = 0;
		}
	});

	systemUpdates.value = world.systems.map(system => {
		let times = systemRunTimes[system.name] ?? [];
		let stats = {
			name: system.name,
			avg: times.length ? times.reduce((total, time) => total + time, 0) / times.length : 0,
			max: times.reduce((max, time) => Math.max(max, time), 0)
		};
		systemRunTimes[system.name] = [];
		return stats;
	});
}

function addShips() {
	world.entities.forEach(entity => {
		if(entity.components.controller) {
			entity.components.controller.money += 10;
		}
	});
}
</script>

<style scoped>
.list {
	margin-bottom: 0.5em;
}
.station-list {
	margin-left: 0.5em;
}
</style>
