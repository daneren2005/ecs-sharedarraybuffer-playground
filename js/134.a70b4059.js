(self["webpackChunkecs_arraybuffer"]=self["webpackChunkecs_arraybuffer"]||[]).push([[134],{4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,n,r){"use strict";var i,e,o,s=r(4019),a=r(9781),u=r(7854),h=r(614),c=r(111),f=r(2597),x=r(648),v=r(6330),y=r(8880),p=r(8052),l=r(3070).f,d=r(7976),g=r(9518),M=r(7674),w=r(5112),m=r(9711),z=u.Int8Array,b=z&&z.prototype,I=u.Uint8ClampedArray,C=I&&I.prototype,A=z&&g(z),P=b&&g(b),T=Object.prototype,O=u.TypeError,_=w("toStringTag"),R=m("TYPED_ARRAY_TAG"),L=m("TYPED_ARRAY_CONSTRUCTOR"),E=s&&!!M&&"Opera"!==x(u.opera),S=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},q={BigInt64Array:8,BigUint64Array:8},G=function(t){if(!c(t))return!1;var n=x(t);return"DataView"===n||f(F,n)||f(q,n)},k=function(t){if(!c(t))return!1;var n=x(t);return f(F,n)||f(q,n)},N=function(t){if(k(t))return t;throw O("Target is not a typed array")},Y=function(t){if(h(t)&&(!M||d(A,t)))return t;throw O(v(t)+" is not a typed array constructor")},V=function(t,n,r,i){if(a){if(r)for(var e in F){var o=u[e];if(o&&f(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=n}catch(h){}}}P[t]&&!r||p(P,t,r?n:E&&b[t]||n,i)}},B=function(t,n,r){var i,e;if(a){if(M){if(r)for(i in F)if(e=u[i],e&&f(e,t))try{delete e[t]}catch(o){}if(A[t]&&!r)return;try{return p(A,t,r?n:E&&A[t]||n)}catch(o){}}for(i in F)e=u[i],!e||e[t]&&!r||p(e,t,n)}};for(i in F)e=u[i],o=e&&e.prototype,o?y(o,L,e):E=!1;for(i in q)e=u[i],o=e&&e.prototype,o&&y(o,L,e);if((!E||!h(A)||A===Function.prototype)&&(A=function(){throw O("Incorrect invocation")},E))for(i in F)u[i]&&M(u[i],A);if((!E||!P||P===T)&&(P=A.prototype,E))for(i in F)u[i]&&M(u[i].prototype,P);if(E&&g(C)!==P&&M(C,P),a&&!f(P,_))for(i in S=!0,l(P,_,{get:function(){return c(this)?this[R]:void 0}}),F)u[i]&&y(u[i],R,i);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:E,TYPED_ARRAY_CONSTRUCTOR:L,TYPED_ARRAY_TAG:S&&R,aTypedArray:N,aTypedArrayConstructor:Y,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:B,isView:G,isTypedArray:k,TypedArray:A,TypedArrayPrototype:P}},8544:function(t,n,r){var i=r(7293);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9518:function(t,n,r){var i=r(7854),e=r(2597),o=r(614),s=r(7908),a=r(6200),u=r(8544),h=a("IE_PROTO"),c=i.Object,f=c.prototype;t.exports=u?c.getPrototypeOf:function(t){var n=s(t);if(e(n,h))return n[h];var r=n.constructor;return o(r)&&n instanceof r?r.prototype:n instanceof c?f:null}},4590:function(t,n,r){var i=r(7854),e=r(3002),o=i.RangeError;t.exports=function(t,n){var r=e(t);if(r%n)throw o("Wrong offset");return r}},3002:function(t,n,r){var i=r(7854),e=r(9303),o=i.RangeError;t.exports=function(t){var n=e(t);if(n<0)throw o("The argument can't be less than 0");return n}},2254:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});const i=r(3283),e=r(3129);function o(t,n){let r=new i.Point(0,0),o=e.Angle.BetweenPoints(r,new e.Vector2(t,n));return e.RadToDeg(o)}},364:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t<<16|n<<8|r};t.exports=n},2283:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0};t.exports=n},6853:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(7049),o=r(1799),s=r(9226),a=r(9277),u=r(236),h=new i({initialize:function(t,n,r){void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),this.type=a.CIRCLE,this.x=t,this.y=n,this._radius=r,this._diameter=2*r},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,r){return s(this,t,n,r)},getRandomPoint:function(t){return u(this,t)},setTo:function(t,n,r){return this.x=t,this.y=n,this._radius=r,this._diameter=2*r,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=2*t}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=.5*t}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}});t.exports=h},834:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.PI*t.radius*2};t.exports=n},2550:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r){return void 0===r&&(r=new i),r.x=t.x+t.radius*Math.cos(n),r.y=t.y+t.radius*Math.sin(n),r};t.exports=e},2090:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6853),e=function(t){return new i(t.x,t.y,t.radius)};t.exports=e},7049:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){if(t.radius>0&&n>=t.left&&n<=t.right&&r>=t.top&&r<=t.bottom){var i=(t.x-n)*(t.x-n),e=(t.y-r)*(t.y-r);return i+e<=t.radius*t.radius}return!1};t.exports=n},510:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7049),e=function(t,n){return i(t,n.x,n.y)};t.exports=e},577:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7049),e=function(t,n){return i(t,n.x,n.y)&&i(t,n.right,n.y)&&i(t,n.x,n.bottom)&&i(t,n.right,n.bottom)};t.exports=e},1298:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x,t.y,t.radius)};t.exports=n},9889:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x===n.x&&t.y===n.y&&t.radius===n.radius};t.exports=n},8559:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t,n){return void 0===n&&(n=new i),n.x=t.left,n.y=t.top,n.width=t.diameter,n.height=t.diameter,n};t.exports=e},1799:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2550),e=r(3579),o=r(611),s=r(9106),a=function(t,n,r){void 0===r&&(r=new s);var a=e(n,0,o.PI2);return i(t,a,r)};t.exports=a},9226:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(834),e=r(2550),o=r(3579),s=r(611),a=function(t,n,r,a){void 0===a&&(a=[]),!n&&r>0&&(n=i(t)/r);for(var u=0;u<n;u++){var h=o(u/n,0,s.PI2);a.push(e(t,h))}return a};t.exports=a},6143:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t.x+=n,t.y+=r,t};t.exports=n},6973:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x+=n.x,t.y+=n.y,t};t.exports=n},236:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){void 0===n&&(n=new i);var r=2*Math.PI*Math.random(),e=Math.random()+Math.random(),o=e>1?2-e:e,s=o*Math.cos(r),a=o*Math.sin(r);return n.x=t.x+s*t.radius,n.y=t.y+a*t.radius,n};t.exports=e},3957:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6853);i.Area=r(2283),i.Circumference=r(834),i.CircumferencePoint=r(2550),i.Clone=r(2090),i.Contains=r(7049),i.ContainsPoint=r(510),i.ContainsRect=r(577),i.CopyFrom=r(1298),i.Equals=r(9889),i.GetBounds=r(8559),i.GetPoint=r(1799),i.GetPoints=r(9226),i.Offset=r(6143),i.OffsetPoint=r(6973),i.Random=r(236),t.exports=i},9277:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6};t.exports=n},9946:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI};t.exports=n},1805:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=t.width/2,r=t.height/2,i=Math.pow(n-r,2)/Math.pow(n+r,2);return Math.PI*(n+r)*(1+3*i/(10+Math.sqrt(4-3*i)))};t.exports=n},2472:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r){void 0===r&&(r=new i);var e=t.width/2,o=t.height/2;return r.x=t.x+e*Math.cos(n),r.y=t.y+o*Math.sin(n),r};t.exports=e},6148:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9346),e=function(t){return new i(t.x,t.y,t.width,t.height)};t.exports=e},9783:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){if(t.width<=0||t.height<=0)return!1;var i=(n-t.x)/t.width,e=(r-t.y)/t.height;return i*=i,e*=e,i+e<.25};t.exports=n},7926:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9783),e=function(t,n){return i(t,n.x,n.y)};t.exports=e},3952:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9783),e=function(t,n){return i(t,n.x,n.y)&&i(t,n.right,n.y)&&i(t,n.x,n.bottom)&&i(t,n.right,n.bottom)};t.exports=e},8350:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x,t.y,t.width,t.height)};t.exports=n},9346:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(9783),o=r(5249),s=r(186),a=r(9277),u=r(3546),h=new i({initialize:function(t,n,r,i){void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),this.type=a.ELLIPSE,this.x=t,this.y=n,this.width=r,this.height=i},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,r){return s(this,t,n,r)},getRandomPoint:function(t){return u(this,t)},setTo:function(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},setSize:function(t,n){return void 0===n&&(n=t),this.width=t,this.height=n,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=h},4314:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height};t.exports=n},3399:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t,n){return void 0===n&&(n=new i),n.x=t.left,n.y=t.top,n.width=t.width,n.height=t.height,n};t.exports=e},5249:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2472),e=r(3579),o=r(611),s=r(9106),a=function(t,n,r){void 0===r&&(r=new s);var a=e(n,0,o.PI2);return i(t,a,r)};t.exports=a},186:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1805),e=r(2472),o=r(3579),s=r(611),a=function(t,n,r,a){void 0===a&&(a=[]),!n&&r>0&&(n=i(t)/r);for(var u=0;u<n;u++){var h=o(u/n,0,s.PI2);a.push(e(t,h))}return a};t.exports=a},7978:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t.x+=n,t.y+=r,t};t.exports=n},1486:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x+=n.x,t.y+=n.y,t};t.exports=n},3546:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){void 0===n&&(n=new i);var r=Math.random()*Math.PI*2,e=Math.sqrt(Math.random());return n.x=t.x+e*Math.cos(r)*t.width/2,n.y=t.y+e*Math.sin(r)*t.height/2,n};t.exports=e},6682:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9346);i.Area=r(9946),i.Circumference=r(1805),i.CircumferencePoint=r(2472),i.Clone=r(6148),i.Contains=r(9783),i.ContainsPoint=r(7926),i.ContainsRect=r(3952),i.CopyFrom=r(8350),i.Equals=r(4314),i.GetBounds=r(3399),i.GetPoint=r(5249),i.GetPoints=r(186),i.Offset=r(7978),i.OffsetPoint=r(1486),i.Random=r(3546),t.exports=i},3283:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9277),e=r(2037),o={Circle:r(3957),Ellipse:r(6682),Intersects:r(6329),Line:r(4420),Mesh:r(8864),Point:r(7866),Polygon:r(5147),Rectangle:r(5244),Triangle:r(6636)};o=e(!1,o,i),t.exports=o},3278:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6052),e=function(t,n){return i(t.x,t.y,n.x,n.y)<=t.radius+n.radius};t.exports=e},8779:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=n.width/2,i=n.height/2,e=Math.abs(t.x-n.x-r),o=Math.abs(t.y-n.y-i),s=r+t.radius,a=i+t.radius;if(e>s||o>a)return!1;if(e<=r||o<=i)return!0;var u=e-r,h=o-i,c=u*u,f=h*h,x=t.radius*t.radius;return c+f<=x};t.exports=n},1819:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(3278),o=function(t,n,r){if(void 0===r&&(r=[]),e(t,n)){var o,s,a,u,h,c=t.x,f=t.y,x=t.radius,v=n.x,y=n.y,p=n.radius;if(f===y)h=(p*p-x*x-v*v+c*c)/(2*(c-v)),o=1,s=-2*y,a=v*v+h*h-2*v*h+y*y-p*p,u=s*s-4*o*a,0===u?r.push(new i(h,-s/(2*o))):u>0&&(r.push(new i(h,(-s+Math.sqrt(u))/(2*o))),r.push(new i(h,(-s-Math.sqrt(u))/(2*o))));else{var l=(c-v)/(f-y),d=(p*p-x*x-v*v+c*c-y*y+f*f)/(2*(f-y));o=l*l+1,s=2*f*l-2*d*l-2*c,a=c*c+f*f+d*d-x*x-2*f*d,u=s*s-4*o*a,0===u?(h=-s/(2*o),r.push(new i(h,d-h*l))):u>0&&(h=(-s+Math.sqrt(u))/(2*o),r.push(new i(h,d-h*l)),h=(-s-Math.sqrt(u))/(2*o),r.push(new i(h,d-h*l)))}}return r};t.exports=o},3786:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1346),e=r(8779),o=function(t,n,r){if(void 0===r&&(r=[]),e(t,n)){var o=n.getLineA(),s=n.getLineB(),a=n.getLineC(),u=n.getLineD();i(o,t,r),i(s,t,r),i(a,t,r),i(u,t,r)}return r};t.exports=o},1346:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(1242),o=function(t,n,r){if(void 0===r&&(r=[]),e(t,n)){var o,s,a=t.x1,u=t.y1,h=t.x2,c=t.y2,f=n.x,x=n.y,v=n.radius,y=h-a,p=c-u,l=a-f,d=u-x,g=y*y+p*p,M=2*(y*l+p*d),w=l*l+d*d-v*v,m=M*M-4*g*w;if(0===m){var z=-M/(2*g);o=a+z*y,s=u+z*p,z>=0&&z<=1&&r.push(new i(o,s))}else if(m>0){var b=(-M-Math.sqrt(m))/(2*g);o=a+b*y,s=u+b*p,b>=0&&b<=1&&r.push(new i(o,s));var I=(-M+Math.sqrt(m))/(2*g);o=a+I*y,s=u+I*p,I>=0&&I<=1&&r.push(new i(o,s))}}return r};t.exports=o},2013:function(t,n,r){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2220),e=function(t,n,r){var e=t.x1,o=t.y1,s=t.x2,a=t.y2,u=n.x1,h=n.y1,c=n.x2,f=n.y2,x=s-e,v=a-o,y=c-u,p=f-h,l=p*x-y*v;if(0===x||0===l)return!1;var d=(x*(h-o)+v*(e-u))/(y*v-p*x),g=(u+y*d-e)/x;return g<0||d<0||d>1?null:(void 0===r&&(r=new i),r.set(e+x*g,o+v*g,g))};t.exports=e},5419:function(t,n,r){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2220),e=r(2013),o=r(9778),s=new o,a=new i,u=function(t,n,r){void 0===r&&(r=new i);var o=!1;r.set(),a.set();for(var u=n[0],h=1;h<n.length;h++){var c=n[h];s.setTo(u.x,u.y,c.x,c.y),u=c,e(t,s,a)&&(!o||a.z<r.z)&&(r.copy(a),o=!0)}return o?r:null};t.exports=u},8202:function(t,n,r){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2220),e=r(3963),o=r(5419),s=new i,a=function(t,n,r){void 0===r&&(r=new e),Array.isArray(n)||(n=[n]);var i=!1;r.set(),s.set();for(var a=0;a<n.length;a++)o(t,n[a].points,s)&&(!i||s.z<r.z)&&(r.set(s.x,s.y,s.z,a),i=!0);return i?r:null};t.exports=a},5377:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(2670),o=r(2181),s=function(t,n,r){if(void 0===r&&(r=[]),o(t,n))for(var s=n.getLineA(),a=n.getLineB(),u=n.getLineC(),h=n.getLineD(),c=[new i,new i,new i,new i],f=[e(s,t,c[0]),e(a,t,c[1]),e(u,t,c[2]),e(h,t,c[3])],x=0;x<4;x++)f[x]&&r.push(c[x]);return r};t.exports=s},6550:function(t,n,r){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3963),e=r(8202),o=r(9778),s=new o;function a(t,n,r,o,a){var u=Math.cos(t),h=Math.sin(t);s.setTo(n,r,n+u,r+h);var c=e(s,o);c&&a.push(new i(c.x,c.y,t,c.w))}function u(t,n){return t.z-n.z}var h=function(t,n,r){Array.isArray(r)||(r=[r]);for(var i=[],e=[],o=0;o<r.length;o++)for(var s=r[o].points,h=0;h<s.length;h++){var c=Math.atan2(s[h].y-n,s[h].x-t);-1===e.indexOf(c)&&(a(c,t,n,r,i),a(c-1e-5,t,n,r,i),a(c+1e-5,t,n,r,i),e.push(c))}return i.sort(u)};t.exports=h},8422:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=r(1756),o=function(t,n,r){return void 0===r&&(r=new i),e(t,n)&&(r.x=Math.max(t.x,n.x),r.y=Math.max(t.y,n.y),r.width=Math.min(t.right,n.right)-r.x,r.height=Math.min(t.bottom,n.bottom)-r.y),r};t.exports=o},5425:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(5377),e=r(1756),o=function(t,n,r){if(void 0===r&&(r=[]),e(t,n)){var o=t.getLineA(),s=t.getLineB(),a=t.getLineC(),u=t.getLineD();i(o,n,r),i(s,n,r),i(a,n,r),i(u,n,r)}return r};t.exports=o},9042:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(8909),e=r(5377),o=function(t,n,r){if(void 0===r&&(r=[]),i(t,n)){var o=n.getLineA(),s=n.getLineB(),a=n.getLineC();e(o,t,r),e(s,t,r),e(a,t,r)}return r};t.exports=o},5725:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1346),e=r(7742),o=function(t,n,r){if(void 0===r&&(r=[]),e(t,n)){var o=t.getLineA(),s=t.getLineB(),a=t.getLineC();i(o,n,r),i(s,n,r),i(a,n,r)}return r};t.exports=o},8841:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(2682),o=r(2670),s=function(t,n,r){if(void 0===r&&(r=[]),e(t,n))for(var s=t.getLineA(),a=t.getLineB(),u=t.getLineC(),h=[new i,new i,new i],c=[o(s,n,h[0]),o(a,n,h[1]),o(u,n,h[2])],f=0;f<3;f++)c[f]&&r.push(h[f]);return r};t.exports=s},2200:function(t,n,r){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4806),e=r(8841),o=function(t,n,r){if(void 0===r&&(r=[]),i(t,n)){var o=n.getLineA(),s=n.getLineB(),a=n.getLineC();e(t,o,r),e(t,s,r),e(t,a,r)}return r};t.exports=o},1242:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7049),e=r(9106),o=new e,s=function(t,n,r){if(void 0===r&&(r=o),i(n,t.x1,t.y1))return r.x=t.x1,r.y=t.y1,!0;if(i(n,t.x2,t.y2))return r.x=t.x2,r.y=t.y2,!0;var e=t.x2-t.x1,s=t.y2-t.y1,a=n.x-t.x1,u=n.y-t.y1,h=e*e+s*s,c=e,f=s;if(h>0){var x=(a*e+u*s)/h;c*=x,f*=x}r.x=t.x1+c,r.y=t.y1+f;var v=c*c+f*f;return v<=h&&c*e+f*s>=0&&i(n,r.x,r.y)};t.exports=s},2670:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r){void 0===r&&(r=new i);var e=t.x1,o=t.y1,s=t.x2,a=t.y2,u=n.x1,h=n.y1,c=n.x2,f=n.y2,x=(c-u)*(o-h)-(f-h)*(e-u),v=(s-e)*(o-h)-(a-o)*(e-u),y=(f-h)*(s-e)-(c-u)*(a-o);if(0===y)return!1;var p=x/y,l=v/y;return p>=0&&p<=1&&l>=0&&l<=1&&(r.x=e+p*(s-e),r.y=o+p*(a-o),!0)};t.exports=e},2181:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=t.x1,i=t.y1,e=t.x2,o=t.y2,s=n.x,a=n.y,u=n.right,h=n.bottom,c=0;if(r>=s&&r<=u&&i>=a&&i<=h||e>=s&&e<=u&&o>=a&&o<=h)return!0;if(r<s&&e>=s){if(c=i+(o-i)*(s-r)/(e-r),c>a&&c<=h)return!0}else if(r>u&&e<=u&&(c=i+(o-i)*(u-r)/(e-r),c>=a&&c<=h))return!0;if(i<a&&o>=a){if(c=r+(e-r)*(a-i)/(o-i),c>=s&&c<=u)return!0}else if(i>h&&o<=h&&(c=r+(e-r)*(h-i)/(o-i),c>=s&&c<=u))return!0;return!1};t.exports=n},985:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){void 0===r&&(r=1);var i=n.x1,e=n.y1,o=n.x2,s=n.y2,a=t.x,u=t.y,h=(o-i)*(o-i)+(s-e)*(s-e);if(0===h)return!1;var c=((a-i)*(o-i)+(u-e)*(s-e))/h;if(c<0)return Math.sqrt((i-a)*(i-a)+(e-u)*(e-u))<=r;if(c>=0&&c<=1){var f=((e-u)*(o-i)-(i-a)*(s-e))/h;return Math.abs(f)*Math.sqrt(h)<=r}return Math.sqrt((o-a)*(o-a)+(s-u)*(s-u))<=r};t.exports=n},1134:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(985),e=function(t,n){if(!i(t,n))return!1;var r=Math.min(n.x1,n.x2),e=Math.max(n.x1,n.x2),o=Math.min(n.y1,n.y2),s=Math.max(n.y1,n.y2);return t.x>=r&&t.x<=e&&t.y>=o&&t.y<=s};t.exports=e},1756:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return!(t.width<=0||t.height<=0||n.width<=0||n.height<=0)&&!(t.right<n.x||t.bottom<n.y||t.x>n.right||t.y>n.bottom)};t.exports=n},8909:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2670),e=r(1305),o=r(4112),s=r(9917),a=function(t,n){if(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)return!1;var r=n.getLineA(),a=n.getLineB(),u=n.getLineC();if(e(t,r.x1,r.y1)||e(t,r.x2,r.y2))return!0;if(e(t,a.x1,a.y1)||e(t,a.x2,a.y2))return!0;if(e(t,u.x1,u.y1)||e(t,u.x2,u.y2))return!0;var h=t.getLineA(),c=t.getLineB(),f=t.getLineC(),x=t.getLineD();if(i(r,h)||i(r,c)||i(r,f)||i(r,x))return!0;if(i(a,h)||i(a,c)||i(a,f)||i(a,x))return!0;if(i(u,h)||i(u,c)||i(u,f)||i(u,x))return!0;var v=s(t),y=o(n,v,!0);return y.length>0};t.exports=a},540:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i,e,o){return void 0===o&&(o=0),!(n>t.right+o||r<t.left-o||i>t.bottom+o||e<t.top-o)};t.exports=n},7742:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1242),e=r(9503),o=function(t,n){return!(t.left>n.right||t.right<n.left||t.top>n.bottom||t.bottom<n.top)&&(!!e(t,n.x,n.y)||(!!i(t.getLineA(),n)||(!!i(t.getLineB(),n)||!!i(t.getLineC(),n))))};t.exports=o},2682:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2670),e=function(t,n){return!(!t.contains(n.x1,n.y1)&&!t.contains(n.x2,n.y2))||(!!i(t.getLineA(),n)||(!!i(t.getLineB(),n)||!!i(t.getLineC(),n)))};t.exports=e},4806:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4112),e=r(3984),o=r(2670),s=function(t,n){if(t.left>n.right||t.right<n.left||t.top>n.bottom||t.bottom<n.top)return!1;var r=t.getLineA(),s=t.getLineB(),a=t.getLineC(),u=n.getLineA(),h=n.getLineB(),c=n.getLineC();if(o(r,u)||o(r,h)||o(r,c))return!0;if(o(s,u)||o(s,h)||o(s,c))return!0;if(o(a,u)||o(a,h)||o(a,c))return!0;var f=e(t),x=i(n,f,!0);return x.length>0||(f=e(n),x=i(t,f,!0),x.length>0)};t.exports=s},6329:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={CircleToCircle:r(3278),CircleToRectangle:r(8779),GetCircleToCircle:r(1819),GetCircleToRectangle:r(3786),GetLineToCircle:r(1346),GetLineToLine:r(2013),GetLineToPoints:r(5419),GetLineToPolygon:r(8202),GetLineToRectangle:r(5377),GetRaysFromPointToPolygon:r(6550),GetRectangleIntersection:r(8422),GetRectangleToRectangle:r(5425),GetRectangleToTriangle:r(9042),GetTriangleToCircle:r(5725),GetTriangleToLine:r(8841),GetTriangleToTriangle:r(2200),LineToCircle:r(1242),LineToLine:r(2670),LineToRectangle:r(2181),PointToLine:r(985),PointToLineSegment:r(1134),RectangleToRectangle:r(1756),RectangleToTriangle:r(8909),RectangleToValues:r(540),TriangleToCircle:r(7742),TriangleToLine:r(2682),TriangleToTriangle:r(4806)}},7518:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)};t.exports=n},5022:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){void 0===n&&(n=1),void 0===r&&(r=[]);var i=Math.round(t.x1),e=Math.round(t.y1),o=Math.round(t.x2),s=Math.round(t.y2),a=Math.abs(o-i),u=Math.abs(s-e),h=i<o?1:-1,c=e<s?1:-1,f=a-u;r.push({x:i,y:e});var x=1;while(i!==o||e!==s){var v=f<<1;v>-u&&(f-=u,i+=h),v<a&&(f+=a,e+=c),x%n===0&&r.push({x:i,y:e}),x++}return r};t.exports=n},5638:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){var i=n-(t.x1+t.x2)/2,e=r-(t.y1+t.y2)/2;return t.x1+=i,t.y1+=e,t.x2+=i,t.y2+=e,t};t.exports=n},9754:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9778),e=function(t){return new i(t.x1,t.y1,t.x2,t.y2)};t.exports=e},7682:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x1,t.y1,t.x2,t.y2)};t.exports=n},9841:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x1===n.x1&&t.y1===n.y1&&t.x2===n.x2&&t.y2===n.y2};t.exports=n},6988:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6753),e=function(t,n,r){void 0===r&&(r=n);var e=i(t),o=t.x2-t.x1,s=t.y2-t.y1;return n&&(t.x1=t.x1-o/e*n,t.y1=t.y1-s/e*n),r&&(t.x2=t.x2+o/e*r,t.y2=t.y2+s/e*r),t};t.exports=e},9552:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(5091),e=r(2124),o=r(9106),s=function(t,n,r,s,a){void 0===s&&(s=0),void 0===a&&(a=[]);var u,h,c=[],f=t.x1,x=t.y1,v=t.x2-f,y=t.y2-x,p=e(n,a),l=r-1;for(u=0;u<l;u++)h=p(u/l),c.push(new o(f+v*h,x+y*h));if(h=p(1),c.push(new o(f+v*h,x+y*h)),s>0){var d=c[0],g=[d];for(u=1;u<c.length-1;u++){var M=c[u];i(d,M)>=s&&(g.push(M),d=M)}var w=c[c.length-1];return i(d,w)<s&&g.pop(),g.push(w),g}return c};t.exports=s},4874:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){return void 0===n&&(n=new i),n.x=(t.x1+t.x2)/2,n.y=(t.y1+t.y2)/2,n};t.exports=e},8533:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r){void 0===r&&(r=new i);var e=t.x1,o=t.y1,s=t.x2,a=t.y2,u=(s-e)*(s-e)+(a-o)*(a-o);if(0===u)return r;var h=((n.x-e)*(s-e)+(n.y-o)*(a-o))/u;return r.x=e+h*(s-e),r.y=o+h*(a-o),r};t.exports=e},1554:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=r(7518),o=r(9106),s=function(t,n){void 0===n&&(n=new o);var r=e(t)-i.TAU;return n.x=Math.cos(r),n.y=Math.sin(r),n};t.exports=s},8874:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r){return void 0===r&&(r=new i),r.x=t.x1+(t.x2-t.x1)*n,r.y=t.y1+(t.y2-t.y1)*n,r};t.exports=e},4605:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6753),e=r(9106),o=function(t,n,r,o){void 0===o&&(o=[]),!n&&r>0&&(n=i(t)/r);for(var s=t.x1,a=t.y1,u=t.x2,h=t.y2,c=0;c<n;c++){var f=c/n,x=s+(u-s)*f,v=a+(h-a)*f;o.push(new e(x,v))}return o};t.exports=o},5082:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=t.x1,i=t.y1,e=t.x2,o=t.y2,s=(e-r)*(e-r)+(o-i)*(o-i);if(0===s)return!1;var a=((i-n.y)*(e-r)-(r-n.x)*(o-i))/s;return Math.abs(a)*Math.sqrt(s)};t.exports=n},3971:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.abs(t.y1-t.y2)};t.exports=n},6753:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))};t.exports=n},9778:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(8874),o=r(4605),s=r(9277),a=r(5715),u=r(9182),h=new i({initialize:function(t,n,r,i){void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),this.type=s.LINE,this.x1=t,this.y1=n,this.x2=r,this.y2=i},getPoint:function(t,n){return e(this,t,n)},getPoints:function(t,n,r){return o(this,t,n,r)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,n,r,i){return void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),this.x1=t,this.y1=n,this.x2=r,this.y2=i,this},getPointA:function(t){return void 0===t&&(t=new u),t.set(this.x1,this.y1),t},getPointB:function(t){return void 0===t&&(t=new u),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}});t.exports=h},1557:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=r(2923),o=r(7518),s=function(t){var n=o(t)-i.TAU;return e(n,-Math.PI,Math.PI)};t.exports=s},7382:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=r(7518),o=function(t){return Math.cos(e(t)-i.TAU)};t.exports=o},8268:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=r(7518),o=function(t){return Math.sin(e(t)-i.TAU)};t.exports=o},7509:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t.x1+=n,t.y1+=r,t.x2+=n,t.y2+=r,t};t.exports=n},5209:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return-(t.x2-t.x1)/(t.y2-t.y1)};t.exports=n},5715:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){void 0===n&&(n=new i);var r=Math.random();return n.x=t.x1+r*(t.x2-t.x1),n.y=t.y1+r*(t.y2-t.y1),n};t.exports=e},2898:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7518),e=r(1557),o=function(t,n){return 2*e(n)-Math.PI-i(t)};t.exports=o},2653:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1070),e=function(t,n){var r=(t.x1+t.x2)/2,e=(t.y1+t.y2)/2;return i(t,r,e,n)};t.exports=e},8348:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1070),e=function(t,n,r){return i(t,n.x,n.y,r)};t.exports=e},1070:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){var e=Math.cos(i),o=Math.sin(i),s=t.x1-n,a=t.y1-r;return t.x1=s*e-a*o+n,t.y1=s*o+a*e+r,s=t.x2-n,a=t.y2-r,t.x2=s*e-a*o+n,t.y2=s*o+a*e+r,t};t.exports=n},3243:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i,e){return t.x1=n,t.y1=r,t.x2=n+Math.cos(i)*e,t.y2=r+Math.sin(i)*e,t};t.exports=n},2865:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t.y2-t.y1)/(t.x2-t.x1)};t.exports=n},1322:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.abs(t.x1-t.x2)};t.exports=n},4420:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9778);i.Angle=r(7518),i.BresenhamPoints=r(5022),i.CenterOn=r(5638),i.Clone=r(9754),i.CopyFrom=r(7682),i.Equals=r(9841),i.Extend=r(6988),i.GetEasedPoints=r(9552),i.GetMidPoint=r(4874),i.GetNearestPoint=r(8533),i.GetNormal=r(1554),i.GetPoint=r(8874),i.GetPoints=r(4605),i.GetShortestDistance=r(5082),i.Height=r(3971),i.Length=r(6753),i.NormalAngle=r(1557),i.NormalX=r(7382),i.NormalY=r(8268),i.Offset=r(7509),i.PerpSlope=r(5209),i.Random=r(5715),i.ReflectAngle=r(2898),i.Rotate=r(2653),i.RotateAroundPoint=r(8348),i.RotateAroundXY=r(1070),i.SetToAngle=r(3243),i.Slope=r(2865),i.Width=r(1322),t.exports=i},2307:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(1456),o=r(9182);function s(t,n,r,i){var e=t-r,o=n-i,s=e*e+o*o;return Math.sqrt(s)}var a=new i({initialize:function(t,n,r){this.vertex1=t,this.vertex2=n,this.vertex3=r,this.bounds=new e,this._inCenter=new o},getInCenter:function(t){void 0===t&&(t=!0);var n,r,i,e,o,a,u=this.vertex1,h=this.vertex2,c=this.vertex3;t?(n=u.x,r=u.y,i=h.x,e=h.y,o=c.x,a=c.y):(n=u.vx,r=u.vy,i=h.vx,e=h.vy,o=c.vx,a=c.vy);var f=s(o,a,i,e),x=s(n,r,o,a),v=s(i,e,n,r),y=f+x+v;return this._inCenter.set((n*f+i*x+o*v)/y,(r*f+e*x+a*v)/y)},contains:function(t,n,r){var i=this.vertex1,e=this.vertex2,o=this.vertex3,s=i.vx,a=i.vy,u=e.vx,h=e.vy,c=o.vx,f=o.vy;if(r){var x=r.a,v=r.b,y=r.c,p=r.d,l=r.e,d=r.f;s=i.vx*x+i.vy*y+l,a=i.vx*v+i.vy*p+d,u=e.vx*x+e.vy*y+l,h=e.vx*v+e.vy*p+d,c=o.vx*x+o.vy*y+l,f=o.vx*v+o.vy*p+d}var g=c-s,M=f-a,w=u-s,m=h-a,z=t-s,b=n-a,I=g*g+M*M,C=g*w+M*m,A=g*z+M*b,P=w*w+m*m,T=w*z+m*b,O=I*P-C*C,_=0===O?0:1/O,R=(P*A-C*T)*_,L=(I*T-C*A)*_;return R>=0&&L>=0&&R+L<1},isCounterClockwise:function(t){var n=this.vertex1,r=this.vertex2,i=this.vertex3,e=(r.vx-n.vx)*(i.vy-n.vy)-(r.vy-n.vy)*(i.vx-n.vx);return t<=0?e>=0:e<0},load:function(t,n,r,i,e){return r=this.vertex1.load(t,n,r,i,e),r=this.vertex2.load(t,n,r,i,e),r=this.vertex3.load(t,n,r,i,e),r},transformCoordinatesLocal:function(t,n,r,i){return this.vertex1.transformCoordinatesLocal(t,n,r,i),this.vertex2.transformCoordinatesLocal(t,n,r,i),this.vertex3.transformCoordinatesLocal(t,n,r,i),this},updateBounds:function(){var t=this.vertex1,n=this.vertex2,r=this.vertex3,i=this.bounds;return i.x=Math.min(t.vx,n.vx,r.vx),i.y=Math.min(t.vy,n.vy,r.vy),i.width=Math.max(t.vx,n.vx,r.vx)-i.x,i.height=Math.max(t.vy,n.vy,r.vy)-i.y,this},isInView:function(t,n,r,i,e,o,s,a,u,h,c){var f=this.vertex1.update(e,o,s,a,u,h,c,i),x=this.vertex2.update(e,o,s,a,u,h,c,i),v=this.vertex3.update(e,o,s,a,u,h,c,i);if(f.ta<=0&&x.ta<=0&&v.ta<=0)return!1;if(n&&!this.isCounterClockwise(r))return!1;var y=this.bounds;y.x=Math.min(f.tx,x.tx,v.tx),y.y=Math.min(f.ty,x.ty,v.ty),y.width=Math.max(f.tx,x.tx,v.tx)-y.x,y.height=Math.max(f.ty,x.ty,v.ty)-y.y;var p=t.x+t.width,l=t.y+t.height;return!(y.width<=0||y.height<=0||t.width<=0||t.height<=0)&&!(y.right<t.x||y.bottom<t.y||y.x>p||y.y>l)},translate:function(t,n){void 0===n&&(n=0);var r=this.vertex1,i=this.vertex2,e=this.vertex3;return r.x+=t,r.y+=n,i.x+=t,i.y+=n,e.x+=t,e.y+=n,this},x:{get:function(){return this.getInCenter().x},set:function(t){var n=this.getInCenter();this.translate(t-n.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var n=this.getInCenter();this.translate(0,t-n.y)}},alpha:{get:function(){var t=this.vertex1,n=this.vertex2,r=this.vertex3;return(t.alpha+n.alpha+r.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,n=this.vertex2,r=this.vertex3;return(t.vz+n.vz+r.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}});t.exports=a},7989:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2307),e=r(6128),o=r(5332),s=r(2220),a=r(7748),u=new s,h=new s,c=new o,f=function(t){var n=e(t,"mesh"),r=e(t,"texture",null),o=e(t,"frame"),s=e(t,"width",1),f=e(t,"height",s),x=e(t,"widthSegments",1),v=e(t,"heightSegments",x),y=e(t,"x",0),p=e(t,"y",0),l=e(t,"z",0),d=e(t,"rotateX",0),g=e(t,"rotateY",0),M=e(t,"rotateZ",0),w=e(t,"zIsUp",!0),m=e(t,"isOrtho",!!n&&n.dirtyCache[11]),z=e(t,"colors",[16777215]),b=e(t,"alphas",[1]),I=e(t,"tile",!1),C=e(t,"flipY",!1),A=e(t,"width",null),P={faces:[],verts:[]};if(u.set(y,p,l),h.set(d,g,M),c.fromRotationXYTranslation(h,u,w),!r&&n)r=n.texture;else{if(!n||"string"!==typeof r)return P;r=n.scene.sys.textures.get(r)}var T=r.get(o);!A&&m&&r&&n&&(s=T.width/n.height,f=T.height/n.height);var O,_,R=s/2,L=f/2,E=Math.floor(x),S=Math.floor(v),F=E+1,q=S+1,G=s/E,k=f/S,N=[],Y=[],V=0,B=1,Z=0,X=1;T&&(V=T.u0,B=T.u1,C?(Z=T.v1,X=T.v0):(Z=T.v0,X=T.v1));var D=B-V,U=X-Z;for(_=0;_<q;_++){var j=_*k-L;for(O=0;O<F;O++){var Q=O*G-R;Y.push(Q,-j);var W=V+D*(O/E),H=Z+U*(_/S);N.push(W,H)}}Array.isArray(z)||(z=[z]),Array.isArray(b)||(b=[b]);var K=0,J=0;for(_=0;_<S;_++)for(O=0;O<E;O++){var $=2*(O+F*_),tt=2*(O+F*(_+1)),nt=2*(O+1+F*(_+1)),rt=2*(O+1+F*_),it=z[J],et=b[K],ot=new a(Y[$],Y[$+1],0,N[$],N[$+1],it,et).transformMat4(c),st=new a(Y[tt],Y[tt+1],0,N[tt],N[tt+1],it,et).transformMat4(c),at=new a(Y[rt],Y[rt+1],0,N[rt],N[rt+1],it,et).transformMat4(c),ut=new a(Y[tt],Y[tt+1],0,N[tt],N[tt+1],it,et).transformMat4(c),ht=new a(Y[nt],Y[nt+1],0,N[nt],N[nt+1],it,et).transformMat4(c),ct=new a(Y[rt],Y[rt+1],0,N[rt],N[rt+1],it,et).transformMat4(c);I&&(ot.setUVs(V,X),st.setUVs(V,Z),at.setUVs(B,X),ut.setUVs(V,Z),ht.setUVs(B,Z),ct.setUVs(B,X)),J++,J===z.length&&(J=0),K++,K===b.length&&(K=0),P.verts.push(ot,st,at,ut,ht,ct),P.faces.push(new i(ot,st,at),new i(ut,ht,ct))}return n&&(n.faces=n.faces.concat(P.faces),n.vertices=n.vertices.concat(P.verts)),P};t.exports=f},4382:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2307),e=r(5332),o=r(2220),s=r(7748),a=new o,u=new o,h=new e,c=function(t,n,r,e,o,c,f,x,v,y){void 0===r&&(r=1),void 0===e&&(e=0),void 0===o&&(o=0),void 0===c&&(c=0),void 0===f&&(f=0),void 0===x&&(x=0),void 0===v&&(v=0),void 0===y&&(y=!0);var p={faces:[],verts:[]},l=t.materials;a.set(e,o,c),u.set(f,x,v),h.fromRotationXYTranslation(u,a,y);for(var d=0;d<t.models.length;d++)for(var g=t.models[d],M=g.vertices,w=g.textureCoords,m=g.faces,z=0;z<m.length;z++){var b=m[z],I=b.vertices[0],C=b.vertices[1],A=b.vertices[2],P=M[I.vertexIndex],T=M[C.vertexIndex],O=M[A.vertexIndex],_=I.textureCoordsIndex,R=C.textureCoordsIndex,L=A.textureCoordsIndex,E=-1===_?{u:0,v:1}:w[_],S=-1===R?{u:0,v:0}:w[R],F=-1===L?{u:1,v:1}:w[L],q=16777215;""!==b.material&&l[b.material]&&(q=l[b.material]);var G=new s(P.x*r,P.y*r,P.z*r,E.u,E.v,q).transformMat4(h),k=new s(T.x*r,T.y*r,T.z*r,S.u,S.v,q).transformMat4(h),N=new s(O.x*r,O.y*r,O.z*r,F.u,F.v,q).transformMat4(h);p.verts.push(G,k,N),p.faces.push(new i(G,k,N))}return n&&(n.faces=n.faces.concat(p.faces),n.vertices=n.vertices.concat(p.verts)),p};t.exports=c},1479:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2307),e=r(7748),o=function(t,n,r,o,s,a,u){if(void 0===o&&(o=!1),void 0===a&&(a=16777215),void 0===u&&(u=1),t.length===n.length){var h,c,f,x,v,y,p,l,d,g,M,w={faces:[],vertices:[]},m=o?3:2,z=Array.isArray(a),b=Array.isArray(u);if(Array.isArray(r)&&r.length>0)for(h=0;h<r.length;h++){var I=r[h],C=2*r[h],A=r[h]*m;c=t[A],f=t[A+1],x=o?t[A+2]:0,v=n[C],y=n[C+1],p=z?a[I]:a,l=b?u[I]:u,d=0,g=0,M=0,s&&(d=s[A],g=s[A+1],M=o?s[A+2]:0),w.vertices.push(new e(c,f,x,v,y,p,l,d,g,M))}else{var P=0,T=0;for(h=0;h<t.length;h+=m)c=t[h],f=t[h+1],x=o?t[h+2]:0,v=n[P],y=n[P+1],p=z?a[T]:a,l=b?u[T]:u,d=0,g=0,M=0,s&&(d=s[h],g=s[h+1],M=o?s[h+2]:0),w.vertices.push(new e(c,f,x,v,y,p,l,d,g,M)),P+=2,T++}for(h=0;h<w.vertices.length;h+=3){var O=w.vertices[h],_=w.vertices[h+1],R=w.vertices[h+2];w.faces.push(new i(O,_,R))}return w}console.warn("GenerateVerts: vertices and uvs count not equal")};t.exports=o},1971:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=!0,r="untitled",i="",e="";function o(t){var n=t.indexOf("#");return n>-1?t.substring(0,n):t}function s(t){return 0===t.models.length&&t.models.push({faces:[],name:r,textureCoords:[],vertexNormals:[],vertices:[]}),i="",t.models[t.models.length-1]}function a(t,n){var e=t.length>=2?t[1]:r;n.models.push({faces:[],name:e,textureCoords:[],vertexNormals:[],vertices:[]}),i=""}function u(t){2===t.length&&(i=t[1])}function h(t,n){var r=t.length,i=r>=2?parseFloat(t[1]):0,e=r>=3?parseFloat(t[2]):0,o=r>=4?parseFloat(t[3]):0;s(n).vertices.push({x:i,y:e,z:o})}function c(t,r){var i=t.length,e=i>=2?parseFloat(t[1]):0,o=i>=3?parseFloat(t[2]):0,a=i>=4?parseFloat(t[3]):0;isNaN(e)&&(e=0),isNaN(o)&&(o=0),isNaN(a)&&(a=0),n&&(o=1-o),s(r).textureCoords.push({u:e,v:o,w:a})}function f(t,n){var r=t.length,i=r>=2?parseFloat(t[1]):0,e=r>=3?parseFloat(t[2]):0,o=r>=4?parseFloat(t[3]):0;s(n).vertexNormals.push({x:i,y:e,z:o})}function x(t,n){var r=t.length-1;if(!(r<3)){for(var o={group:i,material:e,vertices:[]},a=0;a<r;a++){var u=t[a+1],h=u.split("/"),c=h.length;if(!(c<1||c>3)){var f=0,x=0,v=0;f=parseInt(h[0],10),c>1&&""!==h[1]&&(x=parseInt(h[1],10)),c>2&&(v=parseInt(h[2],10)),0!==f&&(f<0&&(f=s(n).vertices.length+1+f),x-=1,f-=1,v-=1,o.vertices.push({textureCoordsIndex:x,vertexIndex:f,vertexNormalIndex:v}))}}s(n).faces.push(o)}}function v(t,n){t.length>=2&&n.materialLibraries.push(t[1])}function y(t){t.length>=2&&(e=t[1])}var p=function(t,r){void 0===r&&(r=!0),n=r;var s={materials:{},materialLibraries:[],models:[]};i="",e="";for(var p=t.split("\n"),l=0;l<p.length;l++){var d=o(p[l]),g=d.replace(/\s\s+/g," ").trim().split(" ");switch(g[0].toLowerCase()){case"o":a(g,s);break;case"g":u(g);break;case"v":h(g,s);break;case"vt":c(g,s);break;case"vn":f(g,s);break;case"f":x(g,s);break;case"mtllib":v(g,s);break;case"usemtl":y(g);break}}return s};t.exports=p},5038:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(364),e=function(t){for(var n={},r=t.split("\n"),e="",o=0;o<r.length;o++){var s=r[o].trim();if(0!==s.indexOf("#")&&""!==s){var a=s.replace(/\s\s+/g," ").trim().split(" ");switch(a[0].toLowerCase()){case"newmtl":e=a[1];break;case"kd":var u=Math.floor(255*a[1]),h=a.length>=2?Math.floor(255*a[2]):u,c=a.length>=3?Math.floor(255*a[3]):u;n[e]=i(u,h,c);break}}}return n};t.exports=e},8931:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){var e,o;if(void 0===r&&void 0===i){var s=t.getInCenter();e=s.x,o=s.y}var a=Math.cos(n),u=Math.sin(n),h=t.vertex1,c=t.vertex2,f=t.vertex3,x=h.x-e,v=h.y-o;h.set(x*a-v*u+e,x*u+v*a+o),x=c.x-e,v=c.y-o,c.set(x*a-v*u+e,x*u+v*a+o),x=f.x-e,v=f.y-o,f.set(x*a-v*u+e,x*u+v*a+o)};t.exports=n},7748:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(8766),o=r(2220),s=new i({Extends:o,initialize:function(t,n,r,i,e,s,a,u,h,c){void 0===s&&(s=16777215),void 0===a&&(a=1),void 0===u&&(u=0),void 0===h&&(h=0),void 0===c&&(c=0),o.call(this,t,n,r),this.vx=0,this.vy=0,this.vz=0,this.nx=u,this.ny=h,this.nz=c,this.u=i,this.v=e,this.color=s,this.alpha=a,this.tx=0,this.ty=0,this.ta=0},setUVs:function(t,n){return this.u=t,this.v=n,this},transformCoordinatesLocal:function(t,n,r,i){var e=this.x,o=this.y,s=this.z,a=t.val,u=e*a[0]+o*a[4]+s*a[8]+a[12],h=e*a[1]+o*a[5]+s*a[9]+a[13],c=e*a[2]+o*a[6]+s*a[10]+a[14],f=e*a[3]+o*a[7]+s*a[11]+a[15];this.vx=u/f*n,this.vy=-h/f*r,this.vz=i<=0?c/f:-c/f},update:function(t,n,r,i,e,o,s,a){var u=this.vx*t+this.vy*r+e,h=this.vx*n+this.vy*i+o;return s&&(u=Math.round(u),h=Math.round(h)),this.tx=u,this.ty=h,this.ta=this.alpha*a,this},load:function(t,n,r,i,o){return t[++r]=this.tx,t[++r]=this.ty,t[++r]=this.u,t[++r]=this.v,t[++r]=i,t[++r]=o,n[++r]=e.getTintAppendFloatAlpha(this.color,this.ta),r}});t.exports=s},8864:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i={Face:r(2307),GenerateGridVerts:r(7989),GenerateObjVerts:r(4382),GenerateVerts:r(1479),ParseObj:r(1971),ParseObjMaterial:r(5038),RotateFace:r(8931),Vertex:r(7748)};t.exports=i},3182:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))};t.exports=n},239:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t){return new i(t.x,t.y)};t.exports=e},1891:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x,t.y)};t.exports=n},42:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x===n.x&&t.y===n.y};t.exports=n},5660:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))};t.exports=n},534:function(t,n,r){r(1703);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){if(void 0===n&&(n=new i),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var r=t.length;if(r<1)throw new Error("GetCentroid points array must not be empty");if(1===r)n.x=t[0].x,n.y=t[0].y;else{for(var e=0;e<r;e++)n.x+=t[e].x,n.y+=t[e].y;n.x/=r,n.y/=r}return n};t.exports=e},333:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)};t.exports=n},3848:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.x*t.x+t.y*t.y};t.exports=n},4184:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t,n){void 0===n&&(n=new i);for(var r=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=0;a<t.length;a++){var u=t[a];u.x>r&&(r=u.x),u.x<e&&(e=u.x),u.y>o&&(o=u.y),u.y<s&&(s=u.y)}return n.x=e,n.y=s,n.width=r-e,n.height=o-s,n};t.exports=e},7080:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r,e){return void 0===r&&(r=0),void 0===e&&(e=new i),e.x=t.x+(n.x-t.x)*r,e.y=t.y+(n.y-t.y)*r,e};t.exports=e},5890:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.setTo(t.y,t.x)};t.exports=n},139:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){return void 0===n&&(n=new i),n.setTo(-t.x,-t.y)};t.exports=e},9106:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(9277),o=new i({initialize:function(t,n){void 0===t&&(t=0),void 0===n&&(n=t),this.type=e.POINT,this.x=t,this.y=n},setTo:function(t,n){return void 0===t&&(t=0),void 0===n&&(n=t),this.x=t,this.y=n,this}});t.exports=o},2389:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(3848),o=function(t,n,r){void 0===r&&(r=new i);var o=t.x*n.x+t.y*n.y,s=o/e(n);return 0!==s&&(r.x=s*n.x,r.y=s*n.y),r};t.exports=o},1045:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n,r){void 0===r&&(r=new i);var e=t.x*n.x+t.y*n.y;return 0!==e&&(r.x=e*n.x,r.y=e*n.y),r};t.exports=e},7222:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(333),e=function(t,n){if(0!==t.x||0!==t.y){var r=i(t);t.x/=r,t.y/=r}return t.x*=n,t.y*=n,t};t.exports=e},7866:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106);i.Ceil=r(3182),i.Clone=r(239),i.CopyFrom=r(1891),i.Equals=r(42),i.Floor=r(5660),i.GetCentroid=r(534),i.GetMagnitude=r(333),i.GetMagnitudeSq=r(3848),i.GetRectangleFromPoints=r(4184),i.Interpolate=r(7080),i.Invert=r(5890),i.Negative=r(139),i.Project=r(2389),i.ProjectUnit=r(1045),i.SetMagnitude=r(7222),t.exports=i},9966:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3707),e=function(t){return new i(t.points)};t.exports=e},1210:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){for(var i=!1,e=-1,o=t.points.length-1;++e<t.points.length;o=e){var s=t.points[e].x,a=t.points[e].y,u=t.points[o].x,h=t.points[o].y;(a<=r&&r<h||h<=r&&r<a)&&n<(u-s)*(r-a)/(h-a)+s&&(i=!i)}return i};t.exports=n},4990:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1210),e=function(t,n){return i(t,n.x,n.y)};t.exports=e},5084:function(t){"use strict";
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function n(t,n,i){i=i||2;var o,s,a,u,c,f,x,v=n&&n.length,y=v?n[0]*i:t.length,p=r(t,0,y,i,!0),l=[];if(!p||p.next===p.prev)return l;if(v&&(p=h(t,n,p,i)),t.length>80*i){o=a=t[0],s=u=t[1];for(var d=i;d<y;d+=i)c=t[d],f=t[d+1],c<o&&(o=c),f<s&&(s=f),c>a&&(a=c),f>u&&(u=f);x=Math.max(a-o,u-s),x=0!==x?1/x:0}return e(p,l,i,o,s,x),l}function r(t,n,r,i,e){var o,s;if(e===L(t,n,r,i)>0)for(o=n;o<r;o+=i)s=O(o,t[o],t[o+1],s);else for(o=r-i;o>=n;o-=i)s=O(o,t[o],t[o+1],s);return s&&m(s,s.next)&&(_(s),s=s.next),s}function i(t,n){if(!t)return t;n||(n=t);var r,i=t;do{if(r=!1,i.steiner||!m(i,i.next)&&0!==w(i.prev,i,i.next))i=i.next;else{if(_(i),i=n=i.prev,i===i.next)break;r=!0}}while(r||i!==n);return n}function e(t,n,r,h,c,f,x){if(t){!x&&f&&y(t,h,c,f);var v,p,l=t;while(t.prev!==t.next)if(v=t.prev,p=t.next,f?s(t,h,c,f):o(t))n.push(v.i/r),n.push(t.i/r),n.push(p.i/r),_(t),t=p.next,l=p.next;else if(t=p,t===l){x?1===x?(t=a(i(t),n,r),e(t,n,r,h,c,f,2)):2===x&&u(t,n,r,h,c,f):e(i(t),n,r,h,c,f,1);break}}}function o(t){var n=t.prev,r=t,i=t.next;if(w(n,r,i)>=0)return!1;var e=t.next.next;while(e!==t.prev){if(g(n.x,n.y,r.x,r.y,i.x,i.y,e.x,e.y)&&w(e.prev,e,e.next)>=0)return!1;e=e.next}return!0}function s(t,n,r,i){var e=t.prev,o=t,s=t.next;if(w(e,o,s)>=0)return!1;var a=e.x<o.x?e.x<s.x?e.x:s.x:o.x<s.x?o.x:s.x,u=e.y<o.y?e.y<s.y?e.y:s.y:o.y<s.y?o.y:s.y,h=e.x>o.x?e.x>s.x?e.x:s.x:o.x>s.x?o.x:s.x,c=e.y>o.y?e.y>s.y?e.y:s.y:o.y>s.y?o.y:s.y,f=l(a,u,n,r,i),x=l(h,c,n,r,i),v=t.prevZ,y=t.nextZ;while(v&&v.z>=f&&y&&y.z<=x){if(v!==t.prev&&v!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,v.x,v.y)&&w(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,y!==t.prev&&y!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,y.x,y.y)&&w(y.prev,y,y.next)>=0)return!1;y=y.nextZ}while(v&&v.z>=f){if(v!==t.prev&&v!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,v.x,v.y)&&w(v.prev,v,v.next)>=0)return!1;v=v.prevZ}while(y&&y.z<=x){if(y!==t.prev&&y!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,y.x,y.y)&&w(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function a(t,n,r){var e=t;do{var o=e.prev,s=e.next.next;!m(o,s)&&z(o,e,e.next,s)&&A(o,s)&&A(s,o)&&(n.push(o.i/r),n.push(e.i/r),n.push(s.i/r),_(e),_(e.next),e=t=s),e=e.next}while(e!==t);return i(e)}function u(t,n,r,o,s,a){var u=t;do{var h=u.next.next;while(h!==u.prev){if(u.i!==h.i&&M(u,h)){var c=T(u,h);return u=i(u,u.next),c=i(c,c.next),e(u,n,r,o,s,a),void e(c,n,r,o,s,a)}h=h.next}u=u.next}while(u!==t)}function h(t,n,e,o){var s,a,u,h,x,v=[];for(s=0,a=n.length;s<a;s++)u=n[s]*o,h=s<a-1?n[s+1]*o:t.length,x=r(t,u,h,o,!1),x===x.next&&(x.steiner=!0),v.push(d(x));for(v.sort(c),s=0;s<v.length;s++)f(v[s],e),e=i(e,e.next);return e}function c(t,n){return t.x-n.x}function f(t,n){if(n=x(t,n),n){var r=T(n,t);i(n,n.next),i(r,r.next)}}function x(t,n){var r,i=n,e=t.x,o=t.y,s=-1/0;do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){var a=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(a<=e&&a>s){if(s=a,a===e){if(o===i.y)return i;if(o===i.next.y)return i.next}r=i.x<i.next.x?i:i.next}}i=i.next}while(i!==n);if(!r)return null;if(e===s)return r;var u,h=r,c=r.x,f=r.y,x=1/0;i=r;do{e>=i.x&&i.x>=c&&e!==i.x&&g(o<f?e:s,o,c,f,o<f?s:e,o,i.x,i.y)&&(u=Math.abs(o-i.y)/(e-i.x),A(i,t)&&(u<x||u===x&&(i.x>r.x||i.x===r.x&&v(r,i)))&&(r=i,x=u)),i=i.next}while(i!==h);return r}function v(t,n){return w(t.prev,t,n.prev)<0&&w(n.next,t,t.next)<0}function y(t,n,r,i){var e=t;do{null===e.z&&(e.z=l(e.x,e.y,n,r,i)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next}while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,p(e)}function p(t){var n,r,i,e,o,s,a,u,h=1;do{r=t,t=null,o=null,s=0;while(r){for(s++,i=r,a=0,n=0;n<h;n++)if(a++,i=i.nextZ,!i)break;u=h;while(a>0||u>0&&i)0!==a&&(0===u||!i||r.z<=i.z)?(e=r,r=r.nextZ,a--):(e=i,i=i.nextZ,u--),o?o.nextZ=e:t=e,e.prevZ=o,o=e;r=i}o.nextZ=null,h*=2}while(s>1);return t}function l(t,n,r,i,e){return t=32767*(t-r)*e,n=32767*(n-i)*e,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),t|n<<1}function d(t){var n=t,r=t;do{(n.x<r.x||n.x===r.x&&n.y<r.y)&&(r=n),n=n.next}while(n!==t);return r}function g(t,n,r,i,e,o,s,a){return(e-s)*(n-a)-(t-s)*(o-a)>=0&&(t-s)*(i-a)-(r-s)*(n-a)>=0&&(r-s)*(o-a)-(e-s)*(i-a)>=0}function M(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!C(t,n)&&(A(t,n)&&A(n,t)&&P(t,n)&&(w(t.prev,t,n.prev)||w(t,n.prev,n))||m(t,n)&&w(t.prev,t,t.next)>0&&w(n.prev,n,n.next)>0)}function w(t,n,r){return(n.y-t.y)*(r.x-n.x)-(n.x-t.x)*(r.y-n.y)}function m(t,n){return t.x===n.x&&t.y===n.y}function z(t,n,r,i){var e=I(w(t,n,r)),o=I(w(t,n,i)),s=I(w(r,i,t)),a=I(w(r,i,n));return e!==o&&s!==a||(!(0!==e||!b(t,r,n))||(!(0!==o||!b(t,i,n))||(!(0!==s||!b(r,t,i))||!(0!==a||!b(r,n,i)))))}function b(t,n,r){return n.x<=Math.max(t.x,r.x)&&n.x>=Math.min(t.x,r.x)&&n.y<=Math.max(t.y,r.y)&&n.y>=Math.min(t.y,r.y)}function I(t){return t>0?1:t<0?-1:0}function C(t,n){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&z(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}function A(t,n){return w(t.prev,t,t.next)<0?w(t,n,t.next)>=0&&w(t,t.prev,n)>=0:w(t,n,t.prev)<0||w(t,t.next,n)<0}function P(t,n){var r=t,i=!1,e=(t.x+n.x)/2,o=(t.y+n.y)/2;do{r.y>o!==r.next.y>o&&r.next.y!==r.y&&e<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==t);return i}function T(t,n){var r=new R(t.i,t.x,t.y),i=new R(n.i,n.x,n.y),e=t.next,o=n.prev;return t.next=n,n.prev=t,r.next=e,e.prev=r,i.next=r,r.prev=i,o.next=i,i.prev=o,i}function O(t,n,r,i){var e=new R(t,n,r);return i?(e.next=i.next,e.prev=i,i.next.prev=e,i.next=e):(e.prev=e,e.next=e),e}function _(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function R(t,n,r){this.i=t,this.x=n,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L(t,n,r,i){for(var e=0,o=n,s=r-i;o<r;o+=i)e+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return e}n.deviation=function(t,n,r,i){var e=n&&n.length,o=e?n[0]*r:t.length,s=Math.abs(L(t,0,o,r));if(e)for(var a=0,u=n.length;a<u;a++){var h=n[a]*r,c=a<u-1?n[a+1]*r:t.length;s-=Math.abs(L(t,h,c,r))}var f=0;for(a=0;a<i.length;a+=3){var x=i[a]*r,v=i[a+1]*r,y=i[a+2]*r;f+=Math.abs((t[x]-t[y])*(t[v+1]-t[x+1])-(t[x]-t[v])*(t[y+1]-t[x+1]))}return 0===s&&0===f?0:Math.abs((f-s)/s)},n.flatten=function(t){for(var n=t[0][0].length,r={vertices:[],holes:[],dimensions:n},i=0,e=0;e<t.length;e++){for(var o=0;o<t[e].length;o++)for(var s=0;s<n;s++)r.vertices.push(t[e][o][s]);e>0&&(i+=t[e-1].length,r.holes.push(i))}return r},t.exports=n},2136:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t,n){void 0===n&&(n=new i);for(var r,e=1/0,o=1/0,s=-e,a=-o,u=0;u<t.points.length;u++)r=t.points[u],e=Math.min(e,r.x),o=Math.min(o,r.y),s=Math.max(s,r.x),a=Math.max(a,r.y);return n.x=e,n.y=o,n.width=s-e,n.height=a-o,n};t.exports=e},8976:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=[]);for(var r=0;r<t.points.length;r++)n.push(t.points[r].x),n.push(t.points[r].y);return n};t.exports=n},5141:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6753),e=r(9778),o=r(2510),s=function(t,n,r,s){void 0===s&&(s=[]);var a=t.points,u=o(t);!n&&r>0&&(n=u/r);for(var h=0;h<n;h++)for(var c=u*(h/n),f=0,x=0;x<a.length;x++){var v=a[x],y=a[(x+1)%a.length],p=new e(v.x,v.y,y.x,y.y),l=i(p);if(!(c<f||c>f+l)){var d=p.getPoint((c-f)/l);s.push(d);break}f+=l}return s};t.exports=s},2510:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6753),e=r(9778),o=function(t){for(var n=t.points,r=0,o=0;o<n.length;o++){var s=n[o],a=n[(o+1)%n.length],u=new e(s.x,s.y,a.x,a.y);r+=i(u)}return r};t.exports=o},3707:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(1210),o=r(5141),s=r(9277),a=new i({initialize:function(t){this.type=s.POLYGON,this.area=0,this.points=[],t&&this.setTo(t)},contains:function(t,n){return e(this,t,n)},setTo:function(t){if(this.area=0,this.points=[],"string"===typeof t&&(t=t.split(" ")),!Array.isArray(t))return this;for(var n,r=Number.MAX_VALUE,i=0;i<t.length;i++)n={x:0,y:0},"number"===typeof t[i]||"string"===typeof t[i]?(n.x=parseFloat(t[i]),n.y=parseFloat(t[i+1]),i++):Array.isArray(t[i])?(n.x=t[i][0],n.y=t[i][1]):(n.x=t[i].x,n.y=t[i].y),this.points.push(n),n.y<r&&(r=n.y);return this.calculateArea(r),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t,n,r=0,i=0;i<this.points.length-1;i++)t=this.points[i],n=this.points[i+1],r+=(n.x-t.x)*(t.y+n.y);return t=this.points[0],n=this.points[this.points.length-1],r+=(t.x-n.x)*(n.y+t.y),this.area=.5*-r,this.area},getPoints:function(t,n,r){return o(this,t,n,r)}});t.exports=a},4560:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.points.reverse(),t};t.exports=n},882:function(t){function n(t,n){var r=t.x-n.x,i=t.y-n.y;return r*r+i*i}function r(t,n,r){var i=n.x,e=n.y,o=r.x-i,s=r.y-e;if(0!==o||0!==s){var a=((t.x-i)*o+(t.y-e)*s)/(o*o+s*s);a>1?(i=r.x,e=r.y):a>0&&(i+=o*a,e+=s*a)}return o=t.x-i,s=t.y-e,o*o+s*s}function i(t,r){for(var i,e=t[0],o=[e],s=1,a=t.length;s<a;s++)i=t[s],n(i,e)>r&&(o.push(i),e=i);return e!==i&&o.push(i),o}function e(t,n,i,o,s){for(var a,u=o,h=n+1;h<i;h++){var c=r(t[h],t[n],t[i]);c>u&&(a=h,u=c)}u>o&&(a-n>1&&e(t,n,a,o,s),s.push(t[a]),i-a>1&&e(t,a,i,o,s))}function o(t,n){var r=t.length-1,i=[t[0]];return e(t,0,r,n,i),i.push(t[r]),i}var s=function(t,n,r){void 0===n&&(n=1),void 0===r&&(r=!1);var e=t.points;if(e.length>2){var s=n*n;r||(e=i(e,s)),t.setTo(o(e,s))}return t};t.exports=s},9213:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t[0]=n[0],t[1]=n[1],t},r=function(t){var r,i=[],e=t.points;for(r=0;r<e.length;r++)i.push([e[r].x,e[r].y]);var o=[];for(i.length>0&&o.push(n([0,0],i[0])),r=0;r<i.length-1;r++){var s=i[r],a=i[r+1],u=s[0],h=s[1],c=a[0],f=a[1];o.push([.85*u+.15*c,.85*h+.15*f]),o.push([.15*u+.85*c,.15*h+.85*f])}return i.length>1&&o.push(n([0,0],i[i.length-1])),t.setTo(o)};t.exports=r},9882:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){for(var i=t.points,e=0;e<i.length;e++)i[e].x+=n,i[e].y+=r;return t};t.exports=n},5147:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3707);i.Clone=r(9966),i.Contains=r(1210),i.ContainsPoint=r(4990),i.Earcut=r(5084),i.GetAABB=r(2136),i.GetNumberArray=r(8976),i.GetPoints=r(5141),i.Perimeter=r(2510),i.Reverse=r(4560),i.Simplify=r(882),i.Smooth=r(9213),i.Translate=r(9882),t.exports=i},4038:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.width*t.height};t.exports=n},6829:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t};t.exports=n},6109:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t};t.exports=n},7440:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t.x=n-t.width/2,t.y=r-t.height/2,t};t.exports=n},2032:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t){return new i(t.x,t.y,t.width,t.height)};t.exports=e},1305:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return!(t.width<=0||t.height<=0)&&(t.x<=n&&t.x+t.width>=n&&t.y<=r&&t.y+t.height>=r)};t.exports=n},7802:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1305),e=function(t,n){return i(t,n.x,n.y)};t.exports=e},7287:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return!(n.width*n.height>t.width*t.height)&&(n.x>t.x&&n.x<t.right&&n.right>t.x&&n.right<t.right&&n.y>t.y&&n.y<t.bottom&&n.bottom>t.y&&n.bottom<t.bottom)};t.exports=n},5820:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x,t.y,t.width,t.height)};t.exports=n},9917:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=[]),n.push({x:t.x,y:t.y}),n.push({x:t.right,y:t.y}),n.push({x:t.right,y:t.bottom}),n.push({x:t.x,y:t.bottom}),n};t.exports=n},1011:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height};t.exports=n},5276:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4913),e=function(t,n){var r=i(t);return r<i(n)?t.setSize(n.height*r,n.height):t.setSize(n.width,n.width/r),t.setPosition(n.centerX-t.width/2,n.centerY-t.height/2)};t.exports=e},2757:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4913),e=function(t,n){var r=i(t);return r>i(n)?t.setSize(n.height*r,n.height):t.setSize(n.width,n.width/r),t.setPosition(n.centerX-t.width/2,n.centerY-t.height/2)};t.exports=e},3010:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t};t.exports=n},6059:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t};t.exports=n},5505:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=r(611),o=function(t,n){if(void 0===n&&(n=new i),0===t.length)return n;for(var r,o,s,a=Number.MAX_VALUE,u=Number.MAX_VALUE,h=e.MIN_SAFE_INTEGER,c=e.MIN_SAFE_INTEGER,f=0;f<t.length;f++)r=t[f],Array.isArray(r)?(o=r[0],s=r[1]):(o=r.x,s=r.y),a=Math.min(a,o),u=Math.min(u,s),h=Math.max(h,o),c=Math.max(c,s);return n.x=a,n.y=u,n.width=h-a,n.height=c-u,n};t.exports=o},9306:function(t,n,r){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t,n,r,e,o){return void 0===o&&(o=new i),o.setTo(Math.min(t,r),Math.min(n,e),Math.abs(t-r),Math.abs(n-e))};t.exports=e},4913:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 0===t.height?NaN:t.width/t.height};t.exports=n},4522:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){return void 0===n&&(n=new i),n.x=t.centerX,n.y=t.centerY,n};t.exports=e},5427:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4330),e=r(9106),o=function(t,n,r){if(void 0===r&&(r=new e),n<=0||n>=1)return r.x=t.x,r.y=t.y,r;var o=i(t)*n;return n>.5?(o-=t.width+t.height,o<=t.width?(r.x=t.right-o,r.y=t.bottom):(r.x=t.x,r.y=t.bottom-(o-t.width))):o<=t.width?(r.x=t.x+o,r.y=t.y):(r.x=t.right,r.y=t.y+(o-t.width)),r};t.exports=o},6806:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(5427),e=r(4330),o=function(t,n,r,o){void 0===o&&(o=[]),!n&&r>0&&(n=e(t)/r);for(var s=0;s<n;s++){var a=s/n;o.push(i(t,a))}return o};t.exports=o},3970:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){return void 0===n&&(n=new i),n.x=t.width,n.y=t.height,n};t.exports=e},1674:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7440),e=function(t,n,r){var e=t.centerX,o=t.centerY;return t.setSize(t.width+2*n,t.height+2*r),i(t,e,o)};t.exports=e},6635:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=r(1756),o=function(t,n,r){return void 0===r&&(r=new i),e(t,n)?(r.x=Math.max(t.x,n.x),r.y=Math.max(t.y,n.y),r.width=Math.min(t.right,n.right)-r.x,r.height=Math.min(t.bottom,n.bottom)-r.y):r.setEmpty(),r};t.exports=o},4684:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4330),e=r(9106),o=function(t,n,r,o){if(void 0===o&&(o=[]),!n&&!r)return o;n?r=Math.round(i(t)/n):n=i(t)/r;for(var s=t.x,a=t.y,u=0,h=0;h<r;h++)switch(o.push(new e(s,a)),u){case 0:s+=n,s>=t.right&&(u=1,a+=s-t.right,s=t.right);break;case 1:a+=n,a>=t.bottom&&(u=2,s-=a-t.bottom,a=t.bottom);break;case 2:s-=n,s<=t.left&&(u=3,a-=t.left-s,s=t.left);break;case 3:a-=n,a<=t.top&&(u=0,a=t.top);break}return o};t.exports=o},5547:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){for(var r=t.x,i=t.right,e=t.y,o=t.bottom,s=0;s<n.length;s++)r=Math.min(r,n[s].x),i=Math.max(i,n[s].x),e=Math.min(e,n[s].y),o=Math.max(o,n[s].y);return t.x=r,t.y=e,t.width=i-r,t.height=o-e,t};t.exports=n},1630:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=Math.min(t.x,n.x),i=Math.max(t.right,n.right);t.x=r,t.width=i-r;var e=Math.min(t.y,n.y),o=Math.max(t.bottom,n.bottom);return t.y=e,t.height=o-e,t};t.exports=n},795:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){var i=Math.min(t.x,n),e=Math.max(t.right,n);t.x=i,t.width=e-i;var o=Math.min(t.y,r),s=Math.max(t.bottom,r);return t.y=o,t.height=s-o,t};t.exports=n},4940:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t.x+=n,t.y+=r,t};t.exports=n},645:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x+=n.x,t.y+=n.y,t};t.exports=n},5681:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x<n.right&&t.right>n.x&&t.y<n.bottom&&t.bottom>n.y};t.exports=n},4330:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 2*(t.width+t.height)};t.exports=n},6221:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(3490),o=function(t,n,r){void 0===r&&(r=new i),n=e(n);var o=Math.sin(n),s=Math.cos(n),a=s>0?t.width/2:t.width/-2,u=o>0?t.height/2:t.height/-2;return Math.abs(a*o)<Math.abs(u*s)?u=a*o/s:a=u*s/o,r.x=a+t.centerX,r.y=u+t.centerY,r};t.exports=o},130:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){return void 0===n&&(n=new i),n.x=t.x+Math.random()*t.width,n.y=t.y+Math.random()*t.height,n};t.exports=e},9829:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7443),e=r(7287),o=r(9106),s=function(t,n,r){if(void 0===r&&(r=new o),e(t,n))switch(i(0,3)){case 0:r.x=t.x+Math.random()*(n.right-t.x),r.y=t.y+Math.random()*(n.top-t.y);break;case 1:r.x=n.x+Math.random()*(t.right-n.x),r.y=n.bottom+Math.random()*(t.bottom-n.bottom);break;case 2:r.x=t.x+Math.random()*(n.x-t.x),r.y=n.y+Math.random()*(t.bottom-n.y);break;case 3:r.x=n.right+Math.random()*(t.right-n.right),r.y=t.y+Math.random()*(n.bottom-t.y);break}return r};t.exports=s},1456:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(1305),o=r(5427),s=r(6806),a=r(9277),u=r(9778),h=r(130),c=new i({initialize:function(t,n,r,i){void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),this.type=a.RECTANGLE,this.x=t,this.y=n,this.width=r,this.height=i},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,r){return s(this,t,n,r)},getRandomPoint:function(t){return h(this,t)},setTo:function(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},setSize:function(t,n){return void 0===n&&(n=t),this.width=t,this.height=n,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return void 0===t&&(t=new u),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return void 0===t&&(t=new u),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return void 0===t&&(t=new u),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return void 0===t&&(t=new u),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=c},4819:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.width===n.width&&t.height===n.height};t.exports=n},1866:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return void 0===r&&(r=n),t.width*=n,t.height*=r,t};t.exports=n},7597:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456),e=function(t,n,r){void 0===r&&(r=new i);var e=Math.min(t.x,n.x),o=Math.min(t.y,n.y),s=Math.max(t.right,n.right)-e,a=Math.max(t.bottom,n.bottom)-o;return r.setTo(e,o,s,a)};t.exports=e},5244:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1456);i.Area=r(4038),i.Ceil=r(6829),i.CeilAll=r(6109),i.CenterOn=r(7440),i.Clone=r(2032),i.Contains=r(1305),i.ContainsPoint=r(7802),i.ContainsRect=r(7287),i.CopyFrom=r(5820),i.Decompose=r(9917),i.Equals=r(1011),i.FitInside=r(5276),i.FitOutside=r(2757),i.Floor=r(3010),i.FloorAll=r(6059),i.FromPoints=r(5505),i.FromXY=r(9306),i.GetAspectRatio=r(4913),i.GetCenter=r(4522),i.GetPoint=r(5427),i.GetPoints=r(6806),i.GetSize=r(3970),i.Inflate=r(1674),i.Intersection=r(6635),i.MarchingAnts=r(4684),i.MergePoints=r(5547),i.MergeRect=r(1630),i.MergeXY=r(795),i.Offset=r(4940),i.OffsetPoint=r(645),i.Overlaps=r(5681),i.Perimeter=r(4330),i.PerimeterPoint=r(6221),i.Random=r(130),i.RandomOutside=r(9829),i.SameDimensions=r(4819),i.Scale=r(1866),i.Union=r(7597),t.exports=i},9530:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=t.x1,r=t.y1,i=t.x2,e=t.y2,o=t.x3,s=t.y3;return Math.abs(((o-n)*(e-r)-(i-n)*(s-r))/2)};t.exports=n},6613:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(997),e=function(t,n,r){var e=r*(Math.sqrt(3)/2),o=t,s=n,a=t+r/2,u=n+e,h=t-r/2,c=n+e;return new i(o,s,a,u,h,c)};t.exports=e},9888:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(5084),e=r(997),o=function(t,n,r,o,s){void 0===n&&(n=null),void 0===r&&(r=1),void 0===o&&(o=1),void 0===s&&(s=[]);for(var a,u,h,c,f,x,v,y,p,l=i(t,n),d=0;d<l.length;d+=3)a=l[d],u=l[d+1],h=l[d+2],c=t[2*a]*r,f=t[2*a+1]*o,x=t[2*u]*r,v=t[2*u+1]*o,y=t[2*h]*r,p=t[2*h+1]*o,s.push(new e(c,f,x,v,y,p));return s};t.exports=o},365:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(997),e=function(t,n,r,e){void 0===e&&(e=r);var o=t,s=n,a=t,u=n-e,h=t+r,c=n;return new i(o,s,a,u,h,c)};t.exports=e},6453:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(400),e=r(2462),o=function(t,n,r,o){void 0===o&&(o=i);var s=o(t),a=n-s.x,u=r-s.y;return e(t,a,u)};t.exports=o},400:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){return void 0===n&&(n=new i),n.x=(t.x1+t.x2+t.x3)/3,n.y=(t.y1+t.y2+t.y3)/3,n};t.exports=e},727:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9182);function e(t,n,r,i){return t*i-n*r}var o=function(t,n){void 0===n&&(n=new i);var r=t.x3,o=t.y3,s=t.x1-r,a=t.y1-o,u=t.x2-r,h=t.y2-o,c=2*e(s,a,u,h),f=e(a,s*s+a*a,h,u*u+h*h),x=e(s,s*s+a*a,u,u*u+h*h);return n.x=r-f/c,n.y=o+x/c,n};t.exports=o},3945:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6853),e=function(t,n){void 0===n&&(n=new i);var r,e,o=t.x1,s=t.y1,a=t.x2,u=t.y2,h=t.x3,c=t.y3,f=a-o,x=u-s,v=h-o,y=c-s,p=f*(o+a)+x*(s+u),l=v*(o+h)+y*(s+c),d=2*(f*(c-u)-x*(h-a));if(Math.abs(d)<1e-6){var g=Math.min(o,a,h),M=Math.min(s,u,c);r=.5*(Math.max(o,a,h)-g),e=.5*(Math.max(s,u,c)-M),n.x=g+r,n.y=M+e,n.radius=Math.sqrt(r*r+e*e)}else n.x=(y*p-x*l)/d,n.y=(f*l-v*p)/d,r=n.x-o,e=n.y-s,n.radius=Math.sqrt(r*r+e*e);return n};t.exports=e},5508:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(997),e=function(t){return new i(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=e},9503:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){var i=t.x3-t.x1,e=t.y3-t.y1,o=t.x2-t.x1,s=t.y2-t.y1,a=n-t.x1,u=r-t.y1,h=i*i+e*e,c=i*o+e*s,f=i*a+e*u,x=o*o+s*s,v=o*a+s*u,y=h*x-c*c,p=0===y?0:1/y,l=(x*f-c*v)*p,d=(h*v-c*f)*p;return l>=0&&d>=0&&l+d<1};t.exports=n},4112:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){void 0===r&&(r=!1),void 0===i&&(i=[]);for(var e,o,s,a,u,h,c=t.x3-t.x1,f=t.y3-t.y1,x=t.x2-t.x1,v=t.y2-t.y1,y=c*c+f*f,p=c*x+f*v,l=x*x+v*v,d=y*l-p*p,g=0===d?0:1/d,M=t.x1,w=t.y1,m=0;m<n.length;m++)if(s=n[m].x-M,a=n[m].y-w,u=c*s+f*a,h=x*s+v*a,e=(l*u-p*h)*g,o=(y*h-p*u)*g,e>=0&&o>=0&&e+o<1&&(i.push({x:n[m].x,y:n[m].y}),r))break;return i};t.exports=n},4703:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9503),e=function(t,n){return i(t,n.x,n.y)};t.exports=e},9602:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=n},3984:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=[]),n.push({x:t.x1,y:t.y1}),n.push({x:t.x2,y:t.y2}),n.push({x:t.x3,y:t.y3}),n};t.exports=n},1101:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x1===n.x1&&t.y1===n.y1&&t.x2===n.x2&&t.y2===n.y2&&t.x3===n.x3&&t.y3===n.y3};t.exports=n},6742:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=r(6753),o=function(t,n,r){void 0===r&&(r=new i);var o=t.getLineA(),s=t.getLineB(),a=t.getLineC();if(n<=0||n>=1)return r.x=o.x1,r.y=o.y1,r;var u=e(o),h=e(s),c=e(a),f=u+h+c,x=f*n,v=0;return x<u?(v=x/u,r.x=o.x1+(o.x2-o.x1)*v,r.y=o.y1+(o.y2-o.y1)*v):x>u+h?(x-=u+h,v=x/c,r.x=a.x1+(a.x2-a.x1)*v,r.y=a.y1+(a.y2-a.y1)*v):(x-=u,v=x/h,r.x=s.x1+(s.x2-s.x1)*v,r.y=s.y1+(s.y2-s.y1)*v),r};t.exports=o},1978:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6753),e=r(9106),o=function(t,n,r,o){void 0===o&&(o=[]);var s=t.getLineA(),a=t.getLineB(),u=t.getLineC(),h=i(s),c=i(a),f=i(u),x=h+c+f;!n&&r>0&&(n=x/r);for(var v=0;v<n;v++){var y=x*(v/n),p=0,l=new e;y<h?(p=y/h,l.x=s.x1+(s.x2-s.x1)*p,l.y=s.y1+(s.y2-s.y1)*p):y>h+c?(y-=h+c,p=y/f,l.x=u.x1+(u.x2-u.x1)*p,l.y=u.y1+(u.y2-u.y1)*p):(y-=h,p=y/c,l.x=a.x1+(a.x2-a.x1)*p,l.y=a.y1+(a.y2-a.y1)*p),o.push(l)}return o};t.exports=o},690:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106);function e(t,n,r,i){var e=t-r,o=n-i,s=e*e+o*o;return Math.sqrt(s)}var o=function(t,n){void 0===n&&(n=new i);var r=t.x1,o=t.y1,s=t.x2,a=t.y2,u=t.x3,h=t.y3,c=e(u,h,s,a),f=e(r,o,u,h),x=e(s,a,r,o),v=c+f+x;return n.x=(r*c+s*f+u*x)/v,n.y=(o*c+a*f+h*x)/v,n};t.exports=o},2462:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t.x1+=n,t.y1+=r,t.x2+=n,t.y2+=r,t.x3+=n,t.y3+=r,t};t.exports=n},9259:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6753),e=function(t){var n=t.getLineA(),r=t.getLineB(),e=t.getLineC();return i(n)+i(r)+i(e)};t.exports=e},1057:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9106),e=function(t,n){void 0===n&&(n=new i);var r=t.x2-t.x1,e=t.y2-t.y1,o=t.x3-t.x1,s=t.y3-t.y1,a=Math.random(),u=Math.random();return a+u>=1&&(a=1-a,u=1-u),n.x=t.x1+(r*a+o*u),n.y=t.y1+(e*a+s*u),n};t.exports=e},99:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1062),e=r(690),o=function(t,n){var r=e(t);return i(t,r.x,r.y,n)};t.exports=o},9215:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1062),e=function(t,n,r){return i(t,n.x,n.y,r)};t.exports=e},1062:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){var e=Math.cos(i),o=Math.sin(i),s=t.x1-n,a=t.y1-r;return t.x1=s*e-a*o+n,t.y1=s*o+a*e+r,s=t.x2-n,a=t.y2-r,t.x2=s*e-a*o+n,t.y2=s*o+a*e+r,s=t.x3-n,a=t.y3-r,t.x3=s*e-a*o+n,t.y3=s*o+a*e+r,t};t.exports=n},997:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(9503),o=r(6742),s=r(1978),a=r(9277),u=r(9778),h=r(1057),c=new i({initialize:function(t,n,r,i,e,o){void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),void 0===e&&(e=0),void 0===o&&(o=0),this.type=a.TRIANGLE,this.x1=t,this.y1=n,this.x2=r,this.y2=i,this.x3=e,this.y3=o},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,r){return s(this,t,n,r)},getRandomPoint:function(t){return h(this,t)},setTo:function(t,n,r,i,e,o){return void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),void 0===e&&(e=0),void 0===o&&(o=0),this.x1=t,this.y1=n,this.x2=r,this.y2=i,this.x3=e,this.y3=o,this},getLineA:function(t){return void 0===t&&(t=new u),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return void 0===t&&(t=new u),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return void 0===t&&(t=new u),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var n=0;n=this.x1<=this.x2&&this.x1<=this.x3?this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?this.x2-t:this.x3-t,this.x1-=n,this.x2-=n,this.x3-=n}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var n=0;n=this.x1>=this.x2&&this.x1>=this.x3?this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?this.x2-t:this.x3-t,this.x1-=n,this.x2-=n,this.x3-=n}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var n=0;n=this.y1<=this.y2&&this.y1<=this.y3?this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?this.y2-t:this.y3-t,this.y1-=n,this.y2-=n,this.y3-=n}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var n=0;n=this.y1>=this.y2&&this.y1>=this.y3?this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?this.y2-t:this.y3-t,this.y1-=n,this.y2-=n,this.y3-=n}}});t.exports=c},6636:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(997);i.Area=r(9530),i.BuildEquilateral=r(6613),i.BuildFromPolygon=r(9888),i.BuildRight=r(365),i.CenterOn=r(6453),i.Centroid=r(400),i.CircumCenter=r(727),i.CircumCircle=r(3945),i.Clone=r(5508),i.Contains=r(9503),i.ContainsArray=r(4112),i.ContainsPoint=r(4703),i.CopyFrom=r(9602),i.Decompose=r(3984),i.Equals=r(1101),i.GetPoint=r(6742),i.GetPoints=r(1978),i.InCenter=r(690),i.Perimeter=r(9259),i.Offset=r(2462),i.Random=r(1057),i.Rotate=r(99),i.RotateAroundPoint=r(9215),i.RotateAroundXY=r(1062),t.exports=i},9011:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){for(var n=0,r=0;r<t.length;r++)n+=+t[r];return n/t.length};t.exports=n},4908:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6038),e=function(t,n){return i(t)/i(n)/i(t-n)};t.exports=e},7443:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)};t.exports=n},3179:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i,e){var o=.5*(i-n),s=.5*(e-r),a=t*t,u=t*a;return(2*r-2*i+o+s)*u+(-3*r+3*i-2*o-s)*a+o*t+r};t.exports=n},9457:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=10);var i=Math.pow(r,-n);return Math.ceil(t*i)/i};t.exports=n},1495:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return Math.max(n,Math.min(r,t))};t.exports=n},3490:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=function(t){return t*i.DEG_TO_RAD};t.exports=e},2125:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return Math.abs(t-n)};t.exports=n},7368:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1495),e=r(3018),o=r(5332),s=r(9584),a=new o,u=new e({initialize:function t(n,r,i,e){void 0===n&&(n=0),void 0===r&&(r=0),void 0===i&&(i=0),void 0===e&&(e=t.DefaultOrder),this._x=n,this._y=r,this._z=i,this._order=e,this.onChangeCallback=s},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,n,r,i){return void 0===i&&(i=this._order),this._x=t,this._y=n,this._z=r,this._order=i,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,n,r){return void 0===n&&(n=this._order),void 0===r&&(r=!1),a.fromQuat(t),this.setFromRotationMatrix(a,n,r)},setFromRotationMatrix:function(t,n,r){void 0===n&&(n=this._order),void 0===r&&(r=!1);var e=t.val,o=e[0],s=e[4],a=e[8],u=e[1],h=e[5],c=e[9],f=e[2],x=e[6],v=e[10],y=0,p=0,l=0,d=.99999;switch(n){case"XYZ":p=Math.asin(i(a,-1,1)),Math.abs(a)<d?(y=Math.atan2(-c,v),l=Math.atan2(-s,o)):y=Math.atan2(x,h);break;case"YXZ":y=Math.asin(-i(c,-1,1)),Math.abs(c)<d?(p=Math.atan2(a,v),l=Math.atan2(u,h)):p=Math.atan2(-f,o);break;case"ZXY":y=Math.asin(i(x,-1,1)),Math.abs(x)<d?(p=Math.atan2(-f,v),l=Math.atan2(-s,h)):l=Math.atan2(u,o);break;case"ZYX":p=Math.asin(-i(f,-1,1)),Math.abs(f)<d?(y=Math.atan2(x,v),l=Math.atan2(u,o)):l=Math.atan2(-s,h);break;case"YZX":l=Math.asin(i(u,-1,1)),Math.abs(u)<d?(y=Math.atan2(-c,h),p=Math.atan2(-f,o)):p=Math.atan2(a,v);break;case"XZY":l=Math.asin(-i(s,-1,1)),Math.abs(s)<d?(y=Math.atan2(x,h),p=Math.atan2(a,o)):y=Math.atan2(-c,v);break}return this._x=y,this._y=p,this._z=l,this._order=n,r&&this.onChangeCallback(this),this}});u.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],u.DefaultOrder="XYZ",t.exports=u},6038:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){if(0===t)return 1;var n=t;while(--t)n*=t;return n};t.exports=n},289:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return Math.random()*(n-t)+t};t.exports=n},9354:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=10);var i=Math.pow(r,-n);return Math.floor(t*i)/i};t.exports=n},3579:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(1495),e=function(t,n,r){return t=i(t,0,1),(r-n)*t+n};t.exports=e},1164:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t/n/1e3};t.exports=n},3:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t==parseFloat(t)?!(t%2):void 0};t.exports=n},7635:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t===parseFloat(t)?!(t%2):void 0};t.exports=n},7684:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return(n-t)*r+t};t.exports=n},7125:function(t,n,r){r(8675),r(3462);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=new i({initialize:function(t){this.val=new Float32Array(9),t?this.copy(t):this.identity()},clone:function(){return new e(this)},set:function(t){return this.copy(t)},copy:function(t){var n=this.val,r=t.val;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this},fromMat4:function(t){var n=t.val,r=this.val;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[4],r[4]=n[5],r[5]=n[6],r[6]=n[8],r[7]=n[9],r[8]=n[10],this},fromArray:function(t){var n=this.val;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,n=t[1],r=t[2],i=t[5];return t[1]=t[3],t[2]=t[6],t[3]=n,t[5]=t[7],t[6]=r,t[7]=i,this},invert:function(){var t=this.val,n=t[0],r=t[1],i=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=h*o-s*u,f=-h*e+s*a,x=u*e-o*a,v=n*c+r*f+i*x;return v?(v=1/v,t[0]=c*v,t[1]=(-h*r+i*u)*v,t[2]=(s*r-i*o)*v,t[3]=f*v,t[4]=(h*n-i*a)*v,t[5]=(-s*n+i*e)*v,t[6]=x*v,t[7]=(-u*n+r*a)*v,t[8]=(o*n-r*e)*v,this):null},adjoint:function(){var t=this.val,n=t[0],r=t[1],i=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8];return t[0]=o*h-s*u,t[1]=i*u-r*h,t[2]=r*s-i*o,t[3]=s*a-e*h,t[4]=n*h-i*a,t[5]=i*e-n*s,t[6]=e*u-o*a,t[7]=r*a-n*u,t[8]=n*o-r*e,this},determinant:function(){var t=this.val,n=t[0],r=t[1],i=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8];return n*(h*o-s*u)+r*(-h*e+s*a)+i*(u*e-o*a)},multiply:function(t){var n=this.val,r=n[0],i=n[1],e=n[2],o=n[3],s=n[4],a=n[5],u=n[6],h=n[7],c=n[8],f=t.val,x=f[0],v=f[1],y=f[2],p=f[3],l=f[4],d=f[5],g=f[6],M=f[7],w=f[8];return n[0]=x*r+v*o+y*u,n[1]=x*i+v*s+y*h,n[2]=x*e+v*a+y*c,n[3]=p*r+l*o+d*u,n[4]=p*i+l*s+d*h,n[5]=p*e+l*a+d*c,n[6]=g*r+M*o+w*u,n[7]=g*i+M*s+w*h,n[8]=g*e+M*a+w*c,this},translate:function(t){var n=this.val,r=t.x,i=t.y;return n[6]=r*n[0]+i*n[3]+n[6],n[7]=r*n[1]+i*n[4]+n[7],n[8]=r*n[2]+i*n[5]+n[8],this},rotate:function(t){var n=this.val,r=n[0],i=n[1],e=n[2],o=n[3],s=n[4],a=n[5],u=Math.sin(t),h=Math.cos(t);return n[0]=h*r+u*o,n[1]=h*i+u*s,n[2]=h*e+u*a,n[3]=h*o-u*r,n[4]=h*s-u*i,n[5]=h*a-u*e,this},scale:function(t){var n=this.val,r=t.x,i=t.y;return n[0]=r*n[0],n[1]=r*n[1],n[2]=r*n[2],n[3]=i*n[3],n[4]=i*n[4],n[5]=i*n[5],this},fromQuat:function(t){var n=t.x,r=t.y,i=t.z,e=t.w,o=n+n,s=r+r,a=i+i,u=n*o,h=n*s,c=n*a,f=r*s,x=r*a,v=i*a,y=e*o,p=e*s,l=e*a,d=this.val;return d[0]=1-(f+v),d[3]=h+l,d[6]=c-p,d[1]=h-l,d[4]=1-(u+v),d[7]=x+y,d[2]=c+p,d[5]=x-y,d[8]=1-(u+f),this},normalFromMat4:function(t){var n=t.val,r=this.val,i=n[0],e=n[1],o=n[2],s=n[3],a=n[4],u=n[5],h=n[6],c=n[7],f=n[8],x=n[9],v=n[10],y=n[11],p=n[12],l=n[13],d=n[14],g=n[15],M=i*u-e*a,w=i*h-o*a,m=i*c-s*a,z=e*h-o*u,b=e*c-s*u,I=o*c-s*h,C=f*l-x*p,A=f*d-v*p,P=f*g-y*p,T=x*d-v*l,O=x*g-y*l,_=v*g-y*d,R=M*_-w*O+m*T+z*P-b*A+I*C;return R?(R=1/R,r[0]=(u*_-h*O+c*T)*R,r[1]=(h*P-a*_-c*A)*R,r[2]=(a*O-u*P+c*C)*R,r[3]=(o*O-e*_-s*T)*R,r[4]=(i*_-o*P+s*A)*R,r[5]=(e*P-i*O-s*C)*R,r[6]=(l*I-d*b+g*z)*R,r[7]=(d*m-p*I-g*w)*R,r[8]=(p*b-l*m+g*M)*R,this):null}});t.exports=e},5332:function(t,n,r){r(8675),r(3462);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(2220),o=1e-6,s=new i({initialize:function(t){this.val=new Float32Array(16),t?this.copy(t):this.identity()},clone:function(){return new s(this)},set:function(t){return this.copy(t)},setValues:function(t,n,r,i,e,o,s,a,u,h,c,f,x,v,y,p){var l=this.val;return l[0]=t,l[1]=n,l[2]=r,l[3]=i,l[4]=e,l[5]=o,l[6]=s,l[7]=a,l[8]=u,l[9]=h,l[10]=c,l[11]=f,l[12]=x,l[13]=v,l[14]=y,l[15]=p,this},copy:function(t){var n=t.val;return this.setValues(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],n[9],n[10],n[11],n[12],n[13],n[14],n[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,n,r){var i=a.fromQuat(r),e=i.val,o=n.x,s=n.y,u=n.z;return this.setValues(e[0]*o,e[1]*o,e[2]*o,0,e[4]*s,e[5]*s,e[6]*s,0,e[8]*u,e[9]*u,e[10]*u,0,t.x,t.y,t.z,1)},xyz:function(t,n,r){this.identity();var i=this.val;return i[12]=t,i[13]=n,i[14]=r,this},scaling:function(t,n,r){this.zero();var i=this.val;return i[0]=t,i[5]=n,i[10]=r,i[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,n=t[1],r=t[2],i=t[3],e=t[6],o=t[7],s=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=n,t[6]=t[9],t[7]=t[13],t[8]=r,t[9]=e,t[11]=t[14],t[12]=i,t[13]=o,t[14]=s,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,n=t[0],r=t[1],i=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],f=t[10],x=t[11],v=t[12],y=t[13],p=t[14],l=t[15],d=n*s-r*o,g=n*a-i*o,M=n*u-e*o,w=r*a-i*s,m=r*u-e*s,z=i*u-e*a,b=h*y-c*v,I=h*p-f*v,C=h*l-x*v,A=c*p-f*y,P=c*l-x*y,T=f*l-x*p,O=d*T-g*P+M*A+w*C-m*I+z*b;return O?(O=1/O,this.setValues((s*T-a*P+u*A)*O,(i*P-r*T-e*A)*O,(y*z-p*m+l*w)*O,(f*m-c*z-x*w)*O,(a*C-o*T-u*I)*O,(n*T-i*C+e*I)*O,(p*M-v*z-l*g)*O,(h*z-f*M+x*g)*O,(o*P-s*C+u*b)*O,(r*C-n*P-e*b)*O,(v*m-y*M+l*d)*O,(c*M-h*m-x*d)*O,(s*I-o*A-a*b)*O,(n*A-r*I+i*b)*O,(y*g-v*w-p*d)*O,(h*w-c*g+f*d)*O)):this},adjoint:function(){var t=this.val,n=t[0],r=t[1],i=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],f=t[10],x=t[11],v=t[12],y=t[13],p=t[14],l=t[15];return this.setValues(s*(f*l-x*p)-c*(a*l-u*p)+y*(a*x-u*f),-(r*(f*l-x*p)-c*(i*l-e*p)+y*(i*x-e*f)),r*(a*l-u*p)-s*(i*l-e*p)+y*(i*u-e*a),-(r*(a*x-u*f)-s*(i*x-e*f)+c*(i*u-e*a)),-(o*(f*l-x*p)-h*(a*l-u*p)+v*(a*x-u*f)),n*(f*l-x*p)-h*(i*l-e*p)+v*(i*x-e*f),-(n*(a*l-u*p)-o*(i*l-e*p)+v*(i*u-e*a)),n*(a*x-u*f)-o*(i*x-e*f)+h*(i*u-e*a),o*(c*l-x*y)-h*(s*l-u*y)+v*(s*x-u*c),-(n*(c*l-x*y)-h*(r*l-e*y)+v*(r*x-e*c)),n*(s*l-u*y)-o*(r*l-e*y)+v*(r*u-e*s),-(n*(s*x-u*c)-o*(r*x-e*c)+h*(r*u-e*s)),-(o*(c*p-f*y)-h*(s*p-a*y)+v*(s*f-a*c)),n*(c*p-f*y)-h*(r*p-i*y)+v*(r*f-i*c),-(n*(s*p-a*y)-o*(r*p-i*y)+v*(r*a-i*s)),n*(s*f-a*c)-o*(r*f-i*c)+h*(r*a-i*s))},determinant:function(){var t=this.val,n=t[0],r=t[1],i=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],f=t[10],x=t[11],v=t[12],y=t[13],p=t[14],l=t[15],d=n*s-r*o,g=n*a-i*o,M=n*u-e*o,w=r*a-i*s,m=r*u-e*s,z=i*u-e*a,b=h*y-c*v,I=h*p-f*v,C=h*l-x*v,A=c*p-f*y,P=c*l-x*y,T=f*l-x*p;return d*T-g*P+M*A+w*C-m*I+z*b},multiply:function(t){var n=this.val,r=n[0],i=n[1],e=n[2],o=n[3],s=n[4],a=n[5],u=n[6],h=n[7],c=n[8],f=n[9],x=n[10],v=n[11],y=n[12],p=n[13],l=n[14],d=n[15],g=t.val,M=g[0],w=g[1],m=g[2],z=g[3];return n[0]=M*r+w*s+m*c+z*y,n[1]=M*i+w*a+m*f+z*p,n[2]=M*e+w*u+m*x+z*l,n[3]=M*o+w*h+m*v+z*d,M=g[4],w=g[5],m=g[6],z=g[7],n[4]=M*r+w*s+m*c+z*y,n[5]=M*i+w*a+m*f+z*p,n[6]=M*e+w*u+m*x+z*l,n[7]=M*o+w*h+m*v+z*d,M=g[8],w=g[9],m=g[10],z=g[11],n[8]=M*r+w*s+m*c+z*y,n[9]=M*i+w*a+m*f+z*p,n[10]=M*e+w*u+m*x+z*l,n[11]=M*o+w*h+m*v+z*d,M=g[12],w=g[13],m=g[14],z=g[15],n[12]=M*r+w*s+m*c+z*y,n[13]=M*i+w*a+m*f+z*p,n[14]=M*e+w*u+m*x+z*l,n[15]=M*o+w*h+m*v+z*d,this},multiplyLocal:function(t){var n=this.val,r=t.val;return this.setValues(n[0]*r[0]+n[1]*r[4]+n[2]*r[8]+n[3]*r[12],n[0]*r[1]+n[1]*r[5]+n[2]*r[9]+n[3]*r[13],n[0]*r[2]+n[1]*r[6]+n[2]*r[10]+n[3]*r[14],n[0]*r[3]+n[1]*r[7]+n[2]*r[11]+n[3]*r[15],n[4]*r[0]+n[5]*r[4]+n[6]*r[8]+n[7]*r[12],n[4]*r[1]+n[5]*r[5]+n[6]*r[9]+n[7]*r[13],n[4]*r[2]+n[5]*r[6]+n[6]*r[10]+n[7]*r[14],n[4]*r[3]+n[5]*r[7]+n[6]*r[11]+n[7]*r[15],n[8]*r[0]+n[9]*r[4]+n[10]*r[8]+n[11]*r[12],n[8]*r[1]+n[9]*r[5]+n[10]*r[9]+n[11]*r[13],n[8]*r[2]+n[9]*r[6]+n[10]*r[10]+n[11]*r[14],n[8]*r[3]+n[9]*r[7]+n[10]*r[11]+n[11]*r[15],n[12]*r[0]+n[13]*r[4]+n[14]*r[8]+n[15]*r[12],n[12]*r[1]+n[13]*r[5]+n[14]*r[9]+n[15]*r[13],n[12]*r[2]+n[13]*r[6]+n[14]*r[10]+n[15]*r[14],n[12]*r[3]+n[13]*r[7]+n[14]*r[11]+n[15]*r[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,n){var r=t.val,i=n.val,e=r[0],o=r[4],s=r[8],a=r[12],u=r[1],h=r[5],c=r[9],f=r[13],x=r[2],v=r[6],y=r[10],p=r[14],l=r[3],d=r[7],g=r[11],M=r[15],w=i[0],m=i[4],z=i[8],b=i[12],I=i[1],C=i[5],A=i[9],P=i[13],T=i[2],O=i[6],_=i[10],R=i[14],L=i[3],E=i[7],S=i[11],F=i[15];return this.setValues(e*w+o*I+s*T+a*L,u*w+h*I+c*T+f*L,x*w+v*I+y*T+p*L,l*w+d*I+g*T+M*L,e*m+o*C+s*O+a*E,u*m+h*C+c*O+f*E,x*m+v*C+y*O+p*E,l*m+d*C+g*O+M*E,e*z+o*A+s*_+a*S,u*z+h*A+c*_+f*S,x*z+v*A+y*_+p*S,l*z+d*A+g*_+M*S,e*b+o*P+s*R+a*F,u*b+h*P+c*R+f*F,x*b+v*P+y*R+p*F,l*b+d*P+g*R+M*F)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,n,r){var i=this.val;return i[12]=i[0]*t+i[4]*n+i[8]*r+i[12],i[13]=i[1]*t+i[5]*n+i[9]*r+i[13],i[14]=i[2]*t+i[6]*n+i[10]*r+i[14],i[15]=i[3]*t+i[7]*n+i[11]*r+i[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,n,r){var i=this.val;return i[0]=i[0]*t,i[1]=i[1]*t,i[2]=i[2]*t,i[3]=i[3]*t,i[4]=i[4]*n,i[5]=i[5]*n,i[6]=i[6]*n,i[7]=i[7]*n,i[8]=i[8]*r,i[9]=i[9]*r,i[10]=i[10]*r,i[11]=i[11]*r,this},makeRotationAxis:function(t,n){var r=Math.cos(n),i=Math.sin(n),e=1-r,o=t.x,s=t.y,a=t.z,u=e*o,h=e*s;return this.setValues(u*o+r,u*s-i*a,u*a+i*s,0,u*s+i*a,h*s+r,h*a-i*o,0,u*a-i*s,h*a+i*o,e*a*a+r,0,0,0,0,1)},rotate:function(t,n){var r=this.val,i=n.x,e=n.y,s=n.z,a=Math.sqrt(i*i+e*e+s*s);if(Math.abs(a)<o)return this;a=1/a,i*=a,e*=a,s*=a;var u=Math.sin(t),h=Math.cos(t),c=1-h,f=r[0],x=r[1],v=r[2],y=r[3],p=r[4],l=r[5],d=r[6],g=r[7],M=r[8],w=r[9],m=r[10],z=r[11],b=r[12],I=r[13],C=r[14],A=r[15],P=i*i*c+h,T=e*i*c+s*u,O=s*i*c-e*u,_=i*e*c-s*u,R=e*e*c+h,L=s*e*c+i*u,E=i*s*c+e*u,S=e*s*c-i*u,F=s*s*c+h;return this.setValues(f*P+p*T+M*O,x*P+l*T+w*O,v*P+d*T+m*O,y*P+g*T+z*O,f*_+p*R+M*L,x*_+l*R+w*L,v*_+d*R+m*L,y*_+g*R+z*L,f*E+p*S+M*F,x*E+l*S+w*F,v*E+d*S+m*F,y*E+g*S+z*F,b,I,C,A)},rotateX:function(t){var n=this.val,r=Math.sin(t),i=Math.cos(t),e=n[4],o=n[5],s=n[6],a=n[7],u=n[8],h=n[9],c=n[10],f=n[11];return n[4]=e*i+u*r,n[5]=o*i+h*r,n[6]=s*i+c*r,n[7]=a*i+f*r,n[8]=u*i-e*r,n[9]=h*i-o*r,n[10]=c*i-s*r,n[11]=f*i-a*r,this},rotateY:function(t){var n=this.val,r=Math.sin(t),i=Math.cos(t),e=n[0],o=n[1],s=n[2],a=n[3],u=n[8],h=n[9],c=n[10],f=n[11];return n[0]=e*i-u*r,n[1]=o*i-h*r,n[2]=s*i-c*r,n[3]=a*i-f*r,n[8]=e*r+u*i,n[9]=o*r+h*i,n[10]=s*r+c*i,n[11]=a*r+f*i,this},rotateZ:function(t){var n=this.val,r=Math.sin(t),i=Math.cos(t),e=n[0],o=n[1],s=n[2],a=n[3],u=n[4],h=n[5],c=n[6],f=n[7];return n[0]=e*i+u*r,n[1]=o*i+h*r,n[2]=s*i+c*r,n[3]=a*i+f*r,n[4]=u*i-e*r,n[5]=h*i-o*r,n[6]=c*i-s*r,n[7]=f*i-a*r,this},fromRotationTranslation:function(t,n){var r=t.x,i=t.y,e=t.z,o=t.w,s=r+r,a=i+i,u=e+e,h=r*s,c=r*a,f=r*u,x=i*a,v=i*u,y=e*u,p=o*s,l=o*a,d=o*u;return this.setValues(1-(x+y),c+d,f-l,0,c-d,1-(h+y),v+p,0,f+l,v-p,1-(h+x),0,n.x,n.y,n.z,1)},fromQuat:function(t){var n=t.x,r=t.y,i=t.z,e=t.w,o=n+n,s=r+r,a=i+i,u=n*o,h=n*s,c=n*a,f=r*s,x=r*a,v=i*a,y=e*o,p=e*s,l=e*a;return this.setValues(1-(f+v),h+l,c-p,0,h-l,1-(u+v),x+y,0,c+p,x-y,1-(u+f),0,0,0,0,1)},frustum:function(t,n,r,i,e,o){var s=1/(n-t),a=1/(i-r),u=1/(e-o);return this.setValues(2*e*s,0,0,0,0,2*e*a,0,0,(n+t)*s,(i+r)*a,(o+e)*u,-1,0,0,o*e*2*u,0)},perspective:function(t,n,r,i){var e=1/Math.tan(t/2),o=1/(r-i);return this.setValues(e/n,0,0,0,0,e,0,0,0,0,(i+r)*o,-1,0,0,2*i*r*o,0)},perspectiveLH:function(t,n,r,i){return this.setValues(2*r/t,0,0,0,0,2*r/n,0,0,0,0,-i/(r-i),1,0,0,r*i/(r-i),0)},ortho:function(t,n,r,i,e,o){var s=t-n,a=r-i,u=e-o;return s=0===s?s:1/s,a=0===a?a:1/a,u=0===u?u:1/u,this.setValues(-2*s,0,0,0,0,-2*a,0,0,0,0,2*u,0,(t+n)*s,(i+r)*a,(o+e)*u,1)},lookAtRH:function(t,n,r){var i=this.val;return f.subVectors(t,n),0===f.getLengthSquared()&&(f.z=1),f.normalize(),h.crossVectors(r,f),0===h.getLengthSquared()&&(1===Math.abs(r.z)?f.x+=1e-4:f.z+=1e-4,f.normalize(),h.crossVectors(r,f)),h.normalize(),c.crossVectors(f,h),i[0]=h.x,i[1]=h.y,i[2]=h.z,i[4]=c.x,i[5]=c.y,i[6]=c.z,i[8]=f.x,i[9]=f.y,i[10]=f.z,this},lookAt:function(t,n,r){var i=t.x,e=t.y,s=t.z,a=r.x,u=r.y,h=r.z,c=n.x,f=n.y,x=n.z;if(Math.abs(i-c)<o&&Math.abs(e-f)<o&&Math.abs(s-x)<o)return this.identity();var v=i-c,y=e-f,p=s-x,l=1/Math.sqrt(v*v+y*y+p*p);v*=l,y*=l,p*=l;var d=u*p-h*y,g=h*v-a*p,M=a*y-u*v;l=Math.sqrt(d*d+g*g+M*M),l?(l=1/l,d*=l,g*=l,M*=l):(d=0,g=0,M=0);var w=y*M-p*g,m=p*d-v*M,z=v*g-y*d;return l=Math.sqrt(w*w+m*m+z*z),l?(l=1/l,w*=l,m*=l,z*=l):(w=0,m=0,z=0),this.setValues(d,w,v,0,g,m,y,0,M,z,p,0,-(d*i+g*e+M*s),-(w*i+m*e+z*s),-(v*i+y*e+p*s),1)},yawPitchRoll:function(t,n,r){this.zero(),a.zero(),u.zero();var i=this.val,e=a.val,o=u.val,s=Math.sin(r),h=Math.cos(r);return i[10]=1,i[15]=1,i[0]=h,i[1]=s,i[4]=-s,i[5]=h,s=Math.sin(n),h=Math.cos(n),e[0]=1,e[15]=1,e[5]=h,e[10]=h,e[9]=-s,e[6]=s,s=Math.sin(t),h=Math.cos(t),o[5]=1,o[15]=1,o[0]=h,o[2]=-s,o[8]=s,o[10]=h,this.multiplyLocal(a),this.multiplyLocal(u),this},setWorldMatrix:function(t,n,r,i,e){return this.yawPitchRoll(t.y,t.x,t.z),a.scaling(r.x,r.y,r.z),u.xyz(n.x,n.y,n.z),this.multiplyLocal(a),this.multiplyLocal(u),i&&this.multiplyLocal(i),e&&this.multiplyLocal(e),this},multiplyToMat4:function(t,n){var r=this.val,i=t.val,e=r[0],o=r[1],s=r[2],a=r[3],u=r[4],h=r[5],c=r[6],f=r[7],x=r[8],v=r[9],y=r[10],p=r[11],l=r[12],d=r[13],g=r[14],M=r[15],w=i[0],m=i[1],z=i[2],b=i[3],I=i[4],C=i[5],A=i[6],P=i[7],T=i[8],O=i[9],_=i[10],R=i[11],L=i[12],E=i[13],S=i[14],F=i[15];return n.setValues(w*e+m*u+z*x+b*l,m*o+m*h+z*v+b*d,z*s+m*c+z*y+b*g,b*a+m*f+z*p+b*M,I*e+C*u+A*x+P*l,I*o+C*h+A*v+P*d,I*s+C*c+A*y+P*g,I*a+C*f+A*p+P*M,T*e+O*u+_*x+R*l,T*o+O*h+_*v+R*d,T*s+O*c+_*y+R*g,T*a+O*f+_*p+R*M,L*e+E*u+S*x+F*l,L*o+E*h+S*v+F*d,L*s+E*c+S*y+F*g,L*a+E*f+S*p+F*M)},fromRotationXYTranslation:function(t,n,r){var i=n.x,e=n.y,o=n.z,s=Math.sin(t.x),a=Math.cos(t.x),u=Math.sin(t.y),h=Math.cos(t.y),c=i,f=e,x=o,v=-s,y=0-v*u,p=0-a*u,l=v*h,d=a*h;return r||(c=h*i+u*o,f=y*i+a*e+l*o,x=p*i+s*e+d*o),this.setValues(h,y,p,0,0,a,s,0,u,l,d,0,c,f,x,1)},getMaxScaleOnAxis:function(){var t=this.val,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,i))}}),a=new s,u=new s,h=new e,c=new e,f=new e;t.exports=s},8367:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return Math.min(t+n,r)};t.exports=n},4601:function(t){
/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=t.length;if(0===n)return 0;t.sort((function(t,n){return t-n}));var r=Math.floor(n/2);return n%2===0?(t[r]+t[r-1])/2:t[r]};t.exports=n},1880:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return Math.max(t-n,r)};t.exports=n},2542:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){void 0===r&&(r=n+1);var e=(t-n)/(r-n);return e>1?void 0!==i?(e=(i-t)/(i-r),e<0&&(e=0)):e=1:e<0&&(e=0),e};t.exports=n},2148:function(t,n,r){r(8675),r(3462);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(7125),o=r(9584),s=r(2220),a=1e-6,u=new Int8Array([1,2,0]),h=new Float32Array([0,0,0]),c=new s(1,0,0),f=new s(0,1,0),x=new s,v=new e,y=new i({initialize:function(t,n,r,i){this.onChangeCallback=o,this.set(t,n,r,i)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,n,r,i,e){return void 0===e&&(e=!0),"object"===typeof t?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=n||0,this._z=r||0,this._w=i||0),e&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,n=this.y,r=this.z,i=this.w;return Math.sqrt(t*t+n*n+r*r+i*i)},lengthSq:function(){var t=this.x,n=this.y,r=this.z,i=this.w;return t*t+n*n+r*r+i*i},normalize:function(){var t=this.x,n=this.y,r=this.z,i=this.w,e=t*t+n*n+r*r+i*i;return e>0&&(e=1/Math.sqrt(e),this._x=t*e,this._y=n*e,this._z=r*e,this._w=i*e),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,n){void 0===n&&(n=0);var r=this.x,i=this.y,e=this.z,o=this.w;return this.set(r+n*(t.x-r),i+n*(t.y-i),e+n*(t.z-e),o+n*(t.w-o))},rotationTo:function(t,n){var r=t.x*n.x+t.y*n.y+t.z*n.z;return r<-.999999?(x.copy(c).cross(t).length()<a&&x.copy(f).cross(t),x.normalize(),this.setAxisAngle(x,Math.PI)):r>.999999?this.set(0,0,0,1):(x.copy(t).cross(n),this._x=x.x,this._y=x.y,this._z=x.z,this._w=1+r,this.normalize())},setAxes:function(t,n,r){var i=v.val;return i[0]=n.x,i[3]=n.y,i[6]=n.z,i[1]=r.x,i[4]=r.y,i[7]=r.z,i[2]=-t.x,i[5]=-t.y,i[8]=-t.z,this.fromMat3(v).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,n){n*=.5;var r=Math.sin(n);return this.set(r*t.x,r*t.y,r*t.z,Math.cos(n))},multiply:function(t){var n=this.x,r=this.y,i=this.z,e=this.w,o=t.x,s=t.y,a=t.z,u=t.w;return this.set(n*u+e*o+r*a-i*s,r*u+e*s+i*o-n*a,i*u+e*a+n*s-r*o,e*u-n*o-r*s-i*a)},slerp:function(t,n){var r=this.x,i=this.y,e=this.z,o=this.w,s=t.x,u=t.y,h=t.z,c=t.w,f=r*s+i*u+e*h+o*c;f<0&&(f=-f,s=-s,u=-u,h=-h,c=-c);var x=1-n,v=n;if(1-f>a){var y=Math.acos(f),p=Math.sin(y);x=Math.sin((1-n)*y)/p,v=Math.sin(n*y)/p}return this.set(x*r+v*s,x*i+v*u,x*e+v*h,x*o+v*c)},invert:function(){var t=this.x,n=this.y,r=this.z,i=this.w,e=t*t+n*n+r*r+i*i,o=e?1/e:0;return this.set(-t*o,-n*o,-r*o,i*o)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var n=this.x,r=this.y,i=this.z,e=this.w,o=Math.sin(t),s=Math.cos(t);return this.set(n*s+e*o,r*s+i*o,i*s-r*o,e*s-n*o)},rotateY:function(t){t*=.5;var n=this.x,r=this.y,i=this.z,e=this.w,o=Math.sin(t),s=Math.cos(t);return this.set(n*s-i*o,r*s+e*o,i*s+n*o,e*s-r*o)},rotateZ:function(t){t*=.5;var n=this.x,r=this.y,i=this.z,e=this.w,o=Math.sin(t),s=Math.cos(t);return this.set(n*s+r*o,r*s-n*o,i*s+e*o,e*s-i*o)},calculateW:function(){var t=this.x,n=this.y,r=this.z;return this.w=-Math.sqrt(1-t*t-n*n-r*r),this},setFromEuler:function(t,n){var r=t.x/2,i=t.y/2,e=t.z/2,o=Math.cos(r),s=Math.cos(i),a=Math.cos(e),u=Math.sin(r),h=Math.sin(i),c=Math.sin(e);switch(t.order){case"XYZ":this.set(u*s*a+o*h*c,o*h*a-u*s*c,o*s*c+u*h*a,o*s*a-u*h*c,n);break;case"YXZ":this.set(u*s*a+o*h*c,o*h*a-u*s*c,o*s*c-u*h*a,o*s*a+u*h*c,n);break;case"ZXY":this.set(u*s*a-o*h*c,o*h*a+u*s*c,o*s*c+u*h*a,o*s*a-u*h*c,n);break;case"ZYX":this.set(u*s*a-o*h*c,o*h*a+u*s*c,o*s*c-u*h*a,o*s*a+u*h*c,n);break;case"YZX":this.set(u*s*a+o*h*c,o*h*a+u*s*c,o*s*c-u*h*a,o*s*a-u*h*c,n);break;case"XZY":this.set(u*s*a-o*h*c,o*h*a-u*s*c,o*s*c+u*h*a,o*s*a+u*h*c,n);break}return this},setFromRotationMatrix:function(t){var n,r=t.val,i=r[0],e=r[4],o=r[8],s=r[1],a=r[5],u=r[9],h=r[2],c=r[6],f=r[10],x=i+a+f;return x>0?(n=.5/Math.sqrt(x+1),this.set((c-u)*n,(o-h)*n,(s-e)*n,.25/n)):i>a&&i>f?(n=2*Math.sqrt(1+i-a-f),this.set(.25*n,(e+s)/n,(o+h)/n,(c-u)/n)):a>f?(n=2*Math.sqrt(1+a-i-f),this.set((e+s)/n,.25*n,(u+c)/n,(o-h)/n)):(n=2*Math.sqrt(1+f-i-a),this.set((o+h)/n,(u+c)/n,.25*n,(s-e)/n)),this},fromMat3:function(t){var n,r=t.val,i=r[0]+r[4]+r[8];if(i>0)n=Math.sqrt(i+1),this.w=.5*n,n=.5/n,this._x=(r[7]-r[5])*n,this._y=(r[2]-r[6])*n,this._z=(r[3]-r[1])*n;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[3*e+e]&&(e=2);var o=u[e],s=u[o];n=Math.sqrt(r[3*e+e]-r[3*o+o]-r[3*s+s]+1),h[e]=.5*n,n=.5/n,h[o]=(r[3*o+e]+r[3*e+o])*n,h[s]=(r[3*s+e]+r[3*e+s])*n,this._x=h[0],this._y=h[1],this._z=h[2],this._w=(r[3*s+o]-r[3*o+s])*n}return this.onChangeCallback(this),this}});t.exports=y},9489:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=function(t){return t*i.RAD_TO_DEG};t.exports=e},1103:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=1);var r=2*Math.random()*Math.PI;return t.x=Math.cos(r)*n,t.y=Math.sin(r)*n,t};t.exports=n},3834:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=1);var r=2*Math.random()*Math.PI,i=2*Math.random()-1,e=Math.sqrt(1-i*i)*n;return t.x=Math.cos(r)*e,t.y=Math.sin(r)*e,t.z=i*n,t};t.exports=n},7679:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1),t.x=(2*Math.random()-1)*n,t.y=(2*Math.random()-1)*n,t.z=(2*Math.random()-1)*n,t.w=(2*Math.random()-1)*n,t};t.exports=n},6234:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=t.x,i=t.y;return t.x=r*Math.cos(n)-i*Math.sin(n),t.y=r*Math.sin(n)+i*Math.cos(n),t};t.exports=n},2671:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){var e=Math.cos(i),o=Math.sin(i),s=t.x-n,a=t.y-r;return t.x=s*e-a*o+n,t.y=s*o+a*e+r,t};t.exports=n},1216:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i,e){var o=i+Math.atan2(t.y-r,t.x-n);return t.x=n+e*Math.cos(o),t.y=r+e*Math.sin(o),t};t.exports=n},3145:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i,e){return t.x=n+e*Math.cos(i),t.y=r+e*Math.sin(i),t};t.exports=n},3068:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2220),e=r(5332),o=r(2148),s=new e,a=new o,u=new i,h=function(t,n,r){return a.setAxisAngle(n,r),s.fromRotationTranslation(a,u.set(0,0,0)),t.transformMat4(s)};t.exports=h},4462:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t>0?Math.ceil(t):Math.floor(t)};t.exports=n},898:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=10);var i=Math.pow(r,-n);return Math.round(t*i)/i};t.exports=n},6691:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){void 0===n&&(n=1),void 0===r&&(r=1),void 0===i&&(i=1),i*=Math.PI/t;for(var e=[],o=[],s=0;s<t;s++)r-=n*i,n+=r*i,e[s]=r,o[s]=n;return{sin:o,cos:e,length:t}};t.exports=n},458:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t<=n?0:t>=r?1:(t=(t-n)/(r-n),t*t*(3-2*t))};t.exports=n},9317:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return t=Math.max(0,Math.min(1,(t-n)/(r-n))),t*t*t*(t*(6*t-15)+10)};t.exports=n},4586:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9182),e=function(t,n,r,e){void 0===e&&(e=new i);var o=0,s=0,a=n*r;return t>0&&t<=a&&(t>n-1?(s=Math.floor(t/n),o=t-s*n):o=t),e.set(o,s)};t.exports=e},4912:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9182),e=function(t,n,r,e,o,s,a,u){void 0===u&&(u=new i);var h=Math.sin(o),c=Math.cos(o),f=c*s,x=h*s,v=-h*a,y=c*a,p=1/(f*y+v*-x);return u.x=y*p*t+-v*p*n+(e*v-r*y)*p,u.y=f*p*n+-x*p*t+(-e*f+r*x)*p,u};t.exports=e},9182:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=r(7290),o=new i({initialize:function(t,n){this.x=0,this.y=0,"object"===typeof t?(this.x=t.x||0,this.y=t.y||0):(void 0===n&&(n=t),this.x=t||0,this.y=n||0)},clone:function(){return new o(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},setTo:function(t,n){return this.set(t,n)},setToPolar:function(t,n){return null==n&&(n=1),this.x=Math.cos(t)*n,this.y=Math.sin(t)*n,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,n){return e(this.x,t.x,n)&&e(this.y,t.y,n)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var n=t.x-this.x,r=t.y-this.y;return Math.sqrt(n*n+r*r)},distanceSq:function(t){var n=t.x-this.x,r=t.y-this.y;return n*n+r*r},length:function(){var t=this.x,n=this.y;return Math.sqrt(t*t+n*n)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,n=this.y;return t*t+n*n},normalize:function(){var t=this.x,n=this.y,r=t*t+n*n;return r>0&&(r=1/Math.sqrt(r),this.x=t*r,this.y=n*r),this},normalizeRightHand:function(){var t=this.x;return this.x=-1*this.y,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=-1*t,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,n){void 0===n&&(n=0);var r=this.x,i=this.y;return this.x=r+n*(t.x-r),this.y=i+n*(t.y-i),this},transformMat3:function(t){var n=this.x,r=this.y,i=t.val;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this},transformMat4:function(t){var n=this.x,r=this.y,i=t.val;return this.x=i[0]*n+i[4]*r+i[12],this.y=i[1]*n+i[5]*r+i[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var n=this.length();return n&&n>t&&this.scale(t/n),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(n*this.x-r*this.y,r*this.x+n*this.y)}});o.ZERO=new o,o.RIGHT=new o(1,0),o.LEFT=new o(-1,0),o.UP=new o(0,-1),o.DOWN=new o(0,1),o.ONE=new o(1,1),t.exports=o},2220:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=new i({initialize:function(t,n,r){this.x=0,this.y=0,this.z=0,"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=n||0,this.z=r||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new e(this.x,this.y,this.z)},addVectors:function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this},crossVectors:function(t,n){var r=t.x,i=t.y,e=t.z,o=n.x,s=n.y,a=n.z;return this.x=i*a-e*s,this.y=e*o-r*a,this.z=r*s-i*o,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,n,r){return"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=n||0,this.z=r||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,n){return this.fromArray(t.val,4*n)},fromArray:function(t,n){return void 0===n&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var n=t.x-this.x,r=t.y-this.y,i=t.z-this.z||0;return Math.sqrt(n*n+r*r+i*i)},distanceSq:function(t){var n=t.x-this.x,r=t.y-this.y,i=t.z-this.z||0;return n*n+r*r+i*i},length:function(){var t=this.x,n=this.y,r=this.z;return Math.sqrt(t*t+n*n+r*r)},lengthSq:function(){var t=this.x,n=this.y,r=this.z;return t*t+n*n+r*r},normalize:function(){var t=this.x,n=this.y,r=this.z,i=t*t+n*n+r*r;return i>0&&(i=1/Math.sqrt(i),this.x=t*i,this.y=n*i,this.z=r*i),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var n=this.x,r=this.y,i=this.z,e=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*e-n*s,this.z=n*o-r*e,this},lerp:function(t,n){void 0===n&&(n=0);var r=this.x,i=this.y,e=this.z;return this.x=r+n*(t.x-r),this.y=i+n*(t.y-i),this.z=e+n*(t.z-e),this},applyMatrix3:function(t){var n=this.x,r=this.y,i=this.z,e=t.val;return this.x=e[0]*n+e[3]*r+e[6]*i,this.y=e[1]*n+e[4]*r+e[7]*i,this.z=e[2]*n+e[5]*r+e[8]*i,this},applyMatrix4:function(t){var n=this.x,r=this.y,i=this.z,e=t.val,o=1/(e[3]*n+e[7]*r+e[11]*i+e[15]);return this.x=(e[0]*n+e[4]*r+e[8]*i+e[12])*o,this.y=(e[1]*n+e[5]*r+e[9]*i+e[13])*o,this.z=(e[2]*n+e[6]*r+e[10]*i+e[14])*o,this},transformMat3:function(t){var n=this.x,r=this.y,i=this.z,e=t.val;return this.x=n*e[0]+r*e[3]+i*e[6],this.y=n*e[1]+r*e[4]+i*e[7],this.z=n*e[2]+r*e[5]+i*e[8],this},transformMat4:function(t){var n=this.x,r=this.y,i=this.z,e=t.val;return this.x=e[0]*n+e[4]*r+e[8]*i+e[12],this.y=e[1]*n+e[5]*r+e[9]*i+e[13],this.z=e[2]*n+e[6]*r+e[10]*i+e[14],this},transformCoordinates:function(t){var n=this.x,r=this.y,i=this.z,e=t.val,o=n*e[0]+r*e[4]+i*e[8]+e[12],s=n*e[1]+r*e[5]+i*e[9]+e[13],a=n*e[2]+r*e[6]+i*e[10]+e[14],u=n*e[3]+r*e[7]+i*e[11]+e[15];return this.x=o/u,this.y=s/u,this.z=a/u,this},transformQuat:function(t){var n=this.x,r=this.y,i=this.z,e=t.x,o=t.y,s=t.z,a=t.w,u=a*n+o*i-s*r,h=a*r+s*n-e*i,c=a*i+e*r-o*n,f=-e*n-o*r-s*i;return this.x=u*a+f*-e+h*-s-c*-o,this.y=h*a+f*-o+c*-e-u*-s,this.z=c*a+f*-s+u*-o-h*-e,this},project:function(t){var n=this.x,r=this.y,i=this.z,e=t.val,o=e[0],s=e[1],a=e[2],u=e[3],h=e[4],c=e[5],f=e[6],x=e[7],v=e[8],y=e[9],p=e[10],l=e[11],d=e[12],g=e[13],M=e[14],w=e[15],m=1/(n*u+r*x+i*l+w);return this.x=(n*o+r*h+i*v+d)*m,this.y=(n*s+r*c+i*y+g)*m,this.z=(n*a+r*f+i*p+M)*m,this},projectViewMatrix:function(t,n){return this.applyMatrix4(t).applyMatrix4(n)},unprojectViewMatrix:function(t,n){return this.applyMatrix4(t).applyMatrix4(n)},unproject:function(t,n){var r=t.x,i=t.y,e=t.z,o=t.w,s=this.x-r,a=o-this.y-1-i,u=this.z;return this.x=2*s/e-1,this.y=2*a/o-1,this.z=2*u-1,this.project(n)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});e.ZERO=new e,e.RIGHT=new e(1,0,0),e.LEFT=new e(-1,0,0),e.UP=new e(0,-1,0),e.DOWN=new e(0,1,0),e.FORWARD=new e(0,0,1),e.BACK=new e(0,0,-1),e.ONE=new e(1,1,1),t.exports=e},3963:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=new i({initialize:function(t,n,r,i){this.x=0,this.y=0,this.z=0,this.w=0,"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=n||0,this.z=r||0,this.w=i||0)},clone:function(){return new e(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,n,r,i){return"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=n||0,this.z=r||0,this.w=i||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,n=this.y,r=this.z,i=this.w;return Math.sqrt(t*t+n*n+r*r+i*i)},lengthSq:function(){var t=this.x,n=this.y,r=this.z,i=this.w;return t*t+n*n+r*r+i*i},normalize:function(){var t=this.x,n=this.y,r=this.z,i=this.w,e=t*t+n*n+r*r+i*i;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=n*e,this.z=r*e,this.w=i*e),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,n){void 0===n&&(n=0);var r=this.x,i=this.y,e=this.z,o=this.w;return this.x=r+n*(t.x-r),this.y=i+n*(t.y-i),this.z=e+n*(t.z-e),this.w=o+n*(t.w-o),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var n=t.x-this.x,r=t.y-this.y,i=t.z-this.z||0,e=t.w-this.w||0;return Math.sqrt(n*n+r*r+i*i+e*e)},distanceSq:function(t){var n=t.x-this.x,r=t.y-this.y,i=t.z-this.z||0,e=t.w-this.w||0;return n*n+r*r+i*i+e*e},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var n=this.x,r=this.y,i=this.z,e=this.w,o=t.val;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*e,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*e,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*e,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*e,this},transformQuat:function(t){var n=this.x,r=this.y,i=this.z,e=t.x,o=t.y,s=t.z,a=t.w,u=a*n+o*i-s*r,h=a*r+s*n-e*i,c=a*i+e*r-o*n,f=-e*n-o*r-s*i;return this.x=u*a+f*-e+h*-s-c*-o,this.y=h*a+f*-o+c*-e-u*-s,this.z=c*a+f*-s+u*-o-h*-e,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});e.prototype.sub=e.prototype.subtract,e.prototype.mul=e.prototype.multiply,e.prototype.div=e.prototype.divide,e.prototype.dist=e.prototype.distance,e.prototype.distSq=e.prototype.distanceSq,e.prototype.len=e.prototype.length,e.prototype.lenSq=e.prototype.lengthSq,t.exports=e},2030:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return Math.abs(t-n)<=r};t.exports=n},2923:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){var i=r-n;return n+((t-n)%i+i)%i};t.exports=n},8097:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return Math.atan2(i-n,r-t)};t.exports=n},6348:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return Math.atan2(n.y-t.y,n.x-t.x)};t.exports=n},1715:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return Math.atan2(n.x-t.x,n.y-t.y)};t.exports=n},2663:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return Math.atan2(r-t,i-n)};t.exports=n},9454:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=function(t){return t>Math.PI&&(t-=i.PI2),Math.abs(((t+i.TAU)%i.PI2-i.PI2)%i.PI2)};t.exports=e},924:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t%=2*Math.PI,t>=0?t:t+2*Math.PI};t.exports=n},1243:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       @samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(289),e=function(){return i(-Math.PI,Math.PI)};t.exports=e},4920:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       @samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(289),e=function(){return i(-180,180)};t.exports=e},9597:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(924),e=function(t){return i(t+Math.PI)};t.exports=e},2897:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=function(t,n,r){return void 0===r&&(r=.05),t===n||(Math.abs(n-t)<=r||Math.abs(n-t)>=i.PI2-r?t=n:(Math.abs(n-t)>Math.PI&&(n<t?n+=i.PI2:n-=i.PI2),n>t?t+=r:n<t&&(t-=r))),t};t.exports=e},7243:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=n-t;if(0===r)return 0;var i=Math.floor((r- -180)/360);return r-360*i};t.exports=n},4816:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2923),e=function(t){return i(t,-Math.PI,Math.PI)};t.exports=e},300:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2923),e=function(t){return i(t,-180,180)};t.exports=e},1692:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Between:r(8097),BetweenPoints:r(6348),BetweenPointsY:r(1715),BetweenY:r(2663),CounterClockwise:r(9454),Normalize:r(924),Random:r(1243),RandomDegrees:r(4920),Reverse:r(9597),RotateTo:r(2897),ShortestBetween:r(7243),Wrap:r(4816),WrapDegrees:r(300)}},611:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n={PI2:2*Math.PI,TAU:.5*Math.PI,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991};t.exports=n},6052:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){var e=t-r,o=n-i;return Math.sqrt(e*e+o*o)};t.exports=n},5091:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=t.x-n.x,i=t.y-n.y;return Math.sqrt(r*r+i*i)};t.exports=n},8220:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var r=t.x-n.x,i=t.y-n.y;return r*r+i*i};t.exports=n},6471:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return Math.max(Math.abs(t-r),Math.abs(n-i))};t.exports=n},3702:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i,e){return void 0===e&&(e=2),Math.sqrt(Math.pow(r-t,e)+Math.pow(i-n,e))};t.exports=n},6828:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return Math.abs(t-r)+Math.abs(n-i)};t.exports=n},7944:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){var e=t-r,o=n-i;return e*e+o*o};t.exports=n},6693:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Between:r(6052),BetweenPoints:r(5091),BetweenPointsSquared:r(8220),Chebyshev:r(6471),Power:r(3702),Snake:r(6828),Squared:r(7944)}},6298:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(2672),e=r(9004),o=r(214),s=r(8583),a=r(3921),u=r(829),h=r(7638),c=r(2981),f=r(6511),x=r(3052),v=r(3141),y=r(2759);t.exports={Power0:h,Power1:c.Out,Power2:s.Out,Power3:f.Out,Power4:x.Out,Linear:h,Quad:c.Out,Cubic:s.Out,Quart:f.Out,Quint:x.Out,Sine:v.Out,Expo:u.Out,Circ:o.Out,Elastic:a.Out,Back:i.Out,Bounce:e.Out,Stepped:y,"Quad.easeIn":c.In,"Cubic.easeIn":s.In,"Quart.easeIn":f.In,"Quint.easeIn":x.In,"Sine.easeIn":v.In,"Expo.easeIn":u.In,"Circ.easeIn":o.In,"Elastic.easeIn":a.In,"Back.easeIn":i.In,"Bounce.easeIn":e.In,"Quad.easeOut":c.Out,"Cubic.easeOut":s.Out,"Quart.easeOut":f.Out,"Quint.easeOut":x.Out,"Sine.easeOut":v.Out,"Expo.easeOut":u.Out,"Circ.easeOut":o.Out,"Elastic.easeOut":a.Out,"Back.easeOut":i.Out,"Bounce.easeOut":e.Out,"Quad.easeInOut":c.InOut,"Cubic.easeInOut":s.InOut,"Quart.easeInOut":f.InOut,"Quint.easeInOut":x.InOut,"Sine.easeInOut":v.InOut,"Expo.easeInOut":u.InOut,"Circ.easeInOut":o.InOut,"Elastic.easeInOut":a.InOut,"Back.easeInOut":i.InOut,"Bounce.easeInOut":e.InOut}},5577:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1.70158),t*t*((n+1)*t-n)};t.exports=n},1197:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=1.70158);var r=1.525*n;return(t*=2)<1?t*t*((r+1)*t-r)*.5:.5*((t-=2)*t*((r+1)*t+r)+2)};t.exports=n},6418:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1.70158),--t*t*((n+1)*t+n)+1};t.exports=n},2672:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(5577),Out:r(6418),InOut:r(1197)}},6648:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)};t.exports=n},5092:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=!1;return t<.5?(t=1-2*t,n=!0):t=2*t-1,t<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,n?.5*(1-t):.5*t+.5};t.exports=n},3631:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};t.exports=n},9004:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(6648),Out:r(3631),InOut:r(5092)}},4888:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 1-Math.sqrt(1-t*t)};t.exports=n},7250:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)};t.exports=n},97:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.sqrt(1- --t*t)};t.exports=n},214:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(4888),Out:r(97),InOut:r(7250)}},5971:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t*t*t};t.exports=n},7572:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)};t.exports=n},6786:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return--t*t*t+1};t.exports=n},8583:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(5971),Out:r(6786),InOut:r(7572)}},7946:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){if(void 0===n&&(n=.1),void 0===r&&(r=.1),0===t)return 0;if(1===t)return 1;var i=r/4;return n<1?n=1:i=r*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/r)};t.exports=n},228:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){if(void 0===n&&(n=.1),void 0===r&&(r=.1),0===t)return 0;if(1===t)return 1;var i=r/4;return n<1?n=1:i=r*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/r)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/r)*.5+1};t.exports=n},8822:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){if(void 0===n&&(n=.1),void 0===r&&(r=.1),0===t)return 0;if(1===t)return 1;var i=r/4;return n<1?n=1:i=r*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-i)*(2*Math.PI)/r)+1};t.exports=n},3921:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(7946),Out:r(8822),InOut:r(228)}},5675:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.pow(2,10*(t-1))-.001};t.exports=n},9206:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))};t.exports=n},5014:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 1-Math.pow(2,-10*t)};t.exports=n},829:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(5675),Out:r(5014),InOut:r(9206)}},6684:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Back:r(2672),Bounce:r(9004),Circular:r(214),Cubic:r(8583),Elastic:r(3921),Expo:r(829),Linear:r(7638),Quadratic:r(2981),Quartic:r(6511),Quintic:r(3052),Sine:r(3141),Stepped:r(2759)}},4893:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t};t.exports=n},7638:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports=r(4893)},9433:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t*t};t.exports=n},9078:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)};t.exports=n},1649:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t*(2-t)};t.exports=n},2981:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(9433),Out:r(1649),InOut:r(9078)}},9310:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t*t*t*t};t.exports=n},753:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)};t.exports=n},4210:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 1- --t*t*t*t};t.exports=n},6511:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(9310),Out:r(4210),InOut:r(753)}},6850:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t*t*t*t*t};t.exports=n},5159:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)};t.exports=n},5687:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return--t*t*t*t*t+1};t.exports=n},3052:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(6850),Out:r(5687),InOut:r(5159)}},8689:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 0===t?0:1===t?1:1-Math.cos(t*Math.PI/2)};t.exports=n},9345:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 0===t?0:1===t?1:.5*(1-Math.cos(Math.PI*t))};t.exports=n},8811:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 0===t?0:1===t?1:Math.sin(t*Math.PI/2)};t.exports=n},3141:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:r(8689),Out:r(8811),InOut:r(9345)}},2082:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1),t<=0?0:t>=1?1:1/n*(1+(n*t|0))};t.exports=n},2759:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports=r(2082)},8027:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1e-4),Math.ceil(t-n)};t.exports=n},7290:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return void 0===r&&(r=1e-4),Math.abs(t-n)<r};t.exports=n},8163:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1e-4),Math.floor(t+n)};t.exports=n},4516:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return void 0===r&&(r=1e-4),t>n-r};t.exports=n},7156:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){return void 0===r&&(r=1e-4),t<n+r};t.exports=n},6531:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Ceil:r(8027),Equal:r(7290),Floor:r(8163),GreaterThan:r(4516),LessThan:r(7156)}},3129:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(611),e=r(2037),o={Angle:r(1692),Distance:r(6693),Easing:r(6684),Fuzzy:r(6531),Interpolation:r(1678),Pow2:r(1154),Snap:r(6437),RandomDataGenerator:r(7688),Average:r(9011),Bernstein:r(4908),Between:r(7443),CatmullRom:r(3179),CeilTo:r(9457),Clamp:r(1495),DegToRad:r(3490),Difference:r(2125),Euler:r(7368),Factorial:r(6038),FloatBetween:r(289),FloorTo:r(9354),FromPercent:r(3579),GetSpeed:r(1164),IsEven:r(3),IsEvenStrict:r(7635),Linear:r(7684),MaxAdd:r(8367),Median:r(4601),MinSub:r(1880),Percent:r(2542),RadToDeg:r(9489),RandomXY:r(1103),RandomXYZ:r(3834),RandomXYZW:r(7679),Rotate:r(6234),RotateAround:r(2671),RotateAroundDistance:r(1216),RotateTo:r(3145),RoundAwayFromZero:r(4462),RoundTo:r(898),SinCosTableGenerator:r(6691),SmootherStep:r(9317),SmoothStep:r(458),ToXY:r(4586),TransformXY:r(4912),Within:r(2030),Wrap:r(2923),Vector2:r(9182),Vector3:r(2220),Vector4:r(3963),Matrix3:r(7125),Matrix4:r(5332),Quaternion:r(2148),RotateVec3:r(3068)};o=e(!1,o,i),t.exports=o},4110:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(4908),e=function(t,n){for(var r=0,e=t.length-1,o=0;o<=e;o++)r+=Math.pow(1-n,e-o)*Math.pow(n,o)*t[o]*i(e,o);return r};t.exports=e},4725:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3179),e=function(t,n){var r=t.length-1,e=r*n,o=Math.floor(e);return t[0]===t[r]?(n<0&&(o=Math.floor(e=r*(1+n))),i(e-o,t[(o-1+r)%r],t[o],t[(o+1)%r],t[(o+2)%r])):n<0?t[0]-(i(-e,t[0],t[0],t[1],t[1])-t[0]):n>1?t[r]-(i(e-r,t[r],t[r],t[r-1],t[r-1])-t[r]):i(e-o,t[o?o-1:0],t[o],t[r<o+1?r:o+1],t[r<o+2?r:o+2])};t.exports=e},144:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function n(t,n){var r=1-t;return r*r*r*n}function r(t,n){var r=1-t;return 3*r*r*t*n}function i(t,n){return 3*(1-t)*t*t*n}function e(t,n){return t*t*t*n}var o=function(t,o,s,a,u){return n(t,o)+r(t,s)+i(t,a)+e(t,u)};t.exports=o},2457:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(7684),e=function(t,n){var r=t.length-1,e=r*n,o=Math.floor(e);return n<0?i(t[0],t[1],e):n>1?i(t[r],t[r-1],r-e):i(t[o],t[o+1>r?r:o+1],e-o)};t.exports=e},6750:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function n(t,n){var r=1-t;return r*r*n}function r(t,n){return 2*(1-t)*t*n}function i(t,n){return t*t*n}var e=function(t,e,o,s){return n(t,e)+r(t,o)+i(t,s)};t.exports=e},2192:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(458),e=function(t,n,r){return n+(r-n)*i(t,0,1)};t.exports=e},2677:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(9317),e=function(t,n,r){return n+(r-n)*i(t,0,1)};t.exports=e},1678:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Bezier:r(4110),CatmullRom:r(4725),CubicBezier:r(144),Linear:r(2457),QuadraticBezier:r(6750),SmoothStep:r(2192),SmootherStep:r(2677)}},5287:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=Math.log(t)/.6931471805599453;return 1<<Math.ceil(n)};t.exports=n},1132:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t>0&&0===(t&t-1)&&n>0&&0===(n&n-1)};t.exports=n},3272:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t>0&&0===(t&t-1)};t.exports=n},1154:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={GetNext:r(5287),IsSize:r(1132),IsValue:r(3272)}},7688:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3018),e=new i({initialize:function(t){void 0===t&&(t=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],t&&this.init(t)},rnd:function(){var t=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|t,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var n,r=this.n;t=t.toString();for(var i=0;i<t.length;i++)r+=t.charCodeAt(i),n=.02519603282416938*r,r=n>>>0,n-=r,n*=r,r=n>>>0,n-=r,r+=4294967296*n;return this.n=r,2.3283064365386963e-10*(r>>>0)},init:function(t){"string"===typeof t?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,t)for(var n=0;n<t.length&&null!=t[n];n++){var r=t[n];this.s0-=this.hash(r),this.s0+=~~(this.s0<0),this.s1-=this.hash(r),this.s1+=~~(this.s1<0),this.s2-=this.hash(r),this.s2+=~~(this.s2<0)}},integer:function(){return 4294967296*this.rnd()},frac:function(){return this.rnd()+11102230246251565e-32*(2097152*this.rnd()|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(t,n){return Math.floor(this.realInRange(0,n-t+1)+t)},between:function(t,n){return Math.floor(this.realInRange(0,n-t+1)+t)},realInRange:function(t,n){return this.frac()*(n-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",n="";for(n=t="";t++<36;n+=~t%5|3*t&4?(15^t?8^this.frac()*(20^t?16:4):4).toString(16):"-");return n},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-1)+.5)]},timestamp:function(t,n){return this.realInRange(t||9466848e5,n||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return"string"===typeof t&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var n=t.length-1,r=n;r>0;r--){var i=Math.floor(this.frac()*(r+1)),e=t[i];t[i]=t[r],t[r]=e}return t}});t.exports=e},2487:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return void 0===r&&(r=0),0===n?t:(t-=r,t=n*Math.ceil(t/n),i?(r+t)/n:r+t)};t.exports=n},7650:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return void 0===r&&(r=0),0===n?t:(t-=r,t=n*Math.floor(t/n),i?(r+t)/n:r+t)};t.exports=n},9616:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r,i){return void 0===r&&(r=0),0===n?t:(t-=r,t=n*Math.round(t/n),i?(r+t)/n:r+t)};t.exports=n},6437:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Ceil:r(2487),Floor:r(7650),To:r(9616)}},8766:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function n(t){for(var n="",r=0;r<t;++r)r>0&&(n+="\nelse "),r<t-1&&(n+="if(test == "+r+".0){}");return n}t.exports={getTintFromFloats:function(t,n,r,i){var e=255&(255*t|0),o=255&(255*n|0),s=255&(255*r|0),a=255&(255*i|0);return(a<<24|e<<16|o<<8|s)>>>0},getTintAppendFloatAlpha:function(t,n){var r=255&(255*n|0);return(r<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,n){var r=255&(t>>16|0),i=255&(t>>8|0),e=255&(0|t),o=255&(255*n|0);return(o<<24|e<<16|i<<8|r)>>>0},getFloatsFromUintRGB:function(t){var n=255&(t>>16|0),r=255&(t>>8|0),i=255&(0|t);return[n/255,r/255,i/255]},checkShaderMax:function(t,r){r&&-1!==r||(r=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));var i=t.createShader(t.FRAGMENT_SHADER),e=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join("\n");while(1){var o=e.replace(/%forloop%/gi,n(r));if(t.shaderSource(i,o),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS))break;r=r/2|0}return r},parseFragmentShaderMaxTextures:function(t,n){if(!t)return"";for(var r="",i=0;i<n;i++)i>0&&(r+="\n\telse "),i<n-1&&(r+="if (outTexId < "+i+".5)"),r+="\n\t{",r+="\n\t\ttexture = texture2D(uMainSampler["+i+"], outTexCoord);",r+="\n\t}";return t=t.replace(/%count%/gi,n.toString()),t.replace(/%forloop%/gi,r)}}},2124:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(6298),e=r(8204),o=function(t,n){var r=i.Power0;if("string"===typeof t)if(i.hasOwnProperty(t))r=i[t];else{var o="";t.indexOf(".")&&(o=t.substr(t.indexOf(".")+1),"in"===o.toLowerCase()?o="easeIn":"out"===o.toLowerCase()?o="easeOut":"inout"===o.toLowerCase()&&(o="easeInOut")),t=e(t.substr(0,t.indexOf(".")+1)+o),i.hasOwnProperty(t)&&(r=i[t])}else"function"===typeof t?r=t:Array.isArray(t)&&t.length;if(!n)return r;var s=n.slice(0);return s.unshift(0),function(t){return s[0]=t,r.apply(this,s)}};t.exports=o},3018:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function i(t){return!!t.get&&"function"===typeof t.get||!!t.set&&"function"===typeof t.set}function e(t,n,r){var e=r?t[n]:Object.getOwnPropertyDescriptor(t,n);return!r&&e.value&&"object"===typeof e.value&&(e=e.value),!(!e||!i(e))&&("undefined"===typeof e.enumerable&&(e.enumerable=!0),"undefined"===typeof e.configurable&&(e.configurable=!0),e)}function o(t,n){var r=Object.getOwnPropertyDescriptor(t,n);return!!r&&(r.value&&"object"===typeof r.value&&(r=r.value),!1===r.configurable)}function s(t,n,r,i){for(var s in n)if(n.hasOwnProperty(s)){var a=e(n,s,r);if(!1!==a){var h=i||t;if(o(h.prototype,s)){if(u.ignoreFinals)continue;throw new Error("cannot override final property '"+s+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,s,a)}else t.prototype[s]=n[s]}}function a(t,n){if(n){Array.isArray(n)||(n=[n]);for(var r=0;r<n.length;r++)s(t,n[r].prototype||n[r])}}function u(t){var n,r;if(t||(t={}),t.initialize){if("function"!==typeof t.initialize)throw new Error("initialize must be a function");n=t.initialize,delete t.initialize}else if(t.Extends){var i=t.Extends;n=function(){i.apply(this,arguments)}}else n=function(){};t.Extends?(n.prototype=Object.create(t.Extends.prototype),n.prototype.constructor=n,r=t.Extends,delete t.Extends):n.prototype.constructor=n;var e=null;return t.Mixins&&(e=t.Mixins,delete t.Mixins),a(n,e),s(n,t,!0,r),n}r(1703),u.extend=s,u.mixin=a,u.ignoreFinals=!1,t.exports=u},9584:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(){};t.exports=n},2037:function(t,n,r){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var i=r(3642),e=function(){var t,n,r,o,s,a,u=arguments[0]||{},h=1,c=arguments.length,f=!1;for("boolean"===typeof u&&(f=u,u=arguments[1]||{},h=2),c===h&&(u=this,--h);h<c;h++)if(null!=(t=arguments[h]))for(n in t)r=u[n],o=t[n],u!==o&&(f&&o&&(i(o)||(s=Array.isArray(o)))?(s?(s=!1,a=r&&Array.isArray(r)?r:[]):a=r&&i(r)?r:{},u[n]=e(f,a,o)):void 0!==o&&(u[n]=o));return u};t.exports=e},6128:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,r){var i=typeof t;return t&&"number"!==i&&"string"!==i&&t.hasOwnProperty(n)&&void 0!==t[n]?t[n]:r};t.exports=n},3642:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){if("object"!==typeof t||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}return!0};t.exports=n},8204:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t&&t[0].toUpperCase()+t.slice(1)};t.exports=n}}]);
//# sourceMappingURL=134.a70b4059.js.map