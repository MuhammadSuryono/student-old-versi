import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c678f1a = () => interopDefault(import('../pages/archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _7449a783 = () => interopDefault(import('../pages/cluster.vue' /* webpackChunkName: "pages/cluster" */))
const _3ab30568 = () => interopDefault(import('../pages/faction/index.vue' /* webpackChunkName: "pages/faction/index" */))
const _533dc4b4 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _16769547 = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _13a77db2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _45c4a577 = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _7061a5ad = () => interopDefault(import('../pages/skillcard/index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _0f5b9f6e = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
const _3ed3f16e = () => interopDefault(import('../pages/faction/detail/index.vue' /* webpackChunkName: "pages/faction/detail/index" */))
const _7f9a793c = () => interopDefault(import('../pages/library/collection/index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _70ce810a = () => interopDefault(import('../pages/library/module/index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _34261f86 = () => interopDefault(import('../pages/skillcard/detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _2a12f868 = () => interopDefault(import('../pages/library/module/detail/_index/index.vue' /* webpackChunkName: "pages/library/module/detail/_index/index" */))
const _6df562f2 = () => interopDefault(import('../pages/library/module/detail/_index/game/embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/embed" */))
const _0a504cd6 = () => interopDefault(import('../pages/library/module/detail/_index/quiz/embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/embed" */))
const _158931ec = () => interopDefault(import('../pages/library/module/detail/_index/game/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/_index" */))
const _04a7c4c7 = () => interopDefault(import('../pages/library/module/detail/_index/quiz/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/_index" */))
const _a2a045a8 = () => interopDefault(import('../pages/library/module/detail/_index/reading/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/reading/_index" */))
const _168b7b5d = () => interopDefault(import('../pages/library/module/detail/_index/video/_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/video/_index" */))
const _49ffda9b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4c678f1a,
    name: "archivements"
  }, {
    path: "/cluster",
    component: _7449a783,
    name: "cluster"
  }, {
    path: "/faction",
    component: _3ab30568,
    name: "faction"
  }, {
    path: "/home",
    component: _533dc4b4,
    name: "home"
  }, {
    path: "/library",
    component: _16769547,
    name: "library"
  }, {
    path: "/login",
    component: _13a77db2,
    name: "login"
  }, {
    path: "/personality",
    component: _45c4a577,
    name: "personality"
  }, {
    path: "/skillcard",
    component: _7061a5ad,
    name: "skillcard"
  }, {
    path: "/splash",
    component: _0f5b9f6e,
    name: "splash"
  }, {
    path: "/faction/detail",
    component: _3ed3f16e,
    name: "faction-detail"
  }, {
    path: "/library/collection",
    component: _7f9a793c,
    name: "library-collection"
  }, {
    path: "/library/module",
    component: _70ce810a,
    name: "library-module"
  }, {
    path: "/skillcard/detail",
    component: _34261f86,
    name: "skillcard-detail"
  }, {
    path: "/library/module/detail/:index",
    component: _2a12f868,
    name: "library-module-detail-index"
  }, {
    path: "/library/module/detail/:index/game/embed",
    component: _6df562f2,
    name: "library-module-detail-index-game-embed"
  }, {
    path: "/library/module/detail/:index/quiz/embed",
    component: _0a504cd6,
    name: "library-module-detail-index-quiz-embed"
  }, {
    path: "/library/module/detail/:index/game/:index",
    component: _158931ec,
    name: "library-module-detail-index-game"
  }, {
    path: "/library/module/detail/:index/quiz/:index",
    component: _04a7c4c7,
    name: "library-module-detail-index-quiz"
  }, {
    path: "/library/module/detail/:index/reading/:index",
    component: _a2a045a8,
    name: "library-module-detail-index-reading"
  }, {
    path: "/library/module/detail/:index/video/:index",
    component: _168b7b5d,
    name: "library-module-detail-index-video"
  }, {
    path: "/",
    component: _49ffda9b,
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
