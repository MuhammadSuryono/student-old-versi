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
  methods: {
    end () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
