// export const state = () => ({
export const state = () => ({
 
})

export const getters = {
  
}

export const mutations = {
 
}

export const actions = {
  async addModuleStatistic ({ commit }, payload) {
    console.log(`from store statistic : ${payload}`);
    try {
      const response = await this.$repositories.statistic.addModuleStatistic(payload)
      return response
    } catch (e) {
      return e.response
    }
  },
  async addActivityStatistic ({ commit }, payload) {
    try {
      const response = await this.$repositories.statistic.addActivityStatistic(payload)
      return response
    } catch (e) {
      return e.response
    }
  },
  async addPageStatistic ({ commit }, payload) {
    try {
      const response = await this.$repositories.statistic.addPageStatistic(payload)
      return response
    } catch (e) {
      return e.response
    }
  }
}
