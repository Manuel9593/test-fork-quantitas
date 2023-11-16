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
    <div v-if="!$fetchState.pending">
      <data-diagram
        :data-tree="dataTree"
      />
    </div>
    <div
      v-else
      class="row align-items-center loader-wrapper"
    >
      <div class="col">
        <div class="progress-spinner progress-spinner-active m-auto">
          <span class="sr-only">Caricamento...</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      metadata: {
        description: ''
      },
      dataTree: {}
    }
  },
  async fetch () {
    this.dataTree = await this.$axios.$get('/api/v0/facilities-diagram')
  },
  head () {
    return {
      title: 'Cerca tra le strutture culturali italiane | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
