const resource = '/student/profile'
export default $axios => ({
  get () {
    return $axios.get(`${resource}`)
  },
  update (payload) {
    return $axios.put(`${resource}`, payload)
  },
  changePass (payload) {
    return $axios.put(`${resource}/change-password`, {
      old_password: payload.old_password,
      new_password: payload.new_password,
      new_password_confirmation: payload.new_password_confirmation
    })
  },
  getCluster () {
    return $axios.get('/personality-cluster/getUserPersonalityCluster')
  }
})
