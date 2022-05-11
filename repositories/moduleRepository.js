const resource = '/student/module'

export default $axios => ({
  getSearchModule (payload) {
    console.log('payload')
    console.log(payload.keyword === '')
    console.log(payload.sortBy === '')
    console.log(payload.filterBy.length === 0)
    console.log('payload')
    if (
      payload.keyword === '' &&
      payload.sortBy === '' &&
      payload.filterBy.length === 0
    ) {
      return $axios.get(`${resource}?per_page=8&page=${payload.page}`)
    } else if (payload.sortBy === '') {
      if (payload.keyword === '') {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&filterBy=${payload.filterBy}`
        )
      } else {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&keyword=${payload.keyword}&filterBy=${payload.filterBy}`
        )
      }
    } else if (payload.keyword === '') {
      return $axios.get(
        `${resource}?per_page=8&page=${payload.page}&sortBy=${payload.sortBy}`
      )
    } else {
      return $axios.get(
        `${resource}?per_page=8&page=${payload.page}&keyword=${payload.keyword}&sortBy=${payload.sortBy}`
      )
    }
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
