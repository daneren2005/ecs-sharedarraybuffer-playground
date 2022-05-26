"use strict";
(self["webpackChunkecs_arraybuffer"] = self["webpackChunkecs_arraybuffer"] || []).push([[899],{

/***/ 6115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SimpleGame; }
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2482);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6856);
;// CONCATENATED MODULE: ./src/simple/entities/entity.ts


class Entity extends eventemitter3.EventEmitter {
  constructor(world) {
    super();

    (0,defineProperty/* default */.Z)(this, "world", void 0);

    (0,defineProperty/* default */.Z)(this, "id", void 0);

    (0,defineProperty/* default */.Z)(this, "x", 0);

    (0,defineProperty/* default */.Z)(this, "y", 0);

    (0,defineProperty/* default */.Z)(this, "width", 0);

    (0,defineProperty/* default */.Z)(this, "height", 0);

    (0,defineProperty/* default */.Z)(this, "angle", 0);

    (0,defineProperty/* default */.Z)(this, "velocityX", 0);

    (0,defineProperty/* default */.Z)(this, "velocityY", 0);

    (0,defineProperty/* default */.Z)(this, "type", 'entity');

    (0,defineProperty/* default */.Z)(this, "key", 'boid');

    (0,defineProperty/* default */.Z)(this, "shields", 1);

    (0,defineProperty/* default */.Z)(this, "maxShields", 1);

    (0,defineProperty/* default */.Z)(this, "timeToRegenerateShields", 1);

    (0,defineProperty/* default */.Z)(this, "timeSinceShieldRegeneration", 0);

    (0,defineProperty/* default */.Z)(this, "timeSinceTakenDamage", 0);

    (0,defineProperty/* default */.Z)(this, "dead", false);

    this.world = world;
    this.id = world.getId();
  }

  load(config) {
    Object.keys(config).forEach(key => {
      // @ts-expect-error
      this[key] = config[key];
    });
  }

  update(delta) {
    this.set('x', this.x + this.velocityX * delta);
    this.set('y', this.y + this.velocityY * delta);
    this.set('timeSinceTakenDamage', this.timeSinceTakenDamage + delta);

    if (this.shields < this.maxShields) {
      this.set('timeSinceShieldRegeneration', this.timeSinceShieldRegeneration + delta);

      if (this.timeSinceShieldRegeneration > this.timeToRegenerateShields) {
        this.set('shields', this.shields + 1);
        this.set('timeSinceShieldRegeneration', 0);
      }
    }
  }

  set(prop, value) {
    // @ts-expect-error
    this[prop] = value;
    this.emit(`${prop}-updated`, value);
  }

  die() {
    // Only emit dead once
    if (this.dead) {
      return;
    }

    this.dead = true;
    this.emit('dead');
  }

  canTakeDamage() {
    return this.timeSinceTakenDamage >= 0.2;
  }

  takeDamage(damage) {
    if (!this.canTakeDamage()) {
      return;
    }

    this.set('shields', this.shields - damage);
    this.set('timeSinceTakenDamage', 0);

    if (this.shields < 0) {
      this.die();
    }
  }

}
// EXTERNAL MODULE: ./src/math/compute-angle.ts
var compute_angle = __webpack_require__(2254);
// EXTERNAL MODULE: ./src/math/distance.ts
var distance = __webpack_require__(6065);
// EXTERNAL MODULE: ./src/math/euclidean-distance.ts
var euclidean_distance = __webpack_require__(1396);
;// CONCATENATED MODULE: ./src/simple/entities/ship.ts







const PhaserMath = __webpack_require__(3129);

class Ship extends Entity {
  constructor(station) {
    super(station.world);

    (0,defineProperty/* default */.Z)(this, "station", void 0);

    (0,defineProperty/* default */.Z)(this, "speed", 100);

    this.station = station;
    this.width = 10;
    this.height = 5;
  }

  get color() {
    return this.station.color;
  }

