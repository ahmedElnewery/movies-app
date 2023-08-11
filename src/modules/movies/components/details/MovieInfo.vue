<script setup lang="ts">
import type { MovieInfoProps } from "../../@types/movies";
import BaseSkeleton from "@/components/partials/base/BaseSkeleton.vue";
import IconStar from "@/components/icons/IconStar.vue";

defineProps<MovieInfoProps>();
</script>
<template>
  <div class="text-muted-100">
    <div class="mb-12">
      <h2 class="text-white sm:text-2xl text-lg" v-if="movie && !loading">
        {{ movie.title }}
      </h2>
      <BaseSkeleton class="h-6 w-full" v-else />
    </div>

    <div class="overflow-x-scroll">
      <table
        class="movie-table table-fixed border-collapse border-slate-200 max-w-sm md:max-w-full"
      >
        <tbody>
          <tr>
            <td>
              <div class="md:w-48 w-28">
                <img
                  class="w-20"
                  src="@/assets/img/imdb-logo.png"
                  alt="imdb-logo"
                />
              </div>
            </td>
            <td>
              <div class="flex-items-center" v-if="movie && !loading">
                <span class="fill-yellow text-yellow me-3"><IconStar /> </span>

                <span class="text-2xl font-semibold me-1"
                  >{{ movie.imDbRating }}
                </span>

                <span class="font-thin">/ 10</span>
              </div>
              <BaseSkeleton class="h-6 w-48" v-else> </BaseSkeleton>
            </td>
          </tr>
          <tr>
            <td>
              <div>Year</div>
            </td>
            <td>
              <div v-if="movie && !loading">
                {{ movie.year }}
              </div>
              <BaseSkeleton class="h-6 w-48" v-else> </BaseSkeleton>
            </td>
          </tr>
          <tr>
            <td>
              <div>Rank</div>
            </td>
            <td>
              <div v-if="movie && !loading">
                {{ movie.rank }}
              </div>
              <BaseSkeleton class="h-6 w-48" v-else> </BaseSkeleton>
            </td>
          </tr>
          <tr>
            <td>
              <div>Crew</div>
            </td>
            <td>
              <div
                class="flex-items-center gap-1 flex-wrap"
                v-if="movie && !loading"
              >
                <span
                  v-for="(actor, i) in movie.crew.split(',')"
                  :key="i"
                  class="text-primary underline whitespace-nowrap"
                >
                  {{ actor }},
                </span>
              </div>
              <BaseSkeleton class="h-6 w-48" v-else> </BaseSkeleton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table.movie-table tr td {
  @apply py-4 border-b md:text-lg text-base;
}
table.movie-table tr:last-child td {
  @apply border-0 !important;
}
</style>
