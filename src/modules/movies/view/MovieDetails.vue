<script setup lang="ts">
import type { IMovie } from "../@types/movies";
import { ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import MoviesService from "../services/movies.service";
import AppTitle from "@/components/partials/app/AppTitle.vue";
import AppPage from "@/components/partials/app/AppPage.vue";
import MovieInfo from "../components/details/Index.vue";
import BaseSkeleton from "@/components/partials/base/BaseSkeleton.vue";
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
    // fake loading to just show
    setInterval(() => {
      loading.value = false;
    }, 300);
  }
}
</script>
<template>
  <AppPage>
    <AppTitle v-if="movie && !loading">{{ movie.fullTitle }}</AppTitle>
    <BaseSkeleton v-else class="h-8 w-1/2" />
    <section>
      <div class="xl:w-4/5 mx-auto w-full">
        <MovieInfo :movie="movie" :loading="loading" />
      </div>
    </section>
  </AppPage>
</template>

<style scoped></style>
