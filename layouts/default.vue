<template>
  <div class="container-petra">
    <Navbar class="navbars" />
    <div class="columns is-gapless main-menu">
      <SidebarMain
        class="column is-narrow sidebar-menu"
        :style="widthSidebar"
      />
      <div v-if="sidebar" class="petra-overlay" />
      <Nuxt class="nuxt-menu" />
      <PNavigation class="navigation-petra" :style="navigations" />
      <img src="~/assets/images/component/map/img-1.png" class="maps-petra">
      <img
        v-if="light"
        src="~/assets/images/component/light/img-1.png"
        class="light-petra"
        @click="light = false"
      >
      <div v-else class="light-petra-true" @keydown.esc="tes()">
        <img
          src="~/assets/images/component/light/img-2.png"
          class="text-light"
        >
        <img
          src="~/assets/images/component/light/img-3.png"
          class="avatar-light"
          @click="light = true"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      light: true
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      }
    }),
    widthSidebar () {
      if (this.sidebar) {
        return 'width:200px;'
      } else {
        return 'width:80px;'
      }
    },
    navigations () {
      if (this.sidebar) {
        return 'left:80px;'
      } else {
        return 'left:80px;'
      }
    }
  },

  created () {
    this.sidebar = true
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container-petra {
  max-width: 1280px;
  background-color: transparent;
  margin: auto;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.05);
  .main-menu {
    max-width: 1280px;
    padding-top: 4.25rem;
    height: 100vh;
    position: relative;
    .sidebar-menu {
      width: 200px;
      z-index: 4;
    }
    .petra-overlay {
      width: 100%;
      height: 100%;
      background: rgba(10, 10, 10, 0.5);
      z-index: 3;
      position: fixed;
      top: 0px;
      max-width: 1280px;
    }
    .nuxt-menu {
      z-index: -2;
      max-width: 1280px;
      box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.05);
    }
    .navigation-petra {
      z-index: 99;
      position: absolute;
      bottom: 0px;
      left: 0px;
      z-index: 2;
    }
    .maps-petra {
      z-index: 1;
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
    }
    .light-petra {
      z-index: 1;
      position: absolute;
      bottom: 32vh;
      right: 200px;
      cursor: pointer;
      -webkit-animation: lights 10s linear infinite;
    }
    .light-petra-true {
      width: 100%;
      height: 100%;
      background: rgba(10, 10, 10, 0.5);
      z-index: 2;
      position: absolute;
      top: 0px;
      .text-light {
        position: absolute;
        bottom: 110px;
        left: 300px;
        height: 118px;
      }
      .avatar-light {
        position: absolute;
        top: 20vh;
        right: 200px;
        height: 280px;
        cursor: pointer;
      }
    }
  }
}
@-webkit-keyframes lights {
  0%,
  100% {
    bottom: 30%;
  }
  50% {
    bottom: 20%;
  }
}
.navbars {
  position: fixed;
  width: 100%;
  z-index: 999;
  max-width: 1280px;
}

.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    // min-height: 100vh;
  }
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.is-mini-expand {
  .menu-list a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
