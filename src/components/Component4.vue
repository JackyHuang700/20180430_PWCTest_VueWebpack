<template>
  <div>
    <div class="wrap">
      <div class="box"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
    </div>

    <div class="wrap2">
      <p>aaaaaaaaaaa</p>
      <div class="box"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
    </div>

    <div>

      <img src="https://cc.tvbs.com.tw/img/_data/i/upload/2017/11/16/20171116155635-9fc3be23-me.jpg" class="imgRWD" alt="">
    </div>

  </div>
</template>
<script>
export default {
  name: 'component4'
}
</script>
<style lang="css" scoped>
.wrap {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.wrap .box,
.wrap2 .box {
  width: 20%;
  background-color: #555;
  height: 50px;
  float: left;
}

.wrap .box2,
.wrap2 .box2 {
  width: 80%;
  background-color: pink;
  height: 50px;
  float: left;
}

.wrap .box3,
.wrap2 .box3 {
  width: 80%;
  background-color: blue;
  height: 50px;
  float: left;
} 

.wrap .box4,
.wrap2 .box4 {
  width: 10%;
  background-color: red; 
  height: 50px;
  float: left;
}

.wrap2 {
  clear: both;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
}

.wrap2:after {
  clear: left;
  content: '';
  display: block;
  height: 0;
  overflow: hidden;
}

/* 圖片響應式 */
.imgRWD {
  max-width: 100%;
  height: auto;
}
</style>
