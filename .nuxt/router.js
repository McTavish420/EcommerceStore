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
const _3e65099b = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _74299726 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _ffdd2ad4 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _7bf3b1aa = () => interopDefault(import('..\\pages\\verify\\index.vue' /* webpackChunkName: "pages/verify/index" */))
const _048a47aa = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _c9aeae16 = () => interopDefault(import('..\\pages\\products\\item.vue' /* webpackChunkName: "pages/products/item" */))
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
    pathToRegexpOptions: {"strict":true},
    name: "address"
  }, {
    path: "/cart",
    component: _f74c9bc4,
    pathToRegexpOptions: {"strict":true},
    name: "cart"
  }, {
    path: "/login",
    component: _d35f844a,
    pathToRegexpOptions: {"strict":true},
    name: "login"
  }, {
    path: "/orders",
    component: _66b8a43a,
    pathToRegexpOptions: {"strict":true},
    name: "orders"
  }, {
    path: "/payment",
    component: _50058910,
    pathToRegexpOptions: {"strict":true},
    name: "payment"
  }, {
    path: "/placeorder",
    component: _6bc4f1a5,
    pathToRegexpOptions: {"strict":true},
    name: "placeorder"
  }, {
    path: "/profile",
    component: _3e65099b,
    pathToRegexpOptions: {"strict":true},
    name: "profile"
  }, {
    path: "/search",
    component: _74299726,
    pathToRegexpOptions: {"strict":true},
    name: "search"
  }, {
    path: "/signup",
    component: _ffdd2ad4,
    pathToRegexpOptions: {"strict":true},
    name: "signup"
  }, {
    path: "/verify",
    component: _7bf3b1aa,
    pathToRegexpOptions: {"strict":true},
    name: "verify"
  }, {
    path: "/address/add",
    component: _048a47aa,
    pathToRegexpOptions: {"strict":true},
    name: "address-add"
  }, {
    path: "/products/item",
    component: _c9aeae16,
    pathToRegexpOptions: {"strict":true},
    name: "products-item"
  }, {
    path: "/reviews/review",
    component: _955c4636,
    pathToRegexpOptions: {"strict":true},
    name: "reviews-review"
  }, {
    path: "/verify/confirm",
    component: _5c8111d9,
    pathToRegexpOptions: {"strict":true},
    name: "verify-confirm"
  }, {
    path: "/address/:id",
    component: _c712be78,
    pathToRegexpOptions: {"strict":true},
    name: "address-id"
  }, {
    path: "/",
    component: _66aeca78,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
