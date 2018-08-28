<template>
  <div class="col-md-6 text-left mt-4">
    <div class="text-center mb-5">
      <a href="https://codepen.io/aurer/full/xgzRga/" target="_blank">
        <h2>Collapsing list indicator animation</h2>
      </a>
    </div>
    <div class="page body">
      <h1>Collapsing list</h1>
      <h2>Version one</h2>
      <ul class="nav nav--primary">
        <li class="nav-item nav-item--primary">
          <div class="nav-label">Packages
            <svg class="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
              <path d="M11,1 L21,11 L11,21 L1,11"></path>
            </svg>
          </div>
          <ul class="nav nav--secondary">
            <li class="nav-item">
              <a href="#">Color</a>
            </li>
            <li class="nav-item">
              <a href="#">Write</a>
            </li>
            <li class="nav-item">
              <a href="#">Map</a>
            </li>
            <li class="nav-item">
              <a href="#">Linter</a>
            </li>
            <li class="nav-item">
              <a href="#">Picker</a>
            </li>
            <li class="nav-item">
              <a href="#">Emmet</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-item--primary">
          <div class="nav-label">Themes
            <svg class="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
              <path d="M11,1 L21,11 L11,21 L1,11"></path>
            </svg>
          </div>
          <ul class="nav nav--secondary">
            <li class="nav-item">
              <a href="#">Color</a>
            </li>
            <li class="nav-item">
              <a href="#">Write</a>
            </li>
            <li class="nav-item">
              <a href="#">Map</a>
            </li>
            <li class="nav-item">
              <a href="#">Linter</a>
            </li>
            <li class="nav-item">
              <a href="#">Picker</a>
            </li>
            <li class="nav-item">
              <a href="#">Emmet</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-item--primary">
          <div class="nav-label">Documentation
            <svg class="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
              <path d="M11,1 L21,11 L11,21 L1,11"></path>
            </svg>
          </div>
          <ul class="nav nav--secondary">
            <li class="nav-item">
              <a href="#">Color</a>
            </li>
            <li class="nav-item">
              <a href="#">Write</a>
            </li>
            <li class="nav-item">
              <a href="#">Map</a>
            </li>
            <li class="nav-item">
              <a href="#">Linter</a>
            </li>
            <li class="nav-item">
              <a href="#">Picker</a>
            </li>
            <li class="nav-item">
              <a href="#">Emmet</a>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Version two</h2>
      <ul class="nav nav--primary nav--alt">
        <li class="nav-item nav-item--primary">
          <div class="nav-label">Packages
            <svg class="nav-indicator nav-indicator--alt" width="22" height="22" viewbox="0 0 26 26">
              <path d="M11,1 L21,11 L11,21 L1,11"></path>
              <path d="M11,1 L1,11 L11,21 L1,11"></path>
            </svg>
          </div>
          <ul class="nav nav--secondary">
            <li class="nav-item">
              <a href="#">Color</a>
            </li>
            <li class="nav-item">
              <a href="#">Write</a>
            </li>
            <li class="nav-item">
              <a href="#">Map</a>
            </li>
            <li class="nav-item">
              <a href="#">Linter</a>
            </li>
            <li class="nav-item">
              <a href="#">Picker</a>
            </li>
            <li class="nav-item">
              <a href="#">Emmet</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-item--primary">
          <div class="nav-label">Themes
            <svg class="nav-indicator nav-indicator--alt" width="22" height="22" viewbox="0 0 26 26">
              <path d="M11,1 L21,11 L11,21 L1,11"></path>
              <path d="M11,1 L1,11 L11,21 L1,11"></path>
            </svg>
          </div>
          <ul class="nav nav--secondary">
            <li class="nav-item">
              <a href="#">Color</a>
            </li>
            <li class="nav-item">
              <a href="#">Write</a>
            </li>
            <li class="nav-item">
              <a href="#">Map</a>
            </li>
            <li class="nav-item">
              <a href="#">Linter</a>
            </li>
            <li class="nav-item">
              <a href="#">Picker</a>
            </li>
            <li class="nav-item">
              <a href="#">Emmet</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-item--primary">
          <div class="nav-label">Documentation
            <svg class="nav-indicator nav-indicator--alt" width="22" height="22" viewbox="0 0 26 26">
              <path d="M11,1 L21,11 L11,21 L1,11"></path>
              <path d="M11,1 L1,11 L11,21 L1,11"></path>
            </svg>
          </div>
          <ul class="nav nav--secondary">
            <li class="nav-item">
              <a href="#">Color</a>
            </li>
            <li class="nav-item">
              <a href="#">Write</a>
            </li>
            <li class="nav-item">
              <a href="#">Map</a>
            </li>
            <li class="nav-item">
              <a href="#">Linter</a>
            </li>
            <li class="nav-item">
              <a href="#">Picker</a>
            </li>
            <li class="nav-item">
              <a href="#">Emmet</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_10',
  mounted () {
    ;(function () {
      var navPrimary = document.querySelector('.nav--primary')
      var navItems = document.querySelectorAll('.nav-item--primary')

      navItems.forEach(item => {
        var secondary = item.querySelector('.nav--secondary')
        if (secondary) {
          secondary.style.height = secondary.offsetHeight + 'px'
        }
        item.classList.add('is-collapsed')

        item.onclick = function () {
          item.classList.toggle('is-collapsed')
          item.classList.toggle('is-active')
        }
      })
    })()
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

/**/
.body {
  padding: 32px;
  background-color: #f5f5f5;
  color: #444;
}

.page {
  width: 100%;
  max-width: 480px;
  margin: auto;
  // border: 1px solid red;

  h1 {
    text-align: center;
  }
}

.nav {
  // border: 1px solid red;

  list-style-type: none;
  padding: 0;
  margin: 0;

  .nav-item {
    // border: 1px solid red;
    padding: 16px 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    + .nav-item {
      border-top: 1px solid #ddd;
    }

    a {
      text-decoration: none;
      color: #12c777;

      &:hover,
      &:focus {
        color: #c76712;
      }
    }

    /* toggle button */
    .nav-indicator {
      position: absolute;
      right: 16px;
    }
  }
}

.nav--primary {
  border: 1px solid #ddd;
  margin-bottom: 32px;

  .nav-item {
    &.is-active {
      path {
        stroke-dashoffset: -15;
      }
    }
  }
}

// list item
.nav--secondary {
  overflow: hidden;
  margin-top: 16px;
  // border: 1px solid red;
  will-change: height;
  transition: height 0.3s ease-in-out, margin-top 0.3s ease-in-out;

  /* ??? */
  .is-collapsed & {
    margin-top: 0;
    height: 0 !important;
  }

  .nav-item {
    padding: 5px 16px;
    display: inline-block;
    width: 100%;

    + .nav-item {
      border: none;
    }
  }
}

/* setting icon */
.nav--primary {
  svg.nav-indicator {
    path {
      fill: none;
      stroke: #aaa;
      stroke-linecap: round;
      stroke-width: 2;
      stroke-dasharray: 29 40;
      transition: stroke-dashoffset 0.3s;
    }
  }
}

/* setting icon */
.nav--alt {
  svg.nav-indicator--alt {
    transform: translateY(-20%);
    transition: transform 0.2s ease-in-out;

    path {
      fill: none;
      stroke: #aaa;
      stroke-linecap: square;
      stroke-width: 2;
      stroke-dasharray: 14 40;
      stroke-dashoffset: -15;
      transition: stroke-dashoffset 0.3s ease-in-out;
    }
  }

  .nav-item.is-active {
    svg {
      transform: translateY(0);

      path {
        stroke-dashoffset: 0;
      }
    }
  }
}
</style>