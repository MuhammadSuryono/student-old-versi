<template>
  <div class="main-detail">
    <div class="header-skillcard">
      <div class="card-profile">
        <img src="~/assets/images/bg-button.png" class="background-button">
        <img
          src="~/assets/images/skillcard/icon_skillcard.png"
          class="icon-button"
        >
        <div class="name-card">
          {{ detail.skill }}
        </div>
        <div class="column profile-container">
          <div class="btn-profile">
            <img
              src="~/assets/images/bg-profile.png"
              style="width: 257.32px; height: 30px"
            >
            <div class="text-profile">
              Skill Score
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/skillcard" class="btn-back">
        <IconBackBtn />
        <div class="text-btn">
          BACK
        </div>
      </NuxtLink>
    </div>
    <div class="content-skillcard">
      <div class="card-title1">
        <img
          src="~/assets/images/skillcard/detail-name.svg"
          class="background-button"
        >
        <div class="name-card">
          What is “{{ detail.skill }}”?
        </div>
      </div>
      <div class="card-title2">
        <img
          src="~/assets/images/skillcard/detail-description.svg"
          class="background-button"
        >
        <div class="columns">
          <div class="column is-narrow skillcard1">
            <div class="card-title1">
              <img
                src="~/assets/images/skillcard/skillscore.svg"
                class="background-button"
              >
              <div class="name-card">
                Skill Score
              </div>
              <div class="score-card">
                {{ detail.score }}%
              </div>
            </div>
            <div
              class="column"
              style="margin-top: 43px; margin-left: 45px; width: 202px"
            >
              <div class="columns is-gapless">
                <div
                  v-for="(progres, index2) in 10"
                  :key="index2"
                  class="column"
                  style="
                    background-color: black;
                    margin-right: 2px;
                    height: 8px;
                    z-index: 10;
                    width: 100%;
                  "
                >
                  <div
                    v-if="
                      parseFloat(detail.score) / 10 -
                        Math.floor(parseFloat(detail.score) / 10) ===
                        0
                    "
                    style="width: 100%; height: 100%"
                  >
                    <div
                      v-if="index2 < parseFloat(detail.score) / 10"
                      style="
                        width: 100%;
                        height: 100%;
                        background-color: #ffcf24;
                      "
                    />
                  </div>
                  <div v-else style="width: 100%; height: 100%">
                    <div
                      v-if="index2 < Math.trunc(parseFloat(detail.score) / 10)"
                      style="
                        width: 100%;
                        height: 100%;
                        background-color: #ffcf24;
                      "
                    />
                    <div
                      v-if="
                        index2 === Math.trunc(parseFloat(detail.score) / 10)
                      "
                      style="height: 100%; background-color: #ffcf24"
                      :style="{
                        width:
                          Number(
                            (
                              detail.score / 10 -
                              Math.trunc(parseFloat(detail.score) / 10)
                            ).toFixed(2)
                          ) *
                          100 +
                          '%'
                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="
              detail.description !== '' ||
                detail.description !== null ||
                detail.description !== 'null' ||
                detail.description !== undefined ||
                detail.description !== 'undefined' ||
                typeof detail.description !== 'null' ||
                typeof detail.description !== 'undefined'
            "
            class="column skillcard2"
          >
            {{ detail.description | truncate(420, '...') }}
          </div>
          <div v-else class="column skillcard2">
            {{ detail.description | truncate(420, '...') }}
          </div>
        </div>
      </div>
      <div class="columns is-gapless tab-menu-skillcard">
        <div v-if="selected1" class="column is-narrow tab-menu">
          <IconTabSkill style="z-index: 99" />
          <div class="text-tab" style="color: white">
            All Module Results
          </div>
        </div>
        <div v-else class="column is-narrow tab-menu" @click="tes(1, true)">
          <IconTabSkill style="z-index: 99" />
          <div class="text-tab">
            All Module Results
          </div>
        </div>
        <div v-if="selected2" class="column tab-menu" style="margin-left: 10px">
          <IconTabSkill2 style="margin-left: -17px" />
          <div class="text-tab" style="color: white">
            All Achievements
          </div>
        </div>
        <div
          v-else
          class="column tab-menu"
          style="margin-left: 10px"
          @click="tes(2, true)"
        >
          <IconTabSkill2 style="margin-left: -17px" />
          <div class="text-tab">
            All Achievements
          </div>
        </div>
      </div>
      <div class="content-menu-skillcard" style="margin-left: 20px">
        <v-row
          v-if="selected1"
          style="width: 930px; margin-left: 3px; margin-top: 10px"
        >
          <v-col
            v-for="(item, index) in Allmodule.data"
            :key="index"
            cols="12"
            sm="3"
          >
            <!-- {{ Allmodule.data[0] }} -->
            <div
              style="
                background-color: #fcfeff;
                height: 100%;
                padding-bottom: 20px;
                width: 100%;
              "
            >
              <img
                :src="item.thumbnail"
                style="
                  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                  border-radius: 4px;
                  height: 128px;
                  object-fit: cover;
                  width: 100%;
                "
              >

              <div
                style="
                  font-family: 'Roboto';
                  font-style: italic;
                  font-weight: 500;
                  font-size: 14px;
                  display: flex;
                  align-items: center;

                  color: #000000;
                  padding-left: 10px;
                "
              >
                {{ item.module }}
              </div>
              <div
                class="module-score-tab1"
                style="
                  padding-left: 10px;
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 16px;
                  padding-top: 10px;
                  color: #6c6c6c;
                "
              >
                Module Score: {{ item.score }}%
              </div>
              <div
                style="
                  padding-left: 10px;
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 16px;

                  color: #6c6c6c;
                "
              >
                Emotional Intelligence: {{ item.tax_bloom }}
              </div>
            </div>
          </v-col>
          <v-pagination
            v-if="Allmodule.total > 8"
            v-model="currentPage"
            :length="Math.ceil(Allmodule.total / 4)"
            class="my-2"
            style="margin-left: auto; margin-right: auto"
            @input="getDataModule()"
          />
        </v-row>
        <div v-if="selected2" style="width: 900px">
          <v-row
            no-gutters
            style="width: 900px; height: 200px; margin-bottom: 10px"
          >
            <v-col
              v-for="(item2, index2) in Allarchivements.data"
              :key="index2"
              cols="12"
              sm="4"
            >
              <div style="position: relative">
                <img
                  src="~/assets/images/skillcard/AchievementFrame.png"
                  style="height: 104.594px; width: 299.984px"
                >
                <img
                  style="
                    position: absolute;
                    top: 13px;
                    left: 10px;
                    height: 85px;
                    width: 90px;
                    object-fit: cover;
                  "
                  :src="item2.thumbnail"
                >
                <div
                  style="
                    position: absolute;
                    top: 4px;
                    left: 110px;
                    font-family: 'Barlow';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 17px;
                    line-height: 22px;
                    display: flex;
                    align-items: center;

                    white-space: nowrap;
                    width: 180px;
                    color: #1951a5;
                  "
                >
                  {{ item2.title | truncate(20, '...') }}
                </div>
                <div
                  style="
                    position: absolute;
                    top: 37px;
                    left: 110px;
                    font-family: 'Barlow';
                    font-style: normal;
                    font-weight: 400;
                    line-height: 17px;
                    font-size: 15px;
                    align-items: center;
                    width: 180px;
                    color: white;
                  "
                >
                  {{ item2.description | truncate(65, '...') }}
                </div>
              </div>
            </v-col>
          </v-row>
          <div style="margin-top: 30px">
            <v-pagination
              v-if="Allarchivements.total > 8"
              v-model="currentPage2"
              :length="Math.ceil(Allarchivements.total / 6)"
              class="my-2"
              style="margin-left: auto; margin-right: auto; top: 200px"
              @input="getDataArchivements()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  filters: {
    truncate (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  },
  data () {
    return {
      id: '',
      active_el: 0,
      selected1: true,
      selected2: false,
      currentPage: 1,
      currentPage2: 1
    }
  },

  computed: {
    ...mapState({
      detail: (state) => {
        return state.skillcard.detail
      },
      Allmodule: (state) => {
        return state.skillcard.module
      },
      Allarchivements: (state) => {
        return state.skillcard.archivements
      }
    })
  },
  mounted () {
    // eslint-disable-next-line dot-notation
    this.id = this.$router.currentRoute.query['id']
    this.getData()
    this.getDataModule()
    this.getDataArchivements()
  },
  methods: {
    tes (id, number) {
      if (id === 1) {
        this.selected1 = true
        this.selected2 = false
      }
      if (id === 2) {
        this.selected1 = false
        this.selected2 = true
      }
    },
    getData () {
      this.$store
        .dispatch('skillcard/fetchDetailSkill', this.id)
        .then((response) => {
          // console.log(response)
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
    getDataModule () {
      this.$store
        .dispatch('skillcard/fetchAllModule', {
          id: this.id,
          page: this.currentPage
        })
        .then((response) => {
          // console.log(response.data.data.modules)
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
    getDataArchivements () {
      this.$store
        .dispatch('skillcard/fetchAllArchivement', this.currentPage2)
        .then((response) => {
          console.log(response.data.data)
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
    }
  }
}
</script>
<style lang="scss" scoped>
.main-detail {
  z-index: 2;
  min-height: 1000px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('../../assets/images/skillcard/bg-detail.svg');
  .header-skillcard {
    position: absolute;
    height: 200px;
    width: 100%;
    .card-profile {
      position: relative;
      left: 80px;
      top: 0px;
      .background-button {
        top: 20px;
        position: absolute;
        left: 22px;
        width: 360px;
        z-index: 5;
      }
      .icon-button {
        z-index: 6;
        top: 15px;
        left: 39px;
        height: 45px;

        position: absolute;
      }
      .name-card {
        font-style: normal;
        font-weight: 600;
        z-index: 6;
        position: absolute;
        top: 26px;
        left: 77px;
        font-size: 21.6px;
        color: #ffffff;
      }
      .profile-container {
        z-index: 1;
        position: relative;
        .btn-profile {
          top: 54px;
          left: 34px;

          position: relative;
          .text-profile {
            position: absolute;
            top: 2.4px;
            left: 40px;
            font-weight: 400;
            font-size: 16px;
            display: flex;
            align-items: center;
            color: #000000;
            text-align: center;
          }
        }
      }
    }
    .btn-back {
      top: -40px;
      right: 22px;
      position: relative;
      float: right;
      z-index: 10;
      cursor: pointer;
      .text-btn {
        top: 11px;
        z-index: 1000;
        left: 70px;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        position: absolute;

        color: #c7d6fd;
      }
    }
  }
  .content-skillcard {
    position: absolute;
    width: 100%;
    height: 900px;
    margin-right: 84px;
    margin-left: 174px;
    margin-top: 20px;
    background-image: url('~@/assets/images/skillcard/bg-detail2.svg');
    .card-title1 {
      position: relative;
      top: 100px;
      left: -15px;
      .background-button {
        position: absolute;
        left: 22px;
        z-index: 5;
        width: 302px;
        height: 30.4px;
      }
      .name-card {
        z-index: 6;
        position: absolute;
        top: 1.4px;
        left: 44px;
        font-size: 25.6px;
        color: #ffffff;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
      }
    }
    .card-title2 {
      position: relative;
      top: 150px;
      width: 990px;
      .background-button {
        position: absolute;
        left: 0px;
        z-index: 5;
        height: 90px;
        width: 100%;
      }
      .skillcard1 {
        width: 280px;
        .card-title1 {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 221px;
          height: 48px;
          .background-button {
            position: absolute;
            left: 49px;
            top: 20px;
            z-index: 5;
            width: 100%;
            height: 100%;
          }
          .name-card {
            z-index: 6;
            position: absolute;
            top: 32px;
            left: 77px;
            font-size: 25.6px;
            color: #ffffff;
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
          }
          .score-card {
            z-index: 6;
            position: absolute;
            top: 21px;
            left: 170px;
            font-size: 25.6px;
            color: #ffcf24;
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 600;
            font-size: 27px;
          }
        }
      }
      .skillcard2 {
        font-family: 'Barlow';
        font-style: italic;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        z-index: 10;
        color: #ffffff;
        height: 90px;
      }
    }
    .tab-menu-skillcard {
      margin-top: 200px;
      margin-left: 30px;
      .tab-menu {
        cursor: pointer;
        .text-tab {
          margin-top: -31px;
          margin-left: 15px;
          font-family: 'Barlow';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          display: flex;
          align-items: center;

          color: #7a89af;
        }
      }
    }
  }
}
</style>
