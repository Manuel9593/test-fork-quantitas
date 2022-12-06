import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        yAxes: [{ gridLines: { display: false } }]
      }
    })
  }
}
