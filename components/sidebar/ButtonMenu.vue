<template>
  <div class="container-button">
    <div class="btn-login">
      <div v-if="type === 'quest'" class="bg-login">
        <img class="img-menu" src="~/assets/images/quest.svg">
        <div class="text-menu">
          Daily Quest
        </div>
      </div>
      <div v-if="type === 'decorations'" class="bg-login">
        <img class="img-menu" src="~/assets/images/decor.svg">
        <div class="text-menu">
          Manage<br>
          Decorations
        </div>
      </div>
      <div v-if="type === 'library'" class="bg-login">
        <img class="img-menu" src="~/assets/images/clarity_library-line.svg">
        <div class="text-menu">
          Travel To <br>Library
        </div>
      </div>
      <div v-if="type === 'shop'" class="bg-login">
        <img class="img-menu" src="~/assets/images/shop.svg">
        <div class="text-menu">
          Go To Shop
        </div>
      </div>
    </div>
    <div class="square-right" />
    <div class="square-left" />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.container-button {
  top: 200px;
  height: 32px;
  width: 168px;
  position: relative;
  cursor: pointer;
  .square-right {
    position: absolute;
    top:-2px;
    left:-2px;
    z-index:0;
    height: 11px;
    width: 16px;
    background: #B3B3B3;
    opacity: 0.35;
    border: 0.83px solid #FFFFFF;
  }
  .square-left {
    position: absolute;
    bottom:-2px;
    right:-2px;
    z-index:0;
    height: 4px;
    width: 4px;
    background: #F2F2F2;
  }
  .btn-login {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: linear-gradient(22.88deg, rgb(168, 245, 255, 0.35) 0%, rgb(195, 244, 249, 0.35) 52%, rgb(223, 242, 242, 0.35) 100%);
    padding:2px;
    .bg-login {
      background: #2E5799;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
      border:1px solid white;
      .img-menu {
        height: 19px;
        margin-right: 10px;
      }
      .text-menu {
        font-family: Nunito;
        text-align: center;
        font-size: 10px;
        line-height: 10px;
      }
    }
    .bg-login:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}

</style>
