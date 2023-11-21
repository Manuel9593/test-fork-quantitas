<template>
  <div>
    <MainHeader />
    <main id="main" class="container-fluid">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import { MainHeader, MainFooter } from '#build/components';
</script>