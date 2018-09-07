<template>
<!-- https://codepen.io/unakao/pen/VXwRJN -->
<!-- https://codepen.io/iw3/pen/lyhmI?editors=0010 - 本地化範例 -->
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div style="margin-top:10%;">Change Duration</div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="timeUnitBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            30 mins
          </button>
          <div class="dropdown-menu" aria-labelledby="timeUnitBtn">
            <a class="dropdown-item" href="#" duration="00:15:00">15 mins</a>
            <a class="dropdown-item" href="#" duration="00:30:00">30 mins</a>
            <a class="dropdown-item" href="#" duration="01:00:00">1 hour</a>
          </div>
        </div>
        <div style="margin-top:10%;">Login List</div>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="badge badge-primary">&nbsp;</span>&nbsp;ID1</li>
          <li class="list-group-item">
            <span class="badge badge-info">&nbsp;</span>&nbsp;ID2</li>
          <li class="list-group-item">
            <span class="badge badge-secondary">&nbsp;</span>&nbsp;ID3</li>
        </ul>
      </div>
      <div class="col-md-10">
        <div id='calendar'></div>
      </div>
    </div>
  </div>
</template>
<script>
import 'fullcalendar'
import 'fullcalendar-scheduler'
export default {
  name: 'fullcalendar',
  mounted () {
    ;(function () {
      function getRnd (min, max) {
        return (
          Math.floor(
            Math.floor(Math.random() * 1000 * (max - min + 1)) / 1000
          ) + min
        )
      }

      $(function () {
        $('#calendar').fullCalendar({
          themeSystem: 'bootstrap4',
          defaultView: 'agendaWeek',
          /*
    customButtons: {
      view30mBtn: {
        text: '30 mins',
        click: function() {
          $('#calendar').fullCalendar('option','slotDuration','00:30:00');
        }
      },
      view15mBtn: {
        text: '15 mins',
        click: function() {
          $('#calendar').fullCalendar('option','slotDuration','00:15:00');
        }
      }
    }, */
          header: {
            left: '',
            center: 'title',
            right: 'prev,next agendaDay,agendaWeek'
          },
          titleFormat: 'YYYY MM DD',
          buttonText: {
            // prev: '&lsaquo;', // <
            // next: '&rsaquo;', // >
            // prevYear: '&laquo;', // <<
            // nextYear: '&raquo;', // >>
            today: '今日',
            month: '月',
            week: '週',
            day: '日'
          },
          firstDay: 1,
          columnHeaderFormat: 'dddd',
          dayNames: [
            '星期日',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六'
          ],
          dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
          slotDuration: { days: 0, hours: 0, minutes: 30 },
          minTime: { days: 0, hours: 8, minutes: 0 },
          // maxTime: {days:0, hours:22, minutes:0},
          weekNumbers: false,
          allDaySlot: false,
          displayEventTime: false,
          nowIndicator: false,
          axisWidth: 50,
          eventLimit: true, // allow "more" link when too many events
          // events: 'https://fullcalendar.io/demo-events.json'
          events: function (start, end, timezone, callback) {
            var events = []
            let hour = 60 * 60 * 1000
            let evtDic = { 1: 'btn-primary', 2: 'btn-info', 3: 'btn-secondary' }
            while (start < end) {
              let tmpStart = start
              let tmpEnd = tmpStart + getRnd(1, 4) * hour
              let level = getRnd(1, 3)

              events.push({
                title: '權限設定: ID' + level + '\n人數: ' + getRnd(1, 30),
                start: new Date(tmpStart),
                end: new Date(tmpEnd),
                className: evtDic[level]
              })

              tmpStart = tmpEnd + getRnd(1, 2) * hour
              tmpEnd = tmpStart + getRnd(1, 4) * hour
              level = getRnd(1, 3)

              events.push({
                title: '權限設定: ID' + level + '\n人數: ' + getRnd(1, 30),
                start: new Date(tmpStart),
                end: new Date(tmpEnd),
                className: evtDic[level]
              })

              tmpStart = tmpEnd + getRnd(0, 2) * hour
              tmpEnd = tmpStart + getRnd(1, 4) * hour
              level = getRnd(1, 3)

              events.push({
                title: '權限設定: ID' + level + '\n人數: ' + getRnd(1, 20),
                start: new Date(tmpStart),
                end: new Date(tmpEnd),
                className: evtDic[level]
              })

              start += 24 * hour
            }
            callback(events)
          }
        })

        $('.dropdown-menu a').click(function () {
          $('#timeUnitBtn').text($(this).text())
          let dur = $(this).attr('duration')
          $('#calendar').fullCalendar('option', 'slotDuration', dur)
        })
      })
    })()
  }
}
</script>
<style lang="scss">
@import 'fullcalendar/dist/fullcalendar.css';
// @import 'bootstrap/dist/css/bootstrap.min.css';

// html, body {
//   margin: 0;
//   padding: 0;
//   font-family: "Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
//   font-size: 14px;
// }

#calendar {
  //max-width: 98%;
  margin: 5% auto;
}

.fc-day-header {
  background-color: #999;
  color: #fff;
}

.fc-day-header.fc-sat {
  background-color: #ffce67;
}

.fc-day-header.fc-sun {
  background-color: #ff7851;
}

.fc-today.alert-info {
  background-color: transparent;
}

tr[data-time='12:00:00'] td {
  border-width: 5px 0 0;
  border-color: #ccc;
}

/*
tr[data-time^="12:"] td {
  background: #f4f4f4;
}

tr[data-time="13:00:00"] td {
  border-width: 5px 0 0;
  border-color: #ccc;
}
*/

tr[data-time='18:00:00'] td {
  border-width: 5px 0 0;
  border-color: #ccc;
}

/*
tr[data-time^="18:"] td {
  background: #f4f4f4;
}

tr[data-time="19:00:00"] td {
  border-width: 5px 0 0;
  border-color: #ccc;
}
*/
</style>