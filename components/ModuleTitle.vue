<template>
  <div class="card-module">
    <div class="card-title">
      <img
        src="~/assets/images/module/box-title.svg"
        class="background-button"
      >
      <div class="name-card">
        {{ title }}
      </div>
    </div>
    <div class="card-title">
      <div class="detail-box">
        <div class="name-card2">
          {{ subtitle }}
        </div>
      </div>
    </div>
    <div class="btn-back" @click="goBack()">
      <Back />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-module {
  width: 100%;
  height: 120px;
  .card-title {
    position: relative;
    top: 30px;
    left: 100px;
    .background-button {
      position: absolute;
      top: 0px;
      z-index: 5;
      width: 379px;
      height: 78px;
    }
    .name-card {
      z-index: 6;
      position: absolute;
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      color: #0071bc;
      text-shadow: 0px 1px 1px #cff0ff;
      top: 13px;
      left: 76px;
      width: 240px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .detail-box {
      position: absolute;
      top: 52px;
      left: 55px;
      z-index: 4;
      width: fit-content;
      height: 20px;
      background: #0473bf;
      border-radius: 0px;
      transform: skew(-18deg);
      padding-top: 1px;
    }
    .name-card2 {
      z-index: 6;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: white;
      transform: skew(18deg);
      padding: 0px 20px 0px 20px;
    }
  }
  .btn-back {
    position: absolute;
    cursor: pointer;
    top: 100px;
    right: 50px;
  }
}
</style>
