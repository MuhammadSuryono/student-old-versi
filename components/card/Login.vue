<template>
  <div>
    <div class="container-login">
      <!-- <img src="~/assets/images/login/logo.png" class="img-logo"> -->
      <div class="border-outside" />
      <div class="card-login">
        <div class="has-text-centered title">
          Login to your Account
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.container-login {
    position:relative;
    .border-outside {
      position:absolute;
      top:-5px;
      left:-5px;
      background: linear-gradient(22.88deg, rgb(168, 245, 255, 0.35) 0%, rgb(195, 244, 249, 0.35) 52%, rgb(223, 242, 242, 0.35) 100%);
      height:450px;
      width:310px;
    }
    .card-login {
      width: 300px;
      height: 400px;
      z-index: 1;
      background: rgb(255, 255, 255, 0.85);
      padding: 30px 25px 10px 25px;
      .title {
        width: 100%;
        font-size: 23px;
        font-weight: bold;
        margin-bottom: 50px;
        color: black;
      }
      .inputs {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25 rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      .captcha {
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
      }
      .btn-login {
        color: #ffffff;
        background: #002171;
        border-radius: 5px;
        border: 0px;
        font-size: 14px;
        width: 100%;
        margin-top: 10px;
      }
    }
  }
</style>