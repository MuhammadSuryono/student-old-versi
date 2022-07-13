<template>
  <div class="sidebar-page" style="width: 200px; z-index: 5">
    <section class="sidebar-layout">
      <b-sidebar
        position="static"
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="reduce"
        type="is-light"
        open
        style="width: 200px"
      >
        <div class="main-sidebar" :style="styleObj">
          <div v-if="!reduce" class="img-arrow-open" @click="onSidebar()" />
          <div v-else class="img-arrow-close" @click="onSidebar()" />
          <SidebarAvatar
            :bg-color="data.avatar_bg"
            :avatar-img="images"
            :avatar-name="fullname"
            :level="data.level"
            :faction="data.faction"
            :faction-bg="data.faction_bg"
            :courses="data.courses"
            :achievements="data.achievements"
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
      expandOnHover: true,
      expandWithDelay: false,
      mobile: 'reduce',
      reduce: false,
      data: {
        avatar_image: '',
        avatar_bg: '',
        name: '',
        courses: 0,
        achievements: 0,
        faction: '',
        faction_bg: '',
        level: 0
      }
    }
  },
  computed: {
    ...mapState({
      images: (state) => {
        return state.user.images
      },
      fullname: (state) => {
        return state.user.fullname
      },
      users: (state) => {
        return state.user.users
      },
      sidebar: (state) => {
        return state.user.sidebar
      }
    }),
    styleObj () {
      if (this.reduce) {
        return 'padding: 20px 10px 0px 10px;width:80px;'
      } else {
        return 'padding: 20px 15px 0px 12px;width:200px;'
      }
    }
  },
  mounted () {
    this.reduce = !this.sidebar
    this.getData()
    console.log('reduced : ', this.reduce)
  },
  methods: {
    getData () {
      console.log('user', this.users)
      this.data.courses = this.users.courses
      this.data.achievements = this.users.achievements
      this.data.faction = this.users.faction.faction
      this.data.faction_bg = this.users.faction.faction_bgcolor
      this.data.level = this.users.level
      // eslint-disable-next-line valid-typeof
      if (typeof this.users !== null || typeof this.users !== undefined) {
        this.data.name = this.users.first_name + ' ' + this.users.last_name
        this.data.avatar_image = this.users.avatar.image
        this.data.avatar_bg = this.users.faction.avatar_bgcolor
      }
    },
    onSidebar () {
      console.log('asdas', this.reduce)
      this.reduce = !this.reduce
      this.$store.commit('user/SET_SIDEBAR')
    },
    onSidebarOpen () {
      this.reduce = true
      this.$store.commit('user/SET_SIDEBAR')
    },
    onSidebarClose () {
      this.reduce = false
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
.main-sidebar {
  background-image: url('~@/assets/images/sidebar.png');
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  height: 93vh;
  padding: 20px 15px 0px 18px;
  width: 200px;
  position: absolute;

  // .img-arrow-open {
  //   background-image: url('~@/assets/images/component/toogle.png');
  //   left: 170px;
  //   position: relative;
  //   display: block;
  //   z-index: 999;
  //   top: 47%;
  //   height: 120px;
  //   width: 50px;
  //   cursor: pointer;
  // }
  .img-arrow-open {
    background-image: url('~@/assets/images/component/toogle.png');
    left: 170px;
    position: absolute;
    display: block;
    z-index: 5;
    top: 47%;
    height: 120px;
    width: 50px;
    cursor: pointer;
  }
  .img-arrow-close {
    background-image: url('~@/assets/images/arrow2.svg');
    left: 70px;
    position: absolute;
    display: block;
    z-index: 5;
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
