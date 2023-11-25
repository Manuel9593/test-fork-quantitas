<template>
  <section>
    <header>
      <ui-search-form :searched-term="getSearchedTerm" />
      <h1 class="my-4 h2 fw-light">
        <strong>{{ facilities.length }}</strong>
        {{ facilities.length === 1 ? 'risultato' : 'risultati' }} per «{{term}}»
      </h1>
      <p v-if="getSearchedRegionsText || getSearchedTypologyText">
        Filtri:
        <b v-if="getSearchedTypologyText">{{ getSearchedTypologyText }}</b>
        <span v-if="getSearchedRegionsText">in <i>{{ getSearchedRegionsText }}</i></span>
      </p>
      <div class="row mb-4">
        <div class="col-12 col-sm mb-2">
          <SearchFiltersRegions :fetched-regions="fetchedRegions" :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions" :params-typology="getSearchedTypologyText"
            @filter-regions="filterByRegions" />
        </div>
        <div class="col-12 col-sm mb-2">
          <SearchFiltersTypology :fetched-typology="fetchedTypologies" :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions" :params-typology="getSearchedTypologyText"
            @filter-typology="filterByTypology" />
        </div>
        <div class="col-12 col-sm mb-2">
          <!-- search-filters-level -->
        </div>
      </div>
    </header>
    <ul class="nav nav-tabs auto mb-4">
      <li class="nav-item">
        <ui-button class="nav-link" :class="{ 'active': isListView }" :text="'Griglia'"
          :title="'Vedi i risultati in una griglia'" @click="changeResultsView(true)" />
      </li>
      <li class="nav-item">
        <ui-button class="nav-link" :class="{ 'active': !isListView }" :text="'Tabella'"
          :title="'Vedi i risultati in una tabella'" @click="changeResultsView(false)" />
      </li>
    </ul>
    <div v-if="!pending">
      <div v-if="facilities.length">
        <SearchList v-if="isListView" :facilities="facilities" />
        <SearchTable v-else :facilities="facilities" />
      </div>
      <div v-else class="text-center">
        <h2>
          Non vedo risultati!
        </h2>
        <p>
          <ui-link :to="{ name: 'cerca', params: {} }" :title="'Rimuovi tutti i filtri'" :text="'Annulla la ricerca'" />
        </p>
        <ui-404-image />
      </div>
    </div>
    <div v-else class="row align-items-center loader-wrapper">
      <div class="col">
        <div class="progress-spinner progress-spinner-active m-auto">
          <span class="visually-hidden">Caricamento...</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
export default defineNuxtComponent({
  async setup () {
    const { $encodeURIString } = useNuxtApp()
    const route = useRoute()
    const { data: facilities, pending } = await useFetch(`/api/facilities/${route.params.term?.toString()}/${route.params.regions?.toString()}/${route.params.typology?.toString()}`)
    return {
      term: route.params.term,
      regions: route.params.regions,
      typology: route.params.typology,
      level: route.params.level,
      store: await useStore(),
      encodeURIString: $encodeURIString,
      facilities,
      pending
    }
  },
  computed: {
    isListView() {
      return this.store.getIsListView()
    },
    fetchedRegions() {
      return this.store.getRegions()
    },
    fetchedTypologies() {
      return this.store.getTypologies()
    },
    getSearchedTerm() {
      const searched_term = Array.isArray(this.term) ? this.term.join(' ') : this.term
      return !searched_term ? 'tutte' : searched_term
    },
    getSearchedRegions() {
      return !this.regions ? ['italia'] : (typeof this.regions === 'string' ? this.regions.split(',') : this.regions)
    },
    getSearchedTypologyText() {
      let text = ''
      if (this.typology && this.fetchedTypologies) {
        const selectedTypology = this.fetchedTypologies.find(e => e.slug === this.typology)
        if (selectedTypology) text = selectedTypology.name
      }
      return text
    },
    getSearchedRegionsText() {
      const searchedRegionsText: string[] = []
      if (this.regions && this.regions !== 'italia') {
        let regionsArray = this.regions
        if (typeof regionsArray === 'string') {
          regionsArray = regionsArray.split(',')
        }
        regionsArray.forEach(async (region) => {
          const regionName = this.fetchedRegions.find(e => e.slug === region)
          if (regionName) searchedRegionsText.push(regionName.name)
        })
        return searchedRegionsText.toString()
      }
      return null
    },
  },
  methods: {
    encodeUriString(string: string) {
      return this.$encodeURIString(string, '+')
    },
    changeResultsView(val: boolean) {
      this.store.setIsListView(val)
    },
    filterByRegions(event: any) {
      const regions = event
      let regionsParam = this.getSearchedRegionsText || 'italia'
      navigateTo('/facilities/' + this.encodeUriString(this.getSearchedTerm) + '/' + regionsParam + '/' + this.typology)
    },
    filterByTypology(event: any) {
      const typology = event
      let regionsParam = this.getSearchedRegionsText || 'italia'
      navigateTo('/facilities/' + this.encodeUriString(this.getSearchedTerm) + '/' + regionsParam + '/' + typology)
    }
  },
  emits: ['filter-typology', 'filter-regions']
})
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
