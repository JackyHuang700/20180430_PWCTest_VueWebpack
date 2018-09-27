<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <label for="">https://github.hubspot.com/pace/docs/welcome/</label>
        <p>paceJs</p>
        <p>缺點 - ajax無法追蹤(使用)</p>
      </div>
      <div class="col-12">
        <img src="https://source.unsplash.com/400x300/?nature,water" alt="asdf" class="img-responsive" v-for="i in 20" :key="i"/>
    </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'loading8',
  mounted () {
    ;(function () {
      // 類似套件 NProgress.js
      // https://tw.saowen.com/a/e5b9b8f6ae68c2059536c1639cd2d004601fbafa29f11ab33512a74098ed23b4
      //     pace.js：

      // API：

      // Pace.start：開始顯示進度條，如果你不是使用AMD或者Browserify來載入模組的話，這個會預設執行。
      // Pace.restart：進度條重新載入以及顯示。
      // Pace.stop：隱藏進度條以及停止載入。
      // Pace.track：監測一個或者多個請求任務。
      // Pace.ignore：忽略一個或者多個請求任務。

      // packJs
      window.paceOptions = {
        restartOnPushState: true,
        ajax: true,
        document: true,
        restartOnRequestAfter: true
      }

      // $.mockjax({
      //   url: '/products/aaaa',
      //   responseTime: 3750,
      //   response: function(settings) {
      //     return 'You want a cook book!'
      //   }
      // })

      //  Pace.stop();
      // $.ajax({
      //   url: '/products/aaaa',
      //   type: 'get',
      //   error: function(xhr) {
      //     alert('Ajax request 發生錯誤')
      //   },
      //   success: function(response) {
      //     console.log('我完成了')
      //     // Pace.restart()
      //     // Pace.start();
      //   }
      // })
    })()
  }
}
</script>
<style lang="css" scoped>
/* PaceJS */
.pace {
  -webkit-pointer-events: none;
  pointer-events: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.pace-inactive {
  display: none;
}

.pace .pace-progress {
  background: #ff006b;
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 100%;
  width: 100%;
  height: 0.35em;
}
</style>
