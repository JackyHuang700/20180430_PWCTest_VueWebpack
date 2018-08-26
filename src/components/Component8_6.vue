<template>
  <div class="col-md-3 text-left pl-5">
    <div class="text-center mb-5">
      <a href="https://www.youtube.com/watch?v=iia6QO-p4D8&index=42&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&t=3s" target="_blank">
        <h2>Button Hover</h2>
      </a>
    </div>
    <div>
      <div class="hoverBtn"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Component8_6'
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* 內容開始 */

$templateBgc: tomato;
$afterDistance: 30px;

.hoverBtn {
  width: 160px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: $templateBgc;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    display: inline-block;
    content: 'Hover me';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease-in-out;
    font-size: 15px;
  }

  &:hover::before {
    top: -$afterDistance;
  }

  &::after {
    font-family: 'Font Awesome 5 Free';
    // unicode
    content: '\f044';
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: calc(100% + 30px);
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease-in-out;
  }
  &:hover::after {
    top: 50%;
  }
}
</style>