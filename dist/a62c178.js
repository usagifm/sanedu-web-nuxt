(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{636:function(e,t,n){var content=n(689);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("68e0923a",content,!0,{sourceMap:!1})},688:function(e,t,n){"use strict";n(636)},689:function(e,t,n){(t=n(8)(!1)).push([e.i,".videoWrapper[data-v-2aaa08bb]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.videoWrapper iframe[data-v-2aaa08bb]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=t},733:function(e,t,n){"use strict";n.r(t);n(4),n(26),n(15),n(70),n(188),n(94),n(53);var o=n(14),l=n(0),r=n(560),c=n(559),d=n(43),v=n(589);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(c.d)("eager"),Object(c.c)("numeric",_(_({},r.e),{},{message:"{_field_} can not contain alphabet and symbol"})),Object(c.c)("required",_(_({},r.f),{},{message:"{_field_} can not be empty"})),Object(c.c)("min",_(_({},r.c),{},{message:"{_field_} may not be less than {length} characters"})),Object(c.c)("min_value",_(_({},r.d),{},{message:"{_field_} may not be less than 1 minute"})),Object(c.c)("max",_(_({},r.b),{},{message:"{_field_} may not be more than {length} characters"}));var h={head:function(){return{title:"SANEDU | "+this.$store.state.teacher.meetingDetail.name}},middleware:["auth-teacher"],layout:"home",components:{ValidationProvider:c.b,ValidationObserver:c.a},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.params,t.next=3,Promise.all([n.dispatch("teacher/getMeetingDetailData",o),n.dispatch("teacher/getClassDetailData",o.id)]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{meetingPayload:{class_id:this.$store.state.teacher.classDetail.id,meeting_id:this.$store.state.teacher.meetingDetail.id,name:this.$store.state.teacher.meetingDetail.name,date:this.$store.state.teacher.meetingDetail.date,start_time:this.$store.state.teacher.meetingDetail.start_time,finish_time:this.$store.state.teacher.meetingDetail.finish_time},deleteMeetingPayload:{class_id:this.$store.state.teacher.classDetail.id,id:this.$store.state.teacher.meetingDetail.id,name:this.$store.state.teacher.meetingDetail.name,date:this.$store.state.teacher.meetingDetail.date,start_time:this.$store.state.teacher.meetingDetail.start_time,finish_time:this.$store.state.teacher.meetingDetail.finish_time},lessonPayload:{class_id:this.$store.state.teacher.classDetail.id,meeting_id:this.$store.state.teacher.meetingDetail.id,name:null,link:null,youtube:null},selectedLesson:{class_id:this.$store.state.teacher.classDetail.id,meeting_id:this.$store.state.teacher.meetingDetail.id,id:null,name:null,link:null,youtube:null,oldName:null},quizPayload:{name:null,duration:null,meeting_id:this.$store.state.teacher.meetingDetail.id,class_id:this.$store.state.teacher.classDetail.id},ytvid:"https://www.youtube.com/embed/",finishMenu:!1,startMenu:!1,menu:!1,snackbar:!1,text:!1,isLoaded:!1,deleteMeetingDialog:!1,editMeetingDialog:!1,createLessonDialog:!1,editLessonDialog:!1,deleteLessonDialog:!1,isLoading:!1,showLessons:!0,showAttendances:!1,showAttemps:!1,createQuizDialog:!1,breadcrumbs:[{text:"Sanclass",disabled:!1,href:"/teacher/classes"},{text:this.$store.state.teacher.classDetail.name,disabled:!1,href:"/teacher/classes/class/".concat(this.$store.state.teacher.classDetail.id)},{text:this.$store.state.teacher.meetingDetail.name,disabled:!0,href:"/teacher/classes/class/".concat(this.$store.state.class.classDetail.id,"/meeting/").concat(this.$store.state.teacher.meetingDetail.id)}]}},mounted:function(){this.isLoaded=!0},computed:_({},Object(d.d)("teacher",{meetingDetail:function(e){return e.meetingDetail},classDetail:function(e){return e.classDetail}})),methods:_(_({lessons:function(){this.showLessons=!0,this.showAttendances=!1,this.showAttemps=!1},attendances:function(){this.showLessons=!1,this.showAttendances=!0,this.showAttemps=!1},attemps:function(){this.showLessons=!1,this.showAttendances=!1,this.showAttemps=!0},openEditLessonDialog:function(e){if(this.editLessonDialog=!0,this.selectedLesson.id=e.id,this.selectedLesson.name=e.name,this.selectedLesson.link=e.link,this.selectedLesson.youtube=e.youtube,this.selectedLesson.oldName=e.name,null!=e.youtube){var t=Object(v.a)(e.youtube);this.ytvid="https://www.youtube.com/embed/"+t.id}},openDeleteLessonDialog:function(e){this.selectedLesson.id=e.id,this.selectedLesson.name=e.name,this.selectedLesson.link=e.link,this.selectedLesson.youtube=e.youtube,this.selectedLesson.oldName=e.name,this.deleteLessonDialog=!0},setYoutube:function(link){var e=Object(v.a)(link);this.ytvid="https://www.youtube.com/embed/"+e.id}},Object(d.b)("teacher",["getMeetingDetailData","editMeetingDetail","deleteClassMeeting","createLesson","editLesson","deleteLesson","createQuiz"])),{},{convert:function(e){return new Date(e).setHours(0,0,0,0)},closeDialog:function(){this.ytvid="https://www.youtube.com/embed/",this.editMeetingDialog=!1,this.deleteMeetingDialog=!1,this.createLessonDialog=!1,this.editLessonDialog=!1,this.deleteLessonDialog=!1,this.createQuizDialog=!1},editClassMeeting:function(){var e=this;this.isLoading=!0,this.editMeetingDetail(this.meetingPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Meeting Berhasil Diedit",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},deleteMeeting:function(){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Delete It !"}).then((function(t){t.isConfirmed?e.deleteClassMeeting(e.deleteMeetingPayload).then((function(t){e.closeDialog(),e.$swal({type:"success",icon:"success",position:"top-end",toast:!0,timer:3e3,showConfirmButton:!1,title:"Meeting Deleted Successfuly"}),e.snackbar=!0,e.$router.push("/teacher/classes/class/"+e.$store.state.teacher.classDetail.id)})).catch((function(t){e.closeDialog(),e.text=t,e.snackbar=!0})):e.closeDialog()}))},createMeetingLesson:function(){var e=this;this.isLoading=!0,this.createLesson(this.lessonPayload).then((function(t){e.lessonPayload.name=null,e.lessonPayload.link=null,e.lessonPayload.youtube=null,e.closeDialog(),e.isLoading=!1,e.text="Materi Berhasil Dibuat",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},editMeetingLesson:function(){var e=this;this.isLoading=!0,this.editLesson(this.selectedLesson).then((function(t){e.selectedLesson.id=null,e.selectedLesson.name=null,e.selectedLesson.link=null,e.selectedLesson.youtube=null,e.selectedLesson.oldName=null,e.closeDialog(),e.isLoading=!1,e.text="Materi Berhasil Diedit",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},deleteMeetingLesson:function(){var e=this;this.isLoading=!0,this.deleteLesson(this.selectedLesson).then((function(t){e.selectedLesson.id=null,e.selectedLesson.name=null,e.selectedLesson.link=null,e.selectedLesson.youtube=null,e.selectedLesson.oldName=null,e.closeDialog(),e.isLoading=!1,e.text="Materi Berhasil Dihapus",e.snackbar=!0})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))},createMeetingQuiz:function(){var e=this;this.isLoading=!0,this.createQuiz(this.quizPayload).then((function(t){e.closeDialog(),e.isLoading=!1,e.text="Quiz Berhasil Dibuat",e.snackbar=!0,e.$router.push("/teacher/classes/class/"+e.$store.state.teacher.classDetail.id+"/meeting/"+e.$store.state.teacher.meetingDetail.id+"/quiz/"+t.data.id)})).catch((function(t){e.isLoading=!1,e.text=t,e.snackbar=!0}))}})},f=(n(688),n(37)),y=n(61),k=n.n(y),D=n(564),x=n(542),w=n(214),L=n(575),C=n(230),P=n(215),S=n(93),M=n(574),$=n(609),z=n(537),V=n(717),O=n(712),A=n(528),j=n(90),N=n(565),E=n(595),Q=n(213),B=n(553),T=n(217),I=n(130),W=n(218),Y=n(219),F=n(18),J=n(529),R=n(216),H=n(593),U=n(612),G=n(592),K=n(540),X=n(620),Z=n(627),ee=n(588),te=n(527),ae=n(710),ie=n(59),ne=n(570),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-container",[0==e.isLoaded?n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{jalign:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):e._e(),e._v(" "),1==e.isLoaded?n("v-flex",[n("v-alert",{staticStyle:{"text-decoration":"none","font-weight":"bold"},attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[n("v-fab-transition",[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id",params:{id:e.classDetail.id}}}},[n("v-btn",{attrs:{color:"blue darken-1",fab:"",dark:"",medium:"",fixed:"",bottom:"",left:""}},[n("v-icon",[e._v("mdi-arrow-left")])],1)],1)],1),e._v(" "),n("v-breadcrumbs",{staticClass:"pb-1 pt-3",attrs:{link:"",items:e.breadcrumbs,divider:"/"}})],1),e._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{align:"left",cols:"12"}},[n("v-card",{attrs:{color:"teal",dark:""}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-calendar")]),e._v(" "),n("v-card-title",{staticClass:"text-left",staticStyle:{"font-weight":"bolder"}},[e._v(" Meeting ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"white",icon:""}},"v-btn",l,!1),o),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,3444389850)},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{link:""},on:{click:function(t){e.editMeetingDialog=!0}}},[n("v-list-item-title",{staticStyle:{"font-weight":"bold"}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" Edit\n                      Meeting")],1)],1),e._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(t){e.deleteMeetingDialog=!0}}},[n("v-list-item-title",{staticStyle:{"font-weight":"bold"}},[n("v-icon",[e._v("mdi-delete")]),e._v(" Delete\n                      Meeting")],1)],1)],1)],1)],1),e._v(" "),n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n              "+e._s(e.meetingDetail.name)+"\n            ")]),e._v(" "),n("v-card-subtitle",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.classDetail.teacher_name))]),e._v(" "),n("v-col",[n("v-chip",{staticClass:"my-2",staticStyle:{"font-weight":"bold"},attrs:{color:"teal darken-3","text-color":"white"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[e._v("mdi-calendar")])],1),e._v(e._s(e.meetingDetail.date)+"\n              ")],1),e._v(" "),n("v-chip",{staticClass:"my-2",staticStyle:{"font-weight":"bold"},attrs:{color:"teal darken-2","text-color":"white"}},[e._v(e._s(e.meetingDetail.start_time)+" -\n                "+e._s(e.meetingDetail.finish_time))])],1),e._v(" "),n("v-card-actions",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[e.meetingDetail.quiz?n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id-meeting-meetingid-quiz-quizid",params:{id:e.classDetail.id,meetingid:e.meetingDetail.id,quizid:e.meetingDetail.quiz.id}}}},[n("v-btn",e._g(e._b({staticClass:"ml-2 mb-2 my-4",attrs:{rounded:"",color:"primary",dark:""}},"v-btn",l,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-pencil")]),e._v("\n\n                      Edit Quiz\n                    ")],1)],1):e._e()]}}],null,!1,718247739)},[e._v(" "),n("span",[e._v("Click to edit quiz")])]),e._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[null==e.meetingDetail.quiz?n("v-btn",e._g(e._b({staticClass:"ml-4 mb-2 my-4",attrs:{rounded:"",color:"blue lighten-2",dark:""},on:{click:function(t){e.createQuizDialog=!0}}},"v-btn",l,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-pencil")]),e._v("\n\n                      Create Quiz\n                    ")],1):e._e()]}}],null,!1,2960842879)},[e._v(" "),n("span",[e._v("See Quiz Result")])])],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"mr-4 mb-2 my-4",staticStyle:{"font-weight":"bold"},attrs:{rounded:"",color:"green",dark:""},on:{click:function(t){e.createLessonDialog=!0}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n\n                Create Lesson\n              ")],1)],1)],1)],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{outlined:""}},[n("v-tabs",{attrs:{text:""}},[n("v-tabs-slider"),e._v(" "),n("v-tab",{staticStyle:{"text-decoration":"none"},attrs:{href:"#tab-1"},on:{click:e.lessons}},[e._v("\n                Lessons\n              ")]),e._v(" "),n("v-tab",{staticStyle:{"text-decoration":"none"},attrs:{href:"#tab-2"},on:{click:e.attendances}},[e._v("\n                Attendances\n              ")]),e._v(" "),n("v-tab",{staticStyle:{"text-decoration":"none"},attrs:{href:"#tab-3"},on:{click:e.attemps}},[e._v("\n                Attemps\n              ")])],1)],1)],1)],1),e._v(" "),n("v-row",[e._l(e.meetingDetail.lessons,(function(t){return n("v-col",{directives:[{name:"show",rawName:"v-show",value:e.showLessons,expression:"showLessons"}],key:t.id,attrs:{align:"left",cols:"12",lg:"12",md:"12",xs:"12",sm:"12"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(o){var l=o.hover;return[n("v-card",{class:{"on-hover":l},attrs:{color:"white",light:"",elevation:l?4:2}},[n("v-app-bar",{staticClass:"pb-0 mb-n5",attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-book-open-variant")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"primary",icon:""}},"v-btn",l,!1),o),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),n("v-list",[n("v-list-item",{attrs:{link:""},on:{click:function(n){return e.openEditLessonDialog(t)}}},[n("v-list-item-title",{staticStyle:{"font-weight":"bold"}},[n("v-icon",[e._v("mdi-pencil")]),e._v(" Edit\n                        Lesson")],1)],1),e._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(n){return e.openDeleteLessonDialog(t)}}},[n("v-list-item-title",{staticStyle:{"font-weight":"bold"}},[n("v-icon",[e._v("mdi-delete")]),e._v("Delete\n                        Lesson")],1)],1)],1)],1)],1),e._v(" "),n("v-card-title",{staticClass:"headline"},[e._v("\n                "+e._s(t.name)+"\n                ")]),e._v(" "),n("v-card-subtitle",[e._v("Click For Detail")]),e._v(" "),n("v-card-actions",[null!==t.youtube?n("div",[n("v-btn",{attrs:{small:"",rounded:"",color:"red",dark:"",text:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-youtube")]),e._v("With Video\n                  ")],1)],1):e._e(),e._v(" "),null!==t.link?n("div",[n("v-btn",{attrs:{small:"",rounded:"",color:"primary",dark:"",text:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-link")]),e._v("With Link\n                  ")],1)],1):e._e()])],1)]}}],null,!0)})],1)})),e._v(" "),1==e.showAttendances&&""!=e.meetingDetail.attendees?n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",[n("v-card",{staticClass:"py-3 pb-0",attrs:{light:""}},[n("v-card-title",{staticClass:"headline"},[e._v("Student Attendances")]),e._v(" "),n("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("\n                                    Name\n                                ")]),e._v(" "),e._l(e.meetingDetail.attendees[0].attendance,(function(header){return n("th",{key:header.type,staticClass:"text-center"},[null!=header.lesson?n("span",[e._v(e._s(header.lesson))]):e._e(),e._v(" "),null!=header.quiz?n("span",[e._v(e._s(header.quiz))]):e._e()])}))],2)]),e._v(" "),n("tbody",e._l(e.meetingDetail.attendees,(function(t){return n("tr",{key:t.id},[n("td",{staticClass:"text-left"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.attendance,(function(t){return n("td",{key:t.lesson,staticClass:"text-center"},[0==t.is_present?n("span",[n("v-btn",{staticStyle:{color:"white","font-weight":"bold"},attrs:{"x-small":"",rounded:"",depressed:"",color:"red darken-1"}},[e._v("\n                                        Absent\n                                        ")])],1):e._e(),e._v(" "),1==t.is_present?n("span",[n("v-btn",{staticStyle:{color:"white","font-weight":"bold"},attrs:{"x-small":"",rounded:"",depressed:"",color:"green darken-1"}},[e._v("\n                                        Present\n                                          ")])],1):e._e()])}))],2)})),0)]},proxy:!0}],null,!1,869842786)})],1)],1)],1)],1):e._e(),e._v(" "),1==e.showAttemps&&""!=e.meetingDetail.quiz_attempts?n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",[n("v-card",{staticClass:"py-3 pb-0",attrs:{light:""}},[n("v-card-title",{staticClass:"headline"},[e._v("Quiz Attempts")]),e._v(" "),n("v-card-subtitle",{staticClass:"text-left",staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.meetingDetail.quiz.name))]),e._v(" "),e._l(e.meetingDetail.quiz_attempts,(function(t){return n("div",{key:t.id},[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"teacher-classes-class-id-meeting-meetingid-quiz-quizid-attempt-attemptid",params:{id:e.classDetail.id,meetingid:e.meetingDetail.id,quizid:e.meetingDetail.quiz.id,attemptid:t.id}}}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://res.cloudinary.com/douzspxoy/image/upload/v1626922054/images/profile/profile_tlwd3z.png"}})]),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-left"},[e._v(e._s(t.student_name))]),e._v(" "),n("v-list-item-subtitle",{staticClass:"text-left"},[e._v(e._s(t.student_school))]),e._v(" "),n("v-list-item-subtitle",{staticClass:"my-2 text-left"},[n("v-btn",{staticStyle:{color:"white","font-weight":"bold"},attrs:{depressed:"",rounded:"",color:"green","x-small":""}},[e._v("\n                                    Correct : "+e._s(t.correct_number)+"\n                                        \n                                    ")]),e._v(" "),n("v-btn",{staticStyle:{color:"white","font-weight":"bold"},attrs:{depressed:"",rounded:"",color:"red darken-1","x-small":""}},[e._v("\n                                    Incorrect : "+e._s(t.incorrect_number)+"\n\n                                        \n                                    ")]),e._v(" "),n("v-btn",{staticStyle:{color:"white","font-weight":"bold"},attrs:{depressed:"",rounded:"",color:"grey darken-1","x-small":""}},[e._v("\n                                    Not Answered : "+e._s(t.not_answered_number)+"\n                                    \n                                        \n                                    ")])],1)],1),e._v(" "),n("v-list-item-action",[n("v-btn",{staticStyle:{"background-color":"#1976D2","font-weight":"bolder"},attrs:{icon:"","x-large":"",dark:""}},[e._v("\n                              "+e._s(t.score)+"\n                            ")])],1)],1),e._v(" "),n("v-divider")],1)],1)}))],2)],1)],1)],1):e._e()],2)],1):e._e(),e._v(" "),n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{timeout:"2000"},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",o,!1),[e._v("\n            Close\n          ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n        "+e._s(e.text)+"\n\n        ")])],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.editMeetingDialog,callback:function(t){e.editMeetingDialog=t},expression:"editMeetingDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n            Edit Meeting\n          ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[n("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.editClassMeeting(t)}}},[n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Meeting Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-text-field",{attrs:{counter:35,"error-messages":o,label:"Meeting Name",required:"","prepend-icon":"mdi-pencil",outlined:"",dense:""},model:{value:e.meetingPayload.name,callback:function(t){e.$set(e.meetingPayload,"name",t)},expression:"meetingPayload.name"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Meeting Date",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{"error-messages":o,label:"Meeting Date","prepend-icon":"mdi-calendar",dense:"",outlined:"",readonly:""},model:{value:e.meetingPayload.date,callback:function(t){e.$set(e.meetingPayload,"date",t)},expression:"meetingPayload.date"}},"v-text-field",r,!1),l))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{min:(new Date).toISOString().substr(0,10)},on:{input:function(t){e.menu=!1}},model:{value:e.meetingPayload.date,callback:function(t){e.$set(e.meetingPayload,"date",t)},expression:"meetingPayload.date"}})],1)]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("validation-provider",{attrs:{name:"Meeting Start Time ",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.meetingPayload.start_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.meetingPayload,"start_time",t)},"update:return-value":function(t){return e.$set(e.meetingPayload,"start_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{"error-messages":o,label:"Start Time","prepend-icon":"mdi-clock-time-four-outline",dense:"",outlined:"",readonly:""},on:{change:function(t){e.meetingPayload.finish_time=null}},model:{value:e.meetingPayload.start_time,callback:function(t){e.$set(e.meetingPayload,"start_time",t)},expression:"meetingPayload.start_time"}},"v-text-field",r,!1),l))]}}],null,!0),model:{value:e.startMenu,callback:function(t){e.startMenu=t},expression:"startMenu"}},[e._v(" "),e.startMenu?n("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(t){return e.$refs.menu.save(e.meetingPayload.start_time)}},model:{value:e.meetingPayload.start_time,callback:function(t){e.$set(e.meetingPayload,"start_time",t)},expression:"meetingPayload.start_time"}}):e._e()],1)]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("validation-provider",{directives:[{name:"show",rawName:"v-show",value:null!=e.meetingPayload.start_time,expression:"meetingPayload.start_time != null"}],attrs:{name:"Meeting Finish Time",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.meetingPayload.finish_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.meetingPayload,"finish_time",t)},"update:return-value":function(t){return e.$set(e.meetingPayload,"finish_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{"error-messages":o,label:"Finish Time","prepend-icon":"mdi-clock-time-four-outline",dense:"",outlined:"",readonly:""},model:{value:e.meetingPayload.finish_time,callback:function(t){e.$set(e.meetingPayload,"finish_time",t)},expression:"meetingPayload.finish_time"}},"v-text-field",r,!1),l))]}}],null,!0),model:{value:e.finishMenu,callback:function(t){e.finishMenu=t},expression:"finishMenu"}},[e._v(" "),e.finishMenu?n("v-time-picker",{attrs:{format:"24hr",min:e.meetingPayload.start_time,"full-width":""},on:{"click:minute":function(t){return e.$refs.menu2.save(e.meetingPayload.finish_time)}},model:{value:e.meetingPayload.finish_time,callback:function(t){e.$set(e.meetingPayload,"finish_time",t)},expression:"meetingPayload.finish_time"}}):e._e()],1)]}}],null,!0)})],1)],1)],1)],1),e._v(" "),n("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#e0e0e0"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                CANCEL\n              ")]),e._v(" "),null!=e.meetingPayload.date&&null!=e.meetingPayload.start_time&&null!=e.meetingPayload.finish_time?n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:o,color:"primary"},on:{click:e.editClassMeeting}},[e._v("\n                Edit\n              ")]):e._e(),e._v(" "),null==e.meetingPayload.date||null==e.meetingPayload.start_time||null==e.meetingPayload.finish_time?n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:"",color:"primary"}},[e._v("\n                Edit\n              ")]):e._e()],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.deleteMeetingDialog,callback:function(t){e.deleteMeetingDialog=t},expression:"deleteMeetingDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v(" Delete Meeting ")]),e._v(" "),n("v-card-text",[e._v("Apakah anda yakin ingin menghapus meeting\n          "),n("code",[e._v(e._s(e.meetingDetail.name))]),e._v(" dari kelas\n          "),n("code",[e._v(e._s(e.classDetail.name))]),e._v(" ?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n            Batal\n          ")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.deleteMeeting}},[e._v("\n            Delete\n          ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.createLessonDialog,callback:function(t){e.createLessonDialog=t},expression:"createLessonDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n            Create Lesson\n          ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[n("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.createMeetingLesson(t)}}},[n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Meeting Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-text-field",{attrs:{counter:35,"error-messages":o,label:"Lesson Name",required:"",outlined:"",dense:""},model:{value:e.lessonPayload.name,callback:function(t){e.$set(e.lessonPayload,"name",t)},expression:"lessonPayload.name"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Lesson Link",outlined:"",dense:"",placeholder:"Ex : https://meet.google.com/zhe-etpo-jii"},model:{value:e.lessonPayload.link,callback:function(t){e.$set(e.lessonPayload,"link",t)},expression:"lessonPayload.link"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Youtube Link",outlined:"",dense:"",placeholder:"Ex : https://www.youtube.com/watch?v=mBhqJam52rs"},on:{change:function(t){return e.setYoutube(e.lessonPayload.youtube)}},model:{value:e.lessonPayload.youtube,callback:function(t){e.$set(e.lessonPayload,"youtube",t)},expression:"lessonPayload.youtube"}})],1),e._v(" "),n("div",{staticClass:"videoWrapper"},[n("iframe",{staticClass:"py-2 px-2",attrs:{width:"300",height:"180",src:e.ytvid,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}})])],1),e._v(" "),n("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#e0e0e0"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                CANCEL\n              ")]),e._v(" "),n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:o,color:"primary"},on:{click:e.createMeetingLesson}},[e._v("\n                Create\n              ")])],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.editLessonDialog,callback:function(t){e.editLessonDialog=t},expression:"editLessonDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-card-subtitle",{staticStyle:{"font-weight":"bold",color:"white"}},[e._v("\n            Edit Lesson "+e._s(e.selectedLesson.oldName)+"\n          ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[n("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.editMeetingLesson(t)}}},[n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Meeting Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-text-field",{attrs:{counter:35,"error-messages":o,label:"Lesson Name",required:"",outlined:"",dense:""},model:{value:e.selectedLesson.name,callback:function(t){e.$set(e.selectedLesson,"name",t)},expression:"selectedLesson.name"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Lesson Link",outlined:"",dense:"",placeholder:"Ex : https://meet.google.com/zhe-etpo-jii"},model:{value:e.selectedLesson.link,callback:function(t){e.$set(e.selectedLesson,"link",t)},expression:"selectedLesson.link"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Youtube Link",outlined:"",dense:"",placeholder:"Ex : https://www.youtube.com/watch?v=mBhqJam52rs"},on:{change:function(t){return e.setYoutube(e.selectedLesson.youtube)}},model:{value:e.selectedLesson.youtube,callback:function(t){e.$set(e.selectedLesson,"youtube",t)},expression:"selectedLesson.youtube"}})],1),e._v(" "),n("div",{staticClass:"videoWrapper"},[n("iframe",{staticClass:"py-2 px-2",attrs:{width:"400",height:"300",src:e.ytvid,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}})])],1),e._v(" "),n("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#e0e0e0"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                CANCEL\n              ")]),e._v(" "),n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:o,color:"primary"},on:{click:e.editMeetingLesson}},[e._v("\n                Edit\n              ")])],1)],1)]}}])})],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.deleteLessonDialog,callback:function(t){e.deleteLessonDialog=t},expression:"deleteLessonDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v(" Delete Lesson ")]),e._v(" "),n("v-card-text",[e._v("Apakah anda yakin ingin menghapus materi\n          "),n("code",[e._v(" "+e._s(e.selectedLesson?e.selectedLesson.name:""))]),e._v(" dari\n          pertemuan "),n("code",[e._v(" "+e._s(e.meetingDetail.name))]),e._v(" ?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n            Batal\n          ")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.deleteMeetingLesson}},[e._v("\n            Delete\n          ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.createQuizDialog,callback:function(t){e.createQuizDialog=t},expression:"createQuizDialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n            Create Quiz\n          ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closeDialog}},[n("v-icon",[e._v("mdi-close-thick")])],1)],1),e._v(" "),1==e.isLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),e._v(" "),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.createMeetingQuiz(t)}}},[n("v-card-text",[n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Meeting Name",rules:"required|min:2|max:100"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-text-field",{attrs:{counter:100,"error-messages":o,label:"Quiz Name",required:"",outlined:"",dense:""},model:{value:e.quizPayload.name,callback:function(t){e.$set(e.quizPayload,"name",t)},expression:"quizPayload.name"}})]}}],null,!0)})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("validation-provider",{attrs:{name:"Quiz Duration",rules:"required|numeric|min:1|max:3|min_value:1"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("v-text-field",{attrs:{label:"Quiz Duration",counter:3,"error-messages":o,outlined:"",dense:"",placeholder:"Dalam Menit, Contoh : 60"},model:{value:e.quizPayload.duration,callback:function(t){e.$set(e.quizPayload,"duration",t)},expression:"quizPayload.duration"}})]}}],null,!0)})],1)],1),e._v(" "),n("v-card-actions",{staticClass:"py-4 pb-4",staticStyle:{"background-color":"#e0e0e0"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                CANCEL\n              ")]),e._v(" "),n("v-btn",{staticClass:"py-4 pb-4",attrs:{disabled:o,color:"primary"},on:{click:e.createMeetingQuiz}},[e._v("\n                Create\n              ")])],1)],1)]}}])})],1)],1),e._v(" "),n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v("\n        Please Wait...\n        "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"2aaa08bb",null);t.default=component.exports;k()(component,{VAlert:D.a,VAppBar:x.a,VAvatar:w.a,VBreadcrumbs:L.a,VBtn:C.a,VCard:P.a,VCardActions:S.a,VCardSubtitle:S.b,VCardText:S.c,VCardTitle:S.d,VChip:M.a,VCol:$.a,VContainer:z.a,VDatePicker:V.a,VDialog:O.a,VDivider:A.a,VFabTransition:j.c,VFlex:N.a,VHover:E.a,VIcon:Q.a,VLayout:B.a,VList:T.a,VListItem:I.a,VListItemAction:W.a,VListItemAvatar:Y.a,VListItemContent:F.a,VListItemSubtitle:F.b,VListItemTitle:F.c,VMenu:J.a,VProgressLinear:R.a,VRow:H.a,VSimpleTable:U.a,VSnackbar:G.a,VSpacer:K.a,VTab:X.a,VTabs:Z.a,VTabsSlider:ee.a,VTextField:te.a,VTimePicker:ae.a,VToolbar:ie.a,VTooltip:ne.a})}}]);