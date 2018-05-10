<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <div style="display: inline-block">
          <label for="start">Start:</label>
          <br>
          <input type="text" id="start">
        </div>

        <div style="display: inline-block">
          <label for="end">End:</label>
          <br>
          <input type="text" id="end">
        </div>

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
  name: 'pikaday',
  data () {
    return {}
  },
  created () { },
  mounted () {
    var startDate
    var endDate
    var updateStartDate = function () {
      startPicker.setStartRange(startDate)
      endPicker.setStartRange(startDate)
      endPicker.setMinDate(startDate)
    }
    var updateEndDate = function () {
      startPicker.setEndRange(endDate)
      startPicker.setMaxDate(endDate)
      endPicker.setEndRange(endDate)
    }
    var startPicker = new Pikaday({
      field: document.getElementById('start'),
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
      format: pikadayConfig.format(),
      i18n: pikadayConfig.i18n(),
      onSelect: function () {
        startDate = this.getDate()
        updateStartDate()
      }
    })
    var endPicker = new Pikaday({
      field: document.getElementById('end'),
      minDate: new Date(),
      maxDate: new Date(2020, 12, 31),
      format: pikadayConfig.format(),
      i18n: pikadayConfig.i18n(),
      onSelect: function () {
        endDate = this.getDate()
        updateEndDate()
      }
    })
    var _startDate = startPicker.getDate()
    var _endDate = endPicker.getDate()

    if (_startDate) {
      startDate = _startDate
      updateStartDate()
    }

    if (_endDate) {
      endDate = _endDate
      updateEndDate()
    }
  }
}
</script>
<style lang="css">
@import 'pikaday/css/pikaday.css';
@import 'pikaday/css/site.css';
</style>
