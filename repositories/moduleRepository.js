const resource = '/student/module'

export default $axios => ({
  getModule (payload) {
    if (payload.keyword === '') {
      if (
        (payload.sortBy === '' || typeof payload.sortBy === 'undefined') &&
        payload.filterBy.length === 0
      ) {
        return $axios.get(`${resource}?per_page=8&page=${payload.page}`)
      }
      if (
        (payload.sortBy !== '' || typeof payload.sortBy !== 'undefined') &&
        payload.filterBy.length === 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&sortBy=${payload.sortBy}`
        )
      }
      if (
        (payload.sortBy === '' || typeof payload.sortBy === 'undefined') &&
        payload.filterBy.length !== 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&filterBy=${payload.filterBy}`
        )
      }
      // api is not support
      if (
        (payload.sortBy !== '' || typeof payload.sortBy !== 'undefined') &&
        payload.filterBy.length !== 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&sortBy=${payload.sortBy}&filterBy=${payload.filterBy}`
        )
      }
    }
    if (payload.keyword !== '') {
      if (
        (payload.sortBy === '' || typeof payload.sortBy === 'undefined') &&
        payload.filterBy.length === 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&keyword=${payload.keyword}`
        )
      }
      if (
        (payload.sortBy !== '' || typeof payload.sortBy !== 'undefined') &&
        payload.filterBy.length === 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&sortBy=${payload.sortBy}&keyword=${payload.keyword}`
        )
      }
      if (
        (payload.sortBy === '' || typeof payload.sortBy === 'undefined') &&
        payload.filterBy.length !== 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&filterBy=${payload.filterBy}&keyword=${payload.keyword}`
        )
      }
      // api is not support
      if (
        (payload.sortBy !== '' || typeof payload.sortBy !== 'undefined') &&
        payload.filterBy.length !== 0
      ) {
        return $axios.get(
          `${resource}?per_page=8&page=${payload.page}&sortBy=${payload.sortBy}&filterBy=${payload.filterBy}&keyword=${payload.keyword}`
        )
      }
    }
  },
  getDetailModule (payload) {
    return $axios.get(`${resource}/${payload}/collection`)
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
