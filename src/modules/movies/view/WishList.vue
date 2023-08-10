<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import axios, { type CancelTokenSource } from "axios";
//components
import MoviesService from "./../services/movies.service";
import AppSearchInput from "@/components/partials/app/AppSearchInput.vue";
import AppPage from "@/components/partials/app/AppPage.vue";
import AppTitle from "@/components/partials/app/AppTitle.vue";
import MoviesCollections from "../components/MoviesCollections.vue";

//data
const loading: Ref<boolean> = ref(true);
const moviesList: Ref<IMovie[]> = ref([]);
const errorMessage: Ref<string> = ref("");
// onCreation
fetchMovies();

//methods
async function fetchMovies() {
  loading.value = true;
  try {
    const { data } = await MoviesService.getBookmarkedMovies();
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
  try {
    const { data } = await MoviesService.updateBookmarkedMovie(id, {
      isBookmarked: !isBookmarked,
    });
    if (data) {
      fetchMovies();
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
}
</script>
<template>
  <AppPage>
    <AppTitle>Wishlist Movies</AppTitle>
    <section class="mt-16">
      <MoviesCollections
        :movies="moviesList"
        :loading="loading"
        @toggle-bookmark="updateBookMark"
      />
    </section>
  </AppPage>
</template>

<style scoped></style>
