<template>
  <div style="background-color: #eef2f5; width: 1200px; height: 93vh">
    <div class="container">
      <b-button
        type="is-primary"
        class="is-align-items-center"
        style="margin-top: 40px; z-index: 10"
        @click="goHome()"
      >
        Lanjut
      </b-button>
      <iframe
        ref="iframe"
        class="responsive-iframe"
        src="/pcgame/index.html"
        :style="{ height: window.height - 200 + 'px' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalityPage',
  layout: 'dashboard',
  data () {
    return {
      finish: false,
      unityUrl: 'https://primeskills.id/technical/petraverse/vueconnect_pc/',
      loading: false,
      token: '',
      window: {
        width: 0,
        height: 0
      }
    }
  },

  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
  },
  mounted () {
    window.addEventListener('activityDoneEvent', this.goHome)
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('activityDoneEvent', this.goHome)
    })

    window.addEventListener('getTokenEvent', this.getToken)
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('getTokenEvent', this.getToken)
    })
  },

  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    goHome () {
      this.$router.push({ path: '/' })
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },

    getToken () {
      const token = this.$auth.strategy.token.get()
      this.$refs.iframe.contentWindow.sendToken(token)
    },
    sendToken () {
      this.$refs.iframe.contentWindow.sendToken(this.token)
    },
    activityDoneEvent () {
      this.finish = true
    }
  }
}
</script>

<style>
.container {
  position: absolute;
  overflow: hidden;
  width: 1200px;
  top: 50px;
  left: 110px;
  height: 100%;
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 10px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
