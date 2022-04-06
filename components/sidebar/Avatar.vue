<template>
  <div>
    <span v-if="sidebar">
      <!-- avatar -->
      <div class="avatar-container">
        <!-- personality -->
        <div class="petra-personality">
          <img src="~/assets/images/component/rectangle.png" class="btn-top">
          <img
            src="~/assets/images/component/pixlr-bg-result.png"
            class="btn-top2"
          >
        </div>
        <!-- faction -->
        <IconFaction :bg-color="factionBg" class="petra-faction" />
        <img :src="faction" class="btn-center2">
        <div class="petra-level">
          <img
            src="~/assets/images/component/rectangle.png"
            class="btn-bottom"
          >
          <div class="text-level">
            {{ level }}
          </div>
          <img src="~/assets/images/component/level.png" class="btn-bottom2">
        </div>
        <div class="square-top" :style="btnStyles1" />
        <div class="trapesium-1" :style="btnStyles2" />
        <div class="square-center" :style="btnStyles1" />
        <div class="trapesium-2" :style="btnStyles3" />
        <div class="square-bottom" :style="btnStyles1" />
        <img :src="avatarImg" class="img-logo">
        <!-- edit profile -->
        <div class="btn-edit noselect" @click="onEditProfile()">
          <img src="~/assets/images/btn-petra.png">
          <div class="text-edit">Edit Profile</div>
        </div>
      </div>
      <!-- name card -->
      <SidebarCardName
        class="name-card"
        :name="avatarName"
        :courses2="courses"
        :achievements2="achievements"
      />
      <!-- manage decorations -->
      <div class="menu-b">
        <div
          class="setting"
          style="width: 100%; top: 10px; left: 0px"
          @click="onManageDecoration()"
        >
          <img
            src="~/assets/images/component/bg-decors.png"
            class="btn-d"
            style="height: 40.8px; width: 180px; left: 0px"
          >
          <v-icon dark dense class="icon-s" style="top: 11px">
            mdi-umbrella-outline
          </v-icon>
          <div
            style="
              position: absolute;
              left: 53px;
              top: 6px;
              text-align: center;
              font-size: 14px;
              line-height: 14px;
            "
          >
            Manage<br>
            Decorations
          </div>
        </div>
      </div>
    </span>
    <span v-else class="avatar-container2">
      <div class="square-top" />
      <div class="trapesium-1" />
      <div class="square-center" />
      <div class="trapesium-2" />
      <div class="square-bottom" />
      <img :src="avatarImg" class="img-logo2">
      <!-- <div class="menu-p" style="margin-top: 13px">
        <div class="cornered" />
        <div class="square" />
        <v-icon dark class="icon-s"> mdi-cog-outline </v-icon>
      </div> -->
      <div class="menu-p">
        <div class="cornered" />
        <div class="square" />
        <v-icon dark class="icon-s"> mdi-umbrella-outline </v-icon>
      </div>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    bgColor: {
      type: String,
      default: 'rgba(152, 18, 18, 0.75)'
    },
    avatarImg: {
      type: String,
      default: ''
    },
    avatarName: {
      type: String,
      default: ''
    },
    level: {
      type: Number,
      default: 0
    },
    faction: {
      type: String,
      default: ''
    },
    factionBg: {
      type: String,
      default: 'rgba(152, 18, 18, 0.75)'
    },
    courses: {
      type: Number,
      default: 0
    },
    achievements: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      users: (state) => {
        return state.user.users
      }
    }),
    btnStyles1 () {
      return {
        'background-color': this.bgColor
      }
    },
    btnStyles2 () {
      return {
        'border-top-color': this.bgColor
      }
    },
    btnStyles3 () {
      return {
        'border-bottom-color': this.bgColor
      }
    }
  },
  methods: {
    onEditProfile () {
      this.$store.commit('user/SET_BTN_PROFILE')
    },
    onManageDecoration () {
      this.$store.commit('user/SET_BTN_DECORATION')
    }
  }
}
</script>
<style lang="scss" scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.menu-b {
  display: flex;
  flex-wrap: nowrap;
  .setting {
    cursor: pointer;
    height: 100px;
    width: 250px;
    position: relative;
    .btn-s {
      position: absolute;
      top: 10px;
      left: 0px;
      height: 40px;
    }
    .icon-s {
      position: absolute;
      top: 20px;
      left: 9px;
    }
  }
}
.avatar-container {
  z-index: 1;
  position: relative;
  .btn-edit {
    position: absolute;
    top: 220px;
    right: 5px;
    z-index: 10;
    cursor: pointer;
    .text-edit {
      position: absolute;
      top: 3.6px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  .petra-personality {
    top: -10px;
    left: 135px;
    position: absolute;
    width: 47.68px;
    z-index: 9;
    cursor: pointer;
    .btn-top {
      z-index: 1;
      object-fit: cover;
      position: relative;
    }
    .btn-top2 {
      top: 0px;
      left: 0px;
      position: absolute;
      padding: 5px;
      z-index: 2;
    }
  }
  .petra-faction {
    top: 41px;
    left: 152.9px;
    position: absolute;
    width: 28.4px;
    z-index: 9;
    cursor: pointer;
    .btn-center {
      top: 0px;
      position: relative;
      width: 100%;
      z-index: 1;
    }
  }
  .btn-center2 {
    top: 42px;
    left: 151px;
    position: absolute;
    padding: 2px;
    width: 31px;
    height: 31px;
    z-index: 10;
  }
  .petra-level {
    top: 77px;
    cursor: pointer;
    left: 153px;
    position: absolute;
    z-index: 1;
    width: 27px;
    z-index: 9;
    .btn-bottom {
      top: 0px;
      position: relative;
      width: 100%;
      height: 26px;
    }
    .btn-bottom2 {
      bottom: 1px;
      right: -5px;
      position: absolute;
    }
    .text-level {
      color: white;
      top: 12.4px;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      white-space: nowrap;
      width: 27px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .square-top {
    z-index: 1;
    height: 70px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 172px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-center {
    z-index: 1;
    height: 70px;
    width: 152px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-bottom {
    z-index: 1;
    height: 70px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 172px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .trapesium-1 {
    z-index: 1;
    height: 0px;
    width: 172px;
    border-top: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  .trapesium-2 {
    z-index: 1;
    height: 0px;
    width: 172px;
    border-bottom: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  .img-logo {
    position: absolute;
    top: 0px;
    z-index: 2;
    height: 247px;
    object-fit: cover;
    // width: 170px;
    margin-top: 1.8px;
    margin-left: -3px;
    margin-right: auto;
  }
}
.name-card {
  position: relative;
  z-index: 3;
}
.avatar-container2 {
  .menu-p {
    position: relative;
    width: 60px;
    margin-top: 7px;
    .icon-s {
      position: absolute;
      top: 7px;
      left: 16px;
    }
    cursor: pointer;
    .cornered {
      width: 55px;
      height: 0px;
      border-bottom: 13px solid #1d4483;
      border-left: 12px solid transparent;
      border-top-right-radius: 5px;
    }
    .square {
      background-color: #1d4483;
      height: 25px;
      width: 55px;
      border-end-end-radius: 5px;
      border-end-start-radius: 5px;
    }
  }
  .menu-p:hover {
    .cornered {
      border-bottom-color: rgba(255, 255, 255, 0.4);
    }
    .square {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
  .img-logo2 {
    top: 17px;
    left: 6px;
    position: absolute;
    z-index: 2;
    width: 70px;
    height: 78px;
    margin-right: auto;
    z-index: 1;
    object-fit: contain;
  }
  .square-top {
    height: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 60px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-center {
    height: 10px;
    width: 48px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-bottom {
    height: 15px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 60px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .trapesium-1 {
    height: 0px;
    width: 60px;
    border-top: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
  .trapesium-2 {
    height: 0px;
    width: 60px;
    border-bottom: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
</style>
