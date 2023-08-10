<script setup lang="ts">
import IconBookmark from "@/components/icons/IconBookmark.vue";
import type { IMovie } from "../@types/movies";
defineProps<{
  movie: IMovie;
}>();
const emit = defineEmits(["toggle-bookmark"]);
</script>

<template>
  <div class="relative group rounded-md overflow-hidden">
    <div class="w-full">
      <img
        class="object-contain w-full group-hover:transform group-hover:scale-105 transition-transform"
        :src="movie.image"
        :alt="movie.title"
      />
    </div>
    <RouterLink
      :to="{ name: 'movieDetails', params: { id: movie.id } }"
      class="absolute inset-0 z-20"
    ></RouterLink>
    <div class="overlay overlay-top">
      <button
        class="absolute sm:top-6 sm:end-6 top-3 end-3 text-yellow"
        :class="[movie.isBookmarked ? 'fill-yellow' : 'fill-orange-100']"
        @click="emit('toggle-bookmark', { id: movie.id })"
      >
        <IconBookmark />
      </button>
    </div>
    <div class="overlay overlay-bottom">
      <p class="text-white truncate">{{ movie.fullTitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  @apply absolute left-0 right-0  px-4 pb-3 transition-opacity duration-300;
}
.overlay-top {
  @apply z-30  top-0  h-1/4 w-full opacity-100;
  background: linear-gradient(to top, transparent 0%, black 75%);
}
.overlay-bottom {
  @apply bottom-0 z-10 flex h-1/2 w-full flex-col justify-end  opacity-0  group-hover:opacity-90;
  background: linear-gradient(to bottom, transparent 0%, black 75%);
}
</style>
