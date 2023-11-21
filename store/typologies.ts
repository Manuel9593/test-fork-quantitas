import { defineStore } from "pinia"

export const useTypologiesStore = defineStore('typologies', {
    state: () => {
      return { typologies: [] }
    },
    actions: {
      getTypologies: async () => {
        if(this.typologies.length) return this.regions
        this.setTypologies(await $fetch('/api/v0/regions/'))
        return null;
      },
      setTypologies: (data: any) => { this.typologies.push(...data)}
    }
})
