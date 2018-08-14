<template>
  <div class="container mt-5">
    <div class="row">
      <section class="col-12">
        <a href="https://www.oxxostudio.tw/articles/201408/css-vertical-align.html" target="_blank">
          <div class="alert alert-success" role="alert">參考網站</div>
        </a>
      </section>
      <section class="col-3 boxShadow">
        <div class="alert alert-secondary" role="alert">一</div>
        <h3>
          <b>height、line-height</b>
        </h3>
        <p class="text-left">
          <b>注意:僅適用單個垂直置中</b>
        </p>
        <pre class="text-left">
.redbox {
  display: inline-block;
  width: 30px;
  height: 30px;
}
        </pre>
        <div class="div0">
          <div class="redbox"></div>
          <div class="greenbox"></div>
          <div class="bluebox"></div>
        </div>
        <div class="div0">
          <div class="redbox"></div>
        </div>
      </section>
      <section class="col-3 boxShadow">
        <div class="alert alert-secondary" role="alert">二</div>
        <h3>
          <b>添加偽元素 ( ::before、::after )</b>
        </h3>
        <p class="text-left">
          <b>注意: vertical-align</b>
        </p>
        <p class="text-left">
          <b>注意:<span style="color:red;">  :after、:before</span> 都可以</b>
        </p>
        <p class="text-left">
          <b>注意: div 記得要把 display 設為
            <span style="color:red;"> inline-block</span> ，因為vertical-align:middle; 是針對行內元素，div 本身是 block，所以必須要做更改</b>
        </p>
        <pre class="text-left">
