<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sembunyi {
  display: block;
  width: 50px;
  height: 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

input[type="radio"]{
  vertical-align: middle;
}

.textRadio{
 vertical-align: middle;
}

</style>

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
                name: 'teacher-classes-class-id-meeting-meetingid',
                params: { id: classDetail.id, meetingid: meetingDetail.id },
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
                <v-icon color="white">mdi-pencil</v-icon> <v-card-title style="font-weight:bolder" class="text-left"> Quiz </v-card-title>

                <v-spacer></v-spacer>

                <v-menu offset-y transition="slide-y-transition" bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" v-bind="attrs" v-on="on" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item link @click="deleteQuizDialog = true">
                      <v-list-item-title style="font-weight: bold">
                        <v-icon>mdi-delete</v-icon> Delete
                        Quiz</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ quizDetail.name }}
              </v-card-title>

              <v-card-subtitle style="font-weight: bold">{{
                classDetail.teacher_name
              }}</v-card-subtitle>

              <v-col>
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

              <v-card-actions>
             
              </v-card-actions>

              <v-card-actions>
                <v-spacer> </v-spacer>

          
                 <v-btn
                 small
                  rounded
                  class="mr-4 mb-2 my-4"
                  color="green"
                  dark
                  style="font-weight: bold"
                  @click="createMultipleQuestionDialog = true"
                >
                  <v-icon left>mdi-plus</v-icon>

                  Add Question
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

       <v-row>

 

           <v-col cols="12"  md="3" lg="3" sm="6" v-for="(item, index) in quizDetail.questions" :key="item.id"   >
          
              <v-card>
                   <v-progress-linear v-if="item.question_type == 1"
              
                  color="green darken-1"
                  value="100"
             >


             </v-progress-linear>

              <v-progress-linear v-if="item.question_type == 2"
                              value="100"
                  color="yellow darken-2"
             >


             </v-progress-linear>
             
                <v-card-title>
                       Number : {{ index+1 }}   <v-spacer/> <v-menu class="ml-4" offset-y transition="slide-y-transition" bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="black" v-bind="attrs" v-on="on" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item link @click="openEditQuestionDialog(item,index)">
                      <v-list-item-title style="font-weight: bold">
                        <v-icon>mdi-pencil</v-icon> Edit
                        Question</v-list-item-title
                      >
                    </v-list-item>
                    <nuxt-link  style="text-decoration:none"  :to="{
                        name: 'teacher-classes-class-id-meeting-meetingid-quiz-quizid-correct_answer-questionid',
                        params: {
                          id: classDetail.id,
                          meetingid: meetingDetail.id,
                          quizid: meetingDetail.quiz.id,
                          questionid: item.id,
                        },
                      }">
                    <v-list-item link v-if="item.question_type == 2">
                      <v-list-item-title style="font-weight: bold">
                        <v-icon>mdi-check-outline</v-icon> Correct Answers</v-list-item-title
                      >
                    </v-list-item>
                    </nuxt-link>
                    <v-list-item link @click="openDeleteQuestionDialog(item)">
                      <v-list-item-title style="font-weight: bold">
                        <v-icon>mdi-delete</v-icon> Delete
                        Question</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>

                </v-card-title>

                <v-card-subtitle  v-if="item.question_type == 1">
                Multiple Choice <v-btn target="_blank" :href="item.question_image" color="primary" rounded x-small v-if="item.question_image != null"> Image</v-btn>
                       <br/>
    
                </v-card-subtitle>

                <v-card-subtitle  v-if="item.question_type == 2">
                Essay Question    <v-btn target="_blank" :href="item.question_image" color="primary" rounded x-small v-if="item.question_image != null"> Image</v-btn>
                <br/>

    

                </v-card-subtitle>
                



              </v-card>


             
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


       

      <v-dialog v-model="deleteQuizDialog" persistent max-width="450">
        <v-card>
          <v-card-title class="headline"> Delete Quiz </v-card-title>
          <v-card-text
            >Apakah anda yakin ingin menghapus quiz
            <code>{{ quizDetail.name }}</code> dari pertemuan
            <code>{{ meetingDetail.name }}</code> ?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" text @click="closeDialog">
              Batal
            </v-btn>
            <v-btn color="red darken-1" text @click="deleteMeetingQuiz">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



      <v-dialog v-model="deleteQuestionDialog" persistent max-width="450">
        <v-card>
          <v-card-title class="headline"> Delete Question </v-card-title>
          <v-card-text
            >Apakah anda yakin ingin menghapus pertanyaan ini dari quiz
            <code>{{ quizDetail.name }} </code> ? </v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" text @click="closeDialog">
              Batal
            </v-btn>
            <v-btn color="red darken-1" text @click="deleteQuizQuestion">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



         <v-dialog v-model="createMultipleQuestionDialog" persistent max-width="600">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-card-title style="font-weight: bold" class="headline">
              Create Question
            </v-card-title>

            <v-spacer />

            <v-btn @click="closeDialog" color="white" icon>
              <v-icon>mdi-close-thick</v-icon>
            </v-btn>
          </v-toolbar>

          <v-progress-linear
            v-if="isLoading == true"
            indeterminate
            color="cyan"
          ></v-progress-linear>

          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="createQuizMultipleQuestion">
              <v-card-text>
                
              

                    <v-col class="mb-n5" cols="12">
                 <validation-provider
                        v-slot="{ errors }"
                        name="Question Type"
                        rules="required"
                >
                    <v-select
                      label="Question Type"
                      :error-messages="errors"
                      :items="option"
                       outlined
                      persistent-hint
                         item-text="text"
                      item-value="value"
                      v-model="multipleQuestionPayload.question_type"
                    ></v-select>


                       </validation-provider>
                    </v-col>
                


                <v-col class="my-n5" align="center" cols="12">
                  <v-card-subtitle style="text-center; font-weight:bold" >Gambar Soal</v-card-subtitle>
                             <v-card             v-if="previewImage"> 
                        <b-img
             
                         blank-color="#777"
                          center
                    fluid
                          blank-src="https://picsum.photos/id/11/100/60"
                           
                          :src="previewImage"
                    
                          :v-model="previewImage"
                        />
                        <v-card-subtitle class="text-center">
                        Gambar Yang Dipilih
                        </v-card-subtitle>
                             </v-card>
                        <v-card            v-if="!previewImage"> 
                        <b-img
              
                         blank-color="#777"
                          center
                          fluid
                          src="@/static/images/class/noimage.jpg"
                   
                        />
                         <v-card-subtitle class="text-center">
                        Tidak Ada Gambar yang Dipilih
                        </v-card-subtitle>
                        </v-card>
                   
                    </v-col>


                <v-col cols="12">

                    <v-col cols="12">
            
                      <b-form-file
                        ref="file"
                        id="file"
                        type="file"
                        accept="image/*"
                        @change="uploadImage"
                      />
                      <!-- </validation-provider> -->
                    </v-col>

                      <p class="sembunyi" id="dummyImage" ref="image" ></p>


                  <validation-provider
                    v-slot="{ errors }"
                    name="Quiz Question"
                    rules="required"
                  >
                    <v-textarea
                      :counter="35"
                      :error-messages="errors"
                      label="Quiz Question"
                      required
                      auto-grow
                      outlined
                      dense
                      v-model="multipleQuestionPayload.question"
                    ></v-textarea>
                  </validation-provider>
                </v-col>



              <div v-if="multipleQuestionPayload.question_type == 1"> 
                <v-col cols="12" >
                  <validation-provider
                     
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                      id="jawabanA"
               
                      
                      type="radio"
                      value="a"
                      name="jawaban"
                      v-model="multipleQuestionPayload.answer"
                    /> A  <v-text-field

                    class="textRadio"
                      :counter="35"
                      label="Answer A"
                      required
                      outlined
                      dense
                      v-model="multipleQuestionPayload.a"
                    ></v-text-field>
                  </validation-provider>
                </v-col>


                      <v-col cols="12">
                  <validation-provider
                     
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
       
                      id="jawabanB"
                      type="radio"
                      name="jawaban"
                             value="b"
                      v-model="multipleQuestionPayload.answer"
                    /> B  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer B"
                      required
                      outlined
                      dense
                      v-model="multipleQuestionPayload.b"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                
                


         <v-col cols="12">
                  <validation-provider
                   
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                          
                      id="jawabanC"
                      type="radio"
                      name="jawaban"
                             value="c"
                      v-model="multipleQuestionPayload.answer"
                    /> C  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer C"
                      required
                      outlined
                      dense
                      v-model="multipleQuestionPayload.c"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                         <v-col cols="12">
                  <validation-provider
         
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                      
                      id="jawabanD"
                      type="radio"
                      name="jawaban"
                             value="d"
                      v-model="multipleQuestionPayload.answer"
                    /> D  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer D"
                      required
                      outlined
                      dense
                      v-model="multipleQuestionPayload.d"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                


                         <v-col cols="12">
                  <validation-provider
                     
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                      id="jawabanE"
                      type="radio"
                      name="jawaban"
                                 
                             value="e"
                      v-model="multipleQuestionPayload.answer"
                    /> E  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer E"
                      required
                      outlined
                      dense
                      v-model="multipleQuestionPayload.e"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

              </div>


 <div v-if="multipleQuestionPayload.question_type == 2"> 
                <v-col cols="12" >

                         <validation-provider
                    v-slot="{ errors }"
                    name="Quiz Essay Answer"
                
                  >
                    <v-textarea
                      :counter="35"
                      :error-messages="errors"
                      label="Quiz Essay Answer"
                      placeholder="Tidak Wajib Di isi, Anda Harus tetap menilai soal essay secara manual di sistem"
                      required
                      auto-grow
                      outlined
                      dense
                      v-model="multipleQuestionPayload.essay_answer"
                    ></v-textarea>
                  </validation-provider>
                 
                </v-col>

              </div>

              
              </v-card-text>
              <v-card-actions
                class="py-4 pb-4"
                style="background-color: #e0e0e0"
              >
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="closeDialog">
                  CANCEL
                </v-btn>

                <v-btn
                  @click="createQuizMultipleQuestion"
                  :disabled="invalid"
                  color="primary"
                  class="py-4 pb-4"
                >
                  Create
                </v-btn>
              </v-card-actions>
            </form>
          </validation-observer>
        </v-card>
      </v-dialog>




           <v-dialog v-model="editQuestionDialog" persistent max-width="600">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-card-title style="font-weight: bold" >
              Edit Question No {{selectedQuestionPayload.index+1}} 
            </v-card-title>

            <v-spacer />

            <v-btn @click="closeDialog" color="white" icon>
              <v-icon>mdi-close-thick</v-icon>
            </v-btn>
          </v-toolbar>

          <v-progress-linear
            v-if="isLoading == true"
            indeterminate
            color="cyan"
          ></v-progress-linear>

          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="editQuizMultipleQuestion">
              <v-card-text>
                
              

                    <v-col class="mb-n5" cols="12">
                 <validation-provider
                        v-slot="{ errors }"
                        name="Question Type"
                        rules="required"
                >
                    <v-select
                      label="Question Type"
                      :error-messages="errors"
                      :items="option"
                       outlined
                      persistent-hint
                         item-text="text"
                      item-value="value"
                      v-model="selectedQuestionPayload.question_type"
                    ></v-select>


                       </validation-provider>
                    </v-col>
                


                <v-col class="my-n5" align="center" cols="12">
                  <v-card-subtitle style="text-center; font-weight:bold" >Question Image</v-card-subtitle>
                             <v-card             v-if="previewImage"> 
                        <b-img
             
                         blank-color="#777"
                          center
                    fluid
                          blank-src="https://picsum.photos/id/11/100/60"
                           
                          :src="previewImage"
                    
                          :v-model="previewImage"
                        />
                        <v-card-subtitle class="text-center">
                        Selected Image
                        </v-card-subtitle>
                             </v-card>
                        <v-card            v-if="!previewImage"> 
                        <b-img
              
                         blank-color="#777"
                          center
                          fluid
                          src="@/static/images/class/noimage.jpg"
                   
                        />
                         <v-card-subtitle class="text-center">
                        No Image Selected
                        </v-card-subtitle>
                        </v-card>
                   
                    </v-col>


                <v-col cols="12">

                    <v-col cols="12">
            
                      <b-form-file
                        ref="file"
                        id="file"
                        type="file"
                        accept="image/*"
                        @change="uploadImage"
                      />
                      <!-- </validation-provider> -->
                    </v-col>

                      <p class="sembunyi" id="dummyImage" ref="image" ></p>


                  <validation-provider
                    v-slot="{ errors }"
                    name="Quiz Question"
                    rules="required"
                  >
                    <v-textarea
                      :counter="35"
                      :error-messages="errors"
                      label="Quiz Question"
                      required
                      auto-grow
                      outlined
                      dense
                      v-model="selectedQuestionPayload.question"
                    ></v-textarea>
                  </validation-provider>
                </v-col>



              <div v-if="selectedQuestionPayload.question_type == 1"> 
                <v-col cols="12" >
                  <validation-provider
                     
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                      id="jawabanA"
               
                      
                      type="radio"
                      value="a"
                      name="jawaban"
                      v-model="selectedQuestionPayload.answer"
                    /> A  <v-text-field

                    class="textRadio"
                      :counter="35"
                      label="Answer A"
                      required
                      outlined
                      dense
                      v-model="selectedQuestionPayload.a"
                    ></v-text-field>
                  </validation-provider>
                </v-col>


                      <v-col cols="12">
                  <validation-provider
                     
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
       
                      id="jawabanB"
                      type="radio"
                      name="jawaban"
                             value="b"
                      v-model="selectedQuestionPayload.answer"
                    /> B  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer B"
                      required
                      outlined
                      dense
                      v-model="selectedQuestionPayload.b"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                
                


         <v-col cols="12">
                  <validation-provider
                   
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                          
                      id="jawabanC"
                      type="radio"
                      name="jawaban"
                             value="c"
                      v-model="selectedQuestionPayload.answer"
                    /> C  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer C"
                      required
                      outlined
                      dense
                      v-model="selectedQuestionPayload.c"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                         <v-col cols="12">
                  <validation-provider
         
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                      
                      id="jawabanD"
                      type="radio"
                      name="jawaban"
                             value="d"
                      v-model="selectedQuestionPayload.answer"
                    /> D  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer D"
                      required
                      outlined
                      dense
                      v-model="selectedQuestionPayload.d"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                


                         <v-col cols="12">
                  <validation-provider
                     
                          name="Quiz Answer"
                          rules="required"
                        >
                
                    <input
                      id="jawabanE"
                      type="radio"
                      name="jawaban"
                                 
                             value="e"
                      v-model="selectedQuestionPayload.answer"
                    /> E  <v-text-field
                                 class="textRadio"
                      :counter="35"
                      label="Answer E"
                      required
                      outlined
                      dense
                      v-model="selectedQuestionPayload.e"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

              </div>


 <div v-if="selectedQuestionPayload.question_type == 2"> 
                <v-col cols="12" >

                         <validation-provider
                    v-slot="{ errors }"
                    name="Quiz Essay Answer"
                
                  >
                    <v-textarea
                      :counter="35"
                      :error-messages="errors"
                      label="Quiz Essay Answer"
                      placeholder="Tidak Wajib Di isi, Anda Harus tetap menilai soal essay secara manual di sistem"
                      required
                      auto-grow
                      outlined
                      dense
                      v-model="selectedQuestionPayload.essay_answer"
                    ></v-textarea>
                  </validation-provider>
                 
                </v-col>

              </div>

              
              </v-card-text>
              <v-card-actions
                class="py-4 pb-4"
                style="background-color: #e0e0e0"
              >
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="closeDialog">
                  CANCEL
                </v-btn>

                <v-btn
                 @click="editQuizMultipleQuestion"
                  :disabled="invalid"
                  color="primary"
                  class="py-4 pb-4"
                >
                  Edit
                </v-btn>
              </v-card-actions>
            </form>
          </validation-observer>
        </v-card>
      </v-dialog>


    
    </v-container>
  </v-layout>
