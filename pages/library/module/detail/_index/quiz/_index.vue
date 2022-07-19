<template>
  <div v-if="!isLoading" class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          {{ detailActivity.title }}
        </div>
      </div>
      <div class="card-title">
        <div class="detail-box" />
        <div class="name-card2">
          {{ detailActivity.title }} | Quiz Activity
        </div>
      </div>
      <div class="btn-back" @click="goBack()">
        <Back />
      </div>
    </div>

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
              <img
                src="https://i.picsum.photos/id/495/300/300.jpg?hmac=A9YVCMdxoYv0Ck6HxE28k5rQuCh0JliJ8KcpSer_Nsg"
                class="display-pic"
              >
              <div class="petra-title-card">
                {{ detailActivity.title }} <br>
                <span
                  style="
                    font-style: italic;
                    font-weight: normal;
                    font-size: 14px;
                  "
                >QUIZ ACTIVITY</span>
              </div>
              <div class="petra-description">
                {{ detailActivity.description }}
              </div>

              <div class="petra-c1">
                <!-- {{ detailActivity.discussions }} Discussion <br> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div
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
              text="Submit Review"
              @click.native="addReview()"
            />
          </div>
          <div class="column right-side">
            <div class="petra-content">
              <div style="padding: 20px 20px 10px 20px">
                <div
                  v-for="(review, indexReview) in itemsDiscuss"
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
                      {{ review.username }}
                    </div>
                    <div class="petra-review">
                      <div class="box-review" style="padding: 10px">
                        {{ review.comment }}
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
      itemsDiscuss: {},
      descReview: '',
      infiniteId: 1,
      total: 0
    }
  },

  computed: {
    ...mapState({
        detailModule: (state) => {
        return state.module.dataDetailModule
      },
      detailActivity: (state) => {
        return state.module.dataDetailActivity
      },
      idModule: (state) => {
        return state.module.idModule
      },
      dataUser: (state) => {
        return state.user.users
      }
    }),
      quizId(){
      // find activity id by params index
      let activity = this.detailModule.activity_rails.find(activity => activity.id == parseInt(this.$route.params.index))
      // return this.$route.params.index
      return parseInt(activity.activity_id);
    },
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
    // this.handleResize()
    this.getAll()
  },

  mounted () {},
  methods: {
       playGame (x) {
      // console.log(x);
      this.$router.push({
        name: "library-module-detail-index-quiz-embed",
        params: {
          link: this.quizId
        }

        // path: `/library/module/detail/${this.idModule}/game/embed`
      })
    },
    playGame2 (x) {
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
    addReview () {
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
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    getAll () {
      this.getData()
      this.getAllDiscuss()
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
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
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
            if (error.status === 401) {
              this.$auth.logout()
              this.$router.push('/login')
            }
          })
      }, 500)
    },
    getData () {
      console.log('tess ')
      this.isLoading = true
      const data = {
        module: this.idModule,
        activity: this.$route.params.index
      }
      this.$store
        .dispatch('module/fetchDetailActivity', data)
        .then((response) => {
          console.log(response.data.data)
          this.tinggi = this.$refs.infoBox.clientHeight + 'px;'

          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
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
    goBack () {
      this.$router.go(-1)
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
      background: #effdfd;
      box-shadow: inset -5px 0px 4px rgba(28, 71, 132, 0.08),
        inset 5px 0px 8px rgba(28, 71, 132, 0.08);
      height: 400px;
      width: 730px;
      .title-chapter {
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        padding-left: 30px;
      }
      .btn-act {
        background-color: #4c7bc1;
        color: white;
        text-transform: capitalize;
        width: 228.23px;
      }
      .description-activity {
        width: 100%;
        padding: 10px 20px 30px 30px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
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
        }
      }
    }
  }
}
</style>
