(self["webpackChunkecs_arraybuffer"]=self["webpackChunkecs_arraybuffer"]||[]).push([[56],{2254:function(t,n,i){"use strict";i.d(n,{Z:function(){return o}});const r=i(3283),e=i(3129);function o(t,n){let i=new r.Point(0,0),o=e.Angle.BetweenPoints(i,new e.Vector2(t,n));return e.RadToDeg(o)}},6065:function(t,n,i){"use strict";function r(t,n,i,r){return Math.sqrt((t-i)**2+(n-r)**2)}i.d(n,{Z:function(){return r}})},1396:function(t,n,i){"use strict";function r(t,n,i,r){return(t-i)**2+(n-r)**2}i.d(n,{Z:function(){return r}})},364:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t<<16|n<<8|i};t.exports=n},2283:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0};t.exports=n},6853:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(7049),o=i(1799),s=i(9226),a=i(9277),u=i(236),h=new r({initialize:function(t,n,i){void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),this.type=a.CIRCLE,this.x=t,this.y=n,this._radius=i,this._diameter=2*i},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,i){return s(this,t,n,i)},getRandomPoint:function(t){return u(this,t)},setTo:function(t,n,i){return this.x=t,this.y=n,this._radius=i,this._diameter=2*i,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=2*t}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=.5*t}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}});t.exports=h},834:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return Math.PI*t.radius*2};t.exports=n},2550:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i){return void 0===i&&(i=new r),i.x=t.x+t.radius*Math.cos(n),i.y=t.y+t.radius*Math.sin(n),i};t.exports=e},2090:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6853),e=function(t){return new r(t.x,t.y,t.radius)};t.exports=e},7049:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){if(t.radius>0&&n>=t.left&&n<=t.right&&i>=t.top&&i<=t.bottom){var r=(t.x-n)*(t.x-n),e=(t.y-i)*(t.y-i);return r+e<=t.radius*t.radius}return!1};t.exports=n},510:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7049),e=function(t,n){return r(t,n.x,n.y)};t.exports=e},577:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7049),e=function(t,n){return r(t,n.x,n.y)&&r(t,n.right,n.y)&&r(t,n.x,n.bottom)&&r(t,n.right,n.bottom)};t.exports=e},1298:function(t){
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
var n=function(t,n){return t.x===n.x&&t.y===n.y&&t.radius===n.radius};t.exports=n},8559:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t,n){return void 0===n&&(n=new r),n.x=t.left,n.y=t.top,n.width=t.diameter,n.height=t.diameter,n};t.exports=e},1799:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2550),e=i(3579),o=i(611),s=i(9106),a=function(t,n,i){void 0===i&&(i=new s);var a=e(n,0,o.PI2);return r(t,a,i)};t.exports=a},9226:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(834),e=i(2550),o=i(3579),s=i(611),a=function(t,n,i,a){void 0===a&&(a=[]),!n&&i>0&&(n=r(t)/i);for(var u=0;u<n;u++){var h=o(u/n,0,s.PI2);a.push(e(t,h))}return a};t.exports=a},6143:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t.x+=n,t.y+=i,t};t.exports=n},6973:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x+=n.x,t.y+=n.y,t};t.exports=n},236:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){void 0===n&&(n=new r);var i=2*Math.PI*Math.random(),e=Math.random()+Math.random(),o=e>1?2-e:e,s=o*Math.cos(i),a=o*Math.sin(i);return n.x=t.x+s*t.radius,n.y=t.y+a*t.radius,n};t.exports=e},3957:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6853);r.Area=i(2283),r.Circumference=i(834),r.CircumferencePoint=i(2550),r.Clone=i(2090),r.Contains=i(7049),r.ContainsPoint=i(510),r.ContainsRect=i(577),r.CopyFrom=i(1298),r.Equals=i(9889),r.GetBounds=i(8559),r.GetPoint=i(1799),r.GetPoints=i(9226),r.Offset=i(6143),r.OffsetPoint=i(6973),r.Random=i(236),t.exports=r},9277:function(t){
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
var n=function(t){var n=t.width/2,i=t.height/2,r=Math.pow(n-i,2)/Math.pow(n+i,2);return Math.PI*(n+i)*(1+3*r/(10+Math.sqrt(4-3*r)))};t.exports=n},2472:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i){void 0===i&&(i=new r);var e=t.width/2,o=t.height/2;return i.x=t.x+e*Math.cos(n),i.y=t.y+o*Math.sin(n),i};t.exports=e},6148:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9346),e=function(t){return new r(t.x,t.y,t.width,t.height)};t.exports=e},9783:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){if(t.width<=0||t.height<=0)return!1;var r=(n-t.x)/t.width,e=(i-t.y)/t.height;return r*=r,e*=e,r+e<.25};t.exports=n},7926:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9783),e=function(t,n){return r(t,n.x,n.y)};t.exports=e},3952:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9783),e=function(t,n){return r(t,n.x,n.y)&&r(t,n.right,n.y)&&r(t,n.x,n.bottom)&&r(t,n.right,n.bottom)};t.exports=e},8350:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return n.setTo(t.x,t.y,t.width,t.height)};t.exports=n},9346:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(9783),o=i(5249),s=i(186),a=i(9277),u=i(3546),h=new r({initialize:function(t,n,i,r){void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),this.type=a.ELLIPSE,this.x=t,this.y=n,this.width=i,this.height=r},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,i){return s(this,t,n,i)},getRandomPoint:function(t){return u(this,t)},setTo:function(t,n,i,r){return this.x=t,this.y=n,this.width=i,this.height=r,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},setSize:function(t,n){return void 0===n&&(n=t),this.width=t,this.height=n,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=h},4314:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height};t.exports=n},3399:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t,n){return void 0===n&&(n=new r),n.x=t.left,n.y=t.top,n.width=t.width,n.height=t.height,n};t.exports=e},5249:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2472),e=i(3579),o=i(611),s=i(9106),a=function(t,n,i){void 0===i&&(i=new s);var a=e(n,0,o.PI2);return r(t,a,i)};t.exports=a},186:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1805),e=i(2472),o=i(3579),s=i(611),a=function(t,n,i,a){void 0===a&&(a=[]),!n&&i>0&&(n=r(t)/i);for(var u=0;u<n;u++){var h=o(u/n,0,s.PI2);a.push(e(t,h))}return a};t.exports=a},7978:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t.x+=n,t.y+=i,t};t.exports=n},1486:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t.x+=n.x,t.y+=n.y,t};t.exports=n},3546:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){void 0===n&&(n=new r);var i=Math.random()*Math.PI*2,e=Math.sqrt(Math.random());return n.x=t.x+e*Math.cos(i)*t.width/2,n.y=t.y+e*Math.sin(i)*t.height/2,n};t.exports=e},6682:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9346);r.Area=i(9946),r.Circumference=i(1805),r.CircumferencePoint=i(2472),r.Clone=i(6148),r.Contains=i(9783),r.ContainsPoint=i(7926),r.ContainsRect=i(3952),r.CopyFrom=i(8350),r.Equals=i(4314),r.GetBounds=i(3399),r.GetPoint=i(5249),r.GetPoints=i(186),r.Offset=i(7978),r.OffsetPoint=i(1486),r.Random=i(3546),t.exports=r},3283:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9277),e=i(2037),o={Circle:i(3957),Ellipse:i(6682),Intersects:i(6329),Line:i(4420),Mesh:i(8864),Point:i(7866),Polygon:i(5147),Rectangle:i(5244),Triangle:i(6636)};o=e(!1,o,r),t.exports=o},3278:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6052),e=function(t,n){return r(t.x,t.y,n.x,n.y)<=t.radius+n.radius};t.exports=e},8779:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=n.width/2,r=n.height/2,e=Math.abs(t.x-n.x-i),o=Math.abs(t.y-n.y-r),s=i+t.radius,a=r+t.radius;if(e>s||o>a)return!1;if(e<=i||o<=r)return!0;var u=e-i,h=o-r,c=u*u,x=h*h,f=t.radius*t.radius;return c+x<=f};t.exports=n},1819:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(3278),o=function(t,n,i){if(void 0===i&&(i=[]),e(t,n)){var o,s,a,u,h,c=t.x,x=t.y,f=t.radius,v=n.x,y=n.y,p=n.radius;if(x===y)h=(p*p-f*f-v*v+c*c)/(2*(c-v)),o=1,s=-2*y,a=v*v+h*h-2*v*h+y*y-p*p,u=s*s-4*o*a,0===u?i.push(new r(h,-s/(2*o))):u>0&&(i.push(new r(h,(-s+Math.sqrt(u))/(2*o))),i.push(new r(h,(-s-Math.sqrt(u))/(2*o))));else{var l=(c-v)/(x-y),d=(p*p-f*f-v*v+c*c-y*y+x*x)/(2*(x-y));o=l*l+1,s=2*x*l-2*d*l-2*c,a=c*c+x*x+d*d-f*f-2*x*d,u=s*s-4*o*a,0===u?(h=-s/(2*o),i.push(new r(h,d-h*l))):u>0&&(h=(-s+Math.sqrt(u))/(2*o),i.push(new r(h,d-h*l)),h=(-s-Math.sqrt(u))/(2*o),i.push(new r(h,d-h*l)))}}return i};t.exports=o},3786:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1346),e=i(8779),o=function(t,n,i){if(void 0===i&&(i=[]),e(t,n)){var o=n.getLineA(),s=n.getLineB(),a=n.getLineC(),u=n.getLineD();r(o,t,i),r(s,t,i),r(a,t,i),r(u,t,i)}return i};t.exports=o},1346:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(1242),o=function(t,n,i){if(void 0===i&&(i=[]),e(t,n)){var o,s,a=t.x1,u=t.y1,h=t.x2,c=t.y2,x=n.x,f=n.y,v=n.radius,y=h-a,p=c-u,l=a-x,d=u-f,g=y*y+p*p,M=2*(y*l+p*d),w=l*l+d*d-v*v,m=M*M-4*g*w;if(0===m){var z=-M/(2*g);o=a+z*y,s=u+z*p,z>=0&&z<=1&&i.push(new r(o,s))}else if(m>0){var b=(-M-Math.sqrt(m))/(2*g);o=a+b*y,s=u+b*p,b>=0&&b<=1&&i.push(new r(o,s));var I=(-M+Math.sqrt(m))/(2*g);o=a+I*y,s=u+I*p,I>=0&&I<=1&&i.push(new r(o,s))}}return i};t.exports=o},2013:function(t,n,i){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2220),e=function(t,n,i){var e=t.x1,o=t.y1,s=t.x2,a=t.y2,u=n.x1,h=n.y1,c=n.x2,x=n.y2,f=s-e,v=a-o,y=c-u,p=x-h,l=p*f-y*v;if(0===f||0===l)return!1;var d=(f*(h-o)+v*(e-u))/(y*v-p*f),g=(u+y*d-e)/f;return g<0||d<0||d>1?null:(void 0===i&&(i=new r),i.set(e+f*g,o+v*g,g))};t.exports=e},5419:function(t,n,i){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2220),e=i(2013),o=i(9778),s=new o,a=new r,u=function(t,n,i){void 0===i&&(i=new r);var o=!1;i.set(),a.set();for(var u=n[0],h=1;h<n.length;h++){var c=n[h];s.setTo(u.x,u.y,c.x,c.y),u=c,e(t,s,a)&&(!o||a.z<i.z)&&(i.copy(a),o=!0)}return o?i:null};t.exports=u},8202:function(t,n,i){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2220),e=i(3963),o=i(5419),s=new r,a=function(t,n,i){void 0===i&&(i=new e),Array.isArray(n)||(n=[n]);var r=!1;i.set(),s.set();for(var a=0;a<n.length;a++)o(t,n[a].points,s)&&(!r||s.z<i.z)&&(i.set(s.x,s.y,s.z,a),r=!0);return r?i:null};t.exports=a},5377:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(2670),o=i(2181),s=function(t,n,i){if(void 0===i&&(i=[]),o(t,n))for(var s=n.getLineA(),a=n.getLineB(),u=n.getLineC(),h=n.getLineD(),c=[new r,new r,new r,new r],x=[e(s,t,c[0]),e(a,t,c[1]),e(u,t,c[2]),e(h,t,c[3])],f=0;f<4;f++)x[f]&&i.push(c[f]);return i};t.exports=s},6550:function(t,n,i){
/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3963),e=i(8202),o=i(9778),s=new o;function a(t,n,i,o,a){var u=Math.cos(t),h=Math.sin(t);s.setTo(n,i,n+u,i+h);var c=e(s,o);c&&a.push(new r(c.x,c.y,t,c.w))}function u(t,n){return t.z-n.z}var h=function(t,n,i){Array.isArray(i)||(i=[i]);for(var r=[],e=[],o=0;o<i.length;o++)for(var s=i[o].points,h=0;h<s.length;h++){var c=Math.atan2(s[h].y-n,s[h].x-t);-1===e.indexOf(c)&&(a(c,t,n,i,r),a(c-1e-5,t,n,i,r),a(c+1e-5,t,n,i,r),e.push(c))}return r.sort(u)};t.exports=h},8422:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=i(1756),o=function(t,n,i){return void 0===i&&(i=new r),e(t,n)&&(i.x=Math.max(t.x,n.x),i.y=Math.max(t.y,n.y),i.width=Math.min(t.right,n.right)-i.x,i.height=Math.min(t.bottom,n.bottom)-i.y),i};t.exports=o},5425:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(5377),e=i(1756),o=function(t,n,i){if(void 0===i&&(i=[]),e(t,n)){var o=t.getLineA(),s=t.getLineB(),a=t.getLineC(),u=t.getLineD();r(o,n,i),r(s,n,i),r(a,n,i),r(u,n,i)}return i};t.exports=o},9042:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(8909),e=i(5377),o=function(t,n,i){if(void 0===i&&(i=[]),r(t,n)){var o=n.getLineA(),s=n.getLineB(),a=n.getLineC();e(o,t,i),e(s,t,i),e(a,t,i)}return i};t.exports=o},5725:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1346),e=i(7742),o=function(t,n,i){if(void 0===i&&(i=[]),e(t,n)){var o=t.getLineA(),s=t.getLineB(),a=t.getLineC();r(o,n,i),r(s,n,i),r(a,n,i)}return i};t.exports=o},8841:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(2682),o=i(2670),s=function(t,n,i){if(void 0===i&&(i=[]),e(t,n))for(var s=t.getLineA(),a=t.getLineB(),u=t.getLineC(),h=[new r,new r,new r],c=[o(s,n,h[0]),o(a,n,h[1]),o(u,n,h[2])],x=0;x<3;x++)c[x]&&i.push(h[x]);return i};t.exports=s},2200:function(t,n,i){
/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4806),e=i(8841),o=function(t,n,i){if(void 0===i&&(i=[]),r(t,n)){var o=n.getLineA(),s=n.getLineB(),a=n.getLineC();e(t,o,i),e(t,s,i),e(t,a,i)}return i};t.exports=o},1242:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7049),e=i(9106),o=new e,s=function(t,n,i){if(void 0===i&&(i=o),r(n,t.x1,t.y1))return i.x=t.x1,i.y=t.y1,!0;if(r(n,t.x2,t.y2))return i.x=t.x2,i.y=t.y2,!0;var e=t.x2-t.x1,s=t.y2-t.y1,a=n.x-t.x1,u=n.y-t.y1,h=e*e+s*s,c=e,x=s;if(h>0){var f=(a*e+u*s)/h;c*=f,x*=f}i.x=t.x1+c,i.y=t.y1+x;var v=c*c+x*x;return v<=h&&c*e+x*s>=0&&r(n,i.x,i.y)};t.exports=s},2670:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i){void 0===i&&(i=new r);var e=t.x1,o=t.y1,s=t.x2,a=t.y2,u=n.x1,h=n.y1,c=n.x2,x=n.y2,f=(c-u)*(o-h)-(x-h)*(e-u),v=(s-e)*(o-h)-(a-o)*(e-u),y=(x-h)*(s-e)-(c-u)*(a-o);if(0===y)return!1;var p=f/y,l=v/y;return p>=0&&p<=1&&l>=0&&l<=1&&(i.x=e+p*(s-e),i.y=o+p*(a-o),!0)};t.exports=e},2181:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=t.x1,r=t.y1,e=t.x2,o=t.y2,s=n.x,a=n.y,u=n.right,h=n.bottom,c=0;if(i>=s&&i<=u&&r>=a&&r<=h||e>=s&&e<=u&&o>=a&&o<=h)return!0;if(i<s&&e>=s){if(c=r+(o-r)*(s-i)/(e-i),c>a&&c<=h)return!0}else if(i>u&&e<=u&&(c=r+(o-r)*(u-i)/(e-i),c>=a&&c<=h))return!0;if(r<a&&o>=a){if(c=i+(e-i)*(a-r)/(o-r),c>=s&&c<=u)return!0}else if(r>h&&o<=h&&(c=i+(e-i)*(h-r)/(o-r),c>=s&&c<=u))return!0;return!1};t.exports=n},985:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){void 0===i&&(i=1);var r=n.x1,e=n.y1,o=n.x2,s=n.y2,a=t.x,u=t.y,h=(o-r)*(o-r)+(s-e)*(s-e);if(0===h)return!1;var c=((a-r)*(o-r)+(u-e)*(s-e))/h;if(c<0)return Math.sqrt((r-a)*(r-a)+(e-u)*(e-u))<=i;if(c>=0&&c<=1){var x=((e-u)*(o-r)-(r-a)*(s-e))/h;return Math.abs(x)*Math.sqrt(h)<=i}return Math.sqrt((o-a)*(o-a)+(s-u)*(s-u))<=i};t.exports=n},1134:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(985),e=function(t,n){if(!r(t,n))return!1;var i=Math.min(n.x1,n.x2),e=Math.max(n.x1,n.x2),o=Math.min(n.y1,n.y2),s=Math.max(n.y1,n.y2);return t.x>=i&&t.x<=e&&t.y>=o&&t.y<=s};t.exports=e},1756:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return!(t.width<=0||t.height<=0||n.width<=0||n.height<=0)&&!(t.right<n.x||t.bottom<n.y||t.x>n.right||t.y>n.bottom)};t.exports=n},8909:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2670),e=i(1305),o=i(4112),s=i(9917),a=function(t,n){if(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)return!1;var i=n.getLineA(),a=n.getLineB(),u=n.getLineC();if(e(t,i.x1,i.y1)||e(t,i.x2,i.y2))return!0;if(e(t,a.x1,a.y1)||e(t,a.x2,a.y2))return!0;if(e(t,u.x1,u.y1)||e(t,u.x2,u.y2))return!0;var h=t.getLineA(),c=t.getLineB(),x=t.getLineC(),f=t.getLineD();if(r(i,h)||r(i,c)||r(i,x)||r(i,f))return!0;if(r(a,h)||r(a,c)||r(a,x)||r(a,f))return!0;if(r(u,h)||r(u,c)||r(u,x)||r(u,f))return!0;var v=s(t),y=o(n,v,!0);return y.length>0};t.exports=a},540:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r,e,o){return void 0===o&&(o=0),!(n>t.right+o||i<t.left-o||r>t.bottom+o||e<t.top-o)};t.exports=n},7742:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1242),e=i(9503),o=function(t,n){return!(t.left>n.right||t.right<n.left||t.top>n.bottom||t.bottom<n.top)&&(!!e(t,n.x,n.y)||(!!r(t.getLineA(),n)||(!!r(t.getLineB(),n)||!!r(t.getLineC(),n))))};t.exports=o},2682:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2670),e=function(t,n){return!(!t.contains(n.x1,n.y1)&&!t.contains(n.x2,n.y2))||(!!r(t.getLineA(),n)||(!!r(t.getLineB(),n)||!!r(t.getLineC(),n)))};t.exports=e},4806:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4112),e=i(3984),o=i(2670),s=function(t,n){if(t.left>n.right||t.right<n.left||t.top>n.bottom||t.bottom<n.top)return!1;var i=t.getLineA(),s=t.getLineB(),a=t.getLineC(),u=n.getLineA(),h=n.getLineB(),c=n.getLineC();if(o(i,u)||o(i,h)||o(i,c))return!0;if(o(s,u)||o(s,h)||o(s,c))return!0;if(o(a,u)||o(a,h)||o(a,c))return!0;var x=e(t),f=r(n,x,!0);return f.length>0||(x=e(n),f=r(t,x,!0),f.length>0)};t.exports=s},6329:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={CircleToCircle:i(3278),CircleToRectangle:i(8779),GetCircleToCircle:i(1819),GetCircleToRectangle:i(3786),GetLineToCircle:i(1346),GetLineToLine:i(2013),GetLineToPoints:i(5419),GetLineToPolygon:i(8202),GetLineToRectangle:i(5377),GetRaysFromPointToPolygon:i(6550),GetRectangleIntersection:i(8422),GetRectangleToRectangle:i(5425),GetRectangleToTriangle:i(9042),GetTriangleToCircle:i(5725),GetTriangleToLine:i(8841),GetTriangleToTriangle:i(2200),LineToCircle:i(1242),LineToLine:i(2670),LineToRectangle:i(2181),PointToLine:i(985),PointToLineSegment:i(1134),RectangleToRectangle:i(1756),RectangleToTriangle:i(8909),RectangleToValues:i(540),TriangleToCircle:i(7742),TriangleToLine:i(2682),TriangleToTriangle:i(4806)}},7518:function(t){
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
var n=function(t,n,i){void 0===n&&(n=1),void 0===i&&(i=[]);var r=Math.round(t.x1),e=Math.round(t.y1),o=Math.round(t.x2),s=Math.round(t.y2),a=Math.abs(o-r),u=Math.abs(s-e),h=r<o?1:-1,c=e<s?1:-1,x=a-u;i.push({x:r,y:e});var f=1;while(r!==o||e!==s){var v=x<<1;v>-u&&(x-=u,r+=h),v<a&&(x+=a,e+=c),f%n===0&&i.push({x:r,y:e}),f++}return i};t.exports=n},5638:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){var r=n-(t.x1+t.x2)/2,e=i-(t.y1+t.y2)/2;return t.x1+=r,t.y1+=e,t.x2+=r,t.y2+=e,t};t.exports=n},9754:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9778),e=function(t){return new r(t.x1,t.y1,t.x2,t.y2)};t.exports=e},7682:function(t){
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
var n=function(t,n){return t.x1===n.x1&&t.y1===n.y1&&t.x2===n.x2&&t.y2===n.y2};t.exports=n},6988:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6753),e=function(t,n,i){void 0===i&&(i=n);var e=r(t),o=t.x2-t.x1,s=t.y2-t.y1;return n&&(t.x1=t.x1-o/e*n,t.y1=t.y1-s/e*n),i&&(t.x2=t.x2+o/e*i,t.y2=t.y2+s/e*i),t};t.exports=e},9552:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(5091),e=i(2124),o=i(9106),s=function(t,n,i,s,a){void 0===s&&(s=0),void 0===a&&(a=[]);var u,h,c=[],x=t.x1,f=t.y1,v=t.x2-x,y=t.y2-f,p=e(n,a),l=i-1;for(u=0;u<l;u++)h=p(u/l),c.push(new o(x+v*h,f+y*h));if(h=p(1),c.push(new o(x+v*h,f+y*h)),s>0){var d=c[0],g=[d];for(u=1;u<c.length-1;u++){var M=c[u];r(d,M)>=s&&(g.push(M),d=M)}var w=c[c.length-1];return r(d,w)<s&&g.pop(),g.push(w),g}return c};t.exports=s},4874:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){return void 0===n&&(n=new r),n.x=(t.x1+t.x2)/2,n.y=(t.y1+t.y2)/2,n};t.exports=e},8533:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i){void 0===i&&(i=new r);var e=t.x1,o=t.y1,s=t.x2,a=t.y2,u=(s-e)*(s-e)+(a-o)*(a-o);if(0===u)return i;var h=((n.x-e)*(s-e)+(n.y-o)*(a-o))/u;return i.x=e+h*(s-e),i.y=o+h*(a-o),i};t.exports=e},1554:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=i(7518),o=i(9106),s=function(t,n){void 0===n&&(n=new o);var i=e(t)-r.TAU;return n.x=Math.cos(i),n.y=Math.sin(i),n};t.exports=s},8874:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i){return void 0===i&&(i=new r),i.x=t.x1+(t.x2-t.x1)*n,i.y=t.y1+(t.y2-t.y1)*n,i};t.exports=e},4605:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6753),e=i(9106),o=function(t,n,i,o){void 0===o&&(o=[]),!n&&i>0&&(n=r(t)/i);for(var s=t.x1,a=t.y1,u=t.x2,h=t.y2,c=0;c<n;c++){var x=c/n,f=s+(u-s)*x,v=a+(h-a)*x;o.push(new e(f,v))}return o};t.exports=o},5082:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=t.x1,r=t.y1,e=t.x2,o=t.y2,s=(e-i)*(e-i)+(o-r)*(o-r);if(0===s)return!1;var a=((r-n.y)*(e-i)-(i-n.x)*(o-r))/s;return Math.abs(a)*Math.sqrt(s)};t.exports=n},3971:function(t){
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
var n=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))};t.exports=n},9778:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(8874),o=i(4605),s=i(9277),a=i(5715),u=i(9182),h=new r({initialize:function(t,n,i,r){void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),this.type=s.LINE,this.x1=t,this.y1=n,this.x2=i,this.y2=r},getPoint:function(t,n){return e(this,t,n)},getPoints:function(t,n,i){return o(this,t,n,i)},getRandomPoint:function(t){return a(this,t)},setTo:function(t,n,i,r){return void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),this.x1=t,this.y1=n,this.x2=i,this.y2=r,this},getPointA:function(t){return void 0===t&&(t=new u),t.set(this.x1,this.y1),t},getPointB:function(t){return void 0===t&&(t=new u),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}});t.exports=h},1557:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=i(2923),o=i(7518),s=function(t){var n=o(t)-r.TAU;return e(n,-Math.PI,Math.PI)};t.exports=s},7382:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=i(7518),o=function(t){return Math.cos(e(t)-r.TAU)};t.exports=o},8268:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=i(7518),o=function(t){return Math.sin(e(t)-r.TAU)};t.exports=o},7509:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t.x1+=n,t.y1+=i,t.x2+=n,t.y2+=i,t};t.exports=n},5209:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return-(t.x2-t.x1)/(t.y2-t.y1)};t.exports=n},5715:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){void 0===n&&(n=new r);var i=Math.random();return n.x=t.x1+i*(t.x2-t.x1),n.y=t.y1+i*(t.y2-t.y1),n};t.exports=e},2898:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7518),e=i(1557),o=function(t,n){return 2*e(n)-Math.PI-r(t)};t.exports=o},2653:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1070),e=function(t,n){var i=(t.x1+t.x2)/2,e=(t.y1+t.y2)/2;return r(t,i,e,n)};t.exports=e},8348:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1070),e=function(t,n,i){return r(t,n.x,n.y,i)};t.exports=e},1070:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){var e=Math.cos(r),o=Math.sin(r),s=t.x1-n,a=t.y1-i;return t.x1=s*e-a*o+n,t.y1=s*o+a*e+i,s=t.x2-n,a=t.y2-i,t.x2=s*e-a*o+n,t.y2=s*o+a*e+i,t};t.exports=n},3243:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r,e){return t.x1=n,t.y1=i,t.x2=n+Math.cos(r)*e,t.y2=i+Math.sin(r)*e,t};t.exports=n},2865:function(t){
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
var n=function(t){return Math.abs(t.x1-t.x2)};t.exports=n},4420:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9778);r.Angle=i(7518),r.BresenhamPoints=i(5022),r.CenterOn=i(5638),r.Clone=i(9754),r.CopyFrom=i(7682),r.Equals=i(9841),r.Extend=i(6988),r.GetEasedPoints=i(9552),r.GetMidPoint=i(4874),r.GetNearestPoint=i(8533),r.GetNormal=i(1554),r.GetPoint=i(8874),r.GetPoints=i(4605),r.GetShortestDistance=i(5082),r.Height=i(3971),r.Length=i(6753),r.NormalAngle=i(1557),r.NormalX=i(7382),r.NormalY=i(8268),r.Offset=i(7509),r.PerpSlope=i(5209),r.Random=i(5715),r.ReflectAngle=i(2898),r.Rotate=i(2653),r.RotateAroundPoint=i(8348),r.RotateAroundXY=i(1070),r.SetToAngle=i(3243),r.Slope=i(2865),r.Width=i(1322),t.exports=r},2307:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(1456),o=i(9182);function s(t,n,i,r){var e=t-i,o=n-r,s=e*e+o*o;return Math.sqrt(s)}var a=new r({initialize:function(t,n,i){this.vertex1=t,this.vertex2=n,this.vertex3=i,this.bounds=new e,this._inCenter=new o},getInCenter:function(t){void 0===t&&(t=!0);var n,i,r,e,o,a,u=this.vertex1,h=this.vertex2,c=this.vertex3;t?(n=u.x,i=u.y,r=h.x,e=h.y,o=c.x,a=c.y):(n=u.vx,i=u.vy,r=h.vx,e=h.vy,o=c.vx,a=c.vy);var x=s(o,a,r,e),f=s(n,i,o,a),v=s(r,e,n,i),y=x+f+v;return this._inCenter.set((n*x+r*f+o*v)/y,(i*x+e*f+a*v)/y)},contains:function(t,n,i){var r=this.vertex1,e=this.vertex2,o=this.vertex3,s=r.vx,a=r.vy,u=e.vx,h=e.vy,c=o.vx,x=o.vy;if(i){var f=i.a,v=i.b,y=i.c,p=i.d,l=i.e,d=i.f;s=r.vx*f+r.vy*y+l,a=r.vx*v+r.vy*p+d,u=e.vx*f+e.vy*y+l,h=e.vx*v+e.vy*p+d,c=o.vx*f+o.vy*y+l,x=o.vx*v+o.vy*p+d}var g=c-s,M=x-a,w=u-s,m=h-a,z=t-s,b=n-a,I=g*g+M*M,C=g*w+M*m,P=g*z+M*b,A=w*w+m*m,T=w*z+m*b,O=I*A-C*C,_=0===O?0:1/O,L=(A*P-C*T)*_,R=(I*T-C*P)*_;return L>=0&&R>=0&&L+R<1},isCounterClockwise:function(t){var n=this.vertex1,i=this.vertex2,r=this.vertex3,e=(i.vx-n.vx)*(r.vy-n.vy)-(i.vy-n.vy)*(r.vx-n.vx);return t<=0?e>=0:e<0},load:function(t,n,i,r,e){return i=this.vertex1.load(t,n,i,r,e),i=this.vertex2.load(t,n,i,r,e),i=this.vertex3.load(t,n,i,r,e),i},transformCoordinatesLocal:function(t,n,i,r){return this.vertex1.transformCoordinatesLocal(t,n,i,r),this.vertex2.transformCoordinatesLocal(t,n,i,r),this.vertex3.transformCoordinatesLocal(t,n,i,r),this},updateBounds:function(){var t=this.vertex1,n=this.vertex2,i=this.vertex3,r=this.bounds;return r.x=Math.min(t.vx,n.vx,i.vx),r.y=Math.min(t.vy,n.vy,i.vy),r.width=Math.max(t.vx,n.vx,i.vx)-r.x,r.height=Math.max(t.vy,n.vy,i.vy)-r.y,this},isInView:function(t,n,i,r,e,o,s,a,u,h,c){var x=this.vertex1.update(e,o,s,a,u,h,c,r),f=this.vertex2.update(e,o,s,a,u,h,c,r),v=this.vertex3.update(e,o,s,a,u,h,c,r);if(x.ta<=0&&f.ta<=0&&v.ta<=0)return!1;if(n&&!this.isCounterClockwise(i))return!1;var y=this.bounds;y.x=Math.min(x.tx,f.tx,v.tx),y.y=Math.min(x.ty,f.ty,v.ty),y.width=Math.max(x.tx,f.tx,v.tx)-y.x,y.height=Math.max(x.ty,f.ty,v.ty)-y.y;var p=t.x+t.width,l=t.y+t.height;return!(y.width<=0||y.height<=0||t.width<=0||t.height<=0)&&!(y.right<t.x||y.bottom<t.y||y.x>p||y.y>l)},translate:function(t,n){void 0===n&&(n=0);var i=this.vertex1,r=this.vertex2,e=this.vertex3;return i.x+=t,i.y+=n,r.x+=t,r.y+=n,e.x+=t,e.y+=n,this},x:{get:function(){return this.getInCenter().x},set:function(t){var n=this.getInCenter();this.translate(t-n.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var n=this.getInCenter();this.translate(0,t-n.y)}},alpha:{get:function(){var t=this.vertex1,n=this.vertex2,i=this.vertex3;return(t.alpha+n.alpha+i.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,n=this.vertex2,i=this.vertex3;return(t.vz+n.vz+i.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}});t.exports=a},7989:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2307),e=i(6128),o=i(5332),s=i(2220),a=i(7748),u=new s,h=new s,c=new o,x=function(t){var n=e(t,"mesh"),i=e(t,"texture",null),o=e(t,"frame"),s=e(t,"width",1),x=e(t,"height",s),f=e(t,"widthSegments",1),v=e(t,"heightSegments",f),y=e(t,"x",0),p=e(t,"y",0),l=e(t,"z",0),d=e(t,"rotateX",0),g=e(t,"rotateY",0),M=e(t,"rotateZ",0),w=e(t,"zIsUp",!0),m=e(t,"isOrtho",!!n&&n.dirtyCache[11]),z=e(t,"colors",[16777215]),b=e(t,"alphas",[1]),I=e(t,"tile",!1),C=e(t,"flipY",!1),P=e(t,"width",null),A={faces:[],verts:[]};if(u.set(y,p,l),h.set(d,g,M),c.fromRotationXYTranslation(h,u,w),!i&&n)i=n.texture;else{if(!n||"string"!==typeof i)return A;i=n.scene.sys.textures.get(i)}var T=i.get(o);!P&&m&&i&&n&&(s=T.width/n.height,x=T.height/n.height);var O,_,L=s/2,R=x/2,E=Math.floor(f),S=Math.floor(v),F=E+1,q=S+1,k=s/E,G=x/S,N=[],Z=[],V=0,B=1,Y=0,X=1;T&&(V=T.u0,B=T.u1,C?(Y=T.v1,X=T.v0):(Y=T.v0,X=T.v1));var D=B-V,j=X-Y;for(_=0;_<q;_++){var U=_*G-R;for(O=0;O<F;O++){var Q=O*k-L;Z.push(Q,-U);var W=V+D*(O/E),H=Y+j*(_/S);N.push(W,H)}}Array.isArray(z)||(z=[z]),Array.isArray(b)||(b=[b]);var K=0,J=0;for(_=0;_<S;_++)for(O=0;O<E;O++){var $=2*(O+F*_),tt=2*(O+F*(_+1)),nt=2*(O+1+F*(_+1)),it=2*(O+1+F*_),rt=z[J],et=b[K],ot=new a(Z[$],Z[$+1],0,N[$],N[$+1],rt,et).transformMat4(c),st=new a(Z[tt],Z[tt+1],0,N[tt],N[tt+1],rt,et).transformMat4(c),at=new a(Z[it],Z[it+1],0,N[it],N[it+1],rt,et).transformMat4(c),ut=new a(Z[tt],Z[tt+1],0,N[tt],N[tt+1],rt,et).transformMat4(c),ht=new a(Z[nt],Z[nt+1],0,N[nt],N[nt+1],rt,et).transformMat4(c),ct=new a(Z[it],Z[it+1],0,N[it],N[it+1],rt,et).transformMat4(c);I&&(ot.setUVs(V,X),st.setUVs(V,Y),at.setUVs(B,X),ut.setUVs(V,Y),ht.setUVs(B,Y),ct.setUVs(B,X)),J++,J===z.length&&(J=0),K++,K===b.length&&(K=0),A.verts.push(ot,st,at,ut,ht,ct),A.faces.push(new r(ot,st,at),new r(ut,ht,ct))}return n&&(n.faces=n.faces.concat(A.faces),n.vertices=n.vertices.concat(A.verts)),A};t.exports=x},4382:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2307),e=i(5332),o=i(2220),s=i(7748),a=new o,u=new o,h=new e,c=function(t,n,i,e,o,c,x,f,v,y){void 0===i&&(i=1),void 0===e&&(e=0),void 0===o&&(o=0),void 0===c&&(c=0),void 0===x&&(x=0),void 0===f&&(f=0),void 0===v&&(v=0),void 0===y&&(y=!0);var p={faces:[],verts:[]},l=t.materials;a.set(e,o,c),u.set(x,f,v),h.fromRotationXYTranslation(u,a,y);for(var d=0;d<t.models.length;d++)for(var g=t.models[d],M=g.vertices,w=g.textureCoords,m=g.faces,z=0;z<m.length;z++){var b=m[z],I=b.vertices[0],C=b.vertices[1],P=b.vertices[2],A=M[I.vertexIndex],T=M[C.vertexIndex],O=M[P.vertexIndex],_=I.textureCoordsIndex,L=C.textureCoordsIndex,R=P.textureCoordsIndex,E=-1===_?{u:0,v:1}:w[_],S=-1===L?{u:0,v:0}:w[L],F=-1===R?{u:1,v:1}:w[R],q=16777215;""!==b.material&&l[b.material]&&(q=l[b.material]);var k=new s(A.x*i,A.y*i,A.z*i,E.u,E.v,q).transformMat4(h),G=new s(T.x*i,T.y*i,T.z*i,S.u,S.v,q).transformMat4(h),N=new s(O.x*i,O.y*i,O.z*i,F.u,F.v,q).transformMat4(h);p.verts.push(k,G,N),p.faces.push(new r(k,G,N))}return n&&(n.faces=n.faces.concat(p.faces),n.vertices=n.vertices.concat(p.verts)),p};t.exports=c},1479:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2307),e=i(7748),o=function(t,n,i,o,s,a,u){if(void 0===o&&(o=!1),void 0===a&&(a=16777215),void 0===u&&(u=1),t.length===n.length){var h,c,x,f,v,y,p,l,d,g,M,w={faces:[],vertices:[]},m=o?3:2,z=Array.isArray(a),b=Array.isArray(u);if(Array.isArray(i)&&i.length>0)for(h=0;h<i.length;h++){var I=i[h],C=2*i[h],P=i[h]*m;c=t[P],x=t[P+1],f=o?t[P+2]:0,v=n[C],y=n[C+1],p=z?a[I]:a,l=b?u[I]:u,d=0,g=0,M=0,s&&(d=s[P],g=s[P+1],M=o?s[P+2]:0),w.vertices.push(new e(c,x,f,v,y,p,l,d,g,M))}else{var A=0,T=0;for(h=0;h<t.length;h+=m)c=t[h],x=t[h+1],f=o?t[h+2]:0,v=n[A],y=n[A+1],p=z?a[T]:a,l=b?u[T]:u,d=0,g=0,M=0,s&&(d=s[h],g=s[h+1],M=o?s[h+2]:0),w.vertices.push(new e(c,x,f,v,y,p,l,d,g,M)),A+=2,T++}for(h=0;h<w.vertices.length;h+=3){var O=w.vertices[h],_=w.vertices[h+1],L=w.vertices[h+2];w.faces.push(new r(O,_,L))}return w}console.warn("GenerateVerts: vertices and uvs count not equal")};t.exports=o},1971:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=!0,i="untitled",r="",e="";function o(t){var n=t.indexOf("#");return n>-1?t.substring(0,n):t}function s(t){return 0===t.models.length&&t.models.push({faces:[],name:i,textureCoords:[],vertexNormals:[],vertices:[]}),r="",t.models[t.models.length-1]}function a(t,n){var e=t.length>=2?t[1]:i;n.models.push({faces:[],name:e,textureCoords:[],vertexNormals:[],vertices:[]}),r=""}function u(t){2===t.length&&(r=t[1])}function h(t,n){var i=t.length,r=i>=2?parseFloat(t[1]):0,e=i>=3?parseFloat(t[2]):0,o=i>=4?parseFloat(t[3]):0;s(n).vertices.push({x:r,y:e,z:o})}function c(t,i){var r=t.length,e=r>=2?parseFloat(t[1]):0,o=r>=3?parseFloat(t[2]):0,a=r>=4?parseFloat(t[3]):0;isNaN(e)&&(e=0),isNaN(o)&&(o=0),isNaN(a)&&(a=0),n&&(o=1-o),s(i).textureCoords.push({u:e,v:o,w:a})}function x(t,n){var i=t.length,r=i>=2?parseFloat(t[1]):0,e=i>=3?parseFloat(t[2]):0,o=i>=4?parseFloat(t[3]):0;s(n).vertexNormals.push({x:r,y:e,z:o})}function f(t,n){var i=t.length-1;if(!(i<3)){for(var o={group:r,material:e,vertices:[]},a=0;a<i;a++){var u=t[a+1],h=u.split("/"),c=h.length;if(!(c<1||c>3)){var x=0,f=0,v=0;x=parseInt(h[0],10),c>1&&""!==h[1]&&(f=parseInt(h[1],10)),c>2&&(v=parseInt(h[2],10)),0!==x&&(x<0&&(x=s(n).vertices.length+1+x),f-=1,x-=1,v-=1,o.vertices.push({textureCoordsIndex:f,vertexIndex:x,vertexNormalIndex:v}))}}s(n).faces.push(o)}}function v(t,n){t.length>=2&&n.materialLibraries.push(t[1])}function y(t){t.length>=2&&(e=t[1])}var p=function(t,i){void 0===i&&(i=!0),n=i;var s={materials:{},materialLibraries:[],models:[]};r="",e="";for(var p=t.split("\n"),l=0;l<p.length;l++){var d=o(p[l]),g=d.replace(/\s\s+/g," ").trim().split(" ");switch(g[0].toLowerCase()){case"o":a(g,s);break;case"g":u(g);break;case"v":h(g,s);break;case"vt":c(g,s);break;case"vn":x(g,s);break;case"f":f(g,s);break;case"mtllib":v(g,s);break;case"usemtl":y(g);break}}return s};t.exports=p},5038:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(364),e=function(t){for(var n={},i=t.split("\n"),e="",o=0;o<i.length;o++){var s=i[o].trim();if(0!==s.indexOf("#")&&""!==s){var a=s.replace(/\s\s+/g," ").trim().split(" ");switch(a[0].toLowerCase()){case"newmtl":e=a[1];break;case"kd":var u=Math.floor(255*a[1]),h=a.length>=2?Math.floor(255*a[2]):u,c=a.length>=3?Math.floor(255*a[3]):u;n[e]=r(u,h,c);break}}}return n};t.exports=e},8931:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){var e,o;if(void 0===i&&void 0===r){var s=t.getInCenter();e=s.x,o=s.y}var a=Math.cos(n),u=Math.sin(n),h=t.vertex1,c=t.vertex2,x=t.vertex3,f=h.x-e,v=h.y-o;h.set(f*a-v*u+e,f*u+v*a+o),f=c.x-e,v=c.y-o,c.set(f*a-v*u+e,f*u+v*a+o),f=x.x-e,v=x.y-o,x.set(f*a-v*u+e,f*u+v*a+o)};t.exports=n},7748:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(8766),o=i(2220),s=new r({Extends:o,initialize:function(t,n,i,r,e,s,a,u,h,c){void 0===s&&(s=16777215),void 0===a&&(a=1),void 0===u&&(u=0),void 0===h&&(h=0),void 0===c&&(c=0),o.call(this,t,n,i),this.vx=0,this.vy=0,this.vz=0,this.nx=u,this.ny=h,this.nz=c,this.u=r,this.v=e,this.color=s,this.alpha=a,this.tx=0,this.ty=0,this.ta=0},setUVs:function(t,n){return this.u=t,this.v=n,this},transformCoordinatesLocal:function(t,n,i,r){var e=this.x,o=this.y,s=this.z,a=t.val,u=e*a[0]+o*a[4]+s*a[8]+a[12],h=e*a[1]+o*a[5]+s*a[9]+a[13],c=e*a[2]+o*a[6]+s*a[10]+a[14],x=e*a[3]+o*a[7]+s*a[11]+a[15];this.vx=u/x*n,this.vy=-h/x*i,this.vz=r<=0?c/x:-c/x},update:function(t,n,i,r,e,o,s,a){var u=this.vx*t+this.vy*i+e,h=this.vx*n+this.vy*r+o;return s&&(u=Math.round(u),h=Math.round(h)),this.tx=u,this.ty=h,this.ta=this.alpha*a,this},load:function(t,n,i,r,o){return t[++i]=this.tx,t[++i]=this.ty,t[++i]=this.u,t[++i]=this.v,t[++i]=r,t[++i]=o,n[++i]=e.getTintAppendFloatAlpha(this.color,this.ta),i}});t.exports=s},8864:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r={Face:i(2307),GenerateGridVerts:i(7989),GenerateObjVerts:i(4382),GenerateVerts:i(1479),ParseObj:i(1971),ParseObjMaterial:i(5038),RotateFace:i(8931),Vertex:i(7748)};t.exports=r},3182:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))};t.exports=n},239:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t){return new r(t.x,t.y)};t.exports=e},1891:function(t){
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
var n=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))};t.exports=n},534:function(t,n,i){i(1703);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){if(void 0===n&&(n=new r),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var i=t.length;if(i<1)throw new Error("GetCentroid points array must not be empty");if(1===i)n.x=t[0].x,n.y=t[0].y;else{for(var e=0;e<i;e++)n.x+=t[e].x,n.y+=t[e].y;n.x/=i,n.y/=i}return n};t.exports=e},333:function(t){
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
var n=function(t){return t.x*t.x+t.y*t.y};t.exports=n},4184:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t,n){void 0===n&&(n=new r);for(var i=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=0;a<t.length;a++){var u=t[a];u.x>i&&(i=u.x),u.x<e&&(e=u.x),u.y>o&&(o=u.y),u.y<s&&(s=u.y)}return n.x=e,n.y=s,n.width=i-e,n.height=o-s,n};t.exports=e},7080:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i,e){return void 0===i&&(i=0),void 0===e&&(e=new r),e.x=t.x+(n.x-t.x)*i,e.y=t.y+(n.y-t.y)*i,e};t.exports=e},5890:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.setTo(t.y,t.x)};t.exports=n},139:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){return void 0===n&&(n=new r),n.setTo(-t.x,-t.y)};t.exports=e},9106:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(9277),o=new r({initialize:function(t,n){void 0===t&&(t=0),void 0===n&&(n=t),this.type=e.POINT,this.x=t,this.y=n},setTo:function(t,n){return void 0===t&&(t=0),void 0===n&&(n=t),this.x=t,this.y=n,this}});t.exports=o},2389:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(3848),o=function(t,n,i){void 0===i&&(i=new r);var o=t.x*n.x+t.y*n.y,s=o/e(n);return 0!==s&&(i.x=s*n.x,i.y=s*n.y),i};t.exports=o},1045:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n,i){void 0===i&&(i=new r);var e=t.x*n.x+t.y*n.y;return 0!==e&&(i.x=e*n.x,i.y=e*n.y),i};t.exports=e},7222:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(333),e=function(t,n){if(0!==t.x||0!==t.y){var i=r(t);t.x/=i,t.y/=i}return t.x*=n,t.y*=n,t};t.exports=e},7866:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106);r.Ceil=i(3182),r.Clone=i(239),r.CopyFrom=i(1891),r.Equals=i(42),r.Floor=i(5660),r.GetCentroid=i(534),r.GetMagnitude=i(333),r.GetMagnitudeSq=i(3848),r.GetRectangleFromPoints=i(4184),r.Interpolate=i(7080),r.Invert=i(5890),r.Negative=i(139),r.Project=i(2389),r.ProjectUnit=i(1045),r.SetMagnitude=i(7222),t.exports=r},9966:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3707),e=function(t){return new r(t.points)};t.exports=e},1210:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){for(var r=!1,e=-1,o=t.points.length-1;++e<t.points.length;o=e){var s=t.points[e].x,a=t.points[e].y,u=t.points[o].x,h=t.points[o].y;(a<=i&&i<h||h<=i&&i<a)&&n<(u-s)*(i-a)/(h-a)+s&&(r=!r)}return r};t.exports=n},4990:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1210),e=function(t,n){return r(t,n.x,n.y)};t.exports=e},5084:function(t){"use strict";
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function n(t,n,r){r=r||2;var o,s,a,u,c,x,f,v=n&&n.length,y=v?n[0]*r:t.length,p=i(t,0,y,r,!0),l=[];if(!p||p.next===p.prev)return l;if(v&&(p=h(t,n,p,r)),t.length>80*r){o=a=t[0],s=u=t[1];for(var d=r;d<y;d+=r)c=t[d],x=t[d+1],c<o&&(o=c),x<s&&(s=x),c>a&&(a=c),x>u&&(u=x);f=Math.max(a-o,u-s),f=0!==f?1/f:0}return e(p,l,r,o,s,f),l}function i(t,n,i,r,e){var o,s;if(e===R(t,n,i,r)>0)for(o=n;o<i;o+=r)s=O(o,t[o],t[o+1],s);else for(o=i-r;o>=n;o-=r)s=O(o,t[o],t[o+1],s);return s&&m(s,s.next)&&(_(s),s=s.next),s}function r(t,n){if(!t)return t;n||(n=t);var i,r=t;do{if(i=!1,r.steiner||!m(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{if(_(r),r=n=r.prev,r===r.next)break;i=!0}}while(i||r!==n);return n}function e(t,n,i,h,c,x,f){if(t){!f&&x&&y(t,h,c,x);var v,p,l=t;while(t.prev!==t.next)if(v=t.prev,p=t.next,x?s(t,h,c,x):o(t))n.push(v.i/i),n.push(t.i/i),n.push(p.i/i),_(t),t=p.next,l=p.next;else if(t=p,t===l){f?1===f?(t=a(r(t),n,i),e(t,n,i,h,c,x,2)):2===f&&u(t,n,i,h,c,x):e(r(t),n,i,h,c,x,1);break}}}function o(t){var n=t.prev,i=t,r=t.next;if(w(n,i,r)>=0)return!1;var e=t.next.next;while(e!==t.prev){if(g(n.x,n.y,i.x,i.y,r.x,r.y,e.x,e.y)&&w(e.prev,e,e.next)>=0)return!1;e=e.next}return!0}function s(t,n,i,r){var e=t.prev,o=t,s=t.next;if(w(e,o,s)>=0)return!1;var a=e.x<o.x?e.x<s.x?e.x:s.x:o.x<s.x?o.x:s.x,u=e.y<o.y?e.y<s.y?e.y:s.y:o.y<s.y?o.y:s.y,h=e.x>o.x?e.x>s.x?e.x:s.x:o.x>s.x?o.x:s.x,c=e.y>o.y?e.y>s.y?e.y:s.y:o.y>s.y?o.y:s.y,x=l(a,u,n,i,r),f=l(h,c,n,i,r),v=t.prevZ,y=t.nextZ;while(v&&v.z>=x&&y&&y.z<=f){if(v!==t.prev&&v!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,v.x,v.y)&&w(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,y!==t.prev&&y!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,y.x,y.y)&&w(y.prev,y,y.next)>=0)return!1;y=y.nextZ}while(v&&v.z>=x){if(v!==t.prev&&v!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,v.x,v.y)&&w(v.prev,v,v.next)>=0)return!1;v=v.prevZ}while(y&&y.z<=f){if(y!==t.prev&&y!==t.next&&g(e.x,e.y,o.x,o.y,s.x,s.y,y.x,y.y)&&w(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function a(t,n,i){var e=t;do{var o=e.prev,s=e.next.next;!m(o,s)&&z(o,e,e.next,s)&&P(o,s)&&P(s,o)&&(n.push(o.i/i),n.push(e.i/i),n.push(s.i/i),_(e),_(e.next),e=t=s),e=e.next}while(e!==t);return r(e)}function u(t,n,i,o,s,a){var u=t;do{var h=u.next.next;while(h!==u.prev){if(u.i!==h.i&&M(u,h)){var c=T(u,h);return u=r(u,u.next),c=r(c,c.next),e(u,n,i,o,s,a),void e(c,n,i,o,s,a)}h=h.next}u=u.next}while(u!==t)}function h(t,n,e,o){var s,a,u,h,f,v=[];for(s=0,a=n.length;s<a;s++)u=n[s]*o,h=s<a-1?n[s+1]*o:t.length,f=i(t,u,h,o,!1),f===f.next&&(f.steiner=!0),v.push(d(f));for(v.sort(c),s=0;s<v.length;s++)x(v[s],e),e=r(e,e.next);return e}function c(t,n){return t.x-n.x}function x(t,n){if(n=f(t,n),n){var i=T(n,t);r(n,n.next),r(i,i.next)}}function f(t,n){var i,r=n,e=t.x,o=t.y,s=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){var a=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(a<=e&&a>s){if(s=a,a===e){if(o===r.y)return r;if(o===r.next.y)return r.next}i=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!i)return null;if(e===s)return i;var u,h=i,c=i.x,x=i.y,f=1/0;r=i;do{e>=r.x&&r.x>=c&&e!==r.x&&g(o<x?e:s,o,c,x,o<x?s:e,o,r.x,r.y)&&(u=Math.abs(o-r.y)/(e-r.x),P(r,t)&&(u<f||u===f&&(r.x>i.x||r.x===i.x&&v(i,r)))&&(i=r,f=u)),r=r.next}while(r!==h);return i}function v(t,n){return w(t.prev,t,n.prev)<0&&w(n.next,t,t.next)<0}function y(t,n,i,r){var e=t;do{null===e.z&&(e.z=l(e.x,e.y,n,i,r)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next}while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,p(e)}function p(t){var n,i,r,e,o,s,a,u,h=1;do{i=t,t=null,o=null,s=0;while(i){for(s++,r=i,a=0,n=0;n<h;n++)if(a++,r=r.nextZ,!r)break;u=h;while(a>0||u>0&&r)0!==a&&(0===u||!r||i.z<=r.z)?(e=i,i=i.nextZ,a--):(e=r,r=r.nextZ,u--),o?o.nextZ=e:t=e,e.prevZ=o,o=e;i=r}o.nextZ=null,h*=2}while(s>1);return t}function l(t,n,i,r,e){return t=32767*(t-i)*e,n=32767*(n-r)*e,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),t|n<<1}function d(t){var n=t,i=t;do{(n.x<i.x||n.x===i.x&&n.y<i.y)&&(i=n),n=n.next}while(n!==t);return i}function g(t,n,i,r,e,o,s,a){return(e-s)*(n-a)-(t-s)*(o-a)>=0&&(t-s)*(r-a)-(i-s)*(n-a)>=0&&(i-s)*(o-a)-(e-s)*(r-a)>=0}function M(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!C(t,n)&&(P(t,n)&&P(n,t)&&A(t,n)&&(w(t.prev,t,n.prev)||w(t,n.prev,n))||m(t,n)&&w(t.prev,t,t.next)>0&&w(n.prev,n,n.next)>0)}function w(t,n,i){return(n.y-t.y)*(i.x-n.x)-(n.x-t.x)*(i.y-n.y)}function m(t,n){return t.x===n.x&&t.y===n.y}function z(t,n,i,r){var e=I(w(t,n,i)),o=I(w(t,n,r)),s=I(w(i,r,t)),a=I(w(i,r,n));return e!==o&&s!==a||(!(0!==e||!b(t,i,n))||(!(0!==o||!b(t,r,n))||(!(0!==s||!b(i,t,r))||!(0!==a||!b(i,n,r)))))}function b(t,n,i){return n.x<=Math.max(t.x,i.x)&&n.x>=Math.min(t.x,i.x)&&n.y<=Math.max(t.y,i.y)&&n.y>=Math.min(t.y,i.y)}function I(t){return t>0?1:t<0?-1:0}function C(t,n){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&z(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}function P(t,n){return w(t.prev,t,t.next)<0?w(t,n,t.next)>=0&&w(t,t.prev,n)>=0:w(t,n,t.prev)<0||w(t,t.next,n)<0}function A(t,n){var i=t,r=!1,e=(t.x+n.x)/2,o=(t.y+n.y)/2;do{i.y>o!==i.next.y>o&&i.next.y!==i.y&&e<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==t);return r}function T(t,n){var i=new L(t.i,t.x,t.y),r=new L(n.i,n.x,n.y),e=t.next,o=n.prev;return t.next=n,n.prev=t,i.next=e,e.prev=i,r.next=i,i.prev=r,o.next=r,r.prev=o,r}function O(t,n,i,r){var e=new L(t,n,i);return r?(e.next=r.next,e.prev=r,r.next.prev=e,r.next=e):(e.prev=e,e.next=e),e}function _(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function L(t,n,i){this.i=t,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R(t,n,i,r){for(var e=0,o=n,s=i-r;o<i;o+=r)e+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return e}n.deviation=function(t,n,i,r){var e=n&&n.length,o=e?n[0]*i:t.length,s=Math.abs(R(t,0,o,i));if(e)for(var a=0,u=n.length;a<u;a++){var h=n[a]*i,c=a<u-1?n[a+1]*i:t.length;s-=Math.abs(R(t,h,c,i))}var x=0;for(a=0;a<r.length;a+=3){var f=r[a]*i,v=r[a+1]*i,y=r[a+2]*i;x+=Math.abs((t[f]-t[y])*(t[v+1]-t[f+1])-(t[f]-t[v])*(t[y+1]-t[f+1]))}return 0===s&&0===x?0:Math.abs((x-s)/s)},n.flatten=function(t){for(var n=t[0][0].length,i={vertices:[],holes:[],dimensions:n},r=0,e=0;e<t.length;e++){for(var o=0;o<t[e].length;o++)for(var s=0;s<n;s++)i.vertices.push(t[e][o][s]);e>0&&(r+=t[e-1].length,i.holes.push(r))}return i},t.exports=n},2136:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t,n){void 0===n&&(n=new r);for(var i,e=1/0,o=1/0,s=-e,a=-o,u=0;u<t.points.length;u++)i=t.points[u],e=Math.min(e,i.x),o=Math.min(o,i.y),s=Math.max(s,i.x),a=Math.max(a,i.y);return n.x=e,n.y=o,n.width=s-e,n.height=a-o,n};t.exports=e},8976:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=[]);for(var i=0;i<t.points.length;i++)n.push(t.points[i].x),n.push(t.points[i].y);return n};t.exports=n},5141:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6753),e=i(9778),o=i(2510),s=function(t,n,i,s){void 0===s&&(s=[]);var a=t.points,u=o(t);!n&&i>0&&(n=u/i);for(var h=0;h<n;h++)for(var c=u*(h/n),x=0,f=0;f<a.length;f++){var v=a[f],y=a[(f+1)%a.length],p=new e(v.x,v.y,y.x,y.y),l=r(p);if(!(c<x||c>x+l)){var d=p.getPoint((c-x)/l);s.push(d);break}x+=l}return s};t.exports=s},2510:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6753),e=i(9778),o=function(t){for(var n=t.points,i=0,o=0;o<n.length;o++){var s=n[o],a=n[(o+1)%n.length],u=new e(s.x,s.y,a.x,a.y);i+=r(u)}return i};t.exports=o},3707:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(1210),o=i(5141),s=i(9277),a=new r({initialize:function(t){this.type=s.POLYGON,this.area=0,this.points=[],t&&this.setTo(t)},contains:function(t,n){return e(this,t,n)},setTo:function(t){if(this.area=0,this.points=[],"string"===typeof t&&(t=t.split(" ")),!Array.isArray(t))return this;for(var n,i=Number.MAX_VALUE,r=0;r<t.length;r++)n={x:0,y:0},"number"===typeof t[r]||"string"===typeof t[r]?(n.x=parseFloat(t[r]),n.y=parseFloat(t[r+1]),r++):Array.isArray(t[r])?(n.x=t[r][0],n.y=t[r][1]):(n.x=t[r].x,n.y=t[r].y),this.points.push(n),n.y<i&&(i=n.y);return this.calculateArea(i),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t,n,i=0,r=0;r<this.points.length-1;r++)t=this.points[r],n=this.points[r+1],i+=(n.x-t.x)*(t.y+n.y);return t=this.points[0],n=this.points[this.points.length-1],i+=(t.x-n.x)*(n.y+t.y),this.area=.5*-i,this.area},getPoints:function(t,n,i){return o(this,t,n,i)}});t.exports=a},4560:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t.points.reverse(),t};t.exports=n},882:function(t){function n(t,n){var i=t.x-n.x,r=t.y-n.y;return i*i+r*r}function i(t,n,i){var r=n.x,e=n.y,o=i.x-r,s=i.y-e;if(0!==o||0!==s){var a=((t.x-r)*o+(t.y-e)*s)/(o*o+s*s);a>1?(r=i.x,e=i.y):a>0&&(r+=o*a,e+=s*a)}return o=t.x-r,s=t.y-e,o*o+s*s}function r(t,i){for(var r,e=t[0],o=[e],s=1,a=t.length;s<a;s++)r=t[s],n(r,e)>i&&(o.push(r),e=r);return e!==r&&o.push(r),o}function e(t,n,r,o,s){for(var a,u=o,h=n+1;h<r;h++){var c=i(t[h],t[n],t[r]);c>u&&(a=h,u=c)}u>o&&(a-n>1&&e(t,n,a,o,s),s.push(t[a]),r-a>1&&e(t,a,r,o,s))}function o(t,n){var i=t.length-1,r=[t[0]];return e(t,0,i,n,r),r.push(t[i]),r}var s=function(t,n,i){void 0===n&&(n=1),void 0===i&&(i=!1);var e=t.points;if(e.length>2){var s=n*n;i||(e=r(e,s)),t.setTo(o(e,s))}return t};t.exports=s},9213:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return t[0]=n[0],t[1]=n[1],t},i=function(t){var i,r=[],e=t.points;for(i=0;i<e.length;i++)r.push([e[i].x,e[i].y]);var o=[];for(r.length>0&&o.push(n([0,0],r[0])),i=0;i<r.length-1;i++){var s=r[i],a=r[i+1],u=s[0],h=s[1],c=a[0],x=a[1];o.push([.85*u+.15*c,.85*h+.15*x]),o.push([.15*u+.85*c,.15*h+.85*x])}return r.length>1&&o.push(n([0,0],r[r.length-1])),t.setTo(o)};t.exports=i},9882:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){for(var r=t.points,e=0;e<r.length;e++)r[e].x+=n,r[e].y+=i;return t};t.exports=n},5147:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3707);r.Clone=i(9966),r.Contains=i(1210),r.ContainsPoint=i(4990),r.Earcut=i(5084),r.GetAABB=i(2136),r.GetNumberArray=i(8976),r.GetPoints=i(5141),r.Perimeter=i(2510),r.Reverse=i(4560),r.Simplify=i(882),r.Smooth=i(9213),r.Translate=i(9882),t.exports=r},4038:function(t){
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
var n=function(t,n,i){return t.x=n-t.width/2,t.y=i-t.height/2,t};t.exports=n},2032:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t){return new r(t.x,t.y,t.width,t.height)};t.exports=e},1305:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return!(t.width<=0||t.height<=0)&&(t.x<=n&&t.x+t.width>=n&&t.y<=i&&t.y+t.height>=i)};t.exports=n},7802:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1305),e=function(t,n){return r(t,n.x,n.y)};t.exports=e},7287:function(t){
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
var n=function(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height};t.exports=n},5276:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4913),e=function(t,n){var i=r(t);return i<r(n)?t.setSize(n.height*i,n.height):t.setSize(n.width,n.width/i),t.setPosition(n.centerX-t.width/2,n.centerY-t.height/2)};t.exports=e},2757:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4913),e=function(t,n){var i=r(t);return i>r(n)?t.setSize(n.height*i,n.height):t.setSize(n.width,n.width/i),t.setPosition(n.centerX-t.width/2,n.centerY-t.height/2)};t.exports=e},3010:function(t){
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
var n=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t};t.exports=n},5505:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=i(611),o=function(t,n){if(void 0===n&&(n=new r),0===t.length)return n;for(var i,o,s,a=Number.MAX_VALUE,u=Number.MAX_VALUE,h=e.MIN_SAFE_INTEGER,c=e.MIN_SAFE_INTEGER,x=0;x<t.length;x++)i=t[x],Array.isArray(i)?(o=i[0],s=i[1]):(o=i.x,s=i.y),a=Math.min(a,o),u=Math.min(u,s),h=Math.max(h,o),c=Math.max(c,s);return n.x=a,n.y=u,n.width=h-a,n.height=c-u,n};t.exports=o},9306:function(t,n,i){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t,n,i,e,o){return void 0===o&&(o=new r),o.setTo(Math.min(t,i),Math.min(n,e),Math.abs(t-i),Math.abs(n-e))};t.exports=e},4913:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return 0===t.height?NaN:t.width/t.height};t.exports=n},4522:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){return void 0===n&&(n=new r),n.x=t.centerX,n.y=t.centerY,n};t.exports=e},5427:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4330),e=i(9106),o=function(t,n,i){if(void 0===i&&(i=new e),n<=0||n>=1)return i.x=t.x,i.y=t.y,i;var o=r(t)*n;return n>.5?(o-=t.width+t.height,o<=t.width?(i.x=t.right-o,i.y=t.bottom):(i.x=t.x,i.y=t.bottom-(o-t.width))):o<=t.width?(i.x=t.x+o,i.y=t.y):(i.x=t.right,i.y=t.y+(o-t.width)),i};t.exports=o},6806:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(5427),e=i(4330),o=function(t,n,i,o){void 0===o&&(o=[]),!n&&i>0&&(n=e(t)/i);for(var s=0;s<n;s++){var a=s/n;o.push(r(t,a))}return o};t.exports=o},3970:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){return void 0===n&&(n=new r),n.x=t.width,n.y=t.height,n};t.exports=e},1674:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7440),e=function(t,n,i){var e=t.centerX,o=t.centerY;return t.setSize(t.width+2*n,t.height+2*i),r(t,e,o)};t.exports=e},6635:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=i(1756),o=function(t,n,i){return void 0===i&&(i=new r),e(t,n)?(i.x=Math.max(t.x,n.x),i.y=Math.max(t.y,n.y),i.width=Math.min(t.right,n.right)-i.x,i.height=Math.min(t.bottom,n.bottom)-i.y):i.setEmpty(),i};t.exports=o},4684:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4330),e=i(9106),o=function(t,n,i,o){if(void 0===o&&(o=[]),!n&&!i)return o;n?i=Math.round(r(t)/n):n=r(t)/i;for(var s=t.x,a=t.y,u=0,h=0;h<i;h++)switch(o.push(new e(s,a)),u){case 0:s+=n,s>=t.right&&(u=1,a+=s-t.right,s=t.right);break;case 1:a+=n,a>=t.bottom&&(u=2,s-=a-t.bottom,a=t.bottom);break;case 2:s-=n,s<=t.left&&(u=3,a-=t.left-s,s=t.left);break;case 3:a-=n,a<=t.top&&(u=0,a=t.top);break}return o};t.exports=o},5547:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){for(var i=t.x,r=t.right,e=t.y,o=t.bottom,s=0;s<n.length;s++)i=Math.min(i,n[s].x),r=Math.max(r,n[s].x),e=Math.min(e,n[s].y),o=Math.max(o,n[s].y);return t.x=i,t.y=e,t.width=r-i,t.height=o-e,t};t.exports=n},1630:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=Math.min(t.x,n.x),r=Math.max(t.right,n.right);t.x=i,t.width=r-i;var e=Math.min(t.y,n.y),o=Math.max(t.bottom,n.bottom);return t.y=e,t.height=o-e,t};t.exports=n},795:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){var r=Math.min(t.x,n),e=Math.max(t.right,n);t.x=r,t.width=e-r;var o=Math.min(t.y,i),s=Math.max(t.bottom,i);return t.y=o,t.height=s-o,t};t.exports=n},4940:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t.x+=n,t.y+=i,t};t.exports=n},645:function(t){
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
var n=function(t){return 2*(t.width+t.height)};t.exports=n},6221:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(3490),o=function(t,n,i){void 0===i&&(i=new r),n=e(n);var o=Math.sin(n),s=Math.cos(n),a=s>0?t.width/2:t.width/-2,u=o>0?t.height/2:t.height/-2;return Math.abs(a*o)<Math.abs(u*s)?u=a*o/s:a=u*s/o,i.x=a+t.centerX,i.y=u+t.centerY,i};t.exports=o},130:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){return void 0===n&&(n=new r),n.x=t.x+Math.random()*t.width,n.y=t.y+Math.random()*t.height,n};t.exports=e},9829:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7443),e=i(7287),o=i(9106),s=function(t,n,i){if(void 0===i&&(i=new o),e(t,n))switch(r(0,3)){case 0:i.x=t.x+Math.random()*(n.right-t.x),i.y=t.y+Math.random()*(n.top-t.y);break;case 1:i.x=n.x+Math.random()*(t.right-n.x),i.y=n.bottom+Math.random()*(t.bottom-n.bottom);break;case 2:i.x=t.x+Math.random()*(n.x-t.x),i.y=n.y+Math.random()*(t.bottom-n.y);break;case 3:i.x=n.right+Math.random()*(t.right-n.right),i.y=t.y+Math.random()*(n.bottom-t.y);break}return i};t.exports=s},1456:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(1305),o=i(5427),s=i(6806),a=i(9277),u=i(9778),h=i(130),c=new r({initialize:function(t,n,i,r){void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),this.type=a.RECTANGLE,this.x=t,this.y=n,this.width=i,this.height=r},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,i){return s(this,t,n,i)},getRandomPoint:function(t){return h(this,t)},setTo:function(t,n,i,r){return this.x=t,this.y=n,this.width=i,this.height=r,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},setSize:function(t,n){return void 0===n&&(n=t),this.width=t,this.height=n,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return void 0===t&&(t=new u),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return void 0===t&&(t=new u),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return void 0===t&&(t=new u),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return void 0===t&&(t=new u),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}});t.exports=c},4819:function(t){
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
var n=function(t,n,i){return void 0===i&&(i=n),t.width*=n,t.height*=i,t};t.exports=n},7597:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456),e=function(t,n,i){void 0===i&&(i=new r);var e=Math.min(t.x,n.x),o=Math.min(t.y,n.y),s=Math.max(t.right,n.right)-e,a=Math.max(t.bottom,n.bottom)-o;return i.setTo(e,o,s,a)};t.exports=e},5244:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1456);r.Area=i(4038),r.Ceil=i(6829),r.CeilAll=i(6109),r.CenterOn=i(7440),r.Clone=i(2032),r.Contains=i(1305),r.ContainsPoint=i(7802),r.ContainsRect=i(7287),r.CopyFrom=i(5820),r.Decompose=i(9917),r.Equals=i(1011),r.FitInside=i(5276),r.FitOutside=i(2757),r.Floor=i(3010),r.FloorAll=i(6059),r.FromPoints=i(5505),r.FromXY=i(9306),r.GetAspectRatio=i(4913),r.GetCenter=i(4522),r.GetPoint=i(5427),r.GetPoints=i(6806),r.GetSize=i(3970),r.Inflate=i(1674),r.Intersection=i(6635),r.MarchingAnts=i(4684),r.MergePoints=i(5547),r.MergeRect=i(1630),r.MergeXY=i(795),r.Offset=i(4940),r.OffsetPoint=i(645),r.Overlaps=i(5681),r.Perimeter=i(4330),r.PerimeterPoint=i(6221),r.Random=i(130),r.RandomOutside=i(9829),r.SameDimensions=i(4819),r.Scale=i(1866),r.Union=i(7597),t.exports=r},9530:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=t.x1,i=t.y1,r=t.x2,e=t.y2,o=t.x3,s=t.y3;return Math.abs(((o-n)*(e-i)-(r-n)*(s-i))/2)};t.exports=n},6613:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(997),e=function(t,n,i){var e=i*(Math.sqrt(3)/2),o=t,s=n,a=t+i/2,u=n+e,h=t-i/2,c=n+e;return new r(o,s,a,u,h,c)};t.exports=e},9888:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(5084),e=i(997),o=function(t,n,i,o,s){void 0===n&&(n=null),void 0===i&&(i=1),void 0===o&&(o=1),void 0===s&&(s=[]);for(var a,u,h,c,x,f,v,y,p,l=r(t,n),d=0;d<l.length;d+=3)a=l[d],u=l[d+1],h=l[d+2],c=t[2*a]*i,x=t[2*a+1]*o,f=t[2*u]*i,v=t[2*u+1]*o,y=t[2*h]*i,p=t[2*h+1]*o,s.push(new e(c,x,f,v,y,p));return s};t.exports=o},365:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(997),e=function(t,n,i,e){void 0===e&&(e=i);var o=t,s=n,a=t,u=n-e,h=t+i,c=n;return new r(o,s,a,u,h,c)};t.exports=e},6453:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(400),e=i(2462),o=function(t,n,i,o){void 0===o&&(o=r);var s=o(t),a=n-s.x,u=i-s.y;return e(t,a,u)};t.exports=o},400:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){return void 0===n&&(n=new r),n.x=(t.x1+t.x2+t.x3)/3,n.y=(t.y1+t.y2+t.y3)/3,n};t.exports=e},727:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9182);function e(t,n,i,r){return t*r-n*i}var o=function(t,n){void 0===n&&(n=new r);var i=t.x3,o=t.y3,s=t.x1-i,a=t.y1-o,u=t.x2-i,h=t.y2-o,c=2*e(s,a,u,h),x=e(a,s*s+a*a,h,u*u+h*h),f=e(s,s*s+a*a,u,u*u+h*h);return n.x=i-x/c,n.y=o+f/c,n};t.exports=o},3945:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6853),e=function(t,n){void 0===n&&(n=new r);var i,e,o=t.x1,s=t.y1,a=t.x2,u=t.y2,h=t.x3,c=t.y3,x=a-o,f=u-s,v=h-o,y=c-s,p=x*(o+a)+f*(s+u),l=v*(o+h)+y*(s+c),d=2*(x*(c-u)-f*(h-a));if(Math.abs(d)<1e-6){var g=Math.min(o,a,h),M=Math.min(s,u,c);i=.5*(Math.max(o,a,h)-g),e=.5*(Math.max(s,u,c)-M),n.x=g+i,n.y=M+e,n.radius=Math.sqrt(i*i+e*e)}else n.x=(y*p-f*l)/d,n.y=(x*l-v*p)/d,i=n.x-o,e=n.y-s,n.radius=Math.sqrt(i*i+e*e);return n};t.exports=e},5508:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(997),e=function(t){return new r(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)};t.exports=e},9503:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){var r=t.x3-t.x1,e=t.y3-t.y1,o=t.x2-t.x1,s=t.y2-t.y1,a=n-t.x1,u=i-t.y1,h=r*r+e*e,c=r*o+e*s,x=r*a+e*u,f=o*o+s*s,v=o*a+s*u,y=h*f-c*c,p=0===y?0:1/y,l=(f*x-c*v)*p,d=(h*v-c*x)*p;return l>=0&&d>=0&&l+d<1};t.exports=n},4112:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){void 0===i&&(i=!1),void 0===r&&(r=[]);for(var e,o,s,a,u,h,c=t.x3-t.x1,x=t.y3-t.y1,f=t.x2-t.x1,v=t.y2-t.y1,y=c*c+x*x,p=c*f+x*v,l=f*f+v*v,d=y*l-p*p,g=0===d?0:1/d,M=t.x1,w=t.y1,m=0;m<n.length;m++)if(s=n[m].x-M,a=n[m].y-w,u=c*s+x*a,h=f*s+v*a,e=(l*u-p*h)*g,o=(y*h-p*u)*g,e>=0&&o>=0&&e+o<1&&(r.push({x:n[m].x,y:n[m].y}),i))break;return r};t.exports=n},4703:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9503),e=function(t,n){return r(t,n.x,n.y)};t.exports=e},9602:function(t){
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
var n=function(t,n){return t.x1===n.x1&&t.y1===n.y1&&t.x2===n.x2&&t.y2===n.y2&&t.x3===n.x3&&t.y3===n.y3};t.exports=n},6742:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=i(6753),o=function(t,n,i){void 0===i&&(i=new r);var o=t.getLineA(),s=t.getLineB(),a=t.getLineC();if(n<=0||n>=1)return i.x=o.x1,i.y=o.y1,i;var u=e(o),h=e(s),c=e(a),x=u+h+c,f=x*n,v=0;return f<u?(v=f/u,i.x=o.x1+(o.x2-o.x1)*v,i.y=o.y1+(o.y2-o.y1)*v):f>u+h?(f-=u+h,v=f/c,i.x=a.x1+(a.x2-a.x1)*v,i.y=a.y1+(a.y2-a.y1)*v):(f-=u,v=f/h,i.x=s.x1+(s.x2-s.x1)*v,i.y=s.y1+(s.y2-s.y1)*v),i};t.exports=o},1978:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6753),e=i(9106),o=function(t,n,i,o){void 0===o&&(o=[]);var s=t.getLineA(),a=t.getLineB(),u=t.getLineC(),h=r(s),c=r(a),x=r(u),f=h+c+x;!n&&i>0&&(n=f/i);for(var v=0;v<n;v++){var y=f*(v/n),p=0,l=new e;y<h?(p=y/h,l.x=s.x1+(s.x2-s.x1)*p,l.y=s.y1+(s.y2-s.y1)*p):y>h+c?(y-=h+c,p=y/x,l.x=u.x1+(u.x2-u.x1)*p,l.y=u.y1+(u.y2-u.y1)*p):(y-=h,p=y/c,l.x=a.x1+(a.x2-a.x1)*p,l.y=a.y1+(a.y2-a.y1)*p),o.push(l)}return o};t.exports=o},690:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106);function e(t,n,i,r){var e=t-i,o=n-r,s=e*e+o*o;return Math.sqrt(s)}var o=function(t,n){void 0===n&&(n=new r);var i=t.x1,o=t.y1,s=t.x2,a=t.y2,u=t.x3,h=t.y3,c=e(u,h,s,a),x=e(i,o,u,h),f=e(s,a,i,o),v=c+x+f;return n.x=(i*c+s*x+u*f)/v,n.y=(o*c+a*x+h*f)/v,n};t.exports=o},2462:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t.x1+=n,t.y1+=i,t.x2+=n,t.y2+=i,t.x3+=n,t.y3+=i,t};t.exports=n},9259:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6753),e=function(t){var n=t.getLineA(),i=t.getLineB(),e=t.getLineC();return r(n)+r(i)+r(e)};t.exports=e},1057:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9106),e=function(t,n){void 0===n&&(n=new r);var i=t.x2-t.x1,e=t.y2-t.y1,o=t.x3-t.x1,s=t.y3-t.y1,a=Math.random(),u=Math.random();return a+u>=1&&(a=1-a,u=1-u),n.x=t.x1+(i*a+o*u),n.y=t.y1+(e*a+s*u),n};t.exports=e},99:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1062),e=i(690),o=function(t,n){var i=e(t);return r(t,i.x,i.y,n)};t.exports=o},9215:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1062),e=function(t,n,i){return r(t,n.x,n.y,i)};t.exports=e},1062:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){var e=Math.cos(r),o=Math.sin(r),s=t.x1-n,a=t.y1-i;return t.x1=s*e-a*o+n,t.y1=s*o+a*e+i,s=t.x2-n,a=t.y2-i,t.x2=s*e-a*o+n,t.y2=s*o+a*e+i,s=t.x3-n,a=t.y3-i,t.x3=s*e-a*o+n,t.y3=s*o+a*e+i,t};t.exports=n},997:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(9503),o=i(6742),s=i(1978),a=i(9277),u=i(9778),h=i(1057),c=new r({initialize:function(t,n,i,r,e,o){void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),void 0===e&&(e=0),void 0===o&&(o=0),this.type=a.TRIANGLE,this.x1=t,this.y1=n,this.x2=i,this.y2=r,this.x3=e,this.y3=o},contains:function(t,n){return e(this,t,n)},getPoint:function(t,n){return o(this,t,n)},getPoints:function(t,n,i){return s(this,t,n,i)},getRandomPoint:function(t){return h(this,t)},setTo:function(t,n,i,r,e,o){return void 0===t&&(t=0),void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),void 0===e&&(e=0),void 0===o&&(o=0),this.x1=t,this.y1=n,this.x2=i,this.y2=r,this.x3=e,this.y3=o,this},getLineA:function(t){return void 0===t&&(t=new u),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return void 0===t&&(t=new u),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return void 0===t&&(t=new u),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var n=0;n=this.x1<=this.x2&&this.x1<=this.x3?this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?this.x2-t:this.x3-t,this.x1-=n,this.x2-=n,this.x3-=n}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var n=0;n=this.x1>=this.x2&&this.x1>=this.x3?this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?this.x2-t:this.x3-t,this.x1-=n,this.x2-=n,this.x3-=n}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var n=0;n=this.y1<=this.y2&&this.y1<=this.y3?this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?this.y2-t:this.y3-t,this.y1-=n,this.y2-=n,this.y3-=n}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var n=0;n=this.y1>=this.y2&&this.y1>=this.y3?this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?this.y2-t:this.y3-t,this.y1-=n,this.y2-=n,this.y3-=n}}});t.exports=c},6636:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(997);r.Area=i(9530),r.BuildEquilateral=i(6613),r.BuildFromPolygon=i(9888),r.BuildRight=i(365),r.CenterOn=i(6453),r.Centroid=i(400),r.CircumCenter=i(727),r.CircumCircle=i(3945),r.Clone=i(5508),r.Contains=i(9503),r.ContainsArray=i(4112),r.ContainsPoint=i(4703),r.CopyFrom=i(9602),r.Decompose=i(3984),r.Equals=i(1101),r.GetPoint=i(6742),r.GetPoints=i(1978),r.InCenter=i(690),r.Perimeter=i(9259),r.Offset=i(2462),r.Random=i(1057),r.Rotate=i(99),r.RotateAroundPoint=i(9215),r.RotateAroundXY=i(1062),t.exports=r},9011:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){for(var n=0,i=0;i<t.length;i++)n+=+t[i];return n/t.length};t.exports=n},4908:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6038),e=function(t,n){return r(t)/r(n)/r(t-n)};t.exports=e},7443:function(t){
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
var n=function(t,n,i,r,e){var o=.5*(r-n),s=.5*(e-i),a=t*t,u=t*a;return(2*i-2*r+o+s)*u+(-3*i+3*r-2*o-s)*a+o*t+i};t.exports=n},9457:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){void 0===n&&(n=0),void 0===i&&(i=10);var r=Math.pow(i,-n);return Math.ceil(t*r)/r};t.exports=n},1495:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return Math.max(n,Math.min(i,t))};t.exports=n},3490:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=function(t){return t*r.DEG_TO_RAD};t.exports=e},2125:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return Math.abs(t-n)};t.exports=n},7368:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1495),e=i(3018),o=i(5332),s=i(9584),a=new o,u=new e({initialize:function t(n,i,r,e){void 0===n&&(n=0),void 0===i&&(i=0),void 0===r&&(r=0),void 0===e&&(e=t.DefaultOrder),this._x=n,this._y=i,this._z=r,this._order=e,this.onChangeCallback=s},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,n,i,r){return void 0===r&&(r=this._order),this._x=t,this._y=n,this._z=i,this._order=r,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,n,i){return void 0===n&&(n=this._order),void 0===i&&(i=!1),a.fromQuat(t),this.setFromRotationMatrix(a,n,i)},setFromRotationMatrix:function(t,n,i){void 0===n&&(n=this._order),void 0===i&&(i=!1);var e=t.val,o=e[0],s=e[4],a=e[8],u=e[1],h=e[5],c=e[9],x=e[2],f=e[6],v=e[10],y=0,p=0,l=0,d=.99999;switch(n){case"XYZ":p=Math.asin(r(a,-1,1)),Math.abs(a)<d?(y=Math.atan2(-c,v),l=Math.atan2(-s,o)):y=Math.atan2(f,h);break;case"YXZ":y=Math.asin(-r(c,-1,1)),Math.abs(c)<d?(p=Math.atan2(a,v),l=Math.atan2(u,h)):p=Math.atan2(-x,o);break;case"ZXY":y=Math.asin(r(f,-1,1)),Math.abs(f)<d?(p=Math.atan2(-x,v),l=Math.atan2(-s,h)):l=Math.atan2(u,o);break;case"ZYX":p=Math.asin(-r(x,-1,1)),Math.abs(x)<d?(y=Math.atan2(f,v),l=Math.atan2(u,o)):l=Math.atan2(-s,h);break;case"YZX":l=Math.asin(r(u,-1,1)),Math.abs(u)<d?(y=Math.atan2(-c,h),p=Math.atan2(-x,o)):p=Math.atan2(a,v);break;case"XZY":l=Math.asin(-r(s,-1,1)),Math.abs(s)<d?(y=Math.atan2(f,h),p=Math.atan2(a,o)):y=Math.atan2(-c,v);break}return this._x=y,this._y=p,this._z=l,this._order=n,i&&this.onChangeCallback(this),this}});u.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],u.DefaultOrder="XYZ",t.exports=u},6038:function(t){
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
var n=function(t,n,i){void 0===n&&(n=0),void 0===i&&(i=10);var r=Math.pow(i,-n);return Math.floor(t*r)/r};t.exports=n},3579:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(1495),e=function(t,n,i){return t=r(t,0,1),(i-n)*t+n};t.exports=e},1164:function(t){
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
var n=function(t,n,i){return(n-t)*i+t};t.exports=n},7125:function(t,n,i){i(8675),i(3462);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=new r({initialize:function(t){this.val=new Float32Array(9),t?this.copy(t):this.identity()},clone:function(){return new e(this)},set:function(t){return this.copy(t)},copy:function(t){var n=this.val,i=t.val;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this},fromMat4:function(t){var n=t.val,i=this.val;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[4],i[4]=n[5],i[5]=n[6],i[6]=n[8],i[7]=n[9],i[8]=n[10],this},fromArray:function(t){var n=this.val;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,n=t[1],i=t[2],r=t[5];return t[1]=t[3],t[2]=t[6],t[3]=n,t[5]=t[7],t[6]=i,t[7]=r,this},invert:function(){var t=this.val,n=t[0],i=t[1],r=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=h*o-s*u,x=-h*e+s*a,f=u*e-o*a,v=n*c+i*x+r*f;return v?(v=1/v,t[0]=c*v,t[1]=(-h*i+r*u)*v,t[2]=(s*i-r*o)*v,t[3]=x*v,t[4]=(h*n-r*a)*v,t[5]=(-s*n+r*e)*v,t[6]=f*v,t[7]=(-u*n+i*a)*v,t[8]=(o*n-i*e)*v,this):null},adjoint:function(){var t=this.val,n=t[0],i=t[1],r=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8];return t[0]=o*h-s*u,t[1]=r*u-i*h,t[2]=i*s-r*o,t[3]=s*a-e*h,t[4]=n*h-r*a,t[5]=r*e-n*s,t[6]=e*u-o*a,t[7]=i*a-n*u,t[8]=n*o-i*e,this},determinant:function(){var t=this.val,n=t[0],i=t[1],r=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8];return n*(h*o-s*u)+i*(-h*e+s*a)+r*(u*e-o*a)},multiply:function(t){var n=this.val,i=n[0],r=n[1],e=n[2],o=n[3],s=n[4],a=n[5],u=n[6],h=n[7],c=n[8],x=t.val,f=x[0],v=x[1],y=x[2],p=x[3],l=x[4],d=x[5],g=x[6],M=x[7],w=x[8];return n[0]=f*i+v*o+y*u,n[1]=f*r+v*s+y*h,n[2]=f*e+v*a+y*c,n[3]=p*i+l*o+d*u,n[4]=p*r+l*s+d*h,n[5]=p*e+l*a+d*c,n[6]=g*i+M*o+w*u,n[7]=g*r+M*s+w*h,n[8]=g*e+M*a+w*c,this},translate:function(t){var n=this.val,i=t.x,r=t.y;return n[6]=i*n[0]+r*n[3]+n[6],n[7]=i*n[1]+r*n[4]+n[7],n[8]=i*n[2]+r*n[5]+n[8],this},rotate:function(t){var n=this.val,i=n[0],r=n[1],e=n[2],o=n[3],s=n[4],a=n[5],u=Math.sin(t),h=Math.cos(t);return n[0]=h*i+u*o,n[1]=h*r+u*s,n[2]=h*e+u*a,n[3]=h*o-u*i,n[4]=h*s-u*r,n[5]=h*a-u*e,this},scale:function(t){var n=this.val,i=t.x,r=t.y;return n[0]=i*n[0],n[1]=i*n[1],n[2]=i*n[2],n[3]=r*n[3],n[4]=r*n[4],n[5]=r*n[5],this},fromQuat:function(t){var n=t.x,i=t.y,r=t.z,e=t.w,o=n+n,s=i+i,a=r+r,u=n*o,h=n*s,c=n*a,x=i*s,f=i*a,v=r*a,y=e*o,p=e*s,l=e*a,d=this.val;return d[0]=1-(x+v),d[3]=h+l,d[6]=c-p,d[1]=h-l,d[4]=1-(u+v),d[7]=f+y,d[2]=c+p,d[5]=f-y,d[8]=1-(u+x),this},normalFromMat4:function(t){var n=t.val,i=this.val,r=n[0],e=n[1],o=n[2],s=n[3],a=n[4],u=n[5],h=n[6],c=n[7],x=n[8],f=n[9],v=n[10],y=n[11],p=n[12],l=n[13],d=n[14],g=n[15],M=r*u-e*a,w=r*h-o*a,m=r*c-s*a,z=e*h-o*u,b=e*c-s*u,I=o*c-s*h,C=x*l-f*p,P=x*d-v*p,A=x*g-y*p,T=f*d-v*l,O=f*g-y*l,_=v*g-y*d,L=M*_-w*O+m*T+z*A-b*P+I*C;return L?(L=1/L,i[0]=(u*_-h*O+c*T)*L,i[1]=(h*A-a*_-c*P)*L,i[2]=(a*O-u*A+c*C)*L,i[3]=(o*O-e*_-s*T)*L,i[4]=(r*_-o*A+s*P)*L,i[5]=(e*A-r*O-s*C)*L,i[6]=(l*I-d*b+g*z)*L,i[7]=(d*m-p*I-g*w)*L,i[8]=(p*b-l*m+g*M)*L,this):null}});t.exports=e},5332:function(t,n,i){i(8675),i(3462);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(2220),o=1e-6,s=new r({initialize:function(t){this.val=new Float32Array(16),t?this.copy(t):this.identity()},clone:function(){return new s(this)},set:function(t){return this.copy(t)},setValues:function(t,n,i,r,e,o,s,a,u,h,c,x,f,v,y,p){var l=this.val;return l[0]=t,l[1]=n,l[2]=i,l[3]=r,l[4]=e,l[5]=o,l[6]=s,l[7]=a,l[8]=u,l[9]=h,l[10]=c,l[11]=x,l[12]=f,l[13]=v,l[14]=y,l[15]=p,this},copy:function(t){var n=t.val;return this.setValues(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],n[9],n[10],n[11],n[12],n[13],n[14],n[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,n,i){var r=a.fromQuat(i),e=r.val,o=n.x,s=n.y,u=n.z;return this.setValues(e[0]*o,e[1]*o,e[2]*o,0,e[4]*s,e[5]*s,e[6]*s,0,e[8]*u,e[9]*u,e[10]*u,0,t.x,t.y,t.z,1)},xyz:function(t,n,i){this.identity();var r=this.val;return r[12]=t,r[13]=n,r[14]=i,this},scaling:function(t,n,i){this.zero();var r=this.val;return r[0]=t,r[5]=n,r[10]=i,r[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,n=t[1],i=t[2],r=t[3],e=t[6],o=t[7],s=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=n,t[6]=t[9],t[7]=t[13],t[8]=i,t[9]=e,t[11]=t[14],t[12]=r,t[13]=o,t[14]=s,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,n=t[0],i=t[1],r=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],x=t[10],f=t[11],v=t[12],y=t[13],p=t[14],l=t[15],d=n*s-i*o,g=n*a-r*o,M=n*u-e*o,w=i*a-r*s,m=i*u-e*s,z=r*u-e*a,b=h*y-c*v,I=h*p-x*v,C=h*l-f*v,P=c*p-x*y,A=c*l-f*y,T=x*l-f*p,O=d*T-g*A+M*P+w*C-m*I+z*b;return O?(O=1/O,this.setValues((s*T-a*A+u*P)*O,(r*A-i*T-e*P)*O,(y*z-p*m+l*w)*O,(x*m-c*z-f*w)*O,(a*C-o*T-u*I)*O,(n*T-r*C+e*I)*O,(p*M-v*z-l*g)*O,(h*z-x*M+f*g)*O,(o*A-s*C+u*b)*O,(i*C-n*A-e*b)*O,(v*m-y*M+l*d)*O,(c*M-h*m-f*d)*O,(s*I-o*P-a*b)*O,(n*P-i*I+r*b)*O,(y*g-v*w-p*d)*O,(h*w-c*g+x*d)*O)):this},adjoint:function(){var t=this.val,n=t[0],i=t[1],r=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],x=t[10],f=t[11],v=t[12],y=t[13],p=t[14],l=t[15];return this.setValues(s*(x*l-f*p)-c*(a*l-u*p)+y*(a*f-u*x),-(i*(x*l-f*p)-c*(r*l-e*p)+y*(r*f-e*x)),i*(a*l-u*p)-s*(r*l-e*p)+y*(r*u-e*a),-(i*(a*f-u*x)-s*(r*f-e*x)+c*(r*u-e*a)),-(o*(x*l-f*p)-h*(a*l-u*p)+v*(a*f-u*x)),n*(x*l-f*p)-h*(r*l-e*p)+v*(r*f-e*x),-(n*(a*l-u*p)-o*(r*l-e*p)+v*(r*u-e*a)),n*(a*f-u*x)-o*(r*f-e*x)+h*(r*u-e*a),o*(c*l-f*y)-h*(s*l-u*y)+v*(s*f-u*c),-(n*(c*l-f*y)-h*(i*l-e*y)+v*(i*f-e*c)),n*(s*l-u*y)-o*(i*l-e*y)+v*(i*u-e*s),-(n*(s*f-u*c)-o*(i*f-e*c)+h*(i*u-e*s)),-(o*(c*p-x*y)-h*(s*p-a*y)+v*(s*x-a*c)),n*(c*p-x*y)-h*(i*p-r*y)+v*(i*x-r*c),-(n*(s*p-a*y)-o*(i*p-r*y)+v*(i*a-r*s)),n*(s*x-a*c)-o*(i*x-r*c)+h*(i*a-r*s))},determinant:function(){var t=this.val,n=t[0],i=t[1],r=t[2],e=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],c=t[9],x=t[10],f=t[11],v=t[12],y=t[13],p=t[14],l=t[15],d=n*s-i*o,g=n*a-r*o,M=n*u-e*o,w=i*a-r*s,m=i*u-e*s,z=r*u-e*a,b=h*y-c*v,I=h*p-x*v,C=h*l-f*v,P=c*p-x*y,A=c*l-f*y,T=x*l-f*p;return d*T-g*A+M*P+w*C-m*I+z*b},multiply:function(t){var n=this.val,i=n[0],r=n[1],e=n[2],o=n[3],s=n[4],a=n[5],u=n[6],h=n[7],c=n[8],x=n[9],f=n[10],v=n[11],y=n[12],p=n[13],l=n[14],d=n[15],g=t.val,M=g[0],w=g[1],m=g[2],z=g[3];return n[0]=M*i+w*s+m*c+z*y,n[1]=M*r+w*a+m*x+z*p,n[2]=M*e+w*u+m*f+z*l,n[3]=M*o+w*h+m*v+z*d,M=g[4],w=g[5],m=g[6],z=g[7],n[4]=M*i+w*s+m*c+z*y,n[5]=M*r+w*a+m*x+z*p,n[6]=M*e+w*u+m*f+z*l,n[7]=M*o+w*h+m*v+z*d,M=g[8],w=g[9],m=g[10],z=g[11],n[8]=M*i+w*s+m*c+z*y,n[9]=M*r+w*a+m*x+z*p,n[10]=M*e+w*u+m*f+z*l,n[11]=M*o+w*h+m*v+z*d,M=g[12],w=g[13],m=g[14],z=g[15],n[12]=M*i+w*s+m*c+z*y,n[13]=M*r+w*a+m*x+z*p,n[14]=M*e+w*u+m*f+z*l,n[15]=M*o+w*h+m*v+z*d,this},multiplyLocal:function(t){var n=this.val,i=t.val;return this.setValues(n[0]*i[0]+n[1]*i[4]+n[2]*i[8]+n[3]*i[12],n[0]*i[1]+n[1]*i[5]+n[2]*i[9]+n[3]*i[13],n[0]*i[2]+n[1]*i[6]+n[2]*i[10]+n[3]*i[14],n[0]*i[3]+n[1]*i[7]+n[2]*i[11]+n[3]*i[15],n[4]*i[0]+n[5]*i[4]+n[6]*i[8]+n[7]*i[12],n[4]*i[1]+n[5]*i[5]+n[6]*i[9]+n[7]*i[13],n[4]*i[2]+n[5]*i[6]+n[6]*i[10]+n[7]*i[14],n[4]*i[3]+n[5]*i[7]+n[6]*i[11]+n[7]*i[15],n[8]*i[0]+n[9]*i[4]+n[10]*i[8]+n[11]*i[12],n[8]*i[1]+n[9]*i[5]+n[10]*i[9]+n[11]*i[13],n[8]*i[2]+n[9]*i[6]+n[10]*i[10]+n[11]*i[14],n[8]*i[3]+n[9]*i[7]+n[10]*i[11]+n[11]*i[15],n[12]*i[0]+n[13]*i[4]+n[14]*i[8]+n[15]*i[12],n[12]*i[1]+n[13]*i[5]+n[14]*i[9]+n[15]*i[13],n[12]*i[2]+n[13]*i[6]+n[14]*i[10]+n[15]*i[14],n[12]*i[3]+n[13]*i[7]+n[14]*i[11]+n[15]*i[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,n){var i=t.val,r=n.val,e=i[0],o=i[4],s=i[8],a=i[12],u=i[1],h=i[5],c=i[9],x=i[13],f=i[2],v=i[6],y=i[10],p=i[14],l=i[3],d=i[7],g=i[11],M=i[15],w=r[0],m=r[4],z=r[8],b=r[12],I=r[1],C=r[5],P=r[9],A=r[13],T=r[2],O=r[6],_=r[10],L=r[14],R=r[3],E=r[7],S=r[11],F=r[15];return this.setValues(e*w+o*I+s*T+a*R,u*w+h*I+c*T+x*R,f*w+v*I+y*T+p*R,l*w+d*I+g*T+M*R,e*m+o*C+s*O+a*E,u*m+h*C+c*O+x*E,f*m+v*C+y*O+p*E,l*m+d*C+g*O+M*E,e*z+o*P+s*_+a*S,u*z+h*P+c*_+x*S,f*z+v*P+y*_+p*S,l*z+d*P+g*_+M*S,e*b+o*A+s*L+a*F,u*b+h*A+c*L+x*F,f*b+v*A+y*L+p*F,l*b+d*A+g*L+M*F)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,n,i){var r=this.val;return r[12]=r[0]*t+r[4]*n+r[8]*i+r[12],r[13]=r[1]*t+r[5]*n+r[9]*i+r[13],r[14]=r[2]*t+r[6]*n+r[10]*i+r[14],r[15]=r[3]*t+r[7]*n+r[11]*i+r[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,n,i){var r=this.val;return r[0]=r[0]*t,r[1]=r[1]*t,r[2]=r[2]*t,r[3]=r[3]*t,r[4]=r[4]*n,r[5]=r[5]*n,r[6]=r[6]*n,r[7]=r[7]*n,r[8]=r[8]*i,r[9]=r[9]*i,r[10]=r[10]*i,r[11]=r[11]*i,this},makeRotationAxis:function(t,n){var i=Math.cos(n),r=Math.sin(n),e=1-i,o=t.x,s=t.y,a=t.z,u=e*o,h=e*s;return this.setValues(u*o+i,u*s-r*a,u*a+r*s,0,u*s+r*a,h*s+i,h*a-r*o,0,u*a-r*s,h*a+r*o,e*a*a+i,0,0,0,0,1)},rotate:function(t,n){var i=this.val,r=n.x,e=n.y,s=n.z,a=Math.sqrt(r*r+e*e+s*s);if(Math.abs(a)<o)return this;a=1/a,r*=a,e*=a,s*=a;var u=Math.sin(t),h=Math.cos(t),c=1-h,x=i[0],f=i[1],v=i[2],y=i[3],p=i[4],l=i[5],d=i[6],g=i[7],M=i[8],w=i[9],m=i[10],z=i[11],b=i[12],I=i[13],C=i[14],P=i[15],A=r*r*c+h,T=e*r*c+s*u,O=s*r*c-e*u,_=r*e*c-s*u,L=e*e*c+h,R=s*e*c+r*u,E=r*s*c+e*u,S=e*s*c-r*u,F=s*s*c+h;return this.setValues(x*A+p*T+M*O,f*A+l*T+w*O,v*A+d*T+m*O,y*A+g*T+z*O,x*_+p*L+M*R,f*_+l*L+w*R,v*_+d*L+m*R,y*_+g*L+z*R,x*E+p*S+M*F,f*E+l*S+w*F,v*E+d*S+m*F,y*E+g*S+z*F,b,I,C,P)},rotateX:function(t){var n=this.val,i=Math.sin(t),r=Math.cos(t),e=n[4],o=n[5],s=n[6],a=n[7],u=n[8],h=n[9],c=n[10],x=n[11];return n[4]=e*r+u*i,n[5]=o*r+h*i,n[6]=s*r+c*i,n[7]=a*r+x*i,n[8]=u*r-e*i,n[9]=h*r-o*i,n[10]=c*r-s*i,n[11]=x*r-a*i,this},rotateY:function(t){var n=this.val,i=Math.sin(t),r=Math.cos(t),e=n[0],o=n[1],s=n[2],a=n[3],u=n[8],h=n[9],c=n[10],x=n[11];return n[0]=e*r-u*i,n[1]=o*r-h*i,n[2]=s*r-c*i,n[3]=a*r-x*i,n[8]=e*i+u*r,n[9]=o*i+h*r,n[10]=s*i+c*r,n[11]=a*i+x*r,this},rotateZ:function(t){var n=this.val,i=Math.sin(t),r=Math.cos(t),e=n[0],o=n[1],s=n[2],a=n[3],u=n[4],h=n[5],c=n[6],x=n[7];return n[0]=e*r+u*i,n[1]=o*r+h*i,n[2]=s*r+c*i,n[3]=a*r+x*i,n[4]=u*r-e*i,n[5]=h*r-o*i,n[6]=c*r-s*i,n[7]=x*r-a*i,this},fromRotationTranslation:function(t,n){var i=t.x,r=t.y,e=t.z,o=t.w,s=i+i,a=r+r,u=e+e,h=i*s,c=i*a,x=i*u,f=r*a,v=r*u,y=e*u,p=o*s,l=o*a,d=o*u;return this.setValues(1-(f+y),c+d,x-l,0,c-d,1-(h+y),v+p,0,x+l,v-p,1-(h+f),0,n.x,n.y,n.z,1)},fromQuat:function(t){var n=t.x,i=t.y,r=t.z,e=t.w,o=n+n,s=i+i,a=r+r,u=n*o,h=n*s,c=n*a,x=i*s,f=i*a,v=r*a,y=e*o,p=e*s,l=e*a;return this.setValues(1-(x+v),h+l,c-p,0,h-l,1-(u+v),f+y,0,c+p,f-y,1-(u+x),0,0,0,0,1)},frustum:function(t,n,i,r,e,o){var s=1/(n-t),a=1/(r-i),u=1/(e-o);return this.setValues(2*e*s,0,0,0,0,2*e*a,0,0,(n+t)*s,(r+i)*a,(o+e)*u,-1,0,0,o*e*2*u,0)},perspective:function(t,n,i,r){var e=1/Math.tan(t/2),o=1/(i-r);return this.setValues(e/n,0,0,0,0,e,0,0,0,0,(r+i)*o,-1,0,0,2*r*i*o,0)},perspectiveLH:function(t,n,i,r){return this.setValues(2*i/t,0,0,0,0,2*i/n,0,0,0,0,-r/(i-r),1,0,0,i*r/(i-r),0)},ortho:function(t,n,i,r,e,o){var s=t-n,a=i-r,u=e-o;return s=0===s?s:1/s,a=0===a?a:1/a,u=0===u?u:1/u,this.setValues(-2*s,0,0,0,0,-2*a,0,0,0,0,2*u,0,(t+n)*s,(r+i)*a,(o+e)*u,1)},lookAtRH:function(t,n,i){var r=this.val;return x.subVectors(t,n),0===x.getLengthSquared()&&(x.z=1),x.normalize(),h.crossVectors(i,x),0===h.getLengthSquared()&&(1===Math.abs(i.z)?x.x+=1e-4:x.z+=1e-4,x.normalize(),h.crossVectors(i,x)),h.normalize(),c.crossVectors(x,h),r[0]=h.x,r[1]=h.y,r[2]=h.z,r[4]=c.x,r[5]=c.y,r[6]=c.z,r[8]=x.x,r[9]=x.y,r[10]=x.z,this},lookAt:function(t,n,i){var r=t.x,e=t.y,s=t.z,a=i.x,u=i.y,h=i.z,c=n.x,x=n.y,f=n.z;if(Math.abs(r-c)<o&&Math.abs(e-x)<o&&Math.abs(s-f)<o)return this.identity();var v=r-c,y=e-x,p=s-f,l=1/Math.sqrt(v*v+y*y+p*p);v*=l,y*=l,p*=l;var d=u*p-h*y,g=h*v-a*p,M=a*y-u*v;l=Math.sqrt(d*d+g*g+M*M),l?(l=1/l,d*=l,g*=l,M*=l):(d=0,g=0,M=0);var w=y*M-p*g,m=p*d-v*M,z=v*g-y*d;return l=Math.sqrt(w*w+m*m+z*z),l?(l=1/l,w*=l,m*=l,z*=l):(w=0,m=0,z=0),this.setValues(d,w,v,0,g,m,y,0,M,z,p,0,-(d*r+g*e+M*s),-(w*r+m*e+z*s),-(v*r+y*e+p*s),1)},yawPitchRoll:function(t,n,i){this.zero(),a.zero(),u.zero();var r=this.val,e=a.val,o=u.val,s=Math.sin(i),h=Math.cos(i);return r[10]=1,r[15]=1,r[0]=h,r[1]=s,r[4]=-s,r[5]=h,s=Math.sin(n),h=Math.cos(n),e[0]=1,e[15]=1,e[5]=h,e[10]=h,e[9]=-s,e[6]=s,s=Math.sin(t),h=Math.cos(t),o[5]=1,o[15]=1,o[0]=h,o[2]=-s,o[8]=s,o[10]=h,this.multiplyLocal(a),this.multiplyLocal(u),this},setWorldMatrix:function(t,n,i,r,e){return this.yawPitchRoll(t.y,t.x,t.z),a.scaling(i.x,i.y,i.z),u.xyz(n.x,n.y,n.z),this.multiplyLocal(a),this.multiplyLocal(u),r&&this.multiplyLocal(r),e&&this.multiplyLocal(e),this},multiplyToMat4:function(t,n){var i=this.val,r=t.val,e=i[0],o=i[1],s=i[2],a=i[3],u=i[4],h=i[5],c=i[6],x=i[7],f=i[8],v=i[9],y=i[10],p=i[11],l=i[12],d=i[13],g=i[14],M=i[15],w=r[0],m=r[1],z=r[2],b=r[3],I=r[4],C=r[5],P=r[6],A=r[7],T=r[8],O=r[9],_=r[10],L=r[11],R=r[12],E=r[13],S=r[14],F=r[15];return n.setValues(w*e+m*u+z*f+b*l,m*o+m*h+z*v+b*d,z*s+m*c+z*y+b*g,b*a+m*x+z*p+b*M,I*e+C*u+P*f+A*l,I*o+C*h+P*v+A*d,I*s+C*c+P*y+A*g,I*a+C*x+P*p+A*M,T*e+O*u+_*f+L*l,T*o+O*h+_*v+L*d,T*s+O*c+_*y+L*g,T*a+O*x+_*p+L*M,R*e+E*u+S*f+F*l,R*o+E*h+S*v+F*d,R*s+E*c+S*y+F*g,R*a+E*x+S*p+F*M)},fromRotationXYTranslation:function(t,n,i){var r=n.x,e=n.y,o=n.z,s=Math.sin(t.x),a=Math.cos(t.x),u=Math.sin(t.y),h=Math.cos(t.y),c=r,x=e,f=o,v=-s,y=0-v*u,p=0-a*u,l=v*h,d=a*h;return i||(c=h*r+u*o,x=y*r+a*e+l*o,f=p*r+s*e+d*o),this.setValues(h,y,p,0,0,a,s,0,u,l,d,0,c,x,f,1)},getMaxScaleOnAxis:function(){var t=this.val,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}}),a=new s,u=new s,h=new e,c=new e,x=new e;t.exports=s},8367:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return Math.min(t+n,i)};t.exports=n},4601:function(t){
/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){var n=t.length;if(0===n)return 0;t.sort((function(t,n){return t-n}));var i=Math.floor(n/2);return n%2===0?(t[i]+t[i-1])/2:t[i]};t.exports=n},1880:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return Math.max(t-n,i)};t.exports=n},2542:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){void 0===i&&(i=n+1);var e=(t-n)/(i-n);return e>1?void 0!==r?(e=(r-t)/(r-i),e<0&&(e=0)):e=1:e<0&&(e=0),e};t.exports=n},2148:function(t,n,i){i(8675),i(3462);
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(7125),o=i(9584),s=i(2220),a=1e-6,u=new Int8Array([1,2,0]),h=new Float32Array([0,0,0]),c=new s(1,0,0),x=new s(0,1,0),f=new s,v=new e,y=new r({initialize:function(t,n,i,r){this.onChangeCallback=o,this.set(t,n,i,r)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,n,i,r,e){return void 0===e&&(e=!0),"object"===typeof t?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=n||0,this._z=i||0,this._w=r||0),e&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,n=this.y,i=this.z,r=this.w;return Math.sqrt(t*t+n*n+i*i+r*r)},lengthSq:function(){var t=this.x,n=this.y,i=this.z,r=this.w;return t*t+n*n+i*i+r*r},normalize:function(){var t=this.x,n=this.y,i=this.z,r=this.w,e=t*t+n*n+i*i+r*r;return e>0&&(e=1/Math.sqrt(e),this._x=t*e,this._y=n*e,this._z=i*e,this._w=r*e),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,n){void 0===n&&(n=0);var i=this.x,r=this.y,e=this.z,o=this.w;return this.set(i+n*(t.x-i),r+n*(t.y-r),e+n*(t.z-e),o+n*(t.w-o))},rotationTo:function(t,n){var i=t.x*n.x+t.y*n.y+t.z*n.z;return i<-.999999?(f.copy(c).cross(t).length()<a&&f.copy(x).cross(t),f.normalize(),this.setAxisAngle(f,Math.PI)):i>.999999?this.set(0,0,0,1):(f.copy(t).cross(n),this._x=f.x,this._y=f.y,this._z=f.z,this._w=1+i,this.normalize())},setAxes:function(t,n,i){var r=v.val;return r[0]=n.x,r[3]=n.y,r[6]=n.z,r[1]=i.x,r[4]=i.y,r[7]=i.z,r[2]=-t.x,r[5]=-t.y,r[8]=-t.z,this.fromMat3(v).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,n){n*=.5;var i=Math.sin(n);return this.set(i*t.x,i*t.y,i*t.z,Math.cos(n))},multiply:function(t){var n=this.x,i=this.y,r=this.z,e=this.w,o=t.x,s=t.y,a=t.z,u=t.w;return this.set(n*u+e*o+i*a-r*s,i*u+e*s+r*o-n*a,r*u+e*a+n*s-i*o,e*u-n*o-i*s-r*a)},slerp:function(t,n){var i=this.x,r=this.y,e=this.z,o=this.w,s=t.x,u=t.y,h=t.z,c=t.w,x=i*s+r*u+e*h+o*c;x<0&&(x=-x,s=-s,u=-u,h=-h,c=-c);var f=1-n,v=n;if(1-x>a){var y=Math.acos(x),p=Math.sin(y);f=Math.sin((1-n)*y)/p,v=Math.sin(n*y)/p}return this.set(f*i+v*s,f*r+v*u,f*e+v*h,f*o+v*c)},invert:function(){var t=this.x,n=this.y,i=this.z,r=this.w,e=t*t+n*n+i*i+r*r,o=e?1/e:0;return this.set(-t*o,-n*o,-i*o,r*o)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var n=this.x,i=this.y,r=this.z,e=this.w,o=Math.sin(t),s=Math.cos(t);return this.set(n*s+e*o,i*s+r*o,r*s-i*o,e*s-n*o)},rotateY:function(t){t*=.5;var n=this.x,i=this.y,r=this.z,e=this.w,o=Math.sin(t),s=Math.cos(t);return this.set(n*s-r*o,i*s+e*o,r*s+n*o,e*s-i*o)},rotateZ:function(t){t*=.5;var n=this.x,i=this.y,r=this.z,e=this.w,o=Math.sin(t),s=Math.cos(t);return this.set(n*s+i*o,i*s-n*o,r*s+e*o,e*s-r*o)},calculateW:function(){var t=this.x,n=this.y,i=this.z;return this.w=-Math.sqrt(1-t*t-n*n-i*i),this},setFromEuler:function(t,n){var i=t.x/2,r=t.y/2,e=t.z/2,o=Math.cos(i),s=Math.cos(r),a=Math.cos(e),u=Math.sin(i),h=Math.sin(r),c=Math.sin(e);switch(t.order){case"XYZ":this.set(u*s*a+o*h*c,o*h*a-u*s*c,o*s*c+u*h*a,o*s*a-u*h*c,n);break;case"YXZ":this.set(u*s*a+o*h*c,o*h*a-u*s*c,o*s*c-u*h*a,o*s*a+u*h*c,n);break;case"ZXY":this.set(u*s*a-o*h*c,o*h*a+u*s*c,o*s*c+u*h*a,o*s*a-u*h*c,n);break;case"ZYX":this.set(u*s*a-o*h*c,o*h*a+u*s*c,o*s*c-u*h*a,o*s*a+u*h*c,n);break;case"YZX":this.set(u*s*a+o*h*c,o*h*a+u*s*c,o*s*c-u*h*a,o*s*a-u*h*c,n);break;case"XZY":this.set(u*s*a-o*h*c,o*h*a-u*s*c,o*s*c+u*h*a,o*s*a+u*h*c,n);break}return this},setFromRotationMatrix:function(t){var n,i=t.val,r=i[0],e=i[4],o=i[8],s=i[1],a=i[5],u=i[9],h=i[2],c=i[6],x=i[10],f=r+a+x;return f>0?(n=.5/Math.sqrt(f+1),this.set((c-u)*n,(o-h)*n,(s-e)*n,.25/n)):r>a&&r>x?(n=2*Math.sqrt(1+r-a-x),this.set(.25*n,(e+s)/n,(o+h)/n,(c-u)/n)):a>x?(n=2*Math.sqrt(1+a-r-x),this.set((e+s)/n,.25*n,(u+c)/n,(o-h)/n)):(n=2*Math.sqrt(1+x-r-a),this.set((o+h)/n,(u+c)/n,.25*n,(s-e)/n)),this},fromMat3:function(t){var n,i=t.val,r=i[0]+i[4]+i[8];if(r>0)n=Math.sqrt(r+1),this.w=.5*n,n=.5/n,this._x=(i[7]-i[5])*n,this._y=(i[2]-i[6])*n,this._z=(i[3]-i[1])*n;else{var e=0;i[4]>i[0]&&(e=1),i[8]>i[3*e+e]&&(e=2);var o=u[e],s=u[o];n=Math.sqrt(i[3*e+e]-i[3*o+o]-i[3*s+s]+1),h[e]=.5*n,n=.5/n,h[o]=(i[3*o+e]+i[3*e+o])*n,h[s]=(i[3*s+e]+i[3*e+s])*n,this._x=h[0],this._y=h[1],this._z=h[2],this._w=(i[3*s+o]-i[3*o+s])*n}return this.onChangeCallback(this),this}});t.exports=y},9489:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=function(t){return t*r.RAD_TO_DEG};t.exports=e},1103:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=1);var i=2*Math.random()*Math.PI;return t.x=Math.cos(i)*n,t.y=Math.sin(i)*n,t};t.exports=n},3834:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){void 0===n&&(n=1);var i=2*Math.random()*Math.PI,r=2*Math.random()-1,e=Math.sqrt(1-r*r)*n;return t.x=Math.cos(i)*e,t.y=Math.sin(i)*e,t.z=r*n,t};t.exports=n},7679:function(t){
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
var n=function(t,n){var i=t.x,r=t.y;return t.x=i*Math.cos(n)-r*Math.sin(n),t.y=i*Math.sin(n)+r*Math.cos(n),t};t.exports=n},2671:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){var e=Math.cos(r),o=Math.sin(r),s=t.x-n,a=t.y-i;return t.x=s*e-a*o+n,t.y=s*o+a*e+i,t};t.exports=n},1216:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r,e){var o=r+Math.atan2(t.y-i,t.x-n);return t.x=n+e*Math.cos(o),t.y=i+e*Math.sin(o),t};t.exports=n},3145:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r,e){return t.x=n+e*Math.cos(r),t.y=i+e*Math.sin(r),t};t.exports=n},3068:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2220),e=i(5332),o=i(2148),s=new e,a=new o,u=new r,h=function(t,n,i){return a.setAxisAngle(n,i),s.fromRotationTranslation(a,u.set(0,0,0)),t.transformMat4(s)};t.exports=h},4462:function(t){
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
var n=function(t,n,i){void 0===n&&(n=0),void 0===i&&(i=10);var r=Math.pow(i,-n);return Math.round(t*r)/r};t.exports=n},6691:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){void 0===n&&(n=1),void 0===i&&(i=1),void 0===r&&(r=1),r*=Math.PI/t;for(var e=[],o=[],s=0;s<t;s++)i-=n*r,n+=i*r,e[s]=i,o[s]=n;return{sin:o,cos:e,length:t}};t.exports=n},458:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t<=n?0:t>=i?1:(t=(t-n)/(i-n),t*t*(3-2*t))};t.exports=n},9317:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return t=Math.max(0,Math.min(1,(t-n)/(i-n))),t*t*t*(t*(6*t-15)+10)};t.exports=n},4586:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9182),e=function(t,n,i,e){void 0===e&&(e=new r);var o=0,s=0,a=n*i;return t>0&&t<=a&&(t>n-1?(s=Math.floor(t/n),o=t-s*n):o=t),e.set(o,s)};t.exports=e},4912:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9182),e=function(t,n,i,e,o,s,a,u){void 0===u&&(u=new r);var h=Math.sin(o),c=Math.cos(o),x=c*s,f=h*s,v=-h*a,y=c*a,p=1/(x*y+v*-f);return u.x=y*p*t+-v*p*n+(e*v-i*y)*p,u.y=x*p*n+-f*p*t+(-e*x+i*f)*p,u};t.exports=e},9182:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=i(7290),o=new r({initialize:function(t,n){this.x=0,this.y=0,"object"===typeof t?(this.x=t.x||0,this.y=t.y||0):(void 0===n&&(n=t),this.x=t||0,this.y=n||0)},clone:function(){return new o(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,n){return void 0===n&&(n=t),this.x=t,this.y=n,this},setTo:function(t,n){return this.set(t,n)},setToPolar:function(t,n){return null==n&&(n=1),this.x=Math.cos(t)*n,this.y=Math.sin(t)*n,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,n){return e(this.x,t.x,n)&&e(this.y,t.y,n)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var n=t.x-this.x,i=t.y-this.y;return Math.sqrt(n*n+i*i)},distanceSq:function(t){var n=t.x-this.x,i=t.y-this.y;return n*n+i*i},length:function(){var t=this.x,n=this.y;return Math.sqrt(t*t+n*n)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,n=this.y;return t*t+n*n},normalize:function(){var t=this.x,n=this.y,i=t*t+n*n;return i>0&&(i=1/Math.sqrt(i),this.x=t*i,this.y=n*i),this},normalizeRightHand:function(){var t=this.x;return this.x=-1*this.y,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=-1*t,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,n){void 0===n&&(n=0);var i=this.x,r=this.y;return this.x=i+n*(t.x-i),this.y=r+n*(t.y-r),this},transformMat3:function(t){var n=this.x,i=this.y,r=t.val;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this},transformMat4:function(t){var n=this.x,i=this.y,r=t.val;return this.x=r[0]*n+r[4]*i+r[12],this.y=r[1]*n+r[5]*i+r[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var n=this.length();return n&&n>t&&this.scale(t/n),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var n=Math.cos(t),i=Math.sin(t);return this.set(n*this.x-i*this.y,i*this.x+n*this.y)}});o.ZERO=new o,o.RIGHT=new o(1,0),o.LEFT=new o(-1,0),o.UP=new o(0,-1),o.DOWN=new o(0,1),o.ONE=new o(1,1),t.exports=o},2220:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=new r({initialize:function(t,n,i){this.x=0,this.y=0,this.z=0,"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=n||0,this.z=i||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new e(this.x,this.y,this.z)},addVectors:function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this},crossVectors:function(t,n){var i=t.x,r=t.y,e=t.z,o=n.x,s=n.y,a=n.z;return this.x=r*a-e*s,this.y=e*o-i*a,this.z=i*s-r*o,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,n,i){return"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=n||0,this.z=i||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,n){return this.fromArray(t.val,4*n)},fromArray:function(t,n){return void 0===n&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var n=t.x-this.x,i=t.y-this.y,r=t.z-this.z||0;return Math.sqrt(n*n+i*i+r*r)},distanceSq:function(t){var n=t.x-this.x,i=t.y-this.y,r=t.z-this.z||0;return n*n+i*i+r*r},length:function(){var t=this.x,n=this.y,i=this.z;return Math.sqrt(t*t+n*n+i*i)},lengthSq:function(){var t=this.x,n=this.y,i=this.z;return t*t+n*n+i*i},normalize:function(){var t=this.x,n=this.y,i=this.z,r=t*t+n*n+i*i;return r>0&&(r=1/Math.sqrt(r),this.x=t*r,this.y=n*r,this.z=i*r),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var n=this.x,i=this.y,r=this.z,e=t.x,o=t.y,s=t.z;return this.x=i*s-r*o,this.y=r*e-n*s,this.z=n*o-i*e,this},lerp:function(t,n){void 0===n&&(n=0);var i=this.x,r=this.y,e=this.z;return this.x=i+n*(t.x-i),this.y=r+n*(t.y-r),this.z=e+n*(t.z-e),this},applyMatrix3:function(t){var n=this.x,i=this.y,r=this.z,e=t.val;return this.x=e[0]*n+e[3]*i+e[6]*r,this.y=e[1]*n+e[4]*i+e[7]*r,this.z=e[2]*n+e[5]*i+e[8]*r,this},applyMatrix4:function(t){var n=this.x,i=this.y,r=this.z,e=t.val,o=1/(e[3]*n+e[7]*i+e[11]*r+e[15]);return this.x=(e[0]*n+e[4]*i+e[8]*r+e[12])*o,this.y=(e[1]*n+e[5]*i+e[9]*r+e[13])*o,this.z=(e[2]*n+e[6]*i+e[10]*r+e[14])*o,this},transformMat3:function(t){var n=this.x,i=this.y,r=this.z,e=t.val;return this.x=n*e[0]+i*e[3]+r*e[6],this.y=n*e[1]+i*e[4]+r*e[7],this.z=n*e[2]+i*e[5]+r*e[8],this},transformMat4:function(t){var n=this.x,i=this.y,r=this.z,e=t.val;return this.x=e[0]*n+e[4]*i+e[8]*r+e[12],this.y=e[1]*n+e[5]*i+e[9]*r+e[13],this.z=e[2]*n+e[6]*i+e[10]*r+e[14],this},transformCoordinates:function(t){var n=this.x,i=this.y,r=this.z,e=t.val,o=n*e[0]+i*e[4]+r*e[8]+e[12],s=n*e[1]+i*e[5]+r*e[9]+e[13],a=n*e[2]+i*e[6]+r*e[10]+e[14],u=n*e[3]+i*e[7]+r*e[11]+e[15];return this.x=o/u,this.y=s/u,this.z=a/u,this},transformQuat:function(t){var n=this.x,i=this.y,r=this.z,e=t.x,o=t.y,s=t.z,a=t.w,u=a*n+o*r-s*i,h=a*i+s*n-e*r,c=a*r+e*i-o*n,x=-e*n-o*i-s*r;return this.x=u*a+x*-e+h*-s-c*-o,this.y=h*a+x*-o+c*-e-u*-s,this.z=c*a+x*-s+u*-o-h*-e,this},project:function(t){var n=this.x,i=this.y,r=this.z,e=t.val,o=e[0],s=e[1],a=e[2],u=e[3],h=e[4],c=e[5],x=e[6],f=e[7],v=e[8],y=e[9],p=e[10],l=e[11],d=e[12],g=e[13],M=e[14],w=e[15],m=1/(n*u+i*f+r*l+w);return this.x=(n*o+i*h+r*v+d)*m,this.y=(n*s+i*c+r*y+g)*m,this.z=(n*a+i*x+r*p+M)*m,this},projectViewMatrix:function(t,n){return this.applyMatrix4(t).applyMatrix4(n)},unprojectViewMatrix:function(t,n){return this.applyMatrix4(t).applyMatrix4(n)},unproject:function(t,n){var i=t.x,r=t.y,e=t.z,o=t.w,s=this.x-i,a=o-this.y-1-r,u=this.z;return this.x=2*s/e-1,this.y=2*a/o-1,this.z=2*u-1,this.project(n)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});e.ZERO=new e,e.RIGHT=new e(1,0,0),e.LEFT=new e(-1,0,0),e.UP=new e(0,-1,0),e.DOWN=new e(0,1,0),e.FORWARD=new e(0,0,1),e.BACK=new e(0,0,-1),e.ONE=new e(1,1,1),t.exports=e},3963:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=new r({initialize:function(t,n,i,r){this.x=0,this.y=0,this.z=0,this.w=0,"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=n||0,this.z=i||0,this.w=r||0)},clone:function(){return new e(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,n,i,r){return"object"===typeof t?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=n||0,this.z=i||0,this.w=r||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,n=this.y,i=this.z,r=this.w;return Math.sqrt(t*t+n*n+i*i+r*r)},lengthSq:function(){var t=this.x,n=this.y,i=this.z,r=this.w;return t*t+n*n+i*i+r*r},normalize:function(){var t=this.x,n=this.y,i=this.z,r=this.w,e=t*t+n*n+i*i+r*r;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=n*e,this.z=i*e,this.w=r*e),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,n){void 0===n&&(n=0);var i=this.x,r=this.y,e=this.z,o=this.w;return this.x=i+n*(t.x-i),this.y=r+n*(t.y-r),this.z=e+n*(t.z-e),this.w=o+n*(t.w-o),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var n=t.x-this.x,i=t.y-this.y,r=t.z-this.z||0,e=t.w-this.w||0;return Math.sqrt(n*n+i*i+r*r+e*e)},distanceSq:function(t){var n=t.x-this.x,i=t.y-this.y,r=t.z-this.z||0,e=t.w-this.w||0;return n*n+i*i+r*r+e*e},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var n=this.x,i=this.y,r=this.z,e=this.w,o=t.val;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*e,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*e,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*e,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*e,this},transformQuat:function(t){var n=this.x,i=this.y,r=this.z,e=t.x,o=t.y,s=t.z,a=t.w,u=a*n+o*r-s*i,h=a*i+s*n-e*r,c=a*r+e*i-o*n,x=-e*n-o*i-s*r;return this.x=u*a+x*-e+h*-s-c*-o,this.y=h*a+x*-o+c*-e-u*-s,this.z=c*a+x*-s+u*-o-h*-e,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});e.prototype.sub=e.prototype.subtract,e.prototype.mul=e.prototype.multiply,e.prototype.div=e.prototype.divide,e.prototype.dist=e.prototype.distance,e.prototype.distSq=e.prototype.distanceSq,e.prototype.len=e.prototype.length,e.prototype.lenSq=e.prototype.lengthSq,t.exports=e},2030:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return Math.abs(t-n)<=i};t.exports=n},2923:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){var r=i-n;return n+((t-n)%r+r)%r};t.exports=n},8097:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){return Math.atan2(r-n,i-t)};t.exports=n},6348:function(t){
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
var n=function(t,n,i,r){return Math.atan2(i-t,r-n)};t.exports=n},9454:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=function(t){return t>Math.PI&&(t-=r.PI2),Math.abs(((t+r.TAU)%r.PI2-r.PI2)%r.PI2)};t.exports=e},924:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t%=2*Math.PI,t>=0?t:t+2*Math.PI};t.exports=n},1243:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       @samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(289),e=function(){return r(-Math.PI,Math.PI)};t.exports=e},4920:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       @samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(289),e=function(){return r(-180,180)};t.exports=e},9597:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(924),e=function(t){return r(t+Math.PI)};t.exports=e},2897:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=function(t,n,i){return void 0===i&&(i=.05),t===n||(Math.abs(n-t)<=i||Math.abs(n-t)>=r.PI2-i?t=n:(Math.abs(n-t)>Math.PI&&(n<t?n+=r.PI2:n-=r.PI2),n>t?t+=i:n<t&&(t-=i))),t};t.exports=e},7243:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=n-t;if(0===i)return 0;var r=Math.floor((i- -180)/360);return i-360*r};t.exports=n},4816:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2923),e=function(t){return r(t,-Math.PI,Math.PI)};t.exports=e},300:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2923),e=function(t){return r(t,-180,180)};t.exports=e},1692:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Between:i(8097),BetweenPoints:i(6348),BetweenPointsY:i(1715),BetweenY:i(2663),CounterClockwise:i(9454),Normalize:i(924),Random:i(1243),RandomDegrees:i(4920),Reverse:i(9597),RotateTo:i(2897),ShortestBetween:i(7243),Wrap:i(4816),WrapDegrees:i(300)}},611:function(t){
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
var n=function(t,n,i,r){var e=t-i,o=n-r;return Math.sqrt(e*e+o*o)};t.exports=n},5091:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=t.x-n.x,r=t.y-n.y;return Math.sqrt(i*i+r*r)};t.exports=n},8220:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){var i=t.x-n.x,r=t.y-n.y;return i*i+r*r};t.exports=n},6471:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){return Math.max(Math.abs(t-i),Math.abs(n-r))};t.exports=n},3702:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r,e){return void 0===e&&(e=2),Math.sqrt(Math.pow(i-t,e)+Math.pow(r-n,e))};t.exports=n},6828:function(t){
/**
 * @author       samme
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){return Math.abs(t-i)+Math.abs(n-r)};t.exports=n},7944:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){var e=t-i,o=n-r;return e*e+o*o};t.exports=n},6693:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Between:i(6052),BetweenPoints:i(5091),BetweenPointsSquared:i(8220),Chebyshev:i(6471),Power:i(3702),Snake:i(6828),Squared:i(7944)}},6298:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(2672),e=i(9004),o=i(214),s=i(8583),a=i(3921),u=i(829),h=i(7638),c=i(2981),x=i(6511),f=i(3052),v=i(3141),y=i(2759);t.exports={Power0:h,Power1:c.Out,Power2:s.Out,Power3:x.Out,Power4:f.Out,Linear:h,Quad:c.Out,Cubic:s.Out,Quart:x.Out,Quint:f.Out,Sine:v.Out,Expo:u.Out,Circ:o.Out,Elastic:a.Out,Back:r.Out,Bounce:e.Out,Stepped:y,"Quad.easeIn":c.In,"Cubic.easeIn":s.In,"Quart.easeIn":x.In,"Quint.easeIn":f.In,"Sine.easeIn":v.In,"Expo.easeIn":u.In,"Circ.easeIn":o.In,"Elastic.easeIn":a.In,"Back.easeIn":r.In,"Bounce.easeIn":e.In,"Quad.easeOut":c.Out,"Cubic.easeOut":s.Out,"Quart.easeOut":x.Out,"Quint.easeOut":f.Out,"Sine.easeOut":v.Out,"Expo.easeOut":u.Out,"Circ.easeOut":o.Out,"Elastic.easeOut":a.Out,"Back.easeOut":r.Out,"Bounce.easeOut":e.Out,"Quad.easeInOut":c.InOut,"Cubic.easeInOut":s.InOut,"Quart.easeInOut":x.InOut,"Quint.easeInOut":f.InOut,"Sine.easeInOut":v.InOut,"Expo.easeInOut":u.InOut,"Circ.easeInOut":o.InOut,"Elastic.easeInOut":a.InOut,"Back.easeInOut":r.InOut,"Bounce.easeInOut":e.InOut}},5577:function(t){
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
var n=function(t,n){void 0===n&&(n=1.70158);var i=1.525*n;return(t*=2)<1?t*t*((i+1)*t-i)*.5:.5*((t-=2)*t*((i+1)*t+i)+2)};t.exports=n},6418:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1.70158),--t*t*((n+1)*t+n)+1};t.exports=n},2672:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(5577),Out:i(6418),InOut:i(1197)}},6648:function(t){
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
var n=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};t.exports=n},9004:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(6648),Out:i(3631),InOut:i(5092)}},4888:function(t){
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
var n=function(t){return Math.sqrt(1- --t*t)};t.exports=n},214:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(4888),Out:i(97),InOut:i(7250)}},5971:function(t){
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
var n=function(t){return--t*t*t+1};t.exports=n},8583:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(5971),Out:i(6786),InOut:i(7572)}},7946:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){if(void 0===n&&(n=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var r=i/4;return n<1?n=1:r=i*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-r)*(2*Math.PI)/i)};t.exports=n},228:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){if(void 0===n&&(n=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var r=i/4;return n<1?n=1:r=i*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-r)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-r)*(2*Math.PI)/i)*.5+1};t.exports=n},8822:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){if(void 0===n&&(n=.1),void 0===i&&(i=.1),0===t)return 0;if(1===t)return 1;var r=i/4;return n<1?n=1:r=i*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-r)*(2*Math.PI)/i)+1};t.exports=n},3921:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(7946),Out:i(8822),InOut:i(228)}},5675:function(t){
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
var n=function(t){return 1-Math.pow(2,-10*t)};t.exports=n},829:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(5675),Out:i(5014),InOut:i(9206)}},6684:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Back:i(2672),Bounce:i(9004),Circular:i(214),Cubic:i(8583),Elastic:i(3921),Expo:i(829),Linear:i(7638),Quadratic:i(2981),Quartic:i(6511),Quintic:i(3052),Sine:i(3141),Stepped:i(2759)}},4893:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t){return t};t.exports=n},7638:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports=i(4893)},9433:function(t){
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
var n=function(t){return t*(2-t)};t.exports=n},2981:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(9433),Out:i(1649),InOut:i(9078)}},9310:function(t){
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
var n=function(t){return 1- --t*t*t*t};t.exports=n},6511:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(9310),Out:i(4210),InOut:i(753)}},6850:function(t){
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
var n=function(t){return--t*t*t*t*t+1};t.exports=n},3052:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(6850),Out:i(5687),InOut:i(5159)}},8689:function(t){
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
var n=function(t){return 0===t?0:1===t?1:Math.sin(t*Math.PI/2)};t.exports=n},3141:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={In:i(8689),Out:i(8811),InOut:i(9345)}},2082:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n){return void 0===n&&(n=1),t<=0?0:t>=1?1:1/n*(1+(n*t|0))};t.exports=n},2759:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports=i(2082)},8027:function(t){
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
var n=function(t,n,i){return void 0===i&&(i=1e-4),Math.abs(t-n)<i};t.exports=n},8163:function(t){
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
var n=function(t,n,i){return void 0===i&&(i=1e-4),t>n-i};t.exports=n},7156:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){return void 0===i&&(i=1e-4),t<n+i};t.exports=n},6531:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Ceil:i(8027),Equal:i(7290),Floor:i(8163),GreaterThan:i(4516),LessThan:i(7156)}},3129:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(611),e=i(2037),o={Angle:i(1692),Distance:i(6693),Easing:i(6684),Fuzzy:i(6531),Interpolation:i(1678),Pow2:i(1154),Snap:i(6437),RandomDataGenerator:i(7688),Average:i(9011),Bernstein:i(4908),Between:i(7443),CatmullRom:i(3179),CeilTo:i(9457),Clamp:i(1495),DegToRad:i(3490),Difference:i(2125),Euler:i(7368),Factorial:i(6038),FloatBetween:i(289),FloorTo:i(9354),FromPercent:i(3579),GetSpeed:i(1164),IsEven:i(3),IsEvenStrict:i(7635),Linear:i(7684),MaxAdd:i(8367),Median:i(4601),MinSub:i(1880),Percent:i(2542),RadToDeg:i(9489),RandomXY:i(1103),RandomXYZ:i(3834),RandomXYZW:i(7679),Rotate:i(6234),RotateAround:i(2671),RotateAroundDistance:i(1216),RotateTo:i(3145),RoundAwayFromZero:i(4462),RoundTo:i(898),SinCosTableGenerator:i(6691),SmootherStep:i(9317),SmoothStep:i(458),ToXY:i(4586),TransformXY:i(4912),Within:i(2030),Wrap:i(2923),Vector2:i(9182),Vector3:i(2220),Vector4:i(3963),Matrix3:i(7125),Matrix4:i(5332),Quaternion:i(2148),RotateVec3:i(3068)};o=e(!1,o,r),t.exports=o},4110:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(4908),e=function(t,n){for(var i=0,e=t.length-1,o=0;o<=e;o++)i+=Math.pow(1-n,e-o)*Math.pow(n,o)*t[o]*r(e,o);return i};t.exports=e},4725:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3179),e=function(t,n){var i=t.length-1,e=i*n,o=Math.floor(e);return t[0]===t[i]?(n<0&&(o=Math.floor(e=i*(1+n))),r(e-o,t[(o-1+i)%i],t[o],t[(o+1)%i],t[(o+2)%i])):n<0?t[0]-(r(-e,t[0],t[0],t[1],t[1])-t[0]):n>1?t[i]-(r(e-i,t[i],t[i],t[i-1],t[i-1])-t[i]):r(e-o,t[o?o-1:0],t[o],t[i<o+1?i:o+1],t[i<o+2?i:o+2])};t.exports=e},144:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function n(t,n){var i=1-t;return i*i*i*n}function i(t,n){var i=1-t;return 3*i*i*t*n}function r(t,n){return 3*(1-t)*t*t*n}function e(t,n){return t*t*t*n}var o=function(t,o,s,a,u){return n(t,o)+i(t,s)+r(t,a)+e(t,u)};t.exports=o},2457:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(7684),e=function(t,n){var i=t.length-1,e=i*n,o=Math.floor(e);return n<0?r(t[0],t[1],e):n>1?r(t[i],t[i-1],i-e):r(t[o],t[o+1>i?i:o+1],e-o)};t.exports=e},6750:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function n(t,n){var i=1-t;return i*i*n}function i(t,n){return 2*(1-t)*t*n}function r(t,n){return t*t*n}var e=function(t,e,o,s){return n(t,e)+i(t,o)+r(t,s)};t.exports=e},2192:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(458),e=function(t,n,i){return n+(i-n)*r(t,0,1)};t.exports=e},2677:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(9317),e=function(t,n,i){return n+(i-n)*r(t,0,1)};t.exports=e},1678:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Bezier:i(4110),CatmullRom:i(4725),CubicBezier:i(144),Linear:i(2457),QuadraticBezier:i(6750),SmoothStep:i(2192),SmootherStep:i(2677)}},5287:function(t){
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
var n=function(t){return t>0&&0===(t&t-1)};t.exports=n},1154:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={GetNext:i(5287),IsSize:i(1132),IsValue:i(3272)}},7688:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3018),e=new r({initialize:function(t){void 0===t&&(t=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],t&&this.init(t)},rnd:function(){var t=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|t,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var n,i=this.n;t=t.toString();for(var r=0;r<t.length;r++)i+=t.charCodeAt(r),n=.02519603282416938*i,i=n>>>0,n-=i,n*=i,i=n>>>0,n-=i,i+=4294967296*n;return this.n=i,2.3283064365386963e-10*(i>>>0)},init:function(t){"string"===typeof t?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,t)for(var n=0;n<t.length&&null!=t[n];n++){var i=t[n];this.s0-=this.hash(i),this.s0+=~~(this.s0<0),this.s1-=this.hash(i),this.s1+=~~(this.s1<0),this.s2-=this.hash(i),this.s2+=~~(this.s2<0)}},integer:function(){return 4294967296*this.rnd()},frac:function(){return this.rnd()+11102230246251565e-32*(2097152*this.rnd()|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(t,n){return Math.floor(this.realInRange(0,n-t+1)+t)},between:function(t,n){return Math.floor(this.realInRange(0,n-t+1)+t)},realInRange:function(t,n){return this.frac()*(n-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",n="";for(n=t="";t++<36;n+=~t%5|3*t&4?(15^t?8^this.frac()*(20^t?16:4):4).toString(16):"-");return n},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-1)+.5)]},timestamp:function(t,n){return this.realInRange(t||9466848e5,n||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return"string"===typeof t&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var n=t.length-1,i=n;i>0;i--){var r=Math.floor(this.frac()*(i+1)),e=t[r];t[r]=t[i],t[i]=e}return t}});t.exports=e},2487:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){return void 0===i&&(i=0),0===n?t:(t-=i,t=n*Math.ceil(t/n),r?(i+t)/n:i+t)};t.exports=n},7650:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){return void 0===i&&(i=0),0===n?t:(t-=i,t=n*Math.floor(t/n),r?(i+t)/n:i+t)};t.exports=n},9616:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i,r){return void 0===i&&(i=0),0===n?t:(t-=i,t=n*Math.round(t/n),r?(i+t)/n:i+t)};t.exports=n},6437:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
t.exports={Ceil:i(2487),Floor:i(7650),To:i(9616)}},8766:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function n(t){for(var n="",i=0;i<t;++i)i>0&&(n+="\nelse "),i<t-1&&(n+="if(test == "+i+".0){}");return n}t.exports={getTintFromFloats:function(t,n,i,r){var e=255&(255*t|0),o=255&(255*n|0),s=255&(255*i|0),a=255&(255*r|0);return(a<<24|e<<16|o<<8|s)>>>0},getTintAppendFloatAlpha:function(t,n){var i=255&(255*n|0);return(i<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,n){var i=255&(t>>16|0),r=255&(t>>8|0),e=255&(0|t),o=255&(255*n|0);return(o<<24|e<<16|r<<8|i)>>>0},getFloatsFromUintRGB:function(t){var n=255&(t>>16|0),i=255&(t>>8|0),r=255&(0|t);return[n/255,i/255,r/255]},checkShaderMax:function(t,i){i&&-1!==i||(i=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));var r=t.createShader(t.FRAGMENT_SHADER),e=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join("\n");while(1){var o=e.replace(/%forloop%/gi,n(i));if(t.shaderSource(r,o),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))break;i=i/2|0}return i},parseFragmentShaderMaxTextures:function(t,n){if(!t)return"";for(var i="",r=0;r<n;r++)r>0&&(i+="\n\telse "),r<n-1&&(i+="if (outTexId < "+r+".5)"),i+="\n\t{",i+="\n\t\ttexture = texture2D(uMainSampler["+r+"], outTexCoord);",i+="\n\t}";return t=t.replace(/%count%/gi,n.toString()),t.replace(/%forloop%/gi,i)}}},2124:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(6298),e=i(8204),o=function(t,n){var i=r.Power0;if("string"===typeof t)if(r.hasOwnProperty(t))i=r[t];else{var o="";t.indexOf(".")&&(o=t.substr(t.indexOf(".")+1),"in"===o.toLowerCase()?o="easeIn":"out"===o.toLowerCase()?o="easeOut":"inout"===o.toLowerCase()&&(o="easeInOut")),t=e(t.substr(0,t.indexOf(".")+1)+o),r.hasOwnProperty(t)&&(i=r[t])}else"function"===typeof t?i=t:Array.isArray(t)&&t.length;if(!n)return i;var s=n.slice(0);return s.unshift(0),function(t){return s[0]=t,i.apply(this,s)}};t.exports=o},3018:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
function r(t){return!!t.get&&"function"===typeof t.get||!!t.set&&"function"===typeof t.set}function e(t,n,i){var e=i?t[n]:Object.getOwnPropertyDescriptor(t,n);return!i&&e.value&&"object"===typeof e.value&&(e=e.value),!(!e||!r(e))&&("undefined"===typeof e.enumerable&&(e.enumerable=!0),"undefined"===typeof e.configurable&&(e.configurable=!0),e)}function o(t,n){var i=Object.getOwnPropertyDescriptor(t,n);return!!i&&(i.value&&"object"===typeof i.value&&(i=i.value),!1===i.configurable)}function s(t,n,i,r){for(var s in n)if(n.hasOwnProperty(s)){var a=e(n,s,i);if(!1!==a){var h=r||t;if(o(h.prototype,s)){if(u.ignoreFinals)continue;throw new Error("cannot override final property '"+s+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,s,a)}else t.prototype[s]=n[s]}}function a(t,n){if(n){Array.isArray(n)||(n=[n]);for(var i=0;i<n.length;i++)s(t,n[i].prototype||n[i])}}function u(t){var n,i;if(t||(t={}),t.initialize){if("function"!==typeof t.initialize)throw new Error("initialize must be a function");n=t.initialize,delete t.initialize}else if(t.Extends){var r=t.Extends;n=function(){r.apply(this,arguments)}}else n=function(){};t.Extends?(n.prototype=Object.create(t.Extends.prototype),n.prototype.constructor=n,i=t.Extends,delete t.Extends):n.prototype.constructor=n;var e=null;return t.Mixins&&(e=t.Mixins,delete t.Mixins),a(n,e),s(n,t,!0,i),n}i(1703),u.extend=s,u.mixin=a,u.ignoreFinals=!1,t.exports=u},9584:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(){};t.exports=n},2037:function(t,n,i){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var r=i(3642),e=function(){var t,n,i,o,s,a,u=arguments[0]||{},h=1,c=arguments.length,x=!1;for("boolean"===typeof u&&(x=u,u=arguments[1]||{},h=2),c===h&&(u=this,--h);h<c;h++)if(null!=(t=arguments[h]))for(n in t)i=u[n],o=t[n],u!==o&&(x&&o&&(r(o)||(s=Array.isArray(o)))?(s?(s=!1,a=i&&Array.isArray(i)?i:[]):a=i&&r(i)?i:{},u[n]=e(x,a,o)):void 0!==o&&(u[n]=o));return u};t.exports=e},6128:function(t){
/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var n=function(t,n,i){var r=typeof t;return t&&"number"!==r&&"string"!==r&&t.hasOwnProperty(n)&&void 0!==t[n]?t[n]:i};t.exports=n},3642:function(t){
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
//# sourceMappingURL=56.92ca5bc8.js.map