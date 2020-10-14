exports.ids = [15];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("340c19fe", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".a-alert-container,.a-button-text{padding-left:0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/verify/confirm.vue?vue&type=template&id=2a6e8754&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"registerPage"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-4 mx-auto my-5\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/ECOM.png"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<form class=\"mt-4\">","</form>",[_vm._ssrNode("<div class=\"a-box a-spacing-extra-larger\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner\">","</div>",[_vm._ssrNode("<h1 class=\"a-spacing-small text-center\">Confirmation</h1> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">\n                                    Please click <p class=\"text-success font-weight-bolder\">Continue</p> below to confirm sign up\n                                </label> <label for=\"ap_customer_name\" class=\"a-form-label\">\n                                    Then you can Sign In.\n                                </label></div> <div class=\"a-row a-spacing-extra-large mb-4\"><div class=\"a-button-primary text-center justify-center\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Continue</span></span></div> <div class=\"a-row a-spacing-top-medium a-size-small text-secondary\"><b>\n                                        By creating account you agree to our\n                                        <a href=\"#\">Terms &amp; Conditions</a> and\n                                        <a href=\"#\">Privacy Notice</a>.\n                                    </b></div></div> <hr> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<b>","</b>",[_vm._ssrNode("\n                                    Don't have an account?\n                                    "),_c('nuxt-link',{staticClass:"a-link-emphasis",attrs:{"to":"/signup"}},[_vm._v("Sign Up")])],2)])],2)])])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/verify/confirm.vue?vue&type=template&id=2a6e8754&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/verify/confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var confirmvue_type_script_lang_js_ = ({
  middleware: 'auth',
  auth: 'guest',
  layout: 'none',

  // async asyncData ({ $axios, params, $router }) {
  //     try {
  //         let response = await $axios.$post(`${process.env.DEV_BACKEND}/api/auth/confirmation/${params.token}`)
  //         console.log('response', response.success);
  //         if (response.success) {
  //             return {
  //                 verified: response.success
  //             }
  //         }
  //     } catch (error) {
  //         console.log(error);
  //     }
  // },
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    async onLogIn() {
      try {
        console.log('url params\n', this.$route.query.Authorization);
        let response = await this.$axios.$post(`${"https://ecommstore2019.herokuapp.com"}/api/auth/confirmation/${this.$route.query.Authorization}`);
        console.log('response in confirmation', response.success);

        if (response.success) {
          this.$router.push('/login');
        }
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/verify/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var verify_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/verify/confirm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  verify_confirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a9b306ea"
  
)

/* harmony default export */ var verify_confirm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=confirm.js.map