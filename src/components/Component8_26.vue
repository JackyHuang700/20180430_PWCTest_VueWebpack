<template>
  <div class="col-md-12">
     <div class="col-md-12 text-center mx-5">
      <a href="http://jsfiddle.net/happysmiles/F33Av/22/" target="_blank">
        <h5>Bootstrap Skeleton</h5>
      </a>
    </div>
    <div class="col-md-12 body">
      <ul class="nav nav-tabs" role="tablist">
        <li class="active">
          <a href="#contact_01" data-toggle="tab">Joe Smith</a>
          <span>x</span>
        </li>
        <li>
          <a href="#contact_02" data-toggle="tab">Molly Lewis</a>
          <span>x</span>
        </li>
        <li>
          <a href="#" class="add-contact">+ Add Contact</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="contact_01">Contact Form: Joe Smith</div>
        <div class="tab-pane" id="contact_02">Contact Form: Molly Lewis</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Component8_26',
  mounted () {
    ;(function () {
      $('.nav-tabs')
        .on('click', 'a', function (e) {
          e.preventDefault()
          if (!$(this).hasClass('add-contact')) {
            $(this).tab('show')
          }
        })
        .on('click', 'span', function () {
          var anchor = $(this).siblings('a')
          $(anchor.attr('href')).remove()
          $(this)
            .parent()
            .remove()
          $('.nav-tabs li')
            .children('a')
            .first()
            .click()
        })

      $('.add-contact').click(function (e) {
        e.preventDefault()
        var id = $('.nav-tabs').children().length // think about it ;)
        var tabId = 'contact_' + id
        $(this)
          .closest('li')
          .before(
            '<li><a href="#contact_' +
              id +
              '">New Tab</a> <span> x </span></li>'
          )
        $('.tab-content').append(
          '<div class="tab-pane" id="' +
            tabId +
            '">Contact Form: New Contact ' +
            id +
            '</div>'
        )
        $('.nav-tabs li:nth-child(' + id + ') a').click()
      })
    })()
  }
}
</script>
<style lang="scss" scoped>
// *,
// *::before,
// *::after {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

.body {
  height: 150px;
}

/**/
@import url('http://getbootstrap.com/2.3.2/assets/css/bootstrap.css');
.nav-tabs > li {
  position: relative;
}
.nav-tabs > li > a {
  display: inline-block;
}
.nav-tabs > li > span {
  display: none;
  cursor: pointer;
  position: absolute;
  right: 6px;
  top: 8px;
  color: red;
}
.nav-tabs > li:hover > span {
  display: inline-block;
}
</style>