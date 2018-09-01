<template>
  <section class="col-md-5">
    <section class="">
      <h3>InfoCard</h3>
      <div>
        <div class="card1">
          <div class="header">
            <h2>標題</h2>
            <hr>
          </div>
          <div class="body">
            sfaf
          </div>
          <div class="footer">
            <div class="logo">三</div>
            <span>footer</span>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <h3>InfoCard</h3>
      <div>
        <div class="card1 card1Style2BorderTopColor">
          <div class="header">
            <h2>標題</h2>
            <hr class="card1Style2BorderTopColor">
          </div>
          <div class="body">
            sfaf
          </div>
          <div class="footer card1Style2BGC">
            <div class="logo">三</div>
            <span>footer</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'component8_14'
}
</script>
<style lang="scss" scoped>
/* 二 */
.card1 {
  border-color: #fff;
  width: 350px;
  height: auto;
  box-shadow: 0 0 10px rgba(200, 201, 201, 0.5);
  border-top: 15px solid #ff1643;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card1 .header,
.card1 .body {
  padding: 15px;
  text-align: left;
}

.card1 .header h2 {
  margin-bottom: 10px;
}

.card1 .header hr {
  display: block;
  border: none;
  margin: 0;
  width: 30px;
  background-color: #efefef;
  margin-bottom: 25px;
  height: 2px;
  border: 2px solid red;
}

.card1 .body {
  border: 0;
}

.card1 .footer {
  display: inline-block;
  width: 50%;
  height: 20px;
  line-height: 20px;
  background-color: #ff1643;
  margin-left: 50%;
  border: 0;
  /* border-top-left-radius: 10px; */
  color: white;
  text-align: left;
  /* padding-left: 20px; */
}

.card1 .logo {
  display: inline-block;
  width: 20%;
  text-align: center;
  height: auto;
}

.card1Style2BGC.card1Style2BGC {
  background-color: #1ce8b5;
}

.card1Style2BorderTopColor.card1Style2BorderTopColor.card1Style2BorderTopColor {
  border-top-color: #1ce8b5;
  border-color: #1ce8b5;
}
</style>