<template>
  <div class="regions-filter">
    <label>
      <b>Filtra per regione</b>
    </label>
    <ui-button class="btn btn-select" :class="{ 'btn-select--selected': isRegionsFilterOpen }" :text="buttonText"
      @click="openRegionFilter" />
    <div v-if="isRegionsFilterOpen" :v-click-outside="openRegionFilter" class="regions-filter-form">
      <form method="GET">
        <ul class="m-0 list-unstyled">
          <li v-for="{ id, slug, name } in fetchedRegions" :key="id" class="form-check">
            <input :id="'region-' + id" v-model="checkedRegions" name="regions" type="checkbox" :value="slug">
            <label class="active" :for="'region-' + id">
              <small>
                {{ name }}
              </small>
            </label>
          </li>
        </ul>
        <div class="row align-items-center p-2">
          <div class="col">
            <ui-button class="btn" :text="'Cancella'" @click.prevent="removeRegions()" />
          </div>
          <div class="col text-end">
            <ui-button class="btn btn-primary" :text="'Filtra (' + checkedRegions.length + ')'" :submit="true"
              @click.prevent="submit()" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import RegionType from '~/types/prismaTypes/regionType'

export default {
  name: 'SearchFiltersRegions',
  props: {
    fetchedRegions: {
      type: Array<RegionType>,
      default: []
    },
    paramsRegions: {
      type: Array<String> || String,
      default: []
    },
    paramsTypology: {
      type: String,
      default: ''
    },
    searchedTerm: {
      type: String
    }
  },
  data() {
    return {
      checkedRegions: [] as string[],
      isRegionsFilterOpen: false as boolean
    }
  },
  computed: {
    buttonText() {
      if (this.checkedRegions.length === 1) {
        return this.checkedRegions.at(0)
      } else if (this.checkedRegions.length > 1) {
        return this.checkedRegions.length + ' regioni'
      }
      return 'Tutte le regioni'
    }
  },
  methods: {
    submit() {
      this.isRegionsFilterOpen = false
      this.$emit('filter-regions', this.checkedRegions)
    },
    openRegionFilter() {
      this.isRegionsFilterOpen = !this.isRegionsFilterOpen
    },
    removeRegions() {
      this.checkedRegions = []
      this.isRegionsFilterOpen = false
      this.$emit('filter-regions', this.checkedRegions)
    }
  },
  emits: ['filter-regions']
}
</script>

<style lang="scss" scoped>
.regions-filter {
  position: relative;

  &-form {
    min-width: 100%;
    position: absolute;
    background: $white;
    z-index: 999;
    border: solid 1px $secondary;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

    ul {
      max-height: 320px;
      overflow: hidden;
      overflow-y: scroll;
      border-bottom: solid 1px $secondary;

      label {
        width: 100%;
      }
    }
  }
}
</style>
