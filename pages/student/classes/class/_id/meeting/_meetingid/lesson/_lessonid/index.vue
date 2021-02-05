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
                          name: 'student-classes-class-id-meeting-meetingid',
                          params: { id: classDetail.id, meetingid: meetingDetail.id },
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
            class="pb-1 pt-3"
            :items="breadcrumbs"
            divider="/"
          ></v-breadcrumbs>
        </v-alert>

          <v-row justify="center" align="center">
          <v-col align="left"  cols="12">
            <v-card color="#35B5AC" dark>
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-icon color="white">mdi-book-open-variant</v-icon>

                <v-spacer></v-spacer>

                <!-- <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ lessonDetail.name }}
              </v-card-title>

              <v-card-subtitle style="font-weight: bold">
                  {{
                meetingDetail.name
              }} on {{ classDetail.name }}</v-card-subtitle>

              <v-btn style="text-decoration:none" rounded class="ml-4 my-4" target="_blank" :href="lessonDetail.link" color="primary" dark>
                <v-icon left>mdi-castle</v-icon>

                Link
              </v-btn>

              <!-- <v-btn rounded class="ml-4 my-4" color="blue lighten-2" dark>
                <v-icon left>mdi-star</v-icon>

                Grade Level : {{ classDetail.grade_level }}
              </v-btn> -->

              <!-- <v-card-actions>
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
              </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
        
                            <v-col cols="12" lg="9" md="9" sm="12" xs="12">
         
       <v-card>
                
               <v-container  v-if="lessonDetail.youtube == null"  >
                   <row align="center" justify="center">
                     <v-col >
                        <overline style="font-weight:bold; color:grey; font-family: Roboto" color="grey" >No Video Available
                        </overline>
                        </v-col>
                   </row>
               </v-container>


                <div v-if="lessonDetail.youtube != null" class="videoWrapper">
                    <!-- Copy & Pasted from YouTube -->
                  <iframe class="py-2 px-2" width="560" height="315" :src="this.ytvid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

       </v-card>

              </v-col>
                    



        </v-row>

          <!-- <v-row justify="center" align="center">
        
                            <v-col cols="12" lg="9" md="9" sm="12" xs="12">
                           
                                <v-card>
                                         <v-container>
 <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <template >
              <img :src="channelProp.photo" />
            </template>

          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle style="font-weight: bold">{{
                      channelProp.title
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ videoProp.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
 </v-list>


                                            <v-divider inset>


                                            </v-divider>

                    

                                             <v-list  class="ml-10 pa-0" v-for="item in vidComments" :key="item.id">
                                                <v-list-item two-line>
                                                <v-list-item-avatar class="mt-0">
                                                    <template >
                                                    <img :src="item.snippet.topLevelComment.snippet.authorProfileImageUrl" />
                                                    </template>

                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-subtitle style="font-weight: bold">{{
                                                            item.snippet.topLevelComment.snippet.authorDisplayName
                                                    }}</v-list-item-subtitle>
                                                    <v-list-item-subtitle>{{ item.snippet.topLevelComment.snippet.textDisplay }}</v-list-item-subtitle>
                                                    <v-list-item-subtitle class="pa-0" style="font-size:12px"><v-icon class="mr-0" color="pink" left>mdi-heart-box</v-icon>   {{ item.snippet.topLevelComment.snippet.likeCount }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                                </v-list-item>
                                                <v-divider inset></v-divider>
                                        </v-list>
                                
                                         </v-container>
                                </v-card>



         
       <v-card>


       </v-card>

              </v-col>
                    



        </v-row>
       
  -->
      </v-flex>
    </v-container>
  </v-layout>
</template>


<script>
import { mapActions, mapState } from "vuex";
import getVideoId from 'get-video-id';

export default {
  middleware: ["auth-student"],
  layout: "home",

  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("class/getLessonDetailData", params),
      store.dispatch("class/getMeetingDetailData", params),
      store.dispatch("class/getClassDetailData", params.id),
    ]);
    return;
  },
  data() {
    return {
      isLoaded: false,
      tyvid: null,
      info: null,
      channelProp: {
          
          title: null,
          photo: null

      },
      videoProp: {
            title: null,
      },
      vidComments: null,
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
          disabled: false,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}/meeting/${this.$store.state.class.meetingDetail.id}`,
        },
        {
          text: this.$store.state.class.lessonDetail.name,
          disabled: true,
          href: `/student/classes/class/${this.$store.state.class.classDetail.id}/meeting/${this.$store.state.class.meetingDetail.id}/lesson/${this.$store.state.class.lessonDetail.id}`,
        },
      ],
    };
  },
  mounted() {
    this.isLoaded = true;

    const id = getVideoId(this.$store.state.class.lessonDetail.youtube);

    this.ytvid = "https://www.youtube.com/embed/" + id.id;




  },
  computed: {
    ...mapState("class", {
      lessonDetail: (state) => state.lessonDetail,
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

