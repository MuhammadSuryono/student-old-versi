<template>
  <div
    class="bg-img"
    :style="{ backgroundImage: 'url(' + pathDecoration + ')' }"
  >
    <div class="hero-body">
      <v-row align="center" justify="center">
        <v-col align="center" justify="center">
          <div class="cluster-card">
            <img :src="cluster.avatar" class="avatar-img">
            <div class="header-cluster">
              <div class="results">
                <div class="head-results">
                  Your Result:
                </div>
                <div class="desc-results">
                  You are {{ cluster.name }}
                </div>
              </div>
              <div class="skill-cluster">
                <div class="cluster-text">
                  {{ attribute }}
                </div>
              </div>
              <img class="bg-left" src="~/assets/images/leftangle.png">
              <img class="border-top" src="~/assets/images/Intersect.svg">
              <img class="border-bottom" src="~/assets/images/Vector35.svg">
            </div>
            <img class="triangle" src="~/assets/images/traingle-left.svg">
            <div class="body-cluster">
              {{ cluster.description }}
            </div>
            <img src="~/assets/images/border-bottom.png">
          </div>
          <div class="back-home no-selected" @click="goBack()">
            Continue to Home
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ClusterPage',
  layout: 'default',

  data () {
    return {
      attribute: '',
      cluster: {},
      isLoading: false
    }
  },

  computed: {
    ...mapState({
      pathDecoration: (state) => {
        return state.decoration.pathDecoration
      },
      images: (state) => {
        return state.user.images
      }
      // cluster: (state) => {
      //   return state.user.cluster
      // }
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    goBack () {
      this.$store.commit('user/SET_BTN_AUDIO', true)
      this.$router.push('/')
    },
    getData () {
      console.log('getdata')
      this.isLoading = true
      this.$store
        .dispatch('user/getCluster')
        .then((response) => {
          this.isLoading = false
          this.cluster = response.data.data.personality_cluster
          this.attribute = this.cluster.attribute.join(' • ')
          this.$toast('asd', {
            position: 'top-center',
            duration: 5000
          })
        })
        .catch((error) => {
          this.isLoading = false
          console.log('error : ', error.response.data.status)
          if (error.response.data.status === 404) {
            this.$toast.error(
              'You will be redirected to the personality cluster test page in 5 seconds',
              {
                position: 'top-center',
                duration: 7000
              }
            )

            const self = setInterval(() => {
              this.$router.push('/personality')
              clearInterval(self)
            }, 5000)
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
  .cluster-card {
    margin-left: 80px;
    position: relative;
    .avatar-img {
      position: absolute;
      top: 41px;
      left: 266px;
      z-index: 8;
      height: 81px;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: 40% 0%;
      object-position: 40% 0%;
      transform: scale(3);
    }
    .header-cluster {
      position: relative;
      width: 708.4px;
      height: 214.8px;
      background: #0c3e8d;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      --g: #000, #0000 1deg 179deg, #000 180deg;
      --mask: conic-gradient(from -45deg at top 20px right 20px, var(--g)) 100%
        0 /100% 100% no-repeat;
      -webkit-mask: var(--mask);
      mask: var(--mask);
      border-radius: 10px;
      .results {
        padding-left: 30px;
        padding-top: 28px;
        color: white;
        .head-results {
          padding-left: 200px;
          padding-top: 8px;
        }
        .desc-results {
          font-size: 37px;
          padding-left: 170px;
          padding-top: 0px;
          text-align: center;
        }
      }
      .skill-cluster {
        z-index: 2;
        height: 70.32px;
        width: 100%;
        background: #effdfe;
        box-shadow: inset 1px 7px 5px #eff4fb;
        border-radius: 5px;
        bottom: 0px;
        position: absolute;
        .cluster-text {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          display: flex;
          align-items: center;
          color: #32558b;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-30%, -50%);
        }
      }
      .bg-left {
        position: absolute;
        top: -4px;
        left: -27px;
        z-index: 3;
      }
      .border-top {
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .border-bottom {
        position: absolute;
        bottom: 74px;
        right: 15px;
      }
    }
    .triangle {
      position: absolute;
      top: 55px;
      right: 188px;
    }
    .body-cluster {
      height: 250px;
      width: 655px;
      background-color: rgba(30, 84, 149, 0.9);
      color: #f1fefe;
      font-size: 17px;
      padding: 15px;
      overflow-x: auto;
    }
  }
  .back-home {
    margin-top: 30px;
    height: 36px;
    width: 206.35px;
    --g: #000, #0000 1deg 179deg, #000 180deg;
    --mask: conic-gradient(from -135deg at top 6px left 6px, var(--g)) 0 0 /51% 100%
        no-repeat,
      conic-gradient(from 45deg at bottom 6px right 6px, var(--g)) 100% 100%/51%
        100% no-repeat;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    background: #1e4a91;
    color: white;
    padding-top: 5px;
    cursor: pointer;
  }
}
</style>
