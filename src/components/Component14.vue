<template>
  <div class="body">
    <!-- 複製出去要刪除 -->
    <a class="referenceInfo" target="_blank" href="https://www.youtube.com/watch?v=3PZAlID3T78&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&index=54&t=9s">
      Sliding Sidebar Contact Form | Html CSS & Javascript
    </a>
    <div class="sidebarContact sidebarContactPositioin">
      <div class="toggle"></div>
      <h2>Contact Us</h2>
      <form action="">
        <input type="text" placeholder="name">
        <input type="email" placeholder="Email">
        <input type="rel" placeholder="Phone Number">
        <textarea cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" value="Send">
      </form>
    </div>
    <div class="banner"></div>
    <div class="content">
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, repudiandae.</h2>
      <div v-for="i in 100" :key="i">
        <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi non commodi necessitatibus nihil perferendis, eveniet aliquid ipsam neque! Alias possimus ex natus quidem id fuga adipisci rerum amet eius! Eum excepturi possimus quo necessitatibus? Excepturi magni earum molestiae repellat, autem ipsam est eius nobis voluptate ad ipsa inventore distinctio veniam?</p>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'component14',
  mounted () {
    ;(function () {
      var toggleDomtStr = 'toggle'
      var sidebarContacDomtStr = 'sidebarContact'
      var toggleDom = document.getElementsByClassName(toggleDomtStr)[0]
      var sidebarContactDom = document.getElementsByClassName(
        sidebarContacDomtStr
      )[0]
      toggleDom.addEventListener('mouseenter', function (e) {
        var self = e.target
        var sidebarContactDom = self.closest('.' + sidebarContacDomtStr)
        if (sidebarContactDom) {
          // self.style.display = 'none'
          console.log('12312')

          self.classList.add('toggleHide')
          self.classList.remove('toggleShow')
          sidebarContactDom.classList.add('mt-left-0')
        }
      })
      sidebarContactDom.addEventListener('mouseleave', function (e) {
        var self = e.target
        var toggleDom = self.getElementsByClassName(toggleDomtStr)[0]
        self.classList.remove('mt-left-0')
        if (toggleDom) {
          // toggleDom.style.display = 'block'
          toggleDom.classList.remove('toggleHide')
          toggleDom.classList.add('toggleShow')
        }
      })
    })()
  }
}
</script>
<style lang="scss">
/* hide navbar */
nav.navbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

.referenceInfo {
  position: absolute;
  top: calc(15%);
  left: 50%;
  transform: translateX(-50%);
  color: red;
}

/* 內容開始 */
$sidebarContactWidth: 350px;

.banner {
  width: 100%;
  height: 100vh;
  background: url('../assets/Component13/bgc.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.content {
  padding: 50px 100px;

  h2 {
    margin: 0 0 20px;
    padding: 0;
    font-size: 30px;
  }

  p {
    font-size: 10px;
  }
}

/* 側邊攔 */

.mt-left-0.mt-left-0 {
  left: 0;
}

.sidebarContactPositioin {
  position: fixed;
  top: 50%;
  left: -$sidebarContactWidth;
  transform: translateY(-50%);
  transition: left 0.2s ease-in;
}

.sidebarContact {
  width: $sidebarContactWidth;
  height: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  /*  */
  .toggle {
    position: absolute;
    top: 0;
    right: -48px;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
    background-color: rgba(#f00, 0.8);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: opacity 0.3s ease-in, visibility 0.3s ease-in;

    &::before {
      content: '\f0e0';
      font-family: 'Font Awesome 5 Free';
      font-size: 18px;
      color: #fff;
    }

    /* 動畫使用 */
    &.toggleShow {
      // display: block;
      opacity: 1;
      visibility: visible;
    }
    /* 動畫使用 */
    &.toggleHide {
      // display: none;
      opacity: 0;
      visibility: hidden;
    }
  }

  h2 {
    margin: 0 0 20px;
    padding: 0;
    text-align: center;
  }

  input,
  textarea {
    width: 100%;
    height: 36px;
    padding: 5px;
    margin-bottom: 10px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  [type='submit'] {
    background-color: #00bcd4;
    color: #fff;
    cursor: pointer;
    border: none;
    font-size: 18px;
  }
}
</style>