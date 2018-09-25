<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="http://www.lw-prosystem.com/#/" target="_blank">
        <h5>lw-prosystem</h5>
      </a>
    </div>
    <div class="col-md-12 mt-4 body">
      <div class="singleAboutDetail" v-for="n in 4" :key="n">
        <div class="aboutImg">
          <img class="imgResponsive" src="http://fakeimg.pl/360x216/" alt="">
        </div>
        <div class="aboutDetail">
          <div class="circleText">
            <h2>美學</h2>
          </div>
          <h3>Reproduced Signal</h3>
          <p>我們希望: 不論聲音或影像，可在任何材質及比例的空間裡，不增加也不減少的完美重播收錄的所有訊息。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_18'
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

$signalWidth: 360px;
$signalMargin: 0.5%;

.body {
  position: relative;
  width: 100%;
  max-width: $signalWidth * 4 + 62px;
  height: 100%;
  display: block;
  text-align: center;
  margin: 0 auto;
}

.singleAboutDetail {
  display: block;
  width: 99%;
  max-width: $signalWidth;
  height: auto;
  padding: 0;
  margin: $signalMargin;
  background-color: transparent;
  float: left;

  &:hover {
    .aboutDetail {
      background-color: #000;
    }
  }

  .aboutImg {
    display: block;

    .imgResponsive {
      max-width: 100%;
      height: auto;
      display: block;
    }

  }

  .aboutDetail {
    height: 50%;
    width: 100%;
    background-color: #737373;
    border-top: 2px solid #fff;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    .circleText {
      background-color: #fff;
      border-radius: 50%;
      color: transparent;
      display: block;
      width: 100px;
      height: 100px;
      position: relative;
      top: -50px;
      left: 0;
      margin: 0 auto;
      overflow: hidden;

      h2 {
        width: 100%;
        height: auto;
        color: #383838;
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 100;
      }
    }

    h3 {
      margin-bottom: 20px;
      font-size: 36px;
      margin-top: -40px;
      display: block;
      text-align: center;
    }
    p {
      font-size: 13px;
      padding: 0 25px;
      padding-bottom: 30px;
      margin-top: 40px;
      display: block;
      text-align: center;
    }

    h3,
    p {
      color: white;
    }
  }
}


@media screen and (max-width: 767px) {
  .singleAboutDetail{
    float: none;
    display: block;
    margin: 0 auto;

    &:nth-child(n+2){
      margin-top: 25px;
    }
  }
}
</style>