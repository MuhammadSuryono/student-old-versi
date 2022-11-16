<template>
  <div class="form-input-box">
    <div class="label-form">
      <slot name="label" />
    </div>
    <div class="data-form">
      <textarea
        v-model="data"
        rows="4"
        cols="50"
        class="input-card"
        placeholder=""
        maxlength="150"
        @keyup.enter="sendData"
      />
      <div class="layer-1" />
      <div class="layer-2" />
      <div class="box-layer" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    sendData () {
      if (this.data !== '') {
        this.$emit('changeText', this.data)
        this.data = ''
      }
    }
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
      height:62px;
      padding-right:20px;
      padding-top:12px;
      padding-left: 20px;
      z-index:3;
      overflow:hidden;
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
      left: -7px;
      top: 13px;
      transform: skew(-5deg);
      background: #688FB3;
      border: 1.06873px solid #CBCFCE;
    }
    .layer-1 {
      position: absolute;
      z-index:2;
      width: 424.32px;
      height: 71.56px;
      background: #F2F2F2;
      border: 0.6px solid #23519B;
      left:-5px;
      transform: skew(-12deg)
    }
    .layer-2 {
      position: absolute;
      z-index:1;
      width: 424.32px;
      left:0px;
      top:5px;
      height: 71.56px;
      background: #FFF380;
      mix-blend-mode: multiply;
      opacity: 0.7;
      transform: skew(-12deg)
    }
  }
}
</style>
