<template>
  <section class="mb-5">
    <header class="my-4">
      <small class="badge rounded-pill bg-dark mb-2 text-capitalize">
        {{ facility.typology }}
      </small>
      <h1>
        {{ facility.name }}
      </h1>
    </header>
    <div class="bg-white border border-secondary p-4">
      <ul class="m-0 list-unstyled">
        <li class="mb-3">
          <address class="m-0">
            <span class="icon icon-map-marker" />
            <i>{{ facility.street }}. {{ facility.city }} - {{ facility.region }}</i>
          </address>
        </li>
        <li class="mb-3">
          <span class="icon icon-external-link" />
          <a
            :href="facility.website"
            :title="'Visita il sito di ' + facility.name"
            target="_blank"
          >
            Vai al sito web
          </a>
        </li>
        <li
          v-if="facility.parent"
          class="mb-3"
        >
          <span class="icon icon-pa" />
          Amministrato da:
          <i>
            <ui-link
              :to="{ name: 'facility', params: { id: facility.parent.id }}"
              :text="facility.parent.name"
              :title="'Vedi: ' + facility.parent.name"
            />
          </i>
          <i
            v-if="facility.grandParent"
          >
            -
            <ui-link
              :to="{ name: 'facility', params: { id: facility.grandParent.id }}"
              :text="facility.grandParent.name"
              :title="'Vedi: ' + facility.grandParent.name"
            />
          </i>
        </li>
        <li
          v-if="facility.childs"
        >
          <span class="icon icon-manage" />
          Amministra: <b>{{ facility.childs.length }}</b> strutture.
        </li>
      </ul>
    </div>
    <div
      v-if="facility.childs"
      class="mt-5"
    >
      <h2 class="h4 fw-light mb-3">
        <b>{{ facility.childs.length }}</b> strutture amministrate da  <i>{{ facility.name }}</i>
      </h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                Nome
              </th>
              <th scope="col" class="text-center">
                Tipologia
              </th>
              <th scope="col">
                Sede
              </th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="child in facility.childs" :key="child.id">
              <th scope="row">
                <small>
                  <b>{{ child.name }}</b>
                </small>
              </th>
              <td class="text-center">
                <small class="badge rounded-pill bg-dark mb-2 text-capitalize">
                  {{ child.typology }}
                </small>
              </td>
              <td>
                <small>
                  <address class="m-0">
                    <i>{{ child.street }}. {{ child.city }} - {{ child.region }}</i>
                  </address>
                </small>
              </td>
              <td>
                <ui-link
                  :to="{ name: 'facility', params: { id: child.id }}"
                  :text="'vedi'"
                  :title="'Vedi: ' + child.name"
                  class="btn btn-sm bg-primary-dark text-white"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      facility: {
        id: 0,
        code: 0,
        level: 0,
        name: '',
        typology: '',
        typologySLug: '',
        venue: '',
        website: '',
        city: '',
        province: '',
        region: '',
        regionSlug: '',
        zipCode: '',
        street: '',
        parentCode: '',
        parentLevel: '',
        parentRelationName: '',
        parent: {},
        grandParent: {},
        childs: []
      },
      facilityId: this.$route.params.id,
      metadata: {
        description: ''
      }
    }
  },
  async fetch () {
    try {
      this.facility = await this.$axios.$get('/api/v0/facility/' + this.facilityId)
    } catch (e) {
      return this.$nuxt.error({ statusCode: 404, message: e.message })
    }
  },
  head () {
    return {
      title: this.facility.name + ' | ICDP - Digital Library',
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div.bg-white {
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.15);
}
</style>
