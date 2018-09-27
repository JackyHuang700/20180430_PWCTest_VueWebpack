<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <label for="">https://loading.io/</label>
      <p>nProgressJs</p>
    </div>
     <div class="col-12">
        <img src="https://source.unsplash.com/400x300/?nature,water" alt="asdf" class="img-responsive" v-for="i in 20" :key="i"/>
    </div>
  </div>
</div>
</template>
<script>

import NProgress from 'nprogress'
export default {
  name: 'loading9',
  mounted () {
    (function () {
      window.NProgress = NProgress
      // $.mockjax({
      //   url: '/products/aaaa',
      //   responseTime: 3750,
      //   response: function (settings) {
      //     return 'You want a cook book!'
      //   }
      // })

      // setting
      NProgress.configure({
        minimum: 0.08,
        easing: 'ease',
        speed: 200
      })

      // api

      // NProgress.start()
      // $.ajax({
      //   url: '/products/aaaa',
      //   type: 'get',
      //   error: function (xhr) {
      //     alert('Ajax request 發生錯誤')
      //   },
      //   success: function (response) {
      //     console.log('我完成了')
      //     NProgress.done(true)
      //   }
      // })

    // 獨立Js檔案
    // $(document).ready(function () {
    //   NProgress.start();
    // })
    // $(window).load(function () {
    //   NProgress.done();
    // })
    })()
  }
}
</script>
<style lang="css" scoped>
@import 'nprogress/nprogress.css';
  #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background-color: green;
      height: 5px;
    }
</style>
