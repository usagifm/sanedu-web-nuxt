<template>
  <div id="wrapper">
    <!-- <app-sidebar v-if="isAuth"></app-sidebar> -->
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">

        <app-header v-if="isAuth"></app-header>
          <app-landingheader v-if="!isAuth"></app-landingheader>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>


import Header from '@/components/layouts/Header.vue'
import LandingHeader from '@/components/layouts/LandingHeader.vue'
import { mapState} from 'vuex'
export default {
    data(){
        return {
            // isAuth: true

        }


    },
    computed:{
        ...mapState(['isAuth']),

    },


  components:{
    'app-landingheader': LandingHeader,
    'app-header': Header,


  }

};  
</script>