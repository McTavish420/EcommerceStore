exports.ids = [10];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7194eb0c", content, true, context)
};

/***/ }),

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
  add("367f6990", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReviewSection.vue?vue&type=template&id=3ea1c934&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<hr> "),_vm._ssrNode("<div class=\"reviewsMedley\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4 col-md-5 col-sm-12\">","</div>",[_vm._ssrNode("<div class=\"a-color-base\"><h2>"+_vm._ssrEscape(_vm._s(_vm.product.reviews.length)+" customer reviews")+"</h2></div> "),_vm._ssrNode("<div class=\"cr-widget-ACR\">","</div>",[_c('client-only',[_c('star-rating',{attrs:{"rating":_vm.product.averageRating,"show-rating":false,"glow":1,"border-width":1,"rounded-corners":true,"read-only":true,"star-size":12,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1),_vm._ssrNode(" <span><a href=\"#\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.product.averageRating)+"\n              ")+"<i class=\"a-icon a-icon-popover\"></i></a></span>")],2),_vm._ssrNode(" <div class=\"clearfix\"><div class=\"float-left\"><hr class=\"a-spacing-large\"></div></div> <h3 class=\"a-spacing-micro\">Review this product</h3> <div class=\"a-row a-spacing-large\">Share your thoughts with other customers</div> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<span class=\"a-button-base writeReviewButton cm-cr-button-wide\">","</span>",[_vm._ssrNode("<span class=\"a-button-inner\">","</span>",[_c('nuxt-link',{staticClass:"a-button-text",staticStyle:{"margin-left":"10px !important","margin-right":"10px !important"},attrs:{"to":_vm.$store.getters.getLog ? ("/reviews/" + (_vm.product._id)) : "/login","role":"button"}},[_vm._v("Write a customer review")])],1)])]),_vm._ssrNode(" <div class=\"clearfix\"><div class=\"float-left\"><hr class=\"mt-4 a-spacing-large\"></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 col-md-7 col-sm-12\">","</div>",[_vm._ssrNode("<div class=\"reviews-image-gallery\"><h3>Customer images</h3> <div class=\"a-spacing-small a-spacing-top-small\">"+(_vm._ssrList((_vm.reviews),function(review){return ("<img width=\"22.5%\""+(_vm._ssrAttr("src",review.photo))+" class=\"img-fluid\">")}))+"</div> <div><a href=\"#\">See all customer images</a></div></div> <div class=\"cr-widget-focalreviews\"><div class=\"card-padding\"><div class=\"review-header\"><h3><span class=\"a-size-base\">"+_vm._ssrEscape("Showing 1-8 of "+_vm._s(_vm.product.reviews.length)+" reviews")+"</span></h3></div> <div class=\"review-sort-type\"><span class=\"a-dropdown-container\"><span class=\"a-button a-button-dropdown\"><span class=\"a-button-inner\"><span class=\"a-button-text\" style=\"margin-left: 5px !important\"><span class=\"a-dropdown-prompt\">Top Reviews</span></span> <i class=\"a-icon a-icon-dropdown\"></i></span></span></span></div> "+(_vm._ssrList((_vm.reviews),function(review){return ("<div class=\"review-body\"><div class=\"genome-widget\"><a href=\"#\"><div class=\"profile-avatar\"><img src=\"https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png\"></div> <div class=\"profile-content\"><span class=\"a-profile-name\">"+_vm._ssrEscape(_vm._s(review.user.userName))+"</span></div></a></div> <div class=\"a-row\"><a href=\"#\">"+(_vm._ssrList((review.rating),function(i){return ("<i class=\"fas fa-star\"></i>")}))+"</a> <span class=\"a-letter-space\"></span> <a href=\"#\" class=\"review-title\">"+_vm._ssrEscape(_vm._s(review.headline))+"</a></div> <span class=\"review-date\">June 28, 2016</span> <div class=\"review-data\"><span class=\"a-color-secondary\">Format: Hardcover</span> <div style=\"width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;\"></div> <span class=\"avp-badge a-color-state\">Verified Purchase</span></div> <div class=\"review-body overflow-auto\" style=\"white-space: wrap !important; text-overflow: clip !important\"><span>"+_vm._ssrEscape(_vm._s(review.body))+"</span></div> <div class=\"review-comments\"><div class=\"a-spacing-small\"><span class=\"a-size-base a-color-tertiary\">60 people found this helpful</span></div> <div class=\"cr-helpful-button\"><span class=\"a-button-base\"><span class=\"a-button-inner\"><a href=\"#\" class=\"a-button-text\"><div class=\"cr-helpful-text\">Helpful</div></a></span></span></div></div></div>")}))+"</div></div> "),_vm._ssrNode("<div class=\"review-footer\">","</div>",[_vm._ssrNode("<div class=\"a-row\">","</div>",[_vm._ssrNode("<span id=\"a-autoid-15\" class=\"a-button a-button-base writeReviewButton\">","</span>",[_vm._ssrNode("<span class=\"a-button-inner\">","</span>",[_c('nuxt-link',{staticClass:"a-button-text",staticStyle:{"margin-left":"10px !important","margin-right":"10px !important"},attrs:{"to":_vm.$store.getters.getLog ? ("/reviews/" + (_vm.product._id)) : "/login","role":"button"}},[_vm._v("Write a customer review")])],1)])])])],2),_vm._ssrNode(" <div class=\"col-lg-2 col-md-0 col-sm-0\"></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ReviewSection.vue?vue&type=template&id=3ea1c934&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ReviewSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var ReviewSectionvue_type_script_lang_js_ = ({
  props: ['product', 'reviews'],
  components: {
    StarRating: rating.StarRating
  },
  computed: { ...Object(external_vuex_["mapGetters"])(['getLog'])
  }
});
// CONCATENATED MODULE: ./components/ReviewSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ReviewSectionvue_type_script_lang_js_ = (ReviewSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ReviewSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ReviewSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "25e6b5c6"
  
)

/* harmony default export */ var ReviewSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewSection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewSection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewSection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewSection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewSection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewSection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-rate-it-rating-item svg{transform:scale(.6)}.product-image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:5px;background:#ccc}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".authorNameCol a{font-size:18px!important;font-weight:400!important}.authorImageSingle img{border-radius:5px}.authorContent{padding:0!important}.cr-lighthouse-term{border-radius:3px;border:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_item.vue?vue&type=template&id=15b1ce9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"a-spacing-top-medium\"></div> <div class=\"container-fluid\"><div class=\"wayfinding-breadcrumbs-container\"><ul class=\"a-unordered-list a-horizontal a-size-small\" style=\"margin-left: 0px !important\"><li><span class=\"a-list-item\"><a href=\"#\" class=\"a-link-normal a-color-tertiary\">"+_vm._ssrEscape(_vm._s(_vm.product.category.type))+"</a></span></li> <li><span class=\"a-list-item\">&gt;</span></li> <li><span class=\"a-list-item\"><a href=\"#\" class=\"a-link-normal a-color-tertiary\">"+_vm._ssrEscape(_vm._s(_vm.product.title))+"</a></span></li></ul></div></div> "),_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"dp-container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-3 col-md-3 col-sm-4\"><div class=\"leftCol\"><div clas=\"imgBlock\"><div class=\"eBooksimg\"><img"+(_vm._ssrAttr("src",_vm.product.photo))+" class=\"img-fluid\"></div></div> <div class=\"authorFollow\"><hr class=\"a-divider-normal\"> <h1 class=\"authorFollowHeading\">Follow The Author</h1> <div class=\"a-spacing-top-small\"><div class=\"row\"><div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3\"><div class=\"smallAuthorImageContainer\"><a href=\"#\"><img"+(_vm._ssrAttr("src",_vm.product.owner.photo))+" class=\"img-fluid\"></a></div></div> <div class=\"col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3 px-0\"><div class=\"authorNameCol\"><a href=\"#\">"+_vm._ssrEscape(_vm._s(_vm.product.owner.name))+"</a></div></div> <div class=\"col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6\"><div class=\"authorBtn mt-2\"><a href=\"#\"><span class=\"btnFollow\"><span class=\"a-btn-inner\"><button class=\"a-btn-text\">+ Follow</button></span></span></a></div></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-8\">","</div>",[_vm._ssrNode("<div class=\"centerCol\">","</div>",[_vm._ssrNode("<div class=\"titleDiv\"><h1 class=\"productTitle\"><span class=\"largeTitle\">"+_vm._ssrEscape(_vm._s(_vm.product.title))+"</span> <span class=\"smallTitle\">Paperback</span></h1></div> <div class=\"bylineinfo\">\n              by\n              <a href=\"#\" class=\"authorName\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.product.owner.name)+"\n                ")+"<i class=\"fas fa-chevron-down\" style=\"font-size: 8px !important; color: #555 !important;\"></i></a> (Author)\n            </div> "),_vm._ssrNode("<div class=\"reviewGroup\">","</div>",[_c('client-only',[_c('star-rating',{attrs:{"rating":_vm.product.averageRating,"show-rating":false,"glow":2,"border-width":1,"rounded-corners":true,"read-only":true,"star-size":18,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1)],1),_vm._ssrNode(" <hr style=\"margin-top: 10px;\"> <div class=\"mediaMatrix\"><div class=\"formats\"><a href=\"#\" class=\"link-expander\">\n                  &gt;\n                  <span class=\"tmmShowPrompt\">See all 18 formats and editions</span></a> <ul><li class=\"swatchElement\" style=\"width: 117px;\"><span class=\"a-list-item\"><span class=\"a-button-toggle\"><span class=\"a-button-inner\"><a href=\"#\" class=\"a-button-text text-center\"><span>Kindle</span> <br> <span class=\"a-color-secondary\">-</span></a></span></span> <span class=\"tmm-olp-links\"></span> <span class=\"tmm-olp-links\"><a href=\"#\" class=\"a-size-mini\"><span class=\"kcpAppBox\"><span class=\"a-declarative\">\n                              Read with Our\n                              <span class=\"a-text-bold\">Free App</span></span></span></a></span></span></li> <li class=\"swatchElement\" style=\"width: 117px;\"><span class=\"a-list-item\"><span class=\"a-button-toggle\"><span class=\"a-button-inner\"><a href=\"#\" class=\"a-button-text text-center\"><span><img src=\"/img/audibleLogo.png\" class=\"img-fluid\" style=\"width: 20px;\">Audible\n                            </span> <br> <span class=\"a-color-secondary\">-</span></a></span></span> <span class=\"tmm-olp-links\"></span> <span class=\"tmm-olp-links\"><a href=\"#\" class=\"a-size-mini text-center\"><span class=\"kcpAppBox\"><span class=\"a-declarative\"><span class=\"a-text-bold\">Free App</span> with your Audible Trial\n                            </span></span></a></span></span></li> <li class=\"swatchElement\" style=\"width: 117px;\"><span class=\"a-list-item\"><span class=\"a-button-toggle\"><span class=\"a-button-inner\"><a href=\"#\" class=\"a-button-text text-center\"><span>Paperback</span> <br> <span class=\"a-color-secondary\">-</span></a></span></span></span></li></ul></div></div> <div class=\"bookDescription\"><div class=\"bookDescriptionInner\">"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</div></div> <div class=\"aboutEbooksFeature\"><hr> <div class=\"row\"><div class=\"col-sm-4 mb-1\"><div class=\"a-declarative\">\n                    Length:\n                    <span><a href=\"#\">\n                        386 pages\n                        <i class=\"a-icon a-icon-popover\"></i></a></span></div></div></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-3 col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"combinedBuyBox\">","</div>",[_vm._ssrNode("<div class=\"buyBox\">","</div>",[_vm._ssrNode("<div class=\"a-section\"><div class=\"clearfix\"><div class=\"float-left\"><form><input type=\"radio\" id=\"test1\" name=\"radio-group checked\"> <label for=\"test1\">Buy Now</label></form></div> <div class=\"float-right\"><span class=\"a-size-medium a-color-price offer-price a-text-normal\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price))+"</span></div></div></div> <div class=\"a-section a-spacing-none\"><div class=\"row\"><div class=\"col-sm-5 col-5\"><select><option value=\"1\">Qty:   1</option> <option value=\"2\">Qty:   2</option> <option value=\"3\">Qty:   3</option> <option value=\"4\">Qty:   4</option> <option value=\"5\">Qty:   5</option></select></div></div></div> <div class=\"a-section a-spacing-small a-spacing-top-micro\"><div class=\"row\"><span class=\"a-color-base buyboxShippingLabel\"></span></div></div> <div class=\"a-section a-spacing-small\"><div class=\"a-section a-spacing-none\"><span class=\"a-size-medium a-color-success\">In Stock</span></div></div> "),(_vm.$store.getters.getLog)?_vm._ssrNode("<div class=\"a-section\">","</div>",[_vm._ssrNode("<div class=\"a-button-stack\"><span class=\"a-spacing-small a-button-primary a-button-icon\"><span class=\"a-button-inner\"><i class=\"a-icon a-icon-cart\"></i> <input type=\"submit\" name=\"submit.add-to-cart\" class=\"a-button-input\"> <span class=\"a-button-text\">Add to Cart</span></span></span></div> "),_vm._ssrNode("<div class=\"a-button-stack\">","</div>",[_c('nuxt-link',{staticClass:"a-spacing-small a-button-primary a-button-icon",attrs:{"to":"/cart"}},[_c('span',{staticClass:"a-button-inner"},[_c('i',{staticClass:"a-icon a-icon-buynow"}),_vm._v(" "),_c('input',{staticClass:"a-button-input",attrs:{"type":"submit","name":"submit.add-to-cart"}}),_vm._v(" "),_c('span',{staticClass:"a-button-text"},[_vm._v("Buy Now")])])])],1)],2):_vm._ssrNode("<div class=\"a-section\">","</div>",[_vm._ssrNode("<div class=\"a-button-stack\">","</div>",[_c('nuxt-link',{staticClass:"a-spacing-small a-button-primary a-button-icon",attrs:{"to":"/login"}},[_c('span',{staticClass:"a-button-inner"},[_c('i',{staticClass:"a-icon a-icon-cart"}),_vm._v(" "),_c('input',{staticClass:"a-button-input",attrs:{"type":"submit","name":"submit.add-to-cart"}}),_vm._v(" "),_c('span',{staticClass:"a-button-text"},[_vm._v("Add to Cart")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"a-button-stack\">","</div>",[_c('nuxt-link',{staticClass:"a-spacing-small a-button-primary a-button-icon",attrs:{"to":"/login"}},[_c('span',{staticClass:"a-button-inner"},[_c('i',{staticClass:"a-icon a-icon-buynow"}),_vm._v(" "),_c('input',{staticClass:"a-button-input",attrs:{"type":"submit","name":"submit.add-to-cart"}}),_vm._v(" "),_c('span',{staticClass:"a-button-text"},[_vm._v("Buy Now")])])])],1)],2),_vm._ssrNode(" "+((_vm.$store.getters.getLog)?("<div class=\"a-row\"><div class=\"a-spacing-top-small\"><div class=\"a-section a-spacing-none\"><div class=\"a-section a-spacing-none a-spacing-top-mini\">\n                      This item may ship to\n                      <b>"+_vm._ssrEscape(_vm._s(_vm.$store.getters.getCity))+"</b> <b>"+_vm._ssrEscape("Get it by "+_vm._s(_vm.estimatedDelivery))+"</b></div></div></div></div>"):"<!---->")+" <hr> "),(_vm.$store.getters.getLog)?_vm._ssrNode("<span class=\"a-declarative\">","</span>",[_c('nuxt-link',{staticClass:"a-link-normal",attrs:{"to":"/address"}},[_c('div',{staticClass:"a-row a-spacing-mini"},[_c('i',{staticClass:"fal fa-map-market-alt"}),_vm._v(" "),_c('span',{staticClass:"a-size-small"},[_vm._v("Deliver to "+_vm._s(_vm.$store.getters.getCity))])])])],1):_vm._e(),_vm._ssrNode(" <br> <hr>")],2)])])],2),_vm._ssrNode(" <br> <hr> <div class=\"books-entity-teaser\"><div class=\"bucket\"><h2>More about the author</h2> <div class=\"row\"><div class=\"col-md-2 col-sm-4 col-4\"><div class=\"authorContent\"><div class=\"authorImageSingle\"><a href=\"#\"><img"+(_vm._ssrAttr("src",_vm.product.owner.photo))+" class=\"img-fluid\"></a></div> <div class=\"authorFollow\"><button type=\"button\" class=\"followButton\"><span class=\"pr-fb-icon\"></span> <span class=\"pr-fb-text\">Follow</span></button></div></div></div> <div class=\"col-md-10 col-sm-8 col-8 pl-0\"><div class=\"mainContent\"><h3>Biography</h3> <div id=\"authorBio\">"+_vm._ssrEscape(_vm._s(_vm.product.owner.about))+"</div></div></div></div></div></div> "),_c('ReviewSection',{attrs:{"product":_vm.product,"reviews":_vm.reviews}})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products/_item.vue?vue&type=template&id=15b1ce9a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/ReviewSection.vue + 4 modules
var ReviewSection = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var _itemvue_type_script_lang_js_ = ({
  components: {
    ReviewSection: ReviewSection["default"],
    StarRating: rating.StarRating
  },

  async asyncData({
    $axios,
    route
  }) {
    try {
      let singleProduct = $axios.$get(`${"https://ecommstore2019.herokuapp.com"}/api/products/${route.params.item}`);
      let manyReviews = $axios.$get(`${"https://ecommstore2019.herokuapp.com"}/api/review/${route.params.item}`);
      let shipments = $axios.$post(`${"https://ecommstore2019.herokuapp.com"}/api/payment/shipment`, {
        shipment: 'normal'
      });
      const [productResponse, reviewResponse, shipmentResponse] = await Promise.all([singleProduct, manyReviews, shipments]); //  console.log('average rateing:\t', productResponse.product.averageRating);
      //  console.log('reviews:\n', reviewResponse);

      return {
        product: productResponse.product,
        reviews: reviewResponse.reviews,
        estimatedDelivery: shipmentResponse.shipment.estimated
      };
    } catch (error) {
      console.log('something went wrong');
      console.log('failed to try\n', error);
    }
  },

  data() {
    return {
      product: {
        category: {
          type: ''
        },
        owner: {
          name: ''
        },
        title: '',
        description: '',
        photo: '',
        price: 0,
        stockQuantity: 0,
        reviews: []
      },
      reviews: [],
      estimatedDelivery: {}
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])(['addProductToCart']),
    ...Object(external_vuex_["mapGetters"])(['getLog', 'getCity'])
  }
});
// CONCATENATED MODULE: ./pages/products/_item.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_itemvue_type_script_lang_js_ = (_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/products/_item.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1beee328"
  
)

/* harmony default export */ var _item = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ReviewSection: __webpack_require__(51).default})


/***/ })

};;
//# sourceMappingURL=_item.js.map