<style scoped>
.circle {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border-radius: 50%;
  font-size: 40px;
  color: #000;
  text-align: center;
  background: #fff;
  left: 50%;
  transform: "translateX(-50%)";
}
sub {
  font-size: 16px;
}
</style>


<template>
  <v-layout>
    <v-container>
      
      <v-container fluid v-if="isLoaded == false">
        <v-row align="center" justify="center">
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


        <!-- <div
          
        > -->
          <v-flex v-if="isLoaded == true && this.$store.state.teacher.meetingDetail.quiz">
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
                          name: 'teacher-classes-class-id-meeting-meetingid',
                          params: { id: classDetail.id, meetingid: meetingDetail.id },
                        }"
                      >
                <v-btn
                  color="blue darken-1"
                  fab
                  dark
                  medium
            fixed
                  bottom
                  left
                >
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
        <!-- </div> -->


 <v-row justify="center" align="center">
        <v-col
          cols="12"
          v-if="isLoaded == true && this.$store.state.teacher.meetingDetail.quiz"
        >
          <v-card align="center">
            <section style="margin: 0; padding: 0">
              <v-app-bar flat color="rgba(0,0,0,0)">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="my-4"
                      color="blue lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-newspaper-variant-outline</v-icon>

                      {{ attemptDetail.quiz.name }}
                    </v-btn>
                  </template>
                  <span>Quiz Name</span>
                </v-tooltip>
              </v-app-bar>

              <v-app-bar class="py-0" flat color="rgba(0,0,0,0)">
                <v-spacer></v-spacer>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="my-4 mr-3"
                      color="blue lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-clock</v-icon>

                      {{ attemptDetail.quiz.duration }} Min
                    </v-btn>
                  </template>
                  <span>Quiz duration</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="my-4 ml-3"
                      color="blue lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-file</v-icon>

                      {{ attemptDetail.quiz.question_number }} Questions
                    </v-btn>
                  </template>
                  <span>Quiz Question Number</span>
                </v-tooltip>
              </v-app-bar>
              <v-card-subtitle>
                <div style="margin: auto; margin-top: 30px">
                  <div class="wow bounceInUp" data-wow-duration="1.4s">
                    <div class="circle">
                      {{ attemptDetail.score }}<sub>/ 100</sub>
                    </div>

                    <p
                      style="
                        color: #ffffff;
                        font-size: 13px;
                        text-align: center;
                        font-weight: 600;
                      "
                      class="title mt-1"
                    >
                      Student Score
                    </p>
                  </div>
                </div>
              </v-card-subtitle>
              <div class="wave wave1"></div>

              <div class="wave wave2"></div>

              <div class="wave wave3"></div>

              <div class="wave wave4"></div>
            </section>

            <v-col cols="12" align="left">
              <v-banner two-line>
                <v-col>
                  <h4 class="captoin">
                    <v-avatar slot="icon" color="primary" size="40">
                      <v-icon icon="mdi-lock" color="white"> mdi-fish </v-icon>
                    </v-avatar>
                    

                    Quiz Result Overview
                  </h4>
                </v-col>


   
                          
                             <v-card-title>
                                                        {{ attemptDetail.student_name }}
                             </v-card-title>
                             <v-card-subtitle>
                                   {{ attemptDetail.student_school }}
                             </v-card-subtitle>


                                

                <v-btn text color="green">
                  <v-icon left>mdi-check</v-icon>
                  Correct Answer : {{ attemptDetail.correct_number }}
                </v-btn>

                <v-btn text color="red">
                  <v-icon left>mdi-backspace</v-icon>
                  Incorrect Answer : {{ attemptDetail.incorrect_number }}
                </v-btn>

                <v-btn text color="grey">
                  <v-icon left>mdi-radiobox-blank</v-icon>
                  Blank Answer : {{ attemptDetail.not_answered_number }}
                </v-btn>

        

                    

              </v-banner>
            </v-col>

            <v-col cols="12">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">No</th>
                      <th class="text-left">Detail</th>
                      <th class="text-center">Student Answer</th>
                      <th class="text-center">Correction</th>
                      <th class="text-center">Answer Key</th>
                      <th class="text-center">Correction Status</th>
                      <th class="text-center">Answer Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in attemptDetail.quiz.questions"
                      :key="index"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              @click="openModal(item, index)"
                              color="primary"
                              icon
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </template>
                          <span>Question Detail</span>
                        </v-tooltip>
                      </td>

                      <td>
                        <div class="text-center" v-if="koreksiId[index]">
                          {{
                            koreksiId[index].answer.charAt(0).toUpperCase() +
                            koreksiId[index].answer.slice(1)
                          }}
                        </div>

                        <div class="text-center" v-if="!koreksiId[index]">
                          -
                        </div>
                      </td>

                      <td>
                        <div class="text-center" v-if="koreksiId[index]">
                          {{ koreksiId[index].is_correct }}
                        </div>

                        <div class="text-center" v-if="!koreksiId[index]">
                          -
                        </div>
                      </td>

                      <td>
                        <div class="text-center" v-if="item.answer">
                          {{ item.answer.toUpperCase() }}
                        </div>

                        <div class="text-center" v-if="!item.answer">-</div>
                      </td>

                      <td>
                        <div class="text-center" v-if="koreksiId[index]">
                          <div v-if="koreksiId[index].is_corrected == false">
                            Not Yet
                          </div>
                          <div v-if="koreksiId[index].is_corrected == true">
                            Corrected
                          </div>
                        </div>

                        <div class="text-center" v-if="!koreksiId[index]">
                          -
                        </div>
                      </td>

                      <td>
                        <div class="text-center" v-if="koreksiId[index]">
                          <div v-if="koreksiId[index].answer_image == null">
                            -
                          </div>
                          <div v-if="koreksiId[index].answer_image">
                            <a
                              target="_blank"
                              :href="koreksiId[index].answer_image"
                              >Link</a
                            >
                          </div>
                        </div>

                        <div class="text-center" v-if="!koreksiId[index]">
                          -
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-card>

          <!-- <v-card>

                </v-card> -->
        </v-col>

 </v-row>


          </v-flex>
      <v-dialog
        v-if="detailModal == true"
        v-model="detailModal"
        max-width="700"
      >
        <v-card>
          <v-card-title class="headline">
            Question Detail : No {{ questionNumber + 1 }}
          </v-card-title>
          <v-card-text>
            <div v-if="questionDetail.question_type == 1">
              Question Type : Multiple Choice
            </div>
            <div v-else>Question Type : Essay</div>

            <div v-if="questionDetail.question_image !== null">
              <v-img
                contain
                class="grey darken-4"
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="questionDetail.question_image"
              >
              </v-img>
            </div>
            <div v-else>No Image</div>

            <v-card-subtitle>
              {{ questionDetail.question }}
            </v-card-subtitle>

            <v-card-subtitle v-if="questionDetail.answer">
              Answer Key : {{ questionDetail.answer.toUpperCase() }} 
            </v-card-subtitle>

               <v-card-subtitle v-if="questionDetail.essay_answer">
              Essay Answer : {{ questionDetail.essay_answer }} 
            </v-card-subtitle>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" text @click="detailModal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-layout>
