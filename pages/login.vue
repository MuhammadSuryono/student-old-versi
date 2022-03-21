<template>
  <section
    class="hero is-link is-fullheight bg-images"
    style="overflow: hidden"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="~/assets/images/logo_dashboard.png" class="img-logo">
        <div class="card">
          <div class="has-text-centered title">
            Login to your Account
          </div>
          <b-field class="mt-14" style="background-color: white">
            <b-input v-model="state.email" placeholder="Email" class="inputs" />
          </b-field>
          <b-field class="mt-14" style="background-color: white">
            <b-input
              v-model="state.password"
              type="password"
              placeholder="Password"
              password-reveal
              class="inputs"
            />
          </b-field>
          <recaptcha class="captcha columns is-centered" />
          <b-button class="btn-login" @click="login()">
            Log In
          </b-button>
        </div>
      </div>
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
    login () {
      this.$store
        .dispatch('user/loginWithoutCaptcha', {
          email: this.state.email,
          password: this.state.password
        })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.data.user.role_id === 4) {
              console.log(response.data.data)
              this.$store.commit('user/SET_USERS', response.data.data)
              this.$auth.strategy.token.set(
                'Bearer ' + response.data.data.access_token
              )
              this.$router.push({ path: '/' })
            } else {
              this.$auth.logout()
              this.$router.push('/login')
              this.$toast.error('Please login with student account.', {
                position: 'top-center',
                duration: 5000
              })
            }
          } else {
            this.$toast.error(response.data.error.message, {
              position: 'top-center',
              duration: 5000
            })
          }
        })
        .catch((error) => {
          console.log('error : ', error)
          this.$toast.error(error.response.status)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
#particles-js {
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 0;
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
