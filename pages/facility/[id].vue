<template>
  <section class="mb-5" v-if="facility">
    <header class="my-4">
      <UBadge
        class="capitalize font-semibold bg-slate-800"
        :title="facility.typology"
      >
        {{ facility.typology }}
      </UBadge>
      <h1>
        {{ facility.name }}
      </h1>
    </header>
    <div class="bg-white border p-4">
      <ul class="m-0 list-none">
        <li class="mb-3">
          <address class="m-0">
            <span class="icon icon-map-marker" />
            <i>{{ facility.street }}. {{ facility.city }} - {{ facility.region }}</i>
          </address>
        </li>
        <li class="mb-3">
          <span class="icon icon-external-link" />
          <a :href="facility.website" :title="'Visita il sito di ' + facility.name" target="_blank">
            Vai al sito web
          </a>
        </li>
        <li v-if="facility.parent" class="mb-3">
          <span class="icon icon-pa" />
          Amministrato da:
          <i>
            <ui-link :to="{ name: 'facility', params: { id: facility.parent.id } }" :text="facility.parent.name"
              :title="'Vedi: ' + facility.parent.name" />
          </i>
          <i v-if="facility.parent">
            -
            <ui-link :to="{ name: 'facility', params: { id: facility.parent.id } }" :text="facility.parent.name"
              :title="'Vedi: ' + facility.parent.name" />
          </i>
        </li>
        <li v-if="facility.children">
          <span class="icon icon-manage" />
          Amministra: <b>{{ facility.children.length }}</b> strutture.
        </li>
      </ul>
    </div>
    <div v-if="facility.children" class="mt-5">
      <h2 class="font-light mb-3">
        <b>{{ facility.children.length }}</b> strutture amministrate da <i>{{ facility.name }}</i>
      </h2>
      <div>
        <table class="table-auto">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="child in facility.children" :key="child.id">
              <th>
                <small>
                  <b>{{ child.name }}</b>
                </small>
              </th>
              <td class="text-center">
                <UBadge
                  class="capitalize font-semibold bg-slate-800"
                  size="lg"
                  :title="facility.typology"
                >
                  {{ child.typology }}
                </UBadge>
              </td>
              <td>
                <small>
                  <address>
                    <i>{{ child.street }}. {{ child.city }} - {{ child.region }}</i>
                  </address>
                </small>
              </td>
              <td>
                <ui-link :to="{ name: 'facility', params: { id: child.id } }" :text="'vedi'" :title="'Vedi: ' + child.name"
                  class="bg-slate-900 text-white" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from '#app'
import FacilityType from '~/types/prismaTypes/facilityType'
const route = useRoute()
const router = useRouter()
const facilityId = route.params.id
const facility = ref<FacilityType|null>(null);
$fetch<FacilityType>(`/api/facility/${facilityId}`)
.then((result) => {
  facility.value = result
  useHead({
    title: facility.value?.name + ' | ICDP - Digital Library',
    meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
  })
})
.catch(() => {router.push({name:'home'})})
</script>