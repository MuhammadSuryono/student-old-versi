export const state = () => ({
  dataProgressBar: {},
  dataCommentStars: {}
})

export const getters = {
  dataProgressBar: state => state.dataProgressBar,
  dataCommentStars: state => state.dataCommentStars
}

export const mutations = {
  SET_PROGRESS_BAR (state, item) {
    state.dataProgressBar = item
  },
  SET_COMMENT_STARS (state, item) {
    state.dataCommentStars = item
  }
}

export const actions = {
  async fetchProgressBar ({ commit }, payload) {
    try {
      const response = await this.$repositories.faction.getProgressBar(payload)
      commit('SET_PROGRESS_BAR', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchCommentStars ({ commit }) {
    console.log('tes comment')
    try {
      const response = await this.$repositories.faction.getCommentStar()
      console.log('res', response)
      // commit('SET_PROGRESS_BAR', response.data.data)
      return response
    } catch (e) {
      console.log('e', e)
      return e.response
    }
  }
}
