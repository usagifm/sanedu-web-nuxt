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
                name: 'teacher-classes',
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
            <v-card color="#385F73" dark>
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-icon color="white">mdi-book</v-icon> <v-card-title style="font-weight:bolder" class="text-left"> Class </v-card-title>

                <v-spacer></v-spacer>

                    <v-menu
                       
                    offset-y
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on, attrs }">

                <v-btn
              color="white"
          v-bind="attrs"
          v-on="on"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

             </template>

              <v-list>
        <v-list-item
      link

  @click="classDialog = true"
      
        >
          <v-list-item-title        style="font-weight: bold">     <v-icon>mdi-pencil</v-icon> Edit Class</v-list-item-title>
           
        </v-list-item>
            <v-list-item

      link

      @click="deleteModal = true"
        >

           <v-list-item-title             style="font-weight: bold"> <v-icon>mdi-delete</v-icon>  Delete Class</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

              </v-app-bar>

              <v-card-title style="font-weight: bold" class="headline">
                {{ classDetail.name }}
              </v-card-title>

              <v-card-subtitle style="font-weight: bold">{{
                classDetail.teacher_name
                
              }}
                <br/>
              Class Code : {{
                classDetail.class_code
              }}</v-card-subtitle>

                   <!-- <v-card-subtitle style="font-weight: bold"></v-card-subtitle> -->

              <v-btn small rounded class="ml-4 my-4" color="primary" style="font-weight:bold" dark>
                <v-icon left>mdi-castle</v-icon>

                {{ classDetail.school }}
              </v-btn>

              <v-btn small rounded class="ml-4 my-4" color="blue lighten-2" style="font-weight:bold" dark>
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
                  <span>Number Of Enrolled teachers</span>
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

              <v-card-actions>


