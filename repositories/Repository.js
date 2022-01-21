import UserRepository from '~/repositories/userRepository'
export default $axios => ({
  user: UserRepository($axios)
})
