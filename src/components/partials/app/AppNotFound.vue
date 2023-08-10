<script setup lang="ts">
import BaseContainer from "../base/BaseContainer.vue";
import AppPage from "./AppPage.vue";
</script>
<template>
  <AppPage class="bg-muted-100">
    <BaseContainer>
      <div class="perfect-center pt-12">
        <div class="sm:max-w-xs lg:max-w-lg">
          <img
            class="w-full"
            src="@/assets/img/not-found.svg"
            alt="not found"
          />
        </div>
      </div>
    </BaseContainer>
  </AppPage>
</template>
<style scoped></style>
