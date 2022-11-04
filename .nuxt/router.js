import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2805c152 = () => interopDefault(import('..\\pages\\archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _16602526 = () => interopDefault(import('..\\pages\\cluster.vue' /* webpackChunkName: "pages/cluster" */))
const _6ea3b18c = () => interopDefault(import('..\\pages\\faction\\index.vue' /* webpackChunkName: "pages/faction/index" */))
const _55153ae3 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _655c933b = () => interopDefault(import('..\\pages\\library\\index.vue' /* webpackChunkName: "pages/library/index" */))
const _6b770815 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5164cccc = () => interopDefault(import('..\\pages\\personality.vue' /* webpackChunkName: "pages/personality" */))
const _13eb7756 = () => interopDefault(import('..\\pages\\skillcard\\index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _bea538b4 = () => interopDefault(import('..\\pages\\sopanusa.vue' /* webpackChunkName: "pages/sopanusa" */))
const _bc589dbe = () => interopDefault(import('..\\pages\\sopanusav1.vue' /* webpackChunkName: "pages/sopanusav1" */))
const _9d053d2a = () => interopDefault(import('..\\pages\\splash.vue' /* webpackChunkName: "pages/splash" */))
const _0da576c9 = () => interopDefault(import('..\\pages\\faction\\detail\\index.vue' /* webpackChunkName: "pages/faction/detail/index" */))
const _01f768dd = () => interopDefault(import('..\\pages\\library\\collection\\index.vue' /* webpackChunkName: "pages/library/collection/index" */))
const _5b3b1662 = () => interopDefault(import('..\\pages\\library\\module\\index.vue' /* webpackChunkName: "pages/library/module/index" */))
const _639155de = () => interopDefault(import('..\\pages\\skillcard\\detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
const _afba1baa = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\index.vue' /* webpackChunkName: "pages/library/module/detail/_index/index" */))
const _48699580 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\game\\embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/embed" */))
const _2990da06 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\quiz\\embed.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/embed" */))
const _421fde7c = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\game\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/game/_index" */))
const _203f385f = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\quiz\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/quiz/_index" */))
const _68301110 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\reading\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/reading/_index" */))
const _3c2b09b2 = () => interopDefault(import('..\\pages\\library\\module\\detail\\_index\\video\\_index.vue' /* webpackChunkName: "pages/library/module/detail/_index/video/_index" */))
const _bc613604 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/student-dev/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archivements",
    component: _2805c152,
    name: "archivements"
  }, {
    path: "/cluster",
    component: _16602526,
    name: "cluster"
  }, {
    path: "/faction",
    component: _6ea3b18c,
    name: "faction"
  }, {
    path: "/home",
    component: _55153ae3,
    name: "home"
  }, {
    path: "/library",
    component: _655c933b,
    name: "library"
  }, {
    path: "/login",
    component: _6b770815,
    name: "login"
  }, {
    path: "/personality",
    component: _5164cccc,
    name: "personality"
  }, {
    path: "/skillcard",
    component: _13eb7756,
    name: "skillcard"
  }, {
    path: "/sopanusa",
    component: _bea538b4,
    name: "sopanusa"
  }, {
    path: "/sopanusav1",
    component: _bc589dbe,
    name: "sopanusav1"
  }, {
    path: "/splash",
    component: _9d053d2a,
    name: "splash"
  }, {
    path: "/faction/detail",
    component: _0da576c9,
    name: "faction-detail"
  }, {
    path: "/library/collection",
    component: _01f768dd,
    name: "library-collection"
  }, {
    path: "/library/module",
    component: _5b3b1662,
    name: "library-module"
  }, {
    path: "/skillcard/detail",
    component: _639155de,
    name: "skillcard-detail"
  }, {
    path: "/library/module/detail/:index",
    component: _afba1baa,
    name: "library-module-detail-index"
  }, {
    path: "/library/module/detail/:index/game/embed",
    component: _48699580,
    name: "library-module-detail-index-game-embed"
  }, {
    path: "/library/module/detail/:index/quiz/embed",
    component: _2990da06,
    name: "library-module-detail-index-quiz-embed"
  }, {
    path: "/library/module/detail/:index/game/:index",
    component: _421fde7c,
    name: "library-module-detail-index-game"
  }, {
    path: "/library/module/detail/:index/quiz/:index",
    component: _203f385f,
    name: "library-module-detail-index-quiz"
  }, {
    path: "/library/module/detail/:index/reading/:index",
    component: _68301110,
    name: "library-module-detail-index-reading"
  }, {
    path: "/library/module/detail/:index/video/:index",
    component: _3c2b09b2,
    name: "library-module-detail-index-video"
  }, {
    path: "/",
    component: _bc613604,
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
