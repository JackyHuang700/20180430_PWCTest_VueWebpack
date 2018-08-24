<template>
  <div class="col-md-3 mt-4 ">
    <a href="https://www.youtube.com/watch?v=TU5FBVS5f1w" target="_blank" style="display:block;" class="w-100">
      <h3>Dropdown</h3>
    </a>

    <div class="positionCenter">
      <div class="dropdown">
        <button type="button" class="button">Button</button>
        <div class="menu">
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <div class="subDropdown">
            <a href="#">subMenu</a>
            <div class="subMenu">
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
            </div>
          </div>
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <div class="subDropdown">
            <a href="#">subMenu</a>
            <div class="subMenu">
              <a href="#">subMenu</a>
              <div class="subDropdown">
                <a href="#">subMenu</a>
                <div class="subMenu">
                  <a href="#">subMenu</a>
                  <a href="#">subMenu</a>
                  <a href="#">subMenu</a>
                  <a href="#">subMenu</a>
                </div>
              </div>
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
            </div>
          </div>
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <a href="#">menuItem</a>
          <div class="subDropdown">
            <a href="#">subMenu</a>
            <div class="subMenu">
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
              <a href="#">subMenu</a>
              <div class="subDropdown">
                <a href="#">subMenu</a>
                <div class="subMenu">
                  <a href="#">subMenu</a>
                  <a href="#">subMenu</a>
                  <div class="subDropdown">
                    <a href="#">subMenu</a>
                    <div class="subMenu">
                      <a href="#">subMenu</a>
                      <a href="#">subMenu</a>
                      <a href="#">subMenu</a>
                      <a href="#">subMenu</a>
                    </div>
                  </div>
                  <a href="#">subMenu</a>
                  <a href="#">subMenu</a>
                </div>
              </div>
              <a href="#">subMenu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_4'
}
</script>
<style lang="scss" scoped>
/*  */
.positionCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 內容開始 */

$templateBgc: hsl(215, 70%, 71%);
$templateBgcHover: hsla(215, 71%, 66%, 0.749);
$templateColor: #fff;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dropdown {
  position: relative;
  display: inline-block;

  &:hover {
    .button {
      background-color: $templateBgc;
    }

    .menu {
      visibility: visible;
      opacity: 1;
    }
  }

  .button {
    border: none;
    padding: 8px 16px;
    background-color: $templateBgc;
    color: $templateColor;
    cursor: pointer;
    border-radius: 5px;
    transition: color 0.3s ease-in-out;
  }

  /* 第一層 */
  .menu {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    min-width: 100%;
    visibility: hidden;
    display: inline-block;
    opacity: 0;
    transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    a {
      text-decoration: none;
      color: $templateColor;
      display: block;
      padding: 8px;
      background-color: $templateBgc;
      white-space: nowrap;
      height: auto;

      &:hover {
        background-color: $templateBgcHover;
      }
    }

    /* 第n層 */
    .subDropdown {
      position: relative;

      &:hover {
        > .subMenu {
          visibility: visible;
          opacity: 1;
        }
      }

      .subMenu {
        transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out,
          background-color 0.3s ease-in-out;

        border-bottom: 1px solid white;
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        display: block;
        visibility: hidden;
        opacity: 0;
      }
    }
  }
}
</style>
