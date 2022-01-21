<template>
  <div>
    <Navbar class="navbars" style="z-index: 999" />
    <div class="columns is-gapless" style="padding-top: 4.25rem; z-index: -1">
      <Sidebar class="column is-narrow" />
      <Nuxt class="p-2" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.navbars {
  position: fixed;
  width: 100%;
}
</style>
