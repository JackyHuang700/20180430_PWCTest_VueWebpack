<template>
  <div class="col-md-3 text-left pl-5">
    <h3>switch</h3>
    <div>
      <label class="switch" for="switchBtn">
        <input type="checkbox" id="switchBtn">
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_2'
}
</script>
<style lang="scss" scoped>
$templateColor: #80ace9;
$templateColor2: #777;

.switch {
  height: 30px; /* =h */
  width: 60px; /* =w */
  display: inline-block;
  transform: translateY(50%);
  position: relative;
}

.switch input {
  display: none;
}

.switch .slider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0 0 0 2px $templateColor, 0 0 0 4px $templateColor;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: hidden;
}

.switch .slider::before {
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  // border: 1px solid red;
  border-radius: 30px;
  background-color: $templateColor;
  transform: translateX(-30px); /* translateX(-(w-h)) */
  transition: transform 0.1s ease-in-out;
}

.switch > input[type='checkbox']:checked + .slider::before {
  transform: translateX(30px); /* translateX(w-h) */
  background-color: $templateColor;
}

.switch > input[type='checkbox']:checked + .slider {
  box-shadow: 0 0 0 2px $templateColor, 0 0 0 4px $templateColor;
}
</style>
