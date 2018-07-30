<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-left">
        <!-- 選單按鈕-->
        <i class="fas fa-align-justify" id="openMenu"></i>
        <!-- 側邊欄選單-->
        <nav id="menu">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'component',
  mounted () {
    ;(function () {
      var openMenuDom = document.getElementById('openMenu')
      openMenuDom.addEventListener('click', function (e) {
        // 讓 click 事件停止冒泡
        e.stopPropagation()
        document.body.classList.add('openMenu')
        document.addEventListener('click', function (e) {
          // 如果點擊側邊欄以外的區域，就關閉側邊欄
          if (!e.target.closest('#menu')) {
            document.body.classList.remove('openMenu')
          }
        })
      })
    })()
  }
}
</script>
<style lang="css">
body {
  font: 13px/1.4 'Open Sans', sans-serif;
}

body:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
}

body.openMenu {
  overflow: hidden;
}

/* 陰影 */
body.openMenu:after {
  visibility: visible;
  opacity: 1;
}
</style>

<style lang="css" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

#openMenu {
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease-in-out;
  position: absolute;
  top: 15px;
  left: 15px;
}

#openMenu:hover {
  color: #000;
}

#menu {
  position: fixed;
  left: -280px;
  top: 0px;
  z-index: 1;
  overflow: hidden;
  width: 280px;
  max-width: 85%;
  height: 100%;
  background-color: #f5f5f5;
  transition: all 0.4s ease-in-out;
}

#menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#menu ul li a {
  text-align: left;
  display: block;
  padding: 12px 24px;
  background-color: #fff;
  text-decoration: none;
  color: #888;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    padding-left 0.3s ease-in-out;
  padding-left: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

#menu ul li a:hover {
  color: #333;
  background-color: #eee;
  padding-left: 20px;
}

/* 開啟側邊攔 */
.openMenu #menu {
  left: 0px;
}
</style>
