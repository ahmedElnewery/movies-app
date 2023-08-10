<script setup lang="ts">
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// data
const searchQuery: Ref<string> = ref("");
function goToSearch() {
  router.push({ name: "movies", query: { q: searchQuery.value } });
}
</script>
<template>
  <nav class="bg-dark text-white py-4 max-h-[var(--navbar-height)]">
    <BaseContainer>
      <div class="flex-between">
        <div class="flex-items-center sm:gap-x-12 gap-x-6">
          <div class="brand">
            <RouterLink :to="{ name: 'home' }">
              <div class="first-letter:text-primary text-3xl">
                Movies
              </div></RouterLink
            >
          </div>
          <ul class="flex-items-center gap-4">
            <li class="navbar-link">
              <RouterLink
                class="navbar-link"
                exact-active-class="navbar-link--active"
                :to="{ name: 'movies' }"
                >Browse
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="navbar-link"
                exact-active-class="navbar-link--active"
                :to="{ name: 'wishlist' }"
                >My Movies
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </nav>
</template>

<style scoped>
.navbar-link {
  @apply hover:text-muted-100 transition-colors py-2;
}
.navbar-link--active {
  @apply border-b border-primary  !important;
}
</style>
