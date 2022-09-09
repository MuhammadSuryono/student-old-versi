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
      <Volume2 class="volume-effect" />
      <div class="title-section-vr">
        My Current VR PIN
      </div>

      <div v-if="showPin">
        <div class="vr-pin">
          <img
            src="~/assets/images/vr-pin.svg"
            class="bg-vr-pin"
            @mouseleave="hover1 = false"
          >
          <div class="value-pin" @mouseover="hover1 = true">
            {{ VRpin }}
          </div>
          <img
            v-if="hover1"
            class="btn-pin"
            src="~/assets/images/regenerate.svg"
            @click="generatePIN()"
          >
        </div>
        <div class="button-remove" @click="removePIN()">
          <div class="btn-1">
            <div class="btn-2 text-btn">
              Remove PIN
            </div>
          </div>
        </div>
      </div>
      <div v-else class="vr-pin">
        <div class="button-generate" @click="generatePIN()">
          <div class="btn-1">
            <div class="btn-2 text-btn">
              Generate PIN
            </div>
          </div>
        </div>
      </div>
      <div class="btn-close" @click="closeProfile()">
        <Back />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showPin: false,
      VRpin: 0,
      hover1: false
    }
  },
  mounted () {
    this.checkPin()
  },
  methods: {
    async checkPin () {
      await this.$axios
        .get('/student/vr-pin/last-pin')
        .then((res) => {
          this.showPin = true
          this.VRpin = res.data.pin
          console.log('res', res)
        })
        .catch(() => {
          this.showPin = false
        })
    },
    removePIN () {
      this.showPin = false
      this.VRpin = 0
    },
    closeProfile () {
      this.$store.commit('user/SET_BTN_SETTING')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
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
        padding-top: 5px;
      }
      .bg-vr-pin {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
      }
      .button-generate {
        cursor: pointer;
        .btn-1 {
          background: linear-gradient(
            64.48deg,
            #a8f5ff 0%,
            #c3f4f9 52%,
            #dff2f2 100%
          );
          height: 46px;
          width: 202px;
          padding: 2px;
          .btn-2 {
            height: 100%;
            background: #4c7bc1;
            font-weight: 700;
            font-size: 17px;
            text-align: center;
            color: #f2f2f2;
            padding-top: 10px;
          }
        }
      }
      .btn-pin {
        position: absolute;
        cursor: pointer;
        margin-top: 5px;
      }
    }
    .button-remove {
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      cursor: pointer;
      .btn-1 {
        background: linear-gradient(
          64.48deg,
          #a8f5ff 0%,
          #c3f4f9 52%,
          #dff2f2 100%
        );
        height: 32px;
        width: 148px;
        padding: 2px;
        .btn-2 {
          height: 100%;
          background: #4c7bc1;
          padding-top: 5px;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
          color: #f2f2f2;
        }
      }
    }
    .btn-close {
      margin-top: 100px;
      position: relative;
      float: left;
      cursor: pointer;
      .text-edit {
        position: absolute;
        top: 2px;
        color: #c7d6fd;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
