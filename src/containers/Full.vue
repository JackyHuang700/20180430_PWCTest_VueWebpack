<template>
  <div id="app">
    <Navbar :narbarList="narbarList" />
    <router-view></router-view>
  </div>
</template>

<script>
// import { Header as AppHeader } from '../components/'
import Navbar from '../components/Navbar'

export default {
  name: 'full',
  components: {
    Navbar
  },
  data () {
    return {
      narbarList: [
        {
          href: '#/',
          hrefName: 'Footable(custom)'
        },
        {
          href: '#/izitoast',
          hrefName: 'iziToast'
        },
        {
          hrefName: 'jQueryValidation',
          childrens: [
            {
              href: '#/jqueryvalidation',
              hrefName: 'rules '
            },
            {
              href: '#/jqueryvalidation2',
              hrefName: 'rules in js'
            },
            {
              href: '#/jqueryvalidation3',
              hrefName: '更改错误信息显示的位置'
            },
            {
              href: '#/jqueryvalidation4',
              hrefName: 'custom rules'
            }
          ]
        },
        {
          href: '#/sweetalert2',
          hrefName: 'sweetalert2'
        },
        {
          hrefName: 'FooTable',
          childrens: [
            {
              href: '#/fooTable',
              hrefName: 'FooTable'
            },
            {
              href: '#/fooTable2',
              hrefName: 'FooTable2'
            },
            {
              href: '#/fooTable3',
              hrefName: 'FooTable3(ajax)'
            }
          ]
        },
        {
          hrefName: 'DataTable',
          childrens: [
            {
              href: '#/datatable',
              hrefName: 'DataTable(Server Side)'
            },
            {
              href: '#/datatable2',
              hrefName: 'DataTable2'
            },
            {
              href: '#/datatable3',
              hrefName: 'DataTable3'
            },
            {
              href: '#/datatable4',
              hrefName: '批次新增'
            },
            {
              href: '#/datatable5',
              hrefName: 'DataTable5'
            }
          ]
        },
        {
          hrefName: 'select2',
          childrens: [
            {
              href: '#/select25',
              hrefName: 'One Select(單選)'
            },
            {
              href: '#/select23',
              hrefName: '結合圖片的單選(單選)'
            },
            {
              href: '#/select24',
              hrefName: '與後端結合(單選)'
            },
            {
              href: '#/select26',
              hrefName: 'update select2 value(單選)'
            },
            {
              href: '#/select2',
              hrefName: 'Multi-select boxes(多選)'
            },
            {
              href: '#/select22',
              hrefName: 'Multi-select boxes(多選)'
            },
            {
              href: '#/select27',
              hrefName: '單、多選，change style</br>'
            },
            {
              href: '#/select28',
              hrefName: '解決與Modal共用的Bug'
            }
          ]
        },
        {
          hrefName: 'loading',
          childrens: [
            {
              href: '#/loading',
              hrefName: 'style1'
            },
            {
              href: '#/loading2',
              hrefName: 'style2'
            },
            {
              href: '#/loading3',
              hrefName: 'style3'
            },
            {
              href: '#/loading4',
              hrefName: 'pace-loading套件'
            },
            {
              href: '#/loading5',
              hrefName: 'pace-loading套件(在中間)'
            },
            {
              href: '#/loading6',
              hrefName: 'pace-loading套件(在上面)'
            },
            {
              href: '#/loading7',
              hrefName: 'loadingio網站Link'
            }
          ]
        },
        {
          hrefName: 'pikaday',
          childrens: [
            {
              href: '#/pikaday2',
              hrefName: '日歷(moment.js)'
            },
            {
              href: '#/pikaday',
              hrefName: '雙日歷'
            },
            {
              href: '#/pikaday3',
              hrefName: '按鈕觸發日歷'
            },
            {
              href: '#/pikaday4',
              hrefName: '日曆帶時間'
            }
          ]
        },
        {
          hrefName: 'JQuery-UI',
          childrens: [
            {
              href: '#/JQueryUI',
              hrefName: 'autocomplete(Ajax)'
            }
          ]
        },
        {
          hrefName: 'ChartJs',
          childrens: [
            {
              href: '#/ChartJs',
              hrefName: 'bar & line'
            },
            {
              href: '#/ChartJs2',
              hrefName: '多種型態展示'
            }
          ]
        },
        {
          hrefName: 'VanillaDataTables',
          childrens: [
            {
              href: '#/VanillaDataTables',
              hrefName: 'demo'
            }
          ]
        },
        {
          hrefName: 'jQueryMaskmoney',
          childrens: [
            {
              href: '#/jQueryMaskmoney',
              hrefName: 'demo'
            }
          ]
        },
        {
          hrefName: 'mulit chart 套件',
          childrens: [
            {
              href: '#/',
              hrefName: 'Highcharts - '
            }
          ]
        },
        {
          hrefName: '版次比較',
          childrens: [
            {
              href: '#/Diff2html',
              hrefName: 'Diff2html_Demo'
            },
            {
              href: '#/HtmldiffJs',
              hrefName: 'HtmldiffJs_Demo'
            }
          ]
        },
        {
          hrefName: '輪播套件',
          childrens: [
            {
              href: '#/owlcarousel2',
              hrefName: 'owl.carousel2'
            },
            {
              href: '#/slickcarousel',
              hrefName: 'slick-carousel'
            }
          ]
        },
        {
          hrefName: '元件練習',
          childrens: [
            {
              href: '#/component',
              hrefName: 'slider menu'
            },
            {
              href: '#/component2',
              hrefName: 'slider menu(keyframes)'
            },
            {
              href: '#/component3',
              hrefName: 'slider menu in NavBar'
            },
            {
              href: '#/typesetting5',
              hrefName: 'menu rwd'
            },
            {
              href: '#/component11',
              hrefName: 'menu rwd(標準樣式 - 純css)'
            },
            {
              href: '#/component12',
              hrefName: '(go Top)Scroll To Top With Ease-In-Out Effect'
            },
            {
              href: '#/component5',
              hrefName: '滿版式網頁版型'
            },
            {
              href: '#/component6',
              hrefName:
                'animation 影響與不影響其他物件操作方式 & 重新套用animation'
            },
            {
              href: '#/component7',
              hrefName: 'laravel基底後台 - login(後台登入畫面)'
            },
            {
              href: '#/component9',
              hrefName: 'laravel基底後台 - login(後台登入畫面) by StraaS'
            },
            {
              href: '#/component10',
              hrefName: 'laravel基底後台 - login(後台登入畫面) by'
            },
            {
              href: '#/component13',
              hrefName: 'laravel基底後台 - login(後台登入畫面) by'
            },
            {
              href: '#/component8',
              hrefName: 'laravel基底後台 - mulit components'
            }
          ]
        },

        {
          hrefName: '排版',
          childrens: [
            {
              href: '#/typesetting',
              hrefName: 'float排版'
            },
            {
              href: '#/component4',
              hrefName: 'float 排版'
            },
            {
              href: '#/typesetting2',
              hrefName: '排版 & footer alway in bottom'
            },
            {
              href: '#/typesetting3',
              hrefName: '使用%對width進行排版'
            },
            {
              href: '#/typesetting4',
              hrefName: '使用%對width進行圖片(img)排版'
            },

            {
              href: '#/typesetting6',
              hrefName: '傳統排版設計'
            },
            {
              href: '#/typesetting10',
              hrefName: '一頁式(strike navbar)'
            }
          ]
        },
        {
          hrefName: '常用參考資訊',
          childrens: [
            {
              href: '#/typesetting8',
              hrefName: '各種排版參考 - 多種圖片顯示參考'
            },
            {
              href: '#/reference',
              hrefName: 'windows model模型參考'
            },
            {
              href: '#/typesetting7',
              hrefName: '垂直置中'
            },
            {
              href: '#/typesetting9',
              hrefName: '垂直&水平置中'
            }
          ]
        }
      ]
    }
  },
  computed: {}
}
</script>
<style>
@import 'footable/css/footable.standalone.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>


