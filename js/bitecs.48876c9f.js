"use strict";
(self["webpackChunkecs_arraybuffer"] = self["webpackChunkecs_arraybuffer"] || []).push([[816],{

/***/ 1432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BitECSGame; }
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(1703);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
;// CONCATENATED MODULE: ./node_modules/bitecs/dist/index.mjs




// src/Constants.js
var TYPES_ENUM = {
  i8: "i8",
  ui8: "ui8",
  ui8c: "ui8c",
  i16: "i16",
  ui16: "ui16",
  i32: "i32",
  ui32: "ui32",
  f32: "f32",
  f64: "f64",
  eid: "eid"
};
var TYPES_NAMES = {
  i8: "Int8",
  ui8: "Uint8",
  ui8c: "Uint8Clamped",
  i16: "Int16",
  ui16: "Uint16",
  i32: "Int32",
  ui32: "Uint32",
  eid: "Uint32",
  f32: "Float32",
  f64: "Float64"
};
var TYPES = {
  i8: Int8Array,
  ui8: Uint8Array,
  ui8c: Uint8ClampedArray,
  i16: Int16Array,
  ui16: Uint16Array,
  i32: Int32Array,
  ui32: Uint32Array,
  f32: Float32Array,
  f64: Float64Array,
  eid: Uint32Array
};
var UNSIGNED_MAX = {
  uint8: 2 ** 8,
  uint16: 2 ** 16,
  uint32: 2 ** 32
}; // src/Storage.js

var roundToMultiple = mul => x => Math.ceil(x / mul) * mul;

var roundToMultiple4 = roundToMultiple(4);
var $storeRef = Symbol("storeRef");
var $storeSize = Symbol("storeSize");
var $storeMaps = Symbol("storeMaps");
var $storeFlattened = Symbol("storeFlattened");
var $storeBase = Symbol("storeBase");
var $storeType = Symbol("storeType");
var $storeArrayElementCounts = Symbol("storeArrayElementCounts");
var $storeSubarrays = Symbol("storeSubarrays");
var $subarrayCursors = Symbol("subarrayCursors");
var $subarray = Symbol("subarray");
var $subarrayFrom = Symbol("subarrayFrom");
var $subarrayTo = Symbol("subarrayTo");
var $parentArray = Symbol("parentArray");
var $tagStore = Symbol("tagStore");
var $queryShadow = Symbol("queryShadow");
var $serializeShadow = Symbol("serializeShadow");
var $indexType = Symbol("indexType");
var $indexBytes = Symbol("indexBytes");
var $isEidType = Symbol("isEidType");
var stores = {};

var resize = (ta, size) => {
  const newBuffer = new ArrayBuffer(size * ta.BYTES_PER_ELEMENT);
  const newTa = new ta.constructor(newBuffer);
  newTa.set(ta, 0);
  return newTa;
};

var createShadow = (store, key) => {
  if (!ArrayBuffer.isView(store)) {
    const shadowStore = store[$parentArray].slice(0);
    store[key] = store.map((_, eid) => {
      const {
        length
      } = store[eid];
      const start = length * eid;
      const end = start + length;
      return shadowStore.subarray(start, end);
    });
  } else {
    store[key] = store.slice(0);
  }
};

var resizeSubarray = (metadata, store, storeSize) => {
  const cursors = metadata[$subarrayCursors];
  let type = store[$storeType];
  const length = store[0].length;
  const indexType = length <= UNSIGNED_MAX.uint8 ? TYPES_ENUM.ui8 : length <= UNSIGNED_MAX.uint16 ? TYPES_ENUM.ui16 : TYPES_ENUM.ui32;

  if (cursors[type] === 0) {
    const arrayElementCount = metadata[$storeArrayElementCounts][type];
    const array = new TYPES[type](roundToMultiple4(arrayElementCount * storeSize));
    array.set(metadata[$storeSubarrays][type]);
    metadata[$storeSubarrays][type] = array;
    array[$indexType] = TYPES_NAMES[indexType];
    array[$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
  }

  const start = cursors[type];
  const end = start + storeSize * length;
  cursors[type] = end;
  store[$parentArray] = metadata[$storeSubarrays][type].subarray(start, end);

  for (let eid = 0; eid < storeSize; eid++) {
    const start2 = length * eid;
    const end2 = start2 + length;
    store[eid] = store[$parentArray].subarray(start2, end2);
    store[eid][$indexType] = TYPES_NAMES[indexType];
    store[eid][$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
    store[eid][$subarray] = true;
  }
};

var resizeRecursive = (metadata, store, size) => {
  Object.keys(store).forEach(key => {
    const ta = store[key];

    if (Array.isArray(ta)) {
      resizeSubarray(metadata, ta, size);
      store[$storeFlattened].push(ta);
    } else if (ArrayBuffer.isView(ta)) {
      store[key] = resize(ta, size);
      store[$storeFlattened].push(store[key]);
    } else if (typeof ta === "object") {
      resizeRecursive(metadata, store[key], size);
    }
  });
};

var resizeStore = (store, size) => {
  if (store[$tagStore]) return;
  store[$storeSize] = size;
  store[$storeFlattened].length = 0;
  Object.keys(store[$subarrayCursors]).forEach(k => {
    store[$subarrayCursors][k] = 0;
  });
  resizeRecursive(store, store, size);
};

var resetStoreFor = (store, eid) => {
  if (store[$storeFlattened]) {
    store[$storeFlattened].forEach(ta => {
      if (ArrayBuffer.isView(ta)) ta[eid] = 0;else ta[eid].fill(0);
    });
  }
};

var createTypeStore = (type, length) => {
  const totalBytes = length * TYPES[type].BYTES_PER_ELEMENT;
  const buffer = new ArrayBuffer(totalBytes);
  const store = new TYPES[type](buffer);
  store[$isEidType] = type === TYPES_ENUM.eid;
  return store;
};

var parentArray = store => store[$parentArray];

var createArrayStore = (metadata, type, length) => {
  const storeSize = metadata[$storeSize];
  const store = Array(storeSize).fill(0);
  store[$storeType] = type;
  store[$isEidType] = type === TYPES_ENUM.eid;
  const cursors = metadata[$subarrayCursors];
  const indexType = length <= UNSIGNED_MAX.uint8 ? TYPES_ENUM.ui8 : length <= UNSIGNED_MAX.uint16 ? TYPES_ENUM.ui16 : TYPES_ENUM.ui32;
  if (!length) throw new Error("bitECS - Must define component array length");
  if (!TYPES[type]) throw new Error(`bitECS - Invalid component array property type ${type}`);

  if (!metadata[$storeSubarrays][type]) {
    const arrayElementCount = metadata[$storeArrayElementCounts][type];
    const array = new TYPES[type](roundToMultiple4(arrayElementCount * storeSize));
    array[$indexType] = TYPES_NAMES[indexType];
    array[$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
    metadata[$storeSubarrays][type] = array;
  }

  const start = cursors[type];
  const end = start + storeSize * length;
  cursors[type] = end;
  store[$parentArray] = metadata[$storeSubarrays][type].subarray(start, end);

  for (let eid = 0; eid < storeSize; eid++) {
    const start2 = length * eid;
    const end2 = start2 + length;
    store[eid] = store[$parentArray].subarray(start2, end2);
    store[eid][$indexType] = TYPES_NAMES[indexType];
    store[eid][$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
    store[eid][$subarray] = true;
  }

  return store;
};

var isArrayType = x => Array.isArray(x) && typeof x[0] === "string" && typeof x[1] === "number";

var createStore = (schema, size) => {
  const $store = Symbol("store");

  if (!schema || !Object.keys(schema).length) {
    stores[$store] = {
      [$storeSize]: size,
      [$tagStore]: true,
      [$storeBase]: () => stores[$store]
    };
    return stores[$store];
  }

  schema = JSON.parse(JSON.stringify(schema));
  const arrayElementCounts = {};

  const collectArrayElementCounts = s => {
    const keys = Object.keys(s);

    for (const k of keys) {
      if (isArrayType(s[k])) {
        if (!arrayElementCounts[s[k][0]]) arrayElementCounts[s[k][0]] = 0;
        arrayElementCounts[s[k][0]] += s[k][1];
      } else if (s[k] instanceof Object) {
        collectArrayElementCounts(s[k]);
      }
    }
  };

  collectArrayElementCounts(schema);
  const metadata = {
    [$storeSize]: size,
    [$storeMaps]: {},
    [$storeSubarrays]: {},
    [$storeRef]: $store,
    [$subarrayCursors]: Object.keys(TYPES).reduce((a, type) => ({ ...a,
      [type]: 0
    }), {}),
    [$storeFlattened]: [],
    [$storeArrayElementCounts]: arrayElementCounts
  };

  if (schema instanceof Object && Object.keys(schema).length) {
    const recursiveTransform = (a, k) => {
      if (typeof a[k] === "string") {
        a[k] = createTypeStore(a[k], size);

        a[k][$storeBase] = () => stores[$store];

        metadata[$storeFlattened].push(a[k]);
      } else if (isArrayType(a[k])) {
        const [type, length] = a[k];
        a[k] = createArrayStore(metadata, type, length);

        a[k][$storeBase] = () => stores[$store];

        metadata[$storeFlattened].push(a[k]);
      } else if (a[k] instanceof Object) {
        a[k] = Object.keys(a[k]).reduce(recursiveTransform, a[k]);
      }

      return a;
    };

    stores[$store] = Object.assign(Object.keys(schema).reduce(recursiveTransform, schema), metadata);

    stores[$store][$storeBase] = () => stores[$store];

    return stores[$store];
  }
}; // src/Util.js


var SparseSet = () => {
  const dense = [];
  const sparse = [];

  dense.sort = function (comparator) {
    const result = Array.prototype.sort.call(this, comparator);

    for (let i = 0; i < dense.length; i++) {
      sparse[dense[i]] = i;
    }

    return result;
  };

  const has = val => dense[sparse[val]] === val;

  const add = val => {
    if (has(val)) return;
    sparse[val] = dense.push(val) - 1;
  };

  const remove = val => {
    if (!has(val)) return;
    const index = sparse[val];
    const swapped = dense.pop();

    if (swapped !== val) {
      dense[index] = swapped;
      sparse[swapped] = index;
    }
  };

  return {
    add,
    remove,
    has,
    sparse,
    dense
  };
}; // src/Serialize.js


var DESERIALIZE_MODE = {
  REPLACE: 0,
  APPEND: 1,
  MAP: 2
};
var resized = false;

var setSerializationResized = v => {
  resized = v;
};

var concat = (a, v) => a.concat(v);

var not = fn => v => !fn(v);

var storeFlattened = c => c[$storeFlattened];

var isFullComponent = storeFlattened;
var isProperty = not(isFullComponent);

var isModifier = c => typeof c === "function";

var isNotModifier = not(isModifier);

var isChangedModifier = c => isModifier(c) && c()[1] === "changed";

var isWorld = w => Object.getOwnPropertySymbols(w).includes($componentMap);

var fromModifierToComponent = c => c()[0];

var canonicalize = target => {
  if (isWorld(target)) return [[], /* @__PURE__ */new Map()];
  const fullComponentProps = target.filter(isNotModifier).filter(isFullComponent).map(storeFlattened).reduce(concat, []);
  const changedComponentProps = target.filter(isChangedModifier).map(fromModifierToComponent).filter(isFullComponent).map(storeFlattened).reduce(concat, []);
  const props = target.filter(isNotModifier).filter(isProperty);
  const changedProps = target.filter(isChangedModifier).map(fromModifierToComponent).filter(isProperty);
  const componentProps = [...fullComponentProps, ...props, ...changedComponentProps, ...changedProps];
  const allChangedProps = [...changedComponentProps, ...changedProps].reduce((map, prop) => {
    const $ = Symbol();
    createShadow(prop, $);
    map.set(prop, $);
    return map;
  }, /* @__PURE__ */new Map());
  return [componentProps, allChangedProps];
};

var defineSerializer = (target, maxBytes = 2e7) => {
  const worldSerializer = isWorld(target);
  let [componentProps, changedProps] = canonicalize(target);
  const buffer = new ArrayBuffer(maxBytes);
  const view = new DataView(buffer);
  const entityComponentCache = /* @__PURE__ */new Map();
  return ents => {
    if (resized) {
      [componentProps, changedProps] = canonicalize(target);
      resized = false;
    }

    if (worldSerializer) {
      componentProps = [];
      target[$componentMap].forEach((c, component) => {
        if (component[$storeFlattened]) componentProps.push(...component[$storeFlattened]);else componentProps.push(component);
      });
    }

    let world;

    if (Object.getOwnPropertySymbols(ents).includes($componentMap)) {
      world = ents;
      ents = ents[$entityArray];
    } else {
      world = eidToWorld.get(ents[0]);
    }

    let where = 0;
    if (!ents.length) return buffer.slice(0, where);
    const cache = /* @__PURE__ */new Map();

    for (let pid = 0; pid < componentProps.length; pid++) {
      const prop = componentProps[pid];
      const component = prop[$storeBase]();
      const $diff = changedProps.get(prop);
      const shadow = $diff ? prop[$diff] : null;
      if (!cache.has(component)) cache.set(component, /* @__PURE__ */new Map());
      view.setUint8(where, pid);
      where += 1;
      const countWhere = where;
      where += 4;
      let writeCount = 0;

      for (let i = 0; i < ents.length; i++) {
        const eid = ents[i];
        let componentCache = entityComponentCache.get(eid);
        if (!componentCache) componentCache = entityComponentCache.set(eid, /* @__PURE__ */new Set()).get(eid);
        componentCache.add(eid);
        const newlyAddedComponent = shadow && cache.get(component).get(eid) || !componentCache.has(component) && hasComponent(world, component, eid);
        cache.get(component).set(eid, newlyAddedComponent);

        if (newlyAddedComponent) {
          componentCache.add(component);
        } else if (!hasComponent(world, component, eid)) {
          componentCache.delete(component);
          continue;
        }

        const rewindWhere = where;
        view.setUint32(where, eid);
        where += 4;

        if (prop[$tagStore]) {
          writeCount++;
          continue;
        }

        if (ArrayBuffer.isView(prop[eid])) {
          const type = prop[eid].constructor.name.replace("Array", "");
          const indexType = prop[eid][$indexType];
          const indexBytes = prop[eid][$indexBytes];
          const countWhere2 = where;
          where += indexBytes;
          let arrayWriteCount = 0;

          for (let i2 = 0; i2 < prop[eid].length; i2++) {
            if (shadow) {
              const changed = shadow[eid][i2] !== prop[eid][i2];
              shadow[eid][i2] = prop[eid][i2];

              if (!changed && !newlyAddedComponent) {
                continue;
              }
            }

            view[`set${indexType}`](where, i2);
            where += indexBytes;
            const value = prop[eid][i2];
            view[`set${type}`](where, value);
            where += prop[eid].BYTES_PER_ELEMENT;
            arrayWriteCount++;
          }

          if (arrayWriteCount > 0) {
            view[`set${indexType}`](countWhere2, arrayWriteCount);
            writeCount++;
          } else {
            where = rewindWhere;
            continue;
          }
        } else {
          if (shadow) {
            const changed = shadow[eid] !== prop[eid];
            shadow[eid] = prop[eid];

            if (!changed && !newlyAddedComponent) {
              where = rewindWhere;
              continue;
            }
          }

          const type = prop.constructor.name.replace("Array", "");
          view[`set${type}`](where, prop[eid]);
          where += prop.BYTES_PER_ELEMENT;
          writeCount++;
        }
      }

      if (writeCount > 0) {
        view.setUint32(countWhere, writeCount);
      } else {
        where -= 5;
      }
    }

    return buffer.slice(0, where);
  };
};

var newEntities = /* @__PURE__ */new Map();

var defineDeserializer = target => {
  const isWorld2 = Object.getOwnPropertySymbols(target).includes($componentMap);
  let [componentProps] = canonicalize(target);
  const deserializedEntities = /* @__PURE__ */new Set();
  return (world, packet, mode = 0) => {
    newEntities.clear();

    if (resized) {
      [componentProps] = canonicalize(target);
      resized = false;
    }

    if (isWorld2) {
      componentProps = [];
      target[$componentMap].forEach((c, component) => {
        if (component[$storeFlattened]) componentProps.push(...component[$storeFlattened]);else componentProps.push(component);
      });
    }

    const localEntities = world[$localEntities];
    const localEntityLookup = world[$localEntityLookup];
    const view = new DataView(packet);
    let where = 0;

    while (where < packet.byteLength) {
      const pid = view.getUint8(where);
      where += 1;
      const entityCount = view.getUint32(where);
      where += 4;
      const prop = componentProps[pid];

      for (let i = 0; i < entityCount; i++) {
        let eid = view.getUint32(where);
        where += 4;

        if (mode === DESERIALIZE_MODE.MAP) {
          if (localEntities.has(eid)) {
            eid = localEntities.get(eid);
          } else if (newEntities.has(eid)) {
            eid = newEntities.get(eid);
          } else {
            const newEid = addEntity(world);
            localEntities.set(eid, newEid);
            localEntityLookup.set(newEid, eid);
            newEntities.set(eid, newEid);
            eid = newEid;
          }
        }

        if (mode === DESERIALIZE_MODE.APPEND || mode === DESERIALIZE_MODE.REPLACE && !world[$entitySparseSet].has(eid)) {
          const newEid = newEntities.get(eid) || addEntity(world);
          newEntities.set(eid, newEid);
          eid = newEid;
        }

        const component = prop[$storeBase]();

        if (!hasComponent(world, component, eid)) {
          addComponent(world, component, eid);
        }

        deserializedEntities.add(eid);

        if (component[$tagStore]) {
          continue;
        }

        if (ArrayBuffer.isView(prop[eid])) {
          const array = prop[eid];
          const count = view[`get${array[$indexType]}`](where);
          where += array[$indexBytes];

          for (let i2 = 0; i2 < count; i2++) {
            const index = view[`get${array[$indexType]}`](where);
            where += array[$indexBytes];
            const value = view[`get${array.constructor.name.replace("Array", "")}`](where);
            where += array.BYTES_PER_ELEMENT;

            if (prop[$isEidType]) {
              let localEid;

              if (localEntities.has(value)) {
                localEid = localEntities.get(value);
              } else if (newEntities.has(value)) {
                localEid = newEntities.get(value);
              } else {
                const newEid = addEntity(world);
                localEntities.set(value, newEid);
                localEntityLookup.set(newEid, value);
                newEntities.set(value, newEid);
                localEid = newEid;
              }

              prop[eid][index] = localEid;
            } else prop[eid][index] = value;
          }
        } else {
          const value = view[`get${prop.constructor.name.replace("Array", "")}`](where);
          where += prop.BYTES_PER_ELEMENT;

          if (prop[$isEidType]) {
            let localEid;

            if (localEntities.has(value)) {
              localEid = localEntities.get(value);
            } else if (newEntities.has(value)) {
              localEid = newEntities.get(value);
            } else {
              const newEid = addEntity(world);
              localEntities.set(value, newEid);
              localEntityLookup.set(newEid, value);
              newEntities.set(value, newEid);
              localEid = newEid;
            }

            prop[eid] = localEid;
          } else prop[eid] = value;
        }
      }
    }

    const ents = Array.from(deserializedEntities);
    deserializedEntities.clear();
    return ents;
  };
}; // src/Entity.js


var $entityMasks = Symbol("entityMasks");
var $entityComponents = Symbol("entityComponents");
var $entitySparseSet = Symbol("entitySparseSet");
var $entityArray = Symbol("entityArray");
var $entityIndices = Symbol("entityIndices");
var $removedEntities = Symbol("removedEntities");
var defaultSize = 1e5;
var globalEntityCursor = 0;
var globalSize = defaultSize;

var resizeThreshold = () => globalSize - globalSize / 5;

var getGlobalSize = () => globalSize;

var removed = [];

var resetGlobals = () => {
  globalSize = defaultSize;
  globalEntityCursor = 0;
  removed.length = 0;
};

var setDefaultSize = newSize => {
  const oldSize = globalSize;
  defaultSize = newSize;
  resetGlobals();
  globalSize = newSize;
  resizeWorlds(newSize);
  resizeComponents(newSize);
  setSerializationResized(true);
  console.info(`\u{1F47E} bitECS - resizing all data stores from ${oldSize} to ${newSize}`);
};

var getEntityCursor = () => globalEntityCursor;

var eidToWorld = /* @__PURE__ */new Map();

var addEntity = world => {
  if (globalEntityCursor >= resizeThreshold()) {
    const size = globalSize;
    const amount = Math.ceil(size / 2 / 4) * 4;
    setDefaultSize(size + amount);
  }

  const eid = removed.length > Math.round(defaultSize * 0.01) ? removed.shift() : globalEntityCursor++;
  world[$entitySparseSet].add(eid);
  eidToWorld.set(eid, world);
  world[$notQueries].forEach(q => {
    const match = queryCheckEntity(world, q, eid);
    if (match) queryAddEntity(q, eid);
  });
  world[$entityComponents].set(eid, /* @__PURE__ */new Set());
  return eid;
};

var removeEntity = (world, eid) => {
  if (!world[$entitySparseSet].has(eid)) return;
  world[$queries].forEach(q => {
    queryRemoveEntity(world, q, eid);
  });
  removed.push(eid);
  world[$entitySparseSet].remove(eid);
  world[$entityComponents].delete(eid);
  world[$localEntities].delete(world[$localEntityLookup].get(eid));
  world[$localEntityLookup].delete(eid);

  for (let i = 0; i < world[$entityMasks].length; i++) world[$entityMasks][i][eid] = 0;
};

var getEntityComponents = (world, eid) => {
  if (eid === void 0) throw new Error("bitECS - entity is undefined.");
  if (!world[$entitySparseSet].has(eid)) throw new Error("bitECS - entity does not exist in the world.");
  return Array.from(world[$entityComponents].get(eid));
};

var entityExists = (world, eid) => world[$entitySparseSet].has(eid); // src/Query.js


function Not(c) {
  return () => [c, "not"];
}

function Changed(c) {
  return () => [c, "changed"];
}

function Any(...comps) {
  return function QueryAny() {
    return comps;
  };
}

function All(...comps) {
  return function QueryAll() {
    return comps;
  };
}

function None(...comps) {
  return function QueryNone() {
    return comps;
  };
}

var $queries = Symbol("queries");
var $notQueries = Symbol("notQueries");
var $queryAny = Symbol("queryAny");
var $queryAll = Symbol("queryAll");
var $queryNone = Symbol("queryNone");
var $queryMap = Symbol("queryMap");
var $dirtyQueries = Symbol("$dirtyQueries");
var $queryComponents = Symbol("queryComponents");
var $enterQuery = Symbol("enterQuery");
var $exitQuery = Symbol("exitQuery");

var enterQuery = query => world => {
  if (!world[$queryMap].has(query)) registerQuery(world, query);
  const q = world[$queryMap].get(query);
  const entered = q.entered.dense.slice();
  q.entered = SparseSet();
  return entered;
};

var exitQuery = query => world => {
  if (!world[$queryMap].has(query)) registerQuery(world, query);
  const q = world[$queryMap].get(query);
  const exited = q.exited.dense.slice();
  q.exited = SparseSet();
  return exited;
};

var registerQuery = (world, query) => {
  const components2 = [];
  const notComponents = [];
  const changedComponents = [];
  query[$queryComponents].forEach(c => {
    if (typeof c === "function") {
      const [comp, mod] = c();
      if (!world[$componentMap].has(comp)) registerComponent(world, comp);

      if (mod === "not") {
        notComponents.push(comp);
      }

      if (mod === "changed") {
        changedComponents.push(comp);
        components2.push(comp);
      }
    } else {
      if (!world[$componentMap].has(c)) registerComponent(world, c);
      components2.push(c);
    }
  });

  const mapComponents = c => world[$componentMap].get(c);

  const allComponents = components2.concat(notComponents).map(mapComponents);
  const sparseSet = SparseSet();
  const archetypes = [];
  const changed = [];
  const toRemove = SparseSet();
  const entered = SparseSet();
  const exited = SparseSet();
  const generations = allComponents.map(c => c.generationId).reduce((a, v) => {
    if (a.includes(v)) return a;
    a.push(v);
    return a;
  }, []);

  const reduceBitflags = (a, c) => {
    if (!a[c.generationId]) a[c.generationId] = 0;
    a[c.generationId] |= c.bitflag;
    return a;
  };

  const masks = components2.map(mapComponents).reduce(reduceBitflags, {});
  const notMasks = notComponents.map(mapComponents).reduce(reduceBitflags, {});
  const hasMasks = allComponents.reduce(reduceBitflags, {});
  const flatProps = components2.filter(c => !c[$tagStore]).map(c => Object.getOwnPropertySymbols(c).includes($storeFlattened) ? c[$storeFlattened] : [c]).reduce((a, v) => a.concat(v), []);
  const shadows = [];
  const q = Object.assign(sparseSet, {
    archetypes,
    changed,
    components: components2,
    notComponents,
    changedComponents,
    allComponents,
    masks,
    notMasks,
    hasMasks,
    generations,
    flatProps,
    toRemove,
    entered,
    exited,
    shadows
  });
  world[$queryMap].set(query, q);
  world[$queries].add(q);
  allComponents.forEach(c => {
    c.queries.add(q);
  });
  if (notComponents.length) world[$notQueries].add(q);

  for (let eid = 0; eid < getEntityCursor(); eid++) {
    if (!world[$entitySparseSet].has(eid)) continue;
    const match = queryCheckEntity(world, q, eid);
    if (match) queryAddEntity(q, eid);
  }
};

var generateShadow = (q, pid) => {
  const $ = Symbol();
  const prop = q.flatProps[pid];
  createShadow(prop, $);
  q.shadows[pid] = prop[$];
  return prop[$];
};

var diff = (q, clearDiff) => {
  if (clearDiff) q.changed = [];
  const {
    flatProps,
    shadows
  } = q;

  for (let i = 0; i < q.dense.length; i++) {
    const eid = q.dense[i];
    let dirty = false;

    for (let pid = 0; pid < flatProps.length; pid++) {
      const prop = flatProps[pid];
      const shadow = shadows[pid] || generateShadow(q, pid);

      if (ArrayBuffer.isView(prop[eid])) {
        for (let i2 = 0; i2 < prop[eid].length; i2++) {
          if (prop[eid][i2] !== shadow[eid][i2]) {
            dirty = true;
            break;
          }
        }

        shadow[eid].set(prop[eid]);
      } else {
        if (prop[eid] !== shadow[eid]) {
          dirty = true;
          shadow[eid] = prop[eid];
        }
      }
    }

    if (dirty) q.changed.push(eid);
  }

  return q.changed;
};

var flatten = (a, v) => a.concat(v);

var aggregateComponentsFor = mod => x => x.filter(f => f.name === mod().constructor.name).reduce(flatten);

var getAnyComponents = aggregateComponentsFor(Any);
var getAllComponents = aggregateComponentsFor(All);
var getNoneComponents = aggregateComponentsFor(None);

var defineQuery = (...args) => {
  let components2;
  let any, all, none;

  if (Array.isArray(args[0])) {
    components2 = args[0];
  } else {}

  if (components2 === void 0 || components2[$componentMap] !== void 0) {
    return world => world ? world[$entityArray] : components2[$entityArray];
  }

  const query = function (world, clearDiff = true) {
    if (!world[$queryMap].has(query)) registerQuery(world, query);
    const q = world[$queryMap].get(query);
    commitRemovals(world);
    if (q.changedComponents.length) return diff(q, clearDiff);
    return q.dense;
  };

  query[$queryComponents] = components2;
  query[$queryAny] = any;
  query[$queryAll] = all;
  query[$queryNone] = none;
  return query;
};

var queryCheckEntity = (world, q, eid) => {
  const {
    masks,
    notMasks,
    generations
  } = q;
  let or = 0;

  for (let i = 0; i < generations.length; i++) {
    const generationId = generations[i];
    const qMask = masks[generationId];
    const qNotMask = notMasks[generationId];
    const eMask = world[$entityMasks][generationId][eid];

    if (qNotMask && (eMask & qNotMask) !== 0) {
      return false;
    }

    if (qMask && (eMask & qMask) !== qMask) {
      return false;
    }
  }

  return true;
};

var queryAddEntity = (q, eid) => {
  q.toRemove.remove(eid);
  q.entered.add(eid);
  q.add(eid);
};

var queryCommitRemovals = q => {
  for (let i = q.toRemove.dense.length - 1; i >= 0; i--) {
    const eid = q.toRemove.dense[i];
    q.toRemove.remove(eid);
    q.remove(eid);
  }
};

var commitRemovals = world => {
  if (!world[$dirtyQueries].size) return;
  world[$dirtyQueries].forEach(queryCommitRemovals);
  world[$dirtyQueries].clear();
};

var queryRemoveEntity = (world, q, eid) => {
  if (!q.has(eid) || q.toRemove.has(eid)) return;
  q.toRemove.add(eid);
  world[$dirtyQueries].add(q);
  q.exited.add(eid);
};

var resetChangedQuery = (world, query) => {
  const q = world[$queryMap].get(query);
  q.changed = [];
};

var removeQuery = (world, query) => {
  const q = world[$queryMap].get(query);
  world[$queries].delete(q);
  world[$queryMap].delete(query);
}; // src/Component.js


var $componentMap = Symbol("componentMap");
var components = [];

var resizeComponents = size => {
  components.forEach(component => resizeStore(component, size));
};

var defineComponent = (schema, size) => {
  const component = createStore(schema, size || getGlobalSize());
  if (schema && Object.keys(schema).length) components.push(component);
  return component;
};

var incrementBitflag = world => {
  world[$bitflag] *= 2;

  if (world[$bitflag] >= 2 ** 31) {
    world[$bitflag] = 1;
    world[$entityMasks].push(new Uint32Array(world[$size]));
  }
};

var registerComponent = (world, component) => {
  if (!component) throw new Error(`bitECS - Cannot register null or undefined component`);
  const queries = /* @__PURE__ */new Set();
  const notQueries = /* @__PURE__ */new Set();
  const changedQueries = /* @__PURE__ */new Set();
  world[$queries].forEach(q => {
    if (q.allComponents.includes(component)) {
      queries.add(q);
    }
  });
  world[$componentMap].set(component, {
    generationId: world[$entityMasks].length - 1,
    bitflag: world[$bitflag],
    store: component,
    queries,
    notQueries,
    changedQueries
  });

  if (component[$storeSize] < getGlobalSize()) {
    resizeStore(component, getGlobalSize());
  }

  incrementBitflag(world);
};

var registerComponents = (world, components2) => {
  components2.forEach(c => registerComponent(world, c));
};

var hasComponent = (world, component, eid) => {
  const registeredComponent = world[$componentMap].get(component);
  if (!registeredComponent) return false;
  const {
    generationId,
    bitflag
  } = registeredComponent;
  const mask = world[$entityMasks][generationId][eid];
  return (mask & bitflag) === bitflag;
};

var addComponent = (world, component, eid, reset = false) => {
  if (eid === void 0) throw new Error("bitECS - entity is undefined.");
  if (!world[$entitySparseSet].has(eid)) throw new Error("bitECS - entity does not exist in the world.");
  if (!world[$componentMap].has(component)) registerComponent(world, component);
  if (hasComponent(world, component, eid)) return;
  const c = world[$componentMap].get(component);
  const {
    generationId,
    bitflag,
    queries,
    notQueries
  } = c;
  world[$entityMasks][generationId][eid] |= bitflag;
  queries.forEach(q => {
    if (q.toRemove.has(eid)) q.toRemove.remove(eid);
    const match = queryCheckEntity(world, q, eid);
    if (match) queryAddEntity(q, eid);
    if (!match) queryRemoveEntity(world, q, eid);
  });
  world[$entityComponents].get(eid).add(component);
  if (reset) resetStoreFor(component, eid);
};

var removeComponent = (world, component, eid, reset = true) => {
  if (eid === void 0) throw new Error("bitECS - entity is undefined.");
  if (!world[$entitySparseSet].has(eid)) throw new Error("bitECS - entity does not exist in the world.");
  if (!hasComponent(world, component, eid)) return;
  const c = world[$componentMap].get(component);
  const {
    generationId,
    bitflag,
    queries
  } = c;
  world[$entityMasks][generationId][eid] &= ~bitflag;
  queries.forEach(q => {
    if (q.toRemove.has(eid)) q.toRemove.remove(eid);
    const match = queryCheckEntity(world, q, eid);
    if (match) queryAddEntity(q, eid);
    if (!match) queryRemoveEntity(world, q, eid);
  });
  world[$entityComponents].get(eid).delete(component);
  if (reset) resetStoreFor(component, eid);
}; // src/World.js


var $size = Symbol("size");
var $resizeThreshold = Symbol("resizeThreshold");
var $bitflag = Symbol("bitflag");
var $archetypes = Symbol("archetypes");
var $localEntities = Symbol("localEntities");
var $localEntityLookup = Symbol("localEntityLookp");
var worlds = [];

var resizeWorlds = size => {
  worlds.forEach(world => {
    world[$size] = size;

    for (let i = 0; i < world[$entityMasks].length; i++) {
      const masks = world[$entityMasks][i];
      world[$entityMasks][i] = resize(masks, size);
    }

    world[$resizeThreshold] = world[$size] - world[$size] / 5;
  });
};

var createWorld = (...args) => {
  const world = typeof args[0] === "object" ? args[0] : {};
  const size = typeof args[0] === "number" ? args[0] : typeof args[1] === "number" ? args[1] : getGlobalSize();
  resetWorld(world, size);
  worlds.push(world);
  return world;
};

var resetWorld = (world, size = getGlobalSize()) => {
  world[$size] = size;
  if (world[$entityArray]) world[$entityArray].forEach(eid => removeEntity(world, eid));
  world[$entityMasks] = [new Uint32Array(size)];
  world[$entityComponents] = /* @__PURE__ */new Map();
  world[$archetypes] = [];
  world[$entitySparseSet] = SparseSet();
  world[$entityArray] = world[$entitySparseSet].dense;
  world[$bitflag] = 1;
  world[$componentMap] = /* @__PURE__ */new Map();
  world[$queryMap] = /* @__PURE__ */new Map();
  world[$queries] = /* @__PURE__ */new Set();
  world[$notQueries] = /* @__PURE__ */new Set();
  world[$dirtyQueries] = /* @__PURE__ */new Set();
  world[$localEntities] = /* @__PURE__ */new Map();
  world[$localEntityLookup] = /* @__PURE__ */new Map();
  return world;
};

var deleteWorld = world => {
  Object.getOwnPropertySymbols(world).forEach($ => {
    delete world[$];
  });
  Object.keys(world).forEach(key => {
    delete world[key];
  });
  worlds.splice(worlds.indexOf(world), 1);
};

var getWorldComponents = world => Array.from(world[$componentMap].keys()); // src/System.js


var defineSystem = update => (world, ...args) => {
  update(world, ...args);
  return world;
}; // src/index.js


var pipe = (...fns) => input => {
  let tmp = input;

  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i];
    tmp = fn(tmp);
  }

  return tmp;
};

var Types = TYPES_ENUM;

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6856);
;// CONCATENATED MODULE: ./src/bitecs/entities/entity.ts



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

    this.eid = addEntity(world.ecs);
    this.world = world;
    this.addComponent(world.components.position);
    this.addComponent(world.components.health);
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
      // @ts-expect-error
      this[key] = config[key];
    });
  }

  set(component, name, value) {
    // @ts-expect-error
    this.world.components[component][name][this.eid] = value;
  }

  addComponent(component) {
    addComponent(this.world.ecs, component, this.eid);
  }

}
;// CONCATENATED MODULE: ./src/bitecs/entities/station.ts

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
    this.addComponent(world.components.controller);
    this.key = 'station';
    this.width = 20;
    this.height = 20;
    this.shields = 2;
    this.maxShields = 2;
    this.timeToRegenerateShields = 5;
  }

}
// EXTERNAL MODULE: ./src/math/compute-angle.ts
var compute_angle = __webpack_require__(2254);
;// CONCATENATED MODULE: ./src/bitecs/entities/ship.ts

