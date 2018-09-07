<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div id='wrap'>

          <div id='external-events'>
            <h4>Draggable Events</h4>
            <input type="text" id="myInput" placeholder="Title...">
            <button id="newElement" class="addBtn">Add</button>
            <ul id="myUL"></ul>
          </div>

          <div id='calendar'></div>

        </div>
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
      $(document).ready(function () {
        var newElementDom = document.getElementById('newElement')
        newElementDom.addEventListener('click', newElement)

        // initialize the calendar
        $('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar

          eventRender: function (event, element) {
            element.append("<span class='closeon'>x</span>")
            element.find('.closeon').click(function () {
              $('#calendar').fullCalendar('removeEvents', event._id)
            })
          }
        })
      })

      // Create a new list item when clicking on the "Add" button
      function newElement () {
        var mainEvent = document.createElement('div')
        var inputValue = document.getElementById('myInput').value
        var valueText = document.createTextNode(inputValue)
        document.getElementById('myUL').appendChild(mainEvent)
        document.getElementById('myInput').value = ''

        // Create "close" button and append it to each list item
        var myNodelist = document.getElementsByTagName('LI')
        var i
        for (i = 0; i < myNodelist.length; i++) {
          var span = document.createElement('SPAN')
          var txt = document.createTextNode('\u00D7')
          span.className = 'close'
          span.appendChild(txt)
          myNodelist[i].appendChild(span)
        }

        // Append close button to event
        var span = document.createElement('SPAN')
        var closeText = document.createTextNode('\u00D7')
        span.className = 'close'
        span.appendChild(closeText)
        mainEvent.appendChild(span)

        // Append input value to the right side of close button
        mainEvent.appendChild(valueText)

        // Click on close button to hide the current list item
        var close = document.getElementsByClassName('close')
        var i
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = 'none'
          }
        }

        $(mainEvent).draggable({
          zIndex: 999,
          revert: true, // will cause the event to go back to its
          revertDuration: 0 //  original position after the drag
        })

        $(mainEvent).data('event', {
          title: $.trim($(valueText).text()), // use the element's text as the event title
          stick: true // maintain when user navigates (see docs on the renderEvent method)
        })
      }
    })()
  }
}
</script>
<style lang="scss">
@import 'fullcalendar/dist/fullcalendar.css';

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

input {
  border: none;
  width: 100%;
  float: left;
  font-size: 16px;
}

.addBtn {
  margin: 5%;
  margin-left: 1%;
  border-radius: 5px;
  outline-style: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

ul {
  margin: 0;
  padding: 0;
}

ul div {
  position: relative;
  display: block;
  margin: 10px 0;
  font-size: 0.85em;
  line-height: 1.3;
  border-radius: 3px;
  border: 1px solid #3a87ad;
  background-color: #3a87ad;
  color: #fff;
  width: 100%;
}

.close {
  right: 0;
  top: 0;
  padding: 12px 8px 12px 5px;
  color: #fff;
  cursor: pointer;
}
</style>