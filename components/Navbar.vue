<template>
  <div>
    <b-navbar class="navbar" :mobile-burger="false">
      <template #brand>
        <div
          class="logo cursor-pointer no-select"
          :style="styleObj"
          @click="home()"
        >
          <img
            src="~/assets/images/new_logo.png"
            class="img-logo"
          >
        </div>
        <div id="triangle-bottomleft" />
      </template>
      <template #end>
        <div class="coin-card">
          <div class="value-card">
            1000
          </div>
          <img
            src="~/assets/images/navbar/coin.svg"
          >
        </div>
        <div class="coin-card" style="top:18px;">
          <div class="value-card" style="left: 29px;top: 5px;">
            1000
          </div>
          <img
            src="~/assets/images/navbar/diamond.svg"
          >
        </div>
        <div
          class="btn-helpdesk"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          @click="openWA()"
        >
          <IconHelpdesk
            class="cursor-pointer"
            :bg-color="hover ? '#E4EFFF' : '#2961B5'"
            :text-color="hover ? '#2C6BCA' : 'white'"
          />
        </div>
        <div id="triangle-bottomright2" />
        <div id="triangle-bottomright" />
        <b-navbar-item tag="div" class="right-side">
          <div class="buttons">
            <b-button class="btn-logout" @click="keluar()">
              Sign Out
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bgAudio from '../assets/audio/audio_bg.mp3'
export default {
  data () {
    return {
      showSetting: false,
      hover: false
    }
  },

  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      btn_profile: (state) => {
        return state.user.btn_profile
      },
      btn_decoration: (state) => {
        return state.user.btn_decoration
      },
      fullname: (state) => {
        return state.user.fullname
      },
      users: (state) => {
        return state.user.users
      }
    }),
    styleObj () {
      if (this.sidebar) {
        return 'width:200px;'
      } else {
        return 'width:86px;'
      }
    }
  },
  methods: {
    openWA () {
      window.open('https://wa.me/+6281359809348?text=Hi%20I%20am%20' + this.fullname + '%20(user%20ID:%20' + this.users.id + ').%20I%20need%20help%20in%20...', '_blank').focus()
    },
    home () {
      // const audio = this.$parent.$refs.player
      // audio.volume = 0.1
      // console.log(audio)
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/')
    },
    keluar () {
      // this.$store.commit('user/SET_LOGGEDIN', true)
      // this.$store.commit('user/SET_BTN_AUDIO', true)
      localStorage.setItem('localAuth', true)
      // this.$store.commit('user/SET_BG_AUDIO', false)
      if (this.btn_profile) {
        this.$store.commit('user/SET_BTN_PROFILE')
      }
      if (this.btn_decoration) {
        this.$store.commit('user/SET_BTN_DECORATION')
      }
      this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.coin-card {
  top: 15px;
  position: relative;
  cursor: pointer;
  .value-card {
    position: absolute;
    left: 37px;
    top: 8px;
    width: 62px;
    line-height: 24px;
    background-color: #F5FBFF;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    color: #0071BC;
  }
}
.navbar {
  padding-right: 0px;
  // background-color: red;
  background-image: url('~@/assets/images/top.png');
  // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .logo {
    display: flex;
    align-items: center;
    width: 259px;
    padding-left: 10px;
    background-color: #2c6bca;
    transition: max-height 0.15s ease-out;
    transition-property: width;
    .img-logo {
      cursor: pointer;
      width: 60px;
    }
  }
  .select-btn {
    background: #2c6bca;
    border: 0px;
  }
  .btn-setting {
    color: black;
    text-decoration: none;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .btn-logout {
    background: #000000;
    border-radius: 5px;
    color: white;
    width: 130px;
    margin-left: 15px;
    font-size: 14px;
    border: 0px;
  }
  .right-side {
    background-color: #2c6bca;
  }
  .btn-helpdesk {
    top: 15px;
    right: -40px;
    position: relative;
    cursor: pointer;

  }
  #triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 4.25rem solid #2c6bca;
    border-left: 30px solid transparent;
  }
  #triangle-bottomright2 {
    width: 55px;
    height: 0;
    top: 0px;
    right: -40px;
    z-index: -10;
    position: relative;
    border-bottom: 58px solid #ebcc24;
    border-left: 30px solid transparent;
  }
  #triangle-bottomleft {
    width: 0;
    height: 0;
    border-top: 4.25rem solid #2c6bca;
    border-right: 50px solid transparent;
  }
}

.modal-right {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 300px;
  background-color: Red;
  height: 100vh;
  z-index: 9999999;
  transition: all 0.2s ease-out;
}
@keyframes reveal {
  from {
    clip-path: inset(0 0 0 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
