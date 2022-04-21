<template>
  <svg
    width="60"
    height="94"
    viewBox="0 0 60 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_868_37848)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M52.4966 27.2938C52.4966 31.7285 51.4053 35.9073 49.4776 39.5744L28.4175 85.9356C27.546 87.8542 24.8207 87.8542 23.9492 85.9356L2.00299 37.6237C1.99395 37.6038 2.0085 37.5812 2.03036 37.5812C2.05187 37.5812 2.06643 37.5593 2.05808 37.5395C0.732776 34.3899 0 30.9277 0 27.2938C0 12.7409 11.7518 0.943481 26.2483 0.943481C40.7448 0.943481 52.4966 12.7409 52.4966 27.2938ZM26.2486 42.2571C35.1267 42.2571 42.3239 35.032 42.3239 26.1194C42.3239 17.2068 35.1267 9.98166 26.2486 9.98166C17.3705 9.98166 10.1733 17.2068 10.1733 26.1194C10.1733 35.032 17.3705 42.2571 26.2486 42.2571Z"
        :fill="bgColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_868_37848"
        x="0"
        y="0.943481"
        width="59.0403"
        height="92.9748"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="3.27187" dy="3.27187" />
        <feGaussianBlur stdDeviation="1.63594" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_868_37848"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_868_37848"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#154CA0'
    }
  }
}
</script>
