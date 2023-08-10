<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import type { IMovie } from "../@types/movies";
import MoviesService from "../services/movies.service";
import IconStar from "@/components/icons/IconStar.vue";
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
          <h1 class="text-white text-2xl mb-12">{{ movie.title }}</h1>
          <div class="overflow-x-scroll">
            <table
              class="movie-table table-fixed border-collapse border-slate-200 max-w-xs md:max-w-2xl"
            >
              <tbody>
                <tr>
                  <td>
                    <div class="w-48">
                      <img
                        class="w-20"
                        src="@/assets/img/imdb-logo.png"
                        alt="imdb-logo"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex-items-center">
                      <span class="fill-yellow text-yellow me-3"
                        ><IconStar />
                      </span>

                      <span class="text-2xl font-semibold me-1"
                        >{{ movie.imDbRating }}
                      </span>

                      <span class="font-thin">/ 10</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="text-lg">Year</div>
                  </td>
                  <td>
                    <div class="text-lg">
                      {{ movie.year }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Rank</div>
                  </td>
                  <td>
                    <div>
                      {{ movie.rank }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Crew</div>
                  </td>
                  <td>
                    <div class="flex-items-center gap-3 flex-wrap">
                      <span
                        v-for="(actor, i) in movie.crew.split(',')"
                        :key="i"
                        class="text-primary underline whitespace-nowrap"
                      >
                        {{ actor }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
table.movie-table tr td {
  @apply py-4 border-b;
}
table.movie-table tr:last-child td {
  @apply border-0 !important;
}
</style>
