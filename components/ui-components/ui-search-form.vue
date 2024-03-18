<template>
  <form
    action="/facilities/"
    method="GET"
    class="flex flex-col gap-3 my-3"
    @submit.stop.prevent="submit()"
  >
    <label
      class="font-bold text-2xl mt-5"
      :class="{'hidden': isInHeader}"
      for="facility-search"
    >
      <b>Cerca tra le strutture culturali italiane</b>
    </label>
    <div class="flex flex-row gap-4 content-center">
      <div class="basis-3/4">
        <UInput
          id="facility-search"
          v-model="searchTerm"
          name="facility-search"
          type="search"
          placeholder="Cerca direzioni, istituti, soprintendenze, luoghi della cultura, ecc."
          class="text-black"
          size="xl"
          color="white"
          variant="outline"
        />
      </div>
      <ui-button
        class="basis-1/4"
        :text="'Cerca'"
        :icon="'i-heroicons-magnifying-glass'"
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
