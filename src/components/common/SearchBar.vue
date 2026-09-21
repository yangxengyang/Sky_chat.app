<template>
  <div class="search-bar-wrapper">
    <Search :size="18" class="search-icon" />
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder || 'ຄົ້ນຫາ...'"
      class="search-input"
      @input="onInput"
    />
    <button v-if="modelValue" class="clear-btn" @click="emit('update:modelValue', '')">
      <X :size="16" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';

defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void;
}>();

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>

<style scoped>
.search-bar-wrapper {
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: var(--radius-full);
  padding: 8px 16px;
  gap: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--border-color);
  width: 100%;
}

.search-icon {
  color: var(--text-muted);
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.clear-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
