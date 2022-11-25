<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <img src="~/assets/images/module/icon-box.svg" class="icon-button">
        <div class="name-card">
          My Collection
        </div>
      </div>
      <div class="btn-back" @click="goBack()">
        <Back />
      </div>
    </div>
    <div class="content-module">
      <div class="filter-module">
        <div class="columns is-gapless mb-0 pb-0">
          <div class="hexagon">
            <input
              v-model="searchData"
              type="text"
              placeholder="Search..."
              @keyup.enter="toSearch"
            >
          </div>
          <div class="search-btn" @click="toSearch()">
            <IconSearch class="icons" />
          </div>
          <!-- <div class="filter-btn" @click="dialog = true">
            <IconFilter class="icons" />
          </div> -->
        </div>
      </div>
      <span>
        <div
          class="columns is-gapless mb-0 pb-0"
          style="
            font-style: normal;
            font-weight: 600;
            font-size: 21px;
            line-height: 27px;
            color: #1c4091;
          "
        >
          {{ items.length }} result found.
        </div>
        <div class="card-list">
          <div v-if="!isLoading">
            <div
              v-for="(item, index) in items"
              :key="index"
            >
              <CardCollection
                :modules="item.module_name"
                :academic="item.academic_field"
                :studio="item.lecturer.length > 0 ? item.lecturer[0].name : '-'"
                :activity="item.total_activities"
                :discussion="item.total_discussion"
                :display="item.display_picture"
                @click.native="toDetail(item)"
              />
            </div>
            <infinite-loading
              v-if="items.length"
              spinner="spinner"
              style="margin-top: 10px; margin-bottom: 20px"
              :identifier="infiniteId"
              @infinite="infiniteScroll"
            >
              <div slot="spinner" style="color: white">
                <v-progress-circular indeterminate color="white" />
              </div>
              <div slot="no-results" style="color: white">No results</div>
              <div slot="no-more" style="color: white">No more data</div>
            </infinite-loading>
          </div>
          <div v-else style="height: 400px">
            <v-row
              align="center"
              justify="center"
              style="width: 100%; height: 100%"
            >
              <v-col align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="white"
                  style="color: white; padding-top: 250px"
                />
              </v-col>
            </v-row>
          </div>
        </div>
      </span>
    </div>
    <div
      v-if="dialog"
      class="dialog-filter"
      :style="{
        height: window.height - 68 + 'px'
      }"
    >
      <div class="center-dialog">
        <div class="container-dialog">
          <div class="tag-card">
            <v-row
              justify="space-between"
              style="
                padding-right: 10px;
                padding-left: 10px;
                margin-bottom: 5px;
              "
            >
              <v-col cols="6">
                <div class="tag-btn">
                  Tag
                </div>
              </v-col>
              <v-col cols="6">
                <div class="reset-filter">
                  Reset Filter
                </div>
              </v-col>
            </v-row>
            <v-item-group multiple>
              <v-row no-gutters>
                <v-col
                  v-for="n in dataFilter"
                  :key="n"
                  cols="12"
                  md="4"
                  style="padding: 10px"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      class="d-flex align-center box-filter"
                      dark
                      height="30"
                      :style="{
                        backgroundColor: active
                          ? 'rgba(128, 204, 255, 0.75)'
                          : 'rgba(43, 43, 86, 0.75)',
                        color: active ? '#0071BC' : 'white'
                      }"
                      @click="toggle"
                    >
                      {{ n }}
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </div>
          <div style="margin-top: 30px">
            <v-row
              justify="space-between"
              style="
                padding-right: 10px;
                padding-left: 10px;
                margin-bottom: 5px;
              "
            >
              <v-col cols="6">
                <div class="tag-btn">
                  Sort by
                </div>
              </v-col>
            </v-row>
            <v-item-group>
              <v-row no-gutters>
                <v-col
                  v-for="a in dataSort"
                  :key="a"
                  cols="12"
                  md="4"
                  style="padding: 10px"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      class="d-flex align-center box-filter"
                      dark
                      height="30"
                      :style="{
                        backgroundColor: active
                          ? 'rgba(128, 204, 255, 0.75)'
                          : 'rgba(43, 43, 86, 0.75)',
                        color: active ? '#0071BC' : 'white'
                      }"
                      @click="toggle"
                    >
                      {{ a }}
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </div>
          <v-row>
            <v-btn
              style="
                background-color: #4c7bc1;
                color: white;
                text-transform: capitalize;
                width: 228.23px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 40px;
              "
              @click="dialog = false"
            >
              Apply Filter
            </v-btn>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ModulePage',
  layout: 'default',

  data () {
    return {
      isLoading: false,
      total: 0,
      infiniteId: 1,
      dialog: false,
      selected1: true,
      selected2: false,
      page: 1,
      items: {},
      searchData: '',
      rate: 2,
      window: {
        width: 0,
        height: 0
      },
      dataFilter: [
        'Religious',
        'Art',
        'Business',
        'Technology',
        'Math',
        'History',
        'Rature',
        'Law',
        'Character Building',
        'Thesis',
        'IT',
        'Psychology'
      ],
      dataSort: [
        'Name',
        'Popular',
        'Latest',
        'Rating',
        'Lowest Rating',
        'Relevance'
      ],
      selectedItem: ''
    }
  },

  computed: {
    ...mapState({
      data: (state) => {
        return state.module.dataSearchModule
      }
    }),
    searchBtn () {
      return false
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  mounted () {
    this.getData()
  },
  methods: {
    toDetail (data) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push({
        name: 'library-module-detail-index',
        params: { index: data.module_id }
      })
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    toSearch () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.infiniteId += 1
      if (this.searchData.length > 0) {
        this.searchBtn = true
        this.getData()
      } else {
        this.searchBtn = false
        this.getData()
      }
    },
    getData () {
      this.isLoading = true
      this.page = 1
      const data = {
        page: this.page,
        keyword: this.searchData
      }
      this.$store
        .dispatch('module/fetchAllMyCollection', data)
        .then((response) => {
          this.items = response.data.data.data
          this.total = response.data.data.total
          this.isLoading = false
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    infiniteScroll ($state) {
      setTimeout(() => {
        this.page++
        const data = {
          page: this.page,
          keyword: this.searchData
        }
        this.$store
          .dispatch('module/fetchAllMyCollection', data)
          .then((resp) => {
            if (resp.data.data.data.length > 1) {
              resp.data.data.data.forEach(item => this.items.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((error) => {
            this.$toast.error(error.response, {
              position: 'top-center',
              duration: 5000
            })
          })
      }, 500)
    },
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/library')
    }
  }
}
</script>
<style lang="scss" scoped>
.hexagon input:focus {
  outline: none;
}
.bg-img {
  background-image: url('~@/assets/images/module/bg.png');
  height: 100%;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;
  .header-module {
    width: 100%;
    height: 120px;
    .card-title {
      position: relative;
      top: 30px;
      left: 100px;
      .background-button {
        position: absolute;
        top: 0px;
        z-index: 5;
        width: 379px;
        height: 78px;
      }
      .icon-button {
        position: absolute;
        z-index: 6;
        height: 29.3px;
        width: 38px;
        left: 75px;
        top: 13.6px;
      }
      .name-card {
        z-index: 6;
        position: absolute;
        // font-family: 'Arlon';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        color: #0071bc;
        text-shadow: 0px 1px 1px #cff0ff;

        top: 13px;
        left: 120px;
      }
    }
    .btn-back {
      position: absolute;
      cursor: pointer;
      top: 100px;
      right: 50px;
    }
  }
  .content-module {
    width: 100%;
    height: 100%;
    padding: 0px 40px 0px 160px;
    .filter-module {
      right: 0px;
      top: 0px;
      float: right;
      .hexagon {
        width: 171px;
        height: 27.33px;
        transform: skew(-18deg);
        background: #f5fbff;
      }
      .search-btn {
        background: #0473bf;
        height: 27.4px;
        width: 35px;
        border-radius: 0px;
        margin-left: 10px;
        transform: skew(-18deg);
        padding-top: 3px;
        cursor: pointer;
        .icons {
          transform: skew(18deg);
          margin-left: 9.4px;
        }
      }
      .filter-btn {
        background: #2e5799;
        height: 27.4px;
        width: 35px;
        border-radius: 0px;
        margin-left: 8px;
        transform: skew(-18deg);
        padding-top: 4px;
        cursor: pointer;
        .icons {
          transform: skew(18deg);
          margin-left: 10px;
        }
      }
      input {
        background: transparent;
        border: none;
        transform: skew(18deg);
        display: inline-block;
        font-weight: 400;
        font-size: 14px;
        margin-left: 11px;
        width: 150px;
        height: 24px;
        color: #7289aa;
      }
    }
    .card-list {
      height: 100%;
      width: 100%;
      background: rgba(44, 110, 194, 0.85);
      border: 2px solid #d4eaff;
      padding:28px;
    }
  }
}
.dialog-filter {
  z-index: 9;
  position: absolute;
  top: 68px;
  left: 80px;
  width: 1200px;
  background: rgba(10, 10, 10, 0.5);
  .center-dialog {
    width: 781.56px;
    height: 607px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    bottom: 0;
    right: 0;
    .container-dialog {
      height: 100%;
      width: 100%;
      background-color: #e2e5e8;
      padding: 20px;
      .tag-card {
        margin-top: 30px;
      }
      .tag-btn {
        height: 27px;
        width: 140.8px;
        background-color: white;
        border-radius: 0px;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding-top: 1px;
        cursor: pointer;
        color: #7289aa;
      }
      .reset-filter {
        float: right;
        height: 27px;
        cursor: pointer;
        width: 142px;
        background-color: transparent;
        border-radius: 0px;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding-top: 1px;
        border: 1px solid #7289aa;

        color: #7289aa;
      }
      .box-filter {
        text-align: center;
        padding-top: 5px;
        font-size: 13px;
        border: 1.07473px solid #ffffff;
      }
    }
  }
}
</style>
