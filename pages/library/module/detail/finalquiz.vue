<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          Search Modules
        </div>
      </div>
      <div class="card-title">
        <div class="detail-box" />
        <div class="name-card2">
          Introduction to Module Details | Introduction to Final Quiz
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
          <div class="card-list">
            <img src="~/assets/images/module/act.png" class="background-card">
            <img src="~/assets/images/module/game.png" class="display-pic">
            <div class="petra-title-card">
              Introduction to Final Quiz <br>
              <span
                style="font-style: italic; font-weight: normal; font-size: 14px"
              >FINAL QUIZ ACTIVITY</span>
            </div>
            <div class="petra-description">
              This is an activity where Students can read through text provided
              by the Lecturer. There will be no scores, just reading.
            </div>
            <div class="petra-c1">
              999 discussion replies.
            </div>
          </div>
        </div>
        <div class="column is-narrow header-right" style="margin-left: 20px">
          <div class="card-activity" />
        </div>
      </div>
      <div v-if="selected3">
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
// import { mapState } from 'vuex'
export default {
  name: 'ModuleDetailPage',
  layout: 'default',

  data () {
    return {
      selected1: true,
      selected3: false
    }
  },

  computed: {},
  created () {},

  mounted () {},
  methods: {
    goBack () {
      this.$router.push('/library/module/detail')
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
    },
    toReading () {
      this.$router.push('/library/module/detail/reading')
    },
    toVideo () {
      this.$router.push('/library/module/detail/video')
    },
    toGame () {
      this.$router.push('/library/module/detail/game')
    },
    toQuiz () {
      this.$router.push('/library/module/detail/quiz')
    },
    toFinalQuiz () {
      this.$router.push('/library/module/detail/finalquiz')
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
      margin-top: 5px;
      height: 700px;
      width: 100%;
      position: relative;
      .background-card {
        position: absolute;
        top: 0px;
        object-fit: cover;
      }
      .display-pic {
        position: absolute;
        top: 1px;
        left: 0px;
        height: 213px;
        width: 337px;
        -o-object-fit: cover;
        object-fit: cover;
        --g: #000, #0000 1deg 179deg, #000 180deg;
        --mask: conic-gradient(from -45deg at top 18px right 18px, var(--g))
          100% 0 /100% 100% no-repeat;
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
      .petra-title-card {
        position: absolute;
        top: 220px;
        left: 15px;
        width: 90%;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: justify;
        color: #000000;
      }
      .petra-description {
        position: absolute;
        top: 280px;
        left: 15px;
        width: 90%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-align: justify;
        color: #5b6987;
      }
      .petra-c1 {
        position: absolute;
        top: 410px;
        left: 18px;
        width: 90%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5b6987;
        float: right;
        text-align: right;
        font-weight: bold;
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
</style>
