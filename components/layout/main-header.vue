<template>
  <div class="bg-cyan-800">
    <header id="main-header" class="container-fluid">
      <div class="row-auto items-center">
        <div class="col-12 col-sm">
          <p class="logo icon icon-logo-white my-3">
            <ui-link
              :to="{ name: 'home', params: {} }"
              :title="'Torna alla Homepage'"
              :text="'Digital Library. Istituto centrale per la digitalizzazione del patrimonio culturale'"
            />
          </p>
        </div>

        <div v-if="hasSearchForm" class="col-12 col-sm">
          <ui-search-form
            :is-in-header="true"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  computed: {
    hasSearchForm () {
      const route = useRoute()
      if (
        route.name === 'search' ||
        route.name === 'index' ||
        route.name === 'home'
      ) {
        return false
      } else {
        return true
      }
    }
  }
}
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
