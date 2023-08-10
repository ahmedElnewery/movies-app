<script setup lang="ts">
import type { TextInputProps } from "@/components/@types/input";
const { type = "text" } = defineProps<TextInputProps>();
</script>
<template>
  <div class="relative">
    <input
      class="w-full py-3 ps-12 pe-6 outline-0 rounded-full text-lg"
      :value="modelValue"
      :type="type"
      autocomplete="off"
      :placeholder="placeholder"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="$emit('blur')"
    />
    <span
      class="absolute top-1/2 z-10 -translate-y-1/2"
      v-if="iconPosition"
      :class="[iconPosition === 'right' ? 'end-3' : 'start-3']"
    >
      <slot name="icon" />
    </span>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped></style>
../../../@types/input.type @/components/@types/input
