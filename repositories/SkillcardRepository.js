const resource = 'personality-cluster'

export default $axios => ({
  get (payload) {
    return $axios.get(`${resource}/getUserPersonalityCluster`)
  }
})
