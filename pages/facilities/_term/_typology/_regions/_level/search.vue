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
          <search-filters-regions
            :fetched-regions="fetchedRegions"
            :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions"
            :params-typology="typology"
            @filter-regions="filterByRegions($event)"
          />
        </div>
        <div class="col-12 col-sm mb-2">
          <search-filters-typology
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
    <div v-if="!$fetchState.pending">
      <div v-if="facilities.length">
        <search-list
          v-if="isListView"
          :facilities="facilities"
        />
        <search-table
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
            :to="{name: 'search'}"
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

<script>
export default {
  data () {
    return {
      term: this.$route.params.term || '',
      regions: this.$route.params.regions || '',
      typology: this.$route.params.typology || '',
      level: this.$route.params.level || '',
      facilities: [],
      metadata: {
        description: ''
      }
    }
  },
  async fetch () {
    this.facilities = await this.$axios.$get(
      '/api/v0/facilities/' +
      this.getSearchedTerm + '/' +
      this.getSearchedRegions + '/' +
      this.typology
    )
    if (this.fetchedRegions.length === 0) {
      await this.$store.dispatch('getRegions')
    }
    if (this.fetchedTypologies.length === 0) {
      await this.$store.dispatch('getTypologies')
    }
  },
  head () {
    return {
      title: this.facilities.length + ' ' + this.getPageTitle + ' | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.description }
      ]
    }
  },
  computed: {
    isListView () {
      return this.$store.getters.getIsListView
    },
    fetchedRegions () {
      return this.$store.state.regions
    },
    fetchedTypologies () {
      return this.$store.state.typologies
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
    getSearchedTerm () {
      let term = this.term
      if (!term) {
        term = 'tutte'
      }
      return term
    },
    getSearchedRegions () {
      let regions = this.regions
      if (!regions || regions === '' || regions.length === 0) {
        regions = ['italia']
      }
      if (typeof regions === 'string') {
        regions = this.regions.split(',')
      }
      return regions
    },
    getSearchedTypologyText () {
      let text = null
      if (this.typology && this.fetchedTypologies) {
        const selectedTypology = this.fetchedTypologies.filter(e => e.slug === this.typology)
        text = selectedTypology[0].name
      }
      return text
    },
    getSearchedRegionsText () {
      const searchedRegionsText = []
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
    encodeUriString (string) {
      return this.$options.filters.encodeUriString(string, '+')
    },
    changeResultsView (val) {
      this.$store.commit('setIsListView', val)
    },
    filterByRegions ($event) {
      this.regions = $event
      let regionsParam = 'italia'
      if (this.getSearchedRegions.length) {
        regionsParam = this.getSearchedRegions
      }
      const url = '/cerca/' + this.encodeUriString(this.getSearchedTerm) + '/' + regionsParam + '/' + this.typology
      history.pushState({}, null, url)
      this.$fetch()
    },
    filterByTypology ($event) {
      this.typology = $event
      let regionsParam = 'italia'
      if (this.getSearchedRegions.length) {
        regionsParam = this.getSearchedRegions
      }
      const url = '/cerca/' + this.encodeUriString(this.getSearchedTerm) + '/' + regionsParam + '/' + this.typology
      history.pushState({}, null, url)
      this.$fetch()
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
