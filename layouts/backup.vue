<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
            style=" text-decoration: none;"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    
      
      <v-toolbar-title style="font-weight: bold; color:#42A5F5;" > {{title}}<sup style="font-weight: 300; color:grey;" >ID</sup> </v-toolbar-title>
      <v-spacer />

       <div class="pr-2">
      <v-btn
              icon
              color="grey "
              
              

            >
              <v-icon size="25">mdi-wallet-outline</v-icon>
             
            </v-btn>
            <span
                      class="font-weight-medium"
                      style="text-size:0.75rem"
                      caption
                      
                    >Rp. 100.000</span>
            
  </div>

     <div class="pr-2">
      <v-btn
              icon
              color="grey "
              
            >
              <v-icon size="25">mdi-bell-ring-outline</v-icon>
            </v-btn>
            
  </div>

    <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }" >
          <div class="pr-3">
          <v-btn
          
            icon
            large
            v-on="on"
            margin
     
          >
            <v-avatar
              color="grey"
              size="38"
            >
               <img
                  :src="user.photo"
                  alt="John"
                  class="rounded-circle"
                >
            </v-avatar>
          </v-btn>
          </div>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
          
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <img
                  :src="user.photo"
                  alt="John"
                >
              </v-avatar>
              <h6>{{ user.fullName }}</h6>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
               @click="logout"
                depressed
                rounded
                text
              >
                Logout
              </v-btn>
            </div>

            
          </v-list-item-content>
        </v-card>
      </v-menu>


      
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />

  
      </v-container>
    </v-main>
   
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>

// import Sidebar from '@/components/layouts/Sidebar.vue'
// import Header from '@/components/layouts/Header.vue'
import { mapState, mapMutations} from 'vuex'

export default {
    data(){
        return {
                 clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/student'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Sanclass',
          to: '/student/classes'
        },
        {
          icon: 'mdi-rocket',
          title: 'Dashboard Biasa',
          to: '/dashboard'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SANEDU',
      user: {
        photo: this.$auth.$state.user.profile_image,
        fullName: this.$auth.$state.user.name,
        email: this.$auth.$state.user.email,
      },

        }


    },
  //   mounted(){

  //       console.log(this.$auth.$state.user);
  //   // this.isLoaded = true;
  // },
    computed:{
        ...mapState(['isAuth']),

    },
     methods:{

        ...mapMutations(['SET_IS_AUTH','SET_API_TOKEN']),
      async  logout(){

         await this.$auth.logout();
         this.SET_IS_AUTH(false);
        this.SET_API_TOKEN(null);

          this.$router.push('/');
        }

    }


  // components:{
  //   'app-sidebar': Sidebar,
  //   'app-header': Header,


  // }

};  
</script>