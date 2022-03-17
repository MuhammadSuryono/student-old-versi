<template>
  <div class="petra-navigation">
    <img
      src="~/assets/images/component/navigation/img-1.png"
      class="img-logo"
    >
    <img src="~/assets/images/component/navigation/img-2.png" class="img2">
    <img src="~/assets/images/component/navigation/img-3.png" class="img3">
    <div class="menu">
      <div class="triangle-left" />
      <div class="triangle-right" />
      <ul class="child-menu">
        <li>
          <div class="card-menu" style="margin-left: 14px">
            <div class="triangle-left" />
            <div class="triangle-right" />
            <img
              src="~/assets/images/component/navigation/icon.png"
              class="icon-menu"
            >
          </div>
        </li>
        <li>
          <div class="card-menu">
            <div class="triangle-left" />
            <div class="triangle-right" />
            <img
              src="~/assets/images/component/navigation/icon.png"
              class="icon-menu"
            >
          </div>
        </li>
        <li>
          <div class="card-menu">
            <div class="triangle-left" />
            <div class="triangle-right" />
            <img
              src="~/assets/images/component/navigation/icon.png"
              class="icon-menu"
            >
          </div>
        </li>
        <li>
          <div class="card-menu">
            <div class="triangle-left" />
            <div class="triangle-right" />
            <img
              src="~/assets/images/component/navigation/icon.png"
              class="icon-menu"
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="title">
      <div class="triangle" />
      <img src="~/assets/images/component/navigation/img-4.png" class="img4">
      <div class="text-title">
        My Petraverse Dorm
      </div>
    </div>
    <div class="desc">
      <div class="triangle" />
      <div class="text-desc">
        Standard Room
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.petra-navigation {
  z-index: 2;
  position: absolute;
  .menu {
    z-index: -1;
    background: rgba(43, 91, 163, 0.5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 40px;
    width: 248px;
    left: 210px;
    bottom: 95px;
    position: absolute;
    .child-menu {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
      }

      li {
        float: left;
      }

      li {
        .card-menu {
          cursor: pointer;
          display: block;
          color: white;
          background: rgba(43, 91, 163, 0.75);
          width: 44px;
          height: 32.98px;
          margin-right: 4px;
          margin-top: 2px;
          margin-left: 10px;
          position: relative;

          .triangle-left {
            width: 0;
            height: 0;
            left: -10px;
            position: absolute;
            border-width: 0 0px 32.98px 10px;
            bottom: 0px;
            border-color: transparent transparent rgba(43, 91, 163, 0.75)
              transparent;
            border-style: solid;
          }
          .triangle-right {
            width: 0;
            height: 0;
            left: 100%;
            position: absolute;
            border-width: 33px 10px 0 0;
            border-color: rgba(43, 91, 163, 0.75) transparent transparent
              transparent;
            border-style: solid;
          }
          .icon-menu {
            height: 38px;
            left: 8px;
            top: 1px;
            position: absolute;
          }
        }
        .card-menu:hover {
          background: white;

          .triangle-left {
            border-color: transparent transparent white transparent;
          }
          .triangle-right {
            border-color: white transparent transparent transparent;
          }
        }
      }
    }
    .triangle-left {
      width: 0;
      height: 0;
      left: -20px;
      position: absolute;
      border-width: 0 0px 40px 20px;
      border-color: transparent transparent rgba(43, 91, 163, 0.5) transparent;
      border-style: solid;
    }
    .triangle-right {
      width: 0;
      height: 0;
      left: 248px;
      position: absolute;
      border-width: 40px 20px 0 0;
      border-color: rgba(43, 91, 163, 0.5) transparent transparent transparent;
      border-style: solid;
    }
  }
  .title {
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55));
    z-index: -1;
    height: 44px;
    width: 426px;
    left: 160px;
    bottom: 30px;
    position: absolute;
    .triangle {
      width: 0;
      height: 0;
      left: 426px;
      position: absolute;
      border-width: 44px 20px 0 0;
      border-color: white transparent transparent transparent;
      border-style: solid;
    }
    .img4 {
      top: 4px;
      left: 20px;
      position: absolute;
    }
    .text-title {
      color: #000000;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      left: 40px;
      top: 5px;
      position: absolute;
    }
  }
  .desc {
    z-index: -1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55));
    background-color: black;
    height: 23px;
    width: 292px;
    left: 160px;
    bottom: 30px;
    z-index: -1;
    position: absolute;
    .triangle {
      width: 0;
      height: 0;
      left: 292px;
      position: absolute;
      border-width: 23px 20px 0 0;
      border-color: black transparent transparent transparent;
      border-style: solid;
    }
    .text-desc {
      color: #ffffff;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      left: 30px;
      top: -1px;
      position: absolute;
    }
  }
  .img-logo {
    position: fixed;
    width: 215px;
    bottom: 0px;
  }
  .img2 {
    width: 145.58px;
    left: 80px;
    bottom: 0px;
    z-index: -1;
    position: fixed;
  }
  .img3 {
    width: 155px;
    left: 55px;
    bottom: -9px;
    z-index: -1;
    position: fixed;
  }
}
</style>
