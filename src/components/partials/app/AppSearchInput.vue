<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import { computed } from "vue";
import BaseTextInput from "@/components/partials/base/form/BaseTextInput.vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

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
  <BaseTextInput v-model="value" placeholder="Search" icon-position="left">
    <template #icon>
      <IconSearch />
    </template> </BaseTextInput
  >;
</template>

<style scoped></style>
@/components/@types/input
