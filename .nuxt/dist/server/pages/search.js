exports.ids = [13];
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("697f26b8", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-rate-it-rating-item svg{transform:scale(.6)}.product-image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px;background:#ccc}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=template&id=4d9d414d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"listingPage"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xl-2 col-lg-3 md-4 col-sm-4\"></div> "),_vm._ssrNode("<div class=\"col-xl-10 col-lg-9 md-8 col-sm-8\">","</div>",[_vm._ssrNode("<div class=\"mainResults\">","</div>",[_vm._ssrNode("<ul class=\"s-result-list\">","</ul>",_vm._l((_vm.products),function(product){return _vm._ssrNode("<li class=\"s-result-item celwidget\">","</li>",[_vm._ssrNode("<div class=\"s-item-container\">","</div>",[_vm._ssrNode("<div class=\"a-spacing-micro\"><div class=\"bestSeller\"><a href=\"#\">Best Seller</a></div></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-3 text-center\"><a href=\"#\"><img"+(_vm._ssrAttr("src",product.photo || "https://i.pinimg.com/originals/e7/83/ff/e783ff19f77241517137a0fa6a709ec2.jpg"))+" class=\"img-fluid\" style=\"width: 150px\"></a></div> "),_vm._ssrNode("<div class=\"col-sm-9\">","</div>",[_vm._ssrNode("<div class=\"a-row a-spacing-small\">","</div>",[_c('nuxt-link',{staticClass:"a-link-normal",attrs:{"to":("/products/" + (product._id))}},[_c('h2',{staticClass:"a-size-medium"},[_vm._v("\n                          "+_vm._s(product.title)+"\n                          "),_c('span',{staticClass:"a-letter-space"}),_vm._v(" "),_c('span',{staticClass:"a-letter-space"}),_vm._v(" "),_c('span',{staticClass:"a-size-small a-color-secondary"},[_vm._v("Sep 25, 2020")])])])],1),_vm._ssrNode(" <div class=\"a-row a-spacing-small\"><span class=\"a-size-small a-color-secondary\">by</span> <span class=\"a-size-small a-color-secondary\"><a href=\"#\" class=\"a-link-normal a-text-normal\">"+_vm._ssrEscape("\n                          "+_vm._s(product.owner.name)+"\n                        ")+"</a></span></div> <div class=\"a-row\"><span class=\"a-size-small\">Ships to Sylhet</span></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-7\"><div class=\"a-row a-spacing-none\"><a href=\"#\" class=\"a-link-normal a-text-normal\">\n                             Hardcover\n                          </a></div> <div class=\"a-row a-spacing-none\"><a href=\"#\" class=\"a-link-normal a-text-normal\"><span class=\"a-offscreen\">"+_vm._ssrEscape("$"+_vm._s(product.price))+"</span> <span class=\"a-color-base sx-zero-spacing\"><span class=\"sx-price sx-price-large\"><sup class=\"sx-price-currency\">$</sup> <span class=\"sx-price-whole\">"+_vm._ssrEscape(_vm._s(product.price))+"</span> <sup class=\"sx-price-fractional\">99</sup></span></span></a> <span class=\"a-letter-space\"></span> <span class=\"a-size-base-plus a-color-secondary a-text-strike\">$28.99</span></div> <div class=\"a-row a-spacing-none\"><span class=\"a-size-small a-color-secondary\">Free with Audible Trial</span></div> <hr> <span class=\"a-size-small a-color-secondary\">\n                          Other Formats:\n                          <span class=\"a-letter-space\"></span> <a href=\"#\" class=\"a-size-small a-link-normal a-text-normal\">Audio CD</a></span></div> "),_vm._ssrNode("<div class=\"col-sm-5\">","</div>",[_vm._ssrNode("<div class=\"a-row a-spacing-mini\">","</div>",[_c('client-only',[_c('star-rating',{attrs:{"rating":product.averageRating,"show-rating":false,"glow":1,"border-width":1,"rounded-corners":true,"read-only":true,"star-size":18,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1)],1)])],2)],2)],2)])],2)])}),0)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=4d9d414d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const rating =  false ? undefined : {};
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  components: {
    StarRating: rating.StarRating
  },
  watchQuery: ['title'],

  async asyncData({
    $axios,
    query
  }) {
    try {
      let products = await $axios.$post('https://ecommstore2019.herokuapp.com/api/search', {
        title: query.title
      });
      return {
        products
      };
    } catch (error) {
      console.log(error);
    }
  }

});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "546bf0d0"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map