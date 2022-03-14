<template>
  <div>
    <iframe src="https://primeskills.id/technical/petraverse/vueconnect_pc/" height="1000" width="1000"></iframe>
  </div>
</template>
<style lang="scss" scoped></style>

<script>
export default {
  name: 'HomePage',
  layout: 'login',
  data () {
    return {
    }
  },
  computed: {
    receiveMessage (event) {
      console.log(event)
    }
  },
  mounted () {
    window.addEventListener('message', this.receiveMessage)
    this.kirim()
  },
  beforeDestroy () {
    window.removeEventListener('message', this.receiveMessage)
  },
  methods: {
    kirim() {
      this.$refs.iframe.contentWindow.getToken()
    }
  }
}
</script>
<style>
</style>