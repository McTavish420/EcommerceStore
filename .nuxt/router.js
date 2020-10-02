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
const _048a47aa = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _c712be78 = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _3beab948 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _78dcf706 = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _048655f1 = () => interopDefault(import('..\\pages\\verify\\_token.vue' /* webpackChunkName: "pages/verify/_token" */))
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
    path: "/address/add",
    component: _048a47aa,
    name: "address-add"
  }, {
    path: "/address/:id",
    component: _c712be78,
    name: "address-id"
  }, {
    path: "/products/:id?",
    component: _3beab948,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _78dcf706,
    name: "reviews-id"
  }, {
    path: "/verify/:token?",
    component: _048655f1,
    name: "verify-token"
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
