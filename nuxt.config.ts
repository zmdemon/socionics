export default defineNuxtConfig({
  compatibilityDate: '2026-08-12',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt'
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
    name: 'Соционика',
    description: 'Спокойный визуальный справочник по соционике, социотипам и функциям модели А.'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [
        { name: 'theme-color', content: '#ececea' },
        { name: 'color-scheme', content: 'light' }
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    includeAssets: ['apple-touch-icon.png'],
    manifest: {
      id: '/',
      name: 'Соционика',
      short_name: 'Соционика',
      description: 'Справочник по соционике, социотипам и функциям модели А.',
      lang: 'ru',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      background_color: '#f1f1ee',
      theme_color: '#ececea',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/pwa-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,mjs,html,png,avif,svg,ico,webmanifest,json}'],
      globIgnores: ['rational-extroverts.png'],
      cleanupOutdatedCaches: true,
      navigateFallback: '/',
      navigateFallbackDenylist: [/^\/(?:api|_nuxt)\//]
    },
    devOptions: {
      enabled: false
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/types': { prerender: true },
    '/functions': { prerender: true },
    '/articles': { prerender: true },
    '/articles/racionalnye-ekstraverty': { prerender: true },
    '/about': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/types', '/functions', '/articles', '/articles/racionalnye-ekstraverty', '/about']
    }
  },

  typescript: {
    typeCheck: true
  }
})
