<template>
  <div
    class="bg-img"
    :style="{ backgroundImage: 'url(' + pathDecoration + ')' }"
  >
    <div class="layer">
      <div class="card-profile">
        <img src="~/assets/images/bg-button.png" class="background-button">
        <img
          src="~/assets/images/skillcard/icon_skillcard.png"
          class="icon-button"
        >
        <div class="name-card">
          My Skillcard
        </div>
      </div>
      <div class="content-skillcard">
        <NuxtLink to="/">
          <div class="btn-back" @click="buttonAudio()">
            <IconBackBtn />
            <div class="text-btn">
              BACK
            </div>
          </div>
        </NuxtLink>
        <div class="main-skillcard columns">
          <div class="column is-narrow skillcard1">
            <div class="img-profile">
              <IconBgAvatar :bg-color="avatar_bgcolor" />
              <img :src="images" class="avatar-image">
              <img :src="avatar_icon" class="avatar-icon">
            </div>
            <div class="skillcard-name">
              <img
                src="~/assets/images/skillcard/SkillcardNameFrame.svg"
                class="skillcard-img"
              >
              <div class="skillcard-title">
                {{ fullname }}
              </div>
              <div class="skillcard-type">
                {{ dataSkillcard.student_type }} Student
              </div>
            </div>
          </div>
          <div class="column skillcard2">
            <div class="card-title">
              <img
                src="~/assets/images/skillcard/bg-title.svg"
                class="background-button"
              >
              <div class="name-card">
                Soft Skills Cluster
              </div>
            </div>
            <div class="tab-menu">
              <div class="card-title1">
                <img
                  src="~/assets/images/skillcard/bg-title-v2.svg"
                  class="background-button"
                >
                <img
                  v-if="cluster != null"
                  :src="cluster.icon"
                  class="icon-button"
                >
                <div class="name-card">
                  <span v-if="!isLoading_1">
                    {{ dataSkillcard.name }}
                  </span>
                  <Skeleton v-else style="width: 150px; margin-top: 2px" />
                </div>
              </div>
              <div class="card-title2">
                <div class="name-card">
                  <span v-if="!isLoading_1">
                    {{ dataSkillcard.attribute }}
                  </span>
                  <span v-else>
                    <Skeleton
                      style="width: 220px; margin-top: 10px; margin-left: 10px"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="tab-category">
              <div class="card-title1">
                <img
                  src="~/assets/images/skillcard/bg-title.svg"
                  class="background-button"
                >
                <div class="name-card">
                  Skill Chart
                </div>
              </div>
              <div class="card-title2">
                <img
                  src="~/assets/images/skillcard/icon-info.svg"
                  class="background-button"
                >
                <div class="name-card">
                  Click skill names for more information.
                </div>
              </div>
            </div>
            <div class="content-skill" style="width: 670px; left: -10px">
              <span v-if="!isLoading_2">
                <div
                  v-for="(i, index) in dataSkills"
                  :key="index"
                  class="columns is-gapless list-card"
                  style="height: 25px"
                >
                  <div class="column title-card">
                    {{ index + 1 }}. {{ i.skill }}
                  </div>
                  <div class="column" style="transform: skew(-10deg)">
                    <div class="columns is-gapless" />
                  </div>
                </div>
              </span>
              <span v-else>
                <Skeleton
                  style="width: 640px; margin-top: 10px; margin-left: 10px"
                />
                <Skeleton
                  style="width: 640px; margin-top: 10px; margin-left: 10px"
                />
                <Skeleton
                  style="width: 640px; margin-top: 10px; margin-left: 10px"
                />
                <Skeleton
                  style="width: 640px; margin-top: 10px; margin-left: 10px"
                />
                <Skeleton
                  style="width: 640px; margin-top: 10px; margin-left: 10px"
                />
                <Skeleton
                  style="width: 640px; margin-top: 10px; margin-left: 10px"
                />
                <Skeleton
                  style="
                    width: 640px;
                    margin-top: 10px;
                    margin-bottom: 20px;
                    margin-left: 10px;
                  "
                />
              </span>
            </div>
            <div
              v-if="!isLoading_2"
              class="content-skill"
              style="
                background: transparent;
                border-color: transparent;
                transform: skew(0deg);
                position: absolute;
                top: 158px;
                margin-bottom: 40px;
              "
            >
              <div
                v-for="(i, index) in dataSkills"
                :key="index"
                class="columns is-gapless list-card2"
              >
                <div class="column title-card" @click="goDetail(i)">
                  <!-- {{ index + 1 }}. {{ i.skill }} -->
                </div>
                <div class="column" style="transform: skew(-10deg)">
                  <div class="columns is-gapless">
                    <div
                      v-for="(progres, index2) in 10"
                      :key="index2"
                      class="column"
                      style="
                        background-color: black;
                        margin-right: 3px;
                        height: 13px;
                        width: 90%;
                        margin-top: 4px;
                        z-index: 1;
                      "
                    >
                      <div
                        v-if="
                          parseFloat(i.point) -
                            Math.floor(parseFloat(i.point)) ===
                            0
                        "
                        style="width: 100%; height: 100%"
                      >
                        <div
                          v-if="index2 < parseFloat(i.point)"
                          style="
                            width: 100%;
                            height: 100%;
                            background-color: #ffcf24;
                          "
                        />
                      </div>
                      <div v-else style="width: 100%; height: 100%">
                        <div
                          v-if="index2 < Math.trunc(parseFloat(i.point))"
                          style="
                            width: 100%;
                            height: 100%;
                            background-color: #ffcf24;
                          "
                        />
                        <div
                          v-if="index2 === Math.trunc(parseFloat(i.point))"
                          style="height: 100%; background-color: #ffcf24"
                          :style="{
                            width:
                              Number(
                                (
                                  i.point - Math.trunc(parseFloat(i.point))
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
              <!-- <div class="card-title2">
                <img
                  src="~/assets/images/skillcard/download.png"
                  class="background-button"
                >
                <div class="name-card">
                  Download PDF
                </div>
              </div> -->
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
  name: 'SkillcardPage',
  layout: 'default',

  data () {
    return {
      cluster: null,
      avatar_bgcolor: '',
      avatar_icon: '',
      progress: 0,
      isLoading_1: false,
      isLoading_2: true,
      isLoading: true
    }
  },

  computed: {
    ...mapState({
      decoration: (state) => {
        return state.decoration.currentDecoration.data.data.background
      },
      pathDecoration: (state) => {
        return state.decoration.pathDecoration
      },
      users: (state) => {
        return state.user.users
      },
      images: (state) => {
        return state.user.images
      },
      fullname: (state) => {
        return state.user.fullname
      },
      dataSkillcard: (state) => {
        return state.skillcard.data
      },
      dataSkills: (state) => {
        return state.skillcard.skills
      }
    })
  },
  mounted () {
    this.$store.dispatch('user/get')
    this.avatar_bgcolor = this.users.faction.avatar_bgcolor
    this.avatar_icon = this.users.faction.faction
    this.getDataAll()
  },
  methods: {
    buttonAudio () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
    },
    getDataAll () {
      this.getDataDecoration()
      this.getDataPersonalityCluster()
      this.getDataAllSkills()
    },
    getDataAllSkills () {
      this.isLoading_2 = true
      this.$store
        .dispatch('skillcard/fetchAllSkill')
        .then((response) => {
          this.isLoading_2 = false
        })
        .catch((error) => {
          this.isLoading_2 = false
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
    getDataPersonalityCluster () {
      this.isLoading_1 = true
      this.$store
        .dispatch('skillcard/fetchPersonalityCluster')
        .then((response) => {
          this.isLoading_1 = false
          this.cluster = response.data.data.personality_cluster
        })
        .catch((error) => {
          this.isLoading_1 = false
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
    getDataDecoration () {
      this.isLoading = true
      console.log('getDataDecoration : ')
      this.$store
        .dispatch('decoration/fetchCurrentDecoration')
        .then((response) => {
          console.log('res : ', response)
          this.isLoading = false
        })
        .catch((error) => {
          console.log('error : ', error)
          this.isLoading = false
          this.$toast.error(error.response.data.message, {
            position: 'top-center',
            duration: 5000
          })
          if (error.status === 401) {
            this.$auth.logout()
            this.$router.push('/login')
          }
        })
    },
    goDetail (x) {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push({ path: '/skillcard/detail?id=' + x.id })
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  height: 890px;
  width: 100%;
  z-index: 2;
  background-size: cover;
  background-position: center;

  .layer {
    background-color: rgba(44, 107, 202, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .card-profile {
      position: relative;
      left: 80px;
      top: 20px;
      .background-button {
        top: 90px;
        position: absolute;
        left: 22px;
        z-index: 5;
      }
      .icon-button {
        z-index: 6;
        top: 92px;
        left: 30px;
        position: absolute;
      }
      .name-card {
        font-style: normal;
        font-weight: 600;
        z-index: 6;
        position: absolute;
        top: 92px;
        left: 77px;
        font-size: 25.6px;
        color: #ffffff;
      }
    }
    .content-skillcard {
      width: 1050px;
      // height: 100%;
      padding-bottom: 40px;
      margin-left: 150px;
      margin-top: 130px;
      background-color: rgba(239, 253, 253, 0.7);
      border: 2.45672px solid #2b5ba3;
      box-sizing: border-box;
      border-radius: 8.18906px;
      transform: skew(-5deg);
      z-index: 1;
      .btn-back {
        float: right;
        margin-right: 15px;
        margin-top: 15px;
        position: relative;
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
      .main-skillcard {
        margin-top: 30px;
        transform: skew(5deg);
        z-index: 2;
        .skillcard1 {
          z-index: 2;
          .img-profile {
            height: 368.55px;
            position: Relative;
            top: 0px;
            z-index: 2;
            // transform: skew(-1deg);
            .avatar-image {
              position: absolute;
              left: 0px;
              // top: 0px;
              height: 368.55px;
              max-width: 298px;
              bottom: 0px;
              z-index: 3;
              object-fit: cover;
            }
            .avatar-icon {
              position: absolute;
              right: 7px;
              top: -66px;
              z-index: 1;
              // width: 200px;
              width: 280px;
              object-fit: cover;
              -o-object-position: 0% 40%;
              object-position: 80px;
              // top: -75px;
            }
          }
          .skillcard-name {
            margin-bottom: 40px;
            position: relative;
            top: 10px;
            left: -8px;
            z-index: 1;
            .skillcard-title {
              position: absolute;
              top: 18px;
              z-index: 2;
              font-weight: 500;
              font-size: 32px;
              line-height: 14px;
              /* or 44% */
              width: 273px;
              text-align: center;

              color: #ffffff;
            }
            .skillcard-type {
              position: absolute;
              top: 65px;
              z-index: 2;
              font-weight: 500;
              font-size: 16px;
              line-height: 14px;
              /* or 44% */
              width: 256px;
              text-align: center;

              color: #ffffff;
            }
          }
        }
        .skillcard2 {
          .card-title {
            position: relative;
            // left: 0px;
            // top: 0px;
            .background-button {
              // top: 0px;
              position: absolute;
              left: 22px;
              z-index: 5;
              width: 184.15px;
              height: 28px;
            }
            .icon-button {
              z-index: 6;
              // top: 0px;
              left: 30px;
              position: absolute;
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
          .tab-menu {
            position: relative;
            top: 26px;
            left: 9px;
            .card-title1 {
              .background-button {
                // top: 0px;
                position: absolute;
                left: 22px;
                z-index: 5;
                width: 248.35px;
                height: 56.74px;
              }
              .icon-button {
                z-index: 6;
                height: 37.75px;
                width: 39.93px;
                left: 42px;
                top: 6px;
                position: absolute;
              }
              .name-card {
                z-index: 6;
                position: absolute;
                font-family: 'Barlow';
                font-weight: 600;
                font-size: 22px;
                display: flex;
                align-items: center;
                text-align: center;

                top: 9.4px;
                left: 90px;

                color: #ffcf24;
              }
            }
            .card-title2 {
              top: 2.6px;
              position: relative;
              left: 266px;
              width: 248.35px;
              height: 52px;
              background: linear-gradient(
                180deg,
                rgba(41, 97, 181, 0.8) 0%,
                rgba(21, 76, 160, 0.8) 232.06%
              );
              border: 0.818906px solid #103865;
              box-sizing: border-box;
              border-radius: 3.27562px;

              transform: skew(-10deg);
              .name-card {
                z-index: 6;
                transform: skew(10deg);
                position: absolute;
                font-family: 'Barlow';

                font-size: 17.6537px;
                line-height: 22px;
                text-align: center;

                color: #ffffff;

                top: 1.8px;
                left: 0px;
              }
            }
          }
          .tab-category {
            position: relative;
            top: 45px;
            .card-title1 {
              .background-button {
                position: absolute;
                left: 22px;
                z-index: 5;
                width: 151px;
                height: 28px;
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
              left: 160px;
              top: 9px;
              .background-button {
                position: absolute;
                left: 22px;
                z-index: 5;
                width: 14px;
                height: 14px;
              }
              .name-card {
                z-index: 6;
                position: absolute;
                top: -1px;
                left: 41px;
                font-size: 25.6px;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 15px;
                display: flex;
                align-items: center;

                color: #50748d;
              }
            }
          }
          .content-skill {
            position: relative;
            top: 95px;
            width: 660.74px;
            background: linear-gradient(
              180deg,
              rgba(41, 97, 181, 0.8) 0%,
              rgba(21, 76, 160, 0.8) 232.06%
            );
            border: 0.818906px solid #103865;
            box-sizing: border-box;
            border-radius: 3.27562px;
            transform: skew(-10deg);
            padding-top: 5px;
            .list-card {
              transform: skew(10deg);
              margin-bottom: 0px;
              padding-left: 20px;
              padding-top: 3px;
              padding-bottom: 3px;
              padding-right: 40px;
              // margin-top: 10px;
              .title-card {
                font-family: 'Barlow';
                font-weight: 600;
                font-size: 14px;
                line-height: 19px;
                display: flex;
                align-items: center;
                color: #ffffff;
                cursor: pointer;
                transform: skew(-10deg);
                z-index: 20;
              }
              .title-card:hover {
                text-decoration: underline;
              }
              .shell {
                position: absolute;
                top: 4px;
                height: 13px;
                width: 300px;
                list-style-type: none;
                overflow: hidden;
                margin-top: 3px;
                .bar {
                  background: green;
                  width: 20px;
                  height: 13px;
                  z-index: 2;
                }
              }
            }
            .list-card:nth-child(odd) {
              background-color: rgba(84, 138, 218, 0.5);
            }

            .list-card:nth-child(even) {
              background-color: transparent;
            }
            .list-card2 {
              transform: skew(10deg);
              margin-bottom: 2px;
              padding-left: 20px;
              padding-top: 3px;
              padding-bottom: 3px;
              padding-right: 40px;
              // margin-top: 10px;
              .title-card {
                font-family: 'Barlow';
                font-weight: 600;
                font-size: 14px;
                line-height: 19px;
                display: flex;
                align-items: center;
                color: #ffffff;
                cursor: pointer;
              }
              .shell {
                position: absolute;
                top: 4px;
                height: 13px;
                width: 300px;
                list-style-type: none;
                overflow: hidden;
                margin-top: 3px;
                .bar {
                  background: green;
                  width: 20px;
                  height: 13px;
                  z-index: 2;
                }
              }
            }
            .list-card2:nth-child(odd) {
              background-color: transparent;
            }

            .list-card2:nth-child(even) {
              background-color: transparent;
            }

            .card-title2 {
              margin-top: 20px;
              margin-bottom: 20px;
              top: 2.6px;
              position: relative;
              left: 400px;
              width: 225px;
              height: 30px;
              cursor: pointer;
              .name-card {
                z-index: 6;
                position: absolute;
                font-family: 'Barlow';
                font-size: 17.6537px;
                line-height: 22px;
                text-align: center;
                color: #ffffff;
                top: 4px;
                left: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
