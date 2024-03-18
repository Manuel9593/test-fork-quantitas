<script lang="ts">
import FacilityType from "~/types/prismaTypes/facilityType";
import TypologyType from "~/types/prismaTypes/typologyType";
import RegionType from "~/types/prismaTypes/regionType";
import { useStore } from "~/composables/store";
const store = useStore();
export default defineNuxtComponent({
  data() {
    return {
      term: this.$route.params.term as string,
      regions: this.$route.params.regions as string,
      typology: this.$route.params.typology as string,
      level: this.$route.params.level as string,
      tabItems: [
        { key: "table", label: "Tabella" },
        { key: "grid", label: "Griglia" }
      ],
      pending: true,
      facilities: [] as FacilityType[],
      state: {
        selectedRegions: [] as string[],
        selectedTypology: ""
      }
    };
  },
  // setup() {
  //   const route = useRoute();
  //   const facilities = ref<FacilityType[]>([]);
  //   const pending = ref<boolean>(true);
  //   useFetch<FacilityType[]>(
  //     `/api/facilities/` +
  //     `${route.params.term.toString()}/${route.params.regions.toString()}` +
  //     `/${route.params.typology?.toString()}`
  //   ).then(async (asyncData) => {
  //     facilities.value = asyncData.data.value || [];
  //     pending.value = asyncData.pending.value;
  //   });
  //   return {
  //     facilities, pending
  //   };
  // },
  computed: {
    isListView() {
      return store.getIsListView.value;
    },
    fetchedRegions(): RegionType[] {
      return store.getRegions.value;
    },
    fetchedTypologies(): TypologyType[] {
      return store.getTypologies.value;
    },
    getSearchedTerm() {
      return !this.term ? "tutte" : this.term;
    },
    getSearchedRegions(): string[] {
      return !this.regions ? ["italia"] : this.regions.split(",");
    },
    getSearchedTypologyText() {
      let text = "";
      if (this.typology && this.fetchedTypologies) {
        const selectedTypology = this.fetchedTypologies.find(
          (e) => e.slug === this.typology
        );
        if (selectedTypology) text = selectedTypology.name;
      }
      return text;
    },
    getSearchedRegionsText() {
      const searchedRegionsText: string[] = [];
      if (this.regions && this.regions !== "italia") {
        let regionsArray = this.regions.split(",");
        regionsArray.forEach(async (region) => {
          const regionName = this.fetchedRegions.find(
            (e: RegionType) => e.slug === region
          );
          if (regionName) searchedRegionsText.push(regionName.name);
        });
        return searchedRegionsText.toString();
      }
      return null;
    }
  },
  mounted() {
    this.getSearchedRegionsForSelect();
    this.getSearchedTypologyForSelect();
  },
  methods: {
    encodeURI(string: string) {
      return encodeURIString(string, "+");
    },
    changeResultsView(val: boolean) {
      store.setIsListView(val);
    },
    getSearchedRegionsForSelect() {
      this.state.selectedRegions = !this.regions ? [] : this.regions.split(",");
    },
    getSearchedTypologyForSelect() {
      this.state.selectedTypology = !this.typology ? "" : this.typology;
    }
    // filterByRegions(regions: string[]) {
    //   this.regions = regions;
    //   regions = this.getSearchedRegions ? this.getSearchedRegions : ["italia"];
    //   this.$router.push(
    //     "/facilities/" +
    //       this.encodeURI(this.getSearchedTerm) +
    //       "/" +
    //       regions +
    //       "/" +
    //       this.typology
    //   );
    // },
    // filterByTypology(typology: string) {
    //   this.typology = typology;
    //   let regionsParam = this.getSearchedRegionsText || "italia";
    //   this.$router.push(
    //     "/facilities/" +
    //       this.encodeURI(this.getSearchedTerm) +
    //       "/" +
    //       regionsParam +
    //       "/" +
    //       typology
    //   );
    // }
  }
});
</script>

<template>
  <section>
    <header>
      <ui-search-form :searched-term="getSearchedTerm" />
      <h1 class="my-4">
        {{ facilities ? facilities.length : 0 }}
        {{
          facilities
            ? facilities.length === 1
              ? "risultato"
              : "risultati"
            : "risultato"
        }}
        per «{{ term }}»
      </h1>
      <p v-if="getSearchedRegionsText || getSearchedTypologyText">
        Filtri:
        <b v-if="getSearchedTypologyText">{{ getSearchedTypologyText }}</b>
        <span v-if="getSearchedRegionsText">
          in <i>{{ getSearchedRegionsText }}</i>
        </span>
      </p>
      <div
        class="flex flex-row flex-wrap mb-4 gap-4 justify-start align-middle"
      >
        <label for="regions"><b>Filtra per regioni:</b></label>
        <div class="flex-initial">
          <USelectMenu
            id="regions"
            multiple
            searchable
            search-placeholder="Cerca..."
            class="w-48"
            v-model="state.selectedRegions"
            :options="fetchedRegions"
            value-attribute="slug"
            option-attribute="name"
          >
            <template #label>
              <span v-if="state.selectedRegions.length"
                >{{ state.selectedRegions.length }}
                {{
                  state.selectedRegions.length == 1 ? "regione" : "regioni"
                }}</span
              >
              <span v-else>Seleziona le regioni</span>
            </template>
          </USelectMenu>
        </div>
        <label for="typology"><b>Filtra per tipologia:</b></label
        >{{ "  " }}
        <div class="flex-initial">
          <USelectMenu
            id="typology"
            searchable
            search-placeholder="Cerca..."
            class="w-72"
            v-model="state.selectedTypology"
            :options="fetchedTypologies"
            placeholder="Seleziona il tipo"
            value-attribute="slug"
            option-attribute="name"
          />
        </div>
        <!-- <div class="">
          search-filters-level
        </div> -->
      </div>
      <UButton block size="md" label="Cerca" type="submit" class="bg-slate-700" />
    </header>
    <div v-if="!pending">
      <UTabs v-if="facilities && facilities.length" :items="tabItems">
        <template #item="{ item }: { item: { key: string, label: string } }">
          <div v-if="item.key === 'table'">
            <SearchList :facilities="facilities" />
          </div>
          <div v-else-if="item.key === 'grid'">
            <SearchTable :facilities="facilities" />
          </div>
        </template>
      </UTabs>
      <div v-else class="text-center">
        <h2>Non vedo risultati!</h2>
        <p>
          <ui-link
            :to="{ name: 'cerca', params: {} }"
            :title="'Rimuovi tutti i filtri'"
            :text="'Annulla la ricerca'"
          />
        </p>
        <ui-404-image />
      </div>
    </div>
    <div v-else class="grid grid-cols-1 place-content-center h-40">
      <UProgress
        animation="swing"
        size="2xl"
        :ui="{ progress: { color: 'bg-slate-900' } }"
      />
    </div>
  </section>
</template>
