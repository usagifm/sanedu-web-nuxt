(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{583:function(t,e,n){var content=n(647);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("1f623407",content,!0,{sourceMap:!1})},646:function(t,e,n){"use strict";n(583)},647:function(t,e,n){(e=n(8)(!1)).push([t.i,'.circle[data-v-66fd1f6e]{width:150px;height:150px;line-height:150px;border-radius:50%;font-size:40px;color:#000;text-align:center;background:#fff;left:50%;transform:"translateX(-50%)"}sub[data-v-66fd1f6e]{font-size:16px}',""]),t.exports=e},700:function(t,e,n){"use strict";n.r(e);n(4),n(26),n(17),n(70),n(94);var r,o,l=n(0),c=(n(61),n(16)),d=n(44);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _={head:function(){return{title:"SANEDU | Quiz Result"}},middleware:["auth-student"],layout:"home",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.params,e.next=3,Promise.all([n.dispatch("class/getMeetingDetailData",r),n.dispatch("class/getClassDetailData",r.id)]);case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))()},methods:{openModal:function(t,e){this.questionNumber=e,this.questionDetail=t,this.detailModal=!0}},mounted:function(){var t=this;self=this,this.$store.state.class.meetingDetail.quiz?this.$store.state.class.meetingDetail.quiz&&(this.$store.state.class.meetingDetail.attempt?this.$axios.get("/user/attempts/"+this.$store.state.class.meetingDetail.attempt.id).then((function(e){for(self.soals=e.data.quiz.questions,self.koreksis=e.data.corrections,r=0;r<e.data.quiz.question_number;r++)if(void 0!==self.koreksis[r])for(o=0;o<e.data.quiz.question_number;o++)self.koreksis[r].quiz_question_id==self.soals[o].id&&(self.koreksiId[o]=self.koreksis[r]);t.quizResult=e.data,t.isLoaded=!0})).catch((function(t){console.log(t)})):this.$store.state.class.meetingDetail.attempt||(this.$swal("Quiz Result Not Found !","You have not complete the quiz ","error"),this.$router.push("/student/classes/class/"+this.$store.state.class.classDetail.id+"/meeting/"+this.$store.state.class.meetingDetail.id))):(this.$swal("Quiz not Found !","Please Check Your Meeting !","error"),this.$router.push("/student/classes/class/"+this.$store.state.class.classDetail.id+"/meeting/"+this.$store.state.class.meetingDetail.id))},data:function(){return{isLoaded:!1,quizResult:null,soals:[],indexSoal:0,koreksiId:[],koreksis:[],questionNumber:null,detailModal:!1,questionDetail:null,breadcrumbs:[{text:"Sanclass",disabled:!1,href:"/student/classes"},{text:this.$store.state.class.classDetail.name,disabled:!1,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id)},{text:this.$store.state.class.meetingDetail.name,disabled:!1,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id,"/meeting/").concat(this.$store.state.class.meetingDetail.id)},{text:"Quiz Result",disabled:!0,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id,"/meeting/").concat(this.$store.state.class.meetingDetail.id)}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.d)("class",{meetingDetail:function(t){return t.meetingDetail},classDetail:function(t){return t.classDetail}}))},f=(n(646),n(37)),m=n(62),h=n.n(m),k=n(570),w=n(538),x=n(214),C=n(630),y=n(569),D=n(228),z=n(215),I=n(93),V=n(564),$=n(533),O=n(684),S=n(91),j=n(579),R=n(213),M=n(176),Q=n(552),A=n(216),N=n(560),P=n(643),L=n(536),T=n(580),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-container",[0==t.isLoaded?n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-progress-linear",{attrs:{rounded:"",height:"6",indeterminate:"",color:"blue lighten-1"}})],1)],1)],1):t._e(),t._v(" "),1==t.isLoaded&&this.$store.state.class.meetingDetail.quiz?n("v-flex",[n("v-alert",{staticStyle:{"text-decoration":"none","font-weight":"bold"},attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[n("v-fab-transition",[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"student-classes-class-id-meeting-meetingid",params:{id:t.classDetail.id,meetingid:t.meetingDetail.id}}}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{color:"blue darken-1",fab:"",dark:"",medium:"",fixed:"",bottom:"",left:""}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1)],1),t._v(" "),n("v-breadcrumbs",{staticClass:"pb-1 pt-3",attrs:{link:"",items:t.breadcrumbs,divider:"/"}})],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[1==t.isLoaded&&this.$store.state.class.meetingDetail.quiz?n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{align:"center"}},[n("section",{staticStyle:{margin:"0",padding:"0"}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0,0,0,0)"}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-4",attrs:{rounded:"",color:"blue lighten-2",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v("mdi-newspaper-variant-outline")]),t._v("\n\n                     "+t._s(t.quizResult.quiz.name)+"\n                   ")],1)]}}],null,!1,3267084505)},[t._v(" "),n("span",[t._v("Quiz Name")])])],1),t._v(" "),n("v-app-bar",{staticClass:"py-0",attrs:{flat:"",color:"rgba(0,0,0,0)"}},[n("v-spacer"),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-4 mr-3",attrs:{rounded:"",color:"blue lighten-2",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v("mdi-clock")]),t._v("\n\n                     "+t._s(t.quizResult.quiz.duration)+" Min\n                   ")],1)]}}],null,!1,2150147117)},[t._v(" "),n("span",[t._v("Quiz duration")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-4 ml-3",attrs:{rounded:"",color:"blue lighten-2",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v("mdi-file")]),t._v("\n\n                     "+t._s(t.quizResult.quiz.question_number)+" Questions\n                   ")],1)]}}],null,!1,2405235622)},[t._v(" "),n("span",[t._v("Quiz Question Number")])])],1),t._v(" "),n("v-card-subtitle",[n("div",{staticStyle:{margin:"auto","margin-top":"30px"}},[n("div",{staticClass:"wow bounceInUp",attrs:{"data-wow-duration":"1.4s"}},[n("div",{staticClass:"circle"},[t._v("\n                     "+t._s(t.quizResult.score)),n("sub",[t._v("/ 100")])]),t._v(" "),n("p",{staticClass:"title mt-1",staticStyle:{color:"#ffffff","font-size":"13px","text-align":"center","font-weight":"600"}},[t._v("\n                     Your Score !\n                   ")])])])]),t._v(" "),n("div",{staticClass:"wave wave1"}),t._v(" "),n("div",{staticClass:"wave wave2"}),t._v(" "),n("div",{staticClass:"wave wave3"}),t._v(" "),n("div",{staticClass:"wave wave4"})],1),t._v(" "),n("v-col",{attrs:{cols:"12",align:"left"}},[n("v-banner",{attrs:{"two-line":""}},[n("v-col",[n("h4",{staticClass:"captoin"},[n("v-avatar",{attrs:{slot:"icon",color:"primary",size:"40"},slot:"icon"},[n("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[t._v(" mdi-fish ")])],1),t._v("\n\n                   Quiz Result Overview\n                 ")],1)]),t._v(" "),n("v-btn",{attrs:{text:"",color:"green"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v("\n                 Correct Answer : "+t._s(t.quizResult.correct_number)+"\n               ")],1),t._v(" "),n("v-btn",{attrs:{text:"",color:"red"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-backspace")]),t._v("\n                 Incorrect Answer : "+t._s(t.quizResult.incorrect_number)+"\n               ")],1),t._v(" "),n("v-btn",{attrs:{text:"",color:"grey"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-radiobox-blank")]),t._v("\n                 Blank Answer : "+t._s(t.quizResult.not_answered_number)+"\n               ")],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("No")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Detail")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Your Answer")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Correction")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Answer Key")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Correction Status")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Answer Image")])])]),t._v(" "),n("tbody",t._l(t.quizResult.quiz.questions,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r+1))]),t._v(" "),n("td",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var l=o.on,c=o.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",icon:""},on:{click:function(n){return t.openModal(e,r)}}},"v-btn",c,!1),l),[n("v-icon",[t._v("mdi-eye")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Question Detail")])])],1),t._v(" "),n("td",[t.koreksiId[r]?n("div",{staticClass:"text-center"},[t._v("\n                         "+t._s(t.koreksiId[r].answer.charAt(0).toUpperCase()+t.koreksiId[r].answer.slice(1))+"\n                       ")]):t._e(),t._v(" "),t.koreksiId[r]?t._e():n("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])]),t._v(" "),n("td",[t.koreksiId[r]?n("div",{staticClass:"text-center"},[t._v("\n                         "+t._s(t.koreksiId[r].is_correct)+"\n                       ")]):t._e(),t._v(" "),t.koreksiId[r]?t._e():n("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])]),t._v(" "),n("td",[e.answer?n("div",{staticClass:"text-center"},[t._v("\n                         "+t._s(e.answer.toUpperCase())+"\n                       ")]):t._e(),t._v(" "),e.answer?t._e():n("div",{staticClass:"text-center"},[t._v("-")])]),t._v(" "),n("td",[t.koreksiId[r]?n("div",{staticClass:"text-center"},[0==t.koreksiId[r].is_corrected?n("div",[t._v("\n                           Not Yet\n                         ")]):t._e(),t._v(" "),1==t.koreksiId[r].is_corrected?n("div",[t._v("\n                           Corrected\n                         ")]):t._e()]):t._e(),t._v(" "),t.koreksiId[r]?t._e():n("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])]),t._v(" "),n("td",[t.koreksiId[r]?n("div",{staticClass:"text-center"},[null==t.koreksiId[r].answer_image?n("div",[t._v("\n                           -\n                         ")]):t._e(),t._v(" "),t.koreksiId[r].answer_image?n("div",[n("a",{attrs:{target:"_blank",href:t.koreksiId[r].answer_image}},[t._v("Link")])]):t._e()]):t._e(),t._v(" "),t.koreksiId[r]?t._e():n("div",{staticClass:"text-center"},[t._v("\n                         -\n                       ")])])])})),0)]},proxy:!0}],null,!1,1033641416)})],1)],1)],1):t._e()],1)],1):t._e(),t._v(" "),1==t.detailModal?n("v-dialog",{attrs:{persistent:"","max-width":"700"},model:{value:t.detailModal,callback:function(e){t.detailModal=e},expression:"detailModal"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n           Question Detail : No "+t._s(t.questionNumber+1)+"\n         ")]),t._v(" "),n("v-card-text",[1==t.questionDetail.question_type?n("div",[t._v("\n             Question Type : Multiple Choice\n           ")]):n("div",[t._v("Question Type : Essay")]),t._v(" "),null!==t.questionDetail.question_image?n("div",[n("v-img",{staticClass:"grey darken-4",attrs:{contain:"","lazy-src":"https://picsum.photos/id/11/10/6",src:t.questionDetail.question_image}})],1):n("div",[t._v("No Image")]),t._v(" "),n("v-card-subtitle",[t._v("\n             "+t._s(t.questionDetail.question)+"\n           ")]),t._v(" "),t.questionDetail.answer?n("v-card-subtitle",[t._v("\n             Answer Key : "+t._s(t.questionDetail.answer.toUpperCase())+" {{}}\n           ")]):t._e()],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.detailModal=!1}}},[t._v("\n             Close\n           ")])],1)],1)],1):t._e()],1)],1)}),[],!1,null,"66fd1f6e",null);e.default=component.exports;h()(component,{VAlert:k.a,VAppBar:w.a,VAvatar:x.a,VBanner:C.a,VBreadcrumbs:y.a,VBtn:D.a,VCard:z.a,VCardActions:I.a,VCardSubtitle:I.b,VCardText:I.c,VCardTitle:I.d,VCol:V.a,VContainer:$.a,VDialog:O.a,VFabTransition:S.c,VFlex:j.a,VIcon:R.a,VImg:M.a,VLayout:Q.a,VProgressLinear:A.a,VRow:N.a,VSimpleTable:P.a,VSpacer:L.a,VTooltip:T.a})}}]);