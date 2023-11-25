<template>
  <section>
    <header>
      <h1 class="text-center mt-5">
        Benvenuto nella Digital Library
      </h1>
    </header>
    <div class="mb-5 search-form-wrapper">
      <ui-search-form />
      <label class="visually-hidden">
        <b>Cerca per tipo</b>
      </label>
      <ui-chip-list
        class="mt-4"
        :list="typologies"
      />
    </div>
    <div class="row">
      <div class="col-12 col-md-8 mb-5">
        <div id="grafico-list" style="margin-top: 5rem">
          <div v-for="graphObj in grafici" :key="graphObj.question" style="margin-bottom: 6rem">
            <h3 class="h5">
              {{ graphObj.title }}
            </h3>
            <p>{{ graphObj.description }}</p>
            <div v-if="graphObj.type === 'bar'">
              <div v-for="grafico in graphObj.data" :key="grafico.id" style="margin-bottom: 3rem">
                <p class="text-center text-100" style="font-size: smaller">
                  {{ grafico.title }}
                </p>
                <div v-if="grafico.options !== undefined">
                  <div v-if="grafico.percentage">
                    <Bar
                      :chart-data="grafico.data"
                      :chart-options="barPercentageOptions"
                    />
                  </div>
                  <div v-else>
                    <Bar
                      :chart-data="grafico.data"
                      :chart-options="barChartOptions"
                    />
                  </div>
                </div>
                <div v-else-if="grafico.bigNumbers">
                  <Bar
                    :chart-data="grafico.data"
                    :chart-options="bigNumbersOptions"
                  />
                </div>
                <div v-else-if="grafico.percentage">
                  <div v-if="grafico.separator">
                    <Bar
                      :chart-data="grafico.data"
                      :chart-options="separatorPercentageOptions"
                    />
                  </div>
                  <div v-else>
                    <Bar
                      :chart-data="grafico.data"
                      :chart-options="barPercentageOptions"
                    />
                  </div>
                </div>
                <div v-else>
                  <div v-if="grafico.separator">
                    <Bar
                      :chart-data="grafico.data"
                      :chart-options="barSeparatorOptions"
                    />
                  </div>
                  <div v-else>
                    <Bar
                      :chart-data="grafico.data"
                      :chart-options="barChartOptions"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="graphObj.type === 'doughnut'">
              <div v-for="grafico in graphObj.data" :key="grafico.id" style="margin-bottom: 3rem">
                <p v-if="grafico.title !== undefined" class="text-center text-100" style="font-size: larger; margin-top: 1em; margin-bottom: 0.5em">
                  {{ grafico.title }}
                </p>
                <div v-if="grafico.percentage">
                  <Doughnut
                    :chart-data="grafico.data"
                    :chart-options="doughnutPercentageOptions"
                  />
                </div>
                <div v-else>
                  <Doughnut
                    :chart-data="grafico.data"
                    :chart-options="doughnutOptions"
                  />
                </div>
                <div v-if="grafico.acronyms" class="text-center text-100" style="font-size: smaller; margin-top: 1em">
                  <div v-for="acronym in grafico.acronyms" :key="acronym">
                    <p style="margin-bottom: 0">
                      {{ acronym }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <h3 class="h5">
          Albero amministrativo delle strutture culturali italiane
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut auctor lacus. Curabitur facilisis suscipit sodales. Nunc eget sapien porttitor, ornare velit a, vestibulum massa.
        </p>
        <div
          v-if="pending"
          class="bg-white border border-secondary p-3"
        >
          <DataTree
            :data-tree="dataTree"
          />
        </div>
        <div
          v-else
          class="row align-items-center loader-wrapper"
        >
          <div class="col">
            <div class="progress-spinner progress-spinner-active m-auto">
              <span class="visually-hidden">Caricamento...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from '~/composables/store'
const store = await useStore()
const typologies = store.getTypologies()
</script>

<script lang="ts">
import 'chart.js/auto'
import { Bar, Doughnut } from 'vue-chartjs'
import grafici from './grafici.json'

export default {
  components: { Bar, Doughnut },
  data () {
    return {
      barChartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } }
        }
      },
      barPercentageOptions:  {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } }
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: (context: any) => {
              return context.parsed.x+' : ' + context.parsed.y + '%'
            }
          }
        }
      },
      barSeparatorOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { grid: { display: false } }
        }
      },
      bigNumbersOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } }
        },
        tooltips: {
          enabled: true,
          mode: 'nearest',
          callbacks: {
            label: function (context: any) {
              const num = context.dataset.yLabel;
              let numStr = num.toString()
              if (num > 1000000) { numStr = numStr.slice(0, numStr.length - 6) + '.' + numStr.slice(numStr.length - 6, numStr.length - 3) + '.' + numStr.slice(numStr.length - 3) } else if (num > 1000) { numStr = numStr.slice(0, numStr.length - 3) + '.' + numStr.slice(numStr.length - 3) }
              return context.dataset.xLabel + ' : ' + numStr
            }
          }
        }
      },
      separatorPercentageOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: { grid: { display: false } }
        }
      },
      doughnutOptions: {
        maintainAspectRatio: false,
        responsive: true
      },
      doughnutPercentageOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          enabled: true,
          mode: 'nearest',
          callbacks: {
            label (context: any, data: any) {
              return data.labels[context.dataIndex] + ' : ' + data.datasets[context.datasetIndex].data[context.dataIndex] + '%'
            }
          }
        }
      },
      grafici,
      dataTree: {},
      pending: true,
      metadata: {
        description: ''
      },
      lineChartData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Musei',
            data: [52907177, 59401861, 70731744, 75852378, 14639939],
            backgroundColor: '#365c77'
          }
        ]
      },
      barChartData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Educazione, Ricerca e Istituti Culturali',
            data: [331724, 341784, 341454, 286509, 238474],
            backgroundColor: '#FF555E'
          },
          {
            label: 'Archeologia, Belle Arti e Paesaggio',
            data: [391038, 465934, 816309, 602702, 266897],
            backgroundColor: '#FF8650'
          },
          {
            label: 'Archivi',
            data: [269338, 317535, 325617, 343079, 261001],
            backgroundColor: '#FFE981'
          },
          {
            label: 'Biblioteche e Diritto d\'Autore',
            data: [1110201, 1109746, 1147160, 1146784, 309329],
            backgroundColor: '#8BF18B'
          },
          {
            label: 'ICDP - Digital Library',
            data: [681021, 837848, 838765, 728231, 296577],
            backgroundColor: '#83B2FF'
          },
          {
            label: 'Segretario Generale',
            data: [22495, 41420, 36581, 51750, 78780],
            backgroundColor: '#9B6EF3'
          }
        ]
      }
    }
  },
  head () {
    return {
      title: 'Cerca tra le strutture culturali italiane | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.description }
      ]
    }
  },
  async mounted () {
    const { data: dataTree, pending } = await useFetch(`/api/facilities-diagram/`)
    this.dataTree = dataTree
    this.pending = pending
  }
}
</script>

<style lang="scss" scoped>
.search-form-wrapper {
  max-width: 920px;
  margin:  0 auto;
}
</style>
