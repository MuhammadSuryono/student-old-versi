<template>
  <div class="profile-card">
    <PTitle name="Manage Decorations" type="decoration" />
    <div v-if="tab === 1">
      <span v-if="!isLoading">
        <div class="main-profile" style="margin-top: 80px">
          <div class="avatar-display">
            <div class="avatar-img">
              <img :src="pathDecoration" class="img-logo">
            </div>
            <div class="avatar-name">
              <div class="box3">“{{ nameDecoration }}”</div>
              <div class="box2" />
              <div class="box4" />
              <div class="box5" />
            </div>
          </div>
          <ButtonV2
            value="Change Background"
            width="173"
            height="29"
            style="margin-left:auto;margin-right:auto;margin-top:45px;left:-21px;"
            @click.native="getDecoration()"
          />
          <Back class="cursor-pointer mt-6" @click.native="closeProfile()" />
        </div>
      </span>
      <v-skeleton-loader
        v-else
        type="card-avatar, article, actions"
        style="margin-top: 80px"
      />
    </div>
    <div v-if="tab === 2">
      <div class="column profile-container">
        <div class="btn-profile">
          <div class="text-profile">
            Change Background
          </div>
        </div>
      </div>
      <span v-if="!isLoading2">
        <div class="main-profile" style="margin-top: 40px; margin-bottom: 60px">
          <!-- foto -->
          <div class="avatar-display">
            <div class="avatar-img">
              <img v-if="!activeSelected" :src="pathDecoration" class="img-logo">
              <img v-else :src="selected.background" class="img-logo">
            </div>
            <div class="avatar-name">
              <div class="box3">
                <span v-if="!activeSelected">
                  “{{ nameDecoration }}”
                </span>
                <span v-else>
                  "{{ selected.name }}""
                </span>
              </div>
              <div class="box2" />
              <div class="box4" />
              <div class="box5" />
            </div>
          </div>
          <div class="list-avatar">
            <div class="title-card">
              <span style="transform: skew(29deg)"> Choose Background </span>
            </div>

            <div class="card-list">
              <div
                v-for="(item, index) in dataDecorationItem"
                :key="index"
                class="avatar-image cursor-pointer"
                :style="item.background !== 'null' ? '' : 'background-color: #76a1c8;display: flex;align-items: center;justify-content: center;'"
                @click="selectedItem(index, item)"
              >
                <span v-if="item.background !== 'null'">
                  <span v-if="activeItem === null">
                    <div v-if="item.selected" class="current-image">current</div>
                  </span>
                  <span v-else>
                    <div v-if="index === activeItem" class="current-image">current</div>
                  </span>
                  <div class="img-data">
                    <img :src="item.background" class="images-avatar">
                  </div>
                  <div class="name-avatar">{{ item.name }}</div>
                </span>
                <img v-if="item.background === 'null'" src="~/assets/images/edit_profile/lock.svg">
              </div>
              <v-pagination
                v-if="dataDecoration.data.data.total > 8"
                v-model="page"
                :length="Math.ceil(dataDecoration.data.data.total / 4)"
                class="my-5"
                @input="getDecoration()"
              />
            </div>
          </div>

          <div class="btn-action">
            <Back class="cursor-pointer" @click.native="backTab(1)" />
            <ButtonV2
              value="Save Changes"
              width="220"
              height="38"
              style="margin-right: 26px"
              @click.native="updateDecoration()"
            />
          </div>
        </div>
      </span>
      <v-skeleton-loader
        v-else
        type="card-avatar, article, actions"
        style="margin-top: 60px"
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
    backTab (x) {
      this.tab = x
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    updateDecoration () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
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
          this.$store.dispatch('decoration/fetchCurrentDecoration')
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (item.background !== 'null') {
        this.activeSelected = true
        this.activeItem = x
        this.selected = item
      }
    },
    getDecoration () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
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
::-webkit-scrollbar {
  width: 9px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  height: 6px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: #e2e2e2;
  -webkit-border-radius: 7px;
}

