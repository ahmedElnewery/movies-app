<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import MoviesService from "./../services/movies.service";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
import MovieCard from "../components/MovieCard.vue";
import AppSearchInput from "@/components/partials/app/AppSearchInput.vue";
import axios, { type CancelTokenSource } from "axios";

//data
const loading: Ref<boolean> = ref(false);
const moviesList: Ref<IMovie[]> = ref([]);
const errorMessage: Ref<string> = ref("");
const searchQuery: Ref<string> = ref("");
const cancelToken: Ref<CancelTokenSource | null> = ref(null);
// onCreation
fetchMovies();

//methods
async function fetchMovies(search = "") {
  loading.value = true;
  if (cancelToken.value) {
    cancelToken.value.cancel("Request Cancelled");
  }
  cancelToken.value = axios.CancelToken.source();
  try {
    const { data } = await MoviesService.getAllMovies({
      params: {
        title_like: search,
      },
      cancelToken: cancelToken.value.token,
    });
    if (data) {
      moviesList.value = data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
// watch
watch(searchQuery, (newSearchQuery) => {
  const trimmedSearch = newSearchQuery.trim();
  fetchMovies(trimmedSearch);
});
</script>
<template>
  <main>
    <div class="py-8 min-h-screen">
      <BaseContainer>
        <div class="perfect-center mb-12">
          <div class="w-1/2">
            <AppSearchInput v-model="searchQuery" />
          </div>
        </div>
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
