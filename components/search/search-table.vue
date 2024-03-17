<template>
  <table class="table table-sm table-striped">
    <thead>
      <tr>
        <th>
          Nome
        </th>
        <th class="text-center">
          Tipologia
        </th>
        <th>
          Sede
        </th>
        <th>
          Amministrazione
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="facility in facilities"
        :key="facility.id"
      >
        <th>
          <small>
            <b>{{ facility.name }}</b>
          </small>
        </th>
        <td class="text-center">
          <UBadge
            class="capitalize font-semibold bg-slate-700"
            :title="facility.typology"
          >
            {{ facility.typology }}
          </UBadge>
        </td>
        <td>
          <small>
            <address>
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
              v-if="facility.parent"
            >
              -
              <ui-link
                :to="{ name: 'facility', params: { id: facility.parent.id }}"
                :text="facility.parent.name"
                :title="'Vedi: ' + facility.parent.name"
              />
            </i>
          </small>
          <span v-else>-</span>
        </td>
        <td>
          <ui-link
            :to="{ name: 'facility', params: { id: facility.id }}"
            text="Vedi"
            :title="'Vedi: ' + facility.name"
            class="bg-slate-700 text-white"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import FacilityType from '~/types/prismaTypes/facilityType'

export default {
  name: 'SearchTable',
  props: {
    facilities: {
      type: Array<FacilityType>,
      default () {
        return []
      }
    }
  }
}
</script>