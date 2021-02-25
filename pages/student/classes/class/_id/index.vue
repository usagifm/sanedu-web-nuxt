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
                          name: 'student-classes',
                          
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

        <v-row justify="center" align="center">
          <v-col align="left"  cols="12">
            <v-card color="#385F73" dark>
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-icon color="white">mdi-book</v-icon>  <v-card-title style="font-weight:bolder" class="text-left"> Class </v-card-title>

                <v-spacer></v-spacer>

                <!-- <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ classDetail.name }}
              </v-card-title>

              <v-card-subtitle style="font-weight: bold">{{
                classDetail.teacher_name
              }}</v-card-subtitle>

              <v-btn small rounded class="ml-4 my-4" color="primary" style="font-weight:bold"  dark>
                <v-icon left>mdi-castle</v-icon>

                {{ classDetail.school }}
              </v-btn>

              <v-btn style="font-weight:bold" small rounded class="ml-4 my-4" color="blue lighten-2" dark>
                <v-icon left>mdi-star</v-icon>

                Grade Level : {{ classDetail.grade_level }}
              </v-btn>

              <v-card-actions>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="ml-4 my-4"
                      color="blue lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-account-group</v-icon>

                      {{ classDetail.student_number }}
                    </v-btn>
                  </template>
                  <span>Number Of Enrolled Students</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      class="ml-4 my-4"
                      color="blue lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-account-multiple-plus</v-icon>

                      {{ classDetail.quota }}
                    </v-btn>
                  </template>
                  <span>Max Class Quota</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="text-left" justify="center">
          <v-col cols="3" class="hidden-sm-and-down">
            <v-card style="border-radius: 3%" light outlined>

              <v-card-text style="font-weight: bold">
                Ongoing  Meetings
              </v-card-text>


                <div v-for="item in classMeetings" :key="'A'+item.id" justify="center" align="center">
                 <v-card-subtitle  style="font-weight:bold; color:grey"      class="ml-4 pb-0 py-0" v-if="  $moment().unix() > $moment(item.date +' '+item.start_time).unix() && $moment().unix() < $moment(item.date +' '+item.finish_time).unix() ">
                   <nuxt-link   style="text-decoration: none; color:grey"
                        :to="{
                          name: 'student-classes-class-id-meeting-meetingid',
                          params: { id: classDetail.id, meetingid: item.id },
                        }">
                    {{item.name}} - {{item.date}}
                   </nuxt-link>
                 </v-card-subtitle>
                
                
                </div>



              <v-card-text style="font-weight: bold">
                Upcoming Meetings
              </v-card-text>

              <div v-for="item in classMeetings" :key="'B'+item.id" justify="center" align="center">
                 <v-card-subtitle   style="font-weight:bold; color:grey"      class="ml-4 pb-0 py-0" v-if="$moment(item.date +' '+item.start_time).unix() > $moment().unix()">
                   <nuxt-link   style="text-decoration: none; color:grey"
                        :to="{
                          name: 'student-classes-class-id-meeting-meetingid',
                          params: { id: classDetail.id, meetingid: item.id },
                        }">
                    {{item.name}} - {{item.date}}

                   </nuxt-link>
                 </v-card-subtitle>
                
                
                </div>

           

              <v-card-actions>
                <v-btn icon>
                  <v-icon> mdi-calendar </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" lg="9" md="9" xs="12" sm="12">

            <template v-if="classMeetings">

              <v-row v-for="item in classMeetingsSorted" :key="item.id">
                <v-col>
                   <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'student-classes-class-id-meeting-meetingid',
                          params: { id: classDetail.id, meetingid: item.id },
                        }"
                      >
                       <v-hover v-slot="{ hover }">
                  <v-card light
                   :elevation="hover ? 4 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                    <v-card-title  class="headline">
                      {{ item.name }}  
                    </v-card-title>

                    <v-card-subtitle style="color: #1E88E5" v-if="  $moment().unix() > $moment(item.date +' '+item.start_time).unix() && $moment().unix() < $moment(item.date +' '+item.finish_time).unix() "
                      > The Meeting is Ongoing </v-card-subtitle
                    >
                       <v-card-subtitle style="color:#43A047" v-if="  $moment().unix() < $moment(item.date +' '+item.start_time).unix()  "
                      > The Meeting is Not Started Yet </v-card-subtitle
                    >

                      <v-card-subtitle style="color:#E53935" v-if="  $moment().unix() > $moment(item.date +' '+item.finish_time).unix()  "
                      > The Meeting is Already Ended </v-card-subtitle
                    >


                    <v-col>
                      <v-chip class="my-2" style="font-weight:bold"  color="#385F73" text-color="white"
                        ><v-avatar left>
                          <v-icon
                            >mdi-calendar</v-icon
                          > </v-avatar
                        >{{ item.date }} </v-chip
                      >


  <v-chip class="my-2" style="font-weight:bold" color="teal" text-color="white"
                        >{{ item.start_time }} - {{ item.finish_time }}</v-chip
                      >
                      

             
                    </v-col>

                    <!-- 
            <v-btn
      rounded
       class="ml-4 my-4"
      color="secondary"
      dark
    >
    <v-icon left>mdi-clock</v-icon>
      
      
    </v-btn> -->

                    <v-card-actions>

                         <v-btn v-if="item.lessons == ''" 
                         small
                        rounded
                          color="primary"
                      dark
                       style="font-weight:bold;"
                      text> <v-icon left>mdi-book-open-variant</v-icon>No Lesson </v-btn>


                      <v-btn v-if="item.lessons != ''" 
                      small
                        rounded
                          color="primary"
                           style="font-weight:bold;"
                      dark
                      text> <v-icon left>mdi-book-open-variant</v-icon>{{ item.lessons.length }} Lessons  </v-btn>

                  


                      <div v-if="item.quiz">
                       <v-btn 
                       small
                        rounded
                         style="font-weight:bold;"
                          color="success"
                      dark
                      text> <v-icon left>mdi-pencil-circle</v-icon>With Quiz </v-btn>
                      </div>
                    </v-card-actions>
                  </v-card>
                       </v-hover>

                   </nuxt-link>
                </v-col>
              </v-row>
            </template></v-col
          ></v-row
        ></v-flex
      ></v-container
    ></v-layout
  >
