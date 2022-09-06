<template>
  <div v-if="!isLoading" class="bg-img">
    <ModuleTitle
      :title="detailActivity.name"
      :subtitle="detailActivity.name"
      type="Game"
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
              <div class="columns is-gapless">
                <div class="column is-narrow icon-button no-select">
                  <div class="text-btn">
                    Activity Content
                  </div>
                </div>
                <div class="column is-narrow icon-button2" />
              </div>
            </div>
            <div v-else class="tab-petra" @click="tab(1, true)">
              <div class="columns is-gapless">
                <div
                  class="column is-narrow icon-button no-select"
                  style="background-color: #7d96aa"
                >
                  <div class="text-btn" style="color: white">
                    Activity Content
                  </div>
                </div>
                <div
                  class="column is-narrow icon-button2"
                  style="background: #6c889e"
                />
              </div>
            </div>
            <div v-if="selected2" class="tab-petra">
              <div class="columns is-gapless">
                <div class="column is-narrow icon-button no-select">
                  <div class="text-btn">
                    Rewards & Achievements
                  </div>
                </div>
                <div class="column is-narrow icon-button2" />
              </div>
            </div>
            <div v-else class="tab-petra" @click="tab(2, true)">
              <div class="columns is-gapless">
                <div
                  class="column is-narrow icon-button no-select"
                  style="background-color: #7d96aa"
                >
                  <div class="text-btn" style="color: white">
                    Rewards & Achievements
                  </div>
                </div>
                <div
                  class="column is-narrow icon-button2"
                  style="background: #6c889e"
                />
              </div>
            </div>
            <div v-if="selected3" class="tab-petra">
              <div class="columns is-gapless">
                <div class="column is-narrow icon-button no-select">
                  <div class="text-btn">
                    See All Discussions
                  </div>
                </div>
                <div class="column is-narrow icon-button2" />
              </div>
            </div>
            <div v-else class="tab-petra" @click="tab(3, true)">
              <div class="columns is-gapless">
                <div
                  class="column is-narrow icon-button no-select"
                  style="background-color: #7d96aa"
                >
                  <div class="text-btn" style="color: white">
                    See All Discussions
                  </div>
                </div>
                <div
                  class="column is-narrow icon-button2"
                  style="background: #6c889e"
                />
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
                >GAME ACTIVITY
                </span>
              </div>
              <div class="petra-description">
                {{ detailActivity.introduction }}
              </div>

              <div class="petra-c1">
                {{ detailActivity.total_discussions }} discussion replies
              </div>
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div
            v-if="detailActivity.type === 'embed'"
            class="card-activity"
            style="position: relative"
          >
            <img
              src="~/assets/images/195.svg"
              style="height: 100%; width: 100%"
            >
            <div
              style="
                position: absolute;
                z-index: 999;
                width: 229.53px;
                color: #f2f2f2;
                text-align: center;
                top: 230px;
                left: 240px;
                padding: 5px;
                cursor: pointer;
                background-color: #4c7bc1;
              "
              @click="playGame(detailActivity.link)"
            >
              Play
            </div>
          </div>
          <div
            v-if="detailActivity.type === 'eksternal'"
            class="card-activity"
            style="position: relative"
          >
            <div
              style="
                width: 100%;
                height: 100%;
                background-color: rgba(32, 59, 99, 0.75);
              "
            />
            <img
              src="~/assets/images/confirm.png"
              style="
                position: absolute;
                z-index: 999;
                text-align: center;
                top: 100px;
                left: 70px;
              "
            >
            <a
              style="
                position: absolute;
                z-index: 999;
                width: 229.53px;
                color: #f2f2f2;
                text-align: center;
                top: 275px;
                left: 240px;
                padding: 5px;
                cursor: pointer;
                background-color: #4c7bc1;
              "
              @click="playGame2(detailActivity.link)"
            >
              Play
            </a>
          </div>
          <div
            v-if="detailActivity.type === 'vr'"
            class="card-activity"
            style="position: relative"
          >
            <img
              src="~/assets/images/vr.png"
              style="height: 100%; width: 100%; opacity: 0.2"
            >
            <img
              src="~/assets/images/confirm2.png"
              style="
                position: absolute;
                z-index: 999;
                text-align: center;
                top: 100px;
                left: 70px;
              "
            >
          </div>
        </div>
      </div>
      <div v-if="selected2" class="columns is-gapless mb-0 pb-0">
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
                >GAME ACTIVITY
                </span>
              </div>
              <div class="petra-description">
                {{ detailActivity.introduction }}
              </div>

              <div class="petra-c1">
                {{ detailActivity.total_discussions }} discussion replies
              </div>
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div class="columns is-gapless reward-card">
            <div class="column is-narrow comp-reward">
              <div class="head-reward">
                Completion Reward
              </div>
              <div
                style="
                  background: #4c7bc1;
                  height: 34.73019027709961px;
                  width: 168.09616088867188px;
                  margin-left: auto;
                  margin-right: auto;
                  color: white;
                  text-align: Center;
                  padding-top: 7px;
                  font-size: 14px;
                  margin-top: 170px;
                "
              >
                Coming Soon
              </div>
              <!-- <div class="columns is-gapless photo-reward">
                <div class="column is-narrow left-reward">
                  <img
                    :src="detailActivity.month_reward.avatar_female"
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: contain;
                      background: rgba(0, 0, 0, 0.5);
                      object-position: 40% 0%;
                    "
                  >
                  <div
                    v-if="dataUser.gender !== 'Female'"
                    style="
                      width: 135px;
                      height: 135px;
                      background: rgba(10, 10, 10, 0.5);
                      z-index: 3;
                      position: fixed;
                      top: 330px;
                    "
                  />
                </div>
                <div class="column is-narrow right-reward">
                  <img
                    :src="detailActivity.month_reward.avatar_male"
                    style="
                      width: 100%;
                      height: 100%;
                      object-position: 40% 0%;
                      object-fit: cover;
                      background: rgba(0, 0, 0, 0.5);
                    "
                  >
                  <div
                    v-if="dataUser.gender !== 'Male'"
                    style="
                      width: 135px;
                      height: 135px;
                      background: rgba(10, 10, 10, 0.5);
                      z-index: 3;
                      position: fixed;
                      top: 330px;
                    "
                  />
                </div>
              </div>
              <div class="avatar-name">
                <div style="padding-top: 3px">
                  <span style="font-weight: bold">USER AVATARS </span><br>
                  <span
                    style="font-weight: normal; color: #608ac8"
                  >“{{ detailActivity.month_reward.name }}”
                  </span>
                </div>
              </div>
              <div
                v-if="
                  detailActivity.month_reward.is_acquired === true ||
                    detailActivity.month_reward.is_acquired === 'true'
                "
                style="
                  background: #4c7bc1;
                  height: 34.73019027709961px;
                  width: 168.09616088867188px;
                  margin-left: auto;
                  margin-right: auto;
                  color: white;
                  text-align: Center;
                  padding-top: 7px;
                  font-size: 14px;
                  margin-top: 20px;
                "
              >
                Reward Acquired!
              </div> -->
            </div>
            <div class="column is-narrow list-reward">
              <div
                v-for="(x, indexArchivement) in archievements"
                :key="indexArchivement"
                class="columns is-gapless card-list-avatar"
                :style="
                  x.is_acquired
                    ? 'background : rgba(212, 234, 255, 1)'
                    : 'background : rgba(212, 234, 255, 0.3)'
                "
              >
                <div class="column is-narrow left-ava">
                  <img :src="x.image" class="height:100%;width:100%">
                </div>
                <div class="column right-ava">
                  <div class="head-ava">
                    {{ x.name }}
                  </div>
                  <div class="desc-ava">
                    {{ x.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selected3">
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
      linkVideo: '',
      ratingReview: 0,
      descReview: '',
      subReply: '',
      itemsDiscuss: {},
      infiniteId: 1,
      total: 0,
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
      idModule: (state) => {
        return state.module.idModule
      },
      dataAllDiscuss: (state) => {
        return state.module.dataAllDiscuss
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
    },
    disableBtn2 () {
      if (this.subReply === '') {
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
  },

  mounted () {
    console.log('user : ', this.dataUser)
  },
  methods: {
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
    playGame (x) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push({
        name: 'library-module-detail-index-game-embed',
        params: {
          link: x
        }
      })
    },
    playGame2 (x) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      window.open(x, '_blank')
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    dialogDownload (data) {
      this.dataAttachment = data
      this.dialog = true
    },
    getAll () {
      this.getData()
      this.getAllDiscuss()
    },
    getData () {
      this.isLoading = true
      const data = {
        module: this.idModule,
        activity: this.$route.params.index
      }
      this.$store
        .dispatch('module/fetchDetailActivity', data)
        .then((response) => {
          console.log(response.data.data)
          this.archievements = response.data.data.achievements
          console.log('archivement : ', response.data.data.achievements)
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
          console.log('discuss : ', response.data.data)
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
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.go(-1)
    },
    tab (id, number) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (id === 1) {
        this.selected1 = true
        this.selected2 = false
        this.selected3 = false
      }
      if (id === 2) {
        this.selected1 = false
        this.selected2 = true
        this.selected3 = false
      }
      if (id === 3) {
        this.selected1 = false
        this.selected2 = false
        this.selected3 = true
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
        background: #f5fbff;
        height: 30px;
        min-width: 200px;
        padding-right: 10px;
        padding-left: 10px;
        transform: skew(-18deg);
        text-align: center;
        margin-right: 5px;
      }
      .icon-button2 {
        transform: skew(-18deg);
        background: #fff380;
        height: 30px;
        width: 8px;
        margin-right: 10px;
      }
      .text-btn {
        transform: skew(18deg);
        font-weight: 500;
        font-size: 15px;
        text-align: center;
        padding-top: 3px;
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
        height: 100%;
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
          top: -4px;
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
          text-align: left;
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
          height: 175px;
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
    .reward-card {
      background: #2c6ec2;
      height: 486.21539306640625px;
      width: 702.491943359375px;
      padding: 20px;
      .comp-reward {
        background: rgba(162, 207, 244, 0.75);
        width: 321.75px;
        height: 100%;
        --g: #000, #0000 1deg 179deg, #000 180deg;
        --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
          100% 0 /100% 100% no-repeat;
        -webkit-mask: var(--mask);
        mask: var(--mask);
        padding: 0px 15px 15px 0px !important;
        .head-reward {
          height: 28px;
          max-width: 240px;
          color: #d4eaff;
          background: #2e5799;
          --g: #000, #0000 1deg 179deg, #000 180deg;
          --mask: conic-gradient(from 30deg at bottom 5px right 20px, var(--g))
            100% 100%/100% 100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
          font-weight: 700;
          font-size: 14px;
          padding-left: 20px;
          padding-top: 2.8px;
        }
        .photo-reward {
          width: 100%;
          height: 135px;
          margin-top: 50px;
          padding-left: 15px !important;
          padding-right: 15px !important;
          .left-reward {
            background: rgba(78, 234, 160, 1);
            width: 135px;
            height: 100%;
            border: 2px solid white;
          }
          .right-reward {
            background: rgba(78, 234, 160, 1);
            width: 135px;
            height: 100%;
            border: 2px solid white;
            margin-left: 10px;
          }
        }
        .avatar-name {
          background: #ffffff;
          height: 55px;
          width: 272px;
          margin-left: auto;
          margin-right: auto;
          --g: #000, #0000 1deg 179deg, #000 180deg;
          --mask: conic-gradient(from -45deg at top 0px right 10px, var(--g))
              100% 0 /51% 100% no-repeat,
            conic-gradient(from -225deg at bottom 0px left 10px, var(--g)) 0
              100%/51% 100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
          text-align: Center;
        }
      }
      .list-reward {
        margin-left: 20px;
        height: 450px;
        width: 320px;
        overflow-y: scroll;
        .card-list-avatar {
          min-height: 100px;
          width: 300px;
          background: #d4eaff;
          --g: #000, #0000 1deg 179deg, #000 180deg;
          --mask: conic-gradient(from -45deg at top 0px right 20px, var(--g))
              100% 0 /51% 100% no-repeat,
            conic-gradient(from -225deg at bottom 0px left 20px, var(--g)) 0
              100%/51% 100% no-repeat;
          -webkit-mask: var(--mask);
          mask: var(--mask);
          padding: 10px 10px 10px 20px;
          .left-ava {
            width: 80px;
            height: 80px;
          }
          .right-ava {
            padding-right: 15px !important;
            .head-ava {
              background: #0071bc;
              height: 23.34px;
              width: 95%;
              --g: #000, #0000 1deg 179deg, #000 180deg;
              --mask: conic-gradient(
                  from -45deg at top 0px right 10px,
                  var(--g)
                )
                100% 0 /100% 100% no-repeat;
              -webkit-mask: var(--mask);
              mask: var(--mask);
              font-weight: 500;
              font-size: 14px;
              color: #ffffff;
              padding-left: 10px;
              padding-top: 1px;
              text-transform: uppercase;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .desc-ava {
              height: 55px;
              width: 100%;
              white-space: initial !important;
              margin-left: 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 11px;
              color: #5b6987;
              margin-top: 5px;
            }
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
