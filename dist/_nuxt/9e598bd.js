(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{625:function(e,t,r){var content=r(674);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(9).default)("ff1a1d5e",content,!0,{sourceMap:!1})},673:function(e,t,r){"use strict";r(625)},674:function(e,t,r){(t=r(8)(!1)).push([e.i,".rounded-card{border-radius:50px}",""]),e.exports=t},718:function(e,t,r){"use strict";r.r(t);r(28),r(17),r(69),r(94),r(53);var l=r(16),o=r(0),n=r(551),c=r(550),d=r(43);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(c.d)("eager"),Object(c.c)("numeric",m(m({},n.e),{},{message:"{_field_} can not contain alphabet and symbol"})),Object(c.c)("required",m(m({},n.f),{},{message:"{_field_} can not be empty"})),Object(c.c)("min",m(m({},n.c),{},{message:"{_field_} may not be less than {length} characters"})),Object(c.c)("max",m(m({},n.b),{},{message:"{_field_} may not be more than {length} characters"}));var _={head:function(){return{title:"SANEDU | Teacher Classes"}},middleware:["auth-teacher"],layout:"home",components:{ValidationProvider:c.b,ValidationObserver:c.a},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,Promise.all([r.dispatch("teacher/getClassesData")]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{grades:[{grade:"1 (SD)",value:1},{grade:"2 (SD)",value:2},{grade:"3 (SD)",value:3},{grade:"4 (SD)",value:4},{grade:"5 (SD)",value:5},{grade:"6 (SD)",value:6},{grade:"7 (SMP)",value:7},{grade:"8 (SMP)",value:8},{grade:"9 (SMP)",value:9},{grade:"10 (SMA/SMK)",value:10},{grade:"11 (SMA/SMK)",value:11},{grade:"12 (SMA/SMK)",value:12}],fields:["name","class_code","teacher_name","teacher_whatsapp","student_number","grade_level","school"],payload:{name:null,grade_level:null,school:null,quota:null},items:[],data:{class_code:""},snackbar:!1,text:"",timeout:2e3,dialog:!1,isLoading:!1,isLoaded:!1,hitung:0,deleteModal:!1,class_selected:null,classCount:0}},mounted:function(){this.isLoaded=!0},computed:m({},Object(d.d)("teacher",{classes:function(e){return e.classes}})),methods:m(m({},Object(d.b)("teacher",["getClassesData","createClass","deleteClass"])),{},{closeDialog:function(){this.dialog=!1,this.payload.name=null,this.payload.school=null,this.payload.quota=null,this.payload.grade_level=null},submit:function(){var e=this;this.$refs.observer.validate(),this.payload.grade_level=this.payload.grade_level.value,this.isLoading=!0,this.createClass(this.payload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Kelas Berhasil Dibuat",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},openDeleteModal:function(e){this.class_selected=e,this.deleteModal=!0},deleteClasses:function(){var e=this;this.deleteClass(this.class_selected.id).then((function(t){e.deleteModal=!1,e.class_selected=null,e.text="Class Deleted Successfuly",e.snackbar=!0})).catch((function(t){e.deleteModal=!1,e.class_selected=null,e.text=t,e.snackbar=!0}))}})},f=(r(673),r(36)),h=r(61),y=r.n(h),C=r(555),x=r(533),k=r(214),S=r(227),w=r(215),V=r(93),D=r(565),O=r(600),j=r(528),L=r(703),M=r(519),P=r(556),A=r(586),E=r(213),T=r(177),I=r(544),N=r(130),$=r(219),B=r(18),K=r(216),Q=r(584),J=r(596),R=r(583),z=r(531),F=r(518),W=r(59),G=r(561),component=Object(f.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-container",[0==e.isLoaded?r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{jalign:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):e._e(),e._v(" "),1==e.isLoaded?r("v-flex",{attrs:{"text-left":""}},[r("v-alert",{staticStyle:{"font-weight":"bold"},attrs:{color:"primary",dark:"",icon:"mdi-rocket",border:"left"}},[e._v("\n        Welcome to Sanclass\n      ")]),e._v(" "),r("v-card",{staticClass:"mx-auto rounded-card",attrs:{"max-width":"100%"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[e._v("Teacher Account")]),e._v(" "),r("v-list-item-title",{staticClass:"headline mb-1 font-weight-bold"},[e._v("\n                Created Classes\n              ")]),e._v(" "),r("v-list-item-subtitle",{staticClass:"my-4"},[e._v("Cant find any class ? Just create one !\n              ")])],1),e._v(" "),r("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"white"}},[r("img",{staticClass:"rounded-circle",attrs:{src:"https://res.cloudinary.com/douzspxoy/image/upload/v1626922054/images/sanedulogo_qf1ohb.jpg"}})])],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{rounded:"",text:"",icon:"",color:"primary"}},[r("v-icon",[e._v(" mdi-card-account-details ")])],1)],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[r("v-col",{staticClass:"text-right"},[r("v-btn",e._g({staticClass:"my-4",staticStyle:{"font-weight":"bold"},attrs:{color:"primary",dark:""}},l),[e._v("\n                  + Create Class\n                ")])],1)]}}],null,!1,2347944117),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n                Create Class\n                  ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[r("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?r("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var l=t.invalid;return[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("v-card-text",[r("v-col",{attrs:{cols:"12"}},[r("validation-provider",{attrs:{name:"Class Name ",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("v-text-field",{attrs:{counter:35,"error-messages":l,label:"Class Name",required:"",outlined:"",dense:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})]}}],null,!0)})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("validation-provider",{attrs:{name:"School Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("v-text-field",{attrs:{counter:35,"error-messages":l,label:"School Name",outlined:"",dense:"",required:""},model:{value:e.payload.school,callback:function(t){e.$set(e.payload,"school",t)},expression:"payload.school"}})]}}],null,!0)})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Class Quota",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("v-select",{attrs:{items:e.grades,"error-messages":l,outlined:"","persistent-hint":"","item-text":"grade","item-value":"value",label:"Class",dense:"","return-object":""},model:{value:e.payload.grade_level,callback:function(t){e.$set(e.payload,"grade_level",t)},expression:"payload.grade_level"}})]}}],null,!0)})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("validation-provider",{attrs:{name:"Class Quota",rules:"required|max:4|numeric"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("v-text-field",{attrs:{counter:4,"error-messages":l,required:"",dense:"",outlined:"",label:"Class Qouta"},model:{value:e.payload.quota,callback:function(t){e.$set(e.payload,"quota",t)},expression:"payload.quota"}})]}}],null,!0)})],1)],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#E0E0E0"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                      CANCEL\n                    ")]),e._v(" "),r("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:l,color:"primary"},on:{click:e.submit}},[e._v("\n                      Create\n                    ")])],1)],1)]}}],null,!1,319564652)})],1)],1),e._v(" "),1==e.isLoaded?r("v-row",e._l(e.classes,(function(t){return r("v-col",{key:t.id,attrs:{md:"4"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(l){var o=l.hover;return[r("v-card",{staticClass:"mx-auto text-left",class:{"on-hover":o},attrs:{"max-width":"400",shaped:"",elevation:o?4:2}},[r("v-img",{staticClass:"align-start white--text ",staticStyle:{"background-color":"#42a5f5"},attrs:{"max-height":"170px",src:"https://gstatic.com/classroom/themes/img_code.jpg"}},[r("v-app-bar",{staticClass:"my-n1 py-2",attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-book")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(l){var o=l.on,n=l.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"white",icon:""},on:{click:function(r){return e.openDeleteModal(t)}}},"v-btn",n,!1),o),[r("v-icon",[e._v("mdi-delete-forever")])],1)]}}],null,!0)},[e._v(" "),r("span",[e._v("Delete Class")])])],1),e._v(" "),r("div",{staticClass:"align-start"},[r("v-card-title",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.name))]),e._v(" "),r("v-card-subtitle",{staticClass:"white--text"},[e._v("\n                     Class Code :  "+e._s(t.class_code)+"\n                    ")])],1)],1),e._v(" "),r("v-card-subtitle",{staticClass:"pb-0 text--primary"},[e._v("\n                    "+e._s(t.school)+"\n                  ")]),e._v(" "),r("v-card-subtitle",{staticClass:"pb-0 text--secondary"},[e._v("\n                    Grade Level : "+e._s(t.grade_level)+"\n                  ")]),e._v(" "),r("v-col",[r("v-divider"),e._v(" "),r("v-chip",{staticClass:"my-2",attrs:{color:"primary"}},[e._v("Class Quota")]),e._v(" "),r("v-chip",{staticClass:"my-2",attrs:{color:"teal","text-color":"white"}},[r("v-avatar",{attrs:{left:""}},[r("v-icon",[e._v("mdi-account-supervisor-circle")])],1),e._v("Students : "+e._s(t.student_number)+" / "+e._s(t.quota))],1),e._v(" "),r("v-progress-linear",{staticClass:"my-4",attrs:{rounded:"",value:t.student_number/t.quota*100}})],1),e._v(" "),r("v-card-actions",[r("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id",params:{id:t.id}}}},[r("v-btn",{staticStyle:{"font-weight":"bold"},attrs:{color:"orange",text:""}},[e._v(" Detail ")])],1)],1)],1)]}}],null,!0)})],1)})),1):e._e(),e._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("\n                Delete Class \n              ")]),e._v(" "),r("v-card-text",[e._v("Apakah anda yakin ingin menghapus kelas \n                "),r("code",[e._v(" "+e._s(e.class_selected?e.class_selected.name:""))]),e._v("\n                ?")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(t){e.deleteModal=!1}}},[e._v("\n                  Batal\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.deleteClasses}},[e._v("\n                 Delete\n                ")])],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"text-center"},[r("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(t){var l=t.attrs;return[r("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",l,!1),[e._v("\n                Close\n              ")])]}}],null,!1,496801612),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n            "+e._s(e.text)+"\n\n            ")])],1)],1)],1):e._e(),e._v(" "),r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",[e._v("\n        Please Wait...\n        "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VAlert:C.a,VAppBar:x.a,VAvatar:k.a,VBtn:S.a,VCard:w.a,VCardActions:V.a,VCardSubtitle:V.b,VCardText:V.c,VCardTitle:V.d,VChip:D.a,VCol:O.a,VContainer:j.a,VDialog:L.a,VDivider:M.a,VFlex:P.a,VHover:A.a,VIcon:E.a,VImg:T.a,VLayout:I.a,VListItem:N.a,VListItemAvatar:$.a,VListItemContent:B.a,VListItemSubtitle:B.b,VListItemTitle:B.c,VProgressLinear:K.a,VRow:Q.a,VSelect:J.a,VSnackbar:R.a,VSpacer:z.a,VTextField:F.a,VToolbar:W.a,VTooltip:G.a})}}]);