<template>
  <div>
    <span v-if="sidebar" class="avatar-container">
      <div class="square-top" />
      <div class="trapesium-1" />
      <div class="square-center" />
      <div class="trapesium-2" />
      <div class="square-bottom" />
    </span>
    <span v-else class="avatar-container2">
      <div class="square-top" />
      <div class="trapesium-1" />
      <div class="square-center" />
      <div class="trapesium-2" />
      <div class="square-bottom" />
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },

  computed: {
    ...mapState({
      sidebar: (state) => {
        return state.user.sidebar
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.avatar-container {
  .square-top {
    height: 70px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 240px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-center {
    height: 70px;
    width: 220px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-bottom {
    height: 70px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 240px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .trapesium-1 {
    height: 0px;
    width: 240px;
    border-top: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  .trapesium-2 {
    height: 0px;
    width: 240px;
    border-bottom: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
}
.avatar-container2 {
  .square-top {
    height: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 60px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-center {
    height: 20px;
    width: 48px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .square-bottom {
    height: 30px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 60px;
    background-color: rgba(152, 18, 18, 0.75);
  }
  .trapesium-1 {
    height: 0px;
    width: 60px;
    border-top: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
  .trapesium-2 {
    height: 0px;
    width: 60px;
    border-bottom: 20px solid rgba(152, 18, 18, 0.75);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
</style>
