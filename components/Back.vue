<template>
  <div class="container-back">
    <IconBgBack />
    <img class="icon-btn" src="~/assets/images/button/icon-back.svg">

    <div class="text-btn">
      Back
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-back {
  position: relative;
  .icon-btn {
    position: absolute;
    top: 7px;
    left: 17px;
  }
  .text-btn {
    position: absolute;
    top: 5px;
    left: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* or 20px */

    display: flex;
    align-items: center;

    color: #ffffff;
  }
}
</style>
