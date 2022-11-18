import Vue from 'vue'
import Buefy from 'buefy'
import AOS from 'aos'
import 'aos/dist/aos.css'

import UnityWebgl from 'unity-webgl'

import InfiniteLoading from 'vue-infinite-loading'
import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'
import VueAudio from 'vue-audio-better'

// import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   attempt: 1,
//   listenEvents: ['scroll']
// })

Vue.use(VueAudio)
Vue.component('Unity', UnityWebgl)
Vue.use(Buefy)
Vue.use(AOS)
Vue.component('infinite-loading', InfiniteLoading)

Vue.use(VueVideoPlayer)
