// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: { url: 'https://wheel-center-gtn.ru' },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wheel Center GTN',
      link: [{ rel: 'icon', type: 'image/ico', href: '/assets/img/favicon.ico' }],
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  runtimeConfig: {
    telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN,
    chatId: process.env.NUXT_CHAT_ID,
    public: {}
  },
  nitro: {
    preset: 'node-server' // или 'vercel' / 'netlify' / 'digital-ocean'
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', 'nuxt-swiper', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  primevue: {
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    options: {
      ripple: true,
      inputStyle: 'filled'
    }
  },

  css: ['primevue/resources/themes/aura-light-green/theme.css', '~/app/assets/css/main.css'],

  dir: {
    modules: 'app/modules',
    plugins: 'app/plugins',
    pages: 'app/pages',
    layouts: 'app/layouts',
    middleware: 'app/middleware'
  },

  components: ['app/UIComponents'],
  compatibilityDate: '2025-03-23'
})
