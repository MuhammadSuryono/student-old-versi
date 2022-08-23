import colors from 'vuetify/es5/util/colors'

export default {
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
    // '~/plugins/auth.js'
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
    middleware: ['auth'],
    base: process.env.basePath ?? '/'
  },

  auth: {
    // redirect: {
    //   login: '/login',
    //   callback: '/',
    //   home: '/'
    // },
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          global: true,
          // maxAge: 10
          maxAge: 7200
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post'
          },
          logout: false,
          user: false
        },
        autoLogout: false
      }
    },
    plugins: ['~/plugins/auth.js']
  },

  recaptcha: {
    hideBadge: true,
    siteKey: '6Le29ScdAAAAAGwD0Qceu2Qs1tuSoKE4sILeg3Nn',
    version: 2
  },

  axios: {
    baseURL: process.env.baseUrl ?? '/'
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
    publicPath: process.env.basePathBuild ?? '/_nuxt/',
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      })
    }
  },

  vue: {
    config: {
      ignoredElements: ['stream']
    }
  }
}
