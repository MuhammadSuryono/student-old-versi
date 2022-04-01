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
  async fetchDecoration ({ commit }, payload) {
    try {
      const response = await this.$repositories.decoration.get()
      // const bg_active = response.data.data.data
      // eslint-disable-next-line camelcase
      // console.log('bg_active : ', response.data.data.data)
      // const bg_active = response.data.data.data.find(x => x.selected === true)
      // console.log('bg_active : ', bg_active)
      let newItem = []
      newItem = response.data.data.data
      console.log('new item : ', newItem)
      if (newItem.length > 0) {
        if (newItem.length % 8 !== 0) {
          for (let i = 0; i < newItem.length % 4; i++) {
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
  async changeDecoration ({ commit }, payload) {
    try {
      const response = await this.$repositories.avatar.update(payload)
      return response
    } catch (e) {
      return e.response
    }
  }
}
