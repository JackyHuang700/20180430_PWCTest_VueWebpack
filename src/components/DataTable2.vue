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
import 'datatables.net-buttons/js/buttons.flash.js'
import JSZip from 'jszip'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import 'datatables.net-buttons/js/buttons.colVis.js'
import 'datatables.net-buttons/js/buttons.html5.js'
import 'datatables.net-buttons/js/buttons.print.js'

import {
  apiDataTableDataTableGetAll2
} from '../api/api'

export default {
  name: 'datatable2',
  created () {
    // find datatable excel button not showing webpack
    // https://stackoverflow.com/questions/46829916/npm-datatable-excel-button-not-showing
    window.JSZip = JSZip
    pdfMake.vfs = pdfFonts.pdfMake.vfs
  },
  mounted () {
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
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    })
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';
</style>