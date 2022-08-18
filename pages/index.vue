<template>
  <div
    v-if="!isLoading"
    class="bg-img"
    :style="{ backgroundImage: 'url(' + pathDecoration + ')' }"
  />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  layout: 'default',

  data () {
    return {
      isLoading: false,
      audio: null
    }
  },

  computed: {
    ...mapState({
      decoration: (state) => {
        return state.decoration.currentDecoration.data.data.background
      },
      pathDecoration: (state) => {
        return state.decoration.pathDecoration
      },
      nameDecoration: (state) => {
        return state.decoration.nameDecoration
      }
    })
  },

  mounted () {
    // this.$store.commit('user/SET_BG_AUDIO', true)
    this.getDataDecoration()
  },
  methods: {
    playsound () {
      this.audio = new Audio(require('@/assets/audio/audio_bg.mp3'))
      this.audio.play()
    },
    getDataDecoration () {
      this.isLoading = true
      this.$store
        .dispatch('decoration/fetchCurrentDecoration')
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error.response.data.message, {
            position: 'top-center',
            duration: 5000
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  background-image: url('~@/assets/images/home/bg_home.png');
  height: 100%;
  width: 100%;
  // height: auto;
  // width: auto;
  background-size: cover;
  background-position: center;
}
</style>
