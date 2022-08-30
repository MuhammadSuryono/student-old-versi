<template>
  <div>
    <audio ref="player" src="~/assets/audio/audio_bg.mp3" autoplay loop />
    <img
      v-if="audioBtn"
      src="~/assets/images/akar-icons_sound-on.svg"
      class="img-logo"
      @click="$emit('toggle-audio')"
    >
    <img
      v-else
      src="~/assets/images/akar-icons_sound-off.svg"
      class="img-logo"
      @click="$emit('toggle-audio')"
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
      console.log('tes')
      const audio = this.$refs.player
      if (audio.paused) {
        // audio.play()
        this.$store.commit('user/SET_BTN_MUTE', true)
        this.$store.commit('user/SET_BTN_MUTE', true)
        this.audioBtn = true
      } else {
        // audio.pause()
        this.$store.commit('user/SET_BTN_MUTE', false)
        this.$store.commit('user/SET_BTN_MUTE', false)
        this.audioBtn = false
      }
    }
  }
}
</script>
