"use strict";
(self["webpackChunkecs_arraybuffer"] = self["webpackChunkecs_arraybuffer"] || []).push([[110],{

/***/ 5880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MultithreadedGame; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3396);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(7139);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4870);
// EXTERNAL MODULE: ./node_modules/phaser/dist/phaser.js
var phaser = __webpack_require__(3836);
var phaser_default = /*#__PURE__*/__webpack_require__.n(phaser);
// EXTERNAL MODULE: ./src/data/generate-scene.ts
var generate_scene = __webpack_require__(238);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2482);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__(8675);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__(3462);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6856);
;// CONCATENATED MODULE: ./src/multithreaded/constants.ts
const INT_FLOAT_MULTIPLIER = 1_000.0;
;// CONCATENATED MODULE: ./src/multithreaded/entities/entity.ts



class Entity extends eventemitter3.EventEmitter {
  // Position
  get x() {
    return this.world.components.position.x[this.eid];
  }

  set x(val) {
    this.world.components.position.x[this.eid] = val;
  }

  get y() {
    return this.world.components.position.y[this.eid];
  }

  set y(val) {
    this.world.components.position.y[this.eid] = val;
  }

  get width() {
    return this.world.components.position.width[this.eid];
  }

  set width(val) {
    this.world.components.position.width[this.eid] = val;
  }

  get height() {
    return this.world.components.position.height[this.eid];
  }

  set height(val) {
    this.world.components.position.height[this.eid] = val;
  } // Health


  get shields() {
    return this.world.components.health.shields[this.eid];
  }

  set shields(val) {
    this.world.components.health.shields[this.eid] = val;
  }

  get maxShields() {
    return this.world.components.health.maxShields[this.eid];
  }

  set maxShields(val) {
    this.world.components.health.maxShields[this.eid] = val;
  }

  get timeToRegenerateShields() {
    return this.world.components.health.timeToRegenerateShields[this.eid];
  }

  set timeToRegenerateShields(val) {
    this.world.components.health.timeToRegenerateShields[this.eid] = val;
  }

  get timeSinceShieldRegeneration() {
    return this.world.components.health.timeSinceShieldRegeneration[this.eid];
  }

  set timeSinceShieldRegeneration(val) {
    this.world.components.health.timeSinceShieldRegeneration[this.eid] = val;
  }

  get timeSinceTakenDamage() {
    return this.world.components.health.timeSinceTakenDamage[this.eid];
  }

  set timeSinceTakenDamage(val) {
    this.world.components.health.timeSinceTakenDamage[this.eid] = val;
  }

  get dead() {
    return this.world.components.health.shields[this.eid];
  }

  set dead(val) {
    this.world.components.health.shields[this.eid] = val;
  }

  constructor(world) {
    super();

    (0,defineProperty/* default */.Z)(this, "world", void 0);

    (0,defineProperty/* default */.Z)(this, "eid", void 0);

    (0,defineProperty/* default */.Z)(this, "type", 'entity');

    (0,defineProperty/* default */.Z)(this, "key", 'boid');

    this.eid = world.getId();
    this.world = world;
    this.shields = 1;
    this.maxShields = 1;
    this.timeToRegenerateShields = 1;
    this.timeSinceShieldRegeneration = 0;
    this.timeSinceTakenDamage = 0;
    this.dead = 0;
  }

