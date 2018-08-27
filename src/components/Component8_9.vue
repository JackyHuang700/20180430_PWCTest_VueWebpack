<template>
  <div class="col-md-6 text-left">
    <div class="text-center mb-5">
      <a href="https://www.youtube.com/watch?v=XiTKq6g_hpo&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&index=44&t=74s" target="_blank">
        <h2>Create a Login Form with HTML & CSS - Transparent login page design in html</h2>
      </a>
    </div>
    <section class="bgc">
      <div class="form center">
        <div class="form_content">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsam?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolorem laborum quae consequuntur deleniti perspiciatis reprehenderit veniam, magni optio nam qui iste! Iusto ad voluptate adipisci sunt iure quam accusamus voluptates itaque voluptas culpa. Aut quos delectus iure sapiente illum. Veritatis beatae sint assumenda excepturi itaque tempore officiis ea! Sed!
          </p>
          <a href="#">Read More</a>
        </div>
        <div class="login_form">
          <h1>Sign In</h1>
          <form action="">
            <input type="text" required />
            <input type="password" required />
            <input type="submit" value="Login">
          </form>
          <a href="#">Foreget Password</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'component8_9'
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.bgc {
  width: 100%;
  height: 50vh;
  // background: url();
  background-size: cover;
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 350px;
  background-color: rgba(103, 58, 183, 0.7);
}

$temaplteColor: rgba(104, 58, 183, 0.687);
$temaplteColorHover: #ff0057;
.form {
  .form_content,
  .login_form {
    position: relative;
    width: 50%;
    height: 350px;
    float: left;
    box-sizing: border-box;
    background-color: #fff;
  }

  .form_content {
    background-color: transparent;
    overflow: hidden;
    padding: 40px 30px;
    color: #fff;
    letter-spacing: 1px;

    a {
      display: inline-block;
      padding: 10px 20px;
      color: #fff;
      background-color: $temaplteColorHover;
      border-radius: 25px;
      text-decoration: none;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  }

  .login_form {
    background-color: #fff;
    height: 380px;
    top: -15px;
    box-shadow: -20px 0 15px rgba(0, 0, 0, 0.2);
    padding: 30px;

    h1 {
      color: #262626;
      text-align: center;
      margin: 15px auto;
    }

    input {
      display: block;
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border: 2px solid #ccc;
      border-radius: 25px;
      outline: none;
      font-style: 15px;
      transition: border 0.3s ease-in-out;

      &:hover,
      &:valid {
        border: 2px solid $temaplteColor;
      }

      // submit
      &[type='submit'] {
        color: #fff;
        background-color: $temaplteColor;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;

        &:hover {
          background-color: $temaplteColorHover;
          border: 2px solid $temaplteColorHover;
        }
      }
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: $temaplteColor;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: $temaplteColorHover;
      }
    }
  }
}
</style>