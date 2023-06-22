<template>
  <div class="petra-navigation">
    <img
      src="~/assets/images/component/navigation/img-1.png"
      class="img-logo"
    >
    <img src="~/assets/images/component/navigation/img-2.png" class="img2">
    <img src="~/assets/images/component/navigation/img-3.png" class="img3">
    <div class="clock">
      {{ hours }}:{{ minutes }}
    </div>
    <img src="~/assets/images/component/rectangle2.png" class="img4">
    <div class="exp">
      <div class="text-exp">
        EXP <br>
        {{ exp }}/{{ max }}
      </div>
    </div>
    <div class="menu">
      <div class="triangle-left" />
      <div class="triangle-right" />
      <ul class="child-menu">
        <li>
          <NuxtLink class="sidebar-item" to="/">
            <div
              class="select-decoration"
              @mouseover="hover1 = true"
              @mouseleave="hover1 = false"
              @click="popupAudio()"
            >
              <!-- <div class="tooltip-card">
                Tooltip
                <img src="~/assets/images/component/navigation/tooltip.svg" class="">
              </div> -->
              <div class="bg-1">
                <div class="card-item" :style="hover1 ? 'background-color:white' : 'background-color:#2E5799'">
                  <IconHome class="icon-content" :bg-color="hover1 ? '#2E5799' : 'white'" />
                </div>
              </div>
              <div class="bg-2" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="sidebar-item"
            to="/skillcard"
          >
            <div
              class="select-decoration-2"
              @click="popupAudio()"
              @mouseover="hover2 = true"
              @mouseleave="hover2 = false"
            >
              <div class="bg-1">
                <div class="card-item" :style="hover2 ? 'background-color:white' : 'background-color:#2E5799'">
                  <IconSkillcard class="icon-content" :bg-color="hover2 ? '#2E5799' : 'white'" />
                </div>
              </div>
              <div class="bg-2" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="sidebar-item"
            to="/cluster"
          >
            <div
              class="select-decoration-2"
              @click="popupAudio()"
              @mouseover="hover3 = true"
              @mouseleave="hover3 = false"
            >
              <div class="bg-1">
                <div class="card-item" :style="hover3 ? 'background-color:white' : 'background-color:#2E5799'">
                  <IconCluster class="icon-content" :bg-color="hover3 ? '#2E5799' : 'white'" />
                </div>
              </div>
              <div class="bg-2" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="sidebar-item"
            to="/archivements"
          >
            <div
              class="select-decoration-2"
              @click="popupAudio()"
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
            >
              <div class="bg-1">
                <div class="card-item" :style="hover4 ? 'background-color:white' : 'background-color:#2E5799'">
                  <IconArchivements class="icon-content" :bg-color="hover4 ? '#2E5799' : 'white'" />
                </div>
              </div>
              <div class="bg-2" />
            </div>
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink
            v-if="$route.path === '/cluster'"
            class="sidebar-item"
            to="/cluster"
          >
            <div
              class="card-menu"
              style="background-color: white"
              @mouseover="hover3 = true"
              @mouseleave="hover3 = false"
              @click="buttonAudio()"
            >
              <div class="triangle-left2" />
              <div class="triangle-right2" />
              <IconCluster class="icon-menu3" bg-color="black" />
            </div>
          </NuxtLink>
          <NuxtLink v-else class="sidebar-item" to="/cluster">
            <div
              class="card-menu"
              @mouseover="hover3 = true"
              @mouseleave="hover3 = false"
              @click="buttonAudio()"
            >
              <div class="triangle-left" />
              <div class="triangle-right" />
              <IconCluster v-if="hover3" class="icon-menu3" bg-color="black" />
              <IconCluster v-else class="icon-menu3" bg-color="white" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <div v-if="$route.path === '/archivements'">
            <div
              class="card-menu"
              style="background-color: white"
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
              @click="popupAudio()"
            >
              <div class="triangle-left2" />
              <div class="triangle-right2" />
              <IconArchivements class="icon-menu4" bg-color="black" />
            </div>
          </div>
          <div v-else class="sidebar-item" @click="showPopup()">
            <div
              class="card-menu"
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
              @click="popupAudio()"
            >
              <div class="triangle-left" />
              <div class="triangle-right" />
              <IconArchivements
                v-if="hover4"
                class="icon-menu4"
                bg-color="black"
              />
              <IconArchivements v-else class="icon-menu4" bg-color="white" />
            </div>
          </div>
        </li> -->
      </ul>
    </div>
    <div class="title">
      <div class="triangle" />
      <img src="~/assets/images/component/navigation/box-line.svg" class="img4">
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
<script>
export default {
  data () {
    return {
      data: {},
      exp: 0,
      max: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false
    }
  },
  mounted () {
    console.log('path : ', this.$route.path)
    this.getData()
    this.setTime()
  },
  methods: {
    showPopup () {
      this.$store.commit('user/SET_POPUP')
    },
    popupAudio () {
      this.$store.commit('user/SET_POPUP_AUDIO', true)
    },
    buttonAudio () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    async getData () {
      await this.$axios
        .get('student/home/navigation')
        .then((res) => {
          this.data = res.data.data
          this.exp = this.data.exp.current_exp
          this.max = this.data.exp.max_exp
        })
        .catch((error) => {
          console.log('error', error)
        })
    },
    setTime () {
      setInterval(() => {
        const date = new Date()
        this.hours = String(date.getHours()).padStart(2, '0')
        this.minutes = this.checkSingleDigit(date.getMinutes())
        this.seconds = this.checkSingleDigit(date.getSeconds())
      }, 1000)
    },
    checkSingleDigit (digit) {
      return ('0' + digit).slice(-2)
    }
  }
}
</script>

