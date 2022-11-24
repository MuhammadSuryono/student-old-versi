<template>
  <div
    class="btn-finish2"
    style="margin-top: 15px"
    @mouseover="hover1 = true"
    @mouseleave="hover1 = false"
  >
    <div class="decoration" />
    <div class="square-right" />
    <div class="card-btn">
      <IconJempol
        v-if="!hover1"
        bg-color="#3B69BC"
        style="margin-right: 10px"
      />
      <IconJempol v-else bg-color="white" style="margin-right: 10px" />
      I am interested
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hover1: false
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-finish2 {
  position: relative;
  width: 182px;
  .decoration {
    background: #7289aa;
    border: 1.6px solid #ffffff;
    height: 18px;
    width: 18px;
    top: -5px;
    left: -6px;
    z-index: -1;
    position: absolute;
  }
  .square-right {
    background: white;
    height: 5px;
    width: 5px;
    bottom: -3px;
    left: 181px;
    z-index: 2;
    position: absolute;
  }
  .card-btn {
    width: 182px;
    height: 38.11px;
    background: #f2f2f2;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #3b69bc;
    border: 2px solid #fff380;
  }
}
.btn-finish2:hover {
  .card-btn {
    border: 0.6px solid #aeeefa;
    background: #4c7bc1;
    color: white;
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
    -webkit-transition: border-color 0.5s, background-color 0.5s, color 0.5s;
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
  }
  .square-right {
    left: 172px;
  }
  .decoration {
    top: -5px;
    left: 0px;
  }
}
</style>
