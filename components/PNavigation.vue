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
      EXP <br>
      {{ exp }}/{{ max }}
    </div>
    <div class="menu">
      <div class="triangle-left" />
      <div class="triangle-right" />
      <ul class="child-menu">
        <li>
          <NuxtLink v-if="$route.path === '/'" class="sidebar-item" to="/">
            <div
              class="card-menu"
              style="margin-left: 14px; background-color: white"
              @mouseover="hover1 = true"
              @mouseleave="hover1 = false"
            >
              <div class="triangle-left2" />
              <div class="triangle-right2" />
              <IconHome class="icon-menu1" bg-color="black" />
            </div>
          </NuxtLink>
          <NuxtLink v-else class="sidebar-item" to="/">
            <div
              class="card-menu"
              style="margin-left: 14px"
              @mouseover="hover1 = true"
              @mouseleave="hover1 = false"
            >
              <div class="triangle-left" />
              <div class="triangle-right" />
              <IconHome v-if="hover1" class="icon-menu1" bg-color="black" />
              <IconHome v-else class="icon-menu1" bg-color="white" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            v-if="$route.path === '/skillcard'"
            class="sidebar-item"
            to="/skillcard"
          >
            <div
              class="card-menu"
              style="background-color: white"
              @mouseover="hover2 = true"
              @mouseleave="hover2 = false"
            >
              <div class="triangle-left2" />
              <div class="triangle-right2" />
              <IconSkillcard
                class="icon-menu2"
                bg-color="black"
                style="left: 10px"
              />
            </div>
          </NuxtLink>

          <NuxtLink v-else class="sidebar-item" to="/skillcard">
            <div
              class="card-menu"
              @mouseover="hover2 = true"
              @mouseleave="hover2 = false"
            >
              <div class="triangle-left" />
              <div class="triangle-right" />
              <IconSkillcard
                v-if="hover2"
                class="icon-menu2"
                bg-color="black"
                style="left: 10px"
              />
              <IconSkillcard v-else class="icon-menu2" bg-color="white" />
            </div>
          </NuxtLink>
        </li>
        <li>
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
            >
              <div class="triangle-left" />
              <div class="triangle-right" />
              <IconCluster v-if="hover3" class="icon-menu3" bg-color="black" />
              <IconCluster v-else class="icon-menu3" bg-color="white" />
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            v-if="$route.path === '/archivements'"
            class="sidebar-item"
            to="/archivements"
          >
            <div
              class="card-menu"
              style="background-color: white"
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
            >
              <div class="triangle-left2" />
              <div class="triangle-right2" />
              <IconArchivements class="icon-menu4" bg-color="black" />
            </div>
          </NuxtLink>
          <NuxtLink v-else class="sidebar-item" to="/archivements">
            <div
              class="card-menu"
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
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
          </NuxtLink>
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
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 24px;
    left: 28px;
    color: white;
  }
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
          // background: white;
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
          .triangle-left2 {
            width: 0;
            height: 0;
            left: -10px;
            position: absolute;
            border-width: 0 0px 32.98px 10px;
            bottom: 0px;
            border-color: transparent transparent white transparent;
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
          .triangle-right2 {
            width: 0;
            height: 0;
            left: 100%;
            position: absolute;
            border-width: 33px 10px 0 0;
            border-color: white transparent transparent transparent;
            border-style: solid;
          }
          .icon-menu1 {
            height: 30px;
            left: -2px;
            top: 4.5px;
            position: absolute;
          }
          .icon-menu2 {
            height: 38px;
            left: 10px;
            top: 1px;
            position: absolute;
          }
          .icon-menu3 {
            height: 38px;
            left: 14px;
            bottom: 0px;
            top: 1px;
            position: absolute;
          }
          .icon-menu4 {
            height: 38px;
            left: 9px;
            top: -1px;
            position: absolute;
          }
        }
        .card-menu:hover {
          background: white;

          .triangle-left {
            width: 0;
            height: 0;
            left: -10px;
            position: absolute;
            border-width: 0 0px 32.98px 10px;
            bottom: 0px;
            border-color: transparent transparent white transparent;
            border-style: solid;
          }
          .triangle-right {
            width: 0;
            height: 0;
            left: 100%;
            position: absolute;
            border-width: 33px 10px 0 0;
            border-color: white transparent transparent transparent;
            border-style: solid;
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
