<template>
  <div>
    <span v-if="sidebar">
      <div class="avatar-container">
        <img src="~/assets/images/component/rectangle.png" class="btn-top">
        <img src="~/assets/images/component/rectangle.png" class="btn-center">
        <img src="~/assets/images/component/rectangle.png" class="btn-bottom">
        <div class="square-top" :style="btnStyles1" />
        <div class="trapesium-1" :style="btnStyles2" />
        <div class="square-center" :style="btnStyles1" />
        <div class="trapesium-2" :style="btnStyles3" />
        <div class="square-bottom" :style="btnStyles1" />
        <img :src="avatarImg" class="img-logo">
      </div>
      <SidebarCardName class="name-card" :name="avatarName" />
      <div class="menu-b">
        <div class="setting" style="width: 50px">
          <img src="~/assets/images/component/btn.png" class="btn-s">
          <v-icon dense dark class="icon-s"> mdi-cog-outline </v-icon>
        </div>
        <div class="setting" style="width: 100%; top: 10px; left: 5px">
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
              left: 55px;
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
      <img src="~/assets/images/dummy/avatar.png" class="img-logo2">
      <div class="menu-p" style="margin-top: 13px">
        <div class="cornered" />
        <div class="square" />
        <v-icon dark class="icon-s"> mdi-cog-outline </v-icon>
      </div>
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
  mounted () {
    console.log("users : ", this.users)
  },
}
</script>
<style lang="scss" scoped>
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
  .btn-top {
    top: 75px;
    left: 145px;
    position: absolute;
    z-index: 1;
    width: 47.68px;
    object-fit: cover;
  }
  .btn-center {
    top: 128px;
    left: 163px;
    position: absolute;
    z-index: 1;
    width: 27.68px;
  }
  .btn-bottom {
    top: 162px;
    left: 163px;
    position: absolute;
    z-index: 1;
    width: 27.68px;
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
}
.img-logo {
  position: absolute;
  top: 95px;
  z-index: 2;
  width: 170px;
  margin-left:3px;
  margin-right: auto;
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
    top: 90px;
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
