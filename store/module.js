export const state = () => ({
  dataSearchModule: {},
  dataCollection: {},
  dataTag: {}
})

export const getters = {
  dataSearchModule: state => state.dataSearchModule,
  dataCollection: state => state.dataCollection,
  dataTag: state => state.dataTag
}

export const mutations = {
  SET_ALL_SEARCH_MODULE (state, item) {
    state.dataSearchModule = item
  },
  SET_ALL_MY_COLLECTION (state, item) {
    state.dataCollection = item
  },
  SET_DATA_TAG (state, item) {
    state.dataTag = item
  }
}

export const actions = {
  async fetchAllSearchModule ({ commit }, payload) {
    try {
      const response = await this.$repositories.module.getSearchModule(payload)
      commit('SET_ALL_SEARCH_MODULE', response.data.data)
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
  }
}
