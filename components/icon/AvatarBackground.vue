<template>
  <div class="container-square">
    <div class="square">
      <div class="main-square" :style="'background:linear-gradient(28deg, rgb(221 221 221) 0%, rgb(30 30 62) 0%, rgb(0, 212, 255) 100%);'" />
      <img :src="images" class="img-avatar">
    </div>
    <div class="square-2" />
  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'white'
    },
    images: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.container-square {
  margin-left: -5px;
  position: relative;
  .square {
    position: inherit;
    z-index:2;
    --mask: linear-gradient(45deg,#0000 6px,#000 0 calc(100% - 6px),#0000 0);	
    -webkit-mask: var(--mask);
            mask: var(--mask);
    height:73px;
    width:71px;
    background-color:#A5DAF8;
    .main-square {
      position: absolute;
      left: 2px;
      top: 2px;
      z-index:1;
      --mask: linear-gradient(45deg,#0000 6px,#000 0 calc(100% - 6px),#0000 0);	
      -webkit-mask: var(--mask);
              mask: var(--mask);
      height: 69px;
      width: 67px;
    }
    .img-avatar {
      position: absolute;
      z-index: 2;
      left: 25px;
      bottom: 22px;
      height: 20px;
      width: 22px;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: 40% 0%;
      object-position: 40% 0%;
      transform: scale(3);
    }
  }
  .square-2 {
    position: absolute;
    right:-2px;
    top: -2px;
    z-index:1;
    --mask: linear-gradient(45deg,#0000 6px,#000 0 calc(100% - 6px),#0000 0);	
    -webkit-mask: var(--mask);
            mask: var(--mask);
    height:67px;
    width:65px;
    background-color:#FFFFFF;
  }
}
</style>
