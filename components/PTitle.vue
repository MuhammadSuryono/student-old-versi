<template>
  <div class="card-profile">
    <img src="~/assets/images/module/box-title.svg" class="background-button">
    <img v-if="type === 'profile'" src="~/assets/images/icon_edit.svg" class="icon-button">
    <img v-if="type === 'decoration'" src="~/assets/images/icon_decoration.svg" class="icon-button">
    <img v-if="type === 'quest'" src="~/assets/images/quest.svg" class="icon-button" style="top: 86px;width:35px;">
    <img v-if="type === 'skillcard'" src="~/assets/images/skillcard/v2_icon.svg" class="icon-button" style="width:30px;margin-top:4px">
    <img v-if="type === 'shop'" src="~/assets/images/icon_shop.svg" class="icon-button">
    <div class="name-card">
      {{ name }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'profile'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-profile {
  .background-button {
    top: 75px;
    position: absolute;
    left: 3px;
    z-index: 5;
  }
  .icon-button {
    z-index: 6;
    top: 88px;
    left: 87px;
    position: absolute;
  }
  .name-card {
    font-style: normal;
    z-index: 6;
    position: absolute;
    top: 89px;
    left: 133px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #0071BC;
    text-shadow: 0px 1px 1px #CFF0FF;
  }
}
</style>
