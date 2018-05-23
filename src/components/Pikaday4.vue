<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <label for="datepicker">Date:</label>
        <br>
        <input type="text" id="datepicker">

      </div>
    </div>
  </div>
</template>
<script>
import Pikaday from 'pikaday'
import moment from 'moment'

import {
  pikaday as pikadayConfig
} from '../config'

export default {
  name: 'pikaday4',
  data () {
    return {}
  },
  created () { },
  mounted () {
    var disable = false
    var field = document.getElementById('datepicker')
    var picker = new Pikaday({
      // time
      showTime: true,
      showMinutes: true,
      showSeconds: false,
      use24hour: false,
      incrementHourBy: 1,
      incrementMinuteBy: 1,
      incrementSecondBy: 1,
      autoClose: true,
      timeLabel: null, // optional string added to left of time select

      // date
      field: field,
      firstDay: 1,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2020, 12, 31),
      yearRange: [2000, 2020],
      format: pikadayConfig.format(),

      showDaysInNextAndPreviousMonths: true,
      enableSelectionDaysInNextAndPreviousMonths: true,
      onSelect: function (date) {
        // console.log(date)
        var sundayDate = date.getDate() - date.getDay()
        var sunday = new Date(date.setDate(sundayDate))
        var saturday = new Date(date.setDate(sundayDate + 6))

        // console.log(sundayDate)
        // console.log(sunday)
        console.log(moment(saturday).format(pikadayConfig.format()))

        // debugger
        // field.value = sundayDate
      },
      i18n: pikadayConfig.i18n()
    })
  }
}
</script>
<style lang="css">
@import 'pikaday/css/pikaday.css';
</style>
