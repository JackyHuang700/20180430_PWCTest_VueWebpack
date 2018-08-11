<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12 ">
        <div class="alert alert-primary shadow" role="alert">多圖片顯示</div>
        <section class="vertical-center-4 slider">
          <div>
            <img src="http://placehold.it/350x100?text=1">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=2">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=3">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=4">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=5">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=6">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=7">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=8">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=9">
          </div>
          <div>
            <img src="http://placehold.it/350x100?text=10">
          </div>
        </section>
      </div>
      <div class="col-12">
        <section class="regular slider">
          <div>
            <img src="http://placehold.it/350x300?text=1">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=2">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=3">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=4">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=5">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=6">
          </div>
        </section>
      </div>
      <div class="col-12">
        <section class="center slider">
          <div>
            <img src="http://placehold.it/350x300?text=1">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=2">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=3">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=4">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=5">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=6">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=7">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=8">
          </div>
          <div>
            <img src="http://placehold.it/350x300?text=9">
          </div>
        </section>

      </div>
      <div class="col-12">
        <div class="alert alert-primary" role="alert">單圖片顯示</div>
        <section class="lazy slider" data-sizes="50vw">
          <div>
            <img data-lazy="http://placehold.it/350x300?text=1-350w" data-srcset="http://placehold.it/650x300?text=1-650w 650w, http://placehold.it/960x300?text=1-960w 960w" data-sizes="100vw">
          </div>
          <div>
            <img data-lazy="http://placehold.it/350x300?text=2-350w" data-srcset="http://placehold.it/650x300?text=2-650w 650w, http://placehold.it/960x300?text=2-960w 960w" data-sizes="100vw">
          </div>
          <div>
            <img data-lazy="http://placehold.it/350x300?text=3-350w" data-srcset="http://placehold.it/650x300?text=3-650w 650w, http://placehold.it/960x300?text=3-960w 960w" data-sizes="100vw">
          </div>
          <div>
            <img data-lazy="http://placehold.it/350x300?text=4-350w" data-srcset="http://placehold.it/650x300?text=4-650w 650w, http://placehold.it/960x300?text=4-960w 960w" data-sizes="100vw">
          </div>
          <div>
            <img data-lazy="http://placehold.it/350x300?text=5-350w" data-srcset="http://placehold.it/650x300?text=5-650w 650w, http://placehold.it/960x300?text=5-960w 960w" data-sizes="100vw">
          </div>
          <div>
            <!-- this slide should inherit the sizes attr from the parent slider -->
            <img data-lazy="http://placehold.it/350x300?text=6-350w" data-srcset="http://placehold.it/650x300?text=6-650w 650w, http://placehold.it/960x300?text=6-960w 960w">
          </div>
        </section>
      </div>
    </div>

  </div>
</template>
<script>
// import 'jquery-migrate'
import 'slick-carousel/slick/slick.min.js'
export default {
  name: 'slickcarousel',
  mounted () {
    ;(function () {
      $('.vertical-center-4').slick({
        dots: true,
        vertical: true,
        centerMode: true,
        /* 調整此參數已獲得顯示圖片數量 */
        slidesToShow: 1,
        /* 調整此參數已獲得顯示圖片數量 */
        slidesToScroll: 1
      })
    })()
    ;(function () {
      $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        /* 顯示大圖片 */
        variableWidth: true
      })
    })()
    ;(function () {
      $('.center').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      })
    })()
    ;(function () {
      $('.lazy').slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      })
    })()
  }
}
</script>
<style lang="css">
@import 'slick-carousel/slick/slick.css';
@import 'slick-carousel/slick/slick-theme.css';

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.slider {
  width: 50%;
  margin: 100px auto;
}

.slick-slide {
  margin: 0px 20px;
}

.slick-slide img {
  width: 100%;
}

.slick-prev:before,
.slick-next:before {
  color: black;
}

.slick-slide {
  transition: all ease-in-out 0.3s;
  opacity: 0.2;
}

.slick-active {
  opacity: 0.5;
}

.slick-current {
  opacity: 1;
}
</style>
