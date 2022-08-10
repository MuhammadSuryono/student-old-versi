<template>
  <div class="bg-img">
    <vuetify-audio :file="file" :auto-play="true" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  components: {
    VuetifyAudio: () => import('vuetify-audio')
  },
  data () {
    return {
      file: 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3'
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
}
</style>
