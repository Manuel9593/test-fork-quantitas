<template>
  <UButton
    color="white"
    variant="outline"
    :to="to"
    :title="title"
  >
    {{ text }}
  </UButton>
</template>

<script lang="ts">
export default {
  name: 'UiLink',
  props: {
    to: {
      type: Object,
      default () {
        return {
          name: 'home'
        }
      }
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.btn:focus {
  border-color: #ff9900;
  box-shadow: 0 0 0 2px #ff9900;
  outline: none;
}
</style>
