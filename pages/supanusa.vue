<template>
  <div class="container-blend">
    <div class="title-blend">
      Selamat anda telah menyelesaikan
      Modul Keselamatan dan Kesehatan Kerja
      Sopanusa - FireDrill
    </div>
    <div class="hr-blend" />
    <div class="score-blend">
      SCORE ANDA :
    </div>
    <div class="value-blend">
      <div class="score-value">
        {{ score }}
      </div>
      <img src="~/assets/images/element_score.svg" class="img-blend">
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'SupanusaPage',
  layout: 'login',

  data () {
    return {
      score: 0
    }
  },
  mounted () {
    this.score = this.$router.currentRoute.query.score
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.container-blend {
  width: 1154px;
  height: 615px;
  background-image: url('~@/assets/images/supanusa.svg');
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title-blend {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
  }
  .hr-blend {
    border: 4px solid #FFCF24;
    width: 873.5px;
    height: 0px;
    margin-top:28px;
    margin-bottom:28px;
  }
  .score-blend {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
  }
  .value-blend {
        position: relative;
    .score-value {
    position: absolute;
    font-style: normal;
    font-weight: 600;
    font-size: 82px;
    line-height: 115px;
    text-align: center;
    color: #FFFFFF;
    top: 109px;
    width: 100%;
    }
    .img-blend {
        // position: absolute;
        width: 310.13px;
        height: 324.99px;
    }
  }
}
</style>
