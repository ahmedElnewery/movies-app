<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import MoviesService from "./../services/movies.service";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
import MovieCard from "../components/MovieCard.vue";
import AppSearchInput from "@/components/partials/app/AppSearchInput.vue";
import axios, { type CancelTokenSource } from "axios";
import BaseSkeleton from "@/components/partials/base/BaseSkeleton.vue";

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
  <main>
    <div class="py-8 bg-muted-900 min-h-screen">
      <BaseContainer>
        <h3 class="text-white text-4xl mt-12 mb-4">Movie List</h3>
        <div class="perfect-center mt-12 mb-12">
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
            v-if="!loading"
          />
          <BaseSkeleton v-else v-for="i in 8" class="h-[300px]" />
        </div>
        <div
          class="text-center perfect-center min-h-[400px]"
          v-if="!loading && moviesList.length === 0"
        >
          <div>
            <p class="mb-12 font-medium text-2xl text-muted-100">
              <span class="text-primary me-3">Oops!</span> Your movie magic
              search came up empty
            </p>

            <img
              src="@/assets/img/no-results-searching.svg"
              class="max-w-sm lg:max-w-xl"
              alt="not result"
            />
          </div>
        </div>
      </BaseContainer>
    </div>
  </main>
</template>

<style scoped></style>
