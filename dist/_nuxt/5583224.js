(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{548:function(t,e,n){var content=n(549);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("d9e645ec",content,!0,{sourceMap:!1})},549:function(t,e,n){(e=n(8)(!1)).push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=e},583:function(t,e,n){"use strict";n(47),n(25),n(37);var r=n(0),o=(n(548),n(58)),c=n(32),l=n(21),v=n(51),d=n(79),h=n(5),f=n(1),m=n(10);e.a=Object(h.a)(o.a,c.a,v.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(f.f)(n+footer+r),paddingLeft:this.app?Object(f.f)(o):void 0,paddingRight:this.app?Object(f.f)(c):void 0,paddingTop:Object(f.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(f.o)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(f.o)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},710:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(551),c=n(550),l=n(43);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(c.d)("eager"),Object(c.c)("required",d(d({},o.f),{},{message:"{_field_} can not be empty"}));var h={auth:!1,layout:"empty",components:{ValidationProvider:c.b,ValidationObserver:c.a},data:function(){return{auth:{username:null,password:null},show1:!1,show2:!1,show3:!1,snackbar:!1,text:"",timeout:4e3,dialog:!1,isLoading:!1}},mounted:function(){this.$auth.loggedIn&&(0==this.$auth.$state.user.is_teacher&&this.$router.push("/student"),1==this.$auth.$state.user.is_teacher&&this.$router.push("/teacher"))},methods:d(d({},Object(l.c)(["SET_IS_AUTH","SET_API_TOKEN"])),{},{login:function(){var t=this;this.isLoading=!0,this.$auth.loginWith("local",{data:{username:this.auth.username,password:this.auth.password}}).then((function(e){console.log(e.data),t.SET_IS_AUTH(!0),t.$auth.setUser(e.data),t.$auth.setUserToken(e.data.access_token),t.SET_API_TOKEN(t.$auth.$storage._state["_token.local"]),console.log(t.$auth),t.isLoading=!1,0==e.data.is_teacher&&t.$router.push("/student"),1==e.data.is_teacher&&t.$router.push("/teacher")})).catch((function(e){t.text=e.response.data.message,t.snackbar=!0,t.isLoading=!1}))}})},f=n(36),m=n(61),k=n.n(m),_=n(526),w=n(227),x=n(215),y=n(93),O=n(600),C=n(528),j=n(703),T=n(519),S=n(220),$=n(212),V=n(216),P=n(584),A=n(583),B=n(531),E=n(518),L=n(59),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("section",{staticStyle:{height:"100%"}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto",staticStyle:{"z-index":"50",position:"relative"},attrs:{"max-width":"400"}},[n("v-toolbar",{attrs:{color:"white",light:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("a",{staticClass:"my-1",staticStyle:{"font-weight":"bolder","font-size":"22px",color:"#424242"}},[t._v("\nSign In\n     ")])])],1)],1)],1),t._v(" "),n("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{counter:30,"error-messages":r,label:"Username",dense:"",outlined:""},model:{value:t.auth.username,callback:function(e){t.$set(t.auth,"username",e)},expression:"auth.username"}})]}}],null,!0)})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{ref:"password",attrs:{counter:20,name:"password","error-messages":r,outlined:"",dense:"","append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",hint:"Your Password",required:"",label:"Password"},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.auth.password,callback:function(e){t.$set(t.auth,"password",e)},expression:"auth.password"}})]}}],null,!0)})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("nuxt-link",{attrs:{to:"/register"}},[n("a",{staticClass:"text-left ml-4",staticStyle:{"font-size":"14px",color:"#2196F3","font-weight":"bold"}},[t._v("\n                            Belum punya akun ? Daftar disini !\n                            ")])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"pa-5",staticStyle:{"font-weight":"bold"},attrs:{color:"primary",disabled:r,rounded:""},on:{click:t.login}},[t._v("\n                            SIGN IN\n                              ")])],1)],1)]}}])})],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"wave wave1"}),t._v(" "),n("div",{staticClass:"wave wave2"}),t._v(" "),n("div",{staticClass:"wave wave3"}),t._v(" "),n("div",{staticClass:"wave wave4"})],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v("\n            Close\n          ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n\n        ")])],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[t._v("\n          Please Wait...\n          "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),t._v(" "),1==t.isLoading?n("div",{staticClass:"text-center"},[n("v-overlay",{attrs:{value:t.overlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1):t._e(),t._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v("\n          Close\n        ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n\n      ")])],1),t._v(" "),n("notifications",{attrs:{group:"foo"}})],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VApp:_.a,VBtn:w.a,VCard:x.a,VCardActions:y.a,VCardText:y.c,VCol:O.a,VContainer:C.a,VDialog:j.a,VDivider:T.a,VOverlay:S.a,VProgressCircular:$.a,VProgressLinear:V.a,VRow:P.a,VSnackbar:A.a,VSpacer:B.a,VTextField:E.a,VToolbar:L.a})}}]);