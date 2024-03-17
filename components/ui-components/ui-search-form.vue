<template>
  <form
    action="/facilities/"
    method="GET"
    class="search-form row mx-0 my-3"
    @submit.stop.prevent="submit()"
  >
    <label
      class="h5 mt-5 active col-6"
      :class="{'visually-hidden': isInHeader}"
      for="facility-search"
    >
      <b>Cerca tra le strutture culturali italiane</b>
    </label>
    <div class="form-group row">
      <div class="search-form-outline col-auto">
        <UInput
          id="facility-search"
          v-model="searchTerm"
          name="facility-search"
          type="search"
          placeholder="Cerca direzioni, istituti, soprintendenze, luoghi della cultura, ecc."
          class="search-form-control text-black"
          size="xl"
          color="white"
          variant="outline"
        />
      </div>
      <ui-button
        class="btn btn-primary search-form-btn col-auto"
        :text="'Cerca'"
        :icon="'icon icon-search icon-in-line'"
        :submit="true"
      />
    </div>
  </form>
</template>

<script lang="ts">
import encodeURIString from '~/utils/encodeURIString'

export default {
  name: 'UiSearchForm',
  props: {
    searchedTerm: {
      type: String

    },
    isInHeader: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    encodeUriStringMethod (string: string) {
      return encodeURIString(string, '+')
    },
    submit () {
      const encodedTerm = this.searchTerm ? this.encodeUriStringMethod(this.searchTerm) : ''
      this.$router.push(`/facilities/${encodedTerm}`)
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
    border-color: #ff9900 #{!important};
    box-shadow: 0 0 0 2px #ff9900 #{!important};
  }
}
</style>
