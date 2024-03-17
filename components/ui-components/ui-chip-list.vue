<template>
  <ul class="m-0 list-none text-center">
    <li
      v-for="element in list"
      :key="element.id"
      class="gap-3 inline-block text-center mb-2"
    >
      <ui-chip-link
        :to="{ name: 'cerca', params: { term: 'tutte', regions: 'italia', typology: element.slug }}"
        :text="element.name"
        :title="'Vedi tutte le strutture: ' + element.name"
        class="px-3 mx-2"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import TypologyType from '~/types/prismaTypes/typologyType';

export default {
  name: 'UiChipList',
  props: {
    list: {
      type: Array<TypologyType>,
      default () {
        return [] as TypologyType[]
      }
    }
  }
}
</script>