<template>
  <div class="typology-filter">
    <label>
      <b>Filtra per tipo</b>
    </label>
    <ui-button class="btn btn-select" :class="{ 'btn-select--selected': isTypologyFilterOpen }"
      :text="buttonText || truncate(buttonText, 24)" @click="openTypologyFilter" />
    <div v-if="isTypologyFilterOpen" :v-click-outside="openTypologyFilter" class="typology-filter-form">
      <ul class="m-0 list-unstyled">
        <li v-for="{ id, slug, name } in fetchedTypology" :key="id">
          <ui-button :id="'typology-' + id" v-model="checkedTypology" class="btn text-start fw-light" :text="name"
            @click="submit(slug)" />
        </li>
      </ul>
      <div class="row align-items-center p-2">
        <div class="col-12">
          <ui-button class="btn" :text="'Cancella'" @click="removeTypology()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TypologyType from '~/types/prismaTypes/typologyType'

export default {
  name: 'SearchFiltersTypology',
  props: {
    fetchedTypology: {
      type: Array<TypologyType>,
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
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checkedTypology: '',
      isTypologyFilterOpen: false
    }
  },
  computed: {
    buttonText(): string {
      const matchedTypology = this.fetchedTypology.find(e => e.slug === this.checkedTypology)
      return matchedTypology ? matchedTypology.name : 'Tutte le tipologie'
    }
  },
  methods: {
    submit(slug: string) {
      this.isTypologyFilterOpen = false
      this.checkedTypology = slug
      this.$emit('filter-typology', this.checkedTypology)
    },
    openTypologyFilter() {
      this.isTypologyFilterOpen = !this.isTypologyFilterOpen
    },
    removeTypology() {
      this.$emit('filter-typology', this.checkedTypology)
    }
  },
  emits: ['filter-typology']
}
</script>

<style lang="scss" scoped>
.typology-filter {
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

      li {
        border-bottom: solid 1px $secondary;
      }
      label {
        width: 100%;
      }
    }
    .btn.text-start {
      width: 100%;
    }
  }
}
</style>
