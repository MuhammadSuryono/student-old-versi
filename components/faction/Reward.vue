<template>
  <div class="columns is-gapless reward-card">
    <div class="column is-narrow next-reward">
      <div class="border-card">
        <div class="content-reward">
          <div class="next">
            NEXT REWARD
          </div>
          <div class="suite" style="text-transform: uppercase">
            <!-- {{ dataFactionUser.next_reward.name }} -->asdasd
          </div>
        </div>
      </div>
    </div>
    <div class="column image-reward">
      <div class="border-image" />
    </div>
    <!-- <img
      src="https://petralms.s3.ap-southeast-1.amazonaws.com/images/background/decoration_testing/peakpx.jpg"
      style="
        z-index: -1;
        position: absolute;
        height: 73px;
        width: 172px;
        left: 600px;
      "
    > -->
  </div>
</template>
<style lang="scss" scoped>
.reward-card {
  height: 79.78px;
  width: 498.41px;
  .next-reward {
    height: 61.67px;
    width: 310px;
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
  .image-reward {
    width: 100%;
    height: 100%;
    margin-left: 10px;
    // transform: skew(-18deg);
    background: rgba(255, 243, 128, 0.5);
    border: 0.54px solid #f2f2f2;
    z-index: 3;
    border-radius: 5px;
    position: relative;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -165deg at top 80px left 0px, var(--g)) 0 0 /51%
        100% no-repeat,
      conic-gradient(from -45deg at bottom 30px right 30px, var(--g)) 100% 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    // .border-image {
    //   border: 2px solid #ffffff;
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   border-radius: 5px;
    //   top: -3px;
    //   left: -3px;
    // }
  }
}
</style>
