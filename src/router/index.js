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

import Select2 from '@/components/Select2'
import Select22 from '@/components/Select22'
import Select23 from '@/components/Select23'
import Select24 from '@/components/Select24'
import Select25 from '@/components/Select25'
import Select26 from '@/components/Select26'
import Select27 from '@/components/Select27'

import Loading from '@/components/Loading'
import Loading2 from '@/components/Loading2'
import Loading3 from '@/components/Loading3'

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
        }
      ]
    }
  ]
})
