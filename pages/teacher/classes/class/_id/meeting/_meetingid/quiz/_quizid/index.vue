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
                name: 'teacher-classes-class-id',
                params: { id: classDetail.id },
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
            <v-card color="teal" dark>
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-icon color="white">mdi-calendar</v-icon>

                <v-spacer></v-spacer>

                <v-menu offset-y transition="slide-y-transition" bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" v-bind="attrs" v-on="on" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item link @click="editMeetingDialog = true">
                      <v-list-item-title style="font-weight: bold">
                        <v-icon>mdi-pencil</v-icon> Edit
                        Meeting</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item link @click="deleteMeetingDialog = true">
                      <v-list-item-title style="font-weight: bold">
                        <v-icon>mdi-delete</v-icon> Delete
                        Meeting</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ meetingDetail.name }}
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
                  rounded
                  class="mr-4 mb-2 my-4"
                  color="green"
                  dark
                  style="font-weight: bold"
                  @click="createLessonDialog = true"
                >
                  <v-icon left>mdi-plus</v-icon>

                  Create Lesson
                </v-btn>
              </v-card-actions>
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

      <v-dialog v-model="editMeetingDialog" persistent max-width="500">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-card-title style="font-weight: bold" class="headline">
              Edit Meeting
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
            <form @submit.prevent="editClassMeeting">
              <v-card-text>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Meeting Name"
                    rules="required"
                  >
                    <v-text-field
                      :counter="35"
                      :error-messages="errors"
                      label="Meeting Name"
                      required
                      prepend-icon="mdi-pencil"
                      outlined
                      dense
                      v-model="meetingPayload.name"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Meeting Date"
                    rules="required"
                  >
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          :error-messages="errors"
                          v-model="meetingPayload.date"
                          label="Meeting Date"
                          prepend-icon="mdi-calendar"
                          dense
                          outlined
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="meetingPayload.date"
                        @input="menu = false"
                        :min="new Date().toISOString().substr(0, 10)"
                      ></v-date-picker>
                    </v-menu>
                  </validation-provider>
                </v-col>

                <v-col cols="12">
                  <v-row>
                    <v-col cols="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Meeting Start Time "
                        rules="required"
                      >
                        <v-menu
                          ref="menu"
                          v-model="startMenu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="meetingPayload.start_time"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="meetingPayload.start_time"
                              :error-messages="errors"
                              label="Start Time"
                              prepend-icon="mdi-clock-time-four-outline"
                              dense
                              outlined
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              @change="meetingPayload.finish_time = null"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="startMenu"
                            format="24hr"
                            v-model="meetingPayload.start_time"
                            full-width
                            @click:minute="
                              $refs.menu.save(meetingPayload.start_time)
                            "
                          ></v-time-picker>
                        </v-menu>
                      </validation-provider>
                    </v-col>

                    <v-col cols="6">
                      <validation-provider
                        v-show="meetingPayload.start_time != null"
                        v-slot="{ errors }"
                        name="Meeting Finish Time"
                        rules="required"
                      >
                        <v-menu
                          ref="menu2"
                          v-model="finishMenu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="meetingPayload.finish_time"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="meetingPayload.finish_time"
                              :error-messages="errors"
                              label="Finish Time"
                              prepend-icon="mdi-clock-time-four-outline"
                              dense
                              outlined
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="finishMenu"
                            format="24hr"
                            v-model="meetingPayload.finish_time"
                            :min="meetingPayload.start_time"
                            full-width
                            @click:minute="
                              $refs.menu2.save(meetingPayload.finish_time)
                            "
                          ></v-time-picker>
                        </v-menu>
                      </validation-provider>
                    </v-col>
                  </v-row>
                </v-col>
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
                  v-if="
                    meetingPayload.date != null &&
                    meetingPayload.start_time != null &&
                    meetingPayload.finish_time != null
                  "
                  @click="editClassMeeting"
                  :disabled="invalid"
                  color="primary"
                  class="py-4 pb-4"
                >
                  Edit
                </v-btn>

                <v-btn
                  v-if="
                    meetingPayload.date == null ||
                    meetingPayload.start_time == null ||
                    meetingPayload.finish_time == null
                  "
                  disabled
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

      <v-dialog v-model="deleteMeetingDialog" persistent max-width="450">
        <v-card>
          <v-card-title class="headline"> Delete Meeting </v-card-title>
          <v-card-text
            >Apakah anda yakin ingin menghapus meeting
            <code>{{ meetingDetail.name }}</code> dari kelas
            <code>{{ classDetail.name }}</code> ?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" text @click="closeDialog">
              Batal
            </v-btn>
            <v-btn color="red darken-1" text @click="deleteMeeting">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="createLessonDialog" persistent max-width="500">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-card-title style="font-weight: bold" class="headline">
              Create Lesson
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
            <form @submit.prevent="createMeetingLesson">
              <v-card-text>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Meeting Name"
                    rules="required"
                  >
                    <v-text-field
                      :counter="35"
                      :error-messages="errors"
                      label="Lesson Name"
                      required
                      outlined
                      dense
                      v-model="lessonPayload.name"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12">
                  <!-- <validation-provider
                          v-slot="{ errors }"
                          name="Meeting Name"
                          rules="required"
                        > -->
                  <v-text-field
                    label="Lesson Link"
                    outlined
                    dense
                    placeholder="Ex : https://meet.google.com/zhe-etpo-jii"
                    v-model="lessonPayload.link"
                  ></v-text-field>
                  <!-- </validation-provider> -->
                </v-col>

                <v-col cols="12">
                  <!-- <validation-provider
                          v-slot="{ errors }"
                          name="Meeting Name"
                          rules="required"
                        > -->
                  <v-text-field
                    label="Youtube Link"
                    outlined
                    dense
                    placeholder="Ex : https://www.youtube.com/watch?v=mBhqJam52rs"
                    v-model="lessonPayload.youtube"
                    @change="setYoutube(lessonPayload.youtube)"
                  ></v-text-field>
                  <!-- </validation-provider> -->
                </v-col>

                <div class="videoWrapper">
                  <iframe
                    class="py-2 px-2"
                    width="300"
                    height="180"
                    :src="ytvid"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
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
                  @click="createMeetingLesson"
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

      <v-dialog v-model="editLessonDialog" persistent max-width="500">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-card-subtitle style="font-weight: bold; color: white">
              Edit Lesson {{ selectedLesson.oldName }}
            </v-card-subtitle>

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
            <form @submit.prevent="editMeetingLesson">
              <v-card-text>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Meeting Name"
                    rules="required"
                  >
                    <v-text-field
                      :counter="35"
                      :error-messages="errors"
                      label="Lesson Name"
                      required
                      outlined
                      dense
                      v-model="selectedLesson.name"
                    ></v-text-field>
                  </validation-provider>
                </v-col>

                <v-col cols="12">
                  <!-- <validation-provider
                          v-slot="{ errors }"
                          name="Meeting Name"
                          rules="required"
                        > -->
                  <v-text-field
                    label="Lesson Link"
                    outlined
                    dense
                    placeholder="Ex : https://meet.google.com/zhe-etpo-jii"
                    v-model="selectedLesson.link"
                  ></v-text-field>
                  <!-- </validation-provider> -->
                </v-col>

                <v-col cols="12">
                  <!-- <validation-provider
                          v-slot="{ errors }"
                          name="Meeting Name"
                          rules="required"
                        > -->
                  <v-text-field
                    label="Youtube Link"
                    outlined
                    dense
                    placeholder="Ex : https://www.youtube.com/watch?v=mBhqJam52rs"
                    v-model="selectedLesson.youtube"
                    @change="setYoutube(selectedLesson.youtube)"
                  ></v-text-field>
                  <!-- </validation-provider> -->
                </v-col>

                <div class="videoWrapper">
                  <iframe
                    class="py-2 px-2"
                    width="400"
                    height="300"
                    :src="ytvid"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
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
                  @click="editMeetingLesson"
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

      <v-dialog v-model="deleteLessonDialog" persistent max-width="450">
        <v-card>
          <v-card-title class="headline"> Delete Lesson </v-card-title>
          <v-card-text
            >Apakah anda yakin ingin menghapus materi
            <code> {{ selectedLesson ? selectedLesson.name : "" }}</code> dari
            pertemuan <code> {{ meetingDetail.name }}</code> ?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" text @click="closeDialog">
              Batal
            </v-btn>
            <v-btn color="red darken-1" text @click="deleteMeetingLesson">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      store.dispatch("teacher/getClassDetailData", params.id),
    ]);
    return;
  },
  data() {
    return {
      meetingPayload: {
        class_id: this.$store.state.teacher.classDetail.id,
        meeting_id: this.$store.state.teacher.meetingDetail.id,
        name: this.$store.state.teacher.meetingDetail.name,
        date: this.$store.state.teacher.meetingDetail.date,
        start_time: this.$store.state.teacher.meetingDetail.start_time,
        finish_time: this.$store.state.teacher.meetingDetail.finish_time,
      },
      lessonPayload: {
        class_id: this.$store.state.teacher.classDetail.id,
        meeting_id: this.$store.state.teacher.meetingDetail.id,
        name: null,
        link: null,
        youtube: null,
      },
      selectedLesson: {
        class_id: this.$store.state.teacher.classDetail.id,
        meeting_id: this.$store.state.teacher.meetingDetail.id,
        id: null,
        name: null,
        link: null,
        youtube: null,
        oldName: null,
      },

      ytvid: "https://www.youtube.com/embed/",
      finishMenu: false,
      startMenu: false,
      menu: false,
      snackbar: false,
      text: false,
      isLoaded: false,
      deleteMeetingDialog: false,
      editMeetingDialog: false,
      createLessonDialog: false,
      editLessonDialog: false,
      deleteLessonDialog: false,
      isLoading: false,
      showLessons: true,
      showAttendances: false,
      showAttemps: false,
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
          disabled: true,
          href: `/teacher/classes/class/${this.$store.state.class.classDetail.id}/meeting/${this.$store.state.teacher.meetingDetail.id}`,
        },
      ],
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  computed: {
    ...mapState("teacher", {
      meetingDetail: (state) => state.meetingDetail,
      classDetail: (state) => state.classDetail,
    }),
  },
  methods: {
    lessons() {
      this.showLessons = true;
      this.showAttendances = false;
      this.showAttemps = false;
    },
    attendances() {
      this.showLessons = false;
      this.showAttendances = true;
      this.showAttemps = false;
    },
    attemps() {
      this.showLessons = false;
      this.showAttendances = false;
      this.showAttemps = true;
    },

    openEditLessonDialog(item) {
      this.editLessonDialog = true;
      this.selectedLesson.id = item.id;
      this.selectedLesson.name = item.name;
      this.selectedLesson.link = item.link;
      this.selectedLesson.youtube = item.youtube;
      this.selectedLesson.oldName = item.name;

      if (item.youtube != null) {
        const id = getVideoId(item.youtube);

        this.ytvid = "https://www.youtube.com/embed/" + id.id;
      }
    },

    openDeleteLessonDialog(item) {
      this.selectedLesson.id = item.id;
      this.selectedLesson.name = item.name;
      this.selectedLesson.link = item.link;
      this.selectedLesson.youtube = item.youtube;
      this.selectedLesson.oldName = item.name;
      this.deleteLessonDialog = true;
    },

    setYoutube(link) {
      const id = getVideoId(link);

      this.ytvid = "https://www.youtube.com/embed/" + id.id;
    },

    ...mapActions("teacher", [
      "getMeetingDetailData",
      "editMeetingDetail",
      "deleteClassMeeting",
      "createLesson",
      "editLesson",
      "deleteLesson",
    ]),
    convert(date) {
      var full = new Date(date);

      return full.setHours(0, 0, 0, 0);
    },
    closeDialog() {
      this.ytvid = "https://www.youtube.com/embed/";
      this.editMeetingDialog = false;
      this.deleteMeetingDialog = false;
      this.createLessonDialog = false;
      this.editLessonDialog = false;
      this.deleteLessonDialog = false;
    },

    editClassMeeting() {
      this.isLoading = true;

      this.editMeetingDetail(this.meetingPayload)
        .then((response) => {
          this.closeDialog();
          this.isLoading = false;
          this.text = "Meeting Berhasil Diedit";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });
    },

    deleteMeeting() {
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
          this.deleteClassMeeting(this.meetingPayload)
            .then((response) => {
              this.closeDialog();
              this.$swal({
                type: "success",
                icon: "success",
                position: "top-end",

                toast: true,
                timer: 3000,
                showConfirmButton: false,
                title: "Meeting Deleted Successfuly",
              });
              this.snackbar = true;
              this.$router.push(
                "/teacher/classes/class/" +
                  this.$store.state.teacher.classDetail.id
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

    createMeetingLesson() {
      this.isLoading = true;

      this.createLesson(this.lessonPayload)
        .then((response) => {
          this.lessonPayload.name = null;
          this.lessonPayload.link = null;
          this.lessonPayload.youtube = null;
          this.closeDialog();
          this.isLoading = false;
          this.text = "Materi Berhasil Dibuat";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });
    },

    editMeetingLesson() {
      this.isLoading = true;

      this.editLesson(this.selectedLesson)
        .then((response) => {
          (this.selectedLesson.id = null),
            (this.selectedLesson.name = null),
            (this.selectedLesson.link = null),
            (this.selectedLesson.youtube = null),
            (this.selectedLesson.oldName = null),
            this.closeDialog();
          this.isLoading = false;
          this.text = "Materi Berhasil Diedit";
          this.snackbar = true;
        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
        });
    },

    deleteMeetingLesson() {
      this.isLoading = true;

      this.deleteLesson(this.selectedLesson)
        .then((response) => {
          (this.selectedLesson.id = null),
            (this.selectedLesson.name = null),
            (this.selectedLesson.link = null),
            (this.selectedLesson.youtube = null),
            (this.selectedLesson.oldName = null),
            this.closeDialog();
          this.isLoading = false;
          this.text = "Materi Berhasil Dihapus";
          this.snackbar = true;
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