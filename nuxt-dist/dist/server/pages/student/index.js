exports.ids = [14];
exports.modules = {

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "z"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('layout'));

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d3fc49c0", content, true, context)
};

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/student/index.vue?vue&type=template&id=17903510&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('v-container',[_c('v-row',[_c('div',{staticClass:"section-bg",staticStyle:{"background":"rgba(0,0,0,0)"},attrs:{"id":"services"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6 col-lg-4 wow bounceInUp",attrs:{"data-wow-duration":"1.4s"}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"icon",staticStyle:{"background":"#fff0da"}},[_c('i',{staticClass:"ion-ios-bookmarks-outline",staticStyle:{"color":"#e98e06"}})]),_vm._v(" "),_c('h4',{staticClass:"title"},[_c('a',{attrs:{"href":""}},[_vm._v("San Project")])]),_vm._v(" "),_c('p',{staticClass:"description"},[_vm._v("Fitur yang satu ini menyediakan program-program persiapan ujian dan pelatihan kemampuan siswa,seperti tryout, seminar motivasi, workshop minat bakat dan education camp.")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 wow bounceInUp",attrs:{"data-wow-duration":"1.4s"}},[_c('nuxt-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":{
                          name: 'student-classes',
                          
                        }}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"icon",staticStyle:{"background":"#fceef3"}},[_c('v-icon',{staticStyle:{"color":"#ff689b"}},[_vm._v("mdi-google-classroom")])],1),_vm._v(" "),_c('h4',{staticClass:"title"},[_c('a',{attrs:{"href":""}},[_vm._v("San Class")])]),_vm._v(" "),_c('p',{staticClass:"description"},[_vm._v("Melalui fitur ini, kamu dapat melatih kemampuan kamu dalam mengejerjakan soal-soal mulai dari yang mudah hingga yang sulit dilengkapi dengan analisis IRT dan pembahasannya.")])])])],1),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 wow bounceInUp",attrs:{"data-wow-delay":"0.1s","data-wow-duration":"1.4s"}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"icon",staticStyle:{"background":"#e6fdfc"}},[_c('i',{staticClass:"ion-ios-calculator-outline",staticStyle:{"color":"#3fcdc7"}})]),_vm._v(" "),_c('h4',{staticClass:"title"},[_c('a',{attrs:{"href":""}},[_vm._v("San Hitung")])]),_vm._v(" "),_c('p',{staticClass:"description"},[_vm._v("Fitur ini digunakan untuk menghitung berbagai potensi diri kamu, mulai dari minat dan bakat kamu, kecenderungan kecerdasan hingga potensi kuliah dan karir kamu.")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 wow bounceInUp",attrs:{"data-wow-delay":"0.1s","data-wow-duration":"1.4s"}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"icon",staticStyle:{"background":"#eafde7"}},[_c('i',{staticClass:"ion-ios-analytics-outline",staticStyle:{"color":"#41cf2e"}})]),_vm._v(" "),_c('h4',{staticClass:"title"},[_c('a',{attrs:{"href":""}},[_vm._v("San Grade")])]),_vm._v(" "),_c('p',{staticClass:"description"},[_vm._v("Fitur yang satu ini dikhususkan untuk mereka yang akan melanjutkan pendidikan ke perguruan tinggi, terdapat batas minimum yang dapat dijadikan acuan dan tolak ukur untuk masuk ke suatu jurusan tertentu. ")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 wow bounceInUp",attrs:{"data-wow-delay":"0.2s","data-wow-duration":"1.4s"}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"icon",staticStyle:{"background":"#e1eeff"}},[_c('i',{staticClass:"ion-ios-book-outline",staticStyle:{"color":"#2282ff"}})]),_vm._v(" "),_c('h4',{staticClass:"title"},[_c('a',{attrs:{"href":""}},[_vm._v("San Les")])]),_vm._v(" "),_c('p',{staticClass:"description"},[_vm._v("Adalah fitur yang digunakan untuk menunjang proses belajar di sanedu center, mulai dari agenda belajar, jadwal guru, hingga dapat digunakan untuk memilih jadwal les kamu.")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-lg-4 wow bounceInUp",attrs:{"data-wow-delay":"0.2s","data-wow-duration":"1.4s"}},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"icon",staticStyle:{"background":"#ecebff"}},[_c('i',{staticClass:"ion-ios-videocam-outline",staticStyle:{"color":"#8660fe"}})]),_vm._v(" "),_c('h4',{staticClass:"title"},[_c('a',{attrs:{"href":""}},[_vm._v("San Video")])]),_vm._v(" "),_c('p',{staticClass:"description"},[_vm._v("Adalah kumpulan pembahasan materi pembelajaran melalui video, yang dapat digunakan untuk memahami suatu materi lebih dalam.")])])])])])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/student/index.vue?vue&type=template&id=17903510&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/student/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var studentvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "SANEDU | Student Dashboard"
    };
  },

  middleware: ['auth-student'],
  layout: 'home',

  data() {
    return {// isAuth: true
    };
  },

  mounted: function () {// console.log(this.$auth.$storage._state["_token.local"]);
  }
});
// CONCATENATED MODULE: ./pages/student/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_studentvue_type_script_lang_js_ = (studentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(287);

// CONCATENATED MODULE: ./pages/student/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(396)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_studentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3f1dac58"
  
)

/* harmony default export */ var student = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VLayout: VLayout["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map