  load(config) {
    // TODO: Need a way which does not rely on manually setup get/set.  Maybe in our own system define how it is serialized as part of the component registration?
    Object.keys(config).forEach(key => {
      if (key === 'x' || key === 'y') {
        this[key] = config[key] * INT_FLOAT_MULTIPLIER;
      } else {
        // @ts-expect-error
        this[key] = config[key];
      }
    });
  }

}
;// CONCATENATED MODULE: ./src/multithreaded/components/get-entities.ts
// NOTE: All of these have to live in a single file in order to make sure that inlining them into the web worker doesn't try to reference dynamic __WEBPACK_IMPORT
// Components and WorldConfig can live separately since they are just type hints that get stripped from the js code anyways
function getEntitiesWithComponents(world, types) {
  let typeBits = getTypeBits(types);
  let eids = [];
  let currentCounter = Atomics.load(world.idCounter, 0);

  for (let eid = 0; eid <= currentCounter; eid++) {
    if ((Atomics.load(world.components.entity.components, eid) & typeBits) === typeBits && Atomics.load(world.components.entity.dead, eid) === 0) {
      eids.push(eid);
    }
  }

  return eids;
}
function getAllEntitiesWithComponents(world, types) {
  let typeBits = getTypeBits(types);
  let eids = [];
  let currentCounter = Atomics.load(world.idCounter, 0);

  for (let eid = 0; eid <= currentCounter; eid++) {
    if ((Atomics.load(world.components.entity.components, eid) & typeBits) === typeBits) {
      eids.push(eid);
    }
  }

  return eids;
}
function getTypeBit(type) {
  switch (type) {
    case 'entity':
      return 1;

    case 'position':
      return 2 ** 1;

    case 'velocity':
      return 2 ** 2;

    case 'health':
      return 2 ** 3;

    case 'controller':
      return 2 ** 4;

    case 'controlled':
      return 2 ** 5;

    case 'attack':
      return 2 ** 6;

    default:
      return 0;
  }
}
function getTypeBits(types) {
  let typeBits = 0;
  types.forEach(type => {
    typeBits |= getTypeBit(type);
  });
  return typeBits;
}
function hasComponent(components, eid, type) {
  return (Atomics.load(components.entity.components, eid) & getTypeBit(type)) > 0;
}
function addComponents(components, eid, types) {
  Atomics.or(components.entity.components, eid, getTypeBits(types));
}
;// CONCATENATED MODULE: ./src/multithreaded/entities/station.ts



class Station extends Entity {
  get color() {
    return this.world.components.controller.color[this.eid];
  }

  set color(val) {
    this.world.components.controller.color[this.eid] = val;
  }

  get money() {
    return this.world.components.controller.money[this.eid];
  }

  set money(val) {
    this.world.components.controller.money[this.eid] = val;
  }

  constructor(world) {
    super(world);
    addComponents(this.world.components, this.eid, ['entity', 'position', 'health', 'controller']);
    this.key = 'station';
    this.width = 20 * INT_FLOAT_MULTIPLIER;
    this.height = 20 * INT_FLOAT_MULTIPLIER;
    this.shields = 2;
    this.maxShields = 2;
    this.timeToRegenerateShields = 5_000 * INT_FLOAT_MULTIPLIER;
    Atomics.store(world.components.entity.init, this.eid, 1);
  }

}
;// CONCATENATED MODULE: ./src/multithreaded/systems/spawn-ship-system.ts

globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
globalThis.addComponents = addComponents;
function spawnShipSystem(world) {
  const controller = world.components.controller;
  const controlled = world.components.controlled;
  const position = world.components.position;
  const velocity = world.components.velocity;
  const health = world.components.health;
  return () => {
    const SHIP_SPEED = 100;
    globalThis.getEntitiesWithComponents(world, ['controller']).forEach(stationEid => {
      if (controller.money[stationEid] > 0) {
        let shipEid = Atomics.add(world.idCounter, 0, 1) + 1;
        globalThis.addComponents(world.components, shipEid, ['entity', 'position', 'health', 'velocity', 'controlled', 'attack']);
        Atomics.store(position.width, shipEid, 10 * 1_000);
        Atomics.store(position.height, shipEid, 5 * 1_000);
        Atomics.store(health.shields, shipEid, 1);
        Atomics.store(health.maxShields, shipEid, 1);
        Atomics.store(health.timeToRegenerateShields, shipEid, 1_000 * 1_000);
        Atomics.store(velocity.speed, shipEid, SHIP_SPEED);
        Atomics.store(controlled.owner, shipEid, stationEid);
        Atomics.store(position.x, shipEid, Atomics.load(position.x, stationEid));
        Atomics.store(position.y, shipEid, Atomics.load(position.y, stationEid));
        let velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
        let velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * SHIP_SPEED;
        Atomics.store(velocity.x, shipEid, velocityX);
        Atomics.store(velocity.y, shipEid, velocityY);
        Atomics.store(position.angle, shipEid, computeAngle(velocityX, velocityY));
        Atomics.sub(controller.money, stationEid, 1);
        Atomics.store(world.components.entity.init, shipEid, 1);
      }
    });
  };

  function computeAngle(x, y) {
    let radians = Math.atan2(y, x);
    return radians * (180 / Math.PI);
  }
}
;// CONCATENATED MODULE: ./src/multithreaded/systems/velocity-system.ts

globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
function velocitySystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  return delta => {
    let ships = globalThis.getEntitiesWithComponents(world, ['position', 'velocity']);
    ships.forEach(shipEid => {
      let velocityX = Atomics.load(velocity.x, shipEid);
      let velocityY = Atomics.load(velocity.y, shipEid);
      let deltaVelocityX = velocityX * delta;
      let deltaVelocityY = velocityY * delta;
      let newPositionX = Atomics.add(position.x, shipEid, deltaVelocityX) + deltaVelocityX;
      let newPositionY = Atomics.add(position.y, shipEid, deltaVelocityY) + deltaVelocityY;

      if (newPositionX < 0 || newPositionX > world.bounds.width * 1_000) {
        Atomics.store(velocity.x, shipEid, -velocityX);
        Atomics.store(position.angle, shipEid, computeAngle(-velocityX, velocityY));
      }

      if (newPositionY < 0 || newPositionY > world.bounds.height * 1_000) {
        Atomics.store(velocity.y, shipEid, -velocityY);
        Atomics.store(position.angle, shipEid, computeAngle(velocityX, -velocityY));
      }
    });
  };

  function computeAngle(x, y) {
    let radians = Math.atan2(y, x);
    return radians * (180 / Math.PI);
  }
}
// EXTERNAL MODULE: ./node_modules/@timohausmann/quadtree-ts/src/Quadtree.ts
var Quadtree = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/@timohausmann/quadtree-ts/src/Rectangle.ts
var Rectangle = __webpack_require__(8973);
;// CONCATENATED MODULE: ./src/multithreaded/systems/collision-system.ts


globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
globalThis.hasComponent = hasComponent;
globalThis.Quadtree = Quadtree/* Quadtree */.l;
globalThis.Rectangle = Rectangle/* Rectangle */.A;
function collisionSystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  const controlled = world.components.controlled;
  const controller = world.components.controller;

  if (globalThis.importScripts) {
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
      quadtree.insert(new globalThis.Rectangle({
        x: Atomics.load(position.x, eid),
        y: Atomics.load(position.y, eid),
        width: Atomics.load(position.width, eid),
        height: Atomics.load(position.height, eid),
        data: {
          eid
        }
      }));
    }); // Use quadtree to see who we are colliding with

    let ships = globalThis.getEntitiesWithComponents(world, ['velocity']);
    ships.forEach(eid => {
      let entitiesInRange = quadtree.retrieve(new globalThis.Rectangle({
        x: position.x[eid],
        y: position.y[eid],
        width: position.width[eid],
        height: position.height[eid]
      })).map(result => result.data.eid).filter(otherEid => otherEid !== eid);
      let shipColor = controller.color[controlled.owner[eid]];
      let enemiesInRange = entitiesInRange.filter(otherEid => {
        // Ship
        if (globalThis.hasComponent(world.components, otherEid, 'controlled')) {
          let stationEid = controlled.owner[otherEid];
          return controller.color[stationEid] !== shipColor;
        } // Station
        else if (globalThis.hasComponent(world.components, otherEid, 'controller')) {
          return controller.color[otherEid] !== shipColor;
        } else {
          return false;
        }
      });
      let collisions = enemiesInRange.filter(otherEid => distance(position.x[otherEid], position.y[otherEid], position.x[eid], position.y[eid]) < Math.max(position.width[eid], position.width[otherEid]));

      if (collisions.length) {
        collide(ships, eid, collisions[0]);
        velocity.x[eid] = -velocity.x[eid];
        velocity.y[eid] = -velocity.y[eid];
        position.angle[eid] = computeAngle(velocity.x[eid], velocity.y[eid]);
      }
    });
  };

  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }

  function collide(ships, eid, target) {
    if (!canTakeDamage(eid) || !canTakeDamage(target)) {
      return;
    }

    let enemyWorth = 1;

    if (globalThis.hasComponent(world.components, target, 'controller')) {
      enemyWorth = ships.filter(eid => world.components.controlled.owner[eid] === target).length;
    }

    takeDamage(ships, eid, 1);
    takeDamage(ships, target, 1);
    const controlled = world.components.controlled;

    if (world.components.entity.dead[target]) {
      let stationEid = controlled.owner[eid];
      world.components.controller.money[stationEid] += enemyWorth;
    }

    if (world.components.entity.dead[eid]) {
      // Ship
      if (globalThis.hasComponent(world.components, target, 'controlled')) {
        let stationEid = controlled.owner[target];
        world.components.controller.money[stationEid] += 1;
      } // Station
      else if (globalThis.hasComponent(world.components, target, 'controller')) {
        world.components.controller.money[target] += 1;
      }
    }
  }

  function takeDamage(ships, eid, damage) {
    const health = world.components.health;
    health.shields[eid] -= damage;
    health.timeSinceTakenDamage[eid] = 0;

    if (health.shields[eid] < 0) {
      world.components.entity.dead[eid] = 1;

      if (globalThis.hasComponent(world.components, eid, 'controller')) {
        let controlledShips = ships.filter(shipEid => world.components.controlled.owner[shipEid] === eid);
        controlledShips.forEach(shipEid => {
          world.components.entity.dead[shipEid] = 1;
        });
      }
    }
  }

  function canTakeDamage(eid) {
    return Atomics.load(world.components.health.timeSinceTakenDamage, eid) >= 200 * 1_000;
  }

  function computeAngle(x, y) {
    let radians = Math.atan2(y, x);
    return radians * (180 / Math.PI);
  }
}
;// CONCATENATED MODULE: ./src/multithreaded/systems/update-health-timers-system.ts

globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
function updateHealthTimersSystem(world) {
  const health = world.components.health;
  return delta => {
    globalThis.getEntitiesWithComponents(world, ['health']).forEach(eid => {
      Atomics.add(health.timeSinceTakenDamage, eid, delta * 1_000);

      if (Atomics.load(health.shields, eid) < Atomics.load(health.maxShields, eid)) {
        Atomics.add(health.timeSinceShieldRegeneration, eid, delta * 1_000);

        if (Atomics.load(health.timeSinceShieldRegeneration, eid) > Atomics.load(health.timeToRegenerateShields, eid)) {
          Atomics.add(health.shields, eid, 1);
          Atomics.store(health.timeSinceShieldRegeneration, eid, 0);
        }
      }
    });
  };
}
;// CONCATENATED MODULE: ./src/multithreaded/systems/move-to-target-system.ts

globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
function moveToTargetSystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  const attack = world.components.attack;
  return () => {
    globalThis.getEntitiesWithComponents(world, ['velocity', 'attack']).forEach(eid => {
      let target = attack.target[eid];

      if (!target || world.components.entity.dead[target]) {
        return;
      }

      let force = getMoveTowardsForce(eid, target);
      let newNormalizedVelocity = normalize(Atomics.load(velocity.x, eid) + force.x * 4, Atomics.load(velocity.y, eid) + force.y * 4);
      let newVelocity = {
        x: newNormalizedVelocity.x * velocity.speed[eid],
        y: newNormalizedVelocity.y * velocity.speed[eid]
      };
      Atomics.store(velocity.x, eid, newVelocity.x);
      Atomics.store(velocity.y, eid, newVelocity.y);
      Atomics.store(position.angle, eid, computeAngle(newVelocity.x, newVelocity.y));
    });
  };

  function getMoveTowardsForce(eid, otherEid) {
    return normalize(Atomics.load(position.x, otherEid) - Atomics.load(position.x, eid), Atomics.load(position.y, otherEid) - Atomics.load(position.y, eid));
  }

  function computeAngle(x, y) {
    let radians = Math.atan2(y, x);
    return radians * (180 / Math.PI);
  }

  function normalize(x, y) {
    let len = x * x + y * y;

    if (len > 0) {
      len = 1 / Math.sqrt(len);
      return {
        x: x * len,
        y: y * len
      };
    } else {
      return {
        x,
        y
      };
    }
  }
}
;// CONCATENATED MODULE: ./src/multithreaded/systems/target-enemy-system.ts


