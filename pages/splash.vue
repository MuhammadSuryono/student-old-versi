<template>
  <div>
    <video-background
      :src="require('@/assets/video/bg.mp4')"
      style="height: 100vh"
      :loop="false"
      @ended="end()"
    />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'login',
  mounted () {},
  methods: {
    checkUser () {
      this.$axios
        .get('/personality-cluster/check')
        .then((response) => {
          console.log('eligable: ', response.data.eligible)
          if (response.data.eligible) {
            this.$router.push({ path: '/personality' })
          } else {
            this.$router.push({ path: '/' })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    end () {
      this.checkUser()
    }
  }
}
</script>
