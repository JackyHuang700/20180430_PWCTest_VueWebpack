<template>
  <div class="body center">
    <div class="ersLoginBox">
      <div class="title">
        <img src="http://fakeimg.pl/163x60/" alt="">
      </div>
      <div class="content">
        <h3>泰睿思資訊雲端系統</h3>
        <form action="">
          <div class="inputGroup">
            <input type="text" name="" id="eMail" placeholder="E-mail">
            <label class="" for="eMail">
              <i class="fas fa-user"></i>
            </label>
            <div class="inputLine"></div>
            <div class="alert">E-mail格式錯誤</div>
          </div>
          <div class="inputGroup">
            <input type="text" name="" id="password" placeholder="密碼">
            <label class="" for="password">
              <i class="fas fa-user"></i>
            </label>
            <div class="inputLine"></div>
            <div class="alert">密碼錯誤</div>
          </div>
          <button type="submit">登入系統</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component15'
}
</script>
<style lang="scss" scoped>
/* hide navbar */
nav.navbar {
  display: none;
}

body {
  overflow: hidden;
}

/* 內容開始 */
$loginBoxHeight: 420px;
$loginBoxTitleHeight: 70px;
$ersLoginBox: 450px;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

body{
    min-width: $ersLoginBox;
}

.body {
  position: relative;
  background-image: linear-gradient(#d9e1ec, #bfd6f9);
  width: 100%;
  height: 100vh;
  -webkit-perspective: 1000;
  // min-width: $ersLoginBox;
}

.ersLoginBox {
  width: 100%;
  max-width: $ersLoginBox;
  height: $loginBoxHeight;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2), 0 15px 50px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-property: border-radius, box-shadow;

  &:hover {
    border-radius: 6px;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .title {
    position: relative;
    display: block;
    height: $loginBoxTitleHeight;
    line-height: $loginBoxTitleHeight;
    position: relative;
    background-color: #f5f7fb;
    padding: 0 15px;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .content {
    position: relative;
    display: block;
    height: $loginBoxHeight - $loginBoxTitleHeight;
    padding: 30px 50px;
    background-color: #fff;
    border-radius: 0 0 6px 6px;

    h3 {
      text-align: center;
      font-weight: 500;
      line-height: 1.1;
      letter-spacing: 1px;
      display: block;
      width: 100%;
      margin-bottom: 25px;
      font-size: 18px;
      color: #1c202b;
    }

    $inputGroupPadding: 15px;
    $labelWidth: 16px;
    $inputPadding: 12px;
    .inputGroup {
      position: relative;
      padding: 0 $inputGroupPadding;
      margin-bottom: 30px;
      > * {
        display: block;
      }

      label {
        position: absolute;
        top: 0;
        left: 30px;
        height: 34px;
        line-height: 34px;
        width: $labelWidth;
        text-align: center;
        transition-property: transform;
        transition-duration: .3s;
        transition-timing-function: ease-in-out;

        i {
          font-size: 21px;
          color: #7e92ad;
        }
      }

      input {
        height: auto;
        width: 100%;
        border: none;
        box-shadow: none;
        font-size: 14px;
        height: 34px;
        padding: 6px 12px;
        padding-left: $labelWidth + $inputPadding + $inputGroupPadding;
        background-color: #fff;
        border-radius: 4px;
        color: #555;

        &:focus {
          outline: none;

          ~ .inputLine {
            &::before {
              width: 100%;
            }
          }
          ~ label {
            transform: scale(.8);
          }
        }

        &::placeholder {
          color: hsla(214, 22%, 59%, 0.435);
        }
      }

      .inputLine {
        position: relative;
        height: 1px;
        bottom: 0;
        width: 100%;

        background-color: #d9e1ec;

        &::before {
          content: '';
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 0;
          width: 0;
          background-color: #1c202b;
          transition-property: width;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
        }
      }

      .alert {
        width: 100%;
        color: #a94442;
        text-align: right;
        font-size: 12px;
      }
    }
  }

  [type='submit'] {
    display: block;
    background-color: #0073c6;
    box-shadow: inset 0 -5px #016ca0;
    height: 50px;
    line-height: 38px;
    cursor: pointer;
    padding: 6px 12px;
    width: 100%;
    outline: none;
    border: 1px solid #ccc;
    color: #ccc;
    font-size: 14px;
    -webkit-appearance: button;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition-property: background-color, box-shadow, height, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:hover {
      background-color: #048cf3;
      box-shadow: inset 0 0 #016ca0;
      height: 48px;
      color: #fff;
      border: 2px solid #fff;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>