

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
              <v-toolbar color="white" light>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="12">
                       <a  style="font-weight:bolder; font-size:22px; color: #424242"  class="my-1">
Register As Teacher
     </a>
                    </v-col>
                    <!-- <v-col cols="7">
                      <img
                        :src="
                          require('@/static/images/landingpage/logolanding.png')
                        "
                        alt="Logo"
                      />
                    </v-col> -->
                  </v-row>
                </v-col>
              </v-toolbar>
              <div>
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                      Informasi Pribadi
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                      Informasi Akun
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3"> Foto Profil </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="toStep2">
                          <v-card-subtitle class="headline text-center">
                            Informasi Pribadi
                          </v-card-subtitle>
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
                                  label="Nama"
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
                                          label="Tanggal Lahir"
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
                                    <v-col
                                      cols="12"
                                      md="6"
                                      lg="6"
                                      sm="12"
                                      xm="12"
                                    >
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
                                          label="No Handphone"
                                        ></v-text-field>
                                      </validation-provider>
                                    </v-col>

                                    <!-- <v-col
                                      cols="12"
                                      md="6"
                                      lg="6"
                                      sm="12"
                                      xm="12"
                                    >
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
                                          label="No HP Orang Tua"
                                        ></v-text-field>
                                      </validation-provider>
                                    </v-col> -->
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
                                  label="Provinsi"
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
                                  label="Kota"
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
                                      label="Sekolah"
                                    ></v-text-field>
                                  </validation-provider>
                                </v-col>

                                <v-col cols="6">
                                   <validation-provider
                                v-slot="{ errors }"
                                name="NIP"
                                rules="numeric"
                              >
                                <v-text-field
                                  :counter="100"
                                  outlined
                                  v-model="payload.nip"
                                  dense
                                  :error-messages="errors"
                                  required
                                  label="NIP"
                                ></v-text-field>
                              </validation-provider>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-card-text>

                          <v-divider></v-divider>

                          <nuxt-link to="/login">
                            <a
                                class="text-left ml-4"
                              style="font-size: 14px; color: #2196f3; font-weight:bold; "
                            >
                              Sudah punya akun ? Login disini !
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
                          <v-card-subtitle class="headline text-center">
                            Informasi Akun
                          </v-card-subtitle>
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
                                  <v-col
                                    cols="12"
                                    md="6"
                                    lg="6"
                                    sm="12"
                                    xm="12"
                                  >
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

                                  <v-col
                                    cols="12"
                                    md="6"
                                    lg="6"
                                    sm="12"
                                    xm="12"
                                  >
                                    <validation-provider
                                      v-slot="{ errors }"
                                      name="Password Confirmation"
                                      rules="required|min:6|password:@Password"
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
                          <v-card-subtitle class="headline text-center">
                            Foto Profil
                          </v-card-subtitle>
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
                                    <b-form-file
                                      ref="file"
                                      id="image"
                                      type="file"
                                      accept="image/*"
                                      @change="uploadImage"
                                    />

                                 
                                  </v-col>

                                  <v-col class="pa-0" cols="12">
                        
                                     <validation-provider
                                      v-slot="{ errors }"
                                      rules="agree"
                                      name="checkbox"
                                    >
                                      <v-checkbox
                                        v-model="checkbox"
                                        :error-messages="errors"
                                        value="1"
        
                                        type="checkbox"
                                        required
                                      >
                                       <template v-slot:label>
        <div class="caption">
        Dengan Ini saya mendaftar dan menyetujui <a @click="term = true" style="color: #1E88E5">syarat dan ketentuan</a> pengguna
          
        </div>

                                       </template>
          </v-checkbox>
                                    </validation-provider>
               

                                  </v-col>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-card-text>

                          <div v-if="errors != null">
                            <v-col
                              class="pa-1"
                              v-for="item in errors"
                              :key="item.index"
                              align="center"
                              cols="12"
                            >
                              <v-chip
                                rounded
                                style="color: white"
                                color="#E53935"
                                >{{ item[0] }}

                                {{ item.data }}
                              </v-chip>
                            </v-col>
                          </div>

                          <v-col
                            align="center"
                            class="pa-1"
                            v-if="photoError != null"
                            cols="12"
                          >
                            <v-chip
                              v-if="photoError != null"
                              rounded
                              style="color: white"
                              color="#E53935"
                              >{{ photoError }}
                            </v-chip>
                          </v-col>

                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <!-- <v-btn color="primary" @click="e1 = 4"> Submit </v-btn> -->

                            <v-btn color="secondary" @click="e1 = 2">
                              Back
                            </v-btn>

                            <v-btn
                              id="imageButton"
                              v-if="previewImage != null"
                              color="primary"
                              :disabled="invalid"
                              @click="register"
                               style="font-weight:bold;"
                            >
                              REGISTER
                            </v-btn>

                            <v-btn
                              v-if="previewImage == null"
                              color="primary"
                              disabled
                              text
                            >
                              REGISTER
                            </v-btn>

        
                          </v-card-actions>
                        </form>
                      </validation-observer>
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
      <v-dialog v-model="isLoading" persistent width="300">
        <v-card color="primary" dark>
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


    <!-- Term and Condition Modal -->
       <div class="text-center">
    <v-dialog
      v-model="term"
      width="700"
    >


      <v-card>
        <v-card-title class="headline grey lighten-2">
          Syarat Dan Ketentuan
        </v-card-title>

        <v-card-text class="mt-3" style="  text-align: justify;">
                        These terms and conditions outline the rules and regulations for the use of Sanedu's Website, located at www.sanedu.id.

                    By accessing this website we assume you accept these terms and conditions. Do not continue to use sanedu.id if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Free Terms & Conditions Generator.

                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

                    Cookies

                    We employ the use of cookies. By accessing sanedu.id, you agreed to use cookies in agreement with the Sanedu's Privacy Policy.

                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

                    License

                    Unless otherwise stated, Sanedu and/or its licensors own the intellectual property rights for all material on sanedu.id. All intellectual property rights are reserved. You may access this from sanedu.id for your own personal use subjected to restrictions set in these terms and conditions.

                    You must not:

                    Republish material from sanedu.id
                    Sell, rent or sub-license material from sanedu.id
                    Reproduce, duplicate or copy material from sanedu.id
                    Redistribute content from sanedu.id

                    This Agreement shall begin on the date hereof.

                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Sanedu does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Sanedu,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Sanedu shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

                    Sanedu reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="accept"
          >
           Saya Setuju
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

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

