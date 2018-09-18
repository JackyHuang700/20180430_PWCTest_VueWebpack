<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://codepen.io/isac/pen/KdNyyJ" target="_blank">
        <h2>Unfolding Cards</h2>
      </a>
    </div>
    <div class="col-md-12">
      <div class="wrap">
        <article class="material-card">
          <header>
            <figure class="material-card-icon capamerica">
              <i class="material-icons md-36">stars</i>
            </figure>
            <h2 class="material-card-title">Captain America</h2>
            <div class="material-card-action">
              <a href="#">
                <i class="material-icons md-36">keyboard_arrow_right</i>
              </a>
            </div>
            <div class="material-card-info">
              <i class="material-icons">access_time</i>
              <time>sep 27</time>
            </div>
          </header>
          <div class="material-card-content">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
            </p>
            <footer>
              <a class="material-card-footer-link" href="##">READ MORE</a>
            </footer>
          </div>
        </article>

        <article class="material-card">
          <header>
            <figure class="material-card-icon ironman">
              <i class="material-icons md-36">arrow_drop_down</i>
            </figure>
            <h2 class="material-card-title">Iron Man</h2>
            <div class="material-card-action">
              <a href="#">
                <i class="material-icons md-36">keyboard_arrow_right</i>
              </a>
            </div>
            <div class="material-card-info">
              <i class="material-icons">access_time</i>
              <time>sep 28</time>
            </div>
          </header>
          <div class="material-card-content">
            <img class="material-card-content-img" src="http://cdn.bgr.com/2014/12/ultimate-material-lollipop-collection-66.png?w=624" alt="Material Design Wallpaper">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
            </p>
          </div>
        </article>

        <article class="material-card">
          <header>
            <figure class="material-card-icon blackwidow">

            </figure>
            <h2 class="material-card-title">Black Widow</h2>
            <div class="material-card-action">
              <a href="#">
                <i class="material-icons md-36">keyboard_arrow_right</i>
              </a>
            </div>
            <div class="material-card-info">
              <i class="material-icons">access_time</i>
              <time>sep 28</time>
            </div>
          </header>
          <div class="material-card-content">
            <p>
              Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_29',
  mounted () {
    $(function unfoldPost () {
      var actionButton = $('.material-card-action a')

      actionButton.on('click', function (e) {
        e.preventDefault()

        $(this)
          .closest('.material-card')
          .toggleClass('triggered')
        $(this)
          .closest('.material-card-action')
          .toggleClass('triggered')
      })
    })
  }
}
</script>
<style lang="scss" scoped>
// Imports
// @import url(https://fonts.googleapis.com/css?family=Roboto:400, 300);

// Mixin

/* Center elements */
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

@mixin zdepth($level: 1) {
  @if $level == 1 {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  }

  @if $level == 2 {
    box-shadow: 0 6px 13px 0 rgba(0, 0, 0, 0.2), 0 8px 18px 0 rgba(0, 0, 0, 0.2);
  }

  @if $level == 3 {
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.2),
      0 20px 35px 0 rgba(0, 0, 0, 0.2);
  }
}

// Color Scheme
$main: #ff8a80;
$accent: #ffeb3b;
$light-background: #fafafa;

// Basics
// body {
//   background: $main;
// }

.wrap {
  display: block;
  // position: absolute;
  width: 860px;
  height: auto;
  padding: 5px;
  box-sizing: border-box;
  // @include center(x);
  margin: 0 auto;
}

.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}

// Card
.material-card {
  display: block;
  position: relative;
  width: 450px;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  background: $light-background;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  @include center(x);
  @include zdepth(1);

  &:hover {
    @include zdepth(2);
    z-index: 2;
  }
  &:active {
    @include zdepth(3);
  }
  &:first-child {
    border-top: 2px solid #fff;
    border-radius: 4.5px 4.5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4.5px 4.5px;
  }

  &.triggered {
    margin: 10px 0 10px 0;
    border-top: 2px solid #fff;
    border-radius: 4.5px;
    z-index: 2;
    @include zdepth(3);

    .material-card-content {
      max-height: 950px;
      padding-top: 10px;
      margin: 20px 0 5px 0;
      visibility: visible;
      overflow: initial;
      opacity: 1;
    }

    .material-card-content-img {
      opacity: 1;
    }
  }

  > header {
    display: block;
    position: relative;
    width: 100%;
    height: 80px;
    outline: 1px solid black;
  }
}

// Card Icon
.material-card-icon {
  display: block;
  position: relative;
  width: 80px;
  height: 100%;
  float: left;
  margin: 0 10px 0 0;
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;
  outline: 1px solid black;

  &.capamerica {
    border: 29px double #c62828;
    color: #0d47a1;
  }
  &.ironman {
    border: 5px solid #f9a825;
    background: #b71c1c;
    color: #fff;
  }
  &.blackwidow {
    border: 5px solid #611f2b;
    background: #222;
    color: #fff;
  }
  i {
    display: inline-block;
    position: relative;
    @include center();
  }
}

// Card Title
.material-card-title {
  display: inline-block;
  width: 290px;
  height: 35px;
  margin: 10px 0 5px 0;
  overflow: hidden;
  font-family: Roboto;
  font-size: 1.2em;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: lighten(#000, 35%);
  text-align: left;
}
* {
  outline: none !important;
}
// Card Info
.material-card-info {
  display: inline-block;
  position: relative;
  padding: 5px 5px 5px 0;
  box-sizing: border-box;
  outline: 1px solid black;
  color: lighten(#000, 65%);
  width: 69%;
  text-align: left;

  i {
    font-size: 1.3em;
    margin: 2px 5px 0 0;
    float: left;
  }
  time {
    display: inline-block;
    margin: 0px 0 0 0;
    font-family: Roboto;
    font-size: 0.9em;
  }
  &.active {
    i {
    }
  }
}

// Card Action Button
.material-card-action {
  display: block;
  position: relative;
  width: 35px;
  height: 100%;
  float: right;
  color: lighten(#000, 65%);
  outline: 1px solid black;

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
    @include center();

    i {
      position: relative;
      left: 50%;
      top: 50%;
      transition: all 0.2s ease-in-out;
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
  &:hover {
    background: darken($light-background, 5%);
  }
  &.triggered {
    a {
      i {
        transform: translate(-50%, -50%) rotate(-90deg);
      }
    }
  }
}

// Card Content
.material-card-content {
  display: block;
  position: relative;
  max-height: 0px;
  padding: 0 10px;
  margin: 0 0 0 0;
  box-sizing: border-box;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1), overflow 0s linear;

  .material-card-content-img {
    position: relative;
    width: 450px;
    height: auto;
    margin: 0 0 15px -20px;
    padding: 0 0 0 0;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0.08, 0.14, 0.82);
  }
  p {
    margin: 0 0 20px 0;
    font-family: 'Roboto';
    text-align: justify;
  }
}

.material-card-footer-link {
  display: inline-block;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: 'Roboto', serif;
  text-decoration: none;
  color: darken($accent, 20%);
  transition: all 0.2s cubic-bezier(0.4, 0.08, 0.14, 0.82);

  &:hover {
    background: darken($light-background, 5%);
  }
}
</style>