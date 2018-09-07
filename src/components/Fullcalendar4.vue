<template>
  <div class="container">
    <div class="row">
      <div id='external-events' class="col-sm-2">
        <h4>待分配任務</h4>
        <div class='fc-event'>ABC</div>
        <div class='fc-event'>DEF</div>
        <div class='fc-event'>GHI</div>
        <div class='fc-event'>JKL</div>
        <div class='fc-event'>MNO</div>
      </div>
      <div class="col-sm-10">
        <div id='calendar'></div>
      </div>
    </div>
    <div class="row">
      <div class="btn btn-primary">院內轉運</div>
      <div class="btn btn-success">院外轉運</div>
      <div class="btn btn-info">勤務支援</div>
    </div>
    <div id="eventModal" class="modal fade" data-dispatchidse="">
      <form class="form-horizontal" role="form" id="eventForm" method="post">
        <div class="modal-dialog">

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                <span class="glyphicon glyphicon-remove"></span>
              </button>
              <h4 id="modalTitle" class="modal-title"></h4>
            </div>
            <div id="modalBody" class="modal-body">
              <ul class="nav nav-tabs">
                <li role="tab" id="tab-T">
                  <a>病人轉運</a>
                </li>
                <li role="tab" id="tab-S">
                  <a>勤務支援</a>
                </li>
              </ul>
              <div class="form-group" id="divChartNo">
                <label for="bookingEmp" class="col-sm-2 control-label">
                  <i class="fa fa-user"></i>&nbsp;病歷號</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" id="input_ChartNO" placeholder="請輸入病歷號" />
                </div>
                <div class="col-sm-3">
                  <label class="control-label" id="patientName">病人姓名</label>
                </div>
                <div class="col-sm-4">
                  <label class="control-label" id="patientBedidse"></label>
                </div>
              </div>
              <div class="form-group" id="divIsStable">
                <label for="lblIsStable" class="col-sm-2 control-label">
                  <span class="glyphicon glyphicon-camera"></span>是否穩定</label>
                <div class="col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" value="" />病人不穩定</label>
                  </div>
                </div>
              </div>
              <div class="form-group" id="locate_departure">
                <label for="eventname" class="col-sm-2 control-label" id="lbleventname">
                  <i class="fa fa-map-marker"></i>&nbsp;出發點</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option value="I">院內</option>
                    <option value="O">院所</option>
                    <option value="A">地址</option>
                  </select>
                </div>
                <div class="col-sm-8">
                  <div class="input-group">
                    <input type="text" class="form-control" id="eventdepart" placeholder="請輸入出發點" />
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-default" title="出發點和目的地對調">
                        <i class="fa fa-exchange fa-rotate-90"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group" id="locate_Arrivedfrom">
                <label for="eventcontent" class="col-sm-2 control-label">
                  <i class="fa fa-flag-checkered"></i>&nbsp;目的地</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option value="I">院內</option>
                    <option value="O">院所</option>
                    <option value="A">地址</option>
                  </select>
                </div>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="eventdistnation" placeholder="請輸入目的地" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">
                  <i class="fa fa-flag"></i>&nbsp;申請時間</label>
                <div class="col-sm-4">
                  <input type="text" id="date_apply" />
                </div>
                <label class="col-sm-2 control-label">
                  <i class="fa fa-flag-checkered"></i>&nbsp;派遣時間</label>
                <div class="col-sm-4">
                  <input type="text" id="date_diaptch" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">
                  <i class="fa fa-flag"></i>&nbsp;出發時間</label>
                <div class="col-sm-4">
                  <input type="text" id="date_departure" />
                </div>
                <label class="col-sm-2 control-label">
                  <i class="fa fa-flag-checkered"></i>&nbsp;到達時間</label>
                <div class="col-sm-4">
                  <input type="text" id="date_arrived" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">
                  <i class="fa fa-flag"></i>&nbsp;任務完成</label>
                <div class="col-sm-4">
                  <input type="text" id="date_finished" />
                </div>
                <label class="col-sm-2 control-label">
                  <i class="fa fa-flag-checkered"></i>&nbsp;最後異動</label>
                <div class="col-sm-4">
                  <input type="text" id="date_modify" />
                </div>
              </div>
              <div class="form-group">
                <label for="bookingEmp" class="col-sm-2 control-label">
                  <span class="glyphicon glyphicon-user"></span>&nbsp;聯絡人</label>
                <div class="col-sm-2">
                  <input type="text" class="form-control" placeholder="員工編號" id="Contacter" />
                </div>
                <label class="col-sm-2 control-label" id="ContacterName"></label>

                <label for="bookingAdmDept" class="col-sm-2 control-label">
                  <i class="fa fa-phone"></i>&nbsp;聯絡電話</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="ContacterTel" placeholder="請輸入聯絡人電話" />
                </div>
              </div>
              <div class="form-group">
                <label for="bookingEmp" class="col-sm-2">
                  <span class="glyphicon glyphicon-user"></span>核准人</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" />
                </div>
                <label for="bookingAdmDept" class="col-sm-2">
                  <span class="glyphicon glyphicon-user"></span>核准時間</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="bookingAdmDept" />
                </div>
              </div>
              <div class="form-group" id="divNotice">
                <label for="eventalert" class="col-sm-2 control-label" id="lblalert">
                  <i class="fa fa-exclamation-triangle"></i>&nbsp;注意事項</label>
                <div class="col-sm-10">
                  <div class="checkbox checkbox-inline">
                    <label>
                      <input type="checkbox" value="N1" />接觸隔離</label>
                  </div>
                  <div class="checkbox checkbox-inline">
                    <label>
                      <input type="checkbox" value="N2" />飛沫隔離</label>
                  </div>
                  <div class="checkbox checkbox-inline">
                    <label>
                      <input type="checkbox" value="N3" />約束</label>
                  </div>
                </div>
              </div>
              <div class="form-group" id="divEquipment">
                <label class="col-sm-2 control-label">
                  <i class="fa fa-medkit"></i>&nbsp;設備</label>
                <div class="col-sm-10">
                  <div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="E1" />生理監視</label>
                    </div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="E2" />電擊器</label>
                    </div>
                  </div>
                  <div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="E3" />呼吸器</label>
                    </div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="E4" />IV PUMP</label>
                    </div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="E5" />ECMO</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group" id="divSupport">
                <label for="eventduty" class="col-sm-2 control-label" id="lblduty">
                  <i class="fa fa-wrench"></i>&nbsp;支援</label>
                <div class="col-sm-10">
                  <div class="row">
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="S1" />取器官</label>
                    </div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="S2" />領血</label>
                    </div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="S3" />取混和氧</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="S4" />院方活動</label>
                    </div>
                    <div class="checkbox checkbox-inline">
                      <label>
                        <input type="checkbox" value="S5" />來函支援</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="eventcompany" class="col-sm-2 control-label" id="lblcompany">
                  <i class="fa fa-group"></i>&nbsp;隨車人員</label>
                <div class="col-sm-5">
                  <select id="DDLcompanyEMT" class="form-control">
                    <option>救護員1</option>
                    <option>救護員2</option>
                    <option>救護員3</option>
                  </select>
                </div>
                <div class="col-sm-5">
                  <div class="input-group">
                    <input id="tx_CompanyEmpNo" class="form-control" type="text" placeholder="隨車人員員工編號" maxlength="6" />
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-default" id="btn_addCompanyEmpno">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group" id="divCompany">
                  </div>
                </div>
              </div>
              <div class="form-group" id="divUserNote">
                <label for="eventduty" class="col-sm-2 control-label">
                  <i class="fa fa-pencil-square-o"></i>&nbsp;備註事項</label>
                <div class="col-sm-10">
                  <textarea placeholder="備註事項" class="form-control" readonly="true"></textarea>
                </div>
              </div>
              <div class="form-group" id="divEMTNote">
                <label for="eventduty" class="col-sm-2 control-label">
                  <i class="fa fa-pencil-square"></i>&nbsp;EMT備註</label>
                <div class="col-sm-10">
                  <textarea placeholder="EMT註記" class="form-control"></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-info" id="btn_delete">刪除</button>
              <button type="button" class="btn btn-default" id="btn_cancel">取消</button>
              <input type="submit" class="btn btn-primary" id="btn_Save" value="送出" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Loading -->
    <div id="divLoading" class="modal modal-dialog" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content text-center" style="height: 200px">
          <br />
          <i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
          <br />
          <br />
          <span class="h3 text text-center ali">正在努力為您載入</span>
        </div>
      </div>
    </div>

    <!--ERROR Message -->
    <div id="divErrMsg" class="modal" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm ">
        <div class="modal-content text-center modal-color-palepink" style="height: 200px">
          <br />
          <i class="fa fa-exclamation-triangle fa-5x"></i>
          <br />
          <br />
          <span id="ErrMsg" class=" h3 text text-center ali"></span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import 'fullcalendar'
