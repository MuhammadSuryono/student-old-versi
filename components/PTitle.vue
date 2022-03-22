<template>
  <div class="card-profile">
    <img src="~/assets/images/bg-button.png" class="background-button">
    <img src="~/assets/images/logo-profile.png" class="icon-button">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.card-profile {
  .background-button {
    top: 90px;
    position: absolute;
    left: 22px;
    z-index: 5;
  }
  .icon-button {
    z-index: 6;
    top: 85px;
    left: 19px;
    position: absolute;
  }
  .name-card {
    font-style: normal;
    font-weight: 600;
    z-index: 6;
    position: absolute;
    top: 92px;
    left: 77px;
    font-size: 25.6px;
    color: #ffffff;
  }
}
</style>
