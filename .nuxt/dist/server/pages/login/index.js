exports.ids = [3];
exports.modules = {

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d9e645ec", content, true)

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      // Styles are not needed when
      // using the absolute prop.
      if (this.absolute) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application; // Should always move for y-axis
      // applicationable components.

      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bottom + footer + insetFooter),
        paddingLeft: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(left),
        paddingRight: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          mouseenter: () => window.clearTimeout(this.activeTimeout),
          mouseleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=60c0682e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-xl-10 col-lg-12 col-md-9"},[_c('div',{staticClass:"card o-hidden border-0 shadow-lg my-5"},[_c('div',{staticClass:"card-body p-0"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6 d-none d-lg-block bg-login-image"}),_vm._v(" "),_c('div',{staticClass:"col-lg-6"},[_c('div',{staticClass:"p-5"},[_c('div',{staticClass:"text-center"},[_c('h1',{staticClass:"h4 text-gray-900 mb-4"},[_vm._v("Welcome Back!")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Halaman Beranda")])],1),_vm._v(" "),_c('form',{staticClass:"user"},[_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.auth.username),expression:"auth.username"}],staticClass:"form-control form-control-user",attrs:{"type":"text","id":"exampleInputEmail","aria-describedby":"emailHelp","placeholder":"Enter Your Username..."},domProps:{"value":(_vm.auth.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.auth, "username", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.auth.password),expression:"auth.password"}],staticClass:"form-control form-control-user",attrs:{"type":"password","id":"exampleInputPassword","placeholder":"Password"},domProps:{"value":(_vm.auth.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.auth, "password", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"custom-control custom-checkbox small"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox","id":"customCheck"}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"customCheck"}},[_vm._v("Remember\n                                                    Me")])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary btn-user btn-block",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.login}},[_vm._v("\n                                            Login\n                                        ")]),_vm._v(" "),_c('hr')]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('a',{staticClass:"small",attrs:{"href":"#"}},[_vm._v("Forgot Password?")])]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('a',{staticClass:"small",attrs:{"href":"#"}},[_vm._v("Create an Account!")])])])])])])])])]),_vm._v(" "),(_vm.isLoading==true)?_c('div',{staticClass:"text-center"},[_c('v-overlay',{attrs:{"value":_vm.overlay}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"64"}})],1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('v-snackbar',{attrs:{"timeout":_vm.timeout},scopedSlots:_vm._u([{key:"action",fn:function(ref){
var attrs = ref.attrs;
return [_c('v-btn',_vm._b({attrs:{"color":"blue","text":""},on:{"click":function($event){_vm.snackbar = false}}},'v-btn',attrs,false),[_vm._v("\n          Close\n        ")])]}}]),model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_vm._v("\n      "+_vm._s(_vm.text)+"\n\n      ")])],1)]),_vm._v(" "),_c('notifications',{attrs:{"group":"foo"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=60c0682e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  auth: false,

  data() {
    return {
      auth: {
        username: null,
        password: null
      },
      snackbar: false,
      text: "",
      timeout: 2000,
      dialog: false,
      isLoading: false
    };
  },

  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push('/student');
    }
  },

  methods: { ...Object(external_vuex_["mapMutations"])(['SET_IS_AUTH', 'SET_API_TOKEN']),

    login() {
      //  this.$notify({
      //         'group': 'foo',
      //         'title': 'Kontol-kontol Anjing',
      //         'text': 'Terbuat Dari Nasi',
      //     }),
      this.isLoading = true, this.$auth.loginWith('local', {
        data: {
          username: this.auth.username,
          password: this.auth.password
        }
      }).then(response => {
        // this.$toast.show('Logging in...')
        console.log(response.data);
        this.SET_IS_AUTH(true); // this.SET_API_TOKEN(response.data.access_token);

        this.$auth.setUser(response.data);
        this.$auth.setUserToken(response.data.access_token);
        this.SET_API_TOKEN(this.$auth.$storage._state["_token.local"]); //  this.$auth.fetchUser();

        console.log(this.$auth);
        this.isLoading = false;
        this.$router.push('/student'); // console.log("Test !");
        // console.log(this.$auth.loggedIn);
        // this.$toast.success('Successfully authenticated')
        // this.$auth.setUserToken(response.data.access_token)
        // .then(() => this.$toast.success('User set!'))
      }).catch(error => {
        // this.isLoading = false;
        //   this.$notify({
        //     'group': 'foo',
        //     'title': 'Kontol-kontol Anjing',
        //     'text': 'Terbuat Dari Nasi',
        // })
        this.text = error.response.data.message;
        this.snackbar = true;
        this.isLoading = false; // this.isLoaded = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(24);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(285);

// CONCATENATED MODULE: ./pages/login/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "350674e8"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VApp: VApp["a" /* default */],VBtn: VBtn["a" /* default */],VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map