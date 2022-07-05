import colors from 'vuetify/es5/util/colors'

export default {
  router: {
   base: '/student/'
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Petraverse',
    title: 'Petraverse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Petraverse' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.scss'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/repository.js',
    '~/plugins/buefy.js',
    '~/plugins/persistedState.client.js',
    '~/plugins/clickOutside.js',
    {
      src: '~/plugins/vue-video-background',
      ssr: false
    },
    // '~/plugins/notifier.js',
    '~/plugins/notifications-ssr.js',
    '~/plugins/notifications-client.js',
    '~/plugins/modal.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/vuetify'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: false,
          type: false
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'data.data.access_token'
          },
          logout: false,
          user: false
        }
      }
    }
  },

  recaptcha: {
    hideBadge: true,
    siteKey: '6Le29ScdAAAAAGwD0Qceu2Qs1tuSoKE4sILeg3Nn',
    version: 2
  },

  axios: {
    baseURL: 'https://api-petra.primeskills.id/api/v1'
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath:	'/student/_nuxt/'
  },

  vue: {
    config: {
      ignoredElements: ['stream']
    }
  }
}
