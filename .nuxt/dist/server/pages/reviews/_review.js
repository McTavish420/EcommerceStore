exports.ids = [12];
exports.modules = {

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reviews/_review.vue?vue&type=template&id=75e8b9e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"reviewPage mt-3\">","</div>",[_vm._ssrNode("<div class=\"container-fluid c-section\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-2\"></div> "),_vm._ssrNode("<div class=\"col-sm-8\">","</div>",[_vm._ssrNode("<div class=\"a-spacing-top-medium\">","</div>",[_vm._ssrNode("<h2 class=\"a-spacing-base\"><b>Create Review</b> for <b>"+_vm._ssrEscape(_vm._s(_vm.$store.getters.getProduct.title))+"</b></h2> <div class=\"row\"><div class=\"col-md-4 col-sm-3 col-3\"><img"+(_vm._ssrAttr("src",_vm.$store.getters.getProduct.photo))+" style=\"width: 100%; border-radius: 5px\"></div></div> <div class=\"a-spacing-top-medium\"></div> <hr> <h2 class=\"a-spacing-base\">Overall Rating</h2> "),_vm._ssrNode("<div class=\"a-row\">","</div>",[_c('client-only',{attrs:{"placeholder":"loading..."}},[_c('star-rating',{model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v},expression:"rating"}})],1)],1),_vm._ssrNode(" <div class=\"a-row a-spacing-top-large\"><h2>Add photo or video</h2> <p style=\"font-size: 14px; font-weight: 700;\">Shoppers find images and videos more helpful than text alone.</p></div> <div class=\"a-row a-spacing-top-medium\"><label class=\"choosefile-button\"><i class=\"fal fa-plus\"></i> <input type=\"file\"></label> <p>"+_vm._ssrEscape(_vm._s(_vm.fileName))+"</p></div> <div class=\"a-spacing-top-large\"></div> <hr> <div class=\"headline a-spacing-large\"><h2 class=\"a-spacing-base\">Add a headline</h2> <input type=\"text\" placeholder=\"What's most important to know?\""+(_vm._ssrAttr("value",(_vm.headline)))+" class=\"a-input-text\" style=\"width: 70%;\"></div> <div class=\"a-spacing-base\"><h2 class=\"a-spacing-base\">Write your review</h2> <textarea placeholder=\"What do you like or dislike? What did you see this product for?\" style=\"height:6em; width: 100%; padding: 10px\">"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></div>")],2),_vm._ssrNode(" <br> <br> <hr> <div class=\"a-spacing-top-medium\"><p style=\"font-size: 14px; font-weight: 700;\">This is how you'll appear to other customers:</p> <div class=\"media a-spacing-top-large\"><div class=\"media-left\"><img src=\"/img/avatar.png\" class=\"img-fluid\" style=\"width: 50px;\"></div> <div class=\"media-body pl-3 pt-2\"><input type=\"text\" disabled=\"disabled\""+(_vm._ssrAttr("value",_vm.$store.getters.getUser.userName))+" class=\"a-input-text\" style=\"width: 100%;\"></div></div></div> <div class=\"a-row a-spacing-top-medium\"><span class=\"a-color-tertiary\">Don't worry, you can always change this on your profile</span></div> <div class=\"a-row text-right a-spacing-top-large\"><span class=\"a-button-register\"><span class=\"a-button-inner\"><span class=\"a-button-text\">Submit</span></span></span></div>")],2),_vm._ssrNode(" <div class=\"col-sm-2\"></div>")],2),_vm._ssrNode(" <div class=\"a-spacing-large pb-5\"></div> <hr>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reviews/_review.vue?vue&type=template&id=75e8b9e1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reviews/_review.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var _reviewvue_type_script_lang_js_ = ({
  middleware: 'auth',
  components: {
    StarRating: rating.StarRating
  },

  fetch({
    store,
    params
  }) {
    // console.log('inside page params fetch:\t', params);
    return store.dispatch('singleProduct', params.review);
  },

  beforeRouteEnter(to, from, next) {
    console.log('before from:\t', from);

    if (from.name === null) {
      next(vm => {
        // console.log('before enter: ', to.path);
        // vm.$router.push(`${to.path.toString()}`)
        vm.$store.dispatch('singleProduct', to.params.review);
      });
    } else {
      next();
    }
  },

  async asyncData({
    store,
    params
  }) {
    // console.log('inside page params async:\t', params);
    await store.dispatch('singleProduct', params.review);
  },

  data() {
    return {
      rating: 0,
      body: '',
      headline: '',
      selectedFile: null,
      fileName: null
    };
  },

  methods: {
    onSelectedFile(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },

    async onAddReview() {
      try {
        // console.log('params: \t', this.$route.params);
        let data = new FormData();
        data.append('headline', this.headline);
        data.append('body', this.body);
        data.append('rating', this.rating);
        data.append('photo', this.selectedFile, this.selectedFile.name);
        let response = await this.$axios.$post(`${"https://ecommstore2019.herokuapp.com"}/api/review/${this.$route.params.review}`, data);

        if (response.success) {
          this.$router.push({
            path: `/products/${this.$route.params.review}`
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/reviews/_review.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_reviewvue_type_script_lang_js_ = (_reviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/reviews/_review.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_reviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f24adf8"
  
)

/* harmony default export */ var _review = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_review.js.map