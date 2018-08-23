<template>
  <div class="col-md-3 text-left pl-5 mt-4" style="background-color:#f3f3f3;">
    <a href="https://www.youtube.com/watch?v=BQSNBa3gZJU&list=PLwTi4JslRNFSDNNzOHOzguiLGGQIlvX8C&index=3&t=0s" target="_blank">
      <h3>switch</h3>
    </a>
    <div>
      <p>
        unchecked
      </p>
      <input class="switch" type="checkbox" name="" id="">
    </div>
    <div>
      <p>
        checked
      </p>
      <input class="switch" type="checkbox" name="" id="" checked>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_3'
}
</script>
<style lang="scss" scoped>

$switchSize: 30px;
$switchColor: #fff;
$switchBgcColor:  #03a9f4;;

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

.switch[type='checkbox'] {
  position: relative;
  width: $switchSize *2;
  height: $switchSize;
  -webkit-appearance: none;
  background-color: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition:  background-color .3s ease-in-out;
}


.switch:checked[type='checkbox']{
  background-color: $switchBgcColor;
}

.switch[type='checkbox']:before{
  content: '';
  display: inline-block;
  width: $switchSize;
  height: $switchSize;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $switchColor;
  transform: scale(1.1);
  border-radius: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  transition: left .3s ease-in-out;
}

.switch:checked[type='checkbox']:before{
  left: $switchSize;
}
</style>
