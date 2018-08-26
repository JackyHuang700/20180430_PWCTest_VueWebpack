<template>
  <div class="col-md-3 text-left pl-5">
   <div class="text-center mb-5">
      <a href="https://www.youtube.com/watch?v=eIqre0Wsbro&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&index=42&t=4s" target="_blank">
        <h2>Notification panel with vertical Timeline</h2>
      </a>
    </div>
    <div class="">
      <ul class="norificationBar">
        <li>
          <i class="far fa-arrow-alt-circle-down"></i>
          <div>Lorem ipsum dolor sit amet.</div>
        </li>
        <li>
          <i class="far fa-arrow-alt-circle-down"></i>
          <div>Lorem ipsum dolor sit amet.</div>
        </li>
        <li>
          <i class="far fa-arrow-alt-circle-down"></i>
          <div>Lorem ipsum dolor sit amet.</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_7'
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$templateColor: #ddd;
$templateBgc: #fff;

// 內容開始
.norificationBar {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;

  // line
  &::after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: $templateColor;
    display: block;
    position: absolute;
    top: 4px;
    left: 15px;
    z-index: -1;
  }
  li {
    margin-top: 60px;
    // msg
    div {
      display: inline-block;
      margin-left: 15px;
      margin-top: -24px;
    }

    // icon
    i {
      background-color: $templateBgc;
      border: 1px solid $templateColor;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      display: inline-block;
      text-align: center;
    }
  }
}
</style>