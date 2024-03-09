<template>
  <section class="pb-5">
    <header class="text-center">
      <h1 class="mt-5 mb-3">
        <b>Diagramma amministrativo</b>
      </h1>
      <p class="mb-5">
        Naviga il diagramma amministrativo delle strutture del Ministero della cultura.
      </p>
    </header>
    <div v-if="!pending && dataTree != null">
      <data-diagram
        :dataTree="dataTree"
      />
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

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';
const { data: dataTree , pending } = await useFetch<FacilityType[]>('/api/facilities-diagram')
</script>

<script lang="ts">
import FacilityType from '~/types/prismaTypes/facilityType';

export default {
  head () {
    return {
      title: 'Cerca tra le strutture culturali italiane | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: "" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
