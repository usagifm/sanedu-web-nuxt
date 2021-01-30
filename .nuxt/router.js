import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38003676 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _a01a1eea = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _2e1a6f1d = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _56119174 = () => interopDefault(import('../pages/student/classes/index.vue' /* webpackChunkName: "pages/student/classes/index" */))
const _2bd5c992 = () => interopDefault(import('../pages/student/profile/index.vue' /* webpackChunkName: "pages/student/profile/index" */))
const _20ef6b72 = () => interopDefault(import('../pages/student/classes/taro dulu.vue' /* webpackChunkName: "pages/student/classes/taro dulu" */))
const _296b5e88 = () => interopDefault(import('../pages/student/classes/class/_id/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/index" */))
const _57e35830 = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/index" */))
const _6bc2f072 = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/quiz/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/quiz/index" */))
const _2674c7f0 = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/quiz/result/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/quiz/result/index" */))
const _78ece538 = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/lesson/_lessonid/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/lesson/_lessonid/index" */))
const _3c0e261e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _38003676,
    name: "dashboard"
  }, {
    path: "/login",
    component: _a01a1eea,
    name: "login"
  }, {
    path: "/student",
    component: _2e1a6f1d,
    name: "student"
  }, {
    path: "/student/classes",
    component: _56119174,
    name: "student-classes"
  }, {
    path: "/student/profile",
    component: _2bd5c992,
    name: "student-profile"
  }, {
    path: "/student/classes/taro%20dulu",
    component: _20ef6b72,
    name: "student-classes-taro dulu"
  }, {
    path: "/student/classes/class/:id",
    component: _296b5e88,
    name: "student-classes-class-id"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid",
    component: _57e35830,
    name: "student-classes-class-id-meeting-meetingid"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid?/quiz",
    component: _6bc2f072,
    name: "student-classes-class-id-meeting-meetingid-quiz"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid?/quiz/result",
    component: _2674c7f0,
    name: "student-classes-class-id-meeting-meetingid-quiz-result"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid?/lesson/:lessonid",
    component: _78ece538,
    name: "student-classes-class-id-meeting-meetingid-lesson-lessonid"
  }, {
    path: "/",
    component: _3c0e261e,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
