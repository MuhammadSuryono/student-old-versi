<template>
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M73.3956 23.035L73.8379 22.7378V22.2049V7.36609C73.8379 4.05238 71.1516 1.36609 67.8379 1.36609H7.83789C4.52418 1.36609 1.83789 4.05237 1.83789 7.36608V22.2049V22.694L2.22388 22.9942L6.0653 25.9826V47.8136L2.17718 51.2359L1.83789 51.5345V51.9865V67.3661C1.83789 70.6798 4.52418 73.3661 7.83789 73.3661H67.8379C71.1516 73.3661 73.8379 70.6798 73.8379 67.3661V51.9865V51.4768L73.4255 51.1774L68.7138 47.7559V26.1808L73.3956 23.035Z"
      :fill="bgColor"
      fill-opacity="0.75"
      :stroke="bgColor"
      stroke-width="2"
    />
  </svg>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>
