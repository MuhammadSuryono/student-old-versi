<template>
  <div v-if="!isLoading" class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          {{ detailActivity.name }}
        </div>
      </div>
      <div class="card-title">
        <div class="detail-box" />
        <div class="name-card2">
          {{ detailActivity.name }} | Reading Activity
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
              <img :src="detailActivity.thumbnail" class="display-pic">
              <div class="petra-title-card">
                {{ detailActivity.name }} <br>
                <span
                  style="
                    font-style: italic;
                    font-weight: normal;
                    font-size: 14px;
                  "
                >VIDEO ACTIVITY</span>
              </div>
              <div class="petra-description">
                {{ detailActivity.introduction }}
              </div>

              <div class="petra-c1">
                Duration:
                {{ detailActivity.content.meta_data.meta.total_time }}
                <br>
                {{ detailActivity.discussions }} Discussion
              </div>
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div class="card-activity">
            <!-- <video width="540" height="310" controls>
              <source :src="linkVideo">
            </video> -->
            <iframe style="width: 100%; height: 450px" :src="linkVideo" />
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
            <div class="rate-text">
              Please rate module here.
            </div>
            <span class="petra-rating">
              <img
                src="~/assets/images/module/detail-star.svg"
                class="rating-bg"
              >
              <div class="rating-card columns">
                2.9/5
                <b-rate
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
                <textarea type="text" style="width: 100%; height: 100%" />
              </div>
            </span>
            <div class="petra-button">
              Submit Review
            </div>
          </div>
          <div class="column right-side">
            <div class="petra-content">
              <div style="padding: 20px 20px 10px 20px">
                <div class="columns is-gapless">
                  <div class="column is-narrow pic-petra">
                    <img src="~/assets/images/module/Avatar.png">
                  </div>
                  <div class="column box-list">
                    <div class="student-name">
                      Robert Suhendra
                    </div>

                    <span class="petra-rating">
                      <img
                        src="~/assets/images/module/detail-star.svg"
                        class="rating-bg"
                      >
                      <div class="rating-card columns">
                        2.9/5
                        <b-rate
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
                      <div class="box-review" />
                      <!-- <img
                        src="~/assets/images/module/review-box.png"
                        class="review-box"
                      > -->
                      <!-- <img
                        src="~/assets/images/module/review-corner.png"
                        class="review-corner"
                      > -->
                      <div class="content-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.”
                      </div>
                    </div>
                  </div>
                </div>
                <div class="columns is-gapless">
                  <div class="column is-narrow pic-petra">
                    <img src="~/assets/images/module/Avatar.png">
                  </div>
                  <div class="column box-list">
                    <div class="student-name">
                      Robert Suhendra
                    </div>

                    <span class="petra-rating">
                      <img
                        src="~/assets/images/module/detail-star.svg"
                        class="rating-bg"
                      >
                      <div class="rating-card columns">
                        2.9/5
                        <b-rate
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
                      <div class="box-review" />
                      <!-- <img
                        src="~/assets/images/module/review-box.png"
                        class="review-box"
                      > -->
                      <!-- <img
                        src="~/assets/images/module/review-corner.png"
                        class="review-corner"
                      > -->
                      <div class="content-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.”
                      </div>
                    </div>
                  </div>
                </div>
                <div class="columns is-gapless">
                  <div class="column is-narrow pic-petra">
                    <img src="~/assets/images/module/Avatar.png">
                  </div>
                  <div class="column box-list">
                    <div class="student-name">
                      Robert Suhendra
                    </div>

                    <span class="petra-rating">
                      <img
                        src="~/assets/images/module/detail-star.svg"
                        class="rating-bg"
                      >
                      <div class="rating-card columns">
                        2.9/5
                        <b-rate
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
                      <div class="box-review" />
                      <!-- <img
                        src="~/assets/images/module/review-box.png"
                        class="review-box"
                      > -->
                      <!-- <img
                        src="~/assets/images/module/review-corner.png"
                        class="review-corner"
                      > -->
                      <div class="content-text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.”
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
      linkVideo: ''
    }
  },

  computed: {
    ...mapState({
      detailActivity: (state) => {
        return state.module.dataDetailActivity
      },
      idModule: (state) => {
        return state.module.idModule
      }
    }),
    tinggi2 () {
      return 'height:' + this.tinggi
    }
  },
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.getAll()
  },

  mounted () {},
  methods: {
    download (x) {
      const url = x
      window.open(url)
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
          this.linkVideo =
            'https://iframe.videodelivery.net/$' +
            response.data.data.content.video_uid
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
          object-fit: cover;
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
          padding: 5px 10px 5px 10px;
          width: 171.78px;
          position: absolute;
          top: 440px;
          background: #4c7bc1;
          text-align: center;
          font-size: 14px;
          text-align: center;
          color: #f2f2f2;
          cursor: pointer;
          left: 66%;
          transform: translate(-50%, -50%);
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
              position: relative;
              height: 170px;
              .box-review {
                background: #f2f2f2;
                height: 100%;
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
              }
              .review-box {
                position: absolute;
                top: 15px;
                width: 517px;
                height: 100%;
              }
              .review-corner {
                position: absolute;
                top: 12px;
                right: 17px;
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
