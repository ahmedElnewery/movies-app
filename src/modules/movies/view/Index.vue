<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import MoviesService from "./../services/movies.service";

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
    <div class="grid">
      <div v-for="movie in moviesList" :key="movie.id">
        {{ movie.fullTitle }}
      </div>
    </div>
  </main>
</template>

<style scoped></style>
