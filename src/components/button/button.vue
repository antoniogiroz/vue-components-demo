<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import type { Size } from '../component.types';
import type { ButtonType, ButtonVariant } from '.';
import { buttonEmits, type ButtonProps } from './button';



defineOptions({
  name: 'CustomButton',
});

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'md',
  type: 'button',
  variant: 'primary',
});

// const props = defineProps<ButtonProps>();
const emit = defineEmits(buttonEmits);

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
