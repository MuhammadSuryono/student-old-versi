<template>
  <div class="bg-img">
    <img
      src="~/assets/images/library/mascot.png"
      style="
        margin: auto;
        position: absolute;
        top: 0px;
        left: -550px;
        bottom: 0;
        right: 0;
      "
    >
    <img
      src="~/assets/images/library/text.svg"
      style="
        margin: auto;
        position: absolute;

        left: 480px;
        top: 200px;
      "
    >
    <img
      src="~/assets/images/library/btn-exit.svg"
      style="position: absolute; right: 20px; bottom: 40px; cursor: pointer"
      @click="goBack()"
    >
    <div class="btn-edit" @click="toModule()">
      <img src="~/assets/images/library/btn.svg" style="height: 45px">
      <div class="text-edit">
        Search Modules
      </div>
    </div>
    <!-- <div class="btn-edit" style="top: 410px">
      <img src="~/assets/images/library/btn.svg" style="height: 45px">
      <div class="text-edit">
        Search Courses
      </div>
    </div> -->
    <div class="btn-edit" style="top: 410px" @click="goCollection()">
      <img src="~/assets/images/library/btn.svg" style="height: 45px">
      <div class="text-edit">
        My Collection
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LibraryPage',
  layout: 'default',

  data () {
    return {}
  },

  computed: {
    ...mapState({})
  },
  mounted () {},
  methods: {
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/')
    },
    toModule () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/library/module')
    },
    goCollection () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/library/collection')
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  background-image: url('~@/assets/images/library/background.png');
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
}
.btn-edit {
  left: 800px;
  top: 350px;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  .text-edit {
    position: absolute;
    top: 11px;
    color: #c7d6fd;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
}
</style>