class Ship extends Entity {
  get color() {
    return this.world.components.controller.color[this.world.components.controlled.owner[this.eid]];
  }

  get velocityX() {
    return this.world.components.velocity.x[this.eid];
  }

  set velocityX(val) {
    this.world.components.velocity.x[this.eid] = val;
  }

  get velocityY() {
    return this.world.components.velocity.y[this.eid];
  }

  set velocityY(val) {
    this.world.components.velocity.y[this.eid] = val;
  }

  get station() {
    return this.world.getEntity(this.eid);
  }

  constructor(station) {
    super(station.world);
    let world = station.world;
    this.addComponent(world.components.velocity);
    this.addComponent(world.components.controlled);
    this.addComponent(world.components.attack);
    this.width = 10;
    this.height = 5;
    this.shields = 1;
    this.maxShields = 1;
    this.timeToRegenerateShields = 1;
    this.world.components.velocity.speed[this.eid] = 100;
    world.components.controlled.owner[this.eid] = station.eid;
  }

}
;// CONCATENATED MODULE: ./src/bitecs/systems/spawn-ship-system.ts



function spawnShipSystem(world) {
  const controller = world.components.controller;
  const health = world.components.health;
  let stationQuery = defineQuery([controller]);
  return ecs => {
    // TODO: Remove dependency on our containers so this could realistically be running in a simple worker with just duplicated data
    let stations = stationQuery(ecs).filter(eid => !health.dead[eid]);
    stations.forEach(stationEid => {
      let station = world.getEntity(stationEid);

      if (controller.money[stationEid] > 0) {
        let ship = new Ship(station);
        ship.x = station.x;
        ship.y = station.y;
        ship.velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * world.components.velocity.speed[ship.eid];
        ship.velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * world.components.velocity.speed[ship.eid];
        world.components.position.angle[ship.eid] = (0,compute_angle/* default */.Z)(ship.velocityX, ship.velocityY);
        world.addEntity(ship);
        controller.money[stationEid]--;
      }
    });
    return ecs;
  };
}
;// CONCATENATED MODULE: ./src/bitecs/components/position.ts

