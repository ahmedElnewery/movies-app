<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import axios, { type CancelTokenSource } from "axios";
//components
import MoviesService from "./../services/movies.service";
import MovieCard from "../components/MovieCard.vue";
import AppSearchInput from "@/components/partials/app/AppSearchInput.vue";
import BaseSkeleton from "@/components/partials/base/BaseSkeleton.vue";
import AppPage from "@/components/partials/app/AppPage.vue";
import AppTitle from "@/components/partials/app/AppTitle.vue";
import MoviesCollections from "../components/MoviesCollections.vue";

//data
const loading: Ref<boolean> = ref(true);
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
    // fake wait loading
    setTimeout(() => {
      loading.value = false;
    }, 300);
  }
}
// watch
watch(searchQuery, (newSearchQuery) => {
  const trimmedSearch = newSearchQuery.trim();
  fetchMovies(trimmedSearch);
});
</script>
<template>
  <AppPage>
    <AppTitle>All Movies</AppTitle>
    <div class="perfect-center mt-8 mb-12">
      <div class="w-1/2">
        <AppSearchInput v-model="searchQuery" />
      </div>
    </div>
    <MoviesCollections :movies="moviesList" :loading="loading" />
  </AppPage>
</template>

<style scoped></style>
