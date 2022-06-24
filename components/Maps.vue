<template>
  <div style="position: relative; width: 1085px; height: 607px; z-index: 5">
    <!-- <div> -->
    <img
      src="~/assets/images/maps/maps-container.png"
      style="position: absolute; z-index: 5; top: 0px"
    >
    <div
      @mouseover="hover1 = true"
      @mouseleave="hover1 = false"
      @click="goTravel('Library')"
    >
      <IconLocation v-if="hover1" class="loc-1" bg-color="#ffcf24" />
      <IconLocation v-else class="loc-1" bg-color="#154CA0" />
    </div>
    <div
      @mouseover="hover2 = true"
      @mouseleave="hover2 = false"
      @click="goTravel('Faction')"
    >
      <IconLocation v-if="hover2" class="loc-2" bg-color="#ffcf24" />
      <IconLocation v-else class="loc-2" bg-color="#154CA0" />
    </div>
    <div @mouseover="hover3 = true" @mouseleave="hover3 = false">
      <IconLocation v-if="hover3" class="loc-3" bg-color="#ffcf24" />
      <IconLocation v-else class="loc-3" bg-color="#154CA0" />
    </div>
    <div class="btn-back" @click="closeMaps()">
      <img
        src="~/assets/images/back-btn.png"
        style="width: 98.15px;height: 36.49px;x"
      >
    </div>
    <img v-if="hover1" src="~/assets/images/maps/popup.png" class="popup-1">
    <img v-if="hover2" src="~/assets/images/maps/popup2.png" class="popup-2">
    <div v-if="hover2" class="popup-2-text">
      Faction
    </div>
    <!-- </div> -->
    <div
      v-if="showLoc"
      style="
        position: relative;
        padding: 48px 50px 50px 55px;
        height: 100%;
        width: 100%;
        z-index: 7;
      "
    >
      <div
        style="
          background: rgba(10, 10, 10, 0.7);
          height: 100%;
          width: 100%;
          z-index: 7;
        "
      />
      <img
        src="~/assets/images/maps/border.svg"
        style="position: absolute; z-index: 5; top: 20px; left: 29px"
      >
      <div>
        <img class="center-petra" src="~/assets/images/maps/goget.svg">
      </div>
      <div class="text-lib">
        Travel to the {{ destination }}?
      </div>
      <div class="btn-edit" @click="goLibrary()">
        <img
          src="~/assets/images/btn-petra.png"
          style="width: 224.22px; height: 36px"
        >
        <div class="text-edit" style="top: 7px">
          Let's go!
        </div>
      </div>
      <div class="btn-edit" style="top: 400px" @click="showLoc = false">
        <img
          src="~/assets/images/btn-petra.png"
          style="width: 224.22px; height: 36px"
        >
        <div class="text-edit" style="top: 7px">
          Cancel
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      showLoc: false,
      destination: ''
    }
  },
  methods: {
    closeMaps () {
      this.$store.commit('user/SET_MAPS')
    },
    goTravel (x) {
      this.destination = x
      this.showLoc = true
    },
    goLibrary () {
      if (this.destination === 'Library') {
        this.$router.push('/library')
      }
      if (this.destination === 'Faction') {
        this.$router.push('/faction')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.text-lib {
  left: 467px;
  top: 290px;
  position: absolute;
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 10;
  color: #082337;
}
.loc-1 {
  position: absolute;
  z-index: 6;
  bottom: 200px;
  left: 200px;
  cursor: pointer;
}
.loc-2 {
  position: absolute;
  z-index: 6;
  top: 180px;
  right: 500px;
  width: 30.39px;
  cursor: pointer;
  height: 48.57px;
}
.loc-3 {
  position: absolute;
  z-index: 6;
  bottom: 150px;
  right: 400px;
  width: 31.95px;
  height: 51.24px;
  cursor: pointer;
}
.btn-back {
  position: absolute;
  z-index: 6;
  top: 80px;
  right: 65px;
  width: 121.2px;
  height: 45.23px;
  cursor: pointer;
}
.popup-1 {
  position: absolute;
  z-index: 6;
  bottom: 180px;
  left: 247px;
  cursor: pointer;
}
.popup-2 {
  position: absolute;
  z-index: 6;
  top: 138px;
  right: 237px;
  cursor: pointer;
}
.popup-2-text {
  position: absolute;
  z-index: 7;
  top: 248px;
  right: 330px;
  color: black;
  font-style: italic;
}
.center-petra {
  margin: auto;
  position: absolute;
  top: -150px;
  left: 0;
  bottom: 0;
  right: 0;
}
.btn-edit {
  left: 440px;
  top: 350px;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  .text-edit {
    position: absolute;
    top: 2px;
    color: #c7d6fd;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
}
</style>
