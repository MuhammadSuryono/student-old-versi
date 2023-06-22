const baseUrl =  window.location.hostname + 'daily/quest/api'
const resource = '/quest'

export default $axios => ({
  getTaskToday () {
    return $axios.get(baseUrl + resource + '/collection/task/today')
  },
  claimTask (payload) {
    return $axios.post(baseUrl + resource + '/collection/task/today/claim', payload)
  },
  getReward (payload) {
    return $axios.get(baseUrl + resource + '/collection/reward')
  },
  getAvatar (payload) {
    return $axios.get(baseUrl + resource + '/shop/item/avatar?type=' + payload.type + '&page=' + payload.page + '&size=' + payload.size)
  },
  getBackground (payload) {
    return $axios.get(baseUrl + resource + '/shop/item/background?type=' + payload.type + '&page=' + payload.page + '&size=' + payload.size)
  },
  getPurchaseHistory (payload) {
    return $axios.get(baseUrl + resource + '/shop/item/purchase/history?page=' + payload.page + '&size=' + payload.size + '&itemName=' + payload.itemName)
  }
})
