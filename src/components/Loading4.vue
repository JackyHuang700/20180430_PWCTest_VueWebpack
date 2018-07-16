<template>
<div class="container">
  <div class="row toprow">
        <div class="col-md-2">
      <h1>上方會有進度條</h1>
    </div>
    <div class="col-md-2 col-md-offset-10">

      <button id="getQuote" class="btn btn-default btn-lg">
        <span id="rotateButtonSign" class="fa fa-refresh" aria-hidden="true"></span>
      </button>

      <a id="tweetIt" href="https://twitter.com" target="_blank">
        <button class="btn btn-default btn-lg pull-right">
          <span class="fa fa-twitter" aria-hidden="true"></span>
        </button>
      </a>
    </div>

  </div>

  <div class="row">
    <div class="col-md-12">
      <p class="quote-text text-center text-uppercase"></p>
      <p class="quote-author text-center"></p>
    </div>
  </div>
</div>
</template>
<script>
import '../assets/pace.min.js'
export default {
  name: 'loading4',
  created () {
    function getAndUpdateQuote () {
      $('#rotateButtonSign').attr('class', 'fa fa-refresh fa-spin')
      $('#getQuote').blur()
      $.getJSON(
        'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
        function (json) {
          var quoteText = json.quoteText
          var quoteAuthor = json.quoteAuthor
          $('.quote-text').html(quoteText)
          $('.quote-author').html(quoteAuthor)
          $('#tweetIt').attr(
            'href',
            'https://twitter.com/intent/tweet?text=' +
              encodeURIComponent('"' + quoteText + '" - ' + quoteAuthor)
          )
          $('#rotateButtonSign').attr('class', 'fa fa-refresh')
        }
      )
    }

    $(document).ready(function () {
      getAndUpdateQuote()

      $('#getQuote').on('click', function () {
        getAndUpdateQuote()
      })
    })

    $(function () {
      Pace.track(function () {
        setTimeout(() => {

        }, 1000)
      })
    }())
  }
}
</script>
<style lang="css" >
/* 更換此Css為更換loading版型 */
@import 'pace-js/themes/blue/pace-theme-barber-shop.css';
.toprow {
  margin-top: 20px;
}

#getQuote {
  margin-left: 50px;
}

.quote-text {
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  margin-top: 40%;
}

.quote-author {
  font-size: 18px;
}

/*PACE.js part*/
.pace {
  -webkit-pointer-events: none;
  pointer-events: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  -webkit-transform: translate3d(0, -50px, 0);
  -ms-transform: translate3d(0, -50px, 0);
  transform: translate3d(0, -50px, 0);

  -webkit-transition: -webkit-transform 0.5s ease-out;
  -ms-transition: -webkit-transform 0.5s ease-out;
  transition: transform 0.5s ease-out;
}

.pace.pace-active {
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.pace .pace-progress {
  display: block;
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 100%;
  width: 100%;
  height: 10px;
  background: #6593ff;

  pointer-events: none;
}
</style>
