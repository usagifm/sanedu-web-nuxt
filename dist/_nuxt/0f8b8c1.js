(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{631:function(e,t,n){var content=n(682);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("444cd81b",content,!0,{sourceMap:!1})},681:function(e,t,n){"use strict";n(631)},682:function(e,t,n){(t=n(8)(!1)).push([e.i,'.btn-soal-group[data-v-7ebd0ed4]{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-soal[data-v-7ebd0ed4]{width:35px;height:35px;display:table-cell;font-weight:400;border:.5px solid #9e9e9e;padding:0;margin-right:5px;margin-bottom:5px}.btn-soal .flex[data-v-7ebd0ed4]{width:100%;height:100%;display:flex;align-items:center}.btn-soal .flex span[data-v-7ebd0ed4]{text-align:center;display:block;width:100%}.btn-select[data-v-7ebd0ed4],.btn-select[data-v-7ebd0ed4]:active,.btn-select[data-v-7ebd0ed4]:focus{border:2px solid #dea604;font-weight:800}.btn-select.btn-filled[data-v-7ebd0ed4]{background:#dea604;border-color:#dea604}.font-soal[data-v-7ebd0ed4]{font-size:14px}.font-soal p[data-v-7ebd0ed4]:last-child{margin-bottom:0}* .btn-space[data-v-7ebd0ed4]:last-child{margin-right:0}.jawaban[data-v-7ebd0ed4]{position:relative}.jawaban #jawabanNull[data-v-7ebd0ed4],.jawaban input[name=jawaban][data-v-7ebd0ed4]{display:none}.jawaban label[data-v-7ebd0ed4]{background:#fff;min—height:40px;padding:10px 35px 10px 50px;border—radius:5px;border:1px solid #efefef;display:block;font—weight:400}.jawaban label .label—pilihan[data-v-7ebd0ed4]{position:absolute;left:20px}.jawaban label[data-v-7ebd0ed4]:hover{cursor:pointer;background:#efefef}.jawaban label.hapus—jawaban[data-v-7ebd0ed4]{display:normal;background:#fff;text—align:right;padding:15px 0 0;border:none;font—weight:400}.jawaban label.hapus—jawaban[data-v-7ebd0ed4]:hover{font—weight:600}.jawaban input:checked+label[data-v-7ebd0ed4]{background:#87cb16;color:#fff}.jawaban input:checked~label.hapus—jawaban[data-v-7ebd0ed4]{display:block}.jawaban #jawabanNull:checked+.hapus—jawaban[data-v-7ebd0ed4]{display:none}textarea[data-v-7ebd0ed4]{overflow:hidden;padding:10px;width:250px;font-size:14px;margin:50px auto;display:block;border-radius:10px;border:6px solid #567}.gradbot[data-v-7ebd0ed4]{background:linear-gradient(0deg,#65acec,#8bc8ff);color:#fff}.gradborder[data-v-7ebd0ed4],.gradbot[data-v-7ebd0ed4]{border-radius:5px;border:1px solid #65acec;margin:2px;padding:5px 35px}.gradborder[data-v-7ebd0ed4]{background:#fff;color:#fff;color:#65acec}.gradient-effect[data-v-7ebd0ed4]{position:relative;display:block}.gradient-effect[data-v-7ebd0ed4]:before{content:"";position:absolute;left:0;bottom:-1px;right:0;height:100%;background:linear-gradient(0deg,rgba(0,0,0,.8645833333333334),transparent)}.botabsolute[data-v-7ebd0ed4]{position:absolute;width:100%;bottom:0;padding:15px;background:linear-gradient(0deg,#65acec,#8bc8ff);left:0;right:0;color:#fff}.imgresponsive[data-v-7ebd0ed4]{width:100%;max-width:500px;height:auto}.sembunyi[data-v-7ebd0ed4]{display:block;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=t},751:function(e,t,n){"use strict";n.r(t);n(4),n(71),n(28),n(17),n(69),n(94),n(37);var o,l,r=n(0),d=(n(53),n(16)),c=n(43);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h={head:function(){return{title:"SANEDU | "+this.$store.state.class.meetingDetail.quiz.name}},middleware:["auth-student"],layout:"home",asyncData:function(e){return Object(d.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.params,t.next=3,Promise.all([n.dispatch("class/getMeetingDetailData",o),n.dispatch("class/getClassDetailData",o.id)]);case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{rules:[function(e){return!e||e.size<2e6||"Avatar size should be less than 2 MB!"}],handyAttachments:[],quizId:null,imagePreview:null,jenis_soal:null,imagetemp:null,soals:[],overlay:!1,isLoading:!1,soal:{},noSoal:0,indexSoal:0,koreksis:[],koreksiSoal:[],updatedSoal:[],koreksi:{},koreksiId:[],dialog:!1,answer_image:null,koreksiImage:[],jawabanUser:[],updatedKoreksiImage:[],jumlahBarisNomor:0,jumlahSoal:0,jawaban:null,tai:!1,answerImage:null,isLastQuestion:null,isErrorExist:!1,errorMessage:null,isFinish:!1,isMounted:!1,endTimer:null,intervalHandler:null,timer:null,isLoaded:!1,breadcrumbs:[{text:"Sanclass",disabled:!1,href:"/student/classes"},{text:this.$store.state.class.classDetail.name,disabled:!1,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id)},{text:this.$store.state.class.meetingDetail.name,disabled:!0,href:"/student/classes/class/".concat(this.$store.state.class.classDetail.id,"/meeting/").concat(this.$store.state.class.meetingDetail.id)}]}},methods:{showMyImage:function(e){if(e){var t=e;$("#dummyImage").show();var n=t,img=document.getElementById("dummyImage");img.file=n;var o=new FileReader;o.onload=(l=img,function(e){document.createElement("img"),new Compressor(n,{quality:.6,success:function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result;l.innerHTML=e,this.imagePreview=e}},error:function(e){console.log(e.message)}})}),o.readAsDataURL(n)}var l},closeRecap:function(){this.isFinish=!1,this.getSoal(0)},changeSoal:function(e){this.isFinish||(this.jawabanUser[this.indexSoal]=this.jawaban),this.getSoal(e)},getSoal:function(e){if(window.scrollTo(0,150),e<this.soals.length){var t=this;t.soal=t.soals[e],t.noSoal=e+1,t.indexSoal=e;var a=t.koreksis.find((function(e){return e.quiz_question_id===t.soal.id}));void 0!==a&&(t.jawabanUser[t.indexSoal]=a.answer,t.koreksiId[t.indexSoal]=a.id,t.koreksiImage[t.indexSoal]=a.answer_image),null!=t.updatedSoal[t.indexSoal]&&(t.jawabanUser[t.indexSoal]=t.updatedSoal[t.indexSoal]),null!=t.updatedKoreksiImage[t.indexSoal]&&(t.koreksiImage[t.indexSoal]=t.updatedKoreksiImage[t.indexSoal]),this.indexSoal==this.jumlahSoal-1?this.isLastQuestion=!0:this.isLastQuestion=!1,t.jawaban=t.jawabanUser[t.indexSoal]}$(document).ready((function(){$("#dummyImage").text(null),$("#image").val("")})),$("#btnNext").attr("disabled",!1),$("#btnHapus").attr("disabled",!1)},reqSoal:function(){var e=this,t=this;this.$axios.post("/user/quiz/"+this.quizId+"/start").then((function(e){if(e.data){for(t.isMounted=!0,t.attemptId=e.data.id,t.soals=e.data.quiz.questions,t.soal=t.soals[0],t.koreksis=e.data.corrections,o=0;o<e.data.quiz.question_number;o++)if(void 0!==t.koreksis[o])for(l=0;l<e.data.quiz.question_number;l++)t.koreksis[o].quiz_question_id==t.soals[l].id&&(t.jawabanUser[l]=t.koreksis[o].answer,t.koreksiId[l]=t.koreksis[o].id,t.koreksiImage[l]=t.koreksis[o].answer_image);t.noSoal=1,t.indexSoal=0,t.jawaban=t.jawabanUser[t.indexSoal],t.jumlahSoal=t.soals.length,t.endTimer=e.data.finished_at,t.jumlahBarisNomor=t.soals.length%5==0?Math.floor(t.soals.length/5):Math.floor(t.soals.length/5)+1}else console.log(e),t.isErrorExist=!0,t.errorMessage="Anda Gagal !"})).catch((function(t){e.$swal("Cant Take The Quiz !",t.response.data.message,"error"),e.$router.push("/student/classes/class/"+e.$store.state.class.classDetail.id+"/meeting/"+e.$store.state.class.meetingDetail.id)}))},nextSoal:function(){$("#btnNext").attr("disabled",!0),this.imagetemp=document.getElementById("dummyImage").innerHTML,this.indexSoal+1==this.jumlahSoal&&(this.isFinish=!0,this.tai=!0),this.indexSoal==this.jumlahSoal-1&&(this.isLastQuestion=!0),void 0!==this.jawabanUser[this.indexSoal]&&null==this.jawaban&&1==this.soal.question_type?this.sendJawaban():(null!=this.jawabanUser[this.indexSoal]||""===this.imagetemp||this.koreksiId[this.indexSoal]||2!=this.soal.question_type)&&(void 0===this.jawabanUser[this.indexSoal]||""!=this.imagetemp||this.koreksiId[this.indexSoal]||2!=this.soal.question_type)&&(void 0===this.jawabanUser[this.indexSoal]||""===this.imagetemp||this.koreksiId[this.indexSoal]||2!=this.soal.question_type)?null!=this.jawabanUser[this.indexSoal]||""!=this.imagetemp||this.koreksiId[this.indexSoal]||2!=this.soal.question_type?null==this.jawabanUser[this.indexSoal]&&null==this.jawaban&&1==this.soal.question_type||null!==this.jawabanUser[this.indexSoal]&&null!==this.jawaban&&this.jawaban==this.jawabanUser[this.indexSoal]&&1==this.soal.question_type?this.changeSoal(this.indexSoal+1):(void 0!==this.jawabanUser[this.indexSoal]&&void 0!==this.jawaban&&this.jawaban!==this.jawabanUser[this.indexSoal]&&1==this.soal.question_type||null!==this.jawabanUser[this.indexSoal]&&this.koreksiId[this.indexSoal]&&2==this.soal.question_type)&&this.updateJawaban():this.changeSoal(this.indexSoal+1):this.sendJawaban()},sendJawaban:function(){var e=this;this.isLoading=!0;document.getElementById("essay").innerHTML;if(2==e.soal.question_type&&(e.imagetemp=document.getElementById("dummyImage").innerHTML),null==e.imagetemp){var t={attempt_id:e.attemptId,answer:e.jawabanUser[e.indexSoal],quiz_question_id:e.soal.id};this.$axios.post("/user/quiz/"+this.quizId+"/answer/insert",t).then((function(t){t.data?(e.isLoading=!1,e.koreksiId[e.indexSoal]=t.data.id,e.getSoal(e.indexSoal+1)):(e.isErrorExist=!0,e.errorMessage="Anda Gagal !",$("#btnNext").attr("disabled",!1),$("#btnHapus").attr("disabled",!1))})).catch((function(e){console.log(e)}))}else if(null!==e.imagetemp&&null==e.jawabanUser[e.indexSoal]){e.jawabanUser[e.indexSoal]="Dijawab dengan foto";var n={attempt_id:e.attemptId,answer:e.jawabanUser[e.indexSoal],quiz_question_id:e.soal.id,answer_image:e.imagetemp};this.$axios.post("/user/quiz/"+this.quizId+"/answer/insert",n).then((function(t){t.data?(e.isLoading=!1,e.koreksiId[e.indexSoal]=t.data.id,e.koreksiImage[e.indexSoal]=t.data.answer_image,e.getSoal(e.indexSoal+1)):(e.isErrorExist=!0,e.errorMessage="Anda Gagal !",$("#btnNext").attr("disabled",!1),$("#btnHapus").attr("disabled",!1))})).catch((function(e){console.log(e)}))}else if(null!==e.imagetemp&&void 0!==e.jawabanUser[e.indexSoal]){e.jawabanUser[e.indexSoal]=e.jawabanUser[e.indexSoal];var o={attempt_id:e.attemptId,answer:e.jawabanUser[e.indexSoal],quiz_question_id:e.soal.id,answer_image:e.imagetemp};this.$axios.post("/user/quiz/"+this.quizId+"/answer/insert",o).then((function(t){t.data?(e.isLoading=!1,e.koreksiId[e.indexSoal]=t.data.id,e.koreksiImage[e.indexSoal]=t.data.answer_image,e.getSoal(e.indexSoal+1)):(e.isErrorExist=!0,e.errorMessage="Anda Gagal !",$("#btnNext").attr("disabled",!1),$("#btnHapus").attr("disabled",!1))})).catch((function(e){console.log(e)}))}},updateJawaban:function(){var e=this;if(this.isLoading=!0,2==e.soal.question_type&&(e.imagetemp=document.getElementById("dummyImage").innerHTML),null==e.imagetemp){var t={id:e.koreksiId[e.indexSoal],attempt_id:e.attemptId,answer:e.jawabanUser[e.indexSoal],quiz_question_id:e.soal.id};this.$axios.post("/user/quiz/"+this.quizId+"/answer/update",t).then((function(t){t.data?(e.isLoading=!1,e.updatedSoal[e.indexSoal]=e.jawabanUser[e.indexSoal],e.getSoal(e.indexSoal+1)):(e.isErrorExist=!0,e.errorMessage="Anda Gagal !",$("#btnNext").attr("disabled",!1),$("#btnHapus").attr("disabled",!1))})).catch((function(e){console.log(e)}))}else if(null!=e.imagetemp){var n={id:e.koreksiId[e.indexSoal],attempt_id:e.attemptId,answer:e.jawabanUser[e.indexSoal],quiz_question_id:e.soal.id,answer_image:e.imagetemp};this.$axios.post("/user/quiz/"+this.quizId+"/answer/update",n).then((function(t){t.data?(e.isLoading=!1,e.updatedSoal[e.indexSoal]=e.jawabanUser[e.indexSoal],e.updatedKoreksiImage[e.indexSoal]=t.data.answer_image,e.getSoal(e.indexSoal+1)):(e.isErrorExist=!0,e.errorMessage="Anda Gagal !",$("#btnNext").attr("disabled",!1),$("#btnHapus").attr("disabled",!1))})).catch((function(e){console.log(e)}))}},tick:function(){var e=moment(this.endTimer,"YYYY-MM-DD HH:mm:ss").toDate()-(new Date).getTime(),p=1;if(e<0&&1==p&&(p++,this.timer="Time Up !",this.$router.push("/student/classes/class/"+this.$store.state.class.classDetail.id+"/meeting/"+this.$store.state.class.meetingDetail.id+"/quiz/result")),e>0){Math.floor(e/864e5);var t="WAKTU : "+Math.floor(e%864e5/36e5)+":"+Math.floor(e%36e5/6e4)+":"+Math.floor(e%6e4/1e3);this.timer=t}},finishQuiz:function(){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Finish it!"}).then((function(t){t.isConfirmed&&e.$axios.post("/user/quiz/"+e.quizId+"/finish").then((function(t){e.$swal("Your Quiz is Done !!","Your Answers has been saved.","success"),e.$router.push("/student/classes/class/"+e.$store.state.class.classDetail.id+"/meeting/"+e.$store.state.class.meetingDetail.id)})).catch((function(e){console.log(e)}))}))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.d)("class",{meetingDetail:function(e){return e.meetingDetail},classDetail:function(e){return e.classDetail}})),mounted:function(){var e=this;this.$store.state.class.meetingDetail.quiz?this.$store.state.class.meetingDetail.attempt?(this.$swal("Your Quiz Has Been Done !","Please Check Your Quiz Result","success"),this.$router.push("/student/classes/class/"+this.$store.state.class.classDetail.id+"/meeting/"+this.$store.state.class.meetingDetail.id)):this.$store.state.class.meetingDetail.attempt||(this.quizId=this.$store.state.class.meetingDetail.quiz.id,this.reqSoal()):this.$store.state.class.meetingDetail.quiz||(this.$swal("Sorry, Quiz Not Found !","Please Check Your meeting","error"),this.$router.push("/student/classes/class/"+this.$store.state.class.classDetail.id+"/meeting/"+this.$store.state.class.meetingDetail.id)),this.intervalHandler=setInterval((function(){e.tick()}),1e3)}},v=(n(681),n(36)),w=n(61),f=n.n(w),x=n(539),_=n(231),k=n(216),S=n(93),j=n(590),y=n(534),I=n(730),U=n(732),C=n(214),D=n(553),z=n(217),M=n(570),E=n(619),N=n(731),L=n(537),A=n(733),P=n(59),T=n(574),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-container",{attrs:{fluid:""}},[!e.isMounted&&this.$store.state.class.meetingDetail.quiz?n("v-row",[n("v-col",{attrs:{align:"left",cols:"12",md:"12",xl:"12",sm:"12",xm:"12"}},[n("v-card",[n("v-skeleton-loader",e._b({attrs:{type:"table-heading, list-item-two-line"}},"v-skeleton-loader",e.attrs,!1))],1)],1),e._v(" "),n("v-col",{attrs:{align:"left",cols:"12",md:"9",xl:"9",sm:"12",xm:"12"}},[n("v-card",[n("v-skeleton-loader",e._b({attrs:{type:"table-heading, image, article"}},"v-skeleton-loader",e.attrs,!1))],1)],1),e._v(" "),n("v-col",{attrs:{align:"center",cols:"12",sm:"12",md:"3",xl:"3",xm:"12"}},[n("v-card",[n("v-skeleton-loader",e._b({attrs:{type:"table-heading,date-picker-days, actions"}},"v-skeleton-loader",e.attrs,!1))],1)],1)],1):e._e(),e._v(" "),n("v-row",[!e.isFinish&&e.isMounted&&this.$store.state.class.meetingDetail.quiz?n("v-col",{attrs:{align:"left",cols:"12",md:"12",xl:"12",sm:"12",xm:"12"}},[n("v-card",{attrs:{color:"light-blue darken-1",dark:""}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-pencil")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"ml-4 my-4",attrs:{rounded:"",color:"primary",dark:""}},"v-btn",l,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-book-open-variant")]),e._v("\n\n                     "+e._s(e.jumlahSoal)+"\n                    ")],1)]}}],null,!1,1150443189)},[e._v(" "),n("span",[e._v("Number of Questions")])]),e._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"ml-4 my-4",attrs:{rounded:"",color:"primary",dark:""}},"v-btn",l,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-clock")]),e._v("\n\n                    "+e._s(e.timer)+"\n                    ")],1)]}}],null,!1,1856576950)},[e._v(" "),n("span",[e._v("Time Remaining")])])],1),e._v(" "),n("v-card-title",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[e._v("\n              "+e._s(e.meetingDetail.quiz.name)+"\n            ")]),e._v(" "),n("v-card-subtitle",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.classDetail.teacher_name))])],1)],1):e._e(),e._v(" "),n("v-col",{attrs:{align:"left",cols:"12",md:"9",xl:"9",sm:"12",xm:"12"}},[!e.isFinish&&e.isMounted&&this.$store.state.class.meetingDetail.quiz?n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:e.soal,expression:"soal"}]},[n("v-card",{staticClass:"pa-4"},[n("v-card",{attrs:{outlined:""}},[1==e.soal.question_type?n("v-card-title",{staticClass:"title"},[e._v("\n                    Question "+e._s(e.noSoal)+" : Multiple Choice \n                  ")]):e._e(),e._v(" "),2==e.soal.question_type?n("v-card-title",{staticClass:"title"},[e._v("\n                    Question "+e._s(e.noSoal)+" : Essay\n                  ")]):e._e(),e._v(" "),n("div",[e.soal.question_image?n("b-img",{staticClass:"grey darken-4",attrs:{"blank-color":"#777",center:"",fluid:"","blank-src":"https://picsum.photos/id/11/100/60",src:e.soal.question_image,height:"480",width:"720"}}):e._e()],1),e._v(" "),n("v-card-subtitle",[e._v("\n                    "+e._s(e.soal.question)+"\n                  ")])],1),e._v(" "),n("v-btn",{staticClass:"mb-4 mt-4",style:{left:"50%",transform:"translateX(-50%)"},attrs:{rounded:"",color:"primary",dark:"",just:"",id:"btnNext"},on:{click:e.nextSoal}},[e._v("\n                  Next Question\n                ")]),e._v(" "),n("v-card",{directives:[{name:"show",rawName:"v-show",value:1==e.soal.question_type,expression:"soal.question_type == 1"}],staticClass:"pa-4",attrs:{outlined:""}},[n("div",{staticClass:"jawaban mb-5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.jawabanUser[e.indexSoal],expression:"jawabanUser[indexSoal]"}],attrs:{id:"jawabanA",type:"radio",value:"a",name:"jawaban"},domProps:{checked:e._q(e.jawabanUser[e.indexSoal],"a")},on:{change:function(t){return e.$set(e.jawabanUser,e.indexSoal,"a")}}}),e._v(" "),n("label",{attrs:{for:"jawabanA"}},[n("strong",{staticClass:"label-pilihan"},[e._v("A. "+e._s(e.soal.a))])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.jawabanUser[e.indexSoal],expression:"jawabanUser[indexSoal]"}],attrs:{id:"jawabanB",type:"radio",value:"b",name:"jawaban"},domProps:{checked:e._q(e.jawabanUser[e.indexSoal],"b")},on:{change:function(t){return e.$set(e.jawabanUser,e.indexSoal,"b")}}}),e._v(" "),n("label",{attrs:{for:"jawabanB"}},[n("strong",{staticClass:"label-pilihan"},[e._v("B. "+e._s(e.soal.b)+" ")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.jawabanUser[e.indexSoal],expression:"jawabanUser[indexSoal]"}],attrs:{id:"jawabanC",type:"radio",value:"c",name:"jawaban"},domProps:{checked:e._q(e.jawabanUser[e.indexSoal],"c")},on:{change:function(t){return e.$set(e.jawabanUser,e.indexSoal,"c")}}}),e._v(" "),n("label",{attrs:{for:"jawabanC"}},[n("strong",{staticClass:"label-pilihan"},[e._v("C. "+e._s(e.soal.c))])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.jawabanUser[e.indexSoal],expression:"jawabanUser[indexSoal]"}],attrs:{id:"jawabanD",type:"radio",value:"d",name:"jawaban"},domProps:{checked:e._q(e.jawabanUser[e.indexSoal],"d")},on:{change:function(t){return e.$set(e.jawabanUser,e.indexSoal,"d")}}}),e._v(" "),n("label",{attrs:{for:"jawabanD"}},[n("strong",{staticClass:"label-pilihan"},[e._v("D. "+e._s(e.soal.d))])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.jawabanUser[e.indexSoal],expression:"jawabanUser[indexSoal]"}],attrs:{id:"jawabanE",type:"radio",value:"e",name:"jawaban"},domProps:{checked:e._q(e.jawabanUser[e.indexSoal],"e")},on:{change:function(t){return e.$set(e.jawabanUser,e.indexSoal,"e")}}}),e._v(" "),n("label",{attrs:{for:"jawabanE"}},[n("strong",{staticClass:"label-pilihan"},[e._v("E. "+e._s(e.soal.e))])])])]),e._v(" "),n("v-card",{directives:[{name:"show",rawName:"v-show",value:2==e.soal.question_type,expression:"soal.question_type == 2"}],staticClass:"pa-4",attrs:{outlined:""}},[n("label",{staticClass:"panel-body font-soal"},[e._v("Jawaban Essay ")]),e._v(" "),n("v-textarea",{staticClass:"mx-2",attrs:{counter:"",id:"essay","auto-grow":"",label:"Insert Your Essay Answer",rows:"1","prepend-icon":"mdi-comment"},model:{value:e.jawabanUser[e.indexSoal],callback:function(t){e.$set(e.jawabanUser,e.indexSoal,t)},expression:"jawabanUser[indexSoal]"}}),e._v(" "),n("label",{staticClass:"panel-body font-soal"},[e._v("Jawaban Gambar ")]),e._v(" "),n("br"),e._v(" "),n("v-file-input",{staticClass:"file-upload",attrs:{accept:"image/*",type:"file",id:"image",name:"userfile",clearable:!1,label:"File input"},on:{change:function(t){return e.showMyImage(t)}}}),e._v(" "),n("br"),e._v(" "),n("p",{staticClass:"sembunyi",attrs:{id:"dummyImage","v-model":e.answerImage}}),e._v(" "),e.koreksiImage[e.indexSoal]?n("div",[n("b-img",{staticStyle:{width:"50%"},attrs:{center:"",fluid:"",src:e.koreksiImage[e.indexSoal]}})],1):e._e()],1)],1)],1)]):e._e()]),e._v(" "),!e.isFinish&&e.isMounted&&this.$store.state.class.meetingDetail.quiz?n("v-col",{attrs:{align:"center",cols:"12",sm:"12",md:"3",xl:"3",xm:"12"}},[n("v-card",{staticClass:"pb-4 "},[n("v-progress-linear",{staticClass:"mb-4",attrs:{indeterminate:"",color:"primary"}}),e._v(" "),e._l(e.jumlahBarisNomor,(function(t,o){return n("div",{key:o,staticClass:"btn-soal-group"},e._l(o+1<e.jumlahBarisNomor||e.jumlahSoal%5==0?5:e.jumlahSoal%5,(function(t,l){return n("button",{key:t.id,staticClass:"btn btn-sm btn-soal",class:[{"btn-select":5*o+l==e.noSoal-1&&!e.isFinish},null==e.jawabanUser[5*o+l]?"btn-default":"btn-warning btn-filled"],attrs:{href:"#"}},[n("span",{staticClass:"flex",on:{click:function(t){return e.changeSoal(5*o+l)}}},[n("span",[e._v(e._s(5*o+l+1))])])])})),0)})),e._v(" "),n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mt-4",attrs:{color:"primary"}},"v-btn",l,!1),o),[e._v("Answers Recap")])]}},{key:"default",fn:function(dialog){return[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Answer Recap")]),e._v(" "),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{width:"5px"}},[e._v("No")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Answer")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Photo Answer")])])]),e._v(" "),n("tbody",e._l(e.soals,(function(t,o){return n("tr",{key:o},[n("td",[e._v(e._s(o+1))]),e._v(" "),n("td",{staticClass:"text-center"},[e._v(e._s(null==e.jawabanUser[o]?"-":e.jawabanUser[o]))]),e._v(" "),n("td",[e.koreksiImage[o]?n("a",{staticClass:"text-center",attrs:{target:"_blank",href:e.koreksiImage[o]}},[e._v("Link")]):e._e(),e._v(" "),null==e.koreksiImage[o]?n("div",{staticClass:"text-center"},[e._v("\n                                                    -\n\n                                              ")]):e._e()])])})),0)]},proxy:!0}],null,!0)}),e._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{text:""},on:{click:function(e){dialog.value=!1}}},[e._v("Close")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.finishQuiz()}}},[e._v("FINISH QUIZ")])],1)],1)]}}],null,!1,3350279741),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],2)],1):e._e()],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v("\n          Please Wait...\n          "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),e._v(" "),e.isFinish&&!e.isLoading&&this.$store.state.class.meetingDetail.quiz?n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600",persistent:""},model:{value:e.tai,callback:function(t){e.tai=t},expression:"tai"}},[[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Answer Recap")]),e._v(" "),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{width:"5px"}},[e._v("No")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Answer")]),e._v(" "),n("th",{staticClass:"text-center"},[e._v("Photo Answer")])])]),e._v(" "),n("tbody",e._l(e.soals,(function(t,o){return n("tr",{key:o},[n("td",[e._v(e._s(o+1))]),e._v(" "),n("td",{staticClass:"text-center"},[e._v(e._s(null==e.jawabanUser[o]?"-":e.jawabanUser[o]))]),e._v(" "),n("td",[e.koreksiImage[o]?n("a",{attrs:{target:"_blank",href:e.koreksiImage[o]}},[e._v("Link")]):e._e(),e._v(" "),null==e.koreksiImage[o]?n("div",{staticClass:"text-center"},[e._v("\n                                                    -\n\n                                              ")]):e._e()])])})),0)]},proxy:!0}],null,!1,1452642242)}),e._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{text:""},on:{click:function(t){return e.closeRecap()}}},[e._v("Close")]),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.finishQuiz()}}},[e._v("FINISH QUIZ")])],1)],1)]],2):e._e()],1)}),[],!1,null,"7ebd0ed4",null);t.default=component.exports;f()(component,{VAppBar:x.a,VBtn:_.a,VCard:k.a,VCardActions:S.a,VCardSubtitle:S.b,VCardText:S.c,VCardTitle:S.d,VCol:j.a,VContainer:y.a,VDialog:I.a,VFileInput:U.a,VIcon:C.a,VLayout:D.a,VProgressLinear:z.a,VRow:M.a,VSimpleTable:E.a,VSkeletonLoader:N.a,VSpacer:L.a,VTextarea:A.a,VToolbar:P.a,VTooltip:T.a})}}]);