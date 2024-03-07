<template>
  <article class="card">
    <figure v-if="hasFigureSlot" class="card-image">
      <slot name="figure" />
    </figure>
    <header v-if="hasHeaderSlot" class="card-title px-4 mt-4 mb-0">
      <slot name="header" />
    </header>
    <div class="card-body">
      <slot name="body" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'UiCard',
  computed: {
    hasFigureSlot () {
      return this.$slots.figure
    },
    hasHeaderSlot () {
      return this.$slots.header
    }
  }
}
</script>

<style lang="scss" scoped>
article.card {
  border: solid 1px $secondary;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  &::after {
    display: none;
  }
}
</style>
