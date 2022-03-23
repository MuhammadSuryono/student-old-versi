export const state = () => ({
  isLoading: false,
  users: [],
  sidebar: true,
  btn_profile: false,
  btn_decoration: false
})

export const getters = {
  isLoading: state => state.isLoading,
  users: state => state.users
}

export const mutations = {
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_USERS (state, users) {
    state.users = users.user
  },
  SET_BTN_PROFILE (state) {
    state.btn_profile = !state.btn_profile
  },
  SET_SIDEBAR (state) {
    state.sidebar = !state.sidebar
  },
  SET_BTN_DECORATION (state) {
    state.btn_decoration = !state.btn_decoration
  }
}

export const actions = {
  async loginWithoutCaptcha ({ commit }, payload) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      return response
    } catch (e) {
      return e.response
    }
  }
  // async get ({ commit }) {
  //   commit('SET_LOADING', true)
  //   const res = await this.$repositories.user.get()
  //   if (res.status === 200) {
  //     const profiles = res.data.data
  //     profiles.gender = profiles.gender.toLowerCase()
  //     profiles.user_type = profiles.user_type[0]
  //     console.log('profile : ', profiles)
  //     commit('SET_USERS', profiles)
  //     commit('SET_LOADING', false)
  //   } else {
  //     commit('SET_LOADING', false)
  //     this.$toast.error('Error', {
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //   }
  //   if (res.status === 401) {
  //     commit('SET_LOADING', false)
  //     this.$toast.error('Please relogin', {
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //     this.$auth.logout()
  //     this.$router.push('/login')
  //   }
  // },
  // async updateProfile ({ commit }, payload) {
  //   commit('SET_LOADING', true)
  //   const res = await this.$repositories.user.update(payload)
  //   if (res.status === 200) {
  //     const profiles = res.data.data
  //     // profiles.gender = profiles.gender.toLowerCase()
  //     commit('SET_USERS', profiles)
  //     commit('SET_LOADING', false)
  //   } else {
  //     commit('SET_LOADING', false)
  //     this.$toast.error('Failed Update Profil', {
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //   }
  //   if (res.status === 401) {
  //     commit('SET_LOADING', false)
  //     this.$toast.error('Please relogin', {
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //     this.$auth.logout()
  //     this.$router.push('/login')
  //   }
  // },
  // async changePassword ({ commit }, payload) {
  //   commit('SET_LOADING', true)
  //   const res = await this.$repositories.user.changePass(payload)
  //   if (res.status === 200) {
  //     commit('SET_LOADING', false)
  //     this.$toasted.show('Success Update Password', {
  //       theme: 'bubble',
  //       type: 'success',
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //   } else {
  //     commit('SET_LOADING', false)
  //     this.$toast.error('Failed Update Password', {
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //   }
  //   if (res.status === 401) {
  //     commit('SET_LOADING', false)
  //     this.$toast.error('Please relogin', {
  //       position: 'top-center',
  //       duration: 5000
  //     })
  //     this.$auth.logout()
  //     this.$router.push('/login')
  //   }
  // }
}
