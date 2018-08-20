<template>
  <div class="wrapper centerAndCenter">
    <form class="loginForm">
      <header>Hello</header>
      <section>
        <div class="formRow">
          <label for="email">電子信箱</label>
          <input type="text" id="email">
        </div>
        <div class="formRow">
          <label for="password">密碼</label>
          <input type="text" id="password">
        </div>
        <button type="submit">登入</button>
        <a class="forgetPassword">忘記密碼？</a>
      </section>
      <footer>
        <hr>
        <a href="">尚無帳號？點此註冊</a>
      </footer>
    </form>
  </div>
</template>
<script>
export default {
  name: 'component9'
}
</script>
<style lang="css" scoped>
/* hide navbar */
nav.navbar {
  display: none;
}

/* 內容開始 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 22px;
}

.wrapper {
  background-color: #dff4f1;
  height: 100vh;
  width: 100%;
  position: relative;
}

.centerAndCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginForm {
  background-color: #fff;
  box-shadow: 0px 5px 10px #dfe6f0;
  min-height: 300px;
  /* height: 500px; */
  width: 500px;
  padding: 40px 60px 40px;
transition: padding 0.3s ease-in-out;
  /* border: 1px solid red; */
}

.loginForm header {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}

.loginForm button[type='submit'] {
  margin-top: 20px;
  background-color: #51c0c2;
  border-width: 0;
  border-radius: 5px;
  width: 100%;
  padding: 5px 0;
  color: white;
  font-size: 14px;
  transition: background-color 0.3s ease-in-out;
}

.loginForm button[type='submit']:hover {
  background-color: #3aa4a6;
}

.loginForm .formRow {
  margin-bottom: 5px;
}

.loginForm label {
  width: 100%;
  text-align: left;
  font-size: 13px;
  display: inline-block;
  height: 34px;
  line-height: 40px;
}

.loginForm input {
  font-size: 14px;
  width: 100%;
  text-align: left;
  border: 1px solid #ccc;
  padding: 6px 10px;
  display: block;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border-radius: 5px;
  height: 34px;
  line-height: 34px;
  color: #666;
  transition: outline 0.3s ease-in-out;
}

.loginForm footer hr {
  margin-bottom: 20px;
}

.loginForm .forgetPassword {
  padding: 25px 0;
  text-align: center;
  font-size: 13px;
  color: #2d8787;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  display: inline-block;
  width: 100%;
}

.loginForm footer a {
  display: inline-block;
  width: 100%;
  color: #2d8787;
  font-size: 13px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  text-align: center;
}

.loginForm footer a:hover {
  color: #206161;
}

@media all and (max-width: 576px) {
  .loginForm {
    padding: 20px 20px 40px;
    margin: 0 15px;
  }
}
</style>
