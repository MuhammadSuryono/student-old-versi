<template>
  <div>
    <div class="container">
      <iframe
        ref="iframe"
        class="responsive-iframe"
        src="/vueconnect_pc/index.html"
      />
    </div>
    <b-button type="is-primary" class="is-align-items-center" @click="goHome()">
      Lanjut
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  layout: 'default',
  data () {
    return {
      finish: false,
      unityUrl: 'https://primeskills.id/technical/petraverse/vueconnect_pc/',
      loading: false,
      token: ''
    }
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

  methods: {
    goHome () {
      this.$router.push({ path: '/' })
      // this.getToken()
    },

    getToken () {
      const token = this.$store.state.user.token
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
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
