<template>
  <div class="col-md-12">
    <section class="" style="display:inline-block;">
      <h3>InfoCard</h3>
      <div class="card3">
        <div class="header card3StyleBGC">Header</div>
        <div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic aliquid! Beatae facere ullam unde labore exercitationem incidunt earum necessitatibus ea eveniet quaerat neque excepturi veniam et consectetur at, distinctio odio eum eaque nemo quisquam eligendi magnam, praesentium alias. Ratione nobis porro tempora expedita, cumque temporibus nihil asperiores harum nam?</div>
        <div class="footer"></div>
      </div>
    </section>
    <section class="" style="display:inline-block;">
      <h3>InfoCard</h3>
      <div class="card3">
        <div class="header card3Style2BGC">Header</div>
        <div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic aliquid! Beatae facere ullam unde labore exercitationem incidunt earum necessitatibus ea eveniet quaerat neque excepturi veniam et consectetur at, distinctio odio eum eaque nemo quisquam eligendi magnam, praesentium alias. Ratione nobis porro tempora expedita, cumque temporibus nihil asperiores harum nam?</div>
        <div class="footer"></div>
      </div>
    </section>
    <section class="" style="display:inline-block;">
      <h3>InfoCard</h3>
      <div class="card3">
        <div class="header card3Style3BGC">Header</div>
        <div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic aliquid! Beatae facere ullam unde labore exercitationem incidunt earum necessitatibus ea eveniet quaerat neque excepturi veniam et consectetur at, distinctio odio eum eaque nemo quisquam eligendi magnam, praesentium alias. Ratione nobis porro tempora expedita, cumque temporibus nihil asperiores harum nam?</div>
        <div class="footer"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'component8_16'
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 0;
  margin: 0;
}

/* 四 */
.card3 {
  height: auto;
  width: 100%;
  max-width: 600px;
  position: relative;
  box-shadow: 0px 5px 10px #dfe6f0;
  border-radius: 10px;
}

.card3 .header {
  min-height: 36px;
  max-height: 80px;
  height: auto;
  line-height: 36px;
  width: 40%;
  max-width: 450px;
  position: absolute;
  left: -30px;
  top: 30px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  text-align: center;
}

.card3 .body {
  padding: 90px 15px 20px;
  color: #bdc5cd;
  text-align: left;
}

.card3StyleBGC {
  background-color: #00b0ff;
}

.card3Style2BGC {
  background-color: #80ace9;
}

.card3Style3BGC {
  background-color: #68cf8c;
}
</style>