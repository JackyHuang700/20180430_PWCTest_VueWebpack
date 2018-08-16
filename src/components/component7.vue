<template>
  <!-- 原來組件參考: https://codepen.io/flannerydesigns/pen/dPYzNR -->
  <div class="vid-container">
    <img class="bgvid" src="../assets/compoent7.jpg" alt="">
    <div class="inner-container">
      <img class="bgvidBlur" src="../assets/compoent7.jpg" alt="">
      <div class="box">
        <h4>Hello</h4>
        <div class="column">
          <label for="account">帳號</label>
          <input type="text" id="account" placeholder="" />
        </div>
        <div class="column">
          <label for="password">密碼</label>
          <input type="text" id="password" placeholder="" />
        </div>

        <button type="submit">登入</button>
        <p>
          <span>忘記密碼</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component7'
}
</script>
<style lang="css">
/* hide navbar */
nav.navbar {
  display: none;
}

/* 內容開始 */
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}

.vid-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bgvid {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-attachment: fixed;
  z-index: -1;
}

.bgvidBlur {
  height: 500%;
  width: 200%;
  display: inline-block;
  position: absolute;

  top: -198%;
  left: -50%;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  z-index: -1;
}

.inner-container {
  height: 400px;
  width: 35%;
  max-width: 100%;
  display: block;
  box-shadow: 0 0 8px rgba(218, 217, 217, 0.43);
  z-index: 1;
  position: relative;
  overflow: hidden;
  transition: width 0.3s linear;
  border-radius: 10px;
}

.box {
  color: #fff;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: inline-block;
  box-shadow: 5px 10px #000;
}

.box h4 {
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 30px 0;
  margin-bottom: 0;
}

.box .column {
  width: 60%;
  height: auto;
  margin: 20px auto;
  /* border: 1px solid red; */
}

.box label {
  /* display: inline-block; */
  width: 30%;
  height: 48px;
  line-height: 48px;
  float: left;
  text-align: right;
  padding-right: 20px;
  /* padding: 6px; */
  font-size: 20px;
  margin-bottom: 0px;
}

.box input {
  display: inline-block;
  width: 70%;
  height: 48px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(102, 102, 102, 0.423);
  border-radius: 5px;
  transition: width 0.3s linear;
}

.box inpnut:focus,
.box inpnut:active {
  outline: none;
}

.box button[type='submit'] {
  background-color: #2ecc71;
  border: 0;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  width: 280px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  border-radius: 5px;
  transition: width 0.3s linear, background-color 0.3s linear,
    transform 0.2s linear;
}

.box button[type='submit']:active {
  background-color: hsla(145, 63%, 42%, 0.459);
}

.box button[type='submit']:hover {
  background-color: #44de84;
  transform: scale(1.1);
}

.box p {
  font-size: 14px;
  text-align: center;
}

.box p span {
  cursor: pointer;
  color: #666;
  transition: color 0.3s linear;
}
.box p span:hover {
  color: rgb(174, 174, 174);
}

@media only screen and (max-width: 680px) {
  .inner-container {
    width: 75%;
    height: auto;
  }

  .box h4 {
    font-size: 25px;
    padding: 15px 0 10px 0;
  }

  .box .column {
    width: 85%;
  }

  .box label {
    width: 100%;
    padding-left: 0;
    text-align: left;
  }

  .box input {
    width: 100%;
  }

  .box button[type='submit'] {
    width: 80%;
  }
}

@media only screen and (max-width: 375px) {
  .inner-container {
    width: 90%;
  }
}
</style>
