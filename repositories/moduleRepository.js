const resource = '/student/module'

export default $axios => ({
  getSearchModule (payload) {
    return $axios.get(
      `${resource}?per_page=8&page=${payload.page}&keyword=${payload.keyword}`
    )
  },
  getMyCollection (payload) {
    if (payload.page === undefined || payload.page === 'undefined') {
      return $axios.get(`${resource}/collection?&keyword=${payload.keyword}`)
    } else {
      return $axios.get(
        `${resource}/collection?per_page=8&page=${payload.page}`
      )
    }
  },
  getDataTag () {
    return $axios.get('module/subject')
  }
})
