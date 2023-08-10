<script setup lang="ts">
import IconBookmark from "@/components/icons/IconBookmark.vue";
import type { IMovie } from "../@types/movies";
defineProps<{
  movie: IMovie;
}>();
</script>

<template>
  <div class="relative group rounded-md overflow-hidden">
    <div class="w-full">
      <img
        class="object-contain w-full"
        :src="movie.image"
        :alt="movie.title"
      />
    </div>
    <RouterLink
      :to="{ name: 'movieDetails', params: { id: movie.id } }"
      class="absolute inset-0 z-20"
    ></RouterLink>
    <div
      class="absolute z-30 left-0 right-0 top-0 flex h-1/4 w-full flex-col justify-end overlay-top px-4 pb-4 opacity-100 transition-opacity duration-300"
    >
      <button class="absolute top-6 right-6 text-yellow">
        <IconBookmark />
      </button>
    </div>
    <div
      class="absolute left-0 right-0 bottom-0 z-10 flex h-1/2 w-full flex-col justify-end overlay-bottom px-4 pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-90"
    >
      <p class="text-white truncate">{{ movie.fullTitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.overlay-top {
  background: linear-gradient(to top, transparent 0%, black 75%);
}
.overlay-bottom {
  background: linear-gradient(to bottom, transparent 0%, black 75%);
}
</style>
