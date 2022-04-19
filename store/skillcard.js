export const state = () => ({
  data: {
    name: '',
    student_type: '',
    attribute: ''
  },
  skills: {},
  detail: {}
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
  }
}
