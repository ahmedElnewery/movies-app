<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBookmark from "@/components/icons/IconBookmark.vue";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
</script>
<template>
  <nav class="bg-dark text-white py-4 max-h-[var(--navbar-height)]">
    <BaseContainer>
      <div class="flex-between">
        <div class="flex-items-center gap-x-12">
          <div class="brand">
            <RouterLink :to="{ name: 'home' }">
              <div class="first-letter:text-primary text-3xl">
                Movies
              </div></RouterLink
            >
          </div>
          <ul class="flex-items-center gap-4">
            <li>
              <RouterLink :to="{ name: 'movies' }">Browse </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'wishlist' }">My Movies </RouterLink>
            </li>
          </ul>
        </div>
        <div class="md:flex-items-center gap-6 hidden">
          <RouterLink :to="{ name: 'movies' }">
            <IconSearch />
          </RouterLink>
          <RouterLink :to="{ name: 'wishlist' }">
            <IconBookmark />
          </RouterLink>
          <RouterLink :to="{ name: 'login' }"> Login </RouterLink>
          <RouterLink :to="{ name: 'register' }"> Register </RouterLink>
        </div>
      </div>
    </BaseContainer>
  </nav>
</template>

<style scoped></style>
