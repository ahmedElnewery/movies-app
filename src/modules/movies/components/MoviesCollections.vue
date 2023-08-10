<script setup lang="ts">
import BaseSkeleton from "@/components/partials/base/BaseSkeleton.vue";
import type { MoviesCollectionsProps } from "../@types/movies";
import MovieCard from "./MovieCard.vue";

defineProps<MoviesCollectionsProps>();
</script>
<template>
  <div
    class="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8"
  >
    <MovieCard
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
      v-if="!loading"
    />
    <BaseSkeleton v-else v-for="i in 8" class="h-[300px] w-full" />
  </div>
  <div
    class="text-center perfect-center min-h-[400px]"
    v-if="!loading && movies.length === 0"
  >
    <div>
      <img
        src="@/assets/img/no-results-searching.svg"
        class="max-w-sm lg:max-w-xl"
        alt="not result"
      />
      <p class="mt-12 font-medium text-2xl text-muted-100">
        <span class="text-primary me-3">Oops!</span> Your movie magic search
        came up empty
      </p>
    </div>
  </div>
</template>

<style scoped></style>
