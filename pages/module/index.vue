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
          Search Module
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
            <input v-model="searchData" type="text" placeholder="Search...">
          </div>
          <div class="search-btn" @click="toSearch()">
            <IconSearch class="icons" />
          </div>
          <div class="filter-btn" @click="dialog = true">
            <IconFilter class="icons" />
          </div>
        </div>
      </div>
      <span v-if="!searchBtn">
        <div class="columns is-gapless mb-0 pb-0">
          <div v-if="selected1" class="tab-petra">
            <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
            <div class="text-petra">See Modules</div>
          </div>
          <div v-else class="tab-petra" @click="tab(1, true)">
            <img
              src="~/assets/images/tab/tab-nonactive.svg"
              class="icon-button"
            >
            <div class="text-petra">See Modules</div>
          </div>
          <div v-if="selected2" class="tab-petra">
            <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
            <div class="text-petra">Latest Modules</div>
          </div>
          <div v-else class="tab-petra" @click="tab(2, true)">
            <img
              src="~/assets/images/tab/tab-nonactive.svg"
              class="icon-button"
            >
            <div class="text-petra">Latest Modules</div>
          </div>
        </div>
        <div class="card-list">
          <v-row v-if="selected1" no-gutters style="padding: 20px">
            <v-col
              v-for="(i, index) in items.data"
              :key="index"
              cols="12"
              sm="3"
            >
              <div class="box-card">
                <img src="~/assets/images/module/card.svg" class="bg-card">
                <img
                  src="~/assets/images/module/star-card.svg"
                  class="star-card"
                >
                <img :src="i.display_picture" class="display-pic">
                <div class="title-card">
                  {{ i.module_name }}
                </div>
                <div class="price-card">FREE</div>
                <div class="rating-card columns">
                  {{ i.module_rating }}/5
                  <b-rate
                    v-model="module_rating"
                    icon-pack="mdi"
                    size="is-small"
                    icon="mdi mdi-star"
                    style="margin-left: 4px"
                    :max="5"
                    spaced
                    disabled
                  />
                </div>
              </div>
            </v-col>
          </v-row>
          <infinite-loading
            v-if="items.data"
            spinner="spinner"
            style="margin-bottom: 15px"
            @infinite="infiniteScroll"
          >
            <div slot="spinner">
              <v-progress-circular indeterminate color="primary" />
            </div>
            <div slot="no-results" style="color: white">No results</div>
          </infinite-loading>
        </div>
      </span>
      <span v-else>
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
          {{ items.total }} result found.
        </div>
        <div class="card-list">
          <div
            v-for="(item, index) in items.data"
            :key="index"
            style="padding: 20px"
          >
            <v-toolbar color="white" class="contain-list">
              <img
                :src="item.display_picture"
                style="height: 79px; width: 122px"
              >
              <v-divider class="mx-4" vertical />
              <div style="width: 300px">
                <div
                  style="
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16.8687px;
                    line-height: 22px;

                    color: #3b69bc;
                  "
                >
                  {{ item.module_name }}
                </div>
                <div
                  style="
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12.6515px;
                    line-height: 16px;

                    color: #859bb5;
                  "
                >
                  By {{ item.studio_name }}
                </div>
              </div>
              <v-spacer />
              <v-divider class="mx-4" vertical />
              <div>
                <div
                  style="
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16.8687px;
                    line-height: 22px;
                    color: #3e4d68;
                  "
                >
                  Module Details
                </div>
                <div
                  style="
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12.6515px;
                    line-height: 14px;

                    color: #859bb5;
                  "
                >
                  {{ item.total_discussion }} Discussions
                </div>
              </div>
              <v-spacer />
              <v-divider class="mx-4" vertical />
              <div
                style="
                  background-color: #0aa7c1;
                  width: 158.61px;
                  height: 38.76px;
                  text-align: center;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 19.2785px;
                  line-height: 25px;
                  padding-top: 6px;

                  color: #ffffff;
                "
              >
                Play
              </div>
            </v-toolbar>
            <!-- <v-row
            no-gutters
            align="center"
            justify="justify-center"
            class="contain-list"
          >
            <v-col cols="3" align="center" justify="center">
              <v-card class="pa-2" outlined tile> One of three columns </v-card>
            </v-col>
            <v-col cols="4" align="center" justify="center">
              <v-card class="pa-2" outlined tile> One of three columns </v-card>
            </v-col>
            <v-col
              cols="3"
              align="start"
              justify="center"
              style="padding-left: 20px"
            >
              <div
                style="
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16.8687px;
                  line-height: 22px;
                  color: #3e4d68;
                "
              >
                Module Details
              </div>
              <div
                style="
                  font-style: normal;
                  font-weight: 500;
                  font-size: 12.6515px;
                  line-height: 14px;

                  color: #859bb5;
                "
              >
                Chapter: 6 <br>
                212 Discussions
              </div>
            </v-col>
            <v-col cols="2" align="center" justify="center">
              <div
                style="
                  background-color: #0aa7c1;
                  width: 158.61px;
                  height: 38.76px;
                  text-align: center;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 19.2785px;
                  line-height: 25px;
                  padding-top: 6px;

                  color: #ffffff;
                "
              >
                Play
              </div>
            </v-col>
          </v-row> -->
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
                  v-for="n in tagData.data"
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
                      {{ n.name }}
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
      selectedItem: '',
      searchBtn: false,
      keyword: ''
    }
  },

  computed: {
    ...mapState({
      data: (state) => {
        return state.module.dataSearchModule
      },
      tagData: (state) => {
        return state.module.dataTag
      }
    })
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  mounted () {
    this.getData()
    this.getDataTag()
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    toSearch () {
      console.log('search : ', this.searchData.length)
      if (this.searchData.length > 0) {
        this.searchBtn = true
        this.getsearchData()
      } else {
        console.log('kosong')
        this.searchBtn = false
        this.getData()
      }
    },
    getsearchData () {
      const data = {
        keyword: this.searchData
      }
      this.$store
        .dispatch('module/fetchAllSearchModule', data)
        .then((response) => {
          this.items = response.data.data
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    getData () {
      this.page = 1
      const data = {
        page: this.page,
        keyword: this.searchData
      }
      this.$store
        .dispatch('module/fetchAllSearchModule', data)
        .then((response) => {
          this.items = response.data.data
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    getDataTag () {
      this.$store
        .dispatch('module/fetchDataTag')
        .then((response) => {
          console.log('tag : ', response)
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    infiniteScroll ($state) {
      const data = {
        page: this.page,
        keyword: this.searchData
      }
      setTimeout(() => {
        this.page++
        this.$store
          .dispatch('module/fetchAllSearchModule', data)
          .then((resp) => {
            if (resp.data.data.data.length > 1) {
              resp.data.data.data.forEach(item => this.items.data.push(item))
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
            if (error.status === 401) {
              this.$auth.logout()
              this.$router.push('/login')
            }
          })
      }, 500)
    },
    goBack () {
      this.$router.push('/library')
    },

    tab (id, number) {
      if (id === 1) {
        this.selected1 = true
        this.selected2 = false
      }
      if (id === 2) {
        this.selected1 = false
        this.selected2 = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
    .tab-petra {
      cursor: pointer;
      position: relative;
      padding-bottom: 0px;
      height: 30px;
      .icon-button {
        height: 30px;
      }
      .text-petra {
        position: absolute;
        top: 3px;
        color: white;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        font-weight: 500;
        font-size: 15px;
        text-align: center;
      }
    }
    .card-list {
      height: 100%;
      width: 100%;
      background: rgba(44, 110, 194, 0.85);
      border: 2px solid #d4eaff;
      .box-card {
        position: relative;
        height: 240px;
        .bg-card {
          width: 100%;
          position: absolute;
          top: 0px;
          z-index: 5;
          padding-right: 10px;
          padding-left: 10px;
        }
        .display-pic {
          z-index: 6;
          padding-right: 10px;
          padding-left: 10px;
          width: 100%;
          position: absolute;
          top: 0px;
          height: 120px;
          object-fit: cover;
        }
        .star-card {
          padding-left: 10px;
          z-index: 7;
          top: 103px;
          width: 170px;
          left: -2px;
          position: absolute;
        }
        .title-card {
          padding-right: 10px;
          padding-left: 10px;
          z-index: 6;
          top: 135px;
          left: 10px;
          position: absolute;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 18px;
          color: #5b6987;
        }
        .price-card {
          z-index: 6;
          padding-right: 10px;
          padding-left: 10px;
          bottom: 30px;
          right: 20px;
          position: absolute;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          text-align: right;

          color: #a6a6a6;
        }
        .rating-card {
          padding-right: 10px;
          padding-left: 10px;
          position: absolute;
          top: 117px;
          left: 20px;
          z-index: 8;
          font-style: normal;
          font-weight: 500;
          font-size: 15.6103px;

          color: #ffffff;
        }
      }
      .contain-list {
        height: 72.24px;
        width: 100%;
        background-color: white;
        .img-title {
        }
      }
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
