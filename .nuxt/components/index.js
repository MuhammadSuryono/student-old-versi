export { default as Navbar } from '../../components/Navbar.vue'
export { default as PButton } from '../../components/PButton.vue'
export { default as PNavigation } from '../../components/PNavigation.vue'
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
