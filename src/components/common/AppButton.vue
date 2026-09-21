<template>
  <button
    class="app-btn"
    :class="[variant, size, { full: fullWidth, disabled: disabled || loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'text';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false
  }
);

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

function handleClick(e: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', e);
  }
}
</script>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 600;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: var(--transition-fast);
  outline: none;
}

.app-btn.full {
  width: 100%;
}

/* Variants */
.app-btn.primary {
  background-color: var(--primary-color);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(211, 47, 47, 0.35);
}
.app-btn.primary:hover:not(:disabled) {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
}

.app-btn.secondary {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

.app-btn.outline {
  background-color: transparent;
  border: 1.5px solid var(--primary-color);
  color: var(--primary-color);
}

.app-btn.danger {
  background-color: #dc2626;
  color: #ffffff;
}

.app-btn.text {
  background-color: transparent;
  color: var(--text-primary);
}

/* Sizes */
.app-btn.sm {
  padding: 6px 12px;
  font-size: 0.85rem;
}
.app-btn.md {
  padding: 12px 20px;
  font-size: 0.95rem;
}
.app-btn.lg {
  padding: 16px 28px;
  font-size: 1.05rem;
}

.app-btn:disabled, .app-btn.disabled {
  opacity: 0.55;
  cursor: not-allowed;
  box-shadow: none !important;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
