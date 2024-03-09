import { defineNuxtPlugin } from "#app"
import { clickOutside as vClickOutside } from "v-click-outside-vue3"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("v-click-outside", vClickOutside)
})
