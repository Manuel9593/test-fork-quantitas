import { createResolver } from "@nuxt/kit";
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
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
  ssr: false,
  dev: process.env.NODE_ENV !== 'production',
  devtools: {
    enabled: process.env.NODE_ENV !== 'production',

    timeline: {
      enabled: true
    }
  },
  build: {
    analyze: {
      template: "treemap",
      projectRoot: ".",
      filename: "./.nuxt/analyze/result.mignon.html"
    },
    
  },
  sourcemap: {
    server: true,
    client: true
  },
  plugins: [
    { src: '@/plugins/vClickOutsideVue3', mode: 'all'}
  ],
  components: [
    { path: '~/components' },
    { path: '~/components/data/' },
    { path: '~/components/layout/' },
    { path: '~/components/search/' },
    { path: '~/components/ui-components/' },
  ],
  modules: ['@nuxtjs/eslint-module', '@nuxt/devtools', '@kgierke/nuxt-basic-auth', '@vite-pwa/nuxt'],
  css: [
    '@/assets/scss/style.scss'
  ],
  eslint: {
    lintOnStart: false
  },
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