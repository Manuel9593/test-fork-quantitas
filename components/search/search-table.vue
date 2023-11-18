<template>
  <div class="table-responsive">
    <table class="table table-sm table-striped">
      <thead>
        <tr>
          <th scope="col">
            Nome
          </th>
          <th class="text-center" scope="col">
            Tipologia
          </th>
          <th scope="col">
            Sede
          </th>
          <th scope="col">
            Amministrazione
          </th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="facility in facilities"
          :key="facility.id"
        >
          <th scope="row">
            <small>
              <b>{{ facility.name }}</b>
            </small>
          </th>
          <td class="text-center">
            <small class="badge bg-pill bg-dark mb-2 text-capitalize">
              {{ facility.typology }}
            </small>
          </td>
          <td>
            <small>
              <address class="m-0">
                <i>{{ facility.street }}. {{ facility.city }} - {{ facility.region }}</i>
              </address>
            </small>
          </td>
          <td>
            <small v-if="facility.parent">
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
            </small>
            <span v-else>-</span>
          </td>
          <td>
            <ui-link
              :to="{ name: 'facility', params: { id: facility.id }}"
              :text="'vedi'"
              :title="'Vedi: ' + facility.name"
              class="btn btn-sm bg-primary-dark text-white"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SearchTable',
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
