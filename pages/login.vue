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
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'LoginPage',
  layout: 'login',

  data () {
    return {
      loading: false,
      state: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['SET_IS_AUTH']),
    toHome () {
      this.$router.push({ path: 'dashboard' })
    },
    validateEmail (email) {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    },
    login () {
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
          .dispatch('user/loginWithoutCaptcha', {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
            this.loading = false
            if (response.status === 200 || response.status === 201) {
              if (response.data.data.user.role_id === 4) {
                const data = response.data.data
                console.log('res:', data)
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
                this.$auth.strategy.token.set(
                  'Bearer ' + response.data.data.access_token
                )
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
            console.log('resp3')
            this.loading = false
            this.$toast.error(error)
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
