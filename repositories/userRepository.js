const resource = '/profile'
export default $axios => ({
  get () {
    console.log('get')
    return $axios.get(`${resource}`)
  },
  update (payload) {
    return $axios.post(`${resource}`, payload)
  },
  changePass (payload) {
    return $axios.put(`${resource}/change-password`, {
      old_password: payload.old_password,
      new_password: payload.new_password,
      new_password_confirmation: payload.new_password_confirmation
    })
  }
})
