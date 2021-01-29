<template>
<v-app>
    <div class="container-fluid">

      <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                         <NuxtLink to="/">Halaman Beranda</NuxtLink>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Your Username..." v-model="auth.username">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" v-model="auth.password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div> 
                                        </div>
                                        <a href="javascript:void(0)" @click="login" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr>
                                        <!-- <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a> -->
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="#">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="#">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

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

    </div>
    <notifications group="foo" />

</v-app>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
    auth: false,
    data(){ 
        return {
            auth:{
                username: null,
                password: null
            },

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
                //  this.$notify({
                //         'group': 'foo',
                //         'title': 'Kontol-kontol Anjing',
                //         'text': 'Terbuat Dari Nasi',

                //     }),
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

                    //   this.$notify({
                    //     'group': 'foo',
                    //     'title': 'Kontol-kontol Anjing',
                    //     'text': 'Terbuat Dari Nasi',

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