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
                          name: 'student-classes-class-id',
                            params: { id: classDetail.id },
                          
                        }"
                      >
                <v-btn
                  v-show="!hidden"
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
            <v-card color="teal" dark>
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-icon color="white">mdi-calendar</v-icon>

                <v-spacer></v-spacer>

                <!-- <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ meetingDetail.name }}
              </v-card-title>

              <v-card-subtitle style="font-weight: bold">{{
                classDetail.teacher_name
              }}</v-card-subtitle>

            <v-col>
          <v-chip style="font-weight:bold"  color="teal darken-3" text-color="white"
                        ><v-avatar left>
                          <v-icon
                            >mdi-calendar</v-icon
                          > </v-avatar
                        >{{ meetingDetail.date }} </v-chip
                      >


            
  <v-chip style="font-weight:bold" color="teal darken-2" text-color="white"
                        >{{ meetingDetail.start_time }} - {{ meetingDetail.finish_time }}</v-chip
                      >
            </v-col>

<!-- 
              <v-card-actions>

                                 </v-card-actions> -->
            
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <nuxt-link
                    
                     style="text-decoration: none"
                        :to="{
                          name: 'student-classes-class-id-meeting-meetingid-quiz',
                          params: { id: classDetail.id, meetingid: meetingDetail.id },
                        }"
                    >
                    <v-btn

                      v-if="meetingDetail.quiz && !meetingDetail.attempt"
                      rounded
                      class="ml-4 my-4"
                      color="primary"
                      
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-pencil</v-icon>

                    Start Quiz
                    
                    </v-btn>


                    </nuxt-link>

                  
                          <v-btn

                      v-if="meetingDetail.quiz && meetingDetail.attempt"
                      rounded
                      disabled
                      class="ml-4 my-4"
                      color="primary"
                      
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-pencil</v-icon>

                    Start Quiz
                    </v-btn>

                  </template>
                  <span>Click to start quiz</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">

                    <nuxt-link v-if="meetingDetail.attempt"  style="text-decoration: none"
                        :to="{
                          name: 'student-classes-class-id-meeting-meetingid-quiz-result',
                          params: { id: classDetail.id, meetingid: meetingDetail.id },
                        }">
                    <v-btn
                      rounded
                      class="ml-4 my-4"
                      color="blue lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-newspaper-variant-outline</v-icon>

                    Quiz Result
                    </v-btn>
                    </nuxt-link>
                  </template>
                  <span>See Quiz Result</span>
                </v-tooltip>
     


            </v-card>
          </v-col>
        </v-row>


        <v-row v-for="item in meetingDetail.lessons" :key="item.id">

           <v-col align="left" cols="12" lg="12" md="12" xs="12" sm="12">

   <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'student-classes-class-id-meeting-meetingid-lesson-lessonid',
                          params: { id: classDetail.id, meetingid: meetingDetail.id , lessonid: item.id},
                        }"
                      >
                       <v-hover v-slot="{ hover }">
          <v-card
                    color="white"
            light
               :elevation="hover ? 4 : 2"
                    :class="{ 'on-hover': hover }"
            
          >

            <v-card-title class="headline">
              {{item.name}}

                 <v-spacer></v-spacer>

                <!-- <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->

                            <v-icon color="primary">mdi-book-open-variant</v-icon>

            </v-card-title>

            <v-card-subtitle>Click For Detail</v-card-subtitle>

            <v-card-actions>
          <div v-if="item.youtube !== null">
                       <v-btn 
                        rounded
                          color="red"
                      dark
                      text> <v-icon left>mdi-youtube</v-icon>With Video </v-btn>
                      </div>


                 <div v-if="item.link !== null">
                       <v-btn 
                        rounded
                          color="primary"
                      dark
                      text> <v-icon left>mdi-link</v-icon>With Link </v-btn>
                      </div>

              
            </v-card-actions>
          </v-card>
           </v-hover>

                   </nuxt-link>




           </v-col>



        </v-row>


   </v-flex>
    </v-container>

     </v-layout>

</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
middleware: ["auth-student"],
  layout: "home",

  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("class/getMeetingDetailData", params),
         store.dispatch("class/getClassDetailData", params.id),
      
    ]);
    return;
  },
   data() {
    return {
      isLoaded: false,
       breadcrumbs: [
        {
          text: "Sanclass",
          disabled: false,
          href: "/student/classes",
        },
        {
          text: this.$store.state.class.classDetail.name,
          disabled: false,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}`,
        },
        {
          text: this.$store.state.class.meetingDetail.name,
          disabled: true,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}/meeting/${this.$store.state.class.meetingDetail.id}`,
        },
      ],
    };
  },
    mounted() {


        // this.$store.dispatch("class/getMeetingDetailData", this.$route.params).then((response) => {
        //     console.log("Berhasil !")
        // }).catch((error) => {

        //       console.log(error);
        //       this.$router.push('/student/classes/class/'+ this.$route.params.id)

        // })


    this.isLoaded = true;
  },
   computed: {
    ...mapState("class", {
      meetingDetail: (state) => state.meetingDetail,
       classDetail: (state) => state.classDetail,
    }),
    
  },
    methods: {
    ...mapActions("class", ["getMeetingDetailData"]),
     ...mapActions("class", ["getClassesDetailData"]),

    

  
  },
};
  


</script>