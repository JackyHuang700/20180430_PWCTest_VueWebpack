<template>
  <section class="col-md-7">
    <div>
      <h3>InfoCard</h3>
      <div style="display:inline-block;width:40%;">
        <div class="card0 cardRWD">
          <div class="block-text">
            <h2>
              <span>標題asdfas</span>
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores numquam voluptatem nulla odit, nam quidem natus minus asperiores vero placeat nesciunt iure earum laborum! Nesciunt consectetur neque enim blanditiis, praesentium assumenda, eaque repudiandae iure molestias fugit ex rem quis id suscipit voluptates voluptatibus. Ut totam provident expedita laudantium suscipit ex quaerat aut! Incidunt similique perspiciatis facilis ipsa architecto praesentium dolores esse? Reprehenderit consequatur vitae reiciendis sapiente esse a fugiat tenetur neque ad harum atque aliquid ab omnis, totam obcaecati nostrum? Molestiae, aperiam beatae. Aliquid totam vero atque adipisci explicabo fuga minus, nobis debitis labore itaque rerum ducimus possimus quibusdam animi.</p>
          </div>
          <div class="block-date">
            <div class="block-date-bg">
              <span class="percent-75 dark"></span>
              <span class="percent-25 light"></span>
            </div>
          </div>
        </div>
      </div>
      <div style="display:inline-block;width:40%;">
        <div class="card0 cardRWD">
          <div class="block-text">
            <h2>
              <span></span>
              標題asdfas
            </h2>
            <hr>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores numquam voluptatem nulla odit, nam quidem natus minus asperiores vero placeat nesciunt iure earum laborum! Nesciunt consectetur neque enim blanditiis, praesentium assumenda, eaque repudiandae iure molestias fugit ex rem quis id suscipit voluptates voluptatibus. Ut totam provident expedita laudantium suscipit ex quaerat aut! Incidunt similique perspiciatis facilis ipsa architecto praesentium dolores esse? Reprehenderit consequatur vitae reiciendis sapiente esse a fugiat tenetur neque ad harum atque aliquid ab omnis, totam obcaecati nostrum? Molestiae, aperiam beatae. Aliquid totam vero atque adipisci explicabo fuga minus, nobis debitis labore itaque rerum ducimus possimus quibusdam animi.</p>
          </div>
          <div class="block-date">
            <div class="block-date-bg">
              <span class="percent-75 dark"></span>
              <span class="percent-25 light"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Component8_13'
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 0;
  margin: 0;
}

/* 一 */
.card0 {
  background-color: #fff;
  width: 350px;
  height: auto;
  box-shadow: 0 0 10px rgba(200, 201, 201, 0.5);
}

.card0 .block-text {
  padding: 25px;
  width: 100%;
}

.card0 .block-text h2 {
  color: #b7aa9c;
  font-style: 20px;
  margin: 30px 0;
  text-align: left;
  position: relative;
  width: 100%;
}

.card0 .block-text span {
  border-bottom: 2px solid #efefef;
}

.card0 .block-text hr {
  display: block;
  border: none;
  margin: 0;
  width: 30px;
  background-color: #efefef;
  margin-bottom: 25px;
  height: 2px;
}

.card0 .block-text p {
  text-align: left;
  font-weight: 300;
  line-height: 20px;
  font-size: 14px;
}

.card0 .block-date,
.card0 .block-date-bg {
  height: 10px;
  width: 100%;
}

.card0 .block-date .percent-75 {
  float: left;
  height: inherit;
  width: 75%;
}
.card0 .block-date .percent-25 {
  float: left;
  height: inherit;
  width: 25%;
}

.card0 .block-date .dark {
  background-color: #5fb2b2;
}
.card0 .block-date .light {
  background-color: #9bcfcf;
}
</style>