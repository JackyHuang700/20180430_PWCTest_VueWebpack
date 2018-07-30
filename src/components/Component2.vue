<template>
  <div>
    <input id="menuTrigger" type="checkbox" />
    <label for="menuTrigger">
      <div class="icon">
        <div class="bar first"></div>
        <div class="bar second"></div>
        <div class="bar third"></div>
      </div>
    </label>

    <section class="menuPosition">
      <div class="menu">
        <label for="menuTrigger">
          <div class="bar first"></div>
          <div class="bar second"></div>
        </label>
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-home"></i>Home</a>
          </li>
          <li>
            <a href="http://simonledunois.fr" target="_blank">
              <i class="fa fa-heart"></i>Portfolio</a>
          </li>
          <li>
            <a href="http://simonledunois.fr" target="_blank">
              <i class="fa fa-user"></i>About</a>
          </li>
        </ul>
      </div>
    </section>
    <div class="site">
      <h1>Insert the rest of your page markup here</h1>
    </div>

  </div>
</template>
<script>
export default {
  name: 'component2',
  mounted () {
    ;(function () {})()
  }
}
</script>

<style lang="css">
body {
  height: 100%;
  width: 100%;
  display: block;
  margin: 0px;
  padding: 0px;
  background-color: #fafafa;
  overflow: hidden;
}

html {
  height: 100%;
  margin: 0px;
  padding: 0px;
  min-height: 100%;
  display: block;
}

.bar {
  background-color: #2c3e50;
  width: 30px;
  height: 2px;
  border-radius: 5px;
  right: 15px;
  top: 18px;
}

.first {
  position: absolute;
}

.second {
  position: absolute;
  margin-top: 10px;
}

.third {
  position: absolute;
  margin-top: 20px;
}

.icon {
  cursor: pointer;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 50%;
}

/* 選單按鈕 */
#menuTrigger {
  position: absolute;
  z-index: 2;
  top: -9999px;
  left: -9999px;
}

.menuPosition {
  position: fixed;
  /* right: 0px; */
  left: 0;
  top: 0;
  height: 100%;
  z-index: 999;
}

/* 菜單 */
.menu {
  position: absolute;
  right: 0px;
  height: 100%;
  margin: 0;
  width: 300px;
  background-color: #2c3e50;
}

.menu,
.menuTrigger {
  transition: transform 0.3s linear, right 0.3s linear;
}

#menuTrigger:checked ~ .icon {
  right: 250px;
}

#menuTrigger:checked ~ .menuPosition {
  right: -35px;
  animation: openMenu 1000ms 0ms;
}

#menuTrigger:not(:checked) ~ .menuPosition {
  animation: closeMenu 800ms 0ms;
}

/* 決定content要不要移動 */
#menuTrigger:checked ~ .site {
  transform: translateX(-250px);
}

.site {
  margin: 0;
  height: 100%;
  z-index: 0;
  transition: all 0.3s ease-in-out;
  font-family: Arial, Helvetica, sans-serif;
  color: #7f8c8d;
}

.site h1 {
  margin-top: 150px;
  text-align: center;
}

/* 菜單內的叉叉 */
.menu .bar {
  background-color: #fafafa;
}

/* 菜單內的叉叉 */
.menu .bar.first {
  -webkit-transform-origin: 50% -50%;
  -moz-transform-origin: 50% -50%;
  -o-transform-origin: 50% -50%;
  -ms-transform-origin: 50% -50%;
  transform-origin: 50% -50%;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* 菜單內的叉叉 */
.menu .bar.second {
  -webkit-transform-origin: 5% 0%;
  -moz-transform-origin: 5% 0%;
  -o-transform-origin: 5% 0%;
  -ms-transform-origin: 5% 0%;
  transform-origin: 5% 0%;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.menu label {
  display: block;
  position: absolute;
  width: 65px;
  height: 40px;
  right: 24px;
  cursor: pointer;
}

.menu label .bar {
  transition: background-color 0.3s linear;
}

.menu label:hover .bar {
  background-color: red;
}

.menu ul {
  list-style-type: none;
  width: 100%;
  margin-left: 0px;
  margin-top: 50px;
}

.menu li {
  text-align: left;
  font-size: 15px;
  padding: 5px 0;
}

.menu a {
  color: #ecf0f1;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-style: 20px;
  transition: color 0.4s ease-in-out;
}

.menu a:hover {
  color: rgb(184, 184, 186);
}

.menu a i {
  margin-right: 30px;
}

@keyframes openMenu {
  0% {
    right: -300px;
  }
  50% {
    right: 0px;
  }

  100% {
    right: -35px;
  }
}

@keyframes closeMenu {
  from {
    right: -35px;
  }
  to {
    right: -300px;
  }
}
</style>
