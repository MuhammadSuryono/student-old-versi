<template>
  <div class="profile-card">
    <PTitle name="Edit Profile" />
    <!-- edit profile -->
    <div v-if="tab === 1">
      <span>
        <div class="main-profile">
          <div class="columns pr-4">
            <div class="column is-narrow avatar-container">
              <div class="square-top" :style="btnStyles1" />
              <div class="trapesium-1" :style="btnStyles2" />
              <div class="square-center" :style="btnStyles1" />
              <div class="trapesium-2" :style="btnStyles3" />
              <div class="square-bottom" :style="btnStyles1" />
              <img :src="images" class="img-logo">

              <div class="btn-edit" @click="gotoAvatar()">
                <img src="~/assets/images/btn-petra.png">
                <div class="text-edit">Change Avatar</div>
              </div>
            </div>
            <div class="column">
              <div class="title-card" style="margin-bottom: 7px">About me</div>
              <v-textarea
                v-model="form.bio"
                placeholder="Add Bio..."
                name="input-7-1"
                hide-details
                outlined
                rows="6"
                class="form-petra"
              />
            </div>
          </div>
          <!-- fullname -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div class="title2-card">Fullname</div>
            </div>
            <div class="column">
              <v-text-field
                v-model="form.fullname"
                hide-details
                outlined
                dense
                class="form-petra"
              />
            </div>
          </div>
          <!-- username -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div class="title2-card">Username</div>
            </div>
            <div class="column">
              <v-text-field
                v-model="form.username"
                hide-details
                outlined
                dense
                class="form-petra"
              />
            </div>
          </div>
          <!-- email -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div class="title2-card">Email Address</div>
            </div>
            <div class="column">
              <v-text-field
                v-model="form.email"
                hide-details
                outlined
                dense
                class="form-petra"
              />
            </div>
          </div>
          <!-- gender  -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div class="title2-card">Gender</div>
            </div>
            <div class="column">
              <v-text-field
                v-model="form.gender"
                hide-details
                disabled
                filled
                outlined
                dense
                class="form-petra"
              />
            </div>
          </div>
          <!-- Learning Establishment -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div
                class="title2-card"
                style="padding-top: 2px; line-height: 19px"
              >
                Learning Establishment
              </div>
            </div>
            <div class="column">
              <v-text-field
                v-model="form.learning"
                hide-details
                disabled
                filled
                outlined
                dense
                class="form-petra"
              />
            </div>
          </div>
          <div class="columns pr-4">
            <div
              class="column is-narrow avatar-container is-offset-5"
              @click="tab = 2"
            >
              <div class="btn-edit" style="width: 258px; float: right">
                <img
                  src="~/assets/images/btn-petra.png"
                  style="width: 258px; height: 29px"
                >
                <div class="text-edit" style="top: 3px">Change Password</div>
              </div>
            </div>
          </div>
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
            <div class="btn-edit" @click="updateProfile()">
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
    <!-- change password -->
    <div v-if="tab === 2">
      <div class="column profile-container">
        <div class="btn-profile">
          <img
            src="~/assets/images/bg-profile.png"
            style="width: 257.32px; height: 30px"
          >
          <div class="text-profile">
            Change Password
          </div>
        </div>
      </div>

      <span>
        <div class="main-profile">
          <!-- Old -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div class="title2-card">Old Password</div>
            </div>
            <div class="column">
              <v-text-field
                v-model="old_password"
                hide-details
                outlined
                dense
                class="form-petra"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                counter
                @click:append="show1 = !show1"
              />
            </div>
          </div>
          <!-- New -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div class="title2-card">New Password</div>
            </div>
            <div class="column">
              <v-text-field
                v-model="new_password"
                hide-details
                outlined
                dense
                class="form-petra"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                name="input-10-1"
                counter
                @click:append="show2 = !show2"
              />
            </div>
          </div>
          <!-- confirm  -->
          <div class="columns pr-4 no-padding is-gapless">
            <div class="column is-4">
              <div
                class="title2-card"
                style="padding-top: 2px; line-height: 19px"
              >
                Confirm New Password
              </div>
            </div>
            <div class="column">
              <v-text-field
                v-model="confirm_password"
                hide-details
                outlined
                dense
                class="form-petra"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                name="input-10-1"
                counter
                @click:append="show3 = !show3"
              />
            </div>
          </div>
        </div>
        <div class="columns pr-4 mt-4">
          <div class="column is-narrow avatar-container">
            <div class="btn-edit" @click="tab = 1">
              <img
                src="~/assets/images/back-btn.png"
                style="width: 98.15px;height: 36.49px;x"
              >
            </div>
          </div>
          <div class="column avatar-container">
            <div class="btn-edit" @click="changePassword()">
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
        v-bind="attrs"
        type="card-avatar, article, actions"
        style="margin-top: 80px"
      /> -->
    </div>
    <!-- change avatar -->
    <div v-if="tab === 3">
      <span>
        <div class="column profile-container">
          <div class="btn-profile">
            <img
              src="~/assets/images/bg-profile.png"
              style="width: 257.32px; height: 30px"
            >
            <div class="text-profile">Change Avatar</div>
          </div>
        </div>
        <div class="main-profile" style="margin-top: 20px">
          <!-- foto -->
          <div
            class="columns is-mobile"
            style="margin-top: 0px; margin-bottom: 0px"
          >
            <div
              class="column is-offset-one-quarter avatar-container2"
              style="margin-top: 0px; margin-left: 174px"
            >
              <div class="square-top" :style="btnStyles1" />
              <div class="trapesium-1" :style="btnStyles2" />
              <div class="square-center" :style="btnStyles1" />
              <div class="trapesium-2" :style="btnStyles3" />
              <div class="square-bottom" :style="btnStyles1" />
              <img v-if="!activeSelected" :src="images" class="img-logo">
              <img v-else :src="selected.avatar" class="img-logo">
            </div>
          </div>
          <div class="name-card">
            <img src="~/assets/images/name.png" class="img-card">
            <div v-if="!activeSelected" class="text-card">
              {{ imagesName }}
            </div>
            <div v-else class="text-card">
              {{ selected.name }}
            </div>
          </div>
          <div class="box-carousel pr-4">
            <div class="title-carousel">
              <img src="~/assets/images/carousel_1.png" class="bg-logo">
              <div class="text-logo">
                All Avatars {{ dataAvatar.data.data.total / 8 }}
              </div>
            </div>
            <div class="content-carousel">
              <v-row no-gutters align="center" justify="center">
                <!-- <span> -->
                <v-col
                  v-for="(item, index) in dataAvatarItem"
                  :key="index"
                  align="center"
                  justify="center"
                  cols="12"
                  sm="3"
                  class="item-carousel"
                  @click="selectedItem(index, item)"
                >
                  <span v-if="item.avatar !== 'null'">
                    <span v-if="index === activeItem">
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
                    </span>
                    <img
                      :src="item.avatar"
                      class="carousel-logo-item"
                      style=""
                    >
                  </span>
                  <span v-else>
                    <img
                      src="~/assets/images/carousel_disabled.png"
                      class="carousel-logo-bg"
                    >
                  </span>
                </v-col>
                <!-- </span> -->
              </v-row>
              <v-pagination
                v-if="dataAvatar.data.data.total > 8"
                v-model="page"
                :length="Math.ceil(dataAvatar.data.data.total / 8)"
                class="my-2"
                @input="getAvatar()"
              />
            </div>
          </div>
        </div>
        <div class="columns pr-4 mt-4">
          <div class="column is-narrow avatar-container">
            <div class="btn-edit" @click="backtoTab1()">
              <img
                src="~/assets/images/back-btn.png"
                style="width: 98.15px;height: 36.49px;x"
              >
            </div>
          </div>
          <div class="column avatar-container">
            <div class="btn-edit" @click="updateAvatar()">
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
    <!-- </div> -->
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
      activeSelected: false,
      selected: {},
      activeItem: null,
      page: 1,
      show1: false,
      show2: true,
      show3: false,
      old_password: '',
      new_password: '',
      confirm_password: '',
      tab: 1,
      form: {
        bio: '',
        fullname: '',
        username: '',
        email: '',
        gender: '',
        learning: ''
      },
      data: {
        avatar_image: '',
        avatar_bg: '',
        name: '',
        courses: 0,
        achievements: 0,
        faction: '',
        faction_bg: '',
        level: 0
      },
      isLoading: false,
      isLoading2: false,
      isLoading3: false
    }
  },
  computed: {
    ...mapState({
      myTasks: state => state.user.fullname,
      users: (state) => {
        return state.user.users
      },
      sidebar: (state) => {
        return state.user.sidebar
      },
      images: (state) => {
        return state.user.images
      },
      imagesName: (state) => {
        return state.user.images_name
      },
      dataAvatar: (state) => {
        return state.avatar.data
      },
      dataAvatarItem: (state) => {
        return state.avatar.item
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
    this.$store.dispatch('user/get')
    this.getData()
  },
  methods: {
    selectedItem (x, item) {
      console.log('selected')
      console.log('x : ', x)
      console.log('item : ', item)
      console.log(this.selected)
      console.log('selected')
      this.activeSelected = true
      this.activeItem = x
      this.selected = item
    },
    backtoTab1 () {
      this.tab = 1
      this.activeSelected = false
    },
    updateAvatar () {
      // this.activeSelected = false
      console.log(this.selected)
      this.isLoading3 = true
      this.$store
        .dispatch('avatar/changeAvatar', {
          avatars_game_id: this.selected.id
        })
        .then((response) => {
          this.$store.dispatch('user/updateImages', this.selected.avatar)
          this.$store.dispatch('user/updateImagesName', this.selected.name)
          this.isLoading3 = false
        })
        .catch((error) => {
          this.isLoading3 = false
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
    gotoAvatar () {
      this.getAvatar()
      this.tab = 3
    },
    next (x) {
      console.log(x)
    },
    getAvatar (x) {
      // if (typeof x !== 'undefined') {
      this.activeItem = null
      //   this.page = x
      // }
      console.log('activeItem : ', this.activeItem)
      this.isLoading3 = true
      this.$store
        .dispatch('avatar/fetchAvatar', this.page)
        .then((response) => {
          this.isLoading3 = false
        })
        .catch((error) => {
          this.isLoading3 = false
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
      this.$store.commit('user/SET_BTN_PROFILE')
    },
    updateProfile () {
      this.isLoading = true
      const name = this.form.fullname.trim()
      const Firstname = name.split(' ')[0]
      const Lastname = name.substring(Firstname.length).trim()
      const data = {
        first_name: Firstname,
        last_name: Lastname,
        username: this.form.username,
        about: this.form.bio,
        email: this.form.email
      }

      this.$store
        .dispatch('user/updateProfile', data)
        .then((response) => {
          this.$store.dispatch(
            'user/updateFullname',
            data.first_name + ' ' + data.last_name
          )
          this.$store.dispatch('user/get')
          this.isLoading = false
          this.$toast.success('Success Update Profile', {
            position: 'top-center',
            duration: 5000
          })
        })
        .catch((error) => {
          console.log('error : ', error)
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
    },
    changePassword () {
      this.isLoading2 = true
      this.$store
        .dispatch('user/changePassword', {
          old_password: this.old_password,
          new_password: this.new_password,
          new_password_confirmation: this.confirm_password
        })
        .then((response) => {
          this.$toast.success('Success Update Password', {
            position: 'top-center',
            duration: 5000
          })
          this.$store.dispatch('user/get')
          this.isLoading2 = false
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            position: 'top-center',
            duration: 5000
          })
          this.isLoading2 = false
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    getData () {
      this.isLoading = true
      this.$store
        .dispatch('user/get')
        .then((response) => {
          this.isLoading = false
          this.$store.commit('user/SET_PROFILES', response.data.data.user)
          const data = response.data.data.user
          this.form.bio = data.about
          this.form.fullname = data.full_name
          this.form.username = data.username
          this.form.email = data.email
          this.form.gender = data.gender
          this.form.learning = data.student_type
          // eslint-disable-next-line valid-typeof
          if (typeof this.users !== null || typeof this.users !== undefined) {
            this.data.name = this.users.first_name + ' ' + this.users.last_name
            this.data.avatar_image = this.users.avatar.image
            this.data.avatar_bg = this.users.faction.avatar_bgcolor
          }
        })
        .catch((error) => {
          this.isLoading = false
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
.v-pagination__item--active {
  background-color: Red !important;
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
          width: 134.93px;
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
            height: 70px;
            width: 70px;
            object-fit: contain;
          }
          .carousel-logo-item {
            height: 45px;
            width: 60px;
            object-fit: cover;
            object-position: 0px 0px;
            position: absolute;
            top: 15.4px;
            left: 21px;
            transform: scale(1.3);
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
        bottom: 48px;
        z-index: 2;
        margin-top: 1.8px;
        object-fit: cover;
        max-width: 140px;
        height: 211px;
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
    .avatar-container2 {
      z-index: 1;
      position: relative;
      .img-logo {
        position: absolute;
        bottom: 12px;
        z-index: 2;
        margin-top: 1.8px;
        object-fit: cover;
        max-width: 140px;
        height: 211px;
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
