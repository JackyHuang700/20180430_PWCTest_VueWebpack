<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <label for="datepicker">Date:</label>
        <br>
        <input type="text" disabled id="datepicker">
        <br>
        <button id="datepicker-button">Choose Date</button>

      </div>
    </div>
  </div>
</template>
<script>
import Pikaday from 'pikaday'
import {
  pikaday as pikadayConfig
} from '../config'
export default {
  name: 'pikaday3',
  data () {
    return {}
  },
  created () { },
  mounted () {
    let pikaday = new Pikaday({
      field: document.getElementById('datepicker'),
      trigger: document.getElementById('datepicker-button'),
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2020, 12, 31),
      yearRange: [2010, 2020],
      format: pikadayConfig.format(),
      i18n: pikadayConfig.i18n()
    })
  }
}
</script>
<style lang="css">
@import 'pikaday/css/pikaday.css';
@import 'pikaday/css/site.css';
</style>
