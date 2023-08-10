<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import axios, { AxiosError, type CancelTokenSource } from "axios";
//components
import MoviesService from "./../services/movies.service";
import AppSearchInput from "@/components/partials/app/AppSearchInput.vue";
import AppPage from "@/components/partials/app/AppPage.vue";
import AppTitle from "@/components/partials/app/AppTitle.vue";
import MoviesCollections from "../components/MoviesCollections.vue";
import * as _ from "lodash";
//data
const loading: Ref<boolean> = ref(true);
const moviesList: Ref<IMovie[]> = ref([]);
const errorMessage: Ref<string> = ref("");
const searchQuery: Ref<string> = ref("");
const cancelToken: Ref<CancelTokenSource | null> = ref(null);
// onCreation
fetchMovies();

// watch
watch(searchQuery, (newSearchQuery) => {
  const trimmedSearch = newSearchQuery.trim();
  fetchMovies(trimmedSearch);
});

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
async function updateBookMark({
  id,
  isBookmarked,
}: {
  id: string;
  isBookmarked: boolean;
}) {
  const MoviesListBeforeUpdate = _.cloneDeep(moviesList.value);
  try {
    const clonedMoviesList = _.cloneDeep(moviesList.value);
    //optimestic update
    const selectedMovie = clonedMoviesList.find(
      (movie: IMovie) => movie.id === id
    );
    if (selectedMovie) {
      selectedMovie.isBookmarked = !selectedMovie.isBookmarked;
    }

    moviesList.value = clonedMoviesList;
    await MoviesService.updateBookmarkedMovie(id, {
      isBookmarked: !isBookmarked,
    });
  } catch (error) {
    if ((error as Error).message) {
      setTimeout(() => {
        moviesList.value = MoviesListBeforeUpdate;
      }, 500);
    }
  } finally {
  }
}
</script>
<template>
  <AppPage>
    <AppTitle>All Movies</AppTitle>
    <div class="perfect-center mt-8 mb-12">
      <div class="md:w-1/2 w-full">
        <AppSearchInput v-model="searchQuery" />
      </div>
    </div>
    <section>
      <MoviesCollections
        :movies="moviesList"
        :loading="loading"
        @toggle-bookmark="updateBookMark"
      />
    </section>
  </AppPage>
</template>

<style scoped></style>
