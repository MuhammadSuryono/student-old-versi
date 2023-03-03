export const state = () => ({
  isLoading: false,
  data: [],
  item: [],
  currentDecoration: {},
  pathDecoration: {},
  nameDecoration: {}
})

export const getters = {
  isLoading: state => state.isLoading,
  data: state => state.data,
  item: state => state.item,
  currentDecoration: state => state.currentDecoration,
  pathDecoration: state => state.pathDecoration,
  nameDecoration: state => state.nameDecoration
}

export const mutations = {
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_DATA (state, item) {
    state.data = item
  },
  SET_ITEM (state, item) {
    state.item = item
  },
  SET_CURRENT_DATA (state, item) {
    state.currentDecoration = item
  },
  SET_CURRENT_DATA_DETAIL (state, item) {
    state.pathDecoration = item.path
    state.nameDecoration = item.title
  },
  SET_IMAGES (state, item) {
    state.pathDecoration = item
  },
  SET_IMAGES_NAME (state, item) {
    state.nameDecoration = item
  }
}

export const actions = {
  updateImages ({ commit }, payload) {
    commit('SET_IMAGES', payload)
  },
  updateImagesName ({ commit }, payload) {
    commit('SET_IMAGES_NAME', payload)
  },
  async fetchCurrentDecoration ({ commit }) {
    try {
      const response = await this.$repositories.decoration.getOne()
      console.log('responsee : ', response)
      commit('SET_CURRENT_DATA', response)
      commit('SET_CURRENT_DATA_DETAIL', response.data.data.background)
      return response
    } catch (e) {
      return e.response
    }
  },
  async fetchDecoration ({ commit }, payload) {
    try {
      const response = await this.$repositories.decoration.get(payload)
      let newItem = []
      newItem = response.data.data.data
      console.log('new item : ', newItem)
      if (newItem.length > 0) {
        if (newItem.length % 8 !== 0) {
          for (let i = 0; i < newItem.length % 4; i++) {
            newItem.push({
              id: 'null',
              name: 'null',
              background: 'null',
              selected: null
            })
          }
        }
      }
      commit('SET_DATA', response)
      commit('SET_ITEM', newItem)
      console.log('tes')
      return response
    } catch (e) {
      return e.response
    }
  },
  async changeDecoration ({ commit }, payload) {
    try {
      const response = await this.$repositories.decoration.update(payload)
      return response
    } catch (e) {
      return e.response
    }
  }
}
