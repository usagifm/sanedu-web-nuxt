
<template>
<v-app>


 <section style="height: 100%">
      <v-container fill-height>
        <v-row>
          <v-col cols="12">
            <v-card
              style="z-index: 50; position: relative"
              class="mx-auto"
              max-width="400"
             
            >

            <v-toolbar
              color="white"
              light

             
            >
            
            <v-col cols="12">
              <v-row>

   <v-col cols="5">
     <h5  class="my-1" style="font-weight:bolder; color: #424242">
Sign In
     </h5>

   </v-col>
        <v-col  cols="7">

             <img :src="require('@/static/images/landingpage/logolanding.png')" alt="Logo" />

        </v-col>

              </v-row>


            </v-col>

            </v-toolbar>
   
          
            
               <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="login">
                      
                          <v-card-text>
                            <v-col cols="12">
                      

                              <v-col cols="12">
                                <validation-provider
                                  v-slot="{ errors }"
                                  name="Username"
                                  rules="required"
                                >
                                  <v-text-field
                                    :counter="30"
                                    :error-messages="errors"
                                    label="Username"
                                    dense
                                  v-model="auth.username"
                                    outlined
                                  ></v-text-field>
                                </validation-provider>
                              </v-col>

                              <v-col cols="12">
                              
                                    <validation-provider
                                      v-slot="{ errors }"
                                      name="Password"
                                      rules="required"
                                    >
                                      <v-text-field
                                        ref="password"
                                        :counter="20"
                                        name="password"
                                        :error-messages="errors"
                                        outlined
                                        v-model="auth.password"
                                        dense
                                        :append-icon="
                                          show2 ? 'mdi-eye' : 'mdi-eye-off'
                                        "
                                        @click:append="show2 = !show2"
                                        :type="show2 ? 'text' : 'password'"
                                        hint="Your Password"
                                        required
                                        label="Password"
                                      ></v-text-field>
                                    </validation-provider>
                                  </v-col>

                          
                            </v-col>
                          </v-card-text>

                           <v-divider></v-divider>

                            <nuxt-link  to="/register">

                            <a
                            class="ml-7"
                          style="font-size: 14px; color: #2196F3; margin:auto"
                              
                              >
                            Or Create an Account !
                            </a>
                            </nuxt-link>


                          <v-card-actions>

                            
           
                           

                            <v-spacer></v-spacer>


                          
                            <v-btn

                            class="pa-5"
                                color="primary"
                                @click="login"
                                :disabled="invalid"
                                rounded
                              >
                            SIGN IN
                              </v-btn>

                      
                            


                          </v-card-actions>
                        </form>
              </validation-observer>

              
        
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="wave wave1"></div>

      <div class="wave wave2"></div>

      <div class="wave wave3"></div>

      <div class="wave wave4"></div>
    </section>




     <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <div class="text-center">
    <!-- <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading
    </v-btn> -->
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











  <div class="text-center"  v-if="isLoading==true">
    <!-- <v-btn
      color="deep-purple accent-4"
      class="white--text"
      @click="overlay = !overlay"
    >
      Launch Application
      <v-icon right>
        mdi-open-in-new
      </v-icon>
    </v-btn> -->

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>



        <div class="text-center">
 
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
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

    
    <notifications group="foo" />

</v-app>
</template>


<script>
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
import { mapMutations } from 'vuex'

export default {
     auth: false,
  layout: "empty",


      components: {
    ValidationProvider,
    ValidationObserver,
  },


    data(){ 
        return {
            auth:{
                username: null,
                password: null
            },
              show1: false,
      show2: false,
      show3: false,

            snackbar: false,
            text: "",
            timeout: 2000,
            dialog: false,
            isLoading: false
        }
 

    },

    mounted() {

        if(this.$auth.loggedIn){
            this.$router.push('/student');


        }


    },
    methods:{
        ...mapMutations(['SET_IS_AUTH', 'SET_API_TOKEN']),

        login(){
    
              this.isLoading = true,
                 
                this.$auth.loginWith('local', {
                    
                    data:{
                        username: this.auth.username,
                        password: this.auth.password
                    },
            
                }).then((response) => {
                    // this.$toast.show('Logging in...')
                    console.log(response.data);
                    this.SET_IS_AUTH(true);
                    // this.SET_API_TOKEN(response.data.access_token);
                    this.$auth.setUser(response.data);
                    this.$auth.setUserToken(response.data.access_token);
                    this.SET_API_TOKEN(this.$auth.$storage._state["_token.local"]);
                    //  this.$auth.fetchUser();
                    console.log(this.$auth);
                    this.isLoading= false;
                  
              
                   
                    this.$router.push('/student');
                   
                    // console.log("Test !");
                    // console.log(this.$auth.loggedIn);
                    // this.$toast.success('Successfully authenticated')

                    // this.$auth.setUserToken(response.data.access_token)
                    // .then(() => this.$toast.success('User set!'))

                }).catch((error) =>{
                    // this.isLoading = false;
                    // })
                    this.text = error.response.data.message;
                    this.snackbar = true;
                    this.isLoading= false
                    // this.isLoaded = true;
                })

             
        }

    }
}
</script>