</template>


<script>
var i;
var j;

import { mapActions, mapState } from "vuex";

export default {

    
    head() {
    return {
      
      title: "SANEDU | Quiz Result"
    };
  },

  middleware: ["auth-teacher"],
  layout: "home",

  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("teacher/getMeetingDetailData", params),
      store.dispatch("teacher/getClassDetailData", params.id),
      store.dispatch("teacher/getAttemptDetailData", params),

    ]);
    return;
  },
  methods: {
    openModal(item, index) {
      this.questionNumber = index;
      this.questionDetail = item;
      this.detailModal = true;
    },
  },

  mounted() {

      self = this;

           self.soals = this.$store.state.teacher.attemptDetail.quiz.questions;
            self.koreksis = this.$store.state.teacher.attemptDetail.corrections;

            for (i = 0; i < this.$store.state.teacher.attemptDetail.quiz.question_number; i++) {
              if (self.koreksis[i] !== undefined) {
                // console.log("isi koreksi ke " + i);
                // console.log(self.koreksis[i].quiz_question_id);

                for (j = 0; j < this.$store.state.teacher.attemptDetail.quiz.question_number; j++) {
                  if (self.koreksis[i].quiz_question_id == self.soals[j].id) {
                    self.koreksiId[j] = self.koreksis[i];
                  }
                }
              }
            }

            this.quizResult = this.$store.state.teacher.attemptDetail.data;

            this.isLoaded = true;
   
  },
  data() {
    return {
      isLoaded: false,
      soals: [],
      indexSoal: 0,
      koreksiId: [],
      koreksis: [],
      questionNumber: null,
      detailModal: false,
      questionDetail: null,

      breadcrumbs: [
        {
          text: "Sanclass",
          disabled: false,
          href: "/teacher/classes",
        },
        {
          text: this.$store.state.teacher.classDetail.name,
          disabled: false,
          href: `/teacher/classes/class/${this.$store.state.teacher.classDetail.id}`,
        },
        {
          text: this.$store.state.teacher.meetingDetail.name,
          disabled: false,
          href: `/teacher/classes/class/${this.$store.state.teacher.classDetail.id}/meeting/${this.$store.state.teacher.meetingDetail.id}`,
        },

        {
          text: "Quiz Result",
          disabled: true,
          href: `/teacher/classes/class/${this.$store.state.teacher.classDetail.id}/meeting/${this.$store.state.teacher.meetingDetail.id}`,
        },
      ],
    };
  },
  computed: {
    ...mapState("teacher", {
      meetingDetail: (state) => state.meetingDetail,
      classDetail: (state) => state.classDetail,
      attemptDetail: (state) => state.attemptDetail,
    }),
  },
};
</script>