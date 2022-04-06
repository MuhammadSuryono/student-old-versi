// export const state = () => ({
export const state = () => ({
  isLoading: false,
  data: [],
  item: []
})

export const getters = {
  isLoading: state => state.isLoading,
  data: state => state.data,
  item: state => state.item
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
  }
}

export const actions = {
  async fetchAvatar ({ commit }, payload) {
    try {
      const response = await this.$repositories.avatar.get(payload)
      let newItem = []
      newItem = response.data.data.data
      if (newItem.length > 0) {
        if (newItem.length % 8 !== 0) {
          for (let i = 0; i < newItem.length % 8; i++) {
            newItem.push({
              id: 'null',
              name: 'null',
              avatar: 'null',
              selected: null
            })
          }
        }
      }
      commit('SET_DATA', response)
      commit('SET_ITEM', newItem)
      return response
    } catch (e) {
      return e.response
    }
  },
  async changeAvatar ({ commit }, payload) {
    try {
      const response = await this.$repositories.avatar.update(payload)
      console.log('change avatar : ', response)
      return response
    } catch (e) {
      return e.response
    }
  }
}
