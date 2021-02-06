<template>
  <div>
    <v-navigation-drawer
      dark
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="require('~/assets/img/logo.png')" alt="Logo" />
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
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        <v-img :src="require('@/assets/img/logolanding.png')" max-width="300px" />
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
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#why-us">
          <span class="mr-2">About Us</span>
        </v-btn>
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#features" >
          <span class="mr-2">Download</span>
        </v-btn>
        <v-btn 
        style="text-decoration: none; color: #263238;" text href="#portfolio">
          <span class="mr-2 color: #263238;">Event</span>
        </v-btn>
                <v-btn 
        style="text-decoration: none; color: #263238;"  text href="#team">
          <span class="mr-2">Team</span>
        </v-btn>
            <v-btn 
        style="text-decoration: none; color: #263238;" text href="#footer">
          <span class="mr-2">Contact Us</span>
        </v-btn>
           <!-- <nuxt-link
                        style="text-decoration: none"
                        :to="{
                          name: 'login',
                          
                        }"
                      > -->
        <v-btn 

         href="https://nuxt.sanedu.id/login"
        style="text-decoration: none; color: #263238;" rounded outlined text >
          <span class="mr-2">Login</span>
        </v-btn>
           <!-- </nuxt-link> -->
            <v-btn 
        style="text-decoration: none; color: #263238;" rounded outlined text >
          <span class="mr-2">Register</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#intro"],
      ["mdi-information-outline", "About Us", "#why-us"],
      ["mdi-download-box-outline", "Download", "#features"],
      ["mdi-currency-usd", "Event", "#portfolio"],
      ["mdi-email-outline", "Team", "#team"],
      ["mdi-whatsapp", "Contact Us", "#footer"],


      
    ],

  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
