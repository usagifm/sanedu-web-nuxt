(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{511:function(t,e,n){var content=n(512);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("133fd770",content,!0,{sourceMap:!1})},512:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},529:function(t,e,n){"use strict";n(219);var o=n(220);e.a=Object(o.a)("flex")},530:function(t,e,n){"use strict";n(26);var o=n(0),r=(n(511),n(110)),c=n(31),l=n(134),d=n(133),v=n(221),h=n(177),f=n(51),m=n(1),_=n(8),x=n(5);e.a=Object(x.a)(c.a,l.a,d.a,v.a,h.a,f.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(m.f)(this.maxWidth),minWidth:Object(m.f)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(m.p)(this,"activator",!0)&&Object(_.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===m.t.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},548:function(t,e,n){var content=n(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("a60bb92c",content,!0,{sourceMap:!1})},551:function(t,e,n){"use strict";var o=n(134),r=n(51),c=n(5),l=n(8);e.a=Object(c.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},578:function(t,e,n){"use strict";n(548)},579:function(t,e,n){(e=n(10)(!1)).push([t.i,".rounded-card{border-radius:50px}",""]),t.exports=e},636:function(t,e,n){"use strict";n.r(e);n(19),n(67),n(88),n(58);var o=n(17),r=n(0),c=n(547),l=n(546),d=n(45);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(l.d)("eager"),Object(l.c)("required",h(h({},c.e),{},{message:"{_field_} can not be empty"}));var f={middleware:["auth-student"],layout:"home",components:{ValidationProvider:l.b,ValidationObserver:l.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,Promise.all([n.dispatch("class/getClassesData")]);case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{fields:["name","class_code","teacher_name","teacher_whatsapp","student_number","grade_level","school"],items:[],data:{class_code:""},snackbar:!1,text:"",timeout:2e3,dialog:!1,isLoading:!1,isLoaded:!1,color:"randomColor()",hitung:0,deleteModal:!1,class_selected:null,classCount:0}},mounted:function(){this.isLoaded=!0},computed:h({},Object(d.d)("class",{classes:function(t){return t.classes}})),methods:h(h({},Object(d.b)("class",["getClassesData","joinClass","unenrollFromClass"])),{},{submit:function(){var t=this;this.$refs.observer.validate(),this.isLoading=!0,this.joinClass(this.data).then((function(e){t.dialog=!1,t.isLoading=!1,t.text="Kelas Berhasil Ditambahkan",t.snackbar=!0})).catch((function(e){t.isLoading=!1,t.text=e,t.snackbar=!0}))},openDeleteModal:function(t){this.class_selected=t,this.deleteModal=!0},unenrollClass:function(){var t=this;this.unenrollFromClass(this.class_selected.id).then((function(e){t.deleteModal=!1,t.class_selected=null,t.text=e,t.snackbar=!0})).catch((function(e){t.deleteModal=!1,t.class_selected=null,t.text=e,t.snackbar=!0}))}})},m=(n(578),n(48)),_=n(89),x=n.n(_),y=n(644),C=n(507),k=n(207),w=n(228),O=n(492),j=n(217),V=n(516),A=n(549),L=n(503),S=n(550),D=n(496),M=n(529),T=n(551),I=n(206),$=n(169),B=n(526),P=n(122),E=n(211),F=n(43),z=n(208),W=n(552),J=n(544),R=n(506),N=n(494),Y=n(530),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-container",[0==t.isLoaded?n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{jalign:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):t._e(),t._v(" "),1==t.isLoaded?n("v-flex",{attrs:{"text-left":""}},[n("v-alert",{staticStyle:{"font-weight":"bold"},attrs:{color:"primary",dark:"",icon:"mdi-rocket",border:"left"}},[t._v("\n        Welcome to Sanclass\n      ")]),t._v(" "),n("v-card",{staticClass:"mx-auto rounded-card",attrs:{"max-width":"100%"}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[t._v("Student Account")]),t._v(" "),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v("\n                Enrolled Classes\n              ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"my-4"},[t._v("Cant find any class ? Just add one !\n              ")])],1),t._v(" "),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"white"}},[n("img",{staticClass:"rounded-circle",attrs:{src:t.$auth.$state.user.profile_image,alt:t.$auth.$state.user.name}})])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{rounded:"",text:"",icon:"",color:"primary"}},[n("v-icon",[t._v(" mdi-card-account-details ")])],1)],1)],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-col",{staticClass:"text-right"},[n("v-btn",t._g({staticClass:"my-4",attrs:{color:"primary",dark:""}},o),[t._v("\n                  + Add Class\n                ")])],1)]}}],null,!1,1255680814),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[1==t.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):t._e(),t._v(" "),n("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("v-card-title",{staticClass:"headline"},[t._v("\n                    Join More Class\n                  ")]),t._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Class code input",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-text-field",{attrs:{counter:10,"error-messages":o,label:"Class Code",required:""},model:{value:t.data.class_code,callback:function(e){t.$set(t.data,"class_code",e)},expression:"data.class_code"}})]}}],null,!0)})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                      CANCEL\n                    ")]),t._v(" "),n("v-btn",{attrs:{disabled:o,color:"green darken-1",text:""},on:{click:t.submit}},[t._v("\n                      JOIN\n                    ")])],1)],1)]}}],null,!1,2279583544)})],1)],1),t._v(" "),1==t.isLoaded?n("v-row",t._l(t.classes,(function(e){return n("v-col",{key:e.id,attrs:{md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[n("v-card",{staticClass:"mx-auto text-left",class:{"on-hover":r},attrs:{"max-width":"400",shaped:"",elevation:r?4:2}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"120px",src:"https://www.colorhexa.com/42a5f5.png"}},[n("v-app-bar",{staticClass:"py-5",attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-book")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"white",icon:""},on:{click:function(n){return t.openDeleteModal(e)}}},"v-btn",c,!1),r),[n("v-icon",[t._v("mdi-exit-to-app")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Unenroll")])])],1),t._v(" "),n("v-card-title",[t._v(t._s(e.name))]),t._v(" "),n("v-card-subtitle",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.teacher_name)+"\n                    ")])],1),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0 text--primary"},[t._v("\n                    "+t._s(e.school)+"\n                  ")]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0 text--secondary"},[t._v("\n                    Grade Level : "+t._s(e.grade_level)+"\n                  ")]),t._v(" "),n("v-col",[n("v-divider"),t._v(" "),n("v-chip",{attrs:{color:"primary"}},[t._v("Class Quota")]),t._v(" "),n("v-chip",{attrs:{color:"teal","text-color":"white"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-account-supervisor-circle")])],1),t._v("Students : "+t._s(e.student_number))],1),t._v(" "),n("v-progress-linear",{staticClass:"my-4",attrs:{rounded:"",value:e.student_number/e.quota*100}})],1),t._v(" "),n("v-card-actions",[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"student-classes-class-id",params:{id:e.id}}}},[n("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Detail ")])],1),t._v(" "),n("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{color:"green",text:"",target:"_blank",href:"https://api.whatsapp.com/send?phone=+62"+e.teacher_whatsapp}},[t._v("\n                      Contact Teacher\n                    ")])],1)],1)]}}],null,!0)})],1)})),1):t._e(),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n                Unenroll From Class\n              ")]),t._v(" "),n("v-card-text",[t._v("Are you sure you want to unenroll from\n                "),n("code",[t._v(" "+t._s(t.class_selected?t.class_selected.name:""))]),t._v("\n                ?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.deleteModal=!1}}},[t._v("\n                  Disagree\n                ")]),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.unenrollClass}},[t._v("\n                  Agree\n                ")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("\n                Close\n              ")])]}}],null,!1,496801612),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n            "+t._s(t.text)+"\n\n            ")])],1)],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VAlert:y.a,VAppBar:C.a,VAvatar:k.a,VBtn:w.a,VCard:O.a,VCardActions:j.a,VCardSubtitle:j.b,VCardText:j.c,VCardTitle:j.d,VChip:V.a,VCol:A.a,VContainer:L.a,VDialog:S.a,VDivider:D.a,VFlex:M.a,VHover:T.a,VIcon:I.a,VImg:$.a,VLayout:B.a,VListItem:P.a,VListItemAvatar:E.a,VListItemContent:F.a,VListItemSubtitle:F.b,VListItemTitle:F.c,VProgressLinear:z.a,VRow:W.a,VSnackbar:J.a,VSpacer:R.a,VTextField:N.a,VTooltip:Y.a})}}]);