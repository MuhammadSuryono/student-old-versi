export const state = () => ({
  dataFactionUser: {},
  dataProgressBar: {},
  dataModuleDominance: {},
  dataCommentStars: {},
  dataCommentStarsList: {},
  dataFactionIcon: {}
})

export const getters = {
  dataFactionUser: state => state.dataFactionUser,
  dataProgressBar: state => state.dataProgressBar,
  dataModuleDominance: state => state.dataModuleDominance,
  dataCommentStars: state => state.dataCommentStars,
  dataCommentStarsList: state => state.dataCommentStarsList,
  dataFactionIcon: state => state.dataFactionIcon
}

export const mutations = {
  SET_FACTION_USER (state, item) {
    state.dataFactionUser = item
  },
  SET_PROGRESS_BAR (state, item) {
    state.dataProgressBar = item
  },
  SET_MODULE_DOMINANCE (state, item) {
    state.dataModuleDominance = item
  },
  SET_COMMENT_STARS (state, item) {
    state.dataCommentStars = item
  },
  SET_COMMENT_STARS_LIST (state, item) {
    state.dataCommentStarsList = item
  },
  SET_FACTION_USER_ICON (state, item) {
    state.dataFactionIcon = item
  },
}

export const actions = {
  async fetchFactionUser ({ commit }) {
    try {
      const response = await this.$repositories.faction.getFactionUser()
      commit('SET_FACTION_USER', response.data.data)
      commit('SET_FACTION_USER_ICON', response.data.data.faction.faction_icon)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchProgressBar ({ commit }) {
    try {
      const response = await this.$repositories.faction.getProgressBar()
      commit('SET_PROGRESS_BAR', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchModuleDominance ({ commit }) {
    try {
      const response = await this.$repositories.faction.getModuleDominance()
      commit('SET_MODULE_DOMINANCE', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchCommentStars ({ commit }) {
    try {
      const response = await this.$repositories.faction.getCommentStar()
      commit('SET_COMMENT_STARS', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchCommentStarsList ({ commit }, payload) {
    try {
      const response = await this.$repositories.faction.getCommentStarlist(payload)
      commit('SET_COMMENT_STARS_LIST', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  }
}
