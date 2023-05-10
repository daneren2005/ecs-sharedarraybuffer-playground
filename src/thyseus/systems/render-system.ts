import { Commands, CommandsDescriptor, Entity, Query, QueryDescriptor, Res, ResourceDescriptor, Without, WithoutDescriptor } from 'thyseus';
import Position from '../components/position';
import Health from '../components/health';
import Controller from '../components/controller';
import Renderer from '../resources/renderer';
import Faction from '../components/faction';

export default function renderSystem(renderer: Res<Renderer>, ships: Query<[Entity, Position, Health, Faction], Without<Controller>>, stations: Query<[Entity, Position, Health, Faction, Controller]>, commands: Commands) {
	render(renderer, ships, commands);
	render(renderer, stations, commands);
}
renderSystem.parameters = [ResourceDescriptor(Renderer), QueryDescriptor([Entity, Position, Health, Faction], WithoutDescriptor(Controller)), QueryDescriptor([Entity, Position, Health, Faction, Controller]), CommandsDescriptor()];

function render(renderer: Res<Renderer>, entities: Query<[Entity, Position, Health, Faction]> | Query<[Entity, Position, Health, Faction, Controller]>, commands: Commands) {
	let scene = renderer.scene;
	let eidSpriteMap = renderer.eidSpriteMap;

	for(const [entity, position, health, faction, controller] of entities) {
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
				image = scene.add.image(0, 0, controller ? 'station' : 'boid');

				image.setScale(position.width / image.width, position.height / image.height);
				image.shieldImage = scene.add.image(0, 0, 'shield');
				image.shieldImage.setScale(position.width / image.shieldImage.width * 2, position.height / image.shieldImage.height * 2);
				eidSpriteMap.set(eid, image);
			}

			image.x = image.shieldImage.x = (position.x);
			image.y = image.shieldImage.y = (position.y);
			image.angle = image.shieldImage.angle = position.angle;
			
			image.shieldImage.visible = health.shields > 0;
			image.setTint(faction.color);
		}
	}
}