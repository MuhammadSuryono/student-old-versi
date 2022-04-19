<template>
  <div
    class="bg-img"
    :style="{ backgroundImage: 'url(' + pathDecoration + ')' }"
  >
    <!-- {{ pathDecoration }} -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  layout: 'default',

  data () {
    return {
      isLoading: false
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
  background-image: url('~@/assets/images/home/bg_home.png');
  height: 100%;
  width: 100%;
  // height: auto;
  // width: auto;
  background-size: cover;
  background-position: center;
}
</style>
