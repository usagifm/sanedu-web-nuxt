(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{578:function(t,e,n){var content=n(631);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("a60bb92c",content,!0,{sourceMap:!1})},629:function(t,e,n){t.exports=n.p+"img/sanedulogo.19755d8.jpg"},630:function(t,e,n){"use strict";n(578)},631:function(t,e,n){(e=n(8)(!1)).push([t.i,".rounded-card{border-radius:50px}",""]),t.exports=e},700:function(t,e,n){"use strict";n.r(e);n(17),n(69),n(94),n(60);var r=n(19),o=n(0),l=n(558),c=n(557),d=n(44);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(c.d)("eager"),Object(c.c)("required",_(_({},l.e),{},{message:"{_field_} can not be empty"}));var m={head:function(){return{title:"SANEDU | Student Classes"}},middleware:["auth-student"],layout:"home",components:{ValidationProvider:c.b,ValidationObserver:c.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,Promise.all([n.dispatch("class/getClassesData")]);case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{fields:["name","class_code","teacher_name","teacher_whatsapp","student_number","grade_level","school"],items:[],data:{class_code:""},snackbar:!1,text:"",timeout:2e3,dialog:!1,isLoading:!1,isLoaded:!1,color:"randomColor()",hitung:0,deleteModal:!1,class_selected:null,classCount:0}},mounted:function(){this.isLoaded=!0},computed:_({},Object(d.d)("class",{classes:function(t){return t.classes}})),methods:_(_({},Object(d.b)("class",["getClassesData","joinClass","unenrollFromClass"])),{},{submit:function(){var t=this;this.$refs.observer.validate(),this.isLoading=!0,this.joinClass(this.data).then((function(e){t.dialog=!1,t.isLoading=!1,t.text="Kelas Berhasil Ditambahkan",t.snackbar=!0})).catch((function(e){t.isLoading=!1,t.text=e,t.snackbar=!0}))},openDeleteModal:function(t){this.class_selected=t,this.deleteModal=!0},unenrollClass:function(){var t=this;this.unenrollFromClass(this.class_selected.id).then((function(e){t.deleteModal=!1,t.class_selected=null,t.text=e,t.snackbar=!0})).catch((function(e){t.deleteModal=!1,t.class_selected=null,t.text=e,t.snackbar=!0}))}})},f=(n(630),n(36)),h=n(61),x=n.n(h),C=n(569),k=n(537),y=n(214),w=n(228),V=n(215),O=n(93),j=n(556),S=n(563),L=n(532),D=n(689),M=n(523),P=n(579),A=n(690),I=n(213),E=n(176),T=n(551),F=n(130),J=n(219),B=n(16),N=n(216),R=n(559),U=n(602),$=n(535),z=n(522),G=n(580),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-container",[0==t.isLoaded?r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{jalign:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):t._e(),t._v(" "),1==t.isLoaded?r("v-flex",{attrs:{"text-left":""}},[r("v-alert",{staticStyle:{"font-weight":"bold"},attrs:{color:"primary",dark:"",icon:"mdi-rocket",border:"left"}},[t._v("\n        Welcome to Sanclass\n      ")]),t._v(" "),r("v-card",{staticClass:"mx-auto rounded-card",attrs:{"max-width":"100%"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Student Account")]),t._v(" "),r("v-list-item-title",{staticClass:"headline mb-1 font-weight-bold"},[t._v("\n                Enrolled Classes\n              ")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"my-4"},[t._v("Cant find any class ? Just add one !\n              ")])],1),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"white"}},[r("img",{staticClass:"rounded-circle",attrs:{src:n(629)}})])],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{rounded:"",text:"",icon:"",color:"primary"}},[r("v-icon",[t._v(" mdi-card-account-details ")])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-col",{staticClass:"text-right"},[r("v-btn",t._g({staticClass:"my-4",attrs:{color:"primary",dark:""}},n),[t._v("\n                  + Add Class\n                ")])],1)]}}],null,!1,1255680814),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[1==t.isLoading?r("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):t._e(),t._v(" "),r("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("v-card-title",{staticClass:"headline"},[t._v("\n                    Join More Class\n                  ")]),t._v(" "),r("v-card-text",[r("v-col",{attrs:{cols:"12"}},[r("validation-provider",{attrs:{name:"Class code input",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{attrs:{counter:10,"error-messages":n,label:"Class Code",required:""},model:{value:t.data.class_code,callback:function(e){t.$set(t.data,"class_code",e)},expression:"data.class_code"}})]}}],null,!0)})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                      CANCEL\n                    ")]),t._v(" "),r("v-btn",{attrs:{disabled:n,color:"green darken-1",text:""},on:{click:t.submit}},[t._v("\n                      JOIN\n                    ")])],1)],1)]}}],null,!1,2279583544)})],1)],1),t._v(" "),1==t.isLoaded?r("v-row",t._l(t.classes,(function(e){return r("v-col",{key:e.id,attrs:{md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"mx-auto text-left",class:{"on-hover":o},attrs:{"max-width":"400",shaped:"",elevation:o?4:2}},[r("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"135px",src:"https://www.colorhexa.com/42a5f5.png"}},[r("v-app-bar",{staticClass:"py-5",attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-book")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"white",icon:""},on:{click:function(n){return t.openDeleteModal(e)}}},"v-btn",l,!1),o),[r("v-icon",[t._v("mdi-exit-to-app")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Unenroll")])])],1),t._v(" "),r("v-card-title",[t._v(t._s(e.name))]),t._v(" "),r("v-card-subtitle",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.teacher_name)+"\n                    ")])],1),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0 text--primary"},[t._v("\n                    "+t._s(e.school)+"\n                  ")]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0 text--secondary"},[t._v("\n                    Grade Level : "+t._s(e.grade_level)+"\n                  ")]),t._v(" "),r("v-col",[r("v-divider"),t._v(" "),r("v-chip",{attrs:{color:"primary"}},[t._v("Class Quota")]),t._v(" "),r("v-chip",{attrs:{color:"teal","text-color":"white"}},[r("v-avatar",{attrs:{left:""}},[r("v-icon",[t._v("mdi-account-supervisor-circle")])],1),t._v("Students : "+t._s(e.student_number))],1),t._v(" "),r("v-progress-linear",{staticClass:"my-4",attrs:{rounded:"",value:e.student_number/e.quota*100}})],1),t._v(" "),r("v-card-actions",[r("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"student-classes-class-id",params:{id:e.id}}}},[r("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Detail ")])],1),t._v(" "),r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{color:"green",text:"",target:"_blank",href:"https://api.whatsapp.com/send?phone=+62"+e.teacher_whatsapp}},[t._v("\n                      Contact Teacher\n                    ")])],1)],1)]}}],null,!0)})],1)})),1):t._e(),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n                Unenroll From Class\n              ")]),t._v(" "),r("v-card-text",[t._v("Apakah anda yakin ingin keluar dari kelas \n                "),r("code",[t._v(" "+t._s(t.class_selected?t.class_selected.name:""))]),t._v("\n                ?")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.deleteModal=!1}}},[t._v("\n                  Batal\n                ")]),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.unenrollClass}},[t._v("\n                  keluar\n                ")])],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"text-center"},[r("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("\n                Close\n              ")])]}}],null,!1,496801612),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n            "+t._s(t.text)+"\n\n            ")])],1)],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VAlert:C.a,VAppBar:k.a,VAvatar:y.a,VBtn:w.a,VCard:V.a,VCardActions:O.a,VCardSubtitle:O.b,VCardText:O.c,VCardTitle:O.d,VChip:j.a,VCol:S.a,VContainer:L.a,VDialog:D.a,VDivider:M.a,VFlex:P.a,VHover:A.a,VIcon:I.a,VImg:E.a,VLayout:T.a,VListItem:F.a,VListItemAvatar:J.a,VListItemContent:B.a,VListItemSubtitle:B.b,VListItemTitle:B.c,VProgressLinear:N.a,VRow:R.a,VSnackbar:U.a,VSpacer:$.a,VTextField:z.a,VTooltip:G.a})}}]);