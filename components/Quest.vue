<template>
  <div class="quest-card">
    <PTitle name="Daily Quest" type="quest" />
    <div class="main-card">
      <div v-for="(items, index) in data.tasks" :key="index" class="quest-box">
        <div class="title-quest">
          {{ items.task_name }}
        </div>
        <div class="coin-reward">
          <div class="title-coin">
            Rewards
          </div>
          <div v-if="!items.already_take" class="value-coin no-select" @click="changeStatus()">
            <img src="~/assets/images/coin.svg" class="mr-1">
            {{ items.task_detail.total_coin }}
          </div>
          <div v-else class="value-coin no-select">
            <img src="~/assets/images/check_coin.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="card-progress">
      <div class="progress-quest">
        <div class="bg1">
          <div class="bg2">
            <div class="bg3">
              <div id="mainProgress" class="discreteProgress" :style="'background-size: ' + data.completion_task.percentage_complete + '%;'" />
            </div>
          </div>
        </div>
      </div>
      <span v-if="data.completion_task.percentage_complete < 100" class="cursor-pointer">
        <div class="box-complete2" />
        <div class="box-bg" />
        <img src="~/assets/images/chest_2.svg" class="chest-bg2">
      </span>
      <span v-else class="cursor-pointer" @click="toPopup()">
        <div class="box-complete" />
        <div class="box-bg" />
        <img src="~/assets/images/chest_3.svg" class="chest-bg">
      </span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      width: 70,
      status: true
    }
  },
  computed: {
    ...mapState({
      data: (state) => {
        return state.quest.data
      }
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$store
        .dispatch('quest/getTaskToday')
        // .then((response) => {
        // })
        // .catch((error) => {
        // })
    },
    changeStatus () {
      this.width = 100
      this.status = !this.status
    },
    toPopup () {
      console.log('to')
      this.$store.commit('user/SET_SUCCESS_QUEST')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.discreteProgress {
  margin-top:12px;
  margin-left:14px;
  width:335px;
  height:10px;
  -webkit-mask:linear-gradient(90deg,#000 94%,#0000 0) 0/34%;
  background:
   linear-gradient(#C7D6FD 0 0) 0/0% no-repeat
   black;
  animation:p4 2s infinite steps(6);
  background-size:50%;
}
.quest-card {
    width: 540.46px;
    height: 100%;
    background: rgb(239, 253, 253, 0.9);
    border: 0.7px solid #ffffff;
    z-index: 10;
    padding: 80px 10px 0px 20px;
    .main-card {
      margin-top:120px;
      .quest-box {
        position: relative;
        background-image: url('~@/assets/images/bar_quest.svg');
        height: 80px;
        width: 100%;
        padding: 25px 0px 0px 24px;
        margin-bottom:10px;
        .title-quest {
          font-family: Nunito;
          font-size: 16px;
          line-height: 33px;
          letter-spacing: 0em;
          text-align: left;
          border-bottom: 5px solid #437AC3;
          width: 334px;
        }
        .coin-reward {
          background-image: url('~@/assets/images/reward.svg');
          height: 78px;
          position: absolute;
          top: 9px;
          width: 88px;
          right: 46px;
          .title-coin {
            margin-top:5px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            color: #437AC3;
          }
          .value-coin {
            margin-top:6px;
            margin-left: auto;
            margin-right:auto;
            height: 32px;
            width: 64px;
            background: #437AC3;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #FFFFFF;
            cursor: pointer;
          }
        }
      }
    }
    .card-progress {
      position: relative;
      .progress-quest {
        position: absolute;
        z-index:1;
        margin-top: 50px;
        margin-left: 10px;
        clip-path: polygon(0 0,100% 0,100% 100%,8px 100%,0 calc(100% - 8px));
        height: 50px;
        width: 424px;
        background: #31a8ff;
        padding:2px;
        .bg1 {
          clip-path: polygon(0 0,100% 0,100% 100%,8px 100%,0 calc(100% - 8px));
          height: 100%;
          width: 100%;
          background: #173665;
          padding:2px;
          .bg2 {
            clip-path: polygon(0 0,100% 0,100% 100%,8px 100%,0 calc(100% - 8px));
            height: 100%;
            width: 100%;
            background: #1357a3;
            padding:2px;
            .bg3 {
              position: relative;
              clip-path: polygon(0 0,100% 0,100% 100%,8px 100%,0 calc(100% - 8px));
              height: 100%;
              width: 100%;
              background: #173665;
              padding:2px;
            }
          }
        }
      }
      .box-value {
        position: absolute;
        z-index:2;
        width: 66px;
        height: 62px;
        top: 43px;
        right: 52px;
        background-image: url('~@/assets/images/Variant3.svg');
        cursor: pointer;
      }
      .box-bg {
        z-index: 2;
        position: absolute;
        height: 56px;
        width: 60px;
        top: 46px;
        right: 57px;
        background: white;
        clip-path: polygon(0 0,calc(100% - 7.36px) 0,calc(100% - 4px) 4px,100% 7.36px,100% 100%,0 100%);

      }
      .box-complete {
        position: relative;
        height: 62px;
        width: 66px;
        right: -379px;
        top: 43px;
        z-index: 2;
      }
      .box-complete:before {
        animation: tilt-shaking2 1.2s infinite;
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 60px) calc(100% - 60px) no-repeat,
        linear-gradient(184deg, #fff380 0%, transparent 100%) 68% 56%/141% 174%,
        #437ac3;
        box-sizing: border-box;
        clip-path: polygon(0 0,calc(100% - 7.36px) 0,calc(100% - 4px) 4px,100% 7.36px,100% 100%,0 100%,0 0,4px  4px ,4px calc(100% - 4px),calc(100% - 4px) calc(100% - 4px),calc(100% - 4px) calc(7.36px + 1.87px),calc(100% - 4px - 2.84px) calc(4px + 2.84px),calc(100% - 7.36px - 1.87px) 4px,4px 4px);
      }
      .box-complete2 {
        position: relative;
        height: 62px;
        width: 66px;
        right: -379px;
        top: 43px;
        z-index: 2;
      }
      .box-complete2:before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 16px) calc(100% - 16px) no-repeat,
        linear-gradient(176deg, #ffffff 0%, #819cdb 100%);
        box-sizing: border-box;
        clip-path: polygon(0 0,calc(100% - 7.36px) 0,calc(100% - 4px) 4px,100% 7.36px,100% 100%,0 100%,0 0,4px  4px ,4px calc(100% - 4px),calc(100% - 4px) calc(100% - 4px),calc(100% - 4px) calc(7.36px + 1.87px),calc(100% - 4px - 2.84px) calc(4px + 2.84px),calc(100% - 7.36px - 1.87px) 4px,4px 4px);
      }
      .chest-bg {
        z-index: 3;
        width: 49px;
        position: absolute;
        top: 53px;
        right: 62px;
        animation: tilt-shaking 1.2s infinite;
      }
      .chest-bg2 {
        z-index: 3;
        position: absolute;
        top: 53px;
        right: 61px;
      }
      @keyframes tilt-shaking {
        0% { transform: rotate(0deg);}
        25% { transform: rotate(15deg);}
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-15deg);}
        100% { transform: rotate(0deg); }
      }
      @keyframes tilt-shaking2 {
        0% {
         }
        25% {
        background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 60px) calc(100% - 60px) no-repeat,
        linear-gradient(184deg, #fff380 0%, transparent 100%) 68% 56%/141% 174%,
        #437ac3;}
        50% { }
        75% {
        background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 60px) calc(100% - 60px) no-repeat,
        linear-gradient(184deg, #437ac3 0%, transparent 100%) 68% 56%/141% 174%,
        #fff380;}
        100% { }
      }
    }
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 18px;
  }

  ::-webkit-scrollbar-thumb {
    height: 6px;
    border: 2px solid transparent;
    background-clip: padding-box;
    background-color: #e2e2e2;
    -webkit-border-radius: 7px;
  }

  ::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  </style>