import 'fullcalendar-scheduler'
export default {
  name: 'fullcalendar4',
  mounted () {
    ;(function () {
      var LoginEmpno = '123456'
      var AmbulanceResources = [
        { id: '1', title: 'Car1' },
        { id: '2', title: 'Car2' },
        { id: '3', title: 'Car3' },
        { id: '4', title: 'Car4' },
        { id: '5', title: 'Car5' },
        { id: '6', title: 'OutSource' }
      ]
      var Events = [
        {
          title: 'event1',
          start: '2018-03-08T17:00:00',
          resourceId: '1'
        },
        {
          title: 'event2',
          start: '2018-03-08',
          end: '2010-01-08',
          resourceId: '3'
        },
        {
          title: 'event3',
          start: '2018-03-08T16:30:00',
          resourceId: '4',
          allDay: false // will make the time show
        }
      ]

      $(function () {
        TabBindingOption()
        DefaultTab()
        $('#Contacter').val(LoginEmpno) // 預設聯絡人為登入者
        Event_ContacterInput()
        GetEvents()
        BindingFullCalendar()
        $('#btn_addCompanyEmpno').bind('click', Event_ButtonAddCompanyEmpno)
        $('#btn_save').bind('click', Event_btn_save)
        $('#btn_cancel').bind('click', Event_btn_cancel)
      })

      // 申請存檔按鈕
      function Event_btn_save () {
        var event
        event.dispatchidse = $('#eventModal').attr('data-dispatchidse')
        event.hospitalcode = HospitalCode
        event.accountidse = $('#patientName').attr('data-account')
        event.patientclasscode = $('#patientName').attr('data-patclass')
        event.isstable = $('#divIsStable input:checked').length > 0

        event.applydatetime = $('#date_apply').val()
        event.applyempno = $('#Contacter').val()
        event.applytel = $('#ContacterTel').val()
        event.departure.Status = 'Y'
        event.departure.Type = $('#locate_departure select').val()
        event.departure.Address = $('#eventdepart').val()
        event.arrived.Status = 'Y'
        event.arrived.Type = $('#locate_Arrivedfrom select').val()
        event.arrived.Address = $('#eventdistnation').val()
        event.distance = ''
        event.status = ''
        event.modifyempno = LoginEmpno
        // event.modifydatetime = Date.now();
        event.ambulanceid = ''
        event.allDay = false
        event.UserNote = $('#userNote').val()
        event.Crews = $('#divCompany div[id]')
          .map(function () {
            return this.id
          })
          .get()
      }

      // 取消按鈕
      function Event_btn_cancel () {
        $('input[type=text]').val('')
        $('input[type=checkbox]').prop('checked', false)
        InputPatient()
        $('#Contacter').val(LoginEmpno)
        $('#ContacterName').text(GetContacterName(LoginEmpno))
        EventDeleteAllCompanyEmp()
      }

      // 取得登入院區
      function GetLoginHospitalCode () {
        HospitalCode = 'T0'
      }

      // 取得登入者員工編號
      function GetLoginEmpno () {
        LoginEmpno = '123456'
      }

      // 取得事件資訊
      function GetEvents (date) {
        // Get data from Async Json
        var data = [
          { id: '1', title: 'From UCLA' },
          { id: '1', title: 'From NY' }
        ]
        // $('#external-events')
        $.each(data, function (index) {
          var divWaitingAssign = document.createElement('div')
          divWaitingAssign.setAttribute('class', 'fc-event')
          divWaitingAssign.setAttribute('data-dispatchidse', data[index].id)
          divWaitingAssign.textContent = data[index].title
          $('#external-events').append(divWaitingAssign)
        })
        DragableEvent()
      }

      // 取得詳細資料
      function GetEvent (Dispatch) {
        var ReturnValue = []
        return ReturnValue
      }

      // 綁定待分配事件可移動
      function DragableEvent () {
        /* initialize the external events----------------------------------------------------------------- */

        $('#external-events .fc-event').each(function () {
          // store data so the calendar knows to render an event upon drop
          $(this).data('event', {
            id: $(this).attr('data-dispatchidse'),
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
      }

      // 綁定tab click
      function TabBindingOption () {
        $('.nav-tabs li').click(function (e) {
          switch ($(this).attr('id')) {
            case 'tab-T': // 病人轉運
              tabActionDisplay(false)
              $(this).tab('show')
              break
            case 'tab-S': // 特殊勤務
              tabActionDisplay(true)
              $(this).tab('show')
              break
            default:
              break
          }
        })
      }

      // Tab選項UI Render
      function tabActionDisplay (Flag) {
        $('.nav-tabs li').removeClass('active')
        $('#divSupport').toggle(Flag)
        $('#divClassify').toggle(!Flag)
        $('#divEquipment').toggle(!Flag)
        $('#divNotice').toggle(!Flag)
        $('#divIsStable').toggle(!Flag)
        $('#divUserNote').toggle(!Flag)
        $('#divChartNo').toggle(!Flag)
      }

      // 新增隨車人員Method
      function Event_ButtonAddCompanyEmpno () {
        if ($('#' + $('#tx_CompanyEmpNo').val()).length > 0) {
          $('#ErrMsg').text('該員已隨車!')
          $('#divErrMsg').modal('show')
          return
        }

        var divCompanyEmpNo = document.createElement('div')
        divCompanyEmpNo.setAttribute('class', 'btn-group')
        divCompanyEmpNo.setAttribute('data-empno', $('#tx_CompanyEmpNo').val())

        var label = document.createElement('label')
        label.setAttribute('type', 'button')
        label.setAttribute('class', 'btn btn-default')
        label.textContent = GetContacterName($('#tx_CompanyEmpNo').val())

        var button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('class', 'btn btn-default')

        var addimage = document.createElement('i')
        addimage.setAttribute('class', 'fa fa-times')
        button.appendChild(addimage)

        divCompanyEmpNo.appendChild(label)
        divCompanyEmpNo.appendChild(button)

        divCompany.appendChild(divCompanyEmpNo)

        EventDeleteConpanyEmp()
      }

      // 綁定刪除Method
      function EventDeleteConpanyEmp () {
        $('#divCompany div button').bind('click', function () {
          $(this)
            .parent('div')
            .remove()
        })
      }

      // 取得聯絡人姓名
      function GetContacterName (InputEmpno) {
        var ReturnValue = InputEmpno

        return ReturnValue
      }

      // 自動更新聯絡員工名稱
      function Event_ContacterInput () {
        $('#Contacter').bind('input', function () {
          if ($('#Contacter').val().length === 6) {
            GetContacterName($('#Contacter').val())
          } else {
            $('#ContacterName').text('')
          }
        })
      }

      // 預設聯絡人為登入者
      function DefaultContacter () {
        $('#Contacter').val(LoginEmpno)
        GetContacterName($('#Contacter').val())
      }

      function BindingFullCalendar () {
        $('#calendar').fullCalendar({
          schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
          header: {
            left: 'prev,today,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          lang: 'zh-tw',
          defaultView: 'agendaDay',
          buttonText: {
            month: '月',
            agendaWeek: '週',
            agendaDay: '日',
            today: '今天'
          },
          events: Events,
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar
          drop: function () {
            $(this).remove()
          },
          selectable: true,

          resources: AmbulanceResources,
          loading: function (isLoading) {
            if (isLoading) {
              $('#loadingModal').modal()
            } else {
              DefaultContacter()
              $('#loadingModal').modal('toggle')
            }
          },
          dayClick: function (date, jsEvent, view, resourceObj) {
            if (view.name === 'month' || view.name === 'agendaWeek') {
              $('#calendar').fullCalendar('gotoDate', date)
              $('#calendar').fullCalendar('changeView', 'agendaDay')
              return
            }

            // 日曆內容單擊時執行
            alert('dayClick' + resourceObj.id)
          },
          select: function (eventstart, eventend, ev, view) {
            // 拉選範圍時執行

            var start = new Date(eventstart)
            var end = new Date(eventend)
            // alert(start);

            // adjust time zone
            // var mstart = moment(start);
            // var mend = moment(end);
            // mstart.add(-8, 'hours');
            // mend.add(-8, 'hours');
            // $('#eventDate').val(mstart.locale('zh-tw').format('LL'));

            if (view.name === 'agendaDay') {
              DefaultContacter()
              $('#modalTitle').text('派遣內容管理')
              $('#eventModal').modal()
            }
          },
          eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
            // 變更區域大小時執行
            alert('eventResize')
          },
          eventRender: function (event, element) {
            // 事件更新就會執行
            // alert("eventRender");
          },
          viewRender: function (view, element) {
            // 畫面更新的時候就會執行 like F5
            // alert("viewRender");
          }
        })
      }

      function DefaultTab () {
        tabActionDisplay(false)
        $('#tab-I').tab('show')
      }
    })()
  }
}
</script>
<style lang="scss">
@import 'fullcalendar/dist/fullcalendar.css';

// body {
//   margin-top: 40px;
//   text-align: center;
//   font-size: 14px;
//   font-family: 'Lucida Grande', Helvetica, Arial, Verdana, sans-serif;
// }

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

/* crazy batman newspaper spinny thing */
.rotate {
  transform: rotate(180deg);
  transition: all 0.5s;
}
.rotate.in {
  transform: rotate(1800deg);
  transition: all 1.5s;
}
</style>