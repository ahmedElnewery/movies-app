<script setup lang="ts">
import AppNavbar from "@/components/partials/app/AppNavbar.vue";
</script>

<template>
  <div class="wrapper relative">
    <AppNavbar />
    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
