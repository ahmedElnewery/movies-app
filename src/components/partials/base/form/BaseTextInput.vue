<script setup lang="ts">
import type { TextInputProps } from "@/components/@types/input";
const { type = "text" } = defineProps<TextInputProps>();
const emit = defineEmits(["update:modelValue", "blur"]);
</script>
<template>
  <div class="relative">
    <input
      class="input"
      :value="modelValue"
      :type="type"
      v-bind="$attrs"
      autocomplete="off"
      :placeholder="placeholder"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="emit('blur')"
    />
    <span
      class="icon"
      v-if="iconPosition"
      :class="[iconPosition === 'right' ? 'end-3' : 'start-3']"
    >
      <slot name="icon" />
    </span>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.input {
  @apply w-full py-3 ps-12 pe-6 outline-0 rounded-full text-lg border border-muted-900 focus:border-primary shadow;
}
.icon {
  @apply absolute top-1/2 z-10 -translate-y-1/2;
}
.input:focus + .icon {
  @apply text-primary !important;
}
</style>
