<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
colorMode.preference = "light"
</script>