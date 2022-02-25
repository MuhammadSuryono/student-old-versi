<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        position="static"
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="reduce"
        :delay="expandWithDelay ? 1000 : null"
        type="is-light"
        fullheight
        open
      >
        <div class="main-sidebar">
          <div v-if="!reduce" class="img-arrow-open" @click="sidebar()" />
          <div v-else class="img-arrow-close" @click="sidebar()" />
          <Avatar />
        </div>
      </b-sidebar>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: 'reduce',
      reduce: false
    }
  },
  methods: {
    sidebar () {
      this.reduce = !this.reduce
      this.$store.commit('user/SET_SIDEBAR')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-sidebar {
  background-image: url('~@/assets/images/sidebar.png');
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  padding: 10px;
  height: 100%;
  width: 100%;
  .img-arrow-open {
    background-image: url('~@/assets/images/arrow.png');
    left: 238px;
    position: absolute;
    z-index: 9999;
    top: 43%;
    height: 100px;
    width: 30px;
    cursor: pointer;
  }
  .img-arrow-close {
    background-image: url('~@/assets/images/arrow2.svg');
    left: 73px;
    position: absolute;
    z-index: 9999;
    top: 43%;
    height: 100px;
    width: 30px;
    cursor: pointer;
  }
}
.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  // min-height: 100vh;
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
