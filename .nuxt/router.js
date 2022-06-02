import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16f43bfc = () => interopDefault(import('../pages/archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _2ddc66f0 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _c500f6b6 = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _570cab10 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e3445756 = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _58ec358b = () => interopDefault(import('../pages/skillcard/index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _389c1dd0 = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
const _7030e31e = () => interopDefault(import('../pages/library/collection/index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _634da828 = () => interopDefault(import('../pages/library/module/index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _5ced8b68 = () => interopDefault(import('../pages/skillcard/detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _517909a4 = () => interopDefault(import('../pages/library/module/detail/_index/index.vue' /* webpackChunkName: "pages/library/module/detail/_index/index" */))
const _48546628 = () => interopDefault(import('../pages/library/module/detail/_index/game/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/_index" */))
const _297baaae = () => interopDefault(import('../pages/library/module/detail/_index/quiz/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/_index" */))
const _3826140a = () => interopDefault(import('../pages/library/module/detail/_index/reading/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/reading/_index" */))
const _033dd1bb = () => interopDefault(import('../pages/library/module/detail/_index/video/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/video/_index" */))
const _e535f00e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _16f43bfc,
    name: "archivements"
  }, {
    path: "/home",
    component: _2ddc66f0,
    name: "home"
  }, {
    path: "/library",
    component: _c500f6b6,
    name: "library"
  }, {
    path: "/login",
    component: _570cab10,
    name: "login"
  }, {
    path: "/personality",
    component: _e3445756,
    name: "personality"
  }, {
    path: "/skillcard",
    component: _58ec358b,
    name: "skillcard"
  }, {
    path: "/splash",
    component: _389c1dd0,
    name: "splash"
  }, {
    path: "/library/collection",
    component: _7030e31e,
    name: "library-collection"
  }, {
    path: "/library/module",
    component: _634da828,
    name: "library-module"
  }, {
    path: "/skillcard/detail",
    component: _5ced8b68,
    name: "skillcard-detail"
  }, {
    path: "/library/module/detail/:index",
    component: _517909a4,
    name: "library-module-detail-index"
  }, {
    path: "/library/module/detail/:index/game/:index",
    component: _48546628,
    name: "library-module-detail-index-game"
  }, {
    path: "/library/module/detail/:index/quiz/:index",
    component: _297baaae,
    name: "library-module-detail-index-quiz"
  }, {
    path: "/library/module/detail/:index/reading/:index",
    component: _3826140a,
    name: "library-module-detail-index-reading"
  }, {
    path: "/library/module/detail/:index/video/:index",
    component: _033dd1bb,
    name: "library-module-detail-index-video"
  }, {
    path: "/",
    component: _e535f00e,
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
