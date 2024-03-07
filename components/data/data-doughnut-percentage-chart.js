import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, {
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label (tooltipItems, data) {
            return data.labels[tooltipItems.index] + ' : ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%'
          }
        }
      }
    })
  }
}
