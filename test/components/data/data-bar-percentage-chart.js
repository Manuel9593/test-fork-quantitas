import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [{ gridLines: { display: false } }],
        yAxes: [{ gridLines: { display: false } }]
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label (tooltipItems) {
            return tooltipItems.xLabel + ' : ' + tooltipItems.yLabel + '%'
          }
        }
      }
    })
  }
}
