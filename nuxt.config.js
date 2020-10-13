
export default {
  ssr: true,
  generate: {
    routes: [
      '/',
      '/signup',
      '/search',
      '/profile',
      '/placeorder',
      '/payment',
      '/orders',
      '/login',
      '/cart',
      // '/verify/_token',
      '/verify/confirm',
      '/verify',
      '/reviews/review',
      // '/products/item',
      {
        path: 'products/item'
      },
      '/address/_id',
      '/address/add',
      '/address'
    ],
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ecommerce Store',
    script: [{ src: 'https://js.stripe.com/v3' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/logoMine.png' },
      { rel: 'stylesheet', href: '/css/font-awesome/css/all.css' },
      { rel: 'stylesheet', href: '/css/default.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: './plugins/localStorage.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    baseURL: process.env.DEV_BACKEND
  },

  proxy: {
    '/api': {
      target: URL
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extend(config, ctx) { },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `https://ecommstore2019.herokuapp.com/api/auth/login`,
            // url: `http://localhost:3001/api/auth/login`,
            method: 'post',
            propertyName: 'token'
          },
          logout: true,
          user: {
            url: `https://ecommstore2019.herokuapp.com/api/auth/user`,
            // url: `http://localhost:3001/api/auth/user`,
            method: 'get',
            propertyName: 'user'
          }
          // user: false
        },
        // autoFetchUser: false
      }
    }
  },

  env: {
    DEV_BACKEND: 'https://ecommstore2019.herokuapp.com',
    // DEV_BACKEND: 'http://localhost:3001',
    STRIPE: 'pk_test_51HTBHhH6tbYYyOHumFF7w1U3v0lGLFfZ1MlNtHPmvRRlBe4DpVBPDygQL6kfm1gLnTbGdHKqtgtdIkKxn5wJ0wId00SzN9GIrL',
  },

  router: {
    trailingSlash: false
  },

  
}
