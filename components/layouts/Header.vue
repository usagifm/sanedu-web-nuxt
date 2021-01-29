<template>
<v-app>
  <v-card
    class="pa-4"
    flat
    height="300px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
    <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

    <a @click="logout">
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </a>
    </v-toolbar>
  </v-card>
</v-app>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    methods:{

        ...mapMutations(['SET_IS_AUTH','SET_API_TOKEN']),
      async  logout(){

         await this.$auth.logout();
         this.SET_IS_AUTH(false);
        this.SET_API_TOKEN(null);

          this.$router.push('/');
        }

    }
}
</script>