/* harmony default export */ var position = ({
  x: Types.f32,
  y: Types.f32,
  width: Types.f32,
  height: Types.f32,
  angle: Types.f32
});
;// CONCATENATED MODULE: ./src/bitecs/components/controller.ts

/* harmony default export */ var controller = ({
  color: Types.f32,
  money: Types.i32
});
;// CONCATENATED MODULE: ./src/bitecs/components/velocity.ts

/* harmony default export */ var velocity = ({
  x: Types.f32,
  y: Types.f32,
  speed: Types.f32
});
;// CONCATENATED MODULE: ./src/bitecs/components/health.ts

/* harmony default export */ var health = ({
  shields: Types.i32,
  maxShields: Types.i32,
  timeToRegenerateShields: Types.f32,
  timeSinceShieldRegeneration: Types.f32,
  timeSinceTakenDamage: Types.f32,
  dead: Types.ui8
});
;// CONCATENATED MODULE: ./src/bitecs/components/controlled.ts

/* harmony default export */ var controlled = ({
  owner: Types.eid
});
;// CONCATENATED MODULE: ./src/bitecs/components/attack.ts

/* harmony default export */ var attack = ({
  target: Types.eid
});
;// CONCATENATED MODULE: ./src/bitecs/components/index.ts







/* harmony default export */ var bitecs_components = ({
  position: defineComponent(position),
  controller: defineComponent(controller),
  velocity: defineComponent(velocity),
  health: defineComponent(health),
  controlled: defineComponent(controlled),
  attack: defineComponent(attack)
});
;// CONCATENATED MODULE: ./src/bitecs/systems/velocity-system.ts


function velocitySystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  let shipQuery = defineQuery([position, velocity]);
  return (ecs, delta) => {
    let ships = shipQuery(ecs);
    ships.forEach(shipEid => {
      position.x[shipEid] += velocity.x[shipEid] * delta;
      position.y[shipEid] += velocity.y[shipEid] * delta; // TODO: Don't reference proxy world directly

      if (position.x[shipEid] < 0 || position.x[shipEid] > world.bounds.width) {
        velocity.x[shipEid] = -velocity.x[shipEid];
        position.angle[shipEid] = (0,compute_angle/* default */.Z)(velocity.x[shipEid], velocity.y[shipEid]);
      }

      if (position.y[shipEid] < 0 || position.y[shipEid] > world.bounds.height) {
        velocity.y[shipEid] = -velocity.y[shipEid];
        position.angle[shipEid] = (0,compute_angle/* default */.Z)(velocity.x[shipEid], velocity.y[shipEid]);
      }
    });
    return ecs;
  };
}
// EXTERNAL MODULE: ./node_modules/@timohausmann/quadtree-ts/src/Rectangle.ts
var Rectangle = __webpack_require__(8973);
// EXTERNAL MODULE: ./src/math/distance.ts
var distance = __webpack_require__(6065);
;// CONCATENATED MODULE: ./src/bitecs/systems/collision-system.ts




function collisionSystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  const controlled = world.components.controlled;
  const controller = world.components.controller;
  const health = world.components.health;
  let movingQuery = defineQuery([velocity]); // 60fps = 0.016 so 30fps is roughly 0.032 so basically every other frame

  const TIME_BETWEEN_TICKS = 0.03;
  let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
  let ships = [];
  let minCountToUpdate = 0;
  return (ecs, delta) => {
    timeSinceLastTick += delta;

    if (timeSinceLastTick > TIME_BETWEEN_TICKS && ships.length === 0) {
      ships = movingQuery(ecs).filter(eid => !health.dead[eid]);
      minCountToUpdate = ships.length / 2;
      timeSinceLastTick = 0;
    } // @ts-expect-error


    let quadtree = ecs.quadtree;
    let start = performance.now(); // Use quadtree to see who we are colliding with

    for (let i = 0; i < ships.length; i++) {
      let eid = ships[i];
      let entitiesInRange = quadtree.retrieve(new Rectangle/* Rectangle */.A({
        x: position.x[eid],
        y: position.y[eid],
        width: position.width[eid],
        height: position.height[eid]
      })).map(result => result.data.eid).filter(otherEid => otherEid !== eid);
      let shipColor = controller.color[controlled.owner[eid]];
      let enemiesInRange = entitiesInRange.filter(otherEid => {
        // Ship
        if (hasComponent(ecs, controlled, otherEid)) {
          let stationEid = controlled.owner[otherEid];
          return controller.color[stationEid] !== shipColor;
        } // Station
        else if (hasComponent(ecs, controller, otherEid)) {
          return controller.color[otherEid] !== shipColor;
        } else {
          return false;
        }
      });
      let collisions = enemiesInRange.filter(otherEid => (0,distance/* default */.Z)(position.x[otherEid], position.y[otherEid], position.x[eid], position.y[eid]) < Math.max(position.width[eid], position.width[otherEid]));

      if (collisions.length) {
        collide(world, ships, eid, collisions[0]);
        velocity.x[eid] = -velocity.x[eid];
        velocity.y[eid] = -velocity.y[eid];
        position.angle[eid] = (0,compute_angle/* default */.Z)(velocity.x[eid], velocity.y[eid]);
      }

      if (i % 10 === 0 && i > minCountToUpdate) {
        if (performance.now() - start > delta * 1_000 / 2) {
          ships = ships.slice(i);
          return ecs;
        }
      }
    }

    ships = [];
    return ecs;
  };
}

