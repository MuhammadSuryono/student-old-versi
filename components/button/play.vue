<template>
  <div class="btn-bg">
    <div class="bg-1" />
    <div class="bg-2" />
    <div class="corner-1" />
    <div class="corner-2" />
    <div class="text-body">
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-bg {
  position: relative;
  background: #4c7bc1;
  height: 50px;
  width: 230px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .bg-1 {
    z-index: 3;
    position: absolute;
    background: #4c7bc1;
    height: 44px;
    width: 224px;
    left: 3px;
    top: 3px;
    border: 1px solid white;
  }
  .bg-2 {
    z-index: 2;
    position: absolute;
    background: linear-gradient(
      64.48deg,
      #a8f5ff 0%,
      #c3f4f9 52%,
      #dff2f2 100%
    );
    height: 48px;
    width: 229px;
    opacity: 0.5;
  }
  .corner-1 {
    z-index: 1;
    position: absolute;
    background: #7289aa;
    opacity: 0.35;
    border: 0.657738px solid #ffffff;
    height: 24px;
    width: 24px;
    top: -4px;
    left: -4px;
  }
  .corner-2 {
    z-index: 1;
    position: absolute;
    background: #7289aa;
    opacity: 0.35;
    border: 0.657738px solid #ffffff;
    height: 24px;
    width: 24px;
    bottom: -4px;
    right: -4px;
  }
  .text-body {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #f2f2f2;
    z-index: 4;
  }
}
.btn-bg:hover {
  opacity: 0.9;
}
</style>
