exports.ids = [6];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8383740c", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".a-alert-container,.a-button-text{padding-left:0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=d7aae544&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"registerPage"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-4 mx-auto my-5\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/ECOM.png"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<form class=\"mt-4\">","</form>",[_vm._ssrNode("<div class=\"a-box a-spacing-extra-larger\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner\">","</div>",[_vm._ssrNode("<h1 class=\"a-spacing-small text-center\">Sign In</h1> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_email\" class=\"a-form-label\">Email</label> <input type=\"email\" id=\"ap_customer_email\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"> "+((_vm.eError)?("<div class=\"a-alert-container\"><div class=\"a-alert-content text-danger\" style=\"font-weight: normal; font-size: 7\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.emailError)+"\n                  ")+"</div></div>"):"<!---->")+"</div> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_password\" class=\"a-form-label\">Password</label> <input type=\"password\" id=\"ap_customer_password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"> "+((_vm.pError)?("<div class=\"a-alert-container\"><div class=\"a-alert-content text-danger\" style=\"font-weight: normal; font-size: 7\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.passError)+"\n                  ")+"</div></div>"):"<!---->")+"</div> <div class=\"a-row a-spacing-extra-large mb-4\"><div class=\"a-button-primary text-center justify-center\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Continue</span></span></div> <div class=\"a-row a-spacing-top-medium a-size-small text-secondary\"><b>\n                    By creating account you agree to our\n                    <a href=\"#\">Terms &amp; Conditions</a> and\n                    <a href=\"#\">Privacy Notice</a>.\n                  </b></div></div> <hr> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<b>","</b>",[_vm._ssrNode("\n                  Don't have an account?\n                  "),_c('nuxt-link',{staticClass:"a-link-emphasis",attrs:{"to":"/signup"}},[_vm._v("Sign Up")])],2)])],2)])])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=d7aae544&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: "auth",
  auth: "guest",
  layout: "none",

  data() {
    return {
      email: "",
      password: "",
      emailError: "Please enter Correct Email Address",
      passError: "Please enter Correct Password",
      eError: false,
      pError: false
    };
  },

  methods: {
    async onLogIn() {
      try {
        let data = {
          email: this.email,
          password: this.password
        };
        let eSuccess = false;
        let pSuccess = false;

        if (!this.checkEmail(data.email)) {
          this.eError = true;
        } else {
          this.eError = false;
          eSuccess = true;
        }

        if (!this.checkPassword(data.password)) {
          this.pError = true;
        } else {
          this.pError = false;
          pSuccess = true;
        }

        if (eSuccess && pSuccess) {
          let response = await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          await this.$auth.fetchUser();
          await this.$store.dispatch("setLoggedUser");
          this.$router.push("/");
        }
      } catch (error) {
        this.pError = true;
        this.eError = true;
        console.log('error here', error);
      }
    },

    checkEmail(data) {
      return data.length > 0;
    },

    checkPassword(data) {
      return data.length > 0;
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "468ebaab"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map