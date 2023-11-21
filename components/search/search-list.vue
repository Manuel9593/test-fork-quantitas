<template>
  <ul class="row m-0 p-0 list-unstyled">
    <li
      v-for="facility in facilities"
      :key="facility.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 ms-0"
    >
      <ui-card>
        <template #header>
          <small
            class="badge bg-pill bg-dark mb-2 text-capitalize"
            :title="facility.typology"
          >
            {{ facility.typology | $truncate(28) }}
          </small>
          <h3 class="h5 m-0">
            <b>{{ facility.name }}</b>
          </h3>
        </template>
        <template #body>
          <ul class="m-0 list-unstyled">
            <li>
              <address>
                <span class="icon icon-map-marker" />
                <i>{{ facility.street }}. {{ facility.city }} - {{ facility.region }}</i>
              </address>
            </li>
            <li>
              <span class="icon icon-external-link" />
              <a :href="facility.website" :title="'Visita il sito di ' + facility.name" target="_blank">
                Vai al sito web
              </a>
            </li>
          </ul>
          <footer class="row mt-3 justify-content-end">
            <ui-link
              :to="{ name: 'facility', params: { id: facility.id }}"
              :text="'vedi'"
              :title="'Vedi: ' + facility.name"
              class="btn bg-primary-dark text-white"
            />
          </footer>
        </template>
      </ui-card>
    </li>
  </ul>
</template>

<script setup>
const { $truncate } = useNuxtApp()
</script>

<script>
export default {
  name: 'SearchList',
  props: {
    facilities: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
