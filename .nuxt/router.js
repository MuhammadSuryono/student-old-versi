import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75174033 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4bb5acc5 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _256c0b6c = () => interopDefault(import('../pages/personality.vue' /* webpackChunkName: "pages/personality" */))
const _4dd95a8a = () => interopDefault(import('../pages/splash.vue' /* webpackChunkName: "pages/splash" */))
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
    path: "/splash",
    component: _4dd95a8a,
    name: "splash"
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
