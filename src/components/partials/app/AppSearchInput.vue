<script setup lang="ts">
import { computed } from "vue";
import BaseTextInput from "@/components/partials/base/form/BaseTextInput.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { Position, Size } from "@/components/@types/input";
type SearchInputProps = {
  modelValue: string;
  size?: Size;
};
//props
const props = defineProps<SearchInputProps>();
const emit = defineEmits(["update:modelValue", "enter-press"]);
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
  <BaseTextInput
    v-model="value"
    placeholder="Search.."
    :icon-position="Position.LEFT"
    :size="size"
    autoFocus
    @enter-press="emit('enter-press')"
  >
    <template #icon>
      <IconSearch />
    </template>
  </BaseTextInput>
</template>

<style scoped></style>
