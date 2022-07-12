<template>
  <div class="modal-dialog">
    <div class="overlay-bg" @click="$emit('close-modal')" />
    <img src="~/assets/images/library/mascot.png" class="avatar-light">
    <div class="card-popup">
      <div class="bg-popup">
        <div class="text-popup">
          Coming Soon!
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-dialog {
  height: 100%;
  width: 1280px;
  position: absolute;
  z-index: 9999;
  .overlay-bg {
    height: 100%;
    width: 100%;
    background: rgba(10, 10, 10, 0.5);
    cursor: pointer;
  }
  .avatar-light {
    height: 266px;
    z-index: 99999;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin-right: 717px;
  }
  .card-popup {
    height: 200px;
    width: 600px;
    background-color: white;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100% 0 /51%
        100% no-repeat,
      conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    padding: 20px;
    .bg-popup {
      background-color: #f2f2f2;
      height: 100%;
      width: 100%;
      --g: #000, #0000 1deg 179deg, #000 180deg;
      --mask: conic-gradient(from -45deg at top 15px right 15px, var(--g)) 100%
          0 /51% 100% no-repeat,
        conic-gradient(from -225deg at bottom 15px left 15px, var(--g)) 0 100%/51%
          100% no-repeat;
      -webkit-mask: var(--mask);
      mask: var(--mask);
      .text-popup {
        line-height: 160px;
        text-align: center;
        align-items: center;
        font-size: 20px;
        margin-left: 66px;
      }
    }
  }
}
</style>
