<template>
  <div>
    <Navbar class="navbars" style="z-index: 999" />
    <div class="columns is-gapless" style="padding-top: 4.25rem; height: 100vh">
      <SidebarMain
        class="column is-narrow"
        :style="widthSidebar"
        style="width: 200px; z-index: 3"
      />
      <div v-if="sidebar" class="petra-overlay" />
      <Nuxt style="z-index: -2" />
      <PNavigation
        class="navigation-petra"
        :style="navigations"
        style="z-index: 1"
      />
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
  methods: {
    tes() {
      console.log('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.petra-overlay {
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.5);
  z-index: 2;
  position: fixed;
  top: 0px;
}
.navigation-petra {
  z-index: 99;
  position: relative;
  bottom: 0px;
  left: 0px;
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
  right: 28vw;
  cursor: pointer;
  -webkit-animation: lights 10s linear infinite;
}
.light-petra-true {
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.5);
  z-index: 2;
  position: fixed;
  top: 0px;
  .text-light {
    position: absolute;
    bottom: 80px;
    left: 200px;
  }
  .avatar-light {
    position: absolute;
    top: 20vh;
    right: 15vw;
    cursor: pointer;
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
