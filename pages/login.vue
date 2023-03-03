<template>
  <section
    class="hero is-link is-fullheight bg-images"
    style="overflow: hidden"
  >
    <div class="hero-body">
      <v-row align="center" justify="center">
        <v-col align="center" justify="center">
          <img v-if="!showRegister" src="~/assets/images/login/logo.png" class="img-logo">
          <div v-show="showLogin" class="container-login">
            <div class="square-right-corner" />
            <div class="square-left-corner" />
            <div class="bg-login">
              <div class="card-login">
                <div class="title">
                  Login to your Account
                </div>
                <input
                  v-model="state.email"
                  class="inputs"
                  type="text"
                  placeholder="username@email.id"
                  @keyup.native.enter="login()"
                >
                <input
                  v-model="state.password"
                  class="inputs"
                  type="password"
                  placeholder="password"
                  @keyup.native.enter="login()"
                >
                <div v-show="validation" class="validation">
                  {{ message }}
                </div>
                <div class="forgot-password" @click="forgotPassword()">
                  Forgot your password?
                </div>
                <recaptcha
                  class="captcha"
                  style="transform:scale(0.77);
                  -webkit-transform:scale(0.77);
                  transform-origin:0 0;
                  -webkit-transform-origin:0 0;margin-left:32px;margin-top:7px;"
                />
                <div class="container-button" @click="login()">
                  <div class="btn-login">
                    <div class="bg-login">
                      Login
                    </div>
                  </div>
                  <div class="square-right" />
                  <div class="square-left" />
                </div>
                <div class="login-account-register">
                  Don’t have account yet? <span id="btn-reg" style="color:#1C4091;cursor:pointer;" @click="toRegister()">Register.</span>
                </div>
                <div class="square-top-left" />
                <div class="square-top-right" />
                <div class="square-bottom-left" />
                <div class="square-bottom-right" />
                <div class="triangle-top-left" />
                <div class="border-top" />
                <div class="border-side" />
              </div>
            </div>
          </div>
          <div v-show="showForgot" class="container-login">
            <div class="square-right-corner" />
            <div class="square-left-corner" />
            <div class="bg-login">
              <div class="card-login">
                <div class="title">
                  Password recovery
                </div>
                <div class="desc">
                  We will be sending you an email with a new
                  code attached. Please use it to log in into your
                  account and reset your password.
                </div>
                <input
                  v-model="state.email"
                  class="inputs"
                  type="text"
                  placeholder="your email here"
                >
                <div v-show="validation" class="validation">
                  {{ message }}
                </div>
                <div class="container-button" style="margin-top:104px;" @click="backToLogin()">
                  <div class="btn-login">
                    <div class="bg-login">
                      Next
                    </div>
                  </div>
                  <div class="square-right" />
                  <div class="square-left" />
                </div>
                <div class="square-top-left" />
                <div class="square-top-right" />
                <div class="square-bottom-left" />
                <div class="square-bottom-right" />
                <div class="triangle-top-left" />
                <div class="border-top" />
                <div class="border-side" />
              </div>
            </div>
          </div>
          <div v-show="showRegister" class="container-login" style="width:800px;height:580px;">
            <div class="square-right-corner" />
            <div class="square-left-corner" />
            <div class="bg-login">
              <div
                class="card-login"
                style="padding:20px;
              display: flex;
              flex-direction: row;"
              >
                <div class="title-register">
                  Create an account
                </div>
                <div class="create-account" style="display:block">
                  <div class="fill-these" style="display:block">
                    Please fill these information below.
                  </div>
                  <div class="form-register">
                    <div style="margin-right:10px;">
                      <input
                        class="inputs"
                        type="text"
                        placeholder="First Name"
                        style="width:158px;margin-bottom:0px;"
                      >
                      <div class="validation-form">
                        *) Please use alphabet only.
                      </div>
                    </div>
                    <div>
                      <input
                        class="inputs"
                        type="text"
                        placeholder="Last Name"
                        style="width:158px;margin-bottom:0px;"
                      >
                      <div class="validation-form">
                        *) Please use alphabet only.
                      </div>
                    </div>
                  </div>
                  <div class="form-register" style="display:grid">
                    <input
                      class="inputs"
                      type="text"
                      placeholder="E-Mail Address"
                      style="width:326px;margin-bottom:0px;"
                    >
                    <div class="validation-form" style="display:block">
                      *) This E-mail already been taken.
                    </div>
                  </div>
                  <div class="form-register" style="display:grid">
                    <input
                      class="inputs"
                      type="text"
                      placeholder="Username"
                      style="width:326px;margin-bottom:0px;"
                    >
                    <div class="validation-form" style="display:block">
                      *) Please do not use special character. ie. ?!#$%
                    </div>
                  </div>

                  <div class="form-register" style="align-items:center">
                    <div class="fill-these">
                      Are you a ...?
                    </div>

                    <select v-model="role" class="select-text">
                      <option value="" disabled selected hidden>
                        Choose
                      </option>
                      <option value="volvo">
                        Petra Student
                      </option>
                    </select>
                  </div>
                  <div class="form-register" style="margin-top:120px;">
                    <input
                      class="inputs"
                      type="password"
                      placeholder="Password"
                      style="width:158px;margin-right:10px;"
                    >
                    <input
                      class="inputs"
                      type="password"
                      placeholder="Confirm Password"
                      style="width:158px;"
                    >
                  </div>
                  <div class="container-button" style="width:258.4px;height:30px;" @click="backToLogin()">
                    <div class="btn-login">
                      <div class="bg-login">
                        + Create Account
                      </div>
                    </div>
                    <div class="square-right" />
                    <div class="square-left" />
                  </div>
                  <div class="already">
                    Already have account? <span id="btn-reg" style="color:#1C4091;cursor:pointer;" @click="backToLogin()">Login</span>
                  </div>
                </div>
                <div class="card-carousel">
                  <img src="~/assets/images/login/carousel.svg">
                  <div class="box-carousel">
                    <img src="~/assets/images/login/bg_carousel.svg">
                    <div class="text-box">
                      Fill this part in with tips or advertisement materials
                    </div>
                  </div>
                  <div>
                    <span
                      v-for="(item, i ) in items"
                      :key="i"
                      class="dot"
                      :style="i === activeItem ? 'background: #3B69BC;' : 'background: #C7D8E2;'"
                      @click="selectItem(i)"
                    />
                  </div>
                  <div class="square-top-left" />
                  <div class="square-top-right" />
                  <div class="square-bottom-left" />
                  <div class="square-bottom-right" />
                  <div class="triangle-top-left" />
                  <div class="border-top" style="width:775px;" />
                  <div class="border-side" style="height:95%;" />
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <transition name="fade" appear>
      <div v-if="!isLoggedIn" class="modal-dialog">
        <div class="overlay-bg" />
        <div class="outside-card">
          <div class="top-corner" />
          <div class="bottom-corner" />
          <img src="~/assets/images/library/mascot.png" class="avatar-light">
          <div class="card-popup">
            <div class="bg-popup">
              <div class="text-popup">
                You have been logged out due to inactivity.
              </div>
            </div>
          </div>
          <div class="btn-logout" @click="logout()">
            OK
          </div>
        </div>
      </div>
    </transition>
    <div
      class="btn-helpdesk"
      @click="openWA()"
    >
      <div
        class="btn-finish no-select"
      >
        <div class="decoration" />
        <div class="square-right" />
        <div class="card-btn">
          <img
            src="~/assets/images/help_desk.svg"
            style="margin-right:9px"
          >
          Need Help?
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  auth: false,
  name: 'LoginPage',
  layout: 'login',

  data () {
    return {
      showLogin: false,
      showForgot: false,
      showRegister: true,
      popup: true,
      loading: false,
      state: {
        email: '',
        password: ''
      },
      hover1: false,
      validation: true,
      message: '*) Email invalid. Please try again.',
      role: '',
      items: 5,
      activeItem: 0
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => {
        return state.user.isLoggedIn
      }
    })
  },
  methods: {
    selectItem (i) {
      this.activeItem = i
    },
    toRegister () {
      this.showLogin = false
      this.showForgot = false
      this.showRegister = true
    },
    forgotPassword () {
      this.showLogin = false
      this.showForgot = true
      this.showRegister = false
    },
    backToLogin () {
      this.showLogin = true
      this.showForgot = false
      this.showRegister = false
    },
    openWA () {
      window.open('https://wa.me/+6281359809348?text=Hi%20,%20I%20need%20help%20in%20...', '_blank').focus()
    },
    ...mapMutations(['SET_IS_AUTH']),
    logout () {
      this.$store.commit('user/SET_LOGGEDIN', true)
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    validateEmail (email) {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    },
    login () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (this.state.email === '' || this.state.password === '') {
        if (this.state.email === '' && this.state.password === '') {
          this.$toast.error('Email & Password can not be empty.', {
            position: 'top-center',
            duration: 5000
          })
        }
        if (this.state.email === '' && this.state.password !== '') {
          this.$toast.error('Email can not be empty.', {
            position: 'top-center',
            duration: 5000
          })
        }
        if (this.state.email !== '' && this.state.password === '') {
          this.$toast.error('Password can not be empty.', {
            position: 'top-center',
            duration: 5000
          })
        }
      } else if (!this.validateEmail(this.state.email)) {
        this.$toast.error('Email must be valid', {
          position: 'top-center',
          duration: 5000
        })
      } else {
        this.loading = true
        this.$store
          .dispatch('user/login', {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
            this.$store.commit('user/SET_LOGGEDIN', true)
            this.loading = false
            if (response.status === 200 || response.status === 201) {
              if (response.data.data.user.role_id === 4 || response.data.data.user.role_id === '4') {
                const data = response.data.data
                localStorage.setItem('user_id', data.user.id)
                this.$store.commit('user/SET_USERS', data)
                if (
                  // eslint-disable-next-line valid-typeof
                  typeof data.user.avatar !== null ||
                  // eslint-disable-next-line valid-typeof
                  typeof data.user.avatar !== undefined
                ) {
                  this.$store.dispatch(
                    'user/updateImages',
                    data.user.avatar.image
                  )
                  this.$store.dispatch(
                    'user/updateImagesName',
                    data.user.avatar.name
                  )
                }
                if (data.user.last_name !== null) {
                  this.$store.commit(
                    'user/SET_FULLNAME',
                    data.user.first_name + ' ' + data.user.last_name
                  )
                } else {
                  this.$store.commit('user/SET_FULLNAME', data.user.first_name)
                }
                localStorage.setItem('localAuth', false)
                this.$router.push({ path: '/splash' })
              } else {
                this.$auth.logout()
                this.$router.push('/login')
                this.$toast.error('Please login with student account.', {
                  position: 'top-center',
                  duration: 5000
                })
              }
            } else {
              this.loading = false
              this.$toast.error(response.data.error.message, {
                position: 'top-center',
                duration: 5000
              })
            }
          })
          .catch(() => {
            this.loading = false
            this.$toast.error('Please select captcha to login',
              {
                position: 'top-center',
                duration: 5000
              })
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>

select:invalid { color: gray; }
select {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #949DA8;
  padding-left:11px;
  background: #FFFFFF;
  border: 1px solid #1C4091;
  width:200px;
  height:31px;
  margin-left:62px;
}
select:focus{
  outline: none;
  border: 1px solid #1C4091;
}
.inputs {
  width: 250px;
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 12px;
  color: #7D96AA;
  background: #FFFFFF;
  border: 1.5px solid #ECECEC;
  margin-bottom:10px;
}
input{
  line-height: 30px;
  padding-left:8px;
  padding-right:8px;
}
input:focus{
  outline: none;
  border: 1.5px solid #1C4091;
}
input:not(:placeholder-shown) {
  border: 1.5px solid #1C4091;
}

input:placeholder-shown {
  border: 1.5px solid #ECECEC;
}

.modal-dialog {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9999;

  .overlay-bg {
    height: 100vh;
    width: 100%;
    background: rgba(10, 10, 10, 0.5);
    cursor: pointer;
    position: absolute;
    z-index: 9999;
  }
  .outside-card {
    height: 200px;
    width: 600px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    .btn-logout {
      background-color: #0aa7c1;
      position: absolute;
      bottom: 8px;
      right: 8px;
      height: 30px;
      width: 110px;
      z-index: 999;
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      color: #f2f2f2;
      .bg-corner {
        background: #7289aa;
        opacity: 0.35;
        border: 0.657738px solid #ffffff;
        height: 18px;
        width: 18px;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        position: absolute;
      }
    }
    .bottom-corner {
      background-color: #2e5799;
      position: absolute;
      bottom: -3px;
      left: -3px;
      height: 100px;
      width: 100px;
      --g: #000, #0000 1deg 179deg, #000 180deg;
      --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100%
          0 /51% 100% no-repeat,
        conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
          100% no-repeat;
      -webkit-mask: var(--mask);
      mask: var(--mask);
    }
    .top-corner {
      background-color: #2e5799;
      position: absolute;
      top: -3px;
      right: -3px;
      height: 100px;
      width: 100px;
      --g: #000, #0000 1deg 179deg, #000 180deg;
      --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100%
          0 /51% 100% no-repeat,
        conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
          100% no-repeat;
      -webkit-mask: var(--mask);
      mask: var(--mask);
    }
    // position: absolute;
    .avatar-light {
      height: 217px;
      z-index: 99999;
      position: absolute;
      margin-left: -28px;
      margin-top: -39px;
    }
    .card-popup {
      height: 100%;
      width: 100%;
      --g: #000, #0000 1deg 179deg, #000 180deg;
      --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100%
          0 /51% 100% no-repeat,
        conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
          100% no-repeat;
      -webkit-mask: var(--mask);
      mask: var(--mask);
      padding: 8px;
      background-color: white;
      .bg-popup {
        background-color: #f2f2f2;
        height: 100%;
        width: 100%;
        --g: #000, #0000 1deg 179deg, #000 180deg;
        --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g))
            100% 0 /51% 100% no-repeat,
          conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
            100% no-repeat;
        -webkit-mask: var(--mask);
        mask: var(--mask);
        .text-popup {
          line-height: 160px;
          text-align: center;
          align-items: center;
          font-size: 16px;
          margin-left: 122px;
          color: #5b6987;
        }
      }
    }
  }
}
.hero {
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/images/login/bg_login.jpg');
}
.container-login {
  height:338px;
  width:306px;
  position: relative;
  .square-right-corner {
    position: absolute;
    height:30px;
    width:30px;
    top: -12px;
    right: -10px;
    background: #7289AA;
    opacity: 0.35;
    border: 0.69px solid #FFFFFF;
  }
  .square-left-corner {
    position: absolute;
    height:30px;
    width:30px;
    bottom: -12px;
    left: -10px;
    background: #7289AA;
    opacity: 0.35;
    border: 0.69px solid #FFFFFF;
  }
  .bg-login {
    background: linear-gradient(22.88deg, rgb(168, 245, 255, 0.35) 0%, rgb(195, 244, 249, 0.35) 52%, rgb(223, 242, 242, 0.35) 100%);
    padding:2px;
    height: 100%;
    width: 100%;
    .card-login {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgb(255, 255, 255, 0.85);
      border: 2px solid rgb(212, 234, 255);
      position:relative;
      z-index:1;
      .title-register {
        position: absolute;
        top:20px;
        left:0px;
        width:277px;
        height:23px;
        background: #2E5799;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .create-account {
        background: #F2F2F2;
        width:400px;
        height:534px;
        padding-left:30px;
        padding-top:50px;
        margin: 0;
        .fill-these {
          font-family: 'Nunito';
          font-style: normal;
          font-size: 11.4917px;
          color: #5B6987;
          text-align: left;
          margin-bottom:5px;
        }
        .form-register {
          display: flex;
          margin-bottom:10px;
          .validation-form {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 8px;
            line-height: 13px;
            color: #5B6987;
            text-align:left;
          }

        }
      }
      .card-carousel {
        width:350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .box-carousel {
          margin-top:36px;
          position: relative;
          .text-box {
            position: absolute;
            font-family: 'Nunito';
            font-style: normal;
            font-size: 12.7px;
            line-height: 17px;
            text-align: center;
            top:14px;
          }

        }
        .dot {
          height: 8px;
          width: 8px;
          background: #C7D8E2;
          border-radius: 50%;
          display: inline-block;
          margin-right:3.8px;
          cursor:pointer;
          margin-top:24px;
        }
      }
      .login-account-register {
        font-family: 'Nunito';
        font-style: normal;
        font-size: 12px;
        color: #5B6987;
        margin-top:10px;
        #btn-reg:hover {
          text-decoration: underline;
        }
      }
      .forgot-password {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 11px;
        text-align: right;
        color: #5B6987;
        margin-top:12px;
        margin-right:28px;
        cursor: pointer;
      }
      .forgot-password:hover {
        text-decoration: underline;
      }
      .already {
        font-family: 'Nunito';
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #5B6987;
        margin-top:14px;

        #btn-reg:hover {
          text-decoration: underline;
        }
      }
      .container-button {
        height: 26px;
        width: 168px;
        position: relative;
        cursor: pointer;
        .square-right {
          position: absolute;
          top:-2px;
          left:-2px;
          z-index:-1;
          height: 11px;
          width: 16px;
          background: #7289AA;
          opacity: 0.35;
          border: 0.657738px solid #FFFFFF;
        }
        .square-left {
          position: absolute;
          bottom:-2px;
          right:-2px;
          z-index:-1;
          height: 4px;
          width: 4px;
          background: #F2F2F2;
        }
        .btn-login {
          height: 100%;
          width: 100%;
          background: linear-gradient(22.88deg, rgb(168, 245, 255, 0.35) 0%, rgb(195, 244, 249, 0.35) 52%, rgb(223, 242, 242, 0.35) 100%);
          padding:2px;
          .bg-login {
            background: #4C7BC1;
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
          }
        }
      }
      .validation {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        color: #5B6987;
        text-align:left;
        padding-left:24px;
      }
      .square-top-left {
        background: #F5FBFF;
        height: 4px;
        width: 4px;
        top:-7px;
        left:-7px;
        position:absolute;
      }
      .square-top-right {
        background: #F5FBFF;
        height: 4px;
        width: 4px;
        top:-7px;
        right:-7px;
        position:absolute;
      }
      .square-bottom-left {
        background: #F5FBFF;
        height: 4px;
        width: 4px;
        bottom:-7px;
        left:-7px;
        position:absolute;
      }
      .square-bottom-right {
        background: #F5FBFF;
        height: 4px;
        width: 4px;
        bottom:-7px;
        right:-7px;
        position:absolute;
      }
      .triangle-top-left {
        top:3px;
        left:3px;
        position:absolute;
        width: 0;
        height: 0;
        border-top: 6px solid rgb(93, 147, 206, 0.75);
        border-right: 6px solid transparent;
      }
      .border-top {
        background: rgb(93, 147, 206, 0.75);
        height:0.5px;
        width:270px;
        top:3px;
        left:14px;
        position:absolute;
      }
      .border-side {
        border-left: 0.5px solid rgb(93, 147, 206, 0.75);
        height:93%;
        left:3px;
        top:13px;
        position:absolute;
      }
      .title {
        width: 100%;
        font-family: 'Nunito';
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        color: #0071BC;
        margin-top:15px;
      }
      .desc {
        margin-top:36px;
        font-family: 'Nunito';
        font-style: normal;
        font-size: 12px;
        line-height: 16px;
        color: #5B6987;
        margin-bottom:9px;
        text-align: left;
        margin-left:22px;
      }
      .captcha {
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
      }
    }
  }
}
.btn-helpdesk {
  position: fixed;
  bottom: 32px;
  right: 30px;

            .btn-finish {
              .decoration {
                background: #7289AA;
                border: 1.6px solid #FFFFFF;
                height: 13px;
                width: 13px;
          top: -4px;
          left: -4px;
                z-index:-1;
                position:absolute;
              }
              .square-right {
                background: #F2F2F2;
                height: 5px;
                width: 5px;
                bottom: -3px;
                right: -3px;
                z-index: 2;
                position: absolute;
              }
              .card-btn {
                width:110px;
                height:30px;
                background: #F2F2F2;
                font-style: normal;
                font-weight: 700;
                font-size: 11px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor:pointer;
                color: #2961B5;
                border:2px solid #FFF380;
              }
            }
            .btn-finish:hover {
              .card-btn {
                border: 0.6px solid #aeeefa;
                background:#4C7BC1;
                color:white;
                transition: border-color 0.5s, background-color 0.5s, color 0.5s;
                -webkit-transition: border-color 0.5s, background-color 0.5s, color 0.5s;
                transform: scale(0.9);
                -webkit-transform: scale(0.9);
              }
              .square-right {
                right: 2px;
                bottom: -2px;
              }
              .decoration {
                top: -3px;
                left: 1px;
              }
            }
}

</style>
