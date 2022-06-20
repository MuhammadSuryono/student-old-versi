<template>
  <div>
    <div style="height: 100%; width: 100%; z-index: -9999" />
    <PModal style="z-index: 9999" />
    <div class="container-petra">
      <Navbar class="navbars" />
      <div class="columns is-gapless main-menu">
        <!-- sidebar -->
        <SidebarMain
          class="column is-narrow sidebar-menu"
          :style="widthSidebar"
        />
        <div v-if="sidebar" class="petra-overlay" />
        <!-- main -->
        <Nuxt v-if="$route.path !== '/'" class="nuxt-menu" style="z-index: 2" />
        <Nuxt v-else class="nuxt-menu" />

        <span
          v-if="
            $route.path === '/' ||
              $route.path === '/library' ||
              $route.path === '/faction' ||
              $route.path === '/faction/detail'
          "
        >
          <PNavigation
            class="navigation-petra"
            :style="
              $route.path === '/faction/detail' ? 'opacity:0.4' : 'opacity:1;'
            "
          />
        </span>
        <!-- maps and light -->
        <span v-if="$route.path === '/'">
          <img
            src="~/assets/images/component/map/img-1.png"
            class="maps-petra"
            @click="showMaps()"
          >
          <div
            v-if="maps"
            class="detail-maps"
            :style="{
              height: window.height - 68 + 'px'
            }"
            style="
              position: absolute;
              z-index: 3;
              top: 68px;
              left: 80px;
              width: 1200px;
              background: rgba(10, 10, 10, 0.5);
            "
          >
            <div
              style="
                width: 1085px;
                height: 607px;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 4;
                bottom: 0;
                right: 0;
              "
            >
              <Maps />
            </div>
          </div>
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
        </span>
        <!-- edit profile -->
        <Profile
          v-if="btn_profile"
          class="profile-petra noselect"
          :style="widthProfile2"
        />
        <!-- decoration -->
        <Decoration
          v-if="btn_decoration"
          :style="widthProfile"
          class="profile-petra"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showDialog: true,
      light: true,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      },
      maps: (state) => {
        return state.user.btn_maps
      },
      btn_profile: (state) => {
        return state.user.btn_profile
      },
      btn_decoration: (state) => {
        return state.user.btn_decoration
      }
    }),
    widthSidebar () {
      if (this.sidebar) {
        return 'width:200px;'
      } else {
        return 'width:80px;'
      }
    },
    widthProfile () {
      if (this.sidebar) {
        return 'left:200px;'
      } else {
        return 'left:80px;'
      }
    },
    widthProfile2 () {
      if (this.sidebar) {
        return 'left:200px;'
      } else {
        return 'left:80px;'
      }
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.sidebar = true
    this.$notify('Hello user!')
    this.handleResize()
    if (this.maps) {
      this.$store.commit('user/SET_MAPS')
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    showMaps () {
      this.$store.commit('user/SET_MAPS')
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.5s;
  z-index: -9999;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.container-petra {
  max-width: 1280px;
  // background-color: transparent;
  margin: auto;
  padding: 0px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.05);
  .main-menu {
    max-width: 1280px;
    padding-top: 4.25rem;
    // height: 100%;
    position: relative;
    flex: 1 1 auto;
    min-height: 100vh;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    .sidebar-menu {
      width: 200px;
      position: fixed;
      z-index: 4;
    }
    .nuxt-menu {
      z-index: -2;
      max-width: 1280px;
      // height: 100%;
      // display: flex;
      flex: 1 0 auto;
      transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
    .profile-petra {
      z-index: -999;
      position: absolute;
      top: 0px;
      left: 200px;
      z-index: 4;
      overflow-y: scroll;
      overflow-x: hidden;
      height: 100%;
    }
    .navigation-petra {
      z-index: 99;
      position: absolute;
      bottom: 0px;
      left: 80px;
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
