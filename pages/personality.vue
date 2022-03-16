<template>
  <div>
  asd
  <!-- {{ unityContext }} -->
    <!-- <Unity :unity="unityContext" width="800px" height="600px" /> -->
  </div>
</template>
<style lang="scss" scoped></style>

<script>
// import UnityWebgl from 'unity-webgl'
// import loaderUrl from '../assets/build/vueconnect3.loader.js'
// import dataUrl from '../assets/build/vueconnect3.data'
// import frameworkUrl from '../assets/build/vueconnect3.framework.js'
// import codeUrl from '../assets/build/vueconnect3.wasm'


export default {
  name: 'HomePage',
  layout: 'login',
  components: {
    Unity: UnityWebgl.vueComponent
  },
  data () {
    return {
      // unityContext: new UnityWebgl({
      //   loaderUrl: loaderUrl,
      //   dataUrl: dataUrl,
      //   frameworkUrl: "",
      //   codeUrl: ""
      // })
    }
  },
  // computed: {
  //   receiveMessage (event) {
  //     console.log(event)
  //   }
  // },
  mounted () {
    // window.addEventListener('message', this.receiveMessage)
    this.getData()
  },
  methods: {
   async getData () {
      await this.$axios
        .get('https://aziziqbal.com/build/vueconnect_pc.loader.js')
        .then((res) => {
          // this.$message('Success download file')
          // const url = window.URL.createObjectURL(new Blob([res]))
          console.log("res : ", res)
          console.log("url : ", url)
          console.log("new Blob([res]) : ", new Blob([res]))
        })
        .catch((error) => {
          console.log("error", error)
          // this.$notify.error({
          //   title: 'Error',
          //   message: error
          // })
        })
    },
  }
}
</script>
<style>
</style>