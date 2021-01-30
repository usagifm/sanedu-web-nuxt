<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");

* {
}

.bold {
  font-weight: 900;

  color: rgb(104, 102, 102);
  font-family: "Open Sans", sans-serif;
}
</style>


<template>
  <v-layout>
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col align="center" cols="12" lg="2" md="2">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="120"
            width="120"
            style="border-radius: 50%"
            :src="this.$auth.$state.user.profile_image"
          ></v-img>
        </v-col>
        <v-col align="left" cols="12" lg="5" md="5">
          <h4 v-if="$vuetify.breakpoint.mobile" class="text-center bold">
            {{ this.$auth.$state.user.name }}
          </h4>
          <h4 v-if="!$vuetify.breakpoint.mobile" class="text-left bold">
            {{ this.$auth.$state.user.name }}
          </h4>
          <h5 v-if="$vuetify.breakpoint.mobile" class="text-center">
            San Student
          </h5>
          <h5 v-if="!$vuetify.breakpoint.mobile" class="text-left">
            San Student
          </h5>

          <v-btn
            @click="dialogPersonalData = true"
            style="color: #1e88e5"
            rounded
            class="mt-4 mb-4"
            small
            depressed
            >EDIT YOUR PERSONAL DATA<v-icon right>
              mdi-circle-edit-outline</v-icon
            >
          </v-btn>

          <v-row class="text-left">
            <v-col cols="6">
              <h6 class="bold">
                PHONE
                <v-btn
                  @click="dialogWhatsapp = true"
                  style="color: #1e88e5"
                  rounded
                  small
                  left
                  icon
                  depressed
                >
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
              </h6>
              <h6 class="mb-7">0{{ this.$auth.$state.user.whatsapp }}</h6>

              <h6 class="bold">PARENT PHONE NUMBER</h6>
              <h6>0{{ this.$auth.$state.user.parent_phone_number }}</h6>
            </v-col>

            <v-col cols="6">
              <h6 class="bold">
                EMAIL
                <v-btn
                  @click="dialogEmail = true"
                  style="color: #1e88e5"
                  rounded
                  small
                  left
                  icon
                  depressed
                >
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
              </h6>
              <h6 class="mb-7">{{ this.$auth.$state.user.email }}</h6>

              <h6 class="bold">BIRTH DATE</h6>
              <h6>{{ this.$auth.$state.user.birth_date }}</h6>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" lg="5" md="5">
          <v-row justify="center">
            <v-col align="end" cols="12">
              <v-btn depressed @click="dialogProfileImage = true"
                ><v-icon left>mdi-account-circle</v-icon> Change Profile Image
              </v-btn>

              <v-btn @click="dialogPassword = true" depressed
                ><v-icon left>mdi-lock</v-icon> Change Password
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="12" md="8" lg="8">
              <v-card class="mx-auto" width="100%" outlined>
                <v-progress-linear
                  indeterminate
                  color="primary"
                ></v-progress-linear>

                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">Sanclass Overview</div>
                    <v-list-item-title class="headline mb-1">
                      Class Count
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >You're signed as a San Student</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-avatar
                    size="50"
                    color="primary"
                    class="bold"
                    style="font-size: 27px; color: white"
                    >{{ classes.length }}</v-list-item-avatar
                  >
                </v-list-item>

                <v-card-actions>
                  <v-btn outlined rounded text
                    ><v-icon left>mdi-google-classroom</v-icon> Go To Sanclass
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-tabs left slider-size="4" background-color="rgba(0,0,0,0)">
            <v-tab style="left: 0; color: #1e88e5" class="bold"
              ><v-icon left>mdi-account</v-icon> PERSONAL INFORMATION</v-tab
            >
          </v-tabs>
        </v-col>

        <v-col class="text-left" cols="12">
          <v-banner class="mb-8" two-line>
            <template v-slot:actions>
              <v-btn
                style="color: #1e88e5"
                @click="dialogRegionData = true"
                rounded
                small
                depressed
                >EDIT YOUR REGION DATA<v-icon right>
                  mdi-circle-edit-outline</v-icon
                >
              </v-btn>
            </template>
            <v-avatar slot="icon" color="primary" size="40">
              <v-icon icon="mdi-lock" color="white"> mdi-castle </v-icon>
            </v-avatar>

            <h6 class="bold mt-3">REGION AND INSTITUTION DATA</h6>
          </v-banner>

          <v-row justify="center">
            <v-col cols="6">
              <div class="ml-4 mb-7">
                <h6 class="bold">
                  PROVINCE
                  <h6>{{ this.$auth.$state.user.province_name }}</h6>
                </h6>
              </div>

              <div class="ml-4">
                <h6 class="bold">
                  CITY
                  <h6>
                    {{ this.$auth.$state.user.city_name }}
                  </h6>
                </h6>
              </div>
            </v-col>

            <v-col cols="6">
              <div class="ml-4 mb-7">
                <h6 class="bold">
                  SCHOOL
                  <h6>{{ this.$auth.$state.user.school }}</h6>
                </h6>
              </div>

              <div class="ml-4">
                <h6 class="bold">
                  GRADE LEVEL
                  <h6>{{ this.$auth.$state.user.grade_level }}</h6>
                </h6>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialogPassword" width="500">
      <v-card>
        <v-progress-linear
          v-if="isLoading == true"
          indeterminate
          color="cyan"
        ></v-progress-linear>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="changePassword">
            <v-card-title class="headline"> Change Password </v-card-title>
            <v-card-text>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Current Password"
                      rules="required"
                    >
                      <v-text-field
                        :counter="20"
                        prepend-inner-icon="mdi-lock-clock"
                        :error-messages="errors"
                        outlined
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show1 = !show1"
                        v-model="changePasswordPayload.old_password"
                        :type="show1 ? 'text' : 'password'"
                        hint="Your Current password"
                        required
                        label="Current Passowrd"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>

                  <v-col cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="New Password"
                      rules="required|min:6"
                    >
                      <v-text-field
                        ref="password"
                        :counter="20"
                        name="password"
                        prepend-inner-icon="mdi-lock"
                        :error-messages="errors"
                        outlined
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show2 = !show2"
                        v-model="changePasswordPayload.password"
                        :type="show2 ? 'text' : 'password'"
                        hint="Your new password"
                        required
                        label="New Passowrd"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>

                  <v-col cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Password Confirmation"
                      rules="required|min:6|password:@New Password"
                    >
                      <v-text-field
                        :counter="20"
                        outlined
                        prepend-inner-icon="mdi-lock"
                        :error-messages="errors"
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show3 = !show3"
                        :type="show3 ? 'text' : 'password'"
                        required
                        v-model="changePasswordPayload.re_password"
                        label="Re-type password"
                        data-vv-as="password"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                </v-row>
              </v-col>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialogPassword = false">
                Cancel
              </v-btn>
              <v-btn
                color="red"
                :disabled="invalid"
                text
                @click="changePassword"
              >
                Change Password
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogPersonalData" width="500">
      <v-card>
        <v-progress-linear
          v-if="isLoading == true"
          indeterminate
          color="cyan"
        ></v-progress-linear>

        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="personalData">
            <v-card-title class="headline"> Edit Personal Data </v-card-title>
            <v-card-text>
              <v-col cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required"
                >
                  <v-text-field
                    :counter="100"
                    prepend-icon="mdi-rename-box"
                    :error-messages="errors"
                    required
                    v-model="personalDataPayload.name"
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
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            required
                            v-model="personalDataPayload.birth_date"
                            :error-messages="errors"
                            label="Birthday date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          ref="picker"
                          width="250"
                          v-model="personalDataPayload.birth_date"
                          :max="new Date().toISOString().substr(0, 10)"
                          min="1950-01-01"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </validation-provider>
                  </v-col>

                  <v-col cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Parent Phone Number"
                      rules="required|numeric|min:6|max:15"
                    >
                      <v-text-field
                        :counter="14"
                        prepend-icon="mdi-whatsapp"
                        :error-messages="errors"
                        required
                        v-model="personalDataPayload.parent_phone_number"
                        label="Parent Phone Number"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                </v-row>
              </v-col>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="dialogPersonalData = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                :disabled="invalid"
                text
                @click="personalData"
              >
                Update
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogProfileImage" width="500">
      <v-card>
        <v-progress-linear
          v-if="isLoading == true"
          indeterminate
          color="cyan"
        ></v-progress-linear>

        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="changeProfileImage">
            <v-card-title class="headline"> Change Profile Image </v-card-title>
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
              <v-btn
                color="red darken-1"
                text
                @click="dialogProfileImage = false"
              >
                Cancel
              </v-btn>

              <v-btn
                id="imageButton"
                v-if="previewImage != null"
                color="red"
                :disabled="invalid"
                text
                @click="profileImage"
              >
                Change Image
              </v-btn>

              <v-btn v-if="previewImage == null" color="red" disabled text>
                Change Image
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogWhatsapp" persistent max-width="320">
      <v-card>
        <v-progress-linear
          v-if="isLoading == true"
          indeterminate
          color="cyan"
        ></v-progress-linear>

        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="whatsapp">
            <v-card-title class="headline"> Change Phone Number </v-card-title>
            <v-card-text>
              <v-col cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="Phone"
                  rules="required|numeric|min:6|max:15"
                >
                  <v-text-field
                    prepend-inner-icon="mdi-whatsapp"
                    :counter="15"
                    :error-messages="errors"
                    label="Phone/Whatsapp Number"
                    required
                    outlined
                    v-model="whatsappPayload.whatsapp"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialogWhatsapp = false">
                CANCEL
              </v-btn>
              <v-btn @click="whatsapp" :disabled="invalid" color="primary" text>
                UPDATE
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEmail" persistent max-width="320">
      <v-card>
        <v-progress-linear
          v-if="isLoading == true"
          indeterminate
          color="cyan"
        ></v-progress-linear>

        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="email">
            <v-card-title class="headline"> Change Email </v-card-title>
            <v-card-text>
              <v-col cols="12">
                <validation-provider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <v-text-field
                    prepend-inner-icon="mdi-email"
                    :counter="30"
                    :error-messages="errors"
                    label="Email"
                    required
                    outlined
                    v-model="emailPayload.email"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialogEmail = false">
                CANCEL
              </v-btn>
              <v-btn @click="email" :disabled="invalid" color="primary" text>
                UPDATE
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>

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

    <v-dialog v-model="dialogRegionData" persistent max-width="600">
      <v-card>
        <v-progress-linear
          v-if="isLoading == true"
          indeterminate
          color="cyan"
        ></v-progress-linear>

        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="email">
            <v-card-title class="headline">
              Change Region and Institution Data
            </v-card-title>
            <v-card-text>
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
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="dialogRegionData = false"
              >
                CANCEL
              </v-btn>
              <v-btn @click="email" :disabled="invalid" color="primary" text>
                UPDATE
              </v-btn>
            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>
  </v-layout>
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
  middleware: ["auth-student"],
  layout: "home",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  async asyncData({ store }) {
    await Promise.all([store.dispatch("class/getClassesData")]);
    return;
  },

  data() {
    return {
      timeout: 2000,
      show1: false,
      show2: false,
      show3: false,
      snackbar: false,
      yourValue: null,
      menu: false,
      previewImage: null,
      text: null,
      tab: null,
      isLoading: false,
      dialogPassword: false,
      dialogPersonalData: false,
      dialogProfileImage: false,
      dialogWhatsapp: false,
      dialogEmail: false,
      dialogRegionData: false,

      whatsappPayload: {
        whatsapp: this.$auth.$state.user.whatsapp,
      },
      emailPayload: {
        email: this.$auth.$state.user.email,
      },
      personalDataPayload: {
        name: this.$auth.$state.user.name,
        birth_date: this.$auth.$state.user.birth_date,
        parent_phone_number: this.$auth.$state.user.parent_phone_number,
      },
      changePasswordPayload: {
        old_passowrd: null,
        passowrd: null,
        re_password: null,
      },
      profileImagePayload: {
        profile_image: null,
      },
      cities: null,
      schools: null,
      provinceData: null,
      provinces: [
        {
          kode_wilayah: "010000 ",
          nama: "Prov. D.K.I. Jakarta",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "020000 ",
          nama: "Prov. Jawa Barat",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "030000 ",
          nama: "Prov. Jawa Tengah",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "040000 ",
          nama: "Prov. D.I. Yogyakarta",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "050000 ",
          nama: "Prov. Jawa Timur",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "060000 ",
          nama: "Prov. Aceh",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "070000 ",
          nama: "Prov. Sumatera Utara",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "080000 ",
          nama: "Prov. Sumatera Barat",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "090000 ",
          nama: "Prov. Riau",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "100000 ",
          nama: "Prov. Jambi",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "110000 ",
          nama: "Prov. Sumatera Selatan",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "120000 ",
          nama: "Prov. Lampung",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "130000 ",
          nama: "Prov. Kalimantan Barat",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "140000 ",
          nama: "Prov. Kalimantan Tengah",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "150000 ",
          nama: "Prov. Kalimantan Selatan",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "160000 ",
          nama: "Prov. Kalimantan Timur",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "170000 ",
          nama: "Prov. Sulawesi Utara",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "180000 ",
          nama: "Prov. Sulawesi Tengah",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "190000 ",
          nama: "Prov. Sulawesi Selatan",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "200000 ",
          nama: "Prov. Sulawesi Tenggara",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "210000 ",
          nama: "Prov. Maluku",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "220000 ",
          nama: "Prov. Bali",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "230000 ",
          nama: "Prov. Nusa Tenggara Barat",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "240000 ",
          nama: "Prov. Nusa Tenggara Timur",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "250000 ",
          nama: "Prov. Papua",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "260000 ",
          nama: "Prov. Bengkulu",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "270000 ",
          nama: "Prov. Maluku Utara",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "280000 ",
          nama: "Prov. Banten",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "290000 ",
          nama: "Prov. Kepulauan Bangka Belitung",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "300000 ",
          nama: "Prov. Gorontalo",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "310000 ",
          nama: "Prov. Kepulauan Riau",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "320000 ",
          nama: "Prov. Papua Barat",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "330000 ",
          nama: "Prov. Sulawesi Barat",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "340000 ",
          nama: "Prov. Kalimantan Utara",
          mst_kode_wilayah: "000000 ",
        },
        {
          kode_wilayah: "350000 ",
          nama: "Luar Negeri",
          mst_kode_wilayah: "000000 ",
        },
      ],
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  computed: {
    ...mapState("class", {
      classes: (state) => state.classes,
    }),
  },
  methods: {

    chain() {


fetch("http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet?mst_kode_wilayah="+this.provinceData.kode_wilayah)
        .then((response) =>{

            alert("Works !")
          console.log(response)



        }).catch((error) => {

          alert("Error !")
          console.log(error)
        })




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

    save(date) {
      this.$refs.menu.save(date);
    },

    ...mapActions("profile", [
      "editRegionData",
      "editProfileImage",
      "editPassword",
      "editPersonalData",
      "editWhatsapp",
      "editEmail",
    ]),

    personalData() {
      // console.log(this.personalDataPayload);
      this.isLoading = true;

      this.personalDataPayload.parent_phone_number = parseInt(
        this.personalDataPayload.parent_phone_number
      );

      this.editPersonalData(this.personalDataPayload)

        .then((response) => {
          // console.log(response);

          this.$auth.setUser(response);

          this.dialogPersonalData = false;
          this.isLoading = false;

          this.text = "Data Updated Successfully !";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;

          this.text = error;
          this.snackbar = true;
        });
    },

    whatsapp() {
      this.isLoading = true;
      this.whatsappPayload.whatsapp = parseInt(this.whatsappPayload.whatsapp);

      this.editWhatsapp(this.whatsappPayload)
        .then((response) => {
          // console.log(response);

          this.$auth.setUser(response);

          this.dialogWhatsapp = false;
          this.isLoading = false;

          this.text = "Phone Number Updated Successfully !";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;

          this.text = error;
          this.snackbar = true;
        });
    },

    email() {
      this.isLoading = true;

      this.editEmail(this.emailPayload)
        .then((response) => {
          // console.log(response);

          this.$auth.setUser(response);

          this.dialogEmail = false;
          this.isLoading = false;

          this.text = "Email Updated Successfully !";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;

          this.text = error;
          this.snackbar = true;
        });
    },

    profileImage() {
      // console.log(this.personalDataPayload);
      $("#imageButton").attr("disabled", true);
      this.isLoading = true;
      this.profileImagePayload.profile_image = this.previewImage;
      this.editProfileImage(this.profileImagePayload)

        .then((response) => {
          // console.log(response);

          this.$auth.setUser(response);

          this.dialogProfileImage = false;
          this.isLoading = false;

          this.text = "Image Updated Successfully !";
          this.snackbar = true;

          $("#imageButton").attr("disabled", false);

          location.reload();
        })
        .catch((error) => {
          this.isLoading = false;

          this.text = error;
          this.snackbar = true;
        });
    },

    changePassword() {
      this.isLoading = true;

      this.editPassword(this.changePasswordPayload)
        .then((response) => {
          // console.log(response);
          this.isLoading = false;

          this.dialogPassword = false;
          this.changePasswordPayload == null;
          this.text = "Password Updated Successfully !";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;
          this.dialogPersonalData = false;

          this.text = error;
          this.snackbar = true;
        });
    },
  },
};
</script>