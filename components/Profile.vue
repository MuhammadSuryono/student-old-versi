<template>
  <div class="profile-card">
    <PTitle name="Edit Profile" type="profile" />
    <!-- edit profile -->
    <div v-if="tab === 1">
      <span v-if="!isLoading">
        <div class="main-profile">
          <div class="row-1">
            <div class="left-side">
              <div class="avatar-profile">
                <img :src="images" class="img-logo">
              </div>
            </div>
            <div class="right-side">
              <div class="title-input">About Me</div>
              <FormTextArea
                v-model="form.bio"
                style="width: 250px; height: 169px; margin-top: 10px"
              />
            </div>
          </div>
          <ButtonV2
            value="Change Avatar"
            width="144"
            @click.native="gotoAvatar()"
          />
          <div class="card-form">
            <div class="row-form">
              <div class="label-form">Full Name</div>
              <div class="data-form">
                <input
                  v-model="form.fullname"
                  class="inputs"
                  type="text"
                  placeholder="username@email.id"
                >
              </div>
            </div>
            <div class="row-form">
              <div class="label-form">User name</div>
              <div class="data-form disable-data">
                <div class="disable-data">{{ form.usernam }}</div>
              </div>
            </div>
            <div class="row-form">
              <div class="label-form">Email Address</div>
              <div class="data-form">
                <input
                  v-model="form.email"
                  class="inputs"
                  type="text"
                  placeholder="username@email.id"
                >
              </div>
            </div>
            <div class="row-form">
              <div class="label-form">Gender</div>
              <div class="data-form">
                <div class="disable-data">{{ form.gender }}</div>
              </div>
            </div>
            <div class="row-form">
              <div class="label-form">Learning <br>Establishment</div>
              <div class="data-form">
                <div class="disable-data">{{ form.learning }}</div>
              </div>
            </div>
            <div class="row-form">
              <div class="label-form" />
              <div class="data-form">
                <ButtonV2
                  value="Change Password"
                  width="260"
                  @click.native="openTab(2)"
                />
              </div>
            </div>
          </div>
          <div class="btn-action">
            <Back class="cursor-pointer" @click.native="closeProfile()" />
            <ButtonV2
              value="Save Changes"
              width="220"
              height="38"
              style="margin-right: 26px"
              @click.native="updateProfile()"
            />
          </div>
        </div>
      </span>
      <v-skeleton-loader
        v-else
        type="card-avatar, article, actions"
        style="margin-top: 80px"
      />
    </div>
    <!-- change password -->
    <div v-if="tab === 2">
      <div class="column profile-container">
        <div class="btn-profile">
          <div class="text-profile">
            Change Password
          </div>
        </div>
      </div>

      <span v-if="!isLoading2">
        <div class="main-profile">
          <div class="card-form">
            <div class="row-form">
              <div class="label-form">Old Password</div>
              <div class="data-form" style="position: relative">
                <input
                  v-model="old_password"
                  class="inputs"
                  :type="show1 ? 'text' : 'password'"
                  placeholder="Enter old password"
                >
                <img
                  v-if="show1"
                  src="~/assets/images/edit_profile/eye-1.svg"
                  style="
                    right: 46px;
                    position: absolute;
                    top: 9px;
                    cursor: pointer;
                  "
                  @click="show1 = !show1"
                >
                <img
                  v-else
                  src="~/assets/images/edit_profile/eye-2.svg"
                  style="
                    right: 46px;
                    position: absolute;
                    top: 9px;
                    cursor: pointer;
                  "
                  @click="show1 = !show1"
                >
              </div>
            </div>
            <div class="row-form">
              <div class="label-form">New Password</div>
              <div class="data-form" style="position: relative">
                <input
                  v-model="new_password"
                  class="inputs"
                  :type="show2 ? 'text' : 'password'"
                  placeholder="Enter old password"
                >
                <img
                  v-if="show2"
                  src="~/assets/images/edit_profile/eye-1.svg"
                  style="
                    right: 46px;
                    position: absolute;
                    top: 9px;
                    cursor: pointer;
                  "
                  @click="show2 = !show2"
                >
                <img
                  v-else
                  src="~/assets/images/edit_profile/eye-2.svg"
                  style="
                    right: 46px;
                    position: absolute;
                    top: 9px;
                    cursor: pointer;
                  "
                  @click="show2 = !show2"
                >
              </div>
            </div>
            <div class="row-form">
              <div class="label-form">Confirm Password</div>
              <div class="data-form" style="position: relative">
                <input
                  v-model="confirm_password"
                  class="inputs"
                  :type="show3 ? 'text' : 'password'"
                  placeholder="Enter old password"
                >
                <img
                  v-if="show3"
                  src="~/assets/images/edit_profile/eye-1.svg"
                  style="
                    right: 46px;
                    position: absolute;
                    top: 9px;
                    cursor: pointer;
                  "
                  @click="show3 = !show3"
                >
                <img
                  v-else
                  src="~/assets/images/edit_profile/eye-2.svg"
                  style="
                    right: 46px;
                    position: absolute;
                    top: 9px;
                    cursor: pointer;
                  "
                  @click="show3 = !show3"
                >
              </div>
            </div>
          </div>
          <div class="btn-action">
            <Back class="cursor-pointer" @click.native="openTab(1)" />
            <ButtonV2
              value="Save Changes"
              width="220"
              height="38"
              style="margin-right: 26px"
              @click.native="changePassword()"
            />
          </div>
        </div>
      </span>
      <v-skeleton-loader
        v-else
        v-bind="attrs"
        type="card-avatar, article, actions"
        style="margin-top: 80px"
      />
    </div>
    <!-- change avatar -->
    <div v-if="tab === 3">
      <span v-if="!isLoading3">
        <div class="column profile-container">
          <div class="btn-profile">
            <div class="text-profile">Change Avatar</div>
          </div>
        </div>
        <div class="main-profile" style="margin-top: 20px">
          <div class="avatar-display">
            <div class="avatar-img">
              <div class="bg-1" />
              <div class="bg-2" />
              <img v-if="!activeSelected" :src="images" class="img-logo">
              <img v-else :src="selected.avatar" class="img-logo">
            </div>
            <div class="avatar-name">
              <div v-if="!activeSelected" class="box3">“{{ imagesName }}”</div>
              <div v-else class="box3">{{ selected.name }}”</div>
              <div class="box2" />
              <div class="box4" />
              <div class="box5" />
            </div>
          </div>
          <div class="list-avatar">
            <div class="title-card">
              <span style="transform: skew(29deg)"> Choose Avatar </span>
            </div>
            <div class="card-list">
              <div
                v-for="(item, index) in dataAvatarItem"
                :key="index"
                class="avatar-image cursor-pointer"
                :style="item.avatar !== 'null' ? '' : 'background-color: #76a1c8;display: flex;align-items: center;justify-content: center;'"
                @click="selectedItem(index, item)"
              >
                <span v-if="item.avatar !== 'null'">
                  <span v-if="activeItem === null">
                    <div v-if="item.selected" class="current-image">current</div>
                  </span>
                  <span v-else>
                    <div v-if="index === activeItem" class="current-image">current</div>
                  </span>
                  <div class="img-data">
                    <img :src="item.avatar" class="images-avatar">
                  </div>
                  <div class="name-avatar">{{ item.name }}</div>
                </span>
                <img v-if="item.avatar === 'null'" src="~/assets/images/edit_profile/lock.svg">
              </div>
              <v-pagination
                v-if="dataAvatar.data.data.total > 8"
                v-model="page"
                :length="Math.ceil(dataAvatar.data.data.total / 8)"
                class="my-2"
                @input="getAvatar()"
              />
            </div>
          </div>
          <div class="btn-action">
            <Back class="cursor-pointer" @click.native="backtoTab1()" />
            <ButtonV2
              value="Save Changes"
              width="220"
              height="38"
              style="margin-right: 26px"
              @click.native="updateAvatar()"
            />
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
      activeSelected: false,
      selected: {},
      activeItem: null,
      page: 1,
      show1: false,
      show2: false,
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
      isLoading3: false,
      selectedCursor: 'pointer'
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
    openTab (x) {
      this.tab = x
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    selectedItem (x, item) {
      if (item.avatar !== 'null') {
        this.activeSelected = true
        this.activeItem = x
        this.selected = item
      } else {
        // this.$toast.error('avatar not found', {
        //   position: 'top-center',
        //   duration: 5000
        // })
      }
    },
    backtoTab1 () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.tab = 1
      this.activeSelected = false
    },
    updateAvatar () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.getAvatar()
      this.tab = 3
    },
    next (x) {
      console.log(x)
    },
    getAvatar (x) {
      this.activeItem = null
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    updateProfile () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.isLoading = true
      const name = this.form.fullname.trim()
      const Firstname = name.split(' ')[0]
      const Lastname = name.substring(Firstname.length).trim()
      const data = {
        first_name: Firstname,
        last_name: Lastname,
        // username: this.form.username,
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
      this.$store.commit('user/SET_BTN_AUDIO', true)
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
    margin: 80px 0px 0px 23px;
    .row-1 {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      .left-side {
        width: 140px;
        .avatar-profile {
          height: 195px;
          width: 144px;
          z-index: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          background: linear-gradient(
            28deg,
            rgb(221 221 221) 0%,
            rgb(30 30 62) 0%,
            rgb(0, 212, 255) 100%
          );
          .img-logo {
            position: absolute;
            bottom: 0px;
            z-index: 2;
            margin-top: 1.8px;
            object-fit: cover;
            max-width: 140px;
            height: 95%;
          }
        }
      }
      .right-side {
        margin-left: 40px;
        .title-input {
          font-family: 'Nunito';
          font-weight: bold;
          font-size: 14px;
          color: #333333;
        }
      }
    }
    .card-form {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .row-form {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .label-form {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          color: #333333;
          width: 195px;
        }
        .data-form {
          width: 304px;
          .disable-data {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #5b6987;
          }
          .inputs {
            width: 250px;
            font-family: 'Nunito';
            font-weight: 500;
            font-size: 12px;
            color: #7d96aa;
            background: #ffffff;
            border: 1.5px solid #ececec;
          }
          input {
            line-height: 30px;
            padding-left: 8px;
            padding-right: 8px;
          }
          input:focus {
            outline: none;
            border: 1.5px solid #1c4091;
          }
          input:not(:placeholder-shown) {
            border: 1.5px solid #1c4091;
          }

          input:placeholder-shown {
            border: 1.5px solid #ececec;
          }
        }
      }
    }
    .btn-action {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    .avatar-display {
      margin-top: 40px;
      width: 442px;
      height: 240px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      .avatar-img {
        height: 194px;
        width: 143px;
        position: relative;
        left: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        .bg-1 {
          position: absolute;
          right: -2px;
          top: 2px;
          height: 100%;
          width: 100%;
          z-index: -1;
          background: rgb(34, 193, 242, 0.5);
        }
        .bg-2 {
          position: absolute;
          z-index: 1;
          background: #2593d0;
          border: 2px solid white;
          height: 100%;
          width: 100%;
        }
        .img-logo {
          position: absolute;
          bottom: 2px;
          z-index: 2;
          margin-top: 1.8px;
          -o-object-fit: cover;
          object-fit: cover;
          max-width: 140px;
          height: 95%;
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
          height: 20px;
          width: 178px;
          --mask: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0) 2px,
            #000 0 calc(100% - 2px),
            rgba(0, 0, 0, 0) 0
          );
          -webkit-mask: var(--mask);
          mask: var(--mask);
          background: rgb(46, 87, 153, 0.8);
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
          height: 24px;
          width: 180px;
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
        width: 410px;
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
          width: 88px;
          border: 2px solid white;
          background: #2593d0;
          position: relative;
          .current-image {
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
              object-fit: contain;
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
      }
      .square-center {
        z-index: 1;
        height: 57px;
        width: 120px;
        margin-right: 10px;
        margin-left: 10px;
      }
      .square-bottom {
        z-index: 1;
        height: 57px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 140px;
      }
      .trapesium-1 {
        z-index: 1;
        height: 0px;
        width: 140px;
        border-top: 20px solid;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
      }
      .trapesium-2 {
        z-index: 1;
        height: 0px;
        width: 140px;
        border-bottom: 20px solid;
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
