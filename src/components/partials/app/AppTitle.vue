<script setup lang="ts"></script>
<template>
  <h1 class="relative title inline-block"><slot /></h1>
</template>

<style scoped>
.title {
  @apply text-white sm:text-4xl mb-4 text-2xl;
}
.title::after {
  content: "";
  @apply absolute h-[3px] w-1/2  bg-primary  -bottom-3 start-0;
}
</style>