function collide(world, ships, eid, target) {
  if (!canTakeDamage(world, eid) || !canTakeDamage(world, target)) {
    return;
  }

  let enemyWorth = 1;

  if (hasComponent(world.ecs, world.components.controller, target)) {
    enemyWorth = ships.filter(eid => world.components.controlled.owner[eid] === target).length;
  }

  takeDamage(world, ships, eid, 1);
  takeDamage(world, ships, target, 1);
  const controlled = world.components.controlled;

  if (world.components.health.dead[target]) {
    let stationEid = controlled.owner[eid];
    world.components.controller.money[stationEid] += enemyWorth;
  }

  if (world.components.health.dead[eid]) {
    // Ship
    if (hasComponent(world.ecs, controlled, target)) {
      let stationEid = controlled.owner[target];
      world.components.controller.money[stationEid] += 1;
    } // Station
    else if (hasComponent(world.ecs, world.components.controller, target)) {
      world.components.controller.money[target] += 1;
    }
  }
}

function takeDamage(world, ships, eid, damage) {
  const health = world.components.health;
  health.shields[eid] -= damage;
  health.timeSinceTakenDamage[eid] = 0;

  if (health.shields[eid] < 0) {
    health.dead[eid] = 1; // TODO: Removing makes it so our change query doesn't detect that these are gone
    // world.removeEntity(eid);

    if (hasComponent(world.ecs, world.components.controller, eid)) {
      let controlledShips = ships.filter(shipEid => world.components.controlled.owner[shipEid] === eid);
      controlledShips.forEach(shipEid => {
        health.dead[shipEid] = 1;
      });
    }
  }
}

