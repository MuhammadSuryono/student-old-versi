export const state = () => ({
  data: {
    name: '',
    student_type: '',
    attribute: ''
  },
  skills: {},
  detail: {},
  module: {},
  archivements: {}
})

export const getters = {
  data: state => state.data
}

export const mutations = {
  SET_DATA (state, item) {
    state.data.name = item.personality_cluster.name
    state.data.student_type = item.student_type
    state.data.attribute = item.personality_cluster.attribute.join(' • ')
  },
  SET_SKILLS (state, item) {
    state.skills = item
  },
  SET_DETAIL_SKILLS (state, item) {
    state.detail = item
  },
  SET_ALL_MODULE (state, item) {
    state.module = item
  },
  SET_ALL_ARCHIVEMENTS (state, item) {
    state.archivements = item
  }
}

export const actions = {
  async fetchPersonalityCluster ({ commit }) {
    try {
      const response = await this.$repositories.skillcard.get()
      commit('SET_DATA', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchAllSkill ({ commit }) {
    try {
      const response = await this.$repositories.skillcard.getAllSkill()
      commit('SET_SKILLS', response.data.data.skills)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchDetailSkill ({ commit }, payload) {
    try {
      const response = await this.$repositories.skillcard.getDetailSkill(
        payload
      )
      commit('SET_DETAIL_SKILLS', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchAllModule ({ commit }, payload) {
    try {
      const response = await this.$repositories.skillcard.getAllModule(payload)
      commit('SET_ALL_MODULE', response.data.data.modules)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchAllArchivement ({ commit }, payload) {
    try {
      const response = await this.$repositories.skillcard.getAllAchievement(
        payload
      )
      commit('SET_ALL_ARCHIVEMENTS', response.data.data.achievements)
      return response
    } catch (e) {
      return e.response
    }
  }
}
