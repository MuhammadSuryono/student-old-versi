<template>
  <div class="select-decoration">
    <div class="bg-1">
      <div class="card-item">
        <div class="title">
          {{ number }}
        </div>
      </div>
    </div>
    <div class="bg-2" />
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.select-decoration {
  cursor: pointer;
  position: relative;
  .bg-1 {
    cursor: pointer;
    height: 26px;
    width: 33px;
    background: linear-gradient(180deg, #DFF2F2 0%, #C3F4F9 48%, #A8F5FF 100%);
    transform: skew(-12deg);
    padding:0.8px;
    .card-item {
      height: 100%;
      width: 100%;
      background: #2E5799;
      border: 0.54px solid #F2F2F2;
      text-align: center;
      .title {
        transform: skew(12deg);
        font-family: 'Nunito';
        font-style: normal;
        font-size: 12px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }
    .card-item:hover {
      background:white;
      .title {
        color:#2E5799;
      }
    }
  }
  .bg-2 {
    z-index: -1;
    position: absolute;
    top:2px;
    right:-1px;
    height: 26px;
    width: 32px;
    transform: skew(-13deg);
    background: #FFF380;
    mix-blend-mode: multiply;
    opacity: 0.7;
  }
}
</style>
