<template>
  <div class="container-personality">
    <div style="margin-left: 180px; width: 1000px; height: 700px">
      <iframe
        ref="iframe"
        src="/pcgame/index.html"
        style="width: 100%; height: 100%"
      />
    </div>
    asadas
    <div class="btn-edit" @click="goHome()">
      <img
        src="~/assets/images/btn-petra.png"
        style="width: 224.22px; height: 36px"
      >
      <div class="text-edit">
        Lanjut
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalityPage',
  layout: 'default',
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

<style lang="scss" scoped>
.container-personality {
  background-image: url('~@/assets/images/module/bg.png');
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
  .btn-edit {
    width: 225px;
    cursor: pointer;
    position: relative;
    top: -87px;
    left: 570px;
    .text-edit {
      position: absolute;
      top: 7px;
      color: #c7d6fd;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
}
</style>
