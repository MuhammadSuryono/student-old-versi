<template>
  <div class="profile-card">
    <PTitle name="Manage Decorations" />
    <div v-if="tab === 1">
      <span>
        <div class="main-profile" style="margin-top: 80px">
          <!-- foto -->
          <v-row justify="center" align="center" no-gutters>
            <img
              :src="pathDecoration"
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
                <div class="text-edit" style="top: 7px">Change Background</div>
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
              <div class="text-edit" style="top: 7px">Save Changes</div>
            </div>
          </div>
        </div>
      </span>
      <!-- <v-skeleton-loader
        v-else
        type="card-avatar, article, actions"
        style="margin-top: 80px"
      /> -->
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
      <span>
        <div class="main-profile" style="margin-top: 40px; margin-bottom: 60px">
          <!-- foto -->
          <div class="columns is-mobile" style="margin-top: 0px">
            <img
              v-if="!activeSelected"
              :src="pathDecoration"
              style="
                width: 329.6px;
                height: 180px;
                margin-left: auto;
                margin-right: auto;
              "
            ><img
              v-else
              :src="selected.background"
              style="
                width: 329.6px;
                height: 180px;
                margin-left: auto;
                margin-right: auto;
              "
            >
          </div>
          <div class="name-card">
            <img src="~/assets/images/name.png" class="img-card">
            <div v-if="!activeSelected" class="text-card">
              {{ nameDecoration }}
            </div>
            <div v-else class="text-card">
              {{ selected.name }}
            </div>
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
                    <img
                      v-if="index === activeItem"
                      src="~/assets/images/border-selected.png"
                      style="
                        position: absolute;
                        top: 4px;
                        z-index: 8;
                        left: 24px;
                      "
                    >
                    <span
                      v-if="index === activeItem && item.selected === true"
                      style="z-index: 8"
                    >
                      <img
                        src="~/assets/images/border-selected.png"
                        style="
                          position: absolute;
                          top: 4px;
                          z-index: 8;
                          left: 24px;
                        "
                      >
                      <img
                        src="~/assets/images/triangle-active.png"
                        style="
                          position: absolute;
                          top: 4px;
                          z-index: 8;
                          right: 20px;
                        "
                      >
                    </span>
                    <span v-if="item.selected === true" style="z-index: 8">
                      <img
                        src="~/assets/images/triangle-active.png"
                        style="
                          position: absolute;
                          top: 4px;
                          z-index: 8;
                          right: 20px;
                        "
                      >
                    </span>

                    <img
                      src="~/assets/images/border-blue.png"
                      style="
                        position: absolute;
                        top: 4px;
                        z-index: 7;
                        left: 24px;
                      "
                    >
                    <div class="blackBg" />
                    <div class="Image">
                      <img :src="item.background" class="carousel-logo-item">
                    </div>
                  </span>
                  <span v-else>
                    <img
                      src="~/assets/images/decor_disabled.png"
                      class="carousel-logo-bg"
                    >
                  </span>
                </v-col>
              </v-row>
              <!-- <b-pagination
                total="70"
                per-page="4"
                :order="order"
                class="my-4"
              /> -->
              <!-- <v-pagination v-model="page" class="my-4" :length="4" /> -->

              <v-pagination
                v-if="dataDecoration.data.data.total > 8"
                v-model="page"
                :length="Math.ceil(dataDecoration.data.data.total / 4)"
                class="my-5"
                @input="getDecoration()"
              />
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
              <div
                class="text-edit"
                style="top: 7px"
                @click="updateDecoration()"
              >
                Save Changes
              </div>
            </div>
          </div>
        </div>
      </span>
      <!-- <v-skeleton-loader
        v-else
        type="card-avatar, article, actions"
        style="margin-top: 60px"
      /> -->
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
      order: 'is-centered',
      activeSelected: false,
      selected: {},
      activeItem: null,
      isLoading: false,
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
        return state.decoration.data
      },
      dataDecorationItem: (state) => {
        return state.decoration.item
      },
      pathDecoration: (state) => {
        return state.decoration.pathDecoration
      },
      nameDecoration: (state) => {
        return state.decoration.nameDecoration
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
    updateDecoration () {
      // this.activeSelected = false
      console.log(this.selected)
      this.isLoading2 = true
      this.$store
        .dispatch('decoration/changeDecoration', {
          background_id: this.selected.id
        })
        .then((response) => {
          this.$store.dispatch(
            'decoration/updateImages',
            this.selected.background
          )
          this.$store.dispatch(
            'decoration/updateImagesName',
            this.selected.name
          )
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
    selectedItem (x, item) {
      if (item.background !== 'null') {
        this.activeSelected = true
        this.activeItem = x
        this.selected = item
      }
    },
    getDecoration () {
      this.tab = 2
      this.isLoading2 = true
      this.activeItem = null
      this.$store
        .dispatch('decoration/fetchDecoration', this.page)
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
      this.getDataDecoration()
    },
    getDataDecoration () {
      this.isLoading = true
      this.$store
        .dispatch('decoration/fetchCurrentDecoration')
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error.response.data.message, {
            position: 'top-center',
            duration: 5000
          })
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.Image {
  position: absolute;
  height: 70px;
  width: 164px;
  margin-left: 20px;
}

.Image img {
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 0%,
    100% 70%,
    00% 0%,
    0% 100%,
    0% 86%,
    0% 20%
  );
  clip-path: polygon(
    0% 0%,
    0% 0%,
    89% 0%,
    100% 30%,
    100% 100%,
    0% 100%,
    0% 86%,
    0% 20%
  );
}

.blackBg {
  position: absolute;
  top: 0;
  left: 0;
  // width: 100%;
  // height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.name-card {
  position: relative;
  .img-card {
    width: 257px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .text-card {
    top: -27px;
    width: 200px;
    position: relative;
    text-align: center;
    margin: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
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
          height: 70px;
          margin-top: 15px;
          // background-color: Red;
          position: relative;
          .carousel-logo-bg {
            position: absolute;
            top: 0px;
            left: 25px;
            width: 165px;
            height: 70px;
            object-fit: contain;
          }
          .carousel-logo-item {
            // height: 70px;
            // width: 164px;
            object-fit: cover;
            // border-radius: 10px;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            // position: relative;
            // position: absolute;
            // top: 2px;
            // left: 25px;
          }
          // .carousel-logo-item:before {
          //   content: '';
          //   position: absolute;
          //   top: 0;
          //   right: 0;
          //   border-top: 80px solid white;
          //   border-left: 80px solid red;
          //   width: 0;
          // }
        }
        .item-carousel:hover {
          color: rgba(83, 169, 230, 0.2);
          // z-index: 9;
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
