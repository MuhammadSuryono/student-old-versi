import UserRepository from '~/repositories/userRepository'
import AvatarRepository from '~/repositories/avatarRepository'
import DecorationRepository from '~/repositories/decorationRepository'
import SkillcardRepository from '~/repositories/skillcardRepository'
import ModuledRepository from '~/repositories/moduleRepository'
import FactionRepository from '~/repositories/factionRepository'

export default $axios => ({
  user: UserRepository($axios),
  avatar: AvatarRepository($axios),
  decoration: DecorationRepository($axios),
  skillcard: SkillcardRepository($axios),
  module: ModuledRepository($axios),
  faction: FactionRepository($axios)
})