.div2:before {
  content: '';
  width: 0;
  height: 100%;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
        </pre>
        <div class="div2">
          <div class="redbox2"></div>
          <div class="greenbox2"></div>
          <div class="bluebox2"></div>
        </div>
        <div class="div2">
          <div class="redbox2"></div>
        </div>
      </section>
      <section class="col-3 boxShadow">
        <div class="alert alert-secondary" role="alert">三</div>
        <h3>
          <b>calc 動態計算</b>
        </h3>
        <p class="text-left">
          <b>注意: div 記得要把 display 設為
            <span style="color:red;"> block</span>
          </b>
        </p>
        <p class="text-left">
          <b>注意:與上方的距離是「50% 的外框高度 + 50% 的 div 高度」，做到垂直置中</b>
        </p>
        <pre class="text-left">
.greenbox3{
  position: relative;
  width:30px;
  height:80px;
  float:left;
  /* 高度的一半 */
  top:calc(50% - 40px);
}
        </pre>
        <div class="div3">
          <div class="redbox3"></div>
          <div class="greenbox3"></div>
          <div class="bluebox3"></div>
        </div>
        <div class="div3">
          <div class="redbox3"></div>
        </div>
      </section>
      <section class="col-3 boxShadow">
        <div class="alert alert-secondary" role="alert">四</div>
        <h3>
          <b>transform:translateY</b>
        </h3>
        <p class="text-left">
          <b>注意: 子元素必須要加上
            <span style="color:red;"> position:relative</span>
          </b>
        </p>
        <p class="text-left">
          <b>注意: 多個元素會互相推擠跑掉，僅適用於
            <span style="color:red;">單個</span>
          </b>
        </p>
        <pre class="text-left">
.redbox4,
.greenbox4,
.bluebox4 {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
}

        </pre>
        <div class="div4">
          <div class="redbox4"></div>
          <div class="greenbox4"></div>
          <div class="bluebox4"></div>
        </div>
        <div class="div4">
          <div class="redbox4"></div>
        </div>
      </section>
      <section class="col-3 boxShadow">
        <div class="alert alert-secondary" role="alert">五</div>
        <h3>
          <b>position: absolute;</b>
        </h3>
        <p class="text-left">
          <b>注意: 多個元素會互相覆蓋，僅適用於
            <span style="color:red;">單個</span>
          </b>
        </p>
        <pre class="text-left">
.redbox5,
.greenbox5,
.bluebox5 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
        </pre>
        <div class="div5">
          <div class="redbox5"></div>
          <div class="greenbox5"></div>
          <div class="bluebox5"></div>
        </div>
        <div class="div5">
          <div class="redbox5"></div>
        </div>
      </section>
      <section class="col-3 boxShadow">
        <div class="alert alert-secondary" role="alert">六</div>
        <h3>
          <b>display:flex;</b>
        </h3>
        <pre class="text-left">
.div6 {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
        </pre>
        <div class="div6">
          <div class="redbox6"></div>
          <div class="greenbox6"></div>
          <div class="bluebox6"></div>
        </div>
        <div class="div6">
          <div class="redbox6"></div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'typesetting7'
}
</script>
<style lang="css" scoped>
.boxShadow {
  box-shadow: 0 0 20px #e3e3e3;
}

/* 一 */
.div0 {
  width: 100%;
  height: 150px;
  line-height: 150px;
  border: 1px solid #000;
  text-align: center;
}
.redbox {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #c00;
}
.greenbox {
  width: 30px;
  height: 80px;
  background: #0c0;
  display: inline-block;
  vertical-align: middle;
}
.bluebox {
  width: 30px;
  height: 40px;
  background: #00f;
  display: inline-block;
  vertical-align: middle;
}

/* 二 */
.div2 {
  width: 100%;
  height: 150px;
  border: 1px solid #000;
  text-align: center;
}

.div2:before {
  content: '';
  width: 0;
  height: 100%;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  background-color: #f00;
}

.redbox2 {
  width: 30px;
  height: 30px;
  background: #c00;
  display: inline-block;
  vertical-align: middle;
}
.greenbox2 {
  width: 30px;
  height: 60px;
  background: #0c0;
  display: inline-block;
  vertical-align: middle;
}
.bluebox2 {
  width: 30px;
  height: 40px;
  background: #00f;
  display: inline-block;
  vertical-align: middle;
}

/* 三 */
.div3 {
  width: 100%;
  height: 150px;
  border: 1px solid #000;
}
.redbox3 {
  position: relative;
  width: 30px;
  height: 30px;
  background: #c00;
  float: left;
  /* 高度的一半 */
  top: calc(50% - 15px);
  margin-left: calc(50% - 45px);
}
.greenbox3 {
  position: relative;
  width: 30px;
  height: 80px;
  background: #0c0;
  float: left;
  /* 高度的一半 */
  top: calc(50% - 40px);
}
.bluebox3 {
  position: relative;
  width: 30px;
  height: 40px;
  background: #00f;
  float: left;
  /* 高度的一半 */
  top: calc(50% - 20px);
}

/* 四 */
.div4 {
  width: 100%;
  height: 150px;
  border: 1px solid #000;
}

.redbox4,
.greenbox4,
.bluebox4 {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
}

.redbox4 {
  width: 30px;
  height: 30px;
  background: #c00;
}

.greenbox4 {
  width: 30px;
  height: 80px;
  background: #0c0;
}

.bluebox4 {
  width: 30px;
  height: 40px;
  background: #00f;
}

/* 五 */
.div5 {
  width: 100%;
  height: 150px;
  border: 1px solid #000;
  position: relative;
}

.redbox5,
.greenbox5,
.bluebox5 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.redbox5 {
  width: 30px;
  height: 30px;
  background: #c00;
}

.greenbox5 {
  width: 30px;
  height: 80px;
  background: #0c0;
}

.bluebox5 {
  width: 30px;
  height: 40px;
  background: #00f;
}

/* 六 */
.div6 {
  width: 100%;
  height: 150px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.redbox6 {
  width: 30px;
  height: 30px;
  background: #c00;
}

.greenbox6 {
  width: 30px;
  height: 80px;
  background: #0c0;
}

.bluebox6 {
  width: 30px;
  height: 40px;
  background: #00f;
}
</style>
