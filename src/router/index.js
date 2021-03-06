import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import HelloWorld from '@/components/HelloWorld'
import IziToast from '@/components/IziToast'
import jQueryValidation from '@/components/jQueryValidation'
import jQueryValidation2 from '@/components/jQueryValidation2'
import jQueryValidation3 from '@/components/jQueryValidation3'
import jQueryValidation4 from '@/components/jQueryValidation4'
import Sweetalert2 from '@/components/Sweetalert2'

import FooTable from '@/components/FooTable'
import FooTable2 from '@/components/FooTable2'
import FooTable3 from '@/components/FooTable3'

import DataTable from '@/components/DataTable'
import DataTable2 from '@/components/DataTable2'
// import DataTable3 from '@/components/DataTable3'
import DataTable4 from '@/components/DataTable4'
import DataTable5 from '@/components/DataTable5'

import Select2 from '@/components/Select2'
import Select22 from '@/components/Select22'
import Select23 from '@/components/Select23'
import Select24 from '@/components/Select24'
import Select25 from '@/components/Select25'
import Select26 from '@/components/Select26'
import Select27 from '@/components/Select27'
import Select28 from '@/components/Select28'

import Loading from '@/components/Loading'
import Loading2 from '@/components/Loading2'
import Loading3 from '@/components/Loading3'
import Loading4 from '@/components/Loading4'
import Loading5 from '@/components/Loading5'
import Loading6 from '@/components/Loading6'
import Loading7 from '@/components/Loading7'
import Loading8 from '@/components/Loading8'
import Loading9 from '@/components/Loading9'

// pikaday
import Pikaday from '@/components/Pikaday'
import Pikaday2 from '@/components/Pikaday2'
import Pikaday3 from '@/components/Pikaday3'
import Pikaday4 from '@/components/Pikaday4'

// JQuery-UI
import JQueryUI from '@/components/JQueryUI'

// ChartJs
import ChartJs from '@/components/ChartJs'
import ChartJs2 from '@/components/ChartJs2'

// VanillaDataTablesJs
import VanillaDataTables from '@/components/VanillaDataTables'

// jquery-maskmoney
import jQueryMaskmoney from '@/components/jQueryMaskmoney'

// Diff2html
import Diff2html from '@/components/Diff2html'

// HtmldiffJs
import HtmldiffJs from '@/components/HtmldiffJs'

// component
import Component from '@/components/Component'
import Component2 from '@/components/Component2'
import Component3 from '@/components/Component3'
import Component4 from '@/components/Component4'
import Component5 from '@/components/Component5'
import Component6 from '@/components/Component6'
import Component7 from '@/components/Component7'
import Component8 from '@/components/Component8'
import Component9 from '@/components/Component9'
import Component10 from '@/components/Component10'
import Component11 from '@/components/Component11'
import Component12 from '@/components/Component12'
import Component13 from '@/components/Component13'
import Component14 from '@/components/Component14'
import Component15 from '@/components/Component15'
import Component16 from '@/components/Component16'

// 排版
import Typesetting from '@/components/Typesetting'
import Typesetting2 from '@/components/Typesetting2'
import Typesetting3 from '@/components/Typesetting3'
import Typesetting4 from '@/components/Typesetting4'
import Typesetting5 from '@/components/Typesetting5'
import Typesetting6 from '@/components/Typesetting6'
import Typesetting7 from '@/components/Typesetting7'
import Typesetting8 from '@/components/Typesetting8'
import Typesetting9 from '@/components/Typesetting9'
import Typesetting10 from '@/components/Typesetting10'

// 輪播套件
import SlickCarousel from '@/components/SlickCarousel'
import OwlCarousel2 from '@/components/OwlCarousel2'

// 參考資訊
import Reference from '@/components/Reference'

// Fullcalendar
import Fullcalendar from '@/components/Fullcalendar'
import Fullcalendar2 from '@/components/Fullcalendar2'
import Fullcalendar3 from '@/components/Fullcalendar3'
import Fullcalendar4 from '@/components/Fullcalendar4'
import Fullcalendar5 from '@/components/Fullcalendar5'

