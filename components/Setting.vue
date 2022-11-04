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
          <img src="~/assets/images/vr-pin.svg" class="bg-vr-pin">
          <div
            class="value-pin"
          >
            {{ VRpin }}
          </div>
          <div
            class="btn-refresh"
            @mouseover="hover1 = true"
            @mouseleave="hover1 = false"
            @click="generatePIN()"
          >
            <IconRefresh class="icon-refresh" :bg-color="hover1 ? '#47ABEF' : 'white' " />
          </div>
        </div>
        <div class="button-remove" @click="removePIN()">
          <div class="corner-top" />
          <div class="btn-1">
            <div class="btn-2 text-btn">
              Remove PIN
            </div>
          </div>
          <div class="corner-bottom" />
        </div>
      </div>
      <div v-else class="vr-pin">
        <div class="button-generate" @click="generatePIN()">
          <div class="corner-top" />
          <div class="btn-1">
            <div class="btn-2 text-btn">
              Generate PIN
            </div>
          </div>
          <div class="corner-bottom" />
        </div>
      </div>
      <div class="btn-close" @click="closeProfile()">
        <Back />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showPin: false,
      hover1: false
    }
  },
  computed: {
    ...mapState({
      VRpin: (state) => {
        return state.user.VRpin
      }
    })
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
          this.$store.commit('user/SET_PIN', res.data.pin)
          console.log('res', res)
        })
        .catch(() => {
          this.showPin = false
        })
    },
    async removePIN () {
      await this.$axios
        .delete('/student/vr-pin/delete')
        .then((res) => {
          if (res.status === 200) {
            this.showPin = false
          }
        })
        .catch((error) => {
          // this.showPin = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
      this.showPin = false
      this.$store.commit('user/SET_PIN', 0)
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
          this.$store.commit('user/SET_PIN', res.data.pin)
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
      .btn-refresh {
        border:2px solid #D4E6EA;
width: 25.04px;
height: 25.04px;
margin-top:34px;
margin-left:4px;
background: #47ABEF;
cursor:pointer;
.icon-refresh {
    margin-left: 5px;
}
      }
      .btn-refresh:hover  {
background: #FFFFFF;
      }
      .value-pin {
        font-weight: 700;
        font-size: 17px;
        color: #6a7792;
        position: absolute;
        padding-top: 5px;
        padding-right:14px;
      }
      .bg-vr-pin {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
      }
      .button-generate {
        position: relative;
        cursor: pointer;
        .corner-top{
          z-index:1;
          background: #7289AA;
          opacity: 0.35;
          border: 0.56254px solid #FFFFFF;
          height: 20px;
          width: 20px;
          position: absolute;
          top:-4px;
          left:-4px;
        }
        .corner-bottom{
          z-index:3;
          background: #F2F2F2;
          height: 5px;
          width: 5px;
          position: absolute;
          bottom:-1px;
          right:-1px;
        }
        .btn-1 {
          z-index:2;
          position: relative;
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
      .button-generate:hover {
        position: relative;
        cursor: pointer;
        .btn-1 {
          z-index:2;
          position: relative;
          background: linear-gradient(64.48deg, #A8F5FF 0%, #C3F4F9 52%, #DFF2F2 100%);
          height: 46px;
          width: 202px;
          padding: 2px;
          .btn-2 {
            height: 100%;
            background: #FFFFFF;
            font-weight: 700;
            font-size: 17px;
            text-align: center;
            color: #4C7BC1;
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
      position: relative;
      cursor:pointer;
      width: 150px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
        .corner-top{
          z-index:1;
          background: #7289AA;
          opacity: 0.35;
          border: 0.56254px solid #FFFFFF;
          height: 14px;
          width: 14px;
          position: absolute;
          top:-3px;
          left:-2px;
        }
        .corner-bottom{
          z-index:3;
          background: #F2F2F2;
          height: 5px;
          width: 5px;
          position: absolute;
          bottom:-1px;
          right:-1px;
        }
      .btn-1 {
          z-index:2;
          position: relative;
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
    .button-remove:hover {
      position: relative;
      cursor:pointer;
      width: 150px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      .btn-1 {
          z-index:2;
          position: relative;
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
          height: 100%;background: #FFFFFF;
          padding-top: 5px;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
color: #4C7BC1;
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
