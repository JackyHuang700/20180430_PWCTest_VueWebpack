<template>
  <div class="col-md-1">
    <div class="col-md-12 text-center mx-5">
      <a href="https://codepen.io/EvyatarDa/pen/waKXMd" target="_blank">
        <h5>Navigation Animation </h5>
      </a>
    </div>
    <div class="col-md-12 w-100">
      <ul class="setUl setUlBgc">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>ARTICLES</a>
        </li>
        <li>
          <a>PORTFOLIO</a>
        </li>
        <li>
          <a>ABOUT</a>
        </li>
        <li>
          <a>CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_21'
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  width: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.setUlBgc {
  background-color: red;
}

.setUl {
  list-style-type: none;
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;

  li {
    padding: 10px 5px;
    width: 100%;
    height: 20%;

    a {
      display: block;
      text-align: center;
      width: 100%;
      position: relative;

      &:hover {
        &:before {
          opacity: 1;
          transform: translateX(-50%) translateY(-50%) scale(1);
        }
        &:after {
          opacity: 1;
          transform: translateX(-50%) translateY(-50%) scale(1.3);
        }
      }

      &:before,
      &:after {
        position: absolute;
        top: 22px;
        left: 50%;
        width: 50px;
        height: 50px;
        border: 4px solid #0277bd;
        transform: translateX(-50%) translateY(-50%) scale(0.8);
        border-radius: 50%;
        background: transparent;
        content: '';
        opacity: 0;
        transition: all 0.3s;
        z-index: 0;
        // z-index: -1;
      }

      &:after {
        border-width: 2px;
        transition: all 0.4s;
      }
    }
  }
}
</style>