globalThis.getEntitiesWithComponents = getEntitiesWithComponents;
globalThis.hasComponent = hasComponent;
globalThis.Quadtree = Quadtree/* Quadtree */.l;
globalThis.Rectangle = Rectangle/* Rectangle */.A;
function targetEnemySystem(world) {
  const position = world.components.position;
  const controlled = world.components.controlled;
  const controller = world.components.controller;
  const attack = world.components.attack;

  if (globalThis.importScripts) {
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
      quadtree.insert(new globalThis.Rectangle({ ...data,
        data: {
          eid,
          ...data
        }
      }));
    }); // TODO: Don't wait a full 200ms to process ships that are just sitting there waiting

    globalThis.getEntitiesWithComponents(world, ['velocity', 'attack']).forEach(eid => {
      let shipColor = Atomics.load(controller.color, Atomics.load(controlled.owner, eid));
      let x = Atomics.load(position.x, eid);
      let y = Atomics.load(position.y, eid);
      let width = Atomics.load(position.width, eid);
      let height = Atomics.load(position.height, eid); // Try to find the nearest enemy

      let rect = {
        x: x - 50 * 1_000,
        y: y - 50 * 1_000,
        width: width + 100 * 1_000,
        height: height + 100 * 1_000
      };
      let enemies = getEnemiesInRange(quadtree, rect, eid, shipColor);

      if (enemies.length === 0) {
        rect.x -= 100 * 1_000;
        rect.y -= 100 * 1_000;
        rect.width += 200 * 1_000;
        rect.height += 200 * 1_000;
        enemies = getEnemiesInRange(quadtree, rect, eid, shipColor);
      }

      enemies.sort((a, b) => {
        return euclideanDistance(a.x, a.y, x, y) - euclideanDistance(b.x, b.y, x, y);
      });
      let enemy = enemies[0] ?? null; // If no enemies that quadtree could easily find, just head for the nearest station

      if (!enemy) {
        let stations = globalThis.getEntitiesWithComponents(world, ['controller']).filter(stationEid => Atomics.load(controller.color, stationEid) !== shipColor && !world.components.entity.dead[stationEid]);
        stations.sort((a, b) => {
          return euclideanDistance(Atomics.load(position.x, a), Atomics.load(position.y, a), x, y) - euclideanDistance(Atomics.load(position.x, b), Atomics.load(position.y, b), x, y);
        });

        if (stations.length) {
          enemy = {
            eid: stations[0],
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }

      if (enemy) {
        Atomics.store(attack.target, eid, enemy.eid);
      } else {
        Atomics.store(attack.target, eid, 0);
      }
    });
  };

  function getEnemiesInRange(quadtree, range, eid, shipColor) {
    let entitiesInRange = quadtree.retrieve(new globalThis.Rectangle(range)).map(result => result.data);
    entitiesInRange = entitiesInRange.filter(data => data.eid !== eid);
    return entitiesInRange.filter(data => {
      // Ship
      if (globalThis.hasComponent(world.components, data.eid, 'controlled')) {
        let stationEid = Atomics.load(controlled.owner, data.eid);
        return Atomics.load(controller.color, stationEid) !== shipColor;
      } // Station
      else if (globalThis.hasComponent(world.components, data.eid, 'controller')) {
        return Atomics.load(controller.color, data.eid) !== shipColor;
      } else {
        return false;
      }
    });
  }

  function euclideanDistance(x1, y1, x2, y2) {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
  }
}
;// CONCATENATED MODULE: ./src/multithreaded/entities/world.ts













