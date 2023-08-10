<script setup lang="ts"></script>
<template>
  <h1 class="relative title"><slot /></h1>
</template>

<style scoped>
.title {
  @apply text-white text-4xl mb-4;
}
.title::after {
  content: "";
  @apply absolute h-full w-[3px] bg-primary  -start-3;
}
</style>
