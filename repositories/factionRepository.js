// const resource = '/student/profile'

export default $axios => ({
  getProgressBar () {
    return $axios.get('/faction-statistics/list')
  },
  getCommentStar () {
    return $axios.get('/faction-statistics/comment-stars/')
  }
})
