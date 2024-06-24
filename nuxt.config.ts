// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wheel Garage',
      link: [{ rel: 'icon', type: 'image/ico', href: '/assets/img/favicon.ico' }]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', 'nuxt-swiper'],
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
  components: ['app/UIComponents']
})
