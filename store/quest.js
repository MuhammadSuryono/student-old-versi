export const state = () => ({
  data: {}
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
  async getTaskToday ({ commit }) {
    try {
      const response = await this.$repositories.quest.getTaskToday()
      console.log('getTaskToday : ', response)
      commit('SET_DATA', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  }
}
