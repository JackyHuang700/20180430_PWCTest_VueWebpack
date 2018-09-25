<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://codepen.io/isac/pen/NPjOgR?editors=0110" target="_blank">
        <h5>Unfolding Post</h5>
      </a>
    </div>
    <div class="col-md-12">
      <div class="wrap">
        <h2>Unfolding Post</h2>
        <!-- <p>Created by Isac Fadoni</p> -->
        <section class="post-container">
          <article class="post">
            <header>
              <div class="fakeimage"></div>
              <h2>Lorem Ipsum</h2>
              <p>
                <i class="fa fa-calendar"></i>01/21/15</p>
              <p>
                <i class="fa fa-user"></i>Isac Fadoni</p>
              <a href="#" class="toggler">
                <i class="fa fa-angle-right"></i>
              </a>
            </header>
            <div class="post-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu leo, tempus sed efficitur ac, faucibus ac urna. In vestibulum non purus non pellentesque. Aenean accumsan est eu lacinia mollis. Praesent fermentum rhoncus risus, vel scelerisque nibh commodo id. Nunc nunc erat, mollis sit amet semper vitae, mattis eget quam. Ut tempus et augue a efficitur. Fusce vel nibh viverra, feugiat urna et, porttitor quam. Morbi imperdiet leo nec massa porttitor, sed laoreet mauris posuere. Pellentesque scelerisque nibh non orci dapibus ultricies. Proin a aliquet leo.
              </p>
            </div>
          </article>

          <article class="post">
            <header>
              <div class="fakeimage"></div>
              <h2>Lorem Ipsum</h2>
              <p>
                <i class="fa fa-calendar"></i>01/21/15</p>
              <p>
                <i class="fa fa-user"></i>Isac Fadoni</p>
              <a href="#" class="toggler">
                <i class="fa fa-angle-right"></i>
              </a>
            </header>
            <div class="post-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu leo, tempus sed efficitur ac, faucibus ac urna. In vestibulum non purus non pellentesque. Aenean accumsan est eu lacinia mollis. Praesent fermentum rhoncus risus, vel scelerisque nibh commodo id. Nunc nunc erat, mollis sit amet semper vitae, mattis eget quam. Ut tempus et augue a efficitur. Fusce vel nibh viverra, feugiat urna et, porttitor quam. Morbi imperdiet leo nec massa porttitor, sed laoreet mauris posuere. Pellentesque scelerisque nibh non orci dapibus ultricies. Proin a aliquet leo.
              </p>
            </div>
          </article>

          <article class="post">
            <header>
              <div class="fakeimage"></div>
              <h2>Lorem Ipsum</h2>
              <p>
                <i class="fa fa-calendar"></i>01/21/15</p>
              <p>
                <i class="fa fa-user"></i>Isac Fadoni</p>
              <a href="#" class="toggler">
                <i class="fa fa-angle-right"></i>
              </a>
            </header>
            <div class="post-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu leo, tempus sed efficitur ac, faucibus ac urna. In vestibulum non purus non pellentesque. Aenean accumsan est eu lacinia mollis. Praesent fermentum rhoncus risus, vel scelerisque nibh commodo id. Nunc nunc erat, mollis sit amet semper vitae, mattis eget quam. Ut tempus et augue a efficitur. Fusce vel nibh viverra, feugiat urna et, porttitor quam. Morbi imperdiet leo nec massa porttitor, sed laoreet mauris posuere. Pellentesque scelerisque nibh non orci dapibus ultricies. Proin a aliquet leo.
              </p>
            </div>
          </article>

          <article class="post">
            <header>
              <div class="fakeimage"></div>
              <h2>Lorem Ipsum</h2>
              <p>
                <i class="fa fa-calendar"></i>01/21/15</p>
              <p>
                <i class="fa fa-user"></i>Isac Fadoni</p>
              <a href="#" class="toggler">
                <i class="fa fa-angle-right"></i>
              </a>
            </header>
            <div class="post-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu leo, tempus sed efficitur ac, faucibus ac urna. In vestibulum non purus non pellentesque. Aenean accumsan est eu lacinia mollis. Praesent fermentum rhoncus risus, vel scelerisque nibh commodo id. Nunc nunc erat, mollis sit amet semper vitae, mattis eget quam. Ut tempus et augue a efficitur. Fusce vel nibh viverra, feugiat urna et, porttitor quam. Morbi imperdiet leo nec massa porttitor, sed laoreet mauris posuere. Pellentesque scelerisque nibh non orci dapibus ultricies. Proin a aliquet leo.
              </p>
            </div>
          </article>

        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_29',
  mounted () {
    ;(function () {
      $(function unfoldPost () {
        var toggle = $('.post header .toggler')

        toggle.on('click', function (e) {
          e.preventDefault()

          $(this)
            .closest('.post')
            .find('.post-content')
            .toggleClass('show')
          $(this)
            .closest('.post')
            .toggleClass('show')
          $(this).toggleClass('show')
        })
      })
    })()
  }
}
</script>
<style lang="scss" scoped>
@mixin center($axis: 'both') {
  @if $axis == 'both' {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @if $axis == 'y' {
    top: 50%;
    transform: translateY(-50%);
  }

  @if $axis == 'x' {
    left: 50%;
    transform: translateX(-50%);
  }
}

$default-face: Lato, sans-serif;

/* Basic */
// body {
//   background: #2baeff;
// }

.wrap {
  // position: absolute;
  display: block;
  width: 450px;
  padding: 5px;
  box-sizing: border-box;
  margin: 0 auto;
  // @include center('x');

  > h2 {
    margin-bottom: 10px;
    text-align: center;
    font-family: $default-face;
    font-size: 1.5em;
    color: #fafafa;
  }

  > p {
    @extend h2;
    font-size: 1.1em;
    color: #186b9e;
  }
}

/* Post */
.post-container {
  > h2 {
    margin-bottom: 10px;
    font-family: $default-face;
    font-size: 1.3em;
  }
}

.post {
  position: relative;
  display: block;
  padding: 5px;
  background: #fafafa;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: auto;
  transition: all 0.3s cubic-bezier(0.4, 0.08, 0.14, 0.82);

  &:first-child {
    border-radius: 3px 3px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 3px 3px;
  }

  &.show {
    margin: 5px 0;
    border-radius: 3px;
    box-shadow: 0px 15px 40px 5px rgba(0, 0, 0, 0.2),
      0px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .post-content {
    position: relative;
    max-height: 0px;
    padding: 5px;
    clear: both;
    margin-top: 0px;
    box-sizing: border-box;
    overflow: auto;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0.08, 0.14, 0.82);

    &.show {
      max-height: 999px;
      margin-top: 50px;
      visibility: visible;
      opacity: 1;
    }

    p {
      font-family: $default-face;
      line-height: 1.2em;
      text-align: justify;
      color: #333;
    }
  }

  header {
    .toggler {
      position: relative;
      display: block;
      width: 30px;
      color: #aaa;
      font-size: 1.5em;
      float: right;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0.08, 0.14, 0.82);
    }

    &.show {
      transform: rotate(90deg);
    }

    .fakeimage {
      width: 50px;
      height: 50px;
      margin: 0px 10px 0px 5px;
      float: left;
      border-radius: 100%;
      background: #aaa;
    }

    h2 {
      margin-bottom: 10px;
      font-family: $default-face;
      font-size: 1.2em;
      color: #222;
    }

    p {
      margin-right: 10px;
      font-family: $default-face;
      font-size: 0.9em;
      color: #aaa;
      float: left;
    }

    i {
      margin-right: 5px;
    }
  }
}
</style>