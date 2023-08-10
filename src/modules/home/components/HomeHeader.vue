<script setup lang="ts">
import AppSearchInput from "@/components/partials/app/AppSearchInput.vue";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
import { ref, type Ref } from "vue";

const searchQuery: Ref<string> = ref("");
</script>
<template>
  <header class="bg-muted-900">
    <BaseContainer>
      <div class="perfect-center header-height">
        <div class="text-center lg:w-1/2 md:2/3 w-full">
          <h1 class="font-bold text-5xl italic mb-6 text-white">
            Discover and Bookmark Your Favorite Movies
          </h1>
          <p class="italic tracking-wider text-2xl mb-8 text-muted-100">
            Bookmark and organize films that resonate with you. Join now and
            explore the world of cinema tailored to your tastes.
          </p>
          <AppSearchInput v-model="searchQuery" />
        </div>
      </div>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header-height {
  min-height: calc(100vh - var(--navbar-height));
}
</style>