  update(delta) {
    this.keepInBounds();
    let nearesetEnemy = this.getNearestEnemy();

    if (nearesetEnemy) {
      // Bounce off enemy doing damage
      if ((0,distance/* default */.Z)(nearesetEnemy.x, nearesetEnemy.y, this.x, this.y) < Math.max(this.width, nearesetEnemy.width)) {
        this.collide(nearesetEnemy);
        this.set('velocityX', -this.velocityX);
        this.set('velocityY', -this.velocityY);
      } // Move towards enemy
      else {
        let force = this.getMoveTowardsForce(nearesetEnemy);
        let newVelocity = new PhaserMath.Vector2(this.velocityX + force.x * 4, this.velocityY + force.y * 4);
        newVelocity.normalize();
        this.set('velocityX', newVelocity.x * this.speed);
        this.set('velocityY', newVelocity.y * this.speed);
        this.set('angle', (0,compute_angle/* default */.Z)(this.velocityX, this.velocityY));
      }
    } // TODO: This should not be needed, but somehow ships are staying alive even after station is destroyed


    if (this.station.dead) {
      this.die();
    }

    super.update(delta);
  }

  keepInBounds() {
    if (this.x < 0) {
      this.set('velocityX', Math.abs(this.velocityX));
    } else if (this.x > this.world.bounds.width) {
      this.set('velocityX', -Math.abs(this.velocityX));
    }

    if (this.y < 0) {
      this.set('velocityY', Math.abs(this.velocityY));
    } else if (this.y > this.world.bounds.height) {
      this.set('velocityY', -Math.abs(this.velocityY));
    }
  }

  getNearestEnemy() {
    let nearesetEnemy = this.world.getNearestEntity(this, entity => {
      if (entity instanceof Station) {
        return entity !== this.station;
      } else if (entity instanceof Ship) {
        return entity.station !== this.station;
      } else {
        return false;
      }
    });

    if (nearesetEnemy) {
      return nearesetEnemy;
    } else {
      let stations = this.world.entities.filter(entity => entity instanceof Station && entity !== this.station);
      stations.sort((a, b) => {
        return (0,euclidean_distance/* default */.Z)(a.x, a.y, this.x, this.y) - (0,euclidean_distance/* default */.Z)(b.x, b.y, this.x, this.y);
      });
      return stations[0];
    }
  }

  getMoveTowardsForce(entity) {
    let force = new PhaserMath.Vector2(entity.x - this.x, entity.y - this.y);
    force.normalize();
    return force;
  }

  collide(target) {
    if (!this.canTakeDamage() || !target.canTakeDamage()) {
      return;
    }

    let enemyWorth = 1;

    if (target instanceof Station) {
      enemyWorth = target.ships.length;
    }

    this.takeDamage(1);
    target.takeDamage(1);

    if (target.dead) {
      this.station.set('money', this.station.money + enemyWorth);
    }

    if (this.dead) {
      if (target instanceof Station) {
        target.set('money', target.money + 1);
      } else if (target instanceof Ship) {
        target.station.set('money', target.station.money + 1);
      }
    }
  }

}
;// CONCATENATED MODULE: ./src/simple/entities/station.ts



class Station extends Entity {
  constructor(world) {
    super(world);

    (0,defineProperty/* default */.Z)(this, "color", 0xff0000);

    (0,defineProperty/* default */.Z)(this, "ships", []);

    (0,defineProperty/* default */.Z)(this, "money", 0);

    this.key = 'station';
    this.width = 20;
    this.height = 20;
    this.shields = 2;
    this.maxShields = 2;
    this.timeToRegenerateShields = 5;
  }

  update(delta) {
    super.update(delta);

    if (this.money > 0) {
      let ship = new Ship(this);
      ship.x = this.x;
      ship.y = this.y;
      ship.velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * ship.speed;
      ship.velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * ship.speed;
      this.ships.push(ship);
      ship.on('dead', () => {
        let index = this.ships.indexOf(ship);

        if (index >= 0) {
          this.ships.splice(index, 1);
        }
      });
      this.world.addEntity(ship);
      this.set('money', this.money - 1);
    }
  }

