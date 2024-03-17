<template>
  <UButton
    :type="submit ? 'submit' : 'button'"
    :title="title"
    :label="text"
    block
    size="md"
    class="text-center bg-slate-700"
  >
    <template #leading>
      <span
        :class="hasIcon ? icon : ''"
      >
      </span>
    </template>
  </UButton>
</template>

<script lang="ts">
export default {
  name: 'UiButton',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    submit: {
      type: Boolean,
      default: false
    },
    visuallyHidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasIcon () {
      return !!this.icon
    }
  }
}
</script>