::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

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
  background: rgb(239, 253, 253, 0.9);
  border: 0.7px solid #ffffff;
  z-index: 10;
  padding: 80px 10px 0px 20px;
  .profile-container {
    z-index: 1;
    position: relative;
    .btn-profile {
      top: 35px;
      left: 32px;
      position: relative;
      background: rgba(62, 111, 176, 0.9);
      height: 20px;
      width: 351px;
      transform: skew(-29deg);
      .text-profile {
        transform: skew(29deg);
        position: absolute;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #ffffff;
        left: 30px;
        top: 1px;
      }
    }
  }

  .main-profile {
    margin: 65px 0px 0px 23px;

    .btn-action {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    .avatar-display {
      margin-top: 40px;
      width: 418px;
      height: 240px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      .avatar-img {
        width: 398px;
        height: 195px;
        position: relative;
        left: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
        .img-logo {
          margin-top: 1.8px;
          -o-object-fit: cover;
          object-fit: cover;
          width: 398px;
          height: 192px;
          position: absolute;
          top:-2px;
        }
      }
      .avatar-name {
        margin-top: 4px;
        position: relative;
        .box5 {
          height: 6px;
          width: 6px;
          background: white;
          position: absolute;
          top: -2px;
          left: -2px;
          z-index: -1;
        }
        .box4 {
          height: 6px;
          width: 6px;
          background: white;
          position: absolute;
          bottom: -2px;
          right: -2px;
          z-index: -1;
        }
        .box3 {
          position: absolute;
          top: 2px;
          left: 1px;
          height: 19px;
          width: 269px;
          --mask: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0) 2px,
            #000 0 calc(100% - 2px),
            rgba(0, 0, 0, 0) 0
          );
          -webkit-mask: var(--mask);
          mask: var(--mask);
          background: rgb(46, 87, 153, 0.6);
          display: flex; /* establish flex container */
          flex-direction: column; /* make main axis vertical */
          justify-content: center; /* center items vertically, in this case */
          align-items: center; /* center items horizontally, in this case */
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: #ffffff;
        }
        .box2 {
          position: relative;
          height: 23px;
          width: 271px;
        }
        .box2:before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgb(28, 64, 145, 0.8);
          clip-path: polygon(
            0 0,
            calc(100% - 5px) 0,
            100% 5px,
            100% 100%,
            5px 100%,
            0 calc(100% - 5px),
            0 0,
            2px 2px,
            2px calc(100% - 5px - 0.83px),
            calc(5px + 0.83px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) calc(5px + 0.83px),
            calc(100% - 5px - 0.83px) 2px,
            2px 2px
          );
        }
      }
    }

    .list-avatar {
      margin-top: 17px;
      .title-card {
        margin-left: 5px;
        height: 20px;
        width: 136px;
        background: white;
        transform: skew(-29deg);
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #3573aa;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card-list {
        height: 100%;
        width: 400px;
        background: rgb(44, 110, 194, 0.75);
        border: 1px solid #d4eaff;
        display: flex;
        flex-wrap: wrap;
        padding-left: 8px;
        padding-top: 10px;
        padding-bottom: 10px;
        .avatar-image {
          margin: 5px;
          height: 89px;
          width: 180px;
          border: 2px solid white;
          background: #2593d0;
          position: relative;
          .current-image {
            z-index:1;
            position: absolute;
            top: 0.2px;
            right: -1.6px;
            height: 7px;
            width: 43px;
            background: #fff380;
            --mask: linear-gradient(107deg, rgba(0, 0, 0, 0) 2.81px, #000 0);
            -webkit-mask: var(--mask);
            mask: var(--mask);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 7px;
            line-height: 10px;
            text-align: center;
            color: #333333;
          }
          .img-data {
            height: 70px;
            width: 100%;
            .images-avatar {
              height: 100%;
              width: 100%;
              position: absolute;
              bottom: 0px;
              object-fit: cover;
            }
          }
          .name-avatar {
            height: 11px;
            width: 100%;
            background: rgb(255, 255, 255, 0.9);
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 7px;
            line-height: 10px;
            text-align: center;
            color: #5b6987;
            position: absolute;
            bottom: 0px;
          }
        }
      }
    }
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
