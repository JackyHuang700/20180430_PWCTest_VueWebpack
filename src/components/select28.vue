<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

        <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">

              <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                  <select class="js-select2">
                    <option>Select A</option>
                    <option>Select B</option>
                    <option>Select C</option>
                    <option>Select</option>
                  </select>
                </div>
                <div class="card-footer"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import 'select2/dist/js/select2.min.js'
export default {
  name: 'select24',
  created () { },
  mounted () {
    $('.js-select2').select2({
      dropdownParent: $('#modal')
    })
  },
  methods: {}
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';

/* 解Bug */

</style>


// 加寬input長度，方便顯示
<style lang="sass">
.select2.select2-container
  width: 200px !important
</style>


// 設置多選清單為紅色
<style lang="sass">
.select2.select2-container .select2-selection--multiple .select2-selection__choice
  background-color: #f8f8f8
  border: 1px solid #ccc
  -webkit-border-radius: 3px
  -moz-border-radius: 3px
  border-radius: 3px
  margin: 4px 4px 0 0
  padding: 0 6px 0 22px
  height: 24px
  line-height: 24px
  font-size: 12px
  position: relative

.select2.select2-container .select2-selection--multiple .select2-selection__choice .select2-selection__choice__remove
  position: absolute
  top: 0
  left: 0
  height: 22px
  width: 22px
  margin: 0
  text-align: center
  color: #e74c3c
  font-weight: bold
  font-size: 16px
</style>
