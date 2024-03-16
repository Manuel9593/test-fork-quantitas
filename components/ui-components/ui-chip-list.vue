<template>
  <ul class="m-0 list-unstyled text-center">
    <li
      v-for="element in list"
      :key="element.id"
      class="d-inline-block text-center mb-2"
    >
      <small class="chip chip-primary chip-sm mx-2">
        <ui-link
          class="chip-label"
          :to="{ name: 'cerca', params: { term: 'tutte', regions: 'italia', typology: element.slug }}"
          :text="element.name"
          :title="'Vedi tutte le strutture: ' + element.name"
        />
      </small>
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

<style lang="scss" scoped>
.chip {
  padding: 0 16px 2px 16px;
}
</style>
