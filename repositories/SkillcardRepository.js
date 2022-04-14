const resource = 'game/skillset'

export default $axios => ({
  get () {
    return $axios.get('personality-cluster/getUserPersonalityCluster')
  },
  getAllSkill () {
    return $axios.get(`${resource}/getUserAllSkills`)
  }
})
