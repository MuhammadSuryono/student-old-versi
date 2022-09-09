import bgAudio from '../assets/audio/audio_bg.mp3'
import btnAudio from '../assets/audio/audio_btn.mp3'
import popupAudio from '../assets/audio/audio_popup.mp3'
export const state = () => ({
  isLoading: false,
  users: [],
  profiles: [],
  sidebar: false,
  btn_profile: false,
  btn_decoration: false,
  btn_setting: false,
  fullname: null,
  images: null,
  images_name: null,
  decoration: null,
  decoration_name: null,
  btn_maps: false,
  check_cluster: {},
  cluster: {},
  cluster_attribute: {},
  popup: false,
  playBg: false,
  expired: false,
  isLoggedIn: false,
  btn_mute: true,
  audioBtn: true,
  audioBGM: 1,
  audioEffect: 1,
  autoplayBGM: true
})

export const getters = {
  isLoading: state => state.isLoading,
  users: state => state.users,
  profiles: state => state.profiles,
  fullname: state => state.fullname,
  images: state => state.images,
  images_name: state => state.images_name,
  decoration: state => state.decoration,
  decoration_name: state => state.decoration_name,
  check_cluster: state => state.check_cluster,
  cluster: state => state.cluster,
  cluster_attribute: state => state.cluster_attribute,
  autoplayBGM: state => state.autoplayBGM,
  audioEffect: state => state.audioEffect,
  audioBGM: state => state.audioBGM
}

export const mutations = {
  SET_AUDIO_EFFECT (state, payload) {
    state.audioEffect = payload
  },
  SET_AUDIO_BGM (state, payload) {
    state.audioBGM = payload
  },
  SET_AUDIO (state, payload) {
    state.audioBtn = payload
  },
  SET_BTN_MUTE (state, payload) {
    state.btn_mute = payload
  },
  SET_LOGGEDIN (state, payload) {
    state.isLoggedIn = payload
  },
  SET_BTN_AUDIO (state, payload) {
    const myAudio = new Audio(btnAudio)
    myAudio.play()
    // myAudio.volume = state.audioEffect
  },
  SET_POPUP_AUDIO (state, payload) {
    const myAudio = new Audio(popupAudio)
    myAudio.play()
    // myAudio.volume = state.audioEffect
  },
  SET_BG_AUDIO (state, payload) {
    state.playBg = payload
    const myAudio = new Audio(bgAudio)
    if (state.playBg) {
      if (typeof myAudio.loop === 'boolean') {
        myAudio.loop = true
      }
      myAudio.play()
    } else {
      myAudio.pause()
      myAudio.currentTime = 0
    }
  },
  SET_POPUP (state) {
    state.popup = !state.popup
  },
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
    state.btn_setting = false
  },
  SET_BTN_SETTING (state) {
    state.btn_setting = !state.btn_setting
    state.btn_decoration = false
    state.btn_profile = false
  },
  SET_SIDEBAR (state) {
    state.sidebar = !state.sidebar
  },
  SET_MAPS (state) {
    state.btn_maps = !state.btn_maps
  },
  SET_BTN_DECORATION (state) {
    state.btn_decoration = !state.btn_decoration
    state.btn_profile = false
    state.btn_setting = false
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
  },
  SET_CLUSTER (state, item) {
    state.cluster = item
  },
  SET_CHECK_CLUSTER (state, item) {
    state.check_cluster = item
  },
  SET_CLUSTER_ATTRIBUTE (state, item) {
    state.cluster_attribute = item
  }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      // if (response.status === 200 || response.status === 201) {
      //   if (response.data.data.user.role_id === 4) {
      //     const data = response.data.data
      //     localStorage.setItem('user_id', data.user.id)
      //     commit('SET_USERS', data)
      //     if (
      //       // eslint-disable-next-line valid-typeof
      //       typeof data.user.avatar !== null ||
      //       // eslint-disable-next-line valid-typeof
      //       typeof data.user.avatar !== undefined
      //     ) {
      //       commit('SET_IMAGES', data.user.avatar.image)
      //       commit('SET_IMAGES_NAME', data.user.avatar.name)
      //     }
      //     if (data.user.last_name !== null) {
      //       commit(
      //         'SET_FULLNAME',
      //         data.user.first_name + ' ' + data.user.last_name
      //       )
      //     } else {
      //       commit('SET_FULLNAME', data.user.first_name)
      //     }
      //     localStorage.setItem('localAuth', false)
      //     // this.$router.push({ path: '/splash' })
      //   } else {
      //     this.$auth.logout()
      //     this.$router.push('/login')
      //     this.$toast.error('Please login with student account.', {
      //       position: 'top-center',
      //       duration: 5000
      //     })
      //   }
      // }
      return response
    } catch (e) {
      return e.response
    }
  },
  async get ({ commit }) {
    commit('SET_LOADING', true)
    const res = await this.$repositories.user.get()
    commit('SET_PROFILES', res)
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
  },
  async checkCluster ({ commit }) {
    const response = await this.$repositories.user.getCheckCluster()
    commit('SET_CHECK_CLUSTER', response.data.data)
    return response
  },
  async getCluster ({ commit }) {
    const response = await this.$repositories.user.getCluster()
    commit('SET_CLUSTER', response.data.data)
    return response
  }
}
