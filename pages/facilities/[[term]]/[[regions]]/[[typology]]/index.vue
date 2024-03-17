<script lang="ts">
import FacilityType from "~/types/prismaTypes/facilityType";
import TypologyType from "~/types/prismaTypes/typologyType";
import RegionType from "~/types/prismaTypes/regionType";
import { useStore } from "~/composables/store";
import { UCheckbox } from "#build/components";
const store = useStore();
export default defineNuxtComponent({
  data() {
    return {
      term: this.$route.params.term,
      regions: this.$route.params.regions,
      typology: this.$route.params.typology,
      level: this.$route.params.level,
      tabItems: [
        { key: "table", label: "Tabella" },
        { key: "grid", label: "Griglia" }
      ],
      regionSelected: false
    };
  },
  setup() {
    const route = useRoute();
    const facilities = ref<FacilityType[]>([]);
    const pending = ref<boolean>(true);
    useFetch<FacilityType[]>(
      `/api/facilities/` +
      `${route.params.term.toString()}/${route.params.regions.toString()}` +
      `/${route.params.typology?.toString()}`
    ).then(async (asyncData) => {
      facilities.value = asyncData.data.value || [];
      pending.value = asyncData.pending.value;
    });
    return {
      facilities, pending
    };
  },
  computed: {
    isListView() {
      return store.getIsListView.value;
    },
    fetchedRegions() {
      return store.getRegions.value;
    },
    fetchedTypologies() {
      return store.getTypologies.value;
    },
    getSearchedTerm() {
      const searched_term =
        this.term instanceof Array ? this.term.join(" ") : this.term;
      return !searched_term ? "tutte" : searched_term;
    },
    getSearchedRegions(): string[] {
      return !this.regions
        ? ["italia"]
        : typeof this.regions === "string"
        ? this.regions.split(",")
        : this.regions;
    },
    getSearchedTypologyText() {
      let text = "";
      if (this.typology && this.fetchedTypologies) {
        const selectedTypology = this.fetchedTypologies.find(
          (e: TypologyType) => e.slug === this.typology
        );
        if (selectedTypology) text = selectedTypology.name;
      }
      return text;
    },
    getSearchedRegionsText() {
      const searchedRegionsText: string[] = [];
      if (this.regions && this.regions !== "italia") {
        let regionsArray = this.regions;
        if (typeof regionsArray === "string") {
          regionsArray = regionsArray.split(",");
        }
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
  methods: {
    basic() {
      console.log("vbbdcnnbc", this.regionSelected);
    },
    encodeURI(string: string) {
      return encodeURIString(string, "+");
    },
    changeResultsView(val: boolean) {
      store.setIsListView(val);
    },
    filterByRegions(regions: string[]) {
      this.regions = regions;
      regions = this.getSearchedRegions ? this.getSearchedRegions : ["italia"];
      this.$router.push(
        "/facilities/" +
          this.encodeURI(this.getSearchedTerm) +
          "/" +
          regions +
          "/" +
          this.typology
      );
    },
    filterByTypology(typology: string) {
      this.typology = typology;
      let regionsParam = this.getSearchedRegionsText || "italia";
      this.$router.push(
        "/facilities/" +
          this.encodeURI(this.getSearchedTerm) +
          "/" +
          regionsParam +
          "/" +
          typology
      );
    }
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
      <div class="flex flex-row mb-4">
        <div class="flex-initial">
          <SearchFiltersRegions
            :fetched-regions="fetchedRegions"
            :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions"
            :params-typology="getSearchedTypologyText"
            @filter-regions="filterByRegions"
          />
        </div>
        <div class="flex-initial">
          <SearchFiltersTypology
            :fetched-typology="fetchedTypologies"
            :searched-term="getSearchedTerm"
            :params-regions="getSearchedRegions"
            :params-typology="getSearchedTypologyText"
            @filter-typology="filterByTypology"
          />
        </div>
        <!-- <div class="">
          search-filters-level
        </div> -->
      </div>
    </header>
    <div v-if="!pending">
      <UTabs
        v-if="facilities && facilities.length"
        :items="tabItems"
      >
        <template #item="{item}: {item: {key: string, label: string}}">
          <div v-if='item.key === "table"'>
            <SearchList :facilities="facilities" />
          </div>
          <div v-else-if='item.key === "grid"'>
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
  </section>
</template>
