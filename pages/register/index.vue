

<template>
  <v-app>
    <section style="height: 100%">
      <v-container fill-height>
        <v-row>
          <v-col cols="12">
  
            <v-card
              style="z-index: 50; position: relative"
              class="mx-auto"
              max-width="800"
            
            >
                      <v-toolbar
              color="white"
              light>



                 <v-col cols="12">
              <v-row>

   <v-col cols="5">
     <h5  class="my-1" style="font-weight:bolder; color: #424242">
Register
     </h5>

   </v-col>
        <v-col  cols="7">

             <img :src="require('@/static/images/landingpage/logolanding.png')" alt="Logo" />

        </v-col>

              </v-row>


            </v-col>

      </v-toolbar>
              <div>
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                       Personal Information
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                      Account Information
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3"> Profile Image </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="toStep2">
                                        <v-card-subtitle class="headline"> Personal Information </v-card-subtitle>
                          <v-card-text>
                            <v-col cols="12">
                              <validation-provider
                                v-slot="{ errors }"
                                name="Name"
                                rules="required"
                              >
                                <v-text-field
                                  :counter="100"
                                  outlined
                                  v-model="payload.name"
                                  dense
                                  :error-messages="errors"
                                  required
                                  label="Name"
                                ></v-text-field>
                              </validation-provider>
                            </v-col>

                            <v-col cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <validation-provider
                                    v-slot="{ errors }"
                                    name="Birth Date"
                                    rules="required"
                                  >
                                    <v-menu
                                      ref="menu"
                                      v-model="menu"
                                      :close-on-content-click="false"
                                      transition="scale-transition"
                                      offset-y
                                      min-width="auto"
                                    >
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-text-field
                                          required
                                          :error-messages="errors"
                                          label="Birthday date"
                                          outlined
                                        v-model="payload.birth_date"
                                          dense
                                          readonly
                                          v-bind="attrs"
                                          v-on="on"
                                        ></v-text-field>
                                      </template>
                                      <v-date-picker
                                        style="z-index: 50"
                                        ref="picker"
                                        width="250"
                                             v-model="payload.birth_date"
                                        :max="
                                          new Date().toISOString().substr(0, 10)
                                        "
                                        min="1950-01-01"
                                        @change="save"
                                      ></v-date-picker>
                                    </v-menu>
                                  </validation-provider>
                                </v-col>

                                <v-col cols="12">
                                  <v-row>
                                    <v-col  cols="12" md="6" lg="6" sm="12" xm="12">
                                      <validation-provider
                                        v-slot="{ errors }"
                                        name="Your Whatsapp Number"
                                        rules="required|numeric|min:6|max:15"
                                      >
                                        <v-text-field
                                          :counter="14"
                                          outlined
                                          dense
                                          v-model="payload.whatsapp"
                                          :error-messages="errors"
                                          required
                                          label="Your Whatsapp Number"
                                        ></v-text-field>
                                      </validation-provider>
                                    </v-col>

                                    <v-col cols="12" md="6" lg="6" sm="12" xm="12">
                                      <validation-provider
                                        v-slot="{ errors }"
                                        name="Parent Phone Number"
                                        rules="required|numeric|min:6|max:15"
                                      >
                                        <v-text-field
                                          :counter="14"
                                          outlined
                                          dense
                                          v-model="payload.parent_phone_number"
                                          :error-messages="errors"
                                          required
                                          label="Parent Phone Number"
                                        ></v-text-field>
                                      </validation-provider>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                            </v-col>

            <v-col cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="Province"
                  rules="required"
                >
                  <v-autocomplete
                    outlined
                    :error-messages="errors"
                    required
                    :items="provinces"
                    v-model="provinceData"
                    return-object
                    color="white"
                    item-text="nama"
                    label="Province"
                    @change="chain"
                  ></v-autocomplete>
                </validation-provider>
              </v-col>

              <v-col v-if="cities" cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="City"
                  rules="required"
                >
                  <v-autocomplete
                    outlined
                    :error-messages="errors"
                    required
                    :items="cities"
                    v-model="cityData"
                    return-object
                    color="white"
                    item-text="nama"
                    label="City"
                  ></v-autocomplete>
                </validation-provider>
              </v-col>

              <v-col v-if="cityData" cols="12">
                <v-row>
                  <v-col cols="6">
                    <validation-provider
                      v-slot="{ errors }"
                      name="School"
                      rules="required"
                    >
                      <v-text-field
                        :counter="100"
                        :error-messages="errors"
                        
                        outlined
                        dense
                        v-model="payload.school"
                        label="School"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>

                  <v-col cols="6">
                      <validation-provider
                      v-slot="{ errors }"
                      name="Grade Level"
                      rules="required"
                    >
                    <v-select
                     label="Grade Level"
                      v-model="grade_level"
                      :items="grades"
                      item-text="grade"
                      item-value="value"
                     
                      :error-messages="errors"
                      persistent-hint
                      dense
                      outlined
                      return-object
                      single-line
                    ></v-select>
                      </validation-provider>
                  </v-col>
                </v-row>
              </v-col>
                            



                          </v-card-text>

                          <v-divider></v-divider>


                            <nuxt-link  to="/login">

                            <a
                            class="ml-7"
                          style="font-size: 14px; color: #2196F3;"
                              
                              >
                            Have an Account ? Just Login !
                            </a>
                            </nuxt-link>


                          <v-card-actions>
