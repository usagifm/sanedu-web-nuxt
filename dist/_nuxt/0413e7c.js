(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{553:function(e,t,n){var content=n(586);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("3de79a9a",content,!0,{sourceMap:!1})},585:function(e,t,n){"use strict";n(553)},586:function(e,t,n){(t=n(10)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Public+Sans:wght@500;600&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap);"]),t.push([e.i,'.bold[data-v-44ee5760]{font-weight:900;color:#686666;font-family:"Open Sans",sans-serif}',""]),e.exports=t},637:function(e,t,n){"use strict";n.r(t);n(27),n(19),n(67),n(88),n(35),n(58);var r=n(17),o=n(0),l=n(547),c=n(546),d=n(582),v=n.n(d),m=(n(583),n(2)),h=n(45);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(c.d)("eager"),Object(c.c)("required",_(_({},l.e),{},{message:"{_field_} can not be empty"})),Object(c.c)("password",{params:["target"],validate:function(e,t){return e===t.target},message:"Password confirmation does not match"}),Object(c.c)("numeric",l.d),Object(c.c)("min",_(_({},l.c),{},{message:"{_field_} may not be less than {length} characters"})),Object(c.c)("max",_(_({},l.b),{},{message:"{_field_} may not be more than {length} characters"})),Object(c.c)("email",_(_({},l.a),{},{message:"Email must be valid"})),m.default.component("VueCtkDateTimePicker",v.a);var w={middleware:["auth-student"],layout:"home",components:{ValidationProvider:c.b,ValidationObserver:c.a},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,Promise.all([n.dispatch("class/getClassesData")]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{timeout:2e3,show1:!1,show2:!1,show3:!1,snackbar:!1,yourValue:null,menu:!1,previewImage:null,text:null,tab:null,isLoading:!1,dialogPassword:!1,dialogPersonalData:!1,dialogProfileImage:!1,dialogWhatsapp:!1,dialogEmail:!1,dialogRegionData:!1,whatsappPayload:{whatsapp:this.$auth.$state.user.whatsapp},emailPayload:{email:this.$auth.$state.user.email},personalDataPayload:{name:this.$auth.$state.user.name,birth_date:this.$auth.$state.user.birth_date,parent_phone_number:this.$auth.$state.user.parent_phone_number},changePasswordPayload:{old_passowrd:null,passowrd:null,re_password:null},profileImagePayload:{profile_image:null},cities:null,schools:null,provinceData:null,kontol:null,provinces:[{},{id:12,nama:"Sumatera Utara"},{id:13,nama:"Sumatera Barat"},{id:14,nama:"Riau"},{id:15,nama:"Jambi"},{id:16,nama:"Sumatera Selatan"},{id:17,nama:"Bengkulu"},{id:18,nama:"Lampung"},{id:19,nama:"Kepulauan Bangka Belitung"},{id:21,nama:"Kepulauan Riau"},{id:31,nama:"Dki Jakarta"},{id:32,nama:"Jawa Barat"},{id:33,nama:"Jawa Tengah"},{id:34,nama:"Di Yogyakarta"},{id:35,nama:"Jawa Timur"},{id:36,nama:"Banten"},{id:51,nama:"Bali"},{id:52,nama:"Nusa Tenggara Barat"},{id:53,nama:"Nusa Tenggara Timur"},{id:61,nama:"Kalimantan Barat"},{id:62,nama:"Kalimantan Tengah"},{id:63,nama:"Kalimantan Selatan"},{id:64,nama:"Kalimantan Timur"},{id:65,nama:"Kalimantan Utara"},{id:71,nama:"Sulawesi Utara"},{id:72,nama:"Sulawesi Tengah"},{id:73,nama:"Sulawesi Selatan"},{id:74,nama:"Sulawesi Tenggara"},{id:75,nama:"Gorontalo"},{id:76,nama:"Sulawesi Barat"},{id:81,nama:"Maluku"},{id:82,nama:"Maluku Utara"},{id:91,nama:"Papua Barat"},{id:94,nama:"Papua"}]}},watch:{menu:function(e){var t=this;e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))}},computed:_({},Object(h.d)("class",{classes:function(e){return e.classes}})),methods:_(_({chain:function(){this.$axios.setBaseURL("https://dev.farizdotid.com/"),this.$axios.get("api/daerahindonesia/kota?id_provinsi="+this.provinceData.id).then((function(e){alert("Works !"),console.log(e.data.kota_kabupaten)})).catch((function(e){alert("Error !"),console.log(e)}))},uploadImage:function(e){var t=this,image=e.target.files[0];if(image.size<1e6){var n=new FileReader;n.readAsDataURL(image),n.onload=function(e){t.previewImage=e.target.result,console.log(t.previewImage)}}else this.text="Your Image is Too big ( > 1MB )",this.snackbar=!0,this.previewImage=null,document.getElementById("image").value=null},save:function(e){this.$refs.menu.save(e)}},Object(h.b)("profile",["editRegionData","editProfileImage","editPassword","editPersonalData","editWhatsapp","editEmail","getCity"])),{},{personalData:function(){var e=this;this.isLoading=!0,this.personalDataPayload.parent_phone_number=parseInt(this.personalDataPayload.parent_phone_number),this.editPersonalData(this.personalDataPayload).then((function(t){e.$auth.setUser(t),e.dialogPersonalData=!1,e.isLoading=!1,e.text="Data Updated Successfully !",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},whatsapp:function(){var e=this;this.isLoading=!0,this.whatsappPayload.whatsapp=parseInt(this.whatsappPayload.whatsapp),this.editWhatsapp(this.whatsappPayload).then((function(t){e.$auth.setUser(t),e.dialogWhatsapp=!1,e.isLoading=!1,e.text="Phone Number Updated Successfully !",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},email:function(){var e=this;this.isLoading=!0,this.editEmail(this.emailPayload).then((function(t){e.$auth.setUser(t),e.dialogEmail=!1,e.isLoading=!1,e.text="Email Updated Successfully !",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},profileImage:function(){var e=this;$("#imageButton").attr("disabled",!0),this.isLoading=!0,this.profileImagePayload.profile_image=this.previewImage,this.editProfileImage(this.profileImagePayload).then((function(t){e.$auth.setUser(t),e.dialogProfileImage=!1,e.isLoading=!1,e.text="Image Updated Successfully !",e.snackbar=!0,$("#imageButton").attr("disabled",!1),location.reload()})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},changePassword:function(){var e=this;this.isLoading=!0,this.editPassword(this.changePasswordPayload).then((function(t){e.isLoading=!1,e.dialogPassword=!1,e.changePasswordPayload,e.text="Password Updated Successfully !",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.dialogPersonalData=!1,e.text=t,e.snackbar=!0}))}})},y=(n(585),n(48)),P=n(89),k=n.n(P),x=n(630),D=n(207),C=n(587),S=n(228),I=n(492),O=n(217),E=n(549),L=n(503),T=n(629),V=n(550),R=n(496),N=n(206),j=n(169),A=n(526),B=n(122),U=n(211),W=n(43),Y=n(497),z=n(208),M=n(552),J=n(544),K=n(506),G=n(625),H=n(632),F=n(494),component=Object(y.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center",cols:"12",lg:"2",md:"2"}},[n("v-img",{staticStyle:{"border-radius":"50%"},attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",height:"120",width:"120",src:this.$auth.$state.user.profile_image}})],1),e._v(" "),n("v-col",{attrs:{align:"left",cols:"12",lg:"5",md:"5"}},[e.$vuetify.breakpoint.mobile?n("h4",{staticClass:"text-center bold"},[e._v("\n          "+e._s(this.$auth.$state.user.name)+"\n        ")]):e._e(),e._v(" "),e.$vuetify.breakpoint.mobile?e._e():n("h4",{staticClass:"text-left bold"},[e._v("\n          "+e._s(this.$auth.$state.user.name)+"\n        ")]),e._v(" "),e.$vuetify.breakpoint.mobile?n("h5",{staticClass:"text-center"},[e._v("\n          San Student\n        ")]):e._e(),e._v(" "),e.$vuetify.breakpoint.mobile?e._e():n("h5",{staticClass:"text-left"},[e._v("\n          San Student\n        ")]),e._v(" "),n("v-btn",{staticClass:"mt-4 mb-4",staticStyle:{color:"#1e88e5"},attrs:{rounded:"",small:"",depressed:""},on:{click:function(t){e.dialogPersonalData=!0}}},[e._v("EDIT YOUR PERSONAL DATA"),n("v-icon",{attrs:{right:""}},[e._v("\n            mdi-circle-edit-outline")])],1),e._v(" "),n("v-row",{staticClass:"text-left"},[n("v-col",{attrs:{cols:"6"}},[n("code",[e._v(e._s(e.kontol)+" ")]),e._v(" "),n("h6",{staticClass:"bold"},[e._v("\n              PHONE\n              "),n("v-btn",{staticStyle:{color:"#1e88e5"},attrs:{rounded:"",small:"",left:"",icon:"",depressed:""},on:{click:function(t){e.dialogWhatsapp=!0}}},[n("v-icon",[e._v("mdi-circle-edit-outline")])],1)],1),e._v(" "),n("h6",{staticClass:"mb-7"},[e._v("0"+e._s(this.$auth.$state.user.whatsapp))]),e._v(" "),n("h6",{staticClass:"bold"},[e._v("PARENT PHONE NUMBER")]),e._v(" "),n("h6",[e._v("0"+e._s(this.$auth.$state.user.parent_phone_number))])]),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h6",{staticClass:"bold"},[e._v("\n              EMAIL\n              "),n("v-btn",{staticStyle:{color:"#1e88e5"},attrs:{rounded:"",small:"",left:"",icon:"",depressed:""},on:{click:function(t){e.dialogEmail=!0}}},[n("v-icon",[e._v("mdi-circle-edit-outline")])],1)],1),e._v(" "),n("h6",{staticClass:"mb-7"},[e._v(e._s(this.$auth.$state.user.email))]),e._v(" "),n("h6",{staticClass:"bold"},[e._v("BIRTH DATE")]),e._v(" "),n("h6",[e._v(e._s(this.$auth.$state.user.birth_date))])])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",lg:"5",md:"5"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{align:"end",cols:"12"}},[n("v-btn",{attrs:{depressed:""},on:{click:function(t){e.dialogProfileImage=!0}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-account-circle")]),e._v(" Change Profile Image\n            ")],1),e._v(" "),n("v-btn",{attrs:{depressed:""},on:{click:function(t){e.dialogPassword=!0}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-lock")]),e._v(" Change Password\n            ")],1)],1)],1),e._v(" "),n("v-row",{attrs:{justify:"end"}},[n("v-col",{attrs:{cols:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"mx-auto",attrs:{width:"100%",outlined:""}},[n("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}),e._v(" "),n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[e._v("Sanclass Overview")]),e._v(" "),n("v-list-item-title",{staticClass:"headline mb-1"},[e._v("\n                    Class Count\n                  ")]),e._v(" "),n("v-list-item-subtitle",[e._v("You're signed as a San Student")])],1),e._v(" "),n("v-list-item-avatar",{staticClass:"bold",staticStyle:{"font-size":"27px",color:"white"},attrs:{size:"50",color:"primary"}},[e._v(e._s(e.classes.length))])],1),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-google-classroom")]),e._v(" Go To Sanclass\n                ")],1)],1)],1)],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-tabs",{attrs:{left:"","slider-size":"4","background-color":"rgba(0,0,0,0)"}},[n("v-tab",{staticClass:"bold",staticStyle:{left:"0",color:"#1e88e5"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-account")]),e._v(" PERSONAL INFORMATION")],1)],1)],1),e._v(" "),n("v-col",{staticClass:"text-left",attrs:{cols:"12"}},[n("v-banner",{staticClass:"mb-8",attrs:{"two-line":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-btn",{staticStyle:{color:"#1e88e5"},attrs:{rounded:"",small:"",depressed:""},on:{click:function(t){e.dialogRegionData=!0}}},[e._v("EDIT YOUR REGION DATA"),n("v-icon",{attrs:{right:""}},[e._v("\n                mdi-circle-edit-outline")])],1)]},proxy:!0}])},[e._v(" "),n("v-avatar",{attrs:{slot:"icon",color:"primary",size:"40"},slot:"icon"},[n("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[e._v(" mdi-castle ")])],1),e._v(" "),n("h6",{staticClass:"bold mt-3"},[e._v("REGION AND INSTITUTION DATA")])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"ml-4 mb-7"},[n("h6",{staticClass:"bold"},[e._v("\n                PROVINCE\n                "),n("h6",[e._v(e._s(this.$auth.$state.user.province_name))])])]),e._v(" "),n("div",{staticClass:"ml-4"},[n("h6",{staticClass:"bold"},[e._v("\n                CITY\n                "),n("h6",[e._v("\n                  "+e._s(this.$auth.$state.user.city_name)+"\n                ")])])])]),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"ml-4 mb-7"},[n("h6",{staticClass:"bold"},[e._v("\n                SCHOOL\n                "),n("h6",[e._v(e._s(this.$auth.$state.user.school))])])]),e._v(" "),n("div",{staticClass:"ml-4"},[n("h6",{staticClass:"bold"},[e._v("\n                GRADE LEVEL\n                "),n("h6",[e._v(e._s(this.$auth.$state.user.grade_level))])])])])],1)],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialogPassword,callback:function(t){e.dialogPassword=t},expression:"dialogPassword"}},[n("v-card",[1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.changePassword(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Change Password ")]),e._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Current Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:20,"prepend-inner-icon":"mdi-lock-clock","error-messages":r,outlined:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",hint:"Your Current password",required:"",label:"Current Passowrd"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.changePasswordPayload.old_password,callback:function(t){e.$set(e.changePasswordPayload,"old_password",t)},expression:"changePasswordPayload.old_password"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"New Password",rules:"required|min:6"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{ref:"password",attrs:{counter:20,name:"password","prepend-inner-icon":"mdi-lock","error-messages":r,outlined:"","append-icon":e.show2?"mdi-eye":"mdi-eye-off",type:e.show2?"text":"password",hint:"Your new password",required:"",label:"New Passowrd"},on:{"click:append":function(t){e.show2=!e.show2}},model:{value:e.changePasswordPayload.password,callback:function(t){e.$set(e.changePasswordPayload,"password",t)},expression:"changePasswordPayload.password"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Password Confirmation",rules:"required|min:6|password:@New Password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:20,outlined:"","prepend-inner-icon":"mdi-lock","error-messages":r,"append-icon":e.show3?"mdi-eye":"mdi-eye-off",type:e.show3?"text":"password",required:"",label:"Re-type password","data-vv-as":"password"},on:{"click:append":function(t){e.show3=!e.show3}},model:{value:e.changePasswordPayload.re_password,callback:function(t){e.$set(e.changePasswordPayload,"re_password",t)},expression:"changePasswordPayload.re_password"}})]}}],null,!0)})],1)],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogPassword=!1}}},[e._v("\n              Cancel\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"red",disabled:r,text:""},on:{click:e.changePassword}},[e._v("\n              Change Password\n            ")])],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialogPersonalData,callback:function(t){e.dialogPersonalData=t},expression:"dialogPersonalData"}},[n("v-card",[1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.personalData(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Edit Personal Data ")]),e._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:100,"prepend-icon":"mdi-rename-box","error-messages":r,required:"",label:"Name"},model:{value:e.personalDataPayload.name,callback:function(t){e.$set(e.personalDataPayload,"name",t)},expression:"personalDataPayload.name"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Birth Date",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{required:"","error-messages":r,label:"Birthday date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.personalDataPayload.birth_date,callback:function(t){e.$set(e.personalDataPayload,"birth_date",t)},expression:"personalDataPayload.birth_date"}},"v-text-field",l,!1),o))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{ref:"picker",attrs:{width:"250",max:(new Date).toISOString().substr(0,10),min:"1950-01-01"},on:{change:e.save},model:{value:e.personalDataPayload.birth_date,callback:function(t){e.$set(e.personalDataPayload,"birth_date",t)},expression:"personalDataPayload.birth_date"}})],1)]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Parent Phone Number",rules:"required|numeric|min:6|max:15"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:14,"prepend-icon":"mdi-whatsapp","error-messages":r,required:"",label:"Parent Phone Number"},model:{value:e.personalDataPayload.parent_phone_number,callback:function(t){e.$set(e.personalDataPayload,"parent_phone_number",t)},expression:"personalDataPayload.parent_phone_number"}})]}}],null,!0)})],1)],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogPersonalData=!1}}},[e._v("\n              Cancel\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"primary",disabled:r,text:""},on:{click:e.personalData}},[e._v("\n              Update\n            ")])],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialogProfileImage,callback:function(t){e.dialogProfileImage=t},expression:"dialogProfileImage"}},[n("v-card",[1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.changeProfileImage(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Change Profile Image ")]),e._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-col",{attrs:{align:"center",cols:"12"}},[n("v-avatar",{attrs:{size:"200",color:"grey"}},[e.previewImage?n("img",{attrs:{src:e.previewImage,"v-model":e.previewImage}}):e._e()])],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("b-form-file",{ref:"file",attrs:{id:"image",type:"file",accept:"image/*"},on:{change:e.uploadImage}})],1)],1)],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogProfileImage=!1}}},[e._v("\n              Cancel\n            ")]),e._v(" "),null!=e.previewImage?n("v-btn",{attrs:{id:"imageButton",color:"red",disabled:r,text:""},on:{click:e.profileImage}},[e._v("\n              Change Image\n            ")]):e._e(),e._v(" "),null==e.previewImage?n("v-btn",{attrs:{color:"red",disabled:"",text:""}},[e._v("\n              Change Image\n            ")]):e._e()],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"320"},model:{value:e.dialogWhatsapp,callback:function(t){e.dialogWhatsapp=t},expression:"dialogWhatsapp"}},[n("v-card",[1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.whatsapp(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Change Phone Number ")]),e._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Phone",rules:"required|numeric|min:6|max:15"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-whatsapp",counter:15,"error-messages":r,label:"Phone/Whatsapp Number",required:"",outlined:""},model:{value:e.whatsappPayload.whatsapp,callback:function(t){e.$set(e.whatsappPayload,"whatsapp",t)},expression:"whatsappPayload.whatsapp"}})]}}],null,!0)})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogWhatsapp=!1}}},[e._v("\n              CANCEL\n            ")]),e._v(" "),n("v-btn",{attrs:{disabled:r,color:"primary",text:""},on:{click:e.whatsapp}},[e._v("\n              UPDATE\n            ")])],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"320"},model:{value:e.dialogEmail,callback:function(t){e.dialogEmail=t},expression:"dialogEmail"}},[n("v-card",[1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.email(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Change Email ")]),e._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email",counter:30,"error-messages":r,label:"Email",required:"",outlined:""},model:{value:e.emailPayload.email,callback:function(t){e.$set(e.emailPayload,"email",t)},expression:"emailPayload.email"}})]}}],null,!0)})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogEmail=!1}}},[e._v("\n              CANCEL\n            ")]),e._v(" "),n("v-btn",{attrs:{disabled:r,color:"primary",text:""},on:{click:e.email}},[e._v("\n              UPDATE\n            ")])],1)],1)]}}])})],1)],1),e._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v("\n          Close\n        ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.text)+"\n\n      ")])],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:e.dialogRegionData,callback:function(t){e.dialogRegionData=t},expression:"dialogRegionData"}},[n("v-card",[1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.email(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v("\n            Change Region and Institution Data\n          ")]),e._v(" "),n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Province",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-autocomplete",{attrs:{outlined:"","error-messages":r,required:"",items:e.provinces,"return-object":"",color:"white","item-text":"nama",label:"Province"},on:{change:e.chain},model:{value:e.provinceData,callback:function(t){e.provinceData=t},expression:"provinceData"}})]}}],null,!0)})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogRegionData=!1}}},[e._v("\n              CANCEL\n            ")]),e._v(" "),n("v-btn",{attrs:{disabled:r,color:"primary",text:""},on:{click:e.email}},[e._v("\n              UPDATE\n            ")])],1)],1)]}}])})],1)],1)],1)}),[],!1,null,"44ee5760",null);t.default=component.exports;k()(component,{VAutocomplete:x.a,VAvatar:D.a,VBanner:C.a,VBtn:S.a,VCard:I.a,VCardActions:O.a,VCardText:O.c,VCardTitle:O.d,VCol:E.a,VContainer:L.a,VDatePicker:T.a,VDialog:V.a,VDivider:R.a,VIcon:N.a,VImg:j.a,VLayout:A.a,VListItem:B.a,VListItemAvatar:U.a,VListItemContent:W.a,VListItemSubtitle:W.b,VListItemTitle:W.c,VMenu:Y.a,VProgressLinear:z.a,VRow:M.a,VSnackbar:J.a,VSpacer:K.a,VTab:G.a,VTabs:H.a,VTextField:F.a})}}]);