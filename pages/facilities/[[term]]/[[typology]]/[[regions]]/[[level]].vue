<template>
  <section>
    <header>
      <ui-search-form
        :searched-term="term"
      />
      <h1 class="my-4 h2 fw-light">
        <strong>{{ facilities.length | number }}</strong>
        {{ getPageTitle }}
      </h1>
      <p v-if="getSearchedRegionsText || getSearchedTypologyText">
        Filtri:
        <b v-if="getSearchedTypologyText">{{ getSearchedTypologyText }}</b>
        <span v-if="getSearchedRegionsText">in <i>{{ getSearchedRegionsText }}</i></span>
      </p>
      <div class="row mb-4">
        <div class="col-12 col-sm mb-2">
          <SearchFiltersRegions
            :fetched-regions="fetchedRegions"
            :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions"
            :params-typology="typology"
            @filter-regions="filterByRegions($event)"
          />
        </div>
        <div class="col-12 col-sm mb-2">
          <SearchFiltersTypology
            :fetched-typology="fetchedTypologies"
            :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions"
            :params-typology="typology"
            @filter-typology="filterByTypology($event)"
          />
        </div>
        <div class="col-12 col-sm mb-2">
          <!-- search-filters-level -->
        </div>
      </div>
    </header>
    <ul class="nav nav-tabs auto mb-4">
      <li class="nav-item">
        <ui-button
          class="nav-link"
          :class="{'active' : isListView}"
          :text="'Griglia'"
          :title="'Vedi i risultati in una griglia'"
          @click="changeResultsView(true)"
        />
      </li>
      <li class="nav-item">
        <ui-button
          class="nav-link"
          :class="{'active' : !isListView}"
          :text="'Tabella'"
          :title="'Vedi i risultati in una tabella'"
          @click="changeResultsView(false)"
        />
      </li>
    </ul>
    <div v-if="pending">
      <div v-if="facilities.length">
        <SearchList
          v-if="isListView"
          :facilities="facilities"
        />
        <SearchTable
          v-else
          :facilities="facilities"
        />
      </div>
      <div
        v-else
        class="text-center"
      >
        <h2>
          Non vedo risultati!
        </h2>
        <p>
          <ui-link
            :to="{name: 'search', params: {}}"
            :title="'Rimuovi tutti i filtri'"
            :text="'Annulla la ricerca'"
          />
        </p>
        <ui-404-image />
      </div>
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
  </section>
</template>

<script setup lang="ts">
import { useStore } from '~/composables/store'
const store = await useStore()
const route = useRoute()
const { $encodeURIString } = useNuxtApp()
</script>

<script lang="ts">

export default {
  data () {
    return {
      term: route.params.term || 'tutte',
      regions: route.params.regions || ['italia'],
      typology: route.params.typology || '',
      level: route.params.level || '',
      facilities: [],
      metadata: {
        description: ''
      }
    }
  },
  async asyncData() {
    const facilities: any = await $fetch(`/api/v0/facilities/${this.getSearchedTerm}/${this.getSearchedRegions}/${this.typology}`)
    this.facilities = facilities
    this.fetchedRegions
    this.fetchedTypologies
  },
  head() {
    return {
      title: this.facilities.length + ' ' + this.getPageTitle + ' | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.description }
      ]
    }
  },
  computed: {
    isListView () {
      return store.getIsListView()
    },
    fetchedRegions () {
      return store.getRegions()
    },
    fetchedTypologies () {
      return store.getTypologies()
    },
    getPageTitle () {
      let title = 'risultati'
      if (this.facilities.length === 1) {
        title = 'risultato'
      }
      if (this.term) {
        title += ' per «' + this.term + '»'
      }
      return title
    },
    getSearchedTerm (): string {
      if(Array.isArray(this.term))
        return this.term.join(',')
      return this.term
    },
    getSearchedRegions () {
      let regions : any = this.regions
      if (typeof regions == "string") {
        return regions.split(',')
      } else if (!regions || regions.length === 0) {
        return ['italia']
      }
      return regions
    },
    async getSearchedTypologyText () {
      let text = null;
      if (this.typology && this.fetchedTypologies) {
        const selectedTypology = (await this.fetchedTypologies).filter((e: any) => e.slug === this.typology)
        text = selectedTypology[0].name
      }
      return text;
    },
    async getSearchedRegionsText () {
      const searchedRegionsText: any[] = []
      if (this.regions && this.regions !== 'italia') {
        let regionsArray = this.regions
        if (typeof this.regions === 'string') {
          regionsArray = this.regions.split(',')
        }
        regionsArray.forEach((region) => {
          const regionName = this.fetchedRegions.filter(e => e.slug === region)
          searchedRegionsText.push(regionName[0].name)
        })
        return searchedRegionsText.toString().replace(/,/g, ', ')
      } else {
        return null
      }
    }
  },
  beforeMount () {
    if (this.term && this.term === 'tutte') {
      this.term = ''
    }
    if (this.term) {
      this.term = this.term.replace(/[+]+/g, ' ')
    }
  },
  methods: {
    encodeUriString (string: string) {
      return $encodeURIString(string, '+')
    },
    changeResultsView (val: boolean) {
      store.setIsListView(val)
    },
    async filterByRegions () {
      let regionsParam: string | string[] = 'italia'
      regionsParam = this.getSearchedRegions
      navigateTo(`/facilities/${this.encodeUriString(this.getSearchedTerm)}/${regionsParam}/${this.typology}`)
    },
    async filterByTypology () {
      let regionsParam = 'italia'
      if (this.getSearchedRegions.length) 
        regionsParam = this.getSearchedRegions
      navigateTo(`/facilities/${this.encodeUriString(this.getSearchedTerm)}/${regionsParam}/${this.typology}`)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  max-width: 920px;
  margin: 0 auto;
}
.nav-link:focus {
  border-color: #ff9900;
  box-shadow: 0 0 0 2px #ff9900;
  outline: none;
}
</style>
