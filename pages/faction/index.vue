<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img src="~/assets/images/faction/logo.svg" class="logo-faction">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          FACTION COMPETITION
        </div>
      </div>
      <div class="btn-back" @click="goBack()">
        <Back />
      </div>
    </div>
    <div class="content-faction">
      <div class="columns is-gapless progress-faction">
        <div class="column">
          <div class="columns is-gapless card-prog">
            <div
              v-for="(progres, index2) in 10"
              :key="index2"
              class="column sub-prog"
            >
              <div
                v-if="parseFloat(value) - Math.floor(parseFloat(value)) === 0"
                class="sub-det"
              >
                <div
                  v-if="index2 < parseFloat(value)"
                  class="sub-det sub-filled"
                />
              </div>
              <div v-else class="sub-det">
                <div
                  v-if="index2 < Math.trunc(parseFloat(value))"
                  class="sub-det sub-filled"
                />
                <div
                  v-if="index2 === Math.trunc(parseFloat(value))"
                  class="sub-filled sub-no-width"
                  :style="{
                    width:
                      Number(
                        (value - Math.trunc(parseFloat(value))).toFixed(2)
                      ) *
                      100 +
                      '%'
                  }"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="column lvl-fac">
          LV 10/10
        </div>
      </div>
      <div class="columns is-gapless reward-card">
        <div class="column is-narrow next-reward">
          <div class="border-card">
            <div class="content-reward">
              <div class="next">
                NEXT REWARD
              </div>
              <div class="suite">
                DELUXE SUITE
              </div>
            </div>
          </div>
        </div>
        <div class="column image-reward">
          <div class="border-image">
            <img
              src="https://thumbs.dreamstime.com/b/examples-word-written-wood-block-examples-text-table-concept-examples-word-written-wood-block-examples-text-table-125610689.jpg"
              style="width: 100%; height: 100%; object-fit: cover"
            >
          </div>
        </div>
      </div>
      <div class="btn-faction no-select" @click="detailfaction()">
        <div class="border-2">
          See Faction Details
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FactionPage',
  layout: 'default',

  data () {
    return {
      value: 9.8
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    },
    detailfaction () {
      this.$router.push('/faction/detail')
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  background-image: url('~@/assets/images/faction/background.png');
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
  .header-module {
    width: 100%;
    height: 120px;
    .card-title {
      position: relative;
      top: 30px;
      left: 100px;
      .background-button {
        position: absolute;
        top: 0px;
        z-index: 5;
        width: 379px;
        height: 78px;
      }
      .logo-faction {
        position: absolute;
        top: -12px;
        left: 21px;
        z-index: 6;
      }
      .name-card {
        z-index: 6;
        position: absolute;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        color: #0071bc;
        text-shadow: 0px 1px 1px #cff0ff;
        top: 13px;
        left: 99px;
        width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .detail-box {
        position: absolute;
        top: 52px;
        left: 55px;
        z-index: 4;
        width: 351px;
        height: 20px;
      }
    }
    .btn-back {
      position: absolute;
      cursor: pointer;
      top: 100px;
      right: 50px;
    }
  }
  .content-faction {
    margin-left: 135px;
    .progress-faction {
      background: #2c6ec2;
      height: 42.84px;
      width: 498.41px;
      transform: skew(-18deg);
      border: 1px solid #a8f5ff;
      padding-top: 9px;
      padding-right: 15px;
      padding-left: 15px;
      color: #ffffff;
      .card-prog {
        transform: skew(10deg);
        width: 400px;
        padding-top: 2px;
        padding-right: 15px;
        .sub-prog {
          background-color: #d7faff;
          border-radius: 5px;
          margin-right: 3px;
          height: 13px;
          margin-top: 4px;
          z-index: 1;
          .sub-det {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
          .sub-filled {
            background-color: #fff380;
          }
          .sub-no-width {
            height: 100%;
            border-radius: 5px;
          }
        }
      }
      .lvl-fac {
        transform: skew(18deg);
        float: right;
        font-weight: 600;
      }
    }
    .reward-card {
      height: 79.78px;
      width: 498.41px;
      .next-reward {
        height: 61.67px;
        width: 310px;
        z-index: 2;
        padding: 6px !important;
        background: #ffffff;
        transform: skew(-18deg);
        border: 1px solid #f2f2f2;
        .border-card {
          border: 1px solid #a8f5ff;
          height: 100%;
          width: 100%;
          .content-reward {
            padding-right: 20px;
            transform: skew(18deg);
            float: right;
            .next {
              font-size: 15px;
              font-weight: 400;
              color: #0071bc;
              text-align: right;
              width: 100%;
              line-height: 25px;
            }
            .suite {
              font-weight: 700;
              line-height: 15px;
              float: right;
              width: 100%;
              font-size: 22px;
              color: #0071bc;
            }
          }
        }
      }
      .image-reward {
        width: 100%;
        height: 100%;
        margin-left: -10px;
        transform: skew(-18deg);
        background: rgba(255, 243, 128, 0.5);
        border: 0.54px solid #f2f2f2;
        z-index: 3;
        border-radius: 5px;
        position: relative;
        .border-image {
          border: 2px solid #ffffff;
          width: 100%;
          height: 100%;
          position: absolute;
          border-radius: 5px;
          top: -3px;
          left: -3px;
        }
      }
    }
    .btn-faction {
      height: 33px;
      width: 270px;
      cursor: pointer;
      border: 0.4px solid #a8f5ff;
      .border-2 {
        border: 1px solid white;
        height: 100%;
        width: 100%;
        background: #4c7bc1;
        font-weight: 600;
        font-size: 13px;
        text-align: center;
        padding-top: 5px;
        color: #f2f2f2;
      }
    }
  }
}
</style>
