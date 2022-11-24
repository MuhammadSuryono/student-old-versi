<template>
  <div v-if="!isLoading" class="bg-img">
    <ModuleTitle
      :title="detailActivity.name"
      :subtitle="detailActivity.name"
      type="Reading"
    />

    <div class="content-module">
      <!-- tab -->
      <div class="columns mb-0 pb-0">
        <div class="column is-narrow header-left">
          <div class="petra-title">
            <img
              src="~/assets/images/module/detail-rail.svg"
              class="display-rail"
            >
            <div class="text-title">
              Activity Details
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div class="columns is-gapless mb-0 pb-0">
            <div v-if="selected1" class="tab-petra">
              <img
                src="~/assets/images/tab/tab-active.svg"
                class="icon-button"
              >
              <div class="text-petra">
                Activity Content
              </div>
            </div>
            <div v-else class="tab-petra" @click="tab(1, true)">
              <img
                src="~/assets/images/tab/tab-nonactive.svg"
                class="icon-button"
              >
              <div class="text-petra">
                Activity Content
              </div>
            </div>
            <div v-if="selected2" class="tab-petra">
              <img
                src="~/assets/images/tab/tab-active.svg"
                class="icon-button"
              >
              <div class="text-petra">
                See All Discussions
              </div>
            </div>
            <div v-else class="tab-petra" @click="tab(2, true)">
              <img
                src="~/assets/images/tab/tab-nonactive.svg"
                class="icon-button"
              >
              <div class="text-petra">
                See All Discussions
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
      <div v-if="selected1" class="columns is-gapless mb-0 pb-0">
        <div class="column is-narrow header-left">
          <div ref="infoBox" class="card-list">
            <div v-if="!isLoading" class="bg-1" :style="tinggi2" />
            <div v-if="!isLoading" class="bg-2" :style="tinggi2" />
            <div class="column is-narrow left-side">
              <img :src="detailActivity.thumbnail" class="display-pic">
              <div class="petra-title-card">
                {{ detailActivity.name }} <br>
                <span
                  style="
                    font-style: italic;
                    font-weight: normal;
                    font-size: 14px;
                  "
                >READING ACTIVITY</span>
              </div>
              <div class="petra-description">
                {{ detailActivity.introduction }}
              </div>

              <div class="petra-c1">
                {{ detailActivity.total_pages }} Pages <br>
                {{ detailActivity.discussions }} Discussion <br>
                {{ detailActivity.total_attachments }} Attachments <br>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div v-if="!isLoading2" class="card-activity">
            <div class="bg-act">
              <div class="columns is-gapless" style="margin-bottom: 0px">
                <div class="column is-narrow title-chapter">
                  Chapter {{ page }} -
                  {{ contentActivity[page - 1].title }}
                </div>
                <div class="column">
                  <div
                    class="btn-act"
                    @click="dialogDownload(contentActivity[page - 1])"
                  >
                    <div class="name-act">
                      Download Attachments
                    </div>
                  </div>
                </div>
              </div>
              <div class="hr-line" />
              <div
                class="description-activity"
                v-html="contentActivity[page - 1].content"
              />
            </div>
            <v-pagination
              v-if="contentActivity.length > 0"
              v-model="page"
              :length="contentActivity.length"
              class="my-2"
            />
          </div>
        </div>
      </div>
      <div v-if="selected2">
        <div class="columns tab-2-petra">
          <div class="column is-narrow left-side">
            <img
              src="~/assets/images/module/review-bg.png"
              class="background-card"
            >
            <div
              class="p-displaypic"
              :style="{ backgroundColor: dataUser.faction.avatar_bgcolor }"
            >
              <img :src="dataUser.avatar.image" class="p-img">
            </div>
            <div class="p-username">
              {{ dataUser.username }}
            </div>
            <span class="petra-comment">
              <div class="comment-text">Leave a comment.</div>
              <img
                src="~/assets/images/module/comment-border.svg"
                class="bg-bor"
              >
              <img src="~/assets/images/module/comment-bg.svg" class="bg-com">
              <img
                src="~/assets/images/module/comment-corner.svg"
                class="bg-cor"
              >

              <div class="hexagon">
                <textarea
                  v-model="descReview"
                  type="text"
                  style="width: 100%; height: 100%"
                />
              </div>
            </span>
            <PButton
              :disabled="disableBtn"
              class="petra-button"
              text="Submit Comment"
              @click.native="addReview()"
            />
          </div>
          <div class="column right-side">
            <div class="petra-content">
              <div style="padding: 20px 20px 10px 20px">
                <div
                  v-for="(review, indexReview) in itemsDiscuss"
                  :key="indexReview"
                  style="margin-bottom: 15px"
                >
                  <div class="columns is-gapless" style="margin-bottom: 10px">
                    <div
                      class="column is-narrow"
                      style="height: 80px"
                      :style="{
                        backgroundColor: review.avatar_background
                      }"
                    >
                      <img :src="review.avatar" class="pic-petra">
                    </div>
                    <div class="column box-list">
                      <div class="student-name">
                        {{ review.username }}
                      </div>
                      <div class="petra-review" style="padding-bottom: 40px">
                        <div class="box-review" style="padding: 10px">
                          {{ review.comment }}
                        </div>
                      </div>
                      <div
                        class="no-select reply-btn"
                        @click="openReply2(indexReview, review.comment_id)"
                      >
                        Reply
                      </div>
                      <div
                        v-if="review.sub_comments.data.length > 0"
                        class="reply-hide"
                      >
                        <span
                          v-if="showReply"
                          class="no-select"
                          @click="openReply(false)"
                        >
                          <b-icon icon="chevron-up" size="is-small" />Hide
                          {{ review.sub_comments.data.length }}
                          replies.
                        </span>
                        <span
                          v-else
                          class="no-select"
                          @click="openReply(true, indexReview)"
                        >
                          <b-icon icon="chevron-down" size="is-small" />Show
                          {{ review.sub_comments.data.length }}
                          replies.
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- list sub reply  -->
                  <div
                    v-if="showReply && indexReview === indexSub"
                    class="show-comment"
                  >
                    <div
                      v-for="(sub, indexSub) in review.sub_comments.data"
                      :key="indexSub"
                      class="columns is-gapless"
                      style="margin-bottom: 10px"
                    >
                      <div
                        class="column is-narrow"
                        style="height: 80px"
                        :style="{
                          backgroundColor: sub.avatar_background
                        }"
                      >
                        <img :src="sub.avatar" class="pic-petra">
                      </div>
                      <div class="column box-list">
                        <div class="student-name">
                          {{ sub.username }}
                        </div>
                        <div class="petra-review" style="padding-bottom: 20px">
                          <div class="box-review" style="padding: 10px">
                            {{ sub.comment }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  box comment  -->
                  <div
                    v-if="boxReply && indexReview === indexSub2"
                    class="show-comment"
                  >
                    <div class="columns is-gapless" style="margin-bottom: 10px">
                      <div
                        class="column is-narrow"
                        style="height: 80px"
                        :style="{
                          backgroundColor: dataUser.faction.avatar_bgcolor
                        }"
                      >
                        <img :src="dataUser.avatar.image" class="pic-petra">
                      </div>
                      <div class="column box-list">
                        <div class="student-name">
                          {{ dataUser.username }}
                        </div>
                        <div class="petra-review" style="padding-bottom: 70px">
                          <textarea
                            v-model="subReply"
                            class="box-review"
                            style="padding: 10px; overflow-y: scroll"
                          />
                        </div>
                        <PButton
                          :disabled="disableBtn2"
                          class="petra-button2"
                          text="Reply"
                          @click.native="submitComment()"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <infinite-loading
                  v-if="itemsDiscuss.length"
                  :identifier="infiniteId"
                  spinner="spinner"
                  style="margin-bottom: 15px"
                  @infinite="infiniteScroll"
                >
                  <div slot="spinner" style="color: white">
                    <v-progress-circular indeterminate color="white" />
                  </div>
                  <div slot="no-results" style="color: white">
                    No results
                  </div>
                  <div slot="no-more" style="color: white">
                    No more data
                  </div>
                </infinite-loading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LightBox @wheel.prevent @touchmove.prevent @scroll.prevent>
      <div
        v-if="dialog"
        class="dialog-filter"
        :style="{
          height: window.height - 68 + 'px'
        }"
      >
        <div class="center-dialog">
          <div class="container-dialog">
            <v-btn
              icon
              style="position: absolute; top: 10px; right: 20px"
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>

            <div class="tag-card">
              <v-row no-gutters justify="space-between" class="tag-contain">
                <v-col cols="6">
                  <div class="tag-btn">
                    Download Attachments
                  </div>
                </v-col>
              </v-row>
              <div
                v-for="(
                  itemAttachment, indexAttachment
                ) in dataAttachment.attachments"
                :key="indexAttachment"
                style="padding: 10px 10px 0px 10px"
              >
                <v-toolbar
                  color="white"
                  class="contain-list"
                  style="opacity: 0.6"
                >
                  <img
                    src="data:image/png;base64,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"
                    class="img-lock"
                    style="height: 40px"
                  >
                  <v-divider class="mx-4" vertical />
                  <div class="data-desc">
                    <div class="module-name">
                      {{ itemAttachment.name }}
                    </div>
                  </div>
                  <v-spacer />
                  <v-divider class="mx-4" vertical />
                  <v-spacer />
                  <div
                    style="
                      background-color: #0aa7c1;
                      padding: 5px 20px 5px 20px;
                      color: #ffffff;
                      cursor: pointer;
                    "
                    @click="download(itemAttachment.link)"
                  >
                    Download
                  </div>
                </v-toolbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LightBox>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ModuleActivityReading',
  layout: 'default',

  data () {
    return {
      isLoading: false,
      isLoading2: false,
      selected1: true,
      selected2: false,
      selected3: false,
      tinggi: 0,
      page: 1,
      content: {},
      dialog: false,
      window: {
        width: 0,
        height: 0
      },
      dataAttachment: {},
      itemsDiscuss: {},
      descReview: '',
      infiniteId: 1,
      total: 0,
      contentActivity: {},
      ratingReview: 0,
      subReply: '',
      showReply: false,
      indexSub: null,
      indexSub2: 0,
      boxReply: false,
      dataSubReply: {},
      archievements: {}
    }
  },

  computed: {
    ...mapState({
      detailActivity: (state) => {
        return state.module.dataDetailActivity
      },
      dataContent: (state) => {
        return state.module.dataContent
      },
      idModule: (state) => {
        return state.module.idModule
      },
      dataUser: (state) => {
        return state.user.users
      }
    }),
    tinggi2 () {
      return 'height:' + this.tinggi
    },
    disableBtn () {
      if (this.descReview === '') {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.getAll()
    this.addActivityStatistic()
  },

  mounted () {},
  methods: {
    addActivityStatistic() {
      const data = {
        activity_id: this.$route.params.index,
        activity_type_id: 4,
        activity_name: this.detailActivity.name,
      };
      this.$store
        .dispatch("statistic/addActivityStatistic", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {})
        .catch((error) => {});
    },
    openReply2 (y, x) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      console.log(x)
      this.indexSub2 = y
      this.boxReply = !this.boxReply
      this.dataSubReply = x
    },
    openReply (x, y) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.showReply = x
      if (x === true) {
        this.indexSub = y
      }
    },
    submitComment () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      const data = {
        id: this.dataSubReply,
        review: this.subReply
      }
      this.$store
        .dispatch('module/postSubDiscuss', data)
        .then((response) => {
          this.infiniteId += 1
          this.descReview = ''
          this.subReply = ''
          this.page = 1
          const data = {
            id: this.$route.params.index,
            page: this.page
          }
          this.$store
            .dispatch('module/fetchAllDiscuss', data)
            .then((response) => {
              this.itemsDiscuss = response.data.data.data
              console.log('discuss ', this.itemsDiscuss)
              this.total = response.data.data.total
              this.boxReply = false
            })
        })
        .catch((error) => {
          console.log('error:', error)
          this.isLoading = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    addReview () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      const data = {
        module_rail_id: this.$route.params.index,
        review: this.descReview
      }
      this.$store
        .dispatch('module/postDiscuss', data)
        .then((response) => {
          this.infiniteId += 1
          this.descReview = ''
          this.page = 1
          const data = {
            id: this.$route.params.index,
            page: this.page
          }
          this.$store
            .dispatch('module/fetchAllDiscuss', data)
            .then((response) => {
              this.itemsDiscuss = response.data.data.data
              this.total = response.data.data.total
            })
        })
        .catch((error) => {
          console.log('error:', error)
          this.isLoading = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    // addReview () {
    //   this.$store.commit('user/SET_BTN_AUDIO', true)
    //   const data = {
    //     module_rail_id: this.$route.params.index,
    //     review: this.descReview
    //   }
    //   this.$store
    //     .dispatch('module/postDiscuss', data)
    //     .then((response) => {
    //       this.infiniteId += 1
    //       this.descReview = ''
    //       this.page = 1
    //       const data = {
    //         id: this.$route.params.index,
    //         page: this.page
    //       }
    //       this.$store
    //         .dispatch('module/fetchAllDiscuss', data)
    //         .then((response) => {
    //           this.itemsDiscuss = response.data.data.data
    //           this.total = response.data.data.total
    //         })
    //     })
    //     .catch((error) => {
    //       console.log('error:', error)
    //       this.isLoading = false
    //       this.$toast.error(error.response, {
    //         position: 'top-center',
    //         duration: 5000
    //       })
    //     })
    // },
    download (x) {
      const url = x
      window.open(url)
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    dialogDownload (data) {
      this.$store.commit('user/SET_POPUP_AUDIO', true)
      this.dataAttachment = data
      this.dialog = true
    },
    getAllDiscuss () {
      this.isLoading = true
      this.page = 1
      const data = {
        id: this.$route.params.index,
        page: this.page
      }
      this.$store
        .dispatch('module/fetchAllDiscuss', data)
        .then((response) => {
          this.itemsDiscuss = response.data.data.data
          this.total = response.data.data.total
          console.log(response.data.data)
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
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
          id: this.$route.params.index
        }
        this.$store
          .dispatch('module/fetchAllDiscuss', data)
          .then((resp) => {
            if (resp.data.data.data.length > 1) {
              resp.data.data.data.forEach(item => this.itemsDiscuss.push(item))
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
    getAll () {
      this.getData()
      this.getAllDiscuss()
    },
    getData () {
      this.page = 1
      console.log('tess ')
      this.isLoading2 = true
      const data = {
        module: this.idModule,
        activity: this.$route.params.index
      }
      this.$store
        .dispatch('module/fetchDetailActivity', data)
        .then((response) => {
          this.contentActivity = response.data.data.content
          this.isLoading2 = false
        })
        .catch((error) => {
          this.isLoading2 = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.go(-1)
    },
    tab (id, number) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (id === 1) {
        this.selected1 = true
        this.selected2 = false
        this.getData()
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
.contain-list >>> .v-toolbar__content,
.v-toolbar__extension {
  padding-left: 0px;
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
      .name-card {
        z-index: 6;
        position: absolute;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        color: #0071bc;
        text-shadow: 0px 1px 1px #cff0ff;
        top: 13px;
        left: 76px;
        width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .detail-box {
        position: absolute;
        top: 52px;
        left: 55px;
        z-index: 4;
        width: 400px;
        height: 20px;
        background: #0473bf;
        border-radius: 0px;
        transform: skew(-18deg);
        padding-top: 3px;
      }
      .name-card2 {
        z-index: 6;
        position: absolute;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        color: white;
        top: 53px;
        left: 79px;
        width: 370px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    .header-left {
      width: 338px;
      .petra-title {
        position: relative;
        top: 0px;
        .display-rail {
          top: 0px;
          width: 219px;
        }
        .text-title {
          position: absolute;
          top: 1px;
          left: 30px;
          font-weight: 500;
          font-size: 16px;
          color: #0071bc;
        }
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
      width: 100%;
      height: 100%;
      // margin-top: 5px;
      // height: 700px;
      // width: 100%;
      // position: relative;

      .bg-1 {
        position: absolute;
        width: 200px;
        left: 154px;
        background: #5d93ce;
        opacity: 0.5;
        margin-top: 4px;
        --g: #000, #0000 1deg 179deg, #000 180deg;
        --mask: conic-gradient(from -225deg at bottom 18px left 18px, var(--g))
          0 100%/51% 100% no-repeat;
        -webkit-mask: var(--mask);
      }
      .bg-2 {
        position: absolute;
        width: 200px;
        left: 297px;
        background: #5d93ce;
        opacity: 0.5;
        margin-top: -4px;
        --g: #000, #0000 1deg 179deg, #000 180deg;
        --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
          100% 0 /100% 100% no-repeat;
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
      .rating-bg {
        position: absolute;
        top: 371px;
        left: 165px;
        z-index: 2;
      }
      .rating-card {
        position: absolute;
        top: 386px;
        left: 185px;
        font-style: normal;
        z-index: 2;
        font-weight: 500;
        font-size: 15.6103px;
        color: #ffffff;
      }
      .bg-student {
        position: absolute;
        z-index: 2;
        top: 399px;
        left: 171px;
        background: #2b2b56;
        height: 22px;
        width: 147.87px;
        text-align: center;
        color: #a2cff4;
        font-size: 12px;
        padding-top: 3px;
      }

      .left-side {
        width: 332.4px;
        height: 500px;
        position: relative;
        background-color: white;
        --g: #000, #0000 1deg 179deg, #000 180deg;

        --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
            100% 0 /51% 100% no-repeat,
          conic-gradient(from -225deg at bottom 18px left 18px, var(--g)) 0 100%/51%
            100% no-repeat;
        -webkit-mask: var(--mask);
        mask: var(--mask);
        .display-pic {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 195px;
          width: 332px;
          object-fit: cover;
          --g: #000, #0000 1deg 179deg, #000 180deg;
          --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
            100% 0 /100% 100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
        }

        .petra-title-card {
          margin-top: 194px;
          padding-left: 0px;
          z-index: 4;
          width: 100%;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          text-align: justify;
          color: #000000;
        }
        .petra-description {
          margin-top: 10px;
          padding-left: 0px;
          z-index: 4;
          width: 100%;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          text-align: justify;
          color: #5b6987;
          margin-bottom: 21px;
          height: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .petra-c1 {
          width: 100%;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #5b6987;
          float: right;
          text-align: right;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .petra-owner {
          width: 100%;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #0071bc;
          float: right;
          text-align: right;
          opacity: 0.75;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .petra-button-collection {
          background: #4c7bc1;
          width: 80%;
          margin-left: 23px;
          padding-top: 5px;
          padding-bottom: 5px;
          position: absolute;
          bottom: 15px;
          text-align: center;
          font-size: 14px;
          color: #f2f2f2;
          cursor: pointer;
        }
      }
    }
    .card-activity {
      background: #2c6ec2;
      box-shadow: inset -5px 0px 4px rgba(28, 71, 132, 0.08),
        inset 5px 0px 8px rgba(28, 71, 132, 0.08);
      height: 100%;
      width: 730px;
      padding: 20px 10px 10px 10px;
      .bg-act {
        background: #f5fbff;
        padding: 10px;
        min-height: 200px;
        .title-chapter {
          font-weight: 600;
          display: flex;
          align-items: center;
          padding-left: 30px;
          font-size: 16px;
          line-height: 25px;
          color: #3b69bc;
          width: 450px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .btn-act {
          background-color: #259def;
          color: white;
          text-transform: capitalize;
          width: 200px;
          padding: 5px 10px 5px 10px;
          text-align: center;
          transform: skew(-18deg);
          float: right;
          margin-right: 20px;
          cursor: pointer;
          .name-act {
            font-size: 12px;
            text-align: center;
            transform: skew(18deg);
          }
        }
        .hr-line {
          border-bottom: solid 2px #5d93ce;
          margin-top: 10px;
          width: 100%;
        }
        .description-activity {
          font-weight: 400;
          font-size: 13px;
          line-height: 19px;
          text-align: justify;

          color: #5b6987;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }
    .tab-2-petra {
      padding: 15px 0px 0px 0px;
      .left-side {
        width: 338px;
        height: 100%;
        position: relative;
        .background-card {
          position: absolute;
          top: 0px;
          left: 81px;
          object-fit: cover;
        }
        .p-displaypic {
          position: absolute;
          top: 0px;
          left: 13px;
          height: 76.09px;
          width: 70.28px;
          background-color: Red;
          .p-img {
            position: absolute;
            top: 35px;
            left: 24px;
            height: 20px;
            width: 22px;
            margin-right: auto;
            z-index: 1;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: 40% 0%;
            object-position: 40% 0%;
            transform: scale(3);
          }
        }
        .p-username {
          position: absolute;
          top: 0px;
          left: 90px;
          background-color: #2e5799;
          height: 32px;
          width: 234px;
          --g: #000, rgba(0, 0, 0, 0) 1deg 179deg, #000 180deg;
          --mask: conic-gradient(from 15deg at top 18px right 18px, var(--g))
            100% 0 /100% 100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
          color: white;
          padding: 4px 5px 0px 14px;
          font-size: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rate-text {
          position: absolute;
          top: 40px;
          left: 105px;
          font-style: normal;
          font-weight: 500;
          font-size: 14.6454px;
          line-height: 19px;

          color: #5b6987;
        }
        .rating-bg {
          position: absolute;
          top: 67px;
          left: 116px;
        }
        .rating-card {
          position: absolute;
          top: 82px;
          left: 136px;
          font-style: normal;
          font-weight: 500;
          font-size: 15.6103px;
          color: #ffffff;
        }
        .petra-comment {
          position: relative;
          top: 28px;
          left: 93px;
          .comment-text {
            font-style: normal;
            font-weight: 500;
            font-size: 14.6454px;
            color: #5b6987;
            margin-bottom: 11px;
          }
          .bg-bor {
            z-index: 4;
          }
          .bg-com {
            position: absolute;
            top: 33px;
            left: 0px;
            z-index: 3;
          }
          .bg-cor {
            position: absolute;
            top: 33px;
            right: 0px;
            z-index: 5;
          }
          .hexagon {
            position: absolute;
            top: 38px;
            left: 10px;
            z-index: 6;
            font-size: 14px;
            width: 90%;
            height: 84%;
          }
          .hexagon textarea:focus {
            outline: none !important;
          }
        }
        .petra-button {
          position: absolute;
          top: 427px;
          cursor: pointer;
          left: 51%;
          transform: translate(-15%, -50%);
        }
      }
      .right-side {
        margin-left: 20px;
        padding-top: 0px;
        top: -20px;
        .petra-title {
          position: relative;
          top: 0px;
          .display-rail {
            top: 0px;
            width: 219px;
          }
          .text-title {
            position: absolute;
            top: 1px;
            left: 37px;
            font-weight: 500;
            font-size: 16px;
            color: #0071bc;
          }
        }
        .petra-content {
          background: rgba(44, 110, 194, 0.85);
          border: 2px solid #d4eaff;
          width: 100%;
          height: 500px;
          overflow-y: scroll;
          .pic-petra {
            width: 80px;
            height: 67px;
            object-fit: cover;
            object-fit: cover;
            -o-object-position: 53% 0%;
            object-position: 53% 0%;
            margin-top: 13px;
          }
          .box-list {
            position: relative;
            background-color: white;
            width: 100%;
            height: 100%;
            object-fit: cover;
            --g: #000, #0000 1deg 179deg, #000 180deg;
            --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
                100% 0 /51% 100% no-repeat,
              conic-gradient(from -225deg at bottom 18px left 18px, var(--g)) 0
                100%/51% 100% no-repeat;
            -webkit-mask: var(--mask);
            mask: var(--mask);
            .petra-button2 {
              cursor: pointer;
              right: 24px;
              position: absolute;
              bottom: 9px;
            }
            .reply-btn {
              position: absolute;
              right: 20px;
              bottom: 10px;
              cursor: pointer;
              font-size: 11px;
              line-height: 15px;
              float: right;
              color: #21529b;
            }
            .reply-hide {
              text-align: center;
              cursor: pointer;
              font-size: 11px;
              line-height: 15px;
              color: #21529b;
              padding-bottom: 10px;
            }
            .student-name {
              background-color: #2e5799;
              width: 196.45px;
              height: 24.04px;
              object-fit: cover;
              --g: #000, #0000 1deg 179deg, #000 180deg;
              --mask: conic-gradient(
                  from 45deg at bottom 18px right 18px,
                  var(--g)
                )
                100% 100%/100% 100% no-repeat;
              -webkit-mask: var(--mask);
              mask: var(--mask);
              color: white;
              font-size: 13.9056px;
              color: #d4eaff;
              padding: 2px 10px 0px 10px;
            }

            .rating-bg {
              position: absolute;
              top: 1px;
              right: 31px;
            }
            .rating-card {
              position: absolute;
              top: 16px;
              right: 56px;
              font-style: normal;
              font-weight: 500;
              font-size: 15.6103px;
              color: #ffffff;
            }
            .petra-review {
              padding: 15px 20px 20px 30px;
              // position: relative;
              // min-height: 88px;
              .box-review {
                display: table;
                table-layout: fixed;
                background: #f2f2f2;
                min-height: 88px;
                width: 100%;
                --g: #000, #0000 1deg 179deg, #000 180deg;
                --mask: conic-gradient(
                      from -45deg at top 5px right 5px,
                      var(--g)
                    )
                    100% 0 /51% 100% no-repeat,
                  conic-gradient(from -225deg at bottom 5px left 5px, var(--g))
                    0 100%/51% 100% no-repeat;
                -webkit-mask: var(--mask);
                mask: var(--mask);
                font-size: 12px;
                padding: 10px;
                word-wrap: break-word;
              }
              .content-text {
                position: absolute;
                top: 23px;
                left: 41px;
                font-size: 12px;
                width: 480px;
                //   right: 10px;
              }
            }
          }
          .show-comment {
            margin-left: 80px;
            width: 583px;
            height: 100%;
            // object-fit: cover;
            // --g: #000, #0000 1deg 179deg, #000 180deg;
            // --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
            //     100% 0 /51% 100% no-repeat,
            //   conic-gradient(from -225deg at bottom 18px left 18px, var(--g)) 0
            //     100%/51% 100% no-repeat;
            // -webkit-mask: var(--mask);
            // mask: var(--mask);
          }
        }
      }
    }
  }
}

.dialog-filter {
  z-index: 9;
  position: absolute;
  overflow: hidden;
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
        margin-top: 40px;
        .tag-contain {
          margin-bottom: 5px;
          border-bottom: solid 2px #ffffff;
          margin-right: 10px;
          margin-left: 10px;
          .tag-btn {
            height: 27px;
            width: 200px;
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
            position: absolute;
            top: 56px;
            right: 30px;
          }
        }
      }
      .sort-card {
        margin-top: 30px;
        .sort-contain {
          margin-bottom: 5px;
          border-bottom: solid 2px #ffffff;
          margin-right: 10px;
          margin-left: 10px;
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
        }
      }
      .apply-filter {
        background-color: #4c7bc1;
        color: white;
        text-transform: capitalize;
        width: 228.23px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
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
