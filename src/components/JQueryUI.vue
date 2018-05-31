<template>
  <div class="container-fluid mt-4">
    <eiv class="row">
      <div class="col-12">

        <div id="project-label">Select a project (type "j" for a start):</div>
        <input id="project">
        <input type="hidden" id="project-id">
        <p id="project-description"></p>

      </div>
    </eiv>
  </div>
</template>
<script>
import 'jquery-ui/ui/widgets/autocomplete'
import {
  apiDataJQueryUIJQueryUIGetAll
} from '../api/api'
export default {
  name: 'jqueryui',
  created () { },
  mounted () {
    (function () {
      // projects
      function autocompleteAjax (searchData, callback) {
        $.ajax({
          url: apiDataJQueryUIJQueryUIGetAll,
          type: 'GET',
          data: searchData,
          error: function () {
            console.log('error')
          },
          success: function (e) {
            if (callback) {
              callback(e)
            }
          }
        })
      }

      // 快取
      var cache = {}
      $('#project').autocomplete({
        minLength: 0,
        source: function (request, response) {
          var term = request.term
          if (term in cache) {
            response(cache)
          } else {
            autocompleteAjax(request, function (resp) {
              // cache.push.apply(cache, resp)
              cache[term] = resp
              response(resp)
            })
          }
        },
        focus: function (event, ui) {
          $('#project').val(ui.item.label)
          return false
        },
        select: function (event, ui) {
          $('#project').val(ui.item.label)
          $('#project-id').val(ui.item.value)
          $('#project-description').html(ui.item.desc)

          return false
        }
      }).autocomplete('instance')._renderItem = function (ul, item) {
        return $('<li>')
          .append('<div>' + item.label + '<br>' + item.desc + '</div>')
          .appendTo(ul)
      }
    }())
  }

}
</script>
<style lang="css">
@import 'jquery-ui/themes/base/all.css';

#project-label {
  display: block;
  font-weight: bold;
  margin-bottom: 1em;
}
#project-icon {
  float: left;
  height: 32px;
  width: 32px;
}
#project-description {
  margin: 0;
  padding: 0;
}

/* 添加下拉式選單的滾動條 */
.ui-autocomplete {
  max-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
}
/* IE 6 不支持max-height
   * 我們使用height 代替，但是這會強制菜單總是顯示為那個高度*/
* html .ui-autocomplete {
  height: 100px;
}
</style>
