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
      <DataDiagram
        :dataTree="dataTree"
      />
    </div>
    <div
      v-else
      class="flex items-center"
    >
      <div class="flex-1">
        <UProgress size="2xl" animation="swing" :ui="{progress: {color: 'bg-slate-900'}}"/>
        <span class="hidden">Caricamento...</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FacilityType from '~/types/prismaTypes/facilityType';
import DataDiagram from '~/components/data/data-diagram.vue';
const dataTree = ref<FacilityType[]>([]);
const pending = ref<boolean>(true);
$fetch<FacilityType[]>('/api/facilities-diagram')
.then((result) => { pending.value = false; dataTree.value = result })
.catch(() => pending.value = false)

export default {
  components: { DataDiagram },
  data() {
    return { dataTree, pending }
  },
  head () {
    return {
      title: 'Cerca tra le strutture culturali italiane | ICDP - Digital Library',
    }
  }
}
</script>