(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{304:function(t,e,r){"use strict";r.r(e);r(4),r(1),r(2),r(6),r(7),r(5),r(3);var c=r(0),n=(r(54),r(21)),o=r(61);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={layout:"none",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,c,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,c=t.store,e.prev=1,e.next=4,r.$post("https://ecommstore2019.herokuapp.com/api/payment/shipment",{shipment:"normal"});case 4:return n=e.sent,c.commit("setShipping",{price:n.shipment.price,estimatedDelivery:n.shipment.estimated}),e.abrupt("return",{shippingPrice:n.shipment.price,estimatedDelivery:n.shipment.estimated});case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["getCart","getCartTotalPrice","getCartTotalPriceWithTotalPrice"])),methods:{onChooseShipping:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$post("https://ecommstore2019.herokuapp.com/api/payment/shipment",{shipment:t});case 3:c=r.sent,e.$store.commit("setShipping",{price:c.shipment.price,estimatedDelivery:c.shipment.estimated}),e.shippingPrice=c.shipment.price,e.estimatedDelivery=c.shipment.estimated,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},d=r(36),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"shipping-address"},[r("div",{staticClass:"col-sm-2"},[r("div",{staticClass:"logo-area"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"img-fluid",attrs:{src:"/img/ECOM.png",alt:"Logo"}})])],1)]),t._v(" "),r("div",{staticClass:"a-section a-spacing-medium"},[r("div",{staticClass:"a-subheader a-breadcrumb a-spacing-small"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/cart"}},[r("span",[t._v("Your Cart")])])],1),t._v(" "),r("li",{staticClass:"a-breadcrumb-divider"},[t._v("›")]),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/placeorder"}},[r("span",[t._v("Place order")])])],1)])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-9 col-lg-8 col-md-9 col-sm-12"},[r("div",{staticClass:"a-row a-spacing-large"}),t._v(" "),r("div",{staticClass:"spc-top a-box a-spacing-small"},[r("div",{staticClass:"a-box-inner"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-4 col-lg-6 col-sm-6 col-6"},[r("div",{staticClass:"a-spacing-base"},[r("div",{staticClass:"a-row"},[r("strong",[t._v("\n                        Shipping address\n                        "),r("small",[r("nuxt-link",{attrs:{to:"/address"}},[t._v("Change")])],1)])]),t._v(" "),r("div",{staticClass:"a-row"},[r("div",{staticClass:"displayAddressDiv"},[r("ul",{staticClass:"displayAddressUL"},[r("li",[t._v(t._s(t.$auth.$state.user.address.fullName))]),t._v(" "),r("li",[t._v(t._s(t.$auth.$state.user.address.streetAddress))]),t._v(" "),r("li",[t._v(t._s(t.$auth.$state.user.address.city))]),t._v(" "),r("li",[t._v(t._s(t.$auth.$state.user.address.country))]),t._v(" "),r("li",[t._v("\n                            Phone:\n                            "),r("span",{attrs:{dir:"ltr"}},[t._v(t._s(t.$auth.$state.user.address.phoneNumber))])])])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"spc-orders a-box"},[r("div",{staticClass:"a-box-inner"},[r("div",{staticClass:"shipping-group"},[r("div",{staticClass:"a-row a-color-state a-text-bold a-size-medium a-spacing-small"},[t._v("Estimated delivery: "+t._s(t.estimatedDelivery))]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-6 col-lg-7 col-sm-6 col-12"},t._l(t.getCart,(function(e){return r("div",{key:e._id,staticClass:"a-row a-spacing-base"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-5 col-3"},[r("img",{staticStyle:{width:"100%","border-radius":"5px"},attrs:{src:e.photo}})]),t._v(" "),r("div",{staticClass:"col-sm-7 col-9"},[r("div",{staticClass:"a-row"},[r("strong",[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"a-row a-size-small"},[t._v("by "+t._s(e.owner.name))]),t._v(" "),r("div",{staticClass:"a-row"},[r("span",{staticClass:"a-color-price a-spacing-micro"},[r("strong",{attrs:{dir:"ltr"}},[t._v("$"+t._s(e.price))])])]),t._v(" "),t._m(3,!0),t._v(" "),r("div",{staticClass:"a-row"},[r("strong",[t._v("Quantity: "+t._s(e.quantity))])]),t._v(" "),r("div",{staticClass:"a-row a-color-secondary a-size-small"},[t._v("Sold by: Ecommerce Store")]),t._v(" "),t._m(4,!0)])]),t._v(" "),r("hr")])})),0),t._v(" "),r("div",{staticClass:"col-xl-6 col-lg-5 col-sm-6 col-12"},[r("div",{staticClass:"a-row shipping-speeds"},[r("fieldset",[t._m(5),t._v(" "),r("div",{staticClass:"a-spacing-mini wednesday"},[r("input",{attrs:{type:"radio",name:"order0",checked:"checked"},on:{change:function(e){return t.onChooseShipping("normal")}}}),t._v(" "),t._m(6)]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"a-spacing-mini tuesday"},[r("input",{attrs:{type:"radio",name:"order0"},on:{change:function(e){return t.onChooseShipping("fast")}}}),t._v(" "),t._m(7)])])])])])])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0"},[r("div",{staticClass:"a-box-group"},[r("div",{staticClass:"a-box a-first"},[r("div",{staticClass:"a-box-inner"},[r("div",{staticClass:"a-row a-spacing-micro"},[r("nuxt-link",{attrs:{to:"/payment"}},[r("span",{staticClass:"a-button-place-order"},[t._v("Place your order in USD")])])],1),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"a-row"},[r("h3",{staticClass:"a-spacing-micro a-size-base"},[t._v("Order Summary")]),t._v(" "),r("div",{staticClass:"order-summary",staticStyle:{"font-size":"12px"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[t._v("Items:")]),t._v(" "),r("div",{staticClass:"col-sm-6 text-right"},[t._v("USD $"+t._s(t.getCartTotalPrice))])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[t._v("Shipping & handling:")]),t._v(" "),r("div",{staticClass:"col-sm-6 text-right"},[t._v("USD "+t._s(t.shippingPrice))])]),t._v(" "),t._m(9),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[t._v("Total Before Tax:")]),t._v(" "),r("div",{staticClass:"col-sm-6 text-right"},[t._v("USD "+t._s(t.getCartTotalPriceWithTotalPrice))])]),t._v(" "),t._m(10),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row"},[t._m(11),t._v(" "),r("div",{staticClass:"col-sm-6 text-right"},[r("div",{staticClass:"a-color-price a-size-medium a-text-bold"},[t._v("USD "+t._s(t.getCartTotalPriceWithTotalPrice))])])])])])])]),t._v(" "),t._m(12)])])]),t._v(" "),t._m(13),t._v(" "),r("hr"),t._v(" "),t._m(14)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-row"},[e("div",{staticClass:"a-size-large a-text-bold a-spacing-mini"},[this._v("Review your order")]),this._v(" "),e("div",{staticClass:"a-row a-spacing-small a-size-mini"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-4 col-lg-6 col-sm-6 col-6"},[r("div",{staticClass:"a-spacing-base"},[r("div",{staticClass:"a-row"},[r("strong",[t._v("\n                        Payment Method\n                        ")])]),t._v(" "),r("div",{staticClass:"a-row"},[r("ul",{staticClass:"no-bullet-list"},[r("li",{staticClass:"a-spacing-micro"},[r("span",{staticClass:"a-list-item"},[r("span",[r("img",{staticClass:"img-fluid",attrs:{src:"img/visa.gif"}})]),t._v("\n                            ending in\n                            "),r("span",[t._v("6397")])])])])])]),t._v(" "),r("div",{staticClass:"a-row a-spacing-base"},[r("div",{staticClass:"a-row"},[r("strong",[t._v("\n                        Billing Address\n                        ")])]),t._v(" "),r("span",[t._v("Same as shipping address")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-4 col-lg-6 col-sm-12 col-12"},[e("div",{staticClass:"a-spacing-base"},[e("div",{staticClass:"a-spacing-mini"},[e("span",[e("strong",[this._v("Gift cards & promotional codes")])])]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8 col-lg-7 col-md-7 col-sm-7 col-8 pr-0"},[e("input",{staticClass:"a-input-text",attrs:{type:"text",autocomplete:"off",placeholder:"Enter Code"}})]),this._v(" "),e("div",{staticClass:"col-xl-4 col-lg-5 col-md-5 col-sm-5 col-4"},[e("span",{staticClass:"a-buton-apply-code"},[e("span",{staticClass:"a-button-inner"},[e("span",{staticClass:"a-button-text"},[this._v("Apply")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-row"},[e("span",{staticClass:"availability a-color-success"},[this._v("In Stock.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-row"},[e("div",{staticClass:"a-row a-spacing-top-micro"},[e("span",{staticClass:"a-button-small"},[e("span",{staticClass:"a-button-inner"},[e("i",{staticClass:"a-icon checkout-giftbox-icon"}),this._v(" "),e("a",{staticClass:"a-button-text gift-popover-link",attrs:{href:"#"}},[this._v("Add a gift receipt")])])])]),this._v(" "),e("div",{staticClass:"a-row"},[e("span",{staticClass:"a-color-secondary a-size-mini"},[this._v("and see other gift options")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"shipping-speeds-title a-size-medium"},[e("b",[this._v("Choose a delivery option:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"a-radio-label"},[e("span",{staticClass:"a-color-success"},[e("strong",[this._v("Averages 14 business days")])]),this._v(" "),e("br"),this._v(" "),e("span",{staticClass:"a-color-secondary"},[this._v("$13.98 - Standard International Shipping - No Tracking")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"a-radio-label"},[e("span",{staticClass:"a-color-success"},[e("strong",[this._v("Averages 4 business days")])]),this._v(" "),e("br"),this._v(" "),e("span",{staticClass:"a-color-secondary"},[this._v("$49.98 - Shipping")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-row a-spacing-small a-size-small a-text-center"},[this._v("\n                  By placing your order, you agree to Ecommerece Store's\n                  "),e("a",{attrs:{href:"#"}},[this._v("privacy notice")]),this._v("\n                  and\n                  "),e("a",{attrs:{href:"#"}},[this._v("conditions of use")]),this._v(".\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-sm-6"}),this._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[e("hr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[this._v("Estimated tax to be collected:")]),this._v(" "),e("div",{staticClass:"col-sm-6 text-right"},[this._v("USD 0.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"a-color-price a-size-medium a-text-bold"},[this._v("Order total:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-box a-last a-color-alternate-background"},[r("div",{staticClass:"a-box-inner"},[r("div",{staticClass:"a-spacing-base"},[r("div",{staticClass:"a-row"},[r("span",[r("i",{staticClass:"fas fa-caret-down"}),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("Selected payment currency")])]),t._v(" "),r("fieldset",{staticClass:"pl-3"},[r("span",{staticStyle:{"margin-left":"1rem"}},[r("input",{staticClass:"no-js-hide",attrs:{type:"radio",value:"transactional"}}),t._v(" "),r("span",{staticClass:"a-radio-label"},[t._v("USD")])]),t._v(" "),r("div",{staticClass:"a-row"},[r("span",{staticClass:"a-size-mini"},[r("a",{attrs:{href:"#"}},[t._v("(Change card currency)")])])])])])]),t._v(" "),r("div",{staticClass:"a-size-mini"},[r("div",{staticClass:"a-row a-spacing-mini mb-1"},[t._v("\n                    Please note that your country may charge import duties, taxes and fees that you may have to pay ahead of delivery.\n                    "),r("a",{attrs:{href:"#"}},[t._v("Learn more")])]),t._v(" "),r("div",{staticClass:"a-row a-spacing-mini mb-1"},[r("a",{attrs:{href:"#"}},[t._v("How are shipping costs calculated?")])]),t._v(" "),r("div",{staticClass:"a-row a-spacing-mini"},[r("a",{attrs:{href:"#"}},[t._v("Why didn't I qualify for free shipping?")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-row a-spacing-small a-spacing-top-small"},[r("p",{staticClass:"a-color-secondary a-size-mini"},[t._v("\n          Do you need help? Explore our\n          "),r("a",{attrs:{href:"#"}},[t._v("Help pages")]),t._v(" or\n          "),r("a",{attrs:{href:"#"}},[t._v("contact us")])]),t._v(" "),r("p",{staticClass:"a-color-secondary a-size-mini"},[t._v('For an item sold by Ecommerce Store: When you click the "Place your order" button, we\'ll send you an email message acknowledging receipt of your order. Your contract to purchase an item will not be complete until we send you an email notifying you that the item has been shipped.')]),t._v(" "),r("div",{staticClass:"a-color-secondary a-size-mini"},[r("p",{staticClass:"a-color-secondary a-size-mini"},[t._v("\n            Within 30 days of delivery, you may return new, unopened merchandise in its original condition. Exceptions and restrictions apply. See Ecommerce Store's\n            "),r("a",{attrs:{href:"#"}},[t._v("Returns Policy")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v("Go to the\n            "),r("a",{attrs:{href:"/"}},[t._v("Ecommmerce Store homepage")]),t._v(" without completing your order.\n          ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"a-size-small a-text-center a-color-secondary",attrs:{"data-testid":""}},[e("a",{attrs:{href:"#"}},[this._v("Conditions of Use")]),this._v(" |\n        "),e("a",{attrs:{href:"#"}},[this._v("Privacy Notice")]),this._v(" © 2019, Ecommerce Store.\n      ")])}],!1,null,null,null);e.default=component.exports}}]);