import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4e656b2 = () => interopDefault(import('../pages/archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _75174033 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _1c0bfd4c = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _4bb5acc5 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _256c0b6c = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _78ba5900 = () => interopDefault(import('../pages/skillcard/index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _4dd95a8a = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
const _2faa596e = () => interopDefault(import('../pages/library/collection/index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _3ee02cd2 = () => interopDefault(import('../pages/library/module/index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _36e3d693 = () => interopDefault(import('../pages/skillcard/detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _39299950 = () => interopDefault(import('../pages/library/module/detail/finalquiz.vue' /* webpackChunkName: "pages/library/module/detail/finalquiz" */))
const _6f32335d = () => interopDefault(import('../pages/library/module/detail/game/_index.vue' /* webpackChunkName: "pages/library/module/detail/game/_index" */))
const _7e9e911a = () => interopDefault(import('../pages/library/module/detail/quiz/_index.vue' /* webpackChunkName: "pages/library/module/detail/quiz/_index" */))
const _7449680e = () => interopDefault(import('../pages/library/module/detail/reading/_index.vue' /* webpackChunkName: "pages/library/module/detail/reading/_index" */))
const _49238d2c = () => interopDefault(import('../pages/library/module/detail/video/_index.vue' /* webpackChunkName: "pages/library/module/detail/video/_index" */))
const _1e2a7396 = () => interopDefault(import('../pages/library/module/detail/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index" */))
const _fbe3eca4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archivements",
    component: _d4e656b2,
    name: "archivements"
  }, {
    path: "/home",
    component: _75174033,
    name: "home"
  }, {
    path: "/library",
    component: _1c0bfd4c,
    name: "library"
  }, {
    path: "/login",
    component: _4bb5acc5,
    name: "login"
  }, {
    path: "/personality",
    component: _256c0b6c,
    name: "personality"
  }, {
    path: "/skillcard",
    component: _78ba5900,
    name: "skillcard"
  }, {
    path: "/splash",
    component: _4dd95a8a,
    name: "splash"
  }, {
    path: "/library/collection",
    component: _2faa596e,
    name: "library-collection"
  }, {
    path: "/library/module",
    component: _3ee02cd2,
    name: "library-module"
  }, {
    path: "/skillcard/detail",
    component: _36e3d693,
    name: "skillcard-detail"
  }, {
    path: "/library/module/detail/finalquiz",
    component: _39299950,
    name: "library-module-detail-finalquiz"
  }, {
    path: "/library/module/detail/game/:index",
    component: _6f32335d,
    name: "library-module-detail-game"
  }, {
    path: "/library/module/detail/quiz/:index",
    component: _7e9e911a,
    name: "library-module-detail-quiz"
  }, {
    path: "/library/module/detail/reading/:index",
    component: _7449680e,
    name: "library-module-detail-reading"
  }, {
    path: "/library/module/detail/video/:index",
    component: _49238d2c,
    name: "library-module-detail-video"
  }, {
    path: "/library/module/detail/:index",
    component: _1e2a7396,
    name: "library-module-detail"
  }, {
    path: "/",
    component: _fbe3eca4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
