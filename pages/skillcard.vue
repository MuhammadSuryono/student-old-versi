<template>
  <div class="bg-img">
    <div class="card-profile">
      <img src="~/assets/images/bg-button.png" class="background-button">
      <img
        src="~/assets/images/skillcard/icon_skillcard.png"
        class="icon-button"
      >
      <div class="name-card">
        My Skillcard
      </div>
    </div>
    <div class="content-skillcard">
      <NuxtLink to="/">
        <div class="btn-back">
          <img
            src="~/assets/images/back-btn.png"
            style="width: 98.15px; height: 36.49px; cursor: pointer"
          >
        </div>
      </NuxtLink>
      <div class="main-skillcard columns">
        <div class="column is-narrow skillcard1">
          <img
            src="~/assets/images/skillcard/profile.png"
            class="img-profile"
          >
        </div>
        <div class="column">
          <!-- asd -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',

  mounted () {
    console.log(this.$auth.strategy.token.get())
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  background-image: url('~@/assets/images/skillcard/background.png');
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
  .card-profile {
    position: relative;
    left: 80px;
    top: -60px;
    .background-button {
      top: 90px;
      position: absolute;
      left: 22px;
      z-index: 5;
    }
    .icon-button {
      z-index: 6;
      top: 92px;
      left: 30px;
      position: absolute;
    }
    .name-card {
      font-style: normal;
      font-weight: 600;
      z-index: 6;
      position: absolute;
      top: 92px;
      left: 77px;
      font-size: 25.6px;
      color: #ffffff;
    }
  }
  .content-skillcard {
    width: 1050px;
    height: 80vh;
    margin-left: 150px;
    margin-top: 55px;
    background: #effdfd;
    // opacity: 0.8;
    border: 2.45672px solid #2b5ba3;
    box-sizing: border-box;
    border-radius: 8.18906px;
    transform: skew(-5deg);
    .btn-back {
      float: right;
      margin-right: 15px;
      margin-top: 15px;
      cursor: pointer;
    }
    .main-skillcard {
      margin-top: 30px;
      transform: skew(5deg);
      .skillcard1 {
        .img-profile {
          //   width: 448.76px;
          height: 368.55px;
        }
      }
    }
  }
}
</style>
