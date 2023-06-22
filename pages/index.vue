<template>
  <div
    v-if="!isLoading"
    class="bg-img"
    :style="{ backgroundImage: 'url(' + pathDecoration + ')' }"
  />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  layout: 'default',

  data () {
    return {
      isLoading: false,
      audio: null
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
      },
    questDashboard: (state) => {
        return state.quest.data
      }
    })
  },

  mounted () {
    // this.$store.commit('user/SET_BG_AUDIO', true)
    this.getDataDecoration()
    this.getData()
    this.questLogin()
  },
  methods: {
    playsound () {
      this.audio = new Audio(require('@/assets/audio/audio_bg.mp3'))
      this.audio.play()
    },
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
        })
    },
    getData () {
      this.$store
        .dispatch('quest/getTaskToday')
        .then((res) => {
          
        })
        .catch(() => {
        })
    },
    questLogin(){
      this.$axios
            .post(`https://dev.petraverse.id/daily/quest/api/quest/collection/task/today/complete`, {
         
              task_id: this.questDashboard.id,
              collection_id: this.questDashboard.collection_id,
              collection_task_code: 'login_today'
            })
            .then((res) => {
              console.log('res : ', res)
              this.$store
        .dispatch('quest/getReward')
           
            })
            .catch((error) => {
              this.$toast.error(error.response.data.message, {
                position: 'top-center',
                duration: 5000
              })
            })
    }
  }
}
</script>
<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
.bg-img {
  background-image: url('~@/assets/images/home/bg_home.png');
  height: 100%;
  width: 100%;
  // height: auto;
  // width: auto;
  background-size: cover;
  background-position: center;
  
}
</style>
