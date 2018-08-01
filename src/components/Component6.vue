<template>
  <div>
    <section class="bgc1">
       <p>在keyframes中，除了transform以外，都會影響到其他dom</p>
       <div class="wrap">
         <div class="box ani2"></div>
         <div class="box blue"></div>
       </div>
    </section>

    <section class="bgc2 mt-2">
      <p>在keyframes中，transform不會影響到其他dom</p>
      <p>正確示範重新套用animation方法</p>
      <p>注意，需要等動畫執行完畢後再套新的</p>
      <div class="wrap">
        <div class="box ani"></div>
        <div id="box" class="box blue"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'component6',
  mounted () {
    console.clear()
    ;(function () {
      var boxDom = document.getElementById('box')
      boxDom.addEventListener('click', function (e) {
        var self = this
        self.classList.add('ani')
        // 須配合動畫(animation)執行時間
        const waitaniAnimationTime = 3
        setTimeout(() => {
          self.classList.remove('ani')
        }, waitaniAnimationTime * 2000)
      })
    })()
  }
}
</script>
<style lang="css" scoped>
.wrap {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 200px;
}

.box {
  height: 100px;
  width: 100px;
  background-color: orange;
}

.blue {
  background-color: blue;
}

.ani {
  animation: ani 2s 1 linear;
}

.ani2{
  animation: ani2 2s infinite linear;
}

.mt-2{
  margin-top: 200px !important;
}


.bgc1{
  background-color: rgba(255, 192, 203, 0.444);
}

.bgc2{
  background-color: rgba(255, 10, 10, 0.315);
}

@keyframes ani {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(2);
  }
}

@keyframes ani2 {
  from{
height: 100px;
  }
  to{
height: 500px;
  }
}
</style>
