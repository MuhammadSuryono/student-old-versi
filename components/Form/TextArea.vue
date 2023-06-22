<template>
  <div class="textarea-container">
    <div class="border" />
    <textarea
      v-model="inputVal"
      rows="4"
      cols="50"
      class="input-card"
      maxlength="250"
    />
    <div class="max-length" style="">
      {{ value.length }}/250
    </div>
    <img
      src="~/assets/images/edit_profile/decor_about_me_1.svg"
      style="position:absolute;top:2px;left:2px;"
    >
    <img
      src="~/assets/images/edit_profile/decor_about_me_2.svg"
      style="position:absolute;top:2px;right:2px;"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.textarea-container {
  position: relative;
  .border {
    height: 100%;
    content: '';
    position: absolute;
    inset: 0;
    background: #c7d8e2;
    clip-path: polygon(
      0 0,
      calc(100% - 12px) 0,
      100% 12px,
      100% 100%,
      12px 100%,
      0 calc(100% - 12px),
      0 0,
      3px 3px,
      3px calc(100% - 12px - 0.83px),
      calc(12px + 0.83px) calc(100% - 3px),
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 3px) calc(12px + 0.83px),
      calc(100% - 12px - 0.83px) 3px,
      3px 3px
    );
  }

  .max-length {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 500;
    font-size: 11px;
    text-align: right;
    color: #999999;
    position: absolute;
    bottom: 3px;
    right: 16px;
  }
  .input-card {
    position: absolute;
    width: 95%;
    height: 138px;
    margin-top: 11px;
    padding-left: 13px;
    z-index: 3;
    overflow: hidden;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #2e5799;
    resize: none;
  }

  .input-card:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 18px;
}

::-webkit-scrollbar-thumb {
    height: 6px;
    border: 2px solid transparent;
    background-clip: padding-box;
    background-color: #E2E2E2;
    -webkit-border-radius: 7px;
}

::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
}

::-webkit-scrollbar-corner {
    background-color: transparent;
}

}
</style>
