// @ts-expect-error
import Geom from 'phaser/src/geom';
// @ts-expect-error
import PhaserMath from 'phaser/src/math';

export default function computeAngle(x: number, y: number) {
	let zeroPoint = new Geom.Point(0, 0);
	let angleRad = PhaserMath.Angle.BetweenPoints(zeroPoint, new PhaserMath.Vector2(x, y));
	return PhaserMath.RadToDeg(angleRad);
}