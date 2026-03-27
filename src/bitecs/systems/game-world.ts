import { IWorld } from 'bitecs';
import Flatbush from 'flatbush';

export type GameWorld = IWorld & {
	spatialIndex?: Flatbush;
	spatialEids?: Array<number>;
};
