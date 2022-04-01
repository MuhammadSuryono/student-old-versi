const resource = '/student/profile'

export default $axios => ({
  get () {
    return $axios.get(`${resource}/backgrounds`)
  },
  update (payload) {
    return $axios.put(`${resource}/change-background`, {
      background_id: payload.background_id
    })
  }
})
