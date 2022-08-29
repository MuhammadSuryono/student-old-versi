<template>
  <div>
    <audio ref="player" src="~/assets/audio/audio_bg.mp3" autoplay loop />
    <img
      v-if="audioBtn"
      src="~/assets/images/akar-icons_sound-on.svg"
      class="img-logo"
      @click="toggleAudio()"
    >
    <img
      v-else
      src="~/assets/images/akar-icons_sound-off.svg"
      class="img-logo"
      @click="toggleAudio()"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      audioBtn: true
    }
  },
  methods: {
    toggleAudio () {
      const audio = this.$refs.player
      //   audio.muted = !audio.muted
      //   this.audioBtn = !this.audioBtn
      if (audio.paused) {
        audio.play()
        this.audioBtn = true
      } else {
        audio.pause()
        this.audioBtn = false
      }
    }
  }
}
</script>
