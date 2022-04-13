import UserRepository from '~/repositories/userRepository'
import AvatarRepository from '~/repositories/avatarRepository'
import DecorationRepository from '~/repositories/decorationRepository'
import SkillcardRepository from '~/repositories/SkillcardRepository'

export default $axios => ({
  user: UserRepository($axios),
  avatar: AvatarRepository($axios),
  decoration: DecorationRepository($axios),
  skillcard: SkillcardRepository($axios)
})
