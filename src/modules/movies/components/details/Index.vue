<script setup lang="ts">
import type { MovieInfoProps } from "../../@types/movies";
import BaseSkeleton from "@/components/partials/base/BaseSkeleton.vue";
import MovieInfo from "./MovieInfo.vue";

defineProps<MovieInfoProps>();
</script>
<template>
  <div class="pt-20 grid md:grid-cols-2 grid-cols-1 gap-12">
    <div class="w-64 sm:w-80 mx-auto">
      <img
        v-if="!loading && movie"
        class="rounded-md w-full object-contain"
        :src="movie.image"
        :alt="movie.title"
      />

      <BaseSkeleton v-else class="h-96 w-full" />
    </div>
    <MovieInfo :movie="movie" :loading="loading" />
  </div>
</template>

<style scoped></style>
