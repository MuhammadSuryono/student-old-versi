<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img :src="dataFactionIcon" class="logo-faction">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          FACTION COMPETITION
        </div>
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
                v-if="
                  parseFloat(dataFactionUser.faction.current_level) -
                    Math.floor(
                      parseFloat(dataFactionUser.faction.current_level)
                    ) ===
                    0
                "
                class="sub-det"
              >
                <div
                  v-if="
                    index2 < parseFloat(dataFactionUser.faction.current_level)
                  "
                  class="sub-det sub-filled"
                />
              </div>
              <div v-else class="sub-det">
                <div
                  v-if="
                    index2 <
                      Math.trunc(
                        parseFloat(dataFactionUser.faction.current_level)
                      )
                  "
                  class="sub-det sub-filled"
                />
                <div
                  v-if="
                    index2 ===
                      Math.trunc(
                        parseFloat(dataFactionUser.faction.current_level)
                      )
                  "
                  class="sub-filled sub-no-width"
                  :style="{
                    width:
                      Number(
                        (
                          dataFactionUser.faction.current_level -
                          Math.trunc(
                            parseFloat(dataFactionUser.faction.current_level)
                          )
                        ).toFixed(2)
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
          LV {{ dataFactionUser.faction.current_level }}/10
        </div>
      </div>
      <FactionReward title="COMING SOON" image="" />
      <div class="btn-faction no-select" @click="detailfaction()">
        <div class="border-2">
          See Faction Details
        </div>
      </div>
    </div>

    <div class="btn-back" @click="goBack()">
      <img src="~/assets/images/icon_exit.svg">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'FactionPage',
  layout: 'default',

  data () {
    return {
      value: 9.8
    }
  },
  computed: {
    ...mapState({
      dataFactionUser: (state) => {
        return state.faction.dataFactionUser
      },
      dataFactionIcon: (state) => {
        return state.faction.dataFactionIcon
      }
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/')
    },
    detailfaction () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/faction/detail')
    },
    getData () {
      this.$store
        .dispatch('faction/fetchFactionUser')
        .then((response) => {
          console.log('fetchFactionUser : ', response.data.data)
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
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
  .coba {
    width: 200px;
    height: 100px;
    background-color: Red;
    margin-left: 300px;
    align-items: center;
    transform: skew(-30deg);
    overflow: hidden;
    border-left: solid;
    position: relative;
    .img-coba {
      position: relative;
      text-align: center;
      transform: skew(30deg);
      width: 140%;
      height: 100%;
      display: block;
      /* optionnal */
      /*object-fit: cover;
  object-position:center center;*/
      margin: 0 -20%; /* in relation with width */
    }
  }
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
        top: 3px;
        left: 30px;
        z-index: 6;
        height: 54px;
        background-color: white;
        border-radius: 100%;
        border: 1px solid grey;
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
  .btn-back {
    position: absolute;
    cursor: pointer;
    bottom: 60px;
    right: 50px;
  }
}
</style>
