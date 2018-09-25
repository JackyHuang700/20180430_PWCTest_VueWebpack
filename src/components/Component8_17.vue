<template>
  <section class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://www.youtube.com/watch?v=JLA0bMMWlfo" target="_blank">
      <!-- or  https://www.youtube.com/watch?v=LWFcee11a00&index=68&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&t=28s -->
        <h5>CSS User Card UI Design With Cool Image Hover Effects | Html CSS</h5>
      </a>
    </div>
    <div class="col-md-12 mt-4 body">
      <div class="card" v-for="n in 5" :key="n">
        <div class="imgBox">
          <img src="http://fakeimg.pl/300x440/" alt="">
        </div>
        <div class="content">
          <h2>Some Famous<br/>
            <span>UX/UI Designer</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident, reprehenderit ex vero laboriosam distinctio aliquam ullam soluta minus</p>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitch" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'component8_17'
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.body {
  position: relative;
  width: 95%;
  margin: 100px auto 0px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto 1fr auto;
  grid-gap: 40px;

  .card {
    width: 300px;
    height: 440px;
    position: relative;
    background-color: #000;
    overflow: hidden;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    border-radius: 10px;
    display: 0 auto;

    &:hover {
      transform: translateY(-20px);
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);

      .imgBox {
        opacity: 0.5;
      }

      .content {
        bottom: 0;
      }
    }

    &:nth-child(1) .content {
      background: linear-gradient(0deg, #c21833, transparent);
    }
    &:nth-child(2) .content {
      background: linear-gradient(0deg, #8012a5, transparent);
    }
    &:nth-child(3) .content {
      background: linear-gradient(0deg, #3a414c, transparent);
    }
    &:nth-child(4) .content {
      background: linear-gradient(0deg, #2196f3, transparent);
    }

    .imgBox {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition-property: opacity;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;

      img {
        max-width: 100%;
      }
    }

    .content {
      position: absolute;
      width: 100%;
      height: 60%;
      bottom: -100%;
      padding: 0 10px;
      // padding-top: 60px;
      box-sizing: border-box;
      text-align: center;
      transition-property: bottom;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;

      h2 {
        margin: 0 0 10px;
        padding: 0;
        color: #fff;
        font-size: 20px;

        span {
          color: #ffeb3b;
          font-size: 16px;
        }
      }

      p {
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 16px;
      }

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;

        li a {
          color: #fff;
          padding: 0 10px;
          font-size: 18px;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
          // transition-property: ;
        }
      }
    }
  }
}
</style>