<!-- 
                              <NuxtLink   to="/login">

                            <a
                            class="ml-2"
                          style="font-size: 14px; color: #2196F3"
                              
                              >
                            Have an Account ? Just Login !
                            </a>
                            </NuxtLink> -->


                            <v-spacer></v-spacer>
    
                            <v-btn
                              color="primary"
                              :disabled="invalid"
                              @click="toStep2"
                                                         >
                              Next
                            </v-btn>

                            <!-- <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn> -->
                          </v-card-actions>
                        </form>
                      </validation-observer>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="toStep3">
                                        <v-card-subtitle class="headline"> Account Information </v-card-subtitle>
                          <v-card-text>
                            <v-col cols="12">
                              <v-col cols="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  name="Email"
                                  rules="required|email"
                                >
                                  <v-text-field
                                    :counter="30"
                                    :error-messages="errors"
                                    label="Email"
                                    dense
                                    v-model="payload.email"
                                    outlined
                                  ></v-text-field>
                                </validation-provider>
                              </v-col>

                              <v-col cols="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  name="Username"
                                  rules="required"
                                >
                                  <v-text-field
                                    :counter="30"
                                    :error-messages="errors"
                                    label="Username"
                                    dense
                                    v-model="payload.username"
                                    outlined
                                  ></v-text-field>
                                </validation-provider>
                              </v-col>

                              <v-col cols="12">
                                <v-row>
                                  <v-col  cols="12" md="6" lg="6" sm="12" xm="12">
                                    <validation-provider
                                      v-slot="{ errors }"
                                      name="Password"
                                      rules="required|min:6"
                                    >
                                      <v-text-field
                                        ref="password"
                                        :counter="20"
                                        name="password"
                                        :error-messages="errors"
                                        outlined
                                        v-model="payload.password"
                                        dense
                                        :append-icon="
                                          show2 ? 'mdi-eye' : 'mdi-eye-off'
                                        "
                                        @click:append="show2 = !show2"
                                        :type="show2 ? 'text' : 'password'"
                                        hint="Your Password"
                                        required
                                        label="Password"
                                      ></v-text-field>
                                    </validation-provider>
                                  </v-col>

                                  <v-col  cols="12" md="6" lg="6" sm="12" xm="12">
                                    <validation-provider
                                      v-slot="{ errors }"
                                      name="Password Confirmation"
                                      rules="required|min:6|password:@New Password"
                                    >
                                      <v-text-field
                                        :counter="20"
                                        dense
                                        v-model="re_password"
                                        outlined
                                        :error-messages="errors"
                                        :append-icon="
                                          show3 ? 'mdi-eye' : 'mdi-eye-off'
                                        "
                                        @click:append="show3 = !show3"
                                        :type="show3 ? 'text' : 'password'"
                                        required
                                        label="Re-type password"
                                        data-vv-as="password"
                                      ></v-text-field>
                                    </validation-provider>
                                  </v-col>
                                </v-row>
                              </v-col>

                    
                              <!-- <v-btn color="secondary" @click="e1 = 1">
                                Back
                              </v-btn>

                            <v-btn
                                color="primary"
                                @click="toStep3"
                                :disabled="invalid"
                              >
                                Next
                              </v-btn> -->

                            
                              

                             
                            </v-col>
                          </v-card-text>

                           <v-divider></v-divider>

                          <v-card-actions>
                            <v-spacer></v-spacer>


                              <v-btn color="secondary" @click="e1 = 1">
                                Back
                              </v-btn>

                            <v-btn
                                color="primary"
                                @click="toStep3"
                                :disabled="invalid"
                              >
                                Next
                              </v-btn>

                            


                          </v-card-actions>
                        </form>
                      </validation-observer>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                 
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="register">
            <v-card-subtitle class="headline"> Profile Image </v-card-subtitle>
            <v-card-text>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12">
                    <v-col align="center" cols="12">
                      <v-avatar size="200" color="grey">
                        <img
                          v-if="previewImage"
                          :src="previewImage"
                          :v-model="previewImage"
                        />
                      </v-avatar>
                    </v-col>

                    <v-col cols="12">
                      <!-- <validation-provider
                      v-slot="{ errors }"
                      name="Image"
                      rules="required|size:2000|mimes:image/*"
                    > -->

                      <b-form-file
                        ref="file"
                        id="image"
                        type="file"
                        accept="image/*"
                        @change="uploadImage"
                      />

                      <!-- </validation-provider> -->
                    </v-col>
                  </v-col>
                </v-row>
              </v-col>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>




                      <!-- <v-btn color="primary" @click="e1 = 4"> Submit </v-btn> -->




     
           
                      <v-btn color="secondary" @click="e1 = 2"> Back </v-btn>


         <v-btn
                id="imageButton"
                v-if="previewImage != null"
                color="primary"
                :disabled="invalid"

                @click="register"
              >
                REGISTER
              </v-btn>



   <v-btn v-if="previewImage == null" color="primary" disabled text>
                     REGISTER
              </v-btn>

              <!-- <v-btn
                color="red darken-1"
                text
                @click="dialogProfileImage = false"
              >
                Cancel
              </v-btn> -->

            </v-card-actions>
          </form>
        </validation-observer>


            <div v-if="errors != null" style="margin:auto">
                <v-chip rounded class="mt-2" style="color: white" color="#E53935" v-for="item in errors" :key="item.index">{{ item[0] }}

                  {{item.data}}



                </v-chip>
                <br/>
              

            </div>

        
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="wave wave1"></div>

      <div class="wave wave2"></div>

      <div class="wave wave3"></div>

      <div class="wave wave4"></div>
    </section>




     <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <div class="text-center">
    <!-- <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading
    </v-btn> -->
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

  </v-app>
