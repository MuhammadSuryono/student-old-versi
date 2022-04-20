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
  getAllModule (payload) {
    return $axios.get(
      `${resource}/getUserModuleSkillBySkillId/${payload.id}?per_page=4&page=${payload.page}`
    )
  },
  getAllAchievement (payload) {
    return $axios.get(`${resource2}/completed/all?per_page=6&page=${payload}`)
  }
})
