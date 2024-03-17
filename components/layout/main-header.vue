<template>
  <div class="bg-cyan-800">
    <header id="main-header" class="container">
      <div class="flex flex-row items-center">
        <div class="basis-1/2 flex-initial">
          <ui-image-link
            :to="{ name: 'home', params: {} }"
            :title="'Torna alla Homepage'"
            class="m-3 inline-flex"
          >
            <NuxtImg
              src="/img/icdp-logo-white.svg"
              alt="Digital Library. Istituto centrale per la digitalizzazione del patrimonio culturale"
              width="280px"
              height="91px"
            />
          </ui-image-link>
        </div>
        <div v-if="hasSearchForm" class="basis-1/2">
          <ui-search-form :is-in-header="true" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  computed: {
    hasSearchForm() {
      const route = useRoute();
      if (
        route.name === "search" ||
        route.name === "index" ||
        route.name === "home"
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#main-header {
  color: $white;

  .logo {
    padding: 0;
    margin: 0;
    width: 280px;
    height: 91px;
    background-size: contain;
    text-indent: -99999999em;

    a {
      display: block;
      height: 100%;
    }
  }
}
</style>
