<template>
  <div class="container-fluid mt-4">
    <div class="row">

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
                  <td>Line 2
                    <input type="hidden" value="2" /> </td>
                  <td>DVap
                    <input type="hidden" value="DVap" /> </td>
                  <td>
                    <input type="text" value="22" /> </td>
                  <td>
                    <i class="fa fa-minus-square" aria-hidden="true"></i>
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
  name: 'DataTable5',
  created () { },
  mounted () {
    $(document).ready(function () {
      var dt = $('#example').dataTable()
      dt.fnDestroy()
    })

    $(document).ready(function () {
      var table = $('#example').DataTable({
        ajax: apiDataTableDataTableGetAll4,
        rowReorder: {
          dataSrc: 'order'
        },
        columns: [{
          data: 'order'
        }, {
          data: 'place'
        }, {
          data: 'name'
        }, {
          data: 'delete'
        }],

        'initComplete': function (oSettings) {
          $(this).on('click', 'i.fa.fa-minus-square', function (e) {
            table.row($(this).closest('tr')).remove().draw()
          })
        }

      })

      $('#example').css('border-bottom', 'none')
      $('<div class="addRow"><button id="addRow">Add New Row</button></div>').insertAfter('#example')
      $('#addRow').on('click', function () {
        var rowHtml = $('#newRow').find('tr')[0].outerHTML

        table.row.add($(rowHtml)).draw()

        table.page('last').draw('page')
      })
    })
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';

table#newRow {
  display: none;
}

div.addRow {
  line-height: 45px;
  background-color: #fff;
  padding-left: 10px;
  border-bottom: 1px solid;
  border-top: 1px solid #e5e5e5;
}
</style>
