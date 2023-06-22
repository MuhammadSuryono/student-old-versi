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
          <div v-if="!showSuccess" class="text-card">
            <div class="bg-1">
              <div class="img-data" :style="'background-image:url(' + dataDetailImageAvatar + ')'" />
              <div class="title-1">
                <div class="text-bg">
                  {{ dataDetailAvatar.item_name }}
                </div>
                <div>
                  Are you sure you want to buy this item for
                </div>
                <div
                  style="display: flex;
                align-items: center;
                justify-content: center;"
                >
                  <img v-if="dataDetailAvatar.item_type_id.id === 1" src="~/assets/images/coin.svg" class="mr-1" style="width:20px;height:20px;line-height:20px;">
                  <img v-else src="~/assets/images/diamond.svg" class="mr-1" style="width:20px;height:20px;line-height:20px;"> {{ dataDetailAvatar.price.nominal }} ?
                </div>
              </div>
            </div>
            <div class="bg-3" />
            <div class="btn-container">
              <ButtonV2
                value="Cancel"
                width="200"
                height="30"
                @click.native="closePurchase()"
              />
              <ButtonV2
                value="Buy"
                width="200"
                height="30"
                @click.native="buyShop()"
              />
            </div>
          </div>
          <div v-else class="text-card">
            <div class="bg-shop">
              <div class="img-shop">
                <img src="~/assets/images/shop_success.svg">
                <img
                  :src="dataDetailImageAvatar"
                  class="data-avatar"
                >
              </div>
              <div class="title-name">
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
            <div class="bg-1" style="height:224px;width:550px;z-index:9">
              <div class="img-data2" />
              <div class="title-1" style="align-items: center;margin-left:70px">
                <div class="title-success1">
                  You have successfully purchased this item!
                </div>
                <div class="title-success2">
                  Congratulations!
                </div>
                <div class="btn-close" @click="closePurchase()">
                  Close
                </div>
              </div>
            </div>
            <div class="bg-3" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showSuccess: false,
      window: {
        width: 0,
        height: 0
      },
      dates: [],
      total: 100,
      current: 1,
      perPage: 10,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      dateNow: null
    }
  },
  computed: {
    ...mapState({
      gender: (state) => {
        return state.user.gender
      },
      dataDetailAvatar: (state) => {
        return state.quest.dataDetailAvatar
      },
      dataDetailImageAvatar: (state) => {
        return state.quest.dataDetailImageAvatar
      }
    })
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
      this.$store.commit('user/SET_SUCCESS_SHOP')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    async buyShop () {
      this.dateNow = Date.now()
      await this.$axios
        .get(`https://staging.petraverse.id/daily/quest/api/quest/shop/item/purchase/token`, {
          headers: {
            'X-TIMESTAMP': this.dateNow
          }
        })
        .then(async (res) => {
          await this.$axios
            .post(`https://staging.petraverse.id/daily/quest/api/quest/shop/item/purchase/create`, {
              item_id: this.dataDetailAvatar.id
            }, {
              headers: {
                'X-TIMESTAMP': this.dateNow,
                'Token-Quest-Purchase': res.data.data.token
              }
            })
            .then((res) => {
              console.log('res : ', res)
              this.showSuccess = true
            })
            .catch((error) => {
              this.$toast.error(error.response.data.message, {
                position: 'top-center',
                duration: 5000
              })
            })
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            position: 'top-center',
            duration: 5000
          })
        })
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
      width: 488px;
      height: 250px;
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
        .assets-test {
          animation: cssAnimation 5s infinite;
          visibility: hidden;
        }
        @keyframes cssAnimation {
          0%   { visibility: hidden; }
          30%   { visibility: hidden; }
          50%   { visibility: visible; }
          70%   { visibility: visible; }
          100%   { visibility: visible; }
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
          animation-delay: 2s;
          animation: rotation 2s infinite linear;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
      }
      .text-card {
        position: relative;
        .bg-1 {
          flex-direction: row;
          display: flex;
          align-items: center;
          margin: auto;
          position: relative;
          top: 0;
          left: 0;
          z-index:999;
          height: 142px;
          width: 486px;
          background: white;
          clip-path: polygon(0 0,calc(100% - 40.00px) 0,100% 40.00px,100% 100%,0 100%);
          .img-data {
            width:122px;
            height:100%;
            background-size: cover;
          }
          .img-data2 {
            width:245px;
            height:100%;
          }

          .title-1 {
            padding-right:50px;
            padding-left:50px;
            font-family: 'Nunito';
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0em;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            .title-success1 {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-size: 21px;
              text-align: center;
              color: #1E59A7;
            }
            .title-success2 {
              margin-top:10px;
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              text-align: center;
              color: #212121;
            }
            .btn-close {
              margin-top:20px;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 36px;
              width: 200px;
              background: #4C7BC1;
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-size: 15px;
              text-align: center;
              color: #F2F2F2;
              cursor: pointer;
            }
            .btn-close:hover {
              opacity: 0.7;
            }
            .text-bg {
              width:100%;
              background: #2961B5;
              border-radius: 2px;
              padding:4px;
              color:white;
              text-align: center;
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              color: #FFFFFF;
              margin-bottom:5px;
            }
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
        .bg-shop {
          z-index:10;
          left:-10px;
          top:-37px;
          position: absolute;
          height: 294px;
          width: 245px;
          clip-path: polygon(0 0,calc(100% - 40.00px) 0,100% 40.00px,100% 100%,40.00px 100%,0 calc(100% - 40.00px));
          background: #1E59A7;
          box-shadow: 0px 4px 0px #2E5799, inset 2px 5px 0px #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .img-shop {
            position: relative;
            top: -35px;
            .data-avatar {
              position: absolute;
              left: 61px;
              top: 88px;
              height: 70px;
              width: 120px;
              object-fit: cover;
              border-radius: 10px;
            }
          }
          .title-name {
            position: absolute;
            top:200px;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: #FFFFFF;
          }
        }
        .bg-3 {
          z-index:1;
          right:-3px;
          top:-3px;
          position: absolute;
          height: 82px;
          width: 186px;
          background: #437AC3;
          clip-path: polygon(0 0,calc(100% - 40.00px) 0,100% 40.00px,100% 100%,0 100%);
        }
        .btn-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top:20px
        }
      }
    }
  }</style>
