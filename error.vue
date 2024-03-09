<template>
  <div class="row align-items-center my-5">
    <div class="col-12 col-sm text-center">
      <h1 v-if="error.statusCode === 404">
        Non vedo la pagina! <br>
        404 <br>
        <span class="h6 fw-light">Non troviamo la pagina che cerchi</span>
      </h1>
      <h1 v-else>
        Oooops! Errore {{ error.statusCode }}
      </h1>
      <p class="mt-3">
        <ui-link
          class="btn btn-primary"
          :to="{name: 'home', params: {}}"
          :title="'Torna alla home page'"
          :text="'Torna alla home'"
        />
      </p>
    </div>
    <div class="col-12 col-sm my-5">
      <ui-404-image />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Oooops! | ICDP - Digital Library'
})
</script>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
