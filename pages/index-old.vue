<template>
  <section>
    <header>
      <h1 class="text-center mt-5">
        Benvenuto nella Digital Library
      </h1>
    </header>
    <div class="mb-5 search-form-wrapper">
      <ui-search-form />
      <label class="sr-only">
        <b>Cerca per tipo</b>
      </label>
      <ui-chip-list
        class="mt-4"
        :list="fetchedTypologies"
      />
    </div>
    <div class="row">
      <div class="col-12 col-md-8 mb-5">
        <div>
          <h2>Dati Beni culturali italiani</h2>
          <h3 class="h5">
            Visitatori musei italiani
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut auctor lacus. Curabitur facilisis suscipit sodales. Nunc eget sapien porttitor, ornare velit a, vestibulum massa.
          </p>
          <div class="bg-white border border-secondary p-3">
            <DataLineChart
              :data="lineChartData"
              :options="chartOptions"
            />
          </div>
          <div class="mt-4 p-2">
            <h3 class="h5">
              Visitatori di altri beni culturali italiani
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut auctor lacus. Curabitur facilisis suscipit sodales. Nunc eget sapien porttitor, ornare velit a, vestibulum massa.
            </p>
            <div class="bg-white border border-secondary p-3">
              <DataBarChart
                :data="barChartData"
                :options="chartOptions"
              />
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
          v-if="!$fetchState.pending"
          class="bg-white border border-secondary p-3"
        >
          <data-tree
            :data-tree="dataTree"
          />
        </div>
        <div
          v-else
          class="row align-items-center loader-wrapper"
        >
          <div class="col">
            <div class="progress-spinner progress-spinner-active m-auto">
              <span class="sr-only">Caricamento...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DataBarChart from '~/components/data/data-bar-chart'

export default {
  components: {
    DataBarChart
  },
  data () {
    return {
      dataTree: {},
      metadata: {
        description: ''
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: { display: false }
            }
          ],
          yAxes: [
            {
              gridLines: { display: false }
            }
          ]
        }
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
  async fetch () {
    this.dataTree = await this.$axios.$get('/api/v0/facilities-diagram')
    if (this.fetchedRegions.length === 0) {
      await this.$store.dispatch('getRegions')
    }
    if (this.fetchedTypologies.length === 0) {
      await this.$store.dispatch('getTypologies')
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
  computed: {
    fetchedRegions () {
      return this.$store.state.regions
    },
    fetchedTypologies () {
      return this.$store.state.typologies
    }
  }

}
</script>

<style lang="scss" scoped>
.search-form-wrapper {
  max-width: 920px;
  margin:  0 auto;
}
</style>
