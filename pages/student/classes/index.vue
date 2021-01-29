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
                <div class="overline mb-4">Student Account</div>
                <v-list-item-title class="headline mb-1">
                  Enrolled Classes
                </v-list-item-title>
                <v-list-item-subtitle class="my-4"
                  >Cant find any class ? Just add one !
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="white">
                <img
                  :src="$auth.$state.user.profile_image"
                  :alt="$auth.$state.user.name"
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
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on }">
                <v-col class="text-right">
                  <v-btn class="my-4" color="primary" dark v-on="on">
                    + Add Class
                  </v-btn>
                </v-col>
              </template>
              <v-card>
                <v-progress-linear
                  v-if="isLoading == true"
                  indeterminate
                  color="cyan"
                ></v-progress-linear>

                <validation-observer ref="observer" v-slot="{ invalid }">
                  <form @submit.prevent="submit">
                    <v-card-title class="headline">
                      Join More Class
                    </v-card-title>
                    <v-card-text>
                      <v-col cols="12">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Class code input"
                          rules="required"
                        >
                          <v-text-field
                            :counter="10"
                            :error-messages="errors"
                            label="Class Code"
                            required
                            v-model="data.class_code"
                          ></v-text-field>
                        </validation-provider>
                      </v-col>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" text @click="dialog = false">
                        CANCEL
                      </v-btn>
                      <v-btn
                        @click="submit"
                        :disabled="invalid"
                        color="green darken-1"
                        text
                      >
                        JOIN
                      </v-btn>
                    </v-card-actions>
                  </form>
                </validation-observer>
              </v-card>
            </v-dialog>

            <!-- <v-row v-if="isLoaded == false">
            <v-col lg="4" md="6" xm="12" sm="6">
              <v-skeleton-loader
                type="card-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>
            <v-col lg="4" md="6" xm="12" sm="6">
              <v-skeleton-loader
                type="card-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>
            <v-col lg="4" md="6" xm="12" sm="6">
              <v-skeleton-loader
                type="card-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>
            <v-col lg="4" md="6" xm="12" sm="6">
              <v-skeleton-loader
                type="card-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>
            <v-col lg="4" md="6" xm="12" sm="6">
              <v-skeleton-loader
                type="card-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>

            <v-col lg="4" md="6" xm="12" sm="6">
              <v-skeleton-loader
                type="card-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row> -->

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
                      class="white--text align-end"
                      height="120px"
                      src="https://www.colorhexa.com/42a5f5.png"
                    >
                      <v-app-bar class="py-5" flat color="rgba(0, 0, 0, 0)">
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
                              <v-icon>mdi-exit-to-app</v-icon>
                            </v-btn>
                          </template>
                          <span>Unenroll</span>
                        </v-tooltip>
                      </v-app-bar>

                      <v-card-title>{{ item.name }}</v-card-title>
                      <v-card-subtitle class="white--text">
                        {{ item.teacher_name }}
                      </v-card-subtitle>
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
                      <v-chip color="primary">Class Quota</v-chip>
                      <!-- <v-chip       text-color="white"  color="pink">Max : {{item.quota}}</v-chip> -->
                      <v-chip color="teal" text-color="white"
                        ><v-avatar left>
                          <v-icon>mdi-account-supervisor-circle</v-icon> </v-avatar
                        >Students : {{ item.student_number }}</v-chip
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
                          name: 'student-classes-class-id',
                          params: { id: item.id },
                        }"
                      >
                        <v-btn color="orange" text> Detail </v-btn>
                      </nuxt-link>

                      <v-btn
                        color="green"
                        text
                        target="_blank"
                        style="text-decoration: none"
                        :href="
                          'https://api.whatsapp.com/send?phone=+62' +
                          item.teacher_whatsapp
                        "
                      >
                        Contact Teacher
                      </v-btn>

                     
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>

            <v-dialog v-model="deleteModal" persistent max-width="450">
              <v-card>
                <v-card-title class="headline">
                  Unenroll From Class
                </v-card-title>
                <v-card-text
                  >Are you sure you want to unenroll from
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
                    Disagree
                  </v-btn>
                  <v-btn color="red darken-1" text @click="unenrollClass">
                    Agree
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
    </v-container>
  </v-layout>
</template>





<script>
import { required } from "vee-validate/dist/rules";
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
      fields: [
        "name",
        "class_code",
        "teacher_name",
        "teacher_whatsapp",
        "student_number",
        "grade_level",
        "school",
      ],
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
      color: "randomColor()",
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
    ...mapState("class", {
      classes: (state) => state.classes,
    }),
  },
  methods: {
    ...mapActions("class", [
      "getClassesData",
      "joinClass",
      "unenrollFromClass",
    ]),
    submit() {
      this.$refs.observer.validate();
      this.isLoading = true;
      // this.isLoaded = false;
      this.joinClass(this.data)
        .then((response) => {
          this.dialog = false;
          this.isLoading = false;
          this.text = "Kelas Berhasil Ditambahkan";
          this.snackbar = true;

          // this.isLoaded = true;
          // this.$router.push({ path: "/student/classes" });
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

    unenrollClass() {
      this.unenrollFromClass(this.class_selected.id)
        .then((response) => {
          this.deleteModal = false;
          this.class_selected = null;
          this.text = response;
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