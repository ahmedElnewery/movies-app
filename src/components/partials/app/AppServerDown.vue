<script setup lang="ts">
import BaseContainer from "../base/BaseContainer.vue";
import AppPage from "./AppPage.vue";
</script>
<template>
  <AppPage class="bg-muted-100">
    <BaseContainer>
      <div class="perfect-center pt-12">
        <div class="lg:max-w-lg w-60 sm:w-full">
          <img
            class="w-full mb-8"
            src="@/assets/img/server-down.svg"
            alt="server-down"
          />
          <p class="text-center text-lg font-medium">
            <span class="text-2xl text-primary font-semibold">Opps !</span>
            Server is down right now
          </p>
        </div>
      </div>
    </BaseContainer>
  </AppPage>
</template>
<style scoped></style>
