import { clickOutside } from "v-click-outside-vue3"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("v-click-outside", clickOutside)
})
