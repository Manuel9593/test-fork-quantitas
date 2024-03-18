<template>
  <div class="bg-cyan-800 mt-5">
    <footer id="main-footer" class="container flex flex-col">
      <div class="items-center border-b flex flex-row">
        <div class="basis-1/2 flex-initial m-3">
          <ui-image-link
            :to="{ name: 'home', params: {} }"
            :title="'Torna alla Homepage'"
          >
            <nuxt-img
              src="/img/icdp-logo-small-white.svg"
              alt="Digital Library. Istituto centrale per la digitalizzazione del patrimonio culturale"
              width="180px"
              height="60px"
              class="inline-flex"
            />
          </ui-image-link>
        </div>
        <div class="basis-1/2 flex-initial text-end m-3">
          <nuxt-img
            src="/img/mic-logo-white.svg"
            alt="Ministero della cultura"
            width="180px"
            height="60px"
            class="inline-flex"/>
        </div>
      </div>
      <div class="basis-1/2 items-center py-3">
        <p class="text-center w-100 mb-0">
          <small>
            &copy;{{ currentYear }} Ministero per i beni e le attività culturali
            e il turismo
          </small>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
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
