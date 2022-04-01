<template>
  <div class="profile-card">
    <PTitle name="Manage Decorations" />
    <div v-if="tab === 1">
      <div class="main-profile" style="margin-top: 80px">
        <!-- foto -->
        <v-row justify="center" align="center" no-gutters>
          <img
            src="~/assets/images/decor.png"
            style="
              width: 329.6px;
              height: 180px;
              margin-left: auto;
              margin-right: auto;
            "
          >
          <div
            class="avatar-container"
            style="margin-left: auto; margin-right: auto; margin-top: 10px"
          >
            <div class="btn-edit" @click="getDecoration()">
              <img
                src="~/assets/images/btn-petra.png"
                style="width: 224.22px; height: 36px"
              >
              <div class="text-edit" style="top: 7px">
                Change Background
              </div>
            </div>
          </div>
        </v-row>
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
        <div class="column avatar-container">
          <div class="btn-edit">
            <img
              src="~/assets/images/btn-petra.png"
              style="width: 224.22px; height: 36px"
            >
            <div class="text-edit" style="top: 7px">
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab === 2">
      <div class="column profile-container">
        <div class="btn-profile">
          <img
            src="~/assets/images/bg-profile.png"
            style="width: 257.32px; height: 30px"
          >
          <div class="text-profile">
            Choose Background
          </div>
        </div>
      </div>
      <span v-if="!isLoading2">
        <div class="main-profile" style="margin-top: 40px; margin-bottom: 60px">
          <!-- foto -->
          <div class="columns is-mobile" style="margin-top: 0px">
            <img
              src="~/assets/images/decor.png"
              style="
                width: 329.6px;
                height: 180px;
                margin-left: auto;
                margin-right: auto;
              "
            >
          </div>
          <!-- box -->
          <div class="box-carousel pr-4">
            <div class="title-carousel">
              <img src="~/assets/images/carousel_1.png" class="bg-logo">
              <div class="text-logo">All Backgrounds</div>
            </div>
            <div class="content-carousel">
              <v-row dense align="center" justify="center">
                <v-col
                  v-for="(item, index) in dataDecorationItem"
                  :key="index"
                  align="center"
                  justify="center"
                  cols="12"
                  sm="6"
                  class="item-carousel"
                  @click="selectedItem(index, item)"
                >
                  <span v-if="item.background !== 'null'">
                    <!-- <span v-if="index === activeItem">
                      <img
                        src="~/assets/images/carousel_active.png"
                        class="carousel-logo-bg"
                      >
                    </span>
                    <span v-else>
                      <img
                        v-if="item.selected === true"
                        src="~/assets/images/carousel_used.png"
                        class="carousel-logo-bg"
                      >
                      <img
                        v-else
                        src="~/assets/images/carousel_empty.png"
                        class="carousel-logo-bg"
                      >
                    </span> -->
                    <img :src="item.background" class="carousel-logo-item">
                  </span>
                  <span v-else>
                    <img
                      src="~/assets/images/carousel_disabled.png"
                      class="carousel-logo-bg"
                    >
                  </span>
                </v-col>
              </v-row>
              <v-pagination v-model="page" dark class="my-4" :length="4" />
            </div>
          </div>
        </div>
        <div class="columns pr-4 mt-40">
          <div class="column is-narrow avatar-container">
            <div class="btn-edit" @click="tab = 1">
              <img
                src="~/assets/images/back-btn.png"
                style="width: 98.15px;height: 36.49px;x"
              >
            </div>
          </div>
          <div class="column avatar-container">
            <div class="btn-edit">
              <img
                src="~/assets/images/btn-petra.png"
                style="width: 224.22px; height: 36px"
              >
              <div class="text-edit" style="top: 7px">Save Changes</div>
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
      selected: {},
      activeItem: null,
      isLoading2: false,
      page: 1,
      show1: false,
      show2: true,
      show3: false,
      old_password: '',
      new_password: '',
      confirm_password: '',
      tab: 1,
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
      },
      // decoration: (state) => {
      //   return state.decoration.images
      // },
      // decorationName: (state) => {
      //   return state.decoration.images_name
      // },
      dataDecoration: (state) => {
        return state.decoration.data.data.data
      },
      dataDecorationItem: (state) => {
        return state.decoration.item
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
    selectedItem (x, item) {
      this.activeItem = x
      this.selected = item
    },
    getDecoration () {
      this.tab = 2
      this.isLoading2 = true
      this.$store
        .dispatch('decoration/fetchDecoration')
        .then((response) => {
          this.isLoading2 = false
        })
        .catch((error) => {
          this.isLoading2 = false
          this.$toast.error(error.response.data.message, {
            position: 'top-center',
            duration: 5000
          })
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    closeProfile () {
      this.$store.commit('user/SET_BTN_DECORATION')
    },
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
    margin: 65px 0px 0px 23px;
    .box-carousel {
      margin-top: 20px;
      width: 100%;
      height: 260px;
      background: linear-gradient(
        180deg,
        rgba(173, 193, 222, 0) 7.7%,
        #adc1de 16.67%,
        #adc1de 48.44%,
        #adc1de 78.67%,
        rgba(173, 193, 222, 0) 93.84%
      );
      box-shadow: inset -5px 0px 4px rgba(28, 71, 132, 0.08),
        inset 5px 0px 8px rgba(28, 71, 132, 0.08);
      position: relative;
      .title-carousel {
        position: absolute;
        top: -10px;
        .bg-logo {
          height: 28px;
          width: 154.93px;
        }
        .text-logo {
          position: absolute;
          top: 1px;
          left: 20px;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;

          color: #ffffff;
        }
      }
      .content-carousel {
        width: 100%;
        padding: 20px 20px 0px 20px;
        .item-carousel {
          cursor: pointer;
          margin-left: auto;
          margin-right: auto;
          margin-top: 15px;
          // background-color: Red;
          position: relative;
          .carousel-logo-bg {
            // height: 70px;
            width: 170pxpx;
            // object-fit: fill;
          }
          .carousel-logo-item {
            height: 65px;
            width: 162px;
            object-fit: contain;
            position: absolute;
            top: 2px;
            left: 0px;
          }
        }
      }
    }
    .no-padding {
      margin-bottom: 10px;
    }
    .title-card {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      display: flex;
      color: #114164;
    }
    .title2-card {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      padding-top: 6px;
      color: #114164;
    }
    .form-petra {
      font-size: 14px;
    }
    .btn-edit {
      margin-top: 4px;
      position: relative;
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
        height: 57px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 140px;
        background-color: rgba(152, 18, 18, 0.75);
      }
      .square-center {
        z-index: 1;
        height: 57px;
        width: 120px;
        margin-right: 10px;
        margin-left: 10px;
        background-color: rgba(152, 18, 18, 0.75);
      }
      .square-bottom {
        z-index: 1;
        height: 57px;
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
