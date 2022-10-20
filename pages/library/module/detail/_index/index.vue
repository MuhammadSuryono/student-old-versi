<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          {{ detailModule.module_name }}
        </div>
      </div>
      <div class="card-title">
        <img src="~/assets/images/module/detail-box.svg" class="detail-box">
        <div class="name-card2">
          Introduction to {{ detailModule.module_name }}
        </div>
      </div>
      <div class="btn-back" @click="goBack()">
        <Back />
      </div>
    </div>

    <div class="content-module">
      <!-- tab -->
      <div class="columns is-gapless mb-0 pb-0">
        <div v-if="selected1" class="tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Module Details
          </div>
        </div>
        <div v-else class="tab-petra" @click="tab(1, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Module Details
          </div>
        </div>
        <div v-if="selected2" class="tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Reviews
          </div>
        </div>
        <div v-else class="tab-petra" @click="tab(2, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Reviews
          </div>
        </div>
      </div>
      <div class="card-list">
        <div v-if="selected1" class="columns tab-1-petra">
          <div v-if="!isLoading" class="bg-1" :style="tinggi2" />
          <div v-if="!isLoading" class="bg-2" :style="tinggi2" />
          <span class="petra-rating">
            <img
              src="~/assets/images/module/detail-star.svg"
              class="rating-bg"
            >
            <div class="rating-card columns">
              {{ detailModule.module_rating.toFixed(1) }}/5
              <b-rate
                v-model="detailModule.module_rating"
                icon-pack="mdi"
                size="is-small"
                icon="mdi mdi-star"
                style="margin-left: 4px"
                :max="5"
                spaced
                disabled
              />
            </div>
          </span>
          <span class="petra-students">
            <div class="bg-student">
              {{ detailModule.total_enrolled }} Students
            </div>
          </span>
          <div ref="infoBox" class="column is-narrow left-side">
            <img :src="detailModule.display_picture" class="display-pic">
            <div class="petra-description">
              {{ detailModule.module_description }}
            </div>
            <div
              v-for="(soft, index) in detailModule.soft_skills"
              :key="index"
              class="petra-c1"
            >
              {{ soft.name }} ({{ soft.symbol }}),<br>
            </div>
            <div
              class="petra-owner"
              :style="
                detailModule.enrolled === false
                  ? 'margin-bottom:80px;'
                  : 'margin-bottom:10px;'
              "
            >
              by:
              <span v-if="detailModule.lecturer !== ''">{{
                detailModule.lecturer
              }}</span>
              <span v-else>-</span>
            </div>
            <div
              v-if="detailModule.enrolled === false"
              class="petra-button-collection"
              @click="buyModule()"
            >
              Add to My Collection
              <br>
              FREE
            </div>
          </div>
          <div class="column right-side">
            <div class="petra-title">
              <img
                src="~/assets/images/module/detail-rail.svg"
                class="display-rail"
              >
              <div class="text-title">
                Activity Rail
              </div>
            </div>
            <div class="petra-content" style="padding-top: 20px">
              <div
                v-for="(rail, indexRail) in detailModule.activity_rails"
                :key="indexRail"
                style="padding: 0px 20px 0px 20px"
              >
                <v-toolbar
                  v-if="detailModule.enrolled === false"
                  color="white"
                  class="contain-list"
                  style="opacity: 0.6"
                >
                  <img src="~/assets/images/module/lock.svg" class="img-lock">
                  <img :src="rail.thumbnail" class="img-title">
                  <v-divider class="mx-4" vertical />
                  <div class="data-desc">
                    <div class="module-name">
                      {{ rail.title }}
                    </div>
                    <div
                      class="studio-name"
                      style="
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ rail.description }}
                    </div>
                  </div>
                  <v-spacer />
                  <v-divider class="mx-4" vertical />
                  <v-spacer />
                  <div class="data-read">
                    <div class="module-name" style="text-transform: uppercase">
                      {{ rail.type_activity }} ACTIVITY
                    </div>
                    <div
                      v-if="rail.type_activity === 'reading'"
                      class="studio-name"
                    >
                      {{ rail.detail.total_pages }} Pages <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                    <div
                      v-if="rail.type_activity === 'game'"
                      class="studio-name"
                    >
                      Score : {{ rail.detail.score }} <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                    <div
                      v-if="rail.type_activity === 'quiz'"
                      class="studio-name"
                    >
                      High Score : {{ rail.detail.high_score }} <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                    <div
                      v-if="rail.type_activity === 'video'"
                      class="studio-name"
                    >
                      Duration : {{ rail.detail.duration }} <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                  </div>
                </v-toolbar>
                <v-toolbar
                  v-else
                  color="white"
                  class="contain-list"
                  :style="rail.detail.is_locked ? 'opacity:0.6' : 'opacity: 1;'"
                  @click="detailActivity(rail)"
                >
                  <span v-if="rail.detail.is_locked">
                    <div class="finish-previous">
                      Finish previous Chapter to unlock.
                    </div>
                  </span>
                  <img
                    v-if="rail.detail.is_locked"
                    src="~/assets/images/module/lock.svg"
                    class="img-lock"
                  >
                  <img :src="rail.thumbnail" class="img-title">
                  <v-divider class="mx-4" vertical />
                  <div class="data-desc">
                    <div class="module-name">
                      {{ rail.title }}
                    </div>
                    <div
                      class="studio-name"
                      style="
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ rail.description }}
                    </div>
                  </div>
                  <v-spacer />
                  <v-divider class="mx-4" vertical />
                  <v-spacer />
                  <div class="data-read">
                    <div class="module-name" style="text-transform: uppercase">
                      {{ rail.type_activity }} ACTIVITY
                    </div>
                    <div
                      v-if="rail.type_activity === 'reading'"
                      class="studio-name"
                    >
                      {{ rail.detail.total_pages }} Pages <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                    <div
                      v-if="rail.type_activity === 'game'"
                      class="studio-name"
                    >
                      Score : {{ rail.detail.score }} <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                    <div
                      v-if="rail.type_activity === 'quiz'"
                      class="studio-name"
                    >
                      High Score : {{ rail.detail.high_score }} <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                    <div
                      v-if="rail.type_activity === 'video'"
                      class="studio-name"
                    >
                      Duration : {{ rail.detail.duration }} <br>
                      {{ rail.detail.count_discussion }} Discussions
                    </div>
                  </div>
                </v-toolbar>
              </div>
              <div
                v-if="(detailModule.activity_rails[detailModule.activity_rails.length - 1].detail.score > 0) && detailModule.enrolled"
                class="btn-finish"
                @click="toFinish()"
                @mouseover="hover1 = true"
                @mouseleave="hover1 = false"
              >
                <div class="decoration" />
                <div class="card-btn">
                  <IconTopi
                    v-if="!hover1"
                    bg-color="#3B69BC"
                    style="margin-right:10px;"
                  />
                  <IconTopi
                    v-else
                    bg-color="white"
                    style="margin-right:10px;"
                  />
                  Finish Module
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selected2" class="columns tab-2-petra">
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
            <div class="rate-text">
              Please rate module here.
            </div>
            <span class="petra-rating">
              <img
                src="~/assets/images/module/detail-star.svg"
                class="rating-bg"
              >
              <div class="rating-card columns">
                {{ ratingReview }}/5
                <b-rate
                  v-model="ratingReview"
                  icon-pack="mdi"
                  size="is-small"
                  icon="mdi mdi-star"
                  style="margin-left: 4px"
                  :max="5"
                  spaced
                />
              </div>
            </span>
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
              text="Submit Review"
              @click.native="addReview()"
            />
          </div>
          <div class="column right-side">
            <div class="petra-title">
              <img
                src="~/assets/images/module/detail-rail.svg"
                class="display-rail"
              >
              <div class="text-title">
                Show all reviews
              </div>
            </div>
            <div class="petra-content">
              <div style="padding: 20px 20px 10px 20px">
                <div
                  v-for="(review, indexReview) in itemsReview"
                  :key="indexReview"
                  class="columns is-gapless"
                >
                  <div
                    class="column is-narrow"
                    style="height: 80px"
                    :style="{ backgroundColor: review.avatar_background }"
                  >
                    <img
                      :src="review.avatar"
                      class="pic-petra"
                      style="
                        width: 80px;
                        height: 67px;
                        object-fit: cover;
                        object-fit: cover;
                        -o-object-position: 53% 0%;
                        object-position: 53% 0%;
                        margin-top: 13px;
                      "
                    >
                  </div>
                  <div class="column box-list">
                    <div class="student-name">
                      {{ review.user }}
                    </div>

                    <span class="petra-rating">
                      <img
                        src="~/assets/images/module/detail-star.svg"
                        class="rating-bg"
                      >
                      <div class="rating-card columns">
                        {{ review.rating.toFixed(1) }} /5
                        <b-rate
                          v-model="review.rating"
                          icon-pack="mdi"
                          size="is-small"
                          icon="mdi mdi-star"
                          style="margin-left: 4px"
                          :max="5"
                          spaced
                          disabled
                        />
                      </div>
                    </span>
                    <div class="petra-review">
                      <div class="box-review">
                        {{ review.review }}
                      </div>
                    </div>
                  </div>
                </div>
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
  name: 'ModuleDetailPage',
  layout: 'default',

  data () {
    return {
      selected1: true,
      selected2: false,
      id: '',
      tinggi: 0,
      isLoading: true,
      itemsReview: {},
      ratingReview: 0,
      descReview: '',
      hover1: false
    }
  },

  computed: {
    ...mapState({
      detailModule: (state) => {
        return state.module.dataDetailModule
      },
      dataUser: (state) => {
        return state.user.users
      }
    }),
    tinggi2 () {
      return 'height:' + this.tinggi
    }
  },
  created () {
    this.getAll()
  },
  mounted () {
    console.log(this.dataUser)
  },
  methods: {
    async toFinish () {
      const data = new FormData()
      data.append('module_id', this.$route.params.index)
      await this.$axios
        .post('game/skillset/generateSkillCard', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          console.log(res.data.status === 200)
          if (res.data.status === 200) {
            this.$toast.success('Success', {
              position: 'top-center',
              duration: 5000
            })
            this.getAll()
          } else {
            this.$toast.error(res.data.error.message, {
              position: 'top-center',
              duration: 5000
            })
          }
        }).catch((error) => {
          console.log('error:', error.response.status)
          this.isLoading = false
          this.$toast.error('CPL are not set. Can not finish module.', {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getAll () {
      this.getData()
      this.getReview()
    },
    addReview () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (this.descReview === '' || this.ratingReview === 0) {
        this.$toast.error('Review and rate module is required', {
          position: 'top-center',
          duration: 5000
        })
      } else {
        this.isLoading = true
        const data = {
          id: this.$route.params.index,
          review: this.descReview,
          rating: this.ratingReview
        }
        this.$store
          .dispatch('module/addReview', data)
          .then((response) => {
            console.log('success', response)
            if (response.status !== 201) {
              this.$toast.error(response.data.error.message, {
                position: 'top-center',
                duration: 5000
              })
            }
            this.getReview()
            this.getData()
          })
          .catch((error) => {
            console.log('error:', error)
            this.isLoading = false
            this.$toast.error(error.response, {
              position: 'top-center',
              duration: 5000
            })
          })
      }
    },
    openDialog () {
      this.$dialog.open({
        message: 'Are you sure you want to do this?',
        resolver: async (result) => {
          try {
            const res = await result
            /* eslint-disable no-console */
            console.log(res)
          } catch (error) {
            console.warn(error)
          }
        }
      })
    },
    buyModule () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.isLoading = true
      const data = {
        user_id: localStorage.getItem('user_id'),
        module_id: this.$route.params.index
      }
      console.log(data)
      this.$store
        .dispatch('module/addModule', data)
        .then((response) => {
          this.getAll()
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getData () {
      this.isLoading = true
      this.$store
        .dispatch('module/fetchDetailModule', this.$route.params.index)
        .then((response) => {
          this.tinggi = this.$refs.infoBox.clientHeight + 'px;'
          this.isLoading = false
          console.log(response.data.data)
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getReview () {
      console.log('getReview')
      this.$store
        .dispatch('module/getReview', this.$route.params.index)
        .then((response) => {
          this.itemsReview = response.data.data
          console.log('reviews : ', this.itemsReview)
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/library/module')
    },
    tab (id, number) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (id === 1) {
        this.selected1 = true
        this.selected2 = false
      }
      if (id === 2) {
        this.selected1 = false
        this.selected2 = true
      }
    },
    detailActivity (rail) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      if (!rail.detail.is_locked) {
        this.$store.dispatch('module/idModule', this.$route.params.index)
        if (rail.type_activity === 'game') {
          this.$router.push({
            path: `/library/module/detail/${this.$route.params.index}/game/${rail.id}`
          })
        }
        if (rail.type_activity === 'video') {
          this.$router.push({
            path: `/library/module/detail/${this.$route.params.index}/video/${rail.id}`
          })
        }
        if (rail.type_activity === 'reading') {
          this.$router.push({
            path: `/library/module/detail/${this.$route.params.index}/reading/${rail.id}`
          })
        }
        if (rail.type_activity === 'quiz') {
          this.$router.push({
            path: `/library/module/detail/${this.$route.params.index}/quiz/${rail.id}`
          })
        }
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
        width: 351px;
        height: 20px;
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
        width: 310px;
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
      .tab-1-petra {
        padding: 20px;
        .bg-1 {
          position: absolute;
          width: 200px;
          left: 163px;
          background: #5d93ce;
          opacity: 0.5;
          margin-top: 4px;
          --g: #000, #0000 1deg 179deg, #000 180deg;
          --mask: conic-gradient(
              from -225deg at bottom 18px left 18px,
              var(--g)
            )
            0 100%/51% 100% no-repeat;
          -webkit-mask: var(--mask);
        }
        .bg-2 {
          position: absolute;
          width: 200px;
          left: 306px;
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
            conic-gradient(from -225deg at bottom 18px left 18px, var(--g)) 0
              100%/51% 100% no-repeat;
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
          .petra-description {
            margin-top: 197px;
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
              left: 50px;
              font-weight: 500;
              font-size: 16px;
              color: #0071bc;
            }
          }
          .petra-content {
            background: rgba(44, 110, 194, 0.85);
            border: 2px solid #d4eaff;
            width: 100%;
            height: 100%;
            .btn-finish {
              position:relative;
              margin-left: 255px;
              .decoration {
                background: #7289AA;
                opacity: 0.35;
                border: 0.6px solid #FFFFFF;
                height: 18px;
                width: 18px;
                top:-4px;
                left:-4px;
                z-index:-1;
                position:absolute;
              }
              .card-btn {
                width:182px;
                height:38.11px;
                background: #F2F2F2;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor:pointer;
                color: #3B69BC;
                border:2px solid #FFF380;
              }
            }
            .btn-finish:hover {
              .card-btn {
                border: 0.6px solid #aeeefa;
                background:#4C7BC1;
                color:white;
              }
            }
            .contain-list {
              cursor: pointer;
              height: 75px;
              width: 100%;

              background-color: white;
              // background-color: rgba(255, 255, 255, 0.3);
              margin-bottom: 25px;
              .finish-previous {
                border: solid 1px white;
                background-color: #fff380;
                position: absolute;
                width: 303.58px;
                padding: 10px 10px 0px 10px;
                height: 38.19px;
                text-align: center;
                top: 50%;
                left: 50%;
                font-size: 13px;
                transform: translate(-50%, -50%);
                --g: #000, #0000 1deg 179deg, #000 180deg;

                --mask: conic-gradient(
                      from -45deg at top 8px right 8px,
                      var(--g)
                    )
                    100% 0 /51% 100% no-repeat,
                  conic-gradient(from -225deg at bottom 8px left 8px, var(--g))
                    0 100%/51% 100% no-repeat;
                -webkit-mask: var(--mask);
              }
              .img-title {
                height: 75px;
                width: 122px;
              }
              .img-lock {
                position: absolute;
                left: 52px;
              }
              .data-desc {
                width: 280px;
                .module-name {
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16.8687px;
                  line-height: 22px;
                  color: #3b69bc;
                }
                .studio-name {
                  font-style: normal;
                  font-weight: 500;
                  font-size: 11.6515px;
                  line-height: 16px;
                  color: #859bb5;
                }
              }
              .data-read {
                width: 150px;
                .module-name {
                  font-style: normal;
                  font-size: 13.8687px;
                  color: #3e4d68;
                }
                .studio-name {
                  font-style: normal;
                  font-weight: 500;
                  font-size: 11px;
                  line-height: 16px;
                  color: #859bb5;
                }
              }
            }
            .contain-list::v-deep .v-toolbar__content {
              padding-left: 0px !important;
            }
          }
        }
      }
      .tab-2-petra {
        padding: 20px;
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
            top: 92px;
            left: 93px;
            .comment-text {
              font-style: normal;
              font-weight: 500;
              font-size: 14.6454px;
              color: #5b6987;
              margin-bottom: 3px;
            }
            .bg-bor {
              z-index: 4;
            }
            .bg-com {
              position: absolute;
              top: 23px;
              left: 0px;
              z-index: 3;
            }
            .bg-cor {
              position: absolute;
              top: 23px;
              right: 0px;
              z-index: 5;
            }
            .hexagon {
              position: absolute;
              top: 34px;
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
            top: 455px;
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
              height: 100px;
            }
            .box-list {
              position: relative;
              background-color: white;
              width: 100%;
              height: 100%;
              object-fit: cover;
              --g: #000, #0000 1deg 179deg, #000 180deg;

              --mask: conic-gradient(
                    from -45deg at top 18px right 18px,
                    var(--g)
                  )
                  100% 0 /51% 100% no-repeat,
                conic-gradient(from -225deg at bottom 18px left 18px, var(--g))
                  0 100%/51% 100% no-repeat;
              -webkit-mask: var(--mask);
              mask: var(--mask);
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
                  background: #f2f2f2;
                  min-height: 88px;
                  width: 100%;
                  --g: #000, #0000 1deg 179deg, #000 180deg;
                  --mask: conic-gradient(
                        from -45deg at top 5px right 5px,
                        var(--g)
                      )
                      100% 0 /51% 100% no-repeat,
                    conic-gradient(
                        from -225deg at bottom 5px left 5px,
                        var(--g)
                      )
                      0 100%/51% 100% no-repeat;
                  -webkit-mask: var(--mask);
                  mask: var(--mask);
                  font-size: 12px;
                  padding: 10px;
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
          }
        }
      }
    }
  }
}
</style>
