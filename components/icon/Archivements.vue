<template>
  <svg
    width="23"
    height="25"
    viewBox="0 0 23 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      opacity="0.75"
      x="-1.67847"
      width="17.5697"
      height="17.5697"
      rx="5.2"
      transform="matrix(0.699364 -0.714766 0.699364 0.714766 0.444609 11.2077)"
      :stroke="bgColor"
      stroke-width="2.4"
    />
    <path
      opacity="0.75"
      d="M11.8799 6.38522L13.2754 10.7748H17.7914L14.1379 13.4877L15.5334 17.8773L11.8799 15.1644L8.2263 17.8773L9.62184 13.4877L5.96829 10.7748H10.4843L11.8799 6.38522Z"
      :fill="bgColor"
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
