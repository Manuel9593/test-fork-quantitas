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
          label (tooltipItems, data) {
            const num = tooltipItems.yLabel
            let numStr = num.toString()
            if (num > 1000000) { numStr = numStr.slice(0, numStr.length - 6) + '.' + numStr.slice(numStr.length - 6, numStr.length - 3) + '.' + numStr.slice(numStr.length - 3) } else if (num > 1000) { numStr = numStr.slice(0, numStr.length - 3) + '.' + numStr.slice(numStr.length - 3) }
            return tooltipItems.xLabel + ' : ' + numStr
          }
        }
      }
    })
  }
}