function canTakeDamage(world, eid) {
  return world.components.health.timeSinceTakenDamage[eid] >= 0.2;
}
// EXTERNAL MODULE: ./src/math/euclidean-distance.ts
var euclidean_distance = __webpack_require__(1396);
;// CONCATENATED MODULE: ./src/bitecs/systems/target-enemy-system.ts



function targetEnemySystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  const controlled = world.components.controlled;
  const controller = world.components.controller;
  const health = world.components.health;
  const attack = world.components.attack;
  let movingQuery = defineQuery([velocity, attack]);
  let controllerQuery = defineQuery([controller]);
  const TIME_BETWEEN_TICKS = 0.2;
  let timeSinceLastTick = TIME_BETWEEN_TICKS + 1;
  let movingEntities = [];
  let minCountToUpdate = 0;
  return (ecs, delta) => {
    // Run through all of entities eventually, but don't have more than half a frame's time to do a block of them
    timeSinceLastTick += delta;

    if (timeSinceLastTick > TIME_BETWEEN_TICKS && movingEntities.length === 0) {
      movingEntities = movingQuery(ecs).filter(eid => !health.dead[eid]);
      minCountToUpdate = movingEntities.length / (TIME_BETWEEN_TICKS / delta);
      timeSinceLastTick = 0;
    } // @ts-expect-error


    let quadtree = ecs.quadtree;
    let start = performance.now(); // Use quadtree to see who we are colliding with

    for (let i = 0; i < movingEntities.length; i++) {
      let eid = movingEntities[i];
      let shipColor = controller.color[controlled.owner[eid]]; // Try to find the nearest enemy

      let rect = {
        x: position.x[eid] - 50,
        y: position.y[eid] - 50,
        width: position.width[eid] + 100,
        height: position.height[eid] + 100
      };
      let enemies = getEnemiesInRange(quadtree, ecs, rect, eid, shipColor, world);

      if (enemies.length === 0) {
        rect.x -= 100;
        rect.y -= 100;
        rect.width += 200;
        rect.height += 200;
        enemies = getEnemiesInRange(quadtree, ecs, rect, eid, shipColor, world);
      }

      enemies.sort((a, b) => {
        return (0,euclidean_distance/* default */.Z)(position.x[a], position.y[a], position.x[eid], position.y[eid]) - (0,euclidean_distance/* default */.Z)(position.x[b], position.y[b], position.x[eid], position.y[eid]);
      });
      let enemy = enemies[0] ?? 0; // If no enemies that quadtree could easily find, just head for the nearest station

      if (!enemy) {
        let stations = controllerQuery(ecs).filter(stationEid => controller.color[stationEid] !== shipColor && !health.dead[stationEid]);
        stations.sort((a, b) => {
          return (0,euclidean_distance/* default */.Z)(position.x[a], position.y[a], position.x[eid], position.y[eid]) - (0,euclidean_distance/* default */.Z)(position.x[b], position.y[b], position.x[eid], position.y[eid]);
        });
        enemy = stations[0] ?? 0;
      }

      attack.target[eid] = enemy;

      if (i % 10 === 0 && i > minCountToUpdate) {
        // Check how long we have been running for
        if (performance.now() - start > delta * 1_000 / 2) {
          movingEntities = movingEntities.slice(i);
          return ecs;
        }
      }
    }

    movingEntities = [];
    return ecs;
  };
}

function getEnemiesInRange(quadtree, ecs, range, eid, shipColor, world) {
  const controlled = world.components.controlled;
  const controller = world.components.controller;
  let entitiesInRange = quadtree.retrieve(new Rectangle/* Rectangle */.A(range)).map(result => result.data.eid).filter(otherEid => otherEid !== eid);
  return entitiesInRange.filter(otherEid => {
    // Ship
    if (hasComponent(ecs, controlled, otherEid)) {
      let stationEid = controlled.owner[otherEid];
      return controller.color[stationEid] !== shipColor;
    } // Station
    else if (hasComponent(ecs, controller, otherEid)) {
      return controller.color[otherEid] !== shipColor;
    } else {
      return false;
    }
  });
}
// EXTERNAL MODULE: ./node_modules/@timohausmann/quadtree-ts/src/Quadtree.ts
var Quadtree = __webpack_require__(7309);
;// CONCATENATED MODULE: ./src/bitecs/systems/create-quad-tree-system.ts


function createQuadTreeSystem(world) {
  const position = world.components.position;
  const health = world.components.health;
  let collidableQuery = defineQuery([position, health]);
  return ecs => {
    // Create and populate quadtree
    let quadtree = new Quadtree/* Quadtree */.l({
      width: world.bounds.width,
      height: world.bounds.height
    });
    collidableQuery(ecs).forEach(eid => {
      if (health.dead[eid]) {
        return;
      }

      quadtree.insert(new Rectangle/* Rectangle */.A({
        x: position.x[eid],
        y: position.y[eid],
        width: position.width[eid],
        height: position.height[eid],
        data: {
          eid
        }
      }));
    }); // @ts-expect-error

    ecs.quadtree = quadtree;
    return ecs;
  };
}
;// CONCATENATED MODULE: ./src/bitecs/systems/update-health-timers-system.ts

function updateHealthTimersSystem(world) {
  const health = world.components.health;
  let healthQuery = defineQuery([health]);
  return (ecs, delta) => {
    healthQuery(ecs).forEach(eid => {
      health.timeSinceTakenDamage[eid] += delta;

      if (health.shields[eid] < health.maxShields[eid]) {
        health.timeSinceShieldRegeneration[eid] += delta;

        if (health.timeSinceShieldRegeneration[eid] > health.timeToRegenerateShields[eid]) {
          health.shields[eid]++;
          health.timeSinceShieldRegeneration[eid] = 0;
        }
      }
    });
    return ecs;
  };
}
;// CONCATENATED MODULE: ./src/bitecs/systems/move-to-target-system.ts



