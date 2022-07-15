import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63670cb8 = () => interopDefault(import('../pages/archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _2ac4c1b6 = () => interopDefault(import('../pages/cluster.vue' /* webpackChunkName: "pages/cluster" */))
const _03a33b8a = () => interopDefault(import('../pages/faction/index.vue' /* webpackChunkName: "pages/faction/index" */))
const _e161cd78 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4132692e = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _7878f5d4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _07a007ce = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _83c64962 = () => interopDefault(import('../pages/skillcard/index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _44b92b8c = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
const _597a1de8 = () => interopDefault(import('../pages/faction/detail/index.vue' /* webpackChunkName: "pages/faction/detail/index" */))
const _3f2479da = () => interopDefault(import('../pages/library/collection/index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _053d80a8 = () => interopDefault(import('../pages/library/module/index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _c45cc3b8 = () => interopDefault(import('../pages/skillcard/detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _2b26d6ea = () => interopDefault(import('../pages/library/module/detail/_index/index.vue' /* webpackChunkName: "pages/library/module/detail/_index/index" */))
const _bd9b5ad8 = () => interopDefault(import('../pages/library/module/detail/_index/game/embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/embed" */))
const _299c6ba8 = () => interopDefault(import('../pages/library/module/detail/_index/game/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/_index" */))
const _3908c965 = () => interopDefault(import('../pages/library/module/detail/_index/quiz/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/_index" */))
const _14c82bce = () => interopDefault(import('../pages/library/module/detail/_index/reading/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/reading/_index" */))
const _6e4b0a7f = () => interopDefault(import('../pages/library/module/detail/_index/video/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/video/_index" */))
const _a25d5a86 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _63670cb8,
    name: "archivements"
  }, {
    path: "/cluster",
    component: _2ac4c1b6,
    name: "cluster"
  }, {
    path: "/faction",
    component: _03a33b8a,
    name: "faction"
  }, {
    path: "/home",
    component: _e161cd78,
    name: "home"
  }, {
    path: "/library",
    component: _4132692e,
    name: "library"
  }, {
    path: "/login",
    component: _7878f5d4,
    name: "login"
  }, {
    path: "/personality",
    component: _07a007ce,
    name: "personality"
  }, {
    path: "/skillcard",
    component: _83c64962,
    name: "skillcard"
  }, {
    path: "/splash",
    component: _44b92b8c,
    name: "splash"
  }, {
    path: "/faction/detail",
    component: _597a1de8,
    name: "faction-detail"
  }, {
    path: "/library/collection",
    component: _3f2479da,
    name: "library-collection"
  }, {
    path: "/library/module",
    component: _053d80a8,
    name: "library-module"
  }, {
    path: "/skillcard/detail",
    component: _c45cc3b8,
    name: "skillcard-detail"
  }, {
    path: "/library/module/detail/:index",
    component: _2b26d6ea,
    name: "library-module-detail-index"
  }, {
    path: "/library/module/detail/:index/game/embed",
    component: _bd9b5ad8,
    name: "library-module-detail-index-game-embed"
  }, {
    path: "/library/module/detail/:index/game/:index",
    component: _299c6ba8,
    name: "library-module-detail-index-game"
  }, {
    path: "/library/module/detail/:index/quiz/:index",
    component: _3908c965,
    name: "library-module-detail-index-quiz"
  }, {
    path: "/library/module/detail/:index/reading/:index",
    component: _14c82bce,
    name: "library-module-detail-index-reading"
  }, {
    path: "/library/module/detail/:index/video/:index",
    component: _6e4b0a7f,
    name: "library-module-detail-index-video"
  }, {
    path: "/",
    component: _a25d5a86,
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
