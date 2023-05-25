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
              placeholder="Search..."
              type="search"
              icon="magnify"
              icon-clickable
              size="is-small"
              style="width:254px;"
              @icon-click="null"
            />
          </div>
          <b-table
            class="mt-4 mb-4"
            size="is-small"
            :data="data"
          >
            <b-table-column :td-attrs="columnTdAttrs" field="price" label="Purchase Date">
              02-02-2023
            </b-table-column>
            <b-table-column :td-attrs="columnTdAttrs" field="price" label="Item Name">
              Lorem Ipsum dolor sit amet
            </b-table-column>
            <b-table-column v-slot="props" :td-attrs="columnTdAttrs" field="tyoe" label="Type">
              {{ props.row.type }}
            </b-table-column>
            <b-table-column v-slot="props" :td-attrs="columnTdAttrs" field="variant" label="Variant">
              {{ props.row.variant }}
            </b-table-column>
            <b-table-column :td-attrs="columnTdAttrs" field="variant" label="Price" width="140">
              <div class="value-coin">
                <img src="~/assets/images/coin.svg" class="mr-1">
                200
              </div>
            </b-table-column>
          </b-table>

          <b-pagination
            v-model="current"
            :total="total"
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
          />
        </div>
        <Back class="cursor-pointer" style="position:absolute;bottom:20px;right:20px;" @click.native="closePurchase()" />
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
      nextIcon: 'chevron-right',
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