<v-spacer> </v-spacer> 

                  <v-btn
                      rounded
                      class="mr-4 mb-2 py-0"
                      color="green"
                      dark
                      style="font-weight: bold"

                      @click="createMeetingModal = true"
                    >
                      <v-icon left>mdi-plus</v-icon>

                      Create Meeting
                    </v-btn>
                    

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card outlined>
              <v-tabs

                v-model="tab"
               
          
              
                text
              >
                <v-tabs-slider></v-tabs-slider>

                <v-tab style="text-decoration: none" @click="meetings" href="#tab-1"> Meetings </v-tab>

                <v-tab style="text-decoration: none" @click="students" href="#tab-2"> Students </v-tab>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="text-left" justify="center">
          <v-col cols="3" class="hidden-sm-and-down">
            <v-card style="border-radius: 3%" light outlined>
              <v-card-text style="font-weight: bold">
                Ongoing Meetings
              </v-card-text>

              <div
                v-for="item in classDetail.meeting_schedules"
                :key="'A' + item.id"
                justify="center"
                align="left"
              >
                <v-card-subtitle
                  style="font-weight: bold; color: grey"
                      class="ml-4 pb-0 py-0"
                  v-if="
                    $moment().unix() >
                      $moment(item.date + ' ' + item.start_time).unix() &&
                    $moment().unix() <
                      $moment(item.date + ' ' + item.finish_time).unix()
                  "
                >
                  <nuxt-link
                    style="text-decoration: none; color: grey"
                    :to="{
                      name: 'teacher-classes-class-id-meeting-meetingid',
                      params: { id: classDetail.id, meetingid: item.id },
                    }"
                  >
                    {{ item.name }} - {{ item.date }}
                  </nuxt-link>
                </v-card-subtitle>
              </div>

              <v-card-text style="font-weight: bold">
                Upcoming Meetings
              </v-card-text>

              <div
                v-for="item in classDetail.meeting_schedules"
                :key="'B' + item.id"
                justify="center"
                align="left"
              >
                <v-card-subtitle
                  style="font-weight: bold; color: grey"
                  class="ml-4 pb-0 py-0"
                  v-if="
                    $moment(item.date + ' ' + item.start_time).unix() >
                    $moment().unix()
                  "
                >
                  <nuxt-link
                    style="text-decoration: none; color: grey"
                    :to="{
                      name: 'teacher-classes-class-id-meeting-meetingid',
                      params: { id: classDetail.id, meetingid: item.id },
                    }"
                  >
                    {{ item.name }} - {{ item.date }}
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

          <v-col
            v-show="showMeetings == true"
            cols="12"
            lg="9"
            md="9"
            xs="12"
            sm="12"
          >
            <template v-if="classDetail">
              <v-row v-for="item in classDetail.meeting_schedules" :key="item.id">
                <v-col>
               
                    <v-hover v-slot="{ hover }">
                      <v-card
                        light
                        :elevation="hover ? 4 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                         <v-app-bar class="pb-0 mb-n5" flat color="rgba(0, 0, 0, 0)">
                <v-icon color="primary">mdi-calendar</v-icon>

                <v-spacer></v-spacer>

                            <v-menu
                                
                              offset-y
                transition="slide-y-transition"
                bottom
              >
                <template v-slot:activator="{ on, attrs }">

                          <v-btn
                        color="primary"
                    v-bind="attrs"
                    v-on="on"
                        icon
                      >
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>

                      </template>

                        <v-list>
                  <v-list-item
                link

            @click="openEditMeetingDialog(item)"
                
                  >
                    <v-list-item-title        style="font-weight: bold">     <v-icon>mdi-pencil</v-icon> Edit Meeting</v-list-item-title>
                    
                  </v-list-item>
                      <v-list-item

                link

                @click="openDeleteMeetingDialog(item)"

                
                  >

                    <v-list-item-title             style="font-weight: bold"> <v-icon>mdi-delete</v-icon>Delete Meeting</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              </v-app-bar>

              <nuxt-link class="pb-0" style="color: black"  :to="{
                          name: 'teacher-classes-class-id-meeting-meetingid',
                          params: { id: classDetail.id, meetingid: item.id },
                        }">
                        <v-card-title class="headline">
                          {{ item.name }}
                        </v-card-title>
   

                        <v-card-subtitle
                          style="color: #1e88e5; text-decoration: none;"
                          v-if="
                            $moment().unix() >
                              $moment(
                                item.date + ' ' + item.start_time
                              ).unix() &&
                            $moment().unix() <
                              $moment(item.date + ' ' + item.finish_time).unix()
                          "
                        >
                          The Meeting is Ongoing
                        </v-card-subtitle>
                        <v-card-subtitle
                          style="color: #43a047; text-decoration: none;"
                          v-if="
                            $moment().unix() <
                            $moment(item.date + ' ' + item.start_time).unix()
                          "
                        >
                          The Meeting is Not Started Yet
                        </v-card-subtitle>

                        <v-card-subtitle
                          style="color: #e53935; text-decoration: none;"
                          v-if="
                            $moment().unix() >
                            $moment(item.date + ' ' + item.finish_time).unix()
                          "
                        >
                          The Meeting is Already Ended
                        </v-card-subtitle>
                                   </nuxt-link>

                        <v-col>
                          <v-chip
                          class="my-2"
                            style="font-weight: bold"
                            color="#385F73"
                            text-color="white"
                            ><v-avatar left>
                              <v-icon>mdi-calendar</v-icon> </v-avatar
                            >{{ item.date }}
                          </v-chip>

                          <v-chip
                          class="my-2"
                            style="font-weight: bold"
                            color="teal"
                            text-color="white"
                            >{{ item.start_time }} -
                            {{ item.finish_time }}</v-chip
                          >
                        </v-col>
                      </v-card>
                    </v-hover>
         
                </v-col>
              </v-row>
                        </template>
          </v-col>
              

              <v-col
                v-show="showStudents == true"
                cols="12"
                lg="9"
                md="9"
                xs="12"
                sm="12"
              >
                <v-row>
                  <v-col>
                    <v-card v-show="classDetail.students != '' "  class="py-3 pb-0" light>

                      <v-card-title  class="headline">Enrolled Students</v-card-title>

                          <!-- <v-card-title>
                            Enrolled Students
                            <v-spacer></v-spacer>
                            <v-text-field
                              v-model="search"
                              append-icon="mdi-magnify"
                              label="Search"
                              single-line
                              hide-details
                            ></v-text-field>
                          </v-card-title>
                          <v-data-table
                            :headers="headers"
                            :items="desserts"
                            :search="search"
                          ></v-data-table> -->
                          


                    
                      <div    v-for="student in classDetail.students"
                        :key="student.id">
                        
                      <v-list-item
                     
                      >
                 
                        <v-list-item-avatar>
                          <img
                                src="@/static/images/profile/profile.png"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>{{
                            student.name
                          }}</v-list-item-title>

                          <v-list-item-subtitle>{{
                            student.school
                          }}</v-list-item-subtitle>

                                    <v-list-item-subtitle class="my-2">
                                      <v-btn style="color:white; font-weight:bold" depressed rounded color="green" x-small
                                      
                                         target="_blank"
               
                                      :href="
                                        'https://api.whatsapp.com/send?phone=+62' +
                                        student.whatsapp
                                      "
                        >
                                      Contact
                                          
                                      </v-btn>

                                         <v-btn
                                         

                                          @click="openDeleteStudentDialog(student)"

                                          style="color:white; font-weight:bold" depressed rounded color="red darken-1" x-small>
                                      Delete
                                          
                                      </v-btn>


                                    </v-list-item-subtitle>

                        </v-list-item-content>


                        
                      </v-list-item>
                         <v-divider ></v-divider>


                      </div>

                      
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
  </v-row
        ></v-flex

        
      > 
      
        <v-dialog v-model="deleteModal" persistent max-width="450">
              <v-card>
                <v-card-title class="headline">
                  Delete Class 
                </v-card-title>
                <v-card-text
                  >Apakah anda yakin ingin menghapus kelas 
                  <code>{{classDetail.name }}</code>
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


            <div class="text-center">
            <v-snackbar v-model="snackbar" timeout="2000">
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


             <v-dialog v-model="classDialog" persistent max-width="500">
              <v-card>

                 <v-toolbar
              color="primary"
              dark
            > <v-card-title style="font-weight: bold" class="headline">
                  Edit Class
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
                  <form @submit.prevent="editClass">
                   
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
           
                            v-model="classPayload.name"
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
              
                            v-model="classPayload.school"
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
                        v-model="classPayload.grade_level"
         
                   
                      :items="grades"
                   
                  :error-messages="errors"
                       outlined
            
                      persistent-hint
                       item-text="grade"
                      item-value="value"
                      label="Class"
                      dense
                      

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

                        v-model="classPayload.quota"
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
                        @click="editClass"
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






   <v-dialog v-model="createMeetingModal" persistent max-width="500">
              <v-card>

                 <v-toolbar
              color="primary"
              dark
            > <v-card-title style="font-weight: bold" class="headline">
                  Create Meeting
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
                  <form @submit.prevent="createClassMeeting">
                   
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


                    


                         <v-col  cols="12">
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
          @click:minute="$refs.menu.save(meetingPayload.start_time)"
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
                                @click:minute="$refs.menu2.save(meetingPayload.finish_time)"
                              ></v-time-picker>
                            </v-menu>
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


                      <v-btn v-if="meetingPayload.date != null && meetingPayload.start_time != null && meetingPayload.finish_time != null"
                        @click="createClassMeeting"
                        :disabled="invalid"
                        color="primary"


                        class="py-4 pb-4"
                        
                      >
                        Create
                      </v-btn>

            
                   <v-btn v-if="meetingPayload.date == null || meetingPayload.start_time == null || meetingPayload.finish_time == null"
                       
                        disabled
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


      



   <v-dialog v-model="editMeetingDialog" persistent max-width="500">
              <v-card>

                 <v-toolbar
              color="primary"
              dark
            > <v-card-subtitle style="font-weight: bold; color:white" >
                  Edit Meeting {{ selectedMeeting.oldName}}
                    </v-card-subtitle>

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
                  <form @submit.prevent="createClassMeeting">
                   
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
           
                            v-model="selectedMeeting.name"
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
                         v-model="menuEdit"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
               :error-messages="errors"
            v-model="selectedMeeting.date"
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
          v-model="selectedMeeting.date"
          @input="menuEdit = false"
             :min="new Date().toISOString().substr(0, 10)"
        ></v-date-picker>
      </v-menu>
                        </validation-provider>
                      </v-col>


                    


                         <v-col  cols="12">
                <v-row>


                   <v-col cols="6">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Meeting Start Time"
                      rules="required"
                    >
                   


                    <v-menu
                    ref="menueditstart"
                    v-model="startMenuEdit"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="selectedMeeting.start_time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="selectedMeeting.start_time"
            :error-messages="errors"
            label="Start Time"
            prepend-icon="mdi-clock-time-four-outline"
            dense
            outlined
            readonly
            v-bind="attrs"
            v-on="on"
            @change="selectedMeeting.finish_time = null"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="startMenuEdit"
        format="24hr"
          v-model="selectedMeeting.start_time"
          full-width
          @click:minute="$refs.menueditstart.save(selectedMeeting.start_time)"
        ></v-time-picker>
      </v-menu>


                          </validation-provider>
                  </v-col>


                  <v-col cols="6">
                    <validation-provider

                    v-show="selectedMeeting.start_time != null"
                      v-slot="{ errors }"
                      name="Meeting Finish Time"
                      rules="required"
                    >
                          <v-menu
                              ref="menuEditFinish"
                              v-model="finishMenuEdit"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              :return-value.sync="selectedMeeting.finish_time"
                              transition="scale-transition"
                              offset-y
                              max-width="290px"
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="selectedMeeting.finish_time"
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
                                v-if="finishMenuEdit"
                                 format="24hr"
                                v-model="selectedMeeting.finish_time"
                                :min="selectedMeeting.start_time"
                                full-width
                                @click:minute="$refs.menuEditFinish.save(selectedMeeting.finish_time)"
                              ></v-time-picker>
                            </v-menu>
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


                      <v-btn v-if="selectedMeeting.date != null && selectedMeeting.start_time != null && selectedMeeting.finish_time != null"
                        @click="editClassMeeting"
                        :disabled="invalid"
                        color="primary"


                        class="py-4 pb-4"
                        
                      >
                        Edit
                      </v-btn>

            
                   <v-btn v-if="selectedMeeting.date == null || selectedMeeting.start_time == null || selectedMeeting.finish_time == null"
                       
                        disabled
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

             <v-dialog v-model="deleteMeetingDialog" persistent max-width="450">
              <v-card>
                <v-card-title class="headline">
                  Delete Meeting 
                </v-card-title>
                <v-card-text
                  >Apakah anda yakin ingin menghapus pertemuan 
                  <code> {{ selectedMeeting ? selectedMeeting.name : "" }}</code> dalam kelas <code> {{classDetail.name}}</code>
                  ?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="grey darken-1"
                    text
                    @click="closeDialog"
                  >
                    Batal
                  </v-btn>
                  <v-btn color="red darken-1" text @click="deleteClassMeeting">
                   Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>


   <v-dialog v-model="deleteStudentDialog" persistent max-width="450">
              <v-card>
                <v-card-title class="headline">
                  Unenroll Student 
                </v-card-title>
                <v-card-text
                  >Apakah anda yakin ingin menghapus siswa  
                  <code> {{ selectedStudent ? selectedStudent.name : "" }}</code> dari kelas <code> {{classDetail.name}}</code>
                  ?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="grey darken-1"
                    text
                    @click="closeDialog"
                  >
                    Batal
                  </v-btn>
                  <v-btn color="red darken-1" text @click="deleteStudentClass">
                   Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>



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



      </v-container

      
    ></v-layout
  >
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
      title: "SANEDU | " + this.$store.state.teacher.classDetail.name,
    };
  },

  middleware: ["auth-teacher"],
  layout: "home",


  components: {
    ValidationProvider,
    ValidationObserver,
  },


  async asyncData({ store, params }) {
    // console.log(params);

    await Promise.all([
      store.dispatch("teacher/getClassDetailData", params.id),
    ]);
    return;
  },

  computed: {
    ...mapState("teacher", {
      classDetail: (state) => state.classDetail,
    }),


    // set(){

    //    this.classStudents = this.$store.state.teacher.classDetail.students;
    // this.classMeetingsSorted = this.$store.state.teacher.classDetail.meeting_schedules.sort(
    //   function (a, b) {
    //     return b.id - a.id;
    //   }
    // );

    // }

  },

  data() {
    return {
      classparam: this.$store.state.teacher.classDetail,
      breadcrumbs: [
        {
          text: "Sanclass",
          disabled: false,
          href: "/teacher/classes",
        },
        {
          text: this.$store.state.teacher.classDetail.name,
          disabled: true,
          href: `/teacher/classes/class/${this.$store.state.teacher.classDetail.id}`,
        },
      ],
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
      coba: new Date(),
      now: null,
      search: '',
      isLoading: false,
      text: null,
      temp: null,
      tab: null,
      classMeetingsSorted: null,
      classStudents: null,
      snackbar: false,
      showMeetings: true,
      showStudents: false,
      deleteModal: false,
      createMeetingModal: false,

      isLoaded: false,
      classPayload: {
            id: this.$store.state.teacher.classDetail.id,
            name: this.$store.state.teacher.classDetail.name,
            grade_level: this.$store.state.teacher.classDetail.grade_level,
            school: this.$store.state.teacher.classDetail.school,
            quota: this.$store.state.teacher.classDetail.quota
      },
      meetingPayload:{
          id: this.$store.state.teacher.classDetail.id,
          name: null,
          date: null,
          start_time: null,
          finish_time: null
      },
      classDialog: false,
        menu: false,
        menuEdit: false,
        startMenuEdit: false,
        finishMenuEdit: false,
        startMenu: false,
        finishMenu: false,
      selectedMeeting: {
          class_id: this.$store.state.teacher.classDetail.id,
          id: null,
          name: null,
          date: null,
          start_time: null,
          finish_time: null,
          oldName: null,
        },

        editMeetingDialog: false,
        deleteMeetingDialog: false,
        deleteStudentDialog: false,

      selectedStudent:{
          class_id: this.$store.state.teacher.classDetail.id,
          id: null,
          name: null,

      }
        

    };
  },

  
  mounted() {
    this.isLoaded = true;
    this.now = this.coba.setHours(0, 0, 0, 0);

    // console.log(this.$store.state.teacher.classDetail)

   

    // console.log(this.classMeetingsSorted)
  },

  methods: {
    ...mapActions("teacher", 
    ["getClassDetailData", "deleteClass", "editClassDetailData", 'createMeeting', 'editMeeting', 'deleteMeeting', 'deleteStudent'],),
    convert(date) {
      var full = new Date(date);

      return full.setHours(0, 0, 0, 0);
    },

    closeDialog(){

        // this.selectedMeeting.id = null,
        // this.selectedMeeting.name = null,
        //       this.selectedMeeting.data = null,
        // this.selectedMeeting.start_time = null,
        //         this.selectedMeeting.finish_time = null,
        
        this.classDialog = false;
        this.createMeetingModal = false;
        this.editMeetingDialog = false;
        this.deleteMeetingDialog = false;
        this.deleteStudentDialog= false;

    },


    students() {
      this.showStudents = true;
      this.showMeetings = false;
    },
    meetings() {
      this.showMeetings = true;
      this.showStudents = false;
    },


    openEditMeetingDialog(item){

      this.editMeetingDialog = true;
      this.selectedMeeting.id = item.id;
      this.selectedMeeting.name = item.name;
      this.selectedMeeting.date = item.date;
      this.selectedMeeting.start_time = item.start_time;
      this.selectedMeeting.finish_time = item.finish_time;
      this.selectedMeeting.oldName = item.name;

    },

    openDeleteMeetingDialog(item){

      this.selectedMeeting.id = item.id;
      this.selectedMeeting.name = item.name;
      this.selectedMeeting.date = item.date;
      this.selectedMeeting.start_time = item.start_time;
      this.selectedMeeting.finish_time = item.finish_time;
      this.selectedMeeting.oldName = item.name;
      this.deleteMeetingDialog = true;

    },

    openDeleteStudentDialog(item){

      this.selectedStudent.id = item.id;
      this.selectedStudent.name = item.name;
      this.deleteStudentDialog = true;

    },



    deleteClasses() {


  this.$swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It !'
          }).then((result) => {
            if (result.isConfirmed) {

                 this.deleteClass(this.classDetail.id)
                  .then((response) => {
                    this.deleteModal = false;
                    this.$swal({
                      type: 'success',
                      icon: 'success',
                    position: 'top-end',
                      
                      toast: true,
                       timer: 3000,
                        showConfirmButton: false,
                      title: 'Class Deleted Successfuly'
                    })
                    this.snackbar = true;
                    this.$router.push('/teacher/classes')
                  })
                  .catch((error) => {
                    this.deleteModal = false;
                    this.text = error;
                    this.snackbar = true;
                  });

                        
            }else{

                this.deleteModal = false

            }
          })



      

    },


    editClass(){

      this.isLoading = true;
      this.editClassDetailData(this.classPayload)
        .then((response) => {
          this.closeDialog();

          this.isLoading = false;
          this.text = "Kelas Berhasil Diedit !";
          this.snackbar = true;

        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
     
        });


    },
    createClassMeeting(){

      this.isLoading = true;
      this.createMeeting(this.meetingPayload)
        .then((response) => {
          this.closeDialog();
          this.isLoading = false;
          this.text = "Meeting Berhasil Dibuat";
          this.snackbar = true;

        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
     
        });
    },
    editClassMeeting(){

    this.isLoading = true;

    this.editMeeting(this.selectedMeeting)
        .then((response) => {

                  this.selectedMeeting.id = null,
        this.selectedMeeting.name = null,
              this.selectedMeeting.date = null,
        this.selectedMeeting.start_time = null,
                this.selectedMeeting.finish_time = null,
        

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

      deleteClassMeeting(){

    this.isLoading = true;

    this.deleteMeeting(this.selectedMeeting)
        .then((response) => {
                  this.selectedMeeting.id = null,
        this.selectedMeeting.name = null,
              this.selectedMeeting.date = null,
        this.selectedMeeting.start_time = null,
                this.selectedMeeting.finish_time = null,
        

          this.closeDialog();
          this.isLoading = false;
          this.text = "Meeting Berhasil Dihapus";
          this.snackbar = true;

        })
        .catch((error) => {
          this.isLoading = false;
          this.text = error;
          this.snackbar = true;
     
        });
    },



     deleteStudentClass(){

    this.isLoading = true;

    this.deleteStudent(this.selectedStudent)
        .then((response) => {
                  this.selectedMeeting.id = null,
        this.selectedMeeting.name = null,
              this.selectedMeeting.data = null,
        this.selectedMeeting.start_time = null,
                this.selectedMeeting.finish_time = null,
        

          this.closeDialog();
          this.isLoading = false;
          this.text = "Siswa Berhasil Dihapus Dari Kelas";
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
