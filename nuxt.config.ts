import { defineNuxtConfig } from "nuxt/config"

// 10.96.1.143' - 08.10.2021
export default defineNuxtConfig({
  app: {
    baseURL: '/',
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
  ssr: false,
  dev: process.env.NODE_ENV !== 'production',
  devtools: {
    enabled: process.env.NODE_ENV !== 'production',

    timeline: {
      enabled: true
    }
  },
  eslint: {
    lintOnStart: false
  },
  sourcemap: {
    server: true,
    client: true
  },
  plugins: [
    { src: '@/plugins/filters', mode: 'client' },
    { src: '@/plugins/vClickOutsideVue3', mode: 'client'}
  ],
  components: [
    { path: '@/components/layout/' },
    { path: '@/components/ui-components/' },
    { path: '@/components/search/' },
    { path: '@/components/data/' }
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/devtools',
    '@kgierke/nuxt-basic-auth'
  ],
  css: [
    '@/assets/scss/style.scss'
  ],
  basicAuth: {
    enabled: process.env.NODE_ENV !== 'production',
    users: [
      {
        username: process.env.BASIC_USER || "",
        password: process.env.BASIC_SECRET || "",
      }
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_color-variables.scss";'
        }
      }
    }
  }
})