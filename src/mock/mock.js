import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import 'jquery-mockjax/src/jquery.mockjax.js'
// import 'jquery-mockjax'

import {
  select2List
} from './data/select2List'
import {
  dataList as jqueryUIList
} from './data/jqueryUIList'
import {
  dataList as vanillaDatatables
} from './data/vanillaDatatables'
import {
  dataTableList,
  dataTableList2 as dataTableListaa
} from './data/dataTableList'

import {
  apiDataJQueryUIJQueryUIGetAll,
  apiSelect2Select24GetAll,
  apiDataTableDataTableGetAll,
  apiDataTableDataTableGetAll2,
  apiVanillaDatatablesVanillaDatatablesGetAll
} from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)

    mock.onGet(apiSelect2Select24GetAll).reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var {
            queryStr,
            pageNo
          } = config.params

          var newList = pagination(select2List, queryStr, pageNo)

          resolve([
            200,
            {
              select2List: newList
            }
          ])
        }, 500)
      })
    })
  },

  // jquery mock
  init_jquery () {
    // var mockjaxList = [
    //   // JQueryUI
    //   {
    //     url: apiDataJQueryUIJQueryUIGetAll,
    //     list: jqueryUIList
    //   },
    //   // dataTableList
    //   {
    //     url: apiDataTableDataTableGetAll2,
    //     list: dataTableListaa
    //   }
    // ]

    // for (var item in mockjaxList) {
    //   $.mockjax({
    //     type: 'GET',
    //     url: mockjaxList[item].url,
    //     status: 200,
    //     dataType: 'json',
    //     responseTime: 150,
    //     contentType: 'application/json',
    //     response: function () {
    //       // 回應
    //       this.responseText = mockjaxList[item].list
    //     }
    //   })
    // }

    // vanilla-datatables
    $.mockjax({
      type: 'GET',
      url: apiVanillaDatatablesVanillaDatatablesGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // var {
        //   term
        // } = setting.data
        // 回應
        this.responseText = vanillaDatatables
      }
    })

    // JQueryUI
    $.mockjax({
      type: 'GET',
      url: apiDataJQueryUIJQueryUIGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        var {
          term
        } = setting.data

        var results = jqueryUIList.filter(function (item) {
          return item.value.toLowerCase().indexOf(term.toLowerCase()) > -1
        }).splice(0, 10)

        // 回應
        this.responseText = results
      }
    })

    // dataTableList
    $.mockjax({
      type: 'GET',
      url: apiDataTableDataTableGetAll2,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function () {
        // 回應
        this.responseText = dataTableListaa
      }
    })

    // select2
    $.mockjax({
      type: 'GET',
      url: apiSelect2Select24GetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        var {
          queryStr,
          pageNo
        } = settings.data

        var items = pagination(select2List, queryStr, pageNo || 1)
        for (var i in items[0]) {
          items[0][i]['loading'] = false
        }

        // 回應
        this.responseText = {
          items: items,
          total_count: select2List.length
        }
      }
    })

    // dataTable
    $.mockjax({
      type: 'GET',
      url: apiDataTableDataTableGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (settings) {
        console.info('settings: ', settings)
        var {
          draw,
          start,
          length
        } = settings.data
        var {
          value,
          regex
        } = settings.data.search

        console.log('start', start)
        console.log('length', length)

        // copy new data
        var newDataTableList = JSON.parse(JSON.stringify(dataTableList))
        // console.log('dataTableList', newDataTableList)
        newDataTableList.draw = draw
        newDataTableList.data = paginationToDataTable(
          newDataTableList.data,
          value || '',
          start || 0,
          length || 10
        )
        // console.log('dataTableList2', newDataTableList)
        // 回應
        this.responseText = newDataTableList
      }
    })
  }
}

// pageNo 當前頁數
function pagination (array, queryStr, pageNo) {
  // 計算分頁資料
  let newList = []
  var pageSize = 10
  var offset = (pageNo - 1) * pageSize
  // 搜尋
  // 分頁
  newList.push(
    offset + pageSize >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + pageSize)
  )
  return newList
}

// pageNo 當前頁數
function paginationToDataTable (array, queryStr, pageNo, pageSize) {
  // 計算分頁資料
  let newList = []
  var offset = (pageNo - 1) * pageSize
  // 搜尋
  // 分頁
  var newItems = array.slice(pageNo, (pageNo + pageSize))

  for (var i in newItems) {
    newList.push(newItems[i])
  }

  return newList
}
