<template>
  <div>
    <p>
      <a href="https://www.youtube.com/watch?v=DLdSf-NPlQk">參考網站:</a>
    </p>
    <p>header & content做滿版設計，內容限制在一定寬度就侷限助 這樣的設計可以防止2K, 4K解析度開啟網頁時，所有物件跑到最左右兩側 導致UX體驗不佳</p>

    <div class="wrap">
      <div class="header">
        <div class="myContainer">
          myContainer
        </div>
      </div>
      <div class="content">
        <div class="myContainer">
          myContainer
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'component5'
}
</script>
<style lang="css" scoped>
/*  <a href="https://www.youtube.com/watch?v=DLdSf-NPlQk">參考網站:</a> */
/* header & content做滿版設計，內容限制在一定寬度就侷限助
這樣的設計可以防止2K, 4K解析度開啟網頁時，所有物件跑到最左右兩側
導致UX體驗不佳 */
.wrap {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.header {
  height: 100px;
  background-color: orange;
}

.content {
  height: 100px;
  background-color: pink;
}

.myContainer {
  border: 1px solid red;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  text-align: left;
}
</style>
