<template>
  <div class="form-input-box">
    <div class="label-form">
      <slot name="label" />
    </div>
    <div class="data-form">
      <input v-model="inputVal" class="input-card" placeholder="">
      <div class="layer-1" />
      <div class="layer-2" />
      <div class="box-layer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'white'
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
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.form-input-box {
  .label-form {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 10.2235px;
    color: #2E5799;
    margin-bottom:4px;
    margin-left:20px;
  }
  .data-form {
    position: relative;
    .input-card {
      position: absolute;
      width:100%;
      height:20px;
      padding-right:20px;
      padding-top:12px;
      padding-left: 20px;
      z-index:3;

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #2E5799;

    }
    .input-card:focus{
      outline: none;
    }
    .box-layer {
      position: absolute;
      z-index:2;
      width: 12.7px;
      height: 12.64px;
      left: -5px;
      top: 8px;
      transform: skew(-5deg);
      background: #688FB3;
      border: 1.06873px solid #CBCFCE;
    }
    .layer-1 {
      position: absolute;
      z-index:2;
      width: 424.32px;
      height: 30.91px;
      background: #F2F2F2;
      border: 0.6px solid #23519B;
      // opacity: 0.7;
      transform: skew(-15deg)
    }
    .layer-2 {
      position: absolute;
      z-index:1;
      width: 424.32px;
      left:5px;
      top:5px;
      height: 30.91px;
      background: #FFF380;
      mix-blend-mode: multiply;
      opacity: 0.7;
      transform: skew(-15deg)
    }
  }
}
</style>
