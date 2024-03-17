<template>
    <ULink
      color="black"
      variant="link"
      :to="to"
      :title="title"
    >
      <slot />
    </ULink>
  </template>
  
  <script lang="ts">
  export default {
    name: 'UiImageLink',
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
      }
    }
  }
  </script>