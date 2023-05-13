<script setup lang="ts">
import type { ButtonEmits, ButtonType, ButtonVariant, Size } from '..';

defineOptions({
  name: 'CustomButton',
});

export interface ButtonProps {
  size?: Size;
  disabled?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
  outline?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
}

const props = defineProps<ButtonProps>();
const emit = defineEmits<ButtonEmits>();

const classes = computed(() => [
  'custom-button',
  `custom-button--${props.size}`,
  props.variant ? `custom-button--${props.variant}` : '',
  // props.disabled ? 'custom-button--disabled' : '',
]);
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>


<style src="./button.css" />
