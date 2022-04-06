const resource = '/student/profile'

export default $axios => ({
  get (payload) {
    return $axios.get(`${resource}/my-avatar?per_page=8&page=${payload}`)
  },
  update (payload) {
    return $axios.put(`${resource}/change-avatar`, {
      avatars_game_id: payload.avatars_game_id
    })
  }
})
