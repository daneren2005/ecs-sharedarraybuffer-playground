import {
	defineComponent
} from 'bitecs';
import position from './position';
import controller from './controller';
import velocity from './velocity';
import health from './health';
import controlled from './controlled';
import attack from './attack';

export default {
	position: defineComponent(position),
	controller: defineComponent(controller),
	velocity: defineComponent(velocity),
	health: defineComponent(health),
	controlled: defineComponent(controlled),
	attack: defineComponent(attack)
};