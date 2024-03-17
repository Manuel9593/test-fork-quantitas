<template>
  <div class="flex flex-row flex-wrap gap-3">
    <div
      v-for="facility in facilities"
      :key="facility.id"
      class="basis-1/5 flex-1"
    >
      <UCard
        :ui="{
          header: { padding: 'p-3' },
          body: { padding: 'p-3' },
          footer: { padding: 'p-3' }
        }"
      >
        <template #header class="h-10">
          <UBadge
            class="capitalize font-semibold bg-slate-800"
            :title="facility.typology"
          >
            {{ facility.typology || truncate(facility.typology, 28) }}
          </UBadge>
          <h3 class="mt-2">
            {{ facility.name }}
          </h3>
        </template>
        <ul class="list-none">
          <li>
            <address>
              <span class="icon icon-map-marker" />
              <i
                >{{ facility.street }}. {{ facility.city }} -
                {{ facility.region }}</i
              >
            </address>
          </li>
          <li>
            <ULink
              :to="facility.website"
              :title="'Visita il sito di ' + facility.name"
              target="_blank"
              active-class="text-gray-900"
            >
              <span class="icon icon-external-link" />
              Vai al sito web
            </ULink>
          </li>
        </ul>
        <template #footer>
          <UButton
            :to="{ name: 'facility', params: { id: facility.id } }"
            :text="'vedi'"
            :title="'Vedi: ' + facility.name"
            block
            class="bg-slate-700 text-white"
          />
        </template>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts">
import { UBadge } from "#build/components";
import FacilityType from "~/types/prismaTypes/facilityType";

export default {
  name: "SearchList",
  props: {
    facilities: {
      type: Array<FacilityType>,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
