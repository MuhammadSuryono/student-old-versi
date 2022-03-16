<template>
  <div class="sidebar-page" style="width: 200px">
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
        style="width: 200px"
      >
        <div class="main-sidebar" :style="styleObj">
          <div v-if="!reduce" class="img-arrow-open" @click="sidebar()" />
          <div v-else class="img-arrow-close" @click="sidebar()" />
          <SidebarAvatar
            bg-color="rgba(152, 18, 18, 0.75"
            :avatar-img="image"
            :avatar-name="name"
          />
        </div>
      </b-sidebar>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: 'reduce',
      reduce: false,
      image: '',
      name: ''
    }
  },
  computed: {
    ...mapState({
      users: (state) => {
        return state.user.users
      }
    }),
    styleObj () {
      if (this.reduce) {
        return 'padding: 20px 10px 0px 10px;'
      } else {
        return 'padding: 20px 15px 0px 12px;'
      }
    }
  },
  created () {
    this.reduce = false
  },
  mounted () {
    console.log("-------")
    console.log(this.users)
    this.name = this.users.first_name + " " + this.users.last_name
    this.image = this.users.avatar.image
    console.log(this.image)
    console.log("-------")
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
.b-sidebar .sidebar-content {
  background-color: whitesmoke;
  -webkit-box-shadow: 5px 0px 13px 3px rgb(10 10 10 / 10%);
  box-shadow: 5px 0px 13px 3px rgb(10 10 10 / 10%);
  width: none;
  z-index: 39;
}
// .b-sidebar .sidebar-content {
//   width: 200px;
// }
.img-arrow-open {
  background-image: url('~@/assets/images/component/toogle.png');
  left: 175px;
  position: absolute;
  z-index: 5;
  top: 47%;
  height: 120px;
  width: 50px;
  cursor: pointer;
}
.main-sidebar {
  background-image: url('~@/assets/images/sidebar.png');
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  height: 100%;
  padding: 20px 15px 0px 18px;
  width: 100%;
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
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
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
