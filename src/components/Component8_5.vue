<template>
  <div class="col-md-6 text-left pl-5">
    <div class="text-center mb-5">
      <a href="https://www.youtube.com/watch?v=DYevj6UGNWA&index=40&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&t=279s" target="_blank">
        <h2>Step progress bar(Timeline)</h2>
      </a>
    </div>
    <div>
      <ul class="progressBar">
        <li class="active">Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_5'
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// 內容開始
$stepCount: 3;
$stepWidth: (100% / $stepCount);
$stepHieght: 30px;
$templateColor: green;

.progressBar {
  counter-reset: step;

  li {
    list-style-type: none;
    float: left;
    width: $stepWidth;
    text-align: center;
    position: relative;

    &::before {
      content: counter(step);
      counter-increment: step;
      height: $stepHieght;
      line-height: $stepHieght;
      width: $stepHieght;
      border: 1px solid #ddd;
      display: block;
      text-align: center;
      margin: 0 auto 10px;
      border-radius: 50%;
      background-color: #fff;
    }

    &::after {
      content: '';
      width: 100%;
      position: absolute;
      top: $stepHieght / 2;
      left: -50%;
      // border: 1px solid red;
      height: 1px;
      background-color: #ddd;
      z-index: -1;
    }

    /* 隱藏超過的線 */
    &:first-child:after {
      content: none;
    }

    // 被觸及
    &.active {
      color: $templateColor;
    }

    // 被觸及
    &.active::before {
      border-color: $templateColor;
    }
    // 被觸及
    &.active + li::after {
      background-color: $templateColor;
    }
  }
}
</style>