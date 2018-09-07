<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div id='wrap'>

        <div id='external-events'>
            <div id='external-events-listing'>
                <h4>Draggable Events</h4>
                <div class='fc-event'>My Event 1</div>
                <div class='fc-event'>My Event 2</div>
                <div class='fc-event'>My Event 3</div>
                <div class='fc-event'>My Event 4</div>
                <div class='fc-event'>My Event 5</div>
            </div>
            <p>
                <input type='checkbox' id='drop-remove'  checked='checked'/>
                <label for='drop-remove'>remove after drop</label>
            </p>
        </div>

        <div id='calendar'></div>

        <div style='clear:both'></div>

    </div>
    </div>
  </div>
</div>
</template>
<script>
import 'fullcalendar'
import 'fullcalendar-scheduler'
// import 'draggable'
// import 'jquery-ui/external/requirejs/require.js'
import '../assets/jquery-ui.min.js'

export default {
  name: 'fullcalendar2',
  mounted () {
    (function () {
      function makeEventsDraggable () {
        $('.fc-draggable').draggable({
          zIndex: 999,
          revert: true, // will cause the event to go back to its
          revertDuration: false //  original position after the drag
        })
      }

      $(document).ready(function () {
        var dragged = null

        /* initialize the external events
        ----------------------------------------------------------------- */

        $('#external-events .fc-event').each(function () {
          // store data so the calendar knows to render an event upon drop
          $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
          })

          // make the event draggable using jQuery UI
          $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
          })
        })

        /* initialize the calendar
        ----------------------------------------------------------------- */

        var calendar = $('#calendar').fullCalendar({
          schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar
          dragRevertDuration: 0,
          drop: function () {
            makeEventsDraggable()
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
              // if so, remove the element from the "Draggable Events" list
              $(this).remove()
            }
          },
          eventDragStop: function (event, jsEvent, ui, view) {
            makeEventsDraggable()
          },
          eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
            makeEventsDraggable()
          },
          viewRender: function () {
            makeEventsDraggable()
          },
          eventDragStart: function (event, jsEvent, ui, view) {
            dragged = [ calendar, event ]
          },
        })

        /* Make external-events droppable
        ----------------------------------------------------------------- */
        $('#external-events-listing').droppable({
          drop: function (event, ui) {
            if (dragged) {
              var event = dragged[1]
              dragged[0].fullCalendar('removeEvents', event._id)
              var el = $("<div class='fc-event'>").appendTo(this).text(event.title)
              el.draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
              })
              el.data('event', { title: event.title, id: event.id, stick: true })
              dragged = null
              makeEventsDraggable()
            }
          }
        })
      })
    })()
  }
}
</script>
<style lang="scss">
@import 'fullcalendar/dist/fullcalendar.css';

// body {
//         margin-top: 40px;
//         text-align: center;
//         font-size: 14px;
//         font-family: "Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
//     }
        
    #wrap {
        width: 1100px;
        margin: 0 auto;
    }
        
    #external-events {
        float: left;
        width: 150px;
        padding: 0 10px;
        border: 1px solid #ccc;
        background: #eee;
        text-align: left;
    }
        
    #external-events h4 {
        font-size: 16px;
        margin-top: 0;
        padding-top: 1em;
    }
        
    #external-events .fc-event {
        margin: 10px 0;
        cursor: pointer;
    }
        
    #external-events p {
        margin: 1.5em 0;
        font-size: 11px;
        color: #666;
    }
        
    #external-events p input {
        margin: 0;
        vertical-align: middle;
    }

    #calendar {
        float: right;
        width: 900px;
    }
</style>