<script setup lang="ts">
import { computed } from "vue";
import BaseTextInput from "@/components/partials/base/form/BaseTextInput.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
//props
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
//computed
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <BaseTextInput v-model="value" placeholder="Search..." icon-position="left">
    <template #icon>
      <IconSearch />
    </template>
  </BaseTextInput>
</template>

<style scoped></style>
