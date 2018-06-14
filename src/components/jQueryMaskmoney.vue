<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <button type="button" id="addRowBtn">動態新增</button>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <div class="col-12" id="addRow">
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
              <input type="text" id="" class="text-right maskMoney" />
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import 'jquery-maskmoney/dist/jquery.maskMoney.min.js'
export default {
  name: 'jquerymaskmoney',
  created () { },
  mounted () {
    (function () {
      var addRowBtnDom = document.getElementById('addRowBtn')
      var addRowDom = document.getElementById('addRow')
      addRowBtnDom.addEventListener('click', (e) => {
        addRowDom.innerHTML += '<input type="text" id="" class="text-right maskMoney" />'
        $('.maskMoney').maskMoney()
      })

      $('.maskMoney').maskMoney()
    }())
  }
}
</script>
<style lang="css" scoped>
</style>