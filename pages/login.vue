<template>
  <section
    class="hero is-link is-fullheight bg-images"
    style="overflow: hidden"
  >
    <div class="hero-body">
      <v-row align="center" justify="center">
        <v-col align="center" justify="center">
          <img src="~/assets/images/logo_dashboard.png" class="img-logo">
          <div class="card">
            <div class="has-text-centered title">
              Login to your Account
            </div>
            <b-field class="mt-14" style="background-color: white">
              <b-input
                v-model="state.email"
                placeholder="Email"
                class="inputs"
                @keyup.native.enter="login()"
              />
            </b-field>
            <b-field class="mt-14" style="background-color: white">
              <b-input
                v-model="state.password"
                type="password"
                placeholder="Password"
                password-reveal
                class="inputs"
                @keyup.native.enter="login()"
              />
            </b-field>
            <recaptcha class="captcha columns is-centered" />
            <b-button :loading="loading" class="btn-login" @click="login()">
              Log In
            </b-button>
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
      popup: true,
      loading: false,
      state: {
        email: '',
        password: ''
      }
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
              if (response.data.data.user.role_id === 4) {
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
          .catch((error) => {
            this.loading = false
            this.$toast.error(error)
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/images/placeholderbg.png');
}
.img-logo {
  height: 80px;
}
.card {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  height: 400px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.83);
  padding: 30px 25px 10px 25px;
  .title {
    width: 100%;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 50px;
    color: black;
  }
  .inputs {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25 rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .captcha {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
  .btn-login {
    color: #ffffff;
    background: #002171;
    border-radius: 5px;
    border: 0px;
    font-size: 14px;
    width: 100%;
    margin-top: 10px;
  }
}
// .card {
//   background: #a1adbf;
//   border-radius: 40px;
//   height: 100%;
//   width: 500px;
//   margin-left: auto;
//   margin-right: auto;
//   .headers {
//     background-color: #0d47a1;
//     height: 54px;
//     width: 100%;
//     border-radius: 40px 40px 0px 0px;
//     margin: 0px;
//     .title {
//       width: 100%;
//       color: white;
//       font-size: 15px;
//       font-weight: 500;
//     }
//   }
//   .content {
//     margin: 0px;
//     height: 370px;
//     width: 100%;
//     padding-right: 40px;
//     padding-left: 40px;
//     .form {
//       widows: 100%;
//       .label {
//         font-size: 14px;
//         color: #000000;
//         width: 80px;
//       }
//       .input-form {
//         width: 100%;
//       }
//       .captcha {
//         margin-left: auto;
//         margin-right: auto;
//         margin-top: 40px;
//       }
//       .btn-login {
//         color: #ffffff;
//         background: #002171;
//         border-radius: 5px;
//         border: 0px;
//         font-size: 14px;
//         width: 80px;
//         margin-top: 10px;
//       }
//     }
//   }
// }
</style>
