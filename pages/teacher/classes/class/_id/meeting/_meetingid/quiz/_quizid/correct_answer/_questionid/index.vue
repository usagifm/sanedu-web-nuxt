

<template>
  <v-layout>
    <v-container>
      <v-container fluid v-if="isLoaded == false">
        <v-row jalign="center" justify="center">
          <v-col cols="6">
            <v-progress-linear
              rounded
              height="6"
              indeterminate
              color="blue lighten-1"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </v-container>

      <v-flex v-if="isLoaded == true">
        <v-alert
          style="text-decoration: none; font-weight: bold"
          border="top"
          colored-border
          type="info"
          elevation="2"
        >
          <v-fab-transition>
            <nuxt-link
              style="text-decoration: none"
              :to="{
                name: 'teacher-classes-class-id-meeting-meetingid-quiz-quizid',
                params: { id: meetingDetail.class_id, meetingid: meetingDetail.id, quizid: quizDetail.id },
              }"
            >
              <v-btn color="blue darken-1" fab dark medium fixed bottom left>
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </nuxt-link>
          </v-fab-transition>

          <v-breadcrumbs
            link
            class="pb-1 pt-3"
            :items="breadcrumbs"
            divider="/"
          ></v-breadcrumbs>
        </v-alert>

        <v-row justify="center" align="center">
          <v-col align="left" cols="12">
            <v-card color="#35B5AC" dark>
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-icon color="white">mdi-pencil</v-icon> <v-card-title style="font-weight:bolder" class="text-left"> Quiz Correction </v-card-title>

                
              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ quizDetail.name }} ({{ quizDetail.duration}} Min)
              </v-card-title>

              <!-- <v-card-subtitle style="font-weight: bold">{{
                classDetail.teacher_name
              }}</v-card-subtitle> -->
        
             <v-row class="ml-2">
               <v-col cols="12">
                <v-chip
                class="my-2"
                  style="font-weight: bold"
                  color="teal darken-3"
                  text-color="white"
                  ><v-avatar left> <v-icon>mdi-calendar</v-icon> </v-avatar
                  >{{ meetingDetail.date }}
                </v-chip>

                <v-chip
                class="my-2"
                  style="font-weight: bold"
                  color="teal darken-2"
                  text-color="white"
                  >{{ meetingDetail.start_time }} -
                  {{ meetingDetail.finish_time }}</v-chip
                >
               </v-col>
             </v-row>

                   <v-col v-if="question.question_image==null" cols="12">
                                             <v-card-subtitle style="font-weight:bold" class="text-center">
                                            {{question.question}}
                                            </v-card-subtitle>
                  </v-col>

             <v-row justify="center" align="center" v-if="question.question_image!=null" >
               <v-col >
  
                                      <v-row>   <v-col cols="12">
                                  <v-card-subtitle style="font-weight:bold" class="text-center">
                                            Question Image
                                            </v-card-subtitle>
                                            </v-col>
                                      </v-row>
                                      <v-row>
                                                   <v-col cols="12">
                                            <b-img
                                            style="border-radius: 5px"
                          
                                            blank-color="#777"
                                              center
                                        fluid
                                              blank-src="https://picsum.photos/id/11/100/60"
                                              
                                              :src="question.question_image"

                                            width="600px"
                                            />
                                                   </v-col>
                                      </v-row>
                                      <v-row>
                                                                <v-col cols="12">
                                             <v-card-subtitle style="font-weight:bold" class="text-center">
                                            {{question.question}}
                                            </v-card-subtitle>
                                                                </v-col>
                                      </v-row>
                                  
                                      


               </v-col>



             </v-row>





            </v-card>
          </v-col>
        </v-row>

       <v-row>

          <v-col   v-for="item in correctAnswer"
          :key="item.id"  align="left" cols="12" lg="12" md="12" xs="12" sm="12">

            <v-hover v-slot="{ hover }">
              <v-card
                color="white"
                light
                :elevation="hover ? 4 : 2"
                :class="{ 'on-hover': hover }"
              >

                <v-progress-linear v-if="item.is_corrected == false"
              
                  color="red darken-1"
                  value="100"
             >

                </v-progress-linear>

                <v-progress-linear v-if="item.is_corrected == true"
              
                  color="blue darken-1"
                  value="100"
             >


             </v-progress-linear>

          

                <v-card-text>{{item.answer}}</v-card-text>

                

        
              <v-row class="ml-3">
                    <v-btn class="my-2 mr-2" style="font-weight:bold" v-if="item.is_corrected == false" small rounded color="red darken-2" target="_blank"  dark >
                      <v-icon left>mdi-close-thick</v-icon>Belum Dikoreksi
                    </v-btn>

                         <v-btn class="my-2 mr-2" style="font-weight:bold"  v-if="item.is_corrected == true" small rounded color="blue darken-2" target="_blank"  dark >
                      <v-icon left>mdi-check</v-icon>Sudah Dikoreksi
                    </v-btn>



                  <div v-if="item.answer_image !== null">
                    <v-btn  class="my-2" style="font-weight:bold; text-decoration: none"  small rounded color="primary" target="_blank" :href="item.answer_image" dark >
                      <v-icon left>mdi-folder-image</v-icon>Foto Jawaban
                    </v-btn>
                  </div>

              </v-row>
         

                <v-card-actions class="pb-0 pt-0" >

                    <v-spacer/>
                 <v-radio-group


                 class="pb-0 mb-0 pt-0"
                  v-model="item.is_correct"
                  row
                >
         
                  <v-radio
                    label="Salah"
                v-bind:value="false"  
                  ></v-radio>
                           <v-radio
                    label="Benar"
              v-bind:value="true"
                  ></v-radio>
                </v-radio-group>
             


                </v-card-actions>

                                <v-card-actions class="py-0 pb-4 mr-8">

                    <v-spacer/>
                <v-btn @click="correctQuizQuestionAnswer(item)" style="font-weight:bold"  rounded color="green" target="_blank"  dark >
                      <v-icon left>mdi-check</v-icon>Koreksi
                    </v-btn>


                </v-card-actions>
              </v-card>
            </v-hover>

            <!-- </nuxt-link> -->
          </v-col>
          

 
   
       </v-row>

   
      </v-flex>

      <div class="text-center">
        <v-snackbar v-model="snackbar" timeout="2000">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>

  

   <div class="text-center">
    <v-dialog
      v-model="isLoading"

      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please Wait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>







                


    



    </v-container>
  </v-layout>
