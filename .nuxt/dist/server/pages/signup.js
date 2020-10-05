exports.ids = [14];
exports.modules = {

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=template&id=2801eb2c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"registerPage"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row my-5\">","</div>",[_vm._ssrNode("<div class=\"col-sm-4 mx-auto\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/ECOM.png"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<form class=\"mt-4\">","</form>",[_vm._ssrNode("<div class=\"a-box a-spacing-extra-larger\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner\">","</div>",[_vm._ssrNode("<h1 class=\"a-spacing-small text-center\">Create Account</h1> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">Username</label> <input type=\"text\" id=\"ap_customer_name\""+(_vm._ssrAttr("value",(_vm.userName)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"></div> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">Email</label> <input type=\"email\" id=\"ap_customer_name\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"></div> <div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\" class=\"a-form-label\">Password</label> <input type=\"password\" id=\"ap_customer_name\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info\"> <div class=\"a-alert-container\"><div class=\"a-alert-content\">\n                                         Password must be have at least 6 characters\n                                     </div></div></div> <div class=\"a-row a-spacing-extra-large mb-4\"><span class=\"a-button-primary\"><span class=\"a-button-inner\"><span class=\"a-button-text\">\n                                            Create Your Account\n                                        </span></span></span> <div class=\"a-row a-spacing-top-medium a-size-small\"><b>\n                                        By creating account you agree to our\n                                        <a href=\"#\">Terms &amp; Conditions</a> and\n                                        <a href=\"#\">Privacy Notice</a>.\n                                    </b></div></div> <hr> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<b>","</b>",[_vm._ssrNode("\n                                    Already have an account?\n                                    "),_c('nuxt-link',{staticClass:"a-link-emphasis",attrs:{"to":"/login"}},[_vm._v("Sign In")])],2)])],2)])])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/signup.vue?vue&type=template&id=2801eb2c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  middleware: 'auth',
  auth: 'guest',
  layout: 'none',

  data() {
    return {
      userName: '',
      email: '',
      password: ''
    };
  },

  methods: {
    async onSignUp() {
      try {
        let data = {
          userName: this.userName,
          email: this.email,
          password: this.password
        };
        let response = await this.$axios.$post('https://ecommstore2019.herokuapp.com/api/auth/signup', data);
        console.log(response);

        if (response.success) {
          // await this.$auth.loginWith('local', {
          //     data: {
          //         email: this.email,
          //         password: this.password
          //     }
          // })
          this.$router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/signup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c9c49f0"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signup.js.map