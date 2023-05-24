export { default as AudioPlayer } from '../..\\components\\AudioPlayer.vue'
export { default as Back } from '../..\\components\\Back.vue'
export { default as BoxTitle } from '../..\\components\\BoxTitle.vue'
export { default as Confirmation } from '../..\\components\\confirmation.vue'
export { default as Decoration } from '../..\\components\\Decoration.vue'
export { default as ImageItem } from '../..\\components\\ImageItem.vue'
export { default as Maps } from '../..\\components\\Maps.vue'
export { default as ModuleTitle } from '../..\\components\\ModuleTitle.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as PButton } from '../..\\components\\PButton.vue'
export { default as PLights } from '../..\\components\\PLights.vue'
export { default as PModal } from '../..\\components\\PModal.vue'
export { default as PNavigation } from '../..\\components\\PNavigation.vue'
export { default as PNotification } from '../..\\components\\PNotification.vue'
export { default as Popup } from '../..\\components\\Popup.vue'
export { default as PProgress } from '../..\\components\\PProgress.vue'
export { default as Profile } from '../..\\components\\Profile.vue'
export { default as PSearch } from '../..\\components\\PSearch.vue'
export { default as PTitle } from '../..\\components\\PTitle.vue'
export { default as PTitleV2 } from '../..\\components\\PTitleV2.vue'
export { default as Quest } from '../..\\components\\Quest.vue'
export { default as Setting } from '../..\\components\\Setting.vue'
export { default as Shop } from '../..\\components\\Shop.vue'
export { default as Skeleton } from '../..\\components\\Skeleton.vue'
export { default as Volume } from '../..\\components\\Volume.vue'
export { default as Volume2 } from '../..\\components\\Volume2.vue'
export { default as ButtonDecoration } from '../..\\components\\button\\decoration.vue'
export { default as ButtonFilter } from '../..\\components\\button\\filter.vue'
export { default as ButtonInterested } from '../..\\components\\button\\interested.vue'
export { default as ButtonPin } from '../..\\components\\button\\pin.vue'
export { default as ButtonPlay } from '../..\\components\\button\\play.vue'
export { default as ButtonV2 } from '../..\\components\\button\\v2.vue'
export { default as CardCollection } from '../..\\components\\card\\Collection.vue'
export { default as CardLogin } from '../..\\components\\card\\Login.vue'
export { default as CardShop } from '../..\\components\\card\\Shop.vue'
export { default as CardShopV2 } from '../..\\components\\card\\ShopV2.vue'
export { default as FactionProgressBar } from '../..\\components\\faction\\ProgressBar.vue'
export { default as FactionReward } from '../..\\components\\faction\\Reward.vue'
export { default as FormArea } from '../..\\components\\Form\\area.vue'
export { default as FormInput } from '../..\\components\\Form\\input.vue'
export { default as FormTextArea } from '../..\\components\\Form\\TextArea.vue'
export { default as IconArchivements } from '../..\\components\\icon\\Archivements.vue'
export { default as IconAvatarBackground } from '../..\\components\\icon\\AvatarBackground.vue'
export { default as IconBackBtn } from '../..\\components\\icon\\BackBtn.vue'
export { default as IconBgAvatar } from '../..\\components\\icon\\BgAvatar.vue'
export { default as IconBgBack } from '../..\\components\\icon\\BgBack.vue'
export { default as IconBgPersonality } from '../..\\components\\icon\\bgPersonality.vue'
export { default as IconCluster } from '../..\\components\\icon\\Cluster.vue'
export { default as IconFaction } from '../..\\components\\icon\\Faction.vue'
export { default as IconFilter } from '../..\\components\\icon\\Filter.vue'
export { default as IconHelpdesk } from '../..\\components\\icon\\Helpdesk.vue'
export { default as IconHome } from '../..\\components\\icon\\Home.vue'
export { default as IconJempol } from '../..\\components\\icon\\Jempol.vue'
export { default as IconLocation } from '../..\\components\\icon\\Location.vue'
export { default as IconRefresh } from '../..\\components\\icon\\refresh.vue'
export { default as IconSearch } from '../..\\components\\icon\\Search.vue'
export { default as IconSetting } from '../..\\components\\icon\\Setting.vue'
export { default as IconSkillcard } from '../..\\components\\icon\\Skillcard.vue'
export { default as IconTabSkill } from '../..\\components\\icon\\TabSkill.vue'
export { default as IconTabSkill2 } from '../..\\components\\icon\\TabSkill2.vue'
export { default as IconTopi } from '../..\\components\\icon\\Topi.vue'
export { default as IconVolume } from '../..\\components\\icon\\Volume.vue'
export { default as IconVolumeMute } from '../..\\components\\icon\\VolumeMute.vue'
export { default as SidebarAvatar } from '../..\\components\\sidebar\\Avatar.vue'
export { default as SidebarButtonMenu } from '../..\\components\\sidebar\\ButtonMenu.vue'
export { default as SidebarCardName } from '../..\\components\\sidebar\\CardName.vue'
export { default as SidebarMain } from '../..\\components\\sidebar\\Main.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
