<template>
  <div class="wrapper centerAndCenter">
    <!-- 複製出去要刪除 -->
    <a class="referenceInfo" href="https://auth.91app.com/identity/login?signin=2d6fa3cee902766ecdfb3a102838997d">
      作品參考: 91App OSM全通路商店管理系統
    </a>
    <form action="" class="loginForm">
      <section class="logo">
        <a class="systemLogo" href="" target="_black">
          <img src="http://fakeimg.pl/180x50/" alt="">
        </a>
        <header class="systemChin colorStyle2">OSM全通路商店管理系統</header>
        <div class="systemEng colorStyle">Omni Store Management</div>
        <footer class="companyInfo colorStyle">Copyright © 2018 91APP, Inc.</footer>
      </section>
      <section class="content">
        <h2>登入您的後台</h2>
        <div class="formRow">
          <label class="formRowLabelHeight" for="email">帳號</label>
          <input type="text" id="email" class="borderStyle" placeholder="請輸入電子信箱或有效帳號" />
        </div>
        <div class="formRow">
          <label class="formRowLabelHeight" for="password">密碼</label>
          <a class="formRowLabelHeight" href="">忘記密碼</a>
          <input type="password" id="password" class="borderStyle" placeholder="請輸入密碼" />
          <span class="far fa-eye inputIcon" id="changeIputMode"></span>
          <!-- <i class="far fa-eye"></i>
        <i class="far fa-eye-slash"></i> -->
        </div>
        <button type="submit" class="bgcStyle">登入</button>
      </section>
    </form>
  </div>
</template>
<script>
export default {
  name: 'component10',
  mounted () {
    ;(function () {
      var changeIputModeDom = document.getElementById('changeIputMode')
      changeIputModeDom.addEventListener('click', function (e) {
        var self = e.target
        var faEyeStr = 'fa-eye'
        var faEyeSlashStr = 'fa-eye-slash'

        var inputDom = self.previousElementSibling
        if (inputDom.type === 'text') {
          inputDom.type = 'password'
          self.classList.add(faEyeStr)
          self.classList.remove(faEyeSlashStr)
        } else if (inputDom.type === 'password') {
          inputDom.type = 'text'
          self.classList.remove(faEyeStr)
          self.classList.add(faEyeSlashStr)
        }
      })
    })()
  }
}
</script>

<style lang="scss">
/* hide navbar */
nav.navbar {
  display: none;
}

body {
  overflow: hidden;
}

/* 內容開始 */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.wrapper {
  height: 100vh;
  width: 100%;
  position: relative;
}

.centerAndCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginForm {
  height: 560px;
  width: 50%;
  max-width: 1000px;
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 #dfdfe9;
}

/* left */
.logo {
  float: left;
  width: 40%;
  height: 100%;
  background-color: rgba(225, 239, 246, 0.405);
  text-align: left;
  padding: 20px 25px;
  position: relative;
  background: #f9fafe url(../assets/Component10/bg_sso_purple.png) center center
    no-repeat;
  background-size: 100% 100%;
}

.logo .systemLogo {
  width: 100%;
  display: inline-block;
  height: 8%;
  margin: 15px 0;
}

.logo .systemLogo img {
  display: inline-block;
  height: 100%;
  max-width: 100%;
}

.logo .systemChin {
  width: 100%;
  height: 7%;
  font-size: 22px;
  letter-spacing: 1.1px;
}
.logo .systemEng {
  height: 75%;
  width: 100%;
  font-size: 18px;
  letter-spacing: 1.1px;
}
.logo .companyInfo {
  width: 100%;
  font-size: 16px;
  letter-spacing: 1.1px;
  text-align: center;
}

.logo .systemChin:before,
.logo .companyInfo:before {
  display: inline-block;
  content: '';
  width: 0;
  height: 100%;
  position: relative;
  vertical-align: middle;
}

.logo .colorStyle {
  color: #bdbdce;
}

.logo .colorStyle2 {
  color: #737373;
  overflow: hidden;
}

/* right */
.content {
  float: left;
  width: 60%;
  height: 100%;
  padding: 60px 60px;
}

.loginForm h2 {
  margin: 20px auto 30px;
  text-align: center;
  font-size: 33px;
  color: #92989d;
}

$formRowLeft: 50%;

.formRow {
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}

.formRow label {
  float: left;
  width: $formRowLeft;
  text-align: left;
  font-size: 16px;
  margin-bottom: 5px;
}

.formRow a {
  width: 100% - $formRowLeft;
  float: left;
  text-align: right;
}

.formRowLabelHeight {
  height: 22px;
  line-height: 22px;
}

.formRow input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #d4d9de;
  color: #333;
  transition: outline 0.3s ease-in-out;
}

.formRow input::placeholder,
.formRow input::-moz-placeholder,
.formRow input::-webkit-placeholder {
  color: #d4d9de;
  opacity: 0.5;
}

.formRow .inputIcon {
  height: 50px;
  line-height: 50px;
  width: 40px;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.loginForm button[type='submit'] {
  margin-top: 25px;
  width: 100%;
  padding: 15px 0;
  color: white;
  border: 0;
  font-size: 16px;
  letter-spacing: 5px;
  border-radius: 5px;
}

.bgcStyle {
  background-color: #469be5;
  transition: background-color 0.3s ease-in-out;
}

.bgcStyle:hover {
  background-color: #227ac5;
}

.borderStyle {
  border: 1px solid #d4d9de;
}

@media only screen and (min-width: 1451px) {
  .logo .systemChin {
    font-size: 22px;
  }
  .logo .systemEng {
    font-size: 18px;
  }
  .logo .companyInfo {
    font-size: 16px;
  }
  .loginForm h2 {
    font-size: 33px;
  }
  .formRow label {
    font-size: 16px;
  }
  .formRow input {
    font-size: 15px;
  }
  .loginForm button[type='submit'] {
    font-size: 16px;
  }
}
@media only screen and (max-width: 1450px) {
  .logo .systemChin {
    font-size: 16px;
  }
  .logo .systemEng {
    font-size: 14px;
  }
  .logo .companyInfo {
    font-size: 12px;
  }
  .loginForm h2 {
    font-size: 25px;
  }
  .formRow label {
    font-size: 13px;
  }
  .formRow input {
    font-size: 12px;
  }
  .loginForm button[type='submit'] {
    font-size: 13px;
  }
}

@media only screen and (max-width: 767px) {
  .loginForm {
    height: 100%;
    width: 100%;
    /* min-width: 360px; */
    position: relative;
  }

  .logo {
    height: 50px;
    width: 100%;
    padding: 0;
    background-image: none;
    background-color: #fff;
    position: static;
  }

  .logo .systemLogo {
    float: left;
    width: 50%;
    height: 100%;
    margin: 0;
  }
  .logo .systemLogo img {
    padding-left: 4%;
  }
  .logo .systemChin {
    float: right;
    width: 50%;
    height: 100%;
    text-align: right;
    padding-right: 4%;
    font-size: 12px;
  }
  .logo .systemEng {
    display: none;
  }
  .logo .companyInfo {
    position: absolute;
    bottom: 10px;
    left: 0;
  }

  .content {
    width: 100%;
    background-color: #f5f9fd;
    padding-left: 10%;
    padding-right: 10%;
  }

  .formRow a {
  }
}
</style>
