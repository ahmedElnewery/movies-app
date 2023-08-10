<script setup lang="ts">
import { Size, type TextInputProps } from "@/components/@types/input";
withDefaults(defineProps<TextInputProps>(), {
  size: Size.MEDIUM,
  type: "text",
});
const emit = defineEmits(["update:modelValue", "blur", "enter-press"]);
</script>
<template>
  <div class="relative">
    <input
      class="input"
      :class="[size === Size.MEDIUM ? 'md' : 'sm']"
      :value="modelValue"
      :type="type"
      v-bind="$attrs"
      autocomplete="off"
      :placeholder="placeholder"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="emit('blur')"
      @keyup.enter="emit('enter-press')"
    />
    <span
      class="icon"
      v-if="iconPosition"
      :class="[
        'text-muted-900',
        iconPosition === 'right' ? 'end-3' : 'start-3',
      ]"
    >
      <slot name="icon" />
    </span>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.input {
  @apply w-full text-muted-900 ps-12 pe-6 outline-0 rounded-full text-lg border border-muted-900 focus:border-primary shadow;
}
.input.sm {
  @apply py-1.5 !important;
}
.input.md {
  @apply py-3 !important;
}
.icon {
  @apply absolute top-1/2 z-10 -translate-y-1/2;
}
.input:focus + .icon {
  @apply text-primary !important;
}
</style>