class World extends eventemitter3.EventEmitter {
  constructor() {
    super();

    (0,defineProperty/* default */.Z)(this, "bounds", {
      width: 0,
      height: 0
    });

    (0,defineProperty/* default */.Z)(this, "idCounter", void 0);

    (0,defineProperty/* default */.Z)(this, "components", void 0);

    (0,defineProperty/* default */.Z)(this, "systems", []);

    (0,defineProperty/* default */.Z)(this, "systemUpdates", {});

    (0,defineProperty/* default */.Z)(this, "workers", []);

    this.idCounter = this.createIntegerArray(4);
    this.components = {
      entity: {
        components: this.createIntegerArray(),
        init: this.createIntegerArray(),
        dead: this.createIntegerArray()
      },
      position: {
        x: this.createIntegerArray(),
        y: this.createIntegerArray(),
        width: this.createIntegerArray(),
        height: this.createIntegerArray(),
        angle: this.createIntegerArray()
      },
      velocity: {
        x: this.createIntegerArray(),
        y: this.createIntegerArray(),
        speed: this.createIntegerArray()
      },
      health: {
        shields: this.createIntegerArray(),
        maxShields: this.createIntegerArray(),
        timeToRegenerateShields: this.createIntegerArray(),
        timeSinceShieldRegeneration: this.createIntegerArray(),
        timeSinceTakenDamage: this.createIntegerArray()
      },
      controller: {
        color: this.createIntegerArray(),
        money: this.createIntegerArray()
      },
      controlled: {
        owner: this.createIntegerArray()
      },
      attack: {
        target: this.createIntegerArray()
      }
    };
    this.addSystemWorker(spawnShipSystem);
    this.addSystemWorker(velocitySystem); // TODO: Shard into 2 collision threads

    this.addSystemWorker(collisionSystem);
    this.addSystemWorker(updateHealthTimersSystem); // TODO: Shard into 2-4 targeting threads

    this.addSystemWorker(targetEnemySystem);
    this.addSystemWorker(moveToTargetSystem);
  } // TODO: Resize buffers as we grow in size and recycle dead ids instead of requiring such a ridiculously huge buffer


  createIntegerArray(size = 65_536) {
    let buffer = new SharedArrayBuffer(size * Int32Array.BYTES_PER_ELEMENT);
    return new Int32Array(buffer);
  }

  load(config) {
    config.entities.forEach(entityConfig => {
      let entity;

      switch (entityConfig.type) {
        case 'station':
          entity = new Station(this);
          break;

        default:
          entity = new Entity(this);
          break;
      }

      entity.load(entityConfig);
    });

    if (config.bounds) {
      this.bounds = config.bounds;
    }

    this.workers.forEach(worker => {
      worker.postMessage({
        updateWorld: {
          bounds: this.bounds
        }
      });
    });
  }

  getId() {
    return Atomics.add(this.idCounter, 0, 1) + 1;
  }

  update(delta) {
    this.systems.forEach(system => {
      system(delta);
    });
  }

  addSystem(name, update) {
    this.systems.push(delta => {
      let start = performance.now();
      update(delta);
      this.systemUpdates[name].push(performance.now() - start);
    });
    this.systemUpdates[name] = [];
  }

  addSystemWorker(func) {
    let functionName = func.name;
    let inlineString = `

		(
			${(() => {
      let world; // eslint-disable-next-line

      let system = delta => {
        console.warn('Updating system before sent');
      };

      self.onmessage = function (e) {
        if (e.data.world) {
          let functionName = e.data.functionName;
          world = e.data.world; // @ts-expect-error

          system = self[functionName](world);
        } else if (e.data.updateWorld) {
          Object.keys(e.data.updateWorld).forEach(key => {
            world[key] = e.data.updateWorld[key];
          });
        } else if (e.data.delta) {
          system(e.data.delta);
          self.postMessage({
            done: true
          });
        }
      };
    }).toString()}
		)()

		${func.toString()}
		${getEntitiesWithComponents.toString()}
		${getTypeBit.toString()}
		${getTypeBits.toString()}
		${hasComponent.toString()}
		${addComponents.toString()}`;
    let start = 0;
    let missedDeltas = 0;
    let blob = new Blob([inlineString], {
      type: 'text/javascript'
    });
    let worker = new Worker(window.URL.createObjectURL(blob));
    this.systems.push(delta => {
      // We don't want to try to update while it is still executing the last update
      if (start) {
        missedDeltas += delta;
        return;
      }

      start = performance.now();
      worker.postMessage({
        delta: delta + missedDeltas
      });
      missedDeltas = 0;
    });
    let config = {
      idCounter: this.idCounter,
      bounds: this.bounds,
      components: this.components
    };
    this.systemUpdates[functionName] = [];
    worker.postMessage({
      functionName,
      world: config
    });

    worker.onmessage = e => {
      if (e.data.done) {
        this.systemUpdates[functionName].push(performance.now() - start);
        start = 0;
      }
    };

    this.workers.push(worker);
  }

