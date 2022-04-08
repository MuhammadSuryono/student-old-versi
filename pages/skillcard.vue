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
          <div class="btn-back">
            <IconBackBtn />
            <div class="text-btn">
              BACK
            </div>
          </div>
        </NuxtLink>
        <div class="main-skillcard columns">
          <div class="column is-narrow skillcard1">
            <img
              src="~/assets/images/skillcard/profile.png"
              class="img-profile"
            >
          </div>
          <div class="column skillcard2">
            <div class="card-title">
              <img
                src="~/assets/images/skillcard/bg-title.svg"
                class="background-button"
              >
              <!-- <img
                src="~/assets/images/skillcard/icon_skillcard.png"
                class="icon-button"
              > -->
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
                  src="~/assets/images/skillcard/info.png"
                  class="icon-button"
                >
                <div class="name-card">
                  THE WARRIOR
                </div>
              </div>
              <div class="card-title2">
                <div class="name-card">
                  Growth • Self-evaluation • Teamwork
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
            <!-- <PProgress /> -->
            <div class="content-skill">
              <div
                v-for="(i, index) in data"
                :key="index"
                class="columns is-gapless list-card"
              >
                <div class="column title-card">
                  {{ index + 1 }}. {{ i.name }}
                </div>
                <div class="column">
                  <div class="columns is-gapless">
                    <div
                      v-for="progres in 10"
                      :key="progres"
                      class="column"
                      style="
                        background-color: black;
                        margin-right: 2px;
                        width: 100%;
                        height: 13px;
                        margin-top: 4px;
                      "
                    >
                      <!-- a -->
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
  name: 'SkillcardPage',
  layout: 'default',

  data () {
    return {
      progress: 25,
      isLoading: false,
      data: [
        {
          name: 'Achievement Highlights',
          percent: 90
        },
        {
          name: 'Emotional Intelligence',
          percent: 90
        },
        {
          name: 'Commit to Lifetime Learning',
          percent: 90
        },
        {
          name: 'Tech Savviness',
          percent: 90
        },
        {
          name: 'Critical & Analytical Thinking',
          percent: 90
        },
        {
          name: 'Data literacy',
          percent: 90
        },
        {
          name: 'Adaptability & Flexibility',
          percent: 90
        },
        {
          name: 'Creativity & Innovation',
          percent: 90
        },
        {
          name: 'Cultural Competence',
          percent: 90
        },
        {
          name: 'Energy Environmental Awareness',
          percent: 90
        },
        {
          name: 'Problem Solving',
          percent: 90
        },
        {
          name: 'Interpersonal Skill',
          percent: 90
        },
        {
          name: 'Technical Skill',
          percent: 90
        }
      ]
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
      nameDecoration: (state) => {
        return state.decoration.nameDecoration
      }
    })
  },
  mounted () {
    this.getDataDecoration()
  },
  methods: {
    getDataDecoration () {
      this.isLoading = true
      this.$store
        .dispatch('decoration/fetchCurrentDecoration')
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-img {
  height: 100%;
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
      height: 80vh;
      margin-left: 150px;
      margin-top: 130px;
      background-color: rgba(239, 253, 253, 0.7);
      // opacity: 0.8;
      border: 2.45672px solid #2b5ba3;
      box-sizing: border-box;
      border-radius: 8.18906px;
      transform: skew(-5deg);
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
        .skillcard1 {
          .img-profile {
            height: 368.55px;
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
                left: 99px;

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
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(41, 97, 181, 0.8) 0%,
              rgba(21, 76, 160, 0.8) 232.06%
            );
            border: 0.818906px solid #103865;
            box-sizing: border-box;
            border-radius: 3.27562px;
            transform: skew(-10deg);
            padding-top: 15px;
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
              }
              .shell {
                height: 13px;
                width: 250px;
                padding: 3px;
                list-style-type: none;
                overflow: hidden;
                .bar {
                  background: #02243f;
                  width: 20px;
                  height: 13px;
                  span {
                    float: right;
                    padding: 4px 5px;
                    color: #fff;
                    font-size: 0.7em;
                  }
                }
              }
            }
            .list-card:nth-child(odd) {
              background-color: rgba(84, 138, 218, 0.5);
            }

            .list-card:nth-child(even) {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
}
</style>
