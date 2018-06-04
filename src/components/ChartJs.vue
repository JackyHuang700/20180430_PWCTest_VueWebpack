<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>表單
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-md-2">
                <label for="template1">...</label>
                <button class="form-control btn btn-primary" type="button" id="mainBtn1">更新資料</button>
              </div>
              <div class="form-group col-md-2">
                <label for="template1">...</label>
                <button class="form-control btn btn-primary" type="button" id="mainBtn2">清除圖表並且重建</button>
              </div>
              <div class="form-group col-md-2">
                <label for="template1">...</label>
                <button class="form-control btn btn-primary" type="button" id="mainBtn3">horizontalBar</button>
              </div>
              <div class="form-group col-md-2">
                <label for="template1">...</label>
                <button class="form-control btn btn-primary" type="button" id="mainBtn4">調整全部資料背景</button>
              </div>
              <div class="form-group col-md-2">
                <label for="template1">...</label>
                <button class="form-control btn btn-primary" type="button" id="mainBtn5">調整單一資料背景</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>chart
          </div>
          <div class="card-body">

            <canvas id="myChart" width="400" height="400"></canvas>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Chart from 'chart.js/dist/Chart.bundle.min.js'
export default {
  name: 'chartjs',
  created () { },
  mounted () {
    // chart
    var myChart
    var data
    var options
    var ctx
    (function () {
      ctx = document.getElementById('myChart').getContext('2d')
      data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes123',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        },
        {
          type: 'line',
          label: '新開發客戶',
          data: [12, 19, 3, 5, 2, 3]
        }]
      }
      options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
      myChart = new Chart(ctx, {
        type: 'bar',
        data: JSON.parse(JSON.stringify(data)),
        options: JSON.parse(JSON.stringify(options))
      })
    }());
    (function () {
      const mainBtn1Dom = document.getElementById('mainBtn1')
      const mainBtn2Dom = document.getElementById('mainBtn2')
      const mainBtn3Dom = document.getElementById('mainBtn3')
      const mainBtn4Dom = document.getElementById('mainBtn4')
      const mainBtn5Dom = document.getElementById('mainBtn5')
      mainBtn1Dom.addEventListener('click', function (e) {
        myChart.data.datasets[0].data = [2, 9, 3, 5, 2, 3]
        myChart.data.datasets[1].data = [2, 19, 3, 15, 12, 3]
        myChart.update()
      })
      mainBtn2Dom.addEventListener('click', function (e) {
        myChart.destroy()
        myChart = new Chart(ctx, {
          type: 'bar',
          data: JSON.parse(JSON.stringify(data)),
          options: JSON.parse(JSON.stringify(options))
        })
      })
      mainBtn3Dom.addEventListener('click', function (e) {
        myChart.destroy()
        myChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: JSON.parse(JSON.stringify(data)),
          options: JSON.parse(JSON.stringify(options))
        })
      })
      mainBtn4Dom.addEventListener('click', function (e) {
        myChart.config.data.datasets[0].backgroundColor = [
          'rgba(255, 255, 255, 0.1)',
          'rgba(54, 162, 235, 0.1)',
          'rgba(255, 206, 86, 0.1)',
          'rgba(75, 192, 192, 0.1)',
          'rgba(153, 102, 255, 0.1)',
          'rgba(255, 159, 64, 0.1)'
        ]
        myChart.update()
      })
      mainBtn5Dom.addEventListener('click', function (e) {
        myChart.config.data.datasets[0].backgroundColor[0] = 'rgba(255, 255, 255, 0.1)'
        myChart.update()
      })
    }())
  }
}
</script>
<style lang="css">
canvas {
  background: #eee;
}
</style>