// Dragula
import Dragula from '@/components/Dragula'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: HelloWorld
        },
        {
          path: 'dragula',
          name: 'Dragula',
          component: Dragula
        },
        {
          path: 'fullcalendar5',
          name: 'Fullcalendar5',
          component: Fullcalendar5
        },
        {
          path: 'fullcalendar4',
          name: 'Fullcalendar4',
          component: Fullcalendar4
        },
        {
          path: 'fullcalendar3',
          name: 'Fullcalendar3',
          component: Fullcalendar3
        },
        {
          path: 'fullcalendar2',
          name: 'Fullcalendar2',
          component: Fullcalendar2
        },
        {
          path: 'fullcalendar',
          name: 'Fullcalendar',
          component: Fullcalendar
        },
        {
          path: 'reference',
          name: 'Reference',
          component: Reference
        },
        {
          path: 'slickcarousel',
          name: 'SlickCarousel',
          component: SlickCarousel
        },
        {
          path: 'owlcarousel2',
          name: 'OwlCarousel2',
          component: OwlCarousel2
        },
        {
          path: 'typesetting',
          name: 'Typesetting',
          component: Typesetting
        },
        {
          path: 'typesetting2',
          name: 'Typesetting2',
          component: Typesetting2
        },
        {
          path: 'typesetting3',
          name: 'Typesetting3',
          component: Typesetting3
        },
        {
          path: 'typesetting4',
          name: 'Typesetting4',
          component: Typesetting4
        },
        {
          path: 'typesetting5',
          name: 'Typesetting5',
          component: Typesetting5
        },
        {
          path: 'typesetting6',
          name: 'Typesetting6',
          component: Typesetting6
        },
        {
          path: 'typesetting7',
          name: 'Typesetting7',
          component: Typesetting7
        },
        {
          path: 'typesetting8',
          name: 'Typesetting8',
          component: Typesetting8
        },
        {
          path: 'typesetting9',
          name: 'Typesetting9',
          component: Typesetting9
        },
        {
          path: 'typesetting10',
          name: 'Typesetting10',
          component: Typesetting10
        },
        {
          path: 'component',
          name: 'component',
          component: Component
        },
        {
          path: 'component2',
          name: 'component2',
          component: Component2
        },
        {
          path: 'component3',
          name: 'component3',
          component: Component3
        },
        {
          path: 'component4',
          name: 'component4',
          component: Component4
        },
        {
          path: 'component5',
          name: 'component5',
          component: Component5
        },
        {
          path: 'component6',
          name: 'component6',
          component: Component6
        },
        {
          path: 'component7',
          name: 'Component7',
          component: Component7
        },
        {
          path: 'component8',
          name: 'Component8',
          component: Component8
        },
        {
          path: 'component9',
          name: 'Component9',
          component: Component9
        },
        {
          path: 'component10',
          name: 'Component10',
          component: Component10
        },
        {
          path: 'component11',
          name: 'Component11',
          component: Component11
        },
        {
          path: 'component12',
          name: 'Component12',
          component: Component12
        },
        {
          path: 'component13',
          name: 'Component13',
          component: Component13
        },
        {
          path: 'component14',
          name: 'Component14',
          component: Component14
        },
        {
          path: 'component15',
          name: 'Component15',
          component: Component15
        },
        {
          path: 'component16',
          name: 'Component16',
          component: Component16
        },
        {
          path: 'jquerymaskmoney',
          name: 'jQueryMaskmoney',
          component: jQueryMaskmoney
        },
        {
          path: 'vanilladatatables',
          name: 'VanillaDataTables',
          component: VanillaDataTables
        },
        {
          path: 'jqueryui',
          name: 'JQueryUI',
          component: JQueryUI
        },
        {
          path: 'chartjs',
          name: 'ChartJs',
          component: ChartJs
        },
        {
          path: 'chartjs2',
          name: 'ChartJs2',
          component: ChartJs2
        },
        {
          path: 'izitoast',
          name: 'IziToast',
          component: IziToast
        },
        {
          path: 'jqueryvalidation',
          name: 'jQueryValidation',
          component: jQueryValidation
        },
        {
          path: 'jqueryvalidation2',
          name: 'jQueryValidation2',
          component: jQueryValidation2
        },
        {
          path: 'jqueryvalidation3',
          name: 'jQueryValidation3',
          component: jQueryValidation3
        },
        {
          path: 'jqueryvalidation4',
          name: 'jQueryValidation4',
          component: jQueryValidation4
        },
        {
          path: 'sweetalert2',
          name: 'Sweetalert2',
          component: Sweetalert2
        },
        {
          path: 'datatable',
          name: 'DataTable',
          component: DataTable
        },
        {
          path: 'datatable2',
          name: 'DataTable2',
          component: DataTable2
        },
        // {
        //   path: 'datatable3',
        //   name: 'DataTable3',
        //   component: DataTable3
        // },
        {
          path: 'datatable4',
          name: 'DataTable4',
          component: DataTable4
        },
        {
          path: 'datatable5',
          name: 'DataTable5',
          component: DataTable5
        },
        {
          path: 'footable',
          name: 'FooTable',
          component: FooTable
        },
        {
          path: 'footable2',
          name: 'FooTable2',
          component: FooTable2
        },
        {
          path: 'footable3',
          name: 'FooTable3',
          component: FooTable3
        },
        {
          path: 'select2',
          name: 'Select2',
          component: Select2
        },
        {
          path: 'select22',
          name: 'Select22',
          component: Select22
        },
        {
          path: 'select23',
          name: 'Select23',
          component: Select23
        },
        {
          path: 'select24',
          name: 'Select24',
          component: Select24
        },
        {
          path: 'select25',
          name: 'Select25',
          component: Select25
        },
        {
          path: 'select26',
          name: 'Select26',
          component: Select26
        },
        {
          path: 'select27',
          name: 'Select27',
          component: Select27
        },
        {
          path: 'select28',
          name: 'Select28',
          component: Select28
        },
        {
          path: 'loading',
          name: 'Loading',
          component: Loading
        },
        {
          path: 'loading2',
          name: 'Loading2',
          component: Loading2
        },
        {
          path: 'loading3',
          name: 'Loading3',
          component: Loading3
        },
        {
          path: 'loading4',
          name: 'Loading4',
          component: Loading4
        },
        {
          path: 'loading5',
          name: 'Loading5',
          component: Loading5
        },
        {
          path: 'loading6',
          name: 'Loading6',
          component: Loading6
        },
        {
          path: 'loading7',
          name: 'Loading7',
          component: Loading7
        },
        {
          path: 'loading8',
          name: 'Loading8',
          component: Loading8
        },
        {
          path: 'loading9',
          name: 'Loading9',
          component: Loading9
        },
        {
          path: 'pikaday',
          name: 'Pikaday',
          component: Pikaday
        },
        {
          path: 'pikaday2',
          name: 'Pikaday2',
          component: Pikaday2
        },
        {
          path: 'pikaday3',
          name: 'Pikaday3',
          component: Pikaday3
        },
        {
          path: 'pikaday4',
          name: 'Pikaday4',
          component: Pikaday4
        },
        {
          path: 'diff2html',
          name: 'Diff2html',
          component: Diff2html
        },
        {
          path: 'htmldiffjs',
          name: 'HtmldiffJs',
          component: HtmldiffJs
        }
      ]
    }
  ]
})
