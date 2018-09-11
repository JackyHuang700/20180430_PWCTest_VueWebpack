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
          <a alt="HOME">HOME</a>
        </li>
        <li>
          <a alt="ARTICLES">ARTICLES</a>
        </li>
        <li>
          <a alt="PORTFOLIO">PORTFOLIO</a>
        </li>
        <li>
          <a alt="ABOUT">ABOUT</a>
        </li>
        <li>
          <a alt="CONTACT">CONTACT</a>
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
      text-align: left;
      width: 100%;
      position: relative;
      color: rgba(255, 255, 255, 0.3);

      &:hover {
        &::before {
          transform: scale(1);
          opacity: 1;
        }
      }

      &::before {
        position: absolute;
        color: #fff;
        top: -10px;
        left: -10px;
        padding: 10px;
        overflow: hidden;
        content: attr(alt);
        transition: all 0.4s;
        transform: scale(0.8);
        opacity: 0;
      }
    }
  }
}
</style>