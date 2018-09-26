<template>
  <div class="col-md-3 text-left pl-5">
    <h3>checkbBox</h3>
    <div>
      <input type="checkbox" class="chk" id="fruit1" value="checkbox1" />
      <label for="fruit1">checkbox1</label>
    </div>
    <div>
      <input type="checkbox" class="chk" id="fruit2" value="checkbox2" checked/>
      <label for="fruit2">checkbox2- checked</label>
    </div>
    <div>
      <input type="checkbox" class="chk" id="fruit3" value="checkbox3" disabled/>
      <label for="fruit3">checkbox3 - disabled</label>
    </div>
    <div>
      <input type="checkbox" class="chk" id="fruit4" value="checkbox4" checked disabled/>
      <label for="fruit4">checkbox4 - checked disabled</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Component8_1',
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
$templateColor: hsl(141, 52%, 61%);
$templateColorBlur: hsla(141, 52%, 61%, 0.36);
$templateColorBlur2: hsla(141, 52%, 61%, 0.06);

.chk[type='checkbox'] + label {
  display: block;
  cursor: pointer;
}

.chk[type='checkbox'] {
  display: none;
}

.chk[type='checkbox'] + label::before {
  content: '\2714';
  border: 2px solid #dee2e6;
  font-weight: 500;
  border-radius: 5px;
  display: inline-block;
  vertical-align: bottom;
  width: 18px;
  height: 16px;
  // line-height: 16px;
  padding: 0 2px 17px 2px;
  color: transparent;
  background-color: #dee2e6;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

/* 注意: :active::before  transform: scale(0); 會有效果 */
/* 注意: ::before:active  transform: scale(0); "不"會有效果 */
.chk[type='checkbox'] + label:active::before {
  transform: scale(0);
}

.chk[type='checkbox'] + label:hover::before{
   box-shadow: 0 0 0 1px lighten($templateColor, 20%);
}

/* 定義狀態 */
.chk[type='checkbox']:checked + label::before {
  color: #fff;
  background-color: $templateColor;
  border-color: $templateColor;
}

.chk[type='checkbox']:disabled + label::before {
  background-color: $templateColorBlur;
  border-color: $templateColorBlur2;
}

.chk[type='checkbox']:checked:disabled + label::before {
  background-color: $templateColorBlur;
  border-color: $templateColorBlur2;
  transform: scale(1);
}
</style>
