<template>
  <div class="columns is-gapless reward-card">
    <div class="column is-narrow next-reward">
      <div class="border-card">
        <div class="content-reward">
          <div class="next">
            NEXT REWARD
          </div>
          <div class="suite" style="text-transform: uppercase">
            {{ title }}
          </div>
        </div>
      </div>
    </div>
    <div class="column image-reward">
      <img
        src="~/assets/images/confirmation_overlay.svg"
        style="position: absolute; top: 21px; left: 0px"
      >
      <img
        src="~/assets/images/library/mascot.png"
        style="position: absolute; top: -36px; right: -34px; height: 82px"
      >
      <div
        style="
          position: absolute;
          top: 28px;
          left: 30px;
          font-weight: 700;
          font-size: 15px;
          color: #3a5ca6;
        "
      >
        COMING SOON
      </div>
    </div>
    <div class="bg-img-reward" />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.reward-card {
  height: 79.78px;
  width: 499px;
  .next-reward {
    height: 61.67px;
    width: 337px;
    z-index: 2;
    padding: 6px !important;
    background: #ffffff;
    transform: skew(-18deg);
    border: 1px solid #f2f2f2;
    .border-card {
      border: 1px solid #a8f5ff;
      height: 100%;
      width: 100%;
      .content-reward {
        padding-right: 20px;
        transform: skew(18deg);
        float: right;
        .next {
          font-size: 15px;
          font-weight: 400;
          color: #0071bc;
          text-align: right;
          width: 100%;
          line-height: 25px;
        }
        .suite {
          font-weight: 700;
          line-height: 15px;
          float: right;
          width: 100%;
          font-size: 22px;
          color: #0071bc;
        }
      }
    }
  }
  .bg-img-reward {
    width: 172px;
    height: 78px;
    background: #fff380;
    opacity: 0.5;
    position: absolute;
    border-radius: 6px;
    z-index: 3;
    left: 463px;
    top: 255px;
  }
  .image-reward {
    width: 100%;
    height: 100%;
    margin-left: -10px;
    height: 100%;
    border: 0.54px solid #f2f2f2;
    z-index: 4;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    position: relative;
    // background-size: cover;
    // background-position: center;
    background: #80a9da;
  }
}
</style>
