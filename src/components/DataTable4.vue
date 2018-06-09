<template>
  <div class="container-fluid mt-4">
    <div class="row">

      <div class="col-12 my-4">
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <div class="addRow text-left">
              <button id="addRow" class="btn btn-primary">Add New Row</button>
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">動態新增Table</div>
          <div class="card-body">
            <table id="example" class="display" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>order</th>
                  <th>name</th>
                  <th>country</th>
                  <th>delete</th>
                </tr>
              </thead>
            </table>

            <table id="newRow">
              <tbody>
                <tr>
                  <td>
                    <input class="form-control" type="text" value="2" data-name="mainName_1" />
                  </td>
                  <td>
                    <input class="form-control" type="text" value="DVap" data-name="mainName_2" />
                  </td>
                  <td>
                    <input class="form-control" type="text" value="22" data-name="mainName_3" />
                  </td>
                  <td>
                    <!-- <i class="fa fa-minus-square" aria-hidden="true"></i> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer"></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-rowreorder/js/dataTables.rowReorder.min.js'
import {
  apiDataTableDataTableGetAll4
} from '../api/api'

export default {
  name: 'DataTable4',
  created () { },
  mounted () {
    $(document).ready(function () {
      var dt = $('#example').dataTable()
      dt.fnDestroy()
    })

    $(document).ready(function () {
      // dataTable
      var table = $('#example').DataTable({
        ajax: apiDataTableDataTableGetAll4,
        // rowReorder: {
        //   dataSrc: 'order'
        // },
        bPaginate: false,
        order: [
          [ 0, 'desc' ]
        ],
        columns: [{
          data: 'order'
        }, {
          data: 'place'
        }, {
          data: 'name'
        }, {

        }],
        columnDefs: [
          {
            'targets': -1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<i class="fa fa-minus-square" aria-hidden="true"></i>')
            }
          }
        ],
        // 刪除單筆資料
        'initComplete': function (oSettings) {
          $(this).on('click', 'i.fa.fa-minus-square', function (e) {
            table.row($(this).closest('tr')).remove().draw()
            // console.log(table.data())
            UpdateIndex()
          })
        }

      })

      //
      $('#example').css('border-bottom', 'none')
      // 添加新增按鈕
      // $('<div class="addRow"><button id="addRow">Add New Row</button></div>').insertAfter('#example')
      $('#addRow').on('click', function () {
        var rowHtml = $('#newRow').find('tr')[0].outerHTML

        table.row.add($(rowHtml)).draw()
        // 跳到最後一頁
        // table.page('last').draw('page')

        // console.log(table)
        UpdateIndex()
      })

      // 更新Table底下所有Index
      function UpdateIndex () {
        var domIndex = 0
        var domIndexAdd = false
        var aaDom = document.getElementById('example')
        var trDomList = aaDom.querySelectorAll('tr')
        for (let trIndex = 0; trIndex < trDomList.length; trIndex++) {
          var tr = trDomList[trIndex]
          if (tr.firstElementChild != null) {
            var tdDomList = tr.querySelectorAll('td')
            for (let tdIndex = 0; tdIndex < tdDomList.length; tdIndex++) {
              var tdDom = tdDomList[tdIndex]
              var inputDom = tdDom.querySelector('input')
              if (inputDom) {
                var inputDomName = inputDom.getAttribute('data-name')
                inputDom.name = inputDomName + '[' + domIndex + ']'
                domIndexAdd = true
              }
            }
          }
          if (domIndexAdd) {
            domIndex = domIndex + 1
            console.log('domIndex', domIndex)
            domIndexAdd = false
          }
        }
      }
    })
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';
/* dataTables.rowReorder css */
table.dt-rowReorder-float {
  position: absolute !important;
  opacity: 0.8;
  table-layout: fixed;
  outline: 2px solid #888;
  outline-offset: -2px;
  z-index: 2001;
}
tr.dt-rowReorder-moving {
  outline: 2px solid #555;
  outline-offset: -2px;
}
body.dt-rowReorder-noOverflow {
  overflow-x: hidden;
}
table.dataTable td.reorder {
  text-align: center;
  cursor: move;
}
/* order css */
table#newRow {
  display: none;
}

/* div.addRow {
  line-height: 45px;
  background-color: #fff;
  padding-left: 10px;
  border-bottom: 1px solid;
  border-top: 1px solid #e5e5e5;
} */
</style>
