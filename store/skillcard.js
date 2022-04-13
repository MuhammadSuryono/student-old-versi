export const state = () => ({
  data: []
})

export const getters = {
  data: state => state.data
}

export const mutations = {
  SET_DATA (state, item) {
    state.data = item
  }
}

export const actions = {
  async fetchPersonalityCluster ({ commit }) {
    try {
      const response = await this.$repositories.skillcard.get()
      commit('SET_DATA', response)
      return response
    } catch (e) {
      return e.response
    }
  }
}