</template>




<script>
import { mapActions, mapState } from "vuex";

export default {

    head() {
    return {
      
      title: "SANEDU | " + this.$store.state.class.classDetail.name
    };
  },

  middleware: ["auth-student"],
  layout: "home",

  async asyncData({ store, params }) {
    // console.log(params);

    await Promise.all([
      store.dispatch("class/getClassDetailData", params.id),

      store.dispatch("class/getClassMeetings", params.id),
    ]);
    return;
  },

  computed: {
    ...mapState("class", {
      classDetail: (state) => state.classDetail,
      classMeetings: (state) => state.classMeetings,
    }),
  },

  data() {
    return {
      classparam: this.$store.state.class.classDetail,
      breadcrumbs: [
        {
          text: "Sanclass",
          disabled: false,
          href: "/student/classes",

        },
        {
          text: this.$store.state.class.classDetail.name,
          disabled: true,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}`,
        },
      ],
      coba: new Date(),
      now: null,
      temp: null,
      classMeetingsSorted: null,

      isLoaded: false,
    };
  },
  mounted() {
    this.isLoaded = true;
    this.now = this.coba.setHours(0, 0, 0, 0);

    this.classMeetingsSorted = this.$store.state.class.classMeetings.sort(function(a, b){
    return b.id - a.id;
});

// console.log(this.classMeetingsSorted)

  },

  methods: {
    ...mapActions("class", ["getClassesDetailData"]),

    convert(date) {
      var full = new Date(date);

      return full.setHours(0, 0, 0, 0);
    },
    //      convertFinish(date,time) {

    //   return $moment();
    // }
  },
};
</script>
