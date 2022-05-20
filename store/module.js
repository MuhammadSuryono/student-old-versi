export const state = () => ({
  dataModule: {},
  dataDetailModule: {},
  dataCollection: {},
  dataTag: {}
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
  }
}
