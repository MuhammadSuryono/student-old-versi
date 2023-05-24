<template>
  <div class="card-btn" :class="active ? 'active' : 'non-active' ">
    <img v-if="action === 'profile'" src="~/assets/images/icon_profile.svg" class="sub-item">
    <img v-if="action === 'decor'" src="~/assets/images/decor.svg" class="sub-item">
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      default: 'profile'
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  .card-btn {
    --mask: linear-gradient(-45deg,#0000 4px,#000 0 calc(100% - 4px),#0000 0);
    -webkit-mask: var(--mask);
    mask: var(--mask);
    display:flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    .sub-item {
      height:70%;
    }
  }
  .active {
    height: 35px;
    width: 50px;
    background: #1A4786;
  }
  .non-active {
    height: 30px;
    width: 43px;
    background: #102748;

  }
</style>
