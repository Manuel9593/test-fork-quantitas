<template>
    <UButton
        color="white"
        variant="outline"
        :ui="{rounded: 'rounded-full', font: 'font-semibold'}"
        :to="to"
        :title="title"
    >
        {{ text }}
    </UButton>
</template>

<script lang="ts">
export default {
  name: 'UiChipLink',
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