<template>
  <div class="bg-primary">
    <header id="main-header" class="container-fluid">
      <div class="row align-items-center">
        <div class="col-12 col-sm">
          <p class="logo icon icon-logo-white my-3">
            <ui-link
              :to="{ name: 'home' }"
              :title="'Torna alla Homepage'"
              :text="'Digital Library. Istituo centrale per la digitalizzazione del patrimonio culturale'"
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
      if (
        this.$nuxt.$route.name === 'search' ||
        this.$nuxt.$route.name === 'index' ||
        this.$nuxt.$route.name === 'home'
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