</template>


<script>

import { required, numeric } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("numeric", {
  ...numeric,
  message: "{_field_} can not contain alphabet and symbol",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

import { mapActions, mapState } from "vuex";
import getVideoId from "get-video-id";

export default {
  head() {
    return {
      title: "SANEDU | " + this.$store.state.teacher.meetingDetail.name,
    };
  },

  middleware: ["auth-teacher"],
  layout: "home",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("teacher/getMeetingDetailData", params),

      store.dispatch("teacher/getQuizDetailData", params),

      store.dispatch("teacher/getCorrectAnswer", params),
            
    ]);
    return;
  },
  data() {
    return {
      question: null,
      snackbar: false,
      index:null,
      text: false,
      isLoaded: false,
      isLoading: false,
      deleteQuizDialog: false,
      previewImage: null,
      imageContainer: null,
      createMultipleQuestionDialog: false,
      deleteQuestionDialog: false,
      editQuestionDialog: false,
      correction:{
        quizid: this.$store.state.teacher.quizDetail.id,
        questionid: null,
        attempt_correction_id: null,
        is_correct: null

      },
      option: [
        { text: "Multiple Choice", value: 1 },
        { text: "Essay", value: 2 },
      ],
      breadcrumbs: [
        {
          text: "Sanclass",
          disabled: false,
          href: "/teacher/classes",
        },
        {
          text: "Class",
          disabled: false,
          href: `/teacher/classes/class/${this.$store.state.teacher.meetingDetail.class_id}`,
        },
        {
          text: this.$store.state.teacher.meetingDetail.name,
          disabled: false,
          href: `/teacher/classes/class/${this.$store.state.teacher.meetingDetail.class_id}/meeting/${this.$store.state.teacher.meetingDetail.id}`,
        },
        {
          text: this.$store.state.teacher.quizDetail.name,
          disabled: false,
          href: `/teacher/classes/class/${this.$store.state.teacher.meetingDetail.class_id}/meeting/${this.$store.state.teacher.meetingDetail.id}/quiz/${this.$store.state.teacher.quizDetail.id}`,
        },
         {
          text: "Correct Answers",
          disabled: true,
             },
      ],
    };
  },
  mounted() {
    this.isLoaded = true;

    let i = 0;

   for (i = 0; i < this.quizDetail.question_number; i++) {
                  if (this.quizDetail.questions[i].id == this.$route.params.questionid) {  
                      this.question = this.quizDetail.questions[i];
                      


                  }
                }

  },

  computed: {
    ...mapState("teacher", {
      meetingDetail: (state) => state.meetingDetail,
      quizDetail: (state) => state.quizDetail,
       correctAnswer: (state) => state.correctAnswer,
    }),
  },
  methods: {
       ...mapActions("teacher", [
          "correctQuestionAnswer",


    ]),

     correctQuizQuestionAnswer(item) {
      this.isLoading = true;

      this.correction.attempt_correction_id = item.id;
            this.correction.is_correct = item.is_correct;
                        this.correction.is_correct = item.is_correct;
                          this.correction.questionid = item.quiz_question_id;

      this.correctQuestionAnswer(this.correction)
        .then((response) => {
          this.isLoading = false;
          this.text = "Jawaban Siswa Berhasil Dikoreksi";
          this.snackbar = true;

            this.correction.attempt_correction_id = null;
            this.correction.is_correct = null;
                        this.correction.is_correct = null;
        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });
    },

  

  
  },



};
</script>