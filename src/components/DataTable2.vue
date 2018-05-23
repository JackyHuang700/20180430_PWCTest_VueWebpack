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
import 'datatables'
import {
  apiDataTableDataTableGetAll2
} from '../api/api'

export default {
  name: 'datatable2',
  created () { },
  mounted () {
    var buttonCommon = {
      exportOptions: {
        format: {
          body: function (data, row, column, node) {
            // Strip $ from salary column to make it numeric
            return column === 5
              ? data.replace(/[$,]/g, '')
              : data
          }
        }
      }
    }

    $('#example').DataTable({
      ajax: apiDataTableDataTableGetAll2,
      columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'extn' },
        { data: 'start_date' },
        { data: 'salary' }
      ],
      dom: 'Bfrtip',
      buttons: [
        $.extend(true, {}, buttonCommon, {
          extend: 'copyHtml5'
        }),
        $.extend(true, {}, buttonCommon, {
          extend: 'excelHtml5'
        }),
        $.extend(true, {}, buttonCommon, {
          extend: 'pdfHtml5'
        })
      ]
    })
  }
}
</script>
<style lang="css">
@import 'datatables/media/css/jquery.dataTables.min.css';
</style>
