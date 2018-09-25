<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://jsfiddle.net/5g111cyx/15/" target="_blank">
        <h5>Fiddle meta - 點擊滑動選單效果</h5>
      </a>
    </div>
    <div class="col-md-12">
      <div id="1">
        <a href="#">Menu Div 1</a>
      </div>
      <div id="sub1" class="menu" style="display:none">
        <ul>
          <li>Div 1 Test 1</li>
          <li>Div 1 Test 2</li>
          <li>Div 1 Test 3</li>
        </ul>
      </div>

      <div id="2">
        <a href="#">Menu Div 2</a>
      </div>
      <div id="sub2" class="menu" style="display:none">
        <ul>
          <li>Div 2 Test 1</li>
          <li>Div 2 Test 2</li>
          <li>Div 2 Test 3</li>
        </ul>
      </div>

      <div id="3">
        <a href="#">Menu Div 3</a>
      </div>
      <div id="sub3" class="menu" style="display:none">
        <ul>
          <li>Div 3 Test 1</li>
          <li>Div 3 Test 2</li>
          <li>Div 3 Test 3</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_31',
  mounted () {
    ;(function () {
      $('#1,#2,#3').click(function () {
        var isActive = $(this)
          .next('div')
          .hasClass('active')
        $('.menu').each(function () {
          $(this)
            .slideUp(150)
            .removeClass('active')
        })
        if (!isActive) {
          $(this)
            .next('div')
            .slideToggle(150)
            .addClass('active')
          $(this)
            .siblings()
            .next('div ul')
            .hide(150)
        }
      })
    })()
  }
}
</script>
<style lang="scss" scoped>
</style>
