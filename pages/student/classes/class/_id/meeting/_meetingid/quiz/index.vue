<style scoped>
.btn-soal-group {
  width: 100%;
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-soal {
  width: 35px;
  height: 35px;
  display: table-cell;
  font-weight: 400;
border: 0.5px solid #9e9e9e;
  padding: 0;
  margin-right: 5px;
  margin-bottom: 5px;
}
.btn-soal .flex {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.btn-soal .flex span {
  text-align: center;
  display: block;
  width: 100%;
}
.btn-select,
.btn-select:active,
.btn-select:focus {
  border: 2px solid #dea604;
  font-weight: 800;
}
.btn-select.btn-filled {
  background: #dea604;
  border-color: #dea604;
}
.font-soal {
  font-size: 14px;
}
.font-soal p:last-child {
  margin-bottom: 0;
}
* .btn-space:last-child {
  margin-right: 0;
}
.jawaban {
  position: relative;
}
.jawaban #jawabanNull {
  display: none;
}
.jawaban input[name="jawaban"] {
  display: none;
}
.jawaban label {
  background: #fff;
  min—height: 40px;
  padding: 10px 35px 10px 50px;
  border—radius: 5px;
  border: 1px solid #efefef;
  display: block;
  font—weight: 400;
}
.jawaban label .label—pilihan {
  position: absolute;
  left: 20px;
}
.jawaban label:hover {
  cursor: pointer;
  background: #efefef;
}
.jawaban label.hapus—jawaban {
  display: normal;
  background: #fff;
  text—align: right;
  padding: 15px 0 0;
  border: none;
  font—weight: 400;
}
.jawaban label.hapus—jawaban:hover {
  font—weight: 600;
}
.jawaban input:checked + label {
  background: #87cb16;
  color: #fff;
}
.jawaban input:checked ~ label.hapus—jawaban {
  display: block;
}
.jawaban #jawabanNull:checked + .hapus—jawaban {
  display: none;
}

textarea {
  /* box-sizing: padding-box; */
  overflow: hidden;
  /* demo only: */
  padding: 10px;
  width: 250px;
  font-size: 14px;
  margin: 50px auto;
  display: block;
  border-radius: 10px;
  border: 6px solid #556677;
}

.gradbot {
  background: linear-gradient(
    0deg,
    rgba(101, 172, 236, 1) 0%,
    rgba(139, 200, 255, 1) 100%
  );
  color: white;
  border-radius: 5px;
  border: 1px solid #65acec;
  margin: 2px;
  padding: 5px 35px;
}

.gradborder {
  background: #fff;
  color: white;
  border-radius: 5px;
  border: 1px solid #65acec;
  margin: 2px;
  color: #65acec;
  padding: 5px 35px;
}

.gradient-effect {
  position: relative;
  display: block;
}

.gradient-effect::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  right: 0;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8645833333333334) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

/* Centered text */

.botabsolute {
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding: 15px;
  background: linear-gradient(
    0deg,
    rgba(101, 172, 236, 1) 0%,
    rgba(139, 200, 255, 1) 100%
  );
  left: 0px;
  right: 0px;
  color: white;
}

