import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import HelloWorld from '@/components/HelloWorld'
import IziToast from '@/components/IziToast'
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
