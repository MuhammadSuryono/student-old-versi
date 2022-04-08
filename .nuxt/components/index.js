export { default as Decoration } from '../../components/Decoration.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as PButton } from '../../components/PButton.vue'
export { default as PLights } from '../../components/PLights.vue'
export { default as PNavigation } from '../../components/PNavigation.vue'
export { default as PNotification } from '../../components/PNotification.vue'
export { default as PProgress } from '../../components/PProgress.vue'
export { default as PTitle } from '../../components/PTitle.vue'
export { default as Profile } from '../../components/Profile.vue'
export { default as IconArchivements } from '../../components/icon/Archivements.vue'
export { default as IconAvatarBackground } from '../../components/icon/AvatarBackground.vue'
export { default as IconBackBtn } from '../../components/icon/BackBtn.vue'
export { default as IconCluster } from '../../components/icon/Cluster.vue'
export { default as IconFaction } from '../../components/icon/Faction.vue'
export { default as IconHome } from '../../components/icon/Home.vue'
export { default as IconSkillcard } from '../../components/icon/Skillcard.vue'
export { default as SidebarAvatar } from '../../components/sidebar/Avatar.vue'
export { default as SidebarCardName } from '../../components/sidebar/CardName.vue'
export { default as SidebarMain } from '../../components/sidebar/Main.vue'

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
