
<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<template>
  <v-app>
 <v-navigation-drawer
      dark
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>


            <img src="https://res.cloudinary.com/douzspxoy/image/upload/v1626922067/images/landingpage/logo_xsbxxy.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">SANEDU</v-list-item-title>
            <v-list-item-subtitle>Webiste</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item

      

          v-for="([icon, text, href], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(href)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title   style="font-weight: bold" class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <nuxt-link to="/login">
               <v-list-item
        >
          <v-list-item-icon  class="justify-center">
            <v-icon>mdi-account-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title   style="font-weight: bold" class="subtitile-1">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </nuxt-link>


    <nuxt-link to="/register">

               <v-list-item

        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  style="font-weight: bold" class="subtitile-1">Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

    </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      light
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="https://res.cloudinary.com/douzspxoy/image/upload/v1626922296/img/logolanding_gtxprc.png" max-width="300px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div  v-else>

          <!-- <li class="active"><a href="#intro">Home</a></li>
                 <li><a href="#why-us">Tentang Kami</a></li>
                 <li><a >Download</a></li>
                 <li><a href="#portfolio">Event</a></li>
                 <li><a href="#team">Team</a></li> -->

                 
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#intro">
          <span  style="font-weight: bold" class="mr-2">Home</span>
        </v-btn>
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#why-us">
          <span  style="font-weight: bold" class="mr-2">About Us</span>
        </v-btn>
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#features" >
          <span style="font-weight: bold" class="mr-2">Download</span>
        </v-btn>
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#portfolio">
          <span  style="font-weight: bold" class="mr-2 color: #263238;">Event</span>
        </v-btn>
                <v-btn 
        style="text-decoration: none; color: #263238;"  text href="#team">
          <span  style="font-weight: bold" class="mr-2">Team</span>
        </v-btn>
            <v-btn 
        style="text-decoration: none; color: #263238;" text href="#footer">
          <span  style="font-weight: bold" class="mr-2">Contact Us</span>
        </v-btn>
           <!-- <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'login',
                          
                        }"
                      > -->


                         <nuxt-link style="text-decoration: none" to="/login">

       
        <v-btn 


        style="text-decoration: none; color: #263238;" rounded outlined text >
          <span  style="font-weight: bold">Login</span>
        </v-btn>
                         </nuxt-link>
           <!-- </nuxt-link> -->

                                <nuxt-link style="text-decoration: none" to="/register">
            <v-btn 
        style="text-decoration: none; color: #263238;" rounded outlined text >
          <span  style="font-weight: bold">Register</span>
        </v-btn>
                                </nuxt-link>
      </div>
    </v-app-bar>


    
    <v-main class="pt-0">
    
    
        <nuxt />
        
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    
  </v-app>
</template>




<script>
import navigation from "@/components/Navigation";
import foote from "@/components/Footer";

import { mapState} from 'vuex'
export default {

  components: {
    navigation,
    foote,

  },
  


      computed:{
        ...mapState(['isAuth']),

        load(){


              if (process.browser){
      // console.log(window.innerWidth, window.innerHeight);
    }
        }
      },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#intro"],
      ["mdi-information-outline", "About Us", "#why-us"],
      ["mdi-download-box-outline", "Download", "#features"],
      ["mdi-currency-usd", "Event", "#portfolio"],
      ["mdi-email-outline", "Team", "#team"],
      ["mdi-whatsapp", "Contact Us", "#footer"]
    ]

  }),

  mounted() {

        if (process.browser){
      // console.log(window.innerWidth, window.innerHeight);
    }
    
        this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });


    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }



  },



    created(){
    if (process.browser){
      // console.log(window.innerWidth, window.innerHeight);
    }
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    onResize() {
      this.isXs = window.innerWidth < 850;
    },

    
  },
  
    watch: {
    fab(value) {
      if (value) {
        this.color = "white";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },


};
</script>
