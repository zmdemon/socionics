export default defineNuxtConfig({
  compatibilityDate: '2026-08-12',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false,
    fonts: false
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },

  site: {
    // Replace through NUXT_PUBLIC_SITE_URL before the first public deployment.
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://socionavigator.example',
    name: 'СоциоНавигатор',
    description: 'Спокойный визуальный справочник по соционике, социотипам и функциям модели А.'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [
        { name: 'theme-color', content: '#ececea' },
        { name: 'color-scheme', content: 'light' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/types': { prerender: true },
    '/functions': { prerender: true },
    '/about': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/types', '/functions', '/about']
    }
  },

  typescript: {
    typeCheck: true
  }
})
