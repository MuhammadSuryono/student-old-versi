<template>
  <div class="setting-card">
    <BoxTitle />

    <div class="main-setting">
      <div class="title-section">
        Music
      </div>
      <Volume class="volume-music" />
      <div class="title-section">
        Sound Effect
      </div>
      <Volume class="volume-effect" />
      <div class="title-section-vr">
        My Current VR PIN
      </div>

      <div v-if="!showPin" class="vr-pin">
        <img src="~/assets/images/vr-pin.svg" class="bg-vr-pin">
        <div class="value-pin">
          {{ VRpin }}
        </div>
      </div>
      <div v-else class="vr-pin">
        Generate PIN
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showPin: false,
      VRpin: 0
    }
  },
  mounted () {},
  methods: {
    async generatePIN () {
      await this.$axios
        .post('/student/vr-pin/generate')
        .then((res) => {
          this.showPin = true
          this.VRpin = res.data.pin
        })
        .catch((error) => {
          this.showPin = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.setting-card {
  width: 520px;
  height: 100%;
  background: rgb(223, 234, 244, 0.9);
  border: 0.6px solid #ffffff;
  z-index: 10;
  padding: 80px 10px 0px 20px;
  overflow-y: hidden;
  overflow-x: hidden;
  .main-setting {
    margin-top: 120px;
    .title-section {
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: #333333;
      margin-bottom: 7px;
    }
    .title-section-vr {
      margin-bottom: 27px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: #333333;
    }
    .volume-music {
      margin-bottom: 18px;
    }
    .volume-effect {
      margin-bottom: 48px;
    }

    .vr-pin {
      display: flex;
      align-items: center;
      justify-content: center;
      .value-pin {
        font-weight: 700;
        font-size: 17px;
        color: #6a7792;
        position: absolute;
      }
      .bg-vr-pin {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
      }
    }
  }
}
</style>
