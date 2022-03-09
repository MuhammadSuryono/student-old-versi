<template>
  <div class="bg-img" />
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default'
}
</script>
<style lang="scss" scoped>
.bg-img {
  background-image: url('~@/assets/images/home/bg_home.png');
  height: 90vh;
  width: 100%;
  margin-left: 10px;
  opacity: 0.4;
  margin-top: 10px;
  margin-right: 10px;
  background-size: cover;
}
</style>
