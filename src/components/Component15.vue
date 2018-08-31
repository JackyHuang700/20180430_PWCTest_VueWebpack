<template>
  <div class="body">
    <!-- 複製出去要刪除 -->
    <a class="referenceInfo" target="_blank" href="https://www.youtube.com/watch?v=vpe8-6jI7n8&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&t=3s&index=53">
      Html Css Login Form Design With Glass Effect - How to Make a Transparent Login Form in Html and Css
    </a>
    <div class="wrap center">
      <div class="imgBx">
        <img src="../assets/Component10/bg_sso_purple.png" alt="">
      </div>
      <div class="loginBox">
        <h3>Sign in Here</h3>
        <form action="">
          <div class="inputBox">
            <input type="text" name="" id="" placeholder="Username" required />
            <span>
              <i class="fas fa-user"></i>
            </span>
          </div>
          <div class="inputBox">
            <input type="text" name="" id="" placeholder="Password" required />
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </div>
          <input type="submit" value="Sign In">
          <a href="#">Forget Password</a>
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
<style lang="scss">
/* hide navbar */
nav.navbar {
  display: none;
}

body {
  overflow: hidden;
}

/* 內容開始 */
$templateColor: #262626;
$templateColor2: rgba($templateColor, 0.3);
$templateColor3: #ed292a;
$templateColor4: rgba($templateColor3, 0.7);

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.body {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-image: url(../assets/Component15/bg.jpg);
  position: relative;
}

.wrap {
  height: 420px;
  width: 700px;
  border-radius: 5px;
  border: 10px solid rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.3);

  .imgBx {
    width: 50%;
    height: 100%;
    overflow: hidden;
    float: left;

    img {
      width: 100%;
      // background-color: rgba(255, 255, 255, 0.3);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .loginBox {
    float: right;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 50px 40px 80px;
    background-color: rgba(255, 255, 255, 0.8);

    h3 {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: $templateColor;
      padding: 0 0 30px;
    }

    .inputBox {
      position: relative;

      input {
        width: 100%;
        margin-bottom: 20px;

        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }

        &[type='text'],
        &[type='password'] {
          border: 0;
          border-bottom: 2px solid $templateColor2;
          outline: none;
          height: 40px;
          line-height: 40px;
          color: $templateColor;
          background-color: transparent;
          font-size: 16px;
          padding-left: 20px;
          transition: border 0.3s ease-in-out;

          &:focus {
            border-bottom-color: $templateColor;
            ~ span i {
              transform: scale(1.3);
            }
          }
        }
      }

      span {
        position: absolute;
        top: 10px;
        left: 0;
        color: $templateColor;

        i {
          transition: transform 0.3s ease-in-out;
        }
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    [type='submit'] {
      width: 100%;
      border: none;
      outline: none;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      background-color: $templateColor4;
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:hover,
      &:focus {
        background-color: $templateColor3;
      }
    }

    a {
      width: 100%;
      display: inline-block;
      padding-top: 30px;
      text-align: right;
      color: $templateColor;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
    }
  }
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>