<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12">

        <div class="container-fluid">
          <div class="row">

            <div class="col-sm-12 mb-4">
              <div class="card">
                <div class="card-header"></div>
                <div class="card-body">

                  <div class="text-left">
                    <button type="button" id="addColumn">測試新增</button>
                  </div>

                </div>
                <div class="card-footer"></div>
              </div>
            </div>

            <div class="col-sm-12">
              <table class="table"></table>
            </div>
            <div class="col-sm-12">
              <button type="button" id="delete-rows" class="btn btn-danger pull-right invisible">Delete Rows</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import DataTable from 'vanilla-datatables/dist/vanilla-dataTables.min.js'
import 'vanilla-datatables-editable/datatable.editable.js'
import {
  apiVanillaDatatablesVanillaDatatablesGetAll
} from '../api/api'
export default {
  name: 'vanilladatatables',
  created () { },
  mounted () {
    var myData = {
      headings: [
        'id',
        'Name',
        'Company',
        'Ext.',
        'Start Date',
        'Email',
        'Phone No.'
      ],
      data: [
        [
          '1',
          'Hedwig F. Nguyen',
          'Arcu Vel Foundation',
          '9875',
          '03/27/2017',
          'nunc.ullamcorper@metusvitae.com',
          '070 8206 9605'
        ],
        [
          '2',
          'Genevieve U. Watts',
          'Eget Incorporated',
          '9557',
          '07/18/2017',
          'Nullam.vitae@egestas.edu',
          '0800 106980'
        ]
      ]
    }

    // vanilla-datatables
    window.DataTable = require('vanilla-datatables/dist/vanilla-dataTables.min.js')
    // console.log(window.DataTable)
    // console.log(typeof window.DataTable === 'function');
    //
    var datatable
    (function () {
      // Instantiate
      datatable = new DataTable('table', {
        // ajax: {
        //   url: apiVanillaDatatablesVanillaDatatablesGetAll
        //   //   // url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/massive.json'
        // },
        columns: [
          // { select: 1, hidden: true }

        ],
        data: myData,
        plugins: {
          editable: {
            enabled: true,
            contextMenu: true,
            hiddenColumns: true,
            menuItems: [
              {
                text: "<span class='mdi mdi-lead-pencil'></span> Edit Cell",
                action: function () {
                  this.editCell()
                }
              },
              {
                text: "<span class='mdi mdi-lead-pencil'></span> Edit Row",
                action: function () {
                  this.editRow()
                }
              },
              {
                separator: true
              },
              {
                text: "<span class='mdi mdi-delete'></span> Remove",
                action: function () {
                  if (confirm('Are you sure?')) {
                    this.removeRow()
                  }
                }
              }
            ]
          }
        }
      })
      // 隱藏欄位
      var columns = datatable.columns()
      columns.hide([0])

      var firstRow = document.querySelector('tr')
      // datatable.on('datatable.ajax.loaded', function () {
      //   // IE9
      //   this.wrapper.className = this.wrapper.className.replace(' dataTable-loading', '')
      // })

      datatable.on('editable.save.cell', function (newValue, oldValue, cell) {
        // do something when the cell is saved
        console.log('editable.save.cell')
        console.log('newValue', newValue)
        console.log('oldValue', oldValue)
        console.log('firstRow.rowIndex', firstRow.rowIndex)
      })

      datatable.on('editable.save.row', function (newData, oldData, row) {
        // do something when the row is saved
        console.log('editable.save.row')
        console.log('newData', newData)
        console.log('oldData', oldData)
      })

      console.log(datatable.editable)
      // datatable.editable.init()
    }());
    // test button
    (function () {
      var addColumnDom = document.getElementById('addColumn')
      addColumnDom.addEventListener('click', function (e) {
        // datatable.insert([
        //   {
        //     'id': 3,
        //     'Name': 'Hedwig F. Nguyen',
        //     'Company': 'Arcu Vel Foundation',
        //     'Ext.': '9875',
        //     'Start Date': '03/27/2017',
        //     'Email': 'nunc.ullamcorper@metusvitae.com',
        //     'Phone No.': '070 8206 9605'
        //   }
        // ])

      })
    }())
  }
}
</script>
<style lang="css">
@import 'vanilla-datatables/dist/vanilla-dataTables.min.css';
@import 'vanilla-datatables-editable/datatable.editable.min.css';
</style>