  destroy() {
    this.workers.forEach(worker => {
      worker.terminate();
    });
    this.workers = [];
  }

}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/multithreaded/MultithreadedGame.vue?vue&type=script&setup=true&lang=ts



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-68055184"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  key: 0,
  class: "home"
};
const _hoisted_2 = {
  class: "list"
};
const _hoisted_3 = {
  style: {
    "color": "red"
  }
};

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, null, -1));

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  id: "phaser-container-multithreaded"
}, null, -1));

const _hoisted_6 = {
  key: 1
};






/* harmony default export */ var MultithreadedGamevue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup(__props) {
    const supportsSharedArrayBuffers = !!window.SharedArrayBuffer;
    let world;
    const minUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const maxUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const avgUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const stationsCount = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const shipsCount = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const stationShips = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const systemUpdates = (0,reactivity_esm_bundler/* ref */.iH)([]);
    let game;
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      world = new World();
      let updateTicks = 0;
      let updateTimes = [];
      const width = window.innerWidth / 3 * 2;
      const height = window.innerHeight / 3 * 2;
      let paused = false;
      const eidSpriteMap = new Map();
      let add;
      game = new (phaser_default()).Game({
        type: (phaser_default()).AUTO,
        width,
        height,
        parent: 'phaser-container-multithreaded',
        // @ts-expect-error
        scene: {
          preload() {
            this.load.image('boid', 'boid.png');
            this.load.image('station', 'station.png');
            this.load.image('shield', 'shield3.png');
          },

          create() {
            add = this.add;
            world.load((0,generate_scene/* default */.Z)({
              stations: 10,
              shipsPerStation: 100,
              width,
              height
            }));
            let stations = getEntitiesWithComponents(world, ['controller']);
            stationShips.value = stations.map(eid => {
              let color = world.components.controller.color[eid];
              let displayColor = '#' + color.toString(16);

              if (displayColor === '#ffffff') {
                displayColor = '#00000';
              }

              return {
                eid,
                color,
                displayColor,
                ships: 0
              };
            });
            this.input.keyboard.on('keydown-SPACE', () => {
              paused = !paused;
            });
            Object.keys(world.systemUpdates).forEach(systemName => {
              systemUpdates.value.push({
                name: systemName,
                min: 0,
                avg: 0,
                max: 0
              });
            });
          },

          update(time, delta) {
            if (paused) {
              return;
            }

            let start = performance.now();
            world.update(delta);
            let position = world.components.position;
            getAllEntitiesWithComponents(world, ['position', 'health']).forEach(eid => {
              let image = eidSpriteMap.get(eid);

              if (world.components.entity.dead[eid]) {
                if (image) {
                  image.destroy();
                  image.shieldImage.destroy();
                  eidSpriteMap.delete(eid);
                }
              } else {
                if (!image) {
                  if (Atomics.load(world.components.entity.init, eid) === 0) {
                    return;
                  }

                  image = add.image(0, 0, hasComponent(world.components, eid, 'controller') ? 'station' : 'boid');
                  image.setScale(position.width[eid] / image.width / INT_FLOAT_MULTIPLIER, position.height[eid] / image.height / INT_FLOAT_MULTIPLIER);
                  image.shieldImage = add.image(0, 0, 'shield');
                  image.shieldImage.setScale(position.width[eid] / image.shieldImage.width / INT_FLOAT_MULTIPLIER * 2, position.height[eid] / image.shieldImage.height / INT_FLOAT_MULTIPLIER * 2);

                  if (hasComponent(world.components, eid, 'controller')) {
                    image.setTint(Atomics.load(world.components.controller.color, eid));
                  } else if (hasComponent(world.components, eid, 'controlled')) {
                    let stationEid = Atomics.load(world.components.controlled.owner, eid);
                    image.setTint(Atomics.load(world.components.controller.color, stationEid));
                  }

                  eidSpriteMap.set(eid, image);
                }

                image.x = image.shieldImage.x = world.components.position.x[eid] / INT_FLOAT_MULTIPLIER;
                image.y = image.shieldImage.y = world.components.position.y[eid] / INT_FLOAT_MULTIPLIER;
                image.angle = image.shieldImage.angle = world.components.position.angle[eid];
                image.shieldImage.visible = world.components.health.shields[eid] > 0;
              }
            });
            let end = performance.now();
            updateTimes.push(end - start);
            updateTicks += delta;

            if (updateTicks > INT_FLOAT_MULTIPLIER) {
              minUpdateTime.value = updateTimes.reduce((min, time) => {
                return Math.min(min, time);
              }, 1_000_000);
              maxUpdateTime.value = updateTimes.reduce((max, time) => {
                return Math.max(max, time);
              }, 0);
              avgUpdateTime.value = updateTimes.reduce((total, time) => {
                return total + time;
              }, 0) / updateTimes.length;
              updateTimes = [];
              updateTicks = 0;
              let stations = getEntitiesWithComponents(world, ['controller']);
              let ships = getEntitiesWithComponents(world, ['controlled']);
              stationsCount.value = stations.length;
              shipsCount.value = ships.length;
              stationShips.value.forEach(val => {
                let matchingStationEid = stations.find(eid => world.components.controller.color[eid] === val.color);

                if (matchingStationEid !== undefined) {
                  val.ships = ships.filter(eid => world.components.controlled.owner[eid] === val.eid).length;
                } else if (val.ships > 0) {
                  // paused = true;
                  val.ships = 0;
                }
              });
              systemUpdates.value = [];
              Object.keys(world.systemUpdates).forEach(systemName => {
                let updates = world.systemUpdates[systemName];
                systemUpdates.value.push({
                  name: systemName,
                  min: updates.reduce((min, time) => {
                    return Math.min(min, time);
                  }, 1_000_000),
                  avg: updates.reduce((total, time) => {
                    return total + time;
                  }, 0) / updates.length,
                  max: updates.reduce((max, time) => {
                    return Math.max(max, time);
                  }, 0)
                });
                world.systemUpdates[systemName] = [];
              });
            }
          }

        }
      });
    });
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.Jd)(() => {
      if (game) {
        game.destroy();
        game = null;
      }

      if (world) {
        world.destroy();
      }
    });

    function addShips() {
      getEntitiesWithComponents(world, ['controller']).forEach(eid => {
        world.components.controller.money[eid] += 10;
      });
    }

    return (_ctx, _cache) => {
      return supportsSharedArrayBuffers ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, "mainThread: " + (0,shared_esm_bundler/* toDisplayString */.zw)(maxUpdateTime.value.toFixed(2)) + " (" + (0,shared_esm_bundler/* toDisplayString */.zw)(avgUpdateTime.value.toFixed(2)) + " avg) ms", 1), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)((0,reactivity_esm_bundler/* unref */.SU)(systemUpdates), system => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
          key: system.name
        }, (0,shared_esm_bundler/* toDisplayString */.zw)(system.name) + ": " + (0,shared_esm_bundler/* toDisplayString */.zw)(system.max.toFixed(2)) + " (" + (0,shared_esm_bundler/* toDisplayString */.zw)(system.avg.toFixed(2)) + " avg) ms", 1);
      }), 128)), _hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Entities: " + (0,shared_esm_bundler/* toDisplayString */.zw)(stationsCount.value) + " stations and " + (0,shared_esm_bundler/* toDisplayString */.zw)(shipsCount.value) + " ships", 1), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)((0,reactivity_esm_bundler/* unref */.SU)(stationShips), station => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
          class: "station-list",
          key: station.color,
          style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
            color: station.displayColor
          })
        }, (0,shared_esm_bundler/* toDisplayString */.zw)('#' + station.color.toString(16)) + ": " + (0,shared_esm_bundler/* toDisplayString */.zw)(station.ships), 5);
      }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
        onClick: addShips
      }, "Add Ships")])]), _hoisted_5])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_6, " Browser does not suport SharedArrayBuffer "));
    };
  }

}));
;// CONCATENATED MODULE: ./src/multithreaded/MultithreadedGame.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/multithreaded/MultithreadedGame.vue?vue&type=style&index=0&id=68055184&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/multithreaded/MultithreadedGame.vue?vue&type=style&index=0&id=68055184&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/multithreaded/MultithreadedGame.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MultithreadedGamevue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-68055184"]])

/* harmony default export */ var MultithreadedGame = (__exports__);

/***/ })

}]);
//# sourceMappingURL=multithreaded.6f110ca3.js.map