const resource = '/student/profile'
const resource2 = '/student'

export default $axios => ({
  getOne () {
    return $axios.get(`${resource2}/home/background`)
  },
  get (payload) {
    return $axios.get(`${resource}/backgrounds?per_page=4&page=${payload}`)
  },
  update (payload) {
    return $axios.put(`${resource}/change-background`, {
      background_id: payload.background_id
    })
  }
})
