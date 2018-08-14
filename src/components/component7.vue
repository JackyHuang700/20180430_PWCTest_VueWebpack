<template>
  <div class="vid-container">
    <img class="bgvid" src="../assets/compoent7.jpg" alt="">
    <div class="inner-container">
      <img class="bgvidBlur" src="" alt="">
      <div class="box">
        <h4>Hello</h4>
        <input type="text" placeholder="帳號" />
        <input type="text" placeholder="密碼" />
        <button type="submit">登入</button>
        <p>Not a member?
          <span>Sign Up</span>
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
  /* height: 100%; */
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
  /* max-width: 100%; */
  position: absolute;
  top: 0;
  /* bottom: 0; */
  left: 0;
  /* right: 0; */
  /* margin: auto; */

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-attachment: fixed;
  z-index: -1;
}

.bgvidBlur {
  width: 100%;
  display: inline-block;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
  background-color: #fff;
}

.inner-container {
  height: 400px;
  width: 50%;
  display: block;
  box-shadow: 0 0 10px #000;
  border: 1px solid red;
  z-index: 1;
  position: relative;
  /* float: left;
  top: calc(50% - 200px); */
}

.box h4{
  color: white;
  margin-top: 30px;
  font-weight: bold;
  font-size: 30px;
}
</style>