</template>


<script>
import { required, min, numeric, max, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Password confirmation does not match",
});
extend("numeric", numeric);

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} may not be more than {length} characters",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import Vue from "vue";

Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
import { mapActions, mapState } from "vuex";

export default {
         auth: false,
  layout: "empty",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
     
      e1: 1,
       grades: [
        { grade: 7 , value: 7 },
        { grade: 8, value: 8 },
        { grade: 9, value: 9 },
        { grade: 10, value: 10 },
        { grade: 11, value: 11 },
        { grade: 12, value: 12 },
        // { grade: "University Student", value: 13 },
        // { grade: "General", value: 14 },
      ],
      grade_level: null,

      provinces: [
        {
          id: 12,
          nama: "Sumatera Utara",
        },
        {
          id: 13,
          nama: "Sumatera Barat",
        },
        {
          id: 14,
          nama: "Riau",
        },
        {
          id: 15,
          nama: "Jambi",
        },
        {
          id: 16,
          nama: "Sumatera Selatan",
        },
        {
          id: 17,
          nama: "Bengkulu",
        },
        {
          id: 18,
          nama: "Lampung",
        },
        {
          id: 19,
          nama: "Kepulauan Bangka Belitung",
        },
        {
          id: 21,
          nama: "Kepulauan Riau",
        },
        {
          id: 31,
          nama: "Dki Jakarta",
        },
        {
          id: 32,
          nama: "Jawa Barat",
        },
        {
          id: 33,
          nama: "Jawa Tengah",
        },
        {
          id: 34,
          nama: "Di Yogyakarta",
        },
        {
          id: 35,
          nama: "Jawa Timur",
        },
        {
          id: 36,
          nama: "Banten",
        },
        {
          id: 51,
          nama: "Bali",
        },
        {
          id: 52,
          nama: "Nusa Tenggara Barat",
        },
        {
          id: 53,
          nama: "Nusa Tenggara Timur",
        },
        {
          id: 61,
          nama: "Kalimantan Barat",
        },
        {
          id: 62,
          nama: "Kalimantan Tengah",
        },
        {
          id: 63,
          nama: "Kalimantan Selatan",
        },
        {
          id: 64,
          nama: "Kalimantan Timur",
        },
        {
          id: 65,
          nama: "Kalimantan Utara",
        },
        {
          id: 71,
          nama: "Sulawesi Utara",
        },
        {
          id: 72,
          nama: "Sulawesi Tengah",
        },
        {
          id: 73,
          nama: "Sulawesi Selatan",
        },
        {
          id: 74,
          nama: "Sulawesi Tenggara",
        },
        {
          id: 75,
          nama: "Gorontalo",
        },
        {
          id: 76,
          nama: "Sulawesi Barat",
        },
        {
          id: 81,
          nama: "Maluku",
        },
        {
          id: 82,
          nama: "Maluku Utara",
        },
        {
          id: 91,
          nama: "Papua Barat",
        },
        {
          id: 94,
          nama: "Papua",
        },
      ],
      menu: false,
            timeout: 2000,

      payload: {
        name: null,
        birth_date: null,
        whatsapp: null,
        parent_phone_number: null,
        province_id: null,
        province_name: null,
        city_id: null,
        city_name: null,
        school: null,
        grade_level: null,
        email: null,
        username: null,
        password: null,
      
        profile_image: null,
        is_teacher: null,
      },
      provinceData: null,
      cityData: null,
      cities: null,
        show1: false,
      show2: false,
      show3: false,
        previewImage: null,
          re_password: null,
          snackbar: false,
          text: null,
          isLoading: false,
          errors: null,



    };
  },



        mounted() {

        if(this.$auth.loggedIn){
            this.$router.push('/student');


        }

        },


  methods: {

        ...mapActions("registerlogin", [
      "registerStudent"
    ]),

      register(){



        this.isLoading = true;
        // console.log(this.provinceData);

        // console.log(this.cityData);
           
      this.payload.parent_phone_number = parseInt(
        this.payload.parent_phone_number
      );

         
      this.payload.whatsapp = parseInt(
        this.payload.whatsapp
      );


        this.payload.province_id =  this.provinceData.id;
            this.payload.province_name =  this.provinceData.nama;
                    this.payload.city_id =  this.cityData.id;
            this.payload.city_name =  this.cityData.nama;

             this.payload.grade_level =  this.grade_level.value;


            this.payload.profile_image = this.previewImage;
            this.payload.is_teacher = 0;

                  this.$axios.setBaseURL("https://api.sanedu.id/");

  this.registerStudent(this.payload)

        .then((response) => {

          this.isLoading = false;

          // this.text = "Register Successful !";
          // this.snackbar = true;

  
          this.isLoading == false;


           this.$swal(
          "Register Successful !",
          "Please Login with your new account !",
          "success"
        );
 
           this.$router.push('/login');


        })
        .catch((error) => {
          this.isLoading = false;

          // this.text = error;
          // this.snackbar = true;

          this.$swal(
          "Register Failed !",
           " Please check the error message",
          "error"
        );

        this.errors = error.data;

        });




      },
      uploadImage(e) {
      const image = e.target.files[0];

      if (image["size"] < 1000000) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.previewImage = e.target.result;
          console.log(this.previewImage);
        };
      } else {
        this.text = "Your Image is Too big ( > 1MB )";
        this.snackbar = true;
        this.previewImage = null;
        document.getElementById("image").value = null;
      }
    },

       chain() {

      this.isLoading = true;

      this.$axios.setBaseURL("https://dev.farizdotid.com/");

      this.$axios
        .get("api/daerahindonesia/kota?id_provinsi=" + this.provinceData.id)
        .then((response) => {
          this.isLoading = false;



          this.cities = response.data.kota_kabupaten;
        })
        .catch((error) => {});
    },

    toStep2() {
      this.e1 = 2;
    },

       toStep3() {
      this.e1 = 3;
    },


   save(date) {
      this.$refs.menu.save(date);
    },

  },
  


  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

};
</script>
