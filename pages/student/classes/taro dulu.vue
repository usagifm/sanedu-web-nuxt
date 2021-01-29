<template>
  <v-app>
    
    <v-alert color="primary" dark icon="mdi-rocket" border="left">
      Jika kelas belum ada, silahkan tambah kelas dengan memasukan kode kelas
      yang anda miliki.
    </v-alert>

    <v-container fluid>
   
      <v-sheet color="white" elevation="1">
        <v-progress-linear
          v-if="isLoaded == false"
          indeterminate
          color="blue lighten-1"
        ></v-progress-linear>
    
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
            <v-card-title class="headline"> Join More Class </v-card-title>
            <v-card-text>
              <v-col cols="12">
                <v-text-field
                  label="Enter Class Code"
                  required
                  v-model="data.class_code"
                ></v-text-field>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                CANCEL
              </v-btn>
              <v-btn color="green darken-1" text @click="submit"> JOIN </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  

       
          <v-row v-if="isLoaded == false">
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
          </v-row>

          <v-row v-if="isLoaded == true">
            <v-col md="4" v-for="item in classes" :key="item.id">
              <v-card class="mx-auto text-left" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="120px"
                  src="https://www.colorhexa.com/42a5f5.png"
                >
                  <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <v-icon color="white">mdi-book</v-icon>

                    <v-spacer></v-spacer>

                    <v-btn color="white" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-app-bar>

                  <v-card-title>{{ item.name }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0 text--primary">
                  {{ item.school }}
                </v-card-subtitle>

                <v-card-subtitle class="pb-0 text--secondary">
                  Grade Level : {{ item.grade_level }}
                </v-card-subtitle>

                <v-card-subtitle class="pb-0 text--secondary">
                  Teacher : {{ item.teacher_name }}
                </v-card-subtitle>

                <v-col>
                  <v-divider />
                  <v-chip link>Class Quota</v-chip>
                  <v-progress-linear
                    rounded
                    class="my-4"
                    :value="(item.student_number / item.quota) * 100"
                  ></v-progress-linear>
                </v-col>


                <v-card-actions>
                  <v-btn color="orange" text> Detail </v-btn>

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


            </v-col>
          </v-row>

      </v-sheet>

    </v-container>

 

  </v-app>

  
</template>




<script>
import { mapActions, mapState } from "vuex";

export default {
  middleware: ["auth-student"],
  layout: "home",

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
    };
  },
  mounted() {
    // console.log(this.$auth.$state.user);
    // this.color = randomColor();
    this.isLoaded = true;
  },
  computed: {
    ...mapState("class", {
      classes: (state) => state.classes,
    }),
  },
  methods: {
    ...mapActions("class", ["getClassesData", "joinClass"]),

    submit() {
      this.isLoading = true;
      // this.isLoaded = false;
      this.joinClass(this.data)
        .then((response) => {
          this.dialog = false;
          this.isLoading = false;
          this.text = "Kelas Berhasil Ditambahkan";
          this.snackbar = true;
          // this.isLoaded = true;
          this.$router.push({ path: "/student/classes" });
        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
          // this.isLoaded = true;
        });
    },
  },
};
</script>


// layout home