const PhaserMath = __webpack_require__(3129);

function moveToTargetSystem(world) {
  const position = world.components.position;
  const velocity = world.components.velocity;
  const attack = world.components.attack;
  const health = world.components.health;
  let movingQuery = defineQuery([velocity, attack]);
  return ecs => {
    movingQuery(ecs).forEach(eid => {
      let target = attack.target[eid];

      if (!target || health.dead[target]) {
        return;
      }

      let force = getMoveTowardsForce(position, eid, target);
      let newVelocity = new PhaserMath.Vector2(velocity.x[eid] + force.x * 4, velocity.y[eid] + force.y * 4);
      newVelocity.normalize();
      velocity.x[eid] = newVelocity.x * velocity.speed[eid];
      velocity.y[eid] = newVelocity.y * velocity.speed[eid];
      position.angle[eid] = (0,compute_angle/* default */.Z)(velocity.x[eid], velocity.y[eid]);
    });
    return ecs;
  };
}

function getMoveTowardsForce(position, eid, otherEid) {
  let force = new PhaserMath.Vector2(position.x[otherEid] - position.x[eid], position.y[otherEid] - position.y[eid]);
  force.normalize();
  return force;
}
;// CONCATENATED MODULE: ./src/bitecs/entities/world.ts













class World extends eventemitter3.EventEmitter {
  get entities() {
    return [...this.eidMap.values()];
  }

  constructor() {
    super();

    (0,defineProperty/* default */.Z)(this, "ecs", void 0);

    (0,defineProperty/* default */.Z)(this, "eidMap", new Map());

    (0,defineProperty/* default */.Z)(this, "bounds", {
      width: 0,
      height: 0
    });

    (0,defineProperty/* default */.Z)(this, "components", bitecs_components);

    (0,defineProperty/* default */.Z)(this, "systems", []);

    (0,defineProperty/* default */.Z)(this, "systemUpdates", {});

    this.ecs = createWorld();
    this.addSystem('quadTreeSystem', createQuadTreeSystem(this));
    this.addSystem('spawnShipSystem', spawnShipSystem(this));
    this.addSystem('targetEnemySystem', targetEnemySystem(this));
    this.addSystem('moveToTargetSystem', moveToTargetSystem(this));
    this.addSystem('velocitySystem', velocitySystem(this));
    this.addSystem('collisionSystem', collisionSystem(this));
    this.addSystem('updateHealthTimersSystem', updateHealthTimersSystem(this));
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
    this.emit('entity-added', entity);
    this.eidMap.set(entity.eid, entity);
  }

  removeEntity(eid) {
    removeEntity(this.ecs, eid);
    this.eidMap.delete(eid);
  }

  getEntity(eid) {
    return this.eidMap.get(eid) ?? null;
  }

  update(delta) {
    this.systems.forEach(system => {
      system(this.ecs, delta);
    });
  }

  addSystem(name, update) {
    this.systems.push((world, delta) => {
      let start = performance.now();
      update(world, delta);
      this.systemUpdates[name].push(performance.now() - start);
      return world;
    });
    this.systemUpdates[name] = [];
  }

}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/bitecs/BitECSGame.vue?vue&type=script&setup=true&lang=ts



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-4e495fc6"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
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
  id: "phaser-container-bitecs"
}, null, -1));









/* harmony default export */ var BitECSGamevue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup(__props) {
    let world = new World();
    const minUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const maxUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const avgUpdateTime = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const stationsCount = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const shipsCount = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const stationShips = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const stationQuery = defineQuery([bitecs_components.controller]);
    const systemUpdates = (0,reactivity_esm_bundler/* ref */.iH)([]);
    let game;
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      let updateTicks = 0;
      let updateTimes = [];
      const width = window.innerWidth / 3 * 2;
      const height = window.innerHeight / 3 * 2;
      let paused = false;
      const changedPositionQuery = defineQuery([Changed(bitecs_components.position)]);
      const changedHealthQuery = defineQuery([Changed(bitecs_components.health)]);
      const controlledQuery = defineQuery([bitecs_components.controlled]);
      const eidSpriteMap = new Map();
      game = new (phaser_default()).Game({
        type: (phaser_default()).AUTO,
        width,
        height,
        parent: 'phaser-container-bitecs',
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

              eidSpriteMap.set(entity.eid, image);
            });
            world.load((0,generate_scene/* default */.Z)({
              stations: 6,
              shipsPerStation: 100,
              width,
              height
            }));
            let stations = world.entities.filter(entity => entity instanceof Station);
            stationShips.value = stations.map(station => {
              let displayColor = '#' + station.color.toString(16);

              if (displayColor === '#ffffff') {
                displayColor = '#00000';
              }

              return {
                eid: station.eid,
                color: station.color,
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
            world.update(delta / 1_000);
            changedPositionQuery(world.ecs).forEach(eid => {
              let image = eidSpriteMap.get(eid);

              if (!image) {
                return;
              }

              image.x = image.shieldImage.x = bitecs_components.position.x[eid];
              image.y = image.shieldImage.y = bitecs_components.position.y[eid];
              image.angle = image.shieldImage.angle = bitecs_components.position.angle[eid];
            });
            changedHealthQuery(world.ecs).forEach(eid => {
              let image = eidSpriteMap.get(eid);

              if (!image) {
                return;
              }

              image.shieldImage.visible = bitecs_components.health.shields[eid] > 0;

              if (bitecs_components.health.dead[eid]) {
                image.destroy();
                image.shieldImage.destroy();
                eidSpriteMap.delete(eid);
              }
            });
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
              let stations = stationQuery(world.ecs).filter(eid => !bitecs_components.health.dead[eid]);
              let ships = controlledQuery(world.ecs).filter(eid => !bitecs_components.health.dead[eid]);
              shipsCount.value = ships.length;
              stationShips.value.forEach(val => {
                let matchingStationEid = stations.find(eid => bitecs_components.controller.color[eid] === val.color);

                if (matchingStationEid !== undefined) {
                  val.ships = ships.filter(eid => bitecs_components.controlled.owner[eid] === val.eid).length;
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
    });

    function addShips() {
      stationQuery(world.ecs).forEach(eid => {
        world.components.controller.money[eid] += 10;
      });
    }

    return (_ctx, _cache) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, "mainThread: " + (0,shared_esm_bundler/* toDisplayString */.zw)(maxUpdateTime.value.toFixed(2)) + " (" + (0,shared_esm_bundler/* toDisplayString */.zw)(avgUpdateTime.value.toFixed(2)) + " avg) ms", 1), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)((0,reactivity_esm_bundler/* unref */.SU)(systemUpdates), system => {
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
      }, "Add Ships")])]), _hoisted_5]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/bitecs/BitECSGame.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/bitecs/BitECSGame.vue?vue&type=style&index=0&id=4e495fc6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/bitecs/BitECSGame.vue?vue&type=style&index=0&id=4e495fc6&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/bitecs/BitECSGame.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(BitECSGamevue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-4e495fc6"]])

/* harmony default export */ var BitECSGame = (__exports__);

/***/ })

}]);
//# sourceMappingURL=bitecs.48876c9f.js.map