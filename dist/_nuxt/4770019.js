(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{528:function(t,e,n){var content=n(529);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("d9e645ec",content,!0,{sourceMap:!1})},529:function(t,e,n){(e=n(10)(!1)).push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=e},551:function(t,e,n){"use strict";n(44),n(28),n(35);var o=n(0),r=(n(528),n(73)),c=n(31),l=n(22),v=n(51),d=n(82),h=n(6),m=n(1),f=n(8);e.a=Object(h.a)(r.a,c.a,v.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(m.f)(n+footer+o),paddingLeft:this.app?Object(m.f)(r):void 0,paddingRight:this.app?Object(m.f)(c):void 0,paddingTop:Object(m.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(f.e)("auto-height",this),0==this.timeout&&Object(f.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(m.o)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(m.o)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},641:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={auth:!1,data:function(){return{auth:{username:null,password:null},snackbar:!1,text:"",timeout:2e3,dialog:!1,isLoading:!1}},mounted:function(){this.$auth.loggedIn&&this.$router.push("/student")},methods:l(l({},Object(r.c)(["SET_IS_AUTH","SET_API_TOKEN"])),{},{login:function(){var t=this;this.isLoading=!0,this.$auth.loginWith("local",{data:{username:this.auth.username,password:this.auth.password}}).then((function(e){console.log(e.data),t.SET_IS_AUTH(!0),t.$auth.setUser(e.data),t.$auth.setUserToken(e.data.access_token),t.SET_API_TOKEN(t.$auth.$storage._state["_token.local"]),console.log(t.$auth),t.isLoading=!1,t.$router.push("/student")})).catch((function(e){t.text=e.response.data.message,t.snackbar=!0,t.isLoading=!1}))}})},d=n(48),h=n(89),m=n.n(h),f=n(508),k=n(231),_=n(212),x=n(205),w=n(551),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-xl-10 col-lg-12 col-md-9"},[n("div",{staticClass:"card o-hidden border-0 shadow-lg my-5"},[n("div",{staticClass:"card-body p-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 d-none d-lg-block bg-login-image"}),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"p-5"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"h4 text-gray-900 mb-4"},[t._v("Welcome Back!")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("Halaman Beranda")])],1),t._v(" "),n("form",{staticClass:"user"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.username,expression:"auth.username"}],staticClass:"form-control form-control-user",attrs:{type:"text",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Your Username..."},domProps:{value:t.auth.username},on:{input:function(e){e.target.composing||t.$set(t.auth,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.password,expression:"auth.password"}],staticClass:"form-control form-control-user",attrs:{type:"password",id:"exampleInputPassword",placeholder:"Password"},domProps:{value:t.auth.password},on:{input:function(e){e.target.composing||t.$set(t.auth,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"custom-control custom-checkbox small"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customCheck"}},[t._v("Remember\n                                                    Me")])])]),t._v(" "),n("a",{staticClass:"btn btn-primary btn-user btn-block",attrs:{href:"javascript:void(0)"},on:{click:t.login}},[t._v("\n                                            Login\n                                        ")]),t._v(" "),n("hr")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"small",attrs:{href:"#"}},[t._v("Forgot Password?")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"small",attrs:{href:"#"}},[t._v("Create an Account!")])])])])])])])])]),t._v(" "),1==t.isLoading?n("div",{staticClass:"text-center"},[n("v-overlay",{attrs:{value:t.overlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1):t._e(),t._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("\n          Close\n        ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n\n      ")])],1)]),t._v(" "),n("notifications",{attrs:{group:"foo"}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VApp:f.a,VBtn:k.a,VOverlay:_.a,VProgressCircular:x.a,VSnackbar:w.a})}}]);