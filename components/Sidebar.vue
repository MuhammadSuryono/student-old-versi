<template>
  <b-sidebar v-model="open" :position="position" type="is-dark">
    <div class="main-sidebar">
      <div class="box-profile">
        <div class="parallelogram-head">
          <div class="title-head">
            Profile
          </div>
        </div>
        <div class="parallelogram" />
        <div class="parallelogram2">
          <div class="columns is-gapless">
            <div class="column is-6">
              <img :src="dataUsers.photo_path" class="img-logo">
            </div>
            <div class="column name-profile">
              {{ dataUsers.first_name }} {{ dataUsers.last_name }}
              <br>
              <b class="mt-2">{{ roleUser }}</b>
            </div>
          </div>
          <NuxtLink to="/profile">
            <div class="btn-edit" @click="toEdit()">
              Edit Profile
            </div>
          </NuxtLink>
        </div>
      </div>
      {{ dataUsers }}
      <b-menu class="sidebar-menu">
        <ul style="width: 100%">
          <li>
            <div @click="closeAll()">
              <NuxtLink class="sidebar-item" to="/">
                Modules
              </NuxtLink>
            </div>
          </li>
        </ul>
      </b-menu>
    </div>
  </b-sidebar>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
      position: 'static',
      isActive: true,
      data: {},
      role: '',
      fullname: '',
      images: '',
      activeUserOverview: false,
      activeActivityOverview: false
    }
  },
  computed: {
    ...mapState({
      dataUsers: (state) => {
        return state.user.users
      },
      roleUser: (state) => {
        return state.user.data.user.roles[0].name
      }
    })
  },
  mounted () {
    console.log('sidebar')
    this.$store.dispatch('user/get')
    // if (this.dataUsers.user_type.length > 0) {
    this.role = this.dataUsers.user_type
    // }
  },
  methods: {
    closeAll () {
      this.activeActivityOverview = false
      this.activeUserOverview = false
    },
    userOverview () {
      this.activeUserOverview = !this.activeUserOverview
      this.activeActivityOverview = false
    },
    activityOverview () {
      this.activeActivityOverview = !this.activeActivityOverview
      this.activeUserOverview = false
    },
    toEdit () {
      this.$router.push({ path: 'profile' })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-sidebar {
  background: #2e3192;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  padding: 10px;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  .title-sidebar {
    color: white;
    text-align: center;
    margin-top: 10px;
  }
  .box-profile {
    position: relative;
    padding: 20px 18px 10px 18px;
    .parallelogram-head {
      color: white;
      text-align: center;
      font-size: 14px;
      position: absolute;
      top: 8px;
      z-index: 2;
      width: 100px;
      height: 27px;
      padding-top: 1px;
      transform: skew(-10deg);
      background: #020735;
      border: 2px solid #ffffff;
      box-sizing: border-box;
      border-radius: 5px;
      .title-head {
        transform: skewX(10deg);
      }
    }
    .parallelogram {
      z-index: -1;
      width: 203px;
      height: 130px;
      transform: skew(-10deg);
      background: #010129;
      opacity: 0.5;
      border-radius: 5px;
    }
    .parallelogram2 {
      z-index: 0;
      position: absolute;
      top: 22px;
      right: 16px;
      width: 190px;
      height: 140px;
      transform: skew(-10deg);
      background: #000028;
      border: 3px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      padding: 10px;
      .img-logo {
        margin-top: 15px;
        transform: skewX(10deg);
        height: 65px;
        width: 65px;
        border-radius: 50%;
        margin-left: 3px;
      }
      .name-profile {
        margin-top: 10px;
        font-size: 13px;
        width: 90px;
        overflow-wrap: break-word;
        transform: skewX(10deg);
        text-transform: capitalize;
      }
      .btn-edit {
        position: absolute;
        bottom: 13px;
        right: 10px;
        background: #fff200;
        font-size: 10px;
        width: 90px;
        color: black;
        transform: skewX(10deg);
        border-radius: 13px;
        padding: 3px 3px 3px 3px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .sidebar-menu {
    margin-top: 40px;
    width: 100%;
    .notif {
      display: inline;
      border: 1px solid grey;
      margin-right: 10px;
      font-size: 12px;
      padding-left: 4px;
      text-align: center;
    }
    .sidebar-item {
      display: block;
      background-color: #000028;
      color: white;
      position: relative;
      border-radius: 5px;
      font-size: 14px;
      padding: 9px 4px 9px 20px;
      width: 227px;
      opacity: 8;
      margin-bottom: 15px;
      margin-left: 3px;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .sidebar-item-child {
      display: block;
      background-color: #000028;
      color: white;
      position: relative;
      border-radius: 5px;
      font-size: 14px;
      padding: 9px 0px 9px 20px;
      width: 200px;
      margin-bottom: 8px;
      margin-left: 30px;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .sidebar-item-child.nuxt-link-exact-active {
      font-weight: bold;
    }

    .sidebar-item.nuxt-link-active {
      display: block;
      width: 227px;
      margin-left: 3px;
      color: white;
      font-weight: bold;
    }
    .icons {
      position: absolute;
      right: 10px;
      top: 11px;
      height: 20px;
    }
  }
}
</style>
