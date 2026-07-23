(function(){var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=`~`;function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function a(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,i,o){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var s=new a(n,i||e,o),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function s(e,t){--e._eventsCount===0?e._events=new i:delete e._events[t]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)n.call(t,i)&&e.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},c.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},c.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var c=this._events[s],l=arguments.length,u,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,a),!0;case 6:return c.fn.call(c.context,t,n,i,a,o),!0}for(d=1,u=Array(l-1);d<l;d++)u[d-1]=arguments[d];c.fn.apply(c.context,u)}else{var f=c.length,p;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,i);break;default:if(!u)for(p=1,u=Array(l-1);p<l;p++)u[p-1]=arguments[p];c[d].fn.apply(c[d].context,u)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return s(this,a),this;var o=this._events[a];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&s(this,a);else{for(var c=0,l=[],u=o.length;c<u;c++)(o[c].fn!==t||i&&!o[c].once||n&&o[c].context!==n)&&l.push(o[c]);l.length?this._events[a]=l.length===1?l[0]:l:s(this,a)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t!==void 0&&(t.exports=c)}))();function l(e,t=0){return m(Atomics.load(e,t))}function u(e,t=0){return Atomics.load(e,t)}function d(e,t=0,n,r){Atomics.store(e,t,h(n,r))}function f(e,t=0,n){Atomics.store(e,t,n)}function p(e,t,n,r){return Atomics.compareExchange(e,t,r,n)===r}function m(e){return{bufferPosition:e&4095,bufferByteOffset:e>>>12}}function h(e,t){return e+(t<<12)}var g=class{memory;bufferPosition;get bufferByteOffset(){return this.data.byteOffset}get pointer(){return h(this.bufferPosition,this.bufferByteOffset)}buffer;data;constructor(e,t){this.memory=e,`buffer`in t?(this.data=t.data,this.buffer=t.buffer,this.bufferPosition=this.memory.buffers.indexOf(t.buffer)):(this.bufferPosition=t.bufferPosition,this.buffer=e.buffers[t.bufferPosition],this.data=new Uint32Array(this.buffer.buf,t.bufferByteOffset))}getArray(e,t,n){return new e(this.data.buffer,this.data.byteOffset+t*e.BYTES_PER_ELEMENT,n)}getArrayMemory(e,t){return{bufferPosition:this.bufferPosition,bufferByteOffset:this.bufferByteOffset+e*this.data.BYTES_PER_ELEMENT}}free(){this.buffer.free(this.data.byteOffset)}getSharedMemory(){return{bufferPosition:this.bufferPosition,bufferByteOffset:this.bufferByteOffset}}};let _={f32:Float32Array,f64:Float64Array},v={i8:Int8Array,i16:Int16Array,i32:Int32Array},y={u8:Uint8Array,u8c:Uint8ClampedArray,u16:Uint16Array,u32:Uint32Array};BigInt64Array,BigUint64Array,{..._,...v,...y};var b=class{static ALLOCATE_COUNT=4;memory;firstBlock;uint16Array;onDelete;get length(){return Atomics.load(this.firstBlock.data,2)}get type(){return Atomics.load(this.uint16Array,0)}set type(e){Atomics.store(this.uint16Array,0,e)}get dataLength(){return Math.max(1,Atomics.load(this.uint16Array,1))}set dataLength(e){Atomics.store(this.uint16Array,1,e)}constructor(e,t){if(this.memory=e,t&&`firstBlock`in t)this.firstBlock=new g(e,t.firstBlock),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+3*Uint32Array.BYTES_PER_ELEMENT,2);else{t&&t.initWithBlock?this.firstBlock=new g(e,t.initWithBlock):this.firstBlock=e.allocUI32(4),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+3*Uint32Array.BYTES_PER_ELEMENT,2);let n=t?.type??Uint32Array;n===Uint32Array?this.type=0:n===Int32Array?this.type=1:n===Float32Array&&(this.type=2),this.dataLength=t?.dataLength??1}}insert(e){typeof e==`number`&&(e=[e]);let t=this.dataLength;if(e.length>t)throw Error(`Can't insert ${e.length} array into shared list of ${t} dataLength`);let n=this.memory.allocUI32(1+t),r=this.getDataBlock(n.data),i=n.pointer;for(let t=0;t<e.length;t++)r instanceof Int32Array||r instanceof Uint32Array?Atomics.store(r,t,e[t]):r[t]=e[t];let a,o=!1;for(;!o;)a=u(this.firstBlock.data,1),o=p(this.firstBlock.data,1,i,a);if(a){let{bufferPosition:e,bufferByteOffset:t}=m(a);f(new Uint32Array(this.memory.buffers[e].buf,t,1),0,i)}else f(this.firstBlock.data,0,i);Atomics.add(this.firstBlock.data,2,1)}deleteMatch(e){for(let{data:t,index:n,deleteCurrent:r}of this)if(e(t,n))return r(),!0;return!1}deleteIndex(e){return e>=this.length||e<0?!1:this.deleteMatch((t,n)=>n===e)}deleteValue(e){return typeof e==`number`?this.deleteMatch(t=>t[0]===e):this.deleteMatch(t=>{if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0})}clear(){let e,t,n=!1;for(;!n;){if(e=u(this.firstBlock.data,0),t=u(this.firstBlock.data,1),!t)return;n=p(this.firstBlock.data,1,0,t)}if(!e)return;p(this.firstBlock.data,0,0,e);let r=0,i=e;for(;i;){let{bufferPosition:e,bufferByteOffset:t}=m(i),n=this.memory.buffers[e];if(!n)break;let a=new Uint32Array(n.buf,t,2);i=u(a,0),r++,this.onDelete&&this.onDelete(this.getDataBlock(a)),n.free(a.byteOffset)}Atomics.sub(this.firstBlock.data,2,r)}*[Symbol.iterator](){let e=0,{bufferPosition:t,bufferByteOffset:n}=l(this.firstBlock.data,0),r=this.firstBlock.data,i=0,a=0;for(;n;){let o=this.memory.buffers[t];if(!o)return;let s=new Uint32Array(o.buf,n,2),c=this.getDataBlock(s),u=t,f=n;({bufferPosition:t,bufferByteOffset:n}=l(s,0));let p=!0;yield{data:c,index:e,deleteCurrent:()=>{d(r,0,t,n),n||d(this.firstBlock.data,1,i,a),this.onDelete&&this.onDelete(this.getDataBlock(s)),o.free(s.byteOffset),Atomics.sub(this.firstBlock.data,2,1),p=!1}},p&&(r=s,i=u,a=f,e++)}}forEach(e){for(let t of this)e(t.data)}getSharedMemory(){return{firstBlock:this.firstBlock.getSharedMemory()}}getDataBlock(e){let t=e.byteOffset+1*e.BYTES_PER_ELEMENT;switch(this.type){case 1:return new Int32Array(e.buffer,t,this.dataLength);case 0:return new Uint32Array(e.buffer,t,this.dataLength);case 2:return new Float32Array(e.buffer,t,this.dataLength);default:throw Error(`Unknown data block type ${this.type}`)}}free(){let{bufferPosition:e,bufferByteOffset:t}=l(this.firstBlock.data,0);for(;t;){let n=new g(this.memory,{bufferPosition:e,bufferByteOffset:t});({bufferPosition:e,bufferByteOffset:t}=l(n.data,0)),this.onDelete&&this.onDelete(this.getDataBlock(n.data)),n.free()}this.firstBlock.free()}},x=class e{static ALLOCATE_COUNT=4;memory;firstBlock;uint16Array;get length(){return Atomics.load(this.firstBlock.data,1)}get type(){return this.uint16Array[0]}set type(e){Atomics.store(this.uint16Array,0,e)}get dataLength(){return this.uint16Array[1]||1}set dataLength(e){Atomics.store(this.uint16Array,1,e)}get bufferLength(){return Atomics.load(this.firstBlock.data,2)}set bufferLength(e){Atomics.store(this.firstBlock.data,2,e)}get pointer(){return this.firstBlock.pointer}cachedFullDataBlock;cachedPointer;constructor(t,n){if(this.memory=t,n&&`firstBlock`in n){if(this.firstBlock=new g(t,n.firstBlock),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+3*Uint32Array.BYTES_PER_ELEMENT,2),`type`in n||`dataLength`in n){let e=n.bufferLength??4,r=t.allocUI32(e*(n.dataLength??1));d(this.firstBlock.data,0,r.bufferPosition,r.bufferByteOffset),this.bufferLength=e,this.dataLength=n.dataLength??1}if(`type`in n){let e=n?.type??Uint32Array;e===Uint32Array?this.type=0:e===Int32Array?this.type=1:e===Float32Array&&(this.type=2)}}else{this.firstBlock=t.allocUI32(e.ALLOCATE_COUNT),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+3*Uint32Array.BYTES_PER_ELEMENT,2);let r=n?.dataLength??1,i=n?.bufferLength??4,a=t.allocUI32(i*r);d(this.firstBlock.data,0,a.bufferPosition,a.bufferByteOffset),this.bufferLength=i;let o=n?.type??Uint32Array;o===Uint32Array?this.type=0:o===Int32Array?this.type=1:o===Float32Array&&(this.type=2),this.dataLength=r}this.cachedPointer=this.firstBlock.data[0],this.cachedFullDataBlock=this.getFullDataBlock()}at(e){let t=this.length;if(e>=t||e<0)throw Error(`${e} is out of bounds ${t}`);let n=this.getFullDataBlock();return this.getDataBlock(n,e)}get(e,t=0){if(t>=this.dataLength)throw Error(`${t} is out of dataLength bounds ${this.dataLength}`);if(e>=this.length||e<0)throw Error(`${e} is out of bounds ${this.length}`);return this.getFullDataBlock()[e*this.dataLength+t]}push(e){let t=this.dataLength,n=typeof e==`number`;if(!n&&e.length>t)throw Error(`Can't insert ${e.length} array into shared list of ${t} dataLength`);let r=this.getFullDataBlock(),i=this.length,a=t*i;return n?r[a]=e:r.set(e,a),Atomics.add(this.firstBlock.data,1,1)+1>=this.bufferLength&&this.growBuffer(),i}pop(){let e=Atomics.sub(this.firstBlock.data,1,1),t=this.getFullDataBlock();return this.getDataBlock(t,e-1)}popNumber(){let e=Atomics.sub(this.firstBlock.data,1,1);return this.getFullDataBlock()[(e-1)*this.dataLength]}deleteIndex(e){let t=this.length;if(e>=t||e<0)throw Error(`${e} is out of bounds ${t}`);let n=this.dataLength,r=this.getFullDataBlock();for(let i=e;i<t;i++)for(let e=0;e<n;e++)r[i*n+e]=r[(i+1)*n+e];Atomics.sub(this.firstBlock.data,1,1)}clear(){this.firstBlock.data[1]=0}*[Symbol.iterator](){let e=this.getFullDataBlock(),t=this.dataLength,n=this.length*t;for(let r=0;r<n;r+=t)yield e.subarray(r,r+t)}getCurrentArray(){return this.getFullDataBlock().subarray(0,this.length*this.dataLength)}getFullDataBlock(){let e=Atomics.load(this.firstBlock.data,0);if(this.cachedPointer===e&&this.cachedFullDataBlock)return this.cachedFullDataBlock;let t=m(e),n=new g(this.memory,t),r;switch(this.type){case 1:r=new Int32Array(n.data.buffer,n.bufferByteOffset,this.dataLength*this.bufferLength);break;case 0:r=new Uint32Array(n.data.buffer,n.bufferByteOffset,this.dataLength*this.bufferLength);break;case 2:r=new Float32Array(n.data.buffer,n.bufferByteOffset,this.dataLength*this.bufferLength);break;default:throw Error(`Unknown data block type ${this.type}`)}return this.cachedPointer=e,this.cachedFullDataBlock=r,r}getDataBlock(e,t){let n=t*this.dataLength;return e.subarray(n,n+this.dataLength)}growBuffer(){let e=this.bufferLength*2,t=this.dataLength,n=l(this.firstBlock.data,0),r=new g(this.memory,n),i=this.getFullDataBlock(),a=this.memory.allocUI32(e*t),o;switch(this.type){case 1:o=new Int32Array(a.data.buffer,a.bufferByteOffset,t*e);break;case 0:o=new Uint32Array(a.data.buffer,a.bufferByteOffset,t*e);break;case 2:o=new Float32Array(a.data.buffer,a.bufferByteOffset,t*e);break;default:throw Error(`Unknown data block type ${this.type}`)}o.set(i);let s=a.pointer;f(this.firstBlock.data,0,s),this.bufferLength=e,r.free(),this.cachedPointer=s,this.cachedFullDataBlock=o}free(){let e=l(this.firstBlock.data,0);new g(this.memory,e).free(),this.firstBlock.free()}getSharedMemory(){return{firstBlock:this.firstBlock.getSharedMemory()}}};(class{static ALLOCATE_COUNT=b.ALLOCATE_COUNT;heap;list;cache=new Map;constructor(e,t){t?this.list=new b(e,t):this.list=new b(e),this.heap=e,this.list.onDelete=e=>{let t=Atomics.load(e,0);if(t){let e=this.cache.get(t);e||=this.initItem(t),e&&(e.free(),this.cache.delete(t))}}}get length(){return this.list.length}clear(){this.list.clear(),this.cache.clear()}insert(e){this.list.insert(e.pointer),this.cache.set(e.pointer,e)}delete(e){return this.cache.delete(e.pointer),this.list.deleteValue(e.pointer)}getByPointer(e){let t=this.cache.get(e);return t||(t=this.initItem(e),t&&this.cache.set(e,t)),t}*[Symbol.iterator](){let e=this.list[Symbol.iterator]();for(let{data:t,deleteCurrent:n}of e){let e=Atomics.load(t,0);if(!e)continue;let r=this.cache.get(e);r||(r=this.initItem(e),r&&this.cache.set(e,r)),r&&(yield{item:r,deleteCurrent:n})}}forEach(e,t){for(let{item:n}of this)(!t||t(n))&&e(n)}find(e){for(let{item:t}of this)if(e(t))return t}filter(e){let t=[];for(let{item:n}of this)e(n)&&t.push(n);return t}map(e){let t=[];for(let{item:n}of this)t.push(e(n));return t}getSharedMemory(){return this.list.getSharedMemory()}free(){this.list.free(),this.cache.clear()}});let S=3+x.ALLOCATE_COUNT;(class e{static ALLOCATE_COUNT=3+x.ALLOCATE_COUNT*2;memory;firstBlock;uint16Array;pointerVector;recycleVector;cachedFullDataBlock={};get length(){return Atomics.load(this.firstBlock.data,0)-this.recycleVector.length}get maxChunkSize(){return this.firstBlock.data[2]}set maxChunkSize(e){Atomics.store(this.firstBlock.data,2,e)}get type(){return this.uint16Array[0]}set type(e){Atomics.store(this.uint16Array,0,e)}get dataLength(){return Math.max(1,this.uint16Array[1])}set dataLength(e){Atomics.store(this.uint16Array,1,e)}get bufferLength(){return this.maxChunkSize*this.pointerVector.length}get recycleBufferLength(){return this.recycleVector.bufferLength}get byteMultipler(){return this.type===3?2:1}constructor(t,n){if(this.memory=t,n&&`firstBlock`in n)this.firstBlock=new g(t,n.firstBlock),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+1*Uint32Array.BYTES_PER_ELEMENT,2),this.pointerVector=new x(t,{firstBlock:{bufferPosition:this.firstBlock.bufferPosition,bufferByteOffset:this.firstBlock.bufferByteOffset+3*Uint32Array.BYTES_PER_ELEMENT}}),this.recycleVector=new x(t,{firstBlock:{bufferPosition:this.firstBlock.bufferPosition,bufferByteOffset:this.firstBlock.bufferByteOffset+S*Uint32Array.BYTES_PER_ELEMENT}});else{this.firstBlock=t.allocUI32(e.ALLOCATE_COUNT),this.uint16Array=new Uint16Array(this.firstBlock.data.buffer,this.firstBlock.bufferByteOffset+1*Uint32Array.BYTES_PER_ELEMENT,2);let r=n?.dataLength??1,i=n?.maxChunkSize??100;this.pointerVector=new x(t,{type:Uint32Array,firstBlock:{bufferPosition:this.firstBlock.bufferPosition,bufferByteOffset:this.firstBlock.bufferByteOffset+3*Uint32Array.BYTES_PER_ELEMENT}}),this.recycleVector=new x(t,{type:Uint32Array,firstBlock:{bufferPosition:this.firstBlock.bufferPosition,bufferByteOffset:this.firstBlock.bufferByteOffset+S*Uint32Array.BYTES_PER_ELEMENT},bufferLength:n?.recycleBufferLength});let a=n?.type??Uint32Array;a===Uint32Array?this.type=0:a===Int32Array?this.type=1:a===Float32Array?this.type=2:a===Float64Array&&(this.type=3),this.dataLength=r,this.maxChunkSize=i;let o=t.allocUI32(i*r*this.byteMultipler);this.pointerVector.push(o.pointer)}}at(e){let t=this.getFullDataBlock(e);return this.getDataBlock(t,e%this.maxChunkSize)}get(e,t=0){let n=this.dataLength;if(t>=n)throw Error(`${t} is out of dataLength bounds ${n}`);return this.getFullDataBlock(e)[e%this.maxChunkSize*n+t]}push(e){typeof e==`number`&&(e=[e]);let t=this.dataLength;if(e.length>t)throw Error(`Can't insert ${e.length} array into shared list of ${t} dataLength`);let n;n=this.recycleVector.length?this.recycleVector.popNumber():Atomics.add(this.firstBlock.data,0,1);let r=this.getFullDataBlock(n),i=n%this.maxChunkSize;return r.set(e,t*i),n}deleteIndex(e){this.recycleVector.push(e)}clear(){this.firstBlock.data[0]=0,this.recycleVector.clear()}*[Symbol.iterator](){let e={};for(let t of this.recycleVector)e[t[0]]=!0;let t=this.getFullDataBlock(0),n=0;for(let r=0;r<Atomics.load(this.firstBlock.data,0);r++)if(!e[r]){let e=Math.floor(r/this.maxChunkSize);e!==n&&(t=this.getFullDataBlock(r),n=e),yield this.getDataBlock(t,r%this.maxChunkSize)}}getFullDataBlock(e){let t=Math.floor(e/this.maxChunkSize),n=this.cachedFullDataBlock[t];if(n)return n;if(t>=this.pointerVector.length){let e=this.memory.allocUI32(this.maxChunkSize*this.dataLength*this.byteMultipler);this.pointerVector.push(e.pointer)}let r=new g(this.memory,m(this.pointerVector.get(t))),i;switch(this.type){case 1:i=new Int32Array(r.data.buffer,r.bufferByteOffset,this.dataLength*this.maxChunkSize);break;case 0:i=new Uint32Array(r.data.buffer,r.bufferByteOffset,this.dataLength*this.maxChunkSize);break;case 2:i=new Float32Array(r.data.buffer,r.bufferByteOffset,this.dataLength*this.maxChunkSize);break;case 3:i=new Float64Array(r.data.buffer,r.bufferByteOffset,this.dataLength*this.maxChunkSize);break;default:throw Error(`Unknown data block type ${this.type}`)}return this.cachedFullDataBlock[t]=i,i}getDataBlock(e,t){let n=t*this.dataLength;return e.subarray(n,n+this.dataLength)}free(){this.recycleVector.free();for(let e of this.pointerVector){let t=e[0];new g(this.memory,m(t)).free()}this.pointerVector.free(),this.firstBlock.free()}getSharedMemory(){return{firstBlock:this.firstBlock.getSharedMemory()}}});let C=new ArrayBuffer(4);new Uint32Array(C),new Uint16Array(C);let w=new ArrayBuffer(8);new BigUint64Array(w),new Uint16Array(w);let T=new ArrayBuffer(4);new Float32Array(T),new Int32Array(T);let E=new ArrayBuffer(8);new Float64Array(E),new BigInt64Array(E);function D(e,t){if(t.removed.length){let n=new Set(t.removed);e=e.filter(e=>!n.has(e.entityId))}if(t.added.length){let n=new Map;e.forEach((e,t)=>n.set(e.entityId,t));for(let r of t.added){let t=n.get(r.entityId);t===void 0?(n.set(r.entityId,e.length),e.push(r)):e[t]=r}}return e}function O(e,t){let n=[],r={};e.onmessage=function(i){let a=i.data;if(a.type===`init`)k(e,{type:`loaded`});else if(a.type===`run`){let i=performance.now(),o=[],s=[];n=D(n,a.entities);let c={};Object.entries(a.queries).forEach(([e,t])=>{let n=D(r[e]??[],t);r[e]=n,c[e]=n});let l={entityComponentChanged(e,t,n,r){o.push({entityId:e,event:`component-property-updated`,args:[t,n,r]})},entityDied(e){o.push({entityId:e,event:`death`,args:[]})},createEntity(e){s.push(e)}};t.preRun&&t.preRun(a.world,n,c,l),n.forEach(e=>{t(a.world,e.entityId,e.components,c,l)}),t.entityRemoved&&a.entities.removed.forEach(e=>{t.entityRemoved(a.world,e,l)}),k(e,{type:`run-complete`,runTime:performance.now()-i,events:o,created:s})}}}function k(e,t){e.postMessage(t)}var A=o(((e,t)=>{t.exports={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6}})),j=o(((e,t)=>{t.exports=function(e){if(!e||typeof e!=`object`||e.nodeType||e===e.window)return!1;try{if(e.constructor&&!{}.hasOwnProperty.call(e.constructor.prototype,`isPrototypeOf`))return!1}catch{return!1}return!0}})),M=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=j(),r=function(){var e,t,i,a,o,s,c=arguments[0]||{},l=1,u=arguments.length,d=!1;for(typeof c==`boolean`&&(d=c,c=arguments[1]||{},l=2),u===l&&(c=this,--l);l<u;l++)if((e=arguments[l])!=null)for(t in e)i=c[t],a=e[t],c!==a&&(d&&a&&(n(a)||(o=Array.isArray(a)))?(o?(o=!1,s=i&&Array.isArray(i)?i:[]):s=i&&n(i)?i:{},c[t]=r(d,s,a)):a!==void 0&&(c[t]=a));return c};t.exports=r})),N=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
function n(e){return!!e.get&&typeof e.get==`function`||!!e.set&&typeof e.set==`function`}function r(e,t,r){var i=r?e[t]:Object.getOwnPropertyDescriptor(e,t);return!r&&i.value&&typeof i.value==`object`&&(i=i.value),i&&n(i)?(i.enumerable===void 0&&(i.enumerable=!0),i.configurable===void 0&&(i.configurable=!0),i):!1}function i(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return n?(n.value&&typeof n.value==`object`&&(n=n.value),n.configurable===!1):!1}function a(e,t,n,a){for(var o in t)if(t.hasOwnProperty(o)){var c=r(t,o,n);if(c!==!1){if(i((a||e).prototype,o)){if(s.ignoreFinals)continue;throw Error(`cannot override final property '`+o+`', set Class.ignoreFinals = true to skip`)}Object.defineProperty(e.prototype,o,c)}else e.prototype[o]=t[o]}}function o(e,t){if(t){Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++)a(e,t[n].prototype||t[n])}}function s(e){e||={};var t,n;if(e.initialize){if(typeof e.initialize!=`function`)throw Error(`initialize must be a function`);t=e.initialize,delete e.initialize}else if(e.Extends){var r=e.Extends;t=function(){r.apply(this,arguments)}}else t=function(){};e.Extends?(t.prototype=Object.create(e.Extends.prototype),t.prototype.constructor=t,n=e.Extends,delete e.Extends):t.prototype.constructor=t;var i=null;return e.Mixins&&(i=e.Mixins,delete e.Mixins),o(t,i),a(t,e,!0,n),t}s.extend=a,s.mixin=o,s.ignoreFinals=!1,t.exports=s})),P=o(((e,t)=>{t.exports=function(e,t,n){return e.radius>0&&t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom?(e.x-t)*(e.x-t)+(e.y-n)*(e.y-n)<=e.radius*e.radius:!1}})),F=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=A();t.exports=new n({initialize:function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.type=r.POINT,this.x=e,this.y=t},setTo:function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this}})})),I=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t,r){return r===void 0&&(r=new n),r.x=e.x+e.radius*Math.cos(t),r.y=e.y+e.radius*Math.sin(t),r}})),L=o(((e,t)=>{t.exports=function(e,t,n){return Math.max(t,Math.min(n,e))}})),R=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=L();t.exports=function(e,t,r){return e=n(e,0,1),(r-t)*e+t}})),z=o(((e,t)=>{t.exports={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:-(2**53-1)||-9007199254740991,MAX_SAFE_INTEGER:2**53-1||9007199254740991}})),B=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=I(),r=R(),i=z(),a=F();t.exports=function(e,t,o){return o===void 0&&(o=new a),n(e,r(t,0,i.PI2),o)}})),V=o(((e,t)=>{t.exports=function(e){return 2*(Math.PI*e.radius)}})),ee=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=V(),r=I(),i=R(),a=z();t.exports=function(e,t,o,s){s===void 0&&(s=[]),!t&&o>0&&(t=n(e)/o);for(var c=0;c<t;c++){var l=i(c/t,0,a.PI2);s.push(r(e,l))}return s}})),H=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){t===void 0&&(t=new n);var r=2*Math.PI*Math.random(),i=Math.random()+Math.random(),a=i>1?2-i:i,o=a*Math.cos(r),s=a*Math.sin(r);return t.x=e.x+o*e.radius,t.y=e.y+s*e.radius,t}})),U=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=P(),i=B(),a=ee(),o=A(),s=H();t.exports=new n({initialize:function(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.type=o.CIRCLE,this.x=e,this.y=t,this._radius=n,this._diameter=n*2},contains:function(e,t){return r(this,e,t)},getPoint:function(e,t){return i(this,e,t)},getPoints:function(e,t,n){return a(this,e,t,n)},getRandomPoint:function(e){return s(this,e)},setTo:function(e,t,n){return this.x=e,this.y=t,this._radius=n,this._diameter=n*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(e,t){return t===void 0&&(t=e),this.x=e,this.y=t,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(e){this._radius=e,this._diameter=e*2}},diameter:{get:function(){return this._diameter},set:function(e){this._diameter=e,this._radius=e*.5}},left:{get:function(){return this.x-this._radius},set:function(e){this.x=e+this._radius}},right:{get:function(){return this.x+this._radius},set:function(e){this.x=e-this._radius}},top:{get:function(){return this.y-this._radius},set:function(e){this.y=e+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(e){this.y=e-this._radius}}})})),te=o(((e,t)=>{t.exports=function(e){return e.radius>0?Math.PI*e.radius*e.radius:0}})),ne=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=U();t.exports=function(e){return new n(e.x,e.y,e.radius)}})),re=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=P();t.exports=function(e,t){return n(e,t.x,t.y)}})),ie=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=P();t.exports=function(e,t){return n(e,t.x,t.y)&&n(e,t.right,t.y)&&n(e,t.x,t.bottom)&&n(e,t.right,t.bottom)}})),ae=o(((e,t)=>{t.exports=function(e,t){return t.setTo(e.x,e.y,e.radius)}})),oe=o(((e,t)=>{t.exports=function(e,t){return e.x===t.x&&e.y===t.y&&e.radius===t.radius}})),W=o(((e,t)=>{t.exports=function(e,t,n){return e.width<=0||e.height<=0?!1:e.x<=t&&e.x+e.width>=t&&e.y<=n&&e.y+e.height>=n}})),G=o(((e,t)=>{t.exports=function(e){return 2*(e.width+e.height)}})),se=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=G(),r=F();t.exports=function(e,t,i){if(i===void 0&&(i=new r),t<=0||t>=1)return i.x=e.x,i.y=e.y,i;var a=n(e)*t;return t>.5?(a-=e.width+e.height,a<=e.width?(i.x=e.right-a,i.y=e.bottom):(i.x=e.x,i.y=e.bottom-(a-e.width))):a<=e.width?(i.x=e.x+a,i.y=e.y):(i.x=e.right,i.y=e.y+(a-e.width)),i}})),K=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=se(),r=G();t.exports=function(e,t,i,a){a===void 0&&(a=[]),!t&&i>0&&(t=r(e)/i);for(var o=0;o<t;o++){var s=o/t;a.push(n(e,s))}return a}})),ce=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t,r){return r===void 0&&(r=new n),r.x=e.x1+(e.x2-e.x1)*t,r.y=e.y1+(e.y2-e.y1)*t,r}})),q=o(((e,t)=>{t.exports=function(e){return Math.sqrt((e.x2-e.x1)*(e.x2-e.x1)+(e.y2-e.y1)*(e.y2-e.y1))}})),J=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=q(),r=F();t.exports=function(e,t,i,a){a===void 0&&(a=[]),!t&&i>0&&(t=n(e)/i);for(var o=e.x1,s=e.y1,c=e.x2,l=e.y2,u=0;u<t;u++){var d=u/t,f=o+(c-o)*d,p=s+(l-s)*d;a.push(new r(f,p))}return a}})),Y=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){t===void 0&&(t=new n);var r=Math.random();return t.x=e.x1+r*(e.x2-e.x1),t.y=e.y1+r*(e.y2-e.y1),t}})),le=o(((e,t)=>{t.exports=function(e,t,n){return n===void 0&&(n=1e-4),Math.abs(e-t)<n}})),X=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=le(),i=new n({initialize:function(e,t){this.x=0,this.y=0,typeof e==`object`?(this.x=e.x||0,this.y=e.y||0):(t===void 0&&(t=e),this.x=e||0,this.y=t||0)},clone:function(){return new i(this.x,this.y)},copy:function(e){return this.x=e.x||0,this.y=e.y||0,this},setFromObject:function(e){return this.x=e.x||0,this.y=e.y||0,this},set:function(e,t){return t===void 0&&(t=e),this.x=e,this.y=t,this},setTo:function(e,t){return this.set(e,t)},setToPolar:function(e,t){return t??=1,this.x=Math.cos(e)*t,this.y=Math.sin(e)*t,this},equals:function(e){return this.x===e.x&&this.y===e.y},fuzzyEquals:function(e,t){return r(this.x,e.x,t)&&r(this.y,e.y,t)},angle:function(){var e=Math.atan2(this.y,this.x);return e<0&&(e+=2*Math.PI),e},setAngle:function(e){return this.setToPolar(e,this.length())},add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.x-=e.x,this.y-=e.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},scale:function(e){return isFinite(e)?(this.x*=e,this.y*=e):(this.x=0,this.y=0),this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(e){var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},distanceSq:function(e){var t=e.x-this.x,n=e.y-this.y;return t*t+n*n},length:function(){var e=this.x,t=this.y;return Math.sqrt(e*e+t*t)},setLength:function(e){return this.normalize().scale(e)},lengthSq:function(){var e=this.x,t=this.y;return e*e+t*t},normalize:function(){var e=this.x,t=this.y,n=e*e+t*t;return n>0&&(n=1/Math.sqrt(n),this.x=e*n,this.y=t*n),this},normalizeRightHand:function(){var e=this.x;return this.x=this.y*-1,this.y=e,this},normalizeLeftHand:function(){var e=this.x;return this.x=this.y,this.y=e*-1,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lerp:function(e,t){t===void 0&&(t=0);var n=this.x,r=this.y;return this.x=n+t*(e.x-n),this.y=r+t*(e.y-r),this},transformMat3:function(e){var t=this.x,n=this.y,r=e.val;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this},transformMat4:function(e){var t=this.x,n=this.y,r=e.val;return this.x=r[0]*t+r[4]*n+r[12],this.y=r[1]*t+r[5]*n+r[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(e){var t=this.length();return t&&t>e&&this.scale(e/t),this},reflect:function(e){return e=e.clone().normalize(),this.subtract(e.scale(2*this.dot(e)))},mirror:function(e){return this.reflect(e).negate()},rotate:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t*this.x-n*this.y,n*this.x+t*this.y)},project:function(e){var t=this.dot(e)/e.dot(e);return this.copy(e).scale(t)}});i.ZERO=new i,i.RIGHT=new i(1,0),i.LEFT=new i(-1,0),i.UP=new i(0,-1),i.DOWN=new i(0,1),i.ONE=new i(1,1),t.exports=i})),Z=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=ce(),i=J(),a=A(),o=Y(),s=X();t.exports=new n({initialize:function(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),this.type=a.LINE,this.x1=e,this.y1=t,this.x2=n,this.y2=r},getPoint:function(e,t){return r(this,e,t)},getPoints:function(e,t,n){return i(this,e,t,n)},getRandomPoint:function(e){return o(this,e)},setTo:function(e,t,n,r){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),this.x1=e,this.y1=t,this.x2=n,this.y2=r,this},setFromObjects:function(e,t){return this.x1=e.x,this.y1=e.y,this.x2=t.x,this.y2=t.y,this},getPointA:function(e){return e===void 0&&(e=new s),e.set(this.x1,this.y1),e},getPointB:function(e){return e===void 0&&(e=new s),e.set(this.x2,this.y2),e},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(e){this.x1<=this.x2?this.x1=e:this.x2=e}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(e){this.x1>this.x2?this.x1=e:this.x2=e}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(e){this.y1<=this.y2?this.y1=e:this.y2=e}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(e){this.y1>this.y2?this.y1=e:this.y2=e}}})})),ue=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=e.x+Math.random()*e.width,t.y=e.y+Math.random()*e.height,t}})),Q=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=W(),i=se(),a=K(),o=A(),s=Z(),c=ue();t.exports=new n({initialize:function(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),this.type=o.RECTANGLE,this.x=e,this.y=t,this.width=n,this.height=r},contains:function(e,t){return r(this,e,t)},getPoint:function(e,t){return i(this,e,t)},getPoints:function(e,t,n){return a(this,e,t,n)},getRandomPoint:function(e){return c(this,e)},setTo:function(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(e,t){return t===void 0&&(t=e),this.x=e,this.y=t,this},setSize:function(e,t){return t===void 0&&(t=e),this.width=e,this.height=t,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(e){return e===void 0&&(e=new s),e.setTo(this.x,this.y,this.right,this.y),e},getLineB:function(e){return e===void 0&&(e=new s),e.setTo(this.right,this.y,this.right,this.bottom),e},getLineC:function(e){return e===void 0&&(e=new s),e.setTo(this.right,this.bottom,this.x,this.bottom),e},getLineD:function(e){return e===void 0&&(e=new s),e.setTo(this.x,this.bottom,this.x,this.y),e},left:{get:function(){return this.x},set:function(e){e>=this.right?this.width=0:this.width=this.right-e,this.x=e}},right:{get:function(){return this.x+this.width},set:function(e){e<=this.x?this.width=0:this.width=e-this.x}},top:{get:function(){return this.y},set:function(e){e>=this.bottom?this.height=0:this.height=this.bottom-e,this.y=e}},bottom:{get:function(){return this.y+this.height},set:function(e){e<=this.y?this.height=0:this.height=e-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(e){this.x=e-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(e){this.y=e-this.height/2}}})})),de=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=e.left,t.y=e.top,t.width=e.diameter,t.height=e.diameter,t}})),fe=o(((e,t)=>{t.exports=function(e,t,n){return e.x+=t,e.y+=n,e}})),pe=o(((e,t)=>{t.exports=function(e,t){return e.x+=t.x,e.y+=t.y,e}})),me=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=U();n.Area=te(),n.Circumference=V(),n.CircumferencePoint=I(),n.Clone=ne(),n.Contains=P(),n.ContainsPoint=re(),n.ContainsRect=ie(),n.CopyFrom=ae(),n.Equals=oe(),n.GetBounds=de(),n.GetPoint=B(),n.GetPoints=ee(),n.Offset=fe(),n.OffsetPoint=pe(),n.Random=H(),t.exports=n})),he=o(((e,t)=>{t.exports=function(e,t,n){if(e.width<=0||e.height<=0)return!1;var r=(t-e.x)/e.width,i=(n-e.y)/e.height;return r*=r,i*=i,r+i<.25}})),ge=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t,r){r===void 0&&(r=new n);var i=e.width/2,a=e.height/2;return r.x=e.x+i*Math.cos(t),r.y=e.y+a*Math.sin(t),r}})),_e=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ge(),r=R(),i=z(),a=F();t.exports=function(e,t,o){return o===void 0&&(o=new a),n(e,r(t,0,i.PI2),o)}})),ve=o(((e,t)=>{t.exports=function(e){var t=e.width/2,n=e.height/2,r=(t-n)**2/(t+n)**2;return Math.PI*(t+n)*(1+3*r/(10+Math.sqrt(4-3*r)))}})),ye=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ve(),r=ge(),i=R(),a=z();t.exports=function(e,t,o,s){s===void 0&&(s=[]),!t&&o>0&&(t=n(e)/o);for(var c=0;c<t;c++){var l=i(c/t,0,a.PI2);s.push(r(e,l))}return s}})),be=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){t===void 0&&(t=new n);var r=Math.random()*Math.PI*2,i=Math.sqrt(Math.random());return t.x=e.x+i*Math.cos(r)*e.width/2,t.y=e.y+i*Math.sin(r)*e.height/2,t}})),xe=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=he(),i=_e(),a=ye(),o=A(),s=be();t.exports=new n({initialize:function(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),this.type=o.ELLIPSE,this.x=e,this.y=t,this.width=n,this.height=r},contains:function(e,t){return r(this,e,t)},getPoint:function(e,t){return i(this,e,t)},getPoints:function(e,t,n){return a(this,e,t,n)},getRandomPoint:function(e){return s(this,e)},setTo:function(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(e,t){return t===void 0&&(t=e),this.x=e,this.y=t,this},setSize:function(e,t){return t===void 0&&(t=e),this.width=e,this.height=t,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(e){this.x=e+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(e){this.x=e-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(e){this.y=e+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(e){this.y=e-this.height/2}}})})),Se=o(((e,t)=>{t.exports=function(e){return e.isEmpty()?0:e.getMajorRadius()*e.getMinorRadius()*Math.PI}})),Ce=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=xe();t.exports=function(e){return new n(e.x,e.y,e.width,e.height)}})),we=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=he();t.exports=function(e,t){return n(e,t.x,t.y)}})),Te=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=he();t.exports=function(e,t){return n(e,t.x,t.y)&&n(e,t.right,t.y)&&n(e,t.x,t.bottom)&&n(e,t.right,t.bottom)}})),Ee=o(((e,t)=>{t.exports=function(e,t){return t.setTo(e.x,e.y,e.width,e.height)}})),De=o(((e,t)=>{t.exports=function(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}})),Oe=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=e.left,t.y=e.top,t.width=e.width,t.height=e.height,t}})),ke=o(((e,t)=>{t.exports=function(e,t,n){return e.x+=t,e.y+=n,e}})),Ae=o(((e,t)=>{t.exports=function(e,t){return e.x+=t.x,e.y+=t.y,e}})),je=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=xe();n.Area=Se(),n.Circumference=ve(),n.CircumferencePoint=ge(),n.Clone=Ce(),n.Contains=he(),n.ContainsPoint=we(),n.ContainsRect=Te(),n.CopyFrom=Ee(),n.Equals=De(),n.GetBounds=Oe(),n.GetPoint=_e(),n.GetPoints=ye(),n.Offset=ke(),n.OffsetPoint=Ae(),n.Random=be(),t.exports=n})),Me=o(((e,t)=>{t.exports=function(e,t,n,r){var i=e-n,a=t-r;return Math.sqrt(i*i+a*a)}})),Ne=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Me();t.exports=function(e,t){return n(e.x,e.y,t.x,t.y)<=e.radius+t.radius}})),Pe=o(((e,t)=>{t.exports=function(e,t){var n=t.width/2,r=t.height/2,i=Math.abs(e.x-t.x-n),a=Math.abs(e.y-t.y-r),o=n+e.radius,s=r+e.radius;if(i>o||a>s)return!1;if(i<=n||a<=r)return!0;var c=i-n,l=a-r,u=c*c,d=l*l,f=e.radius*e.radius;return u+d<=f}})),Fe=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=Ne();t.exports=function(e,t,i){if(i===void 0&&(i=[]),r(e,t)){var a=e.x,o=e.y,s=e.radius,c=t.x,l=t.y,u=t.radius,d,f,p,m,h;if(o===l)h=(u*u-s*s-c*c+a*a)/(2*(a-c)),d=1,f=-2*l,p=c*c+h*h-2*c*h+l*l-u*u,m=f*f-4*d*p,m===0?i.push(new n(h,-f/(2*d))):m>0&&(i.push(new n(h,(-f+Math.sqrt(m))/(2*d))),i.push(new n(h,(-f-Math.sqrt(m))/(2*d))));else{var g=(a-c)/(o-l),_=(u*u-s*s-c*c+a*a-l*l+o*o)/(2*(o-l));d=g*g+1,f=2*o*g-2*_*g-2*a,p=a*a+o*o+_*_-s*s-2*o*_,m=f*f-4*d*p,m===0?(h=-f/(2*d),i.push(new n(h,_-h*g))):m>0&&(h=(-f+Math.sqrt(m))/(2*d),i.push(new n(h,_-h*g)),h=(-f-Math.sqrt(m))/(2*d),i.push(new n(h,_-h*g)))}}return i}})),Ie=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=P(),r=new(F());t.exports=function(e,t,i){if(i===void 0&&(i=r),n(t,e.x1,e.y1))return i.x=e.x1,i.y=e.y1,!0;if(n(t,e.x2,e.y2))return i.x=e.x2,i.y=e.y2,!0;var a=e.x2-e.x1,o=e.y2-e.y1,s=t.x-e.x1,c=t.y-e.y1,l=a*a+o*o,u=a,d=o;if(l>0){var f=(s*a+c*o)/l;u*=f,d*=f}return i.x=e.x1+u,i.y=e.y1+d,u*u+d*d<=l&&u*a+d*o>=0&&n(t,i.x,i.y)}})),Le=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=Ie();t.exports=function(e,t,i){if(i===void 0&&(i=[]),r(e,t)){var a=e.x1,o=e.y1,s=e.x2,c=e.y2,l=t.x,u=t.y,d=t.radius,f=s-a,p=c-o,m=a-l,h=o-u,g=f*f+p*p,_=2*(f*m+p*h),v=m*m+h*h-d*d,y=_*_-4*g*v,b,x;if(y===0){var S=-_/(2*g);b=a+S*f,x=o+S*p,S>=0&&S<=1&&i.push(new n(b,x))}else if(y>0){var C=(-_-Math.sqrt(y))/(2*g);b=a+C*f,x=o+C*p,C>=0&&C<=1&&i.push(new n(b,x));var w=(-_+Math.sqrt(y))/(2*g);b=a+w*f,x=o+w*p,w>=0&&w<=1&&i.push(new n(b,x))}}return i}})),Re=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Le(),r=Pe();t.exports=function(e,t,i){if(i===void 0&&(i=[]),r(e,t)){var a=t.getLineA(),o=t.getLineB(),s=t.getLineC(),c=t.getLineD();n(a,e,i),n(o,e,i),n(s,e,i),n(c,e,i)}return i}})),$=o(((e,t)=>{var n=new(N())({initialize:function(e,t,n){this.x=0,this.y=0,this.z=0,typeof e==`object`?(this.x=e.x||0,this.y=e.y||0,this.z=e.z||0):(this.x=e||0,this.y=t||0,this.z=n||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clone:function(){return new n(this.x,this.y,this.z)},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},crossVectors:function(e,t){var n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this},equals:function(e){return this.x===e.x&&this.y===e.y&&this.z===e.z},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z||0,this},set:function(e,t,n){return typeof e==`object`?(this.x=e.x||0,this.y=e.y||0,this.z=e.z||0):(this.x=e||0,this.y=t||0,this.z=n||0),this},setFromMatrixPosition:function(e){return this.fromArray(e.val,12)},setFromMatrixColumn:function(e,t){return this.fromArray(e.val,t*4)},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},add:function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z||0,this},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addScale:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t||0,this},subtract:function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z||0,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z||1,this},scale:function(e){return isFinite(e)?(this.x*=e,this.y*=e,this.z*=e):(this.x=0,this.y=0,this.z=0),this},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(e){var t=e.x-this.x,n=e.y-this.y,r=e.z-this.z||0;return Math.sqrt(t*t+n*n+r*r)},distanceSq:function(e){var t=e.x-this.x,n=e.y-this.y,r=e.z-this.z||0;return t*t+n*n+r*r},length:function(){var e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)},lengthSq:function(){var e=this.x,t=this.y,n=this.z;return e*e+t*t+n*n},normalize:function(){var e=this.x,t=this.y,n=this.z,r=e*e+t*t+n*n;return r>0&&(r=1/Math.sqrt(r),this.x=e*r,this.y=t*r,this.z=n*r),this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},cross:function(e){var t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z;return this.x=n*o-r*a,this.y=r*i-t*o,this.z=t*a-n*i,this},lerp:function(e,t){t===void 0&&(t=0);var n=this.x,r=this.y,i=this.z;return this.x=n+t*(e.x-n),this.y=r+t*(e.y-r),this.z=i+t*(e.z-i),this},applyMatrix3:function(e){var t=this.x,n=this.y,r=this.z,i=e.val;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this},applyMatrix4:function(e){var t=this.x,n=this.y,r=this.z,i=e.val,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this},transformMat3:function(e){var t=this.x,n=this.y,r=this.z,i=e.val;return this.x=t*i[0]+n*i[3]+r*i[6],this.y=t*i[1]+n*i[4]+r*i[7],this.z=t*i[2]+n*i[5]+r*i[8],this},transformMat4:function(e){var t=this.x,n=this.y,r=this.z,i=e.val;return this.x=i[0]*t+i[4]*n+i[8]*r+i[12],this.y=i[1]*t+i[5]*n+i[9]*r+i[13],this.z=i[2]*t+i[6]*n+i[10]*r+i[14],this},transformCoordinates:function(e){var t=this.x,n=this.y,r=this.z,i=e.val,a=t*i[0]+n*i[4]+r*i[8]+i[12],o=t*i[1]+n*i[5]+r*i[9]+i[13],s=t*i[2]+n*i[6]+r*i[10]+i[14],c=t*i[3]+n*i[7]+r*i[11]+i[15];return this.x=a/c,this.y=o/c,this.z=s/c,this},transformQuat:function(e){var t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=s*t+a*r-o*n,l=s*n+o*t-i*r,u=s*r+i*n-a*t,d=-i*t-a*n-o*r;return this.x=c*s+d*-i+l*-o-u*-a,this.y=l*s+d*-a+u*-i-c*-o,this.z=u*s+d*-o+c*-a-l*-i,this},project:function(e){var t=this.x,n=this.y,r=this.z,i=e.val,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15],x=1/(t*c+n*f+r*g+b);return this.x=(t*a+n*l+r*p+_)*x,this.y=(t*o+n*u+r*m+v)*x,this.z=(t*s+n*d+r*h+y)*x,this},projectViewMatrix:function(e,t){return this.applyMatrix4(e).applyMatrix4(t)},unprojectViewMatrix:function(e,t){return this.applyMatrix4(e).applyMatrix4(t)},unproject:function(e,t){var n=e.x,r=e.y,i=e.z,a=e.w,o=this.x-n,s=a-this.y-1-r,c=this.z;return this.x=2*o/i-1,this.y=2*s/a-1,this.z=2*c-1,this.project(t)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});n.ZERO=new n,n.RIGHT=new n(1,0,0),n.LEFT=new n(-1,0,0),n.UP=new n(0,-1,0),n.DOWN=new n(0,1,0),n.FORWARD=new n(0,0,1),n.BACK=new n(0,0,-1),n.ONE=new n(1,1,1),t.exports=n})),ze=o(((e,t)=>{
/**
* @author       Richard Davey
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=$();t.exports=function(e,t,r,i){r===void 0&&(r=!1);var a=e.x1,o=e.y1,s=e.x2,c=e.y2,l=t.x1,u=t.y1,d=t.x2,f=t.y2,p=s-a,m=c-o,h=d-l,g=f-u,_=p*g-m*h;if(_===0)return null;var v,y,b;if(r){if(v=(p*(u-o)+m*(a-l))/(h*m-g*p),p!==0)y=(l+h*v-a)/p;else if(m!==0)y=(u+g*v-o)/m;else return null;if(y<0||v<0||v>1)return null;b=y}else{if(v=((l-a)*g-(u-o)*h)/_,y=((o-u)*p-(a-l)*m)/_,v<0||v>1||y<0||y>1)return null;b=v}return i===void 0&&(i=new n),i.set(a+p*b,o+m*b,b)}})),Be=o(((e,t)=>{
/**
* @author       Richard Davey
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ze(),r=Z(),i=$(),a=new r,o=new i;t.exports=function(e,t,r,s){r===void 0&&(r=!1),s===void 0&&(s=new i);var c=!1;s.set(),o.set();for(var l=t[t.length-1],u=0;u<t.length;u++){var d=t[u];a.setTo(l.x,l.y,d.x,d.y),l=d,n(e,a,r,o)&&(!c||o.z<s.z)&&(s.copy(o),c=!0)}return c?s:null}})),Ve=o(((e,t)=>{var n=new(N())({initialize:function(e,t,n,r){this.x=0,this.y=0,this.z=0,this.w=0,typeof e==`object`?(this.x=e.x||0,this.y=e.y||0,this.z=e.z||0,this.w=e.w||0):(this.x=e||0,this.y=t||0,this.z=n||0,this.w=r||0)},clone:function(){return new n(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z||0,this.w=e.w||0,this},equals:function(e){return this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},set:function(e,t,n,r){return typeof e==`object`?(this.x=e.x||0,this.y=e.y||0,this.z=e.z||0,this.w=e.w||0):(this.x=e||0,this.y=t||0,this.z=n||0,this.w=r||0),this},add:function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z||0,this.w+=e.w||0,this},subtract:function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z||0,this.w-=e.w||0,this},scale:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},length:function(){var e=this.x,t=this.y,n=this.z,r=this.w;return Math.sqrt(e*e+t*t+n*n+r*r)},lengthSq:function(){var e=this.x,t=this.y,n=this.z,r=this.w;return e*e+t*t+n*n+r*r},normalize:function(){var e=this.x,t=this.y,n=this.z,r=this.w,i=e*e+t*t+n*n+r*r;return i>0&&(i=1/Math.sqrt(i),this.x=e*i,this.y=t*i,this.z=n*i,this.w=r*i),this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lerp:function(e,t){t===void 0&&(t=0);var n=this.x,r=this.y,i=this.z,a=this.w;return this.x=n+t*(e.x-n),this.y=r+t*(e.y-r),this.z=i+t*(e.z-i),this.w=a+t*(e.w-a),this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z||1,this.w*=e.w||1,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z||1,this.w/=e.w||1,this},distance:function(e){var t=e.x-this.x,n=e.y-this.y,r=e.z-this.z||0,i=e.w-this.w||0;return Math.sqrt(t*t+n*n+r*r+i*i)},distanceSq:function(e){var t=e.x-this.x,n=e.y-this.y,r=e.z-this.z||0,i=e.w-this.w||0;return t*t+n*n+r*r+i*i},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(e){var t=this.x,n=this.y,r=this.z,i=this.w,a=e.val;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this},transformQuat:function(e){var t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=s*t+a*r-o*n,l=s*n+o*t-i*r,u=s*r+i*n-a*t,d=-i*t-a*n-o*r;return this.x=c*s+d*-i+l*-o-u*-a,this.y=l*s+d*-a+u*-i-c*-o,this.z=u*s+d*-o+c*-a-l*-i,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});n.prototype.sub=n.prototype.subtract,n.prototype.mul=n.prototype.multiply,n.prototype.div=n.prototype.divide,n.prototype.dist=n.prototype.distance,n.prototype.distSq=n.prototype.distanceSq,n.prototype.len=n.prototype.length,n.prototype.lenSq=n.prototype.lengthSq,t.exports=n})),He=o(((e,t)=>{
/**
* @author       Richard Davey
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=$(),r=Ve(),i=Be(),a=new n;t.exports=function(e,t,n,o){o===void 0&&(o=new r),Array.isArray(t)||(t=[t]);var s=!1;o.set(),a.set();for(var c=0;c<t.length;c++)i(e,t[c].points,n,a)&&(!s||a.z<o.z)&&(o.set(a.x,a.y,a.z,c),s=!0);return s?o:null}})),Ue=o(((e,t)=>{t.exports=function(e,t,n){var r=e.x1,i=e.y1,a=e.x2,o=e.y2,s=t.x1,c=t.y1,l=t.x2,u=t.y2;if(r===a&&i===o||s===l&&c===u)return!1;var d=(u-c)*(a-r)-(l-s)*(o-i);if(d===0)return!1;var f=((l-s)*(i-c)-(u-c)*(r-s))/d,p=((a-r)*(i-c)-(o-i)*(r-s))/d;return f<0||f>1||p<0||p>1?!1:(n&&(n.x=r+f*(a-r),n.y=i+f*(o-i)),!0)}})),We=o(((e,t)=>{t.exports=function(e,t){var n=e.x1,r=e.y1,i=e.x2,a=e.y2,o=t.x,s=t.y,c=t.right,l=t.bottom,u=0;if(n>=o&&n<=c&&r>=s&&r<=l||i>=o&&i<=c&&a>=s&&a<=l)return!0;if(n<o&&i>=o){if(u=r+(a-r)*(o-n)/(i-n),u>s&&u<=l)return!0}else if(n>c&&i<=c&&(u=r+(a-r)*(c-n)/(i-n),u>=s&&u<=l))return!0;if(r<s&&a>=s){if(u=n+(i-n)*(s-r)/(a-r),u>=o&&u<=c)return!0}else if(r>l&&a<=l&&(u=n+(i-n)*(l-r)/(a-r),u>=o&&u<=c))return!0;return!1}})),Ge=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=Ue(),i=We();t.exports=function(e,t,a){if(a===void 0&&(a=[]),i(e,t))for(var o=t.getLineA(),s=t.getLineB(),c=t.getLineC(),l=t.getLineD(),u=[new n,new n,new n,new n],d=[r(o,e,u[0]),r(s,e,u[1]),r(c,e,u[2]),r(l,e,u[3])],f=0;f<4;f++)d[f]&&a.push(u[f]);return a}})),Ke=o(((e,t)=>{
/**
* @author       Richard Davey
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ve(),r=He(),i=new(Z());function a(e,t,a,o,s){var c=Math.cos(e),l=Math.sin(e);i.setTo(t,a,t+c,a+l);var u=r(i,o,!0);u&&s.push(new n(u.x,u.y,e,u.w))}function o(e,t){return e.z-t.z}t.exports=function(e,t,n){Array.isArray(n)||(n=[n]);for(var r=[],i=[],s=0;s<n.length;s++)for(var c=n[s].points,l=0;l<c.length;l++){var u=Math.atan2(c[l].y-t,c[l].x-e);i.indexOf(u)===-1&&(a(u,e,t,n,r),a(u-1e-5,e,t,n,r),a(u+1e-5,e,t,n,r),i.push(u))}return r.sort(o)}})),qe=o(((e,t)=>{t.exports=function(e,t){return e.width<=0||e.height<=0||t.width<=0||t.height<=0?!1:!(e.right<t.x||e.bottom<t.y||e.x>t.right||e.y>t.bottom)}})),Je=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q(),r=qe();t.exports=function(e,t,i){return i===void 0&&(i=new n),r(e,t)&&(i.x=Math.max(e.x,t.x),i.y=Math.max(e.y,t.y),i.width=Math.min(e.right,t.right)-i.x,i.height=Math.min(e.bottom,t.bottom)-i.y),i}})),Ye=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ge(),r=qe();t.exports=function(e,t,i){if(i===void 0&&(i=[]),r(e,t)){var a=e.getLineA(),o=e.getLineB(),s=e.getLineC(),c=e.getLineD();n(a,t,i),n(o,t,i),n(s,t,i),n(c,t,i)}return i}})),Xe=o(((e,t)=>{t.exports=function(e,t,n,r){n===void 0&&(n=!1),r===void 0&&(r=[]);for(var i=e.x3-e.x1,a=e.y3-e.y1,o=e.x2-e.x1,s=e.y2-e.y1,c=i*i+a*a,l=i*o+a*s,u=o*o+s*s,d=c*u-l*l,f=d===0?0:1/d,p,m,h,g,_,v,y=e.x1,b=e.y1,x=0;x<t.length&&(h=t[x].x-y,g=t[x].y-b,_=i*h+a*g,v=o*h+s*g,p=(u*_-l*v)*f,m=(c*v-l*_)*f,!(p>=0&&m>=0&&p+m<1&&(r.push({x:t[x].x,y:t[x].y}),n)));x++);return r}})),Ze=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=[]),t.push({x:e.x,y:e.y}),t.push({x:e.right,y:e.y}),t.push({x:e.right,y:e.bottom}),t.push({x:e.x,y:e.bottom}),t}})),Qe=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ue(),r=W(),i=Xe(),a=Ze();t.exports=function(e,t){if(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)return!1;var o=t.getLineA(),s=t.getLineB(),c=t.getLineC();if(r(e,o.x1,o.y1)||r(e,o.x2,o.y2)||r(e,s.x1,s.y1)||r(e,s.x2,s.y2)||r(e,c.x1,c.y1)||r(e,c.x2,c.y2))return!0;var l=e.getLineA(),u=e.getLineB(),d=e.getLineC(),f=e.getLineD();return n(o,l)||n(o,u)||n(o,d)||n(o,f)||n(s,l)||n(s,u)||n(s,d)||n(s,f)||n(c,l)||n(c,u)||n(c,d)||n(c,f)?!0:i(t,a(e),!0).length>0}})),$e=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Qe(),r=Ge();t.exports=function(e,t,i){if(i===void 0&&(i=[]),n(e,t)){var a=t.getLineA(),o=t.getLineB(),s=t.getLineC();r(a,e,i),r(o,e,i),r(s,e,i)}return i}})),et=o(((e,t)=>{t.exports=function(e,t,n){var r=e.x3-e.x1,i=e.y3-e.y1,a=e.x2-e.x1,o=e.y2-e.y1,s=t-e.x1,c=n-e.y1,l=r*r+i*i,u=r*a+i*o,d=r*s+i*c,f=a*a+o*o,p=a*s+o*c,m=l*f-u*u,h=m===0?0:1/m,g=(f*d-u*p)*h,_=(l*p-u*d)*h;return g>=0&&_>=0&&g+_<1}})),tt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ie(),r=et();t.exports=function(e,t){return e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top?!1:!!(r(e,t.x,t.y)||n(e.getLineA(),t)||n(e.getLineB(),t)||n(e.getLineC(),t))}})),nt=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Le(),r=tt();t.exports=function(e,t,i){if(i===void 0&&(i=[]),r(e,t)){var a=e.getLineA(),o=e.getLineB(),s=e.getLineC();n(a,t,i),n(o,t,i),n(s,t,i)}return i}})),rt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ue();t.exports=function(e,t){return!!(e.contains(t.x1,t.y1)||e.contains(t.x2,t.y2)||n(e.getLineA(),t)||n(e.getLineB(),t)||n(e.getLineC(),t))}})),it=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=rt(),i=Ue();t.exports=function(e,t,a){if(a===void 0&&(a=[]),r(e,t))for(var o=e.getLineA(),s=e.getLineB(),c=e.getLineC(),l=[new n,new n,new n],u=[i(o,t,l[0]),i(s,t,l[1]),i(c,t,l[2])],d=0;d<3;d++)u[d]&&a.push(l[d]);return a}})),at=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=[]),t.push({x:e.x1,y:e.y1}),t.push({x:e.x2,y:e.y2}),t.push({x:e.x3,y:e.y3}),t}})),ot=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Xe(),r=at(),i=Ue();t.exports=function(e,t){if(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)return!1;var a=e.getLineA(),o=e.getLineB(),s=e.getLineC(),c=t.getLineA(),l=t.getLineB(),u=t.getLineC();if(i(a,c)||i(a,l)||i(a,u)||i(o,c)||i(o,l)||i(o,u)||i(s,c)||i(s,l)||i(s,u))return!0;var d=r(e),f=n(t,d,!0);return f.length>0||(d=r(t),f=n(e,d,!0),f.length>0)}})),st=o(((e,t)=>{
/**
* @author       Florian Vazelle
* @author       Geoffrey Glaive
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ot(),r=it();t.exports=function(e,t,i){if(i===void 0&&(i=[]),n(e,t)){var a=t.getLineA(),o=t.getLineB(),s=t.getLineC();r(e,a,i),r(e,o,i),r(e,s,i)}return i}})),ct=o(((e,t)=>{t.exports=function(e,t,n){n===void 0&&(n=1);var r=t.x1,i=t.y1,a=t.x2,o=t.y2,s=e.x,c=e.y,l=(a-r)*(a-r)+(o-i)*(o-i);if(l===0)return!1;var u=((s-r)*(a-r)+(c-i)*(o-i))/l;if(u<0)return Math.sqrt((r-s)*(r-s)+(i-c)*(i-c))<=n;if(u>=0&&u<=1){var d=((i-c)*(a-r)-(r-s)*(o-i))/l;return Math.abs(d)*Math.sqrt(l)<=n}else return Math.sqrt((a-s)*(a-s)+(o-c)*(o-c))<=n}})),lt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ct();t.exports=function(e,t){if(!n(e,t))return!1;var r=Math.min(t.x1,t.x2),i=Math.max(t.x1,t.x2),a=Math.min(t.y1,t.y2),o=Math.max(t.y1,t.y2);return e.x>=r&&e.x<=i&&e.y>=a&&e.y<=o}})),ut=o(((e,t)=>{t.exports=function(e,t,n,r,i,a){return a===void 0&&(a=0),!(t>e.right+a||n<e.left-a||r>e.bottom+a||i<e.top-a)}})),dt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={CircleToCircle:Ne(),CircleToRectangle:Pe(),GetCircleToCircle:Fe(),GetCircleToRectangle:Re(),GetLineToCircle:Le(),GetLineToLine:ze(),GetLineToPoints:Be(),GetLineToPolygon:He(),GetLineToRectangle:Ge(),GetRaysFromPointToPolygon:Ke(),GetRectangleIntersection:Je(),GetRectangleToRectangle:Ye(),GetRectangleToTriangle:$e(),GetTriangleToCircle:nt(),GetTriangleToLine:it(),GetTriangleToTriangle:st(),LineToCircle:Ie(),LineToLine:Ue(),LineToRectangle:We(),PointToLine:ct(),PointToLineSegment:lt(),RectangleToRectangle:qe(),RectangleToTriangle:Qe(),RectangleToValues:ut(),TriangleToCircle:tt(),TriangleToLine:rt(),TriangleToTriangle:ot()}})),ft=o(((e,t)=>{t.exports=function(e){return Math.atan2(e.y2-e.y1,e.x2-e.x1)}})),pt=o(((e,t)=>{t.exports=function(e,t,n){t===void 0&&(t=1),n===void 0&&(n=[]);var r=Math.round(e.x1),i=Math.round(e.y1),a=Math.round(e.x2),o=Math.round(e.y2),s=Math.abs(a-r),c=Math.abs(o-i),l=r<a?1:-1,u=i<o?1:-1,d=s-c;n.push({x:r,y:i});for(var f=1;!(r===a&&i===o);){var p=d<<1;p>-c&&(d-=c,r+=l),p<s&&(d+=s,i+=u),f%t===0&&n.push({x:r,y:i}),f++}return n}})),mt=o(((e,t)=>{t.exports=function(e,t,n){var r=t-(e.x1+e.x2)/2,i=n-(e.y1+e.y2)/2;return e.x1+=r,e.y1+=i,e.x2+=r,e.y2+=i,e}})),ht=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Z();t.exports=function(e){return new n(e.x1,e.y1,e.x2,e.y2)}})),gt=o(((e,t)=>{t.exports=function(e,t){return t.setTo(e.x1,e.y1,e.x2,e.y2)}})),_t=o(((e,t)=>{t.exports=function(e,t){return e.x1===t.x1&&e.y1===t.y1&&e.x2===t.x2&&e.y2===t.y2}})),vt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=q();t.exports=function(e,t,r){r===void 0&&(r=t);var i=n(e),a=e.x2-e.x1,o=e.y2-e.y1;return t&&(e.x1-=a/i*t,e.y1-=o/i*t),r&&(e.x2+=a/i*r,e.y2+=o/i*r),e}})),yt=o(((e,t)=>{t.exports=function(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}})),bt=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=1.70158),e*e*((t+1)*e-t)}})),xt=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=1.70158),--e*e*((t+1)*e+t)+1}})),St=o(((e,t)=>{t.exports=function(e,t){t===void 0&&(t=1.70158);var n=t*1.525;return(e*=2)<1?.5*(e*e*((n+1)*e-n)):.5*((e-=2)*e*((n+1)*e+n)+2)}})),Ct=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:bt(),Out:xt(),InOut:St()}})),wt=o(((e,t)=>{t.exports=function(e){return e=1-e,e<1/2.75?1-7.5625*e*e:e<2/2.75?1-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?1-(7.5625*(e-=2.25/2.75)*e+.9375):1-(7.5625*(e-=2.625/2.75)*e+.984375)}})),Tt=o(((e,t)=>{t.exports=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}})),Et=o(((e,t)=>{t.exports=function(e){var t=!1;return e<.5?(e=1-e*2,t=!0):e=e*2-1,e=e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,t?(1-e)*.5:e*.5+.5}})),Dt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:wt(),Out:Tt(),InOut:Et()}})),Ot=o(((e,t)=>{t.exports=function(e){return 1-Math.sqrt(1-e*e)}})),kt=o(((e,t)=>{t.exports=function(e){return Math.sqrt(1- --e*e)}})),At=o(((e,t)=>{t.exports=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}})),jt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:Ot(),Out:kt(),InOut:At()}})),Mt=o(((e,t)=>{t.exports=function(e){return e*e*e}})),Nt=o(((e,t)=>{t.exports=function(e){return--e*e*e+1}})),Pt=o(((e,t)=>{t.exports=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}})),Ft=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:Mt(),Out:Nt(),InOut:Pt()}})),It=o(((e,t)=>{t.exports=function(e,t,n){if(t===void 0&&(t=.1),n===void 0&&(n=.1),e===0)return 0;if(e===1)return 1;var r=n/4;return t<1?t=1:r=n*Math.asin(1/t)/(2*Math.PI),-(t*2**(10*--e)*Math.sin((e-r)*(2*Math.PI)/n))}})),Lt=o(((e,t)=>{t.exports=function(e,t,n){if(t===void 0&&(t=.1),n===void 0&&(n=.1),e===0)return 0;if(e===1)return 1;var r=n/4;return t<1?t=1:r=n*Math.asin(1/t)/(2*Math.PI),t*2**(-10*e)*Math.sin((e-r)*(2*Math.PI)/n)+1}})),Rt=o(((e,t)=>{t.exports=function(e,t,n){if(t===void 0&&(t=.1),n===void 0&&(n=.1),e===0)return 0;if(e===1)return 1;var r=n/4;return t<1?t=1:r=n*Math.asin(1/t)/(2*Math.PI),(e*=2)<1?-.5*(t*2**(10*--e)*Math.sin((e-r)*(2*Math.PI)/n)):t*2**(-10*--e)*Math.sin((e-r)*(2*Math.PI)/n)*.5+1}})),zt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:It(),Out:Lt(),InOut:Rt()}})),Bt=o(((e,t)=>{t.exports=function(e){return 2**(10*(e-1))-.001}})),Vt=o(((e,t)=>{t.exports=function(e){return 1-2**(-10*e)}})),Ht=o(((e,t)=>{t.exports=function(e){return(e*=2)<1?.5*2**(10*(e-1)):.5*(2-2**(-10*(e-1)))}})),Ut=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:Bt(),Out:Vt(),InOut:Ht()}})),Wt=o(((e,t)=>{t.exports=function(e){return e}})),Gt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports=Wt()})),Kt=o(((e,t)=>{t.exports=function(e){return e*e}})),qt=o(((e,t)=>{t.exports=function(e){return e*(2-e)}})),Jt=o(((e,t)=>{t.exports=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}})),Yt=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:Kt(),Out:qt(),InOut:Jt()}})),Xt=o(((e,t)=>{t.exports=function(e){return e*e*e*e}})),Zt=o(((e,t)=>{t.exports=function(e){return 1- --e*e*e*e}})),Qt=o(((e,t)=>{t.exports=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}})),$t=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:Xt(),Out:Zt(),InOut:Qt()}})),en=o(((e,t)=>{t.exports=function(e){return e*e*e*e*e}})),tn=o(((e,t)=>{t.exports=function(e){return--e*e*e*e*e+1}})),nn=o(((e,t)=>{t.exports=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}})),rn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:en(),Out:tn(),InOut:nn()}})),an=o(((e,t)=>{t.exports=function(e){return e===0?0:e===1?1:1-Math.cos(e*Math.PI/2)}})),on=o(((e,t)=>{t.exports=function(e){return e===0?0:e===1?1:Math.sin(e*Math.PI/2)}})),sn=o(((e,t)=>{t.exports=function(e){return e===0?0:e===1?1:.5*(1-Math.cos(Math.PI*e))}})),cn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={In:an(),Out:on(),InOut:sn()}})),ln=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=1),e<=0?0:e>=1?1:((t*e|0)+1)*(1/t)}})),un=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports=ln()})),dn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ct(),r=Dt(),i=jt(),a=Ft(),o=zt(),s=Ut(),c=Gt(),l=Yt(),u=$t(),d=rn(),f=cn(),p=un();t.exports={Power0:c,Power1:l.Out,Power2:a.Out,Power3:u.Out,Power4:d.Out,Linear:c,Quad:l.Out,Cubic:a.Out,Quart:u.Out,Quint:d.Out,Sine:f.Out,Expo:s.Out,Circ:i.Out,Elastic:o.Out,Back:n.Out,Bounce:r.Out,Stepped:p,"Quad.easeIn":l.In,"Cubic.easeIn":a.In,"Quart.easeIn":u.In,"Quint.easeIn":d.In,"Sine.easeIn":f.In,"Expo.easeIn":s.In,"Circ.easeIn":i.In,"Elastic.easeIn":o.In,"Back.easeIn":n.In,"Bounce.easeIn":r.In,"Quad.easeOut":l.Out,"Cubic.easeOut":a.Out,"Quart.easeOut":u.Out,"Quint.easeOut":d.Out,"Sine.easeOut":f.Out,"Expo.easeOut":s.Out,"Circ.easeOut":i.Out,"Elastic.easeOut":o.Out,"Back.easeOut":n.Out,"Bounce.easeOut":r.Out,"Quad.easeInOut":l.InOut,"Cubic.easeInOut":a.InOut,"Quart.easeInOut":u.InOut,"Quint.easeInOut":d.InOut,"Sine.easeInOut":f.InOut,"Expo.easeInOut":s.InOut,"Circ.easeInOut":i.InOut,"Elastic.easeInOut":o.InOut,"Back.easeInOut":n.InOut,"Bounce.easeInOut":r.InOut}})),fn=o(((e,t)=>{t.exports=function(e){return e&&e[0].toUpperCase()+e.slice(1)}})),pn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=dn(),r=fn();t.exports=function(e,t){var i=n.Power0;if(typeof e==`string`)if(n.hasOwnProperty(e))i=n[e];else{var a=``;if(e.indexOf(`.`)){a=e.substring(e.indexOf(`.`)+1);var o=a.toLowerCase();o===`in`?a=`easeIn`:o===`out`?a=`easeOut`:o===`inout`&&(a=`easeInOut`)}e=r(e.substring(0,e.indexOf(`.`)+1)+a),n.hasOwnProperty(e)&&(i=n[e])}else typeof e==`function`&&(i=e);if(!t)return i;var s=t.slice(0);return s.unshift(0),function(e){return s[0]=e,i.apply(this,s)}}})),mn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=yt(),r=pn(),i=F();t.exports=function(e,t,a,o,s){o===void 0&&(o=0),s===void 0&&(s=[]);var c=[],l=e.x1,u=e.y1,d=e.x2-l,f=e.y2-u,p=r(t,s),m,h,g=a-1;for(m=0;m<g;m++)h=p(m/g),c.push(new i(l+d*h,u+f*h));if(h=p(1),c.push(new i(l+d*h,u+f*h)),o>0){var _=c[0],v=[_];for(m=1;m<c.length-1;m++){var y=c[m];n(_,y)>=o&&(v.push(y),_=y)}var b=c[c.length-1];return n(_,b)<o&&v.pop(),v.push(b),v}else return c}})),hn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=(e.x1+e.x2)/2,t.y=(e.y1+e.y2)/2,t}})),gn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @author       Florian Mertens
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t,r){r===void 0&&(r=new n);var i=e.x1,a=e.y1,o=e.x2,s=e.y2,c=(o-i)*(o-i)+(s-a)*(s-a);if(c===0)return r;var l=((t.x-i)*(o-i)+(t.y-a)*(s-a))/c;return r.x=i+l*(o-i),r.y=a+l*(s-a),r}})),_n=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z(),r=ft(),i=F();t.exports=function(e,t){t===void 0&&(t=new i);var a=r(e)-n.TAU;return t.x=Math.cos(a),t.y=Math.sin(a),t}})),vn=o(((e,t)=>{t.exports=function(e,t){var n=e.x1,r=e.y1,i=e.x2,a=e.y2,o=(i-n)*(i-n)+(a-r)*(a-r);if(o===0)return!1;var s=((r-t.y)*(i-n)-(n-t.x)*(a-r))/o;return Math.abs(s)*Math.sqrt(o)}})),yn=o(((e,t)=>{t.exports=function(e){return Math.abs(e.y1-e.y2)}})),bn=o(((e,t)=>{t.exports=function(e,t,n){var r=n-t;return t+((e-t)%r+r)%r}})),xn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z(),r=bn(),i=ft();t.exports=function(e){return r(i(e)-n.TAU,-Math.PI,Math.PI)}})),Sn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z(),r=ft();t.exports=function(e){return Math.cos(r(e)-n.TAU)}})),Cn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z(),r=ft();t.exports=function(e){return Math.sin(r(e)-n.TAU)}})),wn=o(((e,t)=>{t.exports=function(e,t,n){return e.x1+=t,e.y1+=n,e.x2+=t,e.y2+=n,e}})),Tn=o(((e,t)=>{t.exports=function(e){return-((e.x2-e.x1)/(e.y2-e.y1))}})),En=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ft(),r=xn();t.exports=function(e,t){return 2*r(t)-Math.PI-n(e)}})),Dn=o(((e,t)=>{t.exports=function(e,t,n,r){var i=Math.cos(r),a=Math.sin(r),o=e.x1-t,s=e.y1-n;return e.x1=o*i-s*a+t,e.y1=o*a+s*i+n,o=e.x2-t,s=e.y2-n,e.x2=o*i-s*a+t,e.y2=o*a+s*i+n,e}})),On=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Dn();t.exports=function(e,t){return n(e,(e.x1+e.x2)/2,(e.y1+e.y2)/2,t)}})),kn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Dn();t.exports=function(e,t,r){return n(e,t.x,t.y,r)}})),An=o(((e,t)=>{t.exports=function(e,t,n,r,i){return e.x1=t,e.y1=n,e.x2=t+Math.cos(r)*i,e.y2=n+Math.sin(r)*i,e}})),jn=o(((e,t)=>{t.exports=function(e){return(e.y2-e.y1)/(e.x2-e.x1)}})),Mn=o(((e,t)=>{t.exports=function(e){return Math.abs(e.x1-e.x2)}})),Nn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Z();n.Angle=ft(),n.BresenhamPoints=pt(),n.CenterOn=mt(),n.Clone=ht(),n.CopyFrom=gt(),n.Equals=_t(),n.Extend=vt(),n.GetEasedPoints=mn(),n.GetMidPoint=hn(),n.GetNearestPoint=gn(),n.GetNormal=_n(),n.GetPoint=ce(),n.GetPoints=J(),n.GetShortestDistance=vn(),n.Height=yn(),n.Length=q(),n.NormalAngle=xn(),n.NormalX=Sn(),n.NormalY=Cn(),n.Offset=wn(),n.PerpSlope=Tn(),n.Random=Y(),n.ReflectAngle=En(),n.Rotate=On(),n.RotateAroundPoint=kn(),n.RotateAroundXY=Dn(),n.SetToAngle=An(),n.Slope=jn(),n.Width=Mn(),t.exports=n})),Pn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=Q(),i=X();function a(e,t,n,r){var i=e-n,a=t-r,o=i*i+a*a;return Math.sqrt(o)}t.exports=new n({initialize:function(e,t,n){this.vertex1=e,this.vertex2=t,this.vertex3=n,this.bounds=new r,this._inCenter=new i},getInCenter:function(e){e===void 0&&(e=!0);var t=this.vertex1,n=this.vertex2,r=this.vertex3,i,o,s,c,l,u;e?(i=t.x,o=t.y,s=n.x,c=n.y,l=r.x,u=r.y):(i=t.vx,o=t.vy,s=n.vx,c=n.vy,l=r.vx,u=r.vy);var d=a(l,u,s,c),f=a(i,o,l,u),p=a(s,c,i,o),m=d+f+p;return this._inCenter.set((i*d+s*f+l*p)/m,(o*d+c*f+u*p)/m)},contains:function(e,t,n){var r=this.vertex1,i=this.vertex2,a=this.vertex3,o=r.vx,s=r.vy,c=i.vx,l=i.vy,u=a.vx,d=a.vy;if(n){var f=n.a,p=n.b,m=n.c,h=n.d,g=n.e,_=n.f;o=r.vx*f+r.vy*m+g,s=r.vx*p+r.vy*h+_,c=i.vx*f+i.vy*m+g,l=i.vx*p+i.vy*h+_,u=a.vx*f+a.vy*m+g,d=a.vx*p+a.vy*h+_}var v=u-o,y=d-s,b=c-o,x=l-s,S=e-o,C=t-s,w=v*v+y*y,T=v*b+y*x,E=v*S+y*C,D=b*b+x*x,O=b*S+x*C,k=w*D-T*T,A=k===0?0:1/k,j=(D*E-T*O)*A,M=(w*O-T*E)*A;return j>=0&&M>=0&&j+M<1},isCounterClockwise:function(e){var t=this.vertex1,n=this.vertex2,r=this.vertex3,i=(n.vx-t.vx)*(r.vy-t.vy)-(n.vy-t.vy)*(r.vx-t.vx);return e<=0?i>=0:i<0},load:function(e,t,n,r,i){return n=this.vertex1.load(e,t,n,r,i),n=this.vertex2.load(e,t,n,r,i),n=this.vertex3.load(e,t,n,r,i),n},transformCoordinatesLocal:function(e,t,n,r){return this.vertex1.transformCoordinatesLocal(e,t,n,r),this.vertex2.transformCoordinatesLocal(e,t,n,r),this.vertex3.transformCoordinatesLocal(e,t,n,r),this},updateBounds:function(){var e=this.vertex1,t=this.vertex2,n=this.vertex3,r=this.bounds;return r.x=Math.min(e.vx,t.vx,n.vx),r.y=Math.min(e.vy,t.vy,n.vy),r.width=Math.max(e.vx,t.vx,n.vx)-r.x,r.height=Math.max(e.vy,t.vy,n.vy)-r.y,this},isInView:function(e,t,n,r,i,a,o,s,c,l,u){this.update(r,i,a,o,s,c,l,u);var d=this.vertex1,f=this.vertex2,p=this.vertex3;if(d.ta<=0&&f.ta<=0&&p.ta<=0||t&&!this.isCounterClockwise(n))return!1;var m=this.bounds;m.x=Math.min(d.tx,f.tx,p.tx),m.y=Math.min(d.ty,f.ty,p.ty),m.width=Math.max(d.tx,f.tx,p.tx)-m.x,m.height=Math.max(d.ty,f.ty,p.ty)-m.y;var h=e.x+e.width,g=e.y+e.height;return m.width<=0||m.height<=0||e.width<=0||e.height<=0?!1:!(m.right<e.x||m.bottom<e.y||m.x>h||m.y>g)},scrollUV:function(e,t){return this.vertex1.scrollUV(e,t),this.vertex2.scrollUV(e,t),this.vertex3.scrollUV(e,t),this},scaleUV:function(e,t){return this.vertex1.scaleUV(e,t),this.vertex2.scaleUV(e,t),this.vertex3.scaleUV(e,t),this},setColor:function(e){return this.vertex1.color=e,this.vertex2.color=e,this.vertex3.color=e,this},update:function(e,t,n,r,i,a,o,s){return this.vertex1.update(t,n,r,i,a,o,s,e),this.vertex2.update(t,n,r,i,a,o,s,e),this.vertex3.update(t,n,r,i,a,o,s,e),this},translate:function(e,t){t===void 0&&(t=0);var n=this.vertex1,r=this.vertex2,i=this.vertex3;return n.x+=e,n.y+=t,r.x+=e,r.y+=t,i.x+=e,i.y+=t,this},x:{get:function(){return this.getInCenter().x},set:function(e){var t=this.getInCenter();this.translate(e-t.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(e){var t=this.getInCenter();this.translate(0,e-t.y)}},alpha:{get:function(){var e=this.vertex1,t=this.vertex2,n=this.vertex3;return(e.alpha+t.alpha+n.alpha)/3},set:function(e){this.vertex1.alpha=e,this.vertex2.alpha=e,this.vertex3.alpha=e}},depth:{get:function(){var e=this.vertex1,t=this.vertex2,n=this.vertex3;return(e.vz+t.vz+n.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}})})),Fn=o(((e,t)=>{t.exports=function(e,t,n){var r=typeof e;return!e||r===`number`||r===`string`?n:e.hasOwnProperty(t)&&e[t]!==void 0?e[t]:n}})),In=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=$(),i=1e-6,a=new n({initialize:function(e){this.val=new Float32Array(16),e?this.copy(e):this.identity()},clone:function(){return new a(this)},set:function(e){return this.copy(e)},setValues:function(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=this.val;return g[0]=e,g[1]=t,g[2]=n,g[3]=r,g[4]=i,g[5]=a,g[6]=o,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=d,g[12]=f,g[13]=p,g[14]=m,g[15]=h,this},copy:function(e){var t=e.val;return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},fromArray:function(e){return this.setValues(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(e,t,n){var r=o.fromQuat(n).val,i=t.x,a=t.y,s=t.z;return this.setValues(r[0]*i,r[1]*i,r[2]*i,0,r[4]*a,r[5]*a,r[6]*a,0,r[8]*s,r[9]*s,r[10]*s,0,e.x,e.y,e.z,1)},xyz:function(e,t,n){this.identity();var r=this.val;return r[12]=e,r[13]=t,r[14]=n,this},scaling:function(e,t,n){this.zero();var r=this.val;return r[0]=e,r[5]=t,r[10]=n,r[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var e=this.val,t=e[1],n=e[2],r=e[3],i=e[6],a=e[7],o=e[11];return e[1]=e[4],e[2]=e[8],e[3]=e[12],e[4]=t,e[6]=e[9],e[7]=e[13],e[8]=n,e[9]=i,e[11]=e[14],e[12]=r,e[13]=a,e[14]=o,this},getInverse:function(e){return this.copy(e),this.invert()},invert:function(){var e=this.val,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;return k?(k=1/k,this.setValues((o*O-s*D+c*E)*k,(r*D-n*O-i*E)*k,(m*S-h*x+g*b)*k,(d*x-u*S-f*b)*k,(s*T-a*O-c*w)*k,(t*O-r*T+i*w)*k,(h*y-p*S-g*v)*k,(l*S-d*y+f*v)*k,(a*D-o*T+c*C)*k,(n*T-t*D-i*C)*k,(p*x-m*y+g*_)*k,(u*y-l*x-f*_)*k,(o*w-a*E-s*C)*k,(t*E-n*w+r*C)*k,(m*v-p*b-h*_)*k,(l*b-u*v+d*_)*k)):this},adjoint:function(){var e=this.val,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15];return this.setValues(o*(d*g-f*h)-u*(s*g-c*h)+m*(s*f-c*d),-(n*(d*g-f*h)-u*(r*g-i*h)+m*(r*f-i*d)),n*(s*g-c*h)-o*(r*g-i*h)+m*(r*c-i*s),-(n*(s*f-c*d)-o*(r*f-i*d)+u*(r*c-i*s)),-(a*(d*g-f*h)-l*(s*g-c*h)+p*(s*f-c*d)),t*(d*g-f*h)-l*(r*g-i*h)+p*(r*f-i*d),-(t*(s*g-c*h)-a*(r*g-i*h)+p*(r*c-i*s)),t*(s*f-c*d)-a*(r*f-i*d)+l*(r*c-i*s),a*(u*g-f*m)-l*(o*g-c*m)+p*(o*f-c*u),-(t*(u*g-f*m)-l*(n*g-i*m)+p*(n*f-i*u)),t*(o*g-c*m)-a*(n*g-i*m)+p*(n*c-i*o),-(t*(o*f-c*u)-a*(n*f-i*u)+l*(n*c-i*o)),-(a*(u*h-d*m)-l*(o*h-s*m)+p*(o*d-s*u)),t*(u*h-d*m)-l*(n*h-r*m)+p*(n*d-r*u),-(t*(o*h-s*m)-a*(n*h-r*m)+p*(n*s-r*o)),t*(o*d-s*u)-a*(n*d-r*u)+l*(n*s-r*o))},determinant:function(){var e=this.val,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m;return _*(d*g-f*h)-v*D+y*E+b*T-x*w+S*C},multiply:function(e){var t=this.val,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=e.val,y=v[0],b=v[1],x=v[2],S=v[3];return t[0]=y*n+b*o+x*u+S*m,t[1]=y*r+b*s+x*d+S*h,t[2]=y*i+b*c+x*f+S*g,t[3]=y*a+b*l+x*p+S*_,y=v[4],b=v[5],x=v[6],S=v[7],t[4]=y*n+b*o+x*u+S*m,t[5]=y*r+b*s+x*d+S*h,t[6]=y*i+b*c+x*f+S*g,t[7]=y*a+b*l+x*p+S*_,y=v[8],b=v[9],x=v[10],S=v[11],t[8]=y*n+b*o+x*u+S*m,t[9]=y*r+b*s+x*d+S*h,t[10]=y*i+b*c+x*f+S*g,t[11]=y*a+b*l+x*p+S*_,y=v[12],b=v[13],x=v[14],S=v[15],t[12]=y*n+b*o+x*u+S*m,t[13]=y*r+b*s+x*d+S*h,t[14]=y*i+b*c+x*f+S*g,t[15]=y*a+b*l+x*p+S*_,this},multiplyLocal:function(e){var t=this.val,n=e.val;return this.setValues(t[0]*n[0]+t[1]*n[4]+t[2]*n[8]+t[3]*n[12],t[0]*n[1]+t[1]*n[5]+t[2]*n[9]+t[3]*n[13],t[0]*n[2]+t[1]*n[6]+t[2]*n[10]+t[3]*n[14],t[0]*n[3]+t[1]*n[7]+t[2]*n[11]+t[3]*n[15],t[4]*n[0]+t[5]*n[4]+t[6]*n[8]+t[7]*n[12],t[4]*n[1]+t[5]*n[5]+t[6]*n[9]+t[7]*n[13],t[4]*n[2]+t[5]*n[6]+t[6]*n[10]+t[7]*n[14],t[4]*n[3]+t[5]*n[7]+t[6]*n[11]+t[7]*n[15],t[8]*n[0]+t[9]*n[4]+t[10]*n[8]+t[11]*n[12],t[8]*n[1]+t[9]*n[5]+t[10]*n[9]+t[11]*n[13],t[8]*n[2]+t[9]*n[6]+t[10]*n[10]+t[11]*n[14],t[8]*n[3]+t[9]*n[7]+t[10]*n[11]+t[11]*n[15],t[12]*n[0]+t[13]*n[4]+t[14]*n[8]+t[15]*n[12],t[12]*n[1]+t[13]*n[5]+t[14]*n[9]+t[15]*n[13],t[12]*n[2]+t[13]*n[6]+t[14]*n[10]+t[15]*n[14],t[12]*n[3]+t[13]*n[7]+t[14]*n[11]+t[15]*n[15])},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var n=e.val,r=t.val,i=n[0],a=n[4],o=n[8],s=n[12],c=n[1],l=n[5],u=n[9],d=n[13],f=n[2],p=n[6],m=n[10],h=n[14],g=n[3],_=n[7],v=n[11],y=n[15],b=r[0],x=r[4],S=r[8],C=r[12],w=r[1],T=r[5],E=r[9],D=r[13],O=r[2],k=r[6],A=r[10],j=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return this.setValues(i*b+a*w+o*O+s*M,c*b+l*w+u*O+d*M,f*b+p*w+m*O+h*M,g*b+_*w+v*O+y*M,i*x+a*T+o*k+s*N,c*x+l*T+u*k+d*N,f*x+p*T+m*k+h*N,g*x+_*T+v*k+y*N,i*S+a*E+o*A+s*P,c*S+l*E+u*A+d*P,f*S+p*E+m*A+h*P,g*S+_*E+v*A+y*P,i*C+a*D+o*j+s*F,c*C+l*D+u*j+d*F,f*C+p*D+m*j+h*F,g*C+_*D+v*j+y*F)},translate:function(e){return this.translateXYZ(e.x,e.y,e.z)},translateXYZ:function(e,t,n){var r=this.val;return r[12]=r[0]*e+r[4]*t+r[8]*n+r[12],r[13]=r[1]*e+r[5]*t+r[9]*n+r[13],r[14]=r[2]*e+r[6]*t+r[10]*n+r[14],r[15]=r[3]*e+r[7]*t+r[11]*n+r[15],this},scale:function(e){return this.scaleXYZ(e.x,e.y,e.z)},scaleXYZ:function(e,t,n){var r=this.val;return r[0]*=e,r[1]*=e,r[2]*=e,r[3]*=e,r[4]*=t,r[5]*=t,r[6]*=t,r[7]*=t,r[8]*=n,r[9]*=n,r[10]*=n,r[11]*=n,this},makeRotationAxis:function(e,t){var n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.setValues(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1)},rotate:function(e,t){var n=this.val,r=t.x,a=t.y,o=t.z,s=Math.sqrt(r*r+a*a+o*o);if(Math.abs(s)<i)return this;s=1/s,r*=s,a*=s,o*=s;var c=Math.sin(e),l=Math.cos(e),u=1-l,d=n[0],f=n[1],p=n[2],m=n[3],h=n[4],g=n[5],_=n[6],v=n[7],y=n[8],b=n[9],x=n[10],S=n[11],C=n[12],w=n[13],T=n[14],E=n[15],D=r*r*u+l,O=a*r*u+o*c,k=o*r*u-a*c,A=r*a*u-o*c,j=a*a*u+l,M=o*a*u+r*c,N=r*o*u+a*c,P=a*o*u-r*c,F=o*o*u+l;return this.setValues(d*D+h*O+y*k,f*D+g*O+b*k,p*D+_*O+x*k,m*D+v*O+S*k,d*A+h*j+y*M,f*A+g*j+b*M,p*A+_*j+x*M,m*A+v*j+S*M,d*N+h*P+y*F,f*N+g*P+b*F,p*N+_*P+x*F,m*N+v*P+S*F,C,w,T,E)},rotateX:function(e){var t=this.val,n=Math.sin(e),r=Math.cos(e),i=t[4],a=t[5],o=t[6],s=t[7],c=t[8],l=t[9],u=t[10],d=t[11];return t[4]=i*r+c*n,t[5]=a*r+l*n,t[6]=o*r+u*n,t[7]=s*r+d*n,t[8]=c*r-i*n,t[9]=l*r-a*n,t[10]=u*r-o*n,t[11]=d*r-s*n,this},rotateY:function(e){var t=this.val,n=Math.sin(e),r=Math.cos(e),i=t[0],a=t[1],o=t[2],s=t[3],c=t[8],l=t[9],u=t[10],d=t[11];return t[0]=i*r-c*n,t[1]=a*r-l*n,t[2]=o*r-u*n,t[3]=s*r-d*n,t[8]=i*n+c*r,t[9]=a*n+l*r,t[10]=o*n+u*r,t[11]=s*n+d*r,this},rotateZ:function(e){var t=this.val,n=Math.sin(e),r=Math.cos(e),i=t[0],a=t[1],o=t[2],s=t[3],c=t[4],l=t[5],u=t[6],d=t[7];return t[0]=i*r+c*n,t[1]=a*r+l*n,t[2]=o*r+u*n,t[3]=s*r+d*n,t[4]=c*r-i*n,t[5]=l*r-a*n,t[6]=u*r-o*n,t[7]=d*r-s*n,this},fromRotationTranslation:function(e,t){var n=e.x,r=e.y,i=e.z,a=e.w,o=n+n,s=r+r,c=i+i,l=n*o,u=n*s,d=n*c,f=r*s,p=r*c,m=i*c,h=a*o,g=a*s,_=a*c;return this.setValues(1-(f+m),u+_,d-g,0,u-_,1-(l+m),p+h,0,d+g,p-h,1-(l+f),0,t.x,t.y,t.z,1)},fromQuat:function(e){var t=e.x,n=e.y,r=e.z,i=e.w,a=t+t,o=n+n,s=r+r,c=t*a,l=t*o,u=t*s,d=n*o,f=n*s,p=r*s,m=i*a,h=i*o,g=i*s;return this.setValues(1-(d+p),l+g,u-h,0,l-g,1-(c+p),f+m,0,u+h,f-m,1-(c+d),0,0,0,0,1)},frustum:function(e,t,n,r,i,a){var o=1/(t-e),s=1/(r-n),c=1/(i-a);return this.setValues(i*2*o,0,0,0,0,i*2*s,0,0,(t+e)*o,(r+n)*s,(a+i)*c,-1,0,0,a*i*2*c,0)},perspective:function(e,t,n,r){var i=1/Math.tan(e/2),a=1/(n-r);return this.setValues(i/t,0,0,0,0,i,0,0,0,0,(r+n)*a,-1,0,0,2*r*n*a,0)},perspectiveLH:function(e,t,n,r){return this.setValues(2*n/e,0,0,0,0,2*n/t,0,0,0,0,-r/(n-r),1,0,0,n*r/(n-r),0)},ortho:function(e,t,n,r,i,a){var o=e-t,s=n-r,c=i-a;return o=o===0?o:1/o,s=s===0?s:1/s,c=c===0?c:1/c,this.setValues(-2*o,0,0,0,0,-2*s,0,0,0,0,2*c,0,(e+t)*o,(r+n)*s,(a+i)*c,1)},lookAtRH:function(e,t,n){var r=this.val;return u.subVectors(e,t),u.lengthSq()===0&&(u.z=1),u.normalize(),c.crossVectors(n,u),c.lengthSq()===0&&(Math.abs(n.z)===1?u.x+=1e-4:u.z+=1e-4,u.normalize(),c.crossVectors(n,u)),c.normalize(),l.crossVectors(u,c),r[0]=c.x,r[1]=c.y,r[2]=c.z,r[4]=l.x,r[5]=l.y,r[6]=l.z,r[8]=u.x,r[9]=u.y,r[10]=u.z,this},lookAt:function(e,t,n){var r=e.x,a=e.y,o=e.z,s=n.x,c=n.y,l=n.z,u=t.x,d=t.y,f=t.z;if(Math.abs(r-u)<i&&Math.abs(a-d)<i&&Math.abs(o-f)<i)return this.identity();var p=r-u,m=a-d,h=o-f,g=1/Math.sqrt(p*p+m*m+h*h);p*=g,m*=g,h*=g;var _=c*h-l*m,v=l*p-s*h,y=s*m-c*p;g=Math.sqrt(_*_+v*v+y*y),g?(g=1/g,_*=g,v*=g,y*=g):(_=0,v=0,y=0);var b=m*y-h*v,x=h*_-p*y,S=p*v-m*_;return g=Math.sqrt(b*b+x*x+S*S),g?(g=1/g,b*=g,x*=g,S*=g):(b=0,x=0,S=0),this.setValues(_,b,p,0,v,x,m,0,y,S,h,0,-(_*r+v*a+y*o),-(b*r+x*a+S*o),-(p*r+m*a+h*o),1)},yawPitchRoll:function(e,t,n){this.zero(),o.zero(),s.zero();var r=this.val,i=o.val,a=s.val,c=Math.sin(n),l=Math.cos(n);return r[10]=1,r[15]=1,r[0]=l,r[1]=c,r[4]=-c,r[5]=l,c=Math.sin(t),l=Math.cos(t),i[0]=1,i[15]=1,i[5]=l,i[10]=l,i[9]=-c,i[6]=c,c=Math.sin(e),l=Math.cos(e),a[5]=1,a[15]=1,a[0]=l,a[2]=-c,a[8]=c,a[10]=l,this.multiplyLocal(o),this.multiplyLocal(s),this},setWorldMatrix:function(e,t,n,r,i){return this.yawPitchRoll(e.y,e.x,e.z),o.scaling(n.x,n.y,n.z),s.xyz(t.x,t.y,t.z),this.multiplyLocal(o),this.multiplyLocal(s),r&&this.multiplyLocal(r),i&&this.multiplyLocal(i),this},multiplyToMat4:function(e,t){var n=this.val,r=e.val,i=n[0],a=n[1],o=n[2],s=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],p=n[9],m=n[10],h=n[11],g=n[12],_=n[13],v=n[14],y=n[15],b=r[0],x=r[1],S=r[2],C=r[3],w=r[4],T=r[5],E=r[6],D=r[7],O=r[8],k=r[9],A=r[10],j=r[11],M=r[12],N=r[13],P=r[14],F=r[15];return t.setValues(b*i+x*c+S*f+C*g,x*a+x*l+S*p+C*_,S*o+x*u+S*m+C*v,C*s+x*d+S*h+C*y,w*i+T*c+E*f+D*g,w*a+T*l+E*p+D*_,w*o+T*u+E*m+D*v,w*s+T*d+E*h+D*y,O*i+k*c+A*f+j*g,O*a+k*l+A*p+j*_,O*o+k*u+A*m+j*v,O*s+k*d+A*h+j*y,M*i+N*c+P*f+F*g,M*a+N*l+P*p+F*_,M*o+N*u+P*m+F*v,M*s+N*d+P*h+F*y)},fromRotationXYTranslation:function(e,t,n){var r=t.x,i=t.y,a=t.z,o=Math.sin(e.x),s=Math.cos(e.x),c=Math.sin(e.y),l=Math.cos(e.y),u=r,d=i,f=a,p=-o,m=0-p*c,h=0-s*c,g=p*l,_=s*l;return n||(u=l*r+c*a,d=m*r+s*i+g*a,f=h*r+o*i+_*a),this.setValues(l,m,h,0,0,s,o,0,c,g,_,0,u,d,f,1)},getMaxScaleOnAxis:function(){var e=this.val,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}}),o=new a,s=new a,c=new r,l=new r,u=new r;t.exports=a})),Ln=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @author       Felipe Alfonso <@bitnenfer>
* @author       Matthew Groves <@doormat>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={getTintFromFloats:function(e,t,n,r){var i=(e*255|0)&255,a=(t*255|0)&255,o=(n*255|0)&255;return(((r*255|0)&255)<<24|i<<16|a<<8|o)>>>0},getTintAppendFloatAlpha:function(e,t){return(((t*255|0)&255)<<24|e)>>>0},getTintAppendFloatAlphaAndSwap:function(e,t){var n=(e>>16|0)&255,r=(e>>8|0)&255,i=(e|0)&255;return(((t*255|0)&255)<<24|i<<16|r<<8|n)>>>0},getFloatsFromUintRGB:function(e){var t=(e>>16|0)&255,n=(e>>8|0)&255,r=(e|0)&255;return[t/255,n/255,r/255]},checkShaderMax:function(e,t){var n=Math.min(16,e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS));return!t||t===-1?n:Math.min(n,t)},parseFragmentShaderMaxTextures:function(e,t){if(!e)return``;for(var n=``,r=0;r<t;r++)r>0&&(n+=`
	else `),r<t-1&&(n+=`if (outTexId < `+r+`.5)`),n+=`
	{`,n+=`
		texture = texture2D(uMainSampler[`+r+`], outTexCoord);`,n+=`
	}`;return e=e.replace(/%count%/gi,t.toString()),e.replace(/%forloop%/gi,n)},setGlowQuality:function(e,t,n,r){return n===void 0&&(n=t.config.glowFXQuality),r===void 0&&(r=t.config.glowFXDistance),e=e.replace(/__SIZE__/gi,(1/n/r).toFixed(7)),e=e.replace(/__DIST__/gi,r.toFixed(0)+`.0`),e}}})),Rn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=Ln(),i=$();t.exports=new n({Extends:i,initialize:function(e,t,n,r,a,o,s,c,l,u){o===void 0&&(o=16777215),s===void 0&&(s=1),c===void 0&&(c=0),l===void 0&&(l=0),u===void 0&&(u=0),i.call(this,e,t,n),this.vx=0,this.vy=0,this.vz=0,this.nx=c,this.ny=l,this.nz=u,this.u=r,this.v=a,this.color=o,this.alpha=s,this.tx=0,this.ty=0,this.ta=0,this.tu=r,this.tv=a},setUVs:function(e,t){return this.u=e,this.v=t,this.tu=e,this.tv=t,this},scrollUV:function(e,t){return this.tu+=e,this.tv+=t,this},scaleUV:function(e,t){return this.tu=this.u*e,this.tv=this.v*t,this},transformCoordinatesLocal:function(e,t,n,r){var i=this.x,a=this.y,o=this.z,s=e.val,c=i*s[0]+a*s[4]+o*s[8]+s[12],l=i*s[1]+a*s[5]+o*s[9]+s[13],u=i*s[2]+a*s[6]+o*s[10]+s[14],d=i*s[3]+a*s[7]+o*s[11]+s[15];this.vx=c/d*t,this.vy=-(l/d)*n,r<=0?this.vz=u/d:this.vz=-(u/d)},resize:function(e,t,n,r,i,a){return this.x=e,this.y=t,this.vx=this.x*n,this.vy=-this.y*r,this.vz=0,i<.5?this.vx+=n*(.5-i):i>.5&&(this.vx-=n*(i-.5)),a<.5?this.vy+=r*(.5-a):a>.5&&(this.vy-=r*(a-.5)),this},update:function(e,t,n,r,i,a,o,s){var c=this.vx*e+this.vy*n+i,l=this.vx*t+this.vy*r+a;return o&&(c=Math.round(c),l=Math.round(l)),this.tx=c,this.ty=l,this.ta=this.alpha*s,this},load:function(e,t,n,i,a){return e[++n]=this.tx,e[++n]=this.ty,e[++n]=this.tu,e[++n]=this.tv,e[++n]=i,e[++n]=a,t[++n]=r.getTintAppendFloatAlpha(this.color,this.ta),n}})})),zn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Pn(),r=Fn(),i=In(),a=$(),o=Rn(),s=new a,c=new a,l=new i;t.exports=function(e){var t=r(e,`mesh`),i=r(e,`texture`,null),a=r(e,`frame`),u=r(e,`width`,1),d=r(e,`height`,u),f=r(e,`widthSegments`,1),p=r(e,`heightSegments`,f),m=r(e,`x`,0),h=r(e,`y`,0),g=r(e,`z`,0),_=r(e,`rotateX`,0),v=r(e,`rotateY`,0),y=r(e,`rotateZ`,0),b=r(e,`zIsUp`,!0),x=r(e,`isOrtho`,t?t.dirtyCache[11]:!1),S=r(e,`colors`,[16777215]),C=r(e,`alphas`,[1]),w=r(e,`tile`,!1),T=r(e,`flipY`,!1),E=r(e,`width`,null),D={faces:[],verts:[]};s.set(m,h,g),c.set(_,v,y),l.fromRotationXYTranslation(c,s,b);var O;if(!i&&t)i=t.texture,a||(O=t.frame);else if(t&&typeof i==`string`)i=t.scene.sys.textures.get(i);else if(!i)return D;O||=i.get(a),!E&&x&&i&&t&&(u=O.width/t.height,d=O.height/t.height);var k=u/2,A=d/2,j=Math.floor(f),M=Math.floor(p),N=j+1,P=M+1,F=u/j,I=d/M,L=[],R=[],z,B,V=0,ee=1,H=0,U=1;O&&(V=O.u0,ee=O.u1,T?(H=O.v1,U=O.v0):(H=O.v0,U=O.v1));var te=ee-V,ne=U-H;for(B=0;B<P;B++){var re=B*I-A;for(z=0;z<N;z++){var ie=z*F-k;R.push(ie,-re);var ae=V+z/j*te,oe=H+B/M*ne;L.push(ae,oe)}}Array.isArray(S)||(S=[S]),Array.isArray(C)||(C=[C]);var W=0,G=0;for(B=0;B<M;B++)for(z=0;z<j;z++){var se=(z+N*B)*2,K=(z+N*(B+1))*2,ce=(z+1+N*(B+1))*2,q=(z+1+N*B)*2,J=S[G],Y=C[W],le=new o(R[se],R[se+1],0,L[se],L[se+1],J,Y).transformMat4(l),X=new o(R[K],R[K+1],0,L[K],L[K+1],J,Y).transformMat4(l),Z=new o(R[q],R[q+1],0,L[q],L[q+1],J,Y).transformMat4(l),ue=new o(R[K],R[K+1],0,L[K],L[K+1],J,Y).transformMat4(l),Q=new o(R[ce],R[ce+1],0,L[ce],L[ce+1],J,Y).transformMat4(l),de=new o(R[q],R[q+1],0,L[q],L[q+1],J,Y).transformMat4(l);w&&(le.setUVs(V,U),X.setUVs(V,H),Z.setUVs(ee,U),ue.setUVs(V,H),Q.setUVs(ee,H),de.setUVs(ee,U)),G++,G===S.length&&(G=0),W++,W===C.length&&(W=0),D.verts.push(le,X,Z,ue,Q,de),D.faces.push(new n(le,X,Z),new n(ue,Q,de))}return t&&(t.faces=t.faces.concat(D.faces),t.vertices=t.vertices.concat(D.verts)),D}})),Bn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Pn(),r=In(),i=$(),a=Rn(),o=new i,s=new i,c=new r;t.exports=function(e,t,r,i,l,u,d,f,p,m){r===void 0&&(r=1),i===void 0&&(i=0),l===void 0&&(l=0),u===void 0&&(u=0),d===void 0&&(d=0),f===void 0&&(f=0),p===void 0&&(p=0),m===void 0&&(m=!0);var h={faces:[],verts:[]},g=e.materials;o.set(i,l,u),s.set(d,f,p),c.fromRotationXYTranslation(s,o,m);for(var _=0;_<e.models.length;_++)for(var v=e.models[_],y=v.vertices,b=v.textureCoords,x=v.faces,S=0;S<x.length;S++){var C=x[S],w=C.vertices[0],T=C.vertices[1],E=C.vertices[2],D=y[w.vertexIndex],O=y[T.vertexIndex],k=y[E.vertexIndex],A=w.textureCoordsIndex,j=T.textureCoordsIndex,M=E.textureCoordsIndex,N=A===-1?{u:0,v:1}:b[A],P=j===-1?{u:0,v:0}:b[j],F=M===-1?{u:1,v:1}:b[M],I=16777215;C.material!==``&&g[C.material]&&(I=g[C.material]);var L=new a(D.x*r,D.y*r,D.z*r,N.u,N.v,I).transformMat4(c),R=new a(O.x*r,O.y*r,O.z*r,P.u,P.v,I).transformMat4(c),z=new a(k.x*r,k.y*r,k.z*r,F.u,F.v,I).transformMat4(c);h.verts.push(L,R,z),h.faces.push(new n(L,R,z))}return t&&(t.faces=t.faces.concat(h.faces),t.vertices=t.vertices.concat(h.verts)),h}})),Vn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Pn(),r=Rn();t.exports=function(e,t,i,a,o,s,c,l){if(a===void 0&&(a=!1),s===void 0&&(s=16777215),c===void 0&&(c=1),l===void 0&&(l=!1),e.length!==t.length&&!a){console.warn(`GenerateVerts: vertices and uvs count not equal`);return}var u={faces:[],vertices:[]},d,f,p,m,h,g,_,v,y,b,x,S=a?3:2,C=Array.isArray(s),w=Array.isArray(c);if(Array.isArray(i)&&i.length>0)for(d=0;d<i.length;d++){var T=i[d],E=i[d]*2,D=i[d]*S;f=e[D],p=e[D+1],m=a?e[D+2]:0,h=t[E],g=t[E+1],l&&(g=1-g),_=C?s[T]:s,v=w?c[T]:c,y=0,b=0,x=0,o&&(y=o[D],b=o[D+1],x=a?o[D+2]:0),u.vertices.push(new r(f,p,m,h,g,_,v,y,b,x))}else{var O=0,k=0;for(d=0;d<e.length;d+=S)f=e[d],p=e[d+1],m=a?e[d+2]:0,h=t[O],g=t[O+1],_=C?s[k]:s,v=w?c[k]:c,y=0,b=0,x=0,o&&(y=o[d],b=o[d+1],x=a?o[d+2]:0),u.vertices.push(new r(f,p,m,h,g,_,v,y,b,x)),O+=2,k++}for(d=0;d<u.vertices.length;d+=3){var A=u.vertices[d],j=u.vertices[d+1],M=u.vertices[d+2];u.faces.push(new n(A,j,M))}return u}})),Hn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=!0,r=`untitled`,i=``,a=``;function o(e){var t=e.indexOf(`#`);return t>-1?e.substring(0,t):e}function s(e){return e.models.length===0&&e.models.push({faces:[],name:r,textureCoords:[],vertexNormals:[],vertices:[]}),i=``,e.models[e.models.length-1]}function c(e,t){var n=e.length>=2?e[1]:r;t.models.push({faces:[],name:n,textureCoords:[],vertexNormals:[],vertices:[]}),i=``}function l(e){e.length===2&&(i=e[1])}function u(e,t){var n=e.length,r=n>=2?parseFloat(e[1]):0,i=n>=3?parseFloat(e[2]):0,a=n>=4?parseFloat(e[3]):0;s(t).vertices.push({x:r,y:i,z:a})}function d(e,t){var r=e.length,i=r>=2?parseFloat(e[1]):0,a=r>=3?parseFloat(e[2]):0,o=r>=4?parseFloat(e[3]):0;isNaN(i)&&(i=0),isNaN(a)&&(a=0),isNaN(o)&&(o=0),n&&(a=1-a),s(t).textureCoords.push({u:i,v:a,w:o})}function f(e,t){var n=e.length,r=n>=2?parseFloat(e[1]):0,i=n>=3?parseFloat(e[2]):0,a=n>=4?parseFloat(e[3]):0;s(t).vertexNormals.push({x:r,y:i,z:a})}function p(e,t){var n=e.length-1;if(!(n<3)){for(var r={group:i,material:a,vertices:[]},o=0;o<n;o++){var c=e[o+1].split(`/`),l=c.length;if(!(l<1||l>3)){var u=0,d=0,f=0;u=parseInt(c[0],10),l>1&&c[1]!==``&&(d=parseInt(c[1],10)),l>2&&(f=parseInt(c[2],10)),u!==0&&(u<0&&(u=s(t).vertices.length+1+u),--d,--u,--f,r.vertices.push({textureCoordsIndex:d,vertexIndex:u,vertexNormalIndex:f}))}}s(t).faces.push(r)}}function m(e,t){e.length>=2&&t.materialLibraries.push(e[1])}function h(e){e.length>=2&&(a=e[1])}t.exports=function(e,t){t===void 0&&(t=!0),n=t;var r={materials:{},materialLibraries:[],models:[]};i=``,a=``;for(var s=e.split(`
`),g=0;g<s.length;g++){var _=o(s[g]).replace(/\s\s+/g,` `).trim().split(` `);switch(_[0].toLowerCase()){case`o`:c(_,r);break;case`g`:l(_);break;case`v`:u(_,r);break;case`vt`:d(_,r);break;case`vn`:f(_,r);break;case`f`:p(_,r);break;case`mtllib`:m(_,r);break;case`usemtl`:h(_);break}}return r}})),Un=o(((e,t)=>{t.exports=function(e,t,n){return e<<16|t<<8|n}})),Wn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Un();t.exports=function(e){for(var t={},r=e.split(`
`),i=``,a=0;a<r.length;a++){var o=r[a].trim();if(!(o.indexOf(`#`)===0||o===``)){var s=o.replace(/\s\s+/g,` `).trim().split(` `);switch(s[0].toLowerCase()){case`newmtl`:i=s[1];break;case`kd`:var c=Math.floor(s[1]*255);t[i]=n(c,s.length>=2?Math.floor(s[2]*255):c,s.length>=3?Math.floor(s[3]*255):c);break}}}return t}})),Gn=o(((e,t)=>{t.exports=function(e,t,n,r){var i,a;if(n===void 0&&r===void 0){var o=e.getInCenter();i=o.x,a=o.y}var s=Math.cos(t),c=Math.sin(t),l=e.vertex1,u=e.vertex2,d=e.vertex3,f=l.x-i,p=l.y-a;l.set(f*s-p*c+i,f*c+p*s+a),f=u.x-i,p=u.y-a,u.set(f*s-p*c+i,f*c+p*s+a),f=d.x-i,p=d.y-a,d.set(f*s-p*c+i,f*c+p*s+a)}})),Kn=o(((e,t)=>{t.exports={Face:Pn(),GenerateGridVerts:zn(),GenerateObjVerts:Bn(),GenerateVerts:Vn(),ParseObj:Hn(),ParseObjMaterial:Wn(),RotateFace:Gn(),Vertex:Rn()}})),qn=o(((e,t)=>{t.exports=function(e){return e.setTo(Math.ceil(e.x),Math.ceil(e.y))}})),Jn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e){return new n(e.x,e.y)}})),Yn=o(((e,t)=>{t.exports=function(e,t){return t.setTo(e.x,e.y)}})),Xn=o(((e,t)=>{t.exports=function(e,t){return e.x===t.x&&e.y===t.y}})),Zn=o(((e,t)=>{t.exports=function(e){return e.setTo(Math.floor(e.x),Math.floor(e.y))}})),Qn=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){if(t===void 0&&(t=new n),!Array.isArray(e))throw Error(`GetCentroid points argument must be an array`);var r=e.length;if(r<1)throw Error(`GetCentroid points array must not be empty`);if(r===1)t.x=e[0].x,t.y=e[0].y;else{for(var i=0;i<r;i++)t.x+=e[i].x,t.y+=e[i].y;t.x/=r,t.y/=r}return t}})),$n=o(((e,t)=>{t.exports=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)}})),er=o(((e,t)=>{t.exports=function(e){return e.x*e.x+e.y*e.y}})),tr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e,t){t===void 0&&(t=new n);for(var r=-1/0,i=1/0,a=-1/0,o=1/0,s=0;s<e.length;s++){var c=e[s];c.x>r&&(r=c.x),c.x<i&&(i=c.x),c.y>a&&(a=c.y),c.y<o&&(o=c.y)}return t.x=i,t.y=o,t.width=r-i,t.height=a-o,t}})),nr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t,r,i){return r===void 0&&(r=0),i===void 0&&(i=new n),i.x=e.x+(t.x-e.x)*r,i.y=e.y+(t.y-e.y)*r,i}})),rr=o(((e,t)=>{t.exports=function(e){return e.setTo(e.y,e.x)}})),ir=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){return t===void 0&&(t=new n),t.setTo(-e.x,-e.y)}})),ar=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=er();t.exports=function(e,t,i){i===void 0&&(i=new n);var a=(e.x*t.x+e.y*t.y)/r(t);return a!==0&&(i.x=a*t.x,i.y=a*t.y),i}})),or=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t,r){r===void 0&&(r=new n);var i=e.x*t.x+e.y*t.y;return i!==0&&(r.x=i*t.x,r.y=i*t.y),r}})),sr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=$n();t.exports=function(e,t){if(e.x!==0||e.y!==0){var r=n(e);e.x/=r,e.y/=r}return e.x*=t,e.y*=t,e}})),cr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();n.Ceil=qn(),n.Clone=Jn(),n.CopyFrom=Yn(),n.Equals=Xn(),n.Floor=Zn(),n.GetCentroid=Qn(),n.GetMagnitude=$n(),n.GetMagnitudeSq=er(),n.GetRectangleFromPoints=tr(),n.Interpolate=nr(),n.Invert=rr(),n.Negative=ir(),n.Project=ar(),n.ProjectUnit=or(),n.SetMagnitude=sr(),t.exports=n})),lr=o(((e,t)=>{t.exports=function(e,t,n){for(var r=!1,i=-1,a=e.points.length-1;++i<e.points.length;a=i){var o=e.points[i].x,s=e.points[i].y,c=e.points[a].x,l=e.points[a].y;(s<=n&&n<l||l<=n&&n<s)&&t<(c-o)*(n-s)/(l-s)+o&&(r=!r)}return r}})),ur=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=q(),r=Z();t.exports=function(e){for(var t=e.points,i=0,a=0;a<t.length;a++){var o=t[a],s=t[(a+1)%t.length],c=new r(o.x,o.y,s.x,s.y);i+=n(c)}return i}})),dr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=q(),r=Z(),i=ur();t.exports=function(e,t,a,o){o===void 0&&(o=[]);var s=e.points,c=i(e);!t&&a>0&&(t=c/a);for(var l=0;l<t;l++)for(var u=l/t*c,d=0,f=0;f<s.length;f++){var p=s[f],m=s[(f+1)%s.length],h=new r(p.x,p.y,m.x,m.y),g=n(h);if(u<d||u>d+g){d+=g;continue}var _=h.getPoint((u-d)/g);o.push(_);break}return o}})),fr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=lr(),i=dr(),a=A();t.exports=new n({initialize:function(e){this.type=a.POLYGON,this.area=0,this.points=[],e&&this.setTo(e)},contains:function(e,t){return r(this,e,t)},setTo:function(e){if(this.area=0,this.points=[],typeof e==`string`&&(e=e.split(` `)),!Array.isArray(e))return this;for(var t,n=0;n<e.length;n++)t={x:0,y:0},typeof e[n]==`number`||typeof e[n]==`string`?(t.x=parseFloat(e[n]),t.y=parseFloat(e[n+1]),n++):Array.isArray(e[n])?(t.x=e[n][0],t.y=e[n][1]):(t.x=e[n].x,t.y=e[n].y),this.points.push(t);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var e=0,t,n,r=0;r<this.points.length-1;r++)t=this.points[r],n=this.points[r+1],e+=(n.x-t.x)*(t.y+n.y);return t=this.points[0],n=this.points[this.points.length-1],e+=(t.x-n.x)*(n.y+t.y),this.area=-e*.5,this.area},getPoints:function(e,t,n){return i(this,e,t,n)}})})),pr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=fr();t.exports=function(e){return new n(e.points)}})),mr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=lr();t.exports=function(e,t){return n(e,t.x,t.y)}})),hr=o(((e,t)=>{function n(e,t,n){n||=2;var i=t&&t.length,o=i?t[0]*n:e.length,s=r(e,0,o,n,!0),c=[];if(!s||s.next===s.prev)return c;var l,d,f,p,m,h,g;if(i&&(s=u(e,t,s,n)),e.length>80*n){l=f=e[0],d=p=e[1];for(var _=n;_<o;_+=n)m=e[_],h=e[_+1],m<l&&(l=m),h<d&&(d=h),m>f&&(f=m),h>p&&(p=h);g=Math.max(f-l,p-d),g=g===0?0:32767/g}return a(s,c,n,l,d,g,0),c}function r(e,t,n,r,i){var a,o;if(i===N(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&S(o,o.next)&&(j(o),o=o.next),o}function i(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(S(n,n.next)||x(n.prev,n,n.next)===0)){if(j(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function a(e,t,n,r,u,d,f){if(e){!f&&d&&h(e,r,u,d);for(var p=e,m,g;e.prev!==e.next;){if(m=e.prev,g=e.next,d?s(e,r,u,d):o(e)){t.push(m.i/n|0),t.push(e.i/n|0),t.push(g.i/n|0),j(e),e=g.next,p=g.next;continue}if(e=g,e===p){f?f===1?(e=c(i(e),t,n),a(e,t,n,r,u,d,2)):f===2&&l(e,t,n,r,u,d):a(i(e),t,n,r,u,d,1);break}}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&y(i,s,a,c,o,l,m.x,m.y)&&x(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s(e,t,n,r){var i=e.prev,a=e,o=e.next;if(x(i,a,o)>=0)return!1;for(var s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,v=_(p,m,t,n,r),b=_(h,g,t,n,r),S=e.prevZ,C=e.nextZ;S&&S.z>=v&&C&&C.z<=b;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=b;){if(C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function c(e,t,n){var r=e;do{var a=r.prev,o=r.next.next;!S(a,o)&&C(a,r,r.next,o)&&D(a,o)&&D(o,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),j(r),j(r.next),r=e=o),r=r.next}while(r!==e);return i(r)}function l(e,t,n,r,o,s){var c=e;do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&b(c,l)){var u=k(c,l);c=i(c,c.next),u=i(u,u.next),a(c,t,n,r,o,s,0),a(u,t,n,r,o,s,0);return}l=l.next}c=c.next}while(c!==e)}function u(e,t,n,i){var a=[],o,s,c,l,u;for(o=0,s=t.length;o<s;o++)c=t[o]*i,l=o<s-1?t[o+1]*i:e.length,u=r(e,c,l,i,!1),u===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(d),o=0;o<a.length;o++)n=f(a[o],n);return n}function d(e,t){return e.x-t.x}function f(e,t){var n=p(e,t);if(!n)return t;var r=k(n,e);return i(r,r.next),i(n,n.next)}function p(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a&&(a=s,o=n.x<n.next.x?n:n.next,s===r))return o}n=n.next}while(n!==t);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,f;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&y(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),D(n,e)&&(f<d||f===d&&(n.x>o.x||n.x===o.x&&m(o,n)))&&(o=n,d=f)),n=n.next;while(n!==c);return o}function m(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do i.z===0&&(i.z=_(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function _(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function y(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!E(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||S(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function C(e,t,n,r){var i=T(x(e,t,n)),a=T(x(e,t,r)),o=T(x(n,r,e)),s=T(x(n,r,t));return!!(i!==a&&o!==s||i===0&&w(e,n,t)||a===0&&w(e,r,t)||o===0&&w(n,e,r)||s===0&&w(n,t,r))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function T(e){return e>0?1:e<0?-1:0}function E(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&C(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function k(e,t){var n=new M(e.i,e.x,e.y),r=new M(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new M(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(N(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(N(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function N(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},t.exports=n})),gr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e,t){t===void 0&&(t=new n);for(var r=1/0,i=1/0,a=-r,o=-i,s,c=0;c<e.points.length;c++)s=e.points[c],r=Math.min(r,s.x),i=Math.min(i,s.y),a=Math.max(a,s.x),o=Math.max(o,s.y);return t.x=r,t.y=i,t.width=a-r,t.height=o-i,t}})),_r=o(((e,t)=>{t.exports=function(e,t){t===void 0&&(t=[]);for(var n=0;n<e.points.length;n++)t.push(e.points[n].x),t.push(e.points[n].y);return t}})),vr=o(((e,t)=>{t.exports=function(e){return e.points.reverse(),e}})),yr=o(((e,t)=>{function n(e,t){var n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function r(e,t,n){var r=t.x,i=t.y,a=n.x-r,o=n.y-i;if(a!==0||o!==0){var s=((e.x-r)*a+(e.y-i)*o)/(a*a+o*o);s>1?(r=n.x,i=n.y):s>0&&(r+=a*s,i+=o*s)}return a=e.x-r,o=e.y-i,a*a+o*o}function i(e,t){for(var r=e[0],i=[r],a,o=1,s=e.length;o<s;o++)a=e[o],n(a,r)>t&&(i.push(a),r=a);return r!==a&&i.push(a),i}function a(e,t,n,i,o){for(var s=i,c,l=t+1;l<n;l++){var u=r(e[l],e[t],e[n]);u>s&&(c=l,s=u)}s>i&&(c-t>1&&a(e,t,c,i,o),o.push(e[c]),n-c>1&&a(e,c,n,i,o))}function o(e,t){var n=e.length-1,r=[e[0]];return a(e,0,n,t,r),r.push(e[n]),r}t.exports=function(e,t,n){t===void 0&&(t=1),n===void 0&&(n=!1);var r=e.points;if(r.length>2){var a=t*t;n||(r=i(r,a)),e.setTo(o(r,a))}return e}})),br=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @author       Igor Ognichenko <ognichenko.igor@gmail.com>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=function(e,t){return e[0]=t[0],e[1]=t[1],e};t.exports=function(e){var t,r=[],i=e.points;for(t=0;t<i.length;t++)r.push([i[t].x,i[t].y]);var a=[];for(r.length>0&&a.push(n([0,0],r[0])),t=0;t<r.length-1;t++){var o=r[t],s=r[t+1],c=o[0],l=o[1],u=s[0],d=s[1];a.push([.85*c+.15*u,.85*l+.15*d]),a.push([.15*c+.85*u,.15*l+.85*d])}return r.length>1&&a.push(n([0,0],r[r.length-1])),e.setTo(a)}})),xr=o(((e,t)=>{t.exports=function(e,t,n){for(var r=e.points,i=0;i<r.length;i++)r[i].x+=t,r[i].y+=n;return e}})),Sr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=fr();n.Clone=pr(),n.Contains=lr(),n.ContainsPoint=mr(),n.Earcut=hr(),n.GetAABB=gr(),n.GetNumberArray=_r(),n.GetPoints=dr(),n.Perimeter=ur(),n.Reverse=vr(),n.Simplify=yr(),n.Smooth=br(),n.Translate=xr(),t.exports=n})),Cr=o(((e,t)=>{t.exports=function(e){return e.width*e.height}})),wr=o(((e,t)=>{t.exports=function(e){return e.x=Math.ceil(e.x),e.y=Math.ceil(e.y),e}})),Tr=o(((e,t)=>{t.exports=function(e){return e.x=Math.ceil(e.x),e.y=Math.ceil(e.y),e.width=Math.ceil(e.width),e.height=Math.ceil(e.height),e}})),Er=o(((e,t)=>{t.exports=function(e,t,n){return e.x=t-e.width/2,e.y=n-e.height/2,e}})),Dr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e){return new n(e.x,e.y,e.width,e.height)}})),Or=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=W();t.exports=function(e,t){return n(e,t.x,t.y)}})),kr=o(((e,t)=>{t.exports=function(e,t){return t.width*t.height>e.width*e.height?!1:t.x>e.x&&t.x<e.right&&t.right>e.x&&t.right<e.right&&t.y>e.y&&t.y<e.bottom&&t.bottom>e.y&&t.bottom<e.bottom}})),Ar=o(((e,t)=>{t.exports=function(e,t){return t.setTo(e.x,e.y,e.width,e.height)}})),jr=o(((e,t)=>{t.exports=function(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}})),Mr=o(((e,t)=>{t.exports=function(e){return e.height===0?NaN:e.width/e.height}})),Nr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Mr();t.exports=function(e,t){var r=n(e);return r<n(t)?e.setSize(t.height*r,t.height):e.setSize(t.width,t.width/r),e.setPosition(t.centerX-e.width/2,t.centerY-e.height/2)}})),Pr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Mr();t.exports=function(e,t){var r=n(e);return r>n(t)?e.setSize(t.height*r,t.height):e.setSize(t.width,t.width/r),e.setPosition(t.centerX-e.width/2,t.centerY-e.height/2)}})),Fr=o(((e,t)=>{t.exports=function(e){return e.x=Math.floor(e.x),e.y=Math.floor(e.y),e}})),Ir=o(((e,t)=>{t.exports=function(e){return e.x=Math.floor(e.x),e.y=Math.floor(e.y),e.width=Math.floor(e.width),e.height=Math.floor(e.height),e}})),Lr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q(),r=z();t.exports=function(e,t){if(t===void 0&&(t=new n),e.length===0)return t;for(var i=Number.MAX_VALUE,a=Number.MAX_VALUE,o=r.MIN_SAFE_INTEGER,s=r.MIN_SAFE_INTEGER,c,l,u,d=0;d<e.length;d++)c=e[d],Array.isArray(c)?(l=c[0],u=c[1]):(l=c.x,u=c.y),i=Math.min(i,l),a=Math.min(a,u),o=Math.max(o,l),s=Math.max(s,u);return t.x=i,t.y=a,t.width=o-i,t.height=s-a,t}})),Rr=o(((e,t)=>{
/**
* @author       samme
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e,t,r,i,a){return a===void 0&&(a=new n),a.setTo(Math.min(e,r),Math.min(t,i),Math.abs(e-r),Math.abs(t-i))}})),zr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=e.centerX,t.y=e.centerY,t}})),Br=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=e.width,t.y=e.height,t}})),Vr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Er();t.exports=function(e,t,r){var i=e.centerX,a=e.centerY;return e.setSize(e.width+t*2,e.height+r*2),n(e,i,a)}})),Hr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q(),r=qe();t.exports=function(e,t,i){return i===void 0&&(i=new n),r(e,t)?(i.x=Math.max(e.x,t.x),i.y=Math.max(e.y,t.y),i.width=Math.min(e.right,t.right)-i.x,i.height=Math.min(e.bottom,t.bottom)-i.y):i.setEmpty(),i}})),Ur=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=G(),r=F();t.exports=function(e,t,i,a){if(a===void 0&&(a=[]),!t&&!i)return a;t?i=Math.round(n(e)/t):t=n(e)/i;for(var o=e.x,s=e.y,c=0,l=0;l<i;l++)switch(a.push(new r(o,s)),c){case 0:o+=t,o>=e.right&&(c=1,s+=o-e.right,o=e.right);break;case 1:s+=t,s>=e.bottom&&(c=2,o-=s-e.bottom,s=e.bottom);break;case 2:o-=t,o<=e.left&&(c=3,s-=e.left-o,o=e.left);break;case 3:s-=t,s<=e.top&&(c=0,s=e.top);break}return a}})),Wr=o(((e,t)=>{t.exports=function(e,t){for(var n=e.x,r=e.right,i=e.y,a=e.bottom,o=0;o<t.length;o++)n=Math.min(n,t[o].x),r=Math.max(r,t[o].x),i=Math.min(i,t[o].y),a=Math.max(a,t[o].y);return e.x=n,e.y=i,e.width=r-n,e.height=a-i,e}})),Gr=o(((e,t)=>{t.exports=function(e,t){var n=Math.min(e.x,t.x),r=Math.max(e.right,t.right);e.x=n,e.width=r-n;var i=Math.min(e.y,t.y),a=Math.max(e.bottom,t.bottom);return e.y=i,e.height=a-i,e}})),Kr=o(((e,t)=>{t.exports=function(e,t,n){var r=Math.min(e.x,t),i=Math.max(e.right,t);e.x=r,e.width=i-r;var a=Math.min(e.y,n),o=Math.max(e.bottom,n);return e.y=a,e.height=o-a,e}})),qr=o(((e,t)=>{t.exports=function(e,t,n){return e.x+=t,e.y+=n,e}})),Jr=o(((e,t)=>{t.exports=function(e,t){return e.x+=t.x,e.y+=t.y,e}})),Yr=o(((e,t)=>{t.exports=function(e,t){return e.x<t.right&&e.right>t.x&&e.y<t.bottom&&e.bottom>t.y}})),Xr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z();t.exports=function(e){return e*n.DEG_TO_RAD}})),Zr=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=Xr();t.exports=function(e,t,i){i===void 0&&(i=new n),t=r(t);var a=Math.sin(t),o=Math.cos(t),s=o>0?e.width/2:e.width/-2,c=a>0?e.height/2:e.height/-2;return Math.abs(s*a)<Math.abs(c*o)?c=s*a/o:s=c*o/a,i.x=s+e.centerX,i.y=c+e.centerY,i}})),Qr=o(((e,t)=>{t.exports=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}})),$r=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Qr(),r=kr(),i=F();t.exports=function(e,t,a){if(a===void 0&&(a=new i),r(e,t))switch(n(0,3)){case 0:a.x=e.x+Math.random()*(t.right-e.x),a.y=e.y+Math.random()*(t.top-e.y);break;case 1:a.x=t.x+Math.random()*(e.right-t.x),a.y=t.bottom+Math.random()*(e.bottom-t.bottom);break;case 2:a.x=e.x+Math.random()*(t.x-e.x),a.y=t.y+Math.random()*(e.bottom-t.y);break;case 3:a.x=t.right+Math.random()*(e.right-t.right),a.y=e.y+Math.random()*(t.bottom-e.y);break}return a}})),ei=o(((e,t)=>{t.exports=function(e,t){return e.width===t.width&&e.height===t.height}})),ti=o(((e,t)=>{t.exports=function(e,t,n){return n===void 0&&(n=t),e.width*=t,e.height*=n,e}})),ni=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();t.exports=function(e,t,r){r===void 0&&(r=new n);var i=Math.min(e.x,t.x),a=Math.min(e.y,t.y),o=Math.max(e.right,t.right)-i,s=Math.max(e.bottom,t.bottom)-a;return r.setTo(i,a,o,s)}})),ri=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Q();n.Area=Cr(),n.Ceil=wr(),n.CeilAll=Tr(),n.CenterOn=Er(),n.Clone=Dr(),n.Contains=W(),n.ContainsPoint=Or(),n.ContainsRect=kr(),n.CopyFrom=Ar(),n.Decompose=Ze(),n.Equals=jr(),n.FitInside=Nr(),n.FitOutside=Pr(),n.Floor=Fr(),n.FloorAll=Ir(),n.FromPoints=Lr(),n.FromXY=Rr(),n.GetAspectRatio=Mr(),n.GetCenter=zr(),n.GetPoint=se(),n.GetPoints=K(),n.GetSize=Br(),n.Inflate=Vr(),n.Intersection=Hr(),n.MarchingAnts=Ur(),n.MergePoints=Wr(),n.MergeRect=Gr(),n.MergeXY=Kr(),n.Offset=qr(),n.OffsetPoint=Jr(),n.Overlaps=Yr(),n.Perimeter=G(),n.PerimeterPoint=Zr(),n.Random=ue(),n.RandomOutside=$r(),n.SameDimensions=ei(),n.Scale=ti(),n.Union=ni(),t.exports=n})),ii=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F(),r=q();t.exports=function(e,t,i){i===void 0&&(i=new n);var a=e.getLineA(),o=e.getLineB(),s=e.getLineC();if(t<=0||t>=1)return i.x=a.x1,i.y=a.y1,i;var c=r(a),l=r(o),u=r(s),d=(c+l+u)*t,f=0;return d<c?(f=d/c,i.x=a.x1+(a.x2-a.x1)*f,i.y=a.y1+(a.y2-a.y1)*f):d>c+l?(d-=c+l,f=d/u,i.x=s.x1+(s.x2-s.x1)*f,i.y=s.y1+(s.y2-s.y1)*f):(d-=c,f=d/l,i.x=o.x1+(o.x2-o.x1)*f,i.y=o.y1+(o.y2-o.y1)*f),i}})),ai=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=q(),r=F();t.exports=function(e,t,i,a){a===void 0&&(a=[]);var o=e.getLineA(),s=e.getLineB(),c=e.getLineC(),l=n(o),u=n(s),d=n(c),f=l+u+d;!t&&i>0&&(t=f/i);for(var p=0;p<t;p++){var m=p/t*f,h=0,g=new r;m<l?(h=m/l,g.x=o.x1+(o.x2-o.x1)*h,g.y=o.y1+(o.y2-o.y1)*h):m>l+u?(m-=l+u,h=m/d,g.x=c.x1+(c.x2-c.x1)*h,g.y=c.y1+(c.y2-c.y1)*h):(m-=l,h=m/u,g.x=s.x1+(s.x2-s.x1)*h,g.y=s.y1+(s.y2-s.y1)*h),a.push(g)}return a}})),oi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){t===void 0&&(t=new n);var r=e.x2-e.x1,i=e.y2-e.y1,a=e.x3-e.x1,o=e.y3-e.y1,s=Math.random(),c=Math.random();return s+c>=1&&(s=1-s,c=1-c),t.x=e.x1+(r*s+a*c),t.y=e.y1+(i*s+o*c),t}})),si=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=et(),i=ii(),a=ai(),o=A(),s=Z(),c=oi();t.exports=new n({initialize:function(e,t,n,r,i,a){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=0),a===void 0&&(a=0),this.type=o.TRIANGLE,this.x1=e,this.y1=t,this.x2=n,this.y2=r,this.x3=i,this.y3=a},contains:function(e,t){return r(this,e,t)},getPoint:function(e,t){return i(this,e,t)},getPoints:function(e,t,n){return a(this,e,t,n)},getRandomPoint:function(e){return c(this,e)},setTo:function(e,t,n,r,i,a){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=0),a===void 0&&(a=0),this.x1=e,this.y1=t,this.x2=n,this.y2=r,this.x3=i,this.y3=a,this},getLineA:function(e){return e===void 0&&(e=new s),e.setTo(this.x1,this.y1,this.x2,this.y2),e},getLineB:function(e){return e===void 0&&(e=new s),e.setTo(this.x2,this.y2,this.x3,this.y3),e},getLineC:function(e){return e===void 0&&(e=new s),e.setTo(this.x3,this.y3,this.x1,this.y1),e},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(e){var t=0;t=this.x1<=this.x2&&this.x1<=this.x3?this.x1-e:this.x2<=this.x1&&this.x2<=this.x3?this.x2-e:this.x3-e,this.x1-=t,this.x2-=t,this.x3-=t}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(e){var t=0;t=this.x1>=this.x2&&this.x1>=this.x3?this.x1-e:this.x2>=this.x1&&this.x2>=this.x3?this.x2-e:this.x3-e,this.x1-=t,this.x2-=t,this.x3-=t}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(e){var t=0;t=this.y1<=this.y2&&this.y1<=this.y3?this.y1-e:this.y2<=this.y1&&this.y2<=this.y3?this.y2-e:this.y3-e,this.y1-=t,this.y2-=t,this.y3-=t}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(e){var t=0;t=this.y1>=this.y2&&this.y1>=this.y3?this.y1-e:this.y2>=this.y1&&this.y2>=this.y3?this.y2-e:this.y3-e,this.y1-=t,this.y2-=t,this.y3-=t}}})})),ci=o(((e,t)=>{t.exports=function(e){var t=e.x1,n=e.y1,r=e.x2,i=e.y2,a=e.x3,o=e.y3;return Math.abs(((a-t)*(i-n)-(r-t)*(o-n))/2)}})),li=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=si();t.exports=function(e,t,r){var i=Math.sqrt(3)/2*r;return new n(e,t,e+r/2,t+i,e-r/2,t+i)}})),ui=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=hr(),r=si();t.exports=function(e,t,i,a,o){t===void 0&&(t=null),i===void 0&&(i=1),a===void 0&&(a=1),o===void 0&&(o=[]);for(var s=n(e,t),c,l,u,d,f,p,m,h,g,_=0;_<s.length;_+=3)c=s[_],l=s[_+1],u=s[_+2],d=e[c*2]*i,f=e[c*2+1]*a,p=e[l*2]*i,m=e[l*2+1]*a,h=e[u*2]*i,g=e[u*2+1]*a,o.push(new r(d,f,p,m,h,g));return o}})),di=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=si();t.exports=function(e,t,r,i){return i===void 0&&(i=r),new n(e,t,e,t-i,e+r,t)}})),fi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();t.exports=function(e,t){return t===void 0&&(t=new n),t.x=(e.x1+e.x2+e.x3)/3,t.y=(e.y1+e.y2+e.y3)/3,t}})),pi=o(((e,t)=>{t.exports=function(e,t,n){return e.x1+=t,e.y1+=n,e.x2+=t,e.y2+=n,e.x3+=t,e.y3+=n,e}})),mi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=fi(),r=pi();t.exports=function(e,t,i,a){a===void 0&&(a=n);var o=a(e);return r(e,t-o.x,i-o.y)}})),hi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=X();function r(e,t,n,r){return e*r-t*n}t.exports=function(e,t){t===void 0&&(t=new n);var i=e.x3,a=e.y3,o=e.x1-i,s=e.y1-a,c=e.x2-i,l=e.y2-a,u=2*r(o,s,c,l),d=r(s,o*o+s*s,l,c*c+l*l),f=r(o,o*o+s*s,c,c*c+l*l);return t.x=i-d/u,t.y=a+f/u,t}})),gi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=U();t.exports=function(e,t){t===void 0&&(t=new n);var r=e.x1,i=e.y1,a=e.x2,o=e.y2,s=e.x3,c=e.y3,l=a-r,u=o-i,d=s-r,f=c-i,p=l*(r+a)+u*(i+o),m=d*(r+s)+f*(i+c),h=2*(l*(c-o)-u*(s-a)),g,_;if(Math.abs(h)<1e-6){var v=Math.min(r,a,s),y=Math.min(i,o,c);g=(Math.max(r,a,s)-v)*.5,_=(Math.max(i,o,c)-y)*.5,t.x=v+g,t.y=y+_,t.radius=Math.sqrt(g*g+_*_)}else t.x=(f*p-u*m)/h,t.y=(l*m-d*p)/h,g=t.x-r,_=t.y-i,t.radius=Math.sqrt(g*g+_*_);return t}})),_i=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=si();t.exports=function(e){return new n(e.x1,e.y1,e.x2,e.y2,e.x3,e.y3)}})),vi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=et();t.exports=function(e,t){return n(e,t.x,t.y)}})),yi=o(((e,t)=>{t.exports=function(e,t){return t.setTo(e.x1,e.y1,e.x2,e.y2,e.x3,e.y3)}})),bi=o(((e,t)=>{t.exports=function(e,t){return e.x1===t.x1&&e.y1===t.y1&&e.x2===t.x2&&e.y2===t.y2&&e.x3===t.x3&&e.y3===t.y3}})),xi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=F();function r(e,t,n,r){var i=e-n,a=t-r,o=i*i+a*a;return Math.sqrt(o)}t.exports=function(e,t){t===void 0&&(t=new n);var i=e.x1,a=e.y1,o=e.x2,s=e.y2,c=e.x3,l=e.y3,u=r(c,l,o,s),d=r(i,a,c,l),f=r(o,s,i,a),p=u+d+f;return t.x=(i*u+o*d+c*f)/p,t.y=(a*u+s*d+l*f)/p,t}})),Si=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=q();t.exports=function(e){var t=e.getLineA(),r=e.getLineB(),i=e.getLineC();return n(t)+n(r)+n(i)}})),Ci=o(((e,t)=>{t.exports=function(e,t,n,r){var i=Math.cos(r),a=Math.sin(r),o=e.x1-t,s=e.y1-n;return e.x1=o*i-s*a+t,e.y1=o*a+s*i+n,o=e.x2-t,s=e.y2-n,e.x2=o*i-s*a+t,e.y2=o*a+s*i+n,o=e.x3-t,s=e.y3-n,e.x3=o*i-s*a+t,e.y3=o*a+s*i+n,e}})),wi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ci(),r=xi();t.exports=function(e,t){var i=r(e);return n(e,i.x,i.y,t)}})),Ti=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ci();t.exports=function(e,t,r){return n(e,t.x,t.y,r)}})),Ei=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=si();n.Area=ci(),n.BuildEquilateral=li(),n.BuildFromPolygon=ui(),n.BuildRight=di(),n.CenterOn=mi(),n.Centroid=fi(),n.CircumCenter=hi(),n.CircumCircle=gi(),n.Clone=_i(),n.Contains=et(),n.ContainsArray=Xe(),n.ContainsPoint=vi(),n.CopyFrom=yi(),n.Decompose=at(),n.Equals=bi(),n.GetPoint=ii(),n.GetPoints=ai(),n.InCenter=xi(),n.Perimeter=Si(),n.Offset=pi(),n.Random=oi(),n.Rotate=wi(),n.RotateAroundPoint=Ti(),n.RotateAroundXY=Ci(),t.exports=n})),Di=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=A(),r=M(),i={Circle:me(),Ellipse:je(),Intersects:dt(),Line:Nn(),Mesh:Kn(),Point:cr(),Polygon:Sr(),Rectangle:ri(),Triangle:Ei()};i=r(!1,i,n),t.exports=i})),Oi=o(((e,t)=>{t.exports=function(e,t,n,r){return Math.atan2(r-t,n-e)}})),ki=o(((e,t)=>{t.exports=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)}})),Ai=o(((e,t)=>{t.exports=function(e,t){return Math.atan2(t.x-e.x,t.y-e.y)}})),ji=o(((e,t)=>{t.exports=function(e,t,n,r){return Math.atan2(n-e,r-t)}})),Mi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z();t.exports=function(e){return e>Math.PI&&(e-=n.PI2),Math.abs(((e+n.TAU)%n.PI2-n.PI2)%n.PI2)}})),Ni=o(((e,t)=>{t.exports=function(e){return e%=2*Math.PI,e>=0?e:e+2*Math.PI}})),Pi=o(((e,t)=>{
/**
* @author       samme
* @copyright    2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ni();t.exports=function(e,t){return n(t-e)}})),Fi=o(((e,t)=>{
/**
* @author       samme
* @copyright    2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ni(),r=2*Math.PI;t.exports=function(e,t){var i=n(t-e);return i>0&&(i-=r),i}})),Ii=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=bn();t.exports=function(e){return n(e,-Math.PI,Math.PI)}})),Li=o(((e,t)=>{
/**
* @author       samme
* @copyright    2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ii();t.exports=function(e,t){return n(t-e)}})),Ri=o(((e,t)=>{t.exports=function(e,t){return Math.random()*(t-e)+e}})),zi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @author       @samme
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ri();t.exports=function(){return n(-Math.PI,Math.PI)}})),Bi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @author       @samme
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ri();t.exports=function(){return n(-180,180)}})),Vi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=Ni();t.exports=function(e){return n(e+Math.PI)}})),Hi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z();t.exports=function(e,t,r){return r===void 0&&(r=.05),e===t||(Math.abs(t-e)<=r||Math.abs(t-e)>=n.PI2-r?e=t:(Math.abs(t-e)>Math.PI&&(t<e?t+=n.PI2:t-=n.PI2),t>e?e+=r:t<e&&(e-=r))),e}})),Ui=o(((e,t)=>{t.exports=function(e,t){var n=t-e;return n===0?0:n-Math.floor((n- -180)/360)*360}})),Wi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=bn();t.exports=function(e){return n(e,-180,180)}})),Gi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={Between:Oi(),BetweenPoints:ki(),BetweenPointsY:Ai(),BetweenY:ji(),CounterClockwise:Mi(),GetClockwiseDistance:Pi(),GetCounterClockwiseDistance:Fi(),GetShortestDistance:Li(),Normalize:Ni(),Random:zi(),RandomDegrees:Bi(),Reverse:Vi(),RotateTo:Hi(),ShortestBetween:Ui(),Wrap:Ii(),WrapDegrees:Wi()}})),Ki=o(((e,t)=>{t.exports=function(e,t){var n=e.x-t.x,r=e.y-t.y;return n*n+r*r}})),qi=o(((e,t)=>{t.exports=function(e,t,n,r){return Math.max(Math.abs(e-n),Math.abs(t-r))}})),Ji=o(((e,t)=>{t.exports=function(e,t,n,r,i){return i===void 0&&(i=2),Math.sqrt((n-e)**+i+(r-t)**+i)}})),Yi=o(((e,t)=>{t.exports=function(e,t,n,r){return Math.abs(e-n)+Math.abs(t-r)}})),Xi=o(((e,t)=>{t.exports=function(e,t,n,r){var i=e-n,a=t-r;return i*i+a*a}})),Zi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={Between:Me(),BetweenPoints:yt(),BetweenPointsSquared:Ki(),Chebyshev:qi(),Power:Ji(),Snake:Yi(),Squared:Xi()}})),Qi=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={Back:Ct(),Bounce:Dt(),Circular:jt(),Cubic:Ft(),Elastic:zt(),Expo:Ut(),Linear:Gt(),Quadratic:Yt(),Quartic:$t(),Quintic:rn(),Sine:cn(),Stepped:un()}})),$i=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=1e-4),Math.ceil(e-t)}})),ea=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=1e-4),Math.floor(e+t)}})),ta=o(((e,t)=>{t.exports=function(e,t,n){return n===void 0&&(n=1e-4),e>t-n}})),na=o(((e,t)=>{t.exports=function(e,t,n){return n===void 0&&(n=1e-4),e<t+n}})),ra=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={Ceil:$i(),Equal:le(),Floor:ea(),GreaterThan:ta(),LessThan:na()}})),ia=o(((e,t)=>{t.exports=function(e){if(e===0)return 1;for(var t=e;--e;)t*=e;return t}})),aa=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ia();t.exports=function(e,t){return n(e)/n(t)/n(e-t)}})),oa=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=aa();t.exports=function(e,t){for(var r=0,i=e.length-1,a=0;a<=i;a++)r+=(1-t)**(i-a)*t**+a*e[a]*n(i,a);return r}})),sa=o(((e,t)=>{t.exports=function(e,t,n,r,i){var a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}})),ca=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=sa();t.exports=function(e,t){var r=e.length-1,i=r*t,a=Math.floor(i);return e[0]===e[r]?(t<0&&(a=Math.floor(i=r*(1+t))),n(i-a,e[(a-1+r)%r],e[a],e[(a+1)%r],e[(a+2)%r])):t<0?e[0]-(n(-i,e[0],e[0],e[1],e[1])-e[0]):t>1?e[r]-(n(i-r,e[r],e[r],e[r-1],e[r-1])-e[r]):n(i-a,e[a?a-1:0],e[a],e[r<a+1?r:a+1],e[r<a+2?r:a+2])}})),la=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
function n(e,t){var n=1-e;return n*n*n*t}function r(e,t){var n=1-e;return 3*n*n*e*t}function i(e,t){return 3*(1-e)*e*e*t}function a(e,t){return e*e*e*t}t.exports=function(e,t,o,s,c){return n(e,t)+r(e,o)+i(e,s)+a(e,c)}})),ua=o(((e,t)=>{t.exports=function(e,t,n){return(t-e)*n+e}})),da=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ua();t.exports=function(e,t){var r=e.length-1,i=r*t,a=Math.floor(i);return t<0?n(e[0],e[1],i):t>1?n(e[r],e[r-1],r-i):n(e[a],e[a+1>r?r:a+1],i-a)}})),fa=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
function n(e,t){var n=1-e;return n*n*t}function r(e,t){return 2*(1-e)*e*t}function i(e,t){return e*e*t}t.exports=function(e,t,a,o){return n(e,t)+r(e,a)+i(e,o)}})),pa=o(((e,t)=>{t.exports=function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}})),ma=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=pa();t.exports=function(e,t,r){return t+(r-t)*n(e,0,1)}})),ha=o(((e,t)=>{t.exports=function(e,t,n){return e=Math.max(0,Math.min(1,(e-t)/(n-t))),e*e*e*(e*(e*6-15)+10)}})),ga=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=ha();t.exports=function(e,t,r){return t+(r-t)*n(e,0,1)}})),_a=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={Bezier:oa(),CatmullRom:ca(),CubicBezier:la(),Linear:da(),QuadraticBezier:fa(),SmoothStep:ma(),SmootherStep:ga()}})),va=o(((e,t)=>{t.exports=function(e){var t=Math.log(e)/.6931471805599453;return 1<<Math.ceil(t)}})),ya=o(((e,t)=>{t.exports=function(e,t){return e>0&&(e&e-1)==0&&t>0&&(t&t-1)==0}})),ba=o(((e,t)=>{t.exports=function(e){return e>0&&(e&e-1)==0}})),xa=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={GetNext:va(),IsSize:ya(),IsValue:ba()}})),Sa=o(((e,t)=>{t.exports=function(e,t,n,r){return n===void 0&&(n=0),t===0?e:(e-=n,e=t*Math.ceil(e/t),r?(n+e)/t:n+e)}})),Ca=o(((e,t)=>{t.exports=function(e,t,n,r){return n===void 0&&(n=0),t===0?e:(e-=n,e=t*Math.floor(e/t),r?(n+e)/t:n+e)}})),wa=o(((e,t)=>{t.exports=function(e,t,n,r){return n===void 0&&(n=0),t===0?e:(e-=n,e=t*Math.round(e/t),r?(n+e)/t:n+e)}})),Ta=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
t.exports={Ceil:Sa(),Floor:Ca(),To:wa()}})),Ea=o(((e,t)=>{t.exports=new(N())({initialize:function(e){e===void 0&&(e=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],e&&this.init(e)},rnd:function(){var e=2091639*this.s0+this.c*23283064365386963e-26;return this.c=e|0,this.s0=this.s1,this.s1=this.s2,this.s2=e-this.c,this.s2},hash:function(e){var t,n=this.n;e=e.toString();for(var r=0;r<e.length;r++)n+=e.charCodeAt(r),t=.02519603282416938*n,n=t>>>0,t-=n,t*=n,n=t>>>0,t-=n,n+=t*4294967296;return this.n=n,(n>>>0)*23283064365386963e-26},init:function(e){typeof e==`string`?this.state(e):this.sow(e)},sow:function(e){if(this.n=4022871197,this.s0=this.hash(` `),this.s1=this.hash(` `),this.s2=this.hash(` `),this.c=1,e)for(var t=0;t<e.length&&e[t]!=null;t++){var n=e[t];this.s0-=this.hash(n),this.s0+=~~(this.s0<0),this.s1-=this.hash(n),this.s1+=~~(this.s1<0),this.s2-=this.hash(n),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(e,t){return Math.floor(this.realInRange(0,t-e+1)+e)},between:function(e,t){return Math.floor(this.realInRange(0,t-e+1)+e)},realInRange:function(e,t){return this.frac()*(t-e)+e},normal:function(){return 1-2*this.frac()},uuid:function(){var e=``,t=``;for(t=e=``;e++<36;t+=~e%5|e*3&4?(e^15?8^this.frac()*(e^20?16:4):4).toString(16):`-`);return t},pick:function(e){return e[this.integerInRange(0,e.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(e){return e[~~(this.frac()**2*(e.length-.5)+.5)]},timestamp:function(e,t){return this.realInRange(e||9466848e5,t||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(e){return typeof e==`string`&&e.match(/^!rnd/)&&(e=e.split(`,`),this.c=parseFloat(e[1]),this.s0=parseFloat(e[2]),this.s1=parseFloat(e[3]),this.s2=parseFloat(e[4])),[`!rnd`,this.c,this.s0,this.s1,this.s2].join(`,`)},shuffle:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(this.frac()*(t+1)),r=e[n];e[n]=e[t],e[t]=r}return e}})})),Da=o(((e,t)=>{t.exports=function(e){for(var t=0,n=0;n<e.length;n++)t+=+e[n];return t/e.length}})),Oa=o(((e,t)=>{t.exports=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=10);var r=n**+-t;return Math.ceil(e*r)/r}})),ka=o(((e,t)=>{t.exports=function(e,t){return Math.abs(e-t)}})),Aa=o(((e,t)=>{t.exports=function(){}})),ja=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=L(),r=N(),i=In(),a=Aa(),o=new i,s=new r({initialize:function e(t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=e.DefaultOrder),this._x=t,this._y=n,this._z=r,this._order=i,this.onChangeCallback=a},x:{get:function(){return this._x},set:function(e){this._x=e,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(e){this._y=e,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(e){this._z=e,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(e){this._order=e,this.onChangeCallback(this)}},set:function(e,t,n,r){return r===void 0&&(r=this._order),this._x=e,this._y=t,this._z=n,this._order=r,this.onChangeCallback(this),this},copy:function(e){return this.set(e.x,e.y,e.z,e.order)},setFromQuaternion:function(e,t,n){return t===void 0&&(t=this._order),n===void 0&&(n=!1),o.fromQuat(e),this.setFromRotationMatrix(o,t,n)},setFromRotationMatrix:function(e,t,r){t===void 0&&(t=this._order),r===void 0&&(r=!1);var i=e.val,a=i[0],o=i[4],s=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],p=i[10],m=0,h=0,g=0,_=.99999;switch(t){case`XYZ`:h=Math.asin(n(s,-1,1)),Math.abs(s)<_?(m=Math.atan2(-u,p),g=Math.atan2(-o,a)):m=Math.atan2(f,l);break;case`YXZ`:m=Math.asin(-n(u,-1,1)),Math.abs(u)<_?(h=Math.atan2(s,p),g=Math.atan2(c,l)):h=Math.atan2(-d,a);break;case`ZXY`:m=Math.asin(n(f,-1,1)),Math.abs(f)<_?(h=Math.atan2(-d,p),g=Math.atan2(-o,l)):g=Math.atan2(c,a);break;case`ZYX`:h=Math.asin(-n(d,-1,1)),Math.abs(d)<_?(m=Math.atan2(f,p),g=Math.atan2(c,a)):g=Math.atan2(-o,l);break;case`YZX`:g=Math.asin(n(c,-1,1)),Math.abs(c)<_?(m=Math.atan2(-u,l),h=Math.atan2(-d,a)):h=Math.atan2(s,p);break;case`XZY`:g=Math.asin(-n(o,-1,1)),Math.abs(o)<_?(m=Math.atan2(f,l),h=Math.atan2(s,a)):m=Math.atan2(-u,p);break}return this._x=m,this._y=h,this._z=g,this._order=t,r&&this.onChangeCallback(this),this}});s.RotationOrders=[`XYZ`,`YXZ`,`ZXY`,`ZYX`,`YZX`,`XZY`],s.DefaultOrder=`XYZ`,t.exports=s})),Ma=o(((e,t)=>{t.exports=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=10);var r=n**+-t;return Math.floor(e*r)/r}})),Na=o(((e,t)=>{t.exports=function(e,t){return e/t/1e3}})),Pa=o(((e,t)=>{t.exports=function(e){return e==parseFloat(e)?!(e%2):void 0}})),Fa=o(((e,t)=>{t.exports=function(e){return e===parseFloat(e)?!(e%2):void 0}})),Ia=o(((e,t)=>{t.exports=function(e,t,n){return n===void 0&&(n=0),e.clone().lerp(t,n)}})),La=o(((e,t)=>{t.exports=function(e,t,n){return Math.min(e+t,n)}})),Ra=o(((e,t)=>{t.exports=function(e){var t=e.length;if(t===0)return 0;e.sort(function(e,t){return e-t});var n=Math.floor(t/2);return t%2==0?(e[n]+e[n-1])/2:e[n]}})),za=o(((e,t)=>{t.exports=function(e,t,n){return Math.max(e-t,n)}})),Ba=o(((e,t)=>{t.exports=function(e,t,n,r){n===void 0&&(n=t+1);var i=(e-t)/(n-t);return i>1?r===void 0?i=1:(i=(r-e)/(r-n),i<0&&(i=0)):i<0&&(i=0),i}})),Va=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z();t.exports=function(e){return e*n.RAD_TO_DEG}})),Ha=o(((e,t)=>{t.exports=function(e,t){t===void 0&&(t=1);var n=Math.random()*2*Math.PI;return e.x=Math.cos(n)*t,e.y=Math.sin(n)*t,e}})),Ua=o(((e,t)=>{t.exports=function(e,t){t===void 0&&(t=1);var n=Math.random()*2*Math.PI,r=Math.random()*2-1,i=Math.sqrt(1-r*r)*t;return e.x=Math.cos(n)*i,e.y=Math.sin(n)*i,e.z=r*t,e}})),Wa=o(((e,t)=>{t.exports=function(e,t){return t===void 0&&(t=1),e.x=(Math.random()*2-1)*t,e.y=(Math.random()*2-1)*t,e.z=(Math.random()*2-1)*t,e.w=(Math.random()*2-1)*t,e}})),Ga=o(((e,t)=>{t.exports=function(e,t){var n=e.x,r=e.y;return e.x=n*Math.cos(t)-r*Math.sin(t),e.y=n*Math.sin(t)+r*Math.cos(t),e}})),Ka=o(((e,t)=>{t.exports=function(e,t,n,r){var i=Math.cos(r),a=Math.sin(r),o=e.x-t,s=e.y-n;return e.x=o*i-s*a+t,e.y=o*a+s*i+n,e}})),qa=o(((e,t)=>{t.exports=function(e,t,n,r,i){var a=r+Math.atan2(e.y-n,e.x-t);return e.x=t+i*Math.cos(a),e.y=n+i*Math.sin(a),e}})),Ja=o(((e,t)=>{t.exports=function(e,t,n,r,i){return e.x=t+i*Math.cos(r),e.y=n+i*Math.sin(r),e}})),Ya=o(((e,t)=>{t.exports=function(e){return e>0?Math.ceil(e):Math.floor(e)}})),Xa=o(((e,t)=>{t.exports=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=10);var r=n**+-t;return Math.round(e*r)/r}})),Za=o(((e,t)=>{t.exports=function(e,t,n,r){t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=1),r*=Math.PI/e;for(var i=[],a=[],o=0;o<e;o++)n-=t*r,t+=n*r,i[o]=n,a[o]=t;return{sin:a,cos:i,length:e}}})),Qa=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=X();t.exports=function(e,t,r,i){i===void 0&&(i=new n);var a=0,o=0,s=t*r;return e>0&&e<=s&&(e>t-1?(o=Math.floor(e/t),a=e-o*t):a=e),i.set(a,o)}})),$a=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=X();t.exports=function(e,t,r,i,a,o,s,c){c===void 0&&(c=new n);var l=Math.sin(a),u=Math.cos(a),d=u*o,f=l*o,p=-l*s,m=u*s,h=1/(d*m+p*-f);return c.x=m*h*e+-p*h*t+(i*p-r*m)*h,c.y=d*h*t+-f*h*e+(-i*d+r*f)*h,c}})),eo=o(((e,t)=>{t.exports=function(e,t,n){return Math.abs(e-t)<=n}})),to=o(((e,t)=>{var n=new(N())({initialize:function(e){this.val=new Float32Array(9),e?this.copy(e):this.identity()},clone:function(){return new n(this)},set:function(e){return this.copy(e)},copy:function(e){var t=this.val,n=e.val;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this},fromMat4:function(e){var t=e.val,n=this.val;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[4],n[4]=t[5],n[5]=t[6],n[6]=t[8],n[7]=t[9],n[8]=t[10],this},fromArray:function(e){var t=this.val;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],this},identity:function(){var e=this.val;return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,this},transpose:function(){var e=this.val,t=e[1],n=e[2],r=e[5];return e[1]=e[3],e[2]=e[6],e[3]=t,e[5]=e[7],e[6]=n,e[7]=r,this},invert:function(){var e=this.val,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=-l*i+o*s,f=c*i-a*s,p=t*u+n*d+r*f;return p?(p=1/p,e[0]=u*p,e[1]=(-l*n+r*c)*p,e[2]=(o*n-r*a)*p,e[3]=d*p,e[4]=(l*t-r*s)*p,e[5]=(-o*t+r*i)*p,e[6]=f*p,e[7]=(-c*t+n*s)*p,e[8]=(a*t-n*i)*p,this):null},adjoint:function(){var e=this.val,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return e[0]=a*l-o*c,e[1]=r*c-n*l,e[2]=n*o-r*a,e[3]=o*s-i*l,e[4]=t*l-r*s,e[5]=r*i-t*o,e[6]=i*c-a*s,e[7]=n*s-t*c,e[8]=t*a-n*i,this},determinant:function(){var e=this.val,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*(l*a-o*c)+n*(-l*i+o*s)+r*(c*i-a*s)},multiply:function(e){var t=this.val,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=e.val,f=d[0],p=d[1],m=d[2],h=d[3],g=d[4],_=d[5],v=d[6],y=d[7],b=d[8];return t[0]=f*n+p*a+m*c,t[1]=f*r+p*o+m*l,t[2]=f*i+p*s+m*u,t[3]=h*n+g*a+_*c,t[4]=h*r+g*o+_*l,t[5]=h*i+g*s+_*u,t[6]=v*n+y*a+b*c,t[7]=v*r+y*o+b*l,t[8]=v*i+y*s+b*u,this},translate:function(e){var t=this.val,n=e.x,r=e.y;return t[6]=n*t[0]+r*t[3]+t[6],t[7]=n*t[1]+r*t[4]+t[7],t[8]=n*t[2]+r*t[5]+t[8],this},rotate:function(e){var t=this.val,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=Math.sin(e),l=Math.cos(e);return t[0]=l*n+c*a,t[1]=l*r+c*o,t[2]=l*i+c*s,t[3]=l*a-c*n,t[4]=l*o-c*r,t[5]=l*s-c*i,this},scale:function(e){var t=this.val,n=e.x,r=e.y;return t[0]=n*t[0],t[1]=n*t[1],t[2]=n*t[2],t[3]=r*t[3],t[4]=r*t[4],t[5]=r*t[5],this},fromQuat:function(e){var t=e.x,n=e.y,r=e.z,i=e.w,a=t+t,o=n+n,s=r+r,c=t*a,l=t*o,u=t*s,d=n*o,f=n*s,p=r*s,m=i*a,h=i*o,g=i*s,_=this.val;return _[0]=1-(d+p),_[3]=l+g,_[6]=u-h,_[1]=l-g,_[4]=1-(c+p),_[7]=f+m,_[2]=u+h,_[5]=f-m,_[8]=1-(c+d),this},normalFromMat4:function(e){var t=e.val,n=this.val,r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=r*c-i*s,b=r*l-a*s,x=r*u-o*s,S=i*l-a*c,C=i*u-o*c,w=a*u-o*l,T=d*g-f*h,E=d*_-p*h,D=d*v-m*h,O=f*_-p*g,k=f*v-m*g,A=p*v-m*_,j=y*A-b*k+x*O+S*D-C*E+w*T;return j?(j=1/j,n[0]=(c*A-l*k+u*O)*j,n[1]=(l*D-s*A-u*E)*j,n[2]=(s*k-c*D+u*T)*j,n[3]=(a*k-i*A-o*O)*j,n[4]=(r*A-a*D+o*E)*j,n[5]=(i*D-r*k-o*T)*j,n[6]=(g*w-_*C+v*S)*j,n[7]=(_*x-h*w-v*b)*j,n[8]=(h*C-g*x+v*y)*j,this):null}});t.exports=n})),no=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=N(),r=to(),i=Aa(),a=$(),o=1e-6,s=new Int8Array([1,2,0]),c=new Float32Array([0,0,0]),l=new a(1,0,0),u=new a(0,1,0),d=new a,f=new r;t.exports=new n({initialize:function(e,t,n,r){this.onChangeCallback=i,this.set(e,t,n,r)},x:{get:function(){return this._x},set:function(e){this._x=e,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(e){this._y=e,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(e){this._z=e,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(e){this._w=e,this.onChangeCallback(this)}},copy:function(e){return this.set(e)},set:function(e,t,n,r,i){return i===void 0&&(i=!0),typeof e==`object`?(this._x=e.x||0,this._y=e.y||0,this._z=e.z||0,this._w=e.w||0):(this._x=e||0,this._y=t||0,this._z=n||0,this._w=r||0),i&&this.onChangeCallback(this),this},add:function(e){return this._x+=e.x,this._y+=e.y,this._z+=e.z,this._w+=e.w,this.onChangeCallback(this),this},subtract:function(e){return this._x-=e.x,this._y-=e.y,this._z-=e.z,this._w-=e.w,this.onChangeCallback(this),this},scale:function(e){return this._x*=e,this._y*=e,this._z*=e,this._w*=e,this.onChangeCallback(this),this},length:function(){var e=this.x,t=this.y,n=this.z,r=this.w;return Math.sqrt(e*e+t*t+n*n+r*r)},lengthSq:function(){var e=this.x,t=this.y,n=this.z,r=this.w;return e*e+t*t+n*n+r*r},normalize:function(){var e=this.x,t=this.y,n=this.z,r=this.w,i=e*e+t*t+n*n+r*r;return i>0&&(i=1/Math.sqrt(i),this._x=e*i,this._y=t*i,this._z=n*i,this._w=r*i),this.onChangeCallback(this),this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lerp:function(e,t){t===void 0&&(t=0);var n=this.x,r=this.y,i=this.z,a=this.w;return this.set(n+t*(e.x-n),r+t*(e.y-r),i+t*(e.z-i),a+t*(e.w-a))},rotationTo:function(e,t){var n=e.x*t.x+e.y*t.y+e.z*t.z;return n<-.999999?(d.copy(l).cross(e).length()<o&&d.copy(u).cross(e),d.normalize(),this.setAxisAngle(d,Math.PI)):n>.999999?this.set(0,0,0,1):(d.copy(e).cross(t),this._x=d.x,this._y=d.y,this._z=d.z,this._w=1+n,this.normalize())},setAxes:function(e,t,n){var r=f.val;return r[0]=t.x,r[3]=t.y,r[6]=t.z,r[1]=n.x,r[4]=n.y,r[7]=n.z,r[2]=-e.x,r[5]=-e.y,r[8]=-e.z,this.fromMat3(f).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(e,t){t*=.5;var n=Math.sin(t);return this.set(n*e.x,n*e.y,n*e.z,Math.cos(t))},multiply:function(e){var t=this.x,n=this.y,r=this.z,i=this.w,a=e.x,o=e.y,s=e.z,c=e.w;return this.set(t*c+i*a+n*s-r*o,n*c+i*o+r*a-t*s,r*c+i*s+t*o-n*a,i*c-t*a-n*o-r*s)},slerp:function(e,t){var n=this.x,r=this.y,i=this.z,a=this.w,s=e.x,c=e.y,l=e.z,u=e.w,d=n*s+r*c+i*l+a*u;d<0&&(d=-d,s=-s,c=-c,l=-l,u=-u);var f=1-t,p=t;if(1-d>o){var m=Math.acos(d),h=Math.sin(m);f=Math.sin((1-t)*m)/h,p=Math.sin(t*m)/h}return this.set(f*n+p*s,f*r+p*c,f*i+p*l,f*a+p*u)},invert:function(){var e=this.x,t=this.y,n=this.z,r=this.w,i=e*e+t*t+n*n+r*r,a=i?1/i:0;return this.set(-e*a,-t*a,-n*a,r*a)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(e){e*=.5;var t=this.x,n=this.y,r=this.z,i=this.w,a=Math.sin(e),o=Math.cos(e);return this.set(t*o+i*a,n*o+r*a,r*o-n*a,i*o-t*a)},rotateY:function(e){e*=.5;var t=this.x,n=this.y,r=this.z,i=this.w,a=Math.sin(e),o=Math.cos(e);return this.set(t*o-r*a,n*o+i*a,r*o+t*a,i*o-n*a)},rotateZ:function(e){e*=.5;var t=this.x,n=this.y,r=this.z,i=this.w,a=Math.sin(e),o=Math.cos(e);return this.set(t*o+n*a,n*o-t*a,r*o+i*a,i*o-r*a)},calculateW:function(){var e=this.x,t=this.y,n=this.z;return this.w=-Math.sqrt(1-e*e-t*t-n*n),this},setFromEuler:function(e,t){var n=e.x/2,r=e.y/2,i=e.z/2,a=Math.cos(n),o=Math.cos(r),s=Math.cos(i),c=Math.sin(n),l=Math.sin(r),u=Math.sin(i);switch(e.order){case`XYZ`:this.set(c*o*s+a*l*u,a*l*s-c*o*u,a*o*u+c*l*s,a*o*s-c*l*u,t);break;case`YXZ`:this.set(c*o*s+a*l*u,a*l*s-c*o*u,a*o*u-c*l*s,a*o*s+c*l*u,t);break;case`ZXY`:this.set(c*o*s-a*l*u,a*l*s+c*o*u,a*o*u+c*l*s,a*o*s-c*l*u,t);break;case`ZYX`:this.set(c*o*s-a*l*u,a*l*s+c*o*u,a*o*u-c*l*s,a*o*s+c*l*u,t);break;case`YZX`:this.set(c*o*s+a*l*u,a*l*s+c*o*u,a*o*u-c*l*s,a*o*s-c*l*u,t);break;case`XZY`:this.set(c*o*s-a*l*u,a*l*s-c*o*u,a*o*u+c*l*s,a*o*s+c*l*u,t);break}return this},setFromRotationMatrix:function(e){var t=e.val,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u,f;return d>0?(f=.5/Math.sqrt(d+1),this.set((l-s)*f,(i-c)*f,(a-r)*f,.25/f)):n>o&&n>u?(f=2*Math.sqrt(1+n-o-u),this.set(.25*f,(r+a)/f,(i+c)/f,(l-s)/f)):o>u?(f=2*Math.sqrt(1+o-n-u),this.set((r+a)/f,.25*f,(s+l)/f,(i-c)/f)):(f=2*Math.sqrt(1+u-n-o),this.set((i+c)/f,(s+l)/f,.25*f,(a-r)/f)),this},fromMat3:function(e){var t=e.val,n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),this.w=.5*r,r=.5/r,this._x=(t[7]-t[5])*r,this._y=(t[2]-t[6])*r,this._z=(t[3]-t[1])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=s[i],o=s[a];r=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),c[i]=.5*r,r=.5/r,c[a]=(t[a*3+i]+t[i*3+a])*r,c[o]=(t[o*3+i]+t[i*3+o])*r,this._x=c[0],this._y=c[1],this._z=c[2],this._w=(t[o*3+a]-t[a*3+o])*r}return this.onChangeCallback(this),this}})})),ro=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=$(),r=In(),i=no(),a=new r,o=new i,s=new n;t.exports=function(e,t,n){return o.setAxisAngle(t,n),a.fromRotationTranslation(o,s.set(0,0,0)),e.transformMat4(a)}})),io=o(((e,t)=>{
/**
* @author       Richard Davey <rich@phaser.io>
* @copyright    2013-2025 Phaser Studio Inc.
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
var n=z(),r=M(),i={Angle:Gi(),Distance:Zi(),Easing:Qi(),Fuzzy:ra(),Interpolation:_a(),Pow2:xa(),Snap:Ta(),RandomDataGenerator:Ea(),Average:Da(),Bernstein:aa(),Between:Qr(),CatmullRom:sa(),CeilTo:Oa(),Clamp:L(),DegToRad:Xr(),Difference:ka(),Euler:ja(),Factorial:ia(),FloatBetween:Ri(),FloorTo:Ma(),FromPercent:R(),GetSpeed:Na(),IsEven:Pa(),IsEvenStrict:Fa(),Linear:ua(),LinearXY:Ia(),MaxAdd:La(),Median:Ra(),MinSub:za(),Percent:Ba(),RadToDeg:Va(),RandomXY:Ha(),RandomXYZ:Ua(),RandomXYZW:Wa(),Rotate:Ga(),RotateAround:Ka(),RotateAroundDistance:qa(),RotateTo:Ja(),RoundAwayFromZero:Ya(),RoundTo:Xa(),SinCosTableGenerator:Za(),SmootherStep:ha(),SmoothStep:pa(),ToXY:Qa(),TransformXY:$a(),Within:eo(),Wrap:bn(),Vector2:X(),Vector3:$(),Vector4:Ve(),Matrix3:to(),Matrix4:In(),Quaternion:no(),RotateVec3:ro()};i=r(!1,i,n),t.exports=i})),ao=c(Di(),1),oo=c(io(),1);function so(e,t){let n=new ao.default.Point(0,0),r=oo.default.Angle.BetweenPoints(n,new oo.default.Vector2(e,t));return oo.default.RadToDeg(r)}function co(e,t){let n=e*e+t*t;return n>0?(n=1/Math.sqrt(n),{x:e*n,y:t*n}):{x:e,y:t}}let lo=(e,t,n)=>{let r=e,i=n.velocity,a=n.position,o=n.attack;if(!r.positionByEid)return;let s=o[0],c=s?r.positionByEid[s]:void 0;if(!c)return;let l=a[0],u=a[1],d=co(c.x-l,c.y-u),f=i[2],p=o[1],m=co(i[0]+d.x*p,i[1]+d.y*p),h=m.x*f,g=m.y*f;i[0]=h,i[1]=g,a[4]=so(h,g)};lo.preRun=(e,t,n)=>{let r=e,i={};for(let e of n.targets??[]){let t=e.components.position;t&&(i[e.entityId]={x:t[0],y:t[1]})}r.positionByEid=i},O(self,lo)})();