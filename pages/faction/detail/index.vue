<template>
  <div class="bg-img">
    <div class="header-module">
      <div class="card-title">
        <img :src="dataFactionIcon" class="logo-faction">
        <img
          src="~/assets/images/module/box-title.svg"
          class="background-button"
        >
        <div class="name-card">
          FACTION COMPETITION
        </div>
      </div>
    </div>
    <div class="content-faction">
      <div class="columns is-gapless mb-0 pb-0">
        <div v-if="selected1" class="no-select tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Progress Bar
          </div>
        </div>
        <div v-else class="no-select tab-petra" @click="tab(1, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Progress Bar
          </div>
        </div>
        <div v-if="selected2" class="no-select tab-petra">
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Module Dominance
          </div>
        </div>
        <div v-else class="no-select tab-petra" @click="tab(2, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Module Dominance
          </div>
        </div>
        <div
          v-if="selected3"
          class="no-select tab-petra"
          @click="tab(3, false)"
        >
          <img src="~/assets/images/tab/tab-active.svg" class="icon-button">
          <div class="text-petra">
            Comment Stars
          </div>
        </div>
        <div v-else class="no-select tab-petra" @click="tab(3, true)">
          <img
            src="~/assets/images/tab/tab-nonactive.svg"
            class="icon-button"
          >
          <div class="text-petra">
            Comment Stars
          </div>
        </div>
      </div>
      <div v-show="selected1" class="columns is-gapless">
        <div class="column is-narrow left-side-faction">
          <div
            class="columns is-gapless no-select current-progress"
            style="margin-bottom: 1.2rem"
          >
            <div class="column is-narrow left-current">
              <div class="text-current">
                Current Progress
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div
            v-for="(itemProgress, indexProgress) in dataProgressBar"
            :key="indexProgress"
            class="progress-skill columns is-gapless"
          >
            <div class="columns is-narrow" style="margin-top: 0px">
              <div
                class="circle-faction"
                :class="
                  indexProgress === 0
                    ? 'border1'
                    : indexProgress === 1
                      ? 'border2'
                      : indexProgress === 2
                        ? 'border3'
                        : indexProgress === 3
                          ? 'border4'
                          : 'border5'
                "
              />
              <figure v-lazyload class="image__wrapper icon-faction">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="itemProgress.faction_icon"
                  alt="random image"
                >
              </figure>
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;
              "
            >
              <div
                v-for="(progres, index2) in 10"
                :key="index2"
                class="column sub-prog"
              >
                <div
                  v-if="
                    parseFloat(itemProgress.current_level) -
                      Math.floor(parseFloat(itemProgress.current_level)) ===
                      0
                  "
                  class="sub-det"
                >
                  <div
                    v-if="index2 < parseFloat(itemProgress.current_level)"
                    class="sub-det sub-filled"
                    :class="
                      indexProgress === 0
                        ? 'class1'
                        : indexProgress === 1
                          ? 'class2'
                          : indexProgress === 2
                            ? 'class3'
                            : indexProgress === 3
                              ? 'class4'
                              : 'class5'
                    "
                  />
                </div>
                <div v-else class="sub-det">
                  <div
                    v-if="
                      index2 <
                        Math.trunc(parseFloat(itemProgress.current_level))
                    "
                    class="sub-det sub-filled"
                    :class="
                      indexProgress === 0
                        ? 'class1'
                        : indexProgress === 1
                          ? 'class2'
                          : indexProgress === 2
                            ? 'class3'
                            : indexProgress === 3
                              ? 'class4'
                              : 'class5'
                    "
                  />
                  <div
                    v-if="
                      index2 ===
                        Math.trunc(parseFloat(itemProgress.current_level))
                    "
                    class="sub-filled sub-no-width"
                    :class="
                      indexProgress === 0
                        ? 'class1'
                        : indexProgress === 1
                          ? 'class2'
                          : indexProgress === 2
                            ? 'class3'
                            : indexProgress === 3
                              ? 'class4'
                              : 'class5'
                    "
                    :style="{
                      width:
                        Number(
                          (
                            itemProgress.current_level -
                            Math.trunc(parseFloat(itemProgress.current_level))
                          ).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              LV {{ itemProgress.current_level }} /10
            </div>
          </div>
        </div>
        <div
          class="column is-narrow right-side-faction"
          style="margin-top: 35px"
        >
          <div class="columns is-gapless grown-card">
            <div class="column is-narrow">
              <img src="~/assets/images/faction/Crown.png" class="logo-crown">
            </div>
            <div class="column is-narrow" style="margin-left: 15px">
              <div class="text-lead">
                Current leading faction
              </div>
              <div class="text-growth">
                {{ dataModuleDominance.lead_faction_name }}
              </div>
            </div>
          </div>
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Next Level Reward
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="next-level-card">
            <img
              src="~/assets/images/group_1031.svg"
              style="margin-top: 10px"
            >
            <img
              src="~/assets/images/Group_(5).svg"
              style="margin-left: 8px; margin-top: 10px"
            >
          </div>
        </div>
      </div>
      <div v-show="selected2" class="columns is-gapless">
        <div class="column is-narrow left-side-faction">
          <div
            class="columns is-gapless no-select current-progress"
            style="margin-bottom: 1.2rem"
          >
            <div class="column is-narrow left-current">
              <div class="text-current">
                Progress this Month
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div
            v-for="(
              itemProgress, indexProgress
            ) in dataModuleDominance.factions"
            :key="indexProgress"
            class="progress-skill columns is-gapless"
          >
            <div class="columns is-narrow" style="margin-top: 0px">
              <div
                class="circle-faction"
                :class="
                  indexProgress === 0
                    ? 'border1'
                    : indexProgress === 1
                      ? 'border2'
                      : indexProgress === 2
                        ? 'border3'
                        : indexProgress === 3
                          ? 'border4'
                          : 'border5'
                "
              />

              <figure v-lazyload class="image__wrapper icon-faction">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="itemProgress.image"
                  alt="random image"
                >
              </figure>
            </div>
            <div
              class="columns is-narrow"
              style="
                width: 500px;
                margin-left: 20px;
                margin-top: 0px;
                margin-bottom: 0px;

                transform: skew(18deg);
              "
            >
              <div
                v-for="(progres, index2) in 4"
                :key="index2"
                class="column sub-prog"
                style="
                  margin-left: 9px;
                  z-index: 1;
                  margin-top: 14px;
                  margin-bottom: 12px;
                  border-radius:2px;
              }"
              >
                <div
                  v-if="
                    parseFloat(itemProgress.module_percentage / 25) -
                      Math.floor(
                        parseFloat(itemProgress.module_percentage / 25)
                      ) ===
                      0
                  "
                  class="sub-det"
                  style="border-radius: 2px"
                >
                  <div
                    v-if="
                      index2 < parseFloat(itemProgress.module_percentage / 25)
                    "
                    class="sub-det sub-filled"
                    style="border-radius: 2px"
                    :class="
                      indexProgress === 0
                        ? 'class1'
                        : indexProgress === 1
                          ? 'class2'
                          : indexProgress === 2
                            ? 'class3'
                            : indexProgress === 3
                              ? 'class4'
                              : 'class5'
                    "
                  />
                </div>
                <div v-else class="sub-det" style="border-radius: 2px">
                  <div
                    v-if="
                      index2 <
                        Math.trunc(
                          parseFloat(itemProgress.module_percentage / 25)
                        )
                    "
                    class="sub-det sub-filled"
                    style="border-radius: 2px"
                    :class="
                      indexProgress === 0
                        ? 'class1'
                        : indexProgress === 1
                          ? 'class2'
                          : indexProgress === 2
                            ? 'class3'
                            : indexProgress === 3
                              ? 'class4'
                              : 'class5'
                    "
                  />
                  <div
                    v-if="
                      index2 ===
                        Math.trunc(
                          parseFloat(itemProgress.module_percentage / 25)
                        )
                    "
                    class="sub-filled sub-no-width"
                    style="border-radius: 2px"
                    :class="
                      indexProgress === 0
                        ? 'class1'
                        : indexProgress === 1
                          ? 'class2'
                          : indexProgress === 2
                            ? 'class3'
                            : indexProgress === 3
                              ? 'class4'
                              : 'class5'
                    "
                    :style="{
                      width:
                        Number(
                          (
                            itemProgress.module_percentage / 25 -
                            Math.trunc(
                              parseFloat(itemProgress.module_percentage / 25)
                            )
                          ).toFixed(2)
                        ) *
                        100 +
                        '%'
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="columns is-narrow lvl-prog">
              {{ itemProgress.module_percentage }} %
            </div>
          </div>
        </div>
        <div
          class="column is-narrow right-side-faction"
          style="margin-top: 35px"
        >
          <div class="columns is-gapless grown-card">
            <div class="column is-narrow">
              <img src="~/assets/images/faction/Crown.png" class="logo-crown">
            </div>
            <div class="column is-narrow" style="margin-left: 15px">
              <div class="text-lead">
                Current leading faction
              </div>
              <div class="text-growth">
                {{ dataModuleDominance.lead_faction_name }}
              </div>
            </div>
          </div>
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Next Level Reward
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="next-level-card">
            <img
              src="~/assets/images/group_1031.svg"
              style="margin-top: 10px"
            >
            <img
              src="~/assets/images/Group_(5).svg"
              style="margin-left: 8px; margin-top: 10px"
            >
          </div>
        </div>
      </div>
      <div v-show="selected3" class="columns is-gapless">
        <div
          class="column is-narrow left-side-faction"
          style="margin-bottom: 1.2rem"
        >
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Progress this Month
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="columns is-gapless">
            <div class="column is-narrow">
              <div
                v-for="(itemStar, indexStar) in dataCommentStars.data_reward"
                :key="indexStar"
                class="progress-skill columns is-gapless"
                style="width: 210px; height: 55px; margin-bottom: 10px"
              >
                <div class="columns is-narrow">
                  <div
                    class="circle-faction"
                    style="top: 3px"
                    :class="
                      indexStar === 0
                        ? 'border1'
                        : indexStar === 1
                          ? 'border2'
                          : indexStar === 2
                            ? 'border3'
                            : indexStar === 3
                              ? 'border4'
                              : 'border5'
                    "
                  />

                  <figure
                    v-lazyload
                    class="image__wrapper icon-faction"
                    style="margin-top: 14px"
                  >
                    <ImageSpinner class="image__spinner" />
                    <img
                      class="image__item"
                      :data-url="itemStar.image"
                      alt="random image"
                    >
                  </figure>
                </div>
                <div class="column is-narrow" style="margin-left: 15px">
                  <div
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      margin-top: 5px;
                      width: 100%;
                      font-weight: 600;
                      transform: skew(18deg);
                      margin-left: 5px;
                    "
                  >
                    Comment Star Count
                  </div>
                  <div
                    style="
                      margin-left: 5px;
                      background: #2e5799;
                      border-radius: 2px;
                      height: 23px;
                      width: 128.5px;
                      color: #ff8383;
                      text-align: center;
                      font-weight: 700;
                    "
                  >
                    <div style="transform: skew(18deg)">
                      {{ itemStar.total_comment_starts }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-narrow petra-content" style="height: 334px">
              <div
                v-for="(review, indexReview) in itemsDiscuss"
                :key="indexReview"
                class="columns is-gapless"
                style="margin-bottom: 5px"
              >
                <div
                  class="column is-narrow"
                  style="height: 80px"
                  :style="{
                    backgroundColor: review.avatar_background_color
                  }"
                >
                  <img
                    v-if="review.avatar === null || review.avatar === 'null'"
                    src="~/assets/images/ava.png"
                    class="pic-petra"
                    style="
                      width: 80px;
                      height: 81px;
                      object-fit: cover;
                      object-fit: cover;
                      -o-object-position: 53% 0%;
                      object-position: 53% 0%;
                    "
                  >
                  <img
                    v-else
                    :src="review.avatar"
                    class="pic-petra"
                    style="
                      width: 80px;
                      height: 81px;
                      object-fit: cover;
                      object-fit: cover;
                      -o-object-position: 53% 0%;
                      object-position: 53% 0%;
                    "
                  >
                </div>
                <div class="column box-list">
                  <div class="student-name">
                    {{ review.name }}
                  </div>

                  <div class="petra-review">
                    <div class="box-review">
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
                <div slot="spinner" style="color: black">
                  <v-progress-circular indeterminate color="black" />
                </div>
                <div slot="no-results" style="color: black">
                  No results
                </div>
                <div slot="no-more" style="color: black">
                  No more data
                </div>
              </infinite-loading>
            </div>
          </div>
        </div>
        <div
          class="column is-narrow right-side-faction"
          style="margin-top: 22px"
        >
          <div class="columns is-gapless grown-card">
            <div class="column is-narrow">
              <img src="~/assets/images/faction/Crown.png" class="logo-crown">
            </div>
            <div class="column is-narrow" style="margin-left: 15px">
              <div class="text-lead">
                Current leading faction
              </div>
              <div class="text-growth">
                {{ dataModuleDominance.lead_faction_name }}
              </div>
            </div>
          </div>
          <div class="columns is-gapless no-select current-progress">
            <div class="column is-narrow left-current">
              <div class="text-current">
                Next Level Reward
              </div>
            </div>
            <div class="column is-narrow right-current" />
          </div>
          <div class="next-level-card">
            <div class="columns is-gapless">
              <div
                class="left-img"
                style="
                  width: 100%;
                  margin-left: 0px;
                  background-color: #80a8da;
                  border-radius: 10px;
                  z-index: 1;
                  margin-top: 10px;
                "
              />
            </div>
            <img
              src="~/assets/images/Group_1013.svg"
              style="
                position: absolute;
                top: 402px;
                margin-left: 0px;
                width: 297px;
                z-index: 2;
              "
            >
            <div
              style="
                position: absolute;
                background: #fff380;
                opacity: 0.5;
                width: 275px;
                height: 130px;
                top: 390px;
                border-radius: 9.16358px;
                z-index: 0;
                margin-left: 4px;
              "
            />
            <img
              src="~/assets/images/Group_(4).svg"
              style="position: absolute; top: 534px; width: 275px"
            >
          </div>
        </div>
      </div>

      <div
        style="
          background-color: ;
          height: 50px;
          cursor: pointer;
          width: 100px;
          right: 110px;
          position: absolute;
          margin-top: 20px;
        "
      >
        <div class="btn-back" @click="goBack()">
          <Back />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'FactionDetailPage',
  layout: 'default',

  data () {
    return {
      value1: 2.7,
      value2: 3.8,
      value3: 1.6,
      value4: 5.4,
      value5: 8.2,
      selected1: true,
      selected2: false,
      selected3: false,
      page: 1,
      total: 0,
      itemsDiscuss: {},
      infiniteId: 1,
      dataModuleDominance: {
        factions: null,
        lead_faction_name: '',
        next_reward_name: '',
        next_reward_male: null,
        next_reward_female: null
      },
      dataCommentStars: {
        data_reward: null,
        lead_faction_name: '',
        next_reward_name: '',
        next_reward_male: null,
        next_reward_female: null
      }
    }
  },
  computed: {
    ...mapState({
      dataProgressBar: (state) => {
        return state.faction.dataProgressBar
      },
      dataCommentStarsList: (state) => {
        return state.faction.dataCommentStarsList
      },
      dataFactionIcon: (state) => {
        return state.faction.dataFactionIcon
      }
    }),
    fillClass1 () {
      return 'class2'
    }
  },
  mounted () {
    this.getAll()
  },
  methods: {
    getAll () {
      this.getDataProgressBar()
      this.getDataModuleDominance()
      this.getDataCommentStars()
      this.getDataCommentStarsList()
    },
    getDataProgressBar () {
      this.$store
        .dispatch('faction/fetchProgressBar')
        .then((response) => {})
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getDataModuleDominance () {
      this.$store
        .dispatch('faction/fetchModuleDominance')
        .then((response) => {
          const data = response.data.data
          if (data.factions.length !== 0) {
            this.dataModuleDominance.factions = data.factions
          }
          if (data.lead_faction !== null || data.lead_faction !== '') {
            this.dataModuleDominance.lead_faction_name =
              data.lead_faction.faction_name
          }
          if (data.next_reward !== null || data.next_reward !== '') {
            this.dataModuleDominance.next_reward_name = data.next_reward.name
            this.dataModuleDominance.next_reward_male =
              data.next_reward.image_male
            this.dataModuleDominance.next_reward_female =
              data.next_reward.image_female
          }
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getDataCommentStars () {
      this.$store
        .dispatch('faction/fetchCommentStars')
        .then((response) => {
          const data = response.data.data
          if (data.data_reward.length !== 0) {
            this.dataCommentStars.data_reward = data.data_reward
          }

          if (data.next_reward !== null || data.next_reward !== '') {
            this.dataCommentStars.next_reward_name = data.next_reward.name
            this.dataCommentStars.next_reward_male = data.next_reward.image_male
            this.dataCommentStars.next_reward_female =
              data.next_reward.image_female
          }
          if (data.lead_faction !== null || data.lead_faction !== '') {
            this.dataCommentStars.lead_faction_name = data.lead_faction.name
          }
        })
        .catch((error) => {
          this.$toast.error(error.response, {
            position: 'top-center',
            duration: 5000
          })
        })
    },
    getDataCommentStarsList () {
      this.$store
        .dispatch('faction/fetchCommentStarsList', this.page)
        .then((response) => {
          this.itemsDiscuss = response.data.data.data
          this.total = response.data.data.total
          console.log('total : ', this.total)
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
        this.$store
          .dispatch('faction/fetchCommentStarsList', this.page)
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
      this.$router.push('/faction')
    },
    tab (id) {
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
.border1 {
  border: 1px solid #ff8383;
}
.border2 {
  border: 1px solid #ffc973;
}
.border3 {
  border: 1px solid #bdff83;
}
.border4 {
  border: 1px solid #d1a171;
}
.border5 {
  border: 1px solid #66d4ff;
}
.class1 {
  background-color: #ff8383;
}
.class2 {
  background-color: #ffc973;
}
.class3 {
  background-color: #bdff83;
}
.class4 {
  background-color: #d1a171;
}
.class5 {
  background-color: #66d4ff;
}
.bg-img {
  background-image: url('~@/assets/images/faction/background.png');
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
      .logo-faction {
        position: absolute;
        top: 3px;
        left: 30px;
        z-index: 6;
        height: 54px;
        background-color: white;
        border-radius: 100%;
        border: 1px solid grey;
      }
      .name-card {
        z-index: 6;
        position: absolute;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        color: #0071bc;
        text-shadow: 0px 1px 1px #cff0ff;
        top: 13px;
        left: 99px;
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
    }
    .btn-back {
      position: absolute;
      cursor: pointer;
      top: 100px;
      right: 50px;
    }
  }
  .content-faction {
    margin-left: 135px;
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
    .left-side-faction {
      height: 100%;
      width: 739px;
      background: rgba(255, 255, 255, 0.85);
      border: 2px solid #d4eaff;
      padding: 15px !important;
      .current-progress {
        .left-current {
          background: #2e5799;
          transform: skew(-18deg);
          height: 26px;
          width: 182px;
          color: white;
          .text-current {
            text-align: center;
            padding-top: 1px;
            color: #ffffff;
            font-size: 14px;
            transform: skew(18deg);
          }
        }
        .right-current {
          transform: skew(-18deg);
          background: #fff380;
          height: 26px;
          width: 12px;
          margin-left: 4px;
        }
      }
      .progress-skill {
        background: #2c6ec2;
        border: 1px solid #a8f5ff;
        height: 51px;
        width: 700px;
        transform: skew(-18deg);
        padding-left: 20px;
        .icon-faction {
          height: 51px;
          width: 51px;
          transform: skew(18deg);
        }
        .circle-faction {
          height: 47px;
          width: 47px;
          background-color: white;
          position: absolute;
          top: 2px;
          left: 10px;
          transform: skew(18deg);
          border-radius: 50%;
        }
        .sub-prog {
          background-color: #d7faff;
          border-radius: 5px;
          padding: 0px;
          margin-left: 5px;
          z-index: 1;
          margin-top: 18px;
          margin-bottom: 16px;
          .sub-det {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            // height: 22px;
          }
          .sub-filled {
            // background-color: #fff380;
          }
          .sub-no-width {
            height: 100%;
            border-radius: 5px;
          }
        }

        .lvl-prog {
          color: white;
          margin-top: 10px;
          font-size: 21px;
          margin-left: 30px;
          transform: skew(18deg);
        }
      }
      .petra-content {
        // background: rgba(44, 110, 194, 0.85);
        // border: 2px solid #d4eaff;
        width: 470px;
        height: 370px;
        margin-left: 25px;
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            object-fit: cover;
            --g: #000, #0000 1deg 179deg, #000 180deg;
            --mask: conic-gradient(
                from 20deg at bottom 18px right 18px,
                var(--g)
              )
              100% 100%/100% 100% no-repeat;
            -webkit-mask: var(--mask);
            mask: var(--mask);
            color: white;
            font-size: 13.9056px;
            color: #d4eaff;
            padding: 2px 40px 0px 10px;
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
              --mask: conic-gradient(from -45deg at top 5px right 5px, var(--g))
                  100% 0 /51% 100% no-repeat,
                conic-gradient(from -225deg at bottom 5px left 5px, var(--g)) 0
                  100%/51% 100% no-repeat;
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
    .right-side-faction {
      margin-left: 10px;
      .grown-card {
        height: 77px;
        width: 294px;
        background: #2c6ec2;
        border: 1px solid #a8f5ff;
        padding-top: 10px;
        padding-left: 15px;
        .logo-crown {
          height: 58px;
          width: 66px;
        }
        .text-lead {
          font-weight: 600;
          font-size: 15px;
          color: #ffffff;
          line-height: 16px;
          padding-top: 5px;
        }
        .text-growth {
          font-weight: 700;
          line-height: 35px;
          font-size: 25px;
          text-transform: uppercase;
          color: #bdff83;
        }
      }
      .current-progress {
        margin-bottom: 0px;
        margin-left: 5px;
        .left-current {
          background: #2e5799;
          transform: skew(-18deg);
          height: 26px;
          width: 182px;
          color: white;
          .text-current {
            text-align: center;
            padding-top: 1px;
            color: #ffffff;
            font-size: 14px;
            transform: skew(18deg);
          }
        }
        .right-current {
          transform: skew(-18deg);
          background: #fff380;
          height: 26px;
          width: 12px;
          margin-left: 4px;
        }
      }
      .next-level-card {
        background: rgba(255, 255, 255, 0.8);
        height: 267px;
        width: 295px;
        margin-left: 0px;
        padding: 10px;

        .left-img {
          margin-left: 5px;
          background-color: #d1c1ff;
          height: 130px;
          width: 130px;
          border-radius: 0px;
        }
        .right-img {
          background-color: #80cbeb;
          height: 130px;
          width: 130px;
          margin-left: 4px;
          border-radius: 0px;
        }
        .card-user {
          text-align: Center;
          width: 100%;
          z-index: 2;
          height: 57px;
          padding-top: 5px;
          background: rgba(155, 210, 234, 1);
          .user-avatar {
            font-weight: 600;
            font-size: 14px;
            color: #0071bc;
          }
          .user-strategy {
            font-weight: 700;
            font-size: 18px;
            color: #0071bc;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
