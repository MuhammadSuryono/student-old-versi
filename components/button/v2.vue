<template>
  <div class="container-button" :style="'width: ' + width + 'px;height: ' + height + 'px;'">
    <div class="btn-login">
      <div class="bg-login">
        {{ value }}
      </div>
    </div>
    <div class="square-right" />
    <div class="square-left" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '168'
    },
    height: {
      type: String,
      default: '26'
    }
  }
}
</script>
<style lang="scss" scoped>

.container-button {
    height: 26px;
    position: relative;
    cursor: pointer;
    .square-right {
      position: absolute;
      top:-2px;
      left:-2px;
      z-index:-1;
      height: 11px;
      width: 16px;
      background: #7289AA;
      opacity: 0.35;
      border: 0.657738px solid #FFFFFF;
    }
    .square-left {
      position: absolute;
      bottom:-2px;
      right:-2px;
      z-index:-1;
      height: 4px;
      width: 4px;
      background: #F2F2F2;
    }
    .btn-login {
      height: 100%;
      width: 100%;
      background: linear-gradient(22.88deg, rgb(168, 245, 255, 0.35) 0%, rgb(195, 244, 249, 0.35) 52%, rgb(223, 242, 242, 0.35) 100%);
      padding:2px;
      .bg-login {
        background: #4C7BC1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        color: #F2F2F2;
      }
      .bg-login:hover {
        opacity: 0.9;
      }
    }
  }
</style>
