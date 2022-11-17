<template>
  <div class="container-blend">
    <div class="title-blend">
      Selamat anda telah menyelesaikan
      Modul Keselamatan dan Kesehatan Kerja<br>
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
  width: 697px;
  height: 369px;
  background-image: url('~@/assets/images/supanusa.svg');
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title-blend {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    // line-height: 14px;
    text-align: center;
    color: #FFFFFF;
  }
  .hr-blend {
    border: 2px solid #FFCF24;
    width: 80%;
    height: 0px;
    margin-top:18px;
    margin-bottom:18px;
  }
  .score-blend {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
  }
  .value-blend {
    position: relative;
    margin-top:10px;
    .score-value {
      position: absolute;
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      text-align: center;
      color: #FFFFFF;
      top: 46px;
      width: 100%;
    }
    .img-blend {
      width: 155px;
    }
  }
}
</style>
