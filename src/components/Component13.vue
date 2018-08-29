<template>
  <div class="body center">
    <div>
      <!-- 複製出去要刪除 -->
      <a class="referenceInfo" href="https://www.youtube.com/watch?v=UJvL4i6UPbY&t=0s&index=63&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb">
        作品參考: Transparent Login Form with floating Placeholder Text - Pure CSS Label Slide Up on Focus - No jQuery
      </a>
    </div>
    <div class="box">
      <h2>Login</h2>
      <form action="">
        <div class="inputBox">
          <input type="text" required />
          <label for="">username</label>
        </div>
        <div class="inputBox">
          <input type="password" required />
          <label for="">password</label>
        </div>
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component13'
}
</script>
<style lang="scss">
/* hide navbar */
nav.navbar {
  display: none;
}

.referenceInfo {
  position: absolute;
  top: calc(15%);
  left: 50%;
  transform: translateX(-50%);
}
/* 內容開始 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

$templateColor: #fff;
$templateColor2: #03a9f4;

.body {
  width: 100%;
  height: 100vh;
  background: url('../assets/Component13/bgc.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: inline-block;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  padding: 40px;
  box-sizing: border-box;

  h2 {
    color: $templateColor;
    padding: 0;
    text-align: center;
    margin: 0 0 50px;
  }

  .inputBox {
    position: relative;

    input {
      width: 100%;
      padding: 10px 0;
      font-style: 10px;
      color: $templateColor;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid $templateColor;
      outline: none;
      background-color: transparent;
      letter-spacing: 1px;
      transition: border-bottom 0.3s ease-in-out;

      &:focus,
      &:valid {
        border-bottom-color: $templateColor2;
      }

      /* 讓label移動 */
      &:focus ~ label,
      &:valid ~ label {
        top: -18px;
        left: 0;
        color: $templateColor2;
        font-size: 12px;
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      color: $templateColor;
      padding: 10px 0;
      font-size: 16px;
      pointer-events: none;
      transition: top 0.3s ease-in-out, color 0.3s ease-in-out,
        font-size 0.3s ease-in-out;
      letter-spacing: 1px;
    }
  }

  [type='submit'] {
    text-align: center;
    padding: 10px 30px;
    color: $templateColor;
    background-color: $templateColor2;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
  }
}

@media screen and (max-width: 576px) {
  .box {
    margin: 0 20px;
  }
}
</style>