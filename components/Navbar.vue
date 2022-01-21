<template>
  <div>
    <b-navbar class="navbar">
      <template #brand>
        <div class="logo">
          <img src="~/assets/images/logo_dashboard.png" class="img-logo">
        </div>
        <div id="triangle-bottomleft" />
      </template>
      <template #end>
        <div id="triangle-bottomright" />
        <b-navbar-item tag="div" class="right-side">
          <div class="buttons">
            <b-button class="btn-logout" @click="keluar()">
              Sign Out
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div v-show="showSetting" class="modal-right">
      <b-button class="btn-setting">
        Setting
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSetting: false
    }
  },
  methods: {
    keluar () {
      this.$auth.logout()
      this.$router.push('/login')
      // await this.$axios
      //   .$post(this.$axios.defaults.baseURL + '/logout')
      //   .then((res) => {
      //     this.$auth.logout()
      //     this.$router.push('/login')
      //   })
      //   .catch((err) => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  padding-right: 0px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .logo {
    display: flex;
    align-items: center;
    width: 259px;
    padding-left: 30px;
    background-color: #2e3192;
    .img-logo {
      width: 50px;
    }
  }
  .search {
    width: 250px;
    background-color: #e0e0e0;
  }
  .select-btn {
    background: #5472d3;
    border: 0px;
  }
  .btn-setting {
    color: black;
    text-decoration: none;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .btn-logout {
    background: #000000;
    border-radius: 5px;
    color: white;
    width: 130px;
    margin-left: 15px;
    font-size: 14px;
    border: 0px;
  }
  .right-side {
    background-color: #2e3192;
  }
  #triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 4.25rem solid #2e3192;
    border-left: 80px solid transparent;
  }
  #triangle-bottomleft {
    width: 0;
    height: 0;
    border-top: 4.25rem solid #2e3192;
    border-right: 80px solid transparent;
  }
}

.modal-right {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 300px;
  background-color: Red;
  height: 100vh;
  z-index: 9999999;
  transition: all 0.2s ease-out;
}
@keyframes reveal {
  from {
    clip-path: inset(0 0 0 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
