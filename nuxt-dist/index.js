import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_71ffa9ca from 'nuxt_plugin_plugin_71ffa9ca' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_8d9cf840 from 'nuxt_plugin_bootstrapvue_8d9cf840' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_plugin_642566b3 from 'nuxt_plugin_plugin_642566b3' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_vuesweetalert2_1d961f08 from 'nuxt_plugin_vuesweetalert2_1d961f08' // Source: ./vue-sweetalert2.js (mode: 'client')
import nuxt_plugin_toast_3bbe3360 from 'nuxt_plugin_toast_3bbe3360' // Source: ./toast.js (mode: 'client')
import nuxt_plugin_axios_6f8de6b1 from 'nuxt_plugin_axios_6f8de6b1' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_moment_de4afdf2 from 'nuxt_plugin_moment_de4afdf2' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_vuenotification_12231f80 from 'nuxt_plugin_vuenotification_12231f80' // Source: ../plugins/vue-notification.js (mode: 'client')
import nuxt_plugin_vuesax_1cceddee from 'nuxt_plugin_vuesax_1cceddee' // Source: ../plugins/vuesax.js (mode: 'all')
import nuxt_plugin_axios_397e53b5 from 'nuxt_plugin_axios_397e53b5' // Source: ../plugins/axios.js (mode: 'all')
import nuxt_plugin_plugin_0b0129a6 from 'nuxt_plugin_plugin_0b0129a6' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"SANEDU","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Generasi cerdas bersama Sanedu. SANEDU adalah aplikasi pendampingan belajar online pertama yang mengusung konsep multiple system dan konseling."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Flandingpage\u002Flogo.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Open+Sans:wght@300;400;600&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Quicksand:wght@700&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Quicksand:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmoment.js\u002F2.29.1\u002Fmoment.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fcompressorjs\u002F1.0.7\u002Fcompressor.min.js"},{"src":"https:\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.4.1\u002Fjquery.min.js"},{"src":"\u002Fvendor\u002Fjquery\u002Fjquery.min.js"},{"src":"\u002Fvendor\u002Fbootstrap\u002Fjs\u002Fbootstrap.bundle.min.js"},{"src":"\u002Fvendor\u002Fjquery-easing\u002Fjquery.easing.min.js"},{"src":"\u002Fjs\u002Fsb-admin-2.min.js"},{"src":"\u002Fjquery.min.js"},{"src":"\u002Fjquery-migrate.min.js"},{"src":"\u002Fbootstrap.bundle.min.js"},{"src":"\u002Feasing.min.js"},{"src":"\u002Fmobile-nav.js"},{"src":"\u002Fwow.min.js"},{"src":"\u002Fwow.js"},{"src":"\u002Fmain.js"},{"src":"\u002Fwaypoints.min.js"},{"src":"\u002Fcounterup.min.js"},{"src":"\u002Fowl.carousel.min.js"},{"src":"\u002Fisotope.pkgd.min.js"},{"src":"\u002Fowl.carousel.js"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_71ffa9ca === 'function') {
    await nuxt_plugin_plugin_71ffa9ca(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_8d9cf840 === 'function') {
    await nuxt_plugin_bootstrapvue_8d9cf840(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_642566b3 === 'function') {
    await nuxt_plugin_plugin_642566b3(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_1d961f08 === 'function') {
    await nuxt_plugin_vuesweetalert2_1d961f08(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_3bbe3360 === 'function') {
    await nuxt_plugin_toast_3bbe3360(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_6f8de6b1 === 'function') {
    await nuxt_plugin_axios_6f8de6b1(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_de4afdf2 === 'function') {
    await nuxt_plugin_moment_de4afdf2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuenotification_12231f80 === 'function') {
    await nuxt_plugin_vuenotification_12231f80(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesax_1cceddee === 'function') {
    await nuxt_plugin_vuesax_1cceddee(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_397e53b5 === 'function') {
    await nuxt_plugin_axios_397e53b5(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_0b0129a6 === 'function') {
    await nuxt_plugin_plugin_0b0129a6(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
