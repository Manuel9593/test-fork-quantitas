<template>
  <div class="bg-primary-dark mt-5">
    <footer id="main-footer" class="container-fluid">
      <div class="row align-items-center border-bottom">
        <div class="col-12 col-sm">
          <p class="logo icon icon-logo-small-white my-3">
            <ui-link
              :to="{ name: 'home' }"
              :title="'Torna alla Homepage'"
              :text="'Digital Library. Istituo centrale per la digitalizzazione del patrimonio culturale'"
            />
          </p>
        </div>

        <div class="col-12 col-sm text-right">
          <p class="logo icon icon-mic-logo-white my-3">
            <span>Ministero della cultura</span>
          </p>
        </div>
      </div>
      <div class="row align-items-center py-3">
        <p class="text-center w-100 mb-0">
          <small>
            &copy;{{ currentYear }} Ministero per i beni e le attività culturali e il turismo
          </small>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
  #main-footer {
    color: $white;
     .logo {
      padding: 0;
      margin: 0;
      width: 180px;
      height: 60px;
      background-size: contain;
      text-indent: -99999999em;
      .icon-logo-small-white {
        height: 70px;
        width: 197px;
      }
      a {
        height: 100%;
        display: block;
      }
      span {
        display: none;
      }
    }
  }
</style>
