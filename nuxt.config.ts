import { defineNuxtConfig } from "@nuxt/bridge"

// Global page headers: https://go.nuxtjs.dev/config-head
// 10.96.1.143' - 08.10.2021
export default defineNuxtConfig({
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/v0': { target: 'http://localhost:3000', pathRewrite: { '^/api/v0': '/api' } } // 08.10.2021
  },
  target: 'server',
  ssr: false,
  bridge: false,
  dev: process.env.NODE_ENV !== 'production',
  server: { host: '127.0.0.1' },
  store: true,
  app: {
    head: {
      title: 'icdp-frontend',
      htmlAttrs: {
        lang: 'it'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  devtools: { enabled: process.env.NODE_ENV == 'development' },
  loading: {
    color: '#67c1c1',
    height: '5px'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss'
  ],
  // Shared styles for in page scoped styles
  styleResources: {
    scss: [
      '@/assets/scss/_color-variables.scss'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/filters' },
    { src: '@/plugins/v-click-outside', mode: 'server' },
    { src: '@/plugins/v-tree-chart', mode: 'server' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/layout/' },
    { path: '~/components/ui-components/' },
    { path: '~/components/search/' },
    { path: '~/components/data/' }
  ],
  serverMiddleware: [ '~/api/index.js' ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-basic-auth-module'
  ],
  // Http password for staging. `basic-auth-module` configuration
  basic: {
    name: process.env.BASIC_USER,
    pass: process.env.BASIC_SECRET,
    enabled: process.env.NODE_ENV !== 'development'
  },
  router: {
    base: '/',
    routeNameSplitter: '/',
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'home',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          name: 'diagram',
          path: '/diagramma',
          component: resolve(__dirname, 'pages/static/diagram.vue')
        },
        {
          name: 'search',
          path: '/cerca/:term?/:regions?/:typology?/:level?',
          component: resolve(__dirname, 'pages/facilities/_term/_typology/_regions/_level/search.vue')
        },
        {
          name: 'facility',
          path: '/struttura/:id?',
          component: resolve(__dirname, 'pages/facilities/_id/facility.vue')
        }
      )
    }
  }
})