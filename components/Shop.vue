<template>
  <div class="quest-card">
    <PTitle name="Go To Shop" type="shop" />
    <div class="column profile-container">
      <div class="btn-profile">
        <div class="text-profile">
          {{ menu }}
        </div>
      </div>
    </div>
    <div class="main-body">
      <select
        v-model="filterType"
        style="margin-bottom: 20px;"
        @change="getAll()"
      >
        <option value="">
          All
        </option>
        <option value="1">
          Regular
        </option>
        <option value="2">
          Premium
        </option>
      </select>
      <div v-if="filterShop">
        <div class="columns list-card">
          <div v-for="(item, index) in dataAvatar" :key="index" class="column is-one-third">
            <CardShop
              :id="item.id"
              :data-avatar="item"
              :avatar="gender === 'Female' ? item.thumbnail_male.close_body : item.thumbnail_female.close_body"
              :name="item.item_name"
              :coin="item.price.nominal"
              class="data-list"
              :type="item.item_type_id.id"
            />
          </div>
        </div>

        <infinite-loading
          v-if="totalAvatar"
          :identifier="infiniteId"
          spinner="spinner"
          style="margin-bottom: 15px"
          @infinite="infiniteScroll"
        >
          <div slot="spinner" style="color: black">
            <v-progress-circular indeterminate color="black" />
          </div>
          <div slot="no-results" style="color: black">
            No results
          </div>
          <div slot="no-more" style="color: black">
            No more data
          </div>
        </infinite-loading>
      </div>
      <div v-else>
        <div class="columns list-card">
          <div v-for="(item, index) in dataBackground" :key="index" class="column is-half">
            <CardShopV2
              :data-avatar="item"
              :avatar="item.thumbnail_background.home"
              :type="item.item_type_id.id"
              :name="item.item_name"
              :coin="item.price.nominal"
              class="data-list"
            />
          </div>
        </div>

        <infinite-loading
          v-if="totalBackground"
          :identifier="infiniteId2"
          spinner="spinner"
          style="margin-bottom: 15px"
          @infinite="infiniteScroll2"
        >
          <div slot="spinner" style="color: black">
            <v-progress-circular indeterminate color="black" />
          </div>
          <div slot="no-results" style="color: black">
            No results
          </div>
          <div slot="no-more" style="color: black">
            No more data
          </div>
        </infinite-loading>
      </div>
      <div class="btn-action">
        <Back class="cursor-pointer" @click.native="closeProfile()" />
        <div class="btn-purchase no-select" @click="toPurchase()">
          <img src="~/assets/images/purchase.svg">
          <div class="text-style">
            Purchase History
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      menu: 'Avatar',
      filterType: '',
      infiniteId: 1,
      infiniteId2: 1,
      page: 1,
      page2: 1,
      dataAvatar: {},
      dataBackground: {},
      totalBackground: 0
    }
  },
  computed: {
    ...mapState({
      gender: (state) => {
        return state.user.gender
      },
      filterShop: (state) => {
        return state.user.filterShop
      },
      totalAvatar: (state) => {
        return state.quest.totalAvatar
      }
    })
  },
  mounted () {
    this.getAll()
  },
  methods: {
    infiniteScroll ($state) {
      setTimeout(() => {
        this.page++
        const payload = {
          type: this.filterType,
          page: this.page,
          size: 9
        }
        this.$store
          .dispatch('quest/getAvatar', payload)
          .then((resp) => {
            if (resp.data.data.length > 1) {
              resp.data.data.forEach(item => this.dataAvatar.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch(() => {
          })
      }, 500)
    },
    infiniteScroll2 ($state) {
      setTimeout(() => {
        this.page2++
        const payload = {
          type: this.filterType,
          page: this.page2,
          size: 10
        }
        this.$store
          .dispatch('quest/getBackground', payload)
          .then((resp) => {
            if (resp.data.data.length > 1) {
              resp.data.data.forEach(item => this.dataBackground.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch(() => {
          })
      }, 500)
    },
    getAll () {
      this.page = 1
      this.page2 = 1
      this.getDataAvatar()
      this.getDataBackground()
    },
    getDataAvatar () {
      const payload = {
        type: this.filterType,
        page: this.page,
        size: 9
      }
      this.$store
        .dispatch('quest/getAvatar', payload)
        .then((response) => {
          this.dataAvatar = response.data.data
        })
        .catch(() => {
        })
    },
    getDataBackground () {
      const payload = {
        type: this.filterType,
        page: this.page2,
        size: 10
      }
      this.$store
        .dispatch('quest/getBackground', payload)
        .then((response) => {
          this.dataBackground = response.data.data
          this.totalBackground = response.data.total
          console.log('total : ', this.totalBackground)
        })
        .catch(() => {
        })
    },
    toPurchase () {
      this.$store.commit('user/SET_PURCHASE')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    closeProfile () {
      this.$store.commit('user/SET_BTN_SHOP')
      this.$store.commit('user/SET_BTN_AUDIO', true)
    }
  }
}

</script>
<style lang="scss" scoped>
.quest-card {
  width: 540.46px;
  height: 100%;
  background: rgb(239, 253, 253, 0.9);
  border: 0.7px solid #ffffff;
  z-index: 10;
  padding: 80px 10px 0px 20px;
  .profile-container {
    z-index: 1;
    position: relative;
    .btn-profile {
      top: 35px;
      left: 32px;
      position: relative;
      background: rgba(62, 111, 176, 0.9);
      height: 20px;
      width: 351px;
      transform: skew(-29deg);
      .text-profile {
        transform: skew(29deg);
        position: absolute;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #ffffff;
        left: 30px;
        top: 1px;
      }
    }
  }
  .btn-filter {
    width:200px;
    height:100px;
    position: absolute;
    top:100px;
    right:0px;
  }
  .main-body {
    margin-top:70px;
    .list-card {
      width: 100%;
      flex-wrap: wrap;
      overflow-y: scroll;
      max-height: 470px;
      .data-list {
        margin-left: auto;
        margin-right: auto;
      }
    }
    .btn-action {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .btn-purchase {
        height: 23px;
        width: 131px;
        display: flex;
        align-items:center;
        justify-content:center;
        background: #154CA0;
        cursor:pointer;
        .text-style {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          color: #FFFFFF;
          margin-left:5px;
          padding-top: 2.4px;
        }
      }
    }
  }
}
::-webkit-scrollbar {
  width: 9px;
  height: 18px;
}

select {
  float:right;
  background-color:#2C6BCA;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A@{arrow}%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: auto 50%;
  border-radius:2px;
  border:none;
  color: #ffffff;
  width: 108px;
  border-radius: 0px;
  padding: 4px 8px 4px 8px;
  font-size: 12px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  &::-ms-expand { display: none };
}

// remove dotted firefox border
@-moz-document url-prefix() {
  select {
    color: rgba(0,0,0,0);
    text-shadow: 0 0 0 #ffffff;
  }
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
