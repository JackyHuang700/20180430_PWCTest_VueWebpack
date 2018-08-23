<template>
  <div class="wrap">
<!-- 滑動動畫未添加 -->
    <div>
      <nav class="nav">
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle">
        <div class="menu">
          <a href="#">aa</a>
          <a href="#">bb</a>
          <a href="#">cc</a>
          <a href="#">dd</a>
          <a href="#">
            <span>ee</span>
          </a>
        </div>
      </nav>
    </div>
    <div class="mt-5">
      <a href="https://www.youtube.com/watch?v=xMTs8tAapnQ&t=38s&list=PLwTi4JslRNFSDNNzOHOzguiLGGQIlvX8C&index=13" target="_blank">
        <h3>Responsive Menu With Media Queries (Checkbox Trick) - Using Only CSS3</h3>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component11'
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
}

/* 內容開始 */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav.nav {
  display: inline-block;
  // border: 1px solid red;
  border-bottom: 1px solid #eaeaeb;
  text-align: right;
  height: 70px;
  line-height: 70px;
  width: 100%;

  label {
    font-size: 26px;
    line-height: 40px;
    cursor: pointer;
    display: none;
    width: 50px;
    text-align: center;
    float: right;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 13px 10px 13px 0;
  }


  #toggle {
    display: none;
  }

  .menu {
    // border: 1px solid blue;
    margin-right: 20px;
    transition: all .3s ease-in-out;

    a {
      text-decoration: none;
      color: gray;
      margin: 0 10px;
      width: 100%;
      height: 100%;
      // line-height: 70px;
      // border: 1px solid black;
      font-size: 22px;

      span {
        color: #54d17a;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  nav.nav {
    background-color: hsla(215, 70%, 71%, 0.4);

    label {
      display: block;
    }

    #toggle:checked + .menu {
      display: block;
    }

    .menu {
      text-align: center;
      width: 100%;
      display: none;


      a {
        display: inline-block;
        width: 100%;
        margin: 0;
        border-bottom: 1px solid #eaeaeb;
      }
    }
  }
}
</style>
