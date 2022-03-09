<template>
  <div>
    <div id="message-area">
      Message goes here
    </div>
    <div>
      <input id="input-string" type="text">
      <button type="button" onclick="ToUnity()">
        Send
      </button>
    </div>
    <div id="unity-container" class="unity-desktop">
      <canvas id="unity-canvas" width="960" height="600" />
      <div id="unity-loading-bar">
        <div id="unity-logo" />
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" />
        </div>
      </div>
      <div id="unity-warning" />
      <div id="unity-footer">
        <div id="unity-webgl-logo" />
        <div id="unity-fullscreen-button" />
        <div id="unity-build-title">
          Vue_Comm
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>

<script>
export default {
  name: 'HomePage',
  layout: 'login',
  mounted () {
    this.unityShowBanner()
  },
  methods: {
    unityShowBanner (msg, type) {
      const container = this.$el.querySelector('#unity-container')
      const canvas = this.$el.querySelector('#unity-canvas')
      const loadingBar = this.$el.querySelector('#unity-loading-bar')
      const progressBarFull = this.$el.querySelector('#unity-progress-bar-full')
      const fullscreenButton = this.$el.querySelector(
        '#unity-fullscreen-button'
      )
      const warningBanner = this.$el.querySelector('#unity-warning')
      const div_message = this.$el.querySelector('#message-area')
      const input_message = this.$el.querySelector('#input-string')

      function unityShowBanner (msg, type) {
        function updateBannerVisibility () {
          warningBanner.style.display = warningBanner.children.length
            ? 'block'
            : 'none'
        }
        const div = document.createElement('div')
        div.innerHTML = msg
        warningBanner.appendChild(div)
        if (type == 'error') {
          div.style = 'background: red; padding: 10px;'
        } else {
          if (type == 'warning') {
            div.style = 'background: yellow; padding: 10px;'
          }
          setTimeout(function () {
            warningBanner.removeChild(div)
            updateBannerVisibility()
          }, 5000)
        }
        updateBannerVisibility()
      }
      const buildUrl = 'Build'
      const loaderUrl = buildUrl + '/vueconnect3.loader.js'
      const config = {
        dataUrl: buildUrl + '/vueconnect3.data',
        frameworkUrl: buildUrl + '/vueconnect3.framework.js',
        codeUrl: buildUrl + '/vueconnect3.wasm',
        streamingAssetsUrl: 'StreamingAssets',
        companyName: 'DefaultCompany',
        productName: 'Vue_Comm',
        productVersion: '1.0',
        showBanner: unityShowBanner
      }

      // By default Unity keeps WebGL canvas render target size matched with
      // the DOM size of the canvas element (scaled by window.devicePixelRatio)
      // Set this to false if you want to decouple this synchronization from
      // happening inside the engine, and you would instead like to size up
      // the canvas DOM size and WebGL render target sizes yourself.
      // config.matchWebGLToCanvasSize = false;

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = 'unity-mobile'
        // Avoid draining fillrate performance on mobile devices,
        // and default/override low DPI mode on mobile browsers.
        config.devicePixelRatio = 1
        unityShowBanner('WebGL builds are not supported on mobile devices.')
      } else {
        canvas.style.width = '960px'
        canvas.style.height = '600px'
      }
      loadingBar.style.display = 'block'

      const script = document.createElement('script')
      script.src = loaderUrl
      let unityBox
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + '%'
        })
          .then((unityInstance) => {
            unityBox = unityInstance
            loadingBar.style.display = 'none'
            fullscreenButton.onclick = () => {
              unityInstance.SetFullscreen(1)
            }
          })
          .catch((message) => {
            alert(message)
          })
      }
      window.FromUnity = function (str) {
        div_message.innerHTML = str
      }
      ToUnity = function () {
        unityBox.SendMessage('CanvasMain', 'FromWeb', input_message.value)
      }
      document.body.appendChild(script)
    }
  }
}
</script>
