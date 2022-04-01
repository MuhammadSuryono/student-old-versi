import UserRepository from '~/repositories/userRepository'
import AvatarRepository from '~/repositories/avatarRepository'
import DecorationRepository from '~/repositories/decorationRepository'
export default $axios => ({
  user: UserRepository($axios),
  avatar: AvatarRepository($axios),
  decoration: DecorationRepository($axios)
})
