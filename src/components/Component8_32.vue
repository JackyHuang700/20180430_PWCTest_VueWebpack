<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://www.youtube.com/watch?v=IFai8qTKvEM" target="_blank">
        <h5>Content Box with Hover Effects - Html Css Creative Box Hover Effect Tutorial</h5>
      </a>
    </div>
    <div class="col-md-12 text-center" id="boxList">
      <div class="box">
        <div class="icon">
          <i class="fab fa-accusoft"></i>
        </div>
        <div class="content">
          <h3>Search</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita cumque vero adipisci porro rem magni culpa maiores saepe sapiente? Soluta tempore accusantium eveniet praesentium at ullam impedit ratione labore ut, explicabo vero itaque magnam, atque voluptatum maxime tempora, inventore nisi unde molestias! Quidem, perferendis quam quisquam deleniti officia numquam.</p>
        </div>
      </div>
      <div class="box">
        <div class="icon">
          <i class="fab fa-accusoft"></i>
        </div>
        <div class="content">
          <h3>Search</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita cumque vero adipisci porro rem magni culpa maiores saepe sapiente? Soluta tempore accusantium eveniet praesentium at ullam impedit ratione labore ut, explicabo vero itaque magnam, atque voluptatum maxime tempora, inventore nisi unde molestias! Quidem, perferendis quam quisquam deleniti officia numquam.</p>
        </div>
      </div>
      <div class="box">
        <div class="icon">
          <i class="fab fa-accusoft"></i>
        </div>
        <div class="content">
          <h3>Search</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita cumque vero adipisci porro rem magni culpa maiores saepe sapiente? Soluta tempore accusantium eveniet praesentium at ullam impedit ratione labore ut, explicabo vero itaque magnam, atque voluptatum maxime tempora, inventore nisi unde molestias! Quidem, perferendis quam quisquam deleniti officia numquam.</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_32'
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$contentTop: 100px;

#boxList {
  .box {
    position: relative;
    width: calc(400px - 30px);
    height: calc(300px - 30px);
    background-color: #000;
    display: inline-block;
    margin: 15px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;

    &:hover {
      .icon {
        top: 20px;
        left: calc(50% - 40px);
        width: 80px;
        height: 80px;
        border-radius: 50%;

        .fab {
          font-size: 40px;
        }
      }

      .content {
        top: $contentTop;
        opacity: 1;
      }
    }

    &:nth-child(1) {
      background-color: #4caf50;
      .icon {
        background-color: #319635;
      }
    }

    &:nth-child(2) {
      background-color: #f54967;
      .icon {
        background-color: #d03852;
      }
    }

    &:nth-child(3) {
      background-color: #328fa5;
      .icon {
        background-color: #23798e;
      }
    }

    .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f00;
      z-index: 1;
      transition: 0.5s;

      .fab {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        transition: 0.5s;
        color: #fff;
      }
    }

    .content {
      position: absolute;
      top: 100%;
      height: calc(-$contentTop);
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
      transition: 0.5s;
      opacity: 0;

      h3 {
        margin: 0 0 10px;
        padding: 0;
        color: #fff;
        font-size: 24px;
      }
      p {
        margin: 0;
        padding: 0;
        color: #fff;
      }
    }
  }
}
</style>