  die() {
    super.die();
    this.ships.forEach(ship => {
      ship.die();
    });
  }

}
// EXTERNAL MODULE: ./node_modules/@timohausmann/quadtree-ts/src/Quadtree.ts
var Quadtree = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/@timohausmann/quadtree-ts/src/Rectangle.ts
var Rectangle = __webpack_require__(8973);
;// CONCATENATED MODULE: ./src/simple/entities/world.ts






class World extends eventemitter3.EventEmitter {
  constructor(...args) {
    super(...args);

    (0,defineProperty/* default */.Z)(this, "entities", []);

    (0,defineProperty/* default */.Z)(this, "bounds", {
      width: 0,
      height: 0
    });

    (0,defineProperty/* default */.Z)(this, "idCounter", 0);

    (0,defineProperty/* default */.Z)(this, "quadtree", void 0);
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
      this.addEntity(entity);
    });

    if (config.bounds) {
      this.bounds = config.bounds;
    }
  }

  addEntity(entity) {
    this.entities.push(entity);
    entity.on('dead', () => {
      this.removeEntity(entity);
    });
    this.emit('entity-added', entity);
  }

  removeEntity(entity) {
    let index = this.entities.indexOf(entity);

    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  update(delta) {
    this.quadtree = new Quadtree/* Quadtree */.l({
      width: this.bounds.width,
      height: this.bounds.height
    });
    this.entities.forEach(entity => {
      this.quadtree.insert(new Rectangle/* Rectangle */.A({
        x: entity.x,
        y: entity.y,
        width: entity.width,
        height: entity.height,
        data: {
          entity
        }
      }));
    });
    this.entities.forEach(entity => {
      if (entity.dead) {
        return;
      }

      entity.update(delta);
    });
  }

  getNearestEntity(entity, filter) {
    let rect = {
      x: entity.x - 50,
      y: entity.y - 50,
      width: entity.width + 100,
      height: entity.height + 100
    }; // TODO: At the beginning this is slow because we are in a clump of our own units so it returns a lot of results without any enemies

    let entities = this.getEntitiesInRange(rect).filter(otherEntity => otherEntity !== entity && !otherEntity.dead && filter(otherEntity));

    if (entities.length === 0) {
      rect.x -= 100;
      rect.y -= 100;
      rect.width += 200;
      rect.height += 200;
      entities = this.getEntitiesInRange(rect).filter(otherEntity => otherEntity !== entity && filter(otherEntity));
    }

    entities.sort((a, b) => {
      return (0,euclidean_distance/* default */.Z)(a.x, a.y, entity.x, entity.y) - (0,euclidean_distance/* default */.Z)(b.x, b.y, entity.x, entity.y);
    });
    return entities[0] ?? null;
  }

  getEntitiesInRange(range) {
    return this.quadtree.retrieve(new Rectangle/* Rectangle */.A(range)).map(result => result.data.entity);
  }

  getId() {
    this.idCounter++;
    return this.idCounter;
  }

}
// EXTERNAL MODULE: ./src/data/generate-scene.ts
var generate_scene = __webpack_require__(238);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/simple/SimpleGame.vue?vue&type=script&setup=true&lang=ts



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-12587e64"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "home"
};
const _hoisted_2 = {
  class: "list"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, null, -1));

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, null, -1));

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  id: "phaser-container-simple"
}, null, -1));







