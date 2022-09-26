<template>
  <div class="box-title">
    <img src="~/assets/images/module/box-title.svg" class="bg-box">
    <img src="~/assets/images/setting/icon_title.svg" class="icon-box">
    <div class="title-box">
      Settings
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-title {
  position: relative;
  left: -15px;
  top: -5px;
  .bg-box {
    position: absolute;
    left: 0px;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-app-region: no-drag;
  }
  .icon-box {
    position: absolute;
    left: 90px;
    top: 13px;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-app-region: no-drag;
  }
  .title-box {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #0071bc;
    text-shadow: 0px 1px 1px #cff0ff;
    position: absolute;
    left: 138px;
    top: 13px;
  }
}
</style>
