<template>
  <svg
    width="21"
    height="30"
    viewBox="0 0 21 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.75">
      <path
        d="M11.2314 6.64983C11.2314 9.19452 9.21966 11.2125 6.79283 11.2125C4.36601 11.2125 2.3543 9.19452 2.3543 6.64983C2.3543 4.10513 4.36601 2.08712 6.79283 2.08712C9.21966 2.08712 11.2314 4.10513 11.2314 6.64983Z"
        :stroke="bgColor"
        stroke-width="2.4"
      />
      <path
        d="M0.490234 19.3937C0.490234 15.9133 3.31169 13.0918 6.79213 13.0918C10.2726 13.0918 13.094 15.9133 13.094 19.3937V23.2613H0.490234V19.3937Z"
        :fill="bgColor"
      />
    </g>
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
