<template>
  <div class="name-avatar">
    <img src="~/assets/images/bg_cardname.svg" style="pointer-events: none;">
    <div class="title-name">
      {{ myTasks }}
    </div>
    <div class="modules">
      <div class="courses">
        {{ courses2 }} MODULES
      </div>
      <div class="archievements">
        {{ achievements2 }} ACHIEVEMENTS
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    courses2: {
      type: Number,
      default: 0
    },
    achievements2: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      myTasks: state => state.user.fullname,
      fullname: (state) => {
        return state.user.fullname
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.name-avatar {
  font-family: 'Barlow';
  position: relative;
  top: 169px;
  left: 2px;
  .title-name {
    position: absolute;
    top: 6px;
    left: 22px;
    width: 124px;
    height: 27px;
    background: #2E5799;
    font-family: "Nunito";
    font-style: normal;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
  }

  .modules {
    padding-top: 4px;
    background-color: #2B2B56;
    height: 54px;
    width: 138px;
    position: absolute;
    top: 38px;
    left: 12px;
    font-size: 14px;
    text-align: center;
    .courses {
      padding-top: 3px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
      font-weight: 500;
    }
    .archievements {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 500;
      font-size: 12px;
    }
  }
}
</style>
