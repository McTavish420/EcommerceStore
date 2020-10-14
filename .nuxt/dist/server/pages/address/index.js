exports.ids = [3];
exports.modules = {

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/address/index.vue?vue&type=template&id=1336b7e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"registerAddress mt-3\">","</div>",[_vm._ssrNode("<div class=\"container-fluid c-section\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-2\"></div> "),_vm._ssrNode("<div class=\"col-sm-10\">","</div>",[_vm._ssrNode("<div class=\"a-section a-spacing-medium\">","</div>",[_vm._ssrNode("<div class=\"a-subheader a-breadcrumb a-spacing-small\"><ul><li><a href=\"#\"><span>Your Account</span></a></li> <li class=\"a-breadcrumb-divider\">›</li> <li class=\"active\"><a href=\"#\"><span>Your Adresses</span></a></li></ul></div> <h1 class=\"a-spacing-medium a-spacing-top-medium\">Your Addresses</h1> <div class=\"a-section a-spacing-none a-spacing-top-small\"><b>"+_vm._ssrEscape(_vm._s(_vm.message))+"</b></div> "),_vm._ssrNode("<div class=\"a-spacing-double-large\">","</div>",[_vm._ssrNode("<div class=\"row a-spacing-micro\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-5 col-sm-12 pb-2\">","</div>",[_c('nuxt-link',{staticClass:"a-link-normal add-new-address-button",staticStyle:{"text-decoration":"none"},attrs:{"to":"/address/add"}},[_c('div',{staticClass:"a-box first-desktop-address-tile"},[_c('div',{staticClass:"a-box-inner a-padding-extra-large"},[_c('i',{staticClass:"far fa-plus"}),_vm._v(" "),_c('h2',{staticClass:"a-color-tertiary"},[_vm._v("Add Address")])])])])],1),_vm._ssrNode(" "),_vm._l((_vm.addresses),function(address,index){return _vm._ssrNode("<div class=\"col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2\">","</div>",[_vm._ssrNode("<div class=\"a-box a-spacing-none normal-desktop-address-tile\">","</div>",[_vm._ssrNode("<div class=\"a-box-inner a-padding-none\"><div class=\"address-section-no-default\"><div class=\"a-spacing-small\"><ul class=\"a-unordered-list a-nostyle a-vertical\"><li><h5><b>"+_vm._ssrEscape(_vm._s(address.fullName))+"</b></h5></li> <li>"+_vm._ssrEscape(_vm._s(address.streetAddress))+"</li> <li>"+_vm._ssrEscape(_vm._s(address.city)+", "+_vm._s(address.state)+" "+_vm._s(address.zipCode))+"</li> <li>"+_vm._ssrEscape(_vm._s(address.country))+"</li> <li>"+_vm._ssrEscape("Phone number: "+_vm._s(address.phoneNumber))+"</li></ul></div></div></div> "),_vm._ssrNode("<div class=\"edit-address-desktop-link\">","</div>",[_c('nuxt-link',{attrs:{"to":("/address/" + (address._id))}},[_vm._v("Edit")]),_vm._ssrNode("\n                        |  \n                        <a href=\"#\">Delete</a>\n                        |  \n                       <a href=\"#\">Set as Default</a>")],2)],2)])}),_vm._ssrNode(" <div class=\"col-lg-4 col-md-3 col-sm-12\"></div>")],2)])],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/address/index.vue?vue&type=template&id=1336b7e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/address/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var addressvue_type_script_lang_js_ = ({
  middleware: 'auth',

  async asyncData({
    $axios
  }) {
    try {
      let response = await $axios.$get(`${"https://ecommstore2019.herokuapp.com"}/api/addresses`);

      if (response.success) {
        return {
          addresses: response.addresses
        };
      }
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      message: '',
      addresses: {}
    };
  },

  methods: {
    async onDeleteAddress(id, index) {
      try {
        let response = await this.$axios.$delete(`${"https://ecommstore2019.herokuapp.com"}/api/addresses/${id}`);

        if (response.success) {
          this.message = response.message;
          this.addresses.splice(index, 1);
        }
      } catch (error) {
        this.message = error.message;
      }
    },

    async onSetDefault(id) {
      try {
        let response = await this.$axios.$put(`${"https://ecommstore2019.herokuapp.com"}/api/addresses/set/default`, {
          id: id
        });

        if (response.success) {
          this.message = response.message;
          await this.$auth.fetchUser();
          await this.$store.dispatch('setLoggedUser');
        }
      } catch (error) {
        this.message = error.message;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/address/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_addressvue_type_script_lang_js_ = (addressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/address/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_addressvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8665a0a8"
  
)

/* harmony default export */ var address = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map