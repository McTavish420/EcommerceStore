exports.ids = [9];
exports.modules = {

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/placeorder.vue?vue&type=template&id=051e4566&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('body',[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"shipping-address\">","</div>",[_vm._ssrNode("<div class=\"col-sm-2\">","</div>",[_vm._ssrNode("<div class=\"logo-area\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/img/ECOM.png","alt":"Logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"a-section a-spacing-medium\">","</div>",[_vm._ssrNode("<div class=\"a-subheader a-breadcrumb a-spacing-small\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/cart"}},[_c('span',[_vm._v("Your Cart")])])],1),_vm._ssrNode(" <li class=\"a-breadcrumb-divider\">›</li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/placeorder"}},[_c('span',[_vm._v("Place order")])])],1)],2)])]),_vm._ssrNode(" <div class=\"a-row\"><div class=\"a-size-large a-text-bold a-spacing-mini\">Review your order</div> <div class=\"a-row a-spacing-small a-size-mini\"></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xl-9 col-lg-8 col-md-9 col-sm-12\">","</div>",[_vm._ssrNode("<div class=\"a-row a-spacing-large\"></div> "),_vm._ssrNode("<div class=\"spc-top a-box a-spacing-small\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xl-4 col-lg-6 col-sm-6 col-6\">","</div>",[_vm._ssrNode("<div class=\"a-spacing-base\">","</div>",[_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<strong>","</strong>",[_vm._ssrNode("\n                        Shipping address\n                        "),_vm._ssrNode("<small>","</small>",[_c('nuxt-link',{attrs:{"to":"/address"}},[_vm._v("Change")])],1)],2)]),_vm._ssrNode(" <div class=\"a-row\"><div class=\"displayAddressDiv\"><ul class=\"displayAddressUL\"><li>"+_vm._ssrEscape(_vm._s(_vm.$auth.$state.user.address.fullName))+"</li> <li>"+_vm._ssrEscape(_vm._s(_vm.$auth.$state.user.address.streetAddress))+"</li> <li>"+_vm._ssrEscape(_vm._s(_vm.$auth.$state.user.address.city))+"</li> <li>"+_vm._ssrEscape(_vm._s(_vm.$auth.$state.user.address.country))+"</li> <li>\n                            Phone:\n                            <span dir=\"ltr\">"+_vm._ssrEscape(_vm._s(_vm.$auth.$state.user.address.phoneNumber))+"</span></li></ul></div></div>")],2)]),_vm._ssrNode(" <div class=\"col-xl-4 col-lg-6 col-sm-6 col-6\"><div class=\"a-spacing-base\"><div class=\"a-row\"><strong>\n                        Payment Method\n                        </strong></div> <div class=\"a-row\"><ul class=\"no-bullet-list\"><li class=\"a-spacing-micro\"><span class=\"a-list-item\"><span><img src=\"img/visa.gif\" class=\"img-fluid\"></span>\n                            ending in\n                            <span>6397</span></span></li></ul></div></div> <div class=\"a-row a-spacing-base\"><div class=\"a-row\"><strong>\n                        Billing Address\n                        </strong></div> <span>Same as shipping address</span></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-12 col-12\"><div class=\"a-spacing-base\"><div class=\"a-spacing-mini\"><span><strong>Gift cards &amp; promotional codes</strong></span></div> <div class=\"row\"><div class=\"col-xl-8 col-lg-7 col-md-7 col-sm-7 col-8 pr-0\"><input type=\"text\" autocomplete=\"off\" placeholder=\"Enter Code\" class=\"a-input-text\"></div> <div class=\"col-xl-4 col-lg-5 col-md-5 col-sm-5 col-4\"><span class=\"a-buton-apply-code\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Apply</span></span></span></div></div></div></div>")],2)])]),_vm._ssrNode(" <div class=\"spc-orders a-box\"><div class=\"a-box-inner\"><div class=\"shipping-group\"><div class=\"a-row a-color-state a-text-bold a-size-medium a-spacing-small\">"+_vm._ssrEscape("Estimated delivery: "+_vm._s(_vm.estimatedDelivery))+"</div> <div class=\"row\"><div class=\"col-xl-6 col-lg-7 col-sm-6 col-12\">"+(_vm._ssrList((_vm.getCart),function(product){return ("<div class=\"a-row a-spacing-base\"><div class=\"row\"><div class=\"col-sm-5 col-3\"><img"+(_vm._ssrAttr("src",product.photo))+" style=\"width: 100%; border-radius: 5px\"></div> <div class=\"col-sm-7 col-9\"><div class=\"a-row\"><strong>"+_vm._ssrEscape(_vm._s(product.title))+"</strong></div> <div class=\"a-row a-size-small\">"+_vm._ssrEscape("by "+_vm._s(product.owner.name))+"</div> <div class=\"a-row\"><span class=\"a-color-price a-spacing-micro\"><strong dir=\"ltr\">"+_vm._ssrEscape("$"+_vm._s(product.price))+"</strong></span></div> <div class=\"a-row\"><span class=\"availability a-color-success\">In Stock.</span></div> <div class=\"a-row\"><strong>"+_vm._ssrEscape("Quantity: "+_vm._s(product.quantity))+"</strong></div> <div class=\"a-row a-color-secondary a-size-small\">Sold by: Ecommerce Store</div> <div class=\"a-row\"><div class=\"a-row a-spacing-top-micro\"><span class=\"a-button-small\"><span class=\"a-button-inner\"><i class=\"a-icon checkout-giftbox-icon\"></i> <a href=\"#\" class=\"a-button-text gift-popover-link\">Add a gift receipt</a></span></span></div> <div class=\"a-row\"><span class=\"a-color-secondary a-size-mini\">and see other gift options</span></div></div></div></div> <hr></div>")}))+"</div> <div class=\"col-xl-6 col-lg-5 col-sm-6 col-12\"><div class=\"a-row shipping-speeds\"><fieldset><span class=\"shipping-speeds-title a-size-medium\"><b>Choose a delivery option:</b></span> <div class=\"a-spacing-mini wednesday\"><input type=\"radio\" name=\"order0\" checked=\"checked\"> <span class=\"a-radio-label\"><span class=\"a-color-success\"><strong>Averages 14 business days</strong></span> <br> <span class=\"a-color-secondary\">$13.98 - Standard International Shipping - No Tracking</span></span></div> <br> <div class=\"a-spacing-mini tuesday\"><input type=\"radio\" name=\"order0\"> <span class=\"a-radio-label\"><span class=\"a-color-success\"><strong>Averages 4 business days</strong></span> <br> <span class=\"a-color-secondary\">$49.98 - Shipping</span></span></div></fieldset></div></div></div></div></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0\">","</div>",[_vm._ssrNode("<div class=\"a-box-group\">","</div>",[_vm._ssrNode("<div class=\"a-box a-first\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner\">","</div>",[_vm._ssrNode("<div class=\"a-row a-spacing-micro\">","</div>",[_c('nuxt-link',{attrs:{"to":"/payment"}},[_c('span',{staticClass:"a-button-place-order"},[_vm._v("Place your order in USD")])])],1),_vm._ssrNode(" <div class=\"a-row a-spacing-small a-size-small a-text-center\">\n                  By placing your order, you agree to Ecommerece Store's\n                  <a href=\"#\">privacy notice</a>\n                  and\n                  <a href=\"#\">conditions of use</a>.\n                </div> <div class=\"a-row\"><h3 class=\"a-spacing-micro a-size-base\">Order Summary</h3> <div class=\"order-summary\" style=\"font-size: 12px;\"><div class=\"row\"><div class=\"col-sm-6\">Items:</div> <div class=\"col-sm-6 text-right\">"+_vm._ssrEscape("USD $"+_vm._s(_vm.getCartTotalPrice))+"</div></div> <div class=\"row\"><div class=\"col-sm-6\">Shipping &amp; handling:</div> <div class=\"col-sm-6 text-right\">"+_vm._ssrEscape("USD "+_vm._s(_vm.shippingPrice))+"</div></div> <div class=\"row mt-2\"><div class=\"col-sm-6\"></div> <div class=\"col-sm-6 text-right\"><hr></div></div> <div class=\"row\"><div class=\"col-sm-6\">Total Before Tax:</div> <div class=\"col-sm-6 text-right\">"+_vm._ssrEscape("USD "+_vm._s(_vm.getCartTotalPriceWithTotalPrice))+"</div></div> <div class=\"row\"><div class=\"col-sm-6\">Estimated tax to be collected:</div> <div class=\"col-sm-6 text-right\">USD 0.00</div></div> <hr> <div class=\"row\"><div class=\"col-sm-6\"><div class=\"a-color-price a-size-medium a-text-bold\">Order total:</div></div> <div class=\"col-sm-6 text-right\"><div class=\"a-color-price a-size-medium a-text-bold\">"+_vm._ssrEscape("USD "+_vm._s(_vm.getCartTotalPriceWithTotalPrice))+"</div></div></div></div></div>")],2)]),_vm._ssrNode(" <div class=\"a-box a-last a-color-alternate-background\"><div class=\"a-box-inner\"><div class=\"a-spacing-base\"><div class=\"a-row\"><span><i class=\"fas fa-caret-down\"></i> <a href=\"#\">Selected payment currency</a></span> <fieldset class=\"pl-3\"><span style=\"margin-left: 1rem;\"><input type=\"radio\" value=\"transactional\" class=\"no-js-hide\"> <span class=\"a-radio-label\">USD</span></span> <div class=\"a-row\"><span class=\"a-size-mini\"><a href=\"#\">(Change card currency)</a></span></div></fieldset></div></div> <div class=\"a-size-mini\"><div class=\"a-row a-spacing-mini mb-1\">\n                    Please note that your country may charge import duties, taxes and fees that you may have to pay ahead of delivery.\n                    <a href=\"#\">Learn more</a></div> <div class=\"a-row a-spacing-mini mb-1\"><a href=\"#\">How are shipping costs calculated?</a></div> <div class=\"a-row a-spacing-mini\"><a href=\"#\">Why didn't I qualify for free shipping?</a></div></div></div></div>")],2)])],2),_vm._ssrNode(" <div class=\"a-row a-spacing-small a-spacing-top-small\"><p class=\"a-color-secondary a-size-mini\">\n          Do you need help? Explore our\n          <a href=\"#\">Help pages</a> or\n          <a href=\"#\">contact us</a></p> <p class=\"a-color-secondary a-size-mini\">For an item sold by Ecommerce Store: When you click the &quot;Place your order&quot; button, we'll send you an email message acknowledging receipt of your order. Your contract to purchase an item will not be complete until we send you an email notifying you that the item has been shipped.</p> <div class=\"a-color-secondary a-size-mini\"><p class=\"a-color-secondary a-size-mini\">\n            Within 30 days of delivery, you may return new, unopened merchandise in its original condition. Exceptions and restrictions apply. See Ecommerce Store's\n            <a href=\"#\">Returns Policy</a> <br> <br>Go to the\n            <a href=\"/\">Ecommmerce Store homepage</a> without completing your order.\n          </p></div></div> <hr> <p data-testid class=\"a-size-small a-text-center a-color-secondary\"><a href=\"#\">Conditions of Use</a> |\n        <a href=\"#\">Privacy Notice</a> © 2019, Ecommerce Store.\n      </p>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/placeorder.vue?vue&type=template&id=051e4566&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/placeorder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var placeordervue_type_script_lang_js_ = ({
  middleware: 'auth',
  layout: "none",

  async asyncData({
    $axios,
    store
  }) {
    try {
      let response = await $axios.$post(`${"https://ecommstore2019.herokuapp.com"}/api/payment/shipment`, {
        shipment: 'normal'
      });
      store.commit('setShipping', {
        price: response.shipment.price,
        estimatedDelivery: response.shipment.estimated
      });
      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated
      };
    } catch (error) {
      console.log(error);
    }
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['getCart', 'getCartTotalPrice', 'getCartTotalPriceWithTotalPrice'])
  },
  methods: {
    async onChooseShipping(shipment) {
      try {
        let response = await this.$axios.$post(`${"https://ecommstore2019.herokuapp.com"}/api/payment/shipment`, {
          shipment: shipment
        });
        this.$store.commit('setShipping', {
          price: response.shipment.price,
          estimatedDelivery: response.shipment.estimated
        });
        this.shippingPrice = response.shipment.price;
        this.estimatedDelivery = response.shipment.estimated;
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/placeorder.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_placeordervue_type_script_lang_js_ = (placeordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/placeorder.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_placeordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2df3d917"
  
)

/* harmony default export */ var placeorder = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=placeorder.js.map