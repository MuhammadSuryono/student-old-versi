import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4e656b2 = () => interopDefault(import('../pages/archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _3cef4454 = () => interopDefault(import('../pages/cluster.vue' /* webpackChunkName: "pages/cluster" */))
const _1636717b = () => interopDefault(import('../pages/faction/index.vue' /* webpackChunkName: "pages/faction/index" */))
const _75174033 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _1c0bfd4c = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _4bb5acc5 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _256c0b6c = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _78ba5900 = () => interopDefault(import('../pages/skillcard/index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _4dd95a8a = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
const _a2d54c0a = () => interopDefault(import('../pages/faction/detail/index.vue' /* webpackChunkName: "pages/faction/detail/index" */))
const _2faa596e = () => interopDefault(import('../pages/library/collection/index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _3ee02cd2 = () => interopDefault(import('../pages/library/module/index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _36e3d693 = () => interopDefault(import('../pages/skillcard/detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _54091cce = () => interopDefault(import('../pages/library/module/detail/_index/index.vue' /* webpackChunkName: "pages/library/module/detail/_index/index" */))
const _e063e576 = () => interopDefault(import('../pages/library/module/detail/_index/game/embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/embed" */))
const _0e780717 = () => interopDefault(import('../pages/library/module/detail/_index/game/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/_index" */))
const _1de464d4 = () => interopDefault(import('../pages/library/module/detail/_index/quiz/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/_index" */))
const _f695b402 = () => interopDefault(import('../pages/library/module/detail/_index/reading/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/reading/_index" */))
const _24e2dcf0 = () => interopDefault(import('../pages/library/module/detail/_index/video/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/video/_index" */))
const _fbe3eca4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/admin/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archivements",
    component: _d4e656b2,
    name: "archivements"
  }, {
    path: "/cluster",
    component: _3cef4454,
    name: "cluster"
  }, {
    path: "/faction",
    component: _1636717b,
    name: "faction"
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
    path: "/faction/detail",
    component: _a2d54c0a,
    name: "faction-detail"
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
    path: "/library/module/detail/:index",
    component: _54091cce,
    name: "library-module-detail-index"
  }, {
    path: "/library/module/detail/:index/game/embed",
    component: _e063e576,
    name: "library-module-detail-index-game-embed"
  }, {
    path: "/library/module/detail/:index/game/:index",
    component: _0e780717,
    name: "library-module-detail-index-game"
  }, {
    path: "/library/module/detail/:index/quiz/:index",
    component: _1de464d4,
    name: "library-module-detail-index-quiz"
  }, {
    path: "/library/module/detail/:index/reading/:index",
    component: _f695b402,
    name: "library-module-detail-index-reading"
  }, {
    path: "/library/module/detail/:index/video/:index",
    component: _24e2dcf0,
    name: "library-module-detail-index-video"
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
