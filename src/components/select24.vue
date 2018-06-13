<template>
  <div class="container">
    <div class="row">

        <select id="sel_menu3" class="js-data-example-ajax form-control">
          <option value="" selected="selected">請選擇</option>
        </select>

    </div>
  </div>
</template>
<script>
import {
  // apiStr
  apiSelect2Select24GetAll,
  // method
  methodGetSelect2Select24GetAll
} from '../api/api'
import 'select2/dist/js/select2.min.js'
import { select2Module } from '../config/select2.js'
export default {
  name: 'select24',
  created () { },
  mounted () {
    // 远程筛选
    $('#sel_menu3').select2({
      ajax: {
        url: apiSelect2Select24GetAll,
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {
            queryStr: params.term, // search term
            pageNo: params.page
          }
        },
        // 收到伺服器回應
        processResults: function (data, params) {
          params.page = params.page || 1
          return {
            results: data.items[0],
            pagination: {
              more: (params.page * 10) < data.total_count
            }
          }
        },
        cache: true
      },
      escapeMarkup: function (markup) { return markup }, // let our custom formatter work
      minimumInputLength: 1,
      templateResult: formatRepoProvince, // omitted for brevity, see the source of this page
      templateSelection: formatRepoProvince, // omitted for brevity, see the source of this page
      language: select2Module.language
    })

    // 製作下拉式選單
    function formatRepoProvince (repo) {
      if (repo['loading'] === undefined || repo.loading) return repo.text
      return '<div>' + repo.name + '</div>'
    }
  }
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>
