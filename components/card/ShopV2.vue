<template>
  <div class="main-card no-select">
    <div
      v-if="hover"
      class="hover-btn"
      @mouseleave="hover = false"
      @click="clickToBuy()"
    >
      CLICK TO BUY
    </div>
    <div
      class="bg-2"
      :style="'background-image:url(' + avatar + ')'"
      @mouseover="hover = true"
    />
    <div class="name-card no-select">
      <div class="font-name no-select">
        {{ name }}
      </div>
    </div>
    <div class="point-card">
      <img v-if="type === 1" src="~/assets/images/coin.svg" class="icon-img">
      <img v-if="type === 2" src="~/assets/images/diamond.svg" class="icon-img">
      <div class="value-coin no-select">
        {{ coin }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataAvatar: {
      type: Object,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    coin: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 1
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    clickToBuy () {
      this.$store.commit('quest/SET_DATA_DETAIL_AVATAR', this.dataAvatar)
      this.$store.commit('quest/SET_DATA_IMAGE_AVATAR', this.avatar)
      this.$store.commit('user/SET_SUCCESS_SHOP')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    }
  }
}
</script>

  <style lang="scss" scoped>
  .main-card {
    position: relative;
    height: 72px;
    width: 166px;
    .point-card {
      position: absolute;
      z-index:5;
      bottom:21px;
      height: 17.032258987426758px;
      width: 53px;
        --mask: linear-gradient(-135deg,#0000 4px,#000 0);
        -webkit-mask: var(--mask);
                mask: var(--mask);
      background: white;
      display: flex;
      align-items: center;
      padding-left:4px;
      .icon-img {
        height: 13px;
        width: 13px;
        margin-right:4px;
      }
      .value-coin {

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        color: #2C6BCA;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .name-card {
      height: 21px;
      width: 100%;
      background: #2961B5;
      position: absolute;
      bottom:0px;
      z-index:5;
      padding-left:5px;
      padding-right:5px;
      display: flex;
      align-items: center;
    }
      .font-name {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        color: #FFFFFF;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bg-2 {
      position: absolute;
      top:0px;
      z-index:3;
      background-image: url('~/assets/images/image_shop.png');
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      height: 100%;
      width: 100%;
    }
    .hover-btn {
      position: absolute;
      top:0px;
      z-index:4;
      background: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 90%;
      color:white;
      text-align: center;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  </style>
