<template>
  <div class="profile-card">
    <PTitle name="Settings" />
    <div>
      <span v-if="!isLoading">
        <div class="main-profile">
          <div class="title-section">Music</div>
          <Volume />
          <div class="title-section" style="margin-top: 20px">Sound Effect</div>
          <Volume2 />
          <div class="title-section" style="margin-top: 48px">
            My Current VR PIN
          </div>
          <div class="vr-pin">
            <img src="~/assets/images/vr-pin.svg">
            <div v-if="showPin" class="value-pin">{{ VRpin }}</div>
            <div v-else class="btn-pin" @click="generatePIN()">
              <img src="~/assets/images/regenerate.svg">
            </div>
          </div>
          <img
            src="~/assets/images/remove.svg"
            style="
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: auto;
              margin-right: auto;
              margin-top: 40px;
            "
            @click="removePIN()"
          >
        </div>
        <div class="columns pr-4 mt-4">
          <div class="column is-narrow avatar-container">
            <div class="btn-edit" @click="closeProfile()">
              <img
                src="~/assets/images/back-btn.png"
                style="width: 98.15px;height: 36.49px;x"
              >
            </div>
          </div>
        </div>
      </span>
      <v-skeleton-loader
        v-else
        type="card-avatar, article, actions"
        style="margin-top: 80px"
      />
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      showPin: false,
      VRpin: 0
    }
  },
  mounted () {
    this.generatePIN()
  },
  methods: {
    closeProfile () {
      this.$store.commit('user/SET_BTN_SETTING')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    removePIN () {
      this.showPin = false
      this.VRpin = 0
      //   this.generatePIN()
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
.profile-card {
  width: 540.46px;
  height: 100%;
  background: #effdfd;
  z-index: 10;
  padding: 80px 10px 0px 20px;
  .profile-container {
    z-index: 1;
    position: relative;
    .btn-profile {
      top: 43px;
      left: 30px;
      position: relative;
      .text-profile {
        position: absolute;
        top: 2.4px;
        left: 40px;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        align-items: center;
        color: #000000;
        text-align: center;
      }
    }
  }

  .main-profile {
    margin: 65px 0px 0px 10px;
    .title-section {
      margin-top: 100px;
      margin-bottom: 8px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: #333333;
    }
    .vr-pin {
      //   margin-left: auto;
      //   margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .value-pin {
        font-weight: 700;
        font-size: 17px;
        color: #6a7792;
        position: absolute;
      }
      .btn-pin {
        position: absolute;
        cursor: pointer;
        margin-top: 5px;
        // background: #4c7bc1;
        // height: 40px;
        // width: 196px;
        // border-radius: 0px;
      }
    }
  }
  .btn-edit {
    margin-top: 4px;
    position: relative;
    float: right;
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
</style>
