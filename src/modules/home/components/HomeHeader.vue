<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import BaseContainer from "@/components/partials/base/BaseContainer.vue";
</script>
<template>
  <header class="bg-muted-900">
    <BaseContainer>
      <div class="perfect-center header-height">
        <div class="text-center lg:w-1/2 md:2/3 w-full">
          <h1 class="font-bold text-5xl italic mb-6 text-white">
            Discover and Bookmark Your Favorite Movies
          </h1>
          <p class="italic tracking-wider text-2xl mb-8 text-white">
            Bookmark and organize films that resonate with you. Join now and
            explore the world of cinema tailored to your tastes.
          </p>
          <div class="relative">
            <input
              class="w-full py-3 ps-12 pe-6 outline-0 rounded-full"
              type="text"
              autocomplete="off"
            />
            <span class="absolute top-1/2 z-10 -translate-y-1/2 left-3"
              ><IconSearch />
            </span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header-height {
  min-height: calc(100vh - var(--navbar-height));
}
</style>
