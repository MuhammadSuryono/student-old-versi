<template>
  <div>
    <span v-if="sidebar">
      <!-- avatar -->
      <div class="avatar-container">
        <!-- personality -->
        <div class="petra-personality">
          <IconBgPersonality class="btn-top" />
          <img v-if="cluster != null" :src="cluster.icon" class="btn-top2">
        </div>
        <!-- faction -->
        <img src="~/assets/images/ava_faction.svg" class="petra-faction">
        <img v-if="faction != ''" :src="faction" class="btn-center2">
        <div class="petra-level">
          <img
            src="~/assets/images/ava_faction.svg"
            class="btn-bottom"
          >
          <div class="text-level">
            {{ level }}
          </div>
        </div>
        <img :src="images" class="img-logo">
        <div class="bg-avatar">
          <div class="bg-1" />
          <div class="border-top" />
          <div class="bg-2" :style="'background-color:' + bgColor" />
        </div>
        <!-- edit profile -->
        <div class="btn-edit noselect" @click="onEditProfile()">
          <img src="~/assets/images/edit_profile.svg">
        </div>
      </div>
      <!-- name card -->
      <SidebarCardName
        class="name-card"
        :name="avatarName"
        :courses2="courses"
        :achievements2="achievements"
      />
      <SidebarButtonMenu type="quest" @click.native="onQuest()" />
      <SidebarButtonMenu type="decorations" style="margin-top:10px;" @click.native="onManageDecoration()" />
      <SidebarButtonMenu type="library" style="margin-top:10px;" @click.native="onLibrary()" />
      <SidebarButtonMenu type="shop" style="margin-top:10px;" @click.native="onShop()" />
    </span>
    <span v-else class="avatar-container2">
      <IconAvatarBackground
        :bg-color="bgColor"
        :images="images"
      />
      <div class="cursor-pointer shield" style="margin-top:40px;" @click="onQuest()">
        <div class="circle">
          <div class="inner-circle">
          {{ totalUnComplete }}
          </div>
        </div>
        <img
          src="~/assets/images/shield.svg"
        >
      </div>
      <div class="new-menu cursor-pointer" style="margin-top:8px;" @click="onManageDecoration()">
        <img
          src="~/assets/images/decor.svg"
        >
      </div>
      <div class="new-menu cursor-pointer" style="margin-top:8px;" @click="onLibrary()">
        <img
          src="~/assets/images/clarity_library-line.svg"
        >
      </div>
      <div class="new-menu cursor-pointer" style="margin-top:8px;" @click="onShop()">
        <img
          src="~/assets/images/shop_big.svg"
        >
      </div>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    cluster: {
      type: Object,
      default: null
    },
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
    return {
      cluster: null
    }
  },
  computed: {
    ...mapState({
      images: (state) => {
        return state.user.images
      },

      sidebar: (state) => {
        return state.user.sidebar
      },
      users: (state) => {
        return state.user.users
      },
      quest: (state) => {
        return state.quest.data
      },
      totalUnComplete(){
        let data = null;
        // let data = typeof this.quest.completion_task.total_un_complete == 'undefined' ? 0 : this.quest.completion_task.total_un_complete
       if(typeof this.quest == 'undefined' ){
        data = 0
       }else{
        data = 1
       }
        return data
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    onManageDecoration () {
      this.$store.commit('user/SET_BTN_DECORATION')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    onLibrary () {
      this.$router.push('/library')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    onQuest () {
      this.$store.commit('user/SET_BTN_QUEST')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    onShop () {
      this.$store.commit('user/SET_BTN_SHOP')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.shield {
  position: relative;
  .circle {
    position: absolute;
    top:-14px;
    right:-8px;
    height: 35px;
    width: 35px;
    background: #1C3252;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    padding:6px;
    .inner-circle {
      height: 20px;
      width: 20px;
      background: #FF0000;
      border-radius: 50%;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      color: #FFFFFF;
    }
  }
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.container-button {
  top: 200px;
  height: 32px;
  width: 168px;
  position: relative;
  cursor: pointer;
  .square-right {
    position: absolute;
    top:-2px;
    left:-2px;
    z-index:0;
    height: 11px;
    width: 16px;
    background: #B3B3B3;
    opacity: 0.35;
    border: 0.83px solid #FFFFFF;
  }
  .square-left {
    position: absolute;
    bottom:-2px;
    right:-2px;
    z-index:0;
    height: 4px;
    width: 4px;
    background: #F2F2F2;
  }
  .btn-login {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: linear-gradient(22.88deg, rgb(168, 245, 255, 0.35) 0%, rgb(195, 244, 249, 0.35) 52%, rgb(223, 242, 242, 0.35) 100%);
    padding:2px;
    .bg-login {
      background: #2E5799;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
      border:1px solid white;
      .img-menu {
        height: 19px;
        margin-right: 10px;
      }
      .text-menu {
        font-family: Nunito;
        text-align: center;
        font-size: 10px;
        line-height: 10px;
      }
    }
    .bg-login:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
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
      top: 0px;
      left: 9px;
    }
  }
}
.avatar-container {
  z-index: 1;
  position: relative;
  .btn-edit {
    position: absolute;
    top: 151px;
    right: -33px;
    z-index: 19;
    cursor: pointer;
  }
  .petra-personality {
    top: -13px;
    left: 137px;
    position: absolute;
    z-index: 9;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-top2 {
      position: absolute;
      z-index: 2;
      padding:3px;
    }
  }
  .petra-faction {
    top: 42px;
    left: 147.9px;
    position: absolute;
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
    left: 153px;
    position: absolute;
    padding: 2px;
    width: 31px;
    height: 31px;
    z-index: 10;
  }
  .petra-level {
    top: 82px;
    cursor: pointer;
    left: 148px;
    position: relative;
    z-index: 1;
    .btn-bottom {
      top: 0px;
      position: relative;
    }
    .btn-bottom2 {
      bottom: 1px;
      left: 0px;
      position: absolute;
    }
    .text-level {
      color: white;
      top: 16.4px;
      left: 20px;
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
  .bg-avatar {
    .bg-1 {
      position: absolute;
      top:0px;
      --mask: linear-gradient(45deg,#0000 6px,#000 0);
      -webkit-mask: var(--mask);
      mask: var(--mask);
      height: 244px;
      width: 175px;
      background: linear-gradient(22.58deg, #22C1F2 4.57%, #3DC8F2 20.02%, #81DAF2 53.63%, #DFF2F2 95.43%);
    }
    .bg-2 {
      position: absolute;
      top: 0px;
      left: 3px;
      --mask: linear-gradient(45deg,rgba(0,0,0,0) 6px,#000 0);
      -webkit-mask: var(--mask);
      mask: var(--mask);
      height: 241px;
      width: 172px;
    }
    .border-top {
      border-top:1px solid white;
      width:140px;
      position: absolute;
      top: -6px;
      left:20px;
    }
  }
}
.name-card {
  position: relative;
  z-index: 3;
}
.avatar-container2 {
  .new-menu {
    margin-top:30px;
    margin-left:4px;
    height: 42px;
    width: 60px;
    --mask: linear-gradient(-45deg,#0000 6px,#000 0 calc(100% - 6px),#0000 0);
    -webkit-mask: var(--mask);
    mask: var(--mask);
    background: #1A4786;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
  }
  .new-menu:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  .square-top {
    height: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 60px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-center {
    height: 7px;
    width: 48px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-bottom {
    height: 12px;
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
