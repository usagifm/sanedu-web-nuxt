
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

   <v-col cols="12">
     <a  style="font-weight:bolder; font-size:22px; color: #424242"  class="my-1">
Register
     </a>

   </v-col>
        <!-- <v-col  cols="7">

             <img :src="require('@/static/images/landingpage/logolanding.png')" alt="Logo" />

        </v-col> -->

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
                        name="Register As"
                        rules="required"
                >
                    <v-select
                      label="Register As"
                      :error-messages="errors"
                      :items="option"
                       outlined
                      persistent-hint
                         item-text="text"
                      item-value="value"
                      v-model="data"
                      
                     
                    ></v-select>


                       </validation-provider>
                              </v-col>
                          

                            </v-col>
                          </v-card-text>

                           <v-divider></v-divider>

                            <nuxt-link  to="/login">

                            <a
                            class="text-left ml-4"
                          style="font-size: 14px; color: #2196F3; font-weight:bold; "
                              
                              >
                                Sudah punya akun ? Login disini !
                            </a>
                            </nuxt-link>


                          <v-card-actions>

                            
           
                           

                            <v-spacer></v-spacer>


                          
                            <v-btn

                            class="pa-5"
                                color="primary"
                                @click="proceed"
                                :disabled="invalid"
                                rounded
                                style="font-weight:bold;"
                              >
                            NEXT
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

      option: [
        { text: "Student", value: 0 },
        { text: "Teacher", value: 1 },
      ],
      data: 0,



           

        }
 

    },

    mounted() {
        if(this.$auth.loggedIn){


          if(this.$auth.$state.user.is_teacher == 0){

            this.$router.push('/student');

          }


          if(this.$auth.$state.user.is_teacher == 1){

            this.$router.push('/teacher');

          }

        }

   

    },
    methods:{
       
       proceed(){


         if(this.data == 0){

               this.$router.push('/register/student');


         }else if (this.data == 1){

                this.$router.push('/register/teacher');


         }



       }

    }
}
</script>