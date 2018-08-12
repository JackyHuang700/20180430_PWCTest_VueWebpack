<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <a href="https://owlcarousel2.github.io/OwlCarousel2/" target="_blank">
          <div class="alert alert-primary shadow" role="alert">官網連結</div>
        </a>

      </div>
      <div class="col-12">
        <div class="owl-carousel owl-theme owl-demo">
          <div class="item">
            <h4>1</h4>
          </div>
          <div class="item" style="width:200px">
            <h4>2</h4>
          </div>
          <div class="item">
            <h4>3</h4>
          </div>
          <div class="item">
            <h4>4</h4>
          </div>
          <div class="item">
            <h4>5</h4>
          </div>
          <div class="item">
            <h4>6</h4>
          </div>
          <div class="item">
            <h4>7</h4>
          </div>
          <div class="item">
            <h4>8</h4>
          </div>
          <div class="item">
            <h4>9</h4>
          </div>
          <div class="item">
            <h4>10</h4>
          </div>
          <div class="item">
            <h4>11</h4>
          </div>
          <div class="item">
            <h4>12</h4>
          </div>
        </div>
      </div>
      <div class="col-12 mt-5">
        <h3>
          <b>點擊下方按鈕會跳到相對應的燈箱</b>
        </h3>
      </div>
      <div class="col-12">
        <div class="owl-carousel owl-theme owl-demo" id="carousel2">
          <div class="item" data-hash="zero">
            <h4>0</h4>
          </div>
          <div class="item" data-hash="one">
            <h4>1</h4>
          </div>
          <div class="item" data-hash="two">
            <h4>2</h4>
          </div>
          <div class="item" data-hash="three">
            <h4>3</h4>
          </div>
          <div class="item" data-hash="four">
            <h4>4</h4>
          </div>
          <div class="item" data-hash="five">
            <h4>5</h4>
          </div>
          <div class="item" data-hash="six">
            <h4>6</h4>
          </div>
          <div class="item" data-hash="seven">
            <h4>7</h4>
          </div>
          <div class="item" data-hash="eight">
            <h4>8</h4>
          </div>
          <div class="item" data-hash="nine">
            <h4>9</h4>
          </div>
          <div class="item" data-hash="ten">
            <h4>10</h4>
          </div>
          <div class="item" data-hash="eleven">
            <h4>11</h4>
          </div>
          <div class="item" data-hash="tweleve">
            <h4>12</h4>
          </div>
          <div class="item" data-hash="thirteen">
            <h4>13</h4>
          </div>
          <div class="item" data-hash="fourteen">
            <h4>14</h4>
          </div>
          <div class="item" data-hash="fifteen">
            <h4>15</h4>
          </div>
        </div>
        <hr>
        <a class="button secondary url" href="#zero">zero</a>
        <a class="button secondary url" href="#three">three</a>
        <a class="button secondary url" href="#five">five</a>
        <a class="button secondary url" href="#seven">seven</a>
        <a class="button secondary url" href="#ten">ten</a>
      </div>
    </div>
  </div>
</template>
<script>
import 'owl.carousel2'
export default {
  name: 'owlcarousel2',
  mounted () {
    ;(function () {
      $('.owl-carousel').owlCarousel({
        /* 頭尾是否連接再一起 */
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        /* 自動寬度 */
        autoWidth: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })
    })()
    ;(function () {
      $('#carousel2').owlCarousel({
        items: 4,
        loop: false,
        center: true,
        margin: 10,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
      })
    })()
  }
}
</script>
<style lang="css">
@import 'owl.carousel2/dist/assets/owl.carousel.css';
@import 'owl.carousel2/dist/assets/owl.theme.default.min.css';
@import 'owl.carousel2/docs/assets/css/docs.theme.min.css';

.owl-demo .item {
  height: 10rem;
  background: #4dc7a0;
  padding: 1rem;
}

.owl-demo .item h4,
.owl-demo .item h2 {
  color: #fff;
  font-weight: 400;
  margin-top: 0rem;
}

.owl-demo .item-video {
  height: 300px;
}

/* 自行添加 */

.owl-prev,
.owl-next {
  transition: background-color 0.3s ease-in-out;
}

.owl-theme .owl-dots .owl-dot:hover span {
  transition: background-color 0.3s ease-in-out;
}

.secondary:hover {
  text-decoration: none;
}
</style>
