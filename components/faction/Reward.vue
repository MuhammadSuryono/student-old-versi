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
      <div
        class="border-image"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      />
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
    height: 100%;
    transform: skew(-18deg);
    border: 0.54px solid #f2f2f2;
    z-index: 3;
    border-radius: 5px;
    position: relative;
    .border-image {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      left: -3px;
    }
  }
}
</style>
