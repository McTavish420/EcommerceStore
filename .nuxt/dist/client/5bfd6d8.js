(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{309:function(t,e,r){"use strict";r.r(e);r(19),r(55),r(60);var n=r(39),o=(r(54),r(21)),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,v,m,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.params,e.prev=1,c=r.$get("https://ecommstore2019.herokuapp.com/api/addresses/get/countries"),l=r.$get("https://ecommstore2019.herokuapp.com/api/addresses/".concat(o.id)),e.next=6,Promise.all([c,l]);case 6:return d=e.sent,v=Object(n.a)(d,2),m=v[0],_=v[1],e.abrupt("return",{countries:m.countries,address:_.address});case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()},data:function(){return{country:"Japan",fullName:"",streetAddress:"",city:"",state:"",zipCode:"",phoneNumber:"",deliveryInstructions:"",securityCode:""}},methods:{onUpdate:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,data={country:e.country,fullName:e.fullName,streetAddress:e.streetAddress,city:e.city,state:e.state,zipCode:e.zipCode,phoneNumber:e.phoneNumber,deliveryInstructions:e.deliveryInstructions,securityCode:e.securityCode},r.next=4,e.$axios.$put("https://ecommstore2019.herokuapp.com/api/addresses/".concat(t),data);case 4:r.sent.success&&e.$router.push("/address"),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}},l=r(36),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"registerAddress mt-3"},[r("div",{staticClass:"container-fluid c-section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3"}),t._v(" "),r("div",{staticClass:"col-sm-6"},[t._m(0),t._v(" "),r("div",{staticClass:"a-section"},[r("h2",[t._v("Update Your Address")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("form",[r("div",{staticClass:"a-spacing-medium a-spacing-top-medium"},[r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Country/Region")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"a-select-option",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.country=e.target.multiple?r:r[0]}}},[t._l(t.countries,(function(e){return r("option",{key:e.alpha2code,domProps:{value:e.name}},[t._v(t._s(e.name))])})),t._v(" "),r("option")],2)]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Full Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.fullName},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Street Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.streetAddress,expression:"streetAddress"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.streetAddress},domProps:{value:t.streetAddress},on:{input:function(e){e.target.composing||(t.streetAddress=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("City")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.city},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("State / Province / Region")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.state},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Zip Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.zipCode,expression:"zipCode"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.zipCode},domProps:{value:t.zipCode},on:{input:function(e){e.target.composing||(t.zipCode=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Phone Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.phoneNumber},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Do we need additional instructions to find this address?")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.deliveryInstructions,expression:"deliveryInstructions"}],staticStyle:{height:"6em",width:"100%"},attrs:{placeholder:t.address.deliveryInstructions},domProps:{value:t.deliveryInstructions},on:{input:function(e){e.target.composing||(t.deliveryInstructions=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Do we need a security code or a call box number to access this building?")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.securityCode,expression:"securityCode"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.address.securityCode},domProps:{value:t.securityCode},on:{input:function(e){e.target.composing||(t.securityCode=e.target.value)}}})]),t._v(" "),t._m(5),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"}),t._v(" "),r("hr"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"a-spacing-top-large"},[r("span",{staticClass:"a-button-register"},[r("span",{staticClass:"a-button-inner"},[r("span",{staticClass:"a-button-text",on:{click:function(e){return t.onUpdate(t.address._id)}}},[t._v("Update Address")])])])])])])])]),t._v(" "),r("div",{staticClass:"col-sm-3"})])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-section a-spacing-medium"},[r("div",{staticClass:"a-subheader a-breadcrumb a-spacing-small"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Your Account")])])]),t._v(" "),r("li",{staticClass:"a-breadcrumb-divider"},[t._v("›")]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Your Adresses")])])]),t._v(" "),r("li",{staticClass:"a-breadcrumb-divider"},[t._v("›")]),t._v(" "),r("li",{staticClass:"active"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("New Address")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-section a-spacing-none a-spacing-top-small"},[e("b",[this._v("\n                Or pick up your packages at your convenience from our self-service locations. To add an Amazon Pickup Point or Locker, click\n                "),e("a",{attrs:{href:"#"}},[this._v("here")]),this._v(".\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-section a-spacing-none a-spacing-top-small"},[e("b")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-section a-spacing-none a-spacing-top-micro"},[e("span",{staticClass:"a-size-mini"},[this._v("May be used to assist delivery")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-spacing-base a-spacing-top-medium"},[e("h3",[this._v("Add delivery instructions")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-spacing-top-medium"},[e("label",{staticStyle:{"margin-bottom":"0px"}},[this._v("Weekend delivery")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-angle-down"}),this._v(" Which days can you receive packages?\n                  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-spacing-top-medium"},[e("span",[e("b",[this._v("Make sure your address is correct")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("If the address contains typos or other errors, your package may be undeliverable.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-spacing-top-small"},[e("span",[e("a",{attrs:{href:"#"}},[this._v("Tips for entering addresses")])]),this._v(" "),e("span",[this._v("|")]),this._v(" "),e("span",[e("a",{attrs:{href:"#"}},[this._v("APO/FPO address tips")])])])}],!1,null,null,null);e.default=component.exports}}]);