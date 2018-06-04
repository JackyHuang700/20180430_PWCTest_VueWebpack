<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>chart
          </div>
          <div class="card-body">

            <div class="title">
              <h1>Chart.js Fun</h1>
              <h3>Try to update the chart type and randomize the data!</h3>
            </div>
            <div class="controls">
              <h5 class="label">Chart Type</h5>
              <select name="chartType" id="chartType">
                <option value="line">Line</option>
                <option value="bar">Bar</option>
                <option value="radar">Radar</option>
                <option value="polarArea">Polar Area</option>
                <option value="doughnut">Doughnut</option>
              </select>
              <button id="button2">Randomize Data!</button>
            </div>
            <div class="chart-container" style="position: relative; width:85vw">
              <canvas id="myChart"></canvas>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Chart from 'chart.js/dist/Chart.bundle.min.js'
export default {
  name: 'chartjs2',
  created () { },
  mounted () {
    (function () {
      var chartTypeDom = document.getElementById('chartType')
      var button2Dom = document.getElementById('button2')
      chartTypeDom.addEventListener('change', updateChartType)
      button2Dom.addEventListener('click', randomizeData)

      // Define data set for all charts
      let dataBaby = [1, 10, 5, 2, 20, 30, 45]
      let moreDataBaby = [20, 30, 15, 12, 21, 30, 40]
      let myData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data, baby!',
            fill: false,
            backgroundColor: 'rgb(190, 99, 255, 0.25)',
            borderColor: 'rgb(190, 99, 255)',
            data: dataBaby
          },
          {
            label: 'More data, baby!',
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: moreDataBaby
          }]
      }

      // Default chart defined with type: 'line'
      Chart.defaults.global.defaultFontFamily = 'monospace'
      var ctx = document.getElementById('myChart').getContext('2d')
      var myChart = new Chart(ctx, {
        type: 'line',
        data: myData
      })

      // Function runs on chart type select update
      function updateChartType () {
        // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
        myChart.destroy()
        myChart = new Chart(ctx, {
          type: document.getElementById('chartType').value,
          data: myData
        })
      };

      // Randomize data button function
      function randomizeData () {
        let newDataBaby = dataBaby.map(x => Math.floor(Math.random() * 50))
        let newMoreDataBaby = moreDataBaby.map(x => Math.floor(Math.random() * 40))
        myData.datasets[0].data = newDataBaby
        myData.datasets[1].data = newMoreDataBaby
        myChart.update()
        console.log(newDataBaby)
      };
    }())
  }
}
</script>
<style lang="css">
canvas {
  background: #eee;
}

* {
  font-family: monospace;
  color: #3d3d3d;
  font-weight: 500;
}

.container {
  width: 87.5%;
  margin: auto;
}

.title {
  margin: 4% 0 2.5% 0;
}

h1 {
  line-height: 0.25;
  margin-bottom: 0px;
}

.label {
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 700;
}

select,
button {
  font-size: 15px;
  font-weight: 300;
  font-family: monospace;
  text-transform: uppercase;
  background: #fff;
  border-radius: 2px;
  width: 170px;
  margin-bottom: 3%;
}

select:hover,
button:hover {
  background-color: #fff;
  color: #fff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>