extend("agree", {
  ...required,
  message: "You Have to Agree to Continue the Regristration",
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
              checkbox : null,
              term: false,
    

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
      timeout: 4000,

      payload: {
        name: null,
        birth_date: null,
        whatsapp: null,
        province_id: null,
        province_name: null,
        city_id: null,
        city_name: null,
        school: null,
        nip: null,
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
      photoError: null,
    };
  },

  mounted() {
       if(this.$auth.loggedIn){


          if(this.$auth.$state.user.is_teacher == 0){

            this.$router.push('/student');

          }


          if(this.$auth.$state.user.is_teacher == 1){

            this.$router.push('/teacher');

          }

        }

  },

  methods: {
    ...mapActions("registerlogin", ["registerAccount"]),

    accept(){
      this.term = false;
    },

    register() {
      this.isLoading = true;
      // console.log(this.provinceData);

      // console.log(this.cityData);

      // this.payload.parent_phone_number = parseInt(
      //   this.payload.parent_phone_number
      // );

      this.payload.whatsapp = parseInt(this.payload.whatsapp);

      this.payload.province_id = this.provinceData.id;
      this.payload.province_name = this.provinceData.nama;
      this.payload.city_id = this.cityData.id;
      this.payload.city_name = this.cityData.nama;

      this.payload.profile_image = this.previewImage;
      this.payload.is_teacher = 1;

      this.$axios.setBaseURL("http://34.117.208.101/");

      this.registerAccount(this.payload)

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

          this.$router.push("/login");
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


        if(image != null){

      if (image["size"] < 1000000) {
        this.photoError = null;
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.previewImage = e.target.result;
          console.log(this.previewImage);
        };
      } else {
        this.photoError = "Foto tidak boleh lebih besar dari 1 MB !";
        this.text = "Foto tidak boleh lebih besar dari 1 MB !";
        this.snackbar = true;
        this.previewImage = null;
        document.getElementById("image").value = null;
      }

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
