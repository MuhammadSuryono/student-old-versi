// const resource = '/student/profile'

export default $axios => ({
  getFactionUser () {
    return $axios.get('/factions/user')
  },
  getProgressBar () {
    return $axios.get('/faction-statistics/list')
  },
  getModuleDominance () {
    return $axios.get('/faction-statistics/module-dominance')
  },
  getCommentStar () {
    return $axios.get('/faction-statistics/comment-stars')
  },
  getCommentStarlist (payload) {
    return $axios.get(`/faction-statistics/comment-stars/list?page=${payload}`)
  }
})
