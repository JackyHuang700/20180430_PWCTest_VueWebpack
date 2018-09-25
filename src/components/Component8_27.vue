<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://codepen.io/hsnaydd/pen/CJEnd" target="_blank">
        <h5>Jquery dynamic tab menu</h5>
      </a>
    </div>
    <div id="sekmeler-wrap">
      <div id="sekme-ekle">Sekme ekle</div>
      <ul id="sekmeler">
        <li>Sekme 1
          <span class="sekme-kapa">x</span>
        </li>
      </ul>
      <div class="sekme-icerik">
        <b>Sekme 1 içeriği</b> <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Component8_27',
  mounted () {
    ;(function ($) {
      var sekmeAc = function (ind) {
        $('#sekmeler > li').removeClass('sekme-aktif')
        $('.sekme-icerik')
          .hide()
          .eq(ind)
          .fadeIn('slow')
        $('#sekmeler > li')
          .eq(ind)
          .addClass('sekme-aktif')
      }
      $('.sekme-icerik:eq(0)').show()
      $('#sekmeler > li:eq(0)').addClass('sekme-aktif')
      $(document).on('click', '#sekmeler > li ', function (e) {
        var target = $(e.target)
        if (target.is('span')) {
          return false
        }
        var ind = $(this).index()
        sekmeAc(ind)
      })
      $(document).on('click', '.sekme-kapa', function () {
        var ind = $(this)
          .parent()
          .index()
        var _size = $(this)
          .parents('ul')
          .children().length
        var aktf = $(this)
          .parent()
          .hasClass('sekme-aktif')
        $('#sekmeler > li')
          .eq(ind)
          .remove()
        $('.sekme-icerik')
          .eq(ind)
          .remove()
        if (ind !== 0 && _size !== 1 && aktf) {
          sekmeAc(ind - 1)
        } else if (ind === 0 && _size !== 1 && aktf) {
          sekmeAc(0)
        }
      })
      $(document).on('click', '#sekme-ekle', function () {
        var ind = $('#sekmeler > li').length
        $('#sekmeler').append(
          '<li>Sekme Adı ' + ind + ' <span class="sekme-kapa">x</span></li>'
        )
        $('#sekmeler-wrap').append(
          '<div class="sekme-icerik">Sekme içeriği </div>'
        )
        sekmeAc(ind)
      })
    })(jQuery)
  }
}
</script>
<style lang="scss">
.sekme-icerik {
  display: none;
  padding: 10px;
}
#sekmeler {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
}
#sekme-ekle,
#sekmeler > li {
  display: inline-block;
  position: relative;
  background-color: blue;
  color: white;
  padding: 10px 15px;
  margin: 0px 2px;
  cursor: pointer;
  border-radius: 3px;
}
.sekme-kapa {
  position: absolute;
  top: -3px;
  right: 3px;
}
.sekme-aktif {
  background-color: #3e94e1 !important;
}
</style>