.imgresponsive {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.sembunyi {
  display: block;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>



<template>
  <v-layout>
    <v-container fluid>

       <v-row v-if="!isMounted && this.$store.state.class.meetingDetail.quiz">

            <v-col  align="left" cols="12" md="12" xl="12" sm="12" xm="12">
       <v-card>

   <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, list-item-two-line"
        ></v-skeleton-loader>

       </v-card>
      

     </v-col>

          
     <v-col  align="left" cols="12" md="9" xl="9" sm="12" xm="12">
       <v-card>

   <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, image, article"
        ></v-skeleton-loader>

       </v-card>
      

     </v-col>

             <v-col  align="center" cols="12" sm="12" md="3" xl="3" xm="12">
                <v-card>

                           <v-skeleton-loader
          v-bind="attrs"
          type="table-heading,date-picker-days, actions"
        ></v-skeleton-loader>

                </v-card>

             </v-col>



        </v-row>


      <v-row>

       
          

           <v-col v-if="!isFinish && isMounted && this.$store.state.class.meetingDetail.quiz" align="left" cols="12"  md="12" xl="12" sm="12" xm="12" >
          <v-card color="light-blue darken-1" dark>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-icon color="white">mdi-pencil</v-icon>

              <v-spacer></v-spacer>



             <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="ml-4 my-4"
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-book-open-variant</v-icon>

                     {{jumlahSoal }}
                    </v-btn>
    
                  </template>
                  <span>Number of Questions</span>
                </v-tooltip>

     



             <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="ml-4 my-4"
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-clock</v-icon>

                    {{timer}}
                    </v-btn>
    
                  </template>
                  <span>Time Remaining</span>
                </v-tooltip>

     
            </v-app-bar>

            <v-card-title style="font-weight: bold" class="headline">
              {{ meetingDetail.quiz.name }}
            </v-card-title>

   <v-card-subtitle style="font-weight: bold">{{
                classDetail.teacher_name
              }}</v-card-subtitle>

            <!-- <v-card-subtitle style="font-weight: bold">{{
              classDetail.teacher_name
            }}</v-card-subtitle> -->

         
          </v-card>
        </v-col> 

        <v-col align="left" cols="12" md="9" xl="9" sm="12" xm="12">
          <div v-if="!isFinish && isMounted && this.$store.state.class.meetingDetail.quiz">
            <span v-show="soal">

              <v-card class="pa-4">
                <v-card outlined > 
                  <v-card-title v-if="soal.question_type == 1" class="title">
                    Question {{ noSoal }} : Multiple Choice 
                  </v-card-title>

                    <v-card-title v-if="soal.question_type == 2" class="title">
                    Question {{ noSoal }} : Essay
                  </v-card-title>

                <div>
                  <b-img
                  blank-color="#777"
                  center
                    fluid
                    v-if="soal.question_image"
                     blank-src="https://picsum.photos/id/11/100/60"
                    :src="soal.question_image"
                    class="grey darken-4"

                    height="480"
                    width="720"

                    
                  ></b-img>
                </div>

                  <v-card-subtitle>
                    {{ soal.question }}
                  </v-card-subtitle>
                </v-card>

              

                <v-btn
                  class="mb-4 mt-4"
                  :style="{ left: '50%', transform: 'translateX(-50%)' }"
                  rounded
                  color="primary"
                  dark
                  just
                  @click="nextSoal"
                  id="btnNext"
                >
                  Next Question
                </v-btn>

                <v-card v-show="soal.question_type == 1" outlined class="pa-4">
                  <div class="jawaban mb-5">
                    <input
                      id="jawabanA"
                      type="radio"
                      value="a"
                      name="jawaban"
                      v-model="jawabanUser[indexSoal]"
                    />
                    <label for="jawabanA"
                      ><strong class="label-pilihan">A. {{ soal.a }}</strong>
                    </label>
                    <input
                      id="jawabanB"
                      type="radio"
                      value="b"
                      name="jawaban"
                      v-model="jawabanUser[indexSoal]"
                    />
                    <label for="jawabanB"
                      ><strong class="label-pilihan">B. {{ soal.b }} </strong>
                    </label>
                    <input
                      id="jawabanC"
                      type="radio"
                      value="c"
                      name="jawaban"
                      v-model="jawabanUser[indexSoal]"
                    />
                    <label for="jawabanC"
                      ><strong class="label-pilihan">C. {{ soal.c }}</strong>
                    </label>
                    <input
                      id="jawabanD"
                      type="radio"
                      value="d"
                      name="jawaban"
                      v-model="jawabanUser[indexSoal]"
                    />
                    <label for="jawabanD"
                      ><strong class="label-pilihan">D. {{ soal.d }}</strong>
                    </label>
                    <input
                      id="jawabanE"
                      type="radio"
                      value="e"
                      name="jawaban"
                      v-model="jawabanUser[indexSoal]"
                    />
                    <label for="jawabanE"
                      ><strong class="label-pilihan">E. {{ soal.e }}</strong>
                    </label>
                  </div>

                  <!-- <button type="button" id="btnNext" @click="nextSoal" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Jawab / Update Jawaban</button> -->
                  <!-- <span v-show="isLastQuestion">
                            <button type="button" id="btnNext" @click="lihatRekap" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Lihat Rekap</button>
                            </span> -->
                </v-card>

                  <v-card v-show="soal.question_type == 2" outlined class="pa-4">
   
                          <label class="panel-body font-soal" >Jawaban Essay </label>
                            <!-- <textarea style="width:90%;" class="form-control" placeholder="Masukan Jawaban Essay Anda !" id="essay" v-model="jawabanUser[indexSoal]" rows="3"></textarea>
                          -->
                            <v-textarea
      counter
                            id="essay" v-model="jawabanUser[indexSoal]"
          class="mx-2"
               auto-grow
          label="Insert Your Essay Answer"
          rows="1"
          prepend-icon="mdi-comment"
        ></v-textarea>

                        
                            <label class="panel-body font-soal" >Jawaban Gambar </label>
                            <br>
<!--                             

                            <input type="file" id="image" class="file-upload" name="userfile" @select="showMyImage($event.target.files)" />
 -->

                <!-- <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp , image/jpg"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
        

                  style='width:60%;'
                  label="Avatar"
                ></v-file-input> -->

                <v-file-input
              
                accept="image/*"
                      type="file" id="image" class="file-upload" name="userfile" 
                          
                              @change="showMyImage($event)"
                            :clearable="false"
                label="File input"
  ></v-file-input>


                            <br>


                  <!-- <p class="sembunyi" id="dummyImage" /> -->


                                    <p class="sembunyi" id="dummyImage" :v-model="answerImage" ></p>

                      <div v-if="koreksiImage[indexSoal]">
                            <b-img  center
                    fluid style='width:50%; ' v-bind:src="koreksiImage[indexSoal]" />

                    </div>

              </v-card>

              </v-card>
            </span>
          </div>
        </v-col>

        <v-col  v-if="!isFinish && isMounted && this.$store.state.class.meetingDetail.quiz" align="center" cols="12" sm="12" md="3" xl="3" xm="12">
          <v-card class="pb-4 " >

                 <v-progress-linear
                 
                 class="mb-4"
                  indeterminate
                  color="primary"
                ></v-progress-linear>
              

            <div
              class="btn-soal-group"
              v-for="(baris, index) in jumlahBarisNomor"
              :key="index"
            >
              <button
                v-bind:key="soal.id"
                href="#"
                class="btn btn-sm btn-soal"
                v-for="(soal, no) in index + 1 < jumlahBarisNomor
                  ? 5
                  : jumlahSoal % 5 == 0
                  ? 5
                  : jumlahSoal % 5"
                v-bind:class="[
                  { 'btn-select': index * 5 + no == noSoal - 1 && !isFinish },
                  jawabanUser[index * 5 + no] == null
                    ? 'btn-default'
                    : 'btn-warning btn-filled',
                ]"
              >
                <span class="flex" @click="changeSoal(index * 5 + no)"
                  ><span>{{ index * 5 + no + 1 }}</span></span
                >
              </button>
            </div>



      <v-dialog 
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mt-4"
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Answers Recap</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Answer Recap</v-toolbar>

 <v-simple-table>
    <template v-slot:default>
      <thead>
                            <tr>
                                <th width="5px" class="text-center">No</th>
                                <th class="text-left">Answer</th>
                                <th class="text-left">Photo Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(soal, index) in soals"    :key="index">
                                <td>{{ index+1 }}</td>
                                  <td class="text-left">{{ jawabanUser[index] == null ? "-" : jawabanUser[index] }}</td>
                                  <td>
                                          
                                                <a v-if="koreksiImage[index]" target="_blank" :href="koreksiImage[index]">Link</a>
                                      

                                              <div v-if="koreksiImage[index] == null">
                                                    -

                                              </div>
                                  </td>


                        
                            </tr>
                        </tbody>
    </template>
  </v-simple-table>

            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>


                    <v-btn
                    color="red darken-1"
                text
                @click="finishQuiz()"
              >FINISH QUIZ</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!-- <h1 v-if="isFinish && !isLoading && this.$store.state.class.meetingDetail.quiz" ></h1> -->

    
          </v-card>

          
        </v-col>
      </v-row>

    
    </v-container>
        <div v-show="isLoading == true">
       <v-overlay >
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
      <div class="overline Overline 0.75rem 500 .1666666667em">Please Wait...</div>
    </v-overlay>

        </div>


          <v-dialog v-if="isFinish && !isLoading && this.$store.state.class.meetingDetail.quiz"
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="tai"
      >
    
        <template >
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Answer Recap</v-toolbar>

 <v-simple-table>
    <template v-slot:default>
      <thead>
                            <tr>
                                <th width="5px" class="text-center">No</th>
                                <th class="text-left">Answer</th>
                                <th class="text-left">Photo Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(soal, index) in soals"    :key="index">
                                <td>{{ index+1 }}</td>
                                  <td class="text-left">{{ jawabanUser[index] == null ? "-" : jawabanUser[index] }}</td>
                                         <td class="text-left">
                                           
                                             <td>
                                          
                                                <a v-if="koreksiImage[index]" target="_blank" :href="koreksiImage[index]">Link</a>
                                      

                                              <div v-if="koreksiImage[index] == null">
                                                    -

                                              </div>
                                  </td>
                            </tr>
                        </tbody>
    </template>
  </v-simple-table>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="closeRecap()"
              >Close</v-btn>

                    <v-btn
                    color="red darken-1"
                text
                @click="finishQuiz()"
              >FINISH QUIZ</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>



  </v-layout>
</template>




<script>
import { mapActions, mapState } from "vuex";
var i;

var j;
// var meetingId = <?php  echo $meetingDetail['id'] ?>;
// var classId = <?php  echo $meetingDetail['class_id'] ?>;

export default {
  middleware: ["auth-student"],
  layout: "home",

  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("class/getMeetingDetailData", params),
      store.dispatch("class/getClassDetailData", params.id),
    ]);
    return;
  },
  data() {
    return {
       rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
      handyAttachments: [],
      quizId: null,
      imagePreview: null,
      jenis_soal: null,
      imagetemp: null,
      soals: [],
      overlay: false,
      isLoading: false,
      soal: {},
      noSoal: 0,
      indexSoal: 0,
      koreksis: [],
      koreksiSoal: [],
      updatedSoal: [],
      koreksi: {},
      koreksiId: [],
      dialog: false,
      answer_image: null,
      koreksiImage: [],
      jawabanUser: [],
      updatedKoreksiImage: [],
      jumlahBarisNomor: 0,
      jumlahSoal: 0,
      jawaban: null,
      tai: false,
      answerImage: null,
      isLastQuestion: null,
      isErrorExist: false,
      errorMessage: null,
      isFinish: false,
      isMounted: false,
      endTimer: null,
      intervalHandler: null,
      timer: null,
      isLoaded: false,
      breadcrumbs: [
        {
          text: "Sanclass",
          disabled: false,
          href: "/student/classes",
        },
        {
          text: this.$store.state.class.classDetail.name,
          disabled: false,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}`,
        },
        {
          text: this.$store.state.class.meetingDetail.name,
          disabled: true,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}/meeting/${this.$store.state.class.meetingDetail.id}`,
        },
      ],
    };
  },

  methods: {
      
      showMyImage(fileInput) {

          console.log(fileInput);

          if (fileInput) {
 
        var files = fileInput;
        

        

        $('#dummyImage').show();
        // for (var i = 0; i < files.length; i++) {
            var file = files;
            // var imageType = /image.*/;
            // if (!file.type.match(imageType)) {
            //     continue;
            // }



           
        
            var img = document.getElementById("dummyImage");

      
            img.file = file;

       

            var reader = new FileReader();
            reader.onload = (function (aImg) {
                return function (e) {

                const imgE = document.createElement("img")
                  
                        // console.log("Isi File :");
                        // console.log(file);


                        new Compressor(file, {
                            quality: 0.6,
                            success(result){
                                var reader = new FileReader()
                                reader.readAsDataURL(result);
                                reader.onloadend = function() {

                                    var base64data = reader.result;

                                    // console.log("Compressed");
                                    // console.log(base64data);



                                  aImg.innerHTML = base64data;
                                  

                                  this.imagePreview = base64data;

                                  // console.log(this.imagePreview)


                                }


                            },
                            error(err){

                                console.log(err.message);
                            }
                         


                        })
                    
                };
            })(img);
            reader.readAsDataURL(file);

          } else if (!fileInput) {

// this.imagePreview = null;
            
      console.log("Masuk!");


          }
        // }
    },
       closeRecap: function () {


          this.isFinish = false;
          this.getSoal(0);

       },
    changeSoal: function (index) {
      if (!this.isFinish) this.jawabanUser[this.indexSoal] = this.jawaban;


      this.getSoal(index);


    },
    getSoal: function (index) {
      window.scrollTo(0, 150);
      if (index < this.soals.length) {
        var self = this;
        self.soal = self.soals[index];
        self.noSoal = index + 1;
        self.indexSoal = index;

        function isAnswer(cari) {
          return cari.quiz_question_id === self.soal.id;
        }

        let a = self.koreksis.find(isAnswer);

        if (a !== undefined) {
          self.jawabanUser[self.indexSoal] = a.answer;
          self.koreksiId[self.indexSoal] = a.id;
          self.koreksiImage[self.indexSoal] = a.answer_image;
        }

        if (self.updatedSoal[self.indexSoal] != null) {
          self.jawabanUser[self.indexSoal] = self.updatedSoal[self.indexSoal];
        }

        if (self.updatedKoreksiImage[self.indexSoal] != null) {
          self.koreksiImage[self.indexSoal] =
            self.updatedKoreksiImage[self.indexSoal];
        }

        if (this.indexSoal == this.jumlahSoal - 1) {
          this.isLastQuestion = true;
        } else {
          this.isLastQuestion = false;
        }
        self.jawaban = self.jawabanUser[self.indexSoal];


      
    


        console.log("Isi Self.jawaban " + self.jawaban);

        
        console.log("Isi Self.jawabanUser " + self.jawabanUser[self.indexSoal]);
        
      }

           $(document).ready(function() {
                      $("#dummyImage").text(null);
                      $("#image").val("");
            });

        
       
          



      
      $("#btnNext").attr("disabled", false);
      $("#btnHapus").attr("disabled", false);
    },

  
    reqSoal: function () {
      var self = this;

      this.$axios
        .post("/user/quiz/" + this.quizId + "/start")
        .then((response) => {
          // console.log(response.data);

          if (response.data) {
            self.isMounted = true;
            self.attemptId = response.data.id;
            self.soals = response.data.quiz.questions;
            self.soal = self.soals[0];
            self.koreksis = response.data.corrections;

            for (i = 0; i < response.data.quiz.question_number; i++) {
              if (self.koreksis[i] !== undefined) {
                // console.log("isi koreksi ke " + i);
                // console.log(self.koreksis[i].quiz_question_id);

                for (j = 0; j < response.data.quiz.question_number; j++) {
                  if (self.koreksis[i].quiz_question_id == self.soals[j].id) {
                    self.jawabanUser[j] = self.koreksis[i].answer;
                    self.koreksiId[j] = self.koreksis[i].id;
                    self.koreksiImage[j] = self.koreksis[i].answer_image;

  
                  }
                }

              }
            }

            self.noSoal = 1;
            self.indexSoal = 0;
            self.jawaban = self.jawabanUser[self.indexSoal];
            self.jumlahSoal = self.soals.length;
            self.endTimer = response.data.finished_at;
            self.jumlahBarisNomor =
              self.soals.length % 5 == 0
                ? Math.floor(self.soals.length / 5)
                : Math.floor(self.soals.length / 5) + 1;

            console.log(self.endTimer);
            // console.log(response);
          } else {
            console.log(response);
            self.isErrorExist = true;
            self.errorMessage = "Anda Gagal !";
          }
        })
        .catch((error) => {

             this.$swal('Cant Take The Quiz !',
  error.response.data.message,
  'error');
  


          this.$router.push(
            "/student/classes/class/" +
              this.$store.state.class.classDetail.id +
              "/meeting/" +
              this.$store.state.class.meetingDetail.id
          );

          //    this.$toast.success(error.response.data.message, {duration: 2000});
        });
    },
    nextSoal: function() {
            $("#btnNext").attr("disabled", true);

            this.imagetemp = document.getElementById('dummyImage').innerHTML;

            // console.log("isi imagetemp : " +this.imagetemp)


            // console.log(this.imagetemp)

            if(this.indexSoal+1 == this.jumlahSoal){
              console.log("is Finish !");
                this.isFinish = true;      
                this.tai = true;
              
            }
            if(this.indexSoal == this.jumlahSoal-1){
                this.isLastQuestion = true;

            }


            if(this.jawabanUser[this.indexSoal] !== undefined && this.jawaban == null && this.soal.question_type == 1  ) {
                this.sendJawaban();
                      
            }


            // else if(this.jawabanUser[this.indexSoal] !== undefined && this.soal.question_type == 2 ) {
            //     this.sendJawaban();
            // }


            //  if(this.jawabanUser[this.indexSoal] !== undefined && this.jawaban == null && this.imagetemp != undefined &&  this.soal.question_type == 2 ) {
            //     this.sendJawaban();
            // }

            else if(this.jawabanUser[this.indexSoal] == undefined && this.imagetemp !== '' && !this.koreksiId[this.indexSoal] &&  this.soal.question_type == 2 ) {

                console.log("case 1 : Photo dan Essay")

                this.sendJawaban();
                         



            }

              else if(this.jawabanUser[this.indexSoal] !== undefined && this.imagetemp == '' && !this.koreksiId[this.indexSoal] &&  this.soal.question_type == 2 ) {

                      console.log("case 2 : Essay");
                                  this.sendJawaban();
                


            }

             else if(this.jawabanUser[this.indexSoal] !== undefined && this.imagetemp !== '' && !this.koreksiId[this.indexSoal] &&  this.soal.question_type == 2 ) {

                      console.log("case 3 : Photo dan Essay");
                                  this.sendJawaban();
                            


            }


            else if(this.jawabanUser[this.indexSoal] == undefined && this.imagetemp == '' && !this.koreksiId[this.indexSoal] && this.soal.question_type == 2 ) {
                  console.log("Lewat Anjing !");
                this.changeSoal(this.indexSoal+1);
         

                
            }

            // else if(this.jawabanUser[this.indexSoal] !== undefined && this.imagetemp == undefined &&  !this.koreksiId[this.indexSoal] && this.soal.question_type == 2 ) {
            //     this.sendJawaban();
            //                     console.log("Ada Essay tapi gada poto")
            // }


            // else if(this.jawabanUser[this.indexSoal] !== undefined && this.imagetemp !== undefined && !this.koreksiId[this.indexSoal] && this.soal.question_type == 2 ) {
            //     this.sendJawaban();
            //                         console.log("Ada Essay tapi gada poto")
            // }


            else if(this.jawabanUser[this.indexSoal] == undefined && this.jawaban == undefined && this.soal.question_type == 1 ) {
                this.changeSoal(this.indexSoal+1);

                console.log("Pantek 1")
            }
            




            else if(this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban == this.jawabanUser[this.indexSoal] && this.soal.question_type == 1) {
                this.changeSoal(this.indexSoal+1);
                             console.log("Pantek 2")
                                     
            }
            
            else if (this.jawabanUser[this.indexSoal] !== undefined && this.jawaban !== undefined && this.jawaban !== this.jawabanUser[this.indexSoal] && this.soal.question_type == 1 ) {

                this.updateJawaban();
         
            }
            
            // else if (this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban == this.jawabanUser[this.indexSoal] && this.soal.question_type == 2 ) {

            //     console.log("CEK 1 !");

            //     this.updateJawaban();
            // }

            else if (this.jawabanUser[this.indexSoal] !== null  && this.koreksiId[this.indexSoal] && this.soal.question_type == 2 ) {

                console.log("CEK 2 !");

                

                this.updateJawaban();
                        
            }

            // else if (this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban == this.jawabanUser[this.indexSoal] && this.soal.question_type == 2 ) {

            //     console.log("Update 2 !");

            //     this.updateJawaban();
            // }
            //  else if (this.jawabanUser[this.indexSoal] == undefined && this.jawaban == null && this.soal.question_type == 2 ) {

            //     console.log("CEK 3 !");

            //     this.sendJawaban();
            // }
            //  else {
            //     this.changeSoal(this.indexSoal+1);
            // }
        },
     sendJawaban: function(){
            var self = this;
            
            this.isLoading = true;

            var essay = document.getElementById("essay").innerHTML;

            // let url = 'https://api.sanedu.id/user/quiz/'+ quizId +'/answer/insert';

             if(self.soal.question_type == 2){
                
                self.imagetemp = document.getElementById('dummyImage').innerHTML ;

                // console.log(" Isi Answer Iamge :" + self.imagetemp);

              
                } 

            if (self.imagetemp == undefined ){


              // console.log(self.imagetemp)

                console.log("Answer sent");

                     const payload = { attempt_id : self.attemptId,
                    answer : self.jawabanUser[self.indexSoal],
                    quiz_question_id : self.soal.id, }    

            
              this.$axios
            .post("/user/quiz/" + this.quizId + "/answer/insert", payload)
            .then(function(response) {

                if(response.data) {
                  self.isLoading = false;
                    self.koreksiId[self.indexSoal] = response.data.id;
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });

            } else if (self.imagetemp !== null && self.jawabanUser[self.indexSoal] == undefined){




                  console.log(self.imagetemp)

                self.jawabanUser[self.indexSoal] = "Dijawab dengan foto"

      
                     const payload = { attempt_id : self.attemptId,
                    answer : self.jawabanUser[self.indexSoal],
                    quiz_question_id : self.soal.id,
                    answer_image : self.imagetemp }    

              this.$axios
                .post("/user/quiz/" + this.quizId + "/answer/insert", payload)
            .then(function(response) {

                if(response.data) {
                                 self.isLoading = false;
                    self.koreksiId[self.indexSoal] = response.data.id;
                    // self.updatedKoreksiImage[self.indexSoal] = response.data.answer_image;
                    self.koreksiImage[self.indexSoal] = response.data.answer_image;
                    

                    // $(document).ready(function() {
                    //   $("#dummyImage").val('');
                    // });
                    
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });


            }else if (self.imagetemp !== null && self.jawabanUser[self.indexSoal] !== undefined){ 

                self.jawabanUser[self.indexSoal] = self.jawabanUser[self.indexSoal];

                     const payload = { attempt_id : self.attemptId,
                    answer : self.jawabanUser[self.indexSoal],
                    quiz_question_id : self.soal.id,
                    answer_image : self.imagetemp }    

              this.$axios
            .post("/user/quiz/" + this.quizId + "/answer/insert", payload)
            .then(function(response) {

                if(response.data) {
                                 self.isLoading = false;
                    self.koreksiId[self.indexSoal] = response.data.id;
                    // self.updatedKoreksiImage[self.indexSoal] = response.data.answer_image;


                  // $(document).ready(function() {
                  //   $("#dummyImage").val('');
                  // });
                  

                    self.koreksiImage[self.indexSoal] = response.data.answer_image;
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });


            }
        },
         updateJawaban: function(){
            var self = this;

            this.isLoading = true;
            // let url = 'https://api.sanedu.id/user/quiz/'+ quizId +'/answer/update';

            if(self.soal.question_type == 2){

                self.imagetemp = document.getElementById('dummyImage').innerHTML ;

            } 

            // console.log(self.answerImage);

            if (self.imagetemp == null){

                console.log(" TEST NULL : " + self.imagetemp);

            const payload = { 
                    id : self.koreksiId[self.indexSoal],
                    attempt_id : self.attemptId,
                    answer : self.jawabanUser[self.indexSoal],
                    quiz_question_id : self.soal.id, }    

            

             this.$axios
            .post("/user/quiz/" + this.quizId + "/answer/update", payload)
            .then(function(response) {

                if(response.data) {
                                 self.isLoading = false;
                    self.updatedSoal[self.indexSoal] = self.jawabanUser[self.indexSoal];
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });

             } else if (self.imagetemp != null){


                console.log(self.imagetemp);


                  const payload = { 
                    id : self.koreksiId[self.indexSoal],
                    attempt_id : self.attemptId,
                    answer : self.jawabanUser[self.indexSoal],
                    quiz_question_id : self.soal.id, 
                    answer_image: self.imagetemp}    


              this.$axios
            .post("/user/quiz/" + this.quizId + "/answer/update", payload)
            .then(function(response) {

                if(response.data) {
                                 self.isLoading = false;
                    self.updatedSoal[self.indexSoal] = self.jawabanUser[self.indexSoal];
                    self.updatedKoreksiImage[self.indexSoal] = response.data.answer_image;
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });

             }

        },


 tick: function() {
            var self = this;

            // const dates = new Date(self.endTimer).getTime();

            const dates = moment(self.endTimer, 'YYYY-MM-DD HH:mm:ss').toDate();

			const now = new Date().getTime();

            // const dates = Date.parse(self.endTimer);
			// const now =  Date.parse();


            const distance = dates - now;
            

            var p = 1;
			if (distance < 0 && p == 1) {


                p++;
                self.timer = "Time Up !";


            // this.$swal(
            //     'Your Quiz is Done !!',
            //     'Your Answers has been saved.',
            //     'success'
            //   )


        
                             this.$router.push(
        "/student/classes/class/" +
          this.$store.state.class.classDetail.id +
          "/meeting/" +
          this.$store.state.class.meetingDetail.id+"/quiz/result"
      );




          


            }

            	if (distance > 0) {
            

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			const timerHtml = "WAKTU : " + hours + ":" + minutes + ":" + seconds ;
            self.timer = timerHtml;

                }
            
            // console.log("Timer : " + self.timer);
            //        console.log("Timer HTML : " + timerHtml);

 

    },
    
    finishQuiz :function (){

            this.$swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Finish it!'
          }).then((result) => {
            if (result.isConfirmed) {

             this.$axios
            .post("/user/quiz/" + this.quizId + "/finish")
            .then((response) => {
              
       
              this.$swal(
                'Your Quiz is Done !!',
                'Your Answers has been saved.',
                'success'
              )


                   this.$router.push(
        "/student/classes/class/" +
          this.$store.state.class.classDetail.id +
          "/meeting/" +
          this.$store.state.class.meetingDetail.id
      );

            // location.reload();

            })
            .catch(function(error) {
                console.log(error);
            });

              
            }
          })


    }
  },
  computed: {
    ...mapState("class", {
      meetingDetail: (state) => state.meetingDetail,
      classDetail: (state) => state.classDetail,
    }),
  },

  mounted() {
           const vue = this;


if(this.$store.state.class.meetingDetail.quiz){
    if (this.$store.state.class.meetingDetail.attempt) {
              this.$swal('Your Quiz Has Been Done !',
  'Please Check Your Quiz Result',
  'success');
      this.$router.push(
        "/student/classes/class/" +
          this.$store.state.class.classDetail.id +
          "/meeting/" +
          this.$store.state.class.meetingDetail.id
      );
    } else if (!this.$store.state.class.meetingDetail.attempt) {
      this.quizId = this.$store.state.class.meetingDetail.quiz.id;


      this.reqSoal();
    }

} else if (!this.$store.state.class.meetingDetail.quiz){
  this.$swal('Sorry, Quiz Not Found !',
  'Please Check Your meeting',
  'error');
      this.$router.push(
        "/student/classes/class/" +
          this.$store.state.class.classDetail.id +
          "/meeting/" +
          this.$store.state.class.meetingDetail.id
      );


}

        this.intervalHandler = setInterval(function(){
			vue.tick();
	}, 1000);


    //    this.$toast.show('Mengambil Data...',{  duration: 2000})

    //         this.$axios.post('/user/quiz/1231/start').then((response) => {

    //                 console.log(response);

    //         }).catch((error) => {

    //      this.$toast.success(error.response.data.message, {  duration: 2000})

    //             this.$router.push('/student/classes');

    //         })
  },
};
</script>