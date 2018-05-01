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
          path: 'footable',
          name: 'FooTable',
          component: FooTable
        },
        {
          path: 'footable2',
          name: 'FooTable2',
          component: FooTable2
        }
      ]
    }

  ]
})
