(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{272:function(t,e,n){var r;t.exports=(r=n(10),function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=10)}([function(t,e){t.exports=function(t,e,i,n){var r,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:r,exports:o,options:s}}},function(t,e,i){i(13);var n=i(0)(i(16),i(17),"data-v-217e3916",null);t.exports=n.exports},function(t,i){t.exports=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},size:{type:Number,default:50},index:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},spacing:{type:Number,default:0},customProps:{type:Object,default:function(){return{}}},rtl:{type:Boolean,default:!1}},created:function(){this.fillId=Math.random().toString(36).substring(7)},computed:{pointsToString:function(){return this.points.join(",")},getFillId:function(){return"url(#"+this.fillId+")"},getWidth:function(){return parseInt(this.size)+parseInt(this.borderWidth*this.borders)},getHeight:function(){return this.originalHeight/this.originalWidth*this.getWidth},getFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},getSpacing:function(){return this.spacing+this.borderWidth/2+"px"}},methods:{mouseMoving:function(t){this.$emit("mouse-move",{event:t,position:this.getPosition(t),id:this.index})},getPosition:function(t){var e=.92*(this.size+this.borderWidth),i=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*i);return Math.min(n,100)},selected:function(t){this.$emit("selected",{id:this.index,position:this.getPosition(t)})}},data:function(){return{fillId:"",originalWidth:50,orignalHeight:50,borders:1}}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(o(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(o(i.parts[r]));c[i.id]={id:i.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(f)return g;n.parentNode.removeChild(n)}if(h){var o=p++;n=v||(v=r()),e=a.bind(null,n,o,!1),i=a.bind(null,n,o,!0)}else n=r(),e=s.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(15),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),v=null,p=0,f=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var r=l(t,e);return n(r),function(e){for(var i=[],o=0;o<r.length;o++){var a=r[o];(s=c[a.id]).refs--,i.push(s)}for(e?n(r=l(t,e)):r=[],o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){var n=i(0)(i(28),i(29),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{increment:{type:Number,default:1},rating:{type:Number,default:0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},itemSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:2},spacing:{type:Number,default:0},fixedPoints:{type:Number,default:null},rtl:{type:Boolean,default:!1}},model:{prop:"rating",event:"rating-selected"},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.rating,this.createRating()},methods:{setRating:function(t,e){if(!this.readOnly){var i=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+i-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createRating(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating)):this.$emit("current-rating",this.currentRating)}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createRating())},createRating:function(){this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e))}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createRating()}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,customProps:{}}}}},function(t,e,i){var n=i(0)(i(20),i(21),null,null);t.exports=n.exports},function(t,e,i){i(34);var n=i(0)(i(36),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Polygon=e.Path=e.RateIt=e.FaBaseGlyph=e.BaseRating=e.ImageRating=e.FaRating=e.HeartRating=e.StarRating=e.mixins=void 0;var r=n(i(11)),s=n(i(22)),o=n(i(30)),l=n(i(37)),p=n(i(1)),g=n(i(42)),c=n(i(44)),d=n(i(9)),v=n(i(6)),f=n(i(8)),h={StarRating:r.default,HeartRating:s.default,FaRating:o.default,ImageRating:l.default};e.default=h,e.mixins=c.default,e.StarRating=r.default,e.HeartRating=s.default,e.FaRating=o.default,e.ImageRating=l.default,e.BaseRating=p.default,e.FaBaseGlyph=d.default,e.RateIt=g.default,e.Path=v.default,e.Polygon=f.default},function(t,e,i){var n=i(0)(i(12),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(1)),s=n(i(18));e.default=r.default.extend({name:"Star-Rating",components:{Star:s.default},data:function(){return{type:"star"}}})},function(t,e,i){var n=i(14);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),i(5)("77372b13",n,!0)},function(t,e,i){(t.exports=i(4)()).push([t.i,".vue-rate-it-rating-item[data-v-217e3916]{display:inline-block}.vue-rate-it-pointer[data-v-217e3916]{cursor:pointer}.vue-rate-it-rating[data-v-217e3916]{display:flex;align-items:center}.vue-rate-it-inline[data-v-217e3916]{display:inline-flex}.vue-rate-it-rating-text[data-v-217e3916]{margin-top:7px;margin-left:7px}.vue-rate-it-rtl[data-v-217e3916]{direction:rtl}.vue-rate-it-rtl .vue-rate-it-rating-text[data-v-217e3916]{margin-right:10px;direction:rtl}",""])},function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],l={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(l):i.push(n[a]={id:a,parts:[l]})}return i}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(2)),s=n(i(7));e.default=r.default.extend({mixins:[s.default],data:function(){return{type:""}}})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["vue-rate-it-rating",{"vue-rate-it-rtl":t.rtl},{"vue-rate-it-inline":t.inline},"vue-rate-it-rating-container"]},[i("div",{staticClass:"vue-rate-it-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,(function(e){return i("div",{class:[{"vue-rate-it-pointer":!t.readOnly},"vue-rate-it-rating-item"]},[i(t.type,{tag:"component",attrs:{fill:t.fillLevel[e-1],size:t.itemSize,index:e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,spacing:t.spacing,"custom-props":t.customProps,rtl:t.rtl},on:{selected:function(e){t.setRating(e,!0)},"mouse-move":t.setRating}})],1)})),t._v(" "),t.showRating?i("span",{class:["vue-rate-it-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]}},function(t,e,i){var n=i(0)(i(19),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(8));e.default=n.default.extend({data:function(){return{points:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],originalWidth:43,originalHeight:43,borders:3}}})},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(2)),s=n(i(3));e.default=r.default.extend({mixins:[s.default],created:function(){this.calculatePoints()},methods:{calculatePoints:function(){var t=this;this.points=this.points.map((function(e){return t.size/t.originalWidth*e+t.borderWidth*(t.borders/2)}))}},data:function(){return{points:[]}}})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{overflow:"visible"},attrs:{width:t.getWidth,height:t.getHeight},on:{mousemove:t.mouseMoving,click:t.selected}},[i("linearGradient",{attrs:{id:t.fillId,x1:"0",x2:"100%",y1:"0",y2:"0"}},[i("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),i("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),i("polygon",{attrs:{points:t.pointsToString,fill:t.getFillId,stroke:t.borderColor,"stroke-width":t.borderWidth}}),t._v(" "),i("polygon",{attrs:{points:t.pointsToString,fill:t.getFillId}})],1)},staticRenderFns:[]}},function(t,e,i){i(23);var n=i(0)(i(25),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(24);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),i(5)("2494179e",n,!0)},function(t,e,i){(t.exports=i(4)()).push([t.i,".rating-container.inline{display:inline-flex;margin-left:5px;margin-right:1px}",""])},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(1)),s=n(i(26));e.default=r.default.extend({name:"Heart-Rating",components:{Heart:s.default},props:{borderWidth:{type:Number,default:3},activeColor:{type:String,default:"#d80000"},inactiveColor:{type:String,default:"#ffc4c4"},borderColor:{type:String,default:"#8b0000"}},data:function(){return{type:"heart"}}})},function(t,e,i){var n=i(0)(i(27),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(6));e.default=n.default.extend({data:function(){return{points:["M 297.29747 550.86823 C 283.52243 535.43191 249.1268 505.33855 220.86277 483.99412 C 137.11867 420.75228 125.72108 411.5999 91.719238 380.29088 C 29.03471 322.57071 2.413622 264.58086 2.5048478 185.95124 C 2.5493594 147.56739 5.1656152 132.77929 15.914734 110.15398 C 34.151433 71.768267 61.014996 43.244667 95.360052 25.799457 C 119.68545 13.443675 131.6827 7.9542046 172.30448 7.7296236 C 214.79777 7.4947896 223.74311 12.449347 248.73919 26.181459 C 279.1637 42.895777 310.47909 78.617167 316.95242 103.99205 L 320.95052 119.66445 L 330.81015 98.079942 C 386.52632 -23.892986 564.40851 -22.06811 626.31244 101.11153 C 645.95011 140.18758 648.10608 223.6247 630.69256 270.6244 C 607.97729 331.93377 565.31255 378.67493 466.68622 450.30098 C 402.0054 497.27462 328.80148 568.34684 323.70555 578.32901 C 317.79007 589.91654 323.42339 580.14491 297.29747 550.86823 z"],originalWidth:700,originalHeight:565}}})},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(2)),s=n(i(3));e.default=r.default.extend({mixins:[s.default],computed:{getViewbox:function(){return"0 0 "+this.originalWidth+" "+this.originalHeight},getFill:function(){var t=this.fill/100*Math.abs(this.x1Val),e=this.x1Val>0?this.fill-t:this.fill+t;return this.rtl?100-e+"%":e+"%"},x1Val:function(){return parseInt(this.coords.x1.replace("%"))}},data:function(){return{points:[],pathAttrs:{},coords:{x1:"0%",x2:"100%",y1:"0%",y2:"0%"}}}})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{display:"inline-block","margin-right":t.getSpacing}},[i("svg",{staticStyle:{overflow:"visible"},attrs:{width:t.getWidth,height:t.getHeight,viewBox:t.getViewbox},on:{mousemove:t.mouseMoving,click:t.selected}},[i("linearGradient",t._b({attrs:{id:t.fillId}},"linearGradient",t.coords,!1),[i("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),i("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),i("path",t._b({attrs:{d:t.pointsToString,fill:t.getFillId,stroke:t.borderColor,"stroke-width":t.borderWidth,"vector-effect":"non-scaling-stroke"}},"path",t.pathAttrs,!1)),t._v(" "),i("path",t._b({attrs:{d:t.pointsToString,fill:t.getFillId}},"path",t.pathAttrs,!1))],1)])},staticRenderFns:[]}},function(t,e,i){var n=i(0)(i(31),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(1)),s=n(i(32));e.default=r.default.extend({name:"Fa-Rating",components:{FaGlyph:s.default},props:{glyph:{type:String,required:!0},activeColor:{type:String,default:"#000"}},created:function(){this.customProps.glyph=this.glyph},data:function(){return{type:"fa-glyph"}}})},function(t,e,i){var n=i(0)(i(33),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(9));e.default=n.default.extend({created:function(){this.updateGlyph()},methods:{updateGlyph:function(){this.points=[this.customProps.glyph]}}})},function(t,e,i){var n=i(35);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),i(5)("62348d90",n,!0)},function(t,e,i){(t.exports=i(4)()).push([t.i,".rating-container.inline{display:inline-flex;margin-left:5px;margin-right:1px}",""])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(6));e.default=n.default.extend({props:{customProps:{required:!0,type:Object}},created:function(){this.coords.x1="-2%"},data:function(){return{points:[],originalWidth:179,originalHeight:179,pathAttrs:{transform:"scale(0.1)"}}}})},function(t,e,i){var n=i(0)(i(38),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(1)),s=n(i(39));e.default=r.default.extend({name:"Image-Rating",props:{backgroundOpacity:{default:.2,type:Number},src:{type:String,required:!0}},created:function(){this.customProps.opacity=this.backgroundOpacity,this.customProps.src=this.src},components:{CImage:s.default},data:function(){return{type:"c-image"}}})},function(t,e,i){var n=i(0)(i(40),i(41),null,null);t.exports=n.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(2)),s=n(i(3));e.default=r.default.extend({mixins:[s.default],created:function(){var t=this;this.opacity=this.customProps.opacity,this.src=this.customProps.src;var e=new Image;e.onload=function(){t.originalHeight=e.height,t.originalWidth=e.width},e.src=this.src},computed:{getOpacity:function(){return"opacity:"+this.opacity},getFill:function(){return this.fill+"%"},getX:function(){return this.rtl?100-this.fill+"%":0}},data:function(){return{points:[],originalWidth:400,originalHeight:300,borders:0,opacity:.1}}})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{display:"inline-block","margin-right":t.getSpacing}},[i("svg",{attrs:{width:t.getWidth,height:t.getHeight},on:{mousemove:t.mouseMoving,click:t.selected}},[i("mask",{attrs:{x:"0",y:"0",id:t.fillId}},[i("rect",{attrs:{fill:"#fff",width:t.getFill,height:"100%",x:t.getX}})]),t._v(" "),i("image",{attrs:{"xlink:href":t.src,mask:t.getFillId,height:t.getHeight,width:t.getWidth}}),t._v(" "),i("image",{style:t.getOpacity,attrs:{"xlink:href":t.src,height:t.getHeight,width:t.getWidth}})])])},staticRenderFns:[]}},function(t,e,i){var n=i(0)(i(43),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(1));e.default=n.default.extend({name:"rate-it",props:{with:{type:Function,required:!0}},created:function(){void 0!==this.with&&(this.type=this.with)},watch:{with:function(t){this.type=t}}})},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(7)),s=n(i(3));e.default={Rating:r.default,RatingItem:s.default}}]))},276:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("7194eb0c",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("91a475c0",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n.r(e);var r={props:["product","reviews"],components:{StarRating:n(272).StarRating}},o=(n(289),n(36)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("hr"),t._v(" "),n("div",{staticClass:"reviewsMedley"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-5 col-sm-12"},[n("div",{staticClass:"a-color-base"},[n("h2",[t._v(t._s(t.product.reviews.length)+" customer reviews")])]),t._v(" "),n("div",{staticClass:"cr-widget-ACR"},[n("client-only",[n("star-rating",{attrs:{rating:t.product.averageRating,"show-rating":!1,glow:1,"border-width":1,"rounded-corners":!0,"read-only":!0,"star-size":12,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1),t._v(" "),n("span",[n("a",{attrs:{href:"#"}},[t._v("\n              "+t._s(t.product.averageRating)+"\n              "),n("i",{staticClass:"a-icon a-icon-popover"})])])],1),t._v(" "),t._m(0),t._v(" "),n("h3",{staticClass:"a-spacing-micro"},[t._v("Review this product")]),t._v(" "),n("div",{staticClass:"a-row a-spacing-large"},[t._v("Share your thoughts with other customers")]),t._v(" "),n("div",{staticClass:"a-row"},[n("span",{staticClass:"a-button-base writeReviewButton cm-cr-button-wide"},[n("span",{staticClass:"a-button-inner"},[n("nuxt-link",{staticClass:"a-button-text",attrs:{to:"/reviews/"+t.product._id}},[t._v("Write a customer review")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-7 col-sm-12"},[n("div",{staticClass:"reviews-image-gallery"},[n("h3",[t._v("Customer images")]),t._v(" "),n("div",{staticClass:"a-spacing-small a-spacing-top-small"},t._l(t.reviews,(function(t){return n("img",{key:t._id,staticClass:"img-fluid",attrs:{width:"22.5%",src:t.photo}})})),0),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"cr-widget-focalreviews"},[n("div",{staticClass:"card-padding"},[n("div",{staticClass:"review-header"},[n("h3",[n("span",{staticClass:"a-size-base"},[t._v("Showing 1-8 of "+t._s(t.product.reviews.length)+" reviews")])])]),t._v(" "),t._m(3),t._v(" "),t._l(t.reviews,(function(e){return n("div",{key:e._id,staticClass:"review-body"},[n("div",{staticClass:"genome-widget"},[n("a",{attrs:{href:"#"}},[t._m(4,!0),t._v(" "),n("div",{staticClass:"profile-content"},[n("span",{staticClass:"a-profile-name"},[t._v(t._s(e.user.userName))])])])]),t._v(" "),n("div",{staticClass:"a-row"},[n("a",{attrs:{href:"#"}},t._l(e.rating,(function(i){return n("i",{key:i,staticClass:"fas fa-star"})})),0),t._v(" "),n("span",{staticClass:"a-letter-space"}),t._v(" "),n("a",{staticClass:"review-title",attrs:{href:"#"}},[t._v(t._s(e.headline))])]),t._v(" "),n("span",{staticClass:"review-date"},[t._v("June 28, 2016")]),t._v(" "),t._m(5,!0),t._v(" "),n("div",{staticClass:"review-body overflow-auto",staticStyle:{"white-space":"wrap !important","text-overflow":"clip !important"}},[n("span",[t._v(t._s(e.body))])]),t._v(" "),t._m(6,!0)])}))],2)]),t._v(" "),n("div",{staticClass:"review-footer"},[n("div",{staticClass:"a-row"},[n("span",{staticClass:"a-button a-button-base writeReviewButton",attrs:{id:"a-autoid-15"}},[n("span",{staticClass:"a-button-inner"},[n("nuxt-link",{staticClass:"a-button-text",staticStyle:{"margin-left":"10px !important","margin-right":"10px !important"},attrs:{to:"/reviews/"+t.product._id,role:"button"}},[t._v("Write a customer review")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-0 col-sm-0"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix"},[e("div",{staticClass:"float-left"},[e("hr",{staticClass:"a-spacing-large"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix"},[e("div",{staticClass:"float-left"},[e("hr",{staticClass:"mt-4 a-spacing-large"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"#"}},[this._v("See all customer images")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-sort-type"},[e("span",{staticClass:"a-dropdown-container"},[e("span",{staticClass:"a-button a-button-dropdown"},[e("span",{staticClass:"a-button-inner"},[e("span",{staticClass:"a-button-text",staticStyle:{"margin-left":"5px !important"}},[e("span",{staticClass:"a-dropdown-prompt"},[this._v("Top Reviews")])]),this._v(" "),e("i",{staticClass:"a-icon a-icon-dropdown"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-avatar"},[e("img",{attrs:{src:"https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-data"},[e("span",{staticClass:"a-color-secondary"},[this._v("Format: Hardcover")]),this._v(" "),e("div",{staticStyle:{width:"1px !important",height:"15px !important","background-color":"#ddd",display:"inline-block",margin:"0px 5px -3px 5px"}}),this._v(" "),e("span",{staticClass:"avp-badge a-color-state"},[this._v("Verified Purchase")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-comments"},[e("div",{staticClass:"a-spacing-small"},[e("span",{staticClass:"a-size-base a-color-tertiary"},[this._v("60 people found this helpful")])]),this._v(" "),e("div",{staticClass:"cr-helpful-button"},[e("span",{staticClass:"a-button-base"},[e("span",{staticClass:"a-button-inner"},[e("a",{staticClass:"a-button-text",attrs:{href:"#"}},[e("div",{staticClass:"cr-helpful-text"},[this._v("Helpful")])])])])])])}],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";var r=n(276);n.n(r).a},290:function(t,e,n){(e=n(58)(!1)).push([t.i,".vue-rate-it-rating-item svg{transform:scale(.6)}.product-image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px;background:#ccc}",""]),t.exports=e},291:function(t,e,n){"use strict";var r=n(277);n.n(r).a},292:function(t,e,n){(e=n(58)(!1)).push([t.i,".authorNameCol a{font-size:18px!important;font-weight:400!important}.authorImageSingle img{border-radius:5px}.authorContent{padding:0!important}.cr-lighthouse-term{border-radius:3px;border:none}",""]),t.exports=e},310:function(t,e,n){"use strict";n.r(e);n(4),n(1),n(2),n(6),n(7),n(5),n(19),n(55),n(3),n(60);var r=n(0),o=n(39),l=(n(54),n(21)),c=n(61),d=n(281);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=n(272),h={components:{ReviewSection:d.default,StarRating:f.StarRating},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d,v,f,h,m,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,e.prev=1,l=n.$get("/api/products/".concat(r.id)),c=n.$get("/api/review/".concat(r.id)),d=n.$post("/api/payment/shipment",{shipment:"normal"}),e.next=7,Promise.all([l,c,d]);case 7:return v=e.sent,f=Object(o.a)(v,3),h=f[0],m=f[1],_=f[2],e.abrupt("return",{product:h.product,reviews:m.reviews,estimatedDelivery:_.shipment.estimated});case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["addProductToCart"]))},m=(n(291),n(36)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"a-spacing-top-medium"}),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"wayfinding-breadcrumbs-container"},[n("ul",{staticClass:"a-unordered-list a-horizontal a-size-small",staticStyle:{"margin-left":"0px !important"}},[n("li",[n("span",{staticClass:"a-list-item"},[n("a",{staticClass:"a-link-normal a-color-tertiary",attrs:{href:"#"}},[t._v(t._s(t.product.category.type))])])]),t._v(" "),t._m(0),t._v(" "),n("li",[n("span",{staticClass:"a-list-item"},[n("a",{staticClass:"a-link-normal a-color-tertiary",attrs:{href:"#"}},[t._v(t._s(t.product.title))])])])])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"dp-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-3 col-sm-4"},[n("div",{staticClass:"leftCol"},[n("div",{attrs:{clas:"imgBlock"}},[n("div",{staticClass:"eBooksimg"},[n("img",{staticClass:"img-fluid",attrs:{src:t.product.photo}})])]),t._v(" "),n("div",{staticClass:"authorFollow"},[n("hr",{staticClass:"a-divider-normal"}),t._v(" "),n("h1",{staticClass:"authorFollowHeading"},[t._v("Follow The Author")]),t._v(" "),n("div",{staticClass:"a-spacing-top-small"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3"},[n("div",{staticClass:"smallAuthorImageContainer"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"img-fluid",attrs:{src:t.product.owner.photo}})])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3 px-0"},[n("div",{staticClass:"authorNameCol"},[n("a",{attrs:{href:"#"}},[t._v(t._s(t.product.owner.name))])])]),t._v(" "),t._m(1)])])])])]),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-sm-8"},[n("div",{staticClass:"centerCol"},[n("div",{staticClass:"titleDiv"},[n("h1",{staticClass:"productTitle"},[n("span",{staticClass:"largeTitle"},[t._v(t._s(t.product.title))]),t._v(" "),n("span",{staticClass:"smallTitle"},[t._v("Paperback")])])]),t._v(" "),n("div",{staticClass:"bylineinfo"},[t._v("\n              by\n              "),n("a",{staticClass:"authorName",attrs:{href:"#"}},[t._v("\n                "+t._s(t.product.owner.name)+"\n                "),n("i",{staticClass:"fas fa-chevron-down",staticStyle:{"font-size":"8px !important",color:"#555 !important"}})]),t._v(" (Author)\n            ")]),t._v(" "),n("div",{staticClass:"reviewGroup"},[n("client-only",[n("star-rating",{attrs:{rating:t.product.averageRating,"show-rating":!1,glow:2,"border-width":1,"rounded-corners":!0,"read-only":!0,"star-size":18,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1)],1),t._v(" "),n("hr",{staticStyle:{"margin-top":"10px"}}),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"bookDescription"},[n("div",{staticClass:"bookDescriptionInner"},[t._v(t._s(t.product.description))])]),t._v(" "),t._m(3)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-6"},[n("div",{staticClass:"combinedBuyBox"},[n("div",{staticClass:"buyBox"},[n("div",{staticClass:"a-section"},[n("div",{staticClass:"clearfix"},[t._m(4),t._v(" "),n("div",{staticClass:"float-right"},[n("span",{staticClass:"a-size-medium a-color-price offer-price a-text-normal"},[t._v("$"+t._s(t.product.price))])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t.$auth.$state.loggedIn?n("div",{staticClass:"a-section"},[n("div",{staticClass:"a-button-stack",on:{click:function(e){return t.addProductToCart(t.product)}}},[t._m(8)]),t._v(" "),n("div",{staticClass:"a-button-stack",on:{click:function(e){return t.addProductToCart(t.product)}}},[n("nuxt-link",{staticClass:"a-spacing-small a-button-primary a-button-icon",attrs:{to:"/cart"}},[n("span",{staticClass:"a-button-inner"},[n("i",{staticClass:"a-icon a-icon-buynow"}),t._v(" "),n("input",{staticClass:"a-button-input",attrs:{type:"submit",name:"submit.add-to-cart"}}),t._v(" "),n("span",{staticClass:"a-button-text"},[t._v("Buy Now")])])])],1)]):n("div",{staticClass:"a-section"},[n("div",{staticClass:"a-button-stack"},[n("nuxt-link",{staticClass:"a-spacing-small a-button-primary a-button-icon",attrs:{to:"/login"}},[n("span",{staticClass:"a-button-inner"},[n("i",{staticClass:"a-icon a-icon-cart"}),t._v(" "),n("input",{staticClass:"a-button-input",attrs:{type:"submit",name:"submit.add-to-cart"}}),t._v(" "),n("span",{staticClass:"a-button-text"},[t._v("Add to Cart")])])])],1),t._v(" "),n("div",{staticClass:"a-button-stack"},[n("nuxt-link",{staticClass:"a-spacing-small a-button-primary a-button-icon",attrs:{to:"/login"}},[n("span",{staticClass:"a-button-inner"},[n("i",{staticClass:"a-icon a-icon-buynow"}),t._v(" "),n("input",{staticClass:"a-button-input",attrs:{type:"submit",name:"submit.add-to-cart"}}),t._v(" "),n("span",{staticClass:"a-button-text"},[t._v("Buy Now")])])])],1)]),t._v(" "),t.$auth.$state.loggedIn?n("div",{staticClass:"a-row"},[n("div",{staticClass:"a-spacing-top-small"},[n("div",{staticClass:"a-section a-spacing-none"},[n("div",{staticClass:"a-section a-spacing-none a-spacing-top-mini"},[t._v("\n                      This item may ship to\n                      "),n("b",[t._v(t._s(t.$auth.$state.user.address.city))]),t._v(" "),n("b",[t._v("Get it by "+t._s(t.estimatedDelivery))])])])])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.$auth.$state.loggedIn?n("span",{staticClass:"a-declarative"},[n("nuxt-link",{staticClass:"a-link-normal",attrs:{to:"/address"}},[n("div",{staticClass:"a-row a-spacing-mini"},[n("i",{staticClass:"fal fa-map-market-alt"}),t._v(" "),n("span",{staticClass:"a-size-small"},[t._v("Deliver to "+t._s(t.$auth.$state.user.address.city))])])])],1):t._e(),t._v(" "),n("br"),t._v(" "),n("hr")])])])]),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"books-entity-teaser"},[n("div",{staticClass:"bucket"},[n("h2",[t._v("More about the author")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2 col-sm-4 col-4"},[n("div",{staticClass:"authorContent"},[n("div",{staticClass:"authorImageSingle"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"img-fluid",attrs:{src:t.product.owner.photo}})])]),t._v(" "),t._m(9)])]),t._v(" "),n("div",{staticClass:"col-md-10 col-sm-8 col-8 pl-0"},[n("div",{staticClass:"mainContent"},[n("h3",[t._v("Biography")]),t._v(" "),n("div",{attrs:{id:"authorBio"}},[t._v(t._s(t.product.owner.about))])])])])])]),t._v(" "),n("ReviewSection",{attrs:{product:t.product,reviews:t.reviews}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"a-list-item"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6"},[e("div",{staticClass:"authorBtn mt-2"},[e("a",{attrs:{href:"#"}},[e("span",{staticClass:"btnFollow"},[e("span",{staticClass:"a-btn-inner"},[e("button",{staticClass:"a-btn-text"},[this._v("+ Follow")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mediaMatrix"},[n("div",{staticClass:"formats"},[n("a",{staticClass:"link-expander",attrs:{href:"#"}},[t._v("\n                  >\n                  "),n("span",{staticClass:"tmmShowPrompt"},[t._v("See all 18 formats and editions")])]),t._v(" "),n("ul",[n("li",{staticClass:"swatchElement",staticStyle:{width:"117px"}},[n("span",{staticClass:"a-list-item"},[n("span",{staticClass:"a-button-toggle"},[n("span",{staticClass:"a-button-inner"},[n("a",{staticClass:"a-button-text text-center",attrs:{href:"#"}},[n("span",[t._v("Kindle")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"a-color-secondary"},[t._v("-")])])])]),t._v(" "),n("span",{staticClass:"tmm-olp-links"}),t._v(" "),n("span",{staticClass:"tmm-olp-links"},[n("a",{staticClass:"a-size-mini",attrs:{href:"#"}},[n("span",{staticClass:"kcpAppBox"},[n("span",{staticClass:"a-declarative"},[t._v("\n                              Read with Our\n                              "),n("span",{staticClass:"a-text-bold"},[t._v("Free App")])])])])])])]),t._v(" "),n("li",{staticClass:"swatchElement",staticStyle:{width:"117px"}},[n("span",{staticClass:"a-list-item"},[n("span",{staticClass:"a-button-toggle"},[n("span",{staticClass:"a-button-inner"},[n("a",{staticClass:"a-button-text text-center",attrs:{href:"#"}},[n("span",[n("img",{staticClass:"img-fluid",staticStyle:{width:"20px"},attrs:{src:"/img/audibleLogo.png"}}),t._v("Audible\n                            ")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"a-color-secondary"},[t._v("-")])])])]),t._v(" "),n("span",{staticClass:"tmm-olp-links"}),t._v(" "),n("span",{staticClass:"tmm-olp-links"},[n("a",{staticClass:"a-size-mini text-center",attrs:{href:"#"}},[n("span",{staticClass:"kcpAppBox"},[n("span",{staticClass:"a-declarative"},[n("span",{staticClass:"a-text-bold"},[t._v("Free App")]),t._v(" with your Audible Trial\n                            ")])])])])])]),t._v(" "),n("li",{staticClass:"swatchElement",staticStyle:{width:"117px"}},[n("span",{staticClass:"a-list-item"},[n("span",{staticClass:"a-button-toggle"},[n("span",{staticClass:"a-button-inner"},[n("a",{staticClass:"a-button-text text-center",attrs:{href:"#"}},[n("span",[t._v("Paperback")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"a-color-secondary"},[t._v("-")])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutEbooksFeature"},[e("hr"),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4 mb-1"},[e("div",{staticClass:"a-declarative"},[this._v("\n                    Length:\n                    "),e("span",[e("a",{attrs:{href:"#"}},[this._v("\n                        386 pages\n                        "),e("i",{staticClass:"a-icon a-icon-popover"})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left"},[e("form",[e("input",{attrs:{type:"radio",id:"test1",name:"radio-group checked"}}),this._v(" "),e("label",{attrs:{for:"test1"}},[this._v("Buy Now")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a-section a-spacing-none"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-5 col-5"},[n("select",[n("option",{attrs:{value:"1"}},[t._v("Qty:   1")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Qty:   2")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("Qty:   3")]),t._v(" "),n("option",{attrs:{value:"4"}},[t._v("Qty:   4")]),t._v(" "),n("option",{attrs:{value:"5"}},[t._v("Qty:   5")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-section a-spacing-small a-spacing-top-micro"},[e("div",{staticClass:"row"},[e("span",{staticClass:"a-color-base buyboxShippingLabel"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-section a-spacing-small"},[e("div",{staticClass:"a-section a-spacing-none"},[e("span",{staticClass:"a-size-medium a-color-success"},[this._v("In Stock")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"a-spacing-small a-button-primary a-button-icon"},[e("span",{staticClass:"a-button-inner"},[e("i",{staticClass:"a-icon a-icon-cart"}),this._v(" "),e("input",{staticClass:"a-button-input",attrs:{type:"submit",name:"submit.add-to-cart"}}),this._v(" "),e("span",{staticClass:"a-button-text"},[this._v("Add to Cart")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"authorFollow"},[e("button",{staticClass:"followButton",attrs:{type:"button"}},[e("span",{staticClass:"pr-fb-icon"}),this._v(" "),e("span",{staticClass:"pr-fb-text"},[this._v("Follow")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ReviewSection:n(281).default})}}]);