/* harmony default export */ var SimpleGamevue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup(__props) {
    let world = new World();
    const startupTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const minUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const maxUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const avgUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const stationsCount = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const shipsCount = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const stationShips = (0,reactivity_esm_bundler/* ref */.iH)([]);
    let game;
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      let updateTicks = 0;
      let updateTimes = [];
      const width = window.innerWidth / 3 * 2;
      const height = window.innerHeight / 3 * 2;
      let paused = false;
      game = new (phaser_default()).Game({
        type: (phaser_default()).AUTO,
        width,
        height,
        parent: 'phaser-container-simple',
        // @ts-expect-error
        scene: {
          preload() {
            this.load.image('boid', 'boid.png');
            this.load.image('station', 'station.png');
            this.load.image('shield', 'shield3.png');
          },

          create() {
            world.on('entity-added', entity => {
              let image = this.add.image(entity.x, entity.y, entity.key);
              image.setScale(entity.width / image.width, entity.height / image.height);
              image.shieldImage = this.add.image(entity.x, entity.y, 'shield');
              image.shieldImage.setScale(entity.width / image.shieldImage.width * 2, entity.height / image.shieldImage.height * 2);
              image.shieldImage.visible = entity.shields > 0;

              if (entity instanceof Station || entity instanceof Ship) {
                image.setTint(entity.color);
              }

              ['x', 'y', 'angle'].forEach(prop => {
                entity.on(`${prop}-updated`, newValue => {
                  image[prop] = newValue;
                  image.shieldImage[prop] = newValue;
                });
              });
              entity.on('dead', () => {
                image.destroy();
                image.shieldImage.destroy();
              });
              entity.on('shields-updated', newValue => {
                image.shieldImage.visible = newValue > 0;
              });
            });
            let start = performance.now();
            world.load((0,generate_scene/* default */.Z)({
              stations: 6,
              shipsPerStation: 100,
              width,
              height
            }));
            let end = performance.now();
            startupTime.value = end - start;
            let stations = world.entities.filter(entity => entity instanceof Station);
            stationShips.value = stations.map(station => {
              let displayColor = '#' + station.color.toString(16);

              if (displayColor === '#ffffff') {
                displayColor = '#00000';
              }

              return {
                color: station.color,
                displayColor,
                ships: station.ships.length
              };
            });
            this.input.keyboard.on('keydown-SPACE', () => {
              paused = !paused;
            });
          },

          update(time, delta) {
            if (paused) {
              return;
            }

            let start = performance.now();
            world.update(delta / 1_000);
            let end = performance.now();
            updateTimes.push(end - start);
            updateTicks += delta;

            if (updateTicks > 1_000) {
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
              stationsCount.value = world.entities.filter(entity => entity instanceof Station).length;
              shipsCount.value = world.entities.filter(entity => entity instanceof Ship).length;
              let stations = world.entities.filter(entity => entity instanceof Station);
              stationShips.value.forEach(val => {
                let matchingStation = stations.find(station => station.color === val.color);

                if (matchingStation) {
                  val.ships = matchingStation.ships.length;
                } else if (val.ships > 0) {
                  // paused = true;
                  val.ships = 0;
                }
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
    });

    function addShips() {
      let stations = world.entities.filter(entity => entity instanceof Station);
      stations.forEach(station => {
        station.set('money', station.money + 10);
      });
    }

    return (_ctx, _cache) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Startup time: " + (0,shared_esm_bundler/* toDisplayString */.zw)(startupTime.value.toFixed(2)) + " ms", 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Update time: " + (0,shared_esm_bundler/* toDisplayString */.zw)(minUpdateTime.value.toFixed(2)) + " - " + (0,shared_esm_bundler/* toDisplayString */.zw)(maxUpdateTime.value.toFixed(2)) + " (" + (0,shared_esm_bundler/* toDisplayString */.zw)(avgUpdateTime.value.toFixed(2)) + " avg) ms", 1), _hoisted_3, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Entities: " + (0,shared_esm_bundler/* toDisplayString */.zw)(stationsCount.value) + " stations and " + (0,shared_esm_bundler/* toDisplayString */.zw)(shipsCount.value) + " ships", 1), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)((0,reactivity_esm_bundler/* unref */.SU)(stationShips), station => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
          key: station.color,
          style: (0,shared_esm_bundler/* normalizeStyle */.j5)({
            color: station.displayColor
          })
        }, (0,shared_esm_bundler/* toDisplayString */.zw)('#' + station.color.toString(16)) + ": " + (0,shared_esm_bundler/* toDisplayString */.zw)(station.ships), 5);
      }), 128)), _hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
        onClick: addShips
      }, "Add Ships")]), _hoisted_5]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/simple/SimpleGame.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/simple/SimpleGame.vue?vue&type=style&index=0&id=12587e64&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/simple/SimpleGame.vue?vue&type=style&index=0&id=12587e64&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/simple/SimpleGame.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SimpleGamevue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-12587e64"]])

/* harmony default export */ var SimpleGame = (__exports__);

/***/ })

}]);
//# sourceMappingURL=simple.ac03e907.js.map