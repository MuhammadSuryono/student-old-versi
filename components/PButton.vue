<template>
  <div>
    <button
      class="p-button"
      :disabled="disabled"
      :style="
        disabled ? 'background-color:#67798C' : 'background-color:#4c7bc1'
      "
    >
      {{ text }}
    </button>
    <div class="corner-top" />
    <div class="corner-bottom" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.p-button {
  padding: 7px 35px 7px 35px;
  background-color: #4c7bc1;
  border: 2px solid #e0fafc;
  text-align: center;
  font-size: 12px;
  color: white;
  position: relative;
  z-index: 3;
}
.corner-top {
  z-index: 2;
  background-color: #7289aa;
  width: 16.13px;
  height: 15.98px;
  position: absolute;
  top: -7px;
  left: -7px;
}
.corner-bottom {
  z-index: 2;
  background-color: #f2f2f2;
  width: 4.28px;
  height: 4.28px;
  position: absolute;
  bottom: -4px;
  right: -4px;
}
</style>
