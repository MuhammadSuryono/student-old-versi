<template>
  <div class="name-avatar">
    <div class="square-top-name" />
    <div class="trapesium-1-name" />
    <div class="square-center" />
    <div class="trapesium-2-name" />
    <div class="square-bottom-name" />
    <div class="img-logo">
      <img src="~/assets/images/component/card-name.png">
      <div class="name-card">
        {{ myTasks }}
      </div>
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
  .modules {
    background-color: #1b4a87;
    height: 45px;
    width: 130px;
    position: absolute;
    top: 50px;
    left: 20px;
    border-radius: 4px;
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
  .img-logo {
    width: 140px;
    position: absolute;
    top: 8px;
    left: 15px;
    z-index: 1;
    height: 120px;
    .name-card {
      position: absolute;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      top: 4px;
      left: 14px;
      font-size: 16px;
      width: 80%;
      text-align: center;
    }
  }
  .square-top-name {
    height: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top-color: white;
    border-top-style: solid;
    border-top-width: 2px;
    border-left-color: white;
    border-left-style: solid;
    border-left-width: 2px;
    border-right-color: white;
    border-right-style: solid;
    border-right-width: 2px;
    width: 170px;
    background-color: #2c6bca;
  }
  .trapesium-1-name {
    width: 162.5px;
    height: 10px;
    margin-left: 4.4px;
    margin-top: -1px;
    background: #2c6bca;
    transform: perspective(50px) rotateX(-25deg);
    border-left-color: white;
    border-left-style: solid;
    border-left-width: 2px;
    border-right-color: white;
    border-right-style: solid;
    border-right-width: 2px;
  }
  .square-center {
    height: 50px;
    width: 155px;
    margin-right: 10px;
    margin-left: 8px;
    margin-top: -1px;
    background-color: #2c6bca;
    border-left-color: white;
    border-left-style: solid;
    border-left-width: 2.5px;
    border-right-color: white;
    border-right-style: solid;
    border-right-width: 2.5px;
  }
  .trapesium-2-name {
    // width: 163.2px;
    // height: 11px;
    // margin-left: 4.4px;
    // margin-top: -1px;
    // background: #2c6bca;

    width: 162.5px;
    height: 10px;
    margin-left: 4.4px;
    margin-top: -1px;
    background: #2c6bca;
    transform: perspective(50px) rotateX(24deg);

    border-left-color: white;
    border-left-style: solid;
    border-left-width: 2.5px;
    border-right-color: white;
    border-right-style: solid;
    border-right-width: 2.5px;
  }
  .square-bottom-name {
    height: 20px;
    margin-top: -1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-color: white;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-left-color: white;
    border-left-style: solid;
    border-left-width: 2px;
    border-right-color: white;
    border-right-style: solid;
    border-right-width: 2px;
    width: 170px;
    background-color: #2c6bca;
  }
}
</style>
