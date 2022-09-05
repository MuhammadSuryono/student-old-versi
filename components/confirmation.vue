<template>
  <div class="popup-confirmation">
    <div class="bg-layer-1" />
    <div class="bg-layer-2" />
    <div class="bg-layer-3" />
    <div class="bg-layer-4" />
    <div class="content-center">
      <img src="~/assets/images/module/icon_alert.svg" class="icon-alert">
      <slot name="body" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.popup-confirmation {
  position: relative;
  width: 592px;
  height: 160px;
  .bg-layer-1 {
    top: 20px;
    position: absolute;
    width: 170px;
    height: 144px;
    background: #2e5799;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100% 0 /51%
        100% no-repeat,
      conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    z-index: 1;
  }
  .bg-layer-2 {
    position: absolute;
    width: 585px;
    height: 160px;
    left: 4px;
    background: #ffffff;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100% 0 /51%
        100% no-repeat,
      conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    z-index: 2;
  }
  .bg-layer-3 {
    top: -3px;
    right: -1px;
    position: absolute;
    width: 170px;
    height: 144px;
    background: #2e5799;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100% 0 /51%
        100% no-repeat,
      conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    z-index: 1;
  }
  .bg-layer-4 {
    top: 5px;
    position: absolute;
    width: 575px;
    height: 150px;
    left: 9px;
    background: #f2f2f2;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100% 0 /51%
        100% no-repeat,
      conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    z-index: 3;
  }
  .content-center {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
    width: 510px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    .icon-alert {
      width: 62px;
      height: 62px;
    }
  }
}
</style>
