import position from './position';
import controller from './controller';
import velocity from './velocity';
import health from './health';
import controlled from './controlled';
import attack from './attack';
import { Component } from 'bagelecs';

export default {
	position: Component(position),
	controller: Component(controller),
	velocity: Component(velocity),
	health: Component(health),
	controlled: Component(controlled),
	attack: Component(attack)
};