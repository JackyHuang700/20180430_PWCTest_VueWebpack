<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
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
    (function () {
      var data = [
        {
          title: 'All Day Event',
          start: '2015-02-01'
        },
        {
          title: 'Long Event',
          start: '2015-02-07',
          end: '2015-02-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2015-02-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2015-02-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2015-02-11',
          end: '2015-02-13'
        },
        {
          title: 'Meeting',
          start: '2015-02-12T10:30:00',
          end: '2015-02-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2015-02-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2015-02-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2015-02-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2015-02-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2015-02-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'https://google.com/',
          start: '2015-02-28'
        }
      ]

      var newData = [
        {
          title: 'stuff',
          start: '2015-03-01'
        },
        {
          title: 'stuff',
          start: '2015-03-02'
        }
      ]

      $(document).ready(function () {
        $('#calendar').fullCalendar({
          schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          defaultDate: '2015-02-12',
          editable: true,
          eventLimit: true, // allow "more" link when too many events
          events: data
        })

        $('#calendar').on('click', '.fc-next-button', function () {
          // alert('clicked');
          $('#calendar').fullCalendar('removeEvents')
          $('#calendar').fullCalendar('addEventSource', newData)
        })
        $('#calendar').on('click', '.fc-prev-button', function () {
          // alert('clicked');
          $('#calendar').fullCalendar('removeEvents')
          $('#calendar').fullCalendar('addEventSource', data)
        })
      })
    })()
  }
}
</script>
<style lang="scss">
@import 'fullcalendar/dist/fullcalendar.css';
</style>