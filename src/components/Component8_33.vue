<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://www.youtube.com/watch?v=v5OLSoGZBg0&t=42s" target="_blank">
        <h5>Html Css List Item Hover Effects - Cool Css Hover Effects - Pure CSS Tutorial for Beginners</h5>
      </a>
    </div>
<div class="col-md-12">
          <section id="wrap">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
            </ul>
          </section>
          <section id="wrapStyle2">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
            </ul>
          </section>
          <section id="wrapStyle3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.</li>
            </ul>
          </section>
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

#wrap {
  display: inline-block;
  background-color: #262626;
  padding: 20px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 1);
  width: 100%;
  max-width: 500px;

  h1 {
    margin: 0;
    padding: 0 0 0 20px;
    color: #fff;
    border-left: 5px solid #2196f3;
  }

  ul {
    margin: 10px 0;
    padding: 0;
    li {
      list-style: none;
      padding: 5px 10px;
      color: #fff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      z-index: 1;
      overflow: hidden;

      &:hover {
        &::before {
          left: 0;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: #2196f3;
        z-index: -1;
        transition: left 0.5s;
      }
    }
  }
}

#wrapStyle2 {
  display: inline-block;
  background-color: #262626;
  padding: 20px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 1);
  width: 100%;
  max-width: 500px;

  h1 {
    margin: 0;
    padding: 0 0 0 20px;
    color: #fff;
    border-left: 5px solid #2196f3;
  }

  ul {
    margin: 10px 0;
    padding: 0;
    li {
      list-style: none;
      padding: 5px 10px;
      color: #fff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      z-index: 1;
      overflow: hidden;

      &:hover {
        &::before {
          bottom: 0;
        }
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2196f3;
        z-index: -1;
        transition: bottom 0.5s;
      }
    }
  }
}

#wrapStyle3 {
  display: inline-block;
  background-color: #262626;
  padding: 20px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 1);
  width: 100%;
  max-width: 500px;

  h1 {
    margin: 0;
    padding: 0 0 0 20px;
    color: #fff;
    border-left: 5px solid #2196f3;
  }

  ul {
    margin: 10px 0;
    padding: 0;
    li {
      list-style: none;
      padding: 5px 10px;
      color: #fff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      z-index: 1;
      overflow: hidden;

      &:hover {
        &::before {
        transform: rotateY(0deg);
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2196f3;
        z-index: -1;
        transition: transform 0.5s;
        transform: rotateY(90deg);
      }
    }
  }
}

</style>
