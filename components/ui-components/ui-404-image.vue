<template>
  <figure>
    <img
      src="/img/icdp-404.png"
      :alt="alt"
    >
  </figure>
</template>

<script>
export default {
  name: 'Ui404Image',
  props: {
    alt: {
      type: String,
      default: 'Oooops'
    }
  }
}
</script>

<style lang="scss" scoped>
figure {
  max-width: 320px;
  margin: 0 auto 48px auto;
  border: solid 6px $white;
  background-color: $primary-lighter;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
  }
}
</style>
