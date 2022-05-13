import Vue from 'vue'
import Buefy from 'buefy'
import AOS from 'aos'
import 'aos/dist/aos.css'

import UnityWebgl from 'unity-webgl'

import InfiniteLoading from 'vue-infinite-loading'
import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'
Vue.component('Unity', UnityWebgl)
Vue.use(Buefy)
Vue.use(AOS)
Vue.component('infinite-loading', InfiniteLoading)

Vue.use(
  VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */
)
