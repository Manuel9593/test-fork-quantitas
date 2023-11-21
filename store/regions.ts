import { defineStore } from "pinia"

export const useRegionsStore = defineStore('regions', {
  state: () => {
    return { regions: [] }
  },
  actions: {
    getRegions: async () => {
      if(this.regions.length) return this.regions
      this.setRegions(await $fetch('/api/regions/'))
      return this.regions;
    },
    setRegions: (data) => {
      this.regions.push(...data)
    }
  }
})