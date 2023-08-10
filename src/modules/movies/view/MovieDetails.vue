<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import type { IMovie } from "../@types/movies";
import MoviesService from "../services/movies.service";

const { params } = useRoute();
//data
const loading: Ref<boolean> = ref(true);
const movie: Ref<IMovie | null> = ref(null);
const errorMessage: Ref<string> = ref("");

//computed

fetchMovie();
async function fetchMovie() {
  try {
    const { data } = await MoviesService.getMovieDetails(params.id as string);
    if (data) {
      movie.value = data;
    }
  } catch (error) {
  } finally {
    loading.value = false;
  }
}
</script>
<template>
  <section class="page-height pt-20 pb-12">
    <h3 class="text-white text-4xl mb-4">{{ movie?.fullTitle }}</h3>
    <div class="w-4/5 mx-auto">
      <div class="pt-20 grid grid-cols-2" v-if="!loading && movie">
        <div>
          <img
            width="280"
            class="rounded-md"
            :src="movie.image"
            :alt="movie.title"
          />
        </div>
        <div class="text-muted-100">
          <h1 class="text-white text-2xl mb-8">{{ movie.title }}</h1>
          <div class="flex-items-cneter">
            <span></span>
            <span class="font-medium">Year : {{ movie.year }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