<style lang="scss" scoped>
.petra-navigation {
  z-index: 2;
  position: absolute;
  width: 300px;
  .clock {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 80px;
    left: 19px;
    color: #ffffff;
  }
  .img4 {
    bottom: 65px;
    left: 33px;
    color: #ffffff;
    position: relative;
  }
  .exp {
    position: absolute;
    bottom: 24px;
    left: 27px;
    color: white;
    width: 70px;
    .text-exp {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
    }
  }
  .menu {
    z-index: -1;
    background: rgb(242, 242, 242, 0.7);
    height: 40px;
    width: 228px;
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
        .select-decoration {
          margin-left:7px;
          cursor: pointer;
          position: relative;
          .tooltip-card {
            position: absolute;
            top:-40px;
            .triangle-bottom {
              height:20px;
              width:20px;
              position: absolute;
              top:-100px;
            }
          }
          .bg-1 {
            cursor: pointer;
            height: 36px;
            width: 45px;
            background: linear-gradient(180deg, #DFF2F2 0%, #C3F4F9 48%, #A8F5FF 100%);
            transform: skew(-18deg);
            padding:0.8px;
            .card-item {
              height: 100%;
              width: 100%;
              background: #2E5799;
              border: 0.54px solid #F2F2F2;
              text-align: center;display: flex;
              align-items: center;
              justify-content: center;
              .icon-content {
                transform: skew(18deg);
              }
            }
          }
          .bg-2 {
            z-index: -1;
            position: absolute;
            top:2px;
            right:-1px;
            height: 36px;
            width: 45px;
            transform: skew(-18deg);
            background: #FFF380;
            mix-blend-mode: multiply;
            opacity: 0.7;
          }
        }
        .select-decoration-2 {
          cursor: pointer;
          position: relative;
          margin-left:5px;
          .bg-1 {
            cursor: pointer;
            height: 31px;
            width: 46px;
            background: linear-gradient(180deg, #DFF2F2 0%, #C3F4F9 48%, #A8F5FF 100%);
            transform: skew(-18deg);
            padding:0.8px;
            .card-item {
              height: 100%;
              width: 100%;
              background: #2E5799;
              border: 0.54px solid #F2F2F2;
              text-align: center;display: flex;
              align-items: center;
              justify-content: center;
              .icon-content {
                transform: skew(18deg);
              }
            }
          }
          .bg-2 {
            z-index: -1;
            position: absolute;
            top:2px;
            right:-1px;
            height: 31px;
            width: 46px;
            transform: skew(-18deg);
            background: #FFF380;
            mix-blend-mode: multiply;
            opacity: 0.7;
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
      border-color: transparent transparent rgb(242, 242, 242, 0.7) transparent;
      border-style: solid;
    }
    .triangle-right {
      width: 0;
      height: 0;
      left: 228px;
      position: absolute;
      border-width: 40px 20px 0 0;
      border-color: rgb(242, 242, 242, 0.7) transparent transparent transparent;
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
      left: 40px;
      top: 10px;
      position: absolute;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      align-items: center;
      color: #0071BC;
      text-shadow: 0px 1px 1px #CFF0FF;
    }
  }
  .desc {
    z-index: -1;
    background: rgba(62, 111, 176, 0.8);
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
      border-color: rgba(62, 111, 176, 0.8) transparent transparent transparent;
      border-style: solid;
    }
    .text-desc {
      left: 30px;
      top: 0px;
      position: absolute;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #FFFFFF;
    }
  }
  .img-logo {
    position: absolute;
    width: 215px;
    bottom: 0px;
    left: 0px;
  }
  .img2 {
    width: 145.58px;
    left: 0px;
    bottom: 0px;
    z-index: -1;
    position: absolute;
  }
  .img3 {
    width: 155px;
    left: -23px;
    bottom: 0px;
    z-index: -1;
    position: absolute;
  }
}
</style>
