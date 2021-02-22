<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <template v-if="user.photo != null">
              <img :src="user.photo" />
            </template>

            <template v-if="user.photo == null">
              <img src="@/static/images/profile/profile.png" />
            </template>
          </v-list-item-avatar>

     <div      v-if="user.is_teacher == 0">
          <v-list-item-content>
            <v-list-item-subtitle style="font-weight: bold">{{
              this.$auth.$state.user.name
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>San Student</v-list-item-subtitle>
          </v-list-item-content>
     </div>

     <div      v-if="user.is_teacher == 1">
           <v-list-item-content>
            <v-list-item-subtitle style="font-weight: bold">{{
              this.$auth.$state.user.name
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>San Teacher</v-list-item-subtitle>
          </v-list-item-content>
     </div>

        </v-list-item>

        <div      v-if="user.is_teacher == 0">
        <v-list-item
       

          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          style="text-decoration: none"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="color: #455A64" class="font-weight-bold" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </div>


  <div      v-if="user.is_teacher == 1">
        <v-list-item
          v-for="(item, i) in itemsTeacher"
          :key="i"
          :to="item.to"
          router
          exact
          style="text-decoration: none"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="color: #455A64" class="font-weight-bold" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  </div>


      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" extension-height="0" overflow fixed app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title style="font-weight: bold; color: #42a5f5">
        {{ title }}<sup style="font-weight: 300; color: grey">ID</sup>
      </v-toolbar-title>

      <v-spacer />

      <div class="pr-2">
        <v-btn icon color="grey ">
          <v-icon size="25">mdi-wallet-outline</v-icon>
        </v-btn>
      </div>

      <div class="pr-2">
        <v-btn icon color="grey ">
          <v-icon size="25">mdi-bell-ring-outline</v-icon>
        </v-btn>
      </div>

      <v-menu bottom min-width="300px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <div class="pr-3">
            <v-btn icon large v-on="on" margin>
              <v-avatar color="grey" size="38">
                <template v-if="user.photo == null">
                  <img
                    color="grey"
                    src="@/static/images/profile/profile.png"
                    class="rounded-circle"
                  />
                </template>


                <template v-if="user.photo != null">
                  <img :src="user.photo" alt="John" class="rounded-circle" />
                </template>
              </v-avatar>
            </v-btn>
          </div>
        </template>
        <v-card >
                    <v-list-item-content  class="pa-1">

                        <v-btn   height="40px" style="color: #1e88e5; font-weight:bolder" small depressed color="blue lighten-5"  block>
                  
  San Education
  </v-btn>
                    </v-list-item-content>
            
          <v-list-item-content  class="justify-center">

            <div class="mx-auto text-center">

              
              
               <template v-if="user.photo != null">
              <v-avatar size="80" color="brown">
                <img :src="user.photo" alt="John" />
              </v-avatar>
              </template>

                    <template v-if="user.photo == null">
              <v-avatar size="80" color="brown">
                <img   src="@/static/images/profile/profile.png" alt="John" />
              </v-avatar>
              </template>
              <h6 class="mt-4 " style="font-weight:bold">{{ user.fullName.toUpperCase() }}</h6>
              <h6 >
                {{ user.email }}
              </h6>
              <v-divider class="my-3"></v-divider>
                   <div      v-if="user.is_teacher == 0">
                <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'student-profile',
                          
                        }"
                      >
              <v-btn  depressed rounded text style="border: 0.1px solid #CFD8DC; font-weight:bold;"> Edit Your Profile </v-btn>
                </nuxt-link>
                   </div>


                <div      v-if="user.is_teacher == 1">
                <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'teacher-profile',
                          
                        }"
                      >
              <v-btn  depressed rounded text style="border: 0.1px solid #CFD8DC; font-weight:bold;"> Edit Your Profile </v-btn>
                </nuxt-link>
                   </div>


              <v-divider class="my-3"></v-divider>
              <v-btn @click="logout" depressed rounded text style="border: 0.1px solid #CFD8DC; font-weight:bold;"> Logout </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      
    </v-app-bar>

    <v-container fluid fill-height class="grey lighten-5">
      <v-main>
        <nuxt />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
// import Sidebar from '@/components/layouts/Sidebar.vue'
// import Header from '@/components/layouts/Header.vue'
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/student",

        },
        {
          icon: "mdi-account-circle",
          title: "Profile",
          to: "/student/profile",
        },
        {
          icon: "mdi-google-classroom",
          title: "Sanclass",
          to: "/student/classes",
        },
        {
          icon: "mdi-calendar-text",
          title: "San Project",
          // to: "/dashboard",
          
        },
        {
          icon: "mdi-calculator-variant",
          title: "San Hitung",
          // to: "/dashboard",
        },
      ],
       itemsTeacher: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/teacher",

        },
        {
          icon: "mdi-account-circle",
          title: "Profile",
          to: "/teacher/profile",
        },
        {
          icon: "mdi-google-classroom",
          title: "Sanclass",
          to: "/teacher/classes",
        },
        {
          icon: "mdi-calendar-text",
          title: "San Project",
          // to: "/dashboard",
          
        },
        {
          icon: "mdi-calculator-variant",
          title: "San Hitung",
          // to: "/dashboard",
        },
      ],
      miniVariant: false,
      title: "SANEDU",
      user: {
        is_teacher: this.$auth.$state.user.is_teacher,
        photo: this.$auth.$state.user.profile_image,
        fullName: this.$auth.$state.user.name,
        email: this.$auth.$state.user.email,
      },
    };
  },
  mounted() {
    this.drawer = false;
  },
  computed: {
    ...mapState(["isAuth"]),
  },
  methods: {
    ...mapMutations(["SET_IS_AUTH", "SET_API_TOKEN"]),
    async logout() {
      await this.$auth.logout();
      this.SET_IS_AUTH(false);
      this.SET_API_TOKEN(null);

      this.$router.push("/");
    },
  },

  // components:{
  //   'app-sidebar': Sidebar,
  //   'app-header': Header,

  // }
};
</script>