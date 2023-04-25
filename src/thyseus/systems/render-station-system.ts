import { Entity, defineSystem } from 'thyseus';
import Position from '../components/position';
import Controller from '../components/controller';
import Health from '../components/health';

export default function renderStationSystem(scene: Phaser.Scene) {
	const eidSpriteMap = new Map<bigint, any>();

	return defineSystem(
		({ Query, Commands }) => [Query([Entity, Position, Controller, Health]), Commands()],

		function renderStationSystem(query, commands) {
			for(const [entity, position, controller, health] of query) {
				const eid = entity.id;

				let image = eidSpriteMap.get(eid);
				if(health.dead) {
					if(image) {
						image.destroy();
						image.shieldImage.destroy();
						eidSpriteMap.delete(eid);
						commands.despawn(eid);
					}
				} else {
					if(!image) {
						image = scene.add.image(0, 0, 'station');

						image.setScale(position.width / image.width, position.height / image.height);
						image.shieldImage = scene.add.image(0, 0, 'shield');
						image.shieldImage.setScale(position.width / image.shieldImage.width * 2, position.height / image.shieldImage.height * 2);
						eidSpriteMap.set(eid, image);
					}

					image.x = image.shieldImage.x = (position.x);
					image.y = image.shieldImage.y = (position.y);
					image.angle = image.shieldImage.angle = position.angle;
					
					image.shieldImage.visible = health.shields > 0;
					image.setTint(controller.color);
				}
			}
		}
	);
}