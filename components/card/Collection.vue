<template>
  <div class="collection-list">
    <div class="bg-white" />
    <div class="bg-yellow" />
    <div class="img-collection">
      <img
        :src="display"
        class="image-card"
      >
      <div class="bg-blue" />
    </div>
    <div class="text-title">
      <div class="name-title">
        {{ modules }}
      </div>
      <div class="sub-title">
        By
        <span v-if="studio">
          {{ studio }}
        </span>
        <span v-else>
          -
        </span>
        <br>
        {{ academic }}
      </div>
    </div>
    <div class="module-details">
      <div class="module-name">
        MODULE DETAILS
      </div>
      <div class="module-activities">
        {{ activity }} Activities <br>
        {{ discussion }} Discussions
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modules: {
      type: String,
      default: ''
    },
    studio: {
      type: String,
      default: ''
    },
    academic: {
      type: String,
      default: ''
    },
    discussion: {
      type: String,
      default: '0'
    },
    activity: {
      type: String,
      default: '0'
    },
    display: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.collection-list {
  height:72px;
  width:100%;
  position: relative;
  margin-bottom:23px;
  display: flex;
  align-items: center;
  cursor:pointer;
  // justify-content: center;
  .img-collection {
    position:relative;
    height:76px;
    width:124px;
    .image-card{
      position:absolute;
      z-index:4;
      top:-3px;
      height:76px;
      width:120px;
    }
    .bg-blue {
      position:absolute;
      z-index:3;
      background-color:#48D8FF;
      height:76px;
      width:100%;
    }
  }
  .text-title {
    z-index:3;
    margin-left:27px;
    .name-title {
      // font-family: 'Arlon';
      font-style: normal;
      font-weight: 600;
      font-size: 16.8687px;
      color: #3B69BC;
    }
    .sub-title {
      // font-family: 'Arlon';
      font-style: normal;
      font-weight: 500;
      font-size: 12.6515px;
      color: #859BB5;
      line-height:15px;
    }
  }
  // .hr-vertical {
  //   border-right:1px solid #5D93CE
  // }
  .module-details {
    z-index:3;
    right:42px;
    position: absolute;
    border-left:1px solid #5D93CE;
    padding-left:32px;
    .module-name {
      // font-family: 'Arlon';
      font-style: normal;
      font-weight: 400;
      font-size: 16.8687px;
      color: #3E4D68;
    }
    .module-activities {
      // font-family: 'Arlon';
      font-style: normal;
      font-weight: 500;
      font-size: 12.6515px;
      color: #859BB5;
      line-height: 14px;
    }
  }
  .bg-white {
    position: absolute;
    z-index:2;
    background-color: white;
    height:72px;
    width:100%;
  }
  .bg-yellow {
    position: absolute;
    z-index:1;
    background-color: #FFF380;
    height:72px;
    width:100%;
    left:8px;
    top:8px;
  }
}
</style>
