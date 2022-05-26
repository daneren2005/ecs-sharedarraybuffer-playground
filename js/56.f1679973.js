(self["webpackChunkecs_arraybuffer"] = self["webpackChunkecs_arraybuffer"] || []).push([[56],{

/***/ 2254:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ computeAngle; }
/* harmony export */ });
const Geom = __webpack_require__(3283);

const PhaserMath = __webpack_require__(3129);

function computeAngle(x, y) {
  let zeroPoint = new Geom.Point(0, 0);
  let angleRad = PhaserMath.Angle.BetweenPoints(zeroPoint, new PhaserMath.Vector2(x, y));
  return PhaserMath.RadToDeg(angleRad);
}

/***/ }),

/***/ 6065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ distance; }
/* harmony export */ });
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

/***/ }),

/***/ 1396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ euclideanDistance; }
/* harmony export */ });
function euclideanDistance(x1, y1, x2, y2) {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}

/***/ }),

/***/ 364:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Given 3 separate color values this will return an integer representation of it.
 *
 * @function Phaser.Display.Color.GetColor
 * @since 3.0.0
 *
 * @param {number} red - The red color value. A number between 0 and 255.
 * @param {number} green - The green color value. A number between 0 and 255.
 * @param {number} blue - The blue color value. A number between 0 and 255.
 *
 * @return {number} The combined color value.
 */
var GetColor = function (red, green, blue) {
  return red << 16 | green << 8 | blue;
};

module.exports = GetColor;

/***/ }),

/***/ 2283:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the area of the circle.
 *
 * @function Phaser.Geom.Circle.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the area of.
 *
 * @return {number} The area of the Circle.
 */
var Area = function (circle) {
  return circle.radius > 0 ? Math.PI * circle.radius * circle.radius : 0;
};

module.exports = Area;

/***/ }),

/***/ 6853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Contains = __webpack_require__(7049);

var GetPoint = __webpack_require__(1799);

var GetPoints = __webpack_require__(9226);

var GEOM_CONST = __webpack_require__(9277);

var Random = __webpack_require__(236);
/**
 * @classdesc
 * A Circle object.
 *
 * This is a geometry object, containing numerical values and related methods to inspect and modify them.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render a Circle you should look at the capabilities of the Graphics class.
 *
 * @class Circle
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The x position of the center of the circle.
 * @param {number} [y=0] - The y position of the center of the circle.
 * @param {number} [radius=0] - The radius of the circle.
 */


var Circle = new Class({
  initialize: function Circle(x, y, radius) {
    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = 0;
    }

    if (radius === undefined) {
      radius = 0;
    }
    /**
     * The geometry constant type of this object: `GEOM_CONST.CIRCLE`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Circle#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */


    this.type = GEOM_CONST.CIRCLE;
    /**
     * The x position of the center of the circle.
     *
     * @name Phaser.Geom.Circle#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x = x;
    /**
     * The y position of the center of the circle.
     *
     * @name Phaser.Geom.Circle#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = y;
    /**
     * The internal radius of the circle.
     *
     * @name Phaser.Geom.Circle#_radius
     * @type {number}
     * @private
     * @since 3.0.0
     */

    this._radius = radius;
    /**
     * The internal diameter of the circle.
     *
     * @name Phaser.Geom.Circle#_diameter
     * @type {number}
     * @private
     * @since 3.0.0
     */

    this._diameter = radius * 2;
  },

  /**
   * Check to see if the Circle contains the given x / y coordinates.
   *
   * @method Phaser.Geom.Circle#contains
   * @since 3.0.0
   *
   * @param {number} x - The x coordinate to check within the circle.
   * @param {number} y - The y coordinate to check within the circle.
   *
   * @return {boolean} True if the coordinates are within the circle, otherwise false.
   */
  contains: function (x, y) {
    return Contains(this, x, y);
  },

  /**
   * Returns a Point object containing the coordinates of a point on the circumference of the Circle
   * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
   * at 180 degrees around the circle.
   *
   * @method Phaser.Geom.Circle#getPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [out,$return]
   *
   * @param {number} position - A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
   * @param {(Phaser.Geom.Point|object)} [out] - An object to store the return values in. If not given a Point object will be created.
   *
   * @return {(Phaser.Geom.Point|object)} A Point, or point-like object, containing the coordinates of the point around the circle.
   */
  getPoint: function (position, point) {
    return GetPoint(this, position, point);
  },

  /**
   * Returns an array of Point objects containing the coordinates of the points around the circumference of the Circle,
   * based on the given quantity or stepRate values.
   *
   * @method Phaser.Geom.Circle#getPoints
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point[]} O - [output,$return]
   *
   * @param {number} quantity - The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
   * @param {number} [stepRate] - Sets the quantity by getting the circumference of the circle and dividing it by the stepRate.
   * @param {(array|Phaser.Geom.Point[])} [output] - An array to insert the points in to. If not provided a new array will be created.
   *
   * @return {(array|Phaser.Geom.Point[])} An array of Point objects pertaining to the points around the circumference of the circle.
   */
  getPoints: function (quantity, stepRate, output) {
    return GetPoints(this, quantity, stepRate, output);
  },

  /**
   * Returns a uniformly distributed random point from anywhere within the Circle.
   *
   * @method Phaser.Geom.Circle#getRandomPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [point,$return]
   *
   * @param {(Phaser.Geom.Point|object)} [point] - A Point or point-like object to set the random `x` and `y` values in.
   *
   * @return {(Phaser.Geom.Point|object)} A Point object with the random values set in the `x` and `y` properties.
   */
  getRandomPoint: function (point) {
    return Random(this, point);
  },

  /**
   * Sets the x, y and radius of this circle.
   *
   * @method Phaser.Geom.Circle#setTo
   * @since 3.0.0
   *
   * @param {number} [x=0] - The x position of the center of the circle.
   * @param {number} [y=0] - The y position of the center of the circle.
   * @param {number} [radius=0] - The radius of the circle.
   *
   * @return {this} This Circle object.
   */
  setTo: function (x, y, radius) {
    this.x = x;
    this.y = y;
    this._radius = radius;
    this._diameter = radius * 2;
    return this;
  },

  /**
   * Sets this Circle to be empty with a radius of zero.
   * Does not change its position.
   *
   * @method Phaser.Geom.Circle#setEmpty
   * @since 3.0.0
   *
   * @return {this} This Circle object.
   */
  setEmpty: function () {
    this._radius = 0;
    this._diameter = 0;
    return this;
  },

  /**
   * Sets the position of this Circle.
   *
   * @method Phaser.Geom.Circle#setPosition
   * @since 3.0.0
   *
   * @param {number} [x=0] - The x position of the center of the circle.
   * @param {number} [y=0] - The y position of the center of the circle.
   *
   * @return {this} This Circle object.
   */
  setPosition: function (x, y) {
    if (y === undefined) {
      y = x;
    }

    this.x = x;
    this.y = y;
    return this;
  },

  /**
   * Checks to see if the Circle is empty: has a radius of zero.
   *
   * @method Phaser.Geom.Circle#isEmpty
   * @since 3.0.0
   *
   * @return {boolean} True if the Circle is empty, otherwise false.
   */
  isEmpty: function () {
    return this._radius <= 0;
  },

  /**
   * The radius of the Circle.
   *
   * @name Phaser.Geom.Circle#radius
   * @type {number}
   * @since 3.0.0
   */
  radius: {
    get: function () {
      return this._radius;
    },
    set: function (value) {
      this._radius = value;
      this._diameter = value * 2;
    }
  },

  /**
   * The diameter of the Circle.
   *
   * @name Phaser.Geom.Circle#diameter
   * @type {number}
   * @since 3.0.0
   */
  diameter: {
    get: function () {
      return this._diameter;
    },
    set: function (value) {
      this._diameter = value;
      this._radius = value * 0.5;
    }
  },

  /**
   * The left position of the Circle.
   *
   * @name Phaser.Geom.Circle#left
   * @type {number}
   * @since 3.0.0
   */
  left: {
    get: function () {
      return this.x - this._radius;
    },
    set: function (value) {
      this.x = value + this._radius;
    }
  },

  /**
   * The right position of the Circle.
   *
   * @name Phaser.Geom.Circle#right
   * @type {number}
   * @since 3.0.0
   */
  right: {
    get: function () {
      return this.x + this._radius;
    },
    set: function (value) {
      this.x = value - this._radius;
    }
  },

  /**
   * The top position of the Circle.
   *
   * @name Phaser.Geom.Circle#top
   * @type {number}
   * @since 3.0.0
   */
  top: {
    get: function () {
      return this.y - this._radius;
    },
    set: function (value) {
      this.y = value + this._radius;
    }
  },

  /**
   * The bottom position of the Circle.
   *
   * @name Phaser.Geom.Circle#bottom
   * @type {number}
   * @since 3.0.0
   */
  bottom: {
    get: function () {
      return this.y + this._radius;
    },
    set: function (value) {
      this.y = value - this._radius;
    }
  }
});
module.exports = Circle;

/***/ }),

/***/ 834:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the circumference of the given Circle.
 *
 * @function Phaser.Geom.Circle.Circumference
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference of.
 *
 * @return {number} The circumference of the Circle.
 */
var Circumference = function (circle) {
  return 2 * (Math.PI * circle.radius);
};

module.exports = Circumference;

/***/ }),

/***/ 2550:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Circle based on the given angle.
 *
 * @function Phaser.Geom.Circle.CircumferencePoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference point on.
 * @param {number} angle - The angle from the center of the Circle to the circumference to return the point from. Given in radians.
 * @param {(Phaser.Geom.Point|object)} [out] - A Point, or point-like object, to store the results in. If not given a Point will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object where the `x` and `y` properties are the point on the circumference.
 */


var CircumferencePoint = function (circle, angle, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = circle.x + circle.radius * Math.cos(angle);
  out.y = circle.y + circle.radius * Math.sin(angle);
  return out;
};

module.exports = CircumferencePoint;

/***/ }),

/***/ 2090:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Circle = __webpack_require__(6853);
/**
 * Creates a new Circle instance based on the values contained in the given source.
 *
 * @function Phaser.Geom.Circle.Clone
 * @since 3.0.0
 *
 * @param {(Phaser.Geom.Circle|object)} source - The Circle to be cloned. Can be an instance of a Circle or a circle-like object, with x, y and radius properties.
 *
 * @return {Phaser.Geom.Circle} A clone of the source Circle.
 */


var Clone = function (source) {
  return new Circle(source.x, source.y, source.radius);
};

module.exports = Clone;

/***/ }),

/***/ 7049:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check to see if the Circle contains the given x / y coordinates.
 *
 * @function Phaser.Geom.Circle.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to check.
 * @param {number} x - The x coordinate to check within the circle.
 * @param {number} y - The y coordinate to check within the circle.
 *
 * @return {boolean} True if the coordinates are within the circle, otherwise false.
 */
var Contains = function (circle, x, y) {
  //  Check if x/y are within the bounds first
  if (circle.radius > 0 && x >= circle.left && x <= circle.right && y >= circle.top && y <= circle.bottom) {
    var dx = (circle.x - x) * (circle.x - x);
    var dy = (circle.y - y) * (circle.y - y);
    return dx + dy <= circle.radius * circle.radius;
  } else {
    return false;
  }
};

module.exports = Contains;

/***/ }),

/***/ 510:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(7049);
/**
 * Check to see if the Circle contains the given Point object.
 *
 * @function Phaser.Geom.Circle.ContainsPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to check.
 * @param {(Phaser.Geom.Point|object)} point - The Point object to check if it's within the Circle or not.
 *
 * @return {boolean} True if the Point coordinates are within the circle, otherwise false.
 */


var ContainsPoint = function (circle, point) {
  return Contains(circle, point.x, point.y);
};

module.exports = ContainsPoint;

/***/ }),

/***/ 577:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(7049);
/**
 * Check to see if the Circle contains all four points of the given Rectangle object.
 *
 * @function Phaser.Geom.Circle.ContainsRect
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to check.
 * @param {(Phaser.Geom.Rectangle|object)} rect - The Rectangle object to check if it's within the Circle or not.
 *
 * @return {boolean} True if all of the Rectangle coordinates are within the circle, otherwise false.
 */


var ContainsRect = function (circle, rect) {
  return Contains(circle, rect.x, rect.y) && Contains(circle, rect.right, rect.y) && Contains(circle, rect.x, rect.bottom) && Contains(circle, rect.right, rect.bottom);
};

module.exports = ContainsRect;

/***/ }),

/***/ 1298:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copies the `x`, `y` and `radius` properties from the `source` Circle
 * into the given `dest` Circle, then returns the `dest` Circle.
 *
 * @function Phaser.Geom.Circle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [dest,$return]
 *
 * @param {Phaser.Geom.Circle} source - The source Circle to copy the values from.
 * @param {Phaser.Geom.Circle} dest - The destination Circle to copy the values to.
 *
 * @return {Phaser.Geom.Circle} The destination Circle.
 */
var CopyFrom = function (source, dest) {
  return dest.setTo(source.x, source.y, source.radius);
};

module.exports = CopyFrom;

/***/ }),

/***/ 9889:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compares the `x`, `y` and `radius` properties of the two given Circles.
 * Returns `true` if they all match, otherwise returns `false`.
 *
 * @function Phaser.Geom.Circle.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The first Circle to compare.
 * @param {Phaser.Geom.Circle} toCompare - The second Circle to compare.
 *
 * @return {boolean} `true` if the two Circles equal each other, otherwise `false`.
 */
var Equals = function (circle, toCompare) {
  return circle.x === toCompare.x && circle.y === toCompare.y && circle.radius === toCompare.radius;
};

module.exports = Equals;

/***/ }),

/***/ 8559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Returns the bounds of the Circle object.
 *
 * @function Phaser.Geom.Circle.GetBounds
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the bounds from.
 * @param {(Phaser.Geom.Rectangle|object)} [out] - A Rectangle, or rectangle-like object, to store the circle bounds in. If not given a new Rectangle will be created.
 *
 * @return {(Phaser.Geom.Rectangle|object)} The Rectangle object containing the Circles bounds.
 */


var GetBounds = function (circle, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  out.x = circle.left;
  out.y = circle.top;
  out.width = circle.diameter;
  out.height = circle.diameter;
  return out;
};

module.exports = GetBounds;

/***/ }),

/***/ 1799:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CircumferencePoint = __webpack_require__(2550);

var FromPercent = __webpack_require__(3579);

var MATH_CONST = __webpack_require__(611);

var Point = __webpack_require__(9106);
/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Circle
 * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
 * at 180 degrees around the circle.
 *
 * @function Phaser.Geom.Circle.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference point on.
 * @param {number} position - A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to store the return values in. If not given a Point object will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point, or point-like object, containing the coordinates of the point around the circle.
 */


var GetPoint = function (circle, position, out) {
  if (out === undefined) {
    out = new Point();
  }

  var angle = FromPercent(position, 0, MATH_CONST.PI2);
  return CircumferencePoint(circle, angle, out);
};

module.exports = GetPoint;

/***/ }),

/***/ 9226:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Circumference = __webpack_require__(834);

var CircumferencePoint = __webpack_require__(2550);

var FromPercent = __webpack_require__(3579);

var MATH_CONST = __webpack_require__(611);
/**
 * Returns an array of Point objects containing the coordinates of the points around the circumference of the Circle,
 * based on the given quantity or stepRate values.
 *
 * @function Phaser.Geom.Circle.GetPoints
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the points from.
 * @param {number} quantity - The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
 * @param {number} [stepRate] - Sets the quantity by getting the circumference of the circle and dividing it by the stepRate.
 * @param {array} [output] - An array to insert the points in to. If not provided a new array will be created.
 *
 * @return {Phaser.Geom.Point[]} An array of Point objects pertaining to the points around the circumference of the circle.
 */


var GetPoints = function (circle, quantity, stepRate, out) {
  if (out === undefined) {
    out = [];
  } //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.


  if (!quantity && stepRate > 0) {
    quantity = Circumference(circle) / stepRate;
  }

  for (var i = 0; i < quantity; i++) {
    var angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);
    out.push(CircumferencePoint(circle, angle));
  }

  return out;
};

module.exports = GetPoints;

/***/ }),

/***/ 6143:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Circle by the values given.
 *
 * @function Phaser.Geom.Circle.Offset
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [circle,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Circle by.
 * @param {number} y - The amount to vertically offset the Circle by.
 *
 * @return {Phaser.Geom.Circle} The Circle that was offset.
 */
var Offset = function (circle, x, y) {
  circle.x += x;
  circle.y += y;
  return circle;
};

module.exports = Offset;

/***/ }),

/***/ 6973:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Circle by the values given in the `x` and `y` properties of the Point object.
 *
 * @function Phaser.Geom.Circle.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [circle,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {(Phaser.Geom.Point|object)} point - The Point object containing the values to offset the Circle by.
 *
 * @return {Phaser.Geom.Circle} The Circle that was offset.
 */
var OffsetPoint = function (circle, point) {
  circle.x += point.x;
  circle.y += point.y;
  return circle;
};

module.exports = OffsetPoint;

/***/ }),

/***/ 236:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a uniformly distributed random point from anywhere within the given Circle.
 *
 * @function Phaser.Geom.Circle.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get a random point from.
 * @param {(Phaser.Geom.Point|object)} [out] - A Point or point-like object to set the random `x` and `y` values in.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object with the random values set in the `x` and `y` properties.
 */


var Random = function (circle, out) {
  if (out === undefined) {
    out = new Point();
  }

  var t = 2 * Math.PI * Math.random();
  var u = Math.random() + Math.random();
  var r = u > 1 ? 2 - u : u;
  var x = r * Math.cos(t);
  var y = r * Math.sin(t);
  out.x = circle.x + x * circle.radius;
  out.y = circle.y + y * circle.radius;
  return out;
};

module.exports = Random;

/***/ }),

/***/ 3957:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Circle = __webpack_require__(6853);

Circle.Area = __webpack_require__(2283);
Circle.Circumference = __webpack_require__(834);
Circle.CircumferencePoint = __webpack_require__(2550);
Circle.Clone = __webpack_require__(2090);
Circle.Contains = __webpack_require__(7049);
Circle.ContainsPoint = __webpack_require__(510);
Circle.ContainsRect = __webpack_require__(577);
Circle.CopyFrom = __webpack_require__(1298);
Circle.Equals = __webpack_require__(9889);
Circle.GetBounds = __webpack_require__(8559);
Circle.GetPoint = __webpack_require__(1799);
Circle.GetPoints = __webpack_require__(9226);
Circle.Offset = __webpack_require__(6143);
Circle.OffsetPoint = __webpack_require__(6973);
Circle.Random = __webpack_require__(236);
module.exports = Circle;

/***/ }),

/***/ 9277:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GEOM_CONST = {
  /**
   * A Circle Geometry object type.
   * 
   * @name Phaser.Geom.CIRCLE
   * @type {number}
   * @since 3.19.0
   */
  CIRCLE: 0,

  /**
   * An Ellipse Geometry object type.
   * 
   * @name Phaser.Geom.ELLIPSE
   * @type {number}
   * @since 3.19.0
   */
  ELLIPSE: 1,

  /**
   * A Line Geometry object type.
   * 
   * @name Phaser.Geom.LINE
   * @type {number}
   * @since 3.19.0
   */
  LINE: 2,

  /**
   * A Point Geometry object type.
   * 
   * @name Phaser.Geom.POINT
   * @type {number}
   * @since 3.19.0
   */
  POINT: 3,

  /**
   * A Polygon Geometry object type.
   * 
   * @name Phaser.Geom.POLYGON
   * @type {number}
   * @since 3.19.0
   */
  POLYGON: 4,

  /**
   * A Rectangle Geometry object type.
   * 
   * @name Phaser.Geom.RECTANGLE
   * @type {number}
   * @since 3.19.0
   */
  RECTANGLE: 5,

  /**
   * A Triangle Geometry object type.
   * 
   * @name Phaser.Geom.TRIANGLE
   * @type {number}
   * @since 3.19.0
   */
  TRIANGLE: 6
};
module.exports = GEOM_CONST;

/***/ }),

/***/ 9946:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the area of the Ellipse.
 *
 * @function Phaser.Geom.Ellipse.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the area of.
 *
 * @return {number} The area of the Ellipse.
 */
var Area = function (ellipse) {
  if (ellipse.isEmpty()) {
    return 0;
  } //  units squared


  return ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI;
};

module.exports = Area;

/***/ }),

/***/ 1805:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the circumference of the given Ellipse.
 *
 * @function Phaser.Geom.Ellipse.Circumference
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the circumference of.
 *
 * @return {number} The circumference of th Ellipse.
 */
var Circumference = function (ellipse) {
  var rx = ellipse.width / 2;
  var ry = ellipse.height / 2;
  var h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
  return Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
};

module.exports = Circumference;

/***/ }),

/***/ 2472:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse based on the given angle.
 *
 * @function Phaser.Geom.Ellipse.CircumferencePoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the circumference point on.
 * @param {number} angle - The angle from the center of the Ellipse to the circumference to return the point from. Given in radians.
 * @param {(Phaser.Geom.Point|object)} [out] - A Point, or point-like object, to store the results in. If not given a Point will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object where the `x` and `y` properties are the point on the circumference.
 */


var CircumferencePoint = function (ellipse, angle, out) {
  if (out === undefined) {
    out = new Point();
  }

  var halfWidth = ellipse.width / 2;
  var halfHeight = ellipse.height / 2;
  out.x = ellipse.x + halfWidth * Math.cos(angle);
  out.y = ellipse.y + halfHeight * Math.sin(angle);
  return out;
};

module.exports = CircumferencePoint;

/***/ }),

/***/ 6148:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Ellipse = __webpack_require__(9346);
/**
 * Creates a new Ellipse instance based on the values contained in the given source.
 *
 * @function Phaser.Geom.Ellipse.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} source - The Ellipse to be cloned. Can be an instance of an Ellipse or a ellipse-like object, with x, y, width and height properties.
 *
 * @return {Phaser.Geom.Ellipse} A clone of the source Ellipse.
 */


var Clone = function (source) {
  return new Ellipse(source.x, source.y, source.width, source.height);
};

module.exports = Clone;

/***/ }),

/***/ 9783:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check to see if the Ellipse contains the given x / y coordinates.
 *
 * @function Phaser.Geom.Ellipse.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {number} x - The x coordinate to check within the ellipse.
 * @param {number} y - The y coordinate to check within the ellipse.
 *
 * @return {boolean} True if the coordinates are within the ellipse, otherwise false.
 */
var Contains = function (ellipse, x, y) {
  if (ellipse.width <= 0 || ellipse.height <= 0) {
    return false;
  } //  Normalize the coords to an ellipse with center 0,0 and a radius of 0.5


  var normx = (x - ellipse.x) / ellipse.width;
  var normy = (y - ellipse.y) / ellipse.height;
  normx *= normx;
  normy *= normy;
  return normx + normy < 0.25;
};

module.exports = Contains;

/***/ }),

/***/ 7926:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(9783);
/**
 * Check to see if the Ellipse contains the given Point object.
 *
 * @function Phaser.Geom.Ellipse.ContainsPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {(Phaser.Geom.Point|object)} point - The Point object to check if it's within the Circle or not.
 *
 * @return {boolean} True if the Point coordinates are within the circle, otherwise false.
 */


var ContainsPoint = function (ellipse, point) {
  return Contains(ellipse, point.x, point.y);
};

module.exports = ContainsPoint;

/***/ }),

/***/ 3952:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(9783);
/**
 * Check to see if the Ellipse contains all four points of the given Rectangle object.
 *
 * @function Phaser.Geom.Ellipse.ContainsRect
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {(Phaser.Geom.Rectangle|object)} rect - The Rectangle object to check if it's within the Ellipse or not.
 *
 * @return {boolean} True if all of the Rectangle coordinates are within the ellipse, otherwise false.
 */


var ContainsRect = function (ellipse, rect) {
  return Contains(ellipse, rect.x, rect.y) && Contains(ellipse, rect.right, rect.y) && Contains(ellipse, rect.x, rect.bottom) && Contains(ellipse, rect.right, rect.bottom);
};

module.exports = ContainsRect;

/***/ }),

/***/ 8350:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copies the `x`, `y`, `width` and `height` properties from the `source` Ellipse
 * into the given `dest` Ellipse, then returns the `dest` Ellipse.
 *
 * @function Phaser.Geom.Ellipse.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Ellipse} O - [dest,$return]
 *
 * @param {Phaser.Geom.Ellipse} source - The source Ellipse to copy the values from.
 * @param {Phaser.Geom.Ellipse} dest - The destination Ellipse to copy the values to.
 *
 * @return {Phaser.Geom.Ellipse} The destination Ellipse.
 */
var CopyFrom = function (source, dest) {
  return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;

/***/ }),

/***/ 9346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Contains = __webpack_require__(9783);

var GetPoint = __webpack_require__(5249);

var GetPoints = __webpack_require__(186);

var GEOM_CONST = __webpack_require__(9277);

var Random = __webpack_require__(3546);
/**
 * @classdesc
 * An Ellipse object.
 *
 * This is a geometry object, containing numerical values and related methods to inspect and modify them.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render an Ellipse you should look at the capabilities of the Graphics class.
 *
 * @class Ellipse
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The x position of the center of the ellipse.
 * @param {number} [y=0] - The y position of the center of the ellipse.
 * @param {number} [width=0] - The width of the ellipse.
 * @param {number} [height=0] - The height of the ellipse.
 */


var Ellipse = new Class({
  initialize: function Ellipse(x, y, width, height) {
    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = 0;
    }

    if (width === undefined) {
      width = 0;
    }

    if (height === undefined) {
      height = 0;
    }
    /**
     * The geometry constant type of this object: `GEOM_CONST.ELLIPSE`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Ellipse#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */


    this.type = GEOM_CONST.ELLIPSE;
    /**
     * The x position of the center of the ellipse.
     *
     * @name Phaser.Geom.Ellipse#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x = x;
    /**
     * The y position of the center of the ellipse.
     *
     * @name Phaser.Geom.Ellipse#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = y;
    /**
     * The width of the ellipse.
     *
     * @name Phaser.Geom.Ellipse#width
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.width = width;
    /**
     * The height of the ellipse.
     *
     * @name Phaser.Geom.Ellipse#height
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.height = height;
  },

  /**
   * Check to see if the Ellipse contains the given x / y coordinates.
   *
   * @method Phaser.Geom.Ellipse#contains
   * @since 3.0.0
   *
   * @param {number} x - The x coordinate to check within the ellipse.
   * @param {number} y - The y coordinate to check within the ellipse.
   *
   * @return {boolean} True if the coordinates are within the ellipse, otherwise false.
   */
  contains: function (x, y) {
    return Contains(this, x, y);
  },

  /**
   * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse
   * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
   * at 180 degrees around the circle.
   *
   * @method Phaser.Geom.Ellipse#getPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [out,$return]
   *
   * @param {number} position - A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the ellipse.
   * @param {(Phaser.Geom.Point|object)} [out] - An object to store the return values in. If not given a Point object will be created.
   *
   * @return {(Phaser.Geom.Point|object)} A Point, or point-like object, containing the coordinates of the point around the ellipse.
   */
  getPoint: function (position, point) {
    return GetPoint(this, position, point);
  },

  /**
   * Returns an array of Point objects containing the coordinates of the points around the circumference of the Ellipse,
   * based on the given quantity or stepRate values.
   *
   * @method Phaser.Geom.Ellipse#getPoints
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point[]} O - [output,$return]
   *
   * @param {number} quantity - The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
   * @param {number} [stepRate] - Sets the quantity by getting the circumference of the ellipse and dividing it by the stepRate.
   * @param {(array|Phaser.Geom.Point[])} [output] - An array to insert the points in to. If not provided a new array will be created.
   *
   * @return {(array|Phaser.Geom.Point[])} An array of Point objects pertaining to the points around the circumference of the ellipse.
   */
  getPoints: function (quantity, stepRate, output) {
    return GetPoints(this, quantity, stepRate, output);
  },

  /**
   * Returns a uniformly distributed random point from anywhere within the given Ellipse.
   *
   * @method Phaser.Geom.Ellipse#getRandomPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [point,$return]
   *
   * @param {(Phaser.Geom.Point|object)} [point] - A Point or point-like object to set the random `x` and `y` values in.
   *
   * @return {(Phaser.Geom.Point|object)} A Point object with the random values set in the `x` and `y` properties.
   */
  getRandomPoint: function (point) {
    return Random(this, point);
  },

  /**
   * Sets the x, y, width and height of this ellipse.
   *
   * @method Phaser.Geom.Ellipse#setTo
   * @since 3.0.0
   *
   * @param {number} x - The x position of the center of the ellipse.
   * @param {number} y - The y position of the center of the ellipse.
   * @param {number} width - The width of the ellipse.
   * @param {number} height - The height of the ellipse.
   *
   * @return {this} This Ellipse object.
   */
  setTo: function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  },

  /**
   * Sets this Ellipse to be empty with a width and height of zero.
   * Does not change its position.
   *
   * @method Phaser.Geom.Ellipse#setEmpty
   * @since 3.0.0
   *
   * @return {this} This Ellipse object.
   */
  setEmpty: function () {
    this.width = 0;
    this.height = 0;
    return this;
  },

  /**
   * Sets the position of this Ellipse.
   *
   * @method Phaser.Geom.Ellipse#setPosition
   * @since 3.0.0
   *
   * @param {number} x - The x position of the center of the ellipse.
   * @param {number} y - The y position of the center of the ellipse.
   *
   * @return {this} This Ellipse object.
   */
  setPosition: function (x, y) {
    if (y === undefined) {
      y = x;
    }

    this.x = x;
    this.y = y;
    return this;
  },

  /**
   * Sets the size of this Ellipse.
   * Does not change its position.
   *
   * @method Phaser.Geom.Ellipse#setSize
   * @since 3.0.0
   *
   * @param {number} width - The width of the ellipse.
   * @param {number} [height=width] - The height of the ellipse.
   *
   * @return {this} This Ellipse object.
   */
  setSize: function (width, height) {
    if (height === undefined) {
      height = width;
    }

    this.width = width;
    this.height = height;
    return this;
  },

  /**
   * Checks to see if the Ellipse is empty: has a width or height equal to zero.
   *
   * @method Phaser.Geom.Ellipse#isEmpty
   * @since 3.0.0
   *
   * @return {boolean} True if the Ellipse is empty, otherwise false.
   */
  isEmpty: function () {
    return this.width <= 0 || this.height <= 0;
  },

  /**
   * Returns the minor radius of the ellipse. Also known as the Semi Minor Axis.
   *
   * @method Phaser.Geom.Ellipse#getMinorRadius
   * @since 3.0.0
   *
   * @return {number} The minor radius.
   */
  getMinorRadius: function () {
    return Math.min(this.width, this.height) / 2;
  },

  /**
   * Returns the major radius of the ellipse. Also known as the Semi Major Axis.
   *
   * @method Phaser.Geom.Ellipse#getMajorRadius
   * @since 3.0.0
   *
   * @return {number} The major radius.
   */
  getMajorRadius: function () {
    return Math.max(this.width, this.height) / 2;
  },

  /**
   * The left position of the Ellipse.
   *
   * @name Phaser.Geom.Ellipse#left
   * @type {number}
   * @since 3.0.0
   */
  left: {
    get: function () {
      return this.x - this.width / 2;
    },
    set: function (value) {
      this.x = value + this.width / 2;
    }
  },

  /**
   * The right position of the Ellipse.
   *
   * @name Phaser.Geom.Ellipse#right
   * @type {number}
   * @since 3.0.0
   */
  right: {
    get: function () {
      return this.x + this.width / 2;
    },
    set: function (value) {
      this.x = value - this.width / 2;
    }
  },

  /**
   * The top position of the Ellipse.
   *
   * @name Phaser.Geom.Ellipse#top
   * @type {number}
   * @since 3.0.0
   */
  top: {
    get: function () {
      return this.y - this.height / 2;
    },
    set: function (value) {
      this.y = value + this.height / 2;
    }
  },

  /**
   * The bottom position of the Ellipse.
   *
   * @name Phaser.Geom.Ellipse#bottom
   * @type {number}
   * @since 3.0.0
   */
  bottom: {
    get: function () {
      return this.y + this.height / 2;
    },
    set: function (value) {
      this.y = value - this.height / 2;
    }
  }
});
module.exports = Ellipse;

/***/ }),

/***/ 4314:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compares the `x`, `y`, `width` and `height` properties of the two given Ellipses.
 * Returns `true` if they all match, otherwise returns `false`.
 *
 * @function Phaser.Geom.Ellipse.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The first Ellipse to compare.
 * @param {Phaser.Geom.Ellipse} toCompare - The second Ellipse to compare.
 *
 * @return {boolean} `true` if the two Ellipse equal each other, otherwise `false`.
 */
var Equals = function (ellipse, toCompare) {
  return ellipse.x === toCompare.x && ellipse.y === toCompare.y && ellipse.width === toCompare.width && ellipse.height === toCompare.height;
};

module.exports = Equals;

/***/ }),

/***/ 3399:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Returns the bounds of the Ellipse object.
 *
 * @function Phaser.Geom.Ellipse.GetBounds
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the bounds from.
 * @param {(Phaser.Geom.Rectangle|object)} [out] - A Rectangle, or rectangle-like object, to store the ellipse bounds in. If not given a new Rectangle will be created.
 *
 * @return {(Phaser.Geom.Rectangle|object)} The Rectangle object containing the Ellipse bounds.
 */


var GetBounds = function (ellipse, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  out.x = ellipse.left;
  out.y = ellipse.top;
  out.width = ellipse.width;
  out.height = ellipse.height;
  return out;
};

module.exports = GetBounds;

/***/ }),

/***/ 5249:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CircumferencePoint = __webpack_require__(2472);

var FromPercent = __webpack_require__(3579);

var MATH_CONST = __webpack_require__(611);

var Point = __webpack_require__(9106);
/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse
 * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
 * at 180 degrees around the circle.
 *
 * @function Phaser.Geom.Ellipse.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the circumference point on.
 * @param {number} position - A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the ellipse.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to store the return values in. If not given a Point object will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point, or point-like object, containing the coordinates of the point around the ellipse.
 */


var GetPoint = function (ellipse, position, out) {
  if (out === undefined) {
    out = new Point();
  }

  var angle = FromPercent(position, 0, MATH_CONST.PI2);
  return CircumferencePoint(ellipse, angle, out);
};

module.exports = GetPoint;

/***/ }),

/***/ 186:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Circumference = __webpack_require__(1805);

var CircumferencePoint = __webpack_require__(2472);

var FromPercent = __webpack_require__(3579);

var MATH_CONST = __webpack_require__(611);
/**
 * Returns an array of Point objects containing the coordinates of the points around the circumference of the Ellipse,
 * based on the given quantity or stepRate values.
 *
 * @function Phaser.Geom.Ellipse.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the points from.
 * @param {number} quantity - The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
 * @param {number} [stepRate] - Sets the quantity by getting the circumference of the ellipse and dividing it by the stepRate.
 * @param {(array|Phaser.Geom.Point[])} [out] - An array to insert the points in to. If not provided a new array will be created.
 *
 * @return {(array|Phaser.Geom.Point[])} An array of Point objects pertaining to the points around the circumference of the ellipse.
 */


var GetPoints = function (ellipse, quantity, stepRate, out) {
  if (out === undefined) {
    out = [];
  } //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.


  if (!quantity && stepRate > 0) {
    quantity = Circumference(ellipse) / stepRate;
  }

  for (var i = 0; i < quantity; i++) {
    var angle = FromPercent(i / quantity, 0, MATH_CONST.PI2);
    out.push(CircumferencePoint(ellipse, angle));
  }

  return out;
};

module.exports = GetPoints;

/***/ }),

/***/ 7978:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Ellipse by the values given.
 *
 * @function Phaser.Geom.Ellipse.Offset
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Ellipse} O - [ellipse,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Ellipse by.
 * @param {number} y - The amount to vertically offset the Ellipse by.
 *
 * @return {Phaser.Geom.Ellipse} The Ellipse that was offset.
 */
var Offset = function (ellipse, x, y) {
  ellipse.x += x;
  ellipse.y += y;
  return ellipse;
};

module.exports = Offset;

/***/ }),

/***/ 1486:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Ellipse by the values given in the `x` and `y` properties of the Point object.
 *
 * @function Phaser.Geom.Ellipse.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Ellipse} O - [ellipse,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to be offset (translated.)
 * @param {(Phaser.Geom.Point|object)} point - The Point object containing the values to offset the Ellipse by.
 *
 * @return {Phaser.Geom.Ellipse} The Ellipse that was offset.
 */
var OffsetPoint = function (ellipse, point) {
  ellipse.x += point.x;
  ellipse.y += point.y;
  return ellipse;
};

module.exports = OffsetPoint;

/***/ }),

/***/ 3546:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a uniformly distributed random point from anywhere within the given Ellipse.
 *
 * @function Phaser.Geom.Ellipse.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get a random point from.
 * @param {(Phaser.Geom.Point|object)} [out] - A Point or point-like object to set the random `x` and `y` values in.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object with the random values set in the `x` and `y` properties.
 */


var Random = function (ellipse, out) {
  if (out === undefined) {
    out = new Point();
  }

  var p = Math.random() * Math.PI * 2;
  var s = Math.sqrt(Math.random());
  out.x = ellipse.x + s * Math.cos(p) * ellipse.width / 2;
  out.y = ellipse.y + s * Math.sin(p) * ellipse.height / 2;
  return out;
};

module.exports = Random;

/***/ }),

/***/ 6682:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Ellipse = __webpack_require__(9346);

Ellipse.Area = __webpack_require__(9946);
Ellipse.Circumference = __webpack_require__(1805);
Ellipse.CircumferencePoint = __webpack_require__(2472);
Ellipse.Clone = __webpack_require__(6148);
Ellipse.Contains = __webpack_require__(9783);
Ellipse.ContainsPoint = __webpack_require__(7926);
Ellipse.ContainsRect = __webpack_require__(3952);
Ellipse.CopyFrom = __webpack_require__(8350);
Ellipse.Equals = __webpack_require__(4314);
Ellipse.GetBounds = __webpack_require__(3399);
Ellipse.GetPoint = __webpack_require__(5249);
Ellipse.GetPoints = __webpack_require__(186);
Ellipse.Offset = __webpack_require__(7978);
Ellipse.OffsetPoint = __webpack_require__(1486);
Ellipse.Random = __webpack_require__(3546);
module.exports = Ellipse;

/***/ }),

/***/ 3283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CONST = __webpack_require__(9277);

var Extend = __webpack_require__(2037);
/**
 * @namespace Phaser.Geom
 */


var Geom = {
  Circle: __webpack_require__(3957),
  Ellipse: __webpack_require__(6682),
  Intersects: __webpack_require__(6329),
  Line: __webpack_require__(4420),
  Mesh: __webpack_require__(8864),
  Point: __webpack_require__(7866),
  Polygon: __webpack_require__(5147),
  Rectangle: __webpack_require__(5244),
  Triangle: __webpack_require__(6636)
}; //   Merge in the consts

Geom = Extend(false, Geom, CONST);
module.exports = Geom;

/***/ }),

/***/ 3278:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var DistanceBetween = __webpack_require__(6052);
/**
 * Checks if two Circles intersect.
 *
 * @function Phaser.Geom.Intersects.CircleToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circleA - The first Circle to check for intersection.
 * @param {Phaser.Geom.Circle} circleB - The second Circle to check for intersection.
 *
 * @return {boolean} `true` if the two Circles intersect, otherwise `false`.
 */


var CircleToCircle = function (circleA, circleB) {
  return DistanceBetween(circleA.x, circleA.y, circleB.x, circleB.y) <= circleA.radius + circleB.radius;
};

module.exports = CircleToCircle;

/***/ }),

/***/ 8779:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks for intersection between a circle and a rectangle.
 *
 * @function Phaser.Geom.Intersects.CircleToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The circle to be checked.
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to be checked.
 *
 * @return {boolean} `true` if the two objects intersect, otherwise `false`.
 */
var CircleToRectangle = function (circle, rect) {
  var halfWidth = rect.width / 2;
  var halfHeight = rect.height / 2;
  var cx = Math.abs(circle.x - rect.x - halfWidth);
  var cy = Math.abs(circle.y - rect.y - halfHeight);
  var xDist = halfWidth + circle.radius;
  var yDist = halfHeight + circle.radius;

  if (cx > xDist || cy > yDist) {
    return false;
  } else if (cx <= halfWidth || cy <= halfHeight) {
    return true;
  } else {
    var xCornerDist = cx - halfWidth;
    var yCornerDist = cy - halfHeight;
    var xCornerDistSq = xCornerDist * xCornerDist;
    var yCornerDistSq = yCornerDist * yCornerDist;
    var maxCornerDistSq = circle.radius * circle.radius;
    return xCornerDistSq + yCornerDistSq <= maxCornerDistSq;
  }
};

module.exports = CircleToRectangle;

/***/ }),

/***/ 1819:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var CircleToCircle = __webpack_require__(3278);
/**
 * Checks if two Circles intersect and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetCircleToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circleA - The first Circle to check for intersection.
 * @param {Phaser.Geom.Circle} circleB - The second Circle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetCircleToCircle = function (circleA, circleB, out) {
  if (out === undefined) {
    out = [];
  }

  if (CircleToCircle(circleA, circleB)) {
    var x0 = circleA.x;
    var y0 = circleA.y;
    var r0 = circleA.radius;
    var x1 = circleB.x;
    var y1 = circleB.y;
    var r1 = circleB.radius;
    var coefficientA, coefficientB, coefficientC, lambda, x;

    if (y0 === y1) {
      x = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0) / (2 * (x0 - x1));
      coefficientA = 1;
      coefficientB = -2 * y1;
      coefficientC = x1 * x1 + x * x - 2 * x1 * x + y1 * y1 - r1 * r1;
      lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;

      if (lambda === 0) {
        out.push(new Point(x, -coefficientB / (2 * coefficientA)));
      } else if (lambda > 0) {
        out.push(new Point(x, (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA)));
        out.push(new Point(x, (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA)));
      }
    } else {
      var v1 = (x0 - x1) / (y0 - y1);
      var n = (r1 * r1 - r0 * r0 - x1 * x1 + x0 * x0 - y1 * y1 + y0 * y0) / (2 * (y0 - y1));
      coefficientA = v1 * v1 + 1;
      coefficientB = 2 * y0 * v1 - 2 * n * v1 - 2 * x0;
      coefficientC = x0 * x0 + y0 * y0 + n * n - r0 * r0 - 2 * y0 * n;
      lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;

      if (lambda === 0) {
        x = -coefficientB / (2 * coefficientA);
        out.push(new Point(x, n - x * v1));
      } else if (lambda > 0) {
        x = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
        out.push(new Point(x, n - x * v1));
        x = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
        out.push(new Point(x, n - x * v1));
      }
    }
  }

  return out;
};

module.exports = GetCircleToCircle;

/***/ }),

/***/ 3786:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetLineToCircle = __webpack_require__(1346);

var CircleToRectangle = __webpack_require__(8779);
/**
 * Checks for intersection between a circle and a rectangle,
 * and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetCircleToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The circle to be checked.
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to be checked.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetCircleToRectangle = function (circle, rect, out) {
  if (out === undefined) {
    out = [];
  }

  if (CircleToRectangle(circle, rect)) {
    var lineA = rect.getLineA();
    var lineB = rect.getLineB();
    var lineC = rect.getLineC();
    var lineD = rect.getLineD();
    GetLineToCircle(lineA, circle, out);
    GetLineToCircle(lineB, circle, out);
    GetLineToCircle(lineC, circle, out);
    GetLineToCircle(lineD, circle, out);
  }

  return out;
};

module.exports = GetCircleToRectangle;

/***/ }),

/***/ 1346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var LineToCircle = __webpack_require__(1242);
/**
 * Checks for intersection between the line segment and circle,
 * and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetLineToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line segment to check.
 * @param {Phaser.Geom.Circle} circle - The circle to check against the line.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetLineToCircle = function (line, circle, out) {
  if (out === undefined) {
    out = [];
  }

  if (LineToCircle(line, circle)) {
    var lx1 = line.x1;
    var ly1 = line.y1;
    var lx2 = line.x2;
    var ly2 = line.y2;
    var cx = circle.x;
    var cy = circle.y;
    var cr = circle.radius;
    var lDirX = lx2 - lx1;
    var lDirY = ly2 - ly1;
    var oDirX = lx1 - cx;
    var oDirY = ly1 - cy;
    var coefficientA = lDirX * lDirX + lDirY * lDirY;
    var coefficientB = 2 * (lDirX * oDirX + lDirY * oDirY);
    var coefficientC = oDirX * oDirX + oDirY * oDirY - cr * cr;
    var lambda = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
    var x, y;

    if (lambda === 0) {
      var root = -coefficientB / (2 * coefficientA);
      x = lx1 + root * lDirX;
      y = ly1 + root * lDirY;

      if (root >= 0 && root <= 1) {
        out.push(new Point(x, y));
      }
    } else if (lambda > 0) {
      var root1 = (-coefficientB - Math.sqrt(lambda)) / (2 * coefficientA);
      x = lx1 + root1 * lDirX;
      y = ly1 + root1 * lDirY;

      if (root1 >= 0 && root1 <= 1) {
        out.push(new Point(x, y));
      }

      var root2 = (-coefficientB + Math.sqrt(lambda)) / (2 * coefficientA);
      x = lx1 + root2 * lDirX;
      y = ly1 + root2 * lDirY;

      if (root2 >= 0 && root2 <= 1) {
        out.push(new Point(x, y));
      }
    }
  }

  return out;
};

module.exports = GetLineToCircle;

/***/ }),

/***/ 2013:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector3 = __webpack_require__(2220);
/**
 * Checks for intersection between the two line segments and returns the intersection point as a Vector3,
 * or `null` if the lines are parallel, or do not intersect.
 *
 * The `z` property of the Vector3 contains the intersection distance, which can be used to find
 * the closest intersecting point from a group of line segments.
 *
 * @function Phaser.Geom.Intersects.GetLineToLine
 * @since 3.50.0
 *
 * @param {Phaser.Geom.Line} line1 - The first line segment to check.
 * @param {Phaser.Geom.Line} line2 - The second line segment to check.
 * @param {Phaser.Math.Vector3} [out] - A Vector3 to store the intersection results in.
 *
 * @return {Phaser.Math.Vector3} A Vector3 containing the intersection results, or `null`.
 */


var GetLineToLine = function (line1, line2, out) {
  var x1 = line1.x1;
  var y1 = line1.y1;
  var x2 = line1.x2;
  var y2 = line1.y2;
  var x3 = line2.x1;
  var y3 = line2.y1;
  var x4 = line2.x2;
  var y4 = line2.y2;
  var dx1 = x2 - x1;
  var dy1 = y2 - y1;
  var dx2 = x4 - x3;
  var dy2 = y4 - y3;
  var denom = dy2 * dx1 - dx2 * dy1; //  Make sure there is not a division by zero - this also indicates that the lines are parallel.
  //  If numA and numB were both equal to zero the lines would be on top of each other (coincidental).
  //  This check is not done because it is not necessary for this implementation (the parallel check accounts for this).

  if (dx1 === 0 || denom === 0) {
    return false;
  }

  var T2 = (dx1 * (y3 - y1) + dy1 * (x1 - x3)) / (dx2 * dy1 - dy2 * dx1);
  var T1 = (x3 + dx2 * T2 - x1) / dx1; //  Intersects?

  if (T1 < 0 || T2 < 0 || T2 > 1) {
    return null;
  }

  if (out === undefined) {
    out = new Vector3();
  }

  return out.set(x1 + dx1 * T1, y1 + dy1 * T1, T1);
};

module.exports = GetLineToLine;

/***/ }),

/***/ 5419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector3 = __webpack_require__(2220);

var GetLineToLine = __webpack_require__(2013);

var Line = __webpack_require__(9778); //  Temp calculation segment


var segment = new Line(); //  Temp vec3

var tempIntersect = new Vector3();
/**
 * Checks for the closest point of intersection between a line segment and an array of points, where each pair
 * of points are converted to line segments for the intersection tests.
 *
 * If no intersection is found, this function returns `null`.
 *
 * If intersection was found, a Vector3 is returned with the following properties:
 *
 * The `x` and `y` components contain the point of the intersection.
 * The `z` component contains the closest distance.
 *
 * @function Phaser.Geom.Intersects.GetLineToPoints
 * @since 3.50.0
 *
 * @param {Phaser.Geom.Line} line - The line segment to check.
 * @param {Phaser.Math.Vector2[] | Phaser.Geom.Point[]} points - An array of points to check.
 * @param {Phaser.Math.Vector3} [out] - A Vector3 to store the intersection results in.
 *
 * @return {Phaser.Math.Vector3} A Vector3 containing the intersection results, or `null`.
 */

var GetLineToPoints = function (line, points, out) {
  if (out === undefined) {
    out = new Vector3();
  }

  var closestIntersect = false; //  Reset our vec3s

  out.set();
  tempIntersect.set();
  var prev = points[0];

  for (var i = 1; i < points.length; i++) {
    var current = points[i];
    segment.setTo(prev.x, prev.y, current.x, current.y);
    prev = current;

    if (GetLineToLine(line, segment, tempIntersect)) {
      if (!closestIntersect || tempIntersect.z < out.z) {
        out.copy(tempIntersect);
        closestIntersect = true;
      }
    }
  }

  return closestIntersect ? out : null;
};

module.exports = GetLineToPoints;

/***/ }),

/***/ 8202:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector3 = __webpack_require__(2220);

var Vector4 = __webpack_require__(3963);

var GetLineToPoints = __webpack_require__(5419); //  Temp vec3


var tempIntersect = new Vector3();
/**
 * Checks for the closest point of intersection between a line segment and an array of polygons.
 *
 * If no intersection is found, this function returns `null`.
 *
 * If intersection was found, a Vector4 is returned with the following properties:
 *
 * The `x` and `y` components contain the point of the intersection.
 * The `z` component contains the closest distance.
 * The `w` component contains the index of the polygon, in the given array, that triggered the intersection.
 *
 * @function Phaser.Geom.Intersects.GetLineToPolygon
 * @since 3.50.0
 *
 * @param {Phaser.Geom.Line} line - The line segment to check.
 * @param {Phaser.Geom.Polygon | Phaser.Geom.Polygon[]} polygons - A single polygon, or array of polygons, to check.
 * @param {Phaser.Math.Vector4} [out] - A Vector4 to store the intersection results in.
 *
 * @return {Phaser.Math.Vector4} A Vector4 containing the intersection results, or `null`.
 */

var GetLineToPolygon = function (line, polygons, out) {
  if (out === undefined) {
    out = new Vector4();
  }

  if (!Array.isArray(polygons)) {
    polygons = [polygons];
  }

  var closestIntersect = false; //  Reset our vec4s

  out.set();
  tempIntersect.set();

  for (var i = 0; i < polygons.length; i++) {
    if (GetLineToPoints(line, polygons[i].points, tempIntersect)) {
      if (!closestIntersect || tempIntersect.z < out.z) {
        out.set(tempIntersect.x, tempIntersect.y, tempIntersect.z, i);
        closestIntersect = true;
      }
    }
  }

  return closestIntersect ? out : null;
};

module.exports = GetLineToPolygon;

/***/ }),

/***/ 5377:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var LineToLine = __webpack_require__(2670);

var LineToRectangle = __webpack_require__(2181);
/**
 * Checks for intersection between the Line and a Rectangle shape,
 * and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetLineToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The Line to check for intersection.
 * @param {(Phaser.Geom.Rectangle|object)} rect - The Rectangle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetLineToRectangle = function (line, rect, out) {
  if (out === undefined) {
    out = [];
  }

  if (LineToRectangle(line, rect)) {
    var lineA = rect.getLineA();
    var lineB = rect.getLineB();
    var lineC = rect.getLineC();
    var lineD = rect.getLineD();
    var output = [new Point(), new Point(), new Point(), new Point()];
    var result = [LineToLine(lineA, line, output[0]), LineToLine(lineB, line, output[1]), LineToLine(lineC, line, output[2]), LineToLine(lineD, line, output[3])];

    for (var i = 0; i < 4; i++) {
      if (result[i]) {
        out.push(output[i]);
      }
    }
  }

  return out;
};

module.exports = GetLineToRectangle;

/***/ }),

/***/ 6550:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector4 = __webpack_require__(3963);

var GetLineToPolygon = __webpack_require__(8202);

var Line = __webpack_require__(9778); //  Temp calculation segment


var segment = new Line();
/**
 * @ignore
 */

function CheckIntersects(angle, x, y, polygons, intersects) {
  var dx = Math.cos(angle);
  var dy = Math.sin(angle);
  segment.setTo(x, y, x + dx, y + dy);
  var closestIntersect = GetLineToPolygon(segment, polygons);

  if (closestIntersect) {
    intersects.push(new Vector4(closestIntersect.x, closestIntersect.y, angle, closestIntersect.w));
  }
}
/**
 * @ignore
 */


function SortIntersects(a, b) {
  return a.z - b.z;
}
/**
 * Projects rays out from the given point to each line segment of the polygons.
 *
 * If the rays intersect with the polygons, the points of intersection are returned in an array.
 *
 * If no intersections are found, the returned array will be empty.
 *
 * Each Vector4 intersection result has the following properties:
 *
 * The `x` and `y` components contain the point of the intersection.
 * The `z` component contains the angle of intersection.
 * The `w` component contains the index of the polygon, in the given array, that triggered the intersection.
 *
 * @function Phaser.Geom.Intersects.GetRaysFromPointToPolygon
 * @since 3.50.0
 *
 * @param {number} x - The x coordinate to project the rays from.
 * @param {number} y - The y coordinate to project the rays from.
 * @param {Phaser.Geom.Polygon | Phaser.Geom.Polygon[]} polygons - A single polygon, or array of polygons, to check against the rays.
 *
 * @return {Phaser.Math.Vector4[]} An array containing all intersections in Vector4s.
 */


var GetRaysFromPointToPolygon = function (x, y, polygons) {
  if (!Array.isArray(polygons)) {
    polygons = [polygons];
  }

  var intersects = [];
  var angles = [];

  for (var i = 0; i < polygons.length; i++) {
    var points = polygons[i].points;

    for (var p = 0; p < points.length; p++) {
      var angle = Math.atan2(points[p].y - y, points[p].x - x);

      if (angles.indexOf(angle) === -1) {
        //  +- 0.00001 rads to catch lines behind segment corners
        CheckIntersects(angle, x, y, polygons, intersects);
        CheckIntersects(angle - 0.00001, x, y, polygons, intersects);
        CheckIntersects(angle + 0.00001, x, y, polygons, intersects);
        angles.push(angle);
      }
    }
  }

  return intersects.sort(SortIntersects);
};

module.exports = GetRaysFromPointToPolygon;

/***/ }),

/***/ 8422:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);

var RectangleToRectangle = __webpack_require__(1756);
/**
 * Checks if two Rectangle shapes intersect and returns the area of this intersection as Rectangle object.
 * 
 * If optional `output` parameter is omitted, new Rectangle object is created and returned. If there is intersection, it will contain intersection area. If there is no intersection, it wil be empty Rectangle (all values set to zero).
 * 
 * If Rectangle object is passed as `output` and there is intersection, then intersection area data will be loaded into it and it will be returned. If there is no intersection, it will be returned without any change.
 *
 * @function Phaser.Geom.Intersects.GetRectangleIntersection
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [output,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle object.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle object.
 * @param {Phaser.Geom.Rectangle} [output] - Optional Rectangle object. If given, the intersection data will be loaded into it (in case of no intersection, it will be left unchanged). Otherwise, new Rectangle object will be created and returned with either intersection data or empty (all values set to zero), if there is no intersection.
 *
 * @return {Phaser.Geom.Rectangle} A rectangle object with intersection data.
 */


var GetRectangleIntersection = function (rectA, rectB, output) {
  if (output === undefined) {
    output = new Rectangle();
  }

  if (RectangleToRectangle(rectA, rectB)) {
    output.x = Math.max(rectA.x, rectB.x);
    output.y = Math.max(rectA.y, rectB.y);
    output.width = Math.min(rectA.right, rectB.right) - output.x;
    output.height = Math.min(rectA.bottom, rectB.bottom) - output.y;
  }

  return output;
};

module.exports = GetRectangleIntersection;

/***/ }),

/***/ 5425:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetLineToRectangle = __webpack_require__(5377);

var RectangleToRectangle = __webpack_require__(1756);
/**
 * Checks if two Rectangles intersect and returns the intersection points as a Point object array.
 *
 * A Rectangle intersects another Rectangle if any part of its bounds is within the other Rectangle's bounds. As such, the two Rectangles are considered "solid". A Rectangle with no width or no height will never intersect another Rectangle.
 *
 * @function Phaser.Geom.Intersects.GetRectangleToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to check for intersection.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetRectangleToRectangle = function (rectA, rectB, out) {
  if (out === undefined) {
    out = [];
  }

  if (RectangleToRectangle(rectA, rectB)) {
    var lineA = rectA.getLineA();
    var lineB = rectA.getLineB();
    var lineC = rectA.getLineC();
    var lineD = rectA.getLineD();
    GetLineToRectangle(lineA, rectB, out);
    GetLineToRectangle(lineB, rectB, out);
    GetLineToRectangle(lineC, rectB, out);
    GetLineToRectangle(lineD, rectB, out);
  }

  return out;
};

module.exports = GetRectangleToRectangle;

/***/ }),

/***/ 9042:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var RectangleToTriangle = __webpack_require__(8909);

var GetLineToRectangle = __webpack_require__(5377);
/**
 * Checks for intersection between Rectangle shape and Triangle shape,
 * and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetRectangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - Rectangle object to test.
 * @param {Phaser.Geom.Triangle} triangle - Triangle object to test.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetRectangleToTriangle = function (rect, triangle, out) {
  if (out === undefined) {
    out = [];
  }

  if (RectangleToTriangle(rect, triangle)) {
    var lineA = triangle.getLineA();
    var lineB = triangle.getLineB();
    var lineC = triangle.getLineC();
    GetLineToRectangle(lineA, rect, out);
    GetLineToRectangle(lineB, rect, out);
    GetLineToRectangle(lineC, rect, out);
  }

  return out;
};

module.exports = GetRectangleToTriangle;

/***/ }),

/***/ 5725:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetLineToCircle = __webpack_require__(1346);

var TriangleToCircle = __webpack_require__(7742);
/**
 * Checks if a Triangle and a Circle intersect, and returns the intersection points as a Point object array.
 *
 * A Circle intersects a Triangle if its center is located within it or if any of the Triangle's sides intersect the Circle. As such, the Triangle and the Circle are considered "solid" for the intersection.
 *
 * @function Phaser.Geom.Intersects.GetTriangleToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check for intersection.
 * @param {Phaser.Geom.Circle} circle - The Circle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetTriangleToCircle = function (triangle, circle, out) {
  if (out === undefined) {
    out = [];
  }

  if (TriangleToCircle(triangle, circle)) {
    var lineA = triangle.getLineA();
    var lineB = triangle.getLineB();
    var lineC = triangle.getLineC();
    GetLineToCircle(lineA, circle, out);
    GetLineToCircle(lineB, circle, out);
    GetLineToCircle(lineC, circle, out);
  }

  return out;
};

module.exports = GetTriangleToCircle;

/***/ }),

/***/ 8841:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var TriangleToLine = __webpack_require__(2682);

var LineToLine = __webpack_require__(2670);
/**
 * Checks if a Triangle and a Line intersect, and returns the intersection points as a Point object array.
 *
 * The Line intersects the Triangle if it starts inside of it, ends inside of it, or crosses any of the Triangle's sides. Thus, the Triangle is considered "solid".
 *
 * @function Phaser.Geom.Intersects.GetTriangleToLine
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check with.
 * @param {Phaser.Geom.Line} line - The Line to check with.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetTriangleToLine = function (triangle, line, out) {
  if (out === undefined) {
    out = [];
  }

  if (TriangleToLine(triangle, line)) {
    var lineA = triangle.getLineA();
    var lineB = triangle.getLineB();
    var lineC = triangle.getLineC();
    var output = [new Point(), new Point(), new Point()];
    var result = [LineToLine(lineA, line, output[0]), LineToLine(lineB, line, output[1]), LineToLine(lineC, line, output[2])];

    for (var i = 0; i < 3; i++) {
      if (result[i]) {
        out.push(output[i]);
      }
    }
  }

  return out;
};

module.exports = GetTriangleToLine;

/***/ }),

/***/ 2200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var TriangleToTriangle = __webpack_require__(4806);

var GetTriangleToLine = __webpack_require__(8841);
/**
 * Checks if two Triangles intersect, and returns the intersection points as a Point object array.
 *
 * A Triangle intersects another Triangle if any pair of their lines intersects or if any point of one Triangle is within the other Triangle. Thus, the Triangles are considered "solid".
 *
 * @function Phaser.Geom.Intersects.GetTriangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangleA - The first Triangle to check for intersection.
 * @param {Phaser.Geom.Triangle} triangleB - The second Triangle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */


var GetTriangleToTriangle = function (triangleA, triangleB, out) {
  if (out === undefined) {
    out = [];
  }

  if (TriangleToTriangle(triangleA, triangleB)) {
    var lineA = triangleB.getLineA();
    var lineB = triangleB.getLineB();
    var lineC = triangleB.getLineC();
    GetTriangleToLine(triangleA, lineA, out);
    GetTriangleToLine(triangleA, lineB, out);
    GetTriangleToLine(triangleA, lineC, out);
  }

  return out;
};

module.exports = GetTriangleToTriangle;

/***/ }),

/***/ 1242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(7049);

var Point = __webpack_require__(9106);

var tmp = new Point();
/**
 * Checks for intersection between the line segment and circle.
 *
 * Based on code by [Matt DesLauriers](https://github.com/mattdesl/line-circle-collision/blob/master/LICENSE.md).
 *
 * @function Phaser.Geom.Intersects.LineToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line segment to check.
 * @param {Phaser.Geom.Circle} circle - The circle to check against the line.
 * @param {(Phaser.Geom.Point|any)} [nearest] - An optional Point-like object. If given the closest point on the Line where the circle intersects will be stored in this object.
 *
 * @return {boolean} `true` if the two objects intersect, otherwise `false`.
 */

var LineToCircle = function (line, circle, nearest) {
  if (nearest === undefined) {
    nearest = tmp;
  }

  if (Contains(circle, line.x1, line.y1)) {
    nearest.x = line.x1;
    nearest.y = line.y1;
    return true;
  }

  if (Contains(circle, line.x2, line.y2)) {
    nearest.x = line.x2;
    nearest.y = line.y2;
    return true;
  }

  var dx = line.x2 - line.x1;
  var dy = line.y2 - line.y1;
  var lcx = circle.x - line.x1;
  var lcy = circle.y - line.y1; //  project lc onto d, resulting in vector p

  var dLen2 = dx * dx + dy * dy;
  var px = dx;
  var py = dy;

  if (dLen2 > 0) {
    var dp = (lcx * dx + lcy * dy) / dLen2;
    px *= dp;
    py *= dp;
  }

  nearest.x = line.x1 + px;
  nearest.y = line.y1 + py; //  len2 of p

  var pLen2 = px * px + py * py;
  return pLen2 <= dLen2 && px * dx + py * dy >= 0 && Contains(circle, nearest.x, nearest.y);
};

module.exports = LineToCircle;

/***/ }),

/***/ 2670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106); //  This is based off an explanation and expanded math presented by Paul Bourke:
//  See http:'local.wasp.uwa.edu.au/~pbourke/geometry/lineline2d/

/**
 * Checks if two Lines intersect. If the Lines are identical, they will be treated as parallel and thus non-intersecting.
 *
 * @function Phaser.Geom.Intersects.LineToLine
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line1 - The first Line to check.
 * @param {Phaser.Geom.Line} line2 - The second Line to check.
 * @param {Phaser.Geom.Point} [out] - A Point in which to optionally store the point of intersection.
 *
 * @return {boolean} `true` if the two Lines intersect, and the `out` object will be populated, if given. Otherwise, `false`.
 */


var LineToLine = function (line1, line2, out) {
  if (out === undefined) {
    out = new Point();
  }

  var x1 = line1.x1;
  var y1 = line1.y1;
  var x2 = line1.x2;
  var y2 = line1.y2;
  var x3 = line2.x1;
  var y3 = line2.y1;
  var x4 = line2.x2;
  var y4 = line2.y2;
  var numA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
  var numB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
  var deNom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1); //  Make sure there is not a division by zero - this also indicates that the lines are parallel.
  //  If numA and numB were both equal to zero the lines would be on top of each other (coincidental).
  //  This check is not done because it is not necessary for this implementation (the parallel check accounts for this).

  if (deNom === 0) {
    return false;
  } //  Calculate the intermediate fractional point that the lines potentially intersect.


  var uA = numA / deNom;
  var uB = numB / deNom; //  The fractional point will be between 0 and 1 inclusive if the lines intersect.
  //  If the fractional calculation is larger than 1 or smaller than 0 the lines would need to be longer to intersect.

  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    out.x = x1 + uA * (x2 - x1);
    out.y = y1 + uA * (y2 - y1);
    return true;
  }

  return false;
};

module.exports = LineToLine;

/***/ }),

/***/ 2181:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks for intersection between the Line and a Rectangle shape, or a rectangle-like
 * object, with public `x`, `y`, `right` and `bottom` properties, such as a Sprite or Body.
 *
 * An intersection is considered valid if:
 *
 * The line starts within, or ends within, the Rectangle.
 * The line segment intersects one of the 4 rectangle edges.
 *
 * The for the purposes of this function rectangles are considered 'solid'.
 *
 * @function Phaser.Geom.Intersects.LineToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The Line to check for intersection.
 * @param {(Phaser.Geom.Rectangle|object)} rect - The Rectangle to check for intersection.
 *
 * @return {boolean} `true` if the Line and the Rectangle intersect, `false` otherwise.
 */
var LineToRectangle = function (line, rect) {
  var x1 = line.x1;
  var y1 = line.y1;
  var x2 = line.x2;
  var y2 = line.y2;
  var bx1 = rect.x;
  var by1 = rect.y;
  var bx2 = rect.right;
  var by2 = rect.bottom;
  var t = 0; //  If the start or end of the line is inside the rect then we assume
  //  collision, as rects are solid for our use-case.

  if (x1 >= bx1 && x1 <= bx2 && y1 >= by1 && y1 <= by2 || x2 >= bx1 && x2 <= bx2 && y2 >= by1 && y2 <= by2) {
    return true;
  }

  if (x1 < bx1 && x2 >= bx1) {
    //  Left edge
    t = y1 + (y2 - y1) * (bx1 - x1) / (x2 - x1);

    if (t > by1 && t <= by2) {
      return true;
    }
  } else if (x1 > bx2 && x2 <= bx2) {
    //  Right edge
    t = y1 + (y2 - y1) * (bx2 - x1) / (x2 - x1);

    if (t >= by1 && t <= by2) {
      return true;
    }
  }

  if (y1 < by1 && y2 >= by1) {
    //  Top edge
    t = x1 + (x2 - x1) * (by1 - y1) / (y2 - y1);

    if (t >= bx1 && t <= bx2) {
      return true;
    }
  } else if (y1 > by2 && y2 <= by2) {
    //  Bottom edge
    t = x1 + (x2 - x1) * (by2 - y1) / (y2 - y1);

    if (t >= bx1 && t <= bx2) {
      return true;
    }
  }

  return false;
};

module.exports = LineToRectangle;

/***/ }),

/***/ 985:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if the a Point falls between the two end-points of a Line, based on the given line thickness.
 * 
 * Assumes that the line end points are circular, not square.
 *
 * @function Phaser.Geom.Intersects.PointToLine
 * @since 3.0.0
 *
 * @param {(Phaser.Geom.Point|any)} point - The point, or point-like object to check.
 * @param {Phaser.Geom.Line} line - The line segment to test for intersection on.
 * @param {number} [lineThickness=1] - The line thickness. Assumes that the line end points are circular.
 *
 * @return {boolean} `true` if the Point falls on the Line, otherwise `false`.
 */
var PointToLine = function (point, line, lineThickness) {
  if (lineThickness === undefined) {
    lineThickness = 1;
  }

  var x1 = line.x1;
  var y1 = line.y1;
  var x2 = line.x2;
  var y2 = line.y2;
  var px = point.x;
  var py = point.y;
  var L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

  if (L2 === 0) {
    return false;
  }

  var r = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / L2; //  Assume line thickness is circular

  if (r < 0) {
    //  Outside line1
    return Math.sqrt((x1 - px) * (x1 - px) + (y1 - py) * (y1 - py)) <= lineThickness;
  } else if (r >= 0 && r <= 1) {
    //  On the line segment
    var s = ((y1 - py) * (x2 - x1) - (x1 - px) * (y2 - y1)) / L2;
    return Math.abs(s) * Math.sqrt(L2) <= lineThickness;
  } else {
    //  Outside line2
    return Math.sqrt((x2 - px) * (x2 - px) + (y2 - py) * (y2 - py)) <= lineThickness;
  }
};

module.exports = PointToLine;

/***/ }),

/***/ 1134:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var PointToLine = __webpack_require__(985);
/**
 * Checks if a Point is located on the given line segment.
 *
 * @function Phaser.Geom.Intersects.PointToLineSegment
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Point} point - The Point to check for intersection.
 * @param {Phaser.Geom.Line} line - The line segment to check for intersection.
 *
 * @return {boolean} `true` if the Point is on the given line segment, otherwise `false`.
 */


var PointToLineSegment = function (point, line) {
  if (!PointToLine(point, line)) {
    return false;
  }

  var xMin = Math.min(line.x1, line.x2);
  var xMax = Math.max(line.x1, line.x2);
  var yMin = Math.min(line.y1, line.y2);
  var yMax = Math.max(line.y1, line.y2);
  return point.x >= xMin && point.x <= xMax && point.y >= yMin && point.y <= yMax;
};

module.exports = PointToLineSegment;

/***/ }),

/***/ 1756:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if two Rectangles intersect.
 *
 * A Rectangle intersects another Rectangle if any part of its bounds is within the other Rectangle's bounds.
 * As such, the two Rectangles are considered "solid".
 * A Rectangle with no width or no height will never intersect another Rectangle.
 *
 * @function Phaser.Geom.Intersects.RectangleToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to check for intersection.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to check for intersection.
 *
 * @return {boolean} `true` if the two Rectangles intersect, otherwise `false`.
 */
var RectangleToRectangle = function (rectA, rectB) {
  if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0) {
    return false;
  }

  return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
};

module.exports = RectangleToRectangle;

/***/ }),

/***/ 8909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var LineToLine = __webpack_require__(2670);

var Contains = __webpack_require__(1305);

var ContainsArray = __webpack_require__(4112);

var Decompose = __webpack_require__(9917);
/**
 * Checks for intersection between Rectangle shape and Triangle shape.
 *
 * @function Phaser.Geom.Intersects.RectangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - Rectangle object to test.
 * @param {Phaser.Geom.Triangle} triangle - Triangle object to test.
 *
 * @return {boolean} A value of `true` if objects intersect; otherwise `false`.
 */


var RectangleToTriangle = function (rect, triangle) {
  //  First the cheapest ones:
  if (triangle.left > rect.right || triangle.right < rect.left || triangle.top > rect.bottom || triangle.bottom < rect.top) {
    return false;
  }

  var triA = triangle.getLineA();
  var triB = triangle.getLineB();
  var triC = triangle.getLineC(); //  Are any of the triangle points within the rectangle?

  if (Contains(rect, triA.x1, triA.y1) || Contains(rect, triA.x2, triA.y2)) {
    return true;
  }

  if (Contains(rect, triB.x1, triB.y1) || Contains(rect, triB.x2, triB.y2)) {
    return true;
  }

  if (Contains(rect, triC.x1, triC.y1) || Contains(rect, triC.x2, triC.y2)) {
    return true;
  } //  Cheap tests over, now to see if any of the lines intersect ...


  var rectA = rect.getLineA();
  var rectB = rect.getLineB();
  var rectC = rect.getLineC();
  var rectD = rect.getLineD();

  if (LineToLine(triA, rectA) || LineToLine(triA, rectB) || LineToLine(triA, rectC) || LineToLine(triA, rectD)) {
    return true;
  }

  if (LineToLine(triB, rectA) || LineToLine(triB, rectB) || LineToLine(triB, rectC) || LineToLine(triB, rectD)) {
    return true;
  }

  if (LineToLine(triC, rectA) || LineToLine(triC, rectB) || LineToLine(triC, rectC) || LineToLine(triC, rectD)) {
    return true;
  } //  None of the lines intersect, so are any rectangle points within the triangle?


  var points = Decompose(rect);
  var within = ContainsArray(triangle, points, true);
  return within.length > 0;
};

module.exports = RectangleToTriangle;

/***/ }),

/***/ 540:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check if rectangle intersects with values.
 *
 * @function Phaser.Geom.Intersects.RectangleToValues
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle object
 * @param {number} left - The x coordinate of the left of the Rectangle.
 * @param {number} right - The x coordinate of the right of the Rectangle.
 * @param {number} top - The y coordinate of the top of the Rectangle.
 * @param {number} bottom - The y coordinate of the bottom of the Rectangle.
 * @param {number} [tolerance=0] - Tolerance allowed in the calculation, expressed in pixels.
 *
 * @return {boolean} Returns true if there is an intersection.
 */
var RectangleToValues = function (rect, left, right, top, bottom, tolerance) {
  if (tolerance === undefined) {
    tolerance = 0;
  }

  return !(left > rect.right + tolerance || right < rect.left - tolerance || top > rect.bottom + tolerance || bottom < rect.top - tolerance);
};

module.exports = RectangleToValues;

/***/ }),

/***/ 7742:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var LineToCircle = __webpack_require__(1242);

var Contains = __webpack_require__(9503);
/**
 * Checks if a Triangle and a Circle intersect.
 *
 * A Circle intersects a Triangle if its center is located within it or if any of the Triangle's sides intersect the Circle. As such, the Triangle and the Circle are considered "solid" for the intersection.
 *
 * @function Phaser.Geom.Intersects.TriangleToCircle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check for intersection.
 * @param {Phaser.Geom.Circle} circle - The Circle to check for intersection.
 *
 * @return {boolean} `true` if the Triangle and the `Circle` intersect, otherwise `false`.
 */


var TriangleToCircle = function (triangle, circle) {
  //  First the cheapest ones:
  if (triangle.left > circle.right || triangle.right < circle.left || triangle.top > circle.bottom || triangle.bottom < circle.top) {
    return false;
  }

  if (Contains(triangle, circle.x, circle.y)) {
    return true;
  }

  if (LineToCircle(triangle.getLineA(), circle)) {
    return true;
  }

  if (LineToCircle(triangle.getLineB(), circle)) {
    return true;
  }

  if (LineToCircle(triangle.getLineC(), circle)) {
    return true;
  }

  return false;
};

module.exports = TriangleToCircle;

/***/ }),

/***/ 2682:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var LineToLine = __webpack_require__(2670);
/**
 * Checks if a Triangle and a Line intersect.
 *
 * The Line intersects the Triangle if it starts inside of it, ends inside of it, or crosses any of the Triangle's sides. Thus, the Triangle is considered "solid".
 *
 * @function Phaser.Geom.Intersects.TriangleToLine
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check with.
 * @param {Phaser.Geom.Line} line - The Line to check with.
 *
 * @return {boolean} `true` if the Triangle and the Line intersect, otherwise `false`.
 */


var TriangleToLine = function (triangle, line) {
  //  If the Triangle contains either the start or end point of the line, it intersects
  if (triangle.contains(line.x1, line.y1) || triangle.contains(line.x2, line.y2)) {
    return true;
  } //  Now check the line against each line of the Triangle


  if (LineToLine(triangle.getLineA(), line)) {
    return true;
  }

  if (LineToLine(triangle.getLineB(), line)) {
    return true;
  }

  if (LineToLine(triangle.getLineC(), line)) {
    return true;
  }

  return false;
};

module.exports = TriangleToLine;

/***/ }),

/***/ 4806:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var ContainsArray = __webpack_require__(4112);

var Decompose = __webpack_require__(3984);

var LineToLine = __webpack_require__(2670);
/**
 * Checks if two Triangles intersect.
 *
 * A Triangle intersects another Triangle if any pair of their lines intersects or if any point of one Triangle is within the other Triangle. Thus, the Triangles are considered "solid".
 *
 * @function Phaser.Geom.Intersects.TriangleToTriangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangleA - The first Triangle to check for intersection.
 * @param {Phaser.Geom.Triangle} triangleB - The second Triangle to check for intersection.
 *
 * @return {boolean} `true` if the Triangles intersect, otherwise `false`.
 */


var TriangleToTriangle = function (triangleA, triangleB) {
  //  First the cheapest ones:
  if (triangleA.left > triangleB.right || triangleA.right < triangleB.left || triangleA.top > triangleB.bottom || triangleA.bottom < triangleB.top) {
    return false;
  }

  var lineAA = triangleA.getLineA();
  var lineAB = triangleA.getLineB();
  var lineAC = triangleA.getLineC();
  var lineBA = triangleB.getLineA();
  var lineBB = triangleB.getLineB();
  var lineBC = triangleB.getLineC(); //  Now check the lines against each line of TriangleB

  if (LineToLine(lineAA, lineBA) || LineToLine(lineAA, lineBB) || LineToLine(lineAA, lineBC)) {
    return true;
  }

  if (LineToLine(lineAB, lineBA) || LineToLine(lineAB, lineBB) || LineToLine(lineAB, lineBC)) {
    return true;
  }

  if (LineToLine(lineAC, lineBA) || LineToLine(lineAC, lineBB) || LineToLine(lineAC, lineBC)) {
    return true;
  } //  Nope, so check to see if any of the points of triangleA are within triangleB


  var points = Decompose(triangleA);
  var within = ContainsArray(triangleB, points, true);

  if (within.length > 0) {
    return true;
  } //  Finally check to see if any of the points of triangleB are within triangleA


  points = Decompose(triangleB);
  within = ContainsArray(triangleA, points, true);

  if (within.length > 0) {
    return true;
  }

  return false;
};

module.exports = TriangleToTriangle;

/***/ }),

/***/ 6329:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Geom.Intersects
 */
module.exports = {
  CircleToCircle: __webpack_require__(3278),
  CircleToRectangle: __webpack_require__(8779),
  GetCircleToCircle: __webpack_require__(1819),
  GetCircleToRectangle: __webpack_require__(3786),
  GetLineToCircle: __webpack_require__(1346),
  GetLineToLine: __webpack_require__(2013),
  GetLineToPoints: __webpack_require__(5419),
  GetLineToPolygon: __webpack_require__(8202),
  GetLineToRectangle: __webpack_require__(5377),
  GetRaysFromPointToPolygon: __webpack_require__(6550),
  GetRectangleIntersection: __webpack_require__(8422),
  GetRectangleToRectangle: __webpack_require__(5425),
  GetRectangleToTriangle: __webpack_require__(9042),
  GetTriangleToCircle: __webpack_require__(5725),
  GetTriangleToLine: __webpack_require__(8841),
  GetTriangleToTriangle: __webpack_require__(2200),
  LineToCircle: __webpack_require__(1242),
  LineToLine: __webpack_require__(2670),
  LineToRectangle: __webpack_require__(2181),
  PointToLine: __webpack_require__(985),
  PointToLineSegment: __webpack_require__(1134),
  RectangleToRectangle: __webpack_require__(1756),
  RectangleToTriangle: __webpack_require__(8909),
  RectangleToValues: __webpack_require__(540),
  TriangleToCircle: __webpack_require__(7742),
  TriangleToLine: __webpack_require__(2682),
  TriangleToTriangle: __webpack_require__(4806)
};

/***/ }),

/***/ 7518:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the angle of the line in radians.
 *
 * @function Phaser.Geom.Line.Angle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the angle of.
 *
 * @return {number} The angle of the line, in radians.
 */
var Angle = function (line) {
  return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
};

module.exports = Angle;

/***/ }),

/***/ 5022:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Using Bresenham's line algorithm this will return an array of all coordinates on this line.
 *
 * The `start` and `end` points are rounded before this runs as the algorithm works on integers.
 *
 * @function Phaser.Geom.Line.BresenhamPoints
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line.
 * @param {number} [stepRate=1] - The optional step rate for the points on the line.
 * @param {Phaser.Types.Math.Vector2Like[]} [results] - An optional array to push the resulting coordinates into.
 *
 * @return {Phaser.Types.Math.Vector2Like[]} The array of coordinates on the line.
 */
var BresenhamPoints = function (line, stepRate, results) {
  if (stepRate === undefined) {
    stepRate = 1;
  }

  if (results === undefined) {
    results = [];
  }

  var x1 = Math.round(line.x1);
  var y1 = Math.round(line.y1);
  var x2 = Math.round(line.x2);
  var y2 = Math.round(line.y2);
  var dx = Math.abs(x2 - x1);
  var dy = Math.abs(y2 - y1);
  var sx = x1 < x2 ? 1 : -1;
  var sy = y1 < y2 ? 1 : -1;
  var err = dx - dy;
  results.push({
    x: x1,
    y: y1
  });
  var i = 1;

  while (!(x1 === x2 && y1 === y2)) {
    var e2 = err << 1;

    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }

    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }

    if (i % stepRate === 0) {
      results.push({
        x: x1,
        y: y1
      });
    }

    i++;
  }

  return results;
};

module.exports = BresenhamPoints;

/***/ }),

/***/ 5638:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Center a line on the given coordinates.
 *
 * @function Phaser.Geom.Line.CenterOn
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to center.
 * @param {number} x - The horizontal coordinate to center the line on.
 * @param {number} y - The vertical coordinate to center the line on.
 *
 * @return {Phaser.Geom.Line} The centered line.
 */
var CenterOn = function (line, x, y) {
  var tx = x - (line.x1 + line.x2) / 2;
  var ty = y - (line.y1 + line.y2) / 2;
  line.x1 += tx;
  line.y1 += ty;
  line.x2 += tx;
  line.y2 += ty;
  return line;
};

module.exports = CenterOn;

/***/ }),

/***/ 9754:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Line = __webpack_require__(9778);
/**
 * Clone the given line.
 *
 * @function Phaser.Geom.Line.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} source - The source line to clone.
 *
 * @return {Phaser.Geom.Line} The cloned line.
 */


var Clone = function (source) {
  return new Line(source.x1, source.y1, source.x2, source.y2);
};

module.exports = Clone;

/***/ }),

/***/ 7682:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one line to a destination line.
 *
 * @function Phaser.Geom.Line.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Line} O - [dest,$return]
 *
 * @param {Phaser.Geom.Line} source - The source line to copy the values from.
 * @param {Phaser.Geom.Line} dest - The destination line to copy the values to.
 *
 * @return {Phaser.Geom.Line} The destination line.
 */
var CopyFrom = function (source, dest) {
  return dest.setTo(source.x1, source.y1, source.x2, source.y2);
};

module.exports = CopyFrom;

/***/ }),

/***/ 9841:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compare two lines for strict equality.
 *
 * @function Phaser.Geom.Line.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The first line to compare.
 * @param {Phaser.Geom.Line} toCompare - The second line to compare.
 *
 * @return {boolean} Whether the two lines are equal.
 */
var Equals = function (line, toCompare) {
  return line.x1 === toCompare.x1 && line.y1 === toCompare.y1 && line.x2 === toCompare.x2 && line.y2 === toCompare.y2;
};

module.exports = Equals;

/***/ }),

/***/ 6988:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Length = __webpack_require__(6753);
/**
 * Extends the start and end points of a Line by the given amounts.
 *
 * The amounts can be positive or negative. Positive points will increase the length of the line,
 * while negative ones will decrease it.
 *
 * If no `right` value is provided it will extend the length of the line equally in both directions.
 *
 * Pass a value of zero to leave the start or end point unchanged.
 *
 * @function Phaser.Geom.Line.Extend
 * @since 3.16.0
 *
 * @param {Phaser.Geom.Line} line - The line instance to extend.
 * @param {number} left - The amount to extend the start of the line by.
 * @param {number} [right] - The amount to extend the end of the line by. If not given it will be set to the `left` value.
 *
 * @return {Phaser.Geom.Line} The modified Line instance.
 */


var Extend = function (line, left, right) {
  if (right === undefined) {
    right = left;
  }

  var length = Length(line);
  var slopX = line.x2 - line.x1;
  var slopY = line.y2 - line.y1;

  if (left) {
    line.x1 = line.x1 - slopX / length * left;
    line.y1 = line.y1 - slopY / length * left;
  }

  if (right) {
    line.x2 = line.x2 + slopX / length * right;
    line.y2 = line.y2 + slopY / length * right;
  }

  return line;
};

module.exports = Extend;

/***/ }),

/***/ 9552:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var DistanceBetweenPoints = __webpack_require__(5091);

var GetEaseFunction = __webpack_require__(2124);

var Point = __webpack_require__(9106);
/**
 * Returns an array of `quantity` Points where each point is taken from the given Line,
 * spaced out according to the ease function specified.
 * 
 * ```javascript
 * const line = new Phaser.Geom.Line(100, 300, 700, 300);
 * const points = Phaser.Geom.Line.GetEasedPoints(line, 'sine.out', 32)
 * ```
 * 
 * In the above example, the `points` array will contain 32 points spread-out across
 * the length of `line`, where the position of each point is determined by the `Sine.out`
 * ease function.
 * 
 * You can optionally provide a collinear threshold. In this case, the resulting points
 * are checked against each other, and if they are `< collinearThreshold` distance apart,
 * they are dropped from the results. This can help avoid lots of clustered points at
 * far ends of the line with tightly-packed eases such as Quartic. Leave the value set
 * to zero to skip this check.
 * 
 * Note that if you provide a collinear threshold, the resulting array may not always
 * contain `quantity` points.
 *
 * @function Phaser.Geom.Line.GetEasedPoints
 * @since 3.23.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The Line object.
 * @param {(string|function)} ease - The ease to use. This can be either a string from the EaseMap, or a custom function.
 * @param {number} quantity - The number of points to return. Note that if you provide a `collinearThreshold`, the resulting array may not always contain this number of points.
 * @param {number} [collinearThreshold=0] - An optional threshold. The final array is reduced so that each point is spaced out at least this distance apart. This helps reduce clustering in noisey eases.
 * @param {number[]} [easeParams] - An optional array of ease parameters to go with the ease.
 *
 * @return {Phaser.Geom.Point[]} An array of Geom.Points containing the coordinates of the points on the line.
 */


var GetEasedPoints = function (line, ease, quantity, collinearThreshold, easeParams) {
  if (collinearThreshold === undefined) {
    collinearThreshold = 0;
  }

  if (easeParams === undefined) {
    easeParams = [];
  }

  var results = [];
  var x1 = line.x1;
  var y1 = line.y1;
  var spaceX = line.x2 - x1;
  var spaceY = line.y2 - y1;
  var easeFunc = GetEaseFunction(ease, easeParams);
  var i;
  var v;
  var q = quantity - 1;

  for (i = 0; i < q; i++) {
    v = easeFunc(i / q);
    results.push(new Point(x1 + spaceX * v, y1 + spaceY * v));
  } //  Always include the end of the line


  v = easeFunc(1);
  results.push(new Point(x1 + spaceX * v, y1 + spaceY * v)); //  Remove collinear parts

  if (collinearThreshold > 0) {
    var prevPoint = results[0]; //  Store the new results here

    var sortedResults = [prevPoint];

    for (i = 1; i < results.length - 1; i++) {
      var point = results[i];

      if (DistanceBetweenPoints(prevPoint, point) >= collinearThreshold) {
        sortedResults.push(point);
        prevPoint = point;
      }
    } //  Top and tail


    var endPoint = results[results.length - 1];

    if (DistanceBetweenPoints(prevPoint, endPoint) < collinearThreshold) {
      sortedResults.pop();
    }

    sortedResults.push(endPoint);
    return sortedResults;
  } else {
    return results;
  }
};

module.exports = GetEasedPoints;

/***/ }),

/***/ 4874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Get the midpoint of the given line.
 *
 * @function Phaser.Geom.Line.GetMidPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the midpoint of.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point object to store the midpoint in.
 *
 * @return {(Phaser.Geom.Point|object)} The midpoint of the Line.
 */


var GetMidPoint = function (line, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = (line.x1 + line.x2) / 2;
  out.y = (line.y1 + line.y2) / 2;
  return out;
};

module.exports = GetMidPoint;

/***/ }),

/***/ 8533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Get the nearest point on a line perpendicular to the given point.
 *
 * @function Phaser.Geom.Line.GetNearestPoint
 * @since 3.16.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the nearest point on.
 * @param {(Phaser.Geom.Point|object)} point - The point to get the nearest point to.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point, or point-like object, to store the coordinates of the nearest point on the line.
 *
 * @return {(Phaser.Geom.Point|object)} The nearest point on the line.
 */


var GetNearestPoint = function (line, point, out) {
  if (out === undefined) {
    out = new Point();
  }

  var x1 = line.x1;
  var y1 = line.y1;
  var x2 = line.x2;
  var y2 = line.y2;
  var L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

  if (L2 === 0) {
    return out;
  }

  var r = ((point.x - x1) * (x2 - x1) + (point.y - y1) * (y2 - y1)) / L2;
  out.x = x1 + r * (x2 - x1);
  out.y = y1 + r * (y2 - y1);
  return out;
};

module.exports = GetNearestPoint;

/***/ }),

/***/ 1554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MATH_CONST = __webpack_require__(611);

var Angle = __webpack_require__(7518);

var Point = __webpack_require__(9106);
/**
 * Calculate the normal of the given line.
 *
 * The normal of a line is a vector that points perpendicular from it.
 *
 * @function Phaser.Geom.Line.GetNormal
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the normal of.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point object to store the normal in.
 *
 * @return {(Phaser.Geom.Point|object)} The normal of the Line.
 */


var GetNormal = function (line, out) {
  if (out === undefined) {
    out = new Point();
  }

  var a = Angle(line) - MATH_CONST.TAU;
  out.x = Math.cos(a);
  out.y = Math.sin(a);
  return out;
};

module.exports = GetNormal;

/***/ }),

/***/ 8874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Get a point on a line that's a given percentage along its length.
 *
 * @function Phaser.Geom.Line.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line.
 * @param {number} position - A value between 0 and 1, where 0 is the start, 0.5 is the middle and 1 is the end of the line.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point, or point-like object, to store the coordinates of the point on the line.
 *
 * @return {(Phaser.Geom.Point|object)} The point on the line.
 */


var GetPoint = function (line, position, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = line.x1 + (line.x2 - line.x1) * position;
  out.y = line.y1 + (line.y2 - line.y1) * position;
  return out;
};

module.exports = GetPoint;

/***/ }),

/***/ 4605:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Length = __webpack_require__(6753);

var Point = __webpack_require__(9106);
/**
 * Get a number of points along a line's length.
 *
 * Provide a `quantity` to get an exact number of points along the line.
 *
 * Provide a `stepRate` to ensure a specific distance between each point on the line. Set `quantity` to `0` when
 * providing a `stepRate`.
 *
 * @function Phaser.Geom.Line.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line.
 * @param {number} quantity - The number of points to place on the line. Set to `0` to use `stepRate` instead.
 * @param {number} [stepRate] - The distance between each point on the line. When set, `quantity` is implied and should be set to `0`.
 * @param {(array|Phaser.Geom.Point[])} [out] - An optional array of Points, or point-like objects, to store the coordinates of the points on the line.
 *
 * @return {(array|Phaser.Geom.Point[])} An array of Points, or point-like objects, containing the coordinates of the points on the line.
 */


var GetPoints = function (line, quantity, stepRate, out) {
  if (out === undefined) {
    out = [];
  } //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.


  if (!quantity && stepRate > 0) {
    quantity = Length(line) / stepRate;
  }

  var x1 = line.x1;
  var y1 = line.y1;
  var x2 = line.x2;
  var y2 = line.y2;

  for (var i = 0; i < quantity; i++) {
    var position = i / quantity;
    var x = x1 + (x2 - x1) * position;
    var y = y1 + (y2 - y1) * position;
    out.push(new Point(x, y));
  }

  return out;
};

module.exports = GetPoints;

/***/ }),

/***/ 5082:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Get the shortest distance from a Line to the given Point.
 *
 * @function Phaser.Geom.Line.GetShortestDistance
 * @since 3.16.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the distance from.
 * @param {(Phaser.Geom.Point|object)} point - The point to get the shortest distance to.
 *
 * @return {number} The shortest distance from the line to the point.
 */
var GetShortestDistance = function (line, point) {
  var x1 = line.x1;
  var y1 = line.y1;
  var x2 = line.x2;
  var y2 = line.y2;
  var L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

  if (L2 === 0) {
    return false;
  }

  var s = ((y1 - point.y) * (x2 - x1) - (x1 - point.x) * (y2 - y1)) / L2;
  return Math.abs(s) * Math.sqrt(L2);
};

module.exports = GetShortestDistance;

/***/ }),

/***/ 3971:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the height of the given line.
 *
 * @function Phaser.Geom.Line.Height
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the height of.
 *
 * @return {number} The height of the line.
 */
var Height = function (line) {
  return Math.abs(line.y1 - line.y2);
};

module.exports = Height;

/***/ }),

/***/ 6753:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the length of the given line.
 *
 * @function Phaser.Geom.Line.Length
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the length of.
 *
 * @return {number} The length of the line.
 */
var Length = function (line) {
  return Math.sqrt((line.x2 - line.x1) * (line.x2 - line.x1) + (line.y2 - line.y1) * (line.y2 - line.y1));
};

module.exports = Length;

/***/ }),

/***/ 9778:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var GetPoint = __webpack_require__(8874);

var GetPoints = __webpack_require__(4605);

var GEOM_CONST = __webpack_require__(9277);

var Random = __webpack_require__(5715);

var Vector2 = __webpack_require__(9182);
/**
 * @classdesc
 * Defines a Line segment, a part of a line between two endpoints.
 *
 * @class Line
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x1=0] - The x coordinate of the lines starting point.
 * @param {number} [y1=0] - The y coordinate of the lines starting point.
 * @param {number} [x2=0] - The x coordinate of the lines ending point.
 * @param {number} [y2=0] - The y coordinate of the lines ending point.
 */


var Line = new Class({
  initialize: function Line(x1, y1, x2, y2) {
    if (x1 === undefined) {
      x1 = 0;
    }

    if (y1 === undefined) {
      y1 = 0;
    }

    if (x2 === undefined) {
      x2 = 0;
    }

    if (y2 === undefined) {
      y2 = 0;
    }
    /**
     * The geometry constant type of this object: `GEOM_CONST.LINE`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Line#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */


    this.type = GEOM_CONST.LINE;
    /**
     * The x coordinate of the lines starting point.
     *
     * @name Phaser.Geom.Line#x1
     * @type {number}
     * @since 3.0.0
     */

    this.x1 = x1;
    /**
     * The y coordinate of the lines starting point.
     *
     * @name Phaser.Geom.Line#y1
     * @type {number}
     * @since 3.0.0
     */

    this.y1 = y1;
    /**
     * The x coordinate of the lines ending point.
     *
     * @name Phaser.Geom.Line#x2
     * @type {number}
     * @since 3.0.0
     */

    this.x2 = x2;
    /**
     * The y coordinate of the lines ending point.
     *
     * @name Phaser.Geom.Line#y2
     * @type {number}
     * @since 3.0.0
     */

    this.y2 = y2;
  },

  /**
   * Get a point on a line that's a given percentage along its length.
   *
   * @method Phaser.Geom.Line#getPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [output,$return]
   *
   * @param {number} position - A value between 0 and 1, where 0 is the start, 0.5 is the middle and 1 is the end of the line.
   * @param {(Phaser.Geom.Point|object)} [output] - An optional point, or point-like object, to store the coordinates of the point on the line.
   *
   * @return {(Phaser.Geom.Point|object)} A Point, or point-like object, containing the coordinates of the point on the line.
   */
  getPoint: function (position, output) {
    return GetPoint(this, position, output);
  },

  /**
   * Get a number of points along a line's length.
   *
   * Provide a `quantity` to get an exact number of points along the line.
   *
   * Provide a `stepRate` to ensure a specific distance between each point on the line. Set `quantity` to `0` when
   * providing a `stepRate`.
   *
   * @method Phaser.Geom.Line#getPoints
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point[]} O - [output,$return]
   *
   * @param {number} quantity - The number of points to place on the line. Set to `0` to use `stepRate` instead.
   * @param {number} [stepRate] - The distance between each point on the line. When set, `quantity` is implied and should be set to `0`.
   * @param {(array|Phaser.Geom.Point[])} [output] - An optional array of Points, or point-like objects, to store the coordinates of the points on the line.
   *
   * @return {(array|Phaser.Geom.Point[])} An array of Points, or point-like objects, containing the coordinates of the points on the line.
   */
  getPoints: function (quantity, stepRate, output) {
    return GetPoints(this, quantity, stepRate, output);
  },

  /**
   * Get a random Point on the Line.
   *
   * @method Phaser.Geom.Line#getRandomPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [point,$return]
   *
   * @param {(Phaser.Geom.Point|object)} [point] - An instance of a Point to be modified.
   *
   * @return {Phaser.Geom.Point} A random Point on the Line.
   */
  getRandomPoint: function (point) {
    return Random(this, point);
  },

  /**
   * Set new coordinates for the line endpoints.
   *
   * @method Phaser.Geom.Line#setTo
   * @since 3.0.0
   *
   * @param {number} [x1=0] - The x coordinate of the lines starting point.
   * @param {number} [y1=0] - The y coordinate of the lines starting point.
   * @param {number} [x2=0] - The x coordinate of the lines ending point.
   * @param {number} [y2=0] - The y coordinate of the lines ending point.
   *
   * @return {this} This Line object.
   */
  setTo: function (x1, y1, x2, y2) {
    if (x1 === undefined) {
      x1 = 0;
    }

    if (y1 === undefined) {
      y1 = 0;
    }

    if (x2 === undefined) {
      x2 = 0;
    }

    if (y2 === undefined) {
      y2 = 0;
    }

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    return this;
  },

  /**
   * Returns a Vector2 object that corresponds to the start of this Line.
   *
   * @method Phaser.Geom.Line#getPointA
   * @since 3.0.0
   *
   * @generic {Phaser.Math.Vector2} O - [vec2,$return]
   *
   * @param {Phaser.Math.Vector2} [vec2] - A Vector2 object to set the results in. If `undefined` a new Vector2 will be created.
   *
   * @return {Phaser.Math.Vector2} A Vector2 object that corresponds to the start of this Line.
   */
  getPointA: function (vec2) {
    if (vec2 === undefined) {
      vec2 = new Vector2();
    }

    vec2.set(this.x1, this.y1);
    return vec2;
  },

  /**
   * Returns a Vector2 object that corresponds to the end of this Line.
   *
   * @method Phaser.Geom.Line#getPointB
   * @since 3.0.0
   *
   * @generic {Phaser.Math.Vector2} O - [vec2,$return]
   *
   * @param {Phaser.Math.Vector2} [vec2] - A Vector2 object to set the results in. If `undefined` a new Vector2 will be created.
   *
   * @return {Phaser.Math.Vector2} A Vector2 object that corresponds to the end of this Line.
   */
  getPointB: function (vec2) {
    if (vec2 === undefined) {
      vec2 = new Vector2();
    }

    vec2.set(this.x2, this.y2);
    return vec2;
  },

  /**
   * The left position of the Line.
   *
   * @name Phaser.Geom.Line#left
   * @type {number}
   * @since 3.0.0
   */
  left: {
    get: function () {
      return Math.min(this.x1, this.x2);
    },
    set: function (value) {
      if (this.x1 <= this.x2) {
        this.x1 = value;
      } else {
        this.x2 = value;
      }
    }
  },

  /**
   * The right position of the Line.
   *
   * @name Phaser.Geom.Line#right
   * @type {number}
   * @since 3.0.0
   */
  right: {
    get: function () {
      return Math.max(this.x1, this.x2);
    },
    set: function (value) {
      if (this.x1 > this.x2) {
        this.x1 = value;
      } else {
        this.x2 = value;
      }
    }
  },

  /**
   * The top position of the Line.
   *
   * @name Phaser.Geom.Line#top
   * @type {number}
   * @since 3.0.0
   */
  top: {
    get: function () {
      return Math.min(this.y1, this.y2);
    },
    set: function (value) {
      if (this.y1 <= this.y2) {
        this.y1 = value;
      } else {
        this.y2 = value;
      }
    }
  },

  /**
   * The bottom position of the Line.
   *
   * @name Phaser.Geom.Line#bottom
   * @type {number}
   * @since 3.0.0
   */
  bottom: {
    get: function () {
      return Math.max(this.y1, this.y2);
    },
    set: function (value) {
      if (this.y1 > this.y2) {
        this.y1 = value;
      } else {
        this.y2 = value;
      }
    }
  }
});
module.exports = Line;

/***/ }),

/***/ 1557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MATH_CONST = __webpack_require__(611);

var Wrap = __webpack_require__(2923);

var Angle = __webpack_require__(7518);
/**
 * Get the angle of the normal of the given line in radians.
 *
 * @function Phaser.Geom.Line.NormalAngle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the angle of the normal of.
 *
 * @return {number} The angle of the normal of the line in radians.
 */


var NormalAngle = function (line) {
  var angle = Angle(line) - MATH_CONST.TAU;
  return Wrap(angle, -Math.PI, Math.PI);
};

module.exports = NormalAngle;

/***/ }),

/***/ 7382:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MATH_CONST = __webpack_require__(611);

var Angle = __webpack_require__(7518);
/**
 * Returns the x component of the normal vector of the given line.
 *
 * @function Phaser.Geom.Line.NormalX
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The Line object to get the normal value from.
 *
 * @return {number} The x component of the normal vector of the line.
 */


var NormalX = function (line) {
  return Math.cos(Angle(line) - MATH_CONST.TAU);
};

module.exports = NormalX;

/***/ }),

/***/ 8268:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MATH_CONST = __webpack_require__(611);

var Angle = __webpack_require__(7518);
/**
 * The Y value of the normal of the given line.
 * The normal of a line is a vector that points perpendicular from it.
 *
 * @function Phaser.Geom.Line.NormalY
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the normal of.
 *
 * @return {number} The Y value of the normal of the Line.
 */


var NormalY = function (line) {
  return Math.sin(Angle(line) - MATH_CONST.TAU);
};

module.exports = NormalY;

/***/ }),

/***/ 7509:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offset a line by the given amount.
 *
 * @function Phaser.Geom.Line.Offset
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Line} O - [line,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to offset.
 * @param {number} x - The horizontal offset to add to the line.
 * @param {number} y - The vertical offset to add to the line.
 *
 * @return {Phaser.Geom.Line} The offset line.
 */
var Offset = function (line, x, y) {
  line.x1 += x;
  line.y1 += y;
  line.x2 += x;
  line.y2 += y;
  return line;
};

module.exports = Offset;

/***/ }),

/***/ 5209:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the perpendicular slope of the given line.
 *
 * @function Phaser.Geom.Line.PerpSlope
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the perpendicular slope of.
 *
 * @return {number} The perpendicular slope of the line.
 */
var PerpSlope = function (line) {
  return -((line.x2 - line.x1) / (line.y2 - line.y1));
};

module.exports = PerpSlope;

/***/ }),

/***/ 5715:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a random point on a given Line.
 *
 * @function Phaser.Geom.Line.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The Line to calculate the random Point on.
 * @param {(Phaser.Geom.Point|object)} [out] - An instance of a Point to be modified.
 *
 * @return {(Phaser.Geom.Point|object)} A random Point on the Line.
 */


var Random = function (line, out) {
  if (out === undefined) {
    out = new Point();
  }

  var t = Math.random();
  out.x = line.x1 + t * (line.x2 - line.x1);
  out.y = line.y1 + t * (line.y2 - line.y1);
  return out;
};

module.exports = Random;

/***/ }),

/***/ 2898:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Angle = __webpack_require__(7518);

var NormalAngle = __webpack_require__(1557);
/**
 * Calculate the reflected angle between two lines.
 *
 * This is the outgoing angle based on the angle of Line 1 and the normalAngle of Line 2.
 *
 * @function Phaser.Geom.Line.ReflectAngle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} lineA - The first line.
 * @param {Phaser.Geom.Line} lineB - The second line.
 *
 * @return {number} The reflected angle between each line.
 */


var ReflectAngle = function (lineA, lineB) {
  return 2 * NormalAngle(lineB) - Math.PI - Angle(lineA);
};

module.exports = ReflectAngle;

/***/ }),

/***/ 2653:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var RotateAroundXY = __webpack_require__(1070);
/**
 * Rotate a line around its midpoint by the given angle in radians.
 *
 * @function Phaser.Geom.Line.Rotate
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Line} O - [line,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to rotate.
 * @param {number} angle - The angle of rotation in radians.
 *
 * @return {Phaser.Geom.Line} The rotated line.
 */


var Rotate = function (line, angle) {
  var x = (line.x1 + line.x2) / 2;
  var y = (line.y1 + line.y2) / 2;
  return RotateAroundXY(line, x, y, angle);
};

module.exports = Rotate;

/***/ }),

/***/ 8348:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var RotateAroundXY = __webpack_require__(1070);
/**
 * Rotate a line around a point by the given angle in radians.
 *
 * @function Phaser.Geom.Line.RotateAroundPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Line} O - [line,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to rotate.
 * @param {(Phaser.Geom.Point|object)} point - The point to rotate the line around.
 * @param {number} angle - The angle of rotation in radians.
 *
 * @return {Phaser.Geom.Line} The rotated line.
 */


var RotateAroundPoint = function (line, point, angle) {
  return RotateAroundXY(line, point.x, point.y, angle);
};

module.exports = RotateAroundPoint;

/***/ }),

/***/ 1070:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a line around the given coordinates by the given angle in radians.
 *
 * @function Phaser.Geom.Line.RotateAroundXY
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Line} O - [line,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to rotate.
 * @param {number} x - The horizontal coordinate to rotate the line around.
 * @param {number} y - The vertical coordinate to rotate the line around.
 * @param {number} angle - The angle of rotation in radians.
 *
 * @return {Phaser.Geom.Line} The rotated line.
 */
var RotateAroundXY = function (line, x, y, angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  var tx = line.x1 - x;
  var ty = line.y1 - y;
  line.x1 = tx * c - ty * s + x;
  line.y1 = tx * s + ty * c + y;
  tx = line.x2 - x;
  ty = line.y2 - y;
  line.x2 = tx * c - ty * s + x;
  line.y2 = tx * s + ty * c + y;
  return line;
};

module.exports = RotateAroundXY;

/***/ }),

/***/ 3243:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Set a line to a given position, angle and length.
 *
 * @function Phaser.Geom.Line.SetToAngle
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Line} O - [line,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to set.
 * @param {number} x - The horizontal start position of the line.
 * @param {number} y - The vertical start position of the line.
 * @param {number} angle - The angle of the line in radians.
 * @param {number} length - The length of the line.
 *
 * @return {Phaser.Geom.Line} The updated line.
 */
var SetToAngle = function (line, x, y, angle, length) {
  line.x1 = x;
  line.y1 = y;
  line.x2 = x + Math.cos(angle) * length;
  line.y2 = y + Math.sin(angle) * length;
  return line;
};

module.exports = SetToAngle;

/***/ }),

/***/ 2865:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the slope of the given line.
 *
 * @function Phaser.Geom.Line.Slope
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the slope of.
 *
 * @return {number} The slope of the line.
 */
var Slope = function (line) {
  return (line.y2 - line.y1) / (line.x2 - line.x1);
};

module.exports = Slope;

/***/ }),

/***/ 1322:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the width of the given line.
 *
 * @function Phaser.Geom.Line.Width
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the width of.
 *
 * @return {number} The width of the line.
 */
var Width = function (line) {
  return Math.abs(line.x1 - line.x2);
};

module.exports = Width;

/***/ }),

/***/ 4420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Line = __webpack_require__(9778);

Line.Angle = __webpack_require__(7518);
Line.BresenhamPoints = __webpack_require__(5022);
Line.CenterOn = __webpack_require__(5638);
Line.Clone = __webpack_require__(9754);
Line.CopyFrom = __webpack_require__(7682);
Line.Equals = __webpack_require__(9841);
Line.Extend = __webpack_require__(6988);
Line.GetEasedPoints = __webpack_require__(9552);
Line.GetMidPoint = __webpack_require__(4874);
Line.GetNearestPoint = __webpack_require__(8533);
Line.GetNormal = __webpack_require__(1554);
Line.GetPoint = __webpack_require__(8874);
Line.GetPoints = __webpack_require__(4605);
Line.GetShortestDistance = __webpack_require__(5082);
Line.Height = __webpack_require__(3971);
Line.Length = __webpack_require__(6753);
Line.NormalAngle = __webpack_require__(1557);
Line.NormalX = __webpack_require__(7382);
Line.NormalY = __webpack_require__(8268);
Line.Offset = __webpack_require__(7509);
Line.PerpSlope = __webpack_require__(5209);
Line.Random = __webpack_require__(5715);
Line.ReflectAngle = __webpack_require__(2898);
Line.Rotate = __webpack_require__(2653);
Line.RotateAroundPoint = __webpack_require__(8348);
Line.RotateAroundXY = __webpack_require__(1070);
Line.SetToAngle = __webpack_require__(3243);
Line.Slope = __webpack_require__(2865);
Line.Width = __webpack_require__(1322);
module.exports = Line;

/***/ }),

/***/ 2307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Rectangle = __webpack_require__(1456);

var Vector2 = __webpack_require__(9182);
/**
 * Returns the length of the line.
 *
 * @ignore
 * @private
 *
 * @param {number} x1 - The x1 coordinate.
 * @param {number} y1 - The y1 coordinate.
 * @param {number} x2 - The x2 coordinate.
 * @param {number} y2 - The y2 coordinate.
 *
 * @return {number} The length of the line.
 */


function GetLength(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  var magnitude = x * x + y * y;
  return Math.sqrt(magnitude);
}
/**
 * @classdesc
 * A Face Geometry Object.
 *
 * A Face is used by the Mesh Game Object. A Mesh consists of one, or more, faces that are
 * used to render the Mesh Game Objects in WebGL.
 *
 * A Face consists of 3 Vertex instances, for the 3 corners of the face and methods to help
 * you modify and test them.
 *
 * @class Face
 * @memberof Phaser.Geom.Mesh
 * @constructor
 * @since 3.50.0
 *
 * @param {Phaser.Geom.Mesh.Vertex} vertex1 - The first vertex of the Face.
 * @param {Phaser.Geom.Mesh.Vertex} vertex2 - The second vertex of the Face.
 * @param {Phaser.Geom.Mesh.Vertex} vertex3 - The third vertex of the Face.
 */


var Face = new Class({
  initialize: function Face(vertex1, vertex2, vertex3) {
    /**
     * The first vertex in this Face.
     *
     * @name Phaser.Geom.Mesh.Face#vertex1
     * @type {Phaser.Geom.Mesh.Vertex}
     * @since 3.50.0
     */
    this.vertex1 = vertex1;
    /**
     * The second vertex in this Face.
     *
     * @name Phaser.Geom.Mesh.Face#vertex2
     * @type {Phaser.Geom.Mesh.Vertex}
     * @since 3.50.0
     */

    this.vertex2 = vertex2;
    /**
     * The third vertex in this Face.
     *
     * @name Phaser.Geom.Mesh.Face#vertex3
     * @type {Phaser.Geom.Mesh.Vertex}
     * @since 3.50.0
     */

    this.vertex3 = vertex3;
    /**
     * The bounds of this Face.
     *
     * Be sure to call the `Face.updateBounds` method _before_ using this property.
     *
     * @name Phaser.Geom.Mesh.Face#bounds
     * @type {Phaser.Geom.Rectangle}
     * @since 3.50.0
     */

    this.bounds = new Rectangle();
    /**
     * The face inCenter. Do not access directly, instead use the `getInCenter` method.
     *
     * @name Phaser.Geom.Mesh.Face#_inCenter
     * @type {Phaser.Math.Vector2}
     * @private
     * @since 3.50.0
     */

    this._inCenter = new Vector2();
  },

  /**
   * Calculates and returns the in-center position of this Face.
   *
   * @method Phaser.Geom.Mesh.Face#getInCenter
   * @since 3.50.0
   *
   * @param {boolean} [local=true] Return the in center from the un-transformed vertex positions (`true`), or transformed? (`false`)
   *
   * @return {Phaser.Math.Vector2} A Vector2 containing the in center position of this Face.
   */
  getInCenter: function (local) {
    if (local === undefined) {
      local = true;
    }

    var v1 = this.vertex1;
    var v2 = this.vertex2;
    var v3 = this.vertex3;
    var v1x;
    var v1y;
    var v2x;
    var v2y;
    var v3x;
    var v3y;

    if (local) {
      v1x = v1.x;
      v1y = v1.y;
      v2x = v2.x;
      v2y = v2.y;
      v3x = v3.x;
      v3y = v3.y;
    } else {
      v1x = v1.vx;
      v1y = v1.vy;
      v2x = v2.vx;
      v2y = v2.vy;
      v3x = v3.vx;
      v3y = v3.vy;
    }

    var d1 = GetLength(v3x, v3y, v2x, v2y);
    var d2 = GetLength(v1x, v1y, v3x, v3y);
    var d3 = GetLength(v2x, v2y, v1x, v1y);
    var p = d1 + d2 + d3;
    return this._inCenter.set((v1x * d1 + v2x * d2 + v3x * d3) / p, (v1y * d1 + v2y * d2 + v3y * d3) / p);
  },

  /**
   * Checks if the given coordinates are within this Face.
   *
   * You can optionally provide a transform matrix. If given, the Face vertices
   * will be transformed first, before being checked against the coordinates.
   *
   * @method Phaser.Geom.Mesh.Face#contains
   * @since 3.50.0
   *
   * @param {number} x - The horizontal position to check.
   * @param {number} y - The vertical position to check.
   * @param {Phaser.GameObjects.Components.TransformMatrix} [calcMatrix] - Optional transform matrix to apply to the vertices before comparison.
   *
   * @return {boolean} `true` if the coordinates lay within this Face, otherwise `false`.
   */
  contains: function (x, y, calcMatrix) {
    var vertex1 = this.vertex1;
    var vertex2 = this.vertex2;
    var vertex3 = this.vertex3;
    var v1x = vertex1.vx;
    var v1y = vertex1.vy;
    var v2x = vertex2.vx;
    var v2y = vertex2.vy;
    var v3x = vertex3.vx;
    var v3y = vertex3.vy;

    if (calcMatrix) {
      var a = calcMatrix.a;
      var b = calcMatrix.b;
      var c = calcMatrix.c;
      var d = calcMatrix.d;
      var e = calcMatrix.e;
      var f = calcMatrix.f;
      v1x = vertex1.vx * a + vertex1.vy * c + e;
      v1y = vertex1.vx * b + vertex1.vy * d + f;
      v2x = vertex2.vx * a + vertex2.vy * c + e;
      v2y = vertex2.vx * b + vertex2.vy * d + f;
      v3x = vertex3.vx * a + vertex3.vy * c + e;
      v3y = vertex3.vx * b + vertex3.vy * d + f;
    }

    var t0x = v3x - v1x;
    var t0y = v3y - v1y;
    var t1x = v2x - v1x;
    var t1y = v2y - v1y;
    var t2x = x - v1x;
    var t2y = y - v1y;
    var dot00 = t0x * t0x + t0y * t0y;
    var dot01 = t0x * t1x + t0y * t1y;
    var dot02 = t0x * t2x + t0y * t2y;
    var dot11 = t1x * t1x + t1y * t1y;
    var dot12 = t1x * t2x + t1y * t2y; //  Compute barycentric coordinates

    var bc = dot00 * dot11 - dot01 * dot01;
    var inv = bc === 0 ? 0 : 1 / bc;
    var u = (dot11 * dot02 - dot01 * dot12) * inv;
    var v = (dot00 * dot12 - dot01 * dot02) * inv;
    return u >= 0 && v >= 0 && u + v < 1;
  },

  /**
   * Checks if the vertices in this Face are orientated counter-clockwise, or not.
   *
   * It checks the transformed position of the vertices, not the local one.
   *
   * @method Phaser.Geom.Mesh.Face#isCounterClockwise
   * @since 3.50.0
   *
   * @param {number} z - The z-axis value to test against. Typically the `Mesh.modelPosition.z`.
   *
   * @return {boolean} `true` if the vertices in this Face run counter-clockwise, otherwise `false`.
   */
  isCounterClockwise: function (z) {
    var v1 = this.vertex1;
    var v2 = this.vertex2;
    var v3 = this.vertex3;
    var d = (v2.vx - v1.vx) * (v3.vy - v1.vy) - (v2.vy - v1.vy) * (v3.vx - v1.vx);
    return z <= 0 ? d >= 0 : d < 0;
  },

  /**
   * Loads the data from this Vertex into the given Typed Arrays.
   *
   * @method Phaser.Geom.Mesh.Face#load
   * @since 3.50.0
   *
   * @param {Float32Array} F32 - A Float32 Array to insert the position, UV and unit data in to.
   * @param {Uint32Array} U32 - A Uint32 Array to insert the color and alpha data in to.
   * @param {number} offset - The index of the array to insert this Vertex to.
   * @param {number} textureUnit - The texture unit currently in use.
   * @param {number} tintEffect - The tint effect to use.
   *
   * @return {number} The new vertex index array offset.
   */
  load: function (F32, U32, offset, textureUnit, tintEffect) {
    offset = this.vertex1.load(F32, U32, offset, textureUnit, tintEffect);
    offset = this.vertex2.load(F32, U32, offset, textureUnit, tintEffect);
    offset = this.vertex3.load(F32, U32, offset, textureUnit, tintEffect);
    return offset;
  },

  /**
   * Transforms all Face vertices by the given matrix, storing the results in their `vx`, `vy` and `vz` properties.
   *
   * @method Phaser.Geom.Mesh.Face#transformCoordinatesLocal
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} transformMatrix - The transform matrix to apply to this vertex.
   * @param {number} width - The width of the parent Mesh.
   * @param {number} height - The height of the parent Mesh.
   * @param {number} cameraZ - The z position of the MeshCamera.
   *
   * @return {this} This Face instance.
   */
  transformCoordinatesLocal: function (transformMatrix, width, height, cameraZ) {
    this.vertex1.transformCoordinatesLocal(transformMatrix, width, height, cameraZ);
    this.vertex2.transformCoordinatesLocal(transformMatrix, width, height, cameraZ);
    this.vertex3.transformCoordinatesLocal(transformMatrix, width, height, cameraZ);
    return this;
  },

  /**
   * Updates the bounds of this Face, based on the translated values of the vertices.
   *
   * Call this method prior to accessing the `Face.bounds` property.
   *
   * @method Phaser.Geom.Mesh.Face#updateBounds
   * @since 3.50.0
   *
   * @return {this} This Face instance.
   */
  updateBounds: function () {
    var v1 = this.vertex1;
    var v2 = this.vertex2;
    var v3 = this.vertex3;
    var bounds = this.bounds;
    bounds.x = Math.min(v1.vx, v2.vx, v3.vx);
    bounds.y = Math.min(v1.vy, v2.vy, v3.vy);
    bounds.width = Math.max(v1.vx, v2.vx, v3.vx) - bounds.x;
    bounds.height = Math.max(v1.vy, v2.vy, v3.vy) - bounds.y;
    return this;
  },

  /**
   * Checks if this Face is within the view of the given Camera.
   *
   * This method is called in the `MeshWebGLRenderer` function. It performs the following tasks:
   *
   * First, the `Vertex.update` method is called on each of the vertices. This populates them
   * with the new translated values, updating their `tx`, `ty` and `ta` properties.
   *
   * Then it tests to see if this face is visible due to the alpha values, if not, it returns.
   *
   * After this, if `hideCCW` is set, it calls `isCounterClockwise` and returns if not.
   *
   * Finally, it will update the `Face.bounds` based on the newly translated vertex values
   * and return the results of an intersection test between the bounds and the camera world view
   * rectangle.
   *
   * @method Phaser.Geom.Mesh.Face#isInView
   * @since 3.50.0
   *
   * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera to check against.
   * @param {boolean} hideCCW - Test the counter-clockwise orientation of the verts?
   * @param {number} z - The Cameras z position, used in the CCW test.
   * @param {number} alpha - The alpha of the parent object.
   * @param {number} a - The parent transform matrix data a component.
   * @param {number} b - The parent transform matrix data b component.
   * @param {number} c - The parent transform matrix data c component.
   * @param {number} d - The parent transform matrix data d component.
   * @param {number} e - The parent transform matrix data e component.
   * @param {number} f - The parent transform matrix data f component.
   * @param {boolean} roundPixels - Round the vertex position or not?
   *
   * @return {boolean} `true` if this Face can be seen by the Camera.
   */
  isInView: function (camera, hideCCW, z, alpha, a, b, c, d, e, f, roundPixels) {
    var v1 = this.vertex1.update(a, b, c, d, e, f, roundPixels, alpha);
    var v2 = this.vertex2.update(a, b, c, d, e, f, roundPixels, alpha);
    var v3 = this.vertex3.update(a, b, c, d, e, f, roundPixels, alpha); //  Alpha check first

    if (v1.ta <= 0 && v2.ta <= 0 && v3.ta <= 0) {
      return false;
    } //  CCW check


    if (hideCCW && !this.isCounterClockwise(z)) {
      return false;
    } //  Bounds check


    var bounds = this.bounds;
    bounds.x = Math.min(v1.tx, v2.tx, v3.tx);
    bounds.y = Math.min(v1.ty, v2.ty, v3.ty);
    bounds.width = Math.max(v1.tx, v2.tx, v3.tx) - bounds.x;
    bounds.height = Math.max(v1.ty, v2.ty, v3.ty) - bounds.y;
    var cr = camera.x + camera.width;
    var cb = camera.y + camera.height;

    if (bounds.width <= 0 || bounds.height <= 0 || camera.width <= 0 || camera.height <= 0) {
      return false;
    }

    return !(bounds.right < camera.x || bounds.bottom < camera.y || bounds.x > cr || bounds.y > cb);
  },

  /**
   * Translates the vertices of this Face by the given amounts.
   *
   * The actual vertex positions are adjusted, not their transformed position.
   *
   * Therefore, this updates the vertex data directly.
   *
   * @method Phaser.Geom.Mesh.Face#translate
   * @since 3.50.0
   *
   * @param {number} x - The amount to horizontally translate by.
   * @param {number} [y=0] - The amount to vertically translate by.
   *
   * @return {this} This Face instance.
   */
  translate: function (x, y) {
    if (y === undefined) {
      y = 0;
    }

    var v1 = this.vertex1;
    var v2 = this.vertex2;
    var v3 = this.vertex3;
    v1.x += x;
    v1.y += y;
    v2.x += x;
    v2.y += y;
    v3.x += x;
    v3.y += y;
    return this;
  },

  /**
   * The x coordinate of this Face, based on the in center position of the Face.
   *
   * @name Phaser.Geom.Mesh.Face#x
   * @type {number}
   * @since 3.50.0
   */
  x: {
    get: function () {
      return this.getInCenter().x;
    },
    set: function (value) {
      var current = this.getInCenter();
      this.translate(value - current.x, 0);
    }
  },

  /**
   * The y coordinate of this Face, based on the in center position of the Face.
   *
   * @name Phaser.Geom.Mesh.Face#y
   * @type {number}
   * @since 3.50.0
   */
  y: {
    get: function () {
      return this.getInCenter().y;
    },
    set: function (value) {
      var current = this.getInCenter();
      this.translate(0, value - current.y);
    }
  },

  /**
   * Set the alpha value of this Face.
   *
   * Each vertex is given the same value. If you need to adjust the alpha on a per-vertex basis
   * then use the `Vertex.alpha` property instead.
   *
   * When getting the alpha of this Face, it will return an average of the alpha
   * component of all three vertices.
   *
   * @name Phaser.Geom.Mesh.Face#alpha
   * @type {number}
   * @since 3.50.0
   */
  alpha: {
    get: function () {
      var v1 = this.vertex1;
      var v2 = this.vertex2;
      var v3 = this.vertex3;
      return (v1.alpha + v2.alpha + v3.alpha) / 3;
    },
    set: function (value) {
      this.vertex1.alpha = value;
      this.vertex2.alpha = value;
      this.vertex3.alpha = value;
    }
  },

  /**
   * The depth of this Face, which is an average of the z component of all three vertices.
   *
   * The depth is calculated based on the transformed z value, not the local one.
   *
   * @name Phaser.Geom.Mesh.Face#depth
   * @type {number}
   * @readonly
   * @since 3.50.0
   */
  depth: {
    get: function () {
      var v1 = this.vertex1;
      var v2 = this.vertex2;
      var v3 = this.vertex3;
      return (v1.vz + v2.vz + v3.vz) / 3;
    }
  },

  /**
   * Destroys this Face and nulls the references to the vertices.
   *
   * @method Phaser.Geom.Mesh.Face#destroy
   * @since 3.50.0
   */
  destroy: function () {
    this.vertex1 = null;
    this.vertex2 = null;
    this.vertex3 = null;
  }
});
module.exports = Face;

/***/ }),

/***/ 7989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Face = __webpack_require__(2307);

var GetFastValue = __webpack_require__(6128);

var Matrix4 = __webpack_require__(5332);

var Vector3 = __webpack_require__(2220);

var Vertex = __webpack_require__(7748);

var tempPosition = new Vector3();
var tempRotation = new Vector3();
var tempMatrix = new Matrix4();
/**
 * Creates a grid of vertices based on the given configuration object and optionally adds it to a Mesh.
 *
 * The size of the grid is given in pixels. An example configuration may be:
 *
 * `{ width: 256, height: 256, widthSegments: 2, heightSegments: 2, tile: true }`
 *
 * This will create a grid 256 x 256 pixels in size, split into 2 x 2 segments, with
 * the texture tiling across the cells.
 *
 * You can split the grid into segments both vertically and horizontally. This will
 * generate two faces per grid segment as a result.
 *
 * The `tile` parameter allows you to control if the tile will repeat across the grid
 * segments, or be displayed in full.
 *
 * If adding this grid to a Mesh you can offset the grid via the `x` and `y` properties.
 *
 * UV coordinates are generated based on the given texture and frame in the config. For
 * example, no frame is given, the UVs will be in the range 0 to 1. If a frame is given,
 * such as from a texture atlas, the UVs will be generated within the range of that frame.
 *
 * @function Phaser.Geom.Mesh.GenerateGridVerts
 * @since 3.50.0
 *
 * @param {Phaser.Types.Geom.Mesh.GenerateGridConfig} config - A Grid configuration object.
 *
 * @return {Phaser.Types.Geom.Mesh.GenerateGridVertsResult} A Grid Result object, containing the generated vertices and indicies.
 */

var GenerateGridVerts = function (config) {
  var mesh = GetFastValue(config, 'mesh');
  var texture = GetFastValue(config, 'texture', null);
  var frame = GetFastValue(config, 'frame');
  var width = GetFastValue(config, 'width', 1);
  var height = GetFastValue(config, 'height', width);
  var widthSegments = GetFastValue(config, 'widthSegments', 1);
  var heightSegments = GetFastValue(config, 'heightSegments', widthSegments);
  var posX = GetFastValue(config, 'x', 0);
  var posY = GetFastValue(config, 'y', 0);
  var posZ = GetFastValue(config, 'z', 0);
  var rotateX = GetFastValue(config, 'rotateX', 0);
  var rotateY = GetFastValue(config, 'rotateY', 0);
  var rotateZ = GetFastValue(config, 'rotateZ', 0);
  var zIsUp = GetFastValue(config, 'zIsUp', true);
  var isOrtho = GetFastValue(config, 'isOrtho', mesh ? mesh.dirtyCache[11] : false);
  var colors = GetFastValue(config, 'colors', [0xffffff]);
  var alphas = GetFastValue(config, 'alphas', [1]);
  var tile = GetFastValue(config, 'tile', false);
  var flipY = GetFastValue(config, 'flipY', false);
  var widthSet = GetFastValue(config, 'width', null);
  var result = {
    faces: [],
    verts: []
  };
  tempPosition.set(posX, posY, posZ);
  tempRotation.set(rotateX, rotateY, rotateZ);
  tempMatrix.fromRotationXYTranslation(tempRotation, tempPosition, zIsUp);

  if (!texture && mesh) {
    texture = mesh.texture;
  } else if (mesh && typeof texture === 'string') {
    texture = mesh.scene.sys.textures.get(texture);
  } else {
    //  There's nothing more we can do without a texture
    return result;
  }

  var textureFrame = texture.get(frame); //  If the Mesh is ortho and no width / height is given, we'll default to texture sizes (if set!)

  if (!widthSet && isOrtho && texture && mesh) {
    width = textureFrame.width / mesh.height;
    height = textureFrame.height / mesh.height;
  }

  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var gridX = Math.floor(widthSegments);
  var gridY = Math.floor(heightSegments);
  var gridX1 = gridX + 1;
  var gridY1 = gridY + 1;
  var segmentWidth = width / gridX;
  var segmentHeight = height / gridY;
  var uvs = [];
  var vertices = [];
  var ix;
  var iy;
  var frameU0 = 0;
  var frameU1 = 1;
  var frameV0 = 0;
  var frameV1 = 1;

  if (textureFrame) {
    frameU0 = textureFrame.u0;
    frameU1 = textureFrame.u1;

    if (!flipY) {
      frameV0 = textureFrame.v0;
      frameV1 = textureFrame.v1;
    } else {
      frameV0 = textureFrame.v1;
      frameV1 = textureFrame.v0;
    }
  }

  var frameU = frameU1 - frameU0;
  var frameV = frameV1 - frameV0;

  for (iy = 0; iy < gridY1; iy++) {
    var y = iy * segmentHeight - halfHeight;

    for (ix = 0; ix < gridX1; ix++) {
      var x = ix * segmentWidth - halfWidth;
      vertices.push(x, -y);
      var tu = frameU0 + frameU * (ix / gridX);
      var tv = frameV0 + frameV * (iy / gridY);
      uvs.push(tu, tv);
    }
  }

  if (!Array.isArray(colors)) {
    colors = [colors];
  }

  if (!Array.isArray(alphas)) {
    alphas = [alphas];
  }

  var alphaIndex = 0;
  var colorIndex = 0;

  for (iy = 0; iy < gridY; iy++) {
    for (ix = 0; ix < gridX; ix++) {
      var a = (ix + gridX1 * iy) * 2;
      var b = (ix + gridX1 * (iy + 1)) * 2;
      var c = (ix + 1 + gridX1 * (iy + 1)) * 2;
      var d = (ix + 1 + gridX1 * iy) * 2;
      var color = colors[colorIndex];
      var alpha = alphas[alphaIndex];
      var vert1 = new Vertex(vertices[a], vertices[a + 1], 0, uvs[a], uvs[a + 1], color, alpha).transformMat4(tempMatrix);
      var vert2 = new Vertex(vertices[b], vertices[b + 1], 0, uvs[b], uvs[b + 1], color, alpha).transformMat4(tempMatrix);
      var vert3 = new Vertex(vertices[d], vertices[d + 1], 0, uvs[d], uvs[d + 1], color, alpha).transformMat4(tempMatrix);
      var vert4 = new Vertex(vertices[b], vertices[b + 1], 0, uvs[b], uvs[b + 1], color, alpha).transformMat4(tempMatrix);
      var vert5 = new Vertex(vertices[c], vertices[c + 1], 0, uvs[c], uvs[c + 1], color, alpha).transformMat4(tempMatrix);
      var vert6 = new Vertex(vertices[d], vertices[d + 1], 0, uvs[d], uvs[d + 1], color, alpha).transformMat4(tempMatrix);

      if (tile) {
        vert1.setUVs(frameU0, frameV1);
        vert2.setUVs(frameU0, frameV0);
        vert3.setUVs(frameU1, frameV1);
        vert4.setUVs(frameU0, frameV0);
        vert5.setUVs(frameU1, frameV0);
        vert6.setUVs(frameU1, frameV1);
      }

      colorIndex++;

      if (colorIndex === colors.length) {
        colorIndex = 0;
      }

      alphaIndex++;

      if (alphaIndex === alphas.length) {
        alphaIndex = 0;
      }

      result.verts.push(vert1, vert2, vert3, vert4, vert5, vert6);
      result.faces.push(new Face(vert1, vert2, vert3), new Face(vert4, vert5, vert6));
    }
  }

  if (mesh) {
    mesh.faces = mesh.faces.concat(result.faces);
    mesh.vertices = mesh.vertices.concat(result.verts);
  }

  return result;
};

module.exports = GenerateGridVerts;

/***/ }),

/***/ 4382:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Face = __webpack_require__(2307);

var Matrix4 = __webpack_require__(5332);

var Vector3 = __webpack_require__(2220);

var Vertex = __webpack_require__(7748);

var tempPosition = new Vector3();
var tempRotation = new Vector3();
var tempMatrix = new Matrix4();
/**
 * This method will return an object containing Face and Vertex instances, generated
 * from the parsed triangulated OBJ Model data given to this function.
 *
 * The obj data should have been parsed in advance via the ParseObj function:
 *
 * ```javascript
 * var data = Phaser.Geom.Mesh.ParseObj(rawData, flipUV);
 *
 * var results = GenerateObjVerts(data);
 * ```
 *
 * Alternatively, you can parse obj files loaded via the OBJFile loader:
 *
 * ```javascript
 * preload ()
 * {
 *   this.load.obj('alien', 'assets/3d/alien.obj);
 * }
 *
 * var results = GenerateObjVerts(this.cache.obj.get('alien));
 * ```
 *
 * Make sure your 3D package has triangulated the model data prior to exporting it.
 *
 * You can use the data returned by this function to populate the vertices of a Mesh Game Object.
 *
 * You may add multiple models to a single Mesh, although they will act as one when
 * moved or rotated. You can scale the model data, should it be too small (or large) to visualize.
 * You can also offset the model via the `x`, `y` and `z` parameters.
 *
 * @function Phaser.Geom.Mesh.GenerateObjVerts
 * @since 3.50.0
 *
 * @param {Phaser.Types.Geom.Mesh.OBJData} data - The parsed OBJ model data.
 * @param {Phaser.GameObjects.Mesh} [mesh] - An optional Mesh Game Object. If given, the generated Faces will be automatically added to this Mesh. Set to `null` to skip.
 * @param {number} [scale=1] - An amount to scale the model data by. Use this if the model has exported too small, or large, to see.
 * @param {number} [x=0] - Translate the model x position by this amount.
 * @param {number} [y=0] - Translate the model y position by this amount.
 * @param {number} [z=0] - Translate the model z position by this amount.
 * @param {number} [rotateX=0] - Rotate the model on the x axis by this amount, in radians.
 * @param {number} [rotateY=0] - Rotate the model on the y axis by this amount, in radians.
 * @param {number} [rotateZ=0] - Rotate the model on the z axis by this amount, in radians.
 * @param {boolean} [zIsUp=true] - Is the z axis up (true), or is y axis up (false)?
 *
 * @return {Phaser.Types.Geom.Mesh.GenerateVertsResult} The parsed Face and Vertex objects.
 */

var GenerateObjVerts = function (data, mesh, scale, x, y, z, rotateX, rotateY, rotateZ, zIsUp) {
  if (scale === undefined) {
    scale = 1;
  }

  if (x === undefined) {
    x = 0;
  }

  if (y === undefined) {
    y = 0;
  }

  if (z === undefined) {
    z = 0;
  }

  if (rotateX === undefined) {
    rotateX = 0;
  }

  if (rotateY === undefined) {
    rotateY = 0;
  }

  if (rotateZ === undefined) {
    rotateZ = 0;
  }

  if (zIsUp === undefined) {
    zIsUp = true;
  }

  var result = {
    faces: [],
    verts: []
  };
  var materials = data.materials;
  tempPosition.set(x, y, z);
  tempRotation.set(rotateX, rotateY, rotateZ);
  tempMatrix.fromRotationXYTranslation(tempRotation, tempPosition, zIsUp);

  for (var m = 0; m < data.models.length; m++) {
    var model = data.models[m];
    var vertices = model.vertices;
    var textureCoords = model.textureCoords;
    var faces = model.faces;

    for (var i = 0; i < faces.length; i++) {
      var face = faces[i];
      var v1 = face.vertices[0];
      var v2 = face.vertices[1];
      var v3 = face.vertices[2];
      var m1 = vertices[v1.vertexIndex];
      var m2 = vertices[v2.vertexIndex];
      var m3 = vertices[v3.vertexIndex];
      var t1 = v1.textureCoordsIndex;
      var t2 = v2.textureCoordsIndex;
      var t3 = v3.textureCoordsIndex;
      var uv1 = t1 === -1 ? {
        u: 0,
        v: 1
      } : textureCoords[t1];
      var uv2 = t2 === -1 ? {
        u: 0,
        v: 0
      } : textureCoords[t2];
      var uv3 = t3 === -1 ? {
        u: 1,
        v: 1
      } : textureCoords[t3];
      var color = 0xffffff;

      if (face.material !== '' && materials[face.material]) {
        color = materials[face.material];
      }

      var vert1 = new Vertex(m1.x * scale, m1.y * scale, m1.z * scale, uv1.u, uv1.v, color).transformMat4(tempMatrix);
      var vert2 = new Vertex(m2.x * scale, m2.y * scale, m2.z * scale, uv2.u, uv2.v, color).transformMat4(tempMatrix);
      var vert3 = new Vertex(m3.x * scale, m3.y * scale, m3.z * scale, uv3.u, uv3.v, color).transformMat4(tempMatrix);
      result.verts.push(vert1, vert2, vert3);
      result.faces.push(new Face(vert1, vert2, vert3));
    }
  }

  if (mesh) {
    mesh.faces = mesh.faces.concat(result.faces);
    mesh.vertices = mesh.vertices.concat(result.verts);
  }

  return result;
};

module.exports = GenerateObjVerts;

/***/ }),

/***/ 1479:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Face = __webpack_require__(2307);

var Vertex = __webpack_require__(7748);
/**
 * Generates a set of Face and Vertex objects by parsing the given data.
 *
 * This method will take vertex data in one of two formats, based on the `containsZ` parameter.
 *
 * If your vertex data are `x`, `y` pairs, then `containsZ` should be `false` (this is the default)
 *
 * If your vertex data is groups of `x`, `y` and `z` values, then the `containsZ` parameter must be true.
 *
 * The `uvs` parameter is a numeric array consisting of `u` and `v` pairs.
 *
 * The `normals` parameter is a numeric array consisting of `x`, `y` vertex normal values and, if `containsZ` is true, `z` values as well.
 *
 * The `indicies` parameter is an optional array that, if given, is an indexed list of vertices to be added.
 *
 * The `colors` parameter is an optional array, or single value, that if given sets the color of each vertex created.
 *
 * The `alphas` parameter is an optional array, or single value, that if given sets the alpha of each vertex created.
 *
 * When providing indexed data it is assumed that _all_ of the arrays are indexed, not just the vertices.
 *
 * The following example will create a 256 x 256 sized quad using an index array:
 *
 * ```javascript
 * const vertices = [
 *   -128, 128,
 *   128, 128,
 *   -128, -128,
 *   128, -128
 * ];
 *
 * const uvs = [
 *   0, 1,
 *   1, 1,
 *   0, 0,
 *   1, 0
 * ];
 *
 * const indices = [ 0, 2, 1, 2, 3, 1 ];
 *
 * GenerateVerts(vertices, uvs, indicies);
 * ```
 *
 * If the data is not indexed, it's assumed that the arrays all contain sequential data.
 *
 * @function Phaser.Geom.Mesh.GenerateVerts
 * @since 3.50.0
 *
 * @param {number[]} vertices - The vertices array. Either `xy` pairs, or `xyz` if the `containsZ` parameter is `true`.
 * @param {number[]} uvs - The UVs pairs array.
 * @param {number[]} [indicies] - Optional vertex indicies array. If you don't have one, pass `null` or an empty array.
 * @param {boolean} [containsZ=false] - Does the vertices data include a `z` component?
 * @param {number[]} [normals] - Optional vertex normals array. If you don't have one, pass `null` or an empty array.
 * @param {number|number[]} [colors=0xffffff] - An array of colors, one per vertex, or a single color value applied to all vertices.
 * @param {number|number[]} [alphas=1] - An array of alpha values, one per vertex, or a single alpha value applied to all vertices.
 *
 * @return {Phaser.Types.Geom.Mesh.GenerateVertsResult} The parsed Face and Vertex objects.
 */


var GenerateVerts = function (vertices, uvs, indicies, containsZ, normals, colors, alphas) {
  if (containsZ === undefined) {
    containsZ = false;
  }

  if (colors === undefined) {
    colors = 0xffffff;
  }

  if (alphas === undefined) {
    alphas = 1;
  }

  if (vertices.length !== uvs.length) {
    console.warn('GenerateVerts: vertices and uvs count not equal');
    return;
  }

  var result = {
    faces: [],
    vertices: []
  };
  var i;
  var x;
  var y;
  var z;
  var u;
  var v;
  var color;
  var alpha;
  var normalX;
  var normalY;
  var normalZ;
  var iInc = containsZ ? 3 : 2;
  var isColorArray = Array.isArray(colors);
  var isAlphaArray = Array.isArray(alphas);

  if (Array.isArray(indicies) && indicies.length > 0) {
    for (i = 0; i < indicies.length; i++) {
      var index1 = indicies[i];
      var index2 = indicies[i] * 2;
      var index3 = indicies[i] * iInc;
      x = vertices[index3];
      y = vertices[index3 + 1];
      z = containsZ ? vertices[index3 + 2] : 0;
      u = uvs[index2];
      v = uvs[index2 + 1];
      color = isColorArray ? colors[index1] : colors;
      alpha = isAlphaArray ? alphas[index1] : alphas;
      normalX = 0;
      normalY = 0;
      normalZ = 0;

      if (normals) {
        normalX = normals[index3];
        normalY = normals[index3 + 1];
        normalZ = containsZ ? normals[index3 + 2] : 0;
      }

      result.vertices.push(new Vertex(x, y, z, u, v, color, alpha, normalX, normalY, normalZ));
    }
  } else {
    var uvIndex = 0;
    var colorIndex = 0;

    for (i = 0; i < vertices.length; i += iInc) {
      x = vertices[i];
      y = vertices[i + 1];
      z = containsZ ? vertices[i + 2] : 0;
      u = uvs[uvIndex];
      v = uvs[uvIndex + 1];
      color = isColorArray ? colors[colorIndex] : colors;
      alpha = isAlphaArray ? alphas[colorIndex] : alphas;
      normalX = 0;
      normalY = 0;
      normalZ = 0;

      if (normals) {
        normalX = normals[i];
        normalY = normals[i + 1];
        normalZ = containsZ ? normals[i + 2] : 0;
      }

      result.vertices.push(new Vertex(x, y, z, u, v, color, alpha, normalX, normalY, normalZ));
      uvIndex += 2;
      colorIndex++;
    }
  }

  for (i = 0; i < result.vertices.length; i += 3) {
    var vert1 = result.vertices[i];
    var vert2 = result.vertices[i + 1];
    var vert3 = result.vertices[i + 2];
    result.faces.push(new Face(vert1, vert2, vert3));
  }

  return result;
};

module.exports = GenerateVerts;

/***/ }),

/***/ 1971:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var flip = true;
var defaultModelName = 'untitled';
var currentGroup = '';
var currentMaterial = '';
/**
 * @ignore
 */

function stripComments(line) {
  var idx = line.indexOf('#');
  return idx > -1 ? line.substring(0, idx) : line;
}
/**
 * @ignore
 */


function currentModel(result) {
  if (result.models.length === 0) {
    result.models.push({
      faces: [],
      name: defaultModelName,
      textureCoords: [],
      vertexNormals: [],
      vertices: []
    });
  }

  currentGroup = '';
  return result.models[result.models.length - 1];
}
/**
 * @ignore
 */


function parseObject(lineItems, result) {
  var modelName = lineItems.length >= 2 ? lineItems[1] : defaultModelName;
  result.models.push({
    faces: [],
    name: modelName,
    textureCoords: [],
    vertexNormals: [],
    vertices: []
  });
  currentGroup = '';
}
/**
 * @ignore
 */


function parseGroup(lineItems) {
  if (lineItems.length === 2) {
    currentGroup = lineItems[1];
  }
}
/**
 * @ignore
 */


function parseVertexCoords(lineItems, result) {
  var len = lineItems.length;
  var x = len >= 2 ? parseFloat(lineItems[1]) : 0;
  var y = len >= 3 ? parseFloat(lineItems[2]) : 0;
  var z = len >= 4 ? parseFloat(lineItems[3]) : 0;
  currentModel(result).vertices.push({
    x: x,
    y: y,
    z: z
  });
}
/**
 * @ignore
 */


function parseTextureCoords(lineItems, result) {
  var len = lineItems.length;
  var u = len >= 2 ? parseFloat(lineItems[1]) : 0;
  var v = len >= 3 ? parseFloat(lineItems[2]) : 0;
  var w = len >= 4 ? parseFloat(lineItems[3]) : 0;

  if (isNaN(u)) {
    u = 0;
  }

  if (isNaN(v)) {
    v = 0;
  }

  if (isNaN(w)) {
    w = 0;
  }

  if (flip) {
    v = 1 - v;
  }

  currentModel(result).textureCoords.push({
    u: u,
    v: v,
    w: w
  });
}
/**
 * @ignore
 */


function parseVertexNormal(lineItems, result) {
  var len = lineItems.length;
  var x = len >= 2 ? parseFloat(lineItems[1]) : 0;
  var y = len >= 3 ? parseFloat(lineItems[2]) : 0;
  var z = len >= 4 ? parseFloat(lineItems[3]) : 0;
  currentModel(result).vertexNormals.push({
    x: x,
    y: y,
    z: z
  });
}
/**
 * @ignore
 */


function parsePolygon(lineItems, result) {
  var totalVertices = lineItems.length - 1;

  if (totalVertices < 3) {
    return;
  }

  var face = {
    group: currentGroup,
    material: currentMaterial,
    vertices: []
  };

  for (var i = 0; i < totalVertices; i++) {
    var vertexString = lineItems[i + 1];
    var vertexValues = vertexString.split('/');
    var vvLen = vertexValues.length;

    if (vvLen < 1 || vvLen > 3) {
      continue;
    }

    var vertexIndex = 0;
    var textureCoordsIndex = 0;
    var vertexNormalIndex = 0;
    vertexIndex = parseInt(vertexValues[0], 10);

    if (vvLen > 1 && vertexValues[1] !== '') {
      textureCoordsIndex = parseInt(vertexValues[1], 10);
    }

    if (vvLen > 2) {
      vertexNormalIndex = parseInt(vertexValues[2], 10);
    }

    if (vertexIndex !== 0) {
      // Negative vertex indices refer to the nth last defined vertex
      // convert these to postive indices for simplicity
      if (vertexIndex < 0) {
        vertexIndex = currentModel(result).vertices.length + 1 + vertexIndex;
      }

      textureCoordsIndex -= 1;
      vertexIndex -= 1;
      vertexNormalIndex -= 1;
      face.vertices.push({
        textureCoordsIndex: textureCoordsIndex,
        vertexIndex: vertexIndex,
        vertexNormalIndex: vertexNormalIndex
      });
    }
  }

  currentModel(result).faces.push(face);
}
/**
 * @ignore
 */


function parseMtlLib(lineItems, result) {
  if (lineItems.length >= 2) {
    result.materialLibraries.push(lineItems[1]);
  }
}
/**
 * @ignore
 */


function parseUseMtl(lineItems) {
  if (lineItems.length >= 2) {
    currentMaterial = lineItems[1];
  }
}
/**
 * Parses a Wavefront OBJ File, extracting the models from it and returning them in an array.
 *
 * The model data *must* be triangulated for a Mesh Game Object to be able to render it.
 *
 * @function Phaser.Geom.Mesh.ParseObj
 * @since 3.50.0
 *
 * @param {string} data - The OBJ File data as a raw string.
 * @param {boolean} [flipUV=true] - Flip the UV coordinates?
 *
 * @return {Phaser.Types.Geom.Mesh.OBJData} The parsed model and material data.
 */


var ParseObj = function (data, flipUV) {
  if (flipUV === undefined) {
    flipUV = true;
  }

  flip = flipUV; //  Store results in here

  var result = {
    materials: {},
    materialLibraries: [],
    models: []
  };
  currentGroup = '';
  currentMaterial = '';
  var lines = data.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var line = stripComments(lines[i]);
    var lineItems = line.replace(/\s\s+/g, ' ').trim().split(' ');

    switch (lineItems[0].toLowerCase()) {
      case 'o':
        // Start A New Model
        parseObject(lineItems, result);
        break;

      case 'g':
        // Start a new polygon group
        parseGroup(lineItems);
        break;

      case 'v':
        // Define a vertex for the current model
        parseVertexCoords(lineItems, result);
        break;

      case 'vt':
        // Texture Coords
        parseTextureCoords(lineItems, result);
        break;

      case 'vn':
        // Define a vertex normal for the current model
        parseVertexNormal(lineItems, result);
        break;

      case 'f':
        // Define a Face/Polygon
        parsePolygon(lineItems, result);
        break;

      case 'mtllib':
        // Reference to a material library file (.mtl)
        parseMtlLib(lineItems, result);
        break;

      case 'usemtl':
        // Sets the current material to be applied to polygons defined from this point forward
        parseUseMtl(lineItems);
        break;
    }
  }

  return result;
};

module.exports = ParseObj;

/***/ }),

/***/ 5038:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetColor = __webpack_require__(364);
/**
 * Takes a Wavefront Material file and extracts the diffuse reflectivity of the named
 * materials, converts them to integer color values and returns them.
 *
 * This is used internally by the `addOBJ` and `addModel` methods, but is exposed for
 * public consumption as well.
 *
 * Note this only works with diffuse values, specified in the `Kd r g b` format, where
 * `g` and `b` are optional, but `r` is required. It does not support spectral rfl files,
 * or any other material statement (such as `Ka` or `Ks`)
 *
 * @method Phaser.Geom.Mesh.ParseObjMaterial
 * @since 3.50.0
 *
 * @param {string} mtl - The OBJ MTL file as a raw string, i.e. loaded via `this.load.text`.
 *
 * @return {object} The parsed material colors, where each property of the object matches the material name.
 */


var ParseObjMaterial = function (mtl) {
  var output = {};
  var lines = mtl.split('\n');
  var currentMaterial = '';

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if (line.indexOf('#') === 0 || line === '') {
      continue;
    }

    var lineItems = line.replace(/\s\s+/g, ' ').trim().split(' ');

    switch (lineItems[0].toLowerCase()) {
      case 'newmtl':
        {
          currentMaterial = lineItems[1];
          break;
        }
      //  The diffuse reflectivity of the current material
      //  Support r, [g], [b] format, where g and b are optional

      case 'kd':
        {
          var r = Math.floor(lineItems[1] * 255);
          var g = lineItems.length >= 2 ? Math.floor(lineItems[2] * 255) : r;
          var b = lineItems.length >= 3 ? Math.floor(lineItems[3] * 255) : r;
          output[currentMaterial] = GetColor(r, g, b);
          break;
        }
    }
  }

  return output;
};

module.exports = ParseObjMaterial;

/***/ }),

/***/ 8931:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotates the vertices of a Face to the given angle.
 *
 * The actual vertex positions are adjusted, not their transformed positions.
 *
 * Therefore, this updates the vertex data directly.
 *
 * @function Phaser.Geom.Mesh.RotateFace
 * @since 3.50.0
 *
 * @param {Phaser.Geom.Mesh.Face} face - The Face to rotate.
 * @param {number} angle - The angle to rotate to, in radians.
 * @param {number} [cx] - An optional center of rotation. If not given, the Face in-center is used.
 * @param {number} [cy] - An optional center of rotation. If not given, the Face in-center is used.
 */
var RotateFace = function (face, angle, cx, cy) {
  var x;
  var y; //  No point of rotation? Use the inCenter instead, then.

  if (cx === undefined && cy === undefined) {
    var inCenter = face.getInCenter();
    x = inCenter.x;
    y = inCenter.y;
  }

  var c = Math.cos(angle);
  var s = Math.sin(angle);
  var v1 = face.vertex1;
  var v2 = face.vertex2;
  var v3 = face.vertex3;
  var tx = v1.x - x;
  var ty = v1.y - y;
  v1.set(tx * c - ty * s + x, tx * s + ty * c + y);
  tx = v2.x - x;
  ty = v2.y - y;
  v2.set(tx * c - ty * s + x, tx * s + ty * c + y);
  tx = v3.x - x;
  ty = v3.y - y;
  v3.set(tx * c - ty * s + x, tx * s + ty * c + y);
};

module.exports = RotateFace;

/***/ }),

/***/ 7748:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Utils = __webpack_require__(8766);

var Vector3 = __webpack_require__(2220);
/**
 * @classdesc
 * A Vertex Geometry Object.
 *
 * This class consists of all the information required for a single vertex within a Face Geometry Object.
 *
 * Faces, and thus Vertex objects, are used by the Mesh Game Object in order to render objects in WebGL.
 *
 * @class Vertex
 * @memberof Phaser.Geom.Mesh
 * @constructor
 * @extends Phaser.Math.Vector3
 * @since 3.50.0
 *
 * @param {number} x - The x position of the vertex.
 * @param {number} y - The y position of the vertex.
 * @param {number} z - The z position of the vertex.
 * @param {number} u - The UV u coordinate of the vertex.
 * @param {number} v - The UV v coordinate of the vertex.
 * @param {number} [color=0xffffff] - The color value of the vertex.
 * @param {number} [alpha=1] - The alpha value of the vertex.
 * @param {number} [nx=0] - The x normal value of the vertex.
 * @param {number} [ny=0] - The y normal value of the vertex.
 * @param {number} [nz=0] - The z normal value of the vertex.
 */


var Vertex = new Class({
  Extends: Vector3,
  initialize: function Vertex(x, y, z, u, v, color, alpha, nx, ny, nz) {
    if (color === undefined) {
      color = 0xffffff;
    }

    if (alpha === undefined) {
      alpha = 1;
    }

    if (nx === undefined) {
      nx = 0;
    }

    if (ny === undefined) {
      ny = 0;
    }

    if (nz === undefined) {
      nz = 0;
    }

    Vector3.call(this, x, y, z);
    /**
     * The projected x coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#vx
     * @type {number}
     * @since 3.50.0
     */

    this.vx = 0;
    /**
     * The projected y coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#vy
     * @type {number}
     * @since 3.50.0
     */

    this.vy = 0;
    /**
     * The projected z coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#vz
     * @type {number}
     * @since 3.50.0
     */

    this.vz = 0;
    /**
     * The projected x coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#nx
     * @type {number}
     * @since 3.50.0
     */

    this.nx = nx;
    /**
     * The projected y coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#ny
     * @type {number}
     * @since 3.50.0
     */

    this.ny = ny;
    /**
     * The projected z coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#nz
     * @type {number}
     * @since 3.50.0
     */

    this.nz = nz;
    /**
     * UV u coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#u
     * @type {number}
     * @since 3.50.0
     */

    this.u = u;
    /**
     * UV v coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#v
     * @type {number}
     * @since 3.50.0
     */

    this.v = v;
    /**
     * The color value of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#color
     * @type {number}
     * @since 3.50.0
     */

    this.color = color;
    /**
     * The alpha value of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#alpha
     * @type {number}
     * @since 3.50.0
     */

    this.alpha = alpha;
    /**
     * The translated x coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#tx
     * @type {number}
     * @since 3.50.0
     */

    this.tx = 0;
    /**
     * The translated y coordinate of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#ty
     * @type {number}
     * @since 3.50.0
     */

    this.ty = 0;
    /**
     * The translated alpha value of this vertex.
     *
     * @name Phaser.Geom.Mesh.Vertex#ta
     * @type {number}
     * @since 3.50.0
     */

    this.ta = 0;
  },

  /**
   * Sets the U and V properties.
   *
   * @method Phaser.Geom.Mesh.Vertex#setUVs
   * @since 3.50.0
   *
   * @param {number} u - The UV u coordinate of the vertex.
   * @param {number} v - The UV v coordinate of the vertex.
   *
   * @return {this} This Vertex.
   */
  setUVs: function (u, v) {
    this.u = u;
    this.v = v;
    return this;
  },

  /**
   * Transforms this vertex by the given matrix, storing the results in `vx`, `vy` and `vz`.
   *
   * @method Phaser.Geom.Mesh.Vertex#transformCoordinatesLocal
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} transformMatrix - The transform matrix to apply to this vertex.
   * @param {number} width - The width of the parent Mesh.
   * @param {number} height - The height of the parent Mesh.
   * @param {number} cameraZ - The z position of the MeshCamera.
   */
  transformCoordinatesLocal: function (transformMatrix, width, height, cameraZ) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = transformMatrix.val;
    var tx = x * m[0] + y * m[4] + z * m[8] + m[12];
    var ty = x * m[1] + y * m[5] + z * m[9] + m[13];
    var tz = x * m[2] + y * m[6] + z * m[10] + m[14];
    var tw = x * m[3] + y * m[7] + z * m[11] + m[15];
    this.vx = tx / tw * width;
    this.vy = -(ty / tw) * height;

    if (cameraZ <= 0) {
      this.vz = tz / tw;
    } else {
      this.vz = -(tz / tw);
    }
  },

  /**
   * Updates this Vertex based on the given transform.
   *
   * @method Phaser.Geom.Mesh.Vertex#update
   * @since 3.50.0
   *
   * @param {number} a - The parent transform matrix data a component.
   * @param {number} b - The parent transform matrix data b component.
   * @param {number} c - The parent transform matrix data c component.
   * @param {number} d - The parent transform matrix data d component.
   * @param {number} e - The parent transform matrix data e component.
   * @param {number} f - The parent transform matrix data f component.
   * @param {boolean} roundPixels - Round the vertex position or not?
   * @param {number} alpha - The alpha of the parent object.
   *
   * @return {this} This Vertex.
   */
  update: function (a, b, c, d, e, f, roundPixels, alpha) {
    var tx = this.vx * a + this.vy * c + e;
    var ty = this.vx * b + this.vy * d + f;

    if (roundPixels) {
      tx = Math.round(tx);
      ty = Math.round(ty);
    }

    this.tx = tx;
    this.ty = ty;
    this.ta = this.alpha * alpha;
    return this;
  },

  /**
   * Loads the data from this Vertex into the given Typed Arrays.
   *
   * @method Phaser.Geom.Mesh.Vertex#load
   * @since 3.50.0
   *
   * @param {Float32Array} F32 - A Float32 Array to insert the position, UV and unit data in to.
   * @param {Uint32Array} U32 - A Uint32 Array to insert the color and alpha data in to.
   * @param {number} offset - The index of the array to insert this Vertex to.
   * @param {number} textureUnit - The texture unit currently in use.
   * @param {number} tintEffect - The tint effect to use.
   *
   * @return {number} The new array offset.
   */
  load: function (F32, U32, offset, textureUnit, tintEffect) {
    F32[++offset] = this.tx;
    F32[++offset] = this.ty;
    F32[++offset] = this.u;
    F32[++offset] = this.v;
    F32[++offset] = textureUnit;
    F32[++offset] = tintEffect;
    U32[++offset] = Utils.getTintAppendFloatAlpha(this.color, this.ta);
    return offset;
  }
});
module.exports = Vertex;

/***/ }),

/***/ 8864:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Geom.Mesh
 */
var Mesh = {
  Face: __webpack_require__(2307),
  GenerateGridVerts: __webpack_require__(7989),
  GenerateObjVerts: __webpack_require__(4382),
  GenerateVerts: __webpack_require__(1479),
  ParseObj: __webpack_require__(1971),
  ParseObjMaterial: __webpack_require__(5038),
  RotateFace: __webpack_require__(8931),
  Vertex: __webpack_require__(7748)
};
module.exports = Mesh;

/***/ }),

/***/ 3182:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Apply `Math.ceil()` to each coordinate of the given Point.
 *
 * @function Phaser.Geom.Point.Ceil
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [point,$return]
 *
 * @param {Phaser.Geom.Point} point - The Point to ceil.
 *
 * @return {Phaser.Geom.Point} The Point with `Math.ceil()` applied to its coordinates.
 */
var Ceil = function (point) {
  return point.setTo(Math.ceil(point.x), Math.ceil(point.y));
};

module.exports = Ceil;

/***/ }),

/***/ 239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Clone the given Point.
 *
 * @function Phaser.Geom.Point.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Point} source - The source Point to clone.
 *
 * @return {Phaser.Geom.Point} The cloned Point.
 */


var Clone = function (source) {
  return new Point(source.x, source.y);
};

module.exports = Clone;

/***/ }),

/***/ 1891:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Point to a destination Point.
 *
 * @function Phaser.Geom.Point.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [dest,$return]
 *
 * @param {Phaser.Geom.Point} source - The source Point to copy the values from.
 * @param {Phaser.Geom.Point} dest - The destination Point to copy the values to.
 *
 * @return {Phaser.Geom.Point} The destination Point.
 */
var CopyFrom = function (source, dest) {
  return dest.setTo(source.x, source.y);
};

module.exports = CopyFrom;

/***/ }),

/***/ 42:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * A comparison of two `Point` objects to see if they are equal.
 *
 * @function Phaser.Geom.Point.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Point} point - The original `Point` to compare against.
 * @param {Phaser.Geom.Point} toCompare - The second `Point` to compare.
 *
 * @return {boolean} Returns true if the both `Point` objects are equal.
 */
var Equals = function (point, toCompare) {
  return point.x === toCompare.x && point.y === toCompare.y;
};

module.exports = Equals;

/***/ }),

/***/ 5660:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Apply `Math.ceil()` to each coordinate of the given Point.
 *
 * @function Phaser.Geom.Point.Floor
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [point,$return]
 *
 * @param {Phaser.Geom.Point} point - The Point to floor.
 *
 * @return {Phaser.Geom.Point} The Point with `Math.floor()` applied to its coordinates.
 */
var Floor = function (point) {
  return point.setTo(Math.floor(point.x), Math.floor(point.y));
};

module.exports = Floor;

/***/ }),

/***/ 534:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1703);

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Get the centroid or geometric center of a plane figure (the arithmetic mean position of all the points in the figure).
 * Informally, it is the point at which a cutout of the shape could be perfectly balanced on the tip of a pin.
 *
 * @function Phaser.Geom.Point.GetCentroid
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Types.Math.Vector2Like[]} points - An array of Vector2Like objects to get the geometric center of.
 * @param {Phaser.Geom.Point} [out] - A Point object to store the output coordinates in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A Point object representing the geometric center of the given points.
 */


var GetCentroid = function (points, out) {
  if (out === undefined) {
    out = new Point();
  }

  if (!Array.isArray(points)) {
    throw new Error('GetCentroid points argument must be an array');
  }

  var len = points.length;

  if (len < 1) {
    throw new Error('GetCentroid points array must not be empty');
  } else if (len === 1) {
    out.x = points[0].x;
    out.y = points[0].y;
  } else {
    for (var i = 0; i < len; i++) {
      out.x += points[i].x;
      out.y += points[i].y;
    }

    out.x /= len;
    out.y /= len;
  }

  return out;
};

module.exports = GetCentroid;

/***/ }),

/***/ 333:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the magnitude of the point, which equivalent to the length of the line from the origin to this point.
 *
 * @function Phaser.Geom.Point.GetMagnitude
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Point} point - The point to calculate the magnitude for
 *
 * @return {number} The resulting magnitude
 */
var GetMagnitude = function (point) {
  return Math.sqrt(point.x * point.x + point.y * point.y);
};

module.exports = GetMagnitude;

/***/ }),

/***/ 3848:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the square of magnitude of given point.(Can be used for fast magnitude calculation of point)
 *
 * @function Phaser.Geom.Point.GetMagnitudeSq
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Point} point - Returns square of the magnitude/length of given point.
 *
 * @return {number} Returns square of the magnitude of given point.
 */
var GetMagnitudeSq = function (point) {
  return point.x * point.x + point.y * point.y;
};

module.exports = GetMagnitudeSq;

/***/ }),

/***/ 4184:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Calculates the Axis Aligned Bounding Box (or aabb) from an array of points.
 *
 * @function Phaser.Geom.Point.GetRectangleFromPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {Phaser.Types.Math.Vector2Like[]} points - An array of Vector2Like objects to get the AABB from.
 * @param {Phaser.Geom.Rectangle} [out] - A Rectangle object to store the results in. If not given, a new Rectangle instance is created.
 *
 * @return {Phaser.Geom.Rectangle} A Rectangle object holding the AABB values for the given points.
 */


var GetRectangleFromPoints = function (points, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  var xMax = Number.NEGATIVE_INFINITY;
  var xMin = Number.POSITIVE_INFINITY;
  var yMax = Number.NEGATIVE_INFINITY;
  var yMin = Number.POSITIVE_INFINITY;

  for (var i = 0; i < points.length; i++) {
    var point = points[i];

    if (point.x > xMax) {
      xMax = point.x;
    }

    if (point.x < xMin) {
      xMin = point.x;
    }

    if (point.y > yMax) {
      yMax = point.y;
    }

    if (point.y < yMin) {
      yMin = point.y;
    }
  }

  out.x = xMin;
  out.y = yMin;
  out.width = xMax - xMin;
  out.height = yMax - yMin;
  return out;
};

module.exports = GetRectangleFromPoints;

/***/ }),

/***/ 7080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns the linear interpolation point between the two given points, based on `t`.
 *
 * @function Phaser.Geom.Point.Interpolate
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Point} pointA - The starting `Point` for the interpolation.
 * @param {Phaser.Geom.Point} pointB - The target `Point` for the interpolation.
 * @param {number} [t=0] - The amount to interpolate between the two points. Generally, a value between 0 (returns the starting `Point`) and 1 (returns the target `Point`). If omitted, 0 is used.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional `Point` object whose `x` and `y` values will be set to the result of the interpolation (can also be any object with `x` and `y` properties). If omitted, a new `Point` created and returned.
 *
 * @return {(Phaser.Geom.Point|object)} Either the object from the `out` argument with the properties `x` and `y` set to the result of the interpolation or a newly created `Point` object.
 */


var Interpolate = function (pointA, pointB, t, out) {
  if (t === undefined) {
    t = 0;
  }

  if (out === undefined) {
    out = new Point();
  }

  out.x = pointA.x + (pointB.x - pointA.x) * t;
  out.y = pointA.y + (pointB.y - pointA.y) * t;
  return out;
};

module.exports = Interpolate;

/***/ }),

/***/ 5890:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Swaps the X and the Y coordinate of a point.
 *
 * @function Phaser.Geom.Point.Invert
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [point,$return]
 *
 * @param {Phaser.Geom.Point} point - The Point to modify.
 *
 * @return {Phaser.Geom.Point} The modified `point`.
 */
var Invert = function (point) {
  return point.setTo(point.y, point.x);
};

module.exports = Invert;

/***/ }),

/***/ 139:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Inverts a Point's coordinates.
 *
 * @function Phaser.Geom.Point.Negative
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Point} point - The Point to invert.
 * @param {Phaser.Geom.Point} [out] - The Point to return the inverted coordinates in.
 *
 * @return {Phaser.Geom.Point} The modified `out` Point, or a new Point if none was provided.
 */


var Negative = function (point, out) {
  if (out === undefined) {
    out = new Point();
  }

  return out.setTo(-point.x, -point.y);
};

module.exports = Negative;

/***/ }),

/***/ 9106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var GEOM_CONST = __webpack_require__(9277);
/**
 * @classdesc
 * Defines a Point in 2D space, with an x and y component.
 *
 * @class Point
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The x coordinate of this Point.
 * @param {number} [y=x] - The y coordinate of this Point.
 */


var Point = new Class({
  initialize: function Point(x, y) {
    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = x;
    }
    /**
     * The geometry constant type of this object: `GEOM_CONST.POINT`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Point#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */


    this.type = GEOM_CONST.POINT;
    /**
     * The x coordinate of this Point.
     *
     * @name Phaser.Geom.Point#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x = x;
    /**
     * The y coordinate of this Point.
     *
     * @name Phaser.Geom.Point#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = y;
  },

  /**
   * Set the x and y coordinates of the point to the given values.
   *
   * @method Phaser.Geom.Point#setTo
   * @since 3.0.0
   *
   * @param {number} [x=0] - The x coordinate of this Point.
   * @param {number} [y=x] - The y coordinate of this Point.
   *
   * @return {this} This Point object.
   */
  setTo: function (x, y) {
    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = x;
    }

    this.x = x;
    this.y = y;
    return this;
  }
});
module.exports = Point;

/***/ }),

/***/ 2389:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var GetMagnitudeSq = __webpack_require__(3848);
/**
 * Calculates the vector projection of `pointA` onto the nonzero `pointB`. This is the
 * orthogonal projection of `pointA` onto a straight line parallel to `pointB`.
 *
 * @function Phaser.Geom.Point.Project
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Point} pointA - Point A, to be projected onto Point B.
 * @param {Phaser.Geom.Point} pointB - Point B, to have Point A projected upon it.
 * @param {Phaser.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A Point object holding the coordinates of the vector projection of `pointA` onto `pointB`.
 */


var Project = function (pointA, pointB, out) {
  if (out === undefined) {
    out = new Point();
  }

  var dot = pointA.x * pointB.x + pointA.y * pointB.y;
  var amt = dot / GetMagnitudeSq(pointB);

  if (amt !== 0) {
    out.x = amt * pointB.x;
    out.y = amt * pointB.y;
  }

  return out;
};

module.exports = Project;

/***/ }),

/***/ 1045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Calculates the vector projection of `pointA` onto the nonzero `pointB`. This is the
 * orthogonal projection of `pointA` onto a straight line paralle to `pointB`.
 *
 * @function Phaser.Geom.Point.ProjectUnit
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Point} pointA - Point A, to be projected onto Point B. Must be a normalized point with a magnitude of 1.
 * @param {Phaser.Geom.Point} pointB - Point B, to have Point A projected upon it.
 * @param {Phaser.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A unit Point object holding the coordinates of the vector projection of `pointA` onto `pointB`.
 */


var ProjectUnit = function (pointA, pointB, out) {
  if (out === undefined) {
    out = new Point();
  }

  var amt = pointA.x * pointB.x + pointA.y * pointB.y;

  if (amt !== 0) {
    out.x = amt * pointB.x;
    out.y = amt * pointB.y;
  }

  return out;
};

module.exports = ProjectUnit;

/***/ }),

/***/ 7222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetMagnitude = __webpack_require__(333);
/**
 * Changes the magnitude (length) of a two-dimensional vector without changing its direction.
 *
 * @function Phaser.Geom.Point.SetMagnitude
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [point,$return]
 *
 * @param {Phaser.Geom.Point} point - The Point to treat as the end point of the vector.
 * @param {number} magnitude - The new magnitude of the vector.
 *
 * @return {Phaser.Geom.Point} The modified Point.
 */


var SetMagnitude = function (point, magnitude) {
  if (point.x !== 0 || point.y !== 0) {
    var m = GetMagnitude(point);
    point.x /= m;
    point.y /= m;
  }

  point.x *= magnitude;
  point.y *= magnitude;
  return point;
};

module.exports = SetMagnitude;

/***/ }),

/***/ 7866:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

Point.Ceil = __webpack_require__(3182);
Point.Clone = __webpack_require__(239);
Point.CopyFrom = __webpack_require__(1891);
Point.Equals = __webpack_require__(42);
Point.Floor = __webpack_require__(5660);
Point.GetCentroid = __webpack_require__(534);
Point.GetMagnitude = __webpack_require__(333);
Point.GetMagnitudeSq = __webpack_require__(3848);
Point.GetRectangleFromPoints = __webpack_require__(4184);
Point.Interpolate = __webpack_require__(7080);
Point.Invert = __webpack_require__(5890);
Point.Negative = __webpack_require__(139);
Point.Project = __webpack_require__(2389);
Point.ProjectUnit = __webpack_require__(1045);
Point.SetMagnitude = __webpack_require__(7222);
module.exports = Point;

/***/ }),

/***/ 9966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Polygon = __webpack_require__(3707);
/**
 * Create a new polygon which is a copy of the specified polygon
 *
 * @function Phaser.Geom.Polygon.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Polygon} polygon - The polygon to create a clone of
 *
 * @return {Phaser.Geom.Polygon} A new separate Polygon cloned from the specified polygon, based on the same points.
 */


var Clone = function (polygon) {
  return new Polygon(polygon.points);
};

module.exports = Clone;

/***/ }),

/***/ 1210:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
// Checks whether the x and y coordinates are contained within this polygon.
//  Adapted from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html by Jonas Raoni Soares Silva

/**
 * Checks if a point is within the bounds of a Polygon.
 *
 * @function Phaser.Geom.Polygon.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to check against.
 * @param {number} x - The X coordinate of the point to check.
 * @param {number} y - The Y coordinate of the point to check.
 *
 * @return {boolean} `true` if the point is within the bounds of the Polygon, otherwise `false`.
 */
var Contains = function (polygon, x, y) {
  var inside = false;

  for (var i = -1, j = polygon.points.length - 1; ++i < polygon.points.length; j = i) {
    var ix = polygon.points[i].x;
    var iy = polygon.points[i].y;
    var jx = polygon.points[j].x;
    var jy = polygon.points[j].y;

    if ((iy <= y && y < jy || jy <= y && y < iy) && x < (jx - ix) * (y - iy) / (jy - iy) + ix) {
      inside = !inside;
    }
  }

  return inside;
};

module.exports = Contains;

/***/ }),

/***/ 4990:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(1210);
/**
 * Checks the given Point again the Polygon to see if the Point lays within its vertices.
 *
 * @function Phaser.Geom.Polygon.ContainsPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to check.
 * @param {Phaser.Geom.Point} point - The Point to check if it's within the Polygon.
 *
 * @return {boolean} `true` if the Point is within the Polygon, otherwise `false`.
 */


var ContainsPoint = function (polygon, point) {
  return Contains(polygon, point.x, point.y);
};

module.exports = ContainsPoint;

/***/ }),

/***/ 5084:
/***/ (function(module) {

"use strict";
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * This module implements a modified ear slicing algorithm, optimized by z-order curve hashing and extended to
 * handle holes, twisted polygons, degeneracies and self-intersections in a way that doesn't guarantee correctness
 * of triangulation, but attempts to always produce acceptable results for practical data.
 *
 * Example:
 *
 * ```javascript
 * const triangles = Phaser.Geom.Polygon.Earcut([10,0, 0,50, 60,60, 70,10]); // returns [1,0,3, 3,2,1]
 * ```
 *
 * Each group of three vertex indices in the resulting array forms a triangle.
 *
 * ```javascript
 * // triangulating a polygon with a hole
 * earcut([0,0, 100,0, 100,100, 0,100,  20,20, 80,20, 80,80, 20,80], [4]);
 * // [3,0,4, 5,4,0, 3,4,7, 5,0,1, 2,3,7, 6,5,1, 2,7,6, 6,1,2]
 *
 * // triangulating a polygon with 3d coords
 * earcut([10,0,1, 0,50,2, 60,60,3, 70,10,4], null, 3);
 * // [1,0,3, 3,2,1]
 * ```
 *
 * If you pass a single vertex as a hole, Earcut treats it as a Steiner point.
 *
 * If your input is a multi-dimensional array (e.g. GeoJSON Polygon), you can convert it to the format
 * expected by Earcut with `Phaser.Geom.Polygon.Earcut.flatten`:
 *
 * ```javascript
 * var data = earcut.flatten(geojson.geometry.coordinates);
 * var triangles = earcut(data.vertices, data.holes, data.dimensions);
 * ```
 *
 * After getting a triangulation, you can verify its correctness with `Phaser.Geom.Polygon.Earcut.deviation`:
 *
 * ```javascript
 * var deviation = earcut.deviation(vertices, holes, dimensions, triangles);
 * ```
 * Returns the relative difference between the total area of triangles and the area of the input polygon.
 * 0 means the triangulation is fully correct.
 *
 * For more information see https://github.com/mapbox/earcut
 *
 * @function Phaser.Geom.Polygon.Earcut
 * @since 3.50.0
 *
 * @param {number[]} data - A flat array of vertex coordinate, like [x0,y0, x1,y1, x2,y2, ...]
 * @param {number[]} [holeIndices] - An array of hole indices if any (e.g. [5, 8] for a 12-vertex input would mean one hole with vertices 5–7 and another with 8–11).
 * @param {number} [dimensions=2] - The number of coordinates per vertex in the input array (2 by default).
 *
 * @return {number[]} An array of triangulated data.
 */
//  Earcut 2.2.2 (January 21st 2020)

/*
 * ISC License
 *
 * Copyright (c) 2016, Mapbox
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright notice
 * and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
 * OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
 * THIS SOFTWARE.
 */


function earcut(data, holeIndices, dim) {
  dim = dim || 2;
  var hasHoles = holeIndices && holeIndices.length,
      outerLen = hasHoles ? holeIndices[0] * dim : data.length,
      outerNode = linkedList(data, 0, outerLen, dim, true),
      triangles = [];
  if (!outerNode || outerNode.next === outerNode.prev) return triangles;
  var minX, minY, maxX, maxY, x, y, invSize;
  if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim); // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox

  if (data.length > 80 * dim) {
    minX = maxX = data[0];
    minY = maxY = data[1];

    for (var i = dim; i < outerLen; i += dim) {
      x = data[i];
      y = data[i + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    } // minX, minY and invSize are later used to transform coords into integers for z-order calculation


    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 1 / invSize : 0;
  }

  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
  return triangles;
} // create a circular doubly linked list from polygon points in the specified winding order


function linkedList(data, start, end, dim, clockwise) {
  var i, last;

  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
  }

  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }

  return last;
} // eliminate colinear or duplicate points


function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;
  var p = start,
      again;

  do {
    again = false;

    if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next) break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);

  return end;
} // main ear slicing loop which triangulates a polygon (given as a linked list)


function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return; // interlink polygon nodes in z-order

  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
  var stop = ear,
      prev,
      next; // iterate through ears, slicing them one by one

  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;

    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      // cut off the triangle
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);
      removeNode(ear); // skipping the next vertex leads to less sliver triangles

      ear = next.next;
      stop = next.next;
      continue;
    }

    ear = next; // if we looped through the whole remaining polygon and can't find any more ears

    if (ear === stop) {
      // try filtering points and slicing again
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1); // if this didn't work, try curing all small self-intersections locally
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2); // as a last resort, try splitting the remaining polygon into two
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }

      break;
    }
  }
} // check whether a polygon node forms a valid ear with adjacent nodes


function isEar(ear) {
  var a = ear.prev,
      b = ear,
      c = ear.next;
  if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
  // now make sure we don't have other points inside the potential ear

  var p = ear.next.next;

  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }

  return true;
}

function isEarHashed(ear, minX, minY, invSize) {
  var a = ear.prev,
      b = ear,
      c = ear.next;
  if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
  // triangle bbox; min & max are calculated like this for speed

  var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
      minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
      maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
      maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y; // z-order range for the current triangle bbox;

  var minZ = zOrder(minTX, minTY, minX, minY, invSize),
      maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  var p = ear.prevZ,
      n = ear.nextZ; // look for points inside the triangle in both directions

  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  } // look for remaining points in decreasing z-order


  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
  } // look for remaining points in increasing z-order


  while (n && n.z <= maxZ) {
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }

  return true;
} // go through all polygon nodes and cure small local self-intersections


function cureLocalIntersections(start, triangles, dim) {
  var p = start;

  do {
    var a = p.prev,
        b = p.next.next;

    if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim); // remove two nodes involved

      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }

    p = p.next;
  } while (p !== start);

  return filterPoints(p);
} // try splitting polygon into two and triangulate them independently


function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  // look for a valid diagonal that divides the polygon into two
  var a = start;

  do {
    var b = a.next.next;

    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        // split the polygon in two by the diagonal
        var c = splitPolygon(a, b); // filter colinear points around the cuts

        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next); // run earcut on each half

        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }

      b = b.next;
    }

    a = a.next;
  } while (a !== start);
} // link every hole into the outer loop, producing a single-ring polygon without holes


function eliminateHoles(data, holeIndices, outerNode, dim) {
  var queue = [],
      i,
      len,
      start,
      end,
      list;

  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
    list = linkedList(data, start, end, dim, false);
    if (list === list.next) list.steiner = true;
    queue.push(getLeftmost(list));
  }

  queue.sort(compareX); // process holes from left to right

  for (i = 0; i < queue.length; i++) {
    eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }

  return outerNode;
}

function compareX(a, b) {
  return a.x - b.x;
} // find a bridge between vertices that connects hole with an outer ring and and link it


function eliminateHole(hole, outerNode) {
  outerNode = findHoleBridge(hole, outerNode);

  if (outerNode) {
    var b = splitPolygon(outerNode, hole); // filter collinear points around the cuts

    filterPoints(outerNode, outerNode.next);
    filterPoints(b, b.next);
  }
} // David Eberly's algorithm for finding a bridge between hole and outer polygon


function findHoleBridge(hole, outerNode) {
  var p = outerNode,
      hx = hole.x,
      hy = hole.y,
      qx = -Infinity,
      m; // find a segment intersected by a ray from the hole's leftmost point to the left;
  // segment's endpoint with lesser x will be potential connection point

  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);

      if (x <= hx && x > qx) {
        qx = x;

        if (x === hx) {
          if (hy === p.y) return p;
          if (hy === p.next.y) return p.next;
        }

        m = p.x < p.next.x ? p : p.next;
      }
    }

    p = p.next;
  } while (p !== outerNode);

  if (!m) return null;
  if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint
  // look for points inside the triangle of hole point, segment intersection and endpoint;
  // if there are no points found, we have a valid connection;
  // otherwise choose the point of the minimum angle with the ray as connection point

  var stop = m,
      mx = m.x,
      my = m.y,
      tanMin = Infinity,
      tan;
  p = m;

  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

      if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan;
      }
    }

    p = p.next;
  } while (p !== stop);

  return m;
} // whether sector in vertex m contains sector in vertex p in the same coordinates


function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
} // interlink polygon nodes in z-order


function indexCurve(start, minX, minY, invSize) {
  var p = start;

  do {
    if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);

  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
} // Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html


function sortLinked(list) {
  var i,
      p,
      q,
      e,
      tail,
      numMerges,
      pSize,
      qSize,
      inSize = 1;

  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;

    while (p) {
      numMerges++;
      q = p;
      pSize = 0;

      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q) break;
      }

      qSize = inSize;

      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }

        if (tail) tail.nextZ = e;else list = e;
        e.prevZ = tail;
        tail = e;
      }

      p = q;
    }

    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);

  return list;
} // z-order of a point given coords and inverse of the longer side of data bbox


function zOrder(x, y, minX, minY, invSize) {
  // coords are transformed into non-negative 15-bit integer range
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;
  x = (x | x << 8) & 0x00FF00FF;
  x = (x | x << 4) & 0x0F0F0F0F;
  x = (x | x << 2) & 0x33333333;
  x = (x | x << 1) & 0x55555555;
  y = (y | y << 8) & 0x00FF00FF;
  y = (y | y << 4) & 0x0F0F0F0F;
  y = (y | y << 2) & 0x33333333;
  y = (y | y << 1) & 0x55555555;
  return x | y << 1;
} // find the leftmost node of a polygon ring


function getLeftmost(start) {
  var p = start,
      leftmost = start;

  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
    p = p.next;
  } while (p !== start);

  return leftmost;
} // check if a point lies within a convex triangle


function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
} // check if a diagonal between two polygon nodes is valid (lies in polygon interior)


function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && ( // dones't intersect other edges
  locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && ( // locally visible
  area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
  equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
} // signed area of a triangle


function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
} // check if two points are equal


function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
} // check if two segments intersect


function intersects(p1, q1, p2, q2) {
  var o1 = sign(area(p1, q1, p2));
  var o2 = sign(area(p1, q1, q2));
  var o3 = sign(area(p2, q2, p1));
  var o4 = sign(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4) return true; // general case

  if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1

  if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1

  if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2

  if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

  return false;
} // for collinear points p, q, r, check if point q lies on segment pr


function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
} // check if a polygon diagonal intersects any polygon segments


function intersectsPolygon(a, b) {
  var p = a;

  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
    p = p.next;
  } while (p !== a);

  return false;
} // check if a polygon diagonal is locally inside the polygon


function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
} // check if the middle point of a polygon diagonal is inside the polygon


function middleInside(a, b) {
  var p = a,
      inside = false,
      px = (a.x + b.x) / 2,
      py = (a.y + b.y) / 2;

  do {
    if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
    p = p.next;
  } while (p !== a);

  return inside;
} // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring


function splitPolygon(a, b) {
  var a2 = new Node(a.i, a.x, a.y),
      b2 = new Node(b.i, b.x, b.y),
      an = a.next,
      bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
} // create a node and optionally link it with previous one (in a circular doubly linked list)


function insertNode(i, x, y, last) {
  var p = new Node(i, x, y);

  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }

  return p;
}

function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ) p.prevZ.nextZ = p.nextZ;
  if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
  // vertex index in coordinates array
  this.i = i; // vertex coordinates

  this.x = x;
  this.y = y; // previous and next vertex nodes in a polygon ring

  this.prev = null;
  this.next = null; // z-order curve value

  this.z = null; // previous and next nodes in z-order

  this.prevZ = null;
  this.nextZ = null; // indicates whether this is a steiner point

  this.steiner = false;
} // return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation


earcut.deviation = function (data, holeIndices, dim, triangles) {
  var hasHoles = holeIndices && holeIndices.length;
  var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
  var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));

  if (hasHoles) {
    for (var i = 0, len = holeIndices.length; i < len; i++) {
      var start = holeIndices[i] * dim;
      var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
      polygonArea -= Math.abs(signedArea(data, start, end, dim));
    }
  }

  var trianglesArea = 0;

  for (i = 0; i < triangles.length; i += 3) {
    var a = triangles[i] * dim;
    var b = triangles[i + 1] * dim;
    var c = triangles[i + 2] * dim;
    trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
  }

  return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
  var sum = 0;

  for (var i = start, j = end - dim; i < end; i += dim) {
    sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
    j = i;
  }

  return sum;
} // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts


earcut.flatten = function (data) {
  var dim = data[0][0].length,
      result = {
    vertices: [],
    holes: [],
    dimensions: dim
  },
      holeIndex = 0;

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
    }

    if (i > 0) {
      holeIndex += data[i - 1].length;
      result.holes.push(holeIndex);
    }
  }

  return result;
};

module.exports = earcut;

/***/ }),

/***/ 2136:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Calculates the bounding AABB rectangle of a polygon.
 *
 * @function Phaser.Geom.Polygon.GetAABB
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The polygon that should be calculated.
 * @param {(Phaser.Geom.Rectangle|object)} [out] - The rectangle or object that has x, y, width, and height properties to store the result. Optional.
 *
 * @return {(Phaser.Geom.Rectangle|object)} The resulting rectangle or object that is passed in with position and dimensions of the polygon's AABB.
 */


var GetAABB = function (polygon, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  var minX = Infinity;
  var minY = Infinity;
  var maxX = -minX;
  var maxY = -minY;
  var p;

  for (var i = 0; i < polygon.points.length; i++) {
    p = polygon.points[i];
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }

  out.x = minX;
  out.y = minY;
  out.width = maxX - minX;
  out.height = maxY - minY;
  return out;
};

module.exports = GetAABB;

/***/ }),

/***/ 8976:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
// Export the points as an array of flat numbers, following the sequence [ x,y, x,y, x,y ]

/**
 * Stores all of the points of a Polygon into a flat array of numbers following the sequence [ x,y, x,y, x,y ],
 * i.e. each point of the Polygon, in the order it's defined, corresponds to two elements of the resultant
 * array for the point's X and Y coordinate.
 *
 * @function Phaser.Geom.Polygon.GetNumberArray
 * @since 3.0.0
 *
 * @generic {number[]} O - [output,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon whose points to export.
 * @param {(array|number[])} [output] - An array to which the points' coordinates should be appended.
 *
 * @return {(array|number[])} The modified `output` array, or a new array if none was given.
 */
var GetNumberArray = function (polygon, output) {
  if (output === undefined) {
    output = [];
  }

  for (var i = 0; i < polygon.points.length; i++) {
    output.push(polygon.points[i].x);
    output.push(polygon.points[i].y);
  }

  return output;
};

module.exports = GetNumberArray;

/***/ }),

/***/ 5141:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Length = __webpack_require__(6753);

var Line = __webpack_require__(9778);

var Perimeter = __webpack_require__(2510);
/**
 * Returns an array of Point objects containing the coordinates of the points around the perimeter of the Polygon,
 * based on the given quantity or stepRate values.
 *
 * @function Phaser.Geom.Polygon.GetPoints
 * @since 3.12.0
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to get the points from.
 * @param {number} quantity - The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
 * @param {number} [stepRate] - Sets the quantity by getting the perimeter of the Polygon and dividing it by the stepRate.
 * @param {array} [output] - An array to insert the points in to. If not provided a new array will be created.
 *
 * @return {Phaser.Geom.Point[]} An array of Point objects pertaining to the points around the perimeter of the Polygon.
 */


var GetPoints = function (polygon, quantity, stepRate, out) {
  if (out === undefined) {
    out = [];
  }

  var points = polygon.points;
  var perimeter = Perimeter(polygon); //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.

  if (!quantity && stepRate > 0) {
    quantity = perimeter / stepRate;
  }

  for (var i = 0; i < quantity; i++) {
    var position = perimeter * (i / quantity);
    var accumulatedPerimeter = 0;

    for (var j = 0; j < points.length; j++) {
      var pointA = points[j];
      var pointB = points[(j + 1) % points.length];
      var line = new Line(pointA.x, pointA.y, pointB.x, pointB.y);
      var length = Length(line);

      if (position < accumulatedPerimeter || position > accumulatedPerimeter + length) {
        accumulatedPerimeter += length;
        continue;
      }

      var point = line.getPoint((position - accumulatedPerimeter) / length);
      out.push(point);
      break;
    }
  }

  return out;
};

module.exports = GetPoints;

/***/ }),

/***/ 2510:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Length = __webpack_require__(6753);

var Line = __webpack_require__(9778);
/**
 * Returns the perimeter of the given Polygon.
 *
 * @function Phaser.Geom.Polygon.Perimeter
 * @since 3.12.0
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to get the perimeter of.
 *
 * @return {number} The perimeter of the Polygon.
 */


var Perimeter = function (polygon) {
  var points = polygon.points;
  var perimeter = 0;

  for (var i = 0; i < points.length; i++) {
    var pointA = points[i];
    var pointB = points[(i + 1) % points.length];
    var line = new Line(pointA.x, pointA.y, pointB.x, pointB.y);
    perimeter += Length(line);
  }

  return perimeter;
};

module.exports = Perimeter;

/***/ }),

/***/ 3707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Contains = __webpack_require__(1210);

var GetPoints = __webpack_require__(5141);

var GEOM_CONST = __webpack_require__(9277);
/**
 * @classdesc
 * A Polygon object
 *
 * The polygon is a closed shape consists of a series of connected straight lines defined by list of ordered points.
 * Several formats are supported to define the list of points, check the setTo method for details.
 * This is a geometry object allowing you to define and inspect the shape.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render a Polygon you should look at the capabilities of the Graphics class.
 *
 * @class Polygon
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {(string|number[]|Phaser.Types.Math.Vector2Like[])} [points] - List of points defining the perimeter of this Polygon. Several formats are supported:
 * - A string containing paired x y values separated by a single space: `'40 0 40 20 100 20 100 80 40 80 40 100 0 50'`
 * - An array of Point objects: `[new Phaser.Point(x1, y1), ...]`
 * - An array of objects with public x y properties: `[obj1, obj2, ...]`
 * - An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`
 * - An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x2, y2], ...]`
 */


var Polygon = new Class({
  initialize: function Polygon(points) {
    /**
     * The geometry constant type of this object: `GEOM_CONST.POLYGON`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Polygon#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */
    this.type = GEOM_CONST.POLYGON;
    /**
     * The area of this Polygon.
     *
     * @name Phaser.Geom.Polygon#area
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.area = 0;
    /**
     * An array of number pair objects that make up this polygon. I.e. [ {x,y}, {x,y}, {x,y} ]
     *
     * @name Phaser.Geom.Polygon#points
     * @type {Phaser.Geom.Point[]}
     * @since 3.0.0
     */

    this.points = [];

    if (points) {
      this.setTo(points);
    }
  },

  /**
   * Check to see if the Polygon contains the given x / y coordinates.
   *
   * @method Phaser.Geom.Polygon#contains
   * @since 3.0.0
   *
   * @param {number} x - The x coordinate to check within the polygon.
   * @param {number} y - The y coordinate to check within the polygon.
   *
   * @return {boolean} `true` if the coordinates are within the polygon, otherwise `false`.
   */
  contains: function (x, y) {
    return Contains(this, x, y);
  },

  /**
   * Sets this Polygon to the given points.
   *
   * The points can be set from a variety of formats:
   *
   * - A string containing paired values separated by a single space: `'40 0 40 20 100 20 100 80 40 80 40 100 0 50'`
   * - An array of Point objects: `[new Phaser.Point(x1, y1), ...]`
   * - An array of objects with public x/y properties: `[obj1, obj2, ...]`
   * - An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`
   * - An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x2, y2], ...]`
   *
   * `setTo` may also be called without any arguments to remove all points.
   *
   * @method Phaser.Geom.Polygon#setTo
   * @since 3.0.0
   *
   * @param {(string|number[]|Phaser.Types.Math.Vector2Like[])} [points] - Points defining the perimeter of this polygon. Please check function description above for the different supported formats.
   *
   * @return {this} This Polygon object.
   */
  setTo: function (points) {
    this.area = 0;
    this.points = [];

    if (typeof points === 'string') {
      points = points.split(' ');
    }

    if (!Array.isArray(points)) {
      return this;
    }

    var p;
    var y0 = Number.MAX_VALUE; //  The points argument is an array, so iterate through it

    for (var i = 0; i < points.length; i++) {
      p = {
        x: 0,
        y: 0
      };

      if (typeof points[i] === 'number' || typeof points[i] === 'string') {
        p.x = parseFloat(points[i]);
        p.y = parseFloat(points[i + 1]);
        i++;
      } else if (Array.isArray(points[i])) {
        //  An array of arrays?
        p.x = points[i][0];
        p.y = points[i][1];
      } else {
        p.x = points[i].x;
        p.y = points[i].y;
      }

      this.points.push(p); //  Lowest boundary

      if (p.y < y0) {
        y0 = p.y;
      }
    }

    this.calculateArea(y0);
    return this;
  },

  /**
   * Calculates the area of the Polygon. This is available in the property Polygon.area
   *
   * @method Phaser.Geom.Polygon#calculateArea
   * @since 3.0.0
   *
   * @return {number} The area of the polygon.
   */
  calculateArea: function () {
    if (this.points.length < 3) {
      this.area = 0;
      return this.area;
    }

    var sum = 0;
    var p1;
    var p2;

    for (var i = 0; i < this.points.length - 1; i++) {
      p1 = this.points[i];
      p2 = this.points[i + 1];
      sum += (p2.x - p1.x) * (p1.y + p2.y);
    }

    p1 = this.points[0];
    p2 = this.points[this.points.length - 1];
    sum += (p1.x - p2.x) * (p2.y + p1.y);
    this.area = -sum * 0.5;
    return this.area;
  },

  /**
   * Returns an array of Point objects containing the coordinates of the points around the perimeter of the Polygon,
   * based on the given quantity or stepRate values.
   *
   * @method Phaser.Geom.Polygon#getPoints
   * @since 3.12.0
   *
   * @generic {Phaser.Geom.Point[]} O - [output,$return]
   *
   * @param {number} quantity - The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
   * @param {number} [stepRate] - Sets the quantity by getting the perimeter of the Polygon and dividing it by the stepRate.
   * @param {(array|Phaser.Geom.Point[])} [output] - An array to insert the points in to. If not provided a new array will be created.
   *
   * @return {(array|Phaser.Geom.Point[])} An array of Point objects pertaining to the points around the perimeter of the Polygon.
   */
  getPoints: function (quantity, step, output) {
    return GetPoints(this, quantity, step, output);
  }
});
module.exports = Polygon;

/***/ }),

/***/ 4560:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Reverses the order of the points of a Polygon.
 *
 * @function Phaser.Geom.Polygon.Reverse
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to modify.
 *
 * @return {Phaser.Geom.Polygon} The modified Polygon.
 */
var Reverse = function (polygon) {
  polygon.points.reverse();
  return polygon;
};

module.exports = Reverse;

/***/ }),

/***/ 882:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Vladimir Agafonkin
 * @see          Based on Simplify.js mourner.github.io/simplify-js
 */

/**
 * Copyright (c) 2017, Vladimir Agafonkin
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 * TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @ignore
 */
function getSqDist(p1, p2) {
  var dx = p1.x - p2.x,
      dy = p1.y - p2.y;
  return dx * dx + dy * dy;
}
/**
 * Square distance from a point to a segment
 *
 * @ignore
 */


function getSqSegDist(p, p1, p2) {
  var x = p1.x,
      y = p1.y,
      dx = p2.x - x,
      dy = p2.y - y;

  if (dx !== 0 || dy !== 0) {
    var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);

    if (t > 1) {
      x = p2.x;
      y = p2.y;
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }

  dx = p.x - x;
  dy = p.y - y;
  return dx * dx + dy * dy;
}
/**
 * Basic distance-based simplification
 *
 * @ignore
 */


function simplifyRadialDist(points, sqTolerance) {
  var prevPoint = points[0],
      newPoints = [prevPoint],
      point;

  for (var i = 1, len = points.length; i < len; i++) {
    point = points[i];

    if (getSqDist(point, prevPoint) > sqTolerance) {
      newPoints.push(point);
      prevPoint = point;
    }
  }

  if (prevPoint !== point) {
    newPoints.push(point);
  }

  return newPoints;
}
/**
 * @ignore
 */


function simplifyDPStep(points, first, last, sqTolerance, simplified) {
  var maxSqDist = sqTolerance,
      index;

  for (var i = first + 1; i < last; i++) {
    var sqDist = getSqSegDist(points[i], points[first], points[last]);

    if (sqDist > maxSqDist) {
      index = i;
      maxSqDist = sqDist;
    }
  }

  if (maxSqDist > sqTolerance) {
    if (index - first > 1) {
      simplifyDPStep(points, first, index, sqTolerance, simplified);
    }

    simplified.push(points[index]);

    if (last - index > 1) {
      simplifyDPStep(points, index, last, sqTolerance, simplified);
    }
  }
}
/**
 * Simplification using Ramer-Douglas-Peucker algorithm
 *
 * @ignore
 */


function simplifyDouglasPeucker(points, sqTolerance) {
  var last = points.length - 1;
  var simplified = [points[0]];
  simplifyDPStep(points, 0, last, sqTolerance, simplified);
  simplified.push(points[last]);
  return simplified;
}
/**
 * Takes a Polygon object and simplifies the points by running them through a combination of
 * Douglas-Peucker and Radial Distance algorithms. Simplification dramatically reduces the number of
 * points in a polygon while retaining its shape, giving a huge performance boost when processing
 * it and also reducing visual noise.
 *
 * @function Phaser.Geom.Polygon.Simplify
 * @since 3.50.0
 *
 * @generic {Phaser.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The polygon to be simplified. The polygon will be modified in-place and returned.
 * @param {number} [tolerance=1] - Affects the amount of simplification (in the same metric as the point coordinates).
 * @param {boolean} [highestQuality=false] - Excludes distance-based preprocessing step which leads to highest quality simplification but runs ~10-20 times slower.
 *
 * @return {Phaser.Geom.Polygon} The input polygon.
 */


var Simplify = function (polygon, tolerance, highestQuality) {
  if (tolerance === undefined) {
    tolerance = 1;
  }

  if (highestQuality === undefined) {
    highestQuality = false;
  }

  var points = polygon.points;

  if (points.length > 2) {
    var sqTolerance = tolerance * tolerance;

    if (!highestQuality) {
      points = simplifyRadialDist(points, sqTolerance);
    }

    polygon.setTo(simplifyDouglasPeucker(points, sqTolerance));
  }

  return polygon;
};

module.exports = Simplify;

/***/ }),

/***/ 9213:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @ignore
 */
var copy = function (out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
};
/**
 * Takes a Polygon object and applies Chaikin's smoothing algorithm on its points.
 *
 * @function Phaser.Geom.Polygon.Smooth
 * @since 3.13.0
 *
 * @generic {Phaser.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The polygon to be smoothed. The polygon will be modified in-place and returned.
 *
 * @return {Phaser.Geom.Polygon} The input polygon.
 */


var Smooth = function (polygon) {
  var i;
  var points = [];
  var data = polygon.points;

  for (i = 0; i < data.length; i++) {
    points.push([data[i].x, data[i].y]);
  }

  var output = [];

  if (points.length > 0) {
    output.push(copy([0, 0], points[0]));
  }

  for (i = 0; i < points.length - 1; i++) {
    var p0 = points[i];
    var p1 = points[i + 1];
    var p0x = p0[0];
    var p0y = p0[1];
    var p1x = p1[0];
    var p1y = p1[1];
    output.push([0.85 * p0x + 0.15 * p1x, 0.85 * p0y + 0.15 * p1y]);
    output.push([0.15 * p0x + 0.85 * p1x, 0.15 * p0y + 0.85 * p1y]);
  }

  if (points.length > 1) {
    output.push(copy([0, 0], points[points.length - 1]));
  }

  return polygon.setTo(output);
};

module.exports = Smooth;

/***/ }),

/***/ 9882:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Tranlates the points of the given Polygon.
 *
 * @function Phaser.Geom.Polygon.Translate
 * @since 3.50.0
 *
 * @generic {Phaser.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to modify.
 * @param {number} x - The amount to horizontally translate the points by.
 * @param {number} y - The amount to vertically translate the points by.
 *
 * @return {Phaser.Geom.Polygon} The modified Polygon.
 */
var Translate = function (polygon, x, y) {
  var points = polygon.points;

  for (var i = 0; i < points.length; i++) {
    points[i].x += x;
    points[i].y += y;
  }

  return polygon;
};

module.exports = Translate;

/***/ }),

/***/ 5147:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Polygon = __webpack_require__(3707);

Polygon.Clone = __webpack_require__(9966);
Polygon.Contains = __webpack_require__(1210);
Polygon.ContainsPoint = __webpack_require__(4990);
Polygon.Earcut = __webpack_require__(5084);
Polygon.GetAABB = __webpack_require__(2136);
Polygon.GetNumberArray = __webpack_require__(8976);
Polygon.GetPoints = __webpack_require__(5141);
Polygon.Perimeter = __webpack_require__(2510);
Polygon.Reverse = __webpack_require__(4560);
Polygon.Simplify = __webpack_require__(882);
Polygon.Smooth = __webpack_require__(9213);
Polygon.Translate = __webpack_require__(9882);
module.exports = Polygon;

/***/ }),

/***/ 4038:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the area of the given Rectangle object.
 *
 * @function Phaser.Geom.Rectangle.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to calculate the area of.
 *
 * @return {number} The area of the Rectangle object.
 */
var Area = function (rect) {
  return rect.width * rect.height;
};

module.exports = Area;

/***/ }),

/***/ 6829:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
 *
 * @function Phaser.Geom.Rectangle.Ceil
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
var Ceil = function (rect) {
  rect.x = Math.ceil(rect.x);
  rect.y = Math.ceil(rect.y);
  return rect;
};

module.exports = Ceil;

/***/ }),

/***/ 6109:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position and size up to the smallest integer greater than or equal to each respective value.
 *
 * @function Phaser.Geom.Rectangle.CeilAll
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to modify.
 *
 * @return {Phaser.Geom.Rectangle} The modified Rectangle.
 */
var CeilAll = function (rect) {
  rect.x = Math.ceil(rect.x);
  rect.y = Math.ceil(rect.y);
  rect.width = Math.ceil(rect.width);
  rect.height = Math.ceil(rect.height);
  return rect;
};

module.exports = CeilAll;

/***/ }),

/***/ 7440:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
// Centers this Rectangle so that the center coordinates match the given x and y values.

/**
 * Moves the top-left corner of a Rectangle so that its center is at the given coordinates.
 *
 * @function Phaser.Geom.Rectangle.CenterOn
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to be centered.
 * @param {number} x - The X coordinate of the Rectangle's center.
 * @param {number} y - The Y coordinate of the Rectangle's center.
 *
 * @return {Phaser.Geom.Rectangle} The centered rectangle.
 */
var CenterOn = function (rect, x, y) {
  rect.x = x - rect.width / 2;
  rect.y = y - rect.height / 2;
  return rect;
};

module.exports = CenterOn;

/***/ }),

/***/ 2032:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Creates a new Rectangle which is identical to the given one.
 *
 * @function Phaser.Geom.Rectangle.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} source - The Rectangle to clone.
 *
 * @return {Phaser.Geom.Rectangle} The newly created Rectangle, which is separate from the given one.
 */


var Clone = function (source) {
  return new Rectangle(source.x, source.y, source.width, source.height);
};

module.exports = Clone;

/***/ }),

/***/ 1305:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if a given point is inside a Rectangle's bounds.
 *
 * @function Phaser.Geom.Rectangle.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to check.
 * @param {number} x - The X coordinate of the point to check.
 * @param {number} y - The Y coordinate of the point to check.
 *
 * @return {boolean} `true` if the point is within the Rectangle's bounds, otherwise `false`.
 */
var Contains = function (rect, x, y) {
  if (rect.width <= 0 || rect.height <= 0) {
    return false;
  }

  return rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y;
};

module.exports = Contains;

/***/ }),

/***/ 7802:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(1305);
/**
 * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
 *
 * @function Phaser.Geom.Rectangle.ContainsPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle object.
 * @param {Phaser.Geom.Point} point - The point object to be checked. Can be a Phaser Point object or any object with x and y values.
 *
 * @return {boolean} A value of true if the Rectangle object contains the specified point, otherwise false.
 */


var ContainsPoint = function (rect, point) {
  return Contains(rect, point.x, point.y);
};

module.exports = ContainsPoint;

/***/ }),

/***/ 7287:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Tests if one rectangle fully contains another.
 *
 * @function Phaser.Geom.Rectangle.ContainsRect
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first rectangle.
 * @param {Phaser.Geom.Rectangle} rectB - The second rectangle.
 *
 * @return {boolean} True only if rectA fully contains rectB.
 */
var ContainsRect = function (rectA, rectB) {
  //  Volume check (if rectB volume > rectA then rectA cannot contain it)
  if (rectB.width * rectB.height > rectA.width * rectA.height) {
    return false;
  }

  return rectB.x > rectA.x && rectB.x < rectA.right && rectB.right > rectA.x && rectB.right < rectA.right && rectB.y > rectA.y && rectB.y < rectA.bottom && rectB.bottom > rectA.y && rectB.bottom < rectA.bottom;
};

module.exports = ContainsRect;

/***/ }),

/***/ 5820:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Rectangle to a destination Rectangle.
 *
 * @function Phaser.Geom.Rectangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [dest,$return]
 *
 * @param {Phaser.Geom.Rectangle} source - The source Rectangle to copy the values from.
 * @param {Phaser.Geom.Rectangle} dest - The destination Rectangle to copy the values to.
 *
 * @return {Phaser.Geom.Rectangle} The destination Rectangle.
 */
var CopyFrom = function (source, dest) {
  return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;

/***/ }),

/***/ 9917:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Create an array of points for each corner of a Rectangle
 * If an array is specified, each point object will be added to the end of the array, otherwise a new array will be created.
 *
 * @function Phaser.Geom.Rectangle.Decompose
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle object to be decomposed.
 * @param {array} [out] - If provided, each point will be added to this array.
 *
 * @return {array} Will return the array you specified or a new array containing the points of the Rectangle.
 */
var Decompose = function (rect, out) {
  if (out === undefined) {
    out = [];
  }

  out.push({
    x: rect.x,
    y: rect.y
  });
  out.push({
    x: rect.right,
    y: rect.y
  });
  out.push({
    x: rect.right,
    y: rect.bottom
  });
  out.push({
    x: rect.x,
    y: rect.bottom
  });
  return out;
};

module.exports = Decompose;

/***/ }),

/***/ 1011:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compares the `x`, `y`, `width` and `height` properties of two rectangles.
 *
 * @function Phaser.Geom.Rectangle.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - Rectangle A
 * @param {Phaser.Geom.Rectangle} toCompare - Rectangle B
 *
 * @return {boolean} `true` if the rectangles' properties are an exact match, otherwise `false`.
 */
var Equals = function (rect, toCompare) {
  return rect.x === toCompare.x && rect.y === toCompare.y && rect.width === toCompare.width && rect.height === toCompare.height;
};

module.exports = Equals;

/***/ }),

/***/ 5276:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetAspectRatio = __webpack_require__(4913);
/**
 * Adjusts the target rectangle, changing its width, height and position,
 * so that it fits inside the area of the source rectangle, while maintaining its original
 * aspect ratio.
 * 
 * Unlike the `FitOutside` function, there may be some space inside the source area not covered.
 *
 * @function Phaser.Geom.Rectangle.FitInside
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The target rectangle to adjust.
 * @param {Phaser.Geom.Rectangle} source - The source rectangle to envelop the target in.
 *
 * @return {Phaser.Geom.Rectangle} The modified target rectangle instance.
 */


var FitInside = function (target, source) {
  var ratio = GetAspectRatio(target);

  if (ratio < GetAspectRatio(source)) {
    //  Taller than Wide
    target.setSize(source.height * ratio, source.height);
  } else {
    //  Wider than Tall
    target.setSize(source.width, source.width / ratio);
  }

  return target.setPosition(source.centerX - target.width / 2, source.centerY - target.height / 2);
};

module.exports = FitInside;

/***/ }),

/***/ 2757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetAspectRatio = __webpack_require__(4913);
/**
 * Adjusts the target rectangle, changing its width, height and position,
 * so that it fully covers the area of the source rectangle, while maintaining its original
 * aspect ratio.
 * 
 * Unlike the `FitInside` function, the target rectangle may extend further out than the source.
 *
 * @function Phaser.Geom.Rectangle.FitOutside
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The target rectangle to adjust.
 * @param {Phaser.Geom.Rectangle} source - The source rectangle to envelope the target in.
 *
 * @return {Phaser.Geom.Rectangle} The modified target rectangle instance.
 */


var FitOutside = function (target, source) {
  var ratio = GetAspectRatio(target);

  if (ratio > GetAspectRatio(source)) {
    //  Wider than Tall
    target.setSize(source.height * ratio, source.height);
  } else {
    //  Taller than Wide
    target.setSize(source.width, source.width / ratio);
  }

  return target.setPosition(source.centerX - target.width / 2, source.centerY - target.height / 2);
};

module.exports = FitOutside;

/***/ }),

/***/ 3010:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds down (floors) the top left X and Y coordinates of the given Rectangle to the largest integer less than or equal to them
 *
 * @function Phaser.Geom.Rectangle.Floor
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to floor the top left X and Y coordinates of
 *
 * @return {Phaser.Geom.Rectangle} The rectangle that was passed to this function with its coordinates floored.
 */
var Floor = function (rect) {
  rect.x = Math.floor(rect.x);
  rect.y = Math.floor(rect.y);
  return rect;
};

module.exports = Floor;

/***/ }),

/***/ 6059:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position and size down to the largest integer less than or equal to each current coordinate or dimension.
 *
 * @function Phaser.Geom.Rectangle.FloorAll
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
var FloorAll = function (rect) {
  rect.x = Math.floor(rect.x);
  rect.y = Math.floor(rect.y);
  rect.width = Math.floor(rect.width);
  rect.height = Math.floor(rect.height);
  return rect;
};

module.exports = FloorAll;

/***/ }),

/***/ 5505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);

var MATH_CONST = __webpack_require__(611); //  points is an array of Point-like objects,
//  either 2 dimensional arrays, or objects with public x/y properties:
//  var points = [
//      [100, 200],
//      [200, 400],
//      { x: 30, y: 60 }
//  ]

/**
 * Constructs new Rectangle or repositions and resizes an existing Rectangle so that all of the given points are on or within its bounds.
 *
 * @function Phaser.Geom.Rectangle.FromPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {array} points - An array of points (either arrays with two elements corresponding to the X and Y coordinate or an object with public `x` and `y` properties) which should be surrounded by the Rectangle.
 * @param {Phaser.Geom.Rectangle} [out] - Optional Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted `out` Rectangle, or a new Rectangle if none was provided.
 */


var FromPoints = function (points, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  if (points.length === 0) {
    return out;
  }

  var minX = Number.MAX_VALUE;
  var minY = Number.MAX_VALUE;
  var maxX = MATH_CONST.MIN_SAFE_INTEGER;
  var maxY = MATH_CONST.MIN_SAFE_INTEGER;
  var p;
  var px;
  var py;

  for (var i = 0; i < points.length; i++) {
    p = points[i];

    if (Array.isArray(p)) {
      px = p[0];
      py = p[1];
    } else {
      px = p.x;
      py = p.y;
    }

    minX = Math.min(minX, px);
    minY = Math.min(minY, py);
    maxX = Math.max(maxX, px);
    maxY = Math.max(maxY, py);
  }

  out.x = minX;
  out.y = minY;
  out.width = maxX - minX;
  out.height = maxY - minY;
  return out;
};

module.exports = FromPoints;

/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Create the smallest Rectangle containing two coordinate pairs.
 *
 * @function Phaser.Geom.Rectangle.FromXY
 * @since 3.23.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {number} x1 - The X coordinate of the first point.
 * @param {number} y1 - The Y coordinate of the first point.
 * @param {number} x2 - The X coordinate of the second point.
 * @param {number} y2 - The Y coordinate of the second point.
 * @param {Phaser.Geom.Rectangle} [out] - Optional Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted `out` Rectangle, or a new Rectangle if none was provided.
 */


var FromXY = function (x1, y1, x2, y2, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  return out.setTo(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x1 - x2), Math.abs(y1 - y2));
};

module.exports = FromXY;

/***/ }),

/***/ 4913:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the width/height ratio of a rectangle.
 *
 * @function Phaser.Geom.Rectangle.GetAspectRatio
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle.
 *
 * @return {number} The width/height ratio of the rectangle.
 */
var GetAspectRatio = function (rect) {
  return rect.height === 0 ? NaN : rect.width / rect.height;
};

module.exports = GetAspectRatio;

/***/ }),

/***/ 4522:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns the center of a Rectangle as a Point.
 *
 * @function Phaser.Geom.Rectangle.GetCenter
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the center of.
 * @param {(Phaser.Geom.Point|object)} [out] - Optional point-like object to update with the center coordinates.
 *
 * @return {(Phaser.Geom.Point|object)} The modified `out` object, or a new Point if none was provided.
 */


var GetCenter = function (rect, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = rect.centerX;
  out.y = rect.centerY;
  return out;
};

module.exports = GetCenter;

/***/ }),

/***/ 5427:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Perimeter = __webpack_require__(4330);

var Point = __webpack_require__(9106);
/**
 * Calculates the coordinates of a point at a certain `position` on the Rectangle's perimeter.
 * 
 * The `position` is a fraction between 0 and 1 which defines how far into the perimeter the point is.
 * 
 * A value of 0 or 1 returns the point at the top left corner of the rectangle, while a value of 0.5 returns the point at the bottom right corner of the rectangle. Values between 0 and 0.5 are on the top or the right side and values between 0.5 and 1 are on the bottom or the left side.
 *
 * @function Phaser.Geom.Rectangle.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectangle - The Rectangle to get the perimeter point from.
 * @param {number} position - The normalized distance into the Rectangle's perimeter to return.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to update with the `x` and `y` coordinates of the point.
 *
 * @return {Phaser.Geom.Point} The updated `output` object, or a new Point if no `output` object was given.
 */


var GetPoint = function (rectangle, position, out) {
  if (out === undefined) {
    out = new Point();
  }

  if (position <= 0 || position >= 1) {
    out.x = rectangle.x;
    out.y = rectangle.y;
    return out;
  }

  var p = Perimeter(rectangle) * position;

  if (position > 0.5) {
    p -= rectangle.width + rectangle.height;

    if (p <= rectangle.width) {
      //  Face 3
      out.x = rectangle.right - p;
      out.y = rectangle.bottom;
    } else {
      //  Face 4
      out.x = rectangle.x;
      out.y = rectangle.bottom - (p - rectangle.width);
    }
  } else if (p <= rectangle.width) {
    //  Face 1
    out.x = rectangle.x + p;
    out.y = rectangle.y;
  } else {
    //  Face 2
    out.x = rectangle.right;
    out.y = rectangle.y + (p - rectangle.width);
  }

  return out;
};

module.exports = GetPoint;

/***/ }),

/***/ 6806:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var GetPoint = __webpack_require__(5427);

var Perimeter = __webpack_require__(4330); //  Return an array of points from the perimeter of the rectangle
//  each spaced out based on the quantity or step required

/**
 * Return an array of points from the perimeter of the rectangle, each spaced out based on the quantity or step required.
 *
 * @function Phaser.Geom.Rectangle.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectangle - The Rectangle object to get the points from.
 * @param {number} step - Step between points. Used to calculate the number of points to return when quantity is falsey. Ignored if quantity is positive.
 * @param {number} quantity - The number of evenly spaced points from the rectangles perimeter to return. If falsey, step param will be used to calculate the number of points.
 * @param {(array|Phaser.Geom.Point[])} [out] - An optional array to store the points in.
 *
 * @return {(array|Phaser.Geom.Point[])} An array of Points from the perimeter of the rectangle.
 */


var GetPoints = function (rectangle, quantity, stepRate, out) {
  if (out === undefined) {
    out = [];
  } //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.


  if (!quantity && stepRate > 0) {
    quantity = Perimeter(rectangle) / stepRate;
  }

  for (var i = 0; i < quantity; i++) {
    var position = i / quantity;
    out.push(GetPoint(rectangle, position));
  }

  return out;
};

module.exports = GetPoints;

/***/ }),

/***/ 3970:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns the size of the Rectangle, expressed as a Point object.
 * With the value of the `width` as the `x` property and the `height` as the `y` property.
 *
 * @function Phaser.Geom.Rectangle.GetSize
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the size from.
 * @param {(Phaser.Geom.Point|object)} [out] - The Point object to store the size in. If not given, a new Point instance is created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object where `x` holds the width and `y` holds the height of the Rectangle.
 */


var GetSize = function (rect, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = rect.width;
  out.y = rect.height;
  return out;
};

module.exports = GetSize;

/***/ }),

/***/ 1674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CenterOn = __webpack_require__(7440);
/**
 * Increases the size of a Rectangle by a specified amount.
 *
 * The center of the Rectangle stays the same. The amounts are added to each side, so the actual increase in width or height is two times bigger than the respective argument.
 *
 * @function Phaser.Geom.Rectangle.Inflate
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to inflate.
 * @param {number} x - How many pixels the left and the right side should be moved by horizontally.
 * @param {number} y - How many pixels the top and the bottom side should be moved by vertically.
 *
 * @return {Phaser.Geom.Rectangle} The inflated Rectangle.
 */


var Inflate = function (rect, x, y) {
  var cx = rect.centerX;
  var cy = rect.centerY;
  rect.setSize(rect.width + x * 2, rect.height + y * 2);
  return CenterOn(rect, cx, cy);
};

module.exports = Inflate;

/***/ }),

/***/ 6635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);

var Intersects = __webpack_require__(1756);
/**
 * Takes two Rectangles and first checks to see if they intersect.
 * If they intersect it will return the area of intersection in the `out` Rectangle.
 * If they do not intersect, the `out` Rectangle will have a width and height of zero.
 *
 * @function Phaser.Geom.Rectangle.Intersection
 * @since 3.11.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to get the intersection from.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to get the intersection from.
 * @param {Phaser.Geom.Rectangle} [out] - A Rectangle to store the intersection results in.
 *
 * @return {Phaser.Geom.Rectangle} The intersection result. If the width and height are zero, no intersection occurred.
 */


var Intersection = function (rectA, rectB, out) {
  if (out === undefined) {
    out = new Rectangle();
  }

  if (Intersects(rectA, rectB)) {
    out.x = Math.max(rectA.x, rectB.x);
    out.y = Math.max(rectA.y, rectB.y);
    out.width = Math.min(rectA.right, rectB.right) - out.x;
    out.height = Math.min(rectA.bottom, rectB.bottom) - out.y;
  } else {
    out.setEmpty();
  }

  return out;
};

module.exports = Intersection;

/***/ }),

/***/ 4684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Perimeter = __webpack_require__(4330);

var Point = __webpack_require__(9106);
/**
 * Returns an array of points from the perimeter of the Rectangle, where each point is spaced out based
 * on either the `step` value, or the `quantity`.
 *
 * @function Phaser.Geom.Rectangle.MarchingAnts
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the perimeter points from.
 * @param {number} [step] - The distance between each point of the perimeter. Set to `null` if you wish to use the `quantity` parameter instead.
 * @param {number} [quantity] - The total number of points to return. The step is then calculated based on the length of the Rectangle, divided by this value.
 * @param {(array|Phaser.Geom.Point[])} [out] - An array in which the perimeter points will be stored. If not given, a new array instance is created.
 *
 * @return {(array|Phaser.Geom.Point[])} An array containing the perimeter points from the Rectangle.
 */


var MarchingAnts = function (rect, step, quantity, out) {
  if (out === undefined) {
    out = [];
  }

  if (!step && !quantity) {
    //  Bail out
    return out;
  } //  If step is a falsey value (false, null, 0, undefined, etc) then we calculate
  //  it based on the quantity instead, otherwise we always use the step value


  if (!step) {
    step = Perimeter(rect) / quantity;
  } else {
    quantity = Math.round(Perimeter(rect) / step);
  }

  var x = rect.x;
  var y = rect.y;
  var face = 0; //  Loop across each face of the rectangle

  for (var i = 0; i < quantity; i++) {
    out.push(new Point(x, y));

    switch (face) {
      //  Top face
      case 0:
        x += step;

        if (x >= rect.right) {
          face = 1;
          y += x - rect.right;
          x = rect.right;
        }

        break;
      //  Right face

      case 1:
        y += step;

        if (y >= rect.bottom) {
          face = 2;
          x -= y - rect.bottom;
          y = rect.bottom;
        }

        break;
      //  Bottom face

      case 2:
        x -= step;

        if (x <= rect.left) {
          face = 3;
          y -= rect.left - x;
          x = rect.left;
        }

        break;
      //  Left face

      case 3:
        y -= step;

        if (y <= rect.top) {
          face = 0;
          y = rect.top;
        }

        break;
    }
  }

  return out;
};

module.exports = MarchingAnts;

/***/ }),

/***/ 5547:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Merges a Rectangle with a list of points by repositioning and/or resizing it such that all points are located on or within its bounds.
 *
 * @function Phaser.Geom.Rectangle.MergePoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The Rectangle which should be merged.
 * @param {Phaser.Geom.Point[]} points - An array of Points (or any object with public `x` and `y` properties) which should be merged with the Rectangle.
 *
 * @return {Phaser.Geom.Rectangle} The modified Rectangle.
 */
var MergePoints = function (target, points) {
  var minX = target.x;
  var maxX = target.right;
  var minY = target.y;
  var maxY = target.bottom;

  for (var i = 0; i < points.length; i++) {
    minX = Math.min(minX, points[i].x);
    maxX = Math.max(maxX, points[i].x);
    minY = Math.min(minY, points[i].y);
    maxY = Math.max(maxY, points[i].y);
  }

  target.x = minX;
  target.y = minY;
  target.width = maxX - minX;
  target.height = maxY - minY;
  return target;
};

module.exports = MergePoints;

/***/ }),

/***/ 1630:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Merges source rectangle into target rectangle and returns target
//  Neither rect should have negative widths or heights

/**
 * Merges the source rectangle into the target rectangle and returns the target.
 * Neither rectangle should have a negative width or height.
 *
 * @function Phaser.Geom.Rectangle.MergeRect
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - Target rectangle. Will be modified to include source rectangle.
 * @param {Phaser.Geom.Rectangle} source - Rectangle that will be merged into target rectangle.
 *
 * @return {Phaser.Geom.Rectangle} Modified target rectangle that contains source rectangle.
 */
var MergeRect = function (target, source) {
  var minX = Math.min(target.x, source.x);
  var maxX = Math.max(target.right, source.right);
  target.x = minX;
  target.width = maxX - minX;
  var minY = Math.min(target.y, source.y);
  var maxY = Math.max(target.bottom, source.bottom);
  target.y = minY;
  target.height = maxY - minY;
  return target;
};

module.exports = MergeRect;

/***/ }),

/***/ 795:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Merges a Rectangle with a point by repositioning and/or resizing it so that the point is on or within its bounds.
 *
 * @function Phaser.Geom.Rectangle.MergeXY
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - The Rectangle which should be merged and modified.
 * @param {number} x - The X coordinate of the point which should be merged.
 * @param {number} y - The Y coordinate of the point which should be merged.
 *
 * @return {Phaser.Geom.Rectangle} The modified `target` Rectangle.
 */
var MergeXY = function (target, x, y) {
  var minX = Math.min(target.x, x);
  var maxX = Math.max(target.right, x);
  target.x = minX;
  target.width = maxX - minX;
  var minY = Math.min(target.y, y);
  var maxY = Math.max(target.bottom, y);
  target.y = minY;
  target.height = maxY - minY;
  return target;
};

module.exports = MergeXY;

/***/ }),

/***/ 4940:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Nudges (translates) the top left corner of a Rectangle by a given offset.
 *
 * @function Phaser.Geom.Rectangle.Offset
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 * @param {number} x - The distance to move the Rectangle horizontally.
 * @param {number} y - The distance to move the Rectangle vertically.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
var Offset = function (rect, x, y) {
  rect.x += x;
  rect.y += y;
  return rect;
};

module.exports = Offset;

/***/ }),

/***/ 645:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Nudges (translates) the top-left corner of a Rectangle by the coordinates of a point (translation vector).
 *
 * @function Phaser.Geom.Rectangle.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 * @param {(Phaser.Geom.Point|Phaser.Math.Vector2)} point - The point whose coordinates should be used as an offset.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
var OffsetPoint = function (rect, point) {
  rect.x += point.x;
  rect.y += point.y;
  return rect;
};

module.exports = OffsetPoint;

/***/ }),

/***/ 5681:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if two Rectangles overlap. If a Rectangle is within another Rectangle, the two will be considered overlapping. Thus, the Rectangles are treated as "solid".
 *
 * @function Phaser.Geom.Rectangle.Overlaps
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to check.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to check.
 *
 * @return {boolean} `true` if the two Rectangles overlap, `false` otherwise.
 */
var Overlaps = function (rectA, rectB) {
  return rectA.x < rectB.right && rectA.right > rectB.x && rectA.y < rectB.bottom && rectA.bottom > rectB.y;
};

module.exports = Overlaps;

/***/ }),

/***/ 4330:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the perimeter of a Rectangle.
 *
 * @function Phaser.Geom.Rectangle.Perimeter
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to use.
 *
 * @return {number} The perimeter of the Rectangle, equal to `(width * 2) + (height * 2)`.
 */
var Perimeter = function (rect) {
  return 2 * (rect.width + rect.height);
};

module.exports = Perimeter;

/***/ }),

/***/ 6221:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var DegToRad = __webpack_require__(3490);
/**
 * Returns a Point from the perimeter of a Rectangle based on the given angle.
 *
 * @function Phaser.Geom.Rectangle.PerimeterPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectangle - The Rectangle to get the perimeter point from.
 * @param {number} angle - The angle of the point, in degrees.
 * @param {Phaser.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A Point object holding the coordinates of the Rectangle perimeter.
 */


var PerimeterPoint = function (rectangle, angle, out) {
  if (out === undefined) {
    out = new Point();
  }

  angle = DegToRad(angle);
  var s = Math.sin(angle);
  var c = Math.cos(angle);
  var dx = c > 0 ? rectangle.width / 2 : rectangle.width / -2;
  var dy = s > 0 ? rectangle.height / 2 : rectangle.height / -2;

  if (Math.abs(dx * s) < Math.abs(dy * c)) {
    dy = dx * s / c;
  } else {
    dx = dy * c / s;
  }

  out.x = dx + rectangle.centerX;
  out.y = dy + rectangle.centerY;
  return out;
};

module.exports = PerimeterPoint;

/***/ }),

/***/ 130:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a random point within a Rectangle.
 *
 * @function Phaser.Geom.Rectangle.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to return a point from.
 * @param {Phaser.Geom.Point} out - The object to update with the point's coordinates.
 *
 * @return {Phaser.Geom.Point} The modified `out` object, or a new Point if none was provided.
 */


var Random = function (rect, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = rect.x + Math.random() * rect.width;
  out.y = rect.y + Math.random() * rect.height;
  return out;
};

module.exports = Random;

/***/ }),

/***/ 9829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Between = __webpack_require__(7443);

var ContainsRect = __webpack_require__(7287);

var Point = __webpack_require__(9106);
/**
 * Calculates a random point that lies within the `outer` Rectangle, but outside of the `inner` Rectangle.
 * The inner Rectangle must be fully contained within the outer rectangle.
 *
 * @function Phaser.Geom.Rectangle.RandomOutside
 * @since 3.10.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} outer - The outer Rectangle to get the random point within.
 * @param {Phaser.Geom.Rectangle} inner - The inner Rectangle to exclude from the returned point.
 * @param {Phaser.Geom.Point} [out] - A Point, or Point-like object to store the result in. If not specified, a new Point will be created.
 *
 * @return {Phaser.Geom.Point} A Point object containing the random values in its `x` and `y` properties.
 */


var RandomOutside = function (outer, inner, out) {
  if (out === undefined) {
    out = new Point();
  }

  if (ContainsRect(outer, inner)) {
    //  Pick a random quadrant
    //
    //  The quadrants don't extend the full widths / heights of the outer rect to give
    //  us a better uniformed distribution, otherwise you get clumping in the corners where
    //  the 4 quads would overlap
    switch (Between(0, 3)) {
      case 0:
        // Top
        out.x = outer.x + Math.random() * (inner.right - outer.x);
        out.y = outer.y + Math.random() * (inner.top - outer.y);
        break;

      case 1:
        // Bottom
        out.x = inner.x + Math.random() * (outer.right - inner.x);
        out.y = inner.bottom + Math.random() * (outer.bottom - inner.bottom);
        break;

      case 2:
        // Left
        out.x = outer.x + Math.random() * (inner.x - outer.x);
        out.y = inner.y + Math.random() * (outer.bottom - inner.y);
        break;

      case 3:
        // Right
        out.x = inner.right + Math.random() * (outer.right - inner.right);
        out.y = outer.y + Math.random() * (inner.bottom - outer.y);
        break;
    }
  }

  return out;
};

module.exports = RandomOutside;

/***/ }),

/***/ 1456:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Contains = __webpack_require__(1305);

var GetPoint = __webpack_require__(5427);

var GetPoints = __webpack_require__(6806);

var GEOM_CONST = __webpack_require__(9277);

var Line = __webpack_require__(9778);

var Random = __webpack_require__(130);
/**
 * @classdesc
 * Encapsulates a 2D rectangle defined by its corner point in the top-left and its extends in x (width) and y (height)
 *
 * @class Rectangle
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The X coordinate of the top left corner of the Rectangle.
 * @param {number} [y=0] - The Y coordinate of the top left corner of the Rectangle.
 * @param {number} [width=0] - The width of the Rectangle.
 * @param {number} [height=0] - The height of the Rectangle.
 */


var Rectangle = new Class({
  initialize: function Rectangle(x, y, width, height) {
    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = 0;
    }

    if (width === undefined) {
      width = 0;
    }

    if (height === undefined) {
      height = 0;
    }
    /**
     * The geometry constant type of this object: `GEOM_CONST.RECTANGLE`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Rectangle#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */


    this.type = GEOM_CONST.RECTANGLE;
    /**
     * The X coordinate of the top left corner of the Rectangle.
     *
     * @name Phaser.Geom.Rectangle#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x = x;
    /**
     * The Y coordinate of the top left corner of the Rectangle.
     *
     * @name Phaser.Geom.Rectangle#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = y;
    /**
     * The width of the Rectangle, i.e. the distance between its left side (defined by `x`) and its right side.
     *
     * @name Phaser.Geom.Rectangle#width
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.width = width;
    /**
     * The height of the Rectangle, i.e. the distance between its top side (defined by `y`) and its bottom side.
     *
     * @name Phaser.Geom.Rectangle#height
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.height = height;
  },

  /**
   * Checks if the given point is inside the Rectangle's bounds.
   *
   * @method Phaser.Geom.Rectangle#contains
   * @since 3.0.0
   *
   * @param {number} x - The X coordinate of the point to check.
   * @param {number} y - The Y coordinate of the point to check.
   *
   * @return {boolean} `true` if the point is within the Rectangle's bounds, otherwise `false`.
   */
  contains: function (x, y) {
    return Contains(this, x, y);
  },

  /**
   * Calculates the coordinates of a point at a certain `position` on the Rectangle's perimeter.
   * 
   * The `position` is a fraction between 0 and 1 which defines how far into the perimeter the point is.
   * 
   * A value of 0 or 1 returns the point at the top left corner of the rectangle, while a value of 0.5 returns the point at the bottom right corner of the rectangle. Values between 0 and 0.5 are on the top or the right side and values between 0.5 and 1 are on the bottom or the left side.
   *
   * @method Phaser.Geom.Rectangle#getPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [output,$return]
   *
   * @param {number} position - The normalized distance into the Rectangle's perimeter to return.
   * @param {(Phaser.Geom.Point|object)} [output] - An object to update with the `x` and `y` coordinates of the point.
   *
   * @return {(Phaser.Geom.Point|object)} The updated `output` object, or a new Point if no `output` object was given.
   */
  getPoint: function (position, output) {
    return GetPoint(this, position, output);
  },

  /**
   * Returns an array of points from the perimeter of the Rectangle, each spaced out based on the quantity or step required.
   *
   * @method Phaser.Geom.Rectangle#getPoints
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point[]} O - [output,$return]
   *
   * @param {number} quantity - The number of points to return. Set to `false` or 0 to return an arbitrary number of points (`perimeter / stepRate`) evenly spaced around the Rectangle based on the `stepRate`.
   * @param {number} [stepRate] - If `quantity` is 0, determines the normalized distance between each returned point.
   * @param {(array|Phaser.Geom.Point[])} [output] - An array to which to append the points.
   *
   * @return {(array|Phaser.Geom.Point[])} The modified `output` array, or a new array if none was provided.
   */
  getPoints: function (quantity, stepRate, output) {
    return GetPoints(this, quantity, stepRate, output);
  },

  /**
   * Returns a random point within the Rectangle's bounds.
   *
   * @method Phaser.Geom.Rectangle#getRandomPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [point,$return]
   *
   * @param {Phaser.Geom.Point} [point] - The object in which to store the `x` and `y` coordinates of the point.
   *
   * @return {Phaser.Geom.Point} The updated `point`, or a new Point if none was provided.
   */
  getRandomPoint: function (point) {
    return Random(this, point);
  },

  /**
   * Sets the position, width, and height of the Rectangle.
   *
   * @method Phaser.Geom.Rectangle#setTo
   * @since 3.0.0
   *
   * @param {number} x - The X coordinate of the top left corner of the Rectangle.
   * @param {number} y - The Y coordinate of the top left corner of the Rectangle.
   * @param {number} width - The width of the Rectangle.
   * @param {number} height - The height of the Rectangle.
   *
   * @return {this} This Rectangle object.
   */
  setTo: function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  },

  /**
   * Resets the position, width, and height of the Rectangle to 0.
   *
   * @method Phaser.Geom.Rectangle#setEmpty
   * @since 3.0.0
   *
   * @return {this} This Rectangle object.
   */
  setEmpty: function () {
    return this.setTo(0, 0, 0, 0);
  },

  /**
   * Sets the position of the Rectangle.
   *
   * @method Phaser.Geom.Rectangle#setPosition
   * @since 3.0.0
   *
   * @param {number} x - The X coordinate of the top left corner of the Rectangle.
   * @param {number} [y=x] - The Y coordinate of the top left corner of the Rectangle.
   *
   * @return {this} This Rectangle object.
   */
  setPosition: function (x, y) {
    if (y === undefined) {
      y = x;
    }

    this.x = x;
    this.y = y;
    return this;
  },

  /**
   * Sets the width and height of the Rectangle.
   *
   * @method Phaser.Geom.Rectangle#setSize
   * @since 3.0.0
   *
   * @param {number} width - The width to set the Rectangle to.
   * @param {number} [height=width] - The height to set the Rectangle to.
   *
   * @return {this} This Rectangle object.
   */
  setSize: function (width, height) {
    if (height === undefined) {
      height = width;
    }

    this.width = width;
    this.height = height;
    return this;
  },

  /**
   * Determines if the Rectangle is empty. A Rectangle is empty if its width or height is less than or equal to 0.
   *
   * @method Phaser.Geom.Rectangle#isEmpty
   * @since 3.0.0
   *
   * @return {boolean} `true` if the Rectangle is empty. A Rectangle object is empty if its width or height is less than or equal to 0.
   */
  isEmpty: function () {
    return this.width <= 0 || this.height <= 0;
  },

  /**
   * Returns a Line object that corresponds to the top of this Rectangle.
   *
   * @method Phaser.Geom.Rectangle#getLineA
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to the top of this Rectangle.
   */
  getLineA: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.x, this.y, this.right, this.y);
    return line;
  },

  /**
   * Returns a Line object that corresponds to the right of this Rectangle.
   *
   * @method Phaser.Geom.Rectangle#getLineB
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to the right of this Rectangle.
   */
  getLineB: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.right, this.y, this.right, this.bottom);
    return line;
  },

  /**
   * Returns a Line object that corresponds to the bottom of this Rectangle.
   *
   * @method Phaser.Geom.Rectangle#getLineC
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to the bottom of this Rectangle.
   */
  getLineC: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.right, this.bottom, this.x, this.bottom);
    return line;
  },

  /**
   * Returns a Line object that corresponds to the left of this Rectangle.
   *
   * @method Phaser.Geom.Rectangle#getLineD
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to the left of this Rectangle.
   */
  getLineD: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.x, this.bottom, this.x, this.y);
    return line;
  },

  /**
   * The x coordinate of the left of the Rectangle.
   * Changing the left property of a Rectangle object has no effect on the y and height properties. However it does affect the width property, whereas changing the x value does not affect the width property.
   *
   * @name Phaser.Geom.Rectangle#left
   * @type {number}
   * @since 3.0.0
   */
  left: {
    get: function () {
      return this.x;
    },
    set: function (value) {
      if (value >= this.right) {
        this.width = 0;
      } else {
        this.width = this.right - value;
      }

      this.x = value;
    }
  },

  /**
   * The sum of the x and width properties.
   * Changing the right property of a Rectangle object has no effect on the x, y and height properties, however it does affect the width property.
   *
   * @name Phaser.Geom.Rectangle#right
   * @type {number}
   * @since 3.0.0
   */
  right: {
    get: function () {
      return this.x + this.width;
    },
    set: function (value) {
      if (value <= this.x) {
        this.width = 0;
      } else {
        this.width = value - this.x;
      }
    }
  },

  /**
   * The y coordinate of the top of the Rectangle. Changing the top property of a Rectangle object has no effect on the x and width properties.
   * However it does affect the height property, whereas changing the y value does not affect the height property.
   *
   * @name Phaser.Geom.Rectangle#top
   * @type {number}
   * @since 3.0.0
   */
  top: {
    get: function () {
      return this.y;
    },
    set: function (value) {
      if (value >= this.bottom) {
        this.height = 0;
      } else {
        this.height = this.bottom - value;
      }

      this.y = value;
    }
  },

  /**
   * The sum of the y and height properties.
   * Changing the bottom property of a Rectangle object has no effect on the x, y and width properties, but does change the height property.
   *
   * @name Phaser.Geom.Rectangle#bottom
   * @type {number}
   * @since 3.0.0
   */
  bottom: {
    get: function () {
      return this.y + this.height;
    },
    set: function (value) {
      if (value <= this.y) {
        this.height = 0;
      } else {
        this.height = value - this.y;
      }
    }
  },

  /**
   * The x coordinate of the center of the Rectangle.
   *
   * @name Phaser.Geom.Rectangle#centerX
   * @type {number}
   * @since 3.0.0
   */
  centerX: {
    get: function () {
      return this.x + this.width / 2;
    },
    set: function (value) {
      this.x = value - this.width / 2;
    }
  },

  /**
   * The y coordinate of the center of the Rectangle.
   *
   * @name Phaser.Geom.Rectangle#centerY
   * @type {number}
   * @since 3.0.0
   */
  centerY: {
    get: function () {
      return this.y + this.height / 2;
    },
    set: function (value) {
      this.y = value - this.height / 2;
    }
  }
});
module.exports = Rectangle;

/***/ }),

/***/ 4819:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality.
 *
 * @function Phaser.Geom.Rectangle.SameDimensions
 * @since 3.15.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The first Rectangle object.
 * @param {Phaser.Geom.Rectangle} toCompare - The second Rectangle object.
 *
 * @return {boolean} `true` if the objects have equivalent values for the `width` and `height` properties, otherwise `false`.
 */
var SameDimensions = function (rect, toCompare) {
  return rect.width === toCompare.width && rect.height === toCompare.height;
};

module.exports = SameDimensions;

/***/ }),

/***/ 1866:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
// Scales the width and height of this Rectangle by the given amounts.

/**
 * Scales the width and height of this Rectangle by the given amounts.
 *
 * @function Phaser.Geom.Rectangle.Scale
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The `Rectangle` object that will be scaled by the specified amount(s).
 * @param {number} x - The factor by which to scale the rectangle horizontally.
 * @param {number} y - The amount by which to scale the rectangle vertically. If this is not specified, the rectangle will be scaled by the factor `x` in both directions.
 *
 * @return {Phaser.Geom.Rectangle} The rectangle object with updated `width` and `height` properties as calculated from the scaling factor(s).
 */
var Scale = function (rect, x, y) {
  if (y === undefined) {
    y = x;
  }

  rect.width *= x;
  rect.height *= y;
  return rect;
};

module.exports = Scale;

/***/ }),

/***/ 7597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);
/**
 * Creates a new Rectangle or repositions and/or resizes an existing Rectangle so that it encompasses the two given Rectangles, i.e. calculates their union.
 *
 * @function Phaser.Geom.Rectangle.Union
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to use.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to use.
 * @param {Phaser.Geom.Rectangle} [out] - The Rectangle to store the union in.
 *
 * @return {Phaser.Geom.Rectangle} The modified `out` Rectangle, or a new Rectangle if none was provided.
 */


var Union = function (rectA, rectB, out) {
  if (out === undefined) {
    out = new Rectangle();
  } //  Cache vars so we can use one of the input rects as the output rect


  var x = Math.min(rectA.x, rectB.x);
  var y = Math.min(rectA.y, rectB.y);
  var w = Math.max(rectA.right, rectB.right) - x;
  var h = Math.max(rectA.bottom, rectB.bottom) - y;
  return out.setTo(x, y, w, h);
};

module.exports = Union;

/***/ }),

/***/ 5244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Rectangle = __webpack_require__(1456);

Rectangle.Area = __webpack_require__(4038);
Rectangle.Ceil = __webpack_require__(6829);
Rectangle.CeilAll = __webpack_require__(6109);
Rectangle.CenterOn = __webpack_require__(7440);
Rectangle.Clone = __webpack_require__(2032);
Rectangle.Contains = __webpack_require__(1305);
Rectangle.ContainsPoint = __webpack_require__(7802);
Rectangle.ContainsRect = __webpack_require__(7287);
Rectangle.CopyFrom = __webpack_require__(5820);
Rectangle.Decompose = __webpack_require__(9917);
Rectangle.Equals = __webpack_require__(1011);
Rectangle.FitInside = __webpack_require__(5276);
Rectangle.FitOutside = __webpack_require__(2757);
Rectangle.Floor = __webpack_require__(3010);
Rectangle.FloorAll = __webpack_require__(6059);
Rectangle.FromPoints = __webpack_require__(5505);
Rectangle.FromXY = __webpack_require__(9306);
Rectangle.GetAspectRatio = __webpack_require__(4913);
Rectangle.GetCenter = __webpack_require__(4522);
Rectangle.GetPoint = __webpack_require__(5427);
Rectangle.GetPoints = __webpack_require__(6806);
Rectangle.GetSize = __webpack_require__(3970);
Rectangle.Inflate = __webpack_require__(1674);
Rectangle.Intersection = __webpack_require__(6635);
Rectangle.MarchingAnts = __webpack_require__(4684);
Rectangle.MergePoints = __webpack_require__(5547);
Rectangle.MergeRect = __webpack_require__(1630);
Rectangle.MergeXY = __webpack_require__(795);
Rectangle.Offset = __webpack_require__(4940);
Rectangle.OffsetPoint = __webpack_require__(645);
Rectangle.Overlaps = __webpack_require__(5681);
Rectangle.Perimeter = __webpack_require__(4330);
Rectangle.PerimeterPoint = __webpack_require__(6221);
Rectangle.Random = __webpack_require__(130);
Rectangle.RandomOutside = __webpack_require__(9829);
Rectangle.SameDimensions = __webpack_require__(4819);
Rectangle.Scale = __webpack_require__(1866);
Rectangle.Union = __webpack_require__(7597);
module.exports = Rectangle;

/***/ }),

/***/ 9530:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
// The 2D area of a triangle. The area value is always non-negative.

/**
 * Returns the area of a Triangle.
 *
 * @function Phaser.Geom.Triangle.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to use.
 *
 * @return {number} The area of the Triangle, always non-negative.
 */
var Area = function (triangle) {
  var x1 = triangle.x1;
  var y1 = triangle.y1;
  var x2 = triangle.x2;
  var y2 = triangle.y2;
  var x3 = triangle.x3;
  var y3 = triangle.y3;
  return Math.abs(((x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1)) / 2);
};

module.exports = Area;

/***/ }),

/***/ 6613:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Triangle = __webpack_require__(997);
/**
 * Builds an equilateral triangle. In the equilateral triangle, all the sides are the same length (congruent) and all the angles are the same size (congruent).
 * The x/y specifies the top-middle of the triangle (x1/y1) and length is the length of each side.
 *
 * @function Phaser.Geom.Triangle.BuildEquilateral
 * @since 3.0.0
 *
 * @param {number} x - x coordinate of the top point of the triangle.
 * @param {number} y - y coordinate of the top point of the triangle.
 * @param {number} length - Length of each side of the triangle.
 *
 * @return {Phaser.Geom.Triangle} The Triangle object of the given size.
 */


var BuildEquilateral = function (x, y, length) {
  var height = length * (Math.sqrt(3) / 2);
  var x1 = x;
  var y1 = y;
  var x2 = x + length / 2;
  var y2 = y + height;
  var x3 = x - length / 2;
  var y3 = y + height;
  return new Triangle(x1, y1, x2, y2, x3, y3);
};

module.exports = BuildEquilateral;

/***/ }),

/***/ 9888:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var EarCut = __webpack_require__(5084);

var Triangle = __webpack_require__(997);
/**
 * Takes an array of vertex coordinates, and optionally an array of hole indices, then returns an array
 * of Triangle instances, where the given vertices have been decomposed into a series of triangles.
 *
 * @function Phaser.Geom.Triangle.BuildFromPolygon
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle[]} O - [out,$return]
 *
 * @param {array} data - A flat array of vertex coordinates like [x0,y0, x1,y1, x2,y2, ...]
 * @param {array} [holes=null] - An array of hole indices if any (e.g. [5, 8] for a 12-vertex input would mean one hole with vertices 5–7 and another with 8–11).
 * @param {number} [scaleX=1] - Horizontal scale factor to multiply the resulting points by.
 * @param {number} [scaleY=1] - Vertical scale factor to multiply the resulting points by.
 * @param {(array|Phaser.Geom.Triangle[])} [out] - An array to store the resulting Triangle instances in. If not provided, a new array is created.
 *
 * @return {(array|Phaser.Geom.Triangle[])} An array of Triangle instances, where each triangle is based on the decomposed vertices data.
 */


var BuildFromPolygon = function (data, holes, scaleX, scaleY, out) {
  if (holes === undefined) {
    holes = null;
  }

  if (scaleX === undefined) {
    scaleX = 1;
  }

  if (scaleY === undefined) {
    scaleY = 1;
  }

  if (out === undefined) {
    out = [];
  }

  var tris = EarCut(data, holes);
  var a;
  var b;
  var c;
  var x1;
  var y1;
  var x2;
  var y2;
  var x3;
  var y3;

  for (var i = 0; i < tris.length; i += 3) {
    a = tris[i];
    b = tris[i + 1];
    c = tris[i + 2];
    x1 = data[a * 2] * scaleX;
    y1 = data[a * 2 + 1] * scaleY;
    x2 = data[b * 2] * scaleX;
    y2 = data[b * 2 + 1] * scaleY;
    x3 = data[c * 2] * scaleX;
    y3 = data[c * 2 + 1] * scaleY;
    out.push(new Triangle(x1, y1, x2, y2, x3, y3));
  }

  return out;
};

module.exports = BuildFromPolygon;

/***/ }),

/***/ 365:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Triangle = __webpack_require__(997); //  Builds a right triangle, with one 90 degree angle and two acute angles
//  The x/y is the coordinate of the 90 degree angle (and will map to x1/y1 in the resulting Triangle)
//  w/h can be positive or negative and represent the length of each side

/**
 * Builds a right triangle, i.e. one which has a 90-degree angle and two acute angles.
 *
 * @function Phaser.Geom.Triangle.BuildRight
 * @since 3.0.0
 *
 * @param {number} x - The X coordinate of the right angle, which will also be the first X coordinate of the constructed Triangle.
 * @param {number} y - The Y coordinate of the right angle, which will also be the first Y coordinate of the constructed Triangle.
 * @param {number} width - The length of the side which is to the left or to the right of the right angle.
 * @param {number} height - The length of the side which is above or below the right angle.
 *
 * @return {Phaser.Geom.Triangle} The constructed right Triangle.
 */


var BuildRight = function (x, y, width, height) {
  if (height === undefined) {
    height = width;
  } //  90 degree angle


  var x1 = x;
  var y1 = y;
  var x2 = x;
  var y2 = y - height;
  var x3 = x + width;
  var y3 = y;
  return new Triangle(x1, y1, x2, y2, x3, y3);
};

module.exports = BuildRight;

/***/ }),

/***/ 6453:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Centroid = __webpack_require__(400);

var Offset = __webpack_require__(2462);
/**
 * @callback CenterFunction
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to return the center coordinates of.
 *
 * @return {Phaser.Math.Vector2} The center point of the Triangle according to the function.
 */

/**
 * Positions the Triangle so that it is centered on the given coordinates.
 *
 * @function Phaser.Geom.Triangle.CenterOn
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The triangle to be positioned.
 * @param {number} x - The horizontal coordinate to center on.
 * @param {number} y - The vertical coordinate to center on.
 * @param {CenterFunction} [centerFunc] - The function used to center the triangle. Defaults to Centroid centering.
 *
 * @return {Phaser.Geom.Triangle} The Triangle that was centered.
 */


var CenterOn = function (triangle, x, y, centerFunc) {
  if (centerFunc === undefined) {
    centerFunc = Centroid;
  } //  Get the center of the triangle


  var center = centerFunc(triangle); //  Difference

  var diffX = x - center.x;
  var diffY = y - center.y;
  return Offset(triangle, diffX, diffY);
};

module.exports = CenterOn;

/***/ }),

/***/ 400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106); //  The three medians (the lines drawn from the vertices to the bisectors of the opposite sides)
//  meet in the centroid or center of mass (center of gravity).
//  The centroid divides each median in a ratio of 2:1

/**
 * Calculates the position of a Triangle's centroid, which is also its center of mass (center of gravity).
 *
 * The centroid is the point in a Triangle at which its three medians (the lines drawn from the vertices to the bisectors of the opposite sides) meet. It divides each one in a 2:1 ratio.
 *
 * @function Phaser.Geom.Triangle.Centroid
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to use.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to store the coordinates in.
 *
 * @return {(Phaser.Geom.Point|object)} The `out` object with modified `x` and `y` properties, or a new Point if none was provided.
 */


var Centroid = function (triangle, out) {
  if (out === undefined) {
    out = new Point();
  }

  out.x = (triangle.x1 + triangle.x2 + triangle.x3) / 3;
  out.y = (triangle.y1 + triangle.y2 + triangle.y3) / 3;
  return out;
};

module.exports = Centroid;

/***/ }),

/***/ 727:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector2 = __webpack_require__(9182); //  Adapted from http://bjornharrtell.github.io/jsts/doc/api/jsts_geom_Triangle.js.html

/**
 * Computes the determinant of a 2x2 matrix. Uses standard double-precision arithmetic, so is susceptible to round-off error.
 *
 * @function det
 * @private
 * @since 3.0.0
 *
 * @param {number} m00 - The [0,0] entry of the matrix.
 * @param {number} m01 - The [0,1] entry of the matrix.
 * @param {number} m10 - The [1,0] entry of the matrix.
 * @param {number} m11 - The [1,1] entry of the matrix.
 *
 * @return {number} the determinant.
 */


function det(m00, m01, m10, m11) {
  return m00 * m11 - m01 * m10;
}
/**
 * Computes the circumcentre of a triangle. The circumcentre is the centre of
 * the circumcircle, the smallest circle which encloses the triangle. It is also
 * the common intersection point of the perpendicular bisectors of the sides of
 * the triangle, and is the only point which has equal distance to all three
 * vertices of the triangle.
 *
 * @function Phaser.Geom.Triangle.CircumCenter
 * @since 3.0.0
 *
 * @generic {Phaser.Math.Vector2} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the circumcenter of.
 * @param {Phaser.Math.Vector2} [out] - The Vector2 object to store the position in. If not given, a new Vector2 instance is created.
 *
 * @return {Phaser.Math.Vector2} A Vector2 object holding the coordinates of the circumcenter of the Triangle.
 */


var CircumCenter = function (triangle, out) {
  if (out === undefined) {
    out = new Vector2();
  }

  var cx = triangle.x3;
  var cy = triangle.y3;
  var ax = triangle.x1 - cx;
  var ay = triangle.y1 - cy;
  var bx = triangle.x2 - cx;
  var by = triangle.y2 - cy;
  var denom = 2 * det(ax, ay, bx, by);
  var numx = det(ay, ax * ax + ay * ay, by, bx * bx + by * by);
  var numy = det(ax, ax * ax + ay * ay, bx, bx * bx + by * by);
  out.x = cx - numx / denom;
  out.y = cy + numy / denom;
  return out;
};

module.exports = CircumCenter;

/***/ }),

/***/ 3945:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Circle = __webpack_require__(6853); //  Adapted from https://gist.github.com/mutoo/5617691

/**
 * Finds the circumscribed circle (circumcircle) of a Triangle object. The circumcircle is the circle which touches all of the triangle's vertices.
 *
 * @function Phaser.Geom.Triangle.CircumCircle
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to use as input.
 * @param {Phaser.Geom.Circle} [out] - An optional Circle to store the result in.
 *
 * @return {Phaser.Geom.Circle} The updated `out` Circle, or a new Circle if none was provided.
 */


var CircumCircle = function (triangle, out) {
  if (out === undefined) {
    out = new Circle();
  } //  A


  var x1 = triangle.x1;
  var y1 = triangle.y1; //  B

  var x2 = triangle.x2;
  var y2 = triangle.y2; //  C

  var x3 = triangle.x3;
  var y3 = triangle.y3;
  var A = x2 - x1;
  var B = y2 - y1;
  var C = x3 - x1;
  var D = y3 - y1;
  var E = A * (x1 + x2) + B * (y1 + y2);
  var F = C * (x1 + x3) + D * (y1 + y3);
  var G = 2 * (A * (y3 - y2) - B * (x3 - x2));
  var dx;
  var dy; //  If the points of the triangle are collinear, then just find the
  //  extremes and use the midpoint as the center of the circumcircle.

  if (Math.abs(G) < 0.000001) {
    var minX = Math.min(x1, x2, x3);
    var minY = Math.min(y1, y2, y3);
    dx = (Math.max(x1, x2, x3) - minX) * 0.5;
    dy = (Math.max(y1, y2, y3) - minY) * 0.5;
    out.x = minX + dx;
    out.y = minY + dy;
    out.radius = Math.sqrt(dx * dx + dy * dy);
  } else {
    out.x = (D * E - B * F) / G;
    out.y = (A * F - C * E) / G;
    dx = out.x - x1;
    dy = out.y - y1;
    out.radius = Math.sqrt(dx * dx + dy * dy);
  }

  return out;
};

module.exports = CircumCircle;

/***/ }),

/***/ 5508:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Triangle = __webpack_require__(997);
/**
 * Clones a Triangle object.
 *
 * @function Phaser.Geom.Triangle.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} source - The Triangle to clone.
 *
 * @return {Phaser.Geom.Triangle} A new Triangle identical to the given one but separate from it.
 */


var Clone = function (source) {
  return new Triangle(source.x1, source.y1, source.x2, source.y2, source.x3, source.y3);
};

module.exports = Clone;

/***/ }),

/***/ 9503:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  http://www.blackpawn.com/texts/pointinpoly/

/**
 * Checks if a point (as a pair of coordinates) is inside a Triangle's bounds.
 *
 * @function Phaser.Geom.Triangle.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to check.
 * @param {number} x - The X coordinate of the point to check.
 * @param {number} y - The Y coordinate of the point to check.
 *
 * @return {boolean} `true` if the point is inside the Triangle, otherwise `false`.
 */
var Contains = function (triangle, x, y) {
  var v0x = triangle.x3 - triangle.x1;
  var v0y = triangle.y3 - triangle.y1;
  var v1x = triangle.x2 - triangle.x1;
  var v1y = triangle.y2 - triangle.y1;
  var v2x = x - triangle.x1;
  var v2y = y - triangle.y1;
  var dot00 = v0x * v0x + v0y * v0y;
  var dot01 = v0x * v1x + v0y * v1y;
  var dot02 = v0x * v2x + v0y * v2y;
  var dot11 = v1x * v1x + v1y * v1y;
  var dot12 = v1x * v2x + v1y * v2y; // Compute barycentric coordinates

  var b = dot00 * dot11 - dot01 * dot01;
  var inv = b === 0 ? 0 : 1 / b;
  var u = (dot11 * dot02 - dot01 * dot12) * inv;
  var v = (dot00 * dot12 - dot01 * dot02) * inv;
  return u >= 0 && v >= 0 && u + v < 1;
};

module.exports = Contains;

/***/ }),

/***/ 4112:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  http://www.blackpawn.com/texts/pointinpoly/
//  points is an array of Point-like objects with public x/y properties
//  returns an array containing all points that are within the triangle, or an empty array if none
//  if 'returnFirst' is true it will return after the first point within the triangle is found

/**
 * Filters an array of point-like objects to only those contained within a triangle.
 * If `returnFirst` is true, will return an array containing only the first point in the provided array that is within the triangle (or an empty array if there are no such points).
 *
 * @function Phaser.Geom.Triangle.ContainsArray
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The triangle that the points are being checked in.
 * @param {Phaser.Geom.Point[]} points - An array of point-like objects (objects that have an `x` and `y` property)
 * @param {boolean} [returnFirst=false] - If `true`, return an array containing only the first point found that is within the triangle.
 * @param {array} [out] - If provided, the points that are within the triangle will be appended to this array instead of being added to a new array. If `returnFirst` is true, only the first point found within the triangle will be appended. This array will also be returned by this function.
 *
 * @return {Phaser.Geom.Point[]} An array containing all the points from `points` that are within the triangle, if an array was provided as `out`, points will be appended to that array and it will also be returned here.
 */
var ContainsArray = function (triangle, points, returnFirst, out) {
  if (returnFirst === undefined) {
    returnFirst = false;
  }

  if (out === undefined) {
    out = [];
  }

  var v0x = triangle.x3 - triangle.x1;
  var v0y = triangle.y3 - triangle.y1;
  var v1x = triangle.x2 - triangle.x1;
  var v1y = triangle.y2 - triangle.y1;
  var dot00 = v0x * v0x + v0y * v0y;
  var dot01 = v0x * v1x + v0y * v1y;
  var dot11 = v1x * v1x + v1y * v1y; // Compute barycentric coordinates

  var b = dot00 * dot11 - dot01 * dot01;
  var inv = b === 0 ? 0 : 1 / b;
  var u;
  var v;
  var v2x;
  var v2y;
  var dot02;
  var dot12;
  var x1 = triangle.x1;
  var y1 = triangle.y1;

  for (var i = 0; i < points.length; i++) {
    v2x = points[i].x - x1;
    v2y = points[i].y - y1;
    dot02 = v0x * v2x + v0y * v2y;
    dot12 = v1x * v2x + v1y * v2y;
    u = (dot11 * dot02 - dot01 * dot12) * inv;
    v = (dot00 * dot12 - dot01 * dot02) * inv;

    if (u >= 0 && v >= 0 && u + v < 1) {
      out.push({
        x: points[i].x,
        y: points[i].y
      });

      if (returnFirst) {
        break;
      }
    }
  }

  return out;
};

module.exports = ContainsArray;

/***/ }),

/***/ 4703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Contains = __webpack_require__(9503);
/**
 * Tests if a triangle contains a point.
 *
 * @function Phaser.Geom.Triangle.ContainsPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The triangle.
 * @param {(Phaser.Geom.Point|Phaser.Math.Vector2|any)} point - The point to test, or any point-like object with public `x` and `y` properties.
 *
 * @return {boolean} `true` if the point is within the triangle, otherwise `false`.
 */


var ContainsPoint = function (triangle, point) {
  return Contains(triangle, point.x, point.y);
};

module.exports = ContainsPoint;

/***/ }),

/***/ 9602:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Triangle to a destination Triangle.
 *
 * @function Phaser.Geom.Triangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [dest,$return]
 *
 * @param {Phaser.Geom.Triangle} source - The source Triangle to copy the values from.
 * @param {Phaser.Geom.Triangle} dest - The destination Triangle to copy the values to.
 *
 * @return {Phaser.Geom.Triangle} The destination Triangle.
 */
var CopyFrom = function (source, dest) {
  return dest.setTo(source.x1, source.y1, source.x2, source.y2, source.x3, source.y3);
};

module.exports = CopyFrom;

/***/ }),

/***/ 3984:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Decomposes a Triangle into an array of its points.
 *
 * @function Phaser.Geom.Triangle.Decompose
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to decompose.
 * @param {array} [out] - An array to store the points into.
 *
 * @return {array} The provided `out` array, or a new array if none was provided, with three objects with `x` and `y` properties representing each point of the Triangle appended to it.
 */
var Decompose = function (triangle, out) {
  if (out === undefined) {
    out = [];
  }

  out.push({
    x: triangle.x1,
    y: triangle.y1
  });
  out.push({
    x: triangle.x2,
    y: triangle.y2
  });
  out.push({
    x: triangle.x3,
    y: triangle.y3
  });
  return out;
};

module.exports = Decompose;

/***/ }),

/***/ 1101:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns true if two triangles have the same coordinates.
 *
 * @function Phaser.Geom.Triangle.Equals
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The first triangle to check.
 * @param {Phaser.Geom.Triangle} toCompare - The second triangle to check.
 *
 * @return {boolean} `true` if the two given triangles have the exact same coordinates, otherwise `false`.
 */
var Equals = function (triangle, toCompare) {
  return triangle.x1 === toCompare.x1 && triangle.y1 === toCompare.y1 && triangle.x2 === toCompare.x2 && triangle.y2 === toCompare.y2 && triangle.x3 === toCompare.x3 && triangle.y3 === toCompare.y3;
};

module.exports = Equals;

/***/ }),

/***/ 6742:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);

var Length = __webpack_require__(6753);
/**
 * Returns a Point from around the perimeter of a Triangle.
 *
 * @function Phaser.Geom.Triangle.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the point on its perimeter from.
 * @param {number} position - The position along the perimeter of the triangle. A value between 0 and 1.
 * @param {(Phaser.Geom.Point|object)} [out] - An option Point, or Point-like object to store the value in. If not given a new Point will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object containing the given position from the perimeter of the triangle.
 */


var GetPoint = function (triangle, position, out) {
  if (out === undefined) {
    out = new Point();
  }

  var line1 = triangle.getLineA();
  var line2 = triangle.getLineB();
  var line3 = triangle.getLineC();

  if (position <= 0 || position >= 1) {
    out.x = line1.x1;
    out.y = line1.y1;
    return out;
  }

  var length1 = Length(line1);
  var length2 = Length(line2);
  var length3 = Length(line3);
  var perimeter = length1 + length2 + length3;
  var p = perimeter * position;
  var localPosition = 0; //  Which line is it on?

  if (p < length1) {
    //  Line 1
    localPosition = p / length1;
    out.x = line1.x1 + (line1.x2 - line1.x1) * localPosition;
    out.y = line1.y1 + (line1.y2 - line1.y1) * localPosition;
  } else if (p > length1 + length2) {
    //  Line 3
    p -= length1 + length2;
    localPosition = p / length3;
    out.x = line3.x1 + (line3.x2 - line3.x1) * localPosition;
    out.y = line3.y1 + (line3.y2 - line3.y1) * localPosition;
  } else {
    //  Line 2
    p -= length1;
    localPosition = p / length2;
    out.x = line2.x1 + (line2.x2 - line2.x1) * localPosition;
    out.y = line2.y1 + (line2.y2 - line2.y1) * localPosition;
  }

  return out;
};

module.exports = GetPoint;

/***/ }),

/***/ 1978:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Length = __webpack_require__(6753);

var Point = __webpack_require__(9106);
/**
 * Returns an array of evenly spaced points on the perimeter of a Triangle.
 *
 * @function Phaser.Geom.Triangle.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the points from.
 * @param {number} quantity - The number of evenly spaced points to return. Set to 0 to return an arbitrary number of points based on the `stepRate`.
 * @param {number} stepRate - If `quantity` is 0, the distance between each returned point.
 * @param {(array|Phaser.Geom.Point[])} [out] - An array to which the points should be appended.
 *
 * @return {(array|Phaser.Geom.Point[])} The modified `out` array, or a new array if none was provided.
 */


var GetPoints = function (triangle, quantity, stepRate, out) {
  if (out === undefined) {
    out = [];
  }

  var line1 = triangle.getLineA();
  var line2 = triangle.getLineB();
  var line3 = triangle.getLineC();
  var length1 = Length(line1);
  var length2 = Length(line2);
  var length3 = Length(line3);
  var perimeter = length1 + length2 + length3; //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.

  if (!quantity && stepRate > 0) {
    quantity = perimeter / stepRate;
  }

  for (var i = 0; i < quantity; i++) {
    var p = perimeter * (i / quantity);
    var localPosition = 0;
    var point = new Point(); //  Which line is it on?

    if (p < length1) {
      //  Line 1
      localPosition = p / length1;
      point.x = line1.x1 + (line1.x2 - line1.x1) * localPosition;
      point.y = line1.y1 + (line1.y2 - line1.y1) * localPosition;
    } else if (p > length1 + length2) {
      //  Line 3
      p -= length1 + length2;
      localPosition = p / length3;
      point.x = line3.x1 + (line3.x2 - line3.x1) * localPosition;
      point.y = line3.y1 + (line3.y2 - line3.y1) * localPosition;
    } else {
      //  Line 2
      p -= length1;
      localPosition = p / length2;
      point.x = line2.x1 + (line2.x2 - line2.x1) * localPosition;
      point.y = line2.y1 + (line2.y2 - line2.y1) * localPosition;
    }

    out.push(point);
  }

  return out;
};

module.exports = GetPoints;

/***/ }),

/***/ 690:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106); // The three angle bisectors of a triangle meet in one point called the incenter.
// It is the center of the incircle, the circle inscribed in the triangle.


function getLength(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  var magnitude = x * x + y * y;
  return Math.sqrt(magnitude);
}
/**
 * Calculates the position of the incenter of a Triangle object. This is the point where its three angle bisectors meet and it's also the center of the incircle, which is the circle inscribed in the triangle.
 *
 * @function Phaser.Geom.Triangle.InCenter
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to find the incenter of.
 * @param {Phaser.Geom.Point} [out] - An optional Point in which to store the coordinates.
 *
 * @return {Phaser.Geom.Point} Point (x, y) of the center pixel of the triangle.
 */


var InCenter = function (triangle, out) {
  if (out === undefined) {
    out = new Point();
  }

  var x1 = triangle.x1;
  var y1 = triangle.y1;
  var x2 = triangle.x2;
  var y2 = triangle.y2;
  var x3 = triangle.x3;
  var y3 = triangle.y3;
  var d1 = getLength(x3, y3, x2, y2);
  var d2 = getLength(x1, y1, x3, y3);
  var d3 = getLength(x2, y2, x1, y1);
  var p = d1 + d2 + d3;
  out.x = (x1 * d1 + x2 * d2 + x3 * d3) / p;
  out.y = (y1 * d1 + y2 * d2 + y3 * d3) / p;
  return out;
};

module.exports = InCenter;

/***/ }),

/***/ 2462:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Moves each point (vertex) of a Triangle by a given offset, thus moving the entire Triangle by that offset.
 *
 * @function Phaser.Geom.Triangle.Offset
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to move.
 * @param {number} x - The horizontal offset (distance) by which to move each point. Can be positive or negative.
 * @param {number} y - The vertical offset (distance) by which to move each point. Can be positive or negative.
 *
 * @return {Phaser.Geom.Triangle} The modified Triangle.
 */
var Offset = function (triangle, x, y) {
  triangle.x1 += x;
  triangle.y1 += y;
  triangle.x2 += x;
  triangle.y2 += y;
  triangle.x3 += x;
  triangle.y3 += y;
  return triangle;
};

module.exports = Offset;

/***/ }),

/***/ 9259:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Length = __webpack_require__(6753);
/**
 * Gets the length of the perimeter of the given triangle.
 * Calculated by adding together the length of each of the three sides.
 *
 * @function Phaser.Geom.Triangle.Perimeter
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the length from.
 *
 * @return {number} The length of the Triangle.
 */


var Perimeter = function (triangle) {
  var line1 = triangle.getLineA();
  var line2 = triangle.getLineB();
  var line3 = triangle.getLineC();
  return Length(line1) + Length(line2) + Length(line3);
};

module.exports = Perimeter;

/***/ }),

/***/ 1057:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Point = __webpack_require__(9106);
/**
 * Returns a random Point from within the area of the given Triangle.
 *
 * @function Phaser.Geom.Triangle.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get a random point from.
 * @param {Phaser.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A Point object holding the coordinates of a random position within the Triangle.
 */


var Random = function (triangle, out) {
  if (out === undefined) {
    out = new Point();
  } //  Basis vectors


  var ux = triangle.x2 - triangle.x1;
  var uy = triangle.y2 - triangle.y1;
  var vx = triangle.x3 - triangle.x1;
  var vy = triangle.y3 - triangle.y1; //  Random point within the unit square

  var r = Math.random();
  var s = Math.random(); //  Point outside the triangle? Remap it.

  if (r + s >= 1) {
    r = 1 - r;
    s = 1 - s;
  }

  out.x = triangle.x1 + (ux * r + vx * s);
  out.y = triangle.y1 + (uy * r + vy * s);
  return out;
};

module.exports = Random;

/***/ }),

/***/ 99:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var RotateAroundXY = __webpack_require__(1062);

var InCenter = __webpack_require__(690);
/**
 * Rotates a Triangle about its incenter, which is the point at which its three angle bisectors meet.
 *
 * @function Phaser.Geom.Triangle.Rotate
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to rotate.
 * @param {number} angle - The angle by which to rotate the Triangle, in radians.
 *
 * @return {Phaser.Geom.Triangle} The rotated Triangle.
 */


var Rotate = function (triangle, angle) {
  var point = InCenter(triangle);
  return RotateAroundXY(triangle, point.x, point.y, angle);
};

module.exports = Rotate;

/***/ }),

/***/ 9215:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var RotateAroundXY = __webpack_require__(1062);
/**
 * Rotates a Triangle at a certain angle about a given Point or object with public `x` and `y` properties.
 *
 * @function Phaser.Geom.Triangle.RotateAroundPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to rotate.
 * @param {Phaser.Geom.Point} point - The Point to rotate the Triangle about.
 * @param {number} angle - The angle by which to rotate the Triangle, in radians.
 *
 * @return {Phaser.Geom.Triangle} The rotated Triangle.
 */


var RotateAroundPoint = function (triangle, point, angle) {
  return RotateAroundXY(triangle, point.x, point.y, angle);
};

module.exports = RotateAroundPoint;

/***/ }),

/***/ 1062:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotates an entire Triangle at a given angle about a specific point.
 *
 * @function Phaser.Geom.Triangle.RotateAroundXY
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to rotate.
 * @param {number} x - The X coordinate of the point to rotate the Triangle about.
 * @param {number} y - The Y coordinate of the point to rotate the Triangle about.
 * @param {number} angle - The angle by which to rotate the Triangle, in radians.
 *
 * @return {Phaser.Geom.Triangle} The rotated Triangle.
 */
var RotateAroundXY = function (triangle, x, y, angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  var tx = triangle.x1 - x;
  var ty = triangle.y1 - y;
  triangle.x1 = tx * c - ty * s + x;
  triangle.y1 = tx * s + ty * c + y;
  tx = triangle.x2 - x;
  ty = triangle.y2 - y;
  triangle.x2 = tx * c - ty * s + x;
  triangle.y2 = tx * s + ty * c + y;
  tx = triangle.x3 - x;
  ty = triangle.y3 - y;
  triangle.x3 = tx * c - ty * s + x;
  triangle.y3 = tx * s + ty * c + y;
  return triangle;
};

module.exports = RotateAroundXY;

/***/ }),

/***/ 997:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Contains = __webpack_require__(9503);

var GetPoint = __webpack_require__(6742);

var GetPoints = __webpack_require__(1978);

var GEOM_CONST = __webpack_require__(9277);

var Line = __webpack_require__(9778);

var Random = __webpack_require__(1057);
/**
 * @classdesc
 * A triangle is a plane created by connecting three points.
 * The first two arguments specify the first point, the middle two arguments
 * specify the second point, and the last two arguments specify the third point.
 *
 * @class Triangle
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x1=0] - `x` coordinate of the first point.
 * @param {number} [y1=0] - `y` coordinate of the first point.
 * @param {number} [x2=0] - `x` coordinate of the second point.
 * @param {number} [y2=0] - `y` coordinate of the second point.
 * @param {number} [x3=0] - `x` coordinate of the third point.
 * @param {number} [y3=0] - `y` coordinate of the third point.
 */


var Triangle = new Class({
  initialize: function Triangle(x1, y1, x2, y2, x3, y3) {
    if (x1 === undefined) {
      x1 = 0;
    }

    if (y1 === undefined) {
      y1 = 0;
    }

    if (x2 === undefined) {
      x2 = 0;
    }

    if (y2 === undefined) {
      y2 = 0;
    }

    if (x3 === undefined) {
      x3 = 0;
    }

    if (y3 === undefined) {
      y3 = 0;
    }
    /**
     * The geometry constant type of this object: `GEOM_CONST.TRIANGLE`.
     * Used for fast type comparisons.
     *
     * @name Phaser.Geom.Triangle#type
     * @type {number}
     * @readonly
     * @since 3.19.0
     */


    this.type = GEOM_CONST.TRIANGLE;
    /**
     * `x` coordinate of the first point.
     *
     * @name Phaser.Geom.Triangle#x1
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x1 = x1;
    /**
     * `y` coordinate of the first point.
     *
     * @name Phaser.Geom.Triangle#y1
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y1 = y1;
    /**
     * `x` coordinate of the second point.
     *
     * @name Phaser.Geom.Triangle#x2
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x2 = x2;
    /**
     * `y` coordinate of the second point.
     *
     * @name Phaser.Geom.Triangle#y2
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y2 = y2;
    /**
     * `x` coordinate of the third point.
     *
     * @name Phaser.Geom.Triangle#x3
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.x3 = x3;
    /**
     * `y` coordinate of the third point.
     *
     * @name Phaser.Geom.Triangle#y3
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y3 = y3;
  },

  /**
   * Checks whether a given points lies within the triangle.
   *
   * @method Phaser.Geom.Triangle#contains
   * @since 3.0.0
   *
   * @param {number} x - The x coordinate of the point to check.
   * @param {number} y - The y coordinate of the point to check.
   *
   * @return {boolean} `true` if the coordinate pair is within the triangle, otherwise `false`.
   */
  contains: function (x, y) {
    return Contains(this, x, y);
  },

  /**
   * Returns a specific point  on the triangle.
   *
   * @method Phaser.Geom.Triangle#getPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [output,$return]
   *
   * @param {number} position - Position as float within `0` and `1`. `0` equals the first point.
   * @param {(Phaser.Geom.Point|object)} [output] - Optional Point, or point-like object, that the calculated point will be written to.
   *
   * @return {(Phaser.Geom.Point|object)} Calculated `Point` that represents the requested position. It is the same as `output` when this parameter has been given.
   */
  getPoint: function (position, output) {
    return GetPoint(this, position, output);
  },

  /**
   * Calculates a list of evenly distributed points on the triangle. It is either possible to pass an amount of points to be generated (`quantity`) or the distance between two points (`stepRate`).
   *
   * @method Phaser.Geom.Triangle#getPoints
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point[]} O - [output,$return]
   *
   * @param {number} quantity - Number of points to be generated. Can be falsey when `stepRate` should be used. All points have the same distance along the triangle.
   * @param {number} [stepRate] - Distance between two points. Will only be used when `quantity` is falsey.
   * @param {(array|Phaser.Geom.Point[])} [output] - Optional Array for writing the calculated points into. Otherwise a new array will be created.
   *
   * @return {(array|Phaser.Geom.Point[])} Returns a list of calculated `Point` instances or the filled array passed as parameter `output`.
   */
  getPoints: function (quantity, stepRate, output) {
    return GetPoints(this, quantity, stepRate, output);
  },

  /**
   * Returns a random point along the triangle.
   *
   * @method Phaser.Geom.Triangle#getRandomPoint
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Point} O - [point,$return]
   *
   * @param {Phaser.Geom.Point} [point] - Optional `Point` that should be modified. Otherwise a new one will be created.
   *
   * @return {Phaser.Geom.Point} Random `Point`. When parameter `point` has been provided it will be returned.
   */
  getRandomPoint: function (point) {
    return Random(this, point);
  },

  /**
   * Sets all three points of the triangle. Leaving out any coordinate sets it to be `0`.
   *
   * @method Phaser.Geom.Triangle#setTo
   * @since 3.0.0
   *
   * @param {number} [x1=0] - `x` coordinate of the first point.
   * @param {number} [y1=0] - `y` coordinate of the first point.
   * @param {number} [x2=0] - `x` coordinate of the second point.
   * @param {number} [y2=0] - `y` coordinate of the second point.
   * @param {number} [x3=0] - `x` coordinate of the third point.
   * @param {number} [y3=0] - `y` coordinate of the third point.
   *
   * @return {this} This Triangle object.
   */
  setTo: function (x1, y1, x2, y2, x3, y3) {
    if (x1 === undefined) {
      x1 = 0;
    }

    if (y1 === undefined) {
      y1 = 0;
    }

    if (x2 === undefined) {
      x2 = 0;
    }

    if (y2 === undefined) {
      y2 = 0;
    }

    if (x3 === undefined) {
      x3 = 0;
    }

    if (y3 === undefined) {
      y3 = 0;
    }

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    return this;
  },

  /**
   * Returns a Line object that corresponds to Line A of this Triangle.
   *
   * @method Phaser.Geom.Triangle#getLineA
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to line A of this Triangle.
   */
  getLineA: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.x1, this.y1, this.x2, this.y2);
    return line;
  },

  /**
   * Returns a Line object that corresponds to Line B of this Triangle.
   *
   * @method Phaser.Geom.Triangle#getLineB
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to line B of this Triangle.
   */
  getLineB: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.x2, this.y2, this.x3, this.y3);
    return line;
  },

  /**
   * Returns a Line object that corresponds to Line C of this Triangle.
   *
   * @method Phaser.Geom.Triangle#getLineC
   * @since 3.0.0
   *
   * @generic {Phaser.Geom.Line} O - [line,$return]
   *
   * @param {Phaser.Geom.Line} [line] - A Line object to set the results in. If `undefined` a new Line will be created.
   *
   * @return {Phaser.Geom.Line} A Line object that corresponds to line C of this Triangle.
   */
  getLineC: function (line) {
    if (line === undefined) {
      line = new Line();
    }

    line.setTo(this.x3, this.y3, this.x1, this.y1);
    return line;
  },

  /**
   * Left most X coordinate of the triangle. Setting it moves the triangle on the X axis accordingly.
   *
   * @name Phaser.Geom.Triangle#left
   * @type {number}
   * @since 3.0.0
   */
  left: {
    get: function () {
      return Math.min(this.x1, this.x2, this.x3);
    },
    set: function (value) {
      var diff = 0;

      if (this.x1 <= this.x2 && this.x1 <= this.x3) {
        diff = this.x1 - value;
      } else if (this.x2 <= this.x1 && this.x2 <= this.x3) {
        diff = this.x2 - value;
      } else {
        diff = this.x3 - value;
      }

      this.x1 -= diff;
      this.x2 -= diff;
      this.x3 -= diff;
    }
  },

  /**
   * Right most X coordinate of the triangle. Setting it moves the triangle on the X axis accordingly.
   *
   * @name Phaser.Geom.Triangle#right
   * @type {number}
   * @since 3.0.0
   */
  right: {
    get: function () {
      return Math.max(this.x1, this.x2, this.x3);
    },
    set: function (value) {
      var diff = 0;

      if (this.x1 >= this.x2 && this.x1 >= this.x3) {
        diff = this.x1 - value;
      } else if (this.x2 >= this.x1 && this.x2 >= this.x3) {
        diff = this.x2 - value;
      } else {
        diff = this.x3 - value;
      }

      this.x1 -= diff;
      this.x2 -= diff;
      this.x3 -= diff;
    }
  },

  /**
   * Top most Y coordinate of the triangle. Setting it moves the triangle on the Y axis accordingly.
   *
   * @name Phaser.Geom.Triangle#top
   * @type {number}
   * @since 3.0.0
   */
  top: {
    get: function () {
      return Math.min(this.y1, this.y2, this.y3);
    },
    set: function (value) {
      var diff = 0;

      if (this.y1 <= this.y2 && this.y1 <= this.y3) {
        diff = this.y1 - value;
      } else if (this.y2 <= this.y1 && this.y2 <= this.y3) {
        diff = this.y2 - value;
      } else {
        diff = this.y3 - value;
      }

      this.y1 -= diff;
      this.y2 -= diff;
      this.y3 -= diff;
    }
  },

  /**
   * Bottom most Y coordinate of the triangle. Setting it moves the triangle on the Y axis accordingly.
   *
   * @name Phaser.Geom.Triangle#bottom
   * @type {number}
   * @since 3.0.0
   */
  bottom: {
    get: function () {
      return Math.max(this.y1, this.y2, this.y3);
    },
    set: function (value) {
      var diff = 0;

      if (this.y1 >= this.y2 && this.y1 >= this.y3) {
        diff = this.y1 - value;
      } else if (this.y2 >= this.y1 && this.y2 >= this.y3) {
        diff = this.y2 - value;
      } else {
        diff = this.y3 - value;
      }

      this.y1 -= diff;
      this.y2 -= diff;
      this.y3 -= diff;
    }
  }
});
module.exports = Triangle;

/***/ }),

/***/ 6636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Triangle = __webpack_require__(997);

Triangle.Area = __webpack_require__(9530);
Triangle.BuildEquilateral = __webpack_require__(6613);
Triangle.BuildFromPolygon = __webpack_require__(9888);
Triangle.BuildRight = __webpack_require__(365);
Triangle.CenterOn = __webpack_require__(6453);
Triangle.Centroid = __webpack_require__(400);
Triangle.CircumCenter = __webpack_require__(727);
Triangle.CircumCircle = __webpack_require__(3945);
Triangle.Clone = __webpack_require__(5508);
Triangle.Contains = __webpack_require__(9503);
Triangle.ContainsArray = __webpack_require__(4112);
Triangle.ContainsPoint = __webpack_require__(4703);
Triangle.CopyFrom = __webpack_require__(9602);
Triangle.Decompose = __webpack_require__(3984);
Triangle.Equals = __webpack_require__(1101);
Triangle.GetPoint = __webpack_require__(6742);
Triangle.GetPoints = __webpack_require__(1978);
Triangle.InCenter = __webpack_require__(690);
Triangle.Perimeter = __webpack_require__(9259);
Triangle.Offset = __webpack_require__(2462);
Triangle.Random = __webpack_require__(1057);
Triangle.Rotate = __webpack_require__(99);
Triangle.RotateAroundPoint = __webpack_require__(9215);
Triangle.RotateAroundXY = __webpack_require__(1062);
module.exports = Triangle;

/***/ }),

/***/ 9011:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the mean average of the given values.
 *
 * @function Phaser.Math.Average
 * @since 3.0.0
 *
 * @param {number[]} values - The values to average.
 *
 * @return {number} The average value.
 */
var Average = function (values) {
  var sum = 0;

  for (var i = 0; i < values.length; i++) {
    sum += +values[i];
  }

  return sum / values.length;
};

module.exports = Average;

/***/ }),

/***/ 4908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Factorial = __webpack_require__(6038);
/**
 * Calculates the Bernstein basis from the three factorial coefficients.
 *
 * @function Phaser.Math.Bernstein
 * @since 3.0.0
 *
 * @param {number} n - The first value.
 * @param {number} i - The second value.
 *
 * @return {number} The Bernstein basis of Factorial(n) / Factorial(i) / Factorial(n - i)
 */


var Bernstein = function (n, i) {
  return Factorial(n) / Factorial(i) / Factorial(n - i);
};

module.exports = Bernstein;

/***/ }),

/***/ 7443:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compute a random integer between the `min` and `max` values, inclusive.
 *
 * @function Phaser.Math.Between
 * @since 3.0.0
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 *
 * @return {number} The random integer.
 */
var Between = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = Between;

/***/ }),

/***/ 3179:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates a Catmull-Rom value from the given points, based on an alpha of 0.5.
 *
 * @function Phaser.Math.CatmullRom
 * @since 3.0.0
 *
 * @param {number} t - The amount to interpolate by.
 * @param {number} p0 - The first control point.
 * @param {number} p1 - The second control point.
 * @param {number} p2 - The third control point.
 * @param {number} p3 - The fourth control point.
 *
 * @return {number} The Catmull-Rom value.
 */
var CatmullRom = function (t, p0, p1, p2, p3) {
  var v0 = (p2 - p0) * 0.5;
  var v1 = (p3 - p1) * 0.5;
  var t2 = t * t;
  var t3 = t * t2;
  return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
};

module.exports = CatmullRom;

/***/ }),

/***/ 9457:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Ceils to some place comparative to a `base`, default is 10 for decimal place.
 *
 * The `place` is represented by the power applied to `base` to get that place.
 *
 * @function Phaser.Math.CeilTo
 * @since 3.0.0
 *
 * @param {number} value - The value to round.
 * @param {number} [place=0] - The place to round to.
 * @param {number} [base=10] - The base to round in. Default is 10 for decimal.
 *
 * @return {number} The rounded value.
 */
var CeilTo = function (value, place, base) {
  if (place === undefined) {
    place = 0;
  }

  if (base === undefined) {
    base = 10;
  }

  var p = Math.pow(base, -place);
  return Math.ceil(value * p) / p;
};

module.exports = CeilTo;

/***/ }),

/***/ 1495:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Force a value within the boundaries by clamping it to the range `min`, `max`.
 *
 * @function Phaser.Math.Clamp
 * @since 3.0.0
 *
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum bounds.
 * @param {number} max - The maximum bounds.
 *
 * @return {number} The clamped value.
 */
var Clamp = function (value, min, max) {
  return Math.max(min, Math.min(max, value));
};

module.exports = Clamp;

/***/ }),

/***/ 3490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CONST = __webpack_require__(611);
/**
 * Convert the given angle from degrees, to the equivalent angle in radians.
 *
 * @function Phaser.Math.DegToRad
 * @since 3.0.0
 *
 * @param {number} degrees - The angle (in degrees) to convert to radians.
 *
 * @return {number} The given angle converted to radians.
 */


var DegToRad = function (degrees) {
  return degrees * CONST.DEG_TO_RAD;
};

module.exports = DegToRad;

/***/ }),

/***/ 2125:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the positive difference of two given numbers.
 *
 * @function Phaser.Math.Difference
 * @since 3.0.0
 *
 * @param {number} a - The first number in the calculation.
 * @param {number} b - The second number in the calculation.
 *
 * @return {number} The positive difference of the two given numbers.
 */
var Difference = function (a, b) {
  return Math.abs(a - b);
};

module.exports = Difference;

/***/ }),

/***/ 7368:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Clamp = __webpack_require__(1495);

var Class = __webpack_require__(3018);

var Matrix4 = __webpack_require__(5332);

var NOOP = __webpack_require__(9584);

var tempMatrix = new Matrix4();
/**
 * @classdesc
 *
 * @class Euler
 * @memberof Phaser.Math
 * @constructor
 * @since 3.50.0
 *
 * @param {number} [x] - The x component.
 * @param {number} [y] - The y component.
 * @param {number} [z] - The z component.
 */

var Euler = new Class({
  initialize: function Euler(x, y, z, order) {
    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = 0;
    }

    if (z === undefined) {
      z = 0;
    }

    if (order === undefined) {
      order = Euler.DefaultOrder;
    }

    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this.onChangeCallback = NOOP;
  },
  x: {
    get: function () {
      return this._x;
    },
    set: function (value) {
      this._x = value;
      this.onChangeCallback(this);
    }
  },
  y: {
    get: function () {
      return this._y;
    },
    set: function (value) {
      this._y = value;
      this.onChangeCallback(this);
    }
  },
  z: {
    get: function () {
      return this._z;
    },
    set: function (value) {
      this._z = value;
      this.onChangeCallback(this);
    }
  },
  order: {
    get: function () {
      return this._order;
    },
    set: function (value) {
      this._order = value;
      this.onChangeCallback(this);
    }
  },
  set: function (x, y, z, order) {
    if (order === undefined) {
      order = this._order;
    }

    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this.onChangeCallback(this);
    return this;
  },
  copy: function (euler) {
    return this.set(euler.x, euler.y, euler.z, euler.order);
  },
  setFromQuaternion: function (quaternion, order, update) {
    if (order === undefined) {
      order = this._order;
    }

    if (update === undefined) {
      update = false;
    }

    tempMatrix.fromQuat(quaternion);
    return this.setFromRotationMatrix(tempMatrix, order, update);
  },
  setFromRotationMatrix: function (matrix, order, update) {
    if (order === undefined) {
      order = this._order;
    }

    if (update === undefined) {
      update = false;
    }

    var elements = matrix.val; //  Upper 3x3 of matrix is un-scaled rotation matrix

    var m11 = elements[0];
    var m12 = elements[4];
    var m13 = elements[8];
    var m21 = elements[1];
    var m22 = elements[5];
    var m23 = elements[9];
    var m31 = elements[2];
    var m32 = elements[6];
    var m33 = elements[10];
    var x = 0;
    var y = 0;
    var z = 0;
    var epsilon = 0.99999;

    switch (order) {
      case 'XYZ':
        {
          y = Math.asin(Clamp(m13, -1, 1));

          if (Math.abs(m13) < epsilon) {
            x = Math.atan2(-m23, m33);
            z = Math.atan2(-m12, m11);
          } else {
            x = Math.atan2(m32, m22);
          }

          break;
        }

      case 'YXZ':
        {
          x = Math.asin(-Clamp(m23, -1, 1));

          if (Math.abs(m23) < epsilon) {
            y = Math.atan2(m13, m33);
            z = Math.atan2(m21, m22);
          } else {
            y = Math.atan2(-m31, m11);
          }

          break;
        }

      case 'ZXY':
        {
          x = Math.asin(Clamp(m32, -1, 1));

          if (Math.abs(m32) < epsilon) {
            y = Math.atan2(-m31, m33);
            z = Math.atan2(-m12, m22);
          } else {
            z = Math.atan2(m21, m11);
          }

          break;
        }

      case 'ZYX':
        {
          y = Math.asin(-Clamp(m31, -1, 1));

          if (Math.abs(m31) < epsilon) {
            x = Math.atan2(m32, m33);
            z = Math.atan2(m21, m11);
          } else {
            z = Math.atan2(-m12, m22);
          }

          break;
        }

      case 'YZX':
        {
          z = Math.asin(Clamp(m21, -1, 1));

          if (Math.abs(m21) < epsilon) {
            x = Math.atan2(-m23, m22);
            y = Math.atan2(-m31, m11);
          } else {
            y = Math.atan2(m13, m33);
          }

          break;
        }

      case 'XZY':
        {
          z = Math.asin(-Clamp(m12, -1, 1));

          if (Math.abs(m12) < epsilon) {
            x = Math.atan2(m32, m22);
            y = Math.atan2(m13, m11);
          } else {
            x = Math.atan2(-m23, m33);
          }

          break;
        }
    }

    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;

    if (update) {
      this.onChangeCallback(this);
    }

    return this;
  }
});
Euler.RotationOrders = ['XYZ', 'YXZ', 'ZXY', 'ZYX', 'YZX', 'XZY'];
Euler.DefaultOrder = 'XYZ';
module.exports = Euler;

/***/ }),

/***/ 6038:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the factorial of a given number for integer values greater than 0.
 *
 * @function Phaser.Math.Factorial
 * @since 3.0.0
 *
 * @param {number} value - A positive integer to calculate the factorial of.
 *
 * @return {number} The factorial of the given number.
 */
var Factorial = function (value) {
  if (value === 0) {
    return 1;
  }

  var res = value;

  while (--value) {
    res *= value;
  }

  return res;
};

module.exports = Factorial;

/***/ }),

/***/ 289:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Generate a random floating point number between the two given bounds, minimum inclusive, maximum exclusive.
 *
 * @function Phaser.Math.FloatBetween
 * @since 3.0.0
 *
 * @param {number} min - The lower bound for the float, inclusive.
 * @param {number} max - The upper bound for the float exclusive.
 *
 * @return {number} A random float within the given range.
 */
var FloatBetween = function (min, max) {
  return Math.random() * (max - min) + min;
};

module.exports = FloatBetween;

/***/ }),

/***/ 9354:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Floors to some place comparative to a `base`, default is 10 for decimal place.
 *
 * The `place` is represented by the power applied to `base` to get that place.
 *
 * @function Phaser.Math.FloorTo
 * @since 3.0.0
 *
 * @param {number} value - The value to round.
 * @param {number} [place=0] - The place to round to.
 * @param {number} [base=10] - The base to round in. Default is 10 for decimal.
 *
 * @return {number} The rounded value.
 */
var FloorTo = function (value, place, base) {
  if (place === undefined) {
    place = 0;
  }

  if (base === undefined) {
    base = 10;
  }

  var p = Math.pow(base, -place);
  return Math.floor(value * p) / p;
};

module.exports = FloorTo;

/***/ }),

/***/ 3579:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Clamp = __webpack_require__(1495);
/**
 * Return a value based on the range between `min` and `max` and the percentage given.
 *
 * @function Phaser.Math.FromPercent
 * @since 3.0.0
 *
 * @param {number} percent - A value between 0 and 1 representing the percentage.
 * @param {number} min - The minimum value.
 * @param {number} [max] - The maximum value.
 *
 * @return {number} The value that is `percent` percent between `min` and `max`.
 */


var FromPercent = function (percent, min, max) {
  percent = Clamp(percent, 0, 1);
  return (max - min) * percent + min;
};

module.exports = FromPercent;

/***/ }),

/***/ 1164:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate a per-ms speed from a distance and time (given in seconds).
 *
 * @function Phaser.Math.GetSpeed
 * @since 3.0.0
 *
 * @param {number} distance - The distance.
 * @param {number} time - The time, in seconds.
 *
 * @return {number} The speed, in distance per ms.
 *
 * @example
 * // 400px over 1 second is 0.4 px/ms
 * Phaser.Math.GetSpeed(400, 1) // -> 0.4
 */
var GetSpeed = function (distance, time) {
  return distance / time / 1000;
};

module.exports = GetSpeed;

/***/ }),

/***/ 3:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check if a given value is an even number.
 *
 * @function Phaser.Math.IsEven
 * @since 3.0.0
 *
 * @param {number} value - The number to perform the check with.
 *
 * @return {boolean} Whether the number is even or not.
 */
var IsEven = function (value) {
  // Use abstract equality == for "is number" test
  // eslint-disable-next-line eqeqeq
  return value == parseFloat(value) ? !(value % 2) : void 0;
};

module.exports = IsEven;

/***/ }),

/***/ 7635:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check if a given value is an even number using a strict type check.
 *
 * @function Phaser.Math.IsEvenStrict
 * @since 3.0.0
 *
 * @param {number} value - The number to perform the check with.
 *
 * @return {boolean} Whether the number is even or not.
 */
var IsEvenStrict = function (value) {
  // Use strict equality === for "is number" test
  return value === parseFloat(value) ? !(value % 2) : void 0;
};

module.exports = IsEvenStrict;

/***/ }),

/***/ 7684:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates a linear (interpolation) value over t.
 *
 * @function Phaser.Math.Linear
 * @since 3.0.0
 *
 * @param {number} p0 - The first point.
 * @param {number} p1 - The second point.
 * @param {number} t - The percentage between p0 and p1 to return, represented as a number between 0 and 1.
 *
 * @return {number} The step t% of the way between p0 and p1.
 */
var Linear = function (p0, p1, t) {
  return (p1 - p0) * t + p0;
};

module.exports = Linear;

/***/ }),

/***/ 7125:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(8675);

__webpack_require__(3462);

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
var Class = __webpack_require__(3018);
/**
 * @classdesc
 * A three-dimensional matrix.
 *
 * Defaults to the identity matrix when instantiated.
 *
 * @class Matrix3
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Math.Matrix3} [m] - Optional Matrix3 to copy values from.
 */


var Matrix3 = new Class({
  initialize: function Matrix3(m) {
    /**
     * The matrix values.
     *
     * @name Phaser.Math.Matrix3#val
     * @type {Float32Array}
     * @since 3.0.0
     */
    this.val = new Float32Array(9);

    if (m) {
      //  Assume Matrix3 with val:
      this.copy(m);
    } else {
      //  Default to identity
      this.identity();
    }
  },

  /**
   * Make a clone of this Matrix3.
   *
   * @method Phaser.Math.Matrix3#clone
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix3} A clone of this Matrix3.
   */
  clone: function () {
    return new Matrix3(this);
  },

  /**
   * This method is an alias for `Matrix3.copy`.
   *
   * @method Phaser.Math.Matrix3#set
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix3} src - The Matrix to set the values of this Matrix's from.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  set: function (src) {
    return this.copy(src);
  },

  /**
   * Copy the values of a given Matrix into this Matrix.
   *
   * @method Phaser.Math.Matrix3#copy
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix3} src - The Matrix to copy the values from.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  copy: function (src) {
    var out = this.val;
    var a = src.val;
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return this;
  },

  /**
   * Copy the values of a given Matrix4 into this Matrix3.
   *
   * @method Phaser.Math.Matrix3#fromMat4
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} m - The Matrix4 to copy the values from.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  fromMat4: function (m) {
    var a = m.val;
    var out = this.val;
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return this;
  },

  /**
   * Set the values of this Matrix from the given array.
   *
   * @method Phaser.Math.Matrix3#fromArray
   * @since 3.0.0
   *
   * @param {array} a - The array to copy the values from.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  fromArray: function (a) {
    var out = this.val;
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return this;
  },

  /**
   * Reset this Matrix to an identity (default) matrix.
   *
   * @method Phaser.Math.Matrix3#identity
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  identity: function () {
    var out = this.val;
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return this;
  },

  /**
   * Transpose this Matrix.
   *
   * @method Phaser.Math.Matrix3#transpose
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  transpose: function () {
    var a = this.val;
    var a01 = a[1];
    var a02 = a[2];
    var a12 = a[5];
    a[1] = a[3];
    a[2] = a[6];
    a[3] = a01;
    a[5] = a[7];
    a[6] = a02;
    a[7] = a12;
    return this;
  },

  /**
   * Invert this Matrix.
   *
   * @method Phaser.Math.Matrix3#invert
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  invert: function () {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

    var det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
      return null;
    }

    det = 1 / det;
    a[0] = b01 * det;
    a[1] = (-a22 * a01 + a02 * a21) * det;
    a[2] = (a12 * a01 - a02 * a11) * det;
    a[3] = b11 * det;
    a[4] = (a22 * a00 - a02 * a20) * det;
    a[5] = (-a12 * a00 + a02 * a10) * det;
    a[6] = b21 * det;
    a[7] = (-a21 * a00 + a01 * a20) * det;
    a[8] = (a11 * a00 - a01 * a10) * det;
    return this;
  },

  /**
   * Calculate the adjoint, or adjugate, of this Matrix.
   *
   * @method Phaser.Math.Matrix3#adjoint
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  adjoint: function () {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    a[0] = a11 * a22 - a12 * a21;
    a[1] = a02 * a21 - a01 * a22;
    a[2] = a01 * a12 - a02 * a11;
    a[3] = a12 * a20 - a10 * a22;
    a[4] = a00 * a22 - a02 * a20;
    a[5] = a02 * a10 - a00 * a12;
    a[6] = a10 * a21 - a11 * a20;
    a[7] = a01 * a20 - a00 * a21;
    a[8] = a00 * a11 - a01 * a10;
    return this;
  },

  /**
   * Calculate the determinant of this Matrix.
   *
   * @method Phaser.Math.Matrix3#determinant
   * @since 3.0.0
   *
   * @return {number} The determinant of this Matrix.
   */
  determinant: function () {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
  },

  /**
   * Multiply this Matrix by the given Matrix.
   *
   * @method Phaser.Math.Matrix3#multiply
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix3} src - The Matrix to multiply this Matrix by.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  multiply: function (src) {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b = src.val;
    var b00 = b[0];
    var b01 = b[1];
    var b02 = b[2];
    var b10 = b[3];
    var b11 = b[4];
    var b12 = b[5];
    var b20 = b[6];
    var b21 = b[7];
    var b22 = b[8];
    a[0] = b00 * a00 + b01 * a10 + b02 * a20;
    a[1] = b00 * a01 + b01 * a11 + b02 * a21;
    a[2] = b00 * a02 + b01 * a12 + b02 * a22;
    a[3] = b10 * a00 + b11 * a10 + b12 * a20;
    a[4] = b10 * a01 + b11 * a11 + b12 * a21;
    a[5] = b10 * a02 + b11 * a12 + b12 * a22;
    a[6] = b20 * a00 + b21 * a10 + b22 * a20;
    a[7] = b20 * a01 + b21 * a11 + b22 * a21;
    a[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return this;
  },

  /**
   * Translate this Matrix using the given Vector.
   *
   * @method Phaser.Math.Matrix3#translate
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to translate this Matrix with.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  translate: function (v) {
    var a = this.val;
    var x = v.x;
    var y = v.y;
    a[6] = x * a[0] + y * a[3] + a[6];
    a[7] = x * a[1] + y * a[4] + a[7];
    a[8] = x * a[2] + y * a[5] + a[8];
    return this;
  },

  /**
   * Apply a rotation transformation to this Matrix.
   *
   * @method Phaser.Math.Matrix3#rotate
   * @since 3.0.0
   *
   * @param {number} rad - The angle in radians to rotate by.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  rotate: function (rad) {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    a[0] = c * a00 + s * a10;
    a[1] = c * a01 + s * a11;
    a[2] = c * a02 + s * a12;
    a[3] = c * a10 - s * a00;
    a[4] = c * a11 - s * a01;
    a[5] = c * a12 - s * a02;
    return this;
  },

  /**
   * Apply a scale transformation to this Matrix.
   *
   * Uses the `x` and `y` components of the given Vector to scale the Matrix.
   *
   * @method Phaser.Math.Matrix3#scale
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to scale this Matrix with.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  scale: function (v) {
    var a = this.val;
    var x = v.x;
    var y = v.y;
    a[0] = x * a[0];
    a[1] = x * a[1];
    a[2] = x * a[2];
    a[3] = y * a[3];
    a[4] = y * a[4];
    a[5] = y * a[5];
    return this;
  },

  /**
   * Set the values of this Matrix from the given Quaternion.
   *
   * @method Phaser.Math.Matrix3#fromQuat
   * @since 3.0.0
   *
   * @param {Phaser.Math.Quaternion} q - The Quaternion to set the values of this Matrix from.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  fromQuat: function (q) {
    var x = q.x;
    var y = q.y;
    var z = q.z;
    var w = q.w;
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var out = this.val;
    out[0] = 1 - (yy + zz);
    out[3] = xy + wz;
    out[6] = xz - wy;
    out[1] = xy - wz;
    out[4] = 1 - (xx + zz);
    out[7] = yz + wx;
    out[2] = xz + wy;
    out[5] = yz - wx;
    out[8] = 1 - (xx + yy);
    return this;
  },

  /**
   * Set the values of this Matrix3 to be normalized from the given Matrix4.
   *
   * @method Phaser.Math.Matrix3#normalFromMat4
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} m - The Matrix4 to normalize the values from.
   *
   * @return {Phaser.Math.Matrix3} This Matrix3.
   */
  normalFromMat4: function (m) {
    var a = m.val;
    var out = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return null;
    }

    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return this;
  }
});
module.exports = Matrix3;

/***/ }),

/***/ 5332:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(8675);

__webpack_require__(3462);

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);

var Vector3 = __webpack_require__(2220);
/**
 * @ignore
 */


var EPSILON = 0.000001;
/**
 * @classdesc
 * A four-dimensional matrix.
 *
 * Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
 * and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
 *
 * @class Matrix4
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Math.Matrix4} [m] - Optional Matrix4 to copy values from.
 */

var Matrix4 = new Class({
  initialize: function Matrix4(m) {
    /**
     * The matrix values.
     *
     * @name Phaser.Math.Matrix4#val
     * @type {Float32Array}
     * @since 3.0.0
     */
    this.val = new Float32Array(16);

    if (m) {
      //  Assume Matrix4 with val:
      this.copy(m);
    } else {
      //  Default to identity
      this.identity();
    }
  },

  /**
   * Make a clone of this Matrix4.
   *
   * @method Phaser.Math.Matrix4#clone
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix4} A clone of this Matrix4.
   */
  clone: function () {
    return new Matrix4(this);
  },

  /**
   * This method is an alias for `Matrix4.copy`.
   *
   * @method Phaser.Math.Matrix4#set
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} src - The Matrix to set the values of this Matrix's from.
   *
   * @return {this} This Matrix4.
   */
  set: function (src) {
    return this.copy(src);
  },

  /**
   * Sets all values of this Matrix4.
   *
   * @method Phaser.Math.Matrix4#setValues
   * @since 3.50.0
   *
   * @param {number} m00 - The m00 value.
   * @param {number} m01 - The m01 value.
   * @param {number} m02 - The m02 value.
   * @param {number} m03 - The m03 value.
   * @param {number} m10 - The m10 value.
   * @param {number} m11 - The m11 value.
   * @param {number} m12 - The m12 value.
   * @param {number} m13 - The m13 value.
   * @param {number} m20 - The m20 value.
   * @param {number} m21 - The m21 value.
   * @param {number} m22 - The m22 value.
   * @param {number} m23 - The m23 value.
   * @param {number} m30 - The m30 value.
   * @param {number} m31 - The m31 value.
   * @param {number} m32 - The m32 value.
   * @param {number} m33 - The m33 value.
   *
   * @return {this} This Matrix4 instance.
   */
  setValues: function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = this.val;
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return this;
  },

  /**
   * Copy the values of a given Matrix into this Matrix.
   *
   * @method Phaser.Math.Matrix4#copy
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} src - The Matrix to copy the values from.
   *
   * @return {this} This Matrix4.
   */
  copy: function (src) {
    var a = src.val;
    return this.setValues(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
  },

  /**
   * Set the values of this Matrix from the given array.
   *
   * @method Phaser.Math.Matrix4#fromArray
   * @since 3.0.0
   *
   * @param {number[]} a - The array to copy the values from. Must have at least 16 elements.
   *
   * @return {this} This Matrix4.
   */
  fromArray: function (a) {
    return this.setValues(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
  },

  /**
   * Reset this Matrix.
   *
   * Sets all values to `0`.
   *
   * @method Phaser.Math.Matrix4#zero
   * @since 3.0.0
   *
   * @return {Phaser.Math.Matrix4} This Matrix4.
   */
  zero: function () {
    return this.setValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  },

  /**
   * Generates a transform matrix based on the given position, scale and rotation.
   *
   * @method Phaser.Math.Matrix4#transform
   * @since 3.50.0
   *
   * @param {Phaser.Math.Vector3} position - The position vector.
   * @param {Phaser.Math.Vector3} scale - The scale vector.
   * @param {Phaser.Math.Quaternion} rotation - The rotation quaternion.
   *
   * @return {this} This Matrix4.
   */
  transform: function (position, scale, rotation) {
    var rotMatrix = _tempMat1.fromQuat(rotation);

    var rm = rotMatrix.val;
    var sx = scale.x;
    var sy = scale.y;
    var sz = scale.z;
    return this.setValues(rm[0] * sx, rm[1] * sx, rm[2] * sx, 0, rm[4] * sy, rm[5] * sy, rm[6] * sy, 0, rm[8] * sz, rm[9] * sz, rm[10] * sz, 0, position.x, position.y, position.z, 1);
  },

  /**
   * Set the `x`, `y` and `z` values of this Matrix.
   *
   * @method Phaser.Math.Matrix4#xyz
   * @since 3.0.0
   *
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @param {number} z - The z value.
   *
   * @return {this} This Matrix4.
   */
  xyz: function (x, y, z) {
    this.identity();
    var out = this.val;
    out[12] = x;
    out[13] = y;
    out[14] = z;
    return this;
  },

  /**
   * Set the scaling values of this Matrix.
   *
   * @method Phaser.Math.Matrix4#scaling
   * @since 3.0.0
   *
   * @param {number} x - The x scaling value.
   * @param {number} y - The y scaling value.
   * @param {number} z - The z scaling value.
   *
   * @return {this} This Matrix4.
   */
  scaling: function (x, y, z) {
    this.zero();
    var out = this.val;
    out[0] = x;
    out[5] = y;
    out[10] = z;
    out[15] = 1;
    return this;
  },

  /**
   * Reset this Matrix to an identity (default) matrix.
   *
   * @method Phaser.Math.Matrix4#identity
   * @since 3.0.0
   *
   * @return {this} This Matrix4.
   */
  identity: function () {
    return this.setValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  },

  /**
   * Transpose this Matrix.
   *
   * @method Phaser.Math.Matrix4#transpose
   * @since 3.0.0
   *
   * @return {this} This Matrix4.
   */
  transpose: function () {
    var a = this.val;
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a12 = a[6];
    var a13 = a[7];
    var a23 = a[11];
    a[1] = a[4];
    a[2] = a[8];
    a[3] = a[12];
    a[4] = a01;
    a[6] = a[9];
    a[7] = a[13];
    a[8] = a02;
    a[9] = a12;
    a[11] = a[14];
    a[12] = a03;
    a[13] = a13;
    a[14] = a23;
    return this;
  },

  /**
   * Copies the given Matrix4 into this Matrix and then inverses it.
   *
   * @method Phaser.Math.Matrix4#getInverse
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} m - The Matrix4 to invert into this Matrix4.
   *
   * @return {this} This Matrix4.
   */
  getInverse: function (m) {
    this.copy(m);
    return this.invert();
  },

  /**
   * Invert this Matrix.
   *
   * @method Phaser.Math.Matrix4#invert
   * @since 3.0.0
   *
   * @return {this} This Matrix4.
   */
  invert: function () {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; //  Calculate the determinant

    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return this;
    }

    det = 1 / det;
    return this.setValues((a11 * b11 - a12 * b10 + a13 * b09) * det, (a02 * b10 - a01 * b11 - a03 * b09) * det, (a31 * b05 - a32 * b04 + a33 * b03) * det, (a22 * b04 - a21 * b05 - a23 * b03) * det, (a12 * b08 - a10 * b11 - a13 * b07) * det, (a00 * b11 - a02 * b08 + a03 * b07) * det, (a32 * b02 - a30 * b05 - a33 * b01) * det, (a20 * b05 - a22 * b02 + a23 * b01) * det, (a10 * b10 - a11 * b08 + a13 * b06) * det, (a01 * b08 - a00 * b10 - a03 * b06) * det, (a30 * b04 - a31 * b02 + a33 * b00) * det, (a21 * b02 - a20 * b04 - a23 * b00) * det, (a11 * b07 - a10 * b09 - a12 * b06) * det, (a00 * b09 - a01 * b07 + a02 * b06) * det, (a31 * b01 - a30 * b03 - a32 * b00) * det, (a20 * b03 - a21 * b01 + a22 * b00) * det);
  },

  /**
   * Calculate the adjoint, or adjugate, of this Matrix.
   *
   * @method Phaser.Math.Matrix4#adjoint
   * @since 3.0.0
   *
   * @return {this} This Matrix4.
   */
  adjoint: function () {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    return this.setValues(a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22), -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22)), a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12), -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12)), -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22)), a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22), -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12)), a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12), a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21), -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21)), a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11), -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11)), -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21)), a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21), -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11)), a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  },

  /**
   * Calculate the determinant of this Matrix.
   *
   * @method Phaser.Math.Matrix4#determinant
   * @since 3.0.0
   *
   * @return {number} The determinant of this Matrix.
   */
  determinant: function () {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  },

  /**
   * Multiply this Matrix by the given Matrix.
   *
   * @method Phaser.Math.Matrix4#multiply
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} src - The Matrix to multiply this Matrix by.
   *
   * @return {this} This Matrix4.
   */
  multiply: function (src) {
    var a = this.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b = src.val; // Cache only the current line of the second matrix

    var b0 = b[0];
    var b1 = b[1];
    var b2 = b[2];
    var b3 = b[3];
    a[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    a[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    a[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    a[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    a[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    a[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    a[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    a[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    a[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    a[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    a[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    a[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    a[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    a[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    a[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    a[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return this;
  },

  /**
   * Multiply the values of this Matrix4 by those given in the `src` argument.
   *
   * @method Phaser.Math.Matrix4#multiplyLocal
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} src - The source Matrix4 that this Matrix4 is multiplied by.
   *
   * @return {this} This Matrix4.
   */
  multiplyLocal: function (src) {
    var a = this.val;
    var b = src.val;
    return this.setValues(a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12], a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13], a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14], a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15], a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12], a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13], a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14], a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15], a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12], a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13], a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14], a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15], a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12], a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13], a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14], a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]);
  },

  /**
   * Multiplies the given Matrix4 object with this Matrix.
   *
   * This is the same as calling `multiplyMatrices(m, this)`.
   *
   * @method Phaser.Math.Matrix4#premultiply
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} m - The Matrix4 to multiply with this one.
   *
   * @return {this} This Matrix4.
   */
  premultiply: function (m) {
    return this.multiplyMatrices(m, this);
  },

  /**
   * Multiplies the two given Matrix4 objects and stores the results in this Matrix.
   *
   * @method Phaser.Math.Matrix4#multiplyMatrices
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} a - The first Matrix4 to multiply.
   * @param {Phaser.Math.Matrix4} b - The second Matrix4 to multiply.
   *
   * @return {this} This Matrix4.
   */
  multiplyMatrices: function (a, b) {
    var am = a.val;
    var bm = b.val;
    var a11 = am[0];
    var a12 = am[4];
    var a13 = am[8];
    var a14 = am[12];
    var a21 = am[1];
    var a22 = am[5];
    var a23 = am[9];
    var a24 = am[13];
    var a31 = am[2];
    var a32 = am[6];
    var a33 = am[10];
    var a34 = am[14];
    var a41 = am[3];
    var a42 = am[7];
    var a43 = am[11];
    var a44 = am[15];
    var b11 = bm[0];
    var b12 = bm[4];
    var b13 = bm[8];
    var b14 = bm[12];
    var b21 = bm[1];
    var b22 = bm[5];
    var b23 = bm[9];
    var b24 = bm[13];
    var b31 = bm[2];
    var b32 = bm[6];
    var b33 = bm[10];
    var b34 = bm[14];
    var b41 = bm[3];
    var b42 = bm[7];
    var b43 = bm[11];
    var b44 = bm[15];
    return this.setValues(a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41, a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41, a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41, a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41, a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42, a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42, a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42, a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42, a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43, a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43, a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43, a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43, a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44, a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44, a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44, a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44);
  },

  /**
   * Translate this Matrix using the given Vector.
   *
   * @method Phaser.Math.Matrix4#translate
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to translate this Matrix with.
   *
   * @return {this} This Matrix4.
   */
  translate: function (v) {
    return this.translateXYZ(v.x, v.y, v.z);
  },

  /**
   * Translate this Matrix using the given values.
   *
   * @method Phaser.Math.Matrix4#translateXYZ
   * @since 3.16.0
   *
   * @param {number} x - The x component.
   * @param {number} y - The y component.
   * @param {number} z - The z component.
   *
   * @return {this} This Matrix4.
   */
  translateXYZ: function (x, y, z) {
    var a = this.val;
    a[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    a[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    a[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    a[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    return this;
  },

  /**
   * Apply a scale transformation to this Matrix.
   *
   * Uses the `x`, `y` and `z` components of the given Vector to scale the Matrix.
   *
   * @method Phaser.Math.Matrix4#scale
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to scale this Matrix with.
   *
   * @return {this} This Matrix4.
   */
  scale: function (v) {
    return this.scaleXYZ(v.x, v.y, v.z);
  },

  /**
   * Apply a scale transformation to this Matrix.
   *
   * @method Phaser.Math.Matrix4#scaleXYZ
   * @since 3.16.0
   *
   * @param {number} x - The x component.
   * @param {number} y - The y component.
   * @param {number} z - The z component.
   *
   * @return {this} This Matrix4.
   */
  scaleXYZ: function (x, y, z) {
    var a = this.val;
    a[0] = a[0] * x;
    a[1] = a[1] * x;
    a[2] = a[2] * x;
    a[3] = a[3] * x;
    a[4] = a[4] * y;
    a[5] = a[5] * y;
    a[6] = a[6] * y;
    a[7] = a[7] * y;
    a[8] = a[8] * z;
    a[9] = a[9] * z;
    a[10] = a[10] * z;
    a[11] = a[11] * z;
    return this;
  },

  /**
   * Derive a rotation matrix around the given axis.
   *
   * @method Phaser.Math.Matrix4#makeRotationAxis
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector3|Phaser.Math.Vector4)} axis - The rotation axis.
   * @param {number} angle - The rotation angle in radians.
   *
   * @return {this} This Matrix4.
   */
  makeRotationAxis: function (axis, angle) {
    // Based on http://www.gamedev.net/reference/articles/article1199.asp
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var t = 1 - c;
    var x = axis.x;
    var y = axis.y;
    var z = axis.z;
    var tx = t * x;
    var ty = t * y;
    return this.setValues(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
  },

  /**
   * Apply a rotation transformation to this Matrix.
   *
   * @method Phaser.Math.Matrix4#rotate
   * @since 3.0.0
   *
   * @param {number} rad - The angle in radians to rotate by.
   * @param {Phaser.Math.Vector3} axis - The axis to rotate upon.
   *
   * @return {this} This Matrix4.
   */
  rotate: function (rad, axis) {
    var a = this.val;
    var x = axis.x;
    var y = axis.y;
    var z = axis.z;
    var len = Math.sqrt(x * x + y * y + z * z);

    if (Math.abs(len) < EPSILON) {
      return this;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var t = 1 - c;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15]; //  Construct the elements of the rotation matrix

    var b00 = x * x * t + c;
    var b01 = y * x * t + z * s;
    var b02 = z * x * t - y * s;
    var b10 = x * y * t - z * s;
    var b11 = y * y * t + c;
    var b12 = z * y * t + x * s;
    var b20 = x * z * t + y * s;
    var b21 = y * z * t - x * s;
    var b22 = z * z * t + c; //  Perform rotation-specific matrix multiplication

    return this.setValues(a00 * b00 + a10 * b01 + a20 * b02, a01 * b00 + a11 * b01 + a21 * b02, a02 * b00 + a12 * b01 + a22 * b02, a03 * b00 + a13 * b01 + a23 * b02, a00 * b10 + a10 * b11 + a20 * b12, a01 * b10 + a11 * b11 + a21 * b12, a02 * b10 + a12 * b11 + a22 * b12, a03 * b10 + a13 * b11 + a23 * b12, a00 * b20 + a10 * b21 + a20 * b22, a01 * b20 + a11 * b21 + a21 * b22, a02 * b20 + a12 * b21 + a22 * b22, a03 * b20 + a13 * b21 + a23 * b22, a30, a31, a32, a33);
  },

  /**
   * Rotate this matrix on its X axis.
   *
   * @method Phaser.Math.Matrix4#rotateX
   * @since 3.0.0
   *
   * @param {number} rad - The angle in radians to rotate by.
   *
   * @return {this} This Matrix4.
   */
  rotateX: function (rad) {
    var a = this.val;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11]; //  Perform axis-specific matrix multiplication

    a[4] = a10 * c + a20 * s;
    a[5] = a11 * c + a21 * s;
    a[6] = a12 * c + a22 * s;
    a[7] = a13 * c + a23 * s;
    a[8] = a20 * c - a10 * s;
    a[9] = a21 * c - a11 * s;
    a[10] = a22 * c - a12 * s;
    a[11] = a23 * c - a13 * s;
    return this;
  },

  /**
   * Rotate this matrix on its Y axis.
   *
   * @method Phaser.Math.Matrix4#rotateY
   * @since 3.0.0
   *
   * @param {number} rad - The angle to rotate by, in radians.
   *
   * @return {this} This Matrix4.
   */
  rotateY: function (rad) {
    var a = this.val;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11]; //  Perform axis-specific matrix multiplication

    a[0] = a00 * c - a20 * s;
    a[1] = a01 * c - a21 * s;
    a[2] = a02 * c - a22 * s;
    a[3] = a03 * c - a23 * s;
    a[8] = a00 * s + a20 * c;
    a[9] = a01 * s + a21 * c;
    a[10] = a02 * s + a22 * c;
    a[11] = a03 * s + a23 * c;
    return this;
  },

  /**
   * Rotate this matrix on its Z axis.
   *
   * @method Phaser.Math.Matrix4#rotateZ
   * @since 3.0.0
   *
   * @param {number} rad - The angle to rotate by, in radians.
   *
   * @return {this} This Matrix4.
   */
  rotateZ: function (rad) {
    var a = this.val;
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7]; //  Perform axis-specific matrix multiplication

    a[0] = a00 * c + a10 * s;
    a[1] = a01 * c + a11 * s;
    a[2] = a02 * c + a12 * s;
    a[3] = a03 * c + a13 * s;
    a[4] = a10 * c - a00 * s;
    a[5] = a11 * c - a01 * s;
    a[6] = a12 * c - a02 * s;
    a[7] = a13 * c - a03 * s;
    return this;
  },

  /**
   * Set the values of this Matrix from the given rotation Quaternion and translation Vector.
   *
   * @method Phaser.Math.Matrix4#fromRotationTranslation
   * @since 3.0.0
   *
   * @param {Phaser.Math.Quaternion} q - The Quaternion to set rotation from.
   * @param {Phaser.Math.Vector3} v - The Vector to set translation from.
   *
   * @return {this} This Matrix4.
   */
  fromRotationTranslation: function (q, v) {
    //  Quaternion math
    var x = q.x;
    var y = q.y;
    var z = q.z;
    var w = q.w;
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    return this.setValues(1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, v.x, v.y, v.z, 1);
  },

  /**
   * Set the values of this Matrix from the given Quaternion.
   *
   * @method Phaser.Math.Matrix4#fromQuat
   * @since 3.0.0
   *
   * @param {Phaser.Math.Quaternion} q - The Quaternion to set the values of this Matrix from.
   *
   * @return {this} This Matrix4.
   */
  fromQuat: function (q) {
    var x = q.x;
    var y = q.y;
    var z = q.z;
    var w = q.w;
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    return this.setValues(1 - (yy + zz), xy + wz, xz - wy, 0, xy - wz, 1 - (xx + zz), yz + wx, 0, xz + wy, yz - wx, 1 - (xx + yy), 0, 0, 0, 0, 1);
  },

  /**
   * Generate a frustum matrix with the given bounds.
   *
   * @method Phaser.Math.Matrix4#frustum
   * @since 3.0.0
   *
   * @param {number} left - The left bound of the frustum.
   * @param {number} right - The right bound of the frustum.
   * @param {number} bottom - The bottom bound of the frustum.
   * @param {number} top - The top bound of the frustum.
   * @param {number} near - The near bound of the frustum.
   * @param {number} far - The far bound of the frustum.
   *
   * @return {this} This Matrix4.
   */
  frustum: function (left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    return this.setValues(near * 2 * rl, 0, 0, 0, 0, near * 2 * tb, 0, 0, (right + left) * rl, (top + bottom) * tb, (far + near) * nf, -1, 0, 0, far * near * 2 * nf, 0);
  },

  /**
   * Generate a perspective projection matrix with the given bounds.
   *
   * @method Phaser.Math.Matrix4#perspective
   * @since 3.0.0
   *
   * @param {number} fovy - Vertical field of view in radians
   * @param {number} aspect - Aspect ratio. Typically viewport width  /height.
   * @param {number} near - Near bound of the frustum.
   * @param {number} far - Far bound of the frustum.
   *
   * @return {this} This Matrix4.
   */
  perspective: function (fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2);
    var nf = 1 / (near - far);
    return this.setValues(f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0);
  },

  /**
   * Generate a perspective projection matrix with the given bounds.
   *
   * @method Phaser.Math.Matrix4#perspectiveLH
   * @since 3.0.0
   *
   * @param {number} width - The width of the frustum.
   * @param {number} height - The height of the frustum.
   * @param {number} near - Near bound of the frustum.
   * @param {number} far - Far bound of the frustum.
   *
   * @return {this} This Matrix4.
   */
  perspectiveLH: function (width, height, near, far) {
    return this.setValues(2 * near / width, 0, 0, 0, 0, 2 * near / height, 0, 0, 0, 0, -far / (near - far), 1, 0, 0, near * far / (near - far), 0);
  },

  /**
   * Generate an orthogonal projection matrix with the given bounds.
   *
   * @method Phaser.Math.Matrix4#ortho
   * @since 3.0.0
   *
   * @param {number} left - The left bound of the frustum.
   * @param {number} right - The right bound of the frustum.
   * @param {number} bottom - The bottom bound of the frustum.
   * @param {number} top - The top bound of the frustum.
   * @param {number} near - The near bound of the frustum.
   * @param {number} far - The far bound of the frustum.
   *
   * @return {this} This Matrix4.
   */
  ortho: function (left, right, bottom, top, near, far) {
    var lr = left - right;
    var bt = bottom - top;
    var nf = near - far; //  Avoid division by zero

    lr = lr === 0 ? lr : 1 / lr;
    bt = bt === 0 ? bt : 1 / bt;
    nf = nf === 0 ? nf : 1 / nf;
    return this.setValues(-2 * lr, 0, 0, 0, 0, -2 * bt, 0, 0, 0, 0, 2 * nf, 0, (left + right) * lr, (top + bottom) * bt, (far + near) * nf, 1);
  },

  /**
   * Generate a right-handed look-at matrix with the given eye position, target and up axis.
   *
   * @method Phaser.Math.Matrix4#lookAtRH
   * @since 3.50.0
   *
   * @param {Phaser.Math.Vector3} eye - Position of the viewer.
   * @param {Phaser.Math.Vector3} target - Point the viewer is looking at.
   * @param {Phaser.Math.Vector3} up - vec3 pointing up.
   *
   * @return {this} This Matrix4.
   */
  lookAtRH: function (eye, target, up) {
    var m = this.val;

    _z.subVectors(eye, target);

    if (_z.getLengthSquared() === 0) {
      // eye and target are in the same position
      _z.z = 1;
    }

    _z.normalize();

    _x.crossVectors(up, _z);

    if (_x.getLengthSquared() === 0) {
      // up and z are parallel
      if (Math.abs(up.z) === 1) {
        _z.x += 0.0001;
      } else {
        _z.z += 0.0001;
      }

      _z.normalize();

      _x.crossVectors(up, _z);
    }

    _x.normalize();

    _y.crossVectors(_z, _x);

    m[0] = _x.x;
    m[1] = _x.y;
    m[2] = _x.z;
    m[4] = _y.x;
    m[5] = _y.y;
    m[6] = _y.z;
    m[8] = _z.x;
    m[9] = _z.y;
    m[10] = _z.z;
    return this;
  },

  /**
   * Generate a look-at matrix with the given eye position, focal point, and up axis.
   *
   * @method Phaser.Math.Matrix4#lookAt
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} eye - Position of the viewer
   * @param {Phaser.Math.Vector3} center - Point the viewer is looking at
   * @param {Phaser.Math.Vector3} up - vec3 pointing up.
   *
   * @return {this} This Matrix4.
   */
  lookAt: function (eye, center, up) {
    var eyex = eye.x;
    var eyey = eye.y;
    var eyez = eye.z;
    var upx = up.x;
    var upy = up.y;
    var upz = up.z;
    var centerx = center.x;
    var centery = center.y;
    var centerz = center.z;

    if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
      return this.identity();
    }

    var z0 = eyex - centerx;
    var z1 = eyey - centery;
    var z2 = eyez - centerz;
    var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    var x0 = upy * z2 - upz * z1;
    var x1 = upz * z0 - upx * z2;
    var x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

    if (!len) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }

    var y0 = z1 * x2 - z2 * x1;
    var y1 = z2 * x0 - z0 * x2;
    var y2 = z0 * x1 - z1 * x0;
    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

    if (!len) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }

    return this.setValues(x0, y0, z0, 0, x1, y1, z1, 0, x2, y2, z2, 0, -(x0 * eyex + x1 * eyey + x2 * eyez), -(y0 * eyex + y1 * eyey + y2 * eyez), -(z0 * eyex + z1 * eyey + z2 * eyez), 1);
  },

  /**
   * Set the values of this matrix from the given `yaw`, `pitch` and `roll` values.
   *
   * @method Phaser.Math.Matrix4#yawPitchRoll
   * @since 3.0.0
   *
   * @param {number} yaw - The yaw value.
   * @param {number} pitch - The pitch value.
   * @param {number} roll - The roll value.
   *
   * @return {this} This Matrix4.
   */
  yawPitchRoll: function (yaw, pitch, roll) {
    this.zero();

    _tempMat1.zero();

    _tempMat2.zero();

    var m0 = this.val;
    var m1 = _tempMat1.val;
    var m2 = _tempMat2.val; //  Rotate Z

    var s = Math.sin(roll);
    var c = Math.cos(roll);
    m0[10] = 1;
    m0[15] = 1;
    m0[0] = c;
    m0[1] = s;
    m0[4] = -s;
    m0[5] = c; //  Rotate X

    s = Math.sin(pitch);
    c = Math.cos(pitch);
    m1[0] = 1;
    m1[15] = 1;
    m1[5] = c;
    m1[10] = c;
    m1[9] = -s;
    m1[6] = s; //  Rotate Y

    s = Math.sin(yaw);
    c = Math.cos(yaw);
    m2[5] = 1;
    m2[15] = 1;
    m2[0] = c;
    m2[2] = -s;
    m2[8] = s;
    m2[10] = c;
    this.multiplyLocal(_tempMat1);
    this.multiplyLocal(_tempMat2);
    return this;
  },

  /**
   * Generate a world matrix from the given rotation, position, scale, view matrix and projection matrix.
   *
   * @method Phaser.Math.Matrix4#setWorldMatrix
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} rotation - The rotation of the world matrix.
   * @param {Phaser.Math.Vector3} position - The position of the world matrix.
   * @param {Phaser.Math.Vector3} scale - The scale of the world matrix.
   * @param {Phaser.Math.Matrix4} [viewMatrix] - The view matrix.
   * @param {Phaser.Math.Matrix4} [projectionMatrix] - The projection matrix.
   *
   * @return {this} This Matrix4.
   */
  setWorldMatrix: function (rotation, position, scale, viewMatrix, projectionMatrix) {
    this.yawPitchRoll(rotation.y, rotation.x, rotation.z);

    _tempMat1.scaling(scale.x, scale.y, scale.z);

    _tempMat2.xyz(position.x, position.y, position.z);

    this.multiplyLocal(_tempMat1);
    this.multiplyLocal(_tempMat2);

    if (viewMatrix) {
      this.multiplyLocal(viewMatrix);
    }

    if (projectionMatrix) {
      this.multiplyLocal(projectionMatrix);
    }

    return this;
  },

  /**
   * Multiplies this Matrix4 by the given `src` Matrix4 and stores the results in the `out` Matrix4.
   *
   * @method Phaser.Math.Matrix4#multiplyToMat4
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} src - The Matrix4 to multiply with this one.
   * @param {Phaser.Math.Matrix4} out - The receiving Matrix.
   *
   * @return {Phaser.Math.Matrix4} This `out` Matrix4.
   */
  multiplyToMat4: function (src, out) {
    var a = this.val;
    var b = src.val;
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b00 = b[0];
    var b01 = b[1];
    var b02 = b[2];
    var b03 = b[3];
    var b10 = b[4];
    var b11 = b[5];
    var b12 = b[6];
    var b13 = b[7];
    var b20 = b[8];
    var b21 = b[9];
    var b22 = b[10];
    var b23 = b[11];
    var b30 = b[12];
    var b31 = b[13];
    var b32 = b[14];
    var b33 = b[15];
    return out.setValues(b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b01 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b02 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b03 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33);
  },

  /**
   * Takes the rotation and position vectors and builds this Matrix4 from them.
   *
   * @method Phaser.Math.Matrix4#fromRotationXYTranslation
   * @since 3.50.0
   *
   * @param {Phaser.Math.Vector3} rotation - The rotation vector.
   * @param {Phaser.Math.Vector3} position - The position vector.
   * @param {boolean} translateFirst - Should the operation translate then rotate (`true`), or rotate then translate? (`false`)
   *
   * @return {this} This Matrix4.
   */
  fromRotationXYTranslation: function (rotation, position, translateFirst) {
    var x = position.x;
    var y = position.y;
    var z = position.z;
    var sx = Math.sin(rotation.x);
    var cx = Math.cos(rotation.x);
    var sy = Math.sin(rotation.y);
    var cy = Math.cos(rotation.y);
    var a30 = x;
    var a31 = y;
    var a32 = z; //  Rotate X

    var b21 = -sx; //  Rotate Y

    var c01 = 0 - b21 * sy;
    var c02 = 0 - cx * sy;
    var c21 = b21 * cy;
    var c22 = cx * cy; //  Translate

    if (!translateFirst) {
      // a30 = cy * x + 0 * y + sy * z;
      a30 = cy * x + sy * z;
      a31 = c01 * x + cx * y + c21 * z;
      a32 = c02 * x + sx * y + c22 * z;
    }

    return this.setValues(cy, c01, c02, 0, 0, cx, sx, 0, sy, c21, c22, 0, a30, a31, a32, 1);
  },

  /**
   * Returns the maximum axis scale from this Matrix4.
   *
   * @method Phaser.Math.Matrix4#getMaxScaleOnAxis
   * @since 3.50.0
   *
   * @return {number} The maximum axis scale.
   */
  getMaxScaleOnAxis: function () {
    var m = this.val;
    var scaleXSq = m[0] * m[0] + m[1] * m[1] + m[2] * m[2];
    var scaleYSq = m[4] * m[4] + m[5] * m[5] + m[6] * m[6];
    var scaleZSq = m[8] * m[8] + m[9] * m[9] + m[10] * m[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
});
/**
 * @ignore
 */

var _tempMat1 = new Matrix4();
/**
 * @ignore
 */


var _tempMat2 = new Matrix4();
/**
 * @ignore
 */


var _x = new Vector3();
/**
 * @ignore
 */


var _y = new Vector3();
/**
 * @ignore
 */


var _z = new Vector3();

module.exports = Matrix4;

/***/ }),

/***/ 8367:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Add an `amount` to a `value`, limiting the maximum result to `max`.
 *
 * @function Phaser.Math.MaxAdd
 * @since 3.0.0
 *
 * @param {number} value - The value to add to.
 * @param {number} amount - The amount to add.
 * @param {number} max - The maximum value to return.
 *
 * @return {number} The resulting value.
 */
var MaxAdd = function (value, amount, max) {
  return Math.min(value + amount, max);
};

module.exports = MaxAdd;

/***/ }),

/***/ 4601:
/***/ (function(module) {

/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the median of the given values. The values are sorted and the middle value is returned.
 * In case of an even number of values, the average of the two middle values is returned.
 *
 * @function Phaser.Math.Median
 * @since 3.54.0
 *
 * @param {number[]} values - The values to average.
 *
 * @return {number} The median value.
 */
var Median = function (values) {
  var valuesNum = values.length;

  if (valuesNum === 0) {
    return 0;
  }

  values.sort(function (a, b) {
    return a - b;
  });
  var halfIndex = Math.floor(valuesNum / 2);
  return valuesNum % 2 === 0 ? (values[halfIndex] + values[halfIndex - 1]) / 2 : values[halfIndex];
};

module.exports = Median;

/***/ }),

/***/ 1880:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Subtract an `amount` from `value`, limiting the minimum result to `min`.
 *
 * @function Phaser.Math.MinSub
 * @since 3.0.0
 *
 * @param {number} value - The value to subtract from.
 * @param {number} amount - The amount to subtract.
 * @param {number} min - The minimum value to return.
 *
 * @return {number} The resulting value.
 */
var MinSub = function (value, amount, min) {
  return Math.max(value - amount, min);
};

module.exports = MinSub;

/***/ }),

/***/ 2542:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Work out what percentage `value` is of the range between `min` and `max`.
 * If `max` isn't given then it will return the percentage of `value` to `min`.
 *
 * You can optionally specify an `upperMax` value, which is a mid-way point in the range that represents 100%, after which the % starts to go down to zero again.
 *
 * @function Phaser.Math.Percent
 * @since 3.0.0
 *
 * @param {number} value - The value to determine the percentage of.
 * @param {number} min - The minimum value.
 * @param {number} [max] - The maximum value.
 * @param {number} [upperMax] - The mid-way point in the range that represents 100%.
 *
 * @return {number} A value between 0 and 1 representing the percentage.
 */
var Percent = function (value, min, max, upperMax) {
  if (max === undefined) {
    max = min + 1;
  }

  var percentage = (value - min) / (max - min);

  if (percentage > 1) {
    if (upperMax !== undefined) {
      percentage = (upperMax - value) / (upperMax - max);

      if (percentage < 0) {
        percentage = 0;
      }
    } else {
      percentage = 1;
    }
  } else if (percentage < 0) {
    percentage = 0;
  }

  return percentage;
};

module.exports = Percent;

/***/ }),

/***/ 2148:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(8675);

__webpack_require__(3462);

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
var Class = __webpack_require__(3018);

var Matrix3 = __webpack_require__(7125);

var NOOP = __webpack_require__(9584);

var Vector3 = __webpack_require__(2220);

var EPSILON = 0.000001; //  Some shared 'private' arrays

var siNext = new Int8Array([1, 2, 0]);
var tmp = new Float32Array([0, 0, 0]);
var xUnitVec3 = new Vector3(1, 0, 0);
var yUnitVec3 = new Vector3(0, 1, 0);
var tmpvec = new Vector3();
var tmpMat3 = new Matrix3();
/**
 * @classdesc
 * A quaternion.
 *
 * @class Quaternion
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The x component.
 * @param {number} [y=0] - The y component.
 * @param {number} [z=0] - The z component.
 * @param {number} [w=1] - The w component.
 */

var Quaternion = new Class({
  initialize: function Quaternion(x, y, z, w) {
    /**
     * The x component of this Quaternion.
     *
     * @name Phaser.Math.Quaternion#_x
     * @type {number}
     * @default 0
     * @private
     * @since 3.50.0
     */

    /**
     * The y component of this Quaternion.
     *
     * @name Phaser.Math.Quaternion#_y
     * @type {number}
     * @default 0
     * @private
     * @since 3.50.0
     */

    /**
     * The z component of this Quaternion.
     *
     * @name Phaser.Math.Quaternion#_z
     * @type {number}
     * @default 0
     * @private
     * @since 3.50.0
     */

    /**
     * The w component of this Quaternion.
     *
     * @name Phaser.Math.Quaternion#_w
     * @type {number}
     * @default 0
     * @private
     * @since 3.50.0
     */

    /**
     * This callback is invoked, if set, each time a value in this quaternion is changed.
     * The callback is passed one argument, a reference to this quaternion.
     *
     * @name Phaser.Math.Quaternion#onChangeCallback
     * @type {function}
     * @since 3.50.0
     */
    this.onChangeCallback = NOOP;
    this.set(x, y, z, w);
  },

  /**
   * The x component of this Quaternion.
   *
   * @name Phaser.Math.Quaternion#x
   * @type {number}
   * @default 0
   * @since 3.0.0
   */
  x: {
    get: function () {
      return this._x;
    },
    set: function (value) {
      this._x = value;
      this.onChangeCallback(this);
    }
  },

  /**
   * The y component of this Quaternion.
   *
   * @name Phaser.Math.Quaternion#y
   * @type {number}
   * @default 0
   * @since 3.0.0
   */
  y: {
    get: function () {
      return this._y;
    },
    set: function (value) {
      this._y = value;
      this.onChangeCallback(this);
    }
  },

  /**
   * The z component of this Quaternion.
   *
   * @name Phaser.Math.Quaternion#z
   * @type {number}
   * @default 0
   * @since 3.0.0
   */
  z: {
    get: function () {
      return this._z;
    },
    set: function (value) {
      this._z = value;
      this.onChangeCallback(this);
    }
  },

  /**
   * The w component of this Quaternion.
   *
   * @name Phaser.Math.Quaternion#w
   * @type {number}
   * @default 0
   * @since 3.0.0
   */
  w: {
    get: function () {
      return this._w;
    },
    set: function (value) {
      this._w = value;
      this.onChangeCallback(this);
    }
  },

  /**
   * Copy the components of a given Quaternion or Vector into this Quaternion.
   *
   * @method Phaser.Math.Quaternion#copy
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} src - The Quaternion or Vector to copy the components from.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  copy: function (src) {
    return this.set(src);
  },

  /**
   * Set the components of this Quaternion and optionally call the `onChangeCallback`.
   *
   * @method Phaser.Math.Quaternion#set
   * @since 3.0.0
   *
   * @param {(number|object)} [x=0] - The x component, or an object containing x, y, z, and w components.
   * @param {number} [y=0] - The y component.
   * @param {number} [z=0] - The z component.
   * @param {number} [w=0] - The w component.
   * @param {boolean} [update=true] - Call the `onChangeCallback`?
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  set: function (x, y, z, w, update) {
    if (update === undefined) {
      update = true;
    }

    if (typeof x === 'object') {
      this._x = x.x || 0;
      this._y = x.y || 0;
      this._z = x.z || 0;
      this._w = x.w || 0;
    } else {
      this._x = x || 0;
      this._y = y || 0;
      this._z = z || 0;
      this._w = w || 0;
    }

    if (update) {
      this.onChangeCallback(this);
    }

    return this;
  },

  /**
   * Add a given Quaternion or Vector to this Quaternion. Addition is component-wise.
   *
   * @method Phaser.Math.Quaternion#add
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} v - The Quaternion or Vector to add to this Quaternion.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  add: function (v) {
    this._x += v.x;
    this._y += v.y;
    this._z += v.z;
    this._w += v.w;
    this.onChangeCallback(this);
    return this;
  },

  /**
   * Subtract a given Quaternion or Vector from this Quaternion. Subtraction is component-wise.
   *
   * @method Phaser.Math.Quaternion#subtract
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} v - The Quaternion or Vector to subtract from this Quaternion.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  subtract: function (v) {
    this._x -= v.x;
    this._y -= v.y;
    this._z -= v.z;
    this._w -= v.w;
    this.onChangeCallback(this);
    return this;
  },

  /**
   * Scale this Quaternion by the given value.
   *
   * @method Phaser.Math.Quaternion#scale
   * @since 3.0.0
   *
   * @param {number} scale - The value to scale this Quaternion by.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  scale: function (scale) {
    this._x *= scale;
    this._y *= scale;
    this._z *= scale;
    this._w *= scale;
    this.onChangeCallback(this);
    return this;
  },

  /**
   * Calculate the length of this Quaternion.
   *
   * @method Phaser.Math.Quaternion#length
   * @since 3.0.0
   *
   * @return {number} The length of this Quaternion.
   */
  length: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  },

  /**
   * Calculate the length of this Quaternion squared.
   *
   * @method Phaser.Math.Quaternion#lengthSq
   * @since 3.0.0
   *
   * @return {number} The length of this Quaternion, squared.
   */
  lengthSq: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    return x * x + y * y + z * z + w * w;
  },

  /**
   * Normalize this Quaternion.
   *
   * @method Phaser.Math.Quaternion#normalize
   * @since 3.0.0
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  normalize: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    var len = x * x + y * y + z * z + w * w;

    if (len > 0) {
      len = 1 / Math.sqrt(len);
      this._x = x * len;
      this._y = y * len;
      this._z = z * len;
      this._w = w * len;
    }

    this.onChangeCallback(this);
    return this;
  },

  /**
   * Calculate the dot product of this Quaternion and the given Quaternion or Vector.
   *
   * @method Phaser.Math.Quaternion#dot
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} v - The Quaternion or Vector to dot product with this Quaternion.
   *
   * @return {number} The dot product of this Quaternion and the given Quaternion or Vector.
   */
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  },

  /**
   * Linearly interpolate this Quaternion towards the given Quaternion or Vector.
   *
   * @method Phaser.Math.Quaternion#lerp
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} v - The Quaternion or Vector to interpolate towards.
   * @param {number} [t=0] - The percentage of interpolation.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  lerp: function (v, t) {
    if (t === undefined) {
      t = 0;
    }

    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    return this.set(ax + t * (v.x - ax), ay + t * (v.y - ay), az + t * (v.z - az), aw + t * (v.w - aw));
  },

  /**
   * Rotates this Quaternion based on the two given vectors.
   *
   * @method Phaser.Math.Quaternion#rotationTo
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} a - The transform rotation vector.
   * @param {Phaser.Math.Vector3} b - The target rotation vector.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  rotationTo: function (a, b) {
    var dot = a.x * b.x + a.y * b.y + a.z * b.z;

    if (dot < -0.999999) {
      if (tmpvec.copy(xUnitVec3).cross(a).length() < EPSILON) {
        tmpvec.copy(yUnitVec3).cross(a);
      }

      tmpvec.normalize();
      return this.setAxisAngle(tmpvec, Math.PI);
    } else if (dot > 0.999999) {
      return this.set(0, 0, 0, 1);
    } else {
      tmpvec.copy(a).cross(b);
      this._x = tmpvec.x;
      this._y = tmpvec.y;
      this._z = tmpvec.z;
      this._w = 1 + dot;
      return this.normalize();
    }
  },

  /**
   * Set the axes of this Quaternion.
   *
   * @method Phaser.Math.Quaternion#setAxes
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} view - The view axis.
   * @param {Phaser.Math.Vector3} right - The right axis.
   * @param {Phaser.Math.Vector3} up - The upwards axis.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  setAxes: function (view, right, up) {
    var m = tmpMat3.val;
    m[0] = right.x;
    m[3] = right.y;
    m[6] = right.z;
    m[1] = up.x;
    m[4] = up.y;
    m[7] = up.z;
    m[2] = -view.x;
    m[5] = -view.y;
    m[8] = -view.z;
    return this.fromMat3(tmpMat3).normalize();
  },

  /**
   * Reset this Matrix to an identity (default) Quaternion.
   *
   * @method Phaser.Math.Quaternion#identity
   * @since 3.0.0
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  identity: function () {
    return this.set(0, 0, 0, 1);
  },

  /**
   * Set the axis angle of this Quaternion.
   *
   * @method Phaser.Math.Quaternion#setAxisAngle
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} axis - The axis.
   * @param {number} rad - The angle in radians.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  setAxisAngle: function (axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    return this.set(s * axis.x, s * axis.y, s * axis.z, Math.cos(rad));
  },

  /**
   * Multiply this Quaternion by the given Quaternion or Vector.
   *
   * @method Phaser.Math.Quaternion#multiply
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} b - The Quaternion or Vector to multiply this Quaternion by.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  multiply: function (b) {
    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    var bx = b.x;
    var by = b.y;
    var bz = b.z;
    var bw = b.w;
    return this.set(ax * bw + aw * bx + ay * bz - az * by, ay * bw + aw * by + az * bx - ax * bz, az * bw + aw * bz + ax * by - ay * bx, aw * bw - ax * bx - ay * by - az * bz);
  },

  /**
   * Smoothly linearly interpolate this Quaternion towards the given Quaternion or Vector.
   *
   * @method Phaser.Math.Quaternion#slerp
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Quaternion|Phaser.Math.Vector4)} b - The Quaternion or Vector to interpolate towards.
   * @param {number} t - The percentage of interpolation.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  slerp: function (b, t) {
    // benchmarks: http://jsperf.com/quaternion-slerp-implementations
    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    var bx = b.x;
    var by = b.y;
    var bz = b.z;
    var bw = b.w; // calc cosine

    var cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

    if (cosom < 0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    } // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation


    var scale0 = 1 - t;
    var scale1 = t; // calculate coefficients

    if (1 - cosom > EPSILON) {
      // standard case (slerp)
      var omega = Math.acos(cosom);
      var sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } // calculate final values


    return this.set(scale0 * ax + scale1 * bx, scale0 * ay + scale1 * by, scale0 * az + scale1 * bz, scale0 * aw + scale1 * bw);
  },

  /**
   * Invert this Quaternion.
   *
   * @method Phaser.Math.Quaternion#invert
   * @since 3.0.0
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  invert: function () {
    var a0 = this.x;
    var a1 = this.y;
    var a2 = this.z;
    var a3 = this.w;
    var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot ? 1 / dot : 0;
    return this.set(-a0 * invDot, -a1 * invDot, -a2 * invDot, a3 * invDot);
  },

  /**
   * Convert this Quaternion into its conjugate.
   *
   * Sets the x, y and z components.
   *
   * @method Phaser.Math.Quaternion#conjugate
   * @since 3.0.0
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  conjugate: function () {
    this._x = -this.x;
    this._y = -this.y;
    this._z = -this.z;
    this.onChangeCallback(this);
    return this;
  },

  /**
   * Rotate this Quaternion on the X axis.
   *
   * @method Phaser.Math.Quaternion#rotateX
   * @since 3.0.0
   *
   * @param {number} rad - The rotation angle in radians.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  rotateX: function (rad) {
    rad *= 0.5;
    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    var bx = Math.sin(rad);
    var bw = Math.cos(rad);
    return this.set(ax * bw + aw * bx, ay * bw + az * bx, az * bw - ay * bx, aw * bw - ax * bx);
  },

  /**
   * Rotate this Quaternion on the Y axis.
   *
   * @method Phaser.Math.Quaternion#rotateY
   * @since 3.0.0
   *
   * @param {number} rad - The rotation angle in radians.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  rotateY: function (rad) {
    rad *= 0.5;
    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    var by = Math.sin(rad);
    var bw = Math.cos(rad);
    return this.set(ax * bw - az * by, ay * bw + aw * by, az * bw + ax * by, aw * bw - ay * by);
  },

  /**
   * Rotate this Quaternion on the Z axis.
   *
   * @method Phaser.Math.Quaternion#rotateZ
   * @since 3.0.0
   *
   * @param {number} rad - The rotation angle in radians.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  rotateZ: function (rad) {
    rad *= 0.5;
    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    var bz = Math.sin(rad);
    var bw = Math.cos(rad);
    return this.set(ax * bw + ay * bz, ay * bw - ax * bz, az * bw + aw * bz, aw * bw - az * bz);
  },

  /**
   * Create a unit (or rotation) Quaternion from its x, y, and z components.
   *
   * Sets the w component.
   *
   * @method Phaser.Math.Quaternion#calculateW
   * @since 3.0.0
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  calculateW: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    this.w = -Math.sqrt(1.0 - x * x - y * y - z * z);
    return this;
  },

  /**
   * Set this Quaternion from the given Euler, based on Euler order.
   *
   * @method Phaser.Math.Quaternion#setFromEuler
   * @since 3.50.0
   *
   * @param {Phaser.Math.Euler} euler - The Euler to convert from.
   * @param {boolean} [update=true] - Run the `onChangeCallback`?
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  setFromEuler: function (euler, update) {
    var x = euler.x / 2;
    var y = euler.y / 2;
    var z = euler.z / 2;
    var c1 = Math.cos(x);
    var c2 = Math.cos(y);
    var c3 = Math.cos(z);
    var s1 = Math.sin(x);
    var s2 = Math.sin(y);
    var s3 = Math.sin(z);

    switch (euler.order) {
      case 'XYZ':
        {
          this.set(s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3, update);
          break;
        }

      case 'YXZ':
        {
          this.set(s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 - s1 * s2 * c3, c1 * c2 * c3 + s1 * s2 * s3, update);
          break;
        }

      case 'ZXY':
        {
          this.set(s1 * c2 * c3 - c1 * s2 * s3, c1 * s2 * c3 + s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3, update);
          break;
        }

      case 'ZYX':
        {
          this.set(s1 * c2 * c3 - c1 * s2 * s3, c1 * s2 * c3 + s1 * c2 * s3, c1 * c2 * s3 - s1 * s2 * c3, c1 * c2 * c3 + s1 * s2 * s3, update);
          break;
        }

      case 'YZX':
        {
          this.set(s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 + s1 * c2 * s3, c1 * c2 * s3 - s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3, update);
          break;
        }

      case 'XZY':
        {
          this.set(s1 * c2 * c3 - c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 + s1 * s2 * s3, update);
          break;
        }
    }

    return this;
  },

  /**
   * Sets the rotation of this Quaternion from the given Matrix4.
   *
   * @method Phaser.Math.Quaternion#setFromRotationMatrix
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} mat4 - The Matrix4 to set the rotation from.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  setFromRotationMatrix: function (mat4) {
    var m = mat4.val;
    var m11 = m[0];
    var m12 = m[4];
    var m13 = m[8];
    var m21 = m[1];
    var m22 = m[5];
    var m23 = m[9];
    var m31 = m[2];
    var m32 = m[6];
    var m33 = m[10];
    var trace = m11 + m22 + m33;
    var s;

    if (trace > 0) {
      s = 0.5 / Math.sqrt(trace + 1.0);
      this.set((m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s);
    } else if (m11 > m22 && m11 > m33) {
      s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
      this.set(0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s);
    } else if (m22 > m33) {
      s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
      this.set((m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s);
    } else {
      s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
      this.set((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s);
    }

    return this;
  },

  /**
   * Convert the given Matrix into this Quaternion.
   *
   * @method Phaser.Math.Quaternion#fromMat3
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix3} mat - The Matrix to convert from.
   *
   * @return {Phaser.Math.Quaternion} This Quaternion.
   */
  fromMat3: function (mat) {
    // benchmarks:
    //    http://jsperf.com/typed-array-access-speed
    //    http://jsperf.com/conversion-of-3x3-matrix-to-quaternion
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var m = mat.val;
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if (fTrace > 0) {
      // |w| > 1/2, may as well choose w > 1/2
      fRoot = Math.sqrt(fTrace + 1.0); // 2w

      this.w = 0.5 * fRoot;
      fRoot = 0.5 / fRoot; // 1/(4w)

      this._x = (m[7] - m[5]) * fRoot;
      this._y = (m[2] - m[6]) * fRoot;
      this._z = (m[3] - m[1]) * fRoot;
    } else {
      // |w| <= 1/2
      var i = 0;

      if (m[4] > m[0]) {
        i = 1;
      }

      if (m[8] > m[i * 3 + i]) {
        i = 2;
      }

      var j = siNext[i];
      var k = siNext[j]; //  This isn't quite as clean without array access

      fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
      tmp[i] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      tmp[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
      tmp[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      this._x = tmp[0];
      this._y = tmp[1];
      this._z = tmp[2];
      this._w = (m[k * 3 + j] - m[j * 3 + k]) * fRoot;
    }

    this.onChangeCallback(this);
    return this;
  }
});
module.exports = Quaternion;

/***/ }),

/***/ 9489:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CONST = __webpack_require__(611);
/**
 * Convert the given angle in radians, to the equivalent angle in degrees.
 *
 * @function Phaser.Math.RadToDeg
 * @since 3.0.0
 *
 * @param {number} radians - The angle in radians to convert ot degrees.
 *
 * @return {number} The given angle converted to degrees.
 */


var RadToDeg = function (radians) {
  return radians * CONST.RAD_TO_DEG;
};

module.exports = RadToDeg;

/***/ }),

/***/ 1103:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compute a random unit vector.
 *
 * Computes random values for the given vector between -1 and 1 that can be used to represent a direction.
 *
 * Optionally accepts a scale value to scale the resulting vector by.
 *
 * @function Phaser.Math.RandomXY
 * @since 3.0.0
 *
 * @param {Phaser.Math.Vector2} vector - The Vector to compute random values for.
 * @param {number} [scale=1] - The scale of the random values.
 *
 * @return {Phaser.Math.Vector2} The given Vector.
 */
var RandomXY = function (vector, scale) {
  if (scale === undefined) {
    scale = 1;
  }

  var r = Math.random() * 2 * Math.PI;
  vector.x = Math.cos(r) * scale;
  vector.y = Math.sin(r) * scale;
  return vector;
};

module.exports = RandomXY;

/***/ }),

/***/ 3834:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compute a random position vector in a spherical area, optionally defined by the given radius.
 *
 * @function Phaser.Math.RandomXYZ
 * @since 3.0.0
 *
 * @param {Phaser.Math.Vector3} vec3 - The Vector to compute random values for.
 * @param {number} [radius=1] - The radius.
 *
 * @return {Phaser.Math.Vector3} The given Vector.
 */
var RandomXYZ = function (vec3, radius) {
  if (radius === undefined) {
    radius = 1;
  }

  var r = Math.random() * 2 * Math.PI;
  var z = Math.random() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * radius;
  vec3.x = Math.cos(r) * zScale;
  vec3.y = Math.sin(r) * zScale;
  vec3.z = z * radius;
  return vec3;
};

module.exports = RandomXYZ;

/***/ }),

/***/ 7679:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compute a random four-dimensional vector.
 *
 * @function Phaser.Math.RandomXYZW
 * @since 3.0.0
 *
 * @param {Phaser.Math.Vector4} vec4 - The Vector to compute random values for.
 * @param {number} [scale=1] - The scale of the random values.
 *
 * @return {Phaser.Math.Vector4} The given Vector.
 */
var RandomXYZW = function (vec4, scale) {
  if (scale === undefined) {
    scale = 1;
  }

  vec4.x = (Math.random() * 2 - 1) * scale;
  vec4.y = (Math.random() * 2 - 1) * scale;
  vec4.z = (Math.random() * 2 - 1) * scale;
  vec4.w = (Math.random() * 2 - 1) * scale;
  return vec4;
};

module.exports = RandomXYZW;

/***/ }),

/***/ 6234:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a given point by a given angle around the origin (0, 0), in an anti-clockwise direction.
 *
 * @function Phaser.Math.Rotate
 * @since 3.0.0
 *
 * @param {(Phaser.Geom.Point|object)} point - The point to be rotated.
 * @param {number} angle - The angle to be rotated by in an anticlockwise direction.
 *
 * @return {Phaser.Geom.Point} The given point, rotated by the given angle in an anticlockwise direction.
 */
var Rotate = function (point, angle) {
  var x = point.x;
  var y = point.y;
  point.x = x * Math.cos(angle) - y * Math.sin(angle);
  point.y = x * Math.sin(angle) + y * Math.cos(angle);
  return point;
};

module.exports = Rotate;

/***/ }),

/***/ 2671:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a `point` around `x` and `y` to the given `angle`, at the same distance.
 *
 * In polar notation, this maps a point from (r, t) to (r, angle), vs. the origin (x, y).
 *
 * @function Phaser.Math.RotateAround
 * @since 3.0.0
 *
 * @generic {Phaser.Types.Math.Vector2Like} T - [point,$return]
 *
 * @param {(Phaser.Geom.Point|object)} point - The point to be rotated.
 * @param {number} x - The horizontal coordinate to rotate around.
 * @param {number} y - The vertical coordinate to rotate around.
 * @param {number} angle - The angle of rotation in radians.
 *
 * @return {Phaser.Types.Math.Vector2Like} The given point.
 */
var RotateAround = function (point, x, y, angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  var tx = point.x - x;
  var ty = point.y - y;
  point.x = tx * c - ty * s + x;
  point.y = tx * s + ty * c + y;
  return point;
};

module.exports = RotateAround;

/***/ }),

/***/ 1216:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a `point` around `x` and `y` by the given `angle` and `distance`.
 *
 * In polar notation, this maps a point from (r, t) to (distance, t + angle), vs. the origin (x, y).
 *
 * @function Phaser.Math.RotateAroundDistance
 * @since 3.0.0
 *
 * @generic {Phaser.Types.Math.Vector2Like} T - [point,$return]
 *
 * @param {(Phaser.Geom.Point|object)} point - The point to be rotated.
 * @param {number} x - The horizontal coordinate to rotate around.
 * @param {number} y - The vertical coordinate to rotate around.
 * @param {number} angle - The angle of rotation in radians.
 * @param {number} distance - The distance from (x, y) to place the point at.
 *
 * @return {Phaser.Types.Math.Vector2Like} The given point.
 */
var RotateAroundDistance = function (point, x, y, angle, distance) {
  var t = angle + Math.atan2(point.y - y, point.x - x);
  point.x = x + distance * Math.cos(t);
  point.y = y + distance * Math.sin(t);
  return point;
};

module.exports = RotateAroundDistance;

/***/ }),

/***/ 3145:
/***/ (function(module) {

/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Position a `point` at the given `angle` and `distance` to (`x`, `y`).
 *
 * @function Phaser.Math.RotateTo
 * @since 3.24.0
 *
 * @generic {Phaser.Types.Math.Vector2Like} T - [point,$return]
 *
 * @param {Phaser.Types.Math.Vector2Like} point - The point to be positioned.
 * @param {number} x - The horizontal coordinate to position from.
 * @param {number} y - The vertical coordinate to position from.
 * @param {number} angle - The angle of rotation in radians.
 * @param {number} distance - The distance from (x, y) to place the point at.
 *
 * @return {Phaser.Types.Math.Vector2Like} The given point.
 */
var RotateTo = function (point, x, y, angle, distance) {
  point.x = x + distance * Math.cos(angle);
  point.y = y + distance * Math.sin(angle);
  return point;
};

module.exports = RotateTo;

/***/ }),

/***/ 3068:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector3 = __webpack_require__(2220);

var Matrix4 = __webpack_require__(5332);

var Quaternion = __webpack_require__(2148);

var tmpMat4 = new Matrix4();
var tmpQuat = new Quaternion();
var tmpVec3 = new Vector3();
/**
 * Rotates a vector in place by axis angle.
 *
 * This is the same as transforming a point by an
 * axis-angle quaternion, but it has higher precision.
 *
 * @function Phaser.Math.RotateVec3
 * @since 3.0.0
 *
 * @param {Phaser.Math.Vector3} vec - The vector to be rotated.
 * @param {Phaser.Math.Vector3} axis - The axis to rotate around.
 * @param {number} radians - The angle of rotation in radians.
 *
 * @return {Phaser.Math.Vector3} The given vector.
 */

var RotateVec3 = function (vec, axis, radians) {
  //  Set the quaternion to our axis angle
  tmpQuat.setAxisAngle(axis, radians); //  Create a rotation matrix from the axis angle

  tmpMat4.fromRotationTranslation(tmpQuat, tmpVec3.set(0, 0, 0)); //  Multiply our vector by the rotation matrix

  return vec.transformMat4(tmpMat4);
};

module.exports = RotateVec3;

/***/ }),

/***/ 4462:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Round a given number so it is further away from zero. That is, positive numbers are rounded up, and negative numbers are rounded down.
 *
 * @function Phaser.Math.RoundAwayFromZero
 * @since 3.0.0
 *
 * @param {number} value - The number to round.
 *
 * @return {number} The rounded number, rounded away from zero.
 */
var RoundAwayFromZero = function (value) {
  // "Opposite" of truncate.
  return value > 0 ? Math.ceil(value) : Math.floor(value);
};

module.exports = RoundAwayFromZero;

/***/ }),

/***/ 898:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Round a value to the given precision.
 * 
 * For example:
 * 
 * ```javascript
 * RoundTo(123.456, 0) = 123
 * RoundTo(123.456, 1) = 120
 * RoundTo(123.456, 2) = 100
 * ```
 * 
 * To round the decimal, i.e. to round to precision, pass in a negative `place`:
 * 
 * ```javascript
 * RoundTo(123.456789, 0) = 123
 * RoundTo(123.456789, -1) = 123.5
 * RoundTo(123.456789, -2) = 123.46
 * RoundTo(123.456789, -3) = 123.457
 * ```
 *
 * @function Phaser.Math.RoundTo
 * @since 3.0.0
 *
 * @param {number} value - The value to round.
 * @param {number} [place=0] - The place to round to. Positive to round the units, negative to round the decimal.
 * @param {number} [base=10] - The base to round in. Default is 10 for decimal.
 *
 * @return {number} The rounded value.
 */
var RoundTo = function (value, place, base) {
  if (place === undefined) {
    place = 0;
  }

  if (base === undefined) {
    base = 10;
  }

  var p = Math.pow(base, -place);
  return Math.round(value * p) / p;
};

module.exports = RoundTo;

/***/ }),

/***/ 6691:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Generate a series of sine and cosine values.
 *
 * @function Phaser.Math.SinCosTableGenerator
 * @since 3.0.0
 *
 * @param {number} length - The number of values to generate.
 * @param {number} [sinAmp=1] - The sine value amplitude.
 * @param {number} [cosAmp=1] - The cosine value amplitude.
 * @param {number} [frequency=1] - The frequency of the values.
 *
 * @return {Phaser.Types.Math.SinCosTable} The generated values.
 */
var SinCosTableGenerator = function (length, sinAmp, cosAmp, frequency) {
  if (sinAmp === undefined) {
    sinAmp = 1;
  }

  if (cosAmp === undefined) {
    cosAmp = 1;
  }

  if (frequency === undefined) {
    frequency = 1;
  }

  frequency *= Math.PI / length;
  var cos = [];
  var sin = [];

  for (var c = 0; c < length; c++) {
    cosAmp -= sinAmp * frequency;
    sinAmp += cosAmp * frequency;
    cos[c] = cosAmp;
    sin[c] = sinAmp;
  }

  return {
    sin: sin,
    cos: cos,
    length: length
  };
};

module.exports = SinCosTableGenerator;

/***/ }),

/***/ 458:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate a smooth interpolation percentage of `x` between `min` and `max`.
 *
 * The function receives the number `x` as an argument and returns 0 if `x` is less than or equal to the left edge,
 * 1 if `x` is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial,
 * between 0 and 1 otherwise.
 *
 * @function Phaser.Math.SmoothStep
 * @since 3.0.0
 * @see {@link https://en.wikipedia.org/wiki/Smoothstep}
 *
 * @param {number} x - The input value.
 * @param {number} min - The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
 * @param {number} max - The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
 *
 * @return {number} The percentage of interpolation, between 0 and 1.
 */
var SmoothStep = function (x, min, max) {
  if (x <= min) {
    return 0;
  }

  if (x >= max) {
    return 1;
  }

  x = (x - min) / (max - min);
  return x * x * (3 - 2 * x);
};

module.exports = SmoothStep;

/***/ }),

/***/ 9317:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate a smoother interpolation percentage of `x` between `min` and `max`.
 *
 * The function receives the number `x` as an argument and returns 0 if `x` is less than or equal to the left edge,
 * 1 if `x` is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial,
 * between 0 and 1 otherwise.
 *
 * Produces an even smoother interpolation than {@link Phaser.Math.SmoothStep}.
 *
 * @function Phaser.Math.SmootherStep
 * @since 3.0.0
 * @see {@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
 *
 * @param {number} x - The input value.
 * @param {number} min - The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
 * @param {number} max - The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
 *
 * @return {number} The percentage of interpolation, between 0 and 1.
 */
var SmootherStep = function (x, min, max) {
  x = Math.max(0, Math.min(1, (x - min) / (max - min)));
  return x * x * x * (x * (x * 6 - 15) + 10);
};

module.exports = SmootherStep;

/***/ }),

/***/ 4586:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector2 = __webpack_require__(9182);
/**
 * Returns a Vector2 containing the x and y position of the given index in a `width` x `height` sized grid.
 * 
 * For example, in a 6 x 4 grid, index 16 would equal x: 4 y: 2.
 * 
 * If the given index is out of range an empty Vector2 is returned.
 *
 * @function Phaser.Math.ToXY
 * @since 3.19.0
 *
 * @param {number} index - The position within the grid to get the x/y value for.
 * @param {number} width - The width of the grid.
 * @param {number} height - The height of the grid.
 * @param {Phaser.Math.Vector2} [out] - An optional Vector2 to store the result in. If not given, a new Vector2 instance will be created.
 *
 * @return {Phaser.Math.Vector2} A Vector2 where the x and y properties contain the given grid index.
 */


var ToXY = function (index, width, height, out) {
  if (out === undefined) {
    out = new Vector2();
  }

  var x = 0;
  var y = 0;
  var total = width * height;

  if (index > 0 && index <= total) {
    if (index > width - 1) {
      y = Math.floor(index / width);
      x = index - y * width;
    } else {
      x = index;
    }
  }

  return out.set(x, y);
};

module.exports = ToXY;

/***/ }),

/***/ 4912:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Vector2 = __webpack_require__(9182);
/**
 * Takes the `x` and `y` coordinates and transforms them into the same space as
 * defined by the position, rotation and scale values.
 *
 * @function Phaser.Math.TransformXY
 * @since 3.0.0
 *
 * @param {number} x - The x coordinate to be transformed.
 * @param {number} y - The y coordinate to be transformed.
 * @param {number} positionX - Horizontal position of the transform point.
 * @param {number} positionY - Vertical position of the transform point.
 * @param {number} rotation - Rotation of the transform point, in radians.
 * @param {number} scaleX - Horizontal scale of the transform point.
 * @param {number} scaleY - Vertical scale of the transform point.
 * @param {(Phaser.Math.Vector2|Phaser.Geom.Point|object)} [output] - The output vector, point or object for the translated coordinates.
 *
 * @return {(Phaser.Math.Vector2|Phaser.Geom.Point|object)} The translated point.
 */


var TransformXY = function (x, y, positionX, positionY, rotation, scaleX, scaleY, output) {
  if (output === undefined) {
    output = new Vector2();
  }

  var radianSin = Math.sin(rotation);
  var radianCos = Math.cos(rotation); // Rotate and Scale

  var a = radianCos * scaleX;
  var b = radianSin * scaleX;
  var c = -radianSin * scaleY;
  var d = radianCos * scaleY; //  Invert

  var id = 1 / (a * d + c * -b);
  output.x = d * id * x + -c * id * y + (positionY * c - positionX * d) * id;
  output.y = a * id * y + -b * id * x + (-positionY * a + positionX * b) * id;
  return output;
};

module.exports = TransformXY;

/***/ }),

/***/ 9182:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
var Class = __webpack_require__(3018);

var FuzzyEqual = __webpack_require__(7290);
/**
 * @classdesc
 * A representation of a vector in 2D space.
 *
 * A two-component vector.
 *
 * @class Vector2
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {number|Phaser.Types.Math.Vector2Like} [x] - The x component, or an object with `x` and `y` properties.
 * @param {number} [y] - The y component.
 */


var Vector2 = new Class({
  initialize: function Vector2(x, y) {
    /**
     * The x component of this Vector.
     *
     * @name Phaser.Math.Vector2#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    this.x = 0;
    /**
     * The y component of this Vector.
     *
     * @name Phaser.Math.Vector2#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = 0;

    if (typeof x === 'object') {
      this.x = x.x || 0;
      this.y = x.y || 0;
    } else {
      if (y === undefined) {
        y = x;
      }

      this.x = x || 0;
      this.y = y || 0;
    }
  },

  /**
   * Make a clone of this Vector2.
   *
   * @method Phaser.Math.Vector2#clone
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector2} A clone of this Vector2.
   */
  clone: function () {
    return new Vector2(this.x, this.y);
  },

  /**
   * Copy the components of a given Vector into this Vector.
   *
   * @method Phaser.Math.Vector2#copy
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to copy the components from.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  copy: function (src) {
    this.x = src.x || 0;
    this.y = src.y || 0;
    return this;
  },

  /**
   * Set the component values of this Vector from a given Vector2Like object.
   *
   * @method Phaser.Math.Vector2#setFromObject
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} obj - The object containing the component values to set for this Vector.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  setFromObject: function (obj) {
    this.x = obj.x || 0;
    this.y = obj.y || 0;
    return this;
  },

  /**
   * Set the `x` and `y` components of the this Vector to the given `x` and `y` values.
   *
   * @method Phaser.Math.Vector2#set
   * @since 3.0.0
   *
   * @param {number} x - The x value to set for this Vector.
   * @param {number} [y=x] - The y value to set for this Vector.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  set: function (x, y) {
    if (y === undefined) {
      y = x;
    }

    this.x = x;
    this.y = y;
    return this;
  },

  /**
   * This method is an alias for `Vector2.set`.
   *
   * @method Phaser.Math.Vector2#setTo
   * @since 3.4.0
   *
   * @param {number} x - The x value to set for this Vector.
   * @param {number} [y=x] - The y value to set for this Vector.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  setTo: function (x, y) {
    return this.set(x, y);
  },

  /**
   * Sets the `x` and `y` values of this object from a given polar coordinate.
   *
   * @method Phaser.Math.Vector2#setToPolar
   * @since 3.0.0
   *
   * @param {number} azimuth - The angular coordinate, in radians.
   * @param {number} [radius=1] - The radial coordinate (length).
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  setToPolar: function (azimuth, radius) {
    if (radius == null) {
      radius = 1;
    }

    this.x = Math.cos(azimuth) * radius;
    this.y = Math.sin(azimuth) * radius;
    return this;
  },

  /**
   * Check whether this Vector is equal to a given Vector.
   *
   * Performs a strict equality check against each Vector's components.
   *
   * @method Phaser.Math.Vector2#equals
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} v - The vector to compare with this Vector.
   *
   * @return {boolean} Whether the given Vector is equal to this Vector.
   */
  equals: function (v) {
    return this.x === v.x && this.y === v.y;
  },

  /**
   * Check whether this Vector is approximately equal to a given Vector.
   *
   * @method Phaser.Math.Vector2#fuzzyEquals
   * @since 3.23.0
   *
   * @param {Phaser.Types.Math.Vector2Like} v - The vector to compare with this Vector.
   * @param {number} [epsilon=0.0001] - The tolerance value.
   *
   * @return {boolean} Whether both absolute differences of the x and y components are smaller than `epsilon`.
   */
  fuzzyEquals: function (v, epsilon) {
    return FuzzyEqual(this.x, v.x, epsilon) && FuzzyEqual(this.y, v.y, epsilon);
  },

  /**
   * Calculate the angle between this Vector and the positive x-axis, in radians.
   *
   * @method Phaser.Math.Vector2#angle
   * @since 3.0.0
   *
   * @return {number} The angle between this Vector, and the positive x-axis, given in radians.
   */
  angle: function () {
    // computes the angle in radians with respect to the positive x-axis
    var angle = Math.atan2(this.y, this.x);

    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    return angle;
  },

  /**
   * Set the angle of this Vector.
   *
   * @method Phaser.Math.Vector2#setAngle
   * @since 3.23.0
   *
   * @param {number} angle - The angle, in radians.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  setAngle: function (angle) {
    return this.setToPolar(angle, this.length());
  },

  /**
   * Add a given Vector to this Vector. Addition is component-wise.
   *
   * @method Phaser.Math.Vector2#add
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to add to this Vector.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  add: function (src) {
    this.x += src.x;
    this.y += src.y;
    return this;
  },

  /**
   * Subtract the given Vector from this Vector. Subtraction is component-wise.
   *
   * @method Phaser.Math.Vector2#subtract
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to subtract from this Vector.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  subtract: function (src) {
    this.x -= src.x;
    this.y -= src.y;
    return this;
  },

  /**
   * Perform a component-wise multiplication between this Vector and the given Vector.
   *
   * Multiplies this Vector by the given Vector.
   *
   * @method Phaser.Math.Vector2#multiply
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to multiply this Vector by.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  multiply: function (src) {
    this.x *= src.x;
    this.y *= src.y;
    return this;
  },

  /**
   * Scale this Vector by the given value.
   *
   * @method Phaser.Math.Vector2#scale
   * @since 3.0.0
   *
   * @param {number} value - The value to scale this Vector by.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  scale: function (value) {
    if (isFinite(value)) {
      this.x *= value;
      this.y *= value;
    } else {
      this.x = 0;
      this.y = 0;
    }

    return this;
  },

  /**
   * Perform a component-wise division between this Vector and the given Vector.
   *
   * Divides this Vector by the given Vector.
   *
   * @method Phaser.Math.Vector2#divide
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to divide this Vector by.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  divide: function (src) {
    this.x /= src.x;
    this.y /= src.y;
    return this;
  },

  /**
   * Negate the `x` and `y` components of this Vector.
   *
   * @method Phaser.Math.Vector2#negate
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  },

  /**
   * Calculate the distance between this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector2#distance
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to calculate the distance to.
   *
   * @return {number} The distance from this Vector to the given Vector.
   */
  distance: function (src) {
    var dx = src.x - this.x;
    var dy = src.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Calculate the distance between this Vector and the given Vector, squared.
   *
   * @method Phaser.Math.Vector2#distanceSq
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector to calculate the distance to.
   *
   * @return {number} The distance from this Vector to the given Vector, squared.
   */
  distanceSq: function (src) {
    var dx = src.x - this.x;
    var dy = src.y - this.y;
    return dx * dx + dy * dy;
  },

  /**
   * Calculate the length (or magnitude) of this Vector.
   *
   * @method Phaser.Math.Vector2#length
   * @since 3.0.0
   *
   * @return {number} The length of this Vector.
   */
  length: function () {
    var x = this.x;
    var y = this.y;
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Set the length (or magnitude) of this Vector.
   *
   * @method Phaser.Math.Vector2#setLength
   * @since 3.23.0
   *
   * @param {number} length
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  setLength: function (length) {
    return this.normalize().scale(length);
  },

  /**
   * Calculate the length of this Vector squared.
   *
   * @method Phaser.Math.Vector2#lengthSq
   * @since 3.0.0
   *
   * @return {number} The length of this Vector, squared.
   */
  lengthSq: function () {
    var x = this.x;
    var y = this.y;
    return x * x + y * y;
  },

  /**
   * Normalize this Vector.
   *
   * Makes the vector a unit length vector (magnitude of 1) in the same direction.
   *
   * @method Phaser.Math.Vector2#normalize
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  normalize: function () {
    var x = this.x;
    var y = this.y;
    var len = x * x + y * y;

    if (len > 0) {
      len = 1 / Math.sqrt(len);
      this.x = x * len;
      this.y = y * len;
    }

    return this;
  },

  /**
   * Rotate this Vector to its perpendicular, in the positive direction.
   *
   * @method Phaser.Math.Vector2#normalizeRightHand
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  normalizeRightHand: function () {
    var x = this.x;
    this.x = this.y * -1;
    this.y = x;
    return this;
  },

  /**
   * Rotate this Vector to its perpendicular, in the negative direction.
   *
   * @method Phaser.Math.Vector2#normalizeLeftHand
   * @since 3.23.0
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  normalizeLeftHand: function () {
    var x = this.x;
    this.x = this.y;
    this.y = x * -1;
    return this;
  },

  /**
   * Calculate the dot product of this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector2#dot
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector2 to dot product with this Vector2.
   *
   * @return {number} The dot product of this Vector and the given Vector.
   */
  dot: function (src) {
    return this.x * src.x + this.y * src.y;
  },

  /**
   * Calculate the cross product of this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector2#cross
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector2 to cross with this Vector2.
   *
   * @return {number} The cross product of this Vector and the given Vector.
   */
  cross: function (src) {
    return this.x * src.y - this.y * src.x;
  },

  /**
   * Linearly interpolate between this Vector and the given Vector.
   *
   * Interpolates this Vector towards the given Vector.
   *
   * @method Phaser.Math.Vector2#lerp
   * @since 3.0.0
   *
   * @param {Phaser.Types.Math.Vector2Like} src - The Vector2 to interpolate towards.
   * @param {number} [t=0] - The interpolation percentage, between 0 and 1.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  lerp: function (src, t) {
    if (t === undefined) {
      t = 0;
    }

    var ax = this.x;
    var ay = this.y;
    this.x = ax + t * (src.x - ax);
    this.y = ay + t * (src.y - ay);
    return this;
  },

  /**
   * Transform this Vector with the given Matrix.
   *
   * @method Phaser.Math.Vector2#transformMat3
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix3} mat - The Matrix3 to transform this Vector2 with.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  transformMat3: function (mat) {
    var x = this.x;
    var y = this.y;
    var m = mat.val;
    this.x = m[0] * x + m[3] * y + m[6];
    this.y = m[1] * x + m[4] * y + m[7];
    return this;
  },

  /**
   * Transform this Vector with the given Matrix.
   *
   * @method Phaser.Math.Vector2#transformMat4
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} mat - The Matrix4 to transform this Vector2 with.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  transformMat4: function (mat) {
    var x = this.x;
    var y = this.y;
    var m = mat.val;
    this.x = m[0] * x + m[4] * y + m[12];
    this.y = m[1] * x + m[5] * y + m[13];
    return this;
  },

  /**
   * Make this Vector the zero vector (0, 0).
   *
   * @method Phaser.Math.Vector2#reset
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  reset: function () {
    this.x = 0;
    this.y = 0;
    return this;
  },

  /**
   * Limit the length (or magnitude) of this Vector.
   *
   * @method Phaser.Math.Vector2#limit
   * @since 3.23.0
   *
   * @param {number} max - The maximum length.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  limit: function (max) {
    var len = this.length();

    if (len && len > max) {
      this.scale(max / len);
    }

    return this;
  },

  /**
   * Reflect this Vector off a line defined by a normal.
   *
   * @method Phaser.Math.Vector2#reflect
   * @since 3.23.0
   *
   * @param {Phaser.Math.Vector2} normal - A vector perpendicular to the line.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  reflect: function (normal) {
    normal = normal.clone().normalize();
    return this.subtract(normal.scale(2 * this.dot(normal)));
  },

  /**
   * Reflect this Vector across another.
   *
   * @method Phaser.Math.Vector2#mirror
   * @since 3.23.0
   *
   * @param {Phaser.Math.Vector2} axis - A vector to reflect across.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  mirror: function (axis) {
    return this.reflect(axis).negate();
  },

  /**
   * Rotate this Vector by an angle amount.
   *
   * @method Phaser.Math.Vector2#rotate
   * @since 3.23.0
   *
   * @param {number} delta - The angle to rotate by, in radians.
   *
   * @return {Phaser.Math.Vector2} This Vector2.
   */
  rotate: function (delta) {
    var cos = Math.cos(delta);
    var sin = Math.sin(delta);
    return this.set(cos * this.x - sin * this.y, sin * this.x + cos * this.y);
  }
});
/**
 * A static zero Vector2 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.ZERO
 * @type {Phaser.Math.Vector2}
 * @since 3.1.0
 */

Vector2.ZERO = new Vector2();
/**
 * A static right Vector2 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.RIGHT
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */

Vector2.RIGHT = new Vector2(1, 0);
/**
 * A static left Vector2 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.LEFT
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */

Vector2.LEFT = new Vector2(-1, 0);
/**
 * A static up Vector2 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.UP
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */

Vector2.UP = new Vector2(0, -1);
/**
 * A static down Vector2 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.DOWN
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */

Vector2.DOWN = new Vector2(0, 1);
/**
 * A static one Vector2 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector2.ONE
 * @type {Phaser.Math.Vector2}
 * @since 3.16.0
 */

Vector2.ONE = new Vector2(1, 1);
module.exports = Vector2;

/***/ }),

/***/ 2220:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
var Class = __webpack_require__(3018);
/**
 * @classdesc
 * A representation of a vector in 3D space.
 *
 * A three-component vector.
 *
 * @class Vector3
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x] - The x component.
 * @param {number} [y] - The y component.
 * @param {number} [z] - The z component.
 */


var Vector3 = new Class({
  initialize: function Vector3(x, y, z) {
    /**
     * The x component of this Vector.
     *
     * @name Phaser.Math.Vector3#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    this.x = 0;
    /**
     * The y component of this Vector.
     *
     * @name Phaser.Math.Vector3#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = 0;
    /**
     * The z component of this Vector.
     *
     * @name Phaser.Math.Vector3#z
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.z = 0;

    if (typeof x === 'object') {
      this.x = x.x || 0;
      this.y = x.y || 0;
      this.z = x.z || 0;
    } else {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
  },

  /**
   * Set this Vector to point up.
   *
   * Sets the y component of the vector to 1, and the others to 0.
   *
   * @method Phaser.Math.Vector3#up
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  up: function () {
    this.x = 0;
    this.y = 1;
    this.z = 0;
    return this;
  },

  /**
   * Sets the components of this Vector to be the `Math.min` result from the given vector.
   *
   * @method Phaser.Math.Vector3#min
   * @since 3.50.0
   *
   * @param {Phaser.Math.Vector3} v - The Vector3 to check the minimum values against.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  min: function (v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  },

  /**
   * Sets the components of this Vector to be the `Math.max` result from the given vector.
   *
   * @method Phaser.Math.Vector3#max
   * @since 3.50.0
   *
   * @param {Phaser.Math.Vector3} v - The Vector3 to check the maximum values against.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  max: function (v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  },

  /**
   * Make a clone of this Vector3.
   *
   * @method Phaser.Math.Vector3#clone
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector3} A new Vector3 object containing this Vectors values.
   */
  clone: function () {
    return new Vector3(this.x, this.y, this.z);
  },

  /**
   * Adds the two given Vector3s and sets the results into this Vector3.
   *
   * @method Phaser.Math.Vector3#addVectors
   * @since 3.50.0
   *
   * @param {Phaser.Math.Vector3} a - The first Vector to add.
   * @param {Phaser.Math.Vector3} b - The second Vector to add.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  },

  /**
   * Calculate the cross (vector) product of two given Vectors.
   *
   * @method Phaser.Math.Vector3#crossVectors
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} a - The first Vector to multiply.
   * @param {Phaser.Math.Vector3} b - The second Vector to multiply.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  crossVectors: function (a, b) {
    var ax = a.x;
    var ay = a.y;
    var az = a.z;
    var bx = b.x;
    var by = b.y;
    var bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  },

  /**
   * Check whether this Vector is equal to a given Vector.
   *
   * Performs a strict equality check against each Vector's components.
   *
   * @method Phaser.Math.Vector3#equals
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} v - The Vector3 to compare against.
   *
   * @return {boolean} True if the two vectors strictly match, otherwise false.
   */
  equals: function (v) {
    return this.x === v.x && this.y === v.y && this.z === v.z;
  },

  /**
   * Copy the components of a given Vector into this Vector.
   *
   * @method Phaser.Math.Vector3#copy
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} src - The Vector to copy the components from.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  copy: function (src) {
    this.x = src.x;
    this.y = src.y;
    this.z = src.z || 0;
    return this;
  },

  /**
   * Set the `x`, `y`, and `z` components of this Vector to the given `x`, `y`, and `z` values.
   *
   * @method Phaser.Math.Vector3#set
   * @since 3.0.0
   *
   * @param {(number|object)} x - The x value to set for this Vector, or an object containing x, y and z components.
   * @param {number} [y] - The y value to set for this Vector.
   * @param {number} [z] - The z value to set for this Vector.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  set: function (x, y, z) {
    if (typeof x === 'object') {
      this.x = x.x || 0;
      this.y = x.y || 0;
      this.z = x.z || 0;
    } else {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }

    return this;
  },

  /**
   * Sets the components of this Vector3 from the position of the given Matrix4.
   *
   * @method Phaser.Math.Vector3#setFromMatrixPosition
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} mat4 - The Matrix4 to get the position from.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  setFromMatrixPosition: function (m) {
    return this.fromArray(m.val, 12);
  },

  /**
   * Sets the components of this Vector3 from the Matrix4 column specified.
   *
   * @method Phaser.Math.Vector3#setFromMatrixColumn
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} mat4 - The Matrix4 to get the column from.
   * @param {number} index - The column index.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  setFromMatrixColumn: function (mat4, index) {
    return this.fromArray(mat4.val, index * 4);
  },

  /**
   * Sets the components of this Vector3 from the given array, based on the offset.
   *
   * Vector3.x = array[offset]
   * Vector3.y = array[offset + 1]
   * Vector3.z = array[offset + 2]
   *
   * @method Phaser.Math.Vector3#fromArray
   * @since 3.50.0
   *
   * @param {number[]} array - The array of values to get this Vector from.
   * @param {number} [offset=0] - The offset index into the array.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  fromArray: function (array, offset) {
    if (offset === undefined) {
      offset = 0;
    }

    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  },

  /**
   * Add a given Vector to this Vector. Addition is component-wise.
   *
   * @method Phaser.Math.Vector3#add
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to add to this Vector.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  add: function (v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z || 0;
    return this;
  },

  /**
   * Add the given value to each component of this Vector.
   *
   * @method Phaser.Math.Vector3#addScalar
   * @since 3.50.0
   *
   * @param {number} s - The amount to add to this Vector.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  addScalar: function (s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  },

  /**
   * Add and scale a given Vector to this Vector. Addition is component-wise.
   *
   * @method Phaser.Math.Vector3#addScale
   * @since 3.50.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to add to this Vector.
   * @param {number} scale - The amount to scale `v` by.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  addScale: function (v, scale) {
    this.x += v.x * scale;
    this.y += v.y * scale;
    this.z += v.z * scale || 0;
    return this;
  },

  /**
   * Subtract the given Vector from this Vector. Subtraction is component-wise.
   *
   * @method Phaser.Math.Vector3#subtract
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to subtract from this Vector.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  subtract: function (v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z || 0;
    return this;
  },

  /**
   * Perform a component-wise multiplication between this Vector and the given Vector.
   *
   * Multiplies this Vector by the given Vector.
   *
   * @method Phaser.Math.Vector3#multiply
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to multiply this Vector by.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  multiply: function (v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z || 1;
    return this;
  },

  /**
   * Scale this Vector by the given value.
   *
   * @method Phaser.Math.Vector3#scale
   * @since 3.0.0
   *
   * @param {number} scale - The value to scale this Vector by.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  scale: function (scale) {
    if (isFinite(scale)) {
      this.x *= scale;
      this.y *= scale;
      this.z *= scale;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }

    return this;
  },

  /**
   * Perform a component-wise division between this Vector and the given Vector.
   *
   * Divides this Vector by the given Vector.
   *
   * @method Phaser.Math.Vector3#divide
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to divide this Vector by.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  divide: function (v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z || 1;
    return this;
  },

  /**
   * Negate the `x`, `y` and `z` components of this Vector.
   *
   * @method Phaser.Math.Vector3#negate
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  },

  /**
   * Calculate the distance between this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector3#distance
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to calculate the distance to.
   *
   * @return {number} The distance from this Vector to the given Vector.
   */
  distance: function (v) {
    var dx = v.x - this.x;
    var dy = v.y - this.y;
    var dz = v.z - this.z || 0;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  },

  /**
   * Calculate the distance between this Vector and the given Vector, squared.
   *
   * @method Phaser.Math.Vector3#distanceSq
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3)} v - The Vector to calculate the distance to.
   *
   * @return {number} The distance from this Vector to the given Vector, squared.
   */
  distanceSq: function (v) {
    var dx = v.x - this.x;
    var dy = v.y - this.y;
    var dz = v.z - this.z || 0;
    return dx * dx + dy * dy + dz * dz;
  },

  /**
   * Calculate the length (or magnitude) of this Vector.
   *
   * @method Phaser.Math.Vector3#length
   * @since 3.0.0
   *
   * @return {number} The length of this Vector.
   */
  length: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    return Math.sqrt(x * x + y * y + z * z);
  },

  /**
   * Calculate the length of this Vector squared.
   *
   * @method Phaser.Math.Vector3#lengthSq
   * @since 3.0.0
   *
   * @return {number} The length of this Vector, squared.
   */
  lengthSq: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    return x * x + y * y + z * z;
  },

  /**
   * Normalize this Vector.
   *
   * Makes the vector a unit length vector (magnitude of 1) in the same direction.
   *
   * @method Phaser.Math.Vector3#normalize
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  normalize: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var len = x * x + y * y + z * z;

    if (len > 0) {
      len = 1 / Math.sqrt(len);
      this.x = x * len;
      this.y = y * len;
      this.z = z * len;
    }

    return this;
  },

  /**
   * Calculate the dot product of this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector3#dot
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} v - The Vector3 to dot product with this Vector3.
   *
   * @return {number} The dot product of this Vector and `v`.
   */
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },

  /**
   * Calculate the cross (vector) product of this Vector (which will be modified) and the given Vector.
   *
   * @method Phaser.Math.Vector3#cross
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} v - The Vector to cross product with.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  cross: function (v) {
    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var bx = v.x;
    var by = v.y;
    var bz = v.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  },

  /**
   * Linearly interpolate between this Vector and the given Vector.
   *
   * Interpolates this Vector towards the given Vector.
   *
   * @method Phaser.Math.Vector3#lerp
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector3} v - The Vector3 to interpolate towards.
   * @param {number} [t=0] - The interpolation percentage, between 0 and 1.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  lerp: function (v, t) {
    if (t === undefined) {
      t = 0;
    }

    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    this.x = ax + t * (v.x - ax);
    this.y = ay + t * (v.y - ay);
    this.z = az + t * (v.z - az);
    return this;
  },

  /**
   * Takes a Matrix3 and applies it to this Vector3.
   *
   * @method Phaser.Math.Vector3#applyMatrix3
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix3} mat3 - The Matrix3 to apply to this Vector3.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  applyMatrix3: function (mat3) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = mat3.val;
    this.x = m[0] * x + m[3] * y + m[6] * z;
    this.y = m[1] * x + m[4] * y + m[7] * z;
    this.z = m[2] * x + m[5] * y + m[8] * z;
    return this;
  },

  /**
   * Takes a Matrix4 and applies it to this Vector3.
   *
   * @method Phaser.Math.Vector3#applyMatrix4
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} mat4 - The Matrix4 to apply to this Vector3.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  applyMatrix4: function (mat4) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = mat4.val;
    var w = 1 / (m[3] * x + m[7] * y + m[11] * z + m[15]);
    this.x = (m[0] * x + m[4] * y + m[8] * z + m[12]) * w;
    this.y = (m[1] * x + m[5] * y + m[9] * z + m[13]) * w;
    this.z = (m[2] * x + m[6] * y + m[10] * z + m[14]) * w;
    return this;
  },

  /**
   * Transform this Vector with the given Matrix.
   *
   * @method Phaser.Math.Vector3#transformMat3
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix3} mat - The Matrix3 to transform this Vector3 with.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  transformMat3: function (mat) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = mat.val;
    this.x = x * m[0] + y * m[3] + z * m[6];
    this.y = x * m[1] + y * m[4] + z * m[7];
    this.z = x * m[2] + y * m[5] + z * m[8];
    return this;
  },

  /**
   * Transform this Vector with the given Matrix4.
   *
   * @method Phaser.Math.Vector3#transformMat4
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} mat - The Matrix4 to transform this Vector3 with.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  transformMat4: function (mat) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = mat.val;
    this.x = m[0] * x + m[4] * y + m[8] * z + m[12];
    this.y = m[1] * x + m[5] * y + m[9] * z + m[13];
    this.z = m[2] * x + m[6] * y + m[10] * z + m[14];
    return this;
  },

  /**
   * Transforms the coordinates of this Vector3 with the given Matrix4.
   *
   * @method Phaser.Math.Vector3#transformCoordinates
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} mat - The Matrix4 to transform this Vector3 with.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  transformCoordinates: function (mat) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = mat.val;
    var tx = x * m[0] + y * m[4] + z * m[8] + m[12];
    var ty = x * m[1] + y * m[5] + z * m[9] + m[13];
    var tz = x * m[2] + y * m[6] + z * m[10] + m[14];
    var tw = x * m[3] + y * m[7] + z * m[11] + m[15];
    this.x = tx / tw;
    this.y = ty / tw;
    this.z = tz / tw;
    return this;
  },

  /**
   * Transform this Vector with the given Quaternion.
   *
   * @method Phaser.Math.Vector3#transformQuat
   * @since 3.0.0
   *
   * @param {Phaser.Math.Quaternion} q - The Quaternion to transform this Vector with.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  transformQuat: function (q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w; // calculate quat * vec

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  },

  /**
   * Multiplies this Vector3 by the specified matrix, applying a W divide. This is useful for projection,
   * e.g. unprojecting a 2D point into 3D space.
   *
   * @method Phaser.Math.Vector3#project
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} mat - The Matrix4 to multiply this Vector3 with.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  project: function (mat) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var m = mat.val;
    var a00 = m[0];
    var a01 = m[1];
    var a02 = m[2];
    var a03 = m[3];
    var a10 = m[4];
    var a11 = m[5];
    var a12 = m[6];
    var a13 = m[7];
    var a20 = m[8];
    var a21 = m[9];
    var a22 = m[10];
    var a23 = m[11];
    var a30 = m[12];
    var a31 = m[13];
    var a32 = m[14];
    var a33 = m[15];
    var lw = 1 / (x * a03 + y * a13 + z * a23 + a33);
    this.x = (x * a00 + y * a10 + z * a20 + a30) * lw;
    this.y = (x * a01 + y * a11 + z * a21 + a31) * lw;
    this.z = (x * a02 + y * a12 + z * a22 + a32) * lw;
    return this;
  },

  /**
   * Multiplies this Vector3 by the given view and projection matrices.
   *
   * @method Phaser.Math.Vector3#projectViewMatrix
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} viewMatrix - A View Matrix.
   * @param {Phaser.Math.Matrix4} projectionMatrix - A Projection Matrix.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  projectViewMatrix: function (viewMatrix, projectionMatrix) {
    return this.applyMatrix4(viewMatrix).applyMatrix4(projectionMatrix);
  },

  /**
   * Multiplies this Vector3 by the given inversed projection matrix and world matrix.
   *
   * @method Phaser.Math.Vector3#unprojectViewMatrix
   * @since 3.50.0
   *
   * @param {Phaser.Math.Matrix4} projectionMatrix - An inversed Projection Matrix.
   * @param {Phaser.Math.Matrix4} worldMatrix - A World View Matrix.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  unprojectViewMatrix: function (projectionMatrix, worldMatrix) {
    return this.applyMatrix4(projectionMatrix).applyMatrix4(worldMatrix);
  },

  /**
   * Unproject this point from 2D space to 3D space.
   * The point should have its x and y properties set to
   * 2D screen space, and the z either at 0 (near plane)
   * or 1 (far plane). The provided matrix is assumed to already
   * be combined, i.e. projection * view * model.
   *
   * After this operation, this vector's (x, y, z) components will
   * represent the unprojected 3D coordinate.
   *
   * @method Phaser.Math.Vector3#unproject
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector4} viewport - Screen x, y, width and height in pixels.
   * @param {Phaser.Math.Matrix4} invProjectionView - Combined projection and view matrix.
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  unproject: function (viewport, invProjectionView) {
    var viewX = viewport.x;
    var viewY = viewport.y;
    var viewWidth = viewport.z;
    var viewHeight = viewport.w;
    var x = this.x - viewX;
    var y = viewHeight - this.y - 1 - viewY;
    var z = this.z;
    this.x = 2 * x / viewWidth - 1;
    this.y = 2 * y / viewHeight - 1;
    this.z = 2 * z - 1;
    return this.project(invProjectionView);
  },

  /**
   * Make this Vector the zero vector (0, 0, 0).
   *
   * @method Phaser.Math.Vector3#reset
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector3} This Vector3.
   */
  reset: function () {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
  }
});
/**
 * A static zero Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.ZERO
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.ZERO = new Vector3();
/**
 * A static right Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.RIGHT
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.RIGHT = new Vector3(1, 0, 0);
/**
 * A static left Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.LEFT
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.LEFT = new Vector3(-1, 0, 0);
/**
 * A static up Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.UP
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.UP = new Vector3(0, -1, 0);
/**
 * A static down Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.DOWN
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.DOWN = new Vector3(0, 1, 0);
/**
 * A static forward Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.FORWARD
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.FORWARD = new Vector3(0, 0, 1);
/**
 * A static back Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.BACK
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.BACK = new Vector3(0, 0, -1);
/**
 * A static one Vector3 for use by reference.
 *
 * This constant is meant for comparison operations and should not be modified directly.
 *
 * @constant
 * @name Phaser.Math.Vector3.ONE
 * @type {Phaser.Math.Vector3}
 * @since 3.16.0
 */

Vector3.ONE = new Vector3(1, 1, 1);
module.exports = Vector3;

/***/ }),

/***/ 3963:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
//  and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
var Class = __webpack_require__(3018);
/**
 * @classdesc
 * A representation of a vector in 4D space.
 *
 * A four-component vector.
 *
 * @class Vector4
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x] - The x component.
 * @param {number} [y] - The y component.
 * @param {number} [z] - The z component.
 * @param {number} [w] - The w component.
 */


var Vector4 = new Class({
  initialize: function Vector4(x, y, z, w) {
    /**
     * The x component of this Vector.
     *
     * @name Phaser.Math.Vector4#x
     * @type {number}
     * @default 0
     * @since 3.0.0
     */
    this.x = 0;
    /**
     * The y component of this Vector.
     *
     * @name Phaser.Math.Vector4#y
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.y = 0;
    /**
     * The z component of this Vector.
     *
     * @name Phaser.Math.Vector4#z
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.z = 0;
    /**
     * The w component of this Vector.
     *
     * @name Phaser.Math.Vector4#w
     * @type {number}
     * @default 0
     * @since 3.0.0
     */

    this.w = 0;

    if (typeof x === 'object') {
      this.x = x.x || 0;
      this.y = x.y || 0;
      this.z = x.z || 0;
      this.w = x.w || 0;
    } else {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w || 0;
    }
  },

  /**
   * Make a clone of this Vector4.
   *
   * @method Phaser.Math.Vector4#clone
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector4} A clone of this Vector4.
   */
  clone: function () {
    return new Vector4(this.x, this.y, this.z, this.w);
  },

  /**
   * Copy the components of a given Vector into this Vector.
   *
   * @method Phaser.Math.Vector4#copy
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector4} src - The Vector to copy the components from.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  copy: function (src) {
    this.x = src.x;
    this.y = src.y;
    this.z = src.z || 0;
    this.w = src.w || 0;
    return this;
  },

  /**
   * Check whether this Vector is equal to a given Vector.
   *
   * Performs a strict quality check against each Vector's components.
   *
   * @method Phaser.Math.Vector4#equals
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector4} v - The vector to check equality with.
   *
   * @return {boolean} A boolean indicating whether the two Vectors are equal or not.
   */
  equals: function (v) {
    return this.x === v.x && this.y === v.y && this.z === v.z && this.w === v.w;
  },

  /**
   * Set the `x`, `y`, `z` and `w` components of the this Vector to the given `x`, `y`, `z` and `w` values.
   *
   * @method Phaser.Math.Vector4#set
   * @since 3.0.0
   *
   * @param {(number|object)} x - The x value to set for this Vector, or an object containing x, y, z and w components.
   * @param {number} y - The y value to set for this Vector.
   * @param {number} z - The z value to set for this Vector.
   * @param {number} w - The z value to set for this Vector.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  set: function (x, y, z, w) {
    if (typeof x === 'object') {
      this.x = x.x || 0;
      this.y = x.y || 0;
      this.z = x.z || 0;
      this.w = x.w || 0;
    } else {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w || 0;
    }

    return this;
  },

  /**
   * Add a given Vector to this Vector. Addition is component-wise.
   *
   * @method Phaser.Math.Vector4#add
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to add to this Vector.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  add: function (v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z || 0;
    this.w += v.w || 0;
    return this;
  },

  /**
   * Subtract the given Vector from this Vector. Subtraction is component-wise.
   *
   * @method Phaser.Math.Vector4#subtract
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to subtract from this Vector.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  subtract: function (v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z || 0;
    this.w -= v.w || 0;
    return this;
  },

  /**
   * Scale this Vector by the given value.
   *
   * @method Phaser.Math.Vector4#scale
   * @since 3.0.0
   *
   * @param {number} scale - The value to scale this Vector by.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  scale: function (scale) {
    this.x *= scale;
    this.y *= scale;
    this.z *= scale;
    this.w *= scale;
    return this;
  },

  /**
   * Calculate the length (or magnitude) of this Vector.
   *
   * @method Phaser.Math.Vector4#length
   * @since 3.0.0
   *
   * @return {number} The length of this Vector.
   */
  length: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  },

  /**
   * Calculate the length of this Vector squared.
   *
   * @method Phaser.Math.Vector4#lengthSq
   * @since 3.0.0
   *
   * @return {number} The length of this Vector, squared.
   */
  lengthSq: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    return x * x + y * y + z * z + w * w;
  },

  /**
   * Normalize this Vector.
   *
   * Makes the vector a unit length vector (magnitude of 1) in the same direction.
   *
   * @method Phaser.Math.Vector4#normalize
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  normalize: function () {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    var len = x * x + y * y + z * z + w * w;

    if (len > 0) {
      len = 1 / Math.sqrt(len);
      this.x = x * len;
      this.y = y * len;
      this.z = z * len;
      this.w = w * len;
    }

    return this;
  },

  /**
   * Calculate the dot product of this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector4#dot
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector4} v - The Vector4 to dot product with this Vector4.
   *
   * @return {number} The dot product of this Vector and the given Vector.
   */
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  },

  /**
   * Linearly interpolate between this Vector and the given Vector.
   *
   * Interpolates this Vector towards the given Vector.
   *
   * @method Phaser.Math.Vector4#lerp
   * @since 3.0.0
   *
   * @param {Phaser.Math.Vector4} v - The Vector4 to interpolate towards.
   * @param {number} [t=0] - The interpolation percentage, between 0 and 1.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  lerp: function (v, t) {
    if (t === undefined) {
      t = 0;
    }

    var ax = this.x;
    var ay = this.y;
    var az = this.z;
    var aw = this.w;
    this.x = ax + t * (v.x - ax);
    this.y = ay + t * (v.y - ay);
    this.z = az + t * (v.z - az);
    this.w = aw + t * (v.w - aw);
    return this;
  },

  /**
   * Perform a component-wise multiplication between this Vector and the given Vector.
   *
   * Multiplies this Vector by the given Vector.
   *
   * @method Phaser.Math.Vector4#multiply
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to multiply this Vector by.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  multiply: function (v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z || 1;
    this.w *= v.w || 1;
    return this;
  },

  /**
   * Perform a component-wise division between this Vector and the given Vector.
   *
   * Divides this Vector by the given Vector.
   *
   * @method Phaser.Math.Vector4#divide
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to divide this Vector by.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  divide: function (v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z || 1;
    this.w /= v.w || 1;
    return this;
  },

  /**
   * Calculate the distance between this Vector and the given Vector.
   *
   * @method Phaser.Math.Vector4#distance
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to calculate the distance to.
   *
   * @return {number} The distance from this Vector to the given Vector.
   */
  distance: function (v) {
    var dx = v.x - this.x;
    var dy = v.y - this.y;
    var dz = v.z - this.z || 0;
    var dw = v.w - this.w || 0;
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
  },

  /**
   * Calculate the distance between this Vector and the given Vector, squared.
   *
   * @method Phaser.Math.Vector4#distanceSq
   * @since 3.0.0
   *
   * @param {(Phaser.Math.Vector2|Phaser.Math.Vector3|Phaser.Math.Vector4)} v - The Vector to calculate the distance to.
   *
   * @return {number} The distance from this Vector to the given Vector, squared.
   */
  distanceSq: function (v) {
    var dx = v.x - this.x;
    var dy = v.y - this.y;
    var dz = v.z - this.z || 0;
    var dw = v.w - this.w || 0;
    return dx * dx + dy * dy + dz * dz + dw * dw;
  },

  /**
   * Negate the `x`, `y`, `z` and `w` components of this Vector.
   *
   * @method Phaser.Math.Vector4#negate
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  },

  /**
   * Transform this Vector with the given Matrix.
   *
   * @method Phaser.Math.Vector4#transformMat4
   * @since 3.0.0
   *
   * @param {Phaser.Math.Matrix4} mat - The Matrix4 to transform this Vector4 with.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  transformMat4: function (mat) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var w = this.w;
    var m = mat.val;
    this.x = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    this.y = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    this.z = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    this.w = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return this;
  },

  /**
   * Transform this Vector with the given Quaternion.
   *
   * @method Phaser.Math.Vector4#transformQuat
   * @since 3.0.0
   *
   * @param {Phaser.Math.Quaternion} q - The Quaternion to transform this Vector with.
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  transformQuat: function (q) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w; // calculate quat * vec

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  },

  /**
   * Make this Vector the zero vector (0, 0, 0, 0).
   *
   * @method Phaser.Math.Vector4#reset
   * @since 3.0.0
   *
   * @return {Phaser.Math.Vector4} This Vector4.
   */
  reset: function () {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
    return this;
  }
});
Vector4.prototype.sub = Vector4.prototype.subtract;
Vector4.prototype.mul = Vector4.prototype.multiply;
Vector4.prototype.div = Vector4.prototype.divide;
Vector4.prototype.dist = Vector4.prototype.distance;
Vector4.prototype.distSq = Vector4.prototype.distanceSq;
Vector4.prototype.len = Vector4.prototype.length;
Vector4.prototype.lenSq = Vector4.prototype.lengthSq;
module.exports = Vector4;

/***/ }),

/***/ 2030:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if the two values are within the given `tolerance` of each other.
 *
 * @function Phaser.Math.Within
 * @since 3.0.0
 *
 * @param {number} a - The first value to use in the calculation.
 * @param {number} b - The second value to use in the calculation.
 * @param {number} tolerance - The tolerance. Anything equal to or less than this value is considered as being within range.
 *
 * @return {boolean} Returns `true` if `a` is less than or equal to the tolerance of `b`.
 */
var Within = function (a, b, tolerance) {
  return Math.abs(a - b) <= tolerance;
};

module.exports = Within;

/***/ }),

/***/ 2923:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Wrap the given `value` between `min` and `max.
 *
 * @function Phaser.Math.Wrap
 * @since 3.0.0
 *
 * @param {number} value - The value to wrap.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 *
 * @return {number} The wrapped value.
 */
var Wrap = function (value, min, max) {
  var range = max - min;
  return min + ((value - min) % range + range) % range;
};

module.exports = Wrap;

/***/ }),

/***/ 8097:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 *
 * @function Phaser.Math.Angle.Between
 * @since 3.0.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The angle in radians.
 */
var Between = function (x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
};

module.exports = Between;

/***/ }),

/***/ 6348:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
 *
 * Calculates the angle of the vector from the first point to the second point.
 *
 * @function Phaser.Math.Angle.BetweenPoints
 * @since 3.0.0
 *
 * @param {Phaser.Types.Math.Vector2Like} point1 - The first point.
 * @param {Phaser.Types.Math.Vector2Like} point2 - The second point.
 *
 * @return {number} The angle in radians.
 */
var BetweenPoints = function (point1, point2) {
  return Math.atan2(point2.y - point1.y, point2.x - point1.x);
};

module.exports = BetweenPoints;

/***/ }),

/***/ 1715:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
 *
 * The difference between this method and {@link Phaser.Math.Angle.BetweenPoints} is that this assumes the y coordinate
 * travels down the screen.
 *
 * @function Phaser.Math.Angle.BetweenPointsY
 * @since 3.0.0
 *
 * @param {Phaser.Types.Math.Vector2Like} point1 - The first point.
 * @param {Phaser.Types.Math.Vector2Like} point2 - The second point.
 *
 * @return {number} The angle in radians.
 */
var BetweenPointsY = function (point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
};

module.exports = BetweenPointsY;

/***/ }),

/***/ 2663:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 *
 * The difference between this method and {@link Phaser.Math.Angle.Between} is that this assumes the y coordinate
 * travels down the screen.
 *
 * @function Phaser.Math.Angle.BetweenY
 * @since 3.0.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The angle in radians.
 */
var BetweenY = function (x1, y1, x2, y2) {
  return Math.atan2(x2 - x1, y2 - y1);
};

module.exports = BetweenY;

/***/ }),

/***/ 9454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CONST = __webpack_require__(611);
/**
 * Takes an angle in Phasers default clockwise format and converts it so that
 * 0 is North, 90 is West, 180 is South and 270 is East,
 * therefore running counter-clockwise instead of clockwise.
 * 
 * You can pass in the angle from a Game Object using:
 * 
 * ```javascript
 * var converted = CounterClockwise(gameobject.rotation);
 * ```
 * 
 * All values for this function are in radians.
 *
 * @function Phaser.Math.Angle.CounterClockwise
 * @since 3.16.0
 *
 * @param {number} angle - The angle to convert, in radians.
 *
 * @return {number} The converted angle, in radians.
 */


var CounterClockwise = function (angle) {
  if (angle > Math.PI) {
    angle -= CONST.PI2;
  }

  return Math.abs(((angle + CONST.TAU) % CONST.PI2 - CONST.PI2) % CONST.PI2);
};

module.exports = CounterClockwise;

/***/ }),

/***/ 924:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Normalize an angle to the [0, 2pi] range.
 *
 * @function Phaser.Math.Angle.Normalize
 * @since 3.0.0
 *
 * @param {number} angle - The angle to normalize, in radians.
 *
 * @return {number} The normalized angle, in radians.
 */
var Normalize = function (angle) {
  angle = angle % (2 * Math.PI);

  if (angle >= 0) {
    return angle;
  } else {
    return angle + 2 * Math.PI;
  }
};

module.exports = Normalize;

/***/ }),

/***/ 1243:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       @samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var FloatBetween = __webpack_require__(289);
/**
 * Returns a random angle in the range [-pi, pi].
 *
 * @function Phaser.Math.Angle.Random
 * @since 3.23.0
 *
 * @return {number} The angle, in radians.
 */


var Random = function () {
  return FloatBetween(-Math.PI, Math.PI);
};

module.exports = Random;

/***/ }),

/***/ 4920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       @samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var FloatBetween = __webpack_require__(289);
/**
 * Returns a random angle in the range [-180, 180].
 *
 * @function Phaser.Math.Angle.RandomDegrees
 * @since 3.23.0
 *
 * @return {number} The angle, in degrees.
 */


var RandomDegrees = function () {
  return FloatBetween(-180, 180);
};

module.exports = RandomDegrees;

/***/ }),

/***/ 9597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Normalize = __webpack_require__(924);
/**
 * Reverse the given angle.
 *
 * @function Phaser.Math.Angle.Reverse
 * @since 3.0.0
 *
 * @param {number} angle - The angle to reverse, in radians.
 *
 * @return {number} The reversed angle, in radians.
 */


var Reverse = function (angle) {
  return Normalize(angle + Math.PI);
};

module.exports = Reverse;

/***/ }),

/***/ 2897:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MATH_CONST = __webpack_require__(611);
/**
 * Rotates `currentAngle` towards `targetAngle`, taking the shortest rotation distance. The `lerp` argument is the amount to rotate by in this call.
 *
 * @function Phaser.Math.Angle.RotateTo
 * @since 3.0.0
 *
 * @param {number} currentAngle - The current angle, in radians.
 * @param {number} targetAngle - The target angle to rotate to, in radians.
 * @param {number} [lerp=0.05] - The lerp value to add to the current angle.
 *
 * @return {number} The adjusted angle.
 */


var RotateTo = function (currentAngle, targetAngle, lerp) {
  if (lerp === undefined) {
    lerp = 0.05;
  }

  if (currentAngle === targetAngle) {
    return currentAngle;
  }

  if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= MATH_CONST.PI2 - lerp) {
    currentAngle = targetAngle;
  } else {
    if (Math.abs(targetAngle - currentAngle) > Math.PI) {
      if (targetAngle < currentAngle) {
        targetAngle += MATH_CONST.PI2;
      } else {
        targetAngle -= MATH_CONST.PI2;
      }
    }

    if (targetAngle > currentAngle) {
      currentAngle += lerp;
    } else if (targetAngle < currentAngle) {
      currentAngle -= lerp;
    }
  }

  return currentAngle;
};

module.exports = RotateTo;

/***/ }),

/***/ 7243:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Gets the shortest angle between `angle1` and `angle2`.
 *
 * Both angles must be in the range -180 to 180, which is the same clamped
 * range that `sprite.angle` uses, so you can pass in two sprite angles to
 * this method and get the shortest angle back between the two of them.
 *
 * The angle returned will be in the same range. If the returned angle is
 * greater than 0 then it's a counter-clockwise rotation, if < 0 then it's
 * a clockwise rotation.
 *
 * @function Phaser.Math.Angle.ShortestBetween
 * @since 3.0.0
 *
 * @param {number} angle1 - The first angle in the range -180 to 180.
 * @param {number} angle2 - The second angle in the range -180 to 180.
 *
 * @return {number} The shortest angle, in degrees. If greater than zero it's a counter-clockwise rotation.
 */
var ShortestBetween = function (angle1, angle2) {
  var difference = angle2 - angle1;

  if (difference === 0) {
    return 0;
  }

  var times = Math.floor((difference - -180) / 360);
  return difference - times * 360;
};

module.exports = ShortestBetween;

/***/ }),

/***/ 4816:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MathWrap = __webpack_require__(2923);
/**
 * Wrap an angle.
 *
 * Wraps the angle to a value in the range of -PI to PI.
 *
 * @function Phaser.Math.Angle.Wrap
 * @since 3.0.0
 *
 * @param {number} angle - The angle to wrap, in radians.
 *
 * @return {number} The wrapped angle, in radians.
 */


var Wrap = function (angle) {
  return MathWrap(angle, -Math.PI, Math.PI);
};

module.exports = Wrap;

/***/ }),

/***/ 300:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Wrap = __webpack_require__(2923);
/**
 * Wrap an angle in degrees.
 *
 * Wraps the angle to a value in the range of -180 to 180.
 *
 * @function Phaser.Math.Angle.WrapDegrees
 * @since 3.0.0
 *
 * @param {number} angle - The angle to wrap, in degrees.
 *
 * @return {number} The wrapped angle, in degrees.
 */


var WrapDegrees = function (angle) {
  return Wrap(angle, -180, 180);
};

module.exports = WrapDegrees;

/***/ }),

/***/ 1692:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Angle
 */
module.exports = {
  Between: __webpack_require__(8097),
  BetweenPoints: __webpack_require__(6348),
  BetweenPointsY: __webpack_require__(1715),
  BetweenY: __webpack_require__(2663),
  CounterClockwise: __webpack_require__(9454),
  Normalize: __webpack_require__(924),
  Random: __webpack_require__(1243),
  RandomDegrees: __webpack_require__(4920),
  Reverse: __webpack_require__(9597),
  RotateTo: __webpack_require__(2897),
  ShortestBetween: __webpack_require__(7243),
  Wrap: __webpack_require__(4816),
  WrapDegrees: __webpack_require__(300)
};

/***/ }),

/***/ 611:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var MATH_CONST = {
  /**
   * The value of PI * 2.
   * 
   * @name Phaser.Math.PI2
   * @type {number}
   * @since 3.0.0
   */
  PI2: Math.PI * 2,

  /**
   * The value of PI * 0.5.
   * 
   * @name Phaser.Math.TAU
   * @type {number}
   * @since 3.0.0
   */
  TAU: Math.PI * 0.5,

  /**
   * An epsilon value (1.0e-6)
   * 
   * @name Phaser.Math.EPSILON
   * @type {number}
   * @since 3.0.0
   */
  EPSILON: 1.0e-6,

  /**
   * For converting degrees to radians (PI / 180)
   * 
   * @name Phaser.Math.DEG_TO_RAD
   * @type {number}
   * @since 3.0.0
   */
  DEG_TO_RAD: Math.PI / 180,

  /**
   * For converting radians to degrees (180 / PI)
   * 
   * @name Phaser.Math.RAD_TO_DEG
   * @type {number}
   * @since 3.0.0
   */
  RAD_TO_DEG: 180 / Math.PI,

  /**
   * An instance of the Random Number Generator.
   * This is not set until the Game boots.
   * 
   * @name Phaser.Math.RND
   * @type {Phaser.Math.RandomDataGenerator}
   * @since 3.0.0
   */
  RND: null,

  /**
   * The minimum safe integer this browser supports.
   * We use a const for backward compatibility with Internet Explorer.
   * 
   * @name Phaser.Math.MIN_SAFE_INTEGER
   * @type {number}
   * @since 3.21.0
   */
  MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER || -9007199254740991,

  /**
   * The maximum safe integer this browser supports.
   * We use a const for backward compatibility with Internet Explorer.
   * 
   * @name Phaser.Math.MAX_SAFE_INTEGER
   * @type {number}
   * @since 3.21.0
   */
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991
};
module.exports = MATH_CONST;

/***/ }),

/***/ 6052:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the distance between two sets of coordinates (points).
 *
 * @function Phaser.Math.Distance.Between
 * @since 3.0.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The distance between each point.
 */
var DistanceBetween = function (x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
};

module.exports = DistanceBetween;

/***/ }),

/***/ 5091:
/***/ (function(module) {

/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the distance between two points.
 *
 * @function Phaser.Math.Distance.BetweenPoints
 * @since 3.22.0
 *
 * @param {Phaser.Types.Math.Vector2Like} a - The first point.
 * @param {Phaser.Types.Math.Vector2Like} b - The second point.
 *
 * @return {number} The distance between the points.
 */
var DistanceBetweenPoints = function (a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};

module.exports = DistanceBetweenPoints;

/***/ }),

/***/ 8220:
/***/ (function(module) {

/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the squared distance between two points.
 *
 * @function Phaser.Math.Distance.BetweenPointsSquared
 * @since 3.22.0
 *
 * @param {Phaser.Types.Math.Vector2Like} a - The first point.
 * @param {Phaser.Types.Math.Vector2Like} b - The second point.
 *
 * @return {number} The squared distance between the points.
 */
var DistanceBetweenPointsSquared = function (a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy;
};

module.exports = DistanceBetweenPointsSquared;

/***/ }),

/***/ 6471:
/***/ (function(module) {

/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the Chebyshev distance between two sets of coordinates (points).
 *
 * Chebyshev distance (or chessboard distance) is the maximum of the horizontal and vertical distances.
 * It's the effective distance when movement can be horizontal, vertical, or diagonal.
 *
 * @function Phaser.Math.Distance.Chebyshev
 * @since 3.22.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The distance between each point.
 */
var ChebyshevDistance = function (x1, y1, x2, y2) {
  return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
};

module.exports = ChebyshevDistance;

/***/ }),

/***/ 3702:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the distance between two sets of coordinates (points) to the power of `pow`.
 *
 * @function Phaser.Math.Distance.Power
 * @since 3.0.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 * @param {number} pow - The exponent.
 *
 * @return {number} The distance between each point.
 */
var DistancePower = function (x1, y1, x2, y2, pow) {
  if (pow === undefined) {
    pow = 2;
  }

  return Math.sqrt(Math.pow(x2 - x1, pow) + Math.pow(y2 - y1, pow));
};

module.exports = DistancePower;

/***/ }),

/***/ 6828:
/***/ (function(module) {

/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the snake distance between two sets of coordinates (points).
 *
 * Snake distance (rectilinear distance, Manhattan distance) is the sum of the horizontal and vertical distances.
 * It's the effective distance when movement is allowed only horizontally or vertically (but not both).
 *
 * @function Phaser.Math.Distance.Snake
 * @since 3.22.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The distance between each point.
 */
var SnakeDistance = function (x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

module.exports = SnakeDistance;

/***/ }),

/***/ 7944:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the distance between two sets of coordinates (points), squared.
 *
 * @function Phaser.Math.Distance.Squared
 * @since 3.0.0
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The distance between each point, squared.
 */
var DistanceSquared = function (x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return dx * dx + dy * dy;
};

module.exports = DistanceSquared;

/***/ }),

/***/ 6693:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Distance
 */
module.exports = {
  Between: __webpack_require__(6052),
  BetweenPoints: __webpack_require__(5091),
  BetweenPointsSquared: __webpack_require__(8220),
  Chebyshev: __webpack_require__(6471),
  Power: __webpack_require__(3702),
  Snake: __webpack_require__(6828),
  Squared: __webpack_require__(7944)
};

/***/ }),

/***/ 6298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Back = __webpack_require__(2672);

var Bounce = __webpack_require__(9004);

var Circular = __webpack_require__(214);

var Cubic = __webpack_require__(8583);

var Elastic = __webpack_require__(3921);

var Expo = __webpack_require__(829);

var Linear = __webpack_require__(7638);

var Quadratic = __webpack_require__(2981);

var Quartic = __webpack_require__(6511);

var Quintic = __webpack_require__(3052);

var Sine = __webpack_require__(3141);

var Stepped = __webpack_require__(2759); //  EaseMap


module.exports = {
  Power0: Linear,
  Power1: Quadratic.Out,
  Power2: Cubic.Out,
  Power3: Quartic.Out,
  Power4: Quintic.Out,
  Linear: Linear,
  Quad: Quadratic.Out,
  Cubic: Cubic.Out,
  Quart: Quartic.Out,
  Quint: Quintic.Out,
  Sine: Sine.Out,
  Expo: Expo.Out,
  Circ: Circular.Out,
  Elastic: Elastic.Out,
  Back: Back.Out,
  Bounce: Bounce.Out,
  Stepped: Stepped,
  'Quad.easeIn': Quadratic.In,
  'Cubic.easeIn': Cubic.In,
  'Quart.easeIn': Quartic.In,
  'Quint.easeIn': Quintic.In,
  'Sine.easeIn': Sine.In,
  'Expo.easeIn': Expo.In,
  'Circ.easeIn': Circular.In,
  'Elastic.easeIn': Elastic.In,
  'Back.easeIn': Back.In,
  'Bounce.easeIn': Bounce.In,
  'Quad.easeOut': Quadratic.Out,
  'Cubic.easeOut': Cubic.Out,
  'Quart.easeOut': Quartic.Out,
  'Quint.easeOut': Quintic.Out,
  'Sine.easeOut': Sine.Out,
  'Expo.easeOut': Expo.Out,
  'Circ.easeOut': Circular.Out,
  'Elastic.easeOut': Elastic.Out,
  'Back.easeOut': Back.Out,
  'Bounce.easeOut': Bounce.Out,
  'Quad.easeInOut': Quadratic.InOut,
  'Cubic.easeInOut': Cubic.InOut,
  'Quart.easeInOut': Quartic.InOut,
  'Quint.easeInOut': Quintic.InOut,
  'Sine.easeInOut': Sine.InOut,
  'Expo.easeInOut': Expo.InOut,
  'Circ.easeInOut': Circular.InOut,
  'Elastic.easeInOut': Elastic.InOut,
  'Back.easeInOut': Back.InOut,
  'Bounce.easeInOut': Bounce.InOut
};

/***/ }),

/***/ 5577:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Back ease-in.
 *
 * @function Phaser.Math.Easing.Back.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [overshoot=1.70158] - The overshoot amount.
 *
 * @return {number} The tweened value.
 */
var In = function (v, overshoot) {
  if (overshoot === undefined) {
    overshoot = 1.70158;
  }

  return v * v * ((overshoot + 1) * v - overshoot);
};

module.exports = In;

/***/ }),

/***/ 1197:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Back ease-in/out.
 *
 * @function Phaser.Math.Easing.Back.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [overshoot=1.70158] - The overshoot amount.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v, overshoot) {
  if (overshoot === undefined) {
    overshoot = 1.70158;
  }

  var s = overshoot * 1.525;

  if ((v *= 2) < 1) {
    return 0.5 * (v * v * ((s + 1) * v - s));
  } else {
    return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
  }
};

module.exports = InOut;

/***/ }),

/***/ 6418:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Back ease-out.
 *
 * @function Phaser.Math.Easing.Back.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [overshoot=1.70158] - The overshoot amount.
 *
 * @return {number} The tweened value.
 */
var Out = function (v, overshoot) {
  if (overshoot === undefined) {
    overshoot = 1.70158;
  }

  return --v * v * ((overshoot + 1) * v + overshoot) + 1;
};

module.exports = Out;

/***/ }),

/***/ 2672:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Back
 */
module.exports = {
  In: __webpack_require__(5577),
  Out: __webpack_require__(6418),
  InOut: __webpack_require__(1197)
};

/***/ }),

/***/ 6648:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Bounce ease-in.
 *
 * @function Phaser.Math.Easing.Bounce.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  v = 1 - v;

  if (v < 1 / 2.75) {
    return 1 - 7.5625 * v * v;
  } else if (v < 2 / 2.75) {
    return 1 - (7.5625 * (v -= 1.5 / 2.75) * v + 0.75);
  } else if (v < 2.5 / 2.75) {
    return 1 - (7.5625 * (v -= 2.25 / 2.75) * v + 0.9375);
  } else {
    return 1 - (7.5625 * (v -= 2.625 / 2.75) * v + 0.984375);
  }
};

module.exports = In;

/***/ }),

/***/ 5092:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Bounce ease-in/out.
 *
 * @function Phaser.Math.Easing.Bounce.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  var reverse = false;

  if (v < 0.5) {
    v = 1 - v * 2;
    reverse = true;
  } else {
    v = v * 2 - 1;
  }

  if (v < 1 / 2.75) {
    v = 7.5625 * v * v;
  } else if (v < 2 / 2.75) {
    v = 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
  } else if (v < 2.5 / 2.75) {
    v = 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
  } else {
    v = 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
  }

  if (reverse) {
    return (1 - v) * 0.5;
  } else {
    return v * 0.5 + 0.5;
  }
};

module.exports = InOut;

/***/ }),

/***/ 3631:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Bounce ease-out.
 *
 * @function Phaser.Math.Easing.Bounce.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  if (v < 1 / 2.75) {
    return 7.5625 * v * v;
  } else if (v < 2 / 2.75) {
    return 7.5625 * (v -= 1.5 / 2.75) * v + 0.75;
  } else if (v < 2.5 / 2.75) {
    return 7.5625 * (v -= 2.25 / 2.75) * v + 0.9375;
  } else {
    return 7.5625 * (v -= 2.625 / 2.75) * v + 0.984375;
  }
};

module.exports = Out;

/***/ }),

/***/ 9004:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Bounce
 */
module.exports = {
  In: __webpack_require__(6648),
  Out: __webpack_require__(3631),
  InOut: __webpack_require__(5092)
};

/***/ }),

/***/ 4888:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Circular ease-in.
 *
 * @function Phaser.Math.Easing.Circular.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  return 1 - Math.sqrt(1 - v * v);
};

module.exports = In;

/***/ }),

/***/ 7250:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Circular ease-in/out.
 *
 * @function Phaser.Math.Easing.Circular.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if ((v *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - v * v) - 1);
  } else {
    return 0.5 * (Math.sqrt(1 - (v -= 2) * v) + 1);
  }
};

module.exports = InOut;

/***/ }),

/***/ 97:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Circular ease-out.
 *
 * @function Phaser.Math.Easing.Circular.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  return Math.sqrt(1 - --v * v);
};

module.exports = Out;

/***/ }),

/***/ 214:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Circular
 */
module.exports = {
  In: __webpack_require__(4888),
  Out: __webpack_require__(97),
  InOut: __webpack_require__(7250)
};

/***/ }),

/***/ 5971:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Cubic ease-in.
 *
 * @function Phaser.Math.Easing.Cubic.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  return v * v * v;
};

module.exports = In;

/***/ }),

/***/ 7572:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Cubic ease-in/out.
 *
 * @function Phaser.Math.Easing.Cubic.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if ((v *= 2) < 1) {
    return 0.5 * v * v * v;
  } else {
    return 0.5 * ((v -= 2) * v * v + 2);
  }
};

module.exports = InOut;

/***/ }),

/***/ 6786:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Cubic ease-out.
 *
 * @function Phaser.Math.Easing.Cubic.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  return --v * v * v + 1;
};

module.exports = Out;

/***/ }),

/***/ 8583:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Cubic
 */
module.exports = {
  In: __webpack_require__(5971),
  Out: __webpack_require__(6786),
  InOut: __webpack_require__(7572)
};

/***/ }),

/***/ 7946:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Elastic ease-in.
 *
 * @function Phaser.Math.Easing.Elastic.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param {number} [period=0.1] - Sets how tight the sine-wave is, where smaller values are tighter waves, which result in more cycles.
 *
 * @return {number} The tweened value.
 */
var In = function (v, amplitude, period) {
  if (amplitude === undefined) {
    amplitude = 0.1;
  }

  if (period === undefined) {
    period = 0.1;
  }

  if (v === 0) {
    return 0;
  } else if (v === 1) {
    return 1;
  } else {
    var s = period / 4;

    if (amplitude < 1) {
      amplitude = 1;
    } else {
      s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
    }

    return -(amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
  }
};

module.exports = In;

/***/ }),

/***/ 228:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Elastic ease-in/out.
 *
 * @function Phaser.Math.Easing.Elastic.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param {number} [period=0.1] - Sets how tight the sine-wave is, where smaller values are tighter waves, which result in more cycles.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v, amplitude, period) {
  if (amplitude === undefined) {
    amplitude = 0.1;
  }

  if (period === undefined) {
    period = 0.1;
  }

  if (v === 0) {
    return 0;
  } else if (v === 1) {
    return 1;
  } else {
    var s = period / 4;

    if (amplitude < 1) {
      amplitude = 1;
    } else {
      s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
    }

    if ((v *= 2) < 1) {
      return -0.5 * (amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
    } else {
      return amplitude * Math.pow(2, -10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period) * 0.5 + 1;
    }
  }
};

module.exports = InOut;

/***/ }),

/***/ 8822:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Elastic ease-out.
 *
 * @function Phaser.Math.Easing.Elastic.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param {number} [period=0.1] - Sets how tight the sine-wave is, where smaller values are tighter waves, which result in more cycles.
 *
 * @return {number} The tweened value.
 */
var Out = function (v, amplitude, period) {
  if (amplitude === undefined) {
    amplitude = 0.1;
  }

  if (period === undefined) {
    period = 0.1;
  }

  if (v === 0) {
    return 0;
  } else if (v === 1) {
    return 1;
  } else {
    var s = period / 4;

    if (amplitude < 1) {
      amplitude = 1;
    } else {
      s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
    }

    return amplitude * Math.pow(2, -10 * v) * Math.sin((v - s) * (2 * Math.PI) / period) + 1;
  }
};

module.exports = Out;

/***/ }),

/***/ 3921:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Elastic
 */
module.exports = {
  In: __webpack_require__(7946),
  Out: __webpack_require__(8822),
  InOut: __webpack_require__(228)
};

/***/ }),

/***/ 5675:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Exponential ease-in.
 *
 * @function Phaser.Math.Easing.Expo.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  return Math.pow(2, 10 * (v - 1)) - 0.001;
};

module.exports = In;

/***/ }),

/***/ 9206:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Exponential ease-in/out.
 *
 * @function Phaser.Math.Easing.Expo.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if ((v *= 2) < 1) {
    return 0.5 * Math.pow(2, 10 * (v - 1));
  } else {
    return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
  }
};

module.exports = InOut;

/***/ }),

/***/ 5014:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Exponential ease-out.
 *
 * @function Phaser.Math.Easing.Expo.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  return 1 - Math.pow(2, -10 * v);
};

module.exports = Out;

/***/ }),

/***/ 829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Expo
 */
module.exports = {
  In: __webpack_require__(5675),
  Out: __webpack_require__(5014),
  InOut: __webpack_require__(9206)
};

/***/ }),

/***/ 6684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing
 */
module.exports = {
  Back: __webpack_require__(2672),
  Bounce: __webpack_require__(9004),
  Circular: __webpack_require__(214),
  Cubic: __webpack_require__(8583),
  Elastic: __webpack_require__(3921),
  Expo: __webpack_require__(829),
  Linear: __webpack_require__(7638),
  Quadratic: __webpack_require__(2981),
  Quartic: __webpack_require__(6511),
  Quintic: __webpack_require__(3052),
  Sine: __webpack_require__(3141),
  Stepped: __webpack_require__(2759)
};

/***/ }),

/***/ 4893:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Linear easing (no variation).
 *
 * @function Phaser.Math.Easing.Linear
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Linear = function (v) {
  return v;
};

module.exports = Linear;

/***/ }),

/***/ 7638:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
module.exports = __webpack_require__(4893);

/***/ }),

/***/ 9433:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quadratic ease-in.
 *
 * @function Phaser.Math.Easing.Quadratic.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  return v * v;
};

module.exports = In;

/***/ }),

/***/ 9078:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quadratic ease-in/out.
 *
 * @function Phaser.Math.Easing.Quadratic.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if ((v *= 2) < 1) {
    return 0.5 * v * v;
  } else {
    return -0.5 * (--v * (v - 2) - 1);
  }
};

module.exports = InOut;

/***/ }),

/***/ 1649:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quadratic ease-out.
 *
 * @function Phaser.Math.Easing.Quadratic.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  return v * (2 - v);
};

module.exports = Out;

/***/ }),

/***/ 2981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Quadratic
 */
module.exports = {
  In: __webpack_require__(9433),
  Out: __webpack_require__(1649),
  InOut: __webpack_require__(9078)
};

/***/ }),

/***/ 9310:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quartic ease-in.
 *
 * @function Phaser.Math.Easing.Quartic.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  return v * v * v * v;
};

module.exports = In;

/***/ }),

/***/ 753:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quartic ease-in/out.
 *
 * @function Phaser.Math.Easing.Quartic.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if ((v *= 2) < 1) {
    return 0.5 * v * v * v * v;
  } else {
    return -0.5 * ((v -= 2) * v * v * v - 2);
  }
};

module.exports = InOut;

/***/ }),

/***/ 4210:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quartic ease-out.
 *
 * @function Phaser.Math.Easing.Quartic.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  return 1 - --v * v * v * v;
};

module.exports = Out;

/***/ }),

/***/ 6511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Quartic
 */
module.exports = {
  In: __webpack_require__(9310),
  Out: __webpack_require__(4210),
  InOut: __webpack_require__(753)
};

/***/ }),

/***/ 6850:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quintic ease-in.
 *
 * @function Phaser.Math.Easing.Quintic.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  return v * v * v * v * v;
};

module.exports = In;

/***/ }),

/***/ 5159:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quintic ease-in/out.
 *
 * @function Phaser.Math.Easing.Quintic.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if ((v *= 2) < 1) {
    return 0.5 * v * v * v * v * v;
  } else {
    return 0.5 * ((v -= 2) * v * v * v * v + 2);
  }
};

module.exports = InOut;

/***/ }),

/***/ 5687:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quintic ease-out.
 *
 * @function Phaser.Math.Easing.Quintic.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  return --v * v * v * v * v + 1;
};

module.exports = Out;

/***/ }),

/***/ 3052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Quintic
 */
module.exports = {
  In: __webpack_require__(6850),
  Out: __webpack_require__(5687),
  InOut: __webpack_require__(5159)
};

/***/ }),

/***/ 8689:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sinusoidal ease-in.
 *
 * @function Phaser.Math.Easing.Sine.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
  if (v === 0) {
    return 0;
  } else if (v === 1) {
    return 1;
  } else {
    return 1 - Math.cos(v * Math.PI / 2);
  }
};

module.exports = In;

/***/ }),

/***/ 9345:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sinusoidal ease-in/out.
 *
 * @function Phaser.Math.Easing.Sine.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
  if (v === 0) {
    return 0;
  } else if (v === 1) {
    return 1;
  } else {
    return 0.5 * (1 - Math.cos(Math.PI * v));
  }
};

module.exports = InOut;

/***/ }),

/***/ 8811:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sinusoidal ease-out.
 *
 * @function Phaser.Math.Easing.Sine.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
  if (v === 0) {
    return 0;
  } else if (v === 1) {
    return 1;
  } else {
    return Math.sin(v * Math.PI / 2);
  }
};

module.exports = Out;

/***/ }),

/***/ 3141:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Sine
 */
module.exports = {
  In: __webpack_require__(8689),
  Out: __webpack_require__(8811),
  InOut: __webpack_require__(9345)
};

/***/ }),

/***/ 2082:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Stepped easing.
 *
 * @function Phaser.Math.Easing.Stepped
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [steps=1] - The number of steps in the ease.
 *
 * @return {number} The tweened value.
 */
var Stepped = function (v, steps) {
  if (steps === undefined) {
    steps = 1;
  }

  if (v <= 0) {
    return 0;
  } else if (v >= 1) {
    return 1;
  } else {
    return ((steps * v | 0) + 1) * (1 / steps);
  }
};

module.exports = Stepped;

/***/ }),

/***/ 2759:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Easing.Stepped
 */
module.exports = __webpack_require__(2082);

/***/ }),

/***/ 8027:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the fuzzy ceiling of the given value.
 *
 * @function Phaser.Math.Fuzzy.Ceil
 * @since 3.0.0
 *
 * @param {number} value - The value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {number} The fuzzy ceiling of the value.
 */
var Ceil = function (value, epsilon) {
  if (epsilon === undefined) {
    epsilon = 0.0001;
  }

  return Math.ceil(value - epsilon);
};

module.exports = Ceil;

/***/ }),

/***/ 7290:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check whether the given values are fuzzily equal.
 *
 * Two numbers are fuzzily equal if their difference is less than `epsilon`.
 *
 * @function Phaser.Math.Fuzzy.Equal
 * @since 3.0.0
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {boolean} `true` if the values are fuzzily equal, otherwise `false`.
 */
var Equal = function (a, b, epsilon) {
  if (epsilon === undefined) {
    epsilon = 0.0001;
  }

  return Math.abs(a - b) < epsilon;
};

module.exports = Equal;

/***/ }),

/***/ 8163:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the fuzzy floor of the given value.
 *
 * @function Phaser.Math.Fuzzy.Floor
 * @since 3.0.0
 *
 * @param {number} value - The value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {number} The floor of the value.
 */
var Floor = function (value, epsilon) {
  if (epsilon === undefined) {
    epsilon = 0.0001;
  }

  return Math.floor(value + epsilon);
};

module.exports = Floor;

/***/ }),

/***/ 4516:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check whether `a` is fuzzily greater than `b`.
 *
 * `a` is fuzzily greater than `b` if it is more than `b - epsilon`.
 *
 * @function Phaser.Math.Fuzzy.GreaterThan
 * @since 3.0.0
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {boolean} `true` if `a` is fuzzily greater than than `b`, otherwise `false`.
 */
var GreaterThan = function (a, b, epsilon) {
  if (epsilon === undefined) {
    epsilon = 0.0001;
  }

  return a > b - epsilon;
};

module.exports = GreaterThan;

/***/ }),

/***/ 7156:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check whether `a` is fuzzily less than `b`.
 *
 * `a` is fuzzily less than `b` if it is less than `b + epsilon`.
 *
 * @function Phaser.Math.Fuzzy.LessThan
 * @since 3.0.0
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {boolean} `true` if `a` is fuzzily less than `b`, otherwise `false`.
 */
var LessThan = function (a, b, epsilon) {
  if (epsilon === undefined) {
    epsilon = 0.0001;
  }

  return a < b + epsilon;
};

module.exports = LessThan;

/***/ }),

/***/ 6531:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Fuzzy
 */
module.exports = {
  Ceil: __webpack_require__(8027),
  Equal: __webpack_require__(7290),
  Floor: __webpack_require__(8163),
  GreaterThan: __webpack_require__(4516),
  LessThan: __webpack_require__(7156)
};

/***/ }),

/***/ 3129:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CONST = __webpack_require__(611);

var Extend = __webpack_require__(2037);
/**
 * @namespace Phaser.Math
 */


var PhaserMath = {
  //  Collections of functions
  Angle: __webpack_require__(1692),
  Distance: __webpack_require__(6693),
  Easing: __webpack_require__(6684),
  Fuzzy: __webpack_require__(6531),
  Interpolation: __webpack_require__(1678),
  Pow2: __webpack_require__(1154),
  Snap: __webpack_require__(6437),
  //  Expose the RNG Class
  RandomDataGenerator: __webpack_require__(7688),
  //  Single functions
  Average: __webpack_require__(9011),
  Bernstein: __webpack_require__(4908),
  Between: __webpack_require__(7443),
  CatmullRom: __webpack_require__(3179),
  CeilTo: __webpack_require__(9457),
  Clamp: __webpack_require__(1495),
  DegToRad: __webpack_require__(3490),
  Difference: __webpack_require__(2125),
  Euler: __webpack_require__(7368),
  Factorial: __webpack_require__(6038),
  FloatBetween: __webpack_require__(289),
  FloorTo: __webpack_require__(9354),
  FromPercent: __webpack_require__(3579),
  GetSpeed: __webpack_require__(1164),
  IsEven: __webpack_require__(3),
  IsEvenStrict: __webpack_require__(7635),
  Linear: __webpack_require__(7684),
  MaxAdd: __webpack_require__(8367),
  Median: __webpack_require__(4601),
  MinSub: __webpack_require__(1880),
  Percent: __webpack_require__(2542),
  RadToDeg: __webpack_require__(9489),
  RandomXY: __webpack_require__(1103),
  RandomXYZ: __webpack_require__(3834),
  RandomXYZW: __webpack_require__(7679),
  Rotate: __webpack_require__(6234),
  RotateAround: __webpack_require__(2671),
  RotateAroundDistance: __webpack_require__(1216),
  RotateTo: __webpack_require__(3145),
  RoundAwayFromZero: __webpack_require__(4462),
  RoundTo: __webpack_require__(898),
  SinCosTableGenerator: __webpack_require__(6691),
  SmootherStep: __webpack_require__(9317),
  SmoothStep: __webpack_require__(458),
  ToXY: __webpack_require__(4586),
  TransformXY: __webpack_require__(4912),
  Within: __webpack_require__(2030),
  Wrap: __webpack_require__(2923),
  //  Vector classes
  Vector2: __webpack_require__(9182),
  Vector3: __webpack_require__(2220),
  Vector4: __webpack_require__(3963),
  Matrix3: __webpack_require__(7125),
  Matrix4: __webpack_require__(5332),
  Quaternion: __webpack_require__(2148),
  RotateVec3: __webpack_require__(3068)
}; //   Merge in the consts

PhaserMath = Extend(false, PhaserMath, CONST); //  Export it

module.exports = PhaserMath;

/***/ }),

/***/ 4110:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Bernstein = __webpack_require__(4908);
/**
 * A bezier interpolation method.
 *
 * @function Phaser.Math.Interpolation.Bezier
 * @since 3.0.0
 *
 * @param {number[]} v - The input array of values to interpolate between.
 * @param {number} k - The percentage of interpolation, between 0 and 1.
 *
 * @return {number} The interpolated value.
 */


var BezierInterpolation = function (v, k) {
  var b = 0;
  var n = v.length - 1;

  for (var i = 0; i <= n; i++) {
    b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein(n, i);
  }

  return b;
};

module.exports = BezierInterpolation;

/***/ }),

/***/ 4725:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CatmullRom = __webpack_require__(3179);
/**
 * A Catmull-Rom interpolation method.
 *
 * @function Phaser.Math.Interpolation.CatmullRom
 * @since 3.0.0
 *
 * @param {number[]} v - The input array of values to interpolate between.
 * @param {number} k - The percentage of interpolation, between 0 and 1.
 *
 * @return {number} The interpolated value.
 */


var CatmullRomInterpolation = function (v, k) {
  var m = v.length - 1;
  var f = m * k;
  var i = Math.floor(f);

  if (v[0] === v[m]) {
    if (k < 0) {
      i = Math.floor(f = m * (1 + k));
    }

    return CatmullRom(f - i, v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m]);
  } else {
    if (k < 0) {
      return v[0] - (CatmullRom(-f, v[0], v[0], v[1], v[1]) - v[0]);
    }

    if (k > 1) {
      return v[m] - (CatmullRom(f - m, v[m], v[m], v[m - 1], v[m - 1]) - v[m]);
    }

    return CatmullRom(f - i, v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2]);
  }
};

module.exports = CatmullRomInterpolation;

/***/ }),

/***/ 144:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @ignore
 */
function P0(t, p) {
  var k = 1 - t;
  return k * k * k * p;
}
/**
 * @ignore
 */


function P1(t, p) {
  var k = 1 - t;
  return 3 * k * k * t * p;
}
/**
 * @ignore
 */


function P2(t, p) {
  return 3 * (1 - t) * t * t * p;
}
/**
 * @ignore
 */


function P3(t, p) {
  return t * t * t * p;
}
/**
 * A cubic bezier interpolation method.
 *
 * https://medium.com/@adrian_cooney/bezier-interpolation-13b68563313a
 *
 * @function Phaser.Math.Interpolation.CubicBezier
 * @since 3.0.0
 *
 * @param {number} t - The percentage of interpolation, between 0 and 1.
 * @param {number} p0 - The start point.
 * @param {number} p1 - The first control point.
 * @param {number} p2 - The second control point.
 * @param {number} p3 - The end point.
 *
 * @return {number} The interpolated value.
 */


var CubicBezierInterpolation = function (t, p0, p1, p2, p3) {
  return P0(t, p0) + P1(t, p1) + P2(t, p2) + P3(t, p3);
};

module.exports = CubicBezierInterpolation;

/***/ }),

/***/ 2457:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Linear = __webpack_require__(7684);
/**
 * A linear interpolation method.
 *
 * @function Phaser.Math.Interpolation.Linear
 * @since 3.0.0
 * @see {@link https://en.wikipedia.org/wiki/Linear_interpolation}
 *
 * @param {number[]} v - The input array of values to interpolate between.
 * @param {!number} k - The percentage of interpolation, between 0 and 1.
 *
 * @return {!number} The interpolated value.
 */


var LinearInterpolation = function (v, k) {
  var m = v.length - 1;
  var f = m * k;
  var i = Math.floor(f);

  if (k < 0) {
    return Linear(v[0], v[1], f);
  } else if (k > 1) {
    return Linear(v[m], v[m - 1], m - f);
  } else {
    return Linear(v[i], v[i + 1 > m ? m : i + 1], f - i);
  }
};

module.exports = LinearInterpolation;

/***/ }),

/***/ 6750:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @ignore
 */
function P0(t, p) {
  var k = 1 - t;
  return k * k * p;
}
/**
 * @ignore
 */


function P1(t, p) {
  return 2 * (1 - t) * t * p;
}
/**
 * @ignore
 */


function P2(t, p) {
  return t * t * p;
} // https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js

/**
 * A quadratic bezier interpolation method.
 *
 * @function Phaser.Math.Interpolation.QuadraticBezier
 * @since 3.2.0
 *
 * @param {number} t - The percentage of interpolation, between 0 and 1.
 * @param {number} p0 - The start point.
 * @param {number} p1 - The control point.
 * @param {number} p2 - The end point.
 *
 * @return {number} The interpolated value.
 */


var QuadraticBezierInterpolation = function (t, p0, p1, p2) {
  return P0(t, p0) + P1(t, p1) + P2(t, p2);
};

module.exports = QuadraticBezierInterpolation;

/***/ }),

/***/ 2192:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var SmoothStep = __webpack_require__(458);
/**
 * A Smooth Step interpolation method.
 *
 * @function Phaser.Math.Interpolation.SmoothStep
 * @since 3.9.0
 * @see {@link https://en.wikipedia.org/wiki/Smoothstep}
 *
 * @param {number} t - The percentage of interpolation, between 0 and 1.
 * @param {number} min - The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
 * @param {number} max - The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
 *
 * @return {number} The interpolated value.
 */


var SmoothStepInterpolation = function (t, min, max) {
  return min + (max - min) * SmoothStep(t, 0, 1);
};

module.exports = SmoothStepInterpolation;

/***/ }),

/***/ 2677:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var SmootherStep = __webpack_require__(9317);
/**
 * A Smoother Step interpolation method.
 *
 * @function Phaser.Math.Interpolation.SmootherStep
 * @since 3.9.0
 * @see {@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
 *
 * @param {number} t - The percentage of interpolation, between 0 and 1.
 * @param {number} min - The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
 * @param {number} max - The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
 *
 * @return {number} The interpolated value.
 */


var SmootherStepInterpolation = function (t, min, max) {
  return min + (max - min) * SmootherStep(t, 0, 1);
};

module.exports = SmootherStepInterpolation;

/***/ }),

/***/ 1678:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Interpolation
 */
module.exports = {
  Bezier: __webpack_require__(4110),
  CatmullRom: __webpack_require__(4725),
  CubicBezier: __webpack_require__(144),
  Linear: __webpack_require__(2457),
  QuadraticBezier: __webpack_require__(6750),
  SmoothStep: __webpack_require__(2192),
  SmootherStep: __webpack_require__(2677)
};

/***/ }),

/***/ 5287:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the nearest power of 2 to the given `value`.
 *
 * @function Phaser.Math.Pow2.GetNext
 * @since 3.0.0
 *
 * @param {number} value - The value.
 *
 * @return {number} The nearest power of 2 to `value`.
 */
var GetPowerOfTwo = function (value) {
  var index = Math.log(value) / 0.6931471805599453;
  return 1 << Math.ceil(index);
};

module.exports = GetPowerOfTwo;

/***/ }),

/***/ 1132:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if the given `width` and `height` are a power of two.
 * Useful for checking texture dimensions.
 *
 * @function Phaser.Math.Pow2.IsSize
 * @since 3.0.0
 *
 * @param {number} width - The width.
 * @param {number} height - The height.
 *
 * @return {boolean} `true` if `width` and `height` are a power of two, otherwise `false`.
 */
var IsSizePowerOfTwo = function (width, height) {
  return width > 0 && (width & width - 1) === 0 && height > 0 && (height & height - 1) === 0;
};

module.exports = IsSizePowerOfTwo;

/***/ }),

/***/ 3272:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Tests the value and returns `true` if it is a power of two.
 *
 * @function Phaser.Math.Pow2.IsValue
 * @since 3.0.0
 *
 * @param {number} value - The value to check if it's a power of two.
 *
 * @return {boolean} Returns `true` if `value` is a power of two, otherwise `false`.
 */
var IsValuePowerOfTwo = function (value) {
  return value > 0 && (value & value - 1) === 0;
};

module.exports = IsValuePowerOfTwo;

/***/ }),

/***/ 1154:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Pow2
 */
module.exports = {
  GetNext: __webpack_require__(5287),
  IsSize: __webpack_require__(1132),
  IsValue: __webpack_require__(3272)
};

/***/ }),

/***/ 7688:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = __webpack_require__(3018);
/**
 * @classdesc
 * A seeded Random Data Generator.
 * 
 * Access via `Phaser.Math.RND` which is an instance of this class pre-defined
 * by Phaser. Or, create your own instance to use as you require.
 * 
 * The `Math.RND` generator is seeded by the Game Config property value `seed`.
 * If no such config property exists, a random number is used.
 * 
 * If you create your own instance of this class you should provide a seed for it.
 * If no seed is given it will use a 'random' one based on Date.now.
 *
 * @class RandomDataGenerator
 * @memberof Phaser.Math
 * @constructor
 * @since 3.0.0
 *
 * @param {(string|string[])} [seeds] - The seeds to use for the random number generator.
 */


var RandomDataGenerator = new Class({
  initialize: function RandomDataGenerator(seeds) {
    if (seeds === undefined) {
      seeds = [(Date.now() * Math.random()).toString()];
    }
    /**
     * Internal var.
     *
     * @name Phaser.Math.RandomDataGenerator#c
     * @type {number}
     * @default 1
     * @private
     * @since 3.0.0
     */


    this.c = 1;
    /**
     * Internal var.
     *
     * @name Phaser.Math.RandomDataGenerator#s0
     * @type {number}
     * @default 0
     * @private
     * @since 3.0.0
     */

    this.s0 = 0;
    /**
     * Internal var.
     *
     * @name Phaser.Math.RandomDataGenerator#s1
     * @type {number}
     * @default 0
     * @private
     * @since 3.0.0
     */

    this.s1 = 0;
    /**
     * Internal var.
     *
     * @name Phaser.Math.RandomDataGenerator#s2
     * @type {number}
     * @default 0
     * @private
     * @since 3.0.0
     */

    this.s2 = 0;
    /**
     * Internal var.
     *
     * @name Phaser.Math.RandomDataGenerator#n
     * @type {number}
     * @default 0
     * @private
     * @since 3.2.0
     */

    this.n = 0;
    /**
     * Signs to choose from.
     *
     * @name Phaser.Math.RandomDataGenerator#signs
     * @type {number[]}
     * @since 3.0.0
     */

    this.signs = [-1, 1];

    if (seeds) {
      this.init(seeds);
    }
  },

  /**
   * Private random helper.
   *
   * @method Phaser.Math.RandomDataGenerator#rnd
   * @since 3.0.0
   * @private
   *
   * @return {number} A random number.
   */
  rnd: function () {
    var t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32

    this.c = t | 0;
    this.s0 = this.s1;
    this.s1 = this.s2;
    this.s2 = t - this.c;
    return this.s2;
  },

  /**
   * Internal method that creates a seed hash.
   *
   * @method Phaser.Math.RandomDataGenerator#hash
   * @since 3.0.0
   * @private
   *
   * @param {string} data - The value to hash.
   *
   * @return {number} The hashed value.
   */
  hash: function (data) {
    var h;
    var n = this.n;
    data = data.toString();

    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }

    this.n = n;
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  },

  /**
   * Initialize the state of the random data generator.
   *
   * @method Phaser.Math.RandomDataGenerator#init
   * @since 3.0.0
   *
   * @param {(string|string[])} seeds - The seeds to initialize the random data generator with.
   */
  init: function (seeds) {
    if (typeof seeds === 'string') {
      this.state(seeds);
    } else {
      this.sow(seeds);
    }
  },

  /**
   * Reset the seed of the random data generator.
   *
   * _Note_: the seed array is only processed up to the first `undefined` (or `null`) value, should such be present.
   *
   * @method Phaser.Math.RandomDataGenerator#sow
   * @since 3.0.0
   *
   * @param {string[]} seeds - The array of seeds: the `toString()` of each value is used.
   */
  sow: function (seeds) {
    // Always reset to default seed
    this.n = 0xefc8249d;
    this.s0 = this.hash(' ');
    this.s1 = this.hash(' ');
    this.s2 = this.hash(' ');
    this.c = 1;

    if (!seeds) {
      return;
    } // Apply any seeds


    for (var i = 0; i < seeds.length && seeds[i] != null; i++) {
      var seed = seeds[i];
      this.s0 -= this.hash(seed);
      this.s0 += ~~(this.s0 < 0);
      this.s1 -= this.hash(seed);
      this.s1 += ~~(this.s1 < 0);
      this.s2 -= this.hash(seed);
      this.s2 += ~~(this.s2 < 0);
    }
  },

  /**
   * Returns a random integer between 0 and 2^32.
   *
   * @method Phaser.Math.RandomDataGenerator#integer
   * @since 3.0.0
   *
   * @return {number} A random integer between 0 and 2^32.
   */
  integer: function () {
    // 2^32
    return this.rnd() * 0x100000000;
  },

  /**
   * Returns a random real number between 0 and 1.
   *
   * @method Phaser.Math.RandomDataGenerator#frac
   * @since 3.0.0
   *
   * @return {number} A random real number between 0 and 1.
   */
  frac: function () {
    // 2^-53
    return this.rnd() + (this.rnd() * 0x200000 | 0) * 1.1102230246251565e-16;
  },

  /**
   * Returns a random real number between 0 and 2^32.
   *
   * @method Phaser.Math.RandomDataGenerator#real
   * @since 3.0.0
   *
   * @return {number} A random real number between 0 and 2^32.
   */
  real: function () {
    return this.integer() + this.frac();
  },

  /**
   * Returns a random integer between and including min and max.
   *
   * @method Phaser.Math.RandomDataGenerator#integerInRange
   * @since 3.0.0
   *
   * @param {number} min - The minimum value in the range.
   * @param {number} max - The maximum value in the range.
   *
   * @return {number} A random number between min and max.
   */
  integerInRange: function (min, max) {
    return Math.floor(this.realInRange(0, max - min + 1) + min);
  },

  /**
   * Returns a random integer between and including min and max.
   * This method is an alias for RandomDataGenerator.integerInRange.
   *
   * @method Phaser.Math.RandomDataGenerator#between
   * @since 3.0.0
   *
   * @param {number} min - The minimum value in the range.
   * @param {number} max - The maximum value in the range.
   *
   * @return {number} A random number between min and max.
   */
  between: function (min, max) {
    return Math.floor(this.realInRange(0, max - min + 1) + min);
  },

  /**
   * Returns a random real number between min and max.
   *
   * @method Phaser.Math.RandomDataGenerator#realInRange
   * @since 3.0.0
   *
   * @param {number} min - The minimum value in the range.
   * @param {number} max - The maximum value in the range.
   *
   * @return {number} A random number between min and max.
   */
  realInRange: function (min, max) {
    return this.frac() * (max - min) + min;
  },

  /**
   * Returns a random real number between -1 and 1.
   *
   * @method Phaser.Math.RandomDataGenerator#normal
   * @since 3.0.0
   *
   * @return {number} A random real number between -1 and 1.
   */
  normal: function () {
    return 1 - 2 * this.frac();
  },

  /**
   * Returns a valid RFC4122 version4 ID hex string from https://gist.github.com/1308368
   *
   * @method Phaser.Math.RandomDataGenerator#uuid
   * @since 3.0.0
   *
   * @return {string} A valid RFC4122 version4 ID hex string
   */
  uuid: function () {
    var a = '';
    var b = '';

    for (b = a = ''; a++ < 36; b += ~a % 5 | a * 3 & 4 ? (a ^ 15 ? 8 ^ this.frac() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-') {// eslint-disable-next-line no-empty
    }

    return b;
  },

  /**
   * Returns a random element from within the given array.
   *
   * @method Phaser.Math.RandomDataGenerator#pick
   * @since 3.0.0
   * 
   * @generic T
   * @genericUse {T[]} - [array]
   * @genericUse {T} - [$return]
   *
   * @param {T[]} array - The array to pick a random element from.
   *
   * @return {T} A random member of the array.
   */
  pick: function (array) {
    return array[this.integerInRange(0, array.length - 1)];
  },

  /**
   * Returns a sign to be used with multiplication operator.
   *
   * @method Phaser.Math.RandomDataGenerator#sign
   * @since 3.0.0
   *
   * @return {number} -1 or +1.
   */
  sign: function () {
    return this.pick(this.signs);
  },

  /**
   * Returns a random element from within the given array, favoring the earlier entries.
   *
   * @method Phaser.Math.RandomDataGenerator#weightedPick
   * @since 3.0.0
   *
   * @generic T
   * @genericUse {T[]} - [array]
   * @genericUse {T} - [$return]
   *
   * @param {T[]} array - The array to pick a random element from.
   *
   * @return {T} A random member of the array.
   */
  weightedPick: function (array) {
    return array[~~(Math.pow(this.frac(), 2) * (array.length - 1) + 0.5)];
  },

  /**
   * Returns a random timestamp between min and max, or between the beginning of 2000 and the end of 2020 if min and max aren't specified.
   *
   * @method Phaser.Math.RandomDataGenerator#timestamp
   * @since 3.0.0
   *
   * @param {number} min - The minimum value in the range.
   * @param {number} max - The maximum value in the range.
   *
   * @return {number} A random timestamp between min and max.
   */
  timestamp: function (min, max) {
    return this.realInRange(min || 946684800000, max || 1577862000000);
  },

  /**
   * Returns a random angle between -180 and 180.
   *
   * @method Phaser.Math.RandomDataGenerator#angle
   * @since 3.0.0
   *
   * @return {number} A random number between -180 and 180.
   */
  angle: function () {
    return this.integerInRange(-180, 180);
  },

  /**
   * Returns a random rotation in radians, between -3.141 and 3.141
   *
   * @method Phaser.Math.RandomDataGenerator#rotation
   * @since 3.0.0
   *
   * @return {number} A random number between -3.141 and 3.141
   */
  rotation: function () {
    return this.realInRange(-3.1415926, 3.1415926);
  },

  /**
   * Gets or Sets the state of the generator. This allows you to retain the values
   * that the generator is using between games, i.e. in a game save file.
   *
   * To seed this generator with a previously saved state you can pass it as the
   * `seed` value in your game config, or call this method directly after Phaser has booted.
   *
   * Call this method with no parameters to return the current state.
   *
   * If providing a state it should match the same format that this method
   * returns, which is a string with a header `!rnd` followed by the `c`,
   * `s0`, `s1` and `s2` values respectively, each comma-delimited.
   *
   * @method Phaser.Math.RandomDataGenerator#state
   * @since 3.0.0
   *
   * @param {string} [state] - Generator state to be set.
   *
   * @return {string} The current state of the generator.
   */
  state: function (state) {
    if (typeof state === 'string' && state.match(/^!rnd/)) {
      state = state.split(',');
      this.c = parseFloat(state[1]);
      this.s0 = parseFloat(state[2]);
      this.s1 = parseFloat(state[3]);
      this.s2 = parseFloat(state[4]);
    }

    return ['!rnd', this.c, this.s0, this.s1, this.s2].join(',');
  },

  /**
   * Shuffles the given array, using the current seed.
   *
   * @method Phaser.Math.RandomDataGenerator#shuffle
   * @since 3.7.0
   *
   * @generic T
   * @genericUse {T[]} - [array,$return]
   *
   * @param {T[]} [array] - The array to be shuffled.
   *
   * @return {T[]} The shuffled array.
   */
  shuffle: function (array) {
    var len = array.length - 1;

    for (var i = len; i > 0; i--) {
      var randomIndex = Math.floor(this.frac() * (i + 1));
      var itemAtIndex = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
    }

    return array;
  }
});
module.exports = RandomDataGenerator;

/***/ }),

/***/ 2487:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Snap a value to nearest grid slice, using ceil.
 *
 * Example: if you have an interval gap of `5` and a position of `12`... you will snap to `15`.
 * As will `14` snap to `15`... but `16` will snap to `20`.
 *
 * @function Phaser.Math.Snap.Ceil
 * @since 3.0.0
 *
 * @param {number} value - The value to snap.
 * @param {number} gap - The interval gap of the grid.
 * @param {number} [start=0] - Optional starting offset for gap.
 * @param {boolean} [divide=false] - If `true` it will divide the snapped value by the gap before returning.
 *
 * @return {number} The snapped value.
 */
var SnapCeil = function (value, gap, start, divide) {
  if (start === undefined) {
    start = 0;
  }

  if (gap === 0) {
    return value;
  }

  value -= start;
  value = gap * Math.ceil(value / gap);
  return divide ? (start + value) / gap : start + value;
};

module.exports = SnapCeil;

/***/ }),

/***/ 7650:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Snap a value to nearest grid slice, using floor.
 *
 * Example: if you have an interval gap of `5` and a position of `12`... you will snap to `10`.
 * As will `14` snap to `10`... but `16` will snap to `15`.
 *
 * @function Phaser.Math.Snap.Floor
 * @since 3.0.0
 *
 * @param {number} value - The value to snap.
 * @param {number} gap - The interval gap of the grid.
 * @param {number} [start=0] - Optional starting offset for gap.
 * @param {boolean} [divide=false] - If `true` it will divide the snapped value by the gap before returning.
 *
 * @return {number} The snapped value.
 */
var SnapFloor = function (value, gap, start, divide) {
  if (start === undefined) {
    start = 0;
  }

  if (gap === 0) {
    return value;
  }

  value -= start;
  value = gap * Math.floor(value / gap);
  return divide ? (start + value) / gap : start + value;
};

module.exports = SnapFloor;

/***/ }),

/***/ 9616:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Snap a value to nearest grid slice, using rounding.
 *
 * Example: if you have an interval gap of `5` and a position of `12`... you will snap to `10` whereas `14` will snap to `15`.
 *
 * @function Phaser.Math.Snap.To
 * @since 3.0.0
 *
 * @param {number} value - The value to snap.
 * @param {number} gap - The interval gap of the grid.
 * @param {number} [start=0] - Optional starting offset for gap.
 * @param {boolean} [divide=false] - If `true` it will divide the snapped value by the gap before returning.
 *
 * @return {number} The snapped value.
 */
var SnapTo = function (value, gap, start, divide) {
  if (start === undefined) {
    start = 0;
  }

  if (gap === 0) {
    return value;
  }

  value -= start;
  value = gap * Math.round(value / gap);
  return divide ? (start + value) / gap : start + value;
};

module.exports = SnapTo;

/***/ }),

/***/ 6437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Math.Snap
 */
module.exports = {
  Ceil: __webpack_require__(2487),
  Floor: __webpack_require__(7650),
  To: __webpack_require__(9616)
};

/***/ }),

/***/ 8766:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Generate shader source to test maximum ifs.
 *
 * @private
 * @ignore
 * @param {number} maxIfs - The number of if statements to generate
 */
function GenerateSrc(maxIfs) {
  var src = '';

  for (var i = 0; i < maxIfs; ++i) {
    if (i > 0) {
      src += '\nelse ';
    }

    if (i < maxIfs - 1) {
      src += 'if(test == ' + i + '.0){}';
    }
  }

  return src;
}
/**
 * @namespace Phaser.Renderer.WebGL.Utils
 * @since 3.0.0
 */


module.exports = {
  /**
   * Packs four floats on a range from 0.0 to 1.0 into a single Uint32
   *
   * @function Phaser.Renderer.WebGL.Utils.getTintFromFloats
   * @since 3.0.0
   *
   * @param {number} r - Red component in a range from 0.0 to 1.0
   * @param {number} g - Green component in a range from 0.0 to 1.0
   * @param {number} b - Blue component in a range from 0.0 to 1.0
   * @param {number} a - Alpha component in a range from 0.0 to 1.0
   *
   * @return {number} The packed RGBA values as a Uint32.
   */
  getTintFromFloats: function (r, g, b, a) {
    var ur = (r * 255 | 0) & 0xff;
    var ug = (g * 255 | 0) & 0xff;
    var ub = (b * 255 | 0) & 0xff;
    var ua = (a * 255 | 0) & 0xff;
    return (ua << 24 | ur << 16 | ug << 8 | ub) >>> 0;
  },

  /**
   * Packs a Uint24, representing RGB components, with a Float32, representing
   * the alpha component, with a range between 0.0 and 1.0 and return a Uint32
   *
   * @function Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlpha
   * @since 3.0.0
   *
   * @param {number} rgb - Uint24 representing RGB components
   * @param {number} a - Float32 representing Alpha component
   *
   * @return {number} Packed RGBA as Uint32
   */
  getTintAppendFloatAlpha: function (rgb, a) {
    var ua = (a * 255 | 0) & 0xff;
    return (ua << 24 | rgb) >>> 0;
  },

  /**
   * Packs a Uint24, representing RGB components, with a Float32, representing
   * the alpha component, with a range between 0.0 and 1.0 and return a
   * swizzled Uint32
   *
   * @function Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlphaAndSwap
   * @since 3.0.0
   *
   * @param {number} rgb - Uint24 representing RGB components
   * @param {number} a - Float32 representing Alpha component
   *
   * @return {number} Packed RGBA as Uint32
   */
  getTintAppendFloatAlphaAndSwap: function (rgb, a) {
    var ur = (rgb >> 16 | 0) & 0xff;
    var ug = (rgb >> 8 | 0) & 0xff;
    var ub = (rgb | 0) & 0xff;
    var ua = (a * 255 | 0) & 0xff;
    return (ua << 24 | ub << 16 | ug << 8 | ur) >>> 0;
  },

  /**
   * Unpacks a Uint24 RGB into an array of floats of ranges of 0.0 and 1.0
   *
   * @function Phaser.Renderer.WebGL.Utils.getFloatsFromUintRGB
   * @since 3.0.0
   *
   * @param {number} rgb - RGB packed as a Uint24
   *
   * @return {array} Array of floats representing each component as a float
   */
  getFloatsFromUintRGB: function (rgb) {
    var ur = (rgb >> 16 | 0) & 0xff;
    var ug = (rgb >> 8 | 0) & 0xff;
    var ub = (rgb | 0) & 0xff;
    return [ur / 255, ug / 255, ub / 255];
  },

  /**
   * Check to see how many texture units the GPU supports, based on the given config value.
   * Then tests this against the maximum number of iterations GLSL can support.
   *
   * @function Phaser.Renderer.WebGL.Utils.checkShaderMax
   * @since 3.50.0
   *
   * @param {WebGLRenderingContext} gl - The WebGLContext used to create the shaders.
   * @param {number} maxTextures - The Game Config maxTextures value.
   *
   * @return {number} The number of texture units that is supported by this browser and GPU.
   */
  checkShaderMax: function (gl, maxTextures) {
    if (!maxTextures || maxTextures === -1) {
      maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    }

    var shader = gl.createShader(gl.FRAGMENT_SHADER);
    var fragTemplate = ['precision mediump float;', 'void main(void){', 'float test = 0.1;', '%forloop%', 'gl_FragColor = vec4(0.0);', '}'].join('\n'); // eslint-disable-next-line no-constant-condition

    while (true) {
      var fragmentSrc = fragTemplate.replace(/%forloop%/gi, GenerateSrc(maxTextures));
      gl.shaderSource(shader, fragmentSrc);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        maxTextures = maxTextures / 2 | 0;
      } else {
        // valid!
        break;
      }
    }

    return maxTextures;
  },

  /**
   * Checks the given Fragment Shader Source for `%count%` and `%forloop%` declarations and
   * replaces those with GLSL code for setting `texture = texture2D(uMainSampler[i], outTexCoord)`.
   *
   * @function Phaser.Renderer.WebGL.Utils.parseFragmentShaderMaxTextures
   * @since 3.50.0
   *
   * @param {string} fragmentShaderSource - The Fragment Shader source code to operate on.
   * @param {number} maxTextures - The number of maxTextures value.
   *
   * @return {string} The modified Fragment Shader source.
   */
  parseFragmentShaderMaxTextures: function (fragmentShaderSource, maxTextures) {
    if (!fragmentShaderSource) {
      return '';
    }

    var src = '';

    for (var i = 0; i < maxTextures; i++) {
      if (i > 0) {
        src += '\n\telse ';
      }

      if (i < maxTextures - 1) {
        src += 'if (outTexId < ' + i + '.5)';
      }

      src += '\n\t{';
      src += '\n\t\ttexture = texture2D(uMainSampler[' + i + '], outTexCoord);';
      src += '\n\t}';
    }

    fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, maxTextures.toString());
    return fragmentShaderSource.replace(/%forloop%/gi, src);
  }
};

/***/ }),

/***/ 2124:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var EaseMap = __webpack_require__(6298);

var UppercaseFirst = __webpack_require__(8204);
/**
 * This internal function is used to return the correct ease function for a Tween.
 * 
 * It can take a variety of input, including an EaseMap based string, or a custom function.
 *
 * @function Phaser.Tweens.Builders.GetEaseFunction
 * @since 3.0.0
 *
 * @param {(string|function)} ease - The ease to find. This can be either a string from the EaseMap, or a custom function.
 * @param {number[]} [easeParams] - An optional array of ease parameters to go with the ease.
 *
 * @return {function} The ease function.
 */


var GetEaseFunction = function (ease, easeParams) {
  //  Default ease function
  var easeFunction = EaseMap.Power0; //  Prepare ease function

  if (typeof ease === 'string') {
    //  String based look-up
    //  1) They specified it correctly
    if (EaseMap.hasOwnProperty(ease)) {
      easeFunction = EaseMap[ease];
    } else {
      //  Do some string manipulation to try and find it
      var direction = '';

      if (ease.indexOf('.')) {
        //  quad.in = Quad.easeIn
        //  quad.out = Quad.easeOut
        //  quad.inout = Quad.easeInOut
        direction = ease.substr(ease.indexOf('.') + 1);

        if (direction.toLowerCase() === 'in') {
          direction = 'easeIn';
        } else if (direction.toLowerCase() === 'out') {
          direction = 'easeOut';
        } else if (direction.toLowerCase() === 'inout') {
          direction = 'easeInOut';
        }
      }

      ease = UppercaseFirst(ease.substr(0, ease.indexOf('.') + 1) + direction);

      if (EaseMap.hasOwnProperty(ease)) {
        easeFunction = EaseMap[ease];
      }
    }
  } else if (typeof ease === 'function') {
    //  Custom function
    easeFunction = ease;
  } else if (Array.isArray(ease) && ease.length === 4) {//  Bezier function (TODO)
  } //  No custom ease parameters?


  if (!easeParams) {
    //  Return ease function
    return easeFunction;
  }

  var cloneParams = easeParams.slice(0);
  cloneParams.unshift(0); //  Return ease function with custom ease parameters

  return function (v) {
    cloneParams[0] = v;
    return easeFunction.apply(this, cloneParams);
  };
};

module.exports = GetEaseFunction;

/***/ }),

/***/ 3018:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1703);

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
//  Taken from klasse by mattdesl https://github.com/mattdesl/klasse
function hasGetterOrSetter(def) {
  return !!def.get && typeof def.get === 'function' || !!def.set && typeof def.set === 'function';
}

function getProperty(definition, k, isClassDescriptor) {
  //  This may be a lightweight object, OR it might be a property that was defined previously.
  //  For simple class descriptors we can just assume its NOT previously defined.
  var def = isClassDescriptor ? definition[k] : Object.getOwnPropertyDescriptor(definition, k);

  if (!isClassDescriptor && def.value && typeof def.value === 'object') {
    def = def.value;
  } //  This might be a regular property, or it may be a getter/setter the user defined in a class.


  if (def && hasGetterOrSetter(def)) {
    if (typeof def.enumerable === 'undefined') {
      def.enumerable = true;
    }

    if (typeof def.configurable === 'undefined') {
      def.configurable = true;
    }

    return def;
  } else {
    return false;
  }
}

function hasNonConfigurable(obj, k) {
  var prop = Object.getOwnPropertyDescriptor(obj, k);

  if (!prop) {
    return false;
  }

  if (prop.value && typeof prop.value === 'object') {
    prop = prop.value;
  }

  if (prop.configurable === false) {
    return true;
  }

  return false;
}
/**
 * Extends the given `myClass` object's prototype with the properties of `definition`.
 *
 * @function extend
 * @ignore
 * @param {Object} ctor The constructor object to mix into.
 * @param {Object} definition A dictionary of functions for the class.
 * @param {boolean} isClassDescriptor Is the definition a class descriptor?
 * @param {Object} [extend] The parent constructor object.
 */


function extend(ctor, definition, isClassDescriptor, extend) {
  for (var k in definition) {
    if (!definition.hasOwnProperty(k)) {
      continue;
    }

    var def = getProperty(definition, k, isClassDescriptor);

    if (def !== false) {
      //  If Extends is used, we will check its prototype to see if the final variable exists.
      var parent = extend || ctor;

      if (hasNonConfigurable(parent.prototype, k)) {
        //  Just skip the final property
        if (Class.ignoreFinals) {
          continue;
        } //  We cannot re-define a property that is configurable=false.
        //  So we will consider them final and throw an error. This is by
        //  default so it is clear to the developer what is happening.
        //  You can set ignoreFinals to true if you need to extend a class
        //  which has configurable=false; it will simply not re-define final properties.


        throw new Error('cannot override final property \'' + k + '\', set Class.ignoreFinals = true to skip');
      }

      Object.defineProperty(ctor.prototype, k, def);
    } else {
      ctor.prototype[k] = definition[k];
    }
  }
}
/**
 * Applies the given `mixins` to the prototype of `myClass`.
 *
 * @function mixin
 * @ignore
 * @param {Object} myClass The constructor object to mix into.
 * @param {Object|Array<Object>} mixins The mixins to apply to the constructor.
 */


function mixin(myClass, mixins) {
  if (!mixins) {
    return;
  }

  if (!Array.isArray(mixins)) {
    mixins = [mixins];
  }

  for (var i = 0; i < mixins.length; i++) {
    extend(myClass, mixins[i].prototype || mixins[i]);
  }
}
/**
 * Creates a new class with the given descriptor.
 * The constructor, defined by the name `initialize`,
 * is an optional function. If unspecified, an anonymous
 * function will be used which calls the parent class (if
 * one exists).
 *
 * You can also use `Extends` and `Mixins` to provide subclassing
 * and inheritance.
 *
 * @class Phaser.Class
 * @constructor
 * @param {Object} definition a dictionary of functions for the class
 * @example
 *
 *      var MyClass = new Phaser.Class({
 *
 *          initialize: function() {
 *              this.foo = 2.0;
 *          },
 *
 *          bar: function() {
 *              return this.foo + 5;
 *          }
 *      });
 */


function Class(definition) {
  if (!definition) {
    definition = {};
  } //  The variable name here dictates what we see in Chrome debugger


  var initialize;
  var Extends;

  if (definition.initialize) {
    if (typeof definition.initialize !== 'function') {
      throw new Error('initialize must be a function');
    }

    initialize = definition.initialize; //  Usually we should avoid 'delete' in V8 at all costs.
    //  However, its unlikely to make any performance difference
    //  here since we only call this on class creation (i.e. not object creation).

    delete definition.initialize;
  } else if (definition.Extends) {
    var base = definition.Extends;

    initialize = function () {
      base.apply(this, arguments);
    };
  } else {
    initialize = function () {};
  }

  if (definition.Extends) {
    initialize.prototype = Object.create(definition.Extends.prototype);
    initialize.prototype.constructor = initialize; //  For getOwnPropertyDescriptor to work, we need to act directly on the Extends (or Mixin)

    Extends = definition.Extends;
    delete definition.Extends;
  } else {
    initialize.prototype.constructor = initialize;
  } //  Grab the mixins, if they are specified...


  var mixins = null;

  if (definition.Mixins) {
    mixins = definition.Mixins;
    delete definition.Mixins;
  } //  First, mixin if we can.


  mixin(initialize, mixins); //  Now we grab the actual definition which defines the overrides.

  extend(initialize, definition, true, Extends);
  return initialize;
}

Class.extend = extend;
Class.mixin = mixin;
Class.ignoreFinals = false;
module.exports = Class;

/***/ }),

/***/ 9584:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * A NOOP (No Operation) callback function.
 *
 * Used internally by Phaser when it's more expensive to determine if a callback exists
 * than it is to just invoke an empty function.
 *
 * @function Phaser.Utils.NOOP
 * @since 3.0.0
 */
var NOOP = function () {//  NOOP
};

module.exports = NOOP;

/***/ }),

/***/ 2037:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var IsPlainObject = __webpack_require__(3642); // @param {boolean} deep - Perform a deep copy?
// @param {object} target - The target object to copy to.
// @return {object} The extended object.

/**
 * This is a slightly modified version of http://api.jquery.com/jQuery.extend/
 *
 * @function Phaser.Utils.Objects.Extend
 * @since 3.0.0
 *
 * @param {...*} [args] - The objects that will be mixed.
 *
 * @return {object} The extended object.
 */


var Extend = function () {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  } // extend Phaser if only one argument is passed


  if (length === i) {
    target = this;
    --i;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Recurse if we're merging plain objects or arrays


        if (deep && copy && (IsPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && IsPlainObject(src) ? src : {};
          } // Never move original objects, clone them


          target[name] = Extend(deep, clone, copy); // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
};

module.exports = Extend;

/***/ }),

/***/ 6128:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Finds the key within the top level of the {@link source} object, or returns {@link defaultValue}
 *
 * @function Phaser.Utils.Objects.GetFastValue
 * @since 3.0.0
 *
 * @param {object} source - The object to search
 * @param {string} key - The key for the property on source. Must exist at the top level of the source object (no periods)
 * @param {*} [defaultValue] - The default value to use if the key does not exist.
 *
 * @return {*} The value if found; otherwise, defaultValue (null if none provided)
 */
var GetFastValue = function (source, key, defaultValue) {
  var t = typeof source;

  if (!source || t === 'number' || t === 'string') {
    return defaultValue;
  } else if (source.hasOwnProperty(key) && source[key] !== undefined) {
    return source[key];
  } else {
    return defaultValue;
  }
};

module.exports = GetFastValue;

/***/ }),

/***/ 3642:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * This is a slightly modified version of jQuery.isPlainObject.
 * A plain object is an object whose internal class property is [object Object].
 *
 * @function Phaser.Utils.Objects.IsPlainObject
 * @since 3.0.0
 *
 * @param {object} obj - The object to inspect.
 *
 * @return {boolean} `true` if the object is plain, otherwise `false`.
 */
var IsPlainObject = function (obj) {
  // Not plain objects:
  // - Any object or value whose internal [[Class]] property is not "[object Object]"
  // - DOM nodes
  // - window
  if (typeof obj !== 'object' || obj.nodeType || obj === obj.window) {
    return false;
  } // Support: Firefox <20
  // The try/catch suppresses exceptions thrown when attempting to access
  // the "constructor" property of certain host objects, ie. |window.location|
  // https://bugzilla.mozilla.org/show_bug.cgi?id=814622


  try {
    if (obj.constructor && !{}.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
      return false;
    }
  } catch (e) {
    return false;
  } // If the function hasn't returned already, we're confident that
  // |obj| is a plain object, created by {} or constructed with new Object


  return true;
};

module.exports = IsPlainObject;

/***/ }),

/***/ 8204:
/***/ (function(module) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Capitalizes the first letter of a string if there is one.
 * @example
 * UppercaseFirst('abc');
 * // returns 'Abc'
 * @example
 * UppercaseFirst('the happy family');
 * // returns 'The happy family'
 * @example
 * UppercaseFirst('');
 * // returns ''
 *
 * @function Phaser.Utils.String.UppercaseFirst
 * @since 3.0.0
 *
 * @param {string} str - The string to capitalize.
 *
 * @return {string} A new string, same as the first, but with the first letter capitalized.
 */
var UppercaseFirst = function (str) {
  return str && str[0].toUpperCase() + str.slice(1);
};

module.exports = UppercaseFirst;

/***/ })

}]);
//# sourceMappingURL=56.f1679973.js.map