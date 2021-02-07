
<template>
  <v-app>
    <navigation :color="color" :flat="flat" />

    
    <v-main class="pt-0">
    
    
        <nuxt />
        
    </v-main>
    <!-- <v-scale-transition>
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
     -->
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
      },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  mounted() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
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

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
