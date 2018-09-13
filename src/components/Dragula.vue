<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="list">
          <div class="column">
            <h1 class="title">To Do</h1>
            <div class="item">
              <h2 class="item-title">do the dishes</h2>
            </div>
            <div class="item">
              <h2 class="item-title">learn Angular 2</h2>
            </div>
            <div class="item">
              <h2 class="item-title">learn Angular 2</h2>
            </div>
          </div>
          <button class="addListBtn list-dimension">Add a list...</button>
        </div>
        <div class="list">
          <div class="column">
            <h1 class="title">Done</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dragula from 'dragula'
export default {
  name: 'dragula',
  mounted () {
    ;(function () {
      var d = dragula({
        moves: function (el, cont, handle) {
          return handle.className !== 'title'
        }
      })
      var cs = document.querySelectorAll('.column')
      for (var i in cs) {
        d.containers.push(cs[i])
      }
    })()
  }
}
</script>
<style lang="scss" scoped>
@import 'dragula/dist/dragula.min.css';
* {
  font-family: 'Roboto', sans-serif !important;
}

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: {
    direction: row;
    wrap: wrap;
  }
  background-color: #0079bf;
}

.list {
  // display: inline-block;
  width: 20%;
  height: 100%;
  display: inline-block;
  border: 1px solid red;

  .column {
    // display: flex;
    // display: inline-block;
    display: inline-block;
    // flex: {
    //   direction: column;
    //   wrap: wrap;
    // }
    // align-items: stretch;
    // justify-content: flex-start;
    background-color: #e3e3e3;
    padding: 15px;
    border-radius: 4px;
    margin: 0 5px;
    .title {
      font: {
        size: 20px;
        weight: 700;
      }
      line-height: 1.3;
    }
    width: 100%;
    max-width: 250px;
    min-height: 200px;
    // height: 100%;
    height: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .addListBtn {
    display: inline-block;
    width: 100%;
    // height: 20%;
    outline: none;
    border: none;
    padding: 5px 10px;
    position: relative;
  }
}

.item {
  margin: {
    top: 5px;
  }
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}
</style>