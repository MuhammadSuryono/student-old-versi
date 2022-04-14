import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4e656b2 = () => interopDefault(import('../pages/archivements.vue' /* webpackChunkName: "pages/archivements" */))
const _75174033 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4bb5acc5 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _256c0b6c = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _78ba5900 = () => interopDefault(import('../pages/skillcard/index.vue' /* webpackChunkName: "pages/skillcard/index" */))
const _4dd95a8a = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
const _36e3d693 = () => interopDefault(import('../pages/skillcard/detail.vue' /* webpackChunkName: "pages/skillcard/detail" */))
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
    path: "/skillcard/detail",
    component: _36e3d693,
    name: "skillcard-detail"
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
