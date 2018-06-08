<template>
  <div>
    <!-- loop through each of your products and display it however you want. we're just printing the name here -->
    <h2>List of Products</h2>
    <ul>

      <table id="example" class="display" style="width:100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </tfoot>
      </table>

    </ul>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-buttons/js/dataTables.buttons.min.js'
import 'datatables.net-select/js/dataTables.select.min.js'
// import '../assets/dataTables.editor_aaron.js'
import '../assets/dataTables.editor.min.js'
import {
  apiDataTableDataTableGetAll3
} from '../api/api'

export default {
  name: 'datatable',
  created () { },
  mounted () {
    var editor // use a global for the submit and return data rendering in the examples

    $(document).ready(function () {
      editor = new $.fn.dataTable.Editor({
        ajax: apiDataTableDataTableGetAll3,
        table: '#example',
        fields: [{
          label: 'First name:',
          name: 'first_name'
        }, {
          label: 'Last name:',
          name: 'last_name'
        }, {
          label: 'Position:',
          name: 'position'
        }, {
          label: 'Office:',
          name: 'office'
        }, {
          label: 'Extension:',
          name: 'extn'
        }, {
          label: 'Start date:',
          name: 'start_date',
          type: 'datetime'
        }, {
          label: 'Salary:',
          name: 'salary'
        }
        ]
      })

      $('#example').DataTable({
        dom: 'Bfrtip',
        ajax: apiDataTableDataTableGetAll3,
        columns: [
          { data: null,
            render: function (data, type, row) {
              // Combine the first and last names into a single table field
              return data.first_name + ' ' + data.last_name
            } },
          { data: 'position' },
          { data: 'office' },
          { data: 'extn' },
          { data: 'start_date' },
          { data: 'salary', render: $.fn.dataTable.render.number(',', '.', 0, '$') }
        ],
        // select: true,
        select: false,
        buttons: [
          { extend: 'create', editor: editor },
          { extend: 'edit', editor: editor },
          { extend: 'remove', editor: editor }
        ]
      })
    })
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';
/* @import 'datatables.net-buttons/css/dataTables.buttons.min.css'; */
@import '../assets/editor.dataTables.min.css';
</style>
