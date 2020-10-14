import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79eb31c6 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _14928908 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _0d324431 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3202724d = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _1e77044e = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _7c111de2 = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _f6425b1e = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _4cef48e0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _351fa200 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _bf0110fe = () => interopDefault(import('..\\pages\\verify\\index.vue' /* webpackChunkName: "pages/verify/index" */))
const _dd69add6 = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _e84d3942 = () => interopDefault(import('..\\pages\\products\\item.vue' /* webpackChunkName: "pages/products/item" */))
const _4a8f208a = () => interopDefault(import('..\\pages\\reviews\\review.vue' /* webpackChunkName: "pages/reviews/review" */))
const _fc30b6a2 = () => interopDefault(import('..\\pages\\verify\\confirm.vue' /* webpackChunkName: "pages/verify/confirm" */))
const _3006edae = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _438aa11a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _79eb31c6,
    name: "address"
  }, {
    path: "/cart",
    component: _14928908,
    name: "cart"
  }, {
    path: "/login",
    component: _0d324431,
    name: "login"
  }, {
    path: "/orders",
    component: _3202724d,
    name: "orders"
  }, {
    path: "/payment",
    component: _1e77044e,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _7c111de2,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _f6425b1e,
    name: "profile"
  }, {
    path: "/search",
    component: _4cef48e0,
    name: "search"
  }, {
    path: "/signup",
    component: _351fa200,
    name: "signup"
  }, {
    path: "/verify",
    component: _bf0110fe,
    name: "verify"
  }, {
    path: "/address/add",
    component: _dd69add6,
    name: "address-add"
  }, {
    path: "/products/item",
    component: _e84d3942,
    name: "products-item"
  }, {
    path: "/reviews/review",
    component: _4a8f208a,
    name: "reviews-review"
  }, {
    path: "/verify/confirm",
    component: _fc30b6a2,
    name: "verify-confirm"
  }, {
    path: "/address/:id",
    component: _3006edae,
    name: "address-id"
  }, {
    path: "/",
    component: _438aa11a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
