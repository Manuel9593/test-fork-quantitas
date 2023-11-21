import { defineStore } from "pinia"

export const useIsListView = defineStore('islistview', {
    state: () => {
      return { isListView: true }
    },
    getters: {
      get: (state) => state
    },
    actions: {
      setIsListView: (data: boolean) => { this.isListView = data } 
    }
})
