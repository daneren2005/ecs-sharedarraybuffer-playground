const Geom = require('phaser/src/geom');
const PhaserMath = require('phaser/src/math');

export default function computeAngle(x: number, y: number) {
	let zeroPoint = new Geom.Point(0, 0);
	let angleRad = PhaserMath.Angle.BetweenPoints(zeroPoint, new PhaserMath.Vector2(x, y));
	return PhaserMath.RadToDeg(angleRad);
}