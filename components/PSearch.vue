<template>
  <div class="columns is-gapless mb-0 pb-0">
    <div class="hexagon">
      <input type="text">
    </div>
    <div class="hexagon2" />
  </div>
</template>
<style lang="scss" scoped>
.hexagon {
  width: 171px;
  height: 27.33px;
  transform: skew(-18deg);
  background: #f5fbff;
}
.hexagon2 {
  background: #0473bf;
  height: 27.4px;
  width: 35px;
  border-radius: 0px;
  margin-left: 10px;
  transform: skew(-18deg);
  cursor: pointer;
}
input {
  background: transparent;
  border: none;
  transform: skew(18deg);
  display: inline-block;
  font-weight: 400;
  font-size: 14px;
  margin-left: 11px;
  width: 150px;
  height: 24px;
  color: #7289aa;
}
</style>
