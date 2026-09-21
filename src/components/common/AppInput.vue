<template>
  <div class="input-field-group" :class="{ 'has-error': !!error }">
    <label v-if="label" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
      <span v-if="$slots.icon" class="prefix-icon">
        <slot name="icon"></slot>
      </span>

      <input
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="custom-input"
        @input="onInput"
      />

      <button
        v-if="type === 'password'"
        type="button"
        class="toggle-eye"
        @click="showPassword = !showPassword"
      >
        <Eye v-if="!showPassword" :size="18" />
        <EyeOff v-else :size="18" />
      </button>

      <slot name="action"></slot>
    </div>
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    placeholder?: string;
    type?: string;
    error?: string;
    disabled?: boolean;
  }>(),
  {
    type: 'text',
    disabled: false
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const showPassword = ref(false);

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password';
  }
  return props.type;
});

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>

<style scoped>
.input-field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.input-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0 14px;
  transition: var(--transition-fast);
}

.input-wrapper:focus-within {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.12);
}

.prefix-icon {
  display: flex;
  align-items: center;
  color: var(--text-muted);
  margin-right: 10px;
}

.custom-input {
  width: 100%;
  height: 48px;
  border: none;
  background: transparent;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
}

.toggle-eye {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

.has-error .input-wrapper {
  border-color: #ef4444;
}

.error-msg {
  font-size: 0.75rem;
  color: #ef4444;
}
</style>
