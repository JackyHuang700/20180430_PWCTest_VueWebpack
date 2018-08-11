<template>
  <div class="myContainer">
    <div class="wrap">
      <div class="nav">
        <ul>
          <li>
            <a href="#">首頁</a>
          </li>
          <li>
            <a href="#">關於我們</a>
          </li>
          <li>
            <a href="#">產品清單</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">會員專區</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main"></div>
  </div>
</template>
<script>
export default {
  name: 'typesetting5'
}
</script>
<style lang="css" scoped>
* {
  box-sizing: border-box;
}

.myContainer {
  border: 1px solid red;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0;
  margin-top: 100px;
}

.wrap {
  width: 100%;
  border: 1px solid red;
}

.wrap:after {
  content: '';
  display: block;
  clear: both;
}

.nav ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.nav li {
  float: left;
  width: 180px;
  background-color: green;
  height: auto;
  padding: 5px 10px;
  border: 1px solid white;
  transition: width 0.2s linear;
}

.nav a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s linear;
  height: auto;
  display: block;
}

.nav a:hover {
  color: rgb(41, 17, 17);
}

.main {
  width: 100%;
  height: 200px;
  background-color: #eee;
  margin-top: 10px;
}

@media screen and (max-width: 767px) {
  .nav li {
    width: 100%;
    margin: 0;
    float: none;
    display: inline-block;
  }

  .nav ul {
    margin: 0;
    margin-left: 5px;
    margin-right: 5px;
    width: 100%;
  }

  .nav li {
    margin-top: 6px;
    border-radius: 7px;
  }
}
</style>
