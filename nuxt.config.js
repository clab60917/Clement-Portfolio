export default defineNuxtConfig({
  app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      head: {
          title: 'Clement-Portfolio',
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1 viewport-fit=cover' },
            { hid: 'description', name: 'description', content: '', id:"__meta-description"  },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'og:type', name: 'og:type', content: 'website' },
            { hid: 'og:site_name', name: 'og:site_name', content: '' },
            { hid: 'og:title', name: 'og:title', content: '' },
            { hid: 'og:description', name: 'og:description', content: '', id:"__meta-og:description" },
            { hid: 'og:image', name: 'og:image', content: '' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:description', name: 'twitter:description', content: '', id:"__meta-twitter:description" },
            { hid: 'twitter:image', name: 'twitter:image', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' },

          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
              rel: 'stylesheet',
              href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
            }
          ]
      },
  },

  css: [
    '~/assets/css/main.css',
  ],

  components: true,

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },

  vite: {
    resolve:{
      alias:{
        pages: './screens',
        components: './components',
      }
    }
  }

})

