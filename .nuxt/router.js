import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed8b1148 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _f74c9bc4 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _d35f844a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _66b8a43a = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _50058910 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _6bc4f1a5 = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _4a358c3e = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _3e65099b = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _74299726 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _ffdd2ad4 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _7bf3b1aa = () => interopDefault(import('..\\pages\\verify\\index.vue' /* webpackChunkName: "pages/verify/index" */))
const _048a47aa = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _955c4636 = () => interopDefault(import('..\\pages\\reviews\\review.vue' /* webpackChunkName: "pages/reviews/review" */))
const _5c8111d9 = () => interopDefault(import('..\\pages\\verify\\confirm.vue' /* webpackChunkName: "pages/verify/confirm" */))
const _c712be78 = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _66aeca78 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ed8b1148,
    name: "address"
  }, {
    path: "/cart",
    component: _f74c9bc4,
    name: "cart"
  }, {
    path: "/login",
    component: _d35f844a,
    name: "login"
  }, {
    path: "/orders",
    component: _66b8a43a,
    name: "orders"
  }, {
    path: "/payment",
    component: _50058910,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _6bc4f1a5,
    name: "placeorder"
  }, {
    path: "/product",
    component: _4a358c3e,
    name: "product"
  }, {
    path: "/profile",
    component: _3e65099b,
    name: "profile"
  }, {
    path: "/search",
    component: _74299726,
    name: "search"
  }, {
    path: "/signup",
    component: _ffdd2ad4,
    name: "signup"
  }, {
    path: "/verify",
    component: _7bf3b1aa,
    name: "verify"
  }, {
    path: "/address/add",
    component: _048a47aa,
    name: "address-add"
  }, {
    path: "/reviews/review",
    component: _955c4636,
    name: "reviews-review"
  }, {
    path: "/verify/confirm",
    component: _5c8111d9,
    name: "verify-confirm"
  }, {
    path: "/address/:id",
    component: _c712be78,
    name: "address-id"
  }, {
    path: "/",
    component: _66aeca78,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
