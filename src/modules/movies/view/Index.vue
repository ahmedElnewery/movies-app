<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { IMovie } from "./../@types/movies";
import MoviesService from "./../services/movies.service";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
import IconBookmark from "@/components/icons/IconBookmark.vue";

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
          <div
            class="relative group rounded-md overflow-hidden"
            v-for="movie in moviesList"
            :key="movie.id"
          >
            <div class="w-full">
              <img
                class="object-contain w-full"
                :src="movie.image"
                :alt="movie.title"
              />
            </div>
            <RouterLink
              :to="`/movies/${movie.id}`"
              class="absolute inset-0 z-20"
            ></RouterLink>
            <div
              class="absolute z-30 left-0 right-0 top-0 flex h-1/4 w-full flex-col justify-end overlay-top px-4 pb-4 opacity-100 transition-opacity duration-300"
            >
              <button class="absolute top-6 right-6 text-yellow fill-yellow">
                <IconBookmark />
              </button>
            </div>
            <div
              class="absolute left-0 right-0 bottom-0 z-10 flex h-1/2 w-full flex-col justify-end overlay-bottom px-4 pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-90"
            >
              <p class="text-white truncate">{{ movie.fullTitle }}</p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  </main>
</template>

<style scoped>
.overlay-top {
  background: linear-gradient(to top, transparent 0%, black 75%);
}
.overlay-bottom {
  background: linear-gradient(to bottom, transparent 0%, black 75%);
}
</style>
