exports.ids = [11];
exports.modules = {

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=template&id=a9d9ebda&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container-fluid c-section\"><div class=\"row\"><div class=\"col-sm-3\"></div> <div class=\"col-sm-6\"><div class=\"a-section\"><div class=\"a-spacing-top-medium\"></div> <h2>Profile Page</h2> <a href=\"#\">Log Out</a> <form><div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px\">Username</label> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$store.getters.getUserName))+(_vm._ssrAttr("value",(_vm.userName)))+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px\">Email</label> <input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$store.getters.getUser.email))+(_vm._ssrAttr("value",(_vm.email)))+" class=\"a-input-text\" style=\"width: 100%\"></div> <div class=\"a-spacing-top-medium\"><label style=\"margin-bottom: 0px\">Password</label> <input type=\"password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"a-input-text\" style=\"width: 100%\"></div> <hr> <div class=\"a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Update Profile</span></span></span></div></form> <br></div></div> <div class=\"col-sm-3\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile.vue?vue&type=template&id=a9d9ebda&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'auth',

  data() {
    return {
      userName: '',
      email: '',
      password: ''
    };
  },

  methods: { ...Object(external_vuex_["mapGetters"])(['getUserName', 'getUser']),

    async onUpdateProfile() {
      let data = {
        userName: this.userName,
        email: this.email,
        password: this.password
      };

      try {
        let response = await this.$axios.$put(`${"https://ecommstore2019.herokuapp.com"}/api/auth/user`, data);

        if (response.success) {
          this.userName = '';
          this.email = '';
          this.password = '';
          await this.$auth.fetchUser();
          await this.$store.dispatch('setLoggedUser');
        }
      } catch (error) {
        console.log(error);
      }
    },

    async onLogOut() {
      await this.$auth.logout();
      this.$store.dispatch('clearUser');
      this.$store.commit('clearCart');
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "10d2a769"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile.js.map