</template>

<script>

document.getElementById('file').addEventListener('change', (e) => {
  const file = e.target.files[0];

  if (!file) {
    return;
  }

  new Compressor(file, {
    quality: 0.2,

    // The compression process is asynchronous,
    // which means you have to access the `result` in the `success` hook function.
    success(result) {
  
                   const reader = new FileReader()
                    reader.readAsDataURL(result);

                    reader.onload = (e) => {
                      this.previewImage = e.target.result;
                      console.log(this.previewImage);
                    }

    },
    error(err) {
      console.log(err.message);
    },
  });
});
</script>

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
      store.dispatch("teacher/getClassDetailData", params.id),
      store.dispatch("teacher/getQuizDetailData", params),
            
    ]);
    return;
  },
  data() {
    return {
      menu: false,
      snackbar: false,
      text: false,
      isLoaded: false,
      isLoading: false,
      deleteQuizDialog: false,
      previewImage: null,
      imageContainer: null,
      createMultipleQuestionDialog: false,
      deleteQuestionDialog: false,
      editQuestionDialog: false,
      option: [
        { text: "Multiple Choice", value: 1 },
        { text: "Essay", value: 2 },
      ],
      quizPayload: {
          id: this.$store.state.teacher.quizDetail.id,
          name: this.$store.state.teacher.quizDetail.name, 
          duration: this.$store.state.teacher.quizDetail.duration,
      },
      multipleQuestionPayload: {
          quizid: this.$store.state.teacher.quizDetail.id,
          question_type: 1,
          question: null,
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          answer: null,
          question_image: null
      },
      selectedQuestionPayload: {
          index: null,
          quizid: this.$store.state.teacher.quizDetail.id,
          id: null,
          question_type: null,
          question: null,
          a: null,
          b: null,
          c: null,
          d: null,
          e: null,
          answer: null,
          question_image: null
      },
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
          text: this.$store.state.teacher.quizDetail.name,
          disabled: true,
          href: `/teacher/classes/class/${this.$store.state.teacher.classDetail.id}/meeting/${this.$store.state.teacher.meetingDetail.id}/quiz/${this.$store.state.teacher.quizDetail.id}`,
        },
      ],
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  computed: {
    ...mapState("teacher", {
            classDetail: (state) => state.classDetail,
      meetingDetail: (state) => state.meetingDetail,
      quizDetail: (state) => state.quizDetail,
    }),
  },
  methods: {
    
  openEditQuestionDialog(item, index) {
      this.selectedQuestionPayload.index = index;
      this.editQuestionDialog = true;
      this.selectedQuestionPayload.id = item.id;
      this.selectedQuestionPayload.question_type = item.question_type;
      this.selectedQuestionPayload.question = item.question;
      this.selectedQuestionPayload.a = item.a;
      this.selectedQuestionPayload.b = item.b;
      this.selectedQuestionPayload.c = item.c;
      this.selectedQuestionPayload.d = item.d;
      this.selectedQuestionPayload.e = item.e;
      this.previewImage = item.question_image;
      this.selectedQuestionPayload.answer = item.answer;
      this.selectedQuestionPayload.essay_answer = item.essay_answer;

    },

    openDeleteQuestionDialog(item) {
      this.deleteQuestionDialog = true;
      this.selectedQuestionPayload.id = item.id;
      this.selectedQuestionPayload.question_type = item.question_type;
      this.selectedQuestionPayload.question = item.question;
      this.selectedQuestionPayload.a = item.a;
      this.selectedQuestionPayload.b = item.b;
      this.selectedQuestionPayload.c = item.c;
      this.selectedQuestionPayload.d = item.d;
      this.selectedQuestionPayload.e = item.e;
      this.selectedQuestionPayload.answer = item.answer;
      this.selectedQuestionPayload.essay_answer = item.essay_answer;
    },
    
    uploadImage(e) {
      this.isLoading = true;
      const image = e.target.files[0];

   
  if(image != null){

        this.errors = null;
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {

          this.previewImage = e.target.result;
          console.log(this.previewImage);



        };


           $('#dummyImage').show();
        // for (var i = 0; i < files.length; i++) {
            var file = e.target.files[0];
            // var imageType = /image.*/;
            // if (!file.type.match(imageType)) {
            //     continue;
            // }



           
        
            var img = document.getElementById("dummyImage");

      
            img.file = file;

       

            var pembaca = new FileReader();
            pembaca.onload = (function (aImg) {
                return function (e) {

                const imgE = document.createElement("img")
                  
                        // console.log("Isi File :");
                        // console.log(file);


                        new Compressor(file, {
                            quality: 0.2,
                            success(result){
                                var pembaca = new FileReader()
                                pembaca.readAsDataURL(result);
                                pembaca.onloadend = function() {
                                    var base64data = pembaca.result;

                                  console.log(base64data);

                                  aImg.innerHTML = base64data;
                          }


                            },
                            error(err){

                                console.log(err.message);
                            }
                         


                        })
                    
                };
            })(img);
            pembaca.readAsDataURL(file);


        }
             
                   this.isLoading = false;
   
    },

    cobaConsole(){

        var coba = document.getElementById('dummyImage').innerHTML;

        console.log(coba)

    },

    previewImageQuestion(e){
        const file = e.target.files[0];

          new Compressor(file, {
              quality: 0.2,

              success(result) {

                   const reader = new FileReader()
                    reader.readAsDataURL(result);

                    reader.onload = (e) => {
                      this.previewImage = e.target.result;
                      console.log(this.previewImage);

                   

        }

                    //  reader.onloadend = (e) => function() {
                
                    
                        

                    //  }

               
              },
              error(err) {
                console.log(err.message);
              },
          });
    },

    ...mapActions("teacher", [
  
                "deleteQuiz",
                "createQuiz",
                "createQuizQuestion",
                "deleteQuestion",
                "editQuizQuestion",


    ]),


    closeDialog(){

this.deleteQuizDialog = false;
this.createMultipleQuestionDialog = false;
this.deleteQuestionDialog = false;
this.editQuestionDialog = false;
this.clearQuestionPayload();
this.clearSelectedQuestionPayload();
// this.editQuizDialog = false; 


    },

     deleteMeetingQuiz() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete It !",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteQuiz(this.$store.state.teacher.quizDetail.id)
            .then((response) => {
              this.closeDialog();
              this.$swal({
                type: "success",
                icon: "success",
                position: "top-end",

                toast: true,
                timer: 3000,
                showConfirmButton: false,
                title: "Quiz Deleted Successfuly",
              });
              this.snackbar = true;
              this.$router.push(
                "/teacher/classes/class/" +
                  this.$store.state.teacher.classDetail.id+ "/meeting/"+ this.$store.state.teacher.meetingDetail.id
              );
            })
            .catch((error) => {
              this.closeDialog();
              this.text = error;
              this.snackbar = true;
            });
        } else {
          this.closeDialog();
        }
      });
    },

      deleteQuizQuestion() {
      this.isLoading = true;

      this.deleteQuestion(this.selectedQuestionPayload)
        .then((response) => {
          this.clearSelectedQuestionPayload();
            this.closeDialog();
          this.isLoading = false;
          this.text = "Soal Berhasil Dihapus";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });
    },


    clearQuestionPayload(){


          this.multipleQuestionPayload.answer = null;
          this.multipleQuestionPayload.question_type = 1;
          this.multipleQuestionPayload.question = null;
          this.multipleQuestionPayload.question_image = null;
          this.multipleQuestionPayload.a = null;
          this.multipleQuestionPayload.b = null;
          this.previewImage = null;
          this.multipleQuestionPayload.c = null;
          this.multipleQuestionPayload.d = null;
          this.multipleQuestionPayload.e = null;

          if(document.getElementById('dummyImage').innerHTML != null){
          document.getElementById('dummyImage').innerHTML = null;
          }
          


    },



    clearSelectedQuestionPayload(){

          this.editQuestionDialog = false;
          this.selectedQuestionPayload.id = null;
          this.selectedQuestionPayload.answer = null;
          this.selectedQuestionPayload.question_type = null;
          this.selectedQuestionPayload.question = null;
          this.selectedQuestionPayload.question_image = null;
          this.selectedQuestionPayload.a = null;
          this.selectedQuestionPayload.b = null;
          this.previewImage = null;
          this.selectedQuestionPayload.c = null;
          this.selectedQuestionPayload.d = null;
          this.selectedQuestionPayload.e = null;
           if(document.getElementById('dummyImage').innerHTML != null){
          document.getElementById('dummyImage').innerHTML = null;
          }

    },
         createQuizMultipleQuestion() {
      this.isLoading = true;

      var file = document.getElementById('dummyImage').innerHTML;


      if (file == null){


      if(this.multipleQuestionPayload.question_type == 1){

        

        this.multipleQuestionPayload.essay_answer = null,


      this.createQuizQuestion(this.multipleQuestionPayload)
        .then((response) => {
          this.closeDialog();
          this.isLoading = false;
          this.text = "Soal Berhasil Dibuat";
          this.snackbar = true;


            this.clearQuestionPayload();


        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });

      }else if (this.multipleQuestionPayload.question_type == 2) {

               this.multipleQuestionPayload.a = null;
                 this.multipleQuestionPayload.b = null;
                   this.multipleQuestionPayload.c = null;
                     this.multipleQuestionPayload.d = null;
                     this.multipleQuestionPayload.e = null;
                     this.multipleQuestionPayload.answer = null;

          this.createQuizQuestion(this.multipleQuestionPayload)
            .then((response) => {
              this.closeDialog();
              this.isLoading = false;
              this.text = "Soal Berhasil Dibuat";
              this.snackbar = true;

                    
                this.clearQuestionPayload();
                
            })
            .catch((error) => {
              this.isLoading = false;
              this.text = error;
              this.snackbar = true;
            });
      }

        } else if(file != null){

        this.multipleQuestionPayload.question_image = file;

         if(this.multipleQuestionPayload.question_type == 1){

        

        this.multipleQuestionPayload.essay_answer = null,


      this.createQuizQuestion(this.multipleQuestionPayload)
        .then((response) => {
          this.closeDialog();
          this.isLoading = false;
          this.text = "Soal Berhasil Dibuat";
          this.snackbar = true;


            this.clearQuestionPayload();


        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });

      }else if (this.multipleQuestionPayload.question_type == 2) {

               this.multipleQuestionPayload.a = null;
                 this.multipleQuestionPayload.b = null;
                   this.multipleQuestionPayload.c = null;
                     this.multipleQuestionPayload.d = null;
                     this.multipleQuestionPayload.e = null;
                     this.multipleQuestionPayload.answer = null;

          this.createQuizQuestion(this.multipleQuestionPayload)
            .then((response) => {
              this.closeDialog();
              this.isLoading = false;
              this.text = "Soal Berhasil Dibuat";
              this.snackbar = true;

                    
                this.clearQuestionPayload();
                
            })
            .catch((error) => {
              this.isLoading = false;
              this.text = error;
              this.snackbar = true;
            });
      }



                 }
    },



           editQuizMultipleQuestion() {
      this.isLoading = true;

      var file = document.getElementById('dummyImage').innerHTML;


      if (file == null){


      if(this.selectedQuestionPayload.question_type == 1){

        

        this.selectedQuestionPayload.essay_answer = null,


      this.editQuizQuestion(this.selectedQuestionPayload)
        .then((response) => {
          this.closeDialog();
          this.isLoading = false;
          this.text = "Soal Berhasil Diedit";
          this.snackbar = true;


            this.clearSelectedQuestionPayload();


        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });

      }else if (this.selectedQuestionPayload.question_type == 2) {

               this.selectedQuestionPayload.a = null;
                 this.selectedQuestionPayload.b = null;
                   this.selectedQuestionPayload.c = null;
                     this.selectedQuestionPayload.d = null;
                     this.selectedQuestionPayload.e = null;
                     this.selectedQuestionPayload.answer = null;

          this.editQuizQuestion(this.selectedQuestionPayload)
            .then((response) => {
              this.closeDialog();
              this.isLoading = false;
              this.text = "Soal Berhasil Diedit";
              this.snackbar = true;

                    
                this.clearSelectedQuestionPayload();
                
            })
            .catch((error) => {
              this.isLoading = false;
              this.text = error;
              this.snackbar = true;
            });
      }

        } else if(file != null){

        this.selectedQuestionPayload.question_image = file;

         if(this.selectedQuestionPayload.question_type == 1){

        

        this.selectedQuestionPayload.essay_answer = null,


      this.editQuizQuestion(this.selectedQuestionPayload)
        .then((response) => {
          this.closeDialog();
          this.isLoading = false;
          this.text = "Soal Berhasil Diedit";
          this.snackbar = true;


            this.clearSelectedQuestionPayload();


        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });

      }else if (this.selectedQuestionPayload.question_type == 2) {

               this.selectedQuestionPayload.a = null;
                 this.selectedQuestionPayload.b = null;
                   this.selectedQuestionPayload.c = null;
                     this.selectedQuestionPayload.d = null;
                     this.selectedQuestionPayload.e = null;
                     this.selectedQuestionPayload.answer = null;

          this.editQuizQuestion(this.selectedQuestionPayload)
            .then((response) => {
              this.closeDialog();
              this.isLoading = false;
              this.text = "Soal Berhasil Diedit";
              this.snackbar = true;

                    
                this.clearSelectedQuestionPayload();
                
            })
            .catch((error) => {
              this.isLoading = false;
              this.text = error;
              this.snackbar = true;
            });
      }



                 }
    },



  
  },



};
</script>