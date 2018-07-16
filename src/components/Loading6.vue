<template>
<div class="container">
  <div class="row">
    <div class="col-12">
       <input id="range" type="range" min="0" max="100">
    </div>
  </div>
</div>
</template>
<script>
import '../assets/pace.min.js'
export default {
  name: 'loading4',
  mounted () {
    (function () {
      var range = document.getElementById('range')
      var paceOptions = {
        elements: true
      }

      function load (time) {
        var x = new XMLHttpRequest()
        x.open('GET', 'http://localhost:5646/walter/' + time, true)
        x.send()
      }

      load(20)
      load(100)
      load(500)
      load(2000)
      load(3000)

      setTimeout(function () {
        Pace.ignore(function () {
          load(3100)
        })
      }, 4000)

      Pace.on('hide', function () {
        console.log('done')
      })

      range.addEventListener('input', function () {
        document.querySelector('.pace').classList.remove('pace-inactive')
        document.querySelector('.pace').classList.add('pace-active')

        document.querySelector('.pace-progress').setAttribute('data-progress-text', range.value + '%')
        document.querySelector('.pace-progress').setAttribute('style', '-webkit-transform: translate3d(' + range.value + '%, 0px, 0px)')
      })
    })()
  }
}
</script>
<style lang="css" >
@import 'pace-js/themes/blue/pace-theme-minimal.css';
</style>
