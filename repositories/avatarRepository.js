const resource = '/student/profile'

export default $axios => ({
  get () {
    return $axios.get(`${resource}/my-avatar`)
  },
  update (payload) {
    return $axios.put(`${resource}/change-avatar`, {
      avatars_game_id: payload.avatars_game_id
    })
  }
})
