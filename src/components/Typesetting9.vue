<template>
  <div class="conatiner-fluid">
    <div class="row">
      <section class="col-6 boxShadow">
        <div class="alert alert-secondary" role="alert">一</div>
        <h3>
          <b>position: absolute & transform: translateX(-50%) translateY(-50%)</b>
        </h3>
        <p class="text-left">
          <b>注意:僅適用單個垂直置中</b>
        </p>
        <p class="text-left">
          <b>注意:多個Dom會重疊</b>
        </p>
        <pre class="text-left">
.redbox,
.greenbox,
.bluebox{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
        </pre>
        <p>
          <img class="img" src="../assets/Typesetting9/div0.jpg" alt="">
        </p>
        <div class="div0">
          <div class="redbox"></div>
          <div class="greenbox"></div>
          <div class="bluebox"></div>
        </div>
        <div class="div0">
          <div class="redbox"></div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component9'
}
</script>
<style lang="css" scoped>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 0;
  margin: 0;
}

.boxShadow {
  box-shadow: 0 0 20px #e3e3e3;
}

.img {
  height: 100%;
  width: 800px;
  max-width: 100%;
}

/* 一 */
.div0 {
  width: 100%;
  height: 150px;
  line-height: 150px;
  border: 1px solid #000;
  text-align: center;
  position: relative;
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

.redbox,
.greenbox,
.bluebox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
