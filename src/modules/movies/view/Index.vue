<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import MoviesService from "./../services/movies.service";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
import MovieCard from "../components/MovieCard.vue";

//data
const loading: Ref<boolean> = ref(false);
const moviesList: Ref<IMovie[]> = ref([]);
const errorMessage: Ref<string> = ref("");

// onCreation
fetchMovies();

//methods
async function fetchMovies() {
  loading.value = true;
  try {
    const { data } = await MoviesService.getAllMovies();
    if (data) {
      moviesList.value = data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>
<template>
  <main>
    <div class="py-8 min-h-screen">
      <BaseContainer>
        <div
          class="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8"
        >
          <MovieCard
            v-for="movie in moviesList"
            :movie="movie"
            :key="movie.id"
          />
        </div>
      </BaseContainer>
    </div>
  </main>
</template>

<style scoped></style>
