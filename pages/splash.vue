<template>
  <div>
    <video-background
      :src="require('@/assets/video/bg.mp4')"
      style="height: 100vh"
      :loop="false"
      @ended="end()"
    />
    <div class="skip-video" @click="end()">
      Skip Video
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'login',
  created() {
    this.getData()
  },
  methods: {
    getData () {
      this.$store
        .dispatch('quest/getTaskToday')
        .then((res) => {
          
        })
        .catch(() => {
        })
    },
    checkUser () {
      this.$axios
        .get('/personality-cluster/check')
        .then((response) => {
          this.$toast.success(response.data.message, {
            position: 'top-center',
            duration: 5000
          })
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.checkUser()
    }
  }
}
</script>

<style lang="scss" scoped>
.skip-video {
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 50px;
  width: 170px;
  text-align: Center;
  z-index: 999;
  background-color: white;
  align-content: center;
  align-items: center;
  padding-top: 13px;
  opacity: 0.7;
  cursor: pointer;
}
</style>
