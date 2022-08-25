<template>
  <div
    v-if="!isLoading"
    class="columns is-gapless"
    style="height: 100%; width: 100%"
  >
    <div class="column is-narrow left-side-faction">
      <div
        class="columns is-gapless no-select current-progress"
        style="margin-bottom: 1.2rem"
      >
        <div class="column is-narrow left-current">
          <div class="text-current">
            Current Progress
          </div>
        </div>
        <div class="column is-narrow right-current" />
      </div>
      <div
        v-for="(itemProgress, indexProgress) in dataProgressBar"
        :key="indexProgress"
        class="progress-skill columns is-gapless"
      >
        <div class="columns is-narrow" style="margin-top: 0px">
          <div
            class="circle-faction"
            :class="
              indexProgress === 0
                ? 'border1'
                : indexProgress === 1
                  ? 'border2'
                  : indexProgress === 2
                    ? 'border3'
                    : indexProgress === 3
                      ? 'border4'
                      : 'border5'
            "
          />
          <img :src="itemProgress.faction_icon" class="icon-faction">
        </div>
        <div
          class="columns is-narrow"
          style="
            width: 500px;
            margin-left: 20px;
            margin-top: 0px;
            margin-bottom: 0px;
          "
        >
          <div
            v-for="(progres, index2) in 10"
            :key="index2"
            class="column sub-prog"
          >
            <div
              v-if="
                parseFloat(itemProgress.current_level) -
                  Math.floor(parseFloat(itemProgress.current_level)) ===
                  0
              "
              class="sub-det"
            >
              <div
                v-if="index2 < parseFloat(itemProgress.current_level)"
                class="sub-det sub-filled"
                :class="
                  indexProgress === 0
                    ? 'class1'
                    : indexProgress === 1
                      ? 'class2'
                      : indexProgress === 2
                        ? 'class3'
                        : indexProgress === 3
                          ? 'class4'
                          : 'class5'
                "
              />
            </div>
            <div v-else class="sub-det">
              <div
                v-if="
                  index2 < Math.trunc(parseFloat(itemProgress.current_level))
                "
                class="sub-det sub-filled"
                :class="
                  indexProgress === 0
                    ? 'class1'
                    : indexProgress === 1
                      ? 'class2'
                      : indexProgress === 2
                        ? 'class3'
                        : indexProgress === 3
                          ? 'class4'
                          : 'class5'
                "
              />
              <div
                v-if="
                  index2 === Math.trunc(parseFloat(itemProgress.current_level))
                "
                class="sub-filled sub-no-width"
                :class="
                  indexProgress === 0
                    ? 'class1'
                    : indexProgress === 1
                      ? 'class2'
                      : indexProgress === 2
                        ? 'class3'
                        : indexProgress === 3
                          ? 'class4'
                          : 'class5'
                "
                :style="{
                  width:
                    Number(
                      (
                        itemProgress.current_level -
                        Math.trunc(parseFloat(itemProgress.current_level))
                      ).toFixed(2)
                    ) *
                    100 +
                    '%'
                }"
              />
            </div>
          </div>
        </div>
        <div class="columns is-narrow lvl-prog">
          LV {{ itemProgress.current_level }} /10
        </div>
      </div>
    </div>
    <div class="column is-narrow right-side-faction" style="margin-top: 35px">
      <div class="columns is-gapless grown-card">
        <div class="column is-narrow">
          <img src="~/assets/images/faction/Crown.png" class="logo-crown">
        </div>
        <div class="column is-narrow" style="margin-left: 15px">
          <div class="text-lead">
            Current leading faction
          </div>
          <div class="text-growth">
            {{ dataModuleDominance.lead_faction_name }}
          </div>
        </div>
      </div>
      <div class="columns is-gapless no-select current-progress">
        <div class="column is-narrow left-current">
          <div class="text-current">
            Next Level Reward
          </div>
        </div>
        <div class="column is-narrow right-current" />
      </div>
      <div class="next-level-card">
        <img src="~/assets/images/group_1031.svg" style="margin-top: 10px">
        <img
          src="~/assets/images/Group_(5).svg"
          style="margin-left: 8px; margin-top: 10px"
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'FactionDetailPage',
  layout: 'default',

  data () {
    return {
      isLoading: false,
      dataModuleDominance: {
        factions: null,
        lead_faction_name: '',
        next_reward_name: '',
        next_reward_male: null,
        next_reward_female: null
      }
    }
  },
  computed: {
    ...mapState({
      dataProgressBar: (state) => {
        return state.faction.dataProgressBar
      }
    })
  },
  mounted () {
    this.getAll()
  },
  methods: {
    getAll () {
      this.getDataProgressBar()
      //   this.getDataModuleDominance()
    },
    getDataProgressBar () {
      this.isLoading = true
      this.$store
        .dispatch('faction/fetchProgressBar')
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getDataModuleDominance () {
      this.$store
        .dispatch('faction/fetchModuleDominance')
        .then((response) => {
          const data = response.data.data
          if (data.factions.length !== 0) {
            this.dataModuleDominance.factions = data.factions
          }
          if (data.lead_faction !== null || data.lead_faction !== '') {
            this.dataModuleDominance.lead_faction_name =
              data.lead_faction.faction_name
          }
          if (data.next_reward !== null || data.next_reward !== '') {
            this.dataModuleDominance.next_reward_name = data.next_reward.name
            this.dataModuleDominance.next_reward_male =
              data.next_reward.image_male
            this.dataModuleDominance.next_reward_female =
              data.next_reward.image_female
          }
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
.left-side-faction {
  height: 100%;
  width: 739px;
  background: rgba(255, 255, 255, 0.85);
  border: 2px solid #d4eaff;
  padding: 15px !important;
  .current-progress {
    .left-current {
      background: #2e5799;
      transform: skew(-18deg);
      height: 26px;
      width: 182px;
      color: white;
      .text-current {
        text-align: center;
        padding-top: 1px;
        color: #ffffff;
        font-size: 14px;
        transform: skew(18deg);
      }
    }
    .right-current {
      transform: skew(-18deg);
      background: #fff380;
      height: 26px;
      width: 12px;
      margin-left: 4px;
    }
  }
  .progress-skill {
    background: #2c6ec2;
    border: 1px solid #a8f5ff;
    height: 51px;
    width: 700px;
    transform: skew(-18deg);
    padding-left: 20px;
    .icon-faction {
      height: 51px;
      width: 51px;
      transform: skew(18deg);
    }
    .circle-faction {
      height: 47px;
      width: 47px;
      background-color: white;
      position: absolute;
      top: 2px;
      left: 10px;
      transform: skew(18deg);
      border-radius: 50%;
    }
    .sub-prog {
      background-color: #d7faff;
      border-radius: 5px;
      padding: 0px;
      margin-left: 5px;
      z-index: 1;
      margin-top: 18px;
      margin-bottom: 16px;
      .sub-det {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        // height: 22px;
      }
      .sub-filled {
        // background-color: #fff380;
      }
      .sub-no-width {
        height: 100%;
        border-radius: 5px;
      }
    }

    .lvl-prog {
      color: white;
      margin-top: 10px;
      font-size: 21px;
      margin-left: 30px;
      transform: skew(18deg);
    }
  }
  .petra-content {
    // background: rgba(44, 110, 194, 0.85);
    // border: 2px solid #d4eaff;
    width: 470px;
    height: 370px;
    margin-left: 25px;
    overflow-y: scroll;
    .pic-petra {
      height: 100px;
    }
    .box-list {
      position: relative;
      background-color: white;
      width: 100%;
      height: 100%;
      object-fit: cover;
      --g: #000, #0000 1deg 179deg, #000 180deg;

      --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g)) 100%
          0 /51% 100% no-repeat,
        conic-gradient(from -225deg at bottom 18px left 18px, var(--g)) 0 100%/51%
          100% no-repeat;
      -webkit-mask: var(--mask);
      mask: var(--mask);
      .student-name {
        background-color: #2e5799;
        width: 196.45px;
        height: 24.04px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        object-fit: cover;
        --g: #000, #0000 1deg 179deg, #000 180deg;
        --mask: conic-gradient(from 20deg at bottom 18px right 18px, var(--g))
          100% 100%/100% 100% no-repeat;
        -webkit-mask: var(--mask);
        mask: var(--mask);
        color: white;
        font-size: 13.9056px;
        color: #d4eaff;
        padding: 2px 40px 0px 10px;
      }

      .rating-bg {
        position: absolute;
        top: 1px;
        right: 31px;
      }
      .rating-card {
        position: absolute;
        top: 16px;
        right: 56px;
        font-style: normal;
        font-weight: 500;
        font-size: 15.6103px;
        color: #ffffff;
      }
      .petra-review {
        padding: 15px 20px 20px 30px;
        // position: relative;
        // min-height: 88px;
        .box-review {
          display: table;
          table-layout: fixed;
          background: #f2f2f2;
          min-height: 88px;
          width: 100%;
          --g: #000, #0000 1deg 179deg, #000 180deg;
          --mask: conic-gradient(from -45deg at top 5px right 5px, var(--g))
              100% 0 /51% 100% no-repeat,
            conic-gradient(from -225deg at bottom 5px left 5px, var(--g)) 0 100%/51%
              100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
          font-size: 12px;
          padding: 10px;
          word-wrap: break-word;
        }
        .content-text {
          position: absolute;
          top: 23px;
          left: 41px;
          font-size: 12px;
          width: 480px;
          //   right: 10px;
        }
      }
    }
  }
}
.right-side-faction {
  margin-left: 10px;
  .grown-card {
    height: 77px;
    width: 294px;
    background: #2c6ec2;
    border: 1px solid #a8f5ff;
    padding-top: 10px;
    padding-left: 15px;
    .logo-crown {
      height: 58px;
      width: 66px;
    }
    .text-lead {
      font-weight: 600;
      font-size: 15px;
      color: #ffffff;
      line-height: 16px;
      padding-top: 5px;
    }
    .text-growth {
      font-weight: 700;
      line-height: 35px;
      font-size: 30px;
      color: #bdff83;
    }
  }
  .current-progress {
    margin-bottom: 0px;
    margin-left: 5px;
    .left-current {
      background: #2e5799;
      transform: skew(-18deg);
      height: 26px;
      width: 182px;
      color: white;
      .text-current {
        text-align: center;
        padding-top: 1px;
        color: #ffffff;
        font-size: 14px;
        transform: skew(18deg);
      }
    }
    .right-current {
      transform: skew(-18deg);
      background: #fff380;
      height: 26px;
      width: 12px;
      margin-left: 4px;
    }
  }
  .next-level-card {
    background: rgba(255, 255, 255, 0.8);
    height: 267px;
    width: 295px;
    margin-left: 0px;
    padding: 10px;

    .left-img {
      margin-left: 5px;
      background-color: #d1c1ff;
      height: 130px;
      width: 130px;
      border-radius: 0px;
    }
    .right-img {
      background-color: #80cbeb;
      height: 130px;
      width: 130px;
      margin-left: 4px;
      border-radius: 0px;
    }
    .card-user {
      text-align: Center;
      width: 100%;
      z-index: 2;
      height: 57px;
      padding-top: 5px;
      background: rgba(155, 210, 234, 1);
      .user-avatar {
        font-weight: 600;
        font-size: 14px;
        color: #0071bc;
      }
      .user-strategy {
        font-weight: 700;
        font-size: 18px;
        color: #0071bc;
        line-height: 24px;
      }
    }
  }
}
.border1 {
  border: 1px solid #ff8383;
}
.border2 {
  border: 1px solid #ffc973;
}
.border3 {
  border: 1px solid #bdff83;
}
.border4 {
  border: 1px solid #d1a171;
}
.border5 {
  border: 1px solid #66d4ff;
}
.class1 {
  background-color: #ff8383;
}
.class2 {
  background-color: #ffc973;
}
.class3 {
  background-color: #bdff83;
}
.class4 {
  background-color: #d1a171;
}
.class5 {
  background-color: #66d4ff;
}
</style>
