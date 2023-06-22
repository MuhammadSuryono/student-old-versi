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
          <div class="header-table">
            <b-datepicker
              v-model="dates"
              size="is-small"
              icon="calendar-today"
              placeholder="Click to select..."
              range
              style="width:220px;"
            />
            <b-input
              v-model="search"
              placeholder="Search..."
              type="search"
              icon="magnify"
              icon-clickable
              size="is-small"
              style="width:254px;"
              @icon-click="null"
              @input="getData()"
            />
          </div>
          <b-table
            class="mt-4 mb-4"
            size="is-small"
            :data="dataPurchaseHistory"
          >
            <b-table-column v-slot="props" field="price" label="Purchase Date">
              {{ props.row.purchase_date }}
            </b-table-column>
            <b-table-column v-slot="props" field="price" label="Item Name">
              {{ props.row.item_name }}
            </b-table-column>
            <b-table-column v-slot="props" field="tyoe" label="Type">
              <div style="text-transform: capitalize;">
                {{ props.row.item_type }}
              </div>
            </b-table-column>
            <b-table-column v-slot="props" field="variant" label="Variant">
              <div style="text-transform: capitalize;">
                {{ props.row.category_item }}
              </div>
            </b-table-column>
            <b-table-column v-slot="props" field="variant" label="Price" width="140">
              <div class="value-coin">
                <img v-if="props.row.payment_of_type.id === 1" src="~/assets/images/coin.svg" class="mr-1">
                <img v-if="props.row.payment_of_type.id === 2" src="~/assets/images/diamond.svg" class="mr-1">
                {{ props.row.price.nominal }}
              </div>
            </b-table-column>
          </b-table>

          <b-pagination
            v-model="current"
            :total="totalPurchaseHistory"
            order="is-centered"
            :size="size"
            :per-page="perPage"
            icon-prev="chevron-left"
            icon-next="chevron-right"
            :range-before="5"
            :range-after="5"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
            @change="getData()"
          />
        </div>
        <Back class="cursor-pointer" style="position:absolute;bottom:20px;right:20px;" @click.native="closePurchase()" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      nextIcon: 'chevron-right',
      search: '',
      page: 1
    }
  },
  computed: {
    ...mapState({
      dataPurchaseHistory: (state) => {
        return state.quest.dataPurchaseHistory
      },
      totalPurchaseHistory: (state) => {
        return state.quest.totalPurchaseHistory
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
    this.getData()
  },
  methods: {
    getData () {
      const payload = {
        page: this.current,
        size: 10,
        itemName: this.search
      }
      this.$store
        .dispatch('quest/getPurchaseHistory', payload)
        .then(() => {
        })
        .catch(() => {
        })
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    closePurchase () {
      this.$store.commit('user/SET_PURCHASE')
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
    background: rgba(233, 244, 255, 0.8);
    border: 2px solid rgba(46, 87, 153, 0.8);
    border-radius: 2px;
    .header-table {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .value-coin {
      height: 32px;
      width: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color:  #455A64;
      cursor: pointer;
    }
  }
}</style>
