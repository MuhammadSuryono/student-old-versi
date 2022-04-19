const resource = 'game/skillset'
const resource2 = 'game/achievement'

export default $axios => ({
  get () {
    return $axios.get('personality-cluster/getUserPersonalityCluster')
  },
  getAllSkill () {
    return $axios.get(`${resource}/getUserAllSkills`)
  },
  getDetailSkill (payload) {
    return $axios.get(`${resource}/getUserSkillBySkillId/${payload}`)
  },
  getAllAchievement (payload) {
    return $axios.get(`${resource2}/completed/all`)
  }
})
