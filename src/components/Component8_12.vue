<template>
  <div class="col-md-12 mt-4 body">
    <div class="text-center mx-5">
      <a href="https://account.microsoft.com/?ref=sfcaccount&refd=login.live.com" target="_blank">
        <h2>Microsoft Store Dashboard</h2>
      </a>
    </div>
    <div class="wrap">
      <div class="box" v-for="i in 8" :key="i">
        <h3>付款與帳單</h3>
        <div class="content">
          <img src="../assets/Component8/Component8_12/bg.png" alt="">
          <div class="header">更快速地結帳</div>
          <div class="detail">為帳戶新增付款方式，更快速地在 Microsoft Store 結帳。</div>
          <a href="" target="_blank">新增付款方式
            <i class="fas fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_12'
}
</script>
<style lang="scss" scoped>
$templateWidth: 380;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.body {
  background-color: #f2f2f2;
}

.wrap {
  width: 100%;
  max-width: $templateWidth * 4px;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  .box {
    display: inline-block;
    width: 23%;
    max-width: $templateWidth * 1px;
    height: 330px;
    margin-top: 25px;
    margin-right: 2%;

    h3 {
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      height: 10%;
      background-color: transparent;

      &::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 100%;
        position: relative;
        vertical-align: middle;
      }
    }

    .content {
      background-color: #fff;
      height: 90%;
      padding: 10px 10px 20px;
      text-align: left;

      &:hover {
        transform: translate3d(0, -4px, 0);
        box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.2);
        transition-property: box-shadow, transform;
        transition-duration: 0.6s;
        // transition-timing-function: cubic-bezier(.16,1,.29,.99);
      }

      > * {
        display: inline-block;
        width: 100%;
        overflow: hidden;
      }

      img {
        display: block;
        background-repeat: no-repeat;
        background-attachment: fixed;
        width: 60%;
        margin: 0 auto;
        height: 55%;
      }
      .header {
        height: 10%;
        text-align: center;
        font-weight: 500;

        &::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 100%;
          position: relative;
          vertical-align: middle;
        }
      }
      .detail {
        height: 25%;
        text-align: center;
      }
      a {
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        // border: 1px solid red;
        height: 10%;
        font-size: 15px;

        i {
          padding-left: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 1083px) {
  .wrap {
    text-align: left;
    padding-left: 2%;
    .box {
      width: 31.33333%;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    padding: 0 1%;
    .box {
      width: 48%;
    }
  }
}

@media screen and (max-width: 539px) {
  .wrap {
    padding: 0;
    text-align: center;
    .box {
      margin: 0;
      margin-bottom: 20px;
      width: 100%;
    }
  }
}
</style>