// export const state = () => ({
export const state = () => ({
  isLoading: false,
  users: [],
  profiles: [],
  sidebar: true,
  btn_profile: false,
  btn_decoration: false,
  fullname: null,
  images: null,
  images_name: null,
  decoration: null,
  decoration_name: null
})

export const getters = {
  isLoading: state => state.isLoading,
  users: state => state.users,
  profiles: state => state.profiles,
  fullname: state => state.fullname,
  images: state => state.images,
  images_name: state => state.images_name,
  decoration: state => state.decoration,
  decoration_name: state => state.decoration_name
}

export const mutations = {
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_USERS (state, users) {
    state.users = users.user
  },
  SET_PROFILES (state, profiles) {
    state.profiles = profiles
  },
  SET_BTN_PROFILE (state) {
    state.btn_profile = !state.btn_profile
    state.btn_decoration = false
  },
  SET_SIDEBAR (state) {
    state.sidebar = !state.sidebar
  },
  SET_BTN_DECORATION (state) {
    state.btn_decoration = !state.btn_decoration
    state.btn_profile = false
  },
  SET_FULLNAME (state, data) {
    state.fullname = data
  },
  SET_IMAGES (state, data) {
    state.images = data
  },
  SET_IMAGES_NAME (state, data) {
    state.images_name = data
  },
  SET_DECORATION (state, data) {
    state.decoration = data
  },
  SET_DECORATION_NAME (state, data) {
    state.decoration_name = data
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
  },
  async get ({ commit }) {
    commit('SET_LOADING', true)
    const res = await this.$repositories.user.get()
    return res
  },
  async updateProfile ({ commit }, payload) {
    const res = await this.$repositories.user.update(payload)
    return res
  },
  updateFullname ({ commit }, payload) {
    commit('SET_FULLNAME', payload)
  },
  updateImages ({ commit }, payload) {
    commit('SET_IMAGES', payload)
  },
  updateImagesName ({ commit }, payload) {
    commit('SET_IMAGES_NAME', payload)
  },
  updateDecoration ({ commit }, payload) {
    commit('SET_DECORATION', payload)
  },
  updateDecorationName ({ commit }, payload) {
    commit('SET_DECORATION_NAME', payload)
  },
  async changePassword ({ commit }, payload) {
    const res = await this.$repositories.user.changePass(payload)
    return res
  }
}
