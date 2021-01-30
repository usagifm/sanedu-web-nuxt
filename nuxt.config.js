export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  render: {
    csp: true
  },
  head: {
    title: 'sanedu-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/compressorjs/1.0.7/compressor.min.js"},
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" },
      { src: "/vendor/jquery/jquery.min.js" },
      { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "/vendor/jquery-easing/jquery.easing.min.js" },
      { src: "/js/sb-admin-2.min.js" },
      { src: "/landingpage/lib/jquery/jquery.min.js"},
      { src: "/landingpage/lib/jquery/jquery-migrate.min.js"},
      { src: "/landingpage/lib/bootstrap/js/bootstrap.bundle.min.js"},
      { src: "/landingpage/lib/easing/easing.min.js"},
      { src: "/landingpage/lib/mobile-nav/mobile-nav.js"},
      { src: "/landingpage/lib/wow/wow.min.js"},
      { src: "/landingpage/lib/waypoints/waypoints.min.js"},
      { src: "/landingpage/lib/counterup/counterup.min.js"},
      { src: "/landingpage/lib/owlcarousel/owl.carousel.min.js"},
      { src: "/landingpage/lib/lightbox/js/lightbox.min.js"},
      { src: "/landingpage/contactform/contactform.js"},
      


  
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/vendor/fontawesome-free/css/all.min.css',
    '@/assets/css/landingpage/lib/font-awesome/css/font-awesome.min.css',
    '@/assets/css/landingpage/lib/animate/animate.min.css',
    '@/assets/css/landingpage/lib/ionicons/css/ionicons.min.css',
    '@/assets/css/landingpage/lib/owlcarousel/assets/owl.carousel.min.css',
    '@/assets/css/landingpage/lib/lightbox/css/lightbox.min.css',
    '@/assets/css/landingpage/style.css',
    '@/assets/css/sb-admin-2.min.css',
    '@/assets/css/wave.css',
    'vuesax/dist/vuesax.css',

  ],




  loading: {
    color: '#42A5F5'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src:'plugins/vue-notification.js' , ssr:false},
    {src:'plugins/vuesax.js'},
    '@/plugins/axios.js',
    // '@plugins/vuetify'

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'

    // With options
  

  ],
  moment: {
    defaultTimezone: 'Asia/Jakarta'
  },

  

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
    'nuxt-material-design-icons',
    'vue-sweetalert2/nuxt'
    

 
  ],



  toast: {
    position: 'bottom-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},

  auth:{
    plugins: [ '@/plugins/axios.js'],

    strategies:{
      local:{
          endpoints: {
              login: { url: '/login', method: 'post', propertyName: 'access_token'},
              logout: false,
              user: { url: '/profile', method: 'get',propertyName: '' },
          },
          tokenRequired: true,
          tokenType: 'Bearer'

      }

    }

  },



  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "https://api.sanedu.id/"

  },
  router:{
    middleware: ['auth']
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
   
    transpile: [
      'vee-validate'
    ],
    vendor: ['external_library']
  }

  // extend(config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }```
}
