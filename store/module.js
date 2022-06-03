export const state = () => ({
  dataModule: {},
  dataDetailModule: {},
  dataCollection: {},
  dataTag: {},
  dataDetailActivity: {},
  idModule: '',
  dataContent: {},
  dataAllDiscuss: {}
})

export const getters = {
  dataModule: state => state.dataModule,
  dataCollection: state => state.dataCollection,
  dataTag: state => state.dataTag
}

export const mutations = {
  SET_ALL_MODULE (state, item) {
    state.dataModule = item
  },
  SET_DATA_DETAIL_MODULE (state, item) {
    state.dataDetailModule = item
  },
  SET_ALL_MY_COLLECTION (state, item) {
    state.dataCollection = item
  },
  SET_DATA_TAG (state, item) {
    state.dataTag = item
  },
  SET_DATA_DETAIL_ACTIVITY (state, item) {
    state.dataDetailActivity = item
  },
  SET_DATA_ID_MODULE (state, item) {
    state.idModule = item
  },
  SET_DATA_CONTENT (state, item) {
    state.dataContent = item
  },
  SET_DATA_ALL_DISCUSS (state, item) {
    state.dataAllDiscuss = item
  }
}

export const actions = {
  async fetchAllModule ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getModule(payload)
      commit('SET_ALL_MODULE', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchDetailModule ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getDetailModule(payload)
      commit('SET_DATA_DETAIL_MODULE', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async addModule ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.addModule(payload)
      // commit('SET_DATA_DETAIL_MODULE', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async getReview ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getAllReview(payload)
      // commit('SET_DATA_DETAIL_MODULE', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async addReview ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.postReview(payload)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchDataTag ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getDataTag()
      commit('SET_DATA_TAG', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchAllMyCollection ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getMyCollection(payload)
      commit('SET_ALL_MY_COLLECTION', response.data)
      return response
    } catch (e) {
      return e.response
    }
  },

  async fetchDetailActivity ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getDetailActivity(
        payload
      )
      commit('SET_DATA_DETAIL_ACTIVITY', response.data.data)
      commit('SET_DATA_CONTENT', response.data.data.content)
      return response
    } catch (e) {
      return e.response
    }
  },
  idModule ({ commit }, payload) {
    commit('SET_DATA_ID_MODULE', payload)
  },
  async fetchAllDiscuss ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getAllDiscuss(payload)
      commit('SET_DATA_ALL_DISCUSS', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async postDiscuss ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.postDiscuss(payload)
      return response
    } catch (e) {
      return e.response
    }
  },
  async postSubDiscuss ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.postSubDiscuss(payload)
      return response
    } catch (e) {
      return e.response
    }
  }
}
