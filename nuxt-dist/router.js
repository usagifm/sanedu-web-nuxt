import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ac818e5a = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _66b8ad30 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _306c415a = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _3cff368c = () => interopDefault(import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */))
const _701d09a1 = () => interopDefault(import('../pages/teacher/index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _c3e96af4 = () => interopDefault(import('../pages/register/student/index.vue' /* webpackChunkName: "pages/register/student/index" */))
const _2ca7ef6d = () => interopDefault(import('../pages/register/teacher/index.vue' /* webpackChunkName: "pages/register/teacher/index" */))
const _40aa9a11 = () => interopDefault(import('../pages/student/classes/index.vue' /* webpackChunkName: "pages/student/classes/index" */))
const _56a3b858 = () => interopDefault(import('../pages/student/profile/index.vue' /* webpackChunkName: "pages/student/profile/index" */))
const _142367f8 = () => interopDefault(import('../pages/teacher/classes/index.vue' /* webpackChunkName: "pages/teacher/classes/index" */))
const _afb21c8a = () => interopDefault(import('../pages/teacher/profile/index.vue' /* webpackChunkName: "pages/teacher/profile/index" */))
const _df2e44e2 = () => interopDefault(import('../pages/student/classes/taro dulu.vue' /* webpackChunkName: "pages/student/classes/taro dulu" */))
const _42c7f236 = () => interopDefault(import('../pages/student/classes/class/_id/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/index" */))
const _3995e00c = () => interopDefault(import('../pages/teacher/classes/class/_id/index.vue' /* webpackChunkName: "pages/teacher/classes/class/_id/index" */))
const _e950e72a = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/index" */))
const _27c68838 = () => interopDefault(import('../pages/teacher/classes/class/_id/meeting/_meetingid/index.vue' /* webpackChunkName: "pages/teacher/classes/class/_id/meeting/_meetingid/index" */))
const _490791cf = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/quiz/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/quiz/index" */))
const _2293581a = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/quiz/result/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/quiz/result/index" */))
const _c63d39d6 = () => interopDefault(import('../pages/student/classes/class/_id/meeting/_meetingid/lesson/_lessonid/index.vue' /* webpackChunkName: "pages/student/classes/class/_id/meeting/_meetingid/lesson/_lessonid/index" */))
const _33b21994 = () => interopDefault(import('../pages/teacher/classes/class/_id/meeting/_meetingid/quiz/_quizid/index.vue' /* webpackChunkName: "pages/teacher/classes/class/_id/meeting/_meetingid/quiz/_quizid/index" */))
const _bb8dce8c = () => interopDefault(import('../pages/teacher/classes/class/_id/meeting/_meetingid/quiz/_quizid/attempt/_attemptid/index.vue' /* webpackChunkName: "pages/teacher/classes/class/_id/meeting/_meetingid/quiz/_quizid/attempt/_attemptid/index" */))
const _34838013 = () => interopDefault(import('../pages/teacher/classes/class/_id/meeting/_meetingid/quiz/_quizid/correct_answer/_questionid/index.vue' /* webpackChunkName: "pages/teacher/classes/class/_id/meeting/_meetingid/quiz/_quizid/correct_answer/_questionid/index" */))
const _1c68cf8e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ac818e5a,
    name: "dashboard"
  }, {
    path: "/login",
    component: _66b8ad30,
    name: "login"
  }, {
    path: "/register",
    component: _306c415a,
    name: "register"
  }, {
    path: "/student",
    component: _3cff368c,
    name: "student"
  }, {
    path: "/teacher",
    component: _701d09a1,
    name: "teacher"
  }, {
    path: "/register/student",
    component: _c3e96af4,
    name: "register-student"
  }, {
    path: "/register/teacher",
    component: _2ca7ef6d,
    name: "register-teacher"
  }, {
    path: "/student/classes",
    component: _40aa9a11,
    name: "student-classes"
  }, {
    path: "/student/profile",
    component: _56a3b858,
    name: "student-profile"
  }, {
    path: "/teacher/classes",
    component: _142367f8,
    name: "teacher-classes"
  }, {
    path: "/teacher/profile",
    component: _afb21c8a,
    name: "teacher-profile"
  }, {
    path: "/student/classes/taro%20dulu",
    component: _df2e44e2,
    name: "student-classes-taro dulu"
  }, {
    path: "/student/classes/class/:id",
    component: _42c7f236,
    name: "student-classes-class-id"
  }, {
    path: "/teacher/classes/class/:id",
    component: _3995e00c,
    name: "teacher-classes-class-id"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid",
    component: _e950e72a,
    name: "student-classes-class-id-meeting-meetingid"
  }, {
    path: "/teacher/classes/class/:id?/meeting/:meetingid",
    component: _27c68838,
    name: "teacher-classes-class-id-meeting-meetingid"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid?/quiz",
    component: _490791cf,
    name: "student-classes-class-id-meeting-meetingid-quiz"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid?/quiz/result",
    component: _2293581a,
    name: "student-classes-class-id-meeting-meetingid-quiz-result"
  }, {
    path: "/student/classes/class/:id?/meeting/:meetingid?/lesson/:lessonid",
    component: _c63d39d6,
    name: "student-classes-class-id-meeting-meetingid-lesson-lessonid"
  }, {
    path: "/teacher/classes/class/:id?/meeting/:meetingid?/quiz/:quizid",
    component: _33b21994,
    name: "teacher-classes-class-id-meeting-meetingid-quiz-quizid"
  }, {
    path: "/teacher/classes/class/:id?/meeting/:meetingid?/quiz/:quizid?/attempt/:attemptid",
    component: _bb8dce8c,
    name: "teacher-classes-class-id-meeting-meetingid-quiz-quizid-attempt-attemptid"
  }, {
    path: "/teacher/classes/class/:id?/meeting/:meetingid?/quiz/:quizid?/correct_answer/:questionid",
    component: _34838013,
    name: "teacher-classes-class-id-meeting-meetingid-quiz-quizid-correct_answer-questionid"
  }, {
    path: "/",
    component: _1c68cf8e,
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
