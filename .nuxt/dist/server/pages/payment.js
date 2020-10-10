exports.ids = [8];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6fb8a29a", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".StripeElement{box-sizing:border-box;height:40px;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:#fff;box-shadow:0 1px 3px 0 #e6ebf1;transition:box-shadow .15s ease}.StripeElement--focus{box-shadow:0 1px 3px 0 #cfd7df}.StripeElement--invalid{border-color:#fa755a}.StripeElement--webkit-autofill{background-color:#fefde5!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment.vue?vue&type=template&id=1fd2d274&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<main>","</main>",[_vm._ssrNode("<div class=\"registerAddress mt-3\">","</div>",[_vm._ssrNode("<div class=\"container-fluid c-section\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-3\"></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"a-section a-spacing-medium\">","</div>",[_vm._ssrNode("<div class=\"a-subheader a-breadcrumb a-spacing-small\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/cart"}},[_c('span',[_vm._v("Your Cart")])])],1),_vm._ssrNode(" <li class=\"a-breadcrumb-divider\">›</li> "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/placeorder"}},[_c('span',[_vm._v("Place order")])])],1),_vm._ssrNode(" <li class=\"a-breadcrumb-divider\">›</li> "),_vm._ssrNode("<li class=\"active\">","</li>",[_c('nuxt-link',{attrs:{"to":"/payment"}},[_c('span',[_vm._v("Payment")])])],1)],2)])]),_vm._ssrNode(" <div class=\"a-section\"><h2>Make a payment</h2> <div class=\"a-section a-spacing-none a-spacing-top-small\"><b>"+_vm._ssrEscape("The total price is $"+_vm._s(_vm.getCartTotalPriceWithTotalPrice))+"</b></div> <div class=\"a-section a-spacing-none a-spacing-top-small\"><b>"+_vm._ssrEscape(_vm._s(_vm.error))+"</b></div> <form action=\"#\" method=\"post\"><div class=\"a-spacing-medium a-spacing-top-medium\"><div class=\"a-spacing-top-medium\"><div></div></div> <div class=\"a-spacing-top-medium\"></div> <hr> <div class=\"a-spacing-top-medium\"><span><b>Make sure your address is correct</b></span></div> <div><span>If the address contains typos or other errors, your package may be undeliverable.</span></div> <div class=\"a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Purchase</span></span></span></div></div></form></div>")],2),_vm._ssrNode(" <div class=\"col-sm-3\"></div>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/payment.vue?vue&type=template&id=1fd2d274&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/payment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var paymentvue_type_script_lang_js_ = ({
  middleware: 'auth',
  layout: 'none',

  data() {
    return {
      error: '',
      stripe: null,
      card: null
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['getCart', 'getCartTotalPriceWithTotalPrice', 'getEstimatedDelivery'])
  },

  mounted() {
    this.stripe = Stripe("pk_test_51HTBHhH6tbYYyOHumFF7w1U3v0lGLFfZ1MlNtHPmvRRlBe4DpVBPDygQL6kfm1gLnTbGdHKqtgtdIkKxn5wJ0wId00SzN9GIrL");
    let elements = this.stripe.elements();
    this.card = elements.create('card');
    this.card.mount(this.$refs.card);
  },

  methods: {
    async onPurchase() {
      try {
        let token = await this.stripe.createToken(this.card);
        let response = await this.$axios.$post(`${"https://ecommstore2019.herokuapp.com"}/api/payment/pay`, {
          token: token,
          totalPrice: this.getCartTotalPriceWithTotalPrice,
          cart: this.getCart,
          estimatedDelivery: this.getEstimatedDelivery
        });

        if (response.success) {
          this.$store.commit('clearCart');
          this.$router.push('/');
        }
      } catch (error) {
        this.error = error;
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/payment.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_paymentvue_type_script_lang_js_ = (paymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/payment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_paymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ab2a4d74"
  
)

/* harmony default export */ var payment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=payment.js.map