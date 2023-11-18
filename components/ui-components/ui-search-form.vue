<template>
  <form
    action="/cerca/"
    method="GET"
    class="search-form row mx-0 my-3"
  >
    <label
      class="h5 mt-5 active"
      :class="{'visually-hidden': isInHeader}"
      for="facility-search"
    >
      <b>Cerca tra le strutture culturali italiane</b>
    </label>
    <div class="search-form-outline">
      <input
        id="facility-search"
        v-model="searchTerm"
        name="facility-search"
        type="search"
        placeholder="Cerca direzioni, istituti, soprintendenze, luoghi della cultura, ecc."
        class="search-form-control"
      >
    </div>
    <ui-button
      class="btn btn-primary search-form-btn"
      :text="'Cerca'"
      :icon="'icon icon-search icon-in-line'"
      :submit="true"
      @click="submit()"
    />
  </form>
</template>

<script>
export default {
  name: 'UiSearchForm',
  props: {
    searchedTerm: {
      type: String,
      default: ''
    },
    isInHeader: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  beforeMount () {
    if (this.searchedTerm) {
      this.searchTerm = this.searchedTerm
    }
  },
  methods: {
    encodeUriStringMethod (string) {
      return this.$options.filters.encodeUriString(string, '+')
    },
    submit () {
      this.errors = false
      const encodedTerm = this.searchTerm ? this.encodeUriStringMethod(this.searchTerm) : ''
      return this.$router.push('/cerca/' + encodedTerm)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  &-label {
    width: 100%;
  }
  &-outline {
    width: calc( 100% - 128px );
  }
  &-control {
    height: 50px;
    font-weight: 400;
    font-size: 15px;

    &::placeholder {
      color: #c2c7cc;
    }
  }
  &-btn {
    border-radius: 0 4px 4px 0;
  }

  input:focus {
    border-color: #ff9900 !important;
    box-shadow: 0 0 0 2px #ff9900 !important;
  }
}
</style>
