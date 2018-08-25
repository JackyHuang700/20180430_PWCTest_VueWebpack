<template>
  <div class="body">
    <button type="button" id="scrollToTopBtn">
      <i class="fas fa-angle-up"></i>
    </button>
    <section><a href="https://www.youtube.com/watch?v=t-yD9YfYKNw" target="_blank"><h2> Scroll To Top With Ease-In-Out Effect</h2></a></section>
    <section :class="[v%2===0? 'bgcColor': 'bgcColor2']" v-for="v in 100" :key="v">
      <h1>
        Section
      </h1>
    </section>
  </div>
</template>
<script>
export default {
  name: 'component12',
  mounted () {
    ;(function () {
      var html
      var body
      var scrollToTopBtnDom = document.getElementById('scrollToTopBtn')

      scrollToTopBtnDom.addEventListener('click', function () {
        scrollToTop(300, 3)
      })
      window.onload = function () {
        html = document.documentElement
        body = document.body
        // scrollToTopBtnDom = document.getElementById('scrollToTopBtn')
      }

      /* 控制gotop按鈕隱藏與顯示 */
      window.onscroll = controlScrollToTopButton

      /* 控制gotop按鈕隱藏與顯示 */
      function controlScrollToTopButton () {
        var windowInnerHeight = 2 * window.innerHeight
        if (
          body.scrollTop > windowInnerHeight ||
          html.scrollTop > windowInnerHeight
        ) {
          scrollToTopBtnDom.classList.add('show')
        } else {
          scrollToTopBtnDom.classList.remove('show')
        }
      }

      function scrollToTop (totalTime, easingPower) {
        totalTime = totalTime || 300
        easingPower = easingPower || 3

        // console.log("here");
        var timeInterval = 1 // in ms
        var scrollTop = Math.round(body.scrollTop || html.scrollTop)
        // var by=- scrollTop;
        var timeLeft = totalTime
        var scrollByPixel = setInterval(function () {
          var percentSpent = (totalTime - timeLeft) / totalTime
          if (timeLeft >= 0) {
            var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower))
            body.scrollTop = newScrollTop
            html.scrollTop = newScrollTop
            // console.log(easeInOut(percentSpent,easingPower));
            timeLeft--
          } else {
            clearInterval(scrollByPixel)
            // Add hash to the url after scrolling
            // window.location.hash = hash;
          }
        }, timeInterval)
      }

      function easeInOut (t, power) {
        if (t < 0.5) {
          return 0.5 * Math.pow(2 * t, power)
        } else {
          return 0.5 * (2 - Math.pow(2 * (1 - t), power))
        }
      }
    })()
  }
}
</script>
<style lang="scss" scoped>
.body {
  height: 100%;
  margin: 0;
}

.section {
  height: 100%;
  padding: 8px;
}

.bgcColor {
  background-color: #80ace9;
}

.bgcColor2 {
  background-color: #68cf8c;
}

#scrollToTopBtn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 60px;
  width: 60px;
  font-size: xx-large;
  border-radius: 50%;
  border: 0;
  outline: 0;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

#scrollToTopBtn.show {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
</style>
