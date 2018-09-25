<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://spa.e-record.com.tw/accounting-sign/24741882/scanning" target="_blank">
        <h5>好看的動畫特效</h5>
      </a>
    </div>
    <div class="col-md-12">

      <div class="domContainer" style="display:block;margin: 0 auto;">
        <h3 class="animatedDelay animated fadeInDown">請選擇您要上傳的憑證類別</h3>
        <div class="animatedDelay animated zoomIn domBtn">銷項憑證(收入)</div>
        <div class="animatedDelay animated zoomIn domBtn">進項憑證(費用)</div>
        <div class="animatedDelay animated zoomIn domBtn">.txt或excel檔案</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Component8_28'
}
</script>
<style lang="scss" scoped>
$domContainer_maxWidth: 1100px;
.domContainer {
  width: 100%;
  max-width: $domContainer_maxWidth;
  height: auto;
  min-height: 1px;
  margin-bottom: 20px;

  background-color: #fff;

  &,
  > * {
    box-sizing: border-box;
  }

  h3 {
    display: block;
    text-align: center;
    color: #999;
    margin: 0;
    height: 100%;
    // padding: 20px auto 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 30px;
    letter-spacing: 4px;
  }

  .domBtn {
    box-shadow: 0 1px 6px 2px rgba(0, 115, 198, 0.091);
    border: 1px solid rgba(0, 115, 198, 0.091);
    color: #8c9db7;
    background-color: #f5f7fb;
    cursor: pointer;
    width: 100%;
    max-width: $domContainer_maxWidth/3 - 3px;
    height: 150px;
    line-height: 150px;
    border: 1px solid red;
    display: inline-block;
    border-radius: 4px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.078);
    font-size: 25px;
    letter-spacing: 4px;
    > * {
      color: #8c9db7;
    }
  }
}

.animatedDelay{
  animation-delay: 5s;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fadeInDown {
  animation-name: fadeInDown;
}

.zoomIn {
  animation-name: zoomIn;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
</style>