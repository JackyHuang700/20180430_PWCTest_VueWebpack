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
          hrefName: 'HelloWorld'
        },
        {
          href: '#/izitoast',
          hrefName: 'iziToast'
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


