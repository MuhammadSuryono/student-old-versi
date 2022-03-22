<template>
  <div class="profile-card">
    <PTitle name="Edit Profile" />
    <div class="main-profile">
      <div class="columns pr-4">
        <div class="column is-narrow avatar-container">
          <div class="square-top" :style="btnStyles1" />
          <div class="trapesium-1" :style="btnStyles2" />
          <div class="square-center" :style="btnStyles1" />
          <div class="trapesium-2" :style="btnStyles3" />
          <div class="square-bottom" :style="btnStyles1" />
          <img :src="data.avatar_image" class="img-logo">
        </div>
        <div class="column">
          <div class="title-card">
            About me
          </div>
          <b-input maxlength="350" type="textarea" style="margin-top: 10px" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    avatarImg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      data: {
        avatar_image: '',
        avatar_bg: '',
        name: '',
        courses: 0,
        achievements: 0,
        faction: '',
        faction_bg: '',
        level: 0
      }
    }
  },
  computed: {
    ...mapState({
      users: (state) => {
        return state.user.users
      },
      sidebar: (state) => {
        return state.user.sidebar
      }
    }),
    btnStyles1 () {
      return {
        'background-color': this.data.avatar_bg
      }
    },
    btnStyles2 () {
      return {
        'border-top-color': this.data.avatar_bg
      }
    },
    btnStyles3 () {
      return {
        'border-bottom-color': this.data.avatar_bg
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.data.courses = this.users.courses
      this.data.achievements = this.users.achievements
      this.data.faction = this.users.faction.faction
      this.data.faction_bg = this.users.faction.faction_bgcolor
      this.data.level = this.users.level
      // eslint-disable-next-line valid-typeof
      if (typeof this.users !== null || typeof this.users !== undefined) {
        this.data.name = this.users.first_name + ' ' + this.users.last_name
        this.data.avatar_image = this.users.avatar.image
        this.data.avatar_bg = this.users.faction.avatar_bgcolor
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.profile-card {
  width: 438.46px;
  height: 665.85px;
  background: #effdfd;
  z-index: 10;
  padding: 80px 10px 0px 20px;
  .main-profile {
    margin: 75px 0px 0px 23px;
    .title-card {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      display: flex;
      color: #114164;
    }
    .avatar-container {
      z-index: 1;
      position: relative;
      .img-logo {
        position: absolute;
        top: 15px;
        z-index: 2;
        height: 200px;
        // margin-left: 3px;
        // margin-right: auto;
      }
      .square-top {
        z-index: 1;
        height: 55px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 140px;
        background-color: rgba(152, 18, 18, 0.75);
      }
      .square-center {
        z-index: 1;
        height: 55px;
        width: 120px;
        margin-right: 10px;
        margin-left: 10px;
        background-color: rgba(152, 18, 18, 0.75);
      }
      .square-bottom {
        z-index: 1;
        height: 55px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 140px;
        background-color: rgba(152, 18, 18, 0.75);
      }
      .trapesium-1 {
        z-index: 1;
        height: 0px;
        width: 140px;
        border-top: 20px solid rgba(152, 18, 18, 0.75);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
      }
      .trapesium-2 {
        z-index: 1;
        height: 0px;
        width: 140px;
        border-bottom: 20px solid rgba(152, 18, 18, 0.75);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
      }
    }
  }
}
</style>
