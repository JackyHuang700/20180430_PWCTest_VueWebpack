<template>
  <div id="app">
    <div class="container-fluid">
      <Navbar :narbarList="narbarList" />
      <router-view></router-view>
    </div>
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
            }
          ]
        }

      ]

    }
  },
  computed: {

  }
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


