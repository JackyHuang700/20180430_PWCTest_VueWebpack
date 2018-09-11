<template>
  <div class="col-md-1">
    <div class="col-md-12 text-center mx-5">
      <a href="https://codepen.io/EvyatarDa/pen/waKXMd" target="_blank">
        <h2>Navigation Animation </h2>
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
  name: 'component8_23'
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
        &:before,
        &:after {
          opacity: 1;
          width: 100%;
        }
      }

      &:before,
      &:after {
        position: absolute;
        opacity: 0;
        width: 0%;
        height: 2px;
        content: '';
        background: #fff;
        transition: all 0.3s;
      }

      &::before {
        left: 0px;
        top: 0px;
      }

      &::after {
        right: 0px;
        bottom: 0px;
      }
    }
  }
}
</style>