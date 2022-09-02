<template>
  <div class="vol-container">
    <div class="bg-volume">
      <div class="rules-container">
        <img src="~/assets/images/ruler.svg" style="margin-top: 15px">
      </div>
    </div>
    <div class="slider-vol">
      <IconVolume class="icon-volume" />
      <b-slider v-model="value" style="z-index: 999" @change="changeVolume()" />
    </div>
    <img src="~/assets/images/vol-corner.svg" class="corner-top">
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: 100
    }
  },
  computed: {
    ...mapState({
      audioBGM: (state) => {
        return state.user.audioBGM
      }
    })
  },
  mounted () {
    const audio = this.$parent.$parent.$refs.player
    audio.volume = 1
    // // this.value = this.audioBGM
    // const audio = this.$parent.$parent.$refs.player
    // audio.volume = 1
    this.$store.commit('user/SET_AUDIO_BGM', this.value)
  },
  methods: {
    changeVolume () {
      const audio = this.$parent.$parent.$refs.player
      audio.volume = this.value / 100
      console.log(this.value)
      this.$store.commit('user/SET_AUDIO_BGM', this.value / 100)
      this.$store.commit('user/SET_BTN_AUDIO')
      this.$store.commit('user/SET_POPUP_AUDIO')
    }
  }
}
</script>
<style lang="scss" scoped>
.vol-container {
  position: relative;
  .bg-volume {
    height: 65px;

    border: 1.5px solid #f2f2f2;
    width: 421px;
    background: #ffffff;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -45deg at top 5px right 5px, var(--g)) 100% 0 /51%
        100% no-repeat,
      conic-gradient(from -225deg at bottom 5px left 5px, var(--g)) 0 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    .rules-container {
      width: 100%;
      height: 20px;
    }
  }
  .slider-vol {
    position: absolute;
    top: 14px;
    left: 29px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 361px;
    height: 20px;
    .icon-volume {
      margin-right: 15px;
    }
  }
  .corner-top {
    position: absolute;
    right: 65px;
    top: 0px;
  }
}
</style>
