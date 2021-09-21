<style >
.rounded-card {
  border-radius: 50px;
}
</style>

<template>
  <v-layout>
    <v-container >

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

      <v-flex v-if="isLoaded == true" text-left>
        <v-alert
          style="font-weight: bold"
     
          color="primary"
          dark
          icon="mdi-rocket"
          border="left"
        >
          Welcome to Sanclass
        </v-alert>

          <v-card class="mx-auto rounded-card" max-width="100%">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Teacher Account</div>
                <v-list-item-title  class="headline mb-1 font-weight-bold">
                  Created Classes
                </v-list-item-title>
                <v-list-item-subtitle class="my-4"
                  >Cant find any class ? Just create one !
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="white">
                <img
                  src="https://res.cloudinary.com/douzspxoy/image/upload/v1626922054/images/sanedulogo_qf1ohb.jpg"
                  class="rounded-circle"
                />
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn rounded text icon color="primary">
                <v-icon> mdi-card-account-details </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
  

        <v-row justify="center" align="center">
          <v-col cols="12" sm="12" md="12">
            <v-dialog v-model="dialog" persistent max-width="500">
              <template v-slot:activator="{ on }">
                <v-col class="text-right">
                  <v-btn class="my-4" style="font-weight:bold" color="primary" dark v-on="on">
                    + Create Class
                  </v-btn>
                </v-col>
              </template>
              <v-card>

                 <v-toolbar
              color="primary"
              dark
            > <v-card-title style="font-weight: bold" class="headline">
                  Create Class
                    </v-card-title>

            <v-spacer/>

                 <v-btn
                              @click="closeDialog"
                              color="white"
                              icon
                        
                            >
                              <v-icon>mdi-close-thick</v-icon>
                            </v-btn>
            
            
            </v-toolbar>


                <v-progress-linear
                  v-if="isLoading == true"
                  indeterminate
                  color="cyan"
                ></v-progress-linear>

                <validation-observer ref="observer" v-slot="{ invalid }">
                  <form @submit.prevent="submit">
                   
                    <v-card-text>
                      <v-col cols="12">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Class Name "
                          rules="required"
                        >
                          <v-text-field
                            :counter="35"
                            :error-messages="errors"
                            label="Class Name"
                            required
                             outlined
                             dense
           
                            v-model="payload.name"
                          ></v-text-field>
                        </validation-provider>
                      </v-col>

                        <v-col cols="12">
                        <validation-provider
                          v-slot="{ errors }"
                          name="School Name"
                          rules="required"
                        >
                          <v-text-field
                            :counter="35"
                            :error-messages="errors"
                            label="School Name"
                            outlined
                            dense
                            required
              
                            v-model="payload.school"
                          ></v-text-field>
                        </validation-provider>
                      </v-col>


                    


                         <v-col  cols="12">
                <v-row>


                   <v-col cols="6">
                          <validation-provider
                      v-slot="{ errors }"
                      name="Class Quota"
                      rules="required"
                    >
                    <v-select
                        v-model="payload.grade_level"
         
                   
                      :items="grades"
                   
                  :error-messages="errors"
                       outlined
            
                      persistent-hint
                       item-text="grade"
                      item-value="value"
                      label="Class"
                      dense
                      return-object

                    ></v-select>
                          </validation-provider>
                  </v-col>


                  <v-col cols="6">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Class Quota"
                      rules="required|max:4|numeric"
                    >
                      <v-text-field
                        :counter="4"
                        :error-messages="errors"
                        required
                        dense
                         outlined

                        v-model="payload.quota"
                        label="Class Qouta"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>

                 
                </v-row>
              </v-col>


                    </v-card-text>
                    <v-card-actions  class="py-4 pb-4" style="background-color: #E0E0E0">
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" text @click="closeDialog">
                        CANCEL
                      </v-btn>
                      <v-btn
                        @click="submit"
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

 

            <v-row v-if="isLoaded == true">
              <v-col md="4" v-for="item in classes" :key="item.id">
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto text-left"
                    max-width="400"
                    shaped
                    :elevation="hover ? 4 : 2"
                    :class="{ 'on-hover': hover }"
                  >
                    <v-img

                      style="background-color: #42a5f5;"
                      class="align-start white--text "
                      max-height="170px"

                      src="https://gstatic.com/classroom/themes/img_code.jpg"

                    >
                 
                      <v-app-bar class="my-n1 py-2"  flat color="rgba(0, 0, 0, 0)">
                        <v-icon color="white">mdi-book</v-icon>

                        <v-spacer></v-spacer>

                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              @click="openDeleteModal(item)"
                              color="white"
                              icon
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon>mdi-delete-forever</v-icon>
                            </v-btn>
                          </template>
                          <span>Delete Class</span>
                        </v-tooltip>
                      </v-app-bar>

                       <div class="align-start">
                      <v-card-title  style="font-weight:bold;">{{ item.name }}</v-card-title>
                      <v-card-subtitle class="white--text">
                       Class Code :  {{ item.class_code }}
                      </v-card-subtitle>
                  </div>
                    </v-img>

                    <v-card-subtitle class="pb-0 text--primary">
                      {{ item.school }}
                    </v-card-subtitle>

                    <v-card-subtitle class="pb-0 text--secondary">
                      Grade Level : {{ item.grade_level }}
                    </v-card-subtitle>

                    <!-- <v-card-subtitle class="pb-0 text--secondary">
                    Teacher : {{ item.teacher_name }}
                  </v-card-subtitle> -->

                    <v-col>
                      <v-divider />
                      <v-chip class="my-2" color="primary">Class Quota</v-chip>
                      <!-- <v-chip       text-color="white"  color="pink">Max : {{item.quota}}</v-chip> -->
                      <v-chip class="my-2" color="teal" text-color="white"
                        ><v-avatar left>
                          <v-icon>mdi-account-supervisor-circle</v-icon> </v-avatar
                        >Students : {{ item.student_number }} / {{ item.quota }}</v-chip
                      >
                      <v-progress-linear
                        rounded
                        class="my-4"
                        :value="(item.student_number / item.quota) * 100"
                      ></v-progress-linear>
                    </v-col>

                    <v-card-actions>
                      <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'teacher-classes-class-id',
                          params: { id: item.id },
                        }"
                      >
                        <v-btn color="orange"  style="font-weight:bold;" text> Detail </v-btn>
                      </nuxt-link>

            
                     
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>

            <v-dialog v-model="deleteModal" persistent max-width="450">
              <v-card>
                <v-card-title class="headline">
                  Delete Class 
                </v-card-title>
                <v-card-text
                  >Apakah anda yakin ingin menghapus kelas 
                  <code> {{ class_selected ? class_selected.name : "" }}</code>
                  ?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="grey darken-1"
                    text
                    @click="deleteModal = false"
                  >
                    Batal
                  </v-btn>
                  <v-btn color="red darken-1" text @click="deleteClasses">
                   Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <div class="text-center">
            <v-snackbar v-model="snackbar" :timeout="timeout">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="blue"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-row>
      </v-flex>

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
import { required, min , numeric, max, } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("numeric", {
  ...numeric,
  message: "{_field_} can not contain alphabet and symbol",});


extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} may not be more than {length} characters",
});

import { mapActions, mapState } from "vuex";

export default {
    head() {
    return {
      title: "SANEDU | Teacher Classes"
    };
  },
  middleware: ["auth-teacher"],
  layout: "home",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  async asyncData({ store }) {
    await Promise.all([store.dispatch("teacher/getClassesData")]);
    return;
  },
  data() {
    return {
      grades: [
        { grade: "1 (SD)", value: 1 },
        { grade: "2 (SD)", value: 2 },
        { grade: "3 (SD)", value: 3 },
        { grade: "4 (SD)", value: 4 },
        { grade: "5 (SD)", value: 5 },
        { grade: "6 (SD)", value: 6 },
        { grade: "7 (SMP)", value: 7 },
        { grade: "8 (SMP)", value: 8 },
        { grade: "9 (SMP)", value: 9 },
        { grade: "10 (SMA/SMK)", value: 10 },
        { grade: "11 (SMA/SMK)", value: 11 },
        { grade: "12 (SMA/SMK)", value: 12 },
      ],
      fields: [
        "name",
        "class_code",
        "teacher_name",
        "teacher_whatsapp",
        "student_number",
        "grade_level",
        "school",
      ],
      payload: {
        name: null,
        grade_level: null,
        school: null,
        quota: null
      },
      items: [],
      data: {
        class_code: "",
      },
      snackbar: false,
      text: "",
      timeout: 2000,
      dialog: false,
      isLoading: false,
      isLoaded: false,
      hitung: 0,
      deleteModal: false,
      class_selected: null,
      classCount: 0,
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  computed: {
    ...mapState("teacher", {
      classes: (state) => state.classes,
    }),
  },
  methods: {
    ...mapActions("teacher", [
      "getClassesData",
      "createClass",
      "deleteClass",
    ]),

    closeDialog(){

        this.dialog = false;
        this.payload.name = null;
                this.payload.school = null;
                        this.payload.quota = null;
                                this.payload.grade_level = null;

    },
    submit() {
      this.$refs.observer.validate();
         this.payload.grade_level = this.payload.grade_level.value;
      this.isLoading = true;
      this.createClass(this.payload)
        .then((response) => {
          this.closeDialog();

          this.isLoading = false;
          this.text = "Kelas Berhasil Dibuat";
          this.snackbar = true;

        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
     
        });
    },
    openDeleteModal(item) {
      this.class_selected = item;
      this.deleteModal = true;
    },

    deleteClasses() {
      this.deleteClass(this.class_selected.id)
        .then((response) => {
          this.deleteModal = false;
          this.class_selected = null;
          this.text = "Class Deleted Successfuly";
          this.snackbar = true;
        })
        .catch((error) => {
          this.deleteModal = false;
          this.class_selected = null;
          this.text = error;
          this.snackbar = true;
        });
    },
  },
};
</script>