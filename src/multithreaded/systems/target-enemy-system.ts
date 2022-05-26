import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts/src/index.esm';
import { getEntitiesWithComponents, hasComponent } from '../components/get-entities';
import Components from '../components/components';
import WorldConfig from '../entities/world-config';

globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
globalThis.hasComponent = hasComponent;
globalThis.Quadtree = Quadtree;
globalThis.Rectangle = Rectangle;

export default function targetEnemySystem(world: WorldConfig) {
	const position = world.components.position;
	const controlled = world.components.controlled;
	const controller = world.components.controller;
	const attack = world.components.attack;

	if(globalThis.importScripts) {
		globalThis.importScripts('https://cdn.jsdelivr.net/npm/@timohausmann/quadtree-ts/dist/quadtree.umd.full.js');
		globalThis.Rectangle = globalThis.Quadtree.Rectangle;
	}

	return () => {
		// Create and populate quadtree
		let quadtree = new globalThis.Quadtree({
			width: world.bounds.width * 1_000,
			height: world.bounds.height * 1_000
		});
		globalThis.getEntitiesWithComponents(world, ['position', 'health']).forEach(eid => {
			let data = {
				x: Atomics.load(position.x, eid),
				y: Atomics.load(position.y, eid),
				width: Atomics.load(position.width, eid),
				height: Atomics.load(position.height, eid)
			};

			quadtree.insert(new globalThis.Rectangle({
				...data,
				data: {
					eid,
					...data
				}
			}));
		});

		// TODO: Don't wait a full 200ms to process ships that are just sitting there waiting
		globalThis.getEntitiesWithComponents(world, ['velocity', 'attack']).forEach(eid => {
			let shipColor = Atomics.load(controller.color, Atomics.load(controlled.owner, eid));
			let x = Atomics.load(position.x, eid);
			let y = Atomics.load(position.y, eid);
			let width = Atomics.load(position.width, eid);
			let height = Atomics.load(position.height, eid);

			// Try to find the nearest enemy
			let rect = {
				x: x - 50 * 1_000,
				y: y - 50 * 1_000,
				width: width + 100 * 1_000,
				height: height + 100 * 1_000
			};
			let enemies = getEnemiesInRange(quadtree, rect, eid, shipColor);
			if(enemies.length === 0) {
				rect.x -= 100 * 1_000;
				rect.y -= 100 * 1_000;
				rect.width += 200 * 1_000;
				rect.height += 200 * 1_000;
				enemies = getEnemiesInRange(quadtree, rect, eid, shipColor);
			}
	
			enemies.sort((a, b) => {
				return euclideanDistance(a.x, a.y, x, y) - euclideanDistance(b.x, b.y, x, y);
			});
			let enemy = enemies[0] ?? null;

			// If no enemies that quadtree could easily find, just head for the nearest station
			if(!enemy) {
				let stations = globalThis.getEntitiesWithComponents(world, ['controller']).filter(stationEid => Atomics.load(controller.color, stationEid) !== shipColor && !world.components.entity.dead[stationEid]);
				stations.sort((a, b) => {
					return euclideanDistance(Atomics.load(position.x, a), Atomics.load(position.y, a), x, y) - euclideanDistance(Atomics.load(position.x, b), Atomics.load(position.y, b), x, y);
				});

				if(stations.length) {
					enemy = {
						eid: stations[0],
						x: 0,
						y: 0,
						width: 0,
						height: 0
					};
				}
			}

			if(enemy) {
				Atomics.store(attack.target, eid, enemy.eid);
			} else {
				Atomics.store(attack.target, eid, 0);
			}
		});
	};

	function getEnemiesInRange(quadtree: any, range: { x: number, y: number, width: number, height: number }, eid: number, shipColor: number) : Array<QuadtreeData> {
		let entitiesInRange = quadtree.retrieve(new globalThis.Rectangle(range)).map((result: any) => result.data) as Array<QuadtreeData>;
		entitiesInRange = entitiesInRange.filter(data => data.eid !== eid);
		return entitiesInRange.filter(data => {
			// Ship
			if(globalThis.hasComponent(world.components, data.eid, 'controlled')) {
				let stationEid = Atomics.load(controlled.owner, data.eid);
				return Atomics.load(controller.color, stationEid) !== shipColor;
			}
			// Station
			else if(globalThis.hasComponent(world.components, data.eid, 'controller')) {
				return Atomics.load(controller.color, data.eid) !== shipColor;
			} else {
				return false;
			}
		});
	}

	function euclideanDistance(x1: number, y1: number, x2: number, y2: number): number {
		return (x1 - x2) ** 2 + (y1 - y2) ** 2;
	}

	interface QuadtreeData {
		eid: number;
		x: number;
		y: number;
		width: number;
		height: number
	}
}

declare global {
	// eslint-disable-next-line
	var getEntitiesWithComponents: (world: any, types: Array<string>) => Array<number>;
	// eslint-disable-next-line
	var hasComponent: (components: Components, eid: number, type: string) => boolean;
	// eslint-disable-next-line
	var Quadtree: any;
	// eslint-disable-next-line
	var Rectangle: any;
	// eslint-disable-next-line
	var importScripts: any;
}