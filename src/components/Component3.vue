<template>
  <div>
    <div id="navbar">
      <a href="#home">
        <span>Home</span>
      </a>
      <a href="#news">
        <span>News</span>
      </a>
      <a href="#contact">
        <span>Contact</span>
      </a>
    </div>

    <div style="padding:15px 15px 2500px;font-size:30px">
      <p>
        <b>This example demonstrates how to slide down a navbar when the user starts to scroll the page.</b>
      </p>
      <p>Scroll down this frame to see the effect!</p>
      <p>Scroll to the top to hide the navbar.</p>
      <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component3',
  mounted () {
    ;(function () {
      window.onscroll = function () {
        console.log(
          '检测到页面滚动事件:' + window.pageXOffset + ' ' + window.pageYOffset
        )
        console.log('body.scrollTop: ', document.body.scrollTop)
        console.log(
          'documentElement.scrollTop: ',
          document.documentElement.scrollTop
        )

        var navbarDom = document.getElementById('navbar')
        var showNavbarDistance = 30
        if (
          document.body.scrollTop > showNavbarDistance ||
          document.documentElement.scrollTop > showNavbarDistance
        ) {
          navbarDom.style.top = '0px'
        } else {
          navbarDom.style.top = '-56px'
        }
      }
    })()
  }
}
</script>
<style lang="css" scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}

#navbar {
  background-color: #333;
  position: fixed;
  /* top: 0; */
  top: -56px;
  left: 0;
  width: 100%;
  display: block;
  transition: top 0.4s linear;
  z-index: 999;
}

#navbar a {
  color: #f2f2f2;
  display: block;
  float: left;
  padding: 15px;
  text-decoration: none;
  font-size: 17px;
  text-align: center;
  transition: background-color 0.3s linear, color 0.3s linear;
}

#navbar a:hover {
  background-color: #ddd;
  color: #333;
}

#navbar a span{
  transition: transform .3s linear;
}

#navbar a:hover span{
  /* transform: translateY(-10px); */
  animation: moveNavbarUpText 1000ms 0ms infinite alternate;
  display: block;
}


@keyframes moveNavbarUpText {
  0% {transform: translateY(-0px);}
  /* 25% {} */
  /* 50% {} */
  /* 75% {} */
  100% { transform: translateY(-10px);}
}



</style>
