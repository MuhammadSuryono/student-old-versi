import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54681880 = () => interopDefault(import('..\\pages\\archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _361319c6 = () => interopDefault(import('..\\pages\\cluster.vue' /* webpackChunkName: "pages/cluster" */))
const _7a198563 = () => interopDefault(import('..\\pages\\faction\\index.vue' /* webpackChunkName: "pages/faction/index" */))
const _5920ef68 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _16c7f164 = () => interopDefault(import('..\\pages\\library\\index.vue' /* webpackChunkName: "pages/library/index" */))
const _8f333068 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _94e3d7de = () => interopDefault(import('..\\pages\\personality.vue' /* webpackChunkName: "pages/personality" */))
const _0bd28784 = () => interopDefault(import('..\\pages\\skillcard\\index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _0279f894 = () => interopDefault(import('..\\pages\\splash.vue' /* webpackChunkName: "pages/splash" */))
const _03c89bf2 = () => interopDefault(import('..\\pages\\faction\\detail\\index.vue' /* webpackChunkName: "pages/faction/detail/index" */))
const _3a41d186 = () => interopDefault(import('..\\pages\\library\\collection\\index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _6ef4cc10 = () => interopDefault(import('..\\pages\\library\\module\\index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _3dd849d6 = () => interopDefault(import('..\\pages\\skillcard\\detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _7090a554 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\index.vue' /* webpackChunkName: "pages/library/module/detail/_index/index" */))
const _52c625a9 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\game\\embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/embed" */))
const _62328366 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\quiz\\embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/embed" */))
const _aafa099a = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\game\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/_index" */))
const _eebb55d4 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\quiz\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/_index" */))
const _71b28b61 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\reading\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/reading/_index" */))
const _f42a1560 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\video\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/video/_index" */))
const _22827696 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _54681880,
    name: "archivements"
  }, {
    path: "/cluster",
    component: _361319c6,
    name: "cluster"
  }, {
    path: "/faction",
    component: _7a198563,
    name: "faction"
  }, {
    path: "/home",
    component: _5920ef68,
    name: "home"
  }, {
    path: "/library",
    component: _16c7f164,
    name: "library"
  }, {
    path: "/login",
    component: _8f333068,
    name: "login"
  }, {
    path: "/personality",
    component: _94e3d7de,
    name: "personality"
  }, {
    path: "/skillcard",
    component: _0bd28784,
    name: "skillcard"
  }, {
    path: "/splash",
    component: _0279f894,
    name: "splash"
  }, {
    path: "/faction/detail",
    component: _03c89bf2,
    name: "faction-detail"
  }, {
    path: "/library/collection",
    component: _3a41d186,
    name: "library-collection"
  }, {
    path: "/library/module",
    component: _6ef4cc10,
    name: "library-module"
  }, {
    path: "/skillcard/detail",
    component: _3dd849d6,
    name: "skillcard-detail"
  }, {
    path: "/library/module/detail/:index",
    component: _7090a554,
    name: "library-module-detail-index"
  }, {
    path: "/library/module/detail/:index/game/embed",
    component: _52c625a9,
    name: "library-module-detail-index-game-embed"
  }, {
    path: "/library/module/detail/:index/quiz/embed",
    component: _62328366,
    name: "library-module-detail-index-quiz-embed"
  }, {
    path: "/library/module/detail/:index/game/:index",
    component: _aafa099a,
    name: "library-module-detail-index-game"
  }, {
    path: "/library/module/detail/:index/quiz/:index",
    component: _eebb55d4,
    name: "library-module-detail-index-quiz"
  }, {
    path: "/library/module/detail/:index/reading/:index",
    component: _71b28b61,
    name: "library-module-detail-index-reading"
  }, {
    path: "/library/module/detail/:index/video/:index",
    component: _f42a1560,
    name: "library-module-detail-index-video"
  }, {
    path: "/",
    component: _22827696,
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
