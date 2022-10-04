<template>
  <div class="vol-container">
    <div class="bg-volume">
      <div class="rules-container">
        <img src="~/assets/images/ruler.svg">
      </div>
    </div>
    <IconVolume v-if="!muteEffect" class="icon-volume" @click.native="onMute(true)" />
    <IconVolumeMute v-else class="icon-volume" @click.native="onMute(false)" />
    <div class="slidecontainer">
      <input
        id="myRange"
        v-model="value"
        type="range"
        min="0"
        max="100"
        class="slider"
        @input="changeVolume()"
      >
    </div>
    <img src="~/assets/images/vol-corner.svg" class="corner-top">
    <div class="diagonal-line" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: 100,
      mute: false,
      valueBackup: 0
    }
  },
  computed: {
    ...mapState({
      audioEffect: (state) => {
        return state.user.audioEffect
      },
      muteEffect: (state) => {
        return state.user.muteEffect
      }
    })
  },
  mounted () {
    this.value = this.audioEffect * 100
  },
  methods: {
    changeVolume () {
      if (this.value > 0) {
        this.$store.commit('user/SET_MUTE_EFFECT', false)
        this.$store.commit('user/SET_AUDIO_EFFECT', this.value / 100)
      } else {
        this.$store.commit('user/SET_MUTE_EFFECT', true)
        this.$store.commit('user/SET_AUDIO_EFFECT', this.value / 100)
      }
    },
    onMute (x) {
      this.$store.commit('user/SET_MUTE_EFFECT', x)
      if (x) {
        this.valueBackup = this.value
        this.$store.commit('user/SET_AUDIO_EFFECT', 0)
      } else {
        this.value = this.valueBackup
        this.$store.commit('user/SET_AUDIO_EFFECT', this.value / 100)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.vol-container {
  position: relative;
  .bg-volume {
    height: 55px;
    border: 1.5px solid #f2f2f2;
    width: 411px;
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
      position: absolute;
      top: 30px;
      left: 27px;
    }
  }
  .icon-volume {
    position: absolute;
    top: 17px;
    left: 20px;
    margin-right: 15px;
    cursor: pointer;
  }
  .corner-top {
    position: absolute;
    left: 235px;
    top: -1px;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-app-region: no-drag;
    z-index: 2;
  }
  .diagonal-line {
    position: absolute;
    left: 1px;
    top: 45px;
    border-bottom: 1px solid #f2f2f2;
    width: 13px;
    transform: rotate(45deg);
    transform-origin: top left;
  }
  .slidecontainer {
    width: 347px;
    position: absolute;
    top: 11px;
    left: 46px;
    z-index: 4;
  }
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: rgba(46, 87, 153, 0.2);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  .slider:hover {
    opacity: 1;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 18px;
    background: #f3f6f9;
    box-shadow: 0px -4px 4px rgba(255, 255, 255, 0.25),
      0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 14px;
    height: 18px;
    background: #f3f6f9;
    box-shadow: 0px -4px 4px rgba(255, 255, 255, 0.25),
      0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>