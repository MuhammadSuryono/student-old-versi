const resource = 'https://310c1b91-9220-46ab-a592-b3bd4addf834.mock.pstmn.io/quest/'

export default $axios => ({
  getTaskToday () {
    return $axios.get(resource + 'collection/task/today')
  }
})
