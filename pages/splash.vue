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
  mounted () {
    // this.checkUser()
  },
  methods: {
    // check user if eligable for take Personality Cluster Test
    checkUser () {
      this.$axios
        .get('/personality-cluster/check')
        .then((response) => {
          const eligable = response.data.eligable
          console.log(eligable)
          if (eligable === true) {
            this.$router.push({ path: '/personality' })
          } else {
            this.$router.push({ path: '/personality' })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    end () {
      this.checkUser()
      // this.$router.push({ path: '/' })
    }
  }
}
</script>
