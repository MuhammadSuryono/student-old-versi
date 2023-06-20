export const state = () => ({
  data: {},
  dataReward: {},
  total_coin: 0,
  total_diamond: 0,
  dataAvatar: {},
  dataBackground: {},
  totalAvatar: 0,
  totalBackground: 0,
  dataPurchaseHistory: {},
  totalPurchaseHistory: 0,
  dataDetailAvatar: {},
  dataDetailBackground: {},
  dataDetailImageAvatar: null
})

export const getters = {
  data: state => state.data
}

export const mutations = {
  SET_DATA (state, item) {
    state.data = item
  },
  SET_DATA_REWARD (state, item) {
    state.dataReward = item
    state.total_coin = item.reward.total_coin
    state.total_diamond = item.reward.total_diamond
  },
  SET_DATA_AVATAR (state, item) {
    state.dataAvatar = item.data
    state.totalAvatar = item.total
  },
  SET_DATA_BACKGROUND (state, item) {
    state.dataBackground = item
  },
  SET_DATA_PURCHASE_HISTORY (state, item) {
    state.dataPurchaseHistory = item.data
    state.totalPurchaseHistory = item.total
  },
  SET_DATA_DETAIL_AVATAR (state, item) {
    state.dataDetailAvatar = item
  },
  SET_DATA_IMAGE_AVATAR (state, item) {
    state.dataDetailImageAvatar = item
  },
  SET_DATA_DETAIL_BACKGROUND (state, item) {
    state.dataDetailBackground = item
  }
}

export const actions = {
  async getTaskToday ({ commit }) {
    try {
      const response = await this.$repositories.quest.getTaskToday()
      commit('SET_DATA', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async getReward ({ commit }) {
    try {
      const response = await this.$repositories.quest.getReward()
      commit('SET_DATA_REWARD', response.data.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async claimTask ({ commit }, payload) {
    try {
      const res = await this.$repositories.quest.claimTask(payload)
      if (res.status === 200 || res.status === 201 || res.status === 202) {
        // this.$toast.success('Claim succ has been created', {
        //   position: 'top-center',
        //   duration: 5000
        // })
        return res.data
      } else {
        this.$toast.error('Error', {
          position: 'top-center',
          duration: 5000
        })
      }
      if (res.status === 401) {
        this.$toast.error('Please relogin', {
          position: 'top-center',
          duration: 5000
        })
        this.$auth.logout()
        this.$router.push('/login')
      }
      return res?.data || { success: false }
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 5000
      })
      return { success: false }
    }
  },
  async getAvatar ({ commit }, payload) {
    try {
      const res = await this.$repositories.quest.getAvatar(payload)
      if (res.status === 200 || res.status === 201 || res.status === 202) {
        commit('SET_DATA_AVATAR', res.data.data)
        return res.data
      } else {
        this.$toast.error('Error', {
          position: 'top-center',
          duration: 5000
        })
      }
      if (res.status === 401) {
        this.$toast.error('Please relogin', {
          position: 'top-center',
          duration: 5000
        })
        this.$auth.logout()
        this.$router.push('/login')
      }
      return res?.data || { success: false }
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 5000
      })
      return { success: false }
    }
  },
  async getBackground ({ commit }, payload) {
    try {
      const res = await this.$repositories.quest.getBackground(payload)
      if (res.status === 200 || res.status === 201 || res.status === 202) {
        commit('SET_DATA_BACKGROUND', res.data.data)
        return res.data
      } else {
        this.$toast.error('Error', {
          position: 'top-center',
          duration: 5000
        })
      }
      if (res.status === 401) {
        this.$toast.error('Please relogin', {
          position: 'top-center',
          duration: 5000
        })
        this.$auth.logout()
        this.$router.push('/login')
      }
      return res?.data || { success: false }
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 5000
      })
      return { success: false }
    }
  },
  async getPurchaseHistory ({ commit }, payload) {
    try {
      const res = await this.$repositories.quest.getPurchaseHistory(payload)
      if (res.status === 200 || res.status === 201 || res.status === 202) {
        commit('SET_DATA_PURCHASE_HISTORY', res.data.data)
        return res.data
      } else {
        this.$toast.error('Error', {
          position: 'top-center',
          duration: 5000
        })
      }
      if (res.status === 401) {
        this.$toast.error('Please relogin', {
          position: 'top-center',
          duration: 5000
        })
        this.$auth.logout()
        this.$router.push('/login')
      }
      return res?.data || { success: false }
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: 'top-center',
        duration: 5000
      })
      return { success: false }
    }
  }
}
