<template>
  <div class="vid-container">
    <img class="bgvid" src="../assets/compoent7.jpg" alt="">
    <div class="inner-container">
      <img class="bgvidBlur" src="../assets/compoent7.jpg" alt="">
      <div class="box">
        <h4>Hello</h4>
        <input type="text" placeholder="帳號" />
        <input type="text" placeholder="密碼" />
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

  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  z-index: -1;
}

.inner-container {
  height: 400px;
  width: 50%;
  display: block;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.43);
  z-index: 1;
  position: relative;
  overflow: hidden;
  transition: width .3s linear;
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
}

.box input {
  display: block;
  width: 300px;
  height: auto;
  margin: 20px auto;
  padding: 15px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.13);
  border: 0;
    transition: width .3s linear;
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
  transition: background-color .3s linear, transform .3s linear;
    transition: width .3s linear;
}

.box button[type='submit']:active {
  background-color: hsla(145, 63%, 42%, 0.459);
}

.box button[type='submit']:hover{
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
  transition: color .3s linear;
}
.box p span:hover {
  color: rgb(174, 174, 174);
}

@media only screen and (max-width: 576px) {
  .inner-container {
    width: 75%;
  }

  .box input {
    width: 90%;
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
