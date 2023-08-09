<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBookmark from "@/components/icons/IconBookmark.vue";
</script>

<template>
  <div>
    <nav>
      <div class="flex-between py-4 bg-dark px-8 text-white">
        <div class="flex-items-center gap-x-8">
          <div class="brand">
            <RouterLink :to="{ name: 'home' }">
              <div class="first-letter:text-primary text-3xl">
                Movies
              </div></RouterLink
            >
          </div>
          <ul>
            <li>
              <RouterLink :to="{ name: 'movies' }">Browse </RouterLink>
            </li>
          </ul>
        </div>
        <div class="flex-items-center gap-6">
          <RouterLink :to="{ name: 'movies' }">
            <IconSearch />
          </RouterLink>
          <RouterLink :to="{ name: 'wishlist' }">
            <IconBookmark />
          </RouterLink>
          <RouterLink :to="{ name: 'login' }"> login </RouterLink>
          <RouterLink :to="{ name: 'register' }"> register </RouterLink>
        </div>
      </div>
    </nav>
    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
