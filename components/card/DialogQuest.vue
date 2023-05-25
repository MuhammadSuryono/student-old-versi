<template>
  <div>
    <transition name="fade" appear>
      <div
        class="detail-maps2"
        :style="{
          height: window.height + 'px'
        }"
        style=""
      >
        <div
          class="close-map"
          @click="closePurchase()"
        />
        <div
          class="inside-map2"
        >
          <div class="peti" style="">
            <img src="~/assets/images/peti.gif" class="assets-1">
            <img src="~/assets/images/star_2.svg" class="assets-2">
          </div>
          <div class="text-card">
            <div class="bg-1">
              <div class="title-1">
                “Congratulation! You got 1 Prime Diamond after completed all daily quest”
              </div>
              <div
                class="btn-collect no-select cursor-pointer"
                @click="closePurchase()"
              >
                Collect
              </div>
            </div>
            <div class="bg-2" />
            <div class="bg-3" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      dates: [],
      data: [
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' },
        { type: 'Regular', last_name: 'Simmons', date: '2016-10-15 13:43:27', variant: 'Avatar', price: '2000' }
      ],
      total: 100,
      current: 1,
      perPage: 10,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted () {
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    closePurchase () {
      this.$store.commit('user/SET_SUCCESS_QUEST')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    }
  }
}
</script>

  <style lang="scss" scoped>
  .detail-maps2 {
    position: absolute;
    z-index: 99999;
    width: 1280px;
    top: 0;
    left: 0px;
    right: 0px;
    height: 893px;
    margin-left: auto;
    margin-right: auto;
    .close-map {
      background: rgba(10, 10, 10, 0.5);
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .inside-map2 {
      padding:20px;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      bottom: 0;
      right: 0;
      width:90%;
      height:80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .peti {
        position: relative;
        width:280px;
        margin-bottom:40px;
        height:300px;
        .assets-1 {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0px;
          right: 0px;
          margin-left: auto;
          margin-right: auto;
        }
        .assets-2 {
          height: 370px;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0px;
          right: 0px;
          margin-left: auto;
          margin-right: auto;
        }
      }
      .text-card {
        position: relative;
        .bg-1 {
          flex-direction: column;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          position: relative;
          top: 0;
          left: 0;
          z-index:999;
          height: 142px;
          width: 486px;
          background: white;
          clip-path: polygon(0 40.00px,40.00px 0,100% 0,100% calc(100% - 40.00px),calc(100% - 40.00px) 100%,0 100%);
          .title-1 {
            padding-right:50px;
            padding-left:50px;
            font-family: 'Nunito';
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0em;
            text-align: center;
          }
          .btn-collect {
            height: 32px;
            width: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
            color: #FFFFFF;
            background: #437AC3;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            margin-top:10px;
          }
        }
        .bg-2 {
          z-index:1;
          top:-3px;
          left:-3px;
          position: absolute;
          height: 142px;
          width: 486px;
          background: yellow;
          clip-path: polygon(0 40.00px,40.00px 0,100% 0,100% calc(100% - 40.00px),calc(100% - 40.00px) 100%,0 100%);
        }
        .bg-3 {
          z-index:1;
          bottom:-3px;
          right:-3px;
          position: absolute;
          height: 142px;
          width: 486px;
          background: #437AC3;
          clip-path: polygon(0 40.00px,40.00px 0,100% 0,100% calc(100% - 40.00px),calc(100% - 40.00px) 100%,0 100%);
        }
